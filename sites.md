<!-- AUTOGEN:none — this page is hand-written scaffolding, copied to the site by _seed_scaffold -->

# Sites & interactions

Compare tissue-specific absorption, metabolism, and elimination pathways, associated
enzymes and transporters, and potential drug–drug or pharmacogenomic effects.
The ADME database is processed locally in the browser; selections are not uploaded.

<div id="pk-sites">
  <div id="pks-status" class="pkq-status">Loading the site database…</div>
  <div id="pks-ui" hidden>
    <p class="pkq-row">
      <label for="pks-pick">Drug</label>
      <input id="pks-pick" placeholder="tolvaptan, Zyloprim, hydrochlorothiazide…" autocomplete="off">
      <span id="pks-hint" class="pkq-meta"></span>
    </p>
    <div id="pks-results" class="pks-results"></div>
    <div id="pks-chips" class="pks-chips" role="group" aria-label="selected drugs"></div>
    <p class="pkq-row pks-pgxrow">
      <label for="pks-pgx-gene">Patient pharmacogene</label>
      <select id="pks-pgx-gene" aria-label="gene"></select>
      <select id="pks-pgx-pheno" aria-label="phenotype"></select>
      <button type="button" class="pkq-btn" id="pks-pgx-add">Add phenotype</button>
      <label class="pkq-btn pks-filebtn" for="pks-pharmcat" title="PharmCAT JSON or calls-only TSV; processed locally, not uploaded">Import PharmCAT report</label>
      <input type="file" id="pks-pharmcat" accept=".json,.tsv,.txt,application/json,text/tab-separated-values" hidden>
      <span id="pks-pgx-chips" class="pks-chips" role="group" aria-label="patient phenotypes"></span>
    </p>
    <p id="pks-pgx-note" class="pkq-meta" hidden></p>
    <p class="pkq-row pks-controls">
      <label><input type="checkbox" id="pks-ddi" checked> Co-administration</label>
      <label><input type="checkbox" id="pks-text" checked> Text-derived sites</label>
      <button class="pkq-btn" id="pks-share">Copy comparison link</button>
      <span class="pkq-meta" id="pks-meta"></span>
    </p>
    <div class="pks-evkey"><span><i class="e3"></i>DrugBank actor</span><span><i class="e2"></i>PGx paper</span><span><i class="e1"></i>DrugBank ADME</span><span><i class="e0"></i>No evidence</span><span><i class="dot">⊣</i>Perpetrator colour; ⊣ inhibition · ↑ induction</span><span><span class="shade"><b></b><b></b><b></b><b></b></span>Shade: 0 · 1 · 2 · ≥3 drug or pharmacogene effects per site</span></div>
    <div class="pks-view-controls">
      <button type="button" class="pkq-btn" id="pks-view-toggle" aria-expanded="false" aria-controls="pks-views">Show all sections</button>
    </div>
    <div class="pk-tabs pks-tabs" id="pks-views">
    <div class="pk-tabbar" role="tablist" aria-label="views of this set">
      <button type="button" role="tab" data-pkstab="heatmap" aria-selected="true">Site heat-map</button>
      <button type="button" role="tab" data-pkstab="ddi" aria-selected="false">Interaction matrix</button>
      <button type="button" role="tab" data-pkstab="pgx" aria-selected="false">Pharmacogenomics</button>
      <button type="button" role="tab" data-pkstab="body" aria-selected="false">Anatomogram</button>
      <button type="button" role="tab" data-pkstab="shared" aria-selected="false">Shared actors</button>
      <button type="button" role="tab" data-pkstab="table" aria-selected="false">Evidence table</button>
      <button type="button" role="tab" data-pkstab="help" aria-selected="false">Methods</button>
    </div>
    <div class="pk-tabpanel" role="tabpanel" data-pkspanel="heatmap">
    <div class="pks-heatmap"></div>
    </div>
    <div class="pk-tabpanel" role="tabpanel" data-pkspanel="ddi" hidden>
    <p class="pkq-meta">Rows: perpetrators; columns: substrate drugs. Cells identify the shared enzyme or transporter and inhibition (⊣) or induction (↑). Heat-map labels show incoming (⇠) and outgoing (⇢) effects. These are mechanistic hypotheses, not estimates of clinical interaction risk.</p>
    <div class="pks-ddi-box"></div>
    </div>
    <div class="pk-tabpanel" role="tabpanel" data-pkspanel="pgx" hidden>
    <p class="pkq-meta">Selected patient phenotypes apply to all included drugs. Arrows indicate predicted changes in parent-drug exposure or active-metabolite formation (▲ increased; ▼ decreased). Effect sizes and CPIC/DPWG recommendations are shown where supported by the source evidence.</p>
    <div class="pks-pgx-box"></div>
    </div>
    <div class="pk-tabpanel" role="tabpanel" data-pkspanel="body" hidden>
    <p class="pkq-row pks-sex" role="group" aria-label="body shown">
      <button type="button" class="pkq-btn pks-sexbtn" data-sex="female" aria-pressed="true">♀ female</button>
      <button type="button" class="pkq-btn pks-sexbtn" data-sex="male" aria-pressed="false">♂ male</button>
      <span class="pkq-meta">Female: placenta, mammary gland, ovary; male: prostate, testis.</span>
    </p>
    <p class="pkq-meta">EMBL-EBI Expression Atlas anatomogram (CC BY 4.0). Organ colour indicates the strongest evidence; kidney and blood use a separate red scale. Outlines indicate co-administration effects. Adjacent slots represent individual drugs and their evidence tiers; rings indicate affected drugs. Select a drug to display directed effects; hover for details or click to retain them.</p>
    <div class="pks-grid"><div class="pks-anatomogram"></div><div class="pks-detailbox"></div></div>
    </div>
    <div class="pk-tabpanel" role="tabpanel" data-pkspanel="shared" hidden>
    <p class="pkq-meta">Shared molecular actors and drug roles. A substrate–inhibitor or substrate–inducer pair indicates a potential mechanism for altered exposure at the mapped tissue.</p>
    <div class="pks-shared"></div>
    </div>
    <div class="pk-tabpanel" role="tabpanel" data-pkspanel="table" hidden>
    <p class="pkq-meta">Site-level evidence: drug, process, tissue, molecular actor, role, and source.</p>
    <div class="pks-scroll pks-table"></div>
    </div>
    <div class="pk-tabpanel pks-help" role="tabpanel" data-pkspanel="help" hidden>
    <h3>Data sources</h3>
    <table>
      <tr><th>Table</th><th>Content</th></tr>
      <tr><td><code>adme_drug</code></td><td>Drugs with curated actors, ADME text, or extracted records (~11k).</td></tr>
      <tr><td><code>adme_actor</code></td><td>DrugBank enzymes, transporters, carriers, and targets with drug roles; paper-derived PGx genes with citations.</td></tr>
      <tr><td><code>adme_site</code></td><td>Curated actor–process–tissue/cell mappings; UBERON tissue identifiers (~75 ADME genes).</td></tr>
      <tr><td><code>adme_text</code></td><td>Sites explicitly supported by DrugBank ADME text, identified by an LLM; keyword-based mappings where text assessment is unavailable.</td></tr>
    </table>
    <h3>Evidence tiers</h3>
    <p>Tiers: mapped DrugBank actor (3), paper-derived PGx gene (2), text-derived site (1). These categories do not establish clinical relevance: potency and fraction metabolised are unavailable, and tissue mappings describe the protein rather than a study-specific observation. Unmapped actors remain in tables but are excluded from tissue maps.</p>
    <h3>Comparison links</h3>
    <p>Example: <code>#/sites?drugs=tolvaptan,telmisartan,hydrochlorothiazide</code>. Source logic: <code>pk_knowledge_scripts.adme_sites</code>; database export: <code>pk_knowledge_scripts.export.adme_sqlite</code>.</p>
    </div>
    </div>
  </div>
</div>
