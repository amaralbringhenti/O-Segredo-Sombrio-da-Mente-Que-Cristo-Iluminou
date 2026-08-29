## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.
## 2026-08-29 - Scroll Indicator Interactivity
**Learning:** Found that an un-clickable animated visual scroll indicator is an accessibility barrier because it gives visual cue for 'scroll down' but cannot be operated by keyboard or mouse. Changing such visual cues to functional anchor links improves overall UX.
**Action:** Convert purely decorative visual indicator div elements intended for scrolling into semantic 'a' anchor tags with focus styles and proper aria labels.
