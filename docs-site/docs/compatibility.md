---
id: compatibility
title: Compatibility
---

# Compatibility

The GQAdonis fork targets the pinned official **Gherkin 43.0.0** language/compiler baseline. The foundation retains crate version 0.16.0 and Rust minimum 1.88. These are explicit, bounded compatibility changes, not universal conformance.

| Area | Adopted behavior and boundary |
| --- | --- |
| Step arguments | Table and docstring in either order; at most one of each |
| Vocabulary | Explicit official 80-dialect catalogue; legacy catalogue remains available |
| Docstrings | Explicit official content, media exclusion, dedent and delimiter/escape behavior |
| Tables | Explicit row-width handling plus adopted escaping and lexical/source-location behavior |
| Documents | Additive optional-Feature Document API; existing Feature API still requires a Feature |
| Markdown | Separate native typed source graph and projection; explicit Markdown matcher semantics |
| Source graph/compiler | Standard AST/Pickle conversion is implemented in the consuming Cucumber fork |

Select `GherkinEnv::new_latest` for the official dialect catalogue. `new`, `Default` and `is_language_supported` retain the legacy catalogue, including local extensions. Docstring, table and lexical policies remain independent opt-ins even with `new_latest`. The [getting-started example](./getting-started.md) shows all four choices.

The [dialect provenance](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/docs/gherkin43-dialects.md) pins official source commit `3d70e2bb4e0f16a568ee539a5ce0b03fb247a777` and its catalogue hashes. The root corpus covers all 62 official plaintext fixtures: 50 valid complete AST/Pickle matches and 12 invalid inputs rejected. Five official positive Markdown fixture graphs and additional boundaries are covered by the consumer. These finite fixtures do not prove arbitrary grammar states or exact official diagnostic wording, position or recovery.

Native `Document`/`Feature` structures are not themselves the standard Messages AST. Comments remain in the caller's original source. The consuming Cucumber `SourceGraph` combines retained sources with compilation metadata; the parser's Markdown module has its own typed source graph.

One upstream conflict remains: official Gherkin43 fallback Markdown Features can omit `keyword`, while pinned Messages34.2.1 and 35.0.0 schemas require it. The compiler preserves that absence instead of inventing source data. Explicit Feature headings avoid that particular shape.

Cucumber.js 13.3.0 uses Gherkin42.0.1/Messages34.2.1; official Gherkin43 uses Messages35. Language conformance and runner compatibility are separate targets. This parser does not supply JS worker behavior, JavaScript support-file execution, Behave or pytest-bdd adapters. See [evidence](./evidence.md) and the [consumer's pinned matrix](https://github.com/GQAdonis/cucumber/blob/6e4753fc0783038bb388de1b4d76055edc697b8f/docs/compatibility/CAPABILITIES.md).
