<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;defibrotide&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/&quot;},{&quot;label&quot;:&quot;Pescador_1983 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Defibrotide_Tocchetti2016_reference&quot;,&quot;label&quot;:&quot;Tocchetti_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# defibrotide — `Defibrotide_Pescador1983_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.308), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (equation variable, t1/2α, λ2 and k12), so that value has no SI equivalent. Extracted — defibrotide: t1/2α 0.6 t, λ2 0.054 t, k12 0.209 t, k21 0.357 t, kel 0.091, AUC∞ 1.65e+04, V 107 t.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of 10: this record has none, the second reading 6.66; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Pescador R et al., Pharmacokinetics of Defibrotide and of…, Thrombosis research (1983)
  ·  DOI: [10.1016/0049-3848(83)90391-2](https://doi.org/10.1016/0049-3848(83)90391-2)

<div class="pk-model-meta" hidden drug="defibrotide" model-id="Defibrotide_Pescador1983_reference" status="rejected" stale="false" population="rabbits" measured-compound="defibrotide" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A µg/ml | `Q900` · equation variable | 671.6 | t | not captured | [t] | not captured | llm (0.6) | Pescador_1983_table_1:row0:col1, Pescador_1983_table_1:row1:col1, Pescador_1983_table_1:row2:col1, Pescador_1983_table_1:row3:col1, Pescador_1983_table_1:row4:col1 | — | not captured |
| α min⁻¹ | `Q59` · t1/2α | 0.60 | t | not captured | [t] | not captured | llm (0.6) | Pescador_1983_table_1:row0:col2, Pescador_1983_table_1:row1:col2, Pescador_1983_table_1:row2:col2, Pescador_1983_table_1:row3:col2, Pescador_1983_table_1:row4:col2 | — | not captured |
| β min⁻¹ | `Q68` · λ2 | 0.054 | t | not captured | [t] | not captured | llm (0.6) | Pescador_1983_table_1:row0:col4, Pescador_1983_table_1:row1:col4, Pescador_1983_table_1:row2:col4, Pescador_1983_table_1:row3:col4, Pescador_1983_table_1:row4:col4 | — | not captured |
| K₁₂ min⁻¹ | `Q301` · k12 | 0.209 | t | not captured | [t] | not captured | llm_confirmed (0.6) | Pescador_1983_table_1:row0:col6, Pescador_1983_table_1:row1:col6, Pescador_1983_table_1:row2:col6, Pescador_1983_table_1:row3:col6, Pescador_1983_table_1:row4:col6 | — | not captured |
| K₂₁ min⁻¹ | `Q302` · k21 | 0.357 | t | not captured | [t] | not captured | llm_confirmed (0.6) | Pescador_1983_table_1:row0:col7, Pescador_1983_table_1:row1:col7, Pescador_1983_table_1:row2:col7, Pescador_1983_table_1:row3:col7, Pescador_1983_table_1:row4:col7 | — | not captured |
| Kel min⁻¹ | `Q47` · kel | 0.091 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Pescador_1983_table_1:row0:col8, Pescador_1983_table_1:row1:col8, Pescador_1983_table_1:row2:col8, Pescador_1983_table_1:row3:col8, Pescador_1983_table_1:row4:col8 | — | not captured |
| AUC µg·min/ml | `Q17` · AUC∞ | 16458.0 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Pescador_1983_table_1:row0:col10, Pescador_1983_table_1:row1:col10, Pescador_1983_table_1:row2:col10, Pescador_1983_table_1:row3:col10, Pescador_1983_table_1:row4:col10 | — | not captured |
| Vol ml | `Q61` · V | 106.7 | t | not captured | [t] | not captured | llm (0.6) | Pescador_1983_table_1:row0:col12, Pescador_1983_table_1:row1:col12, Pescador_1983_table_1:row2:col12, Pescador_1983_table_1:row3:col12, Pescador_1983_table_1:row4:col12 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'r²' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'α min⁻¹' → Q59 (unit '[mass]' vs ontology '[time]') — route to review
- dropped duplicate Q900 ('B µg/ml', value '828.5') — already have one for this compound
- unit_dimension_mismatch: 'β min⁻¹' → Q68 (unit '[mass]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'R²' — extend the ontology if this is a real PK parameter (source ['Pescador_1983_table_1:row0:col5', 'Pescador_1983_table_1:row1:col5', 'Pescador_1983_table_1:row2:col5', 'Pescador_1983_table_1:row3:col5', 'Pescador_1983_table_1:row4:col5'])
- unit_dimension_mismatch: 'K₁₂ min⁻¹' → Q301 (unit '[mass]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'K₂₁ min⁻¹' → Q302 (unit '[mass]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Co µg/ml' — extend the ontology if this is a real PK parameter (source ['Pescador_1983_table_1:row0:col9', 'Pescador_1983_table_1:row1:col9', 'Pescador_1983_table_1:row2:col9', 'Pescador_1983_table_1:row3:col9', 'Pescador_1983_table_1:row4:col9'])
- unit_dimension_mismatch: 'T½ᵢ min' → Q59 (unit '[mass]' vs ontology '[time]') — route to review
- dropped duplicate Q59 ('T½ᵢ min', value '12.83') — already have one for this compound
- unit_dimension_mismatch: 'Vol ml' → Q61 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['Pescador_1983_table_2:row0:col1', 'Pescador_1983_table_2:row0:col2', 'Pescador_1983_table_2:row0:col3', 'Pescador_1983_table_2:row0:col4'])
- dropped duplicate Q900 ('10', value '6.66') — already have one for this compound
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['Pescador_1983_table_2:row2:col1', 'Pescador_1983_table_2:row2:col2', 'Pescador_1983_table_2:row2:col3', 'Pescador_1983_table_2:row2:col4'])
- dropped unlinked row (NIL): '32' — extend the ontology if this is a real PK parameter (source ['Pescador_1983_table_2:row3:col1', 'Pescador_1983_table_2:row3:col2', 'Pescador_1983_table_2:row3:col3', 'Pescador_1983_table_2:row3:col4'])
- dropped unlinked row (NIL): '64' — extend the ontology if this is a real PK parameter (source ['Pescador_1983_table_2:row4:col1', 'Pescador_1983_table_2:row4:col2', 'Pescador_1983_table_2:row4:col3', 'Pescador_1983_table_2:row4:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=defibrotide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'defibrotide' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2
- transposed table Pescador_1983_table_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.308 (4/13 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[5]` | not captured | 4.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[64]` | 13.86 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 16458.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 0.209 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.357 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2]` | 12.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vol]` | 106.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[α]` | 0.60 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[β]` | 0.054 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[10]` | not captured | 6.66 | only_one_extracted |
| `gpt-oss:120b` | `parameters[64]` | 13.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc].value` | 16458.0 | 905.1 | mismatch |
| `gpt-oss:120b` | `parameters[k12].value` | 0.209 | 0.206 | mismatch |
| `gpt-oss:120b` | `parameters[k21].value` | 0.357 | 0.529 | mismatch |
| `gpt-oss:120b` | `parameters[t1⁄2].parameter_id` | Q57 | Q58 | mismatch |
| `gpt-oss:120b` | `parameters[t1⁄2].value` | 12.83 | 6.19 | mismatch |
| `gpt-oss:120b` | `parameters[vol].value` | 106.7 | 82.4 | mismatch |
| `gpt-oss:120b` | `parameters[α].value` | 0.60 | 0.79 | mismatch |
| `gpt-oss:120b` | `parameters[β].value` | 0.054 | 0.112 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | fail | [mass] | t | not captured | not captured | ['Pescador_1983_table_1:row0:col6', 'Pescador_1983_table_1:row1:col6', 'Pescador_1983_table_1:row2:col6', 'Pescador_1983_table_1:row3:col6', 'Pescador_1983_table_1:row4:col6'] |
| C5_dimension_Q302 | fail | [mass] | t | not captured | not captured | ['Pescador_1983_table_1:row0:col7', 'Pescador_1983_table_1:row1:col7', 'Pescador_1983_table_1:row2:col7', 'Pescador_1983_table_1:row3:col7', 'Pescador_1983_table_1:row4:col7'] |
| C5_dimension_Q59 | fail | [mass] | t | not captured | not captured | ['Pescador_1983_table_1:row0:col2', 'Pescador_1983_table_1:row1:col2', 'Pescador_1983_table_1:row2:col2', 'Pescador_1983_table_1:row3:col2', 'Pescador_1983_table_1:row4:col2'] |
| C5_dimension_Q61 | fail | [mass] | t | not captured | not captured | ['Pescador_1983_table_1:row0:col12', 'Pescador_1983_table_1:row1:col12', 'Pescador_1983_table_1:row2:col12', 'Pescador_1983_table_1:row3:col12', 'Pescador_1983_table_1:row4:col12'] |
| C5_dimension_Q68 | fail | [mass] | t | not captured | not captured | ['Pescador_1983_table_1:row0:col4', 'Pescador_1983_table_1:row1:col4', 'Pescador_1983_table_1:row2:col4', 'Pescador_1983_table_1:row3:col4', 'Pescador_1983_table_1:row4:col4'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Pescador_1983_table_1:row0:col10', 'Pescador_1983_table_1:row1:col10', 'Pescador_1983_table_1:row2:col10', 'Pescador_1983_table_1:row3:col10', 'Pescador_1983_table_1:row4:col10'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | not captured | not captured | not captured | ['Pescador_1983_table_1:row0:col8', 'Pescador_1983_table_1:row1:col8', 'Pescador_1983_table_1:row2:col8', 'Pescador_1983_table_1:row3:col8', 'Pescador_1983_table_1:row4:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_defibrotide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pescador_1983` / `Pescador_1983::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:58 UTC</sub>
