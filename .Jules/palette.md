## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.

## 2025-05-19 - Semantic Roles for Decorative Interactive Elements
**Learning:** Decorative elements that act as visual cues for interactivity (like bouncing scroll indicators) are often implemented as non-semantic `div`s, which are inaccessible to screen readers and keyboard users.
**Action:** When creating visual scroll or progress indicators that can be clicked, always implement them using semantic `<button>` tags with proper `aria-label`s and `focus-visible` styles to ensure full accessibility.
