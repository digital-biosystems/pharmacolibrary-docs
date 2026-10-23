<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 dlt&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dabrafenib — `Dabrafenib_Balakirouchenane2020_dlt`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="dabrafenib" model-id="Dabrafenib_Balakirouchenane2020_dlt" status="rejected" stale="false" population="adults with metastatic BRAF-mutated solid tumors" measured-compound="dabrafenib, hydroxy-dabrafenib, and trametinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Balakirouchenane D, Guégan S, Csajka C, Jouinot A, Heidelberger V, Puszkiel A et al. Population Pharmacokinetics/Pharmacodynamics of Dabrafenib Plus Trametinib in Patients with BRAF-Mutated Metastatic Melanoma. Cancers 12(4) (2020).
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

## Population and dosing

**Population:** adults with metastatic BRAF-mutated solid tumors · condition metastatic BRAF-mutated solid tumors · age group adult · n = 73.

**Dosed compound ≠ measured compound:** dosed dabrafenib and trametinib, measured dabrafenib, hydroxy-dabrafenib, and trametinib.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.0). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has dabrafenib and trametinib, the second reading dabrafenib; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- column 'dlt' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row20:col1'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row21:col1'])
- dropped unlinked row (NIL): '0–1' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row23:col1'])
- dropped unlinked row (NIL): '≥2' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row24:col1'])
- dropped unlinked row (NIL): '&lt;1.5N' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row26:col1'])
- dropped unlinked row (NIL): '≥1.5N' — extend the ontology if this is a real PK parameter (source ['Balakirouchenane_2020_table_4:row27:col1'])
- table mostly unlinked (6/6 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dabrafenib, hydroxy-dabrafenib, and trametinib
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'dlt' subgroup of Balakirouchenane_2020 (paper reports 3 populations: dlt, final tra model, no dlt)
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 24 linked by role; re-tagged trametinib→dabrafenib ×1, trametinib→hydroxy-dabrafenib ×1, trametinib→dabrafenib, hydroxy-dabrafenib, and trametinib ×1

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
| `qwen3.8-27b` | primary re-run | 0.0 (0/10 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['dabrafenib', 'hydroxy-dabrafenib', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl/f]` |  | 5.83 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka]` |  | 0.913 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q/f]` |  | 64.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[tlag]` |  | 0.709 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2/f]` |  | 61.9 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v3/f]` |  | 417.0 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | dabrafenib and trametinib | dabrafenib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | dabrafenib, hydroxy-dabrafenib, and trametinib | dabrafenib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdabrafenib%5D%20Dabrafenib_Balakirouchenane2020_dlt&body=Drug%3A%20dabrafenib%0ARecord%3A%20Dabrafenib_Balakirouchenane2020_dlt%0APaper%3A%20Balakirouchenane_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_dlt%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:13 UTC</sub>
