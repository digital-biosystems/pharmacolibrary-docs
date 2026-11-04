// ── WAI-ARIA Tabs, one helper for both tab surfaces ─────────────────────────
// Custom tabs exist in two places: a record page's three sections (pk-record-tabs.js)
// and the Sites page's views (pk-sites-page.js). This module is the one implementation
// of the keyboard + semantics half both should share: roving tabindex, ArrowLeft/Right
// and Home/End to move among the tabs, ids with aria-controls / aria-labelledby, and a
// focus-visible state the consumer's CSS draws.
//
// Selection is NOT owned here; the consumer passes onSelect(idx) and gets called with the
// index whose tab received focus, only when mode is 'auto' (selection follows focus —
// right for tabs whose panels are already built). In 'manual' mode the arrows move focus
// and the button's native Enter/Space click activates — right for tabs whose switching
// redraws heavy content. Both surfaces call pkTablist.sync(bar) after their own select()
// so the rover points at the selected tab. Arrows always navigate AWAY FROM THE FOCUSED
// tab, whether or not it is the selected one.
window.pkTablist = (function () {
  'use strict';
  var uid = 0;

  // the LIVE tabs of a bar: role=tab buttons, in DOM order. Resolving per event (not
  // capturing at wire time) keeps the handlers alive through consumers that rebuild
  // their tab links — the Sites page does, on every switch.
  function tabsOf(bar) {
    return Array.prototype.filter.call(bar.querySelectorAll('[role="tab"]'),
                                       function (t) { return t.tagName === 'BUTTON'; });
  }

  // Re-point the rover (and fix the roving tabindex) from aria-selected.
  function sync(bar) {
    tabsOf(bar).forEach(function (t) {
      t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1;
    });
  }

  // idempotent: a repeated call (the Sites page re-collapsing) re-syncs instead of
  // piling on a second keydown listener
  function wire(bar, opts) {
    opts = opts || {};
    if (!bar) return;
    if (bar.getAttribute('data-pktablist') === 'wired') { sync(bar); return; }
    if (!bar.getAttribute('role')) bar.setAttribute('role', 'tablist');
    if (opts.label) bar.setAttribute('aria-label', opts.label);
    bar.setAttribute('data-pktablist', 'wired');

    var panels = Array.prototype.slice.call(opts.panels || []);
    tabsOf(bar).forEach(function (tab, i) {
      var panel = panels[i];
      if (!tab.id) tab.id = (opts.idp || 'pktab') + '-tab-' + (++uid);
      if (panel) {
        if (!panel.id) panel.id = (opts.idp || 'pktab') + '-panel-' + (++uid);
        tab.setAttribute('aria-controls', panel.id);
        if (!panel.getAttribute('role')) panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', tab.id);
        // tabindex=0 only when the panel holds nothing focusable of its own; a panel
        // with links or controls is already reachable, so it needs no stop of its own
        if (!panel.hasAttribute('tabindex') &&
            !panel.querySelector('a, button, input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])')) {
          panel.tabIndex = 0;
        }
      }
    });
    sync(bar);

    bar.addEventListener('keydown', function (ev) {
      if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft' &&
          ev.key !== 'Home' && ev.key !== 'End' &&
          !(opts.vertical && (ev.key === 'ArrowDown' || ev.key === 'ArrowUp'))) return;
      var tabs = tabsOf(bar);
      var tab = ev.target.closest ? ev.target.closest('[role="tab"]') : null;
      var i = tabs.indexOf(tab);
      if (i < 0) return;
      switch (ev.key) {
        case 'ArrowRight': case 'ArrowDown': i += 1; break;
        case 'ArrowLeft': case 'ArrowUp': i -= 1; break;
        case 'Home': i = 0; break;
        case 'End': i = tabs.length - 1; break;
      }
      var to = tabs[(i + tabs.length) % tabs.length];
      if (!to) return;
      ev.preventDefault();
      to.focus();
      if (opts.mode === 'auto' && opts.onSelect) opts.onSelect(tabs.indexOf(to));
    });

    // the rover follows whichever tab holds focus (arrow moves, deep-link focus(), click)
    bar.addEventListener('focusin', function (ev) {
      var tab = ev.target.closest ? ev.target.closest('[role="tab"]') : null;
      if (!tab) return;
      tabsOf(bar).forEach(function (t) { t.tabIndex = t === tab ? 0 : -1; });
    });
  }

  return { wire: wire, sync: sync, tabsOf: tabsOf };
})();