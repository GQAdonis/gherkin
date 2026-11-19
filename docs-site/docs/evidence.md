---
id: evidence
title: Evidence
---

# Evidence

The parser foundation is preserved in commit [efb91e8](https://github.com/GQAdonis/gherkin/commit/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819) on `foundation/rust-bdd-sdk`. Its source snapshot is bundled in the corresponding [Cucumber foundation commit](https://github.com/GQAdonis/cucumber/commit/6e4753fc0783038bb388de1b4d76055edc697b8f). No registry release is implied.

| Completed acceptance | Passed scenarios / steps | Source record |
| --- | --- | --- |
| Latest focused sibling parser BDD on Rust1.88 | 73 / 241 | [Original parser log](https://github.com/GQAdonis/cucumber/blob/6e4753fc0783038bb388de1b4d76055edc697b8f/docs/compatibility/evidence/phase45-parser-affected-bdd.log) |
| Official plaintext corpus in the consumer | 62 / 236 | [Corpus contract and result](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/docs/gherkin43-corpus.md) |
| Native Markdown source graph, including five official positive fixtures | 21 / 78 | [Markdown contract and result](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/docs/gherkin43-markdown.md) |
| Classic lexical policy in the consumer | 25 / 110 | [Lexical contract and result](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/docs/gherkin43-lexical.md) |

Counts belong to separate bounded runs and overlap. Do not add them into a unique coverage total. The [consumer's phase43–45 boundary record](https://github.com/GQAdonis/cucumber/blob/6e4753fc0783038bb388de1b4d76055edc697b8f/docs/compatibility/PHASE43-45-BOUNDARY.md) records latest Markdown precedence and affected integration results. Initial failures and corrective runs remain in historical evidence; an earlier pending/local-only statement is not the final preservation status.

Scenarios were authored before implementation, and only focused BDD acceptance ran at completed phase boundaries. The parser's `step_arguments` target is a dedicated Cucumber executable with `harness = false`; its name is historical and its scenarios also cover later parser contracts. No generic or unit-suite result is claimed.

This evidence supports the foundation through phase45. It does not certify the companion SDK, this documentation site, full parity or canonical KBD completion. The [Cucumber SDK guide](https://gqadonis.github.io/cucumber/sdk/) records separate machine-specific wrapper proof. See [maintainer review status](./contributing.md#maintainer-review-status) for the distinction between open PRs and release. The final independent audit remains a separate gate; see [contributing](./contributing.md) and [compatibility](./compatibility.md).
