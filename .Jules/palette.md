## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.

## 2025-05-19 - Converting Decorative Indicators to Accessible Skip Links
**Learning:** Decorative "scroll down" animations (like bouncing arrows) can cause frustration for keyboard and screen reader users if they aren't interactive. Converting them to accessible anchor links with proper focus styles (`focus-visible`) and `aria-label` provides a functional "skip to content" behavior.
**Action:** Always ensure that visual cues implying interaction or navigation (like scroll indicators) are implemented as functional, accessible links or buttons.
