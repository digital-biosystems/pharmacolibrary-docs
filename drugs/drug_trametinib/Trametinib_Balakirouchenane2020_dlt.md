<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;trametinib&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 dlt&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trametinib_Ravix2024_reference&quot;,&quot;label&quot;:&quot;Ravix_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Ravix2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trametinib_Balakirouchenane2020_final_tra_model&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_final_tra_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trametinib/Trametinib_Balakirouchenane2020_final_tra_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trametinib — `Trametinib_Balakirouchenane2020_dlt`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.091). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has dabrafenib and trametinib, the second reading trametinib; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `dabrafenib and trametinib`, measured `trametinib`.

## Citation
Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020)
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

<div class="pk-model-meta" hidden drug="trametinib" model-id="Trametinib_Balakirouchenane2020_dlt" status="rejected" stale="false" population="patients with BRAF-mutated metastatic solid tumors" measured-compound="trametinib" parameterization="mechanistic" topology="parent_metabolite"></div>

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | primary re-run | 0.091 (1/11 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['dabrafenib', 'hydroxy-dabrafenib', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl/f]` | not captured | 5.83 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka]` | not captured | 0.913 | only_one_extracted |
| `qwen3.8-27b` | `parameters[parameters]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q/f]` | not captured | 64.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tlag]` | not captured | 0.709 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2/f]` | not captured | 61.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v3/f]` | not captured | 417.0 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | dabrafenib and trametinib | trametinib | mismatch |

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

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trametinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Balakirouchenane_2020` / `Balakirouchenane_2020::dlt`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:27 UTC</sub>
