# Matthew Ramsay | Global Systems Strategist

A modern, performant digital portfolio and autonomous content platform reflecting a profound philosophical shift: the transition from "operator" to "systems architect." This repository represents the integration of inherited identity with intended purpose, emphasizing structural design over reactive friction. Operating at the intersection of infrastructure, education, and platform design, the codebase is designed for leverage without dependency.

## Architecture & Infrastructure

Built on the foundation of the "Street Luxury" design system, prioritizing depth, high contrast, and structural precision over visual noise.

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom Monochromatic System)
- **Content**: MDX (Markdown + React Components)
- **Deployment**: Vercel
- **Automation**: Vercel Cron + LLM API + GitHub API for autonomous content generation.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables (create a `.env.local` file):
   ```bash
   # Required for Automated Weekly Blog
   GITHUB_PAT="your_github_personal_access_token"
   ANTHROPIC_API_KEY="your_anthropic_api_key_here"
   CRON_SECRET="your_cron_auth_secret"

   # Required for VIP Client Portal
   CLIENT_PORTAL_PINS='{"123456": "Client A", "987654": "Client B"}'
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Design System

The platform utilizes a customized, high-contrast palette:
- `streetBlack`: The void. Foundation color.
- `surface`: Elevated layers for structure.
- `card`: Interactive element background.
- `border`: Subtle delineations.
- `silver` & `crispWhite`: High-contrast typography.

## STORM-Inspired Autonomous Blogging Engine

This repository features an autonomous blogging engine powered by Claude 3 Haiku. A Vercel Cron Job fires weekly, triggering a sophisticated multi-step reasoning pipeline:
1. **Context Injection**: The engine autonomously fetches the latest repository commits and `REPO_NOTES.md` from the GitHub API.
2. **Research Step**: The AI generates a structured outline and identifies profound architectural questions based on the injected context.
3. **Drafting Step**: The AI weaves the outline and context into a final MDX post and commits it directly to the repository, triggering an automatic deployment.

## VIP Client Portal & Cybersecurity

To maintain a high-end, exclusive experience, the application implements a strict security posture:
- **Zero-Dependency VIP Auth**: A highly secure `/portal` route protected by Server Actions, strict rate-limiting (5 attempts/15 mins), and `Secure`/`HttpOnly` cookies. High-value clients access direct booking links via a per-client JSON PIN mapping.
- **Content Security Policy (CSP)**: Strict origin enumeration prevents XSS and framing attacks, explicitly allowing only known embeds (Calendly, Unsplash, Vercel).

## License

MIT
