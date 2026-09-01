## 2025-05-19 - Adding Focus Visible Styles for Keyboard Navigation

**Learning:** Found that custom focus-visible styles missing on cards can impact keyboard navigation. Added pulse-glow to Home.tsx.
**Action:** Always verify focus-visible states on interactive elements like buttons and cards.

## 2025-05-19 - Improved FAQ Section Usability and Accessibility
**Learning:** Using interactive disclosure widgets (like an Accordion) for FAQ sections instead of static card lists significantly reduces cognitive load and saves screen space while improving keyboard navigation and accessibility (due to proper ARIA attributes).
**Action:** Default to using accordion patterns for long lists of Q&As or similar content to enhance usability and accessibility.

## 2025-05-19 - Accessible External Links and Focus States
**Learning:** External links (`target="_blank"`) without context can confuse screen reader users, and footer links often lack visible focus states (relying only on hover), impairing keyboard navigation.
**Action:** Always add an invisible screen reader description (e.g., `<span className="sr-only"> (abre em nova aba)</span>`) to external links, hide decorative icons with `aria-hidden="true"`, and ensure textual links have explicit `focus-visible` styles.
