<!-- AUTOGEN:none — this page is hand-written scaffolding, not generated -->

# Graph explorer

Ask the evidence graph directly: what the knowledge base holds about a drug, where each
extracted value came from, how the papers cite each other, which drugs relate to a condition
and in what role, and how two drugs are connected. Every view shows the Cypher it ran.

The page looks for a graph on this computer first (the demo or open package from
*Downloads*, or the pipeline's own graph), then uses the public graph through a read-only
proxy. A local password stays in this browser tab and is sent only to `localhost`.

<div id="pk-graph">
  <div id="pkg-conn" class="pkg-conn"></div>
  <div id="pkg-status" class="pkq-status" role="status" aria-live="polite">Loading the graph explorer…</div>
  <div id="pkg-ui" hidden>
    <p class="pkg-views" role="group" aria-label="views">
      <button type="button" class="pkq-btn" data-view="drug">Drug</button>
      <button type="button" class="pkq-btn" data-view="evidence">Evidence trail</button>
      <button type="button" class="pkq-btn" data-view="citations">Citations</button>
      <button type="button" class="pkq-btn" data-view="condition">Condition → drugs</button>
      <button type="button" class="pkq-btn" data-view="connect">Connect two drugs</button>
    </p>
    <p class="pkq-row" id="pkg-drugrow">
      <label for="pkg-drug">Drug</label>
      <input id="pkg-drug" placeholder="allopurinol, Zyloprim, clopidogrel…" autocomplete="off">
      <span id="pkg-drughits" class="pks-results"></span>
    </p>
    <p class="pkq-row" id="pkg-brow" hidden>
      <label for="pkg-b">Second drug</label>
      <input id="pkg-b" placeholder="febuxostat, omeprazole…" autocomplete="off">
      <span id="pkg-bhits" class="pks-results"></span>
    </p>
    <p class="pkq-row" id="pkg-condrow" hidden>
      <label for="pkg-cond">Condition</label>
      <input id="pkg-cond" placeholder="gout, tuberculosis, angiography, Stevens-Johnson… (Enter)" autocomplete="off">
    </p>
    <div id="pkg-out" class="pkg-out"></div>
  </div>
</div>

Results summarise literature and database evidence, not medical advice. Drug roles come
from ATC codes and DrugBank categories; DrugBank text is quoted under CC BY-NC 4.0.
