## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.
## 2024-05-15 - Making Animated Indicators Interactive and Accessible
**Learning:** Purely visual animated elements (like a bouncing scroll indicator) are often interpreted by users as interactive buttons, yet lack focus states, ARIA labels, and keyboard support. This creates a missed opportunity for interaction and accessibility.
**Action:** When adding animated "scroll down" indicators or similar directional visual cues, implement them as native `<button>` elements with `aria-label`, visible focus states (`focus-visible`), and an `onClick` handler utilizing `scrollIntoView({ behavior: "smooth" })` to provide a delightful and inclusive UX.
