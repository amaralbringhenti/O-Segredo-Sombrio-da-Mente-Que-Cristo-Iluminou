## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility

**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.

## 2025-05-19 - Radix UI Dialog Accessibility Warning

**Learning:** Radix UI Dialog components must always have a `DialogTitle` rendered for screen readers, even if the design does not call for a visible title. Missing this causes accessibility warnings and poor screen reader experiences.
**Action:** Always include a `DialogTitle` in Radix UI modal components. If no visible title is needed by the design, provide a visually hidden one using Tailwind's `sr-only` class.