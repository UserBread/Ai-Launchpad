# Security Notes

This is currently a frontend-only scaffold. Do not add real provider API keys to client-side code or `NEXT_PUBLIC_*` environment variables. When server integrations arrive, use server-only environment variables or a dedicated secrets manager, validate inputs, enforce rate limits, and apply least-privilege permissions to tools and workflow nodes.
