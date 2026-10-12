<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;nelfinavir&quot;,&quot;href&quot;:&quot;drugs/drug_nelfinavir/&quot;},{&quot;label&quot;:&quot;Hirt_2006 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nelfinavir — `Nelfinavir_Hirt2006_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The nelfinavir record was rejected because the metabolite M8 clearance parameter is reported as 62 with a percentage label '(CL 1M) (%)' but carries the unit liters/h, a dimension mismatch on a structural parameter.**

In the parent–metabolite structure for nelfinavir (metabolite M8 formed from nelfinavir), the M8 clearance entry has value 62 labeled as a percentage, yet its unit is given as liters/h, so the value cannot be a clearance in liters/h — a dimension mismatch on a structural parameter. Additionally, the elimination rate constant for M8 (0.51) has a garbled unit 'h Ϫ1' that could not be converted to SI units, so that parameter was left without a usable numeric value in standard units. Extracted — nelfinavir: V 596 liters, CL 35.5 liters/h, C0 1.17 ng/ml; M8: kel 0.51 h Ϫ1, Ct 0.27 ng/ml, CL 62 liters/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl 10].value`: this record has 35.5, the second reading 29.4; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Hirt D et al., Pregnancy-related effects on nelfinavir…, Antimicrobial agents and ch… (2006)
  ·  DOI: [10.1128/AAC.01596-05](https://doi.org/10.1128/AAC.01596-05)

<div class="pk-model-meta" hidden drug="nelfinavir" model-id="Nelfinavir_Hirt2006_reference" status="rejected" stale="false" population="pregnant and nonpregnant women with HIV infection" measured-compound="nelfinavir" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V (liters) | `Q61` · V | 596 | liters | 0.596 | [l] | not captured | exact (1.0) | tab_0:row4:col1, tab_0:row4:col2, tab_0:row4:col3 | — | not captured |
| CL 10 (liters/h) | `Q22` · CL | 35.5 | liters/h | 9.861111111111112e-06 | [l] / [h] | not captured | exact (1.0) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col3 | — | not captured |
| k M0 , PREG | `Q47` · kel | 0.51 | h Ϫ1 | 0.00014166666666666668 | [1] / [h] | not captured | llm (0.6) | tab_0:row9:col1, tab_0:row9:col2, tab_0:row9:col3 | — | not captured |
| NELFI (ng/ml) | `Q86` · C0 | 1.17 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | tab_0:row13:col1, tab_0:row13:col2, tab_0:row13:col3 | — | not captured |
| M8 (ng/ml) | `Q75` · Ct | 0.27 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | tab_0:row14:col1, tab_0:row14:col2, tab_0:row14:col3 | — | not captured |
| (CL 1M ) (%) | `Q22` · CL | 62 | liters/h | 1.7222222222222224e-05 | [l] / [h] | not captured | metabolite_elimination (0.85) | tab_0:row17:col1, tab_0:row17:col2, tab_0:row17:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL 10 , PREG' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL 10 , PREG', value '0.25') — already have one for this compound
- unit_dimension_mismatch: 'CL 10 and V, DEL' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CL 10 and V, DEL', value '2.63') — already have one for this compound
- dropped duplicate Q47 ('k M0 , BW', value '1.18') — already have one for this compound
- dropped duplicate Q47 ('k M0 , INN', value '1.03') — already have one for this compound
- unit_dimension_mismatch: 'NELFI (ng/ml)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q61 ('(V) (%)', value '118') — already have one for this compound
- dropped duplicate Q22 ('(CL 10 ) (%)', value '50') — already have one for this compound
- relinked '(CL 1M ) (%)' Q370 → Q22 for M8: a metabolite's own clearance is its elimination, not its formation
- dropped duplicate Q47 ('(k M0 ) (%)', value '59') — already have one for this compound
- unit inherited for CL (Q22): 'liters/h' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nelfinavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 6 linked by role; re-tagged parent→M8 ×18
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[(cl 1m )].parameter_id` | Q22 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[(cl 1m )].value` | 62 | 36 | mismatch |
| `gpt-oss-120b` | `parameters[cl 10].value` | 35.5 | 29.4 | mismatch |
| `gpt-oss-120b` | `parameters[k m0 , preg].value` | 0.51 | 0.18 | mismatch |
| `gpt-oss-120b` | `parameters[m8]` | 0.27 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[nelfi].parameter_id` | Q86 | Q75 | mismatch |
| `gpt-oss-120b` | `parameters[nelfi].value` | 1.17 | 0.96 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 596 | 200 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row9:col1', 'tab_0:row9:col2', 'tab_0:row9:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_0:row14:col1', 'tab_0:row14:col2', 'tab_0:row14:col3'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/ml | not captured | not captured | ['tab_0:row13:col1', 'tab_0:row13:col2', 'tab_0:row13:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 35.5 | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.5 L/h | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 62 L/h | not captured | not captured | ['tab_0:row17:col1', 'tab_0:row17:col2', 'tab_0:row17:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 596 L | not captured | not captured | ['tab_0:row4:col1', 'tab_0:row4:col2', 'tab_0:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_nelfinavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hirt_2006` / `Hirt_2006::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:20 UTC</sub>
