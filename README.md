# AI Launchpad

A polished, Apple-inspired launchpad for discovering AI models, tools, and workflows.

> Visual direction: editorial product storytelling, generous whitespace, oversized typography, restrained color, rounded surfaces, and deliberate motion. This is inspiration from Apple's presentation style—not a copy of Apple's branding, assets, or exact page designs.

## Current scope
This repository starts as a website-first product:
- Discover AI tools, models, and workflows
- Explore curated collections and featured releases
- Learn what a workflow is and how it connects models, agents, and tools
- Responsive marketing/landing page foundation

Future directions can include model comparisons, saved collections, workflow templates, visual workflow builder, provider connectors, and workflow execution/observability.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- ESLint
- Lucide React icons

## Getting started
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Project structure
See `docs/ARCHITECTURE.md` for the structure and intended boundaries.

## Principles
1. Build the discovery experience before execution infrastructure.
2. Keep provider-specific logic behind adapters when integrations arrive.
3. Store curated catalogue data separately from UI components.
4. Prioritise accessibility, responsive design, performance, and clear provenance for AI information.
