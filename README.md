# Matthew Ramsay | Global Systems Strategist

A modern, performant digital portfolio and content platform reflecting a philosophy of clarity, execution, and integration. Operating at the intersection of infrastructure, education, and platform design.

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
   LLM_API_KEY="your_ai_api_key_here"
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

## Automated Blog Architecture

This repository features an autonomous blogging engine. A Vercel Cron Job fires weekly, triggering an API route that queries an LLM with a permanent system prompt of Matthew's core philosophies. The LLM generates a markdown post in his exact voice, and the API pushes the file directly to this GitHub repository, triggering an automatic Vercel deployment.

## License

MIT
