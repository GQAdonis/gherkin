---
id: getting-started
title: Getting started
---

# Getting started

Use a **pinned checkout** of the GQAdonis fork with Rust 1.88 or later. The crate retains version 0.16.0, but these fork changes are not a published crates.io release.

Place the checkout beside your application:

```sh
git clone https://github.com/GQAdonis/gherkin.git gherkin
git -C gherkin checkout --detach efb91e8bb5a7d59a717f88c05d1c06ec5d06a819
```

For an application in a sibling directory, use the full checkout as a path dependency and retain the application's lockfile:

```toml
[dependencies]
gherkin = { path = "../gherkin" }
```

The default `parser` feature enables the parsing APIs. Explicitly select the adopted language policies:

```rust
use gherkin::{
    DocStringSemantics, Document, GherkinEnv,
    LexicalSemantics, TableSemantics,
};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let env = GherkinEnv::new_latest("en")?
        .with_docstring_semantics(DocStringSemantics::Gherkin43)
        .with_table_semantics(TableSemantics::Gherkin43)
        .with_lexical_semantics(LexicalSemantics::Gherkin43);

    let source = r#"Feature: Reusable specification
  Scenario: Preserve a step
    Given a native parser
"#;
    let document = Document::parse(source, env)?;
    if let Some(feature) = document.feature {
        println!("{}", feature.name);
    }
    Ok(())
}
```

`new_latest` selects the Gherkin43 vocabulary only. The three builders select docstring, table and lexical behavior independently; omitting them retains their legacy defaults. See the [actual environment API](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/src/parser.rs) and [Document implementation](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/src/lib.rs).

`Document::parse` permits an absent Feature for accepted empty/comment-only documents. `Feature::parse` still requires a Feature. `Document::parse_file_source(path, source, env)` parses supplied bytes while retaining path identity without rereading a file. Preserve the original source separately when comments and protocol fidelity matter.

For explicit Markdown syntax, use `gherkin::markdown::MarkdownDocument::parse(source, "en")`; `to_feature()` or `to_feature_at(path)` projects native execution structures. This is the Gherkin Markdown matcher, not a general CommonMark renderer or a parser for fenced classic Gherkin blocks. See the [Markdown API](https://github.com/GQAdonis/gherkin/blob/efb91e8bb5a7d59a717f88c05d1c06ec5d06a819/docs/gherkin43-markdown.md).

The example above follows existing APIs; it is not a separate new execution claim. Review [compatibility](./compatibility.md) and [evidence](./evidence.md) before selecting a policy for existing consumers.
