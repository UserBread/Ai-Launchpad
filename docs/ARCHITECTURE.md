# Architecture and Repository Guide

## Product direction
The initial release is a responsive, Apple-inspired editorial website for AI discovery. Keep the first version deliberately website-first; workflow execution and provider integrations are future milestones.

## Directory map

```text
ai-launchpad/
├── public/
│   ├── images/                 # Local optimised imagery and illustrations
│   ├── icons/                  # Favicons and app icons
│   └── fonts/                  # Self-hosted fonts, if licensed
├── src/
│   ├── app/                    # Next.js routes, layouts, global styles
│   │   ├── (marketing)/        # Future marketing pages route group
│   │   ├── (catalogue)/        # Future discovery/catalogue route group
│   │   ├── api/                # Future API routes
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/             # Navigation, footer, page shell
│   │   ├── ui/                 # Buttons, badges, cards, search field
│   │   ├── catalogue/           # Model/tool/workflow cards and filters
│   │   └── workflow/           # Workflow previews and node visuals
│   ├── features/
│   │   ├── discovery/           # Search, filters, collections
│   │   ├── model-profiles/      # Model profile pages
│   │   ├── tool-profiles/       # AI product profile pages
│   │   ├── workflows/           # Templates, definitions, execution UI later
│   │   └── comparisons/         # Compare models and tools
│   ├── data/
│   │   ├── models/              # Curated model catalogue
│   │   ├── tools/               # Curated product catalogue
│   │   ├── workflows/           # Example workflow definitions
│   │   └── collections/         # Editorial collections
│   ├── lib/
│   │   ├── utils/               # General utilities
│   │   ├── validation/          # Shared schemas/validation
│   │   └── constants.ts
│   ├── types/                   # Shared TypeScript types
│   └── server/                  # Server-only services; keep secrets here
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── adr/                     # Architecture Decision Records
│   ├── product/                 # Vision, scope, personas, roadmap
│   ├── design/                  # Design system and UI principles
│   └── ARCHITECTURE.md
├── .github/
│   ├── workflows/               # CI, lint, typecheck, build
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── .env.example
├── package.json
└── README.md
```

## Future backend boundaries
When execution features are introduced, consider distinct modules for:
- **Provider adapters:** provider-specific API details hidden behind common interfaces.
- **Model registry:** capabilities, supported inputs/outputs, pricing source and last-verified date.
- **Workflow definitions:** validated directed graphs of nodes and edges.
- **Workflow runtime:** execution state, retries, timeouts, cancellation and concurrency.
- **Tool registry:** safe, permissioned access to search, files, databases and external tools.
- **Observability:** run traces, latency, token usage, cost estimates, and failures.

Do not introduce microservices prematurely. Start with a modular Next.js application and split components only when scale or deployment requirements justify it.
