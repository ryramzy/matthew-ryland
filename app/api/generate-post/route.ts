import { NextResponse } from 'next/server'

// Keep edge runtime to ensure it runs fast and doesn't timeout if possible,
// but LLM calls might take up to 30-60s so Node runtime is often safer for Vercel Hobby tier.
export const maxDuration = 60; // Max duration for hobby is 60s, pro is 300s
export const dynamic = 'force-dynamic'; 

const SYSTEM_PROMPT = `
You are Matthew Ramsay, a Global Systems Strategist, Cloud Architect, and Tech Consulting Executive.
Your philosophy centers around "Systems, Sovereignty, and Wholeness". You value clarity over complexity, execution over theory, and systems that adapt over systems that assume. 
You are writing a weekly automated blog post reflecting on your journey, lessons learned, and system architecture.

Write a raw markdown blog post (approx 600-800 words) in your voice. Do not use generic tech-bro fluff. Use sharp, professional, authoritative vocabulary.
The output MUST be only the raw markdown content. No markdown code blocks surrounding it, just the raw text.

You must include the following MDX Frontmatter at the very top of your output:
---
title: "[A compelling, sharp title]"
date: "[Today's date in YYYY-MM-DD format]"
tags: ["philosophy", "systems", "architecture", "etc"]
---

[Your markdown content here]
`

export async function GET(request: Request) {
  try {
    // 1. Verify cron secret to prevent unauthorized execution
    const authHeader = request.headers.get('authorization')
    if (
      process.env.CRON_SECRET && 
      authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!process.env.ANTHROPIC_API_KEY || !process.env.GITHUB_PAT) {
      return NextResponse.json({ error: 'Missing API Keys' }, { status: 500 })
    }

    // Determine Theme based on week of the year
    const weekNum = getWeekNumber(new Date())
    const themes = [
      "Lessons from current client work & project decisions",
      "Philosophy deep dive — systems, sovereignty, wholeness",
      "Professional journey — origin, pivot, architect shift"
    ]
    const currentTheme = themes[weekNum % 3]

    // 2. Call Claude API to generate post
    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 2000,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: `Today's date is ${new Date().toISOString().split('T')[0]}. Write this week's blog post focusing on the theme: "${currentTheme}".`
          }
        ]
      })
    })

    if (!claudeResponse.ok) {
      const errorText = await claudeResponse.text()
      throw new Error(`Claude API Error: ${errorText}`)
    }

    const claudeData = await claudeResponse.json()
    const generatedMarkdown = claudeData.content[0].text.trim()

    // 3. Extract slug from generated frontmatter (fallback to timestamp)
    let slug = `automated-post-${Date.now()}`
    const titleMatch = generatedMarkdown.match(/title:\s*"?([^"\n]+)"?/)
    if (titleMatch && titleMatch[1]) {
      slug = titleMatch[1]
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
    }

    const fileName = `${slug}.mdx`
    const repo = process.env.GITHUB_REPO || 'ryramzy/matthew-ryland'

    // 4. Push to GitHub using GitHub API
    const githubResponse = await fetch(`https://api.github.com/repos/${repo}/contents/content/blog/${fileName}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_PAT}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `Auto-publish weekly blog: ${slug}`,
        content: Buffer.from(generatedMarkdown).toString('base64'),
        branch: 'main'
      })
    })

    if (!githubResponse.ok) {
      const errorText = await githubResponse.text()
      throw new Error(`GitHub API Error: ${errorText}`)
    }

    return NextResponse.json({ 
      success: true, 
      message: `Post ${fileName} generated and pushed successfully.`
    })

  } catch (error: any) {
    console.error('Cron Blog Generation Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

function getWeekNumber(d: Date) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
  return weekNo
}
