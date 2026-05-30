# Repository Notes: Architecture & Philosophy

## The Ethos
This repository is not just a digital resume; it is an operational manifestation of Matthew Ramsay's core philosophies:
- **Clarity over complexity**
- **Execution over theory**
- **Systems that adapt, not systems that assume**

## Core Architecture
The stack is designed for **leverage without dependency**:
- **Next.js 14 App Router**: Provides modern React primitives while allowing for server-side execution and API integration.
- **Tailwind CSS**: Heavily customized to the `Street Luxury` aesthetic. We avoid utility bloat by defining strict, semantic color variables (`streetBlack`, `crispWhite`, `silver`, `surface`).
- **Markdown / MDX**: Content is King. Instead of relying on a bloated CMS, all blog posts and content are stored as raw markdown, ensuring data ownership and simple portability.

## The Automated Blogging Engine
The most complex mechanism in this repository is the autonomous blogging engine designed to reflect the transition from "operator to systems architect in practice."

### The Flow
1. **Trigger**: Vercel Cron hits `/api/generate-post` every Monday.
2. **Context Injection**: The API loads the permanent "Philosophy Document" (Matthew's worldview, voice, and system constraints).
3. **LLM Generation**: Claude/OpenAI generates a 800-word post based on rotating thematic seeds:
   - *Week A*: Lessons from current client work & project decisions
   - *Week B*: Philosophy deep dive (systems, sovereignty, wholeness)
   - *Week C*: Professional journey (origin, pivot, architect shift)
4. **Autonomous Commit**: The API wraps the generated text in MDX frontmatter and uses the GitHub API to commit the file directly to `/content/blog/`.
5. **Deployment**: Vercel detects the new commit and rebuilds the site. Zero manual steps.

## Future Roadmap
- Expanding the AI agentic capabilities to handle email processing and automated client intake.
- Replacing static content with localized database queries for true scalability across LATAM markets.
