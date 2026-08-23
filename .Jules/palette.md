## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.
## 2026-08-23 - [External Links Accessibility]
**Learning:** Using `target="_blank"` for external links without indicating to screen reader users that a new tab will open can be disorienting.
**Action:** Always include a visually hidden text (e.g. `<span className="sr-only"> (opens in a new tab)</span>`) or `aria-label` alongside the link text so assistive technologies properly announce the behavior.
