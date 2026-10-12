<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Walsh_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Walsh_2023_Glucose&quot;,&quot;label&quot;:&quot;Walsh_2023 \u00b7 Glucose&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Walsh_2023_Glucose.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Walsh2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 0.522, the second reading 16.3; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:40:28.915529+00:00) predates the upstream re-run (2026-10-07 14:20:11.600387+00:00). Current validate status: `rejected`.

## Citation
Walsh S et al., Optimising intravenous salbutamol in ch…, Archives of disease in chil… (2023)
  ·  DOI: [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008)

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Walsh2023_reference" status="rejected" stale="true" population="children with acute asthma" measured-compound="salbutamol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Bioavailability [0-1] | `Q40` · Fab | 0.0925 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Walsh_2023_table_p23_1:row1:col1 | — | not captured |
| ka (h-1) | `Q49` · kabs | 16.7 | h-1 | 0.004638888888888889 | [1] / [h] | not captured | exact (1.0) | Walsh_2023_table_p23_1:row2:col1 | — | not captured |
| CL (l/h) | `Q22` · CL | 0.522 | l/h | 1.45e-07 | [l] / [h] | not captured | exact (1.0) | Walsh_2023_table_p23_1:row3:col1, Walsh_2023_table_p23_1:row3:col2 | — | not captured |
| Vc (l) | `Q63` · V1 | 1.79 | l | 0.0017900000000000001 | [l] | not captured | exact (1.0) | Walsh_2023_table_p23_1:row4:col1, Walsh_2023_table_p23_1:row4:col2 | — | not captured |
| Q (l/h) | `Q30` · Q | 8.58 | l/h | 2.3833333333333335e-06 | [l] / [h] | not captured | exact (1.0) | Walsh_2023_table_p23_1:row5:col1 | — | not captured |
| Vp (l) | `Q64` · V2 | 6.45 | l | 0.00645 | [l] | not captured | exact (1.0) | Walsh_2023_table_p23_1:row6:col1, Walsh_2023_table_p23_1:row6:col2 | — | not captured |
| BASE (ng/ml) | `Q86` · C0 | 1.04 | ng/ml | not captured | [ng] / [ml] | not captured | llm (0.6) | Walsh_2023_table_p23_1:row7:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional Error' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive Error (ng/ml)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive on logit-scale' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive Error (bpm)' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'BASE (ng/ml)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'E0 (fraction of PASS-score [0-9])' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row11:col1', 'Walsh_2023_table_p23_1:row11:col2'])
- dropped PD-category row 'EMAX (fraction of PASS-score [0-9])' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row12:col1'])
- dropped PD-category row 'EC50 (ng/ml)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row13:col1', 'Walsh_2023_table_p23_1:row19:col1', 'Walsh_2023_table_p23_1:row19:col2', 'Walsh_2023_table_p23_1:row24:col1', 'Walsh_2023_table_p23_1:row24:col2'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row14:col1'])
- dropped PD-category row 'E0 (mmol/l)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row17:col1'])
- dropped PD-category row 'EMAX' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row18:col1', 'Walsh_2023_table_p23_1:row18:col2', 'Walsh_2023_table_p23_1:row23:col1'])
- dropped PD-category row 'E0 (z-score)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row22:col1', 'Walsh_2023_table_p23_1:row22:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (9/12 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 0.522 | 16.3 | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 1.79 | 109 | mismatch |
| `gpt-oss-120b` | `parameters[vp].value` | 6.45 | 69.4 | mismatch |
| `gpt-oss:120b` | `parameters[base]` | not captured | 1.04 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | salbutamol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | salbutamol | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Walsh_2023_table_p23_1:row3:col1', 'Walsh_2023_table_p23_1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Walsh_2023_table_p23_1:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Walsh_2023_table_p23_1:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Walsh_2023_table_p23_1:row4:col1', 'Walsh_2023_table_p23_1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Walsh_2023_table_p23_1:row6:col1', 'Walsh_2023_table_p23_1:row6:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/ml | not captured | not captured | ['Walsh_2023_table_p23_1:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.522 | not captured | not captured | ['Walsh_2023_table_p23_1:row3:col1', 'Walsh_2023_table_p23_1:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.522 L/h | not captured | not captured | ['Walsh_2023_table_p23_1:row3:col1', 'Walsh_2023_table_p23_1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.79 L | not captured | not captured | ['Walsh_2023_table_p23_1:row4:col1', 'Walsh_2023_table_p23_1:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.45 L | not captured | not captured | ['Walsh_2023_table_p23_1:row6:col1', 'Walsh_2023_table_p23_1:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=salbutamol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salbutamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Walsh_2023` / `Walsh_2023::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salbutamol/models/modelica/Salbutamol_Walsh2023_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salbutamol/models/modelica/Salbutamol_Walsh2023_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salbutamol/models/modelica/Salbutamol_Walsh2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:20 UTC</sub>
