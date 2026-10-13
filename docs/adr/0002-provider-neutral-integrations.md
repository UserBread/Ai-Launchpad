# ADR 0002: Keep future AI integrations provider-neutral

- **Status:** Proposed
- **Date:** 2026-10-12

## Context
The long-term idea includes connectors for multiple models and tools, plus workflows that can use different providers.

## Decision
When integrations are added, define internal capability and execution interfaces before adding provider-specific adapters. Store provider identifiers and capability metadata as data; do not let UI components call vendor SDKs directly.

## Consequences
- New providers can be added without rewriting product UI.
- Feature support differs between providers and must be represented explicitly.
- Common interfaces should not erase provider-specific capabilities that users need to understand.
