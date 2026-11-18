# Gherkin fork reflection and draft contribution review

2026-11-18. Delivered production commit efb91e8 against upstream4c30e3a adds opt-in Gherkin43 dialect/lexical/table/docstring policies, both argument orders, additive Document parsing and source-preserving Markdown. Existing defaults/public string representation are retained. No crate publication or universal conformance is claimed.

Independent internal reviewer /root/gherkin_contribution_review read source changes and retained evidence, finding no new definite runtime defect in this bounded sample. This is not exhaustive whole-codebase clearance. Parser receipt in the consuming Cucumber fork records73 scenarios/241 steps passed on Rust1.88. Additional documented plaintext62/236, Markdown21/78 and runtime14/54 packets remain historical consumer-side evidence. No tests/builds were run for contribution preparation.

Standalone coverage limitation: local step_arguments BDD covers arguments, dialects, docstrings and tables; Markdown, Document and LexicalSemantics evidence resides in the consuming Cucumber checkout. The upstream draft links that evidence rather than claiming its checkout alone reproduces every contract.

Existing upstream PR60–64 use Gherkin38: escapes, table width, docstrings, featureless documents and dual arguments. Our version43 profile differs deliberately; in particular PR64 rejects both arguments, while the pinned43 grammar accepts them. This is a baseline/policy discussion, not an allegation of error. PR58 description whitespace, PR56 public keywords and PR65 Examples descriptions are also relevant. Propose explicit versioned compatibility rather than duplicate standalone bug fixes.

Upstream draft retains production files, official fixture/license provenance, focused BDD and parser documentation; excludes fork Pages/README branding and SDK/KBD machinery. Changelog records unreleased additions. Fork-main draft preserves all delivered fork documentation and hosting. No merges, releases or registry publication are authorized by these draft submissions.

The shared native SDK46 in Cucumber is delivered and locally proven22/66; foreign step execution/framework adapters remain future scope. Both documentation sites are live and the public paired-site boundary passed4/22. Established build/release processes remain unchanged.

No KBD canonical project/run exists in this Gherkin repository; this is an authored project reflection linked to the Cucumber programme, not a fabricated canonical stage. The consuming phase46 has a supported run-global reflection supplement; its immutable closed-phase limitation remains explicit.
