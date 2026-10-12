window.$docsify = {
  loadSidebar: true,
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
}

window.$docsify.plugins = [];
window.$docsify.sidebarDisplayLevel = 0;
