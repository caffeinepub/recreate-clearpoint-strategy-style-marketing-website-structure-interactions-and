# Specification

## Summary
**Goal:** Build a multi-page, responsive B2B strategy/software marketing website that mirrors the structure and interaction patterns of clearpointstrategy.com, using entirely original copy and newly generated visuals, and includes a working Contact form backed by a Motoko canister.

**Planned changes:**
- Create site-wide layout with header navigation (logo area, primary links, header CTAs) and footer, matching the reference site’s information architecture (without copying assets/text).
- Implement primary pages: Home, Platform/Product, Services/Solutions, Resources (listing + detail), About, and Contact with client-side routing.
- Build a section-based homepage (hero with CTAs and hero visual; social proof strip; feature/value cards; benefits; testimonial/case study preview; resources preview; final CTA band).
- Implement Resources templates: listing grid of cards and a detail page (cover image, title, summary, body, author/date, related items) seeded with at least 6 original items; ensure deep links work on refresh.
- Add Contact form with validation and success/error states; persist submissions in a single Motoko actor with stable storage and expose `createSubmission` and `listSubmissions` APIs (list API not surfaced in UI).
- Apply a coherent, non-blue/purple-dominant visual theme with consistent typography, spacing, buttons/cards, hover/focus states, and subtle reduced-motion-respecting scroll animations.
- Add basic SEO + social metadata per primary route (unique title/description, OpenGraph tags pointing to a generated OG image) and accessible semantics (landmarks, headings, alt text).
- Deliver a complete runnable project (frontend + Motoko backend) that builds and works end-to-end in the Internet Computer template environment.

**User-visible outcome:** Users can navigate a polished, responsive marketing site with multiple pages, browse a Resources list and read detail articles, and submit a Contact form that saves submissions to the backend and confirms success.
