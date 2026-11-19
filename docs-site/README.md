# Fork documentation

This additive Docusaurus site is independent of the established Rust build,
release and (where present) mdBook processes. The additive `docs-pages.yml` workflow targets
https://gqadonis.github.io/gherkin/ from `foundation/rust-bdd-sdk`.
Public availability is established only by a completed Pages run and the public
BDD receipt; adding the workflow alone is not deployment evidence. Registry
publication is separate and remains unconfigured.

Use Node22.20+ and the committed lockfile:

    npm ci
    npm run build
    npm run serve

The local server binds loopback. For the Pages path, set
DOCS_BASE_URL=/gherkin/ for both production build and local serve. The workflow
supplies DOCS_URL=https://gqadonis.github.io; local defaults remain localhost.
Do not use a v-prefixed Git tag to deploy this site: existing repository workflows
may treat such tags as Rust releases.

## Behavioral acceptance

The paired sites are exercised at the completed documentation boundary by
Cucumber.js scenarios in the Cucumber fork's docs-site/acceptance directory.
That harness serves actual production artifacts under non-root paths and uses
installed Chrome via Playwright; it does not run a unit suite. GHERKIN_REPO
can point to the complete sibling checkout. Negative controls build disposable
copies with deliberately broken internal links and retain original failure logs.
See the Cucumber compatibility evidence for actual results; site source alone
does not establish passing acceptance.

## Branding and attribution

This site clearly identifies the GQAdonis fork. The green palette (#00a818,
#39b54a) and Lato/system font reference come from the official Cucumber website:
https://github.com/cucumber/website/blob/main/src/css/custom.scss .
Styling here is original; no upstream logo or default mdBook favicon is copied.
The website's MIT code license is not blanket trademark permission. No upstream
endorsement is implied. Existing MIT/Apache notices remain in the repository.
Docusaurus is MIT; React is MIT; their packages retain their license notices.

## Retained local result

The paired-site boundary completed with 10 scenarios / 64 steps passed, including
real Chrome navigation and both isolated broken-link controls. Earlier failed
attempts remain in the Cucumber evidence directory. This does not establish
public hosting or SDK parity. No site deployment occurred in that historical boundary.

## Pages delivery

Only pushes affecting `docs-site/**` or `.github/workflows/docs-pages.yml` on
`foundation/rust-bdd-sdk` deploy. No Rust tag, release, registry or established
workflow is involved. Manual dispatch is available once GitHub discovers the
workflow on the default branch; the initial delivery uses the branch push.
The build uses the lockfile, Node 22.20.0 and Docusaurus 3.10.2. Broken links fail
that build, preventing artifact upload and the dependent deploy job. This
control is not a claim that a deliberately failing remote deployment was run.

Initial administration: enable GitHub Pages with build type `workflow`, then
inspect its generated `github-pages` environment before the first deployment.
Do not silently change any branch-protection or environment protection rule.
Once the deployed public root is confirmed reachable, set the repository About
website to that verified Pages URL before running the complete public boundary. The standard workflow token cannot edit repository
metadata, so this is a one-time owner-authorized administration step, without
adding an administrator credential to CI. Further docs updates retain the URL.

The paired public acceptance boundary lives in the Cucumber fork:
`PAGES_EVIDENCE=/fresh/absolute/directory node acceptance/pages-run.mjs`
(from its `docs-site` directory, with authenticated `gh` and installed Chrome).
It requires a successful current branch deployment for each fork, visits actual
public root/deep links with assets, and follows each repository About website.
It preserves Messages, browser observations and a four-scenario receipt.

Official workflow reference and action pin provenance (resolved before editing):
https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages .
Immutable action commits in the workflow resolve the official `actions/checkout`
v4, `setup-node` v4, `configure-pages` v5, `upload-pages-artifact` v3 and
`deploy-pages` v4 tags. No third-party deployment service or secret is required.
