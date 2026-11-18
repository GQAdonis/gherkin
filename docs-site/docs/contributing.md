---
id: contributing
title: Contributing
---

# Contributing

Keep parser changes small enough to review against a pinned upstream language contract. Preserve existing defaults with explicit policy choices, and retain original source bytes, provenance and applicable licenses.

Author behavior acceptance scenarios before implementation. Run only the focused BDD boundary after the whole phase is complete; do not introduce unit suites, generic Cargo test runs or early build/check/lint/import probes. Preserve failing attempts and final evidence. The existing build/release process stays intact; this documentation package is additive.

Parser production changes must stay consistent with the consuming Cucumber vendor snapshot and its provenance record. The [dialect record](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/docs/gherkin43-dialects.md) shows source identity and licensing requirements. Standard Messages graph behavior belongs to the consumer as well as the parser; test the actual affected boundary rather than assuming native AST equality proves protocol compatibility.

After implementation and behavioral verification, an independent audit must review both repositories, including correctness, compatibility defaults, safety, maintainability, documentation and packaging. Later Rust SDK/FFI/wrapper additions belong in that review too. Retain findings, reviewer identity/limitations and dispositions; material behavioral corrections need their own complete BDD boundary. No clean-code, external/cross-model review or canonical certification is claimed here.

Only after completion and review, inspect current upstream contribution rules and existing issues, then prepare matching issues and reviewable pull requests. Submit parser dependencies before dependent runner/protocol contributions. Cucumber upstream [#391](https://github.com/cucumber-rs/cucumber/pull/391) and [#405](https://github.com/cucumber-rs/cucumber/pull/405) are unverified overlap leads for the companion work, not proof of duplicate parser changes. No completion issues or pull requests are claimed.

This is GQAdonis fork documentation, not endorsed by upstream. The code retains its [MIT](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/LICENSE-MIT) or [Apache-2.0](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/LICENSE-APACHE) license choices and the [official Gherkin notice](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/src/LICENSE-GHERKIN). Logo trademark permission is not assumed. Fork Pages delivery is separately authorized; registry publication retains its existing gate.
