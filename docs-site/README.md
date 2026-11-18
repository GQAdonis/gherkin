# Local fork documentation

This additive Docusaurus site is independent of the established Rust build,
release and (where present) mdBook processes. No deployment workflow, domain,
public hosting target or registry publication is configured.

Use Node22.20+ and the committed lockfile:

    npm ci
    npm run build
    npm run serve

The local server binds loopback. For a future non-root hosting path, set
DOCS_BASE_URL=/your-path/ for both production build and local serve. DOCS_URL can supply an
approved origin later; its default is localhost and is not a hosting commitment.
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
public hosting or SDK parity. No site deployment occurred.
