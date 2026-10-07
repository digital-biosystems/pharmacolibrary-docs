<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;trametinib&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 dlt&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trametinib_Balakirouchenane2020_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trametinib_Ravix2024_reference&quot;,&quot;label&quot;:&quot;Ravix_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Ravix2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trametinib — `Trametinib_Balakirouchenane2020_dlt`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `dabrafenib and trametinib`, measured `trametinib`.

## Citation
Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020)
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

## Model component
<dbs-pgx drug="trametinib" model-id="Trametinib_Balakirouchenane2020_dlt" status="rejected" stale="false" population="patients with BRAF-mutated metastatic solid tumors" measured-compound="trametinib" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- column 'dlt' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row20:col1'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row21:col1'])
- dropped unlinked row (NIL): '0–1' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row23:col1'])
- dropped unlinked row (NIL): '≥2' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row24:col1'])
- dropped unlinked row (NIL): '&lt;1.5N' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row26:col1'])
- dropped unlinked row (NIL): '≥1.5N' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row27:col1'])
- table mostly unlinked (6/6 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trametinib
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'dlt' subgroup of Balakirouchenane_2020 (paper reports 3 populations: dlt, final tra model, no dlt)
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 24 linked by role; re-tagged trametinib→dabrafenib ×1, trametinib→hydroxy-dabrafenib ×1
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Balakirouchenane_2020_table_4:row1:col1 = '9624 (8121–11676)'
- unparsed cell Balakirouchenane_2020_table_4:row1:col2 = '7485 (3399–17712)'
- unparsed cell Balakirouchenane_2020_table_4:row2:col1 = '7509.5 (4918–10300)'
- unparsed cell Balakirouchenane_2020_table_4:row2:col2 = '5812 (2459–10300)'
- unparsed cell Balakirouchenane_2020_table_4:row3:col1 = '16855 (13491–21976)'
- unparsed cell Balakirouchenane_2020_table_4:row3:col2 = '13605 (5877–28012)'
- unparsed cell Balakirouchenane_2020_table_4:row4:col1 = '54.5 (37–81)'
- unparsed cell Balakirouchenane_2020_table_4:row4:col2 = '59 (20–90)'
- unparsed cell Balakirouchenane_2020_table_4:row5:col1 = '25.9 (20.4–33.4)'
- unparsed cell Balakirouchenane_2020_table_4:row5:col2 = '25.1 (19.6–40.9)'
- unparsed cell Balakirouchenane_2020_table_4:row16:col1 = '268 (144–448)'
- unparsed cell Balakirouchenane_2020_table_4:row16:col2 = '268 (111–750)'
- unparsed cell Balakirouchenane_2020_table_4:row17:col1 = '55 (37–90)'
- unparsed cell Balakirouchenane_2020_table_4:row17:col2 = '61 (20–89)'
- unparsed cell Balakirouchenane_2020_table_4:row18:col1 = '25.9 (20.4–35.5)'
- unparsed cell Balakirouchenane_2020_table_4:row18:col2 = '25.2 (19.6–40.9)'
- companion parameter table 4 transcribed (26 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 2, 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trametinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Balakirouchenane_2020` / `Balakirouchenane_2020::dlt`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:27 UTC</sub>
