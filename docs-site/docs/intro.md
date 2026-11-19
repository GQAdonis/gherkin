---
id: intro
slug: /
title: Gherkin for Rust
---

# Gherkin for Rust

Parse reusable behavior specifications in native Rust with explicit Gherkin43 policies and source-preserving Markdown support.

This is the **GQAdonis fork** of cucumber-rs/gherkin. This documentation is **not endorsed** by the upstream Cucumber projects. The parser changes are preserved in the verified through-phase45 foundation; universal language conformance is not claimed.

## Start here: can a patron place a library hold?

A patron should be able to place a hold on an unavailable book and see the hold in their account. A scenario records the rule: **Given** the book is unavailable, **when** the patron places a hold, **then** the account shows that hold.

**Gherkin reads** the scenario and identifies its name, steps and source locations. It does not place a hold or check an account. If you need to exercise the application and prove the hold appears, use [Cucumber for Rust](https://gqadonis.github.io/cucumber/) to run the step definitions. Use [the pinned Rust walkthrough](./getting-started.md) to inspect a parsed scenario.

Start with a [pinned checkout](./getting-started.md), review the [compatibility policies](./compatibility.md), and inspect the [retained evidence](./evidence.md). This fork is the only dependency fork needed for the current Cucumber interoperability work. Its production source is also bundled in the GQAdonis Cucumber checkout, so Cucumber consumers do not need a separate parser clone.

The parser handles native Feature/Document structures and provides a separate typed Markdown source graph. Standard source-preserving AST/Pickle compilation lives in the [Cucumber consumer](https://github.com/GQAdonis/cucumber/blob/6e4753fc0783038bb388de1b4d76055edc697b8f/src/writer/messages/source.rs). The parser alone does not execute scenarios or provide language-framework parity.

This additive Docusaurus site preserves the established build/release process. The [fork Pages site](https://gqadonis.github.io/gherkin/) is separate from package distribution. No new crates.io release is claimed. The companion [Cucumber SDK guide](https://gqadonis.github.io/cucumber/sdk/) documents local Darwin arm64 compiler/rerun wrappers, not registry packages or a foreign-language step runner. See [contributing](./contributing.md) for review and upstream contribution gates.
