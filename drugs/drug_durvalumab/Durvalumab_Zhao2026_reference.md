<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Zhao_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Zhao2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="durvalumab" model-id="Durvalumab_Zhao2026_reference" status="accepted_with_caveats" stale="false" population="Patients with urothelial carcinoma, NSCLC, SCLC and other solid tumours in the pooled PopPK dataset, including patients with resectable NSCLC" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Zhao X, Ding J, Zhao J, Zhang L, Abegesah A, Zhang YQ et al. Population pharmacokinetics and exposure-response analysis of durvalumab in patients with resectable stage II to IIIB (N2) NSCLC in the phase III AEGEAN study. British journal of clinical pharmacology 92(3):980–996 (2026).
  ·  DOI: [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287)

## Population and dosing

**Population:** Patients with urothelial carcinoma, NSCLC, SCLC and other solid tumours in the pooled PopPK dataset, including patients with resectable NSCLC · condition Cancer, including urothelial carcinoma, NSCLC, SCLC and other solid tumours · age group adult.

**Dosing:** 1500 mg, iv, multiple.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference.svg" alt="Durvalumab_Zhao2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL | CL | 0.285 | L/day | 1.68 | 0.0845 (None% RSE) |
| V1 | V1 | 3.42 | L | 0.962 | 0.0563 (None% RSE) |
| V2 | V2 | 2.30 | L | 2.09 |  |
| Qintercompartmental | Q | 0.381 | L/h | 4.90 |  |
| albumin_on_cl | albumin_on_cl | -0.537 |  | 2.88 |  |
| sex_on_v1 | sex_on_v1 | -0.143 |  | 8.27 |  |
| theta_cl_creatinine | theta_cl_creatinine | 0.111 |  | 19.1 |  |
| theta_cl_sex | theta_cl_sex | -0.165 |  | 7.40 |  |
| theta_q319_bodyweight | theta_q319_bodyweight | 0.382 |  | 9.31 |  |
| theta_q319_bodyweight | theta_q319_bodyweight | 0.502 |  | 5.73 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has durvalumab, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.285 | L/day | 3.299e-09 | m3/s | L/h | 1.68 | exact (1) | bcp70287-tbl-0003:row2:col1, bcp70287-tbl-0003:row2:col2, bcp70287-tbl-0003:row2:col3 | 0.0845 (None% RSE) |
| V1 | `Q63` · V1 | 3.42 | L | 0.00342 | m3 | L | 0.962 | exact (1) | bcp70287-tbl-0003:row3:col1, bcp70287-tbl-0003:row3:col2, bcp70287-tbl-0003:row3:col3 | 0.0563 (None% RSE) |
| V2 | `Q64` · V2 | 2.30 | L | 0.0023 | m3 | L | 2.09 | exact (1) | bcp70287-tbl-0003:row4:col1, bcp70287-tbl-0003:row4:col2, bcp70287-tbl-0003:row4:col3 |  |
| Qintercompartmental | `Q30` · Q | 0.381 | L/h | 1.058e-07 | m3/s | L/h | 4.90 | llm (0.6) | bcp70287-tbl-0003:row5:col1, bcp70287-tbl-0003:row5:col2, bcp70287-tbl-0003:row5:col3 |  |
| albumin_on_cl | `Q900` · albumin_on_cl | -0.537 |  |  |  |  | 2.88 |  | bcp70287-tbl-0003:row10:col1, bcp70287-tbl-0003:row10:col2, bcp70287-tbl-0003:row10:col3 |  |
| sex_on_v1 | `Q900` · sex_on_v1 | -0.143 |  |  |  |  | 8.27 |  | bcp70287-tbl-0003:row17:col1, bcp70287-tbl-0003:row17:col2, bcp70287-tbl-0003:row17:col3 |  |
| theta_cl_creatinine | `Q900` · theta_cl_creatinine | 0.111 |  |  |  |  | 19.1 |  | bcp70287-tbl-0003:row11:col1, bcp70287-tbl-0003:row11:col2, bcp70287-tbl-0003:row11:col3 |  |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.165 |  |  |  |  | 7.40 |  | bcp70287-tbl-0003:row13:col1, bcp70287-tbl-0003:row13:col2, bcp70287-tbl-0003:row13:col3 |  |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 0.382 |  |  |  |  | 9.31 |  | bcp70287-tbl-0003:row16:col1, bcp70287-tbl-0003:row16:col2, bcp70287-tbl-0003:row16:col3 |  |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 0.502 |  |  |  |  | 5.73 |  | bcp70287-tbl-0003:row18:col1, bcp70287-tbl-0003:row18:col2, bcp70287-tbl-0003:row18:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ETA CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Cov CL‐V1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA V1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ETA T max' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive component' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('T max change CL', value '-0.414') — already have one for this compound
- dropped duplicate Q22 ('TC50 change CL', value '47.4') — already have one for this compound
- dropped duplicate Q22 ('LAM change CL', value '1.00') — already have one for this compound
- covariate level 'Albumin on CL' → Q900:albumin_on_cl = -0.537 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'ECOG status on CL' — extend the ontology if this is a real PK parameter (source ['bcp70287-tbl-0003:row12:col1', 'bcp70287-tbl-0003:row12:col2', 'bcp70287-tbl-0003:row12:col3'])
- dropped duplicate Q22 ('COMB1 on CL', value '-0.0694') — already have one for this compound
- dropped duplicate Q22 ('COMB 2 on CL', value '-0.0561') — already have one for this compound
- covariate level 'Sex on V1' → Q900:sex_on_v1 = -0.143 (linear_fractional on Q22)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL' → L/day (from the paper text: 'The text states that the typical parameter estimate for clearance was “0.285 L/day.”')
- implicit units: 'V1' → L (from the paper text: 'The text states that the typical parameter estimate for central volume of distribution was “3.42 L.”')
- implicit units: 'V2' → L (from the paper text: 'The text states that the typical parameter estimate for peripheral volume of distribution was “2.30 L.”')
- implicit units: 'Qintercompartmental' → L/h (from the popPK convention: 'No unit is stated for Qintercompartmental. Intercompartmental clearances are conventionally expressed in L/h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=durvalumab
- molar mass: none found for 'durvalumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp70287-tbl-0003:row2:col4 = '[0.270; 0.303]'
- unparsed cell bcp70287-tbl-0003:row3:col4 = '[3.38; 3.48]'
- unparsed cell bcp70287-tbl-0003:row4:col4 = '[2.15; 2.44]'
- unparsed cell bcp70287-tbl-0003:row5:col4 = '[0.297; 0.465]'
- unparsed cell bcp70287-tbl-0003:row6:col4 = '[−0.465; −0.360]'
- unparsed cell bcp70287-tbl-0003:row7:col4 = '[32.8; 71.9]'
- unparsed cell bcp70287-tbl-0003:row10:col4 = '[−0.776; −0.389]'
- unparsed cell bcp70287-tbl-0003:row11:col4 = '[0.0699; 0.153]'
- unparsed cell bcp70287-tbl-0003:row12:col4 = '[−0.0836; −0.0325]'
- unparsed cell bcp70287-tbl-0003:row13:col4 = '[−0.189; −0.139]'
- unparsed cell bcp70287-tbl-0003:row14:col4 = '[−0.0984; −0.0406]'
- unparsed cell bcp70287-tbl-0003:row15:col4 = '[−0.108; −0.00867]'
- unparsed cell bcp70287-tbl-0003:row16:col4 = '[0.311; 0.453]'
- unparsed cell bcp70287-tbl-0003:row17:col4 = '[−0.166; −0.121]'
- unparsed cell bcp70287-tbl-0003:row18:col4 = '[0.446; 0.558]'
- unparsed cell bcp70287-tbl-0003:row20:col4 = '[0.0737; 0.0942]'
- unparsed cell bcp70287-tbl-0003:row21:col4 = '[0.0345; 0.0471]'
- unparsed cell bcp70287-tbl-0003:row22:col4 = '[0.0482; 0.0644]'
- unparsed cell bcp70287-tbl-0003:row23:col4 = '[0.0341; 0.0772]'
- unparsed cell bcp70287-tbl-0003:row25:col4 = '[0.245; 0.261]'
- unparsed cell bcp70287-tbl-0003:row26:col4 = '[4.16; 6.80]'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.583 (14/24 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[bodyweight_on_cl]` |  | 0.382 | only_one_extracted |
| `qwen3.8-27b` | `parameters[bodyweight_on_v1]` |  | 0.502 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[creatinine_clearance_on_cl]` |  | 0.111 | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_cl]` |  | -0.165 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_creatinine]` | 0.111 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex]` | -0.165 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_bodyweight]` | 0.382 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | durvalumab | unknown | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | durvalumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q22 | pass | 0.285 | 0.285 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['bcp70287-tbl-0003:row2:col1', 'bcp70287-tbl-0003:row2:col2', 'bcp70287-tbl-0003:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['bcp70287-tbl-0003:row5:col1', 'bcp70287-tbl-0003:row5:col2', 'bcp70287-tbl-0003:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['bcp70287-tbl-0003:row3:col1', 'bcp70287-tbl-0003:row3:col2', 'bcp70287-tbl-0003:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['bcp70287-tbl-0003:row4:col1', 'bcp70287-tbl-0003:row4:col2', 'bcp70287-tbl-0003:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.285 |  |  | ['bcp70287-tbl-0003:row2:col1', 'bcp70287-tbl-0003:row2:col2', 'bcp70287-tbl-0003:row2:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0119 L/h |  |  | ['bcp70287-tbl-0003:row2:col1', 'bcp70287-tbl-0003:row2:col2', 'bcp70287-tbl-0003:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L |  |  | ['bcp70287-tbl-0003:row3:col1', 'bcp70287-tbl-0003:row3:col2', 'bcp70287-tbl-0003:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.3 L |  |  | ['bcp70287-tbl-0003:row4:col1', 'bcp70287-tbl-0003:row4:col2', 'bcp70287-tbl-0003:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=durvalumab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_modelica.zip" download>Durvalumab_Zhao2026_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_fmi.zip" download>Durvalumab_Zhao2026_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_matlab.zip" download>Durvalumab_Zhao2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_matlab_simbio.zip" download>Durvalumab_Zhao2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_sbml.zip" download>Durvalumab_Zhao2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_cellml.zip" download>Durvalumab_Zhao2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0015 | kg |
| input | model | `Cl` | 3.299e-09 | m3/s |
| input | model | `VdPerKg` | 4.886e-05 | m3/kg |
| input | model | `k12` | 3.095e-05 | 1/s |
| input | model | `k21` | 4.601e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhao X, Ding J, Zhao J, Zhang L, Abegesah A, Zhang YQ et al. Population pharmacokinetics and exposure-response analysis of durvalumab in patients with resectable stage II to IIIB (N2) NSCLC in the phase III AEGEAN study. British journal of clinical pharmacology 92(3):980–996 (2026). [doi:10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287)

**This record:** Pharmacolibrary v26.09, model `Durvalumab_Zhao2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_durvalumab/Durvalumab_Zhao2026_reference>

```bibtex
@misc{pharmacolibrary_DurvalumabZhao2026reference,
  title  = {{Pharmacolibrary model Durvalumab_Zhao2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_durvalumab/Durvalumab_Zhao2026_reference},
  note   = {Parameters from doi:10.1002/bcp.70287},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1500 mg infusion over 10 min, single dose. Dose in the paper: 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Durvalumab_Zhao2026_reference_params.json` · controls `Durvalumab_Zhao2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdurvalumab%5D%20Durvalumab_Zhao2026_reference&body=Drug%3A%20durvalumab%0ARecord%3A%20Durvalumab_Zhao2026_reference%0APaper%3A%20Zhao_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_durvalumab/Durvalumab_Zhao2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:18 UTC</sub>
