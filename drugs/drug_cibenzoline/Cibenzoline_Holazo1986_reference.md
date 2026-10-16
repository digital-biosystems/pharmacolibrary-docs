<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;cibenzoline&quot;,&quot;href&quot;:&quot;drugs/drug_cibenzoline/&quot;},{&quot;label&quot;:&quot;Holazo_1986 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cibenzoline — `Cibenzoline_Holazo1986_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (equation variable and λ1), so that value has no SI equivalent. Extracted — cibenzoline: λ1 2.03 hr-1, kel 0.0548 hr-1, kabs 6.66 hr-1, tlag 1.94 hr, V 445 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[a*].parameter_id`: this record has Q900, the second reading Q86; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Holazo AA et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (1986)
  ·  DOI: [10.1002/j.1552-4604.1986.tb03535.x](https://doi.org/10.1002/j.1552-4604.1986.tb03535.x)

<div class="pk-model-meta" hidden drug="cibenzoline" model-id="Cibenzoline_Holazo1986_reference" status="rejected" stale="false" population="patients with frequent premature ventricular contractions" measured-compound="cibenzoline" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A* (ng/mL) | `Q900` · equation variable | 489 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Holazo_1986_table_1:row0:col4, Holazo_1986_table_1:row1:col4, Holazo_1986_table_1:row2:col4, Holazo_1986_table_1:row3:col4 | — | not captured |
| α (hr-1) | `Q67` · λ1 | 2.030 | hr-1 | not captured | [1] / [h] | not captured | exact (1.0) | Holazo_1986_table_1:row0:col5, Holazo_1986_table_1:row1:col5, Holazo_1986_table_1:row2:col5, Holazo_1986_table_1:row3:col5 | — | not captured |
| β (hr-1) | `Q47` · kel | 0.0548 | hr-1 | 1.5222222222222223e-05 | [1] / [h] | not captured | exact (1.0) | Holazo_1986_table_1:row0:col7, Holazo_1986_table_1:row1:col7, Holazo_1986_table_1:row2:col7, Holazo_1986_table_1:row3:col7 | — | not captured |
| ka (hr-1) | `Q49` · kabs | 6.66 | hr-1 | 0.00185 | [1] / [h] | not captured | exact (1.0) | Holazo_1986_table_1:row0:col8, Holazo_1986_table_1:row1:col8, Holazo_1986_table_1:row2:col8, Holazo_1986_table_1:row3:col8 | — | not captured |
| t0 (hr) | `Q83` · tlag | 1.94 | hr | 6984.0 | [h] | not captured | llm (0.6) | Holazo_1986_table_1:row0:col9, Holazo_1986_table_1:row1:col9, Holazo_1986_table_1:row2:col9, Holazo_1986_table_1:row3:col9 | — | not captured |
| volume of distribution | `Q61` · V | 445.0 | L | 0.445 | L | not captured | review_gapfill (0.7) | Brazzell_1985:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Sex/Age (yr)' — extend the ontology if this is a real PK parameter (source ['Holazo_1986_table_1:row0:col1', 'Holazo_1986_table_1:row1:col1', 'Holazo_1986_table_1:row2:col1', 'Holazo_1986_table_1:row3:col1'])
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['Holazo_1986_table_1:row0:col2', 'Holazo_1986_table_1:row1:col2', 'Holazo_1986_table_1:row2:col2', 'Holazo_1986_table_1:row3:col2'])
- unit_dimension_mismatch: 'α (hr-1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'B* (ng/mL)' — extend the ontology if this is a real PK parameter (source ['Holazo_1986_table_1:row0:col6', 'Holazo_1986_table_1:row1:col6', 'Holazo_1986_table_1:row2:col6', 'Holazo_1986_table_1:row3:col6'])
- dropped unlinked row (NIL): 'r2' — extend the ontology if this is a real PK parameter (source ['Holazo_1986_table_1:row0:col10', 'Holazo_1986_table_1:row1:col10', 'Holazo_1986_table_1:row2:col10', 'Holazo_1986_table_1:row3:col10'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cibenzoline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Brazzell_1985's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- transposed table Holazo_1986_table_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[a*].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss:120b` | `parameters[a*].value` | 489 | 106 | mismatch |
| `gpt-oss:120b` | `parameters[ka].value` | 6.66 | 4.64 | mismatch |
| `gpt-oss:120b` | `parameters[t0].value` | 1.94 | 0.73 | mismatch |
| `gpt-oss:120b` | `parameters[α].value` | 2.030 | 0.260 | mismatch |
| `gpt-oss:120b` | `parameters[β].value` | 0.0548 | 0.0727 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Holazo_1986_table_1:row0:col7', 'Holazo_1986_table_1:row1:col7', 'Holazo_1986_table_1:row2:col7', 'Holazo_1986_table_1:row3:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Holazo_1986_table_1:row0:col8', 'Holazo_1986_table_1:row1:col8', 'Holazo_1986_table_1:row2:col8', 'Holazo_1986_table_1:row3:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Brazzell_1985:review'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | not captured | not captured | ['Holazo_1986_table_1:row0:col5', 'Holazo_1986_table_1:row1:col5', 'Holazo_1986_table_1:row2:col5', 'Holazo_1986_table_1:row3:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Holazo_1986_table_1:row0:col9', 'Holazo_1986_table_1:row1:col9', 'Holazo_1986_table_1:row2:col9', 'Holazo_1986_table_1:row3:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 445 L | not captured | not captured | ['Brazzell_1985:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cibenzoline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Holazo_1986` / `Holazo_1986::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:44 UTC</sub>
