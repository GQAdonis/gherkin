// Additive local documentation; no deployment workflow or public host implied.
const baseUrl = process.env.DOCS_BASE_URL || '/';
if (!baseUrl.startsWith('/') || !baseUrl.endsWith('/')) {
  throw new Error('DOCS_BASE_URL must start and end with /');
}
export default {
  title: "Gherkin for Rust",
  tagline: 'GQAdonis fork · native Rust foundations',
  url: process.env.DOCS_URL || 'http://localhost',
  baseUrl,
  trailingSlash: true,
  organizationName: 'GQAdonis',
  projectName: "gherkin",
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [['classic', {
    docs: {
      routeBasePath: '/',
      sidebarPath: './sidebars.js',
      editUrl: "https://github.com/GQAdonis/gherkin/edit/foundation/rust-bdd-sdk/docs-site/",
    },
    blog: false,
    pages: false,
    sitemap: false,
    theme: { customCss: './src/css/custom.css' },
  }]],
  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    navbar: {
      title: "Gherkin for Rust",
      items: [
        { to: '/getting-started', label: 'Get started', position: 'left' },
        { to: '/compatibility', label: 'Compatibility', position: 'left' },
        { to: '/evidence', label: 'Evidence', position: 'left' },
        { href: "https://github.com/GQAdonis/gherkin/tree/foundation/rust-bdd-sdk", label: 'Fork source', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        { title: 'Use the fork', items: [
          { label: 'Get started', to: '/getting-started' },
          { label: 'Compatibility', to: '/compatibility' },
        ] },
        { title: 'Review the work', items: [
          { label: 'Evidence', to: '/evidence' },
          { label: 'Contributing', to: '/contributing' },
          { label: 'Source repository', href: "https://github.com/GQAdonis/gherkin/tree/foundation/rust-bdd-sdk" },
        ] },
      ],
      copyright: 'Independent GQAdonis fork. Not endorsed by the upstream Cucumber projects. Original project licenses and attribution are retained.',
    },
    docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
  },
};
