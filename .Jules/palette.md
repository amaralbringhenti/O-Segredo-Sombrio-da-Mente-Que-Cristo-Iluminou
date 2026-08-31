## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.

## 2025-05-19 - Accessible and Interactive Scroll Indicators
**Learning:** Found that static scroll indicators limit accessibility and interactivity, leaving keyboard and screen reader users without a clear path forward.
**Action:** Always wrap visual scroll indicators in anchor tags with valid `href` attributes, proper `aria-label`s, and focus-visible styles to make them interactive and accessible. Ensure smooth scrolling is enabled for a delightful experience.
