# Draft contribution delivery — 2026-11-18

All four PRs were verified open, draft and unmerged through GitHub API after creation. Issues were created before their matching upstream PRs. No merge, registry operation, new behavior execution or mature workflow change was performed during this preparation.

| Route | Head repository:branch | Base repository:branch | Proposal | Draft PR |
| --- | --- | --- | --- | --- |
| Cucumber fork | GQAdonis/cucumber:foundation/rust-bdd-sdk | GQAdonis/cucumber:main | — | https://github.com/GQAdonis/cucumber/pull/1 |
| Gherkin fork | GQAdonis/gherkin:foundation/rust-bdd-sdk | GQAdonis/gherkin:main | — | https://github.com/GQAdonis/gherkin/pull/1 |
| Cucumber upstream | GQAdonis/cucumber:contribution/native-bdd-foundation | cucumber-rs/cucumber:main | https://github.com/cucumber-rs/cucumber/issues/409 | https://github.com/cucumber-rs/cucumber/pull/410 |
| Gherkin upstream | GQAdonis/gherkin:contribution/gherkin43-profile | cucumber-rs/gherkin:main | https://github.com/cucumber-rs/gherkin/issues/67 | https://github.com/cucumber-rs/gherkin/pull/68 |

Preserved reflection checkpoints: Cucumber35a17f5baa07077aa21d3ab03065865ba0f339c8; Gherkin862d6055951e49b3a637d1ce9aa3f8d5611650f5. Upstream draft heads: Cucumber6faab87e62ac7549fc8a964d9fbf202a1c157942; Gherkin1be76349d2cbf4b455f2739a4d40f4255ced4978. Original upstream main baselines were d95872541ee2a43d71089c64bd3fa8848e24c922 and4c30e3a48a0226bf907053a0a9e738e91cf06727 respectively.

Production source and executable acceptance harnesses in the upstream drafts were compared byte-for-byte with preserved fork checkpoints, with no differences. This source comparison is contribution review, not fresh runtime acceptance. Upstream draft documentation omits hosting/branding, canonical journals/signatures and bulk output; it links historical evidence. Cucumber retains two immutable SDK schema/oracle inputs under their existing .kbd-orchestrator paths because the harness consumes them; no runtime authority is included.

Retained evidence: Cucumber root87/348 and affected106/460, SDK22/66; Gherkin consumer parser73/241; paired sites local10/64 and public4/22. Native SDK environment: Darwin arm64, Rust1.88, Node26.5, CPython3.11.3, TypeScript6.0.3. No new tests/builds/lints were run for draft preparation; automatic hosting/upstream CI results are not represented as local BDD proof.

Review and merge limits remain explicit: parser baseline38/43 overlap (Gherkin PR60–64 plus56/58/65); Cucumber hooks391 and distinct process sharding405; parser release/dependency policy for registry packaging; formatting/lint acceptance; full programme audit and broader platform/license closure. The Cucumber upstream draft is substantial and needs maintainer-agreed subdivision before merge. AI assistance and bounded review identities are disclosed.

KBD phase46 remains CLOSED/PASS. The supported run-global sdk46-reflection-supplement records authored reflection without falsely registering a missing immutable Reflect stage. Its limitation is not silently cleared. Next foreign-execution scope is proposed only: no successor signature/adoption or implementation was performed during this submission milestone.
