<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;fluoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/&quot;},{&quot;label&quot;:&quot;van_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_Burlot2026_reference&quot;,&quot;label&quot;:&quot;Burlot_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/Fluoxetine_Burlot2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluoxetine — `Fluoxetine_van2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: other organism.** This record comes from a study in another organism (bacteria, fungi or plants), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fluoxetine, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:53.223792+00:00) predates the upstream re-run (2026-10-06 23:01:32.676458+00:00). Current validate status: `rejected`.

## Citation
van der Most MA et al., Toxicokinetics of the Antidepressant Fl…, Environmental science & tec… (2024)
  ·  DOI: [10.1021/acs.est.3c07744](https://doi.org/10.1021/acs.est.3c07744)

## Model component
<dbs-pgx drug="fluoxetine" model-id="Fluoxetine_van2024_reference" status="rejected" stale="true" population="Caenorhabditis elegans nematodes" measured-compound="fluoxetine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- column 'others' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'II' — extend the ontology if this is a real PK parameter (source ['tbl3:row1:col2', 'tbl3:row1:col3', 'tbl3:row1:col5', 'tbl3:row1:col6', 'tbl3:row1:col7', 'tbl3:row1:col8', 'tbl3:row1:col9', 'tbl3:row1:col15', 'tbl3:row1:col16', 'tbl3:row2:col2', 'tbl3:row2:col3', 'tbl3:row2:col5', 'tbl3:row2:col6', 'tbl3:row2:col7', 'tbl3:row2:col8', 'tbl3:row2:col9', 'tbl3:row2:col15', 'tbl3:row2:col16', 'tbl3:row3:col2', 'tbl3:row3:col3', 'tbl3:row3:col5', 'tbl3:row3:col6', 'tbl3:row3:col7', 'tbl3:row3:col8', 'tbl3:row3:col9', 'tbl3:row3:col15', 'tbl3:row3:col16', 'tbl3:row4:col2', 'tbl3:row4:col3', 'tbl3:row4:col5', 'tbl3:row4:col6', 'tbl3:row4:col7', 'tbl3:row4:col8', 'tbl3:row4:col9', 'tbl3:row4:col15', 'tbl3:row4:col16', 'tbl3:row5:col2', 'tbl3:row5:col3', 'tbl3:row5:col5', 'tbl3:row5:col6', 'tbl3:row5:col7', 'tbl3:row5:col8', 'tbl3:row5:col9', 'tbl3:row5:col15', 'tbl3:row5:col16', 'tbl3:row6:col2', 'tbl3:row6:col3', 'tbl3:row6:col5', 'tbl3:row6:col6', 'tbl3:row6:col7', 'tbl3:row6:col8', 'tbl3:row6:col9', 'tbl3:row6:col15', 'tbl3:row6:col16'])
- dropped unlinked row (NIL): 'III' — extend the ontology if this is a real PK parameter (source ['tbl3:row7:col2', 'tbl3:row7:col3', 'tbl3:row7:col5', 'tbl3:row7:col6', 'tbl3:row7:col7', 'tbl3:row7:col8', 'tbl3:row7:col9', 'tbl3:row7:col10', 'tbl3:row7:col11', 'tbl3:row7:col15', 'tbl3:row7:col16', 'tbl3:row7:col17', 'tbl3:row8:col2', 'tbl3:row8:col3', 'tbl3:row8:col5', 'tbl3:row8:col6', 'tbl3:row8:col7', 'tbl3:row8:col8', 'tbl3:row8:col9', 'tbl3:row8:col10', 'tbl3:row8:col11', 'tbl3:row8:col12', 'tbl3:row8:col15', 'tbl3:row8:col16', 'tbl3:row8:col17', 'tbl3:row9:col2', 'tbl3:row9:col3', 'tbl3:row9:col5', 'tbl3:row9:col7', 'tbl3:row9:col8', 'tbl3:row9:col9', 'tbl3:row9:col10', 'tbl3:row9:col11', 'tbl3:row9:col13', 'tbl3:row9:col14', 'tbl3:row9:col15', 'tbl3:row9:col16', 'tbl3:row9:col17'])
- dropped unlinked row (NIL): 'IV' — extend the ontology if this is a real PK parameter (source ['tbl3:row10:col2', 'tbl3:row10:col3', 'tbl3:row10:col5', 'tbl3:row10:col6', 'tbl3:row10:col7', 'tbl3:row10:col8', 'tbl3:row10:col9', 'tbl3:row10:col13', 'tbl3:row10:col15', 'tbl3:row10:col16', 'tbl3:row11:col2', 'tbl3:row11:col3', 'tbl3:row11:col5', 'tbl3:row11:col6', 'tbl3:row11:col7', 'tbl3:row11:col8', 'tbl3:row11:col9', 'tbl3:row11:col10', 'tbl3:row11:col11', 'tbl3:row11:col12', 'tbl3:row11:col13', 'tbl3:row11:col14', 'tbl3:row11:col15', 'tbl3:row11:col16', 'tbl3:row11:col17'])
- dropped value-less row: 'k2fast (1/h)' (captured trailing unit '1/h' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fluoxetine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 4/4 row label(s) assigned, 2 linked by role; re-tagged fluoxetine→parent ×2
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell tbl3:row2:col4 = 'k2FLX'
- unparsed cell tbl3:row4:col4 = 'k2FLX'
- unparsed cell tbl3:row6:col4 = 'k2FLX'
- unparsed cell tbl3:row7:col12 = '&lt;0.001–0.038'
- unparsed cell tbl3:row9:col4 = 'k1, k2FLX, k2NF, kt'
- unparsed cell tbl3:row9:col6 = '&lt;0.001–24.2'
- unparsed cell tbl3:row9:col12 = '&lt;0.03–0.081'
- unparsed cell tbl3:row10:col14 = '&lt;0.001–0.60'
- companion parameter table 3 transcribed (2 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |
| `gpt-oss:120b` | confirmed | 1.0 (4/4 fields) | none |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | fluoxetine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fluoxetine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2024` / `van_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:01 UTC</sub>
