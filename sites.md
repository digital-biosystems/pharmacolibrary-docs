<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Sites & interactions

Where a set of drugs is absorbed, metabolised and cleared — the organs, the enzymes and
transporters that carry each drug there, and the sites where one drug in the set can change
another's fate. Built in your browser from a **second static database** (`data/adme-…sqlite`,
DrugBank's curated actors + a tissue table), downloaded once; nothing is sent anywhere.

<div id="pk-sites">
  <div id="pks-status" class="pkq-status">Loading the site database…</div>
  <div id="pks-ui" hidden>
    <p class="pkq-row">
      <label for="pks-pick">add a drug</label>
      <input id="pks-pick" placeholder="tolvaptan, Zyloprim, hydrochlorothiazide…" autocomplete="off">
      <span id="pks-hint" class="pkq-meta"></span>
    </p>
    <div id="pks-results" class="pks-results"></div>
    <div id="pks-chips" class="pks-chips" role="group" aria-label="selected drugs"></div>
    <p class="pkq-row pks-controls">
      <label><input type="checkbox" id="pks-ddi" checked> co-administration layer</label>
      <label><input type="checkbox" id="pks-text" checked> include prose-only sites</label>
      <button class="pkq-btn" id="pks-share">copy link to this set</button>
      <span class="pkq-meta" id="pks-meta"></span>
    </p>
    <div class="pks-evkey"><span><i class="e3"></i>DrugBank actor</span><span><i class="e2"></i>paper PGx gene</span><span><i class="e1"></i>ADME prose</span><span><i class="e0"></i>none</span><span><i class="aff"></i>affected by co-administration</span><span><i class="dot"></i>dot = the perpetrator's colour (filled inhibits, hollow induces)</span></div>
    <h2>Site heat-map</h2>
    <div class="pks-heatmap"></div>
    <h2>Who affects whom</h2>
    <p class="pkq-meta">Rows are perpetrators, columns victims: the cell names the enzyme or transporter through which the row drug can change the column drug's exposure (⊣ inhibits, ↑ induces; the column drug is its substrate). The same pairs are marked on the heat-map row labels — ⇠ the drugs that affect this one, ⇢ the drugs it affects.</p>
    <div class="pks-ddi-box"></div>
    <h2>Anatomogram</h2>
    <p class="pkq-meta">Each organ carries one slot per drug, in the chips' order, shaded by evidence. A dashed ring marks an organ where another drug in the set inhibits or induces the actor at work there; click a chip to isolate a drug and draw the perpetrator → victim arrows. Hover an organ for its actors, click to pin.</p>
    <div class="pks-grid"><div class="pks-anatomogram"></div><div class="pks-detailbox"></div></div>
    <h2>Shared actors — the co-administration table</h2>
    <p class="pkq-meta">An actor two drugs share, with both roles. Substrate on one side and inhibitor/inducer on the other is a mechanism for one drug to change the other's exposure at that actor's tissue.</p>
    <div class="pks-shared"></div>
    <details><summary>Table view — every site row</summary><div class="pks-scroll pks-table"></div></details>
  </div>
</div>

## What is in it

| table | what it holds |
|---|---|
| `adme_drug` | every KB drug with a curated actor, an ADME paragraph or an extracted record (~11k) |
| `adme_actor` | DrugBank enzymes / transporters / carriers / targets with the drug's **role** (substrate, inhibitor, inducer …); the genes named by the KB's own PGx records, each with the paper it came from (its page here and its DOI) |
| `adme_site` | the actor → process / tissue (UBERON) / cell hand table (~75 ADME genes) |
| `adme_text` | organ words found in DrugBank's absorption / metabolism / elimination prose, with the quote |

Evidence tiers, strongest first: a curated DrugBank actor mapped through the tissue table (3);
a gene a paper's pharmacogenomic record ties to this drug (2); an organ word in the prose (1).
Curated ≠ clinically relevant: DrugBank roles carry no potency and no fraction metabolised,
and the tissue of an actor is a property of the protein, not of the paper. An actor the hand
table does not know appears in the tables with no tissue and is absent from the maps.

A comparison is a URL: `#/sites?drugs=tolvaptan,telmisartan,hydrochlorothiazide` opens this
page with those drugs selected. The per-drug logic is `pk_knowledge_scripts.adme_sites`; the
database is `pk_knowledge_scripts.export.adme_sqlite`.
