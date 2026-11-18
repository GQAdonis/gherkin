---
id: intro
slug: /
title: Gherkin for Rust
---

# Gherkin for Rust

Parse reusable behavior specifications in native Rust with explicit Gherkin43 policies and source-preserving Markdown support.

This is the **GQAdonis fork** of cucumber-rs/gherkin. This documentation is **not endorsed** by the upstream Cucumber projects. The parser changes are preserved in the verified through-phase45 foundation; universal language conformance is not claimed.

Start with a [pinned checkout](./getting-started.md), review the [compatibility policies](./compatibility.md), and inspect the [retained evidence](./evidence.md). This fork is the only dependency fork needed for the current Cucumber interoperability work. Its production source is also bundled in the GQAdonis Cucumber checkout, so Cucumber consumers do not need a separate parser clone.

The parser handles native Feature/Document structures and provides a separate typed Markdown source graph. Standard source-preserving AST/Pickle compilation lives in the [Cucumber consumer](https://github.com/GQAdonis/cucumber/blob/6e4753fc0783038bb388de1b4d76055edc697b8f/src/writer/messages/source.rs). The parser alone does not execute scenarios or provide language-framework parity.

This additive Docusaurus site preserves the established build/release process. Hosting is undecided; no deployment or new crates.io release is claimed. The requested shared native SDK and TypeScript/Python bindings remain proposed. See [contributing](./contributing.md) for review and upstream contribution gates.
