// ── docsify config ─────────────────────────────────────────────────────────
window.$docsify = {
  loadSidebar: true,
  // The HOME route is the front page (README.md) rendered WITHOUT the sidebar, topped by
  // the flying section line — pk-cover.js toggles that per route. Every content route
  // shows the sidebar as usual. (Docsify's own coverpage section can't hold the whole
  // intro — it centers it in a themed full-view layer.)
  // loadNavbar stays OFF: no _navbar.md is generated anywhere in this repo, and asking
  // for one 404s on every page load.
  loadNavbar: false,
  // ONE sidebar for the whole site. loadSidebar fetches _sidebar.md relative to the page
  // being viewed, so opening drugs/drug_x/ or atc/A01A.md would look for a sidebar THERE
  // and, finding one, replace the navigation the reader was using. Alias every such
  // request back to the root file; the per-directory ones are no longer generated.
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md',
    '/.*/_navbar.md': '/_navbar.md'
  },
  name: '',
  repo: ''
};
// Plugin modules behind this one push onto this array; docsify.js (last script) reads it
// at init, so the array must exist even if nothing pushed.
window.$docsify.plugins = [];
// Sidebar folding is docsify-sidebar-collapse (loaded after docsify.js, pinned 1.3.5,
// vendored in assets/): nav.py emits ONE nested list, and every item with a child list is
// a folder. Closed by default; the branch of the page being viewed opens on every route
// change. It replaced two hand-written folds (a <details> wrap of the panel headings and
// a chevron button per ATC level) that looked and behaved differently from each other.
window.$docsify.sidebarDisplayLevel = 0;