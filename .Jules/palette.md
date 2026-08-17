## 2026-08-17 - [Screen Reader Optimizaton] Semantic Grouping of Repetitive Icons
**Learning:** Repeated icons like stars for ratings cause screen readers to read "star" multiple times consecutively.
**Action:** Wrap repeated icons in a div with `role="img"` and `aria-label` (e.g., "Avaliação: 5 de 5 estrelas"), and add `aria-hidden="true"` to the individual icons.
