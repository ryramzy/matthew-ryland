# Repository Notes: Architecture & Philosophy

## The Ethos
This repository is an operational manifestation of Matthew Ramsay's core philosophies—synthesizing raw journal entries and reflections from the 2026 Rio Residency.

**Core Directives:**
- **Clarity over complexity**: Reducing noise and focusing on essential execution.
- **Structural Design over Reactive Friction**: Building autonomous systems rather than reacting to external chaos.
- **Leverage without dependency**: Designing income and work structures that prioritize personal sovereignty.
- **Integration of Ancient and Modern**: Utilizing cutting-edge technology (Agentic AI, MCP) to achieve ancient states of alignment (Wu Wei).

## The Architect Shift
This repository represents the transition from "operator to systems architect in practice." It is the technical embodiment of a life path moving from seeking external access to building independent foundations. Relying on external social or environmental access creates "learned helplessness." This codebase is designed to be the exact opposite: a self-owned, self-directed asset.

## Core Architecture
The stack is designed to reflect Libertarian principles of self-ownership and nondualism's clarity of perception:
- **Next.js 14 App Router**: Provides modern React primitives while allowing for server-side execution and API integration.
- **Tailwind CSS**: Heavily customized to the `Street Luxury` aesthetic. We avoid utility bloat by defining strict, semantic color variables (`streetBlack`, `crispWhite`, `silver`, `surface`).
- **Markdown / MDX**: Content is King. Instead of relying on a bloated CMS, all blog posts and content are stored as raw markdown, ensuring data ownership and simple portability.

## The Autonomous Blogging Engine
The most complex mechanism in this repository is the autonomous blogging engine, designed to reflect the quiet shift to Agentic AI and structural autonomy.

### The Flow
1. **Trigger**: Vercel Cron hits `/api/generate-post` every Monday.
2. **Context Injection**: The API loads the permanent "Philosophy Document" (Matthew's worldview, voice, and system constraints).
3. **LLM Generation**: Claude/OpenAI generates a 800-word post based on rotating thematic seeds:
   - *Week A*: Lessons from current client work & project decisions
   - *Week B*: Philosophy deep dive (systems, sovereignty, wholeness)
   - *Week C*: Professional journey (origin, pivot, architect shift)
4. **Autonomous Commit**: The API wraps the generated text in MDX frontmatter and uses the GitHub API to commit the file directly to `/content/blog/`.
5. **Deployment**: Vercel detects the new commit and rebuilds the site. Zero manual steps.

## VIP Client Portal & Cybersecurity
To maintain a high-end, exclusive experience, the application implements a strict security posture:
- **Zero-Dependency VIP Auth**: A highly secure `/portal` route protected by Server Actions, strict rate-limiting, and `Secure`/`HttpOnly` cookies. High-value clients access direct booking links via a per-client JSON PIN mapping, allowing instant revocation without burning global access.
- **Content Security Policy (CSP)**: Strict origin enumeration prevents XSS, framing attacks, and unauthorized data injection, explicitly allowing only known embeds (Calendly, Unsplash, Vercel).

## Future Roadmap
- Expanding Agentic AI capabilities (MCP integration) to handle email processing and automated client intake.
- Replacing static content with localized database queries for true scalability across LATAM markets (English/Portuguese integration).
- Deepening the structural autonomy of the platform to serve as a hub for both technical execution and philosophical education.
