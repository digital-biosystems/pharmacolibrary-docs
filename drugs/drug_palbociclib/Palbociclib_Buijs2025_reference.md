<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;,&quot;href&quot;:&quot;drugs/drug_palbociclib/&quot;},{&quot;label&quot;:&quot;Buijs_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palbociclib — `Palbociclib_Buijs2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Palbociclib’s peripheral-compartment volume V2 of 682 l is reported in a two-compartment model with an unreachable compartment, so the record was rejected.**

The record gives a two-compartment structure, with central volume V1 of 2370 l and peripheral volume V2 of 682 l. The finding reports an unreachable or orphan compartment but does not identify which compartment lacks a path from the dose. Extracted — palbociclib: CL 62.6 l/h, V1 2.37e+03 l, V2 682 l.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl: this record has 62.6, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Buijs SM et al., Palbociclib exposure in relation to eff…, ESMO open (2025)
  ·  DOI: [10.1016/j.esmoop.2025.104290](https://doi.org/10.1016/j.esmoop.2025.104290)

<div class="pk-model-meta" hidden drug="palbociclib" model-id="Palbociclib_Buijs2025_reference" status="rejected" stale="false" population="patients with advanced estrogen receptor-positive, HER2-negative breast cancer" measured-compound="palbociclib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| p_for_trend | `Q900` · p_for_trend | 0.88 | not captured | not captured | not captured | not captured | not captured (not captured) | Buijs_2025_table_2:row4:col1, Buijs_2025_table_2:row4:col2, Buijs_2025_table_2:row4:col7, Buijs_2025_table_2:row4:col8 | — | not captured |
| CL | `Q22` · CL | 62.6 | l/h | 1.738888888888889e-05 | L/h | not captured | exact (1.0) | Buijs_2025:results_prose | — | not captured |
| V1 | `Q63` · V1 | 2370 | l | 2.37 | L | not captured | exact (1.0) | Buijs_2025:results_prose | — | not captured |
| V2 | `Q64` · V2 | 682 | l | 0.682 | L | not captured | exact (1.0) | Buijs_2025:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Q1 &lt; 50.8 ng/ml | Q37 | not captured | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- column 'palbociclibauc0-tau' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'all aes grade ≥3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'neutropenia grade ≥3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Q2 50.8-60.8 ng/ml' — extend the ontology if this is a real PK parameter (source ['Buijs_2025_table_2:row1:col5'])
- dropped unlinked row (NIL): 'Q3 60.9-74.7 ng/ml' — extend the ontology if this is a real PK parameter (source ['Buijs_2025_table_2:row2:col5'])
- dropped duplicate Q37 ('Q4 ≥ 74.8 ng/ml', value None) — already have one for this compound
- covariate level 'P for trend' → Q900:p_for_trend = 0.88 (additive_shift on the model)
- salvaged Q22 ('CL'=62.6) from results prose — parameter table was unreadable
- salvaged Q63 ('V1'=2370) from results prose — parameter table was unreadable
- salvaged Q64 ('V2'=682) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=palbociclib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- transposed table Buijs_2025_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Buijs_2025_table_2:row0:col1 = '45/86 (52%)'
- unparsed cell Buijs_2025_table_2:row0:col2 = '35/86 (41%)'
- unparsed cell Buijs_2025_table_2:row0:col3 = '25/83 (30%)'
- unparsed cell Buijs_2025_table_2:row0:col7 = '43/86 (50%)'
- unparsed cell Buijs_2025_table_2:row0:col8 = '31/86 (36%)'
- unparsed cell Buijs_2025_table_2:row0:col9 = '20/83 (24%)'
- unparsed cell Buijs_2025_table_2:row1:col1 = '52/85 (61%)'
- unparsed cell Buijs_2025_table_2:row1:col2 = '39/85 (46%)'
- unparsed cell Buijs_2025_table_2:row1:col3 = '39/87 (45%)'
- unparsed cell Buijs_2025_table_2:row1:col7 = '50/85 (59%)'
- unparsed cell Buijs_2025_table_2:row1:col8 = '38/85 (45%)'
- unparsed cell Buijs_2025_table_2:row1:col9 = '41/87 (47%)'
- unparsed cell Buijs_2025_table_2:row2:col1 = '46/85 (54%)'
- unparsed cell Buijs_2025_table_2:row2:col2 = '40/85 (47%)'
- unparsed cell Buijs_2025_table_2:row2:col3 = '36/85 (42%)'
- unparsed cell Buijs_2025_table_2:row2:col7 = '52/85 (61%)'
- unparsed cell Buijs_2025_table_2:row2:col8 = '46/85 (54%)'
- unparsed cell Buijs_2025_table_2:row2:col9 = '40/85 (47%)'
- unparsed cell Buijs_2025_table_2:row3:col1 = '48/85 (56%)'
- unparsed cell Buijs_2025_table_2:row3:col2 = '41/86 (48%)'
- unparsed cell Buijs_2025_table_2:row3:col3 = '44/86 (51%)'
- unparsed cell Buijs_2025_table_2:row3:col7 = '46/86 (53%)'
- unparsed cell Buijs_2025_table_2:row3:col8 = '40/86 (47%)'
- unparsed cell Buijs_2025_table_2:row3:col9 = '43/86 (50%)'
- unparsed cell Buijs_2025_table_2:row4:col3 = '0.01a'
- unparsed cell Buijs_2025_table_2:row4:col9 = '0.001a'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl]` | 62.6 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[p_for_trend]` | 0.88 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q1 &lt; 50.8 ng/ml]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q2 50.8-60.8 ng/ml]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_category]` | not captured | 0.09 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | 2370 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` | 682 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 62.6 | not captured | not captured | ['Buijs_2025:results_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 62.6 L/h | not captured | not captured | ['Buijs_2025:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.37e+03 L | not captured | not captured | ['Buijs_2025:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 682 L | not captured | not captured | ['Buijs_2025:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_palbociclib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Buijs_2025` / `Buijs_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:08 UTC</sub>
