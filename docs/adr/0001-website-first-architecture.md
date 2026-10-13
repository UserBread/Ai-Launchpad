# ADR 0001: Start with a website-first modular application

- **Status:** Accepted
- **Date:** 2026-10-12

## Context
The product vision includes a broad AI directory and, eventually, workflow composition and execution. Building orchestration infrastructure before validating discovery would add unnecessary complexity.

## Decision
Start with Next.js App Router, React, TypeScript, and Tailwind CSS in one repository. Keep catalogue data, UI, and future workflow services in clear modules. Use static/mock data until a real data pipeline is justified.

## Consequences
### Positive
- Fast iteration on UX and content structure
- One deployment unit and straightforward developer setup
- Type safety across the UI
- Clear path to add APIs and workflow modules later

### Negative
- Requires discipline to keep route components from becoming monolithic
- May need extraction or a separate worker when workflow execution becomes substantial
