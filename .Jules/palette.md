## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.

## 2025-05-20 - Making Decorative Scroll Indicators Functional and Accessible
**Learning:** Decorative elements that strongly suggest interactivity (like a bouncing scroll indicator) often frustrate users when they click them and nothing happens. They should be converted to functional interactive elements (buttons) with proper ARIA labels and focus states.
**Action:** When adding animated UI elements that look interactive, make them functional and ensure they are accessible via keyboard and screen readers.
