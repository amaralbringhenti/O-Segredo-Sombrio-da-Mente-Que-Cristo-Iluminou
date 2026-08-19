## 2024-08-19 - Accessible Scroll Indicators
**Learning:** Visual-only animated scroll indicators are a common pattern that lacks keyboard accessibility and interactivity. Converting them to `<button>` elements with `aria-label`, focus rings (`focus-visible`), and `onClick` smooth-scroll handlers significantly improves usability for both keyboard and mouse/touch users.
**Action:** When adding or encountering "scroll down" animations, always wrap them in an interactive element with proper ARIA labels and focus states.
