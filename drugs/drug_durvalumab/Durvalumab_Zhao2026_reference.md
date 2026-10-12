<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Zhao_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Zhao2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.583). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has durvalumab, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287)

<div class="pk-model-meta" hidden drug="durvalumab" model-id="Durvalumab_Zhao2026_reference" status="accepted_with_caveats" stale="false" population="Patients with urothelial carcinoma, NSCLC, SCLC and other solid tumours in the pooled PopPK dataset, including patients with resectable NSCLC" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.285 | L/day | 3.298611111111111e-09 | L/h | 1.68 | exact (1.0) | bcp70287-tbl-0003:row2:col1, bcp70287-tbl-0003:row2:col2, bcp70287-tbl-0003:row2:col3 | — | 0.0845 (None% RSE) |
| V1 | `Q63` · V1 | 3.42 | L | 0.00342 | L | 0.962 | exact (1.0) | bcp70287-tbl-0003:row3:col1, bcp70287-tbl-0003:row3:col2, bcp70287-tbl-0003:row3:col3 | — | 0.0563 (None% RSE) |
| V2 | `Q64` · V2 | 2.30 | L | 0.0023 | L | 2.09 | exact (1.0) | bcp70287-tbl-0003:row4:col1, bcp70287-tbl-0003:row4:col2, bcp70287-tbl-0003:row4:col3 | — | not captured |
| Qintercompartmental | `Q30` · Q | 0.381 | L/h | 1.0583333333333333e-07 | L/h | 4.90 | llm (0.6) | bcp70287-tbl-0003:row5:col1, bcp70287-tbl-0003:row5:col2, bcp70287-tbl-0003:row5:col3 | — | not captured |
| albumin_on_cl | `Q900` · albumin_on_cl | -0.537 | not captured | not captured | not captured | 2.88 | not captured (not captured) | bcp70287-tbl-0003:row10:col1, bcp70287-tbl-0003:row10:col2, bcp70287-tbl-0003:row10:col3 | — | not captured |
| sex_on_v1 | `Q900` · sex_on_v1 | -0.143 | not captured | not captured | not captured | 8.27 | not captured (not captured) | bcp70287-tbl-0003:row17:col1, bcp70287-tbl-0003:row17:col2, bcp70287-tbl-0003:row17:col3 | — | not captured |
| theta_cl_creatinine | `Q900` · theta_cl_creatinine | 0.111 | not captured | not captured | not captured | 19.1 | not captured (not captured) | bcp70287-tbl-0003:row11:col1, bcp70287-tbl-0003:row11:col2, bcp70287-tbl-0003:row11:col3 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.165 | not captured | not captured | not captured | 7.40 | not captured (not captured) | bcp70287-tbl-0003:row13:col1, bcp70287-tbl-0003:row13:col2, bcp70287-tbl-0003:row13:col3 | — | not captured |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 0.382 | not captured | not captured | not captured | 9.31 | not captured (not captured) | bcp70287-tbl-0003:row16:col1, bcp70287-tbl-0003:row16:col2, bcp70287-tbl-0003:row16:col3 | — | not captured |
| theta_q319_bodyweight | `Q900` · theta_q319_bodyweight | 0.502 | not captured | not captured | not captured | 5.73 | not captured (not captured) | bcp70287-tbl-0003:row18:col1, bcp70287-tbl-0003:row18:col2, bcp70287-tbl-0003:row18:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[bodyweight_on_cl]` | not captured | 0.382 | only_one_extracted |
| `qwen3.8-27b` | `parameters[bodyweight_on_v1]` | not captured | 0.502 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[creatinine_clearance_on_cl]` | not captured | 0.111 | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_cl]` | not captured | -0.165 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_creatinine]` | 0.111 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex]` | -0.165 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_bodyweight]` | 0.382 | not captured | only_one_extracted |
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
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | pass | 0.285 | 0.285 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70287-tbl-0003:row2:col1', 'bcp70287-tbl-0003:row2:col2', 'bcp70287-tbl-0003:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70287-tbl-0003:row5:col1', 'bcp70287-tbl-0003:row5:col2', 'bcp70287-tbl-0003:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70287-tbl-0003:row3:col1', 'bcp70287-tbl-0003:row3:col2', 'bcp70287-tbl-0003:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70287-tbl-0003:row4:col1', 'bcp70287-tbl-0003:row4:col2', 'bcp70287-tbl-0003:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.285 | not captured | not captured | ['bcp70287-tbl-0003:row2:col1', 'bcp70287-tbl-0003:row2:col2', 'bcp70287-tbl-0003:row2:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0119 L/h | not captured | not captured | ['bcp70287-tbl-0003:row2:col1', 'bcp70287-tbl-0003:row2:col2', 'bcp70287-tbl-0003:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | not captured | not captured | ['bcp70287-tbl-0003:row3:col1', 'bcp70287-tbl-0003:row3:col2', 'bcp70287-tbl-0003:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.3 L | not captured | not captured | ['bcp70287-tbl-0003:row4:col1', 'bcp70287-tbl-0003:row4:col2', 'bcp70287-tbl-0003:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=durvalumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_durvalumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhao_2026` / `Zhao_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_durvalumab/models/modelica/Durvalumab_Zhao2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_durvalumab/models/modelica/Durvalumab_Zhao2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_durvalumab/models/modelica/Durvalumab_Zhao2026_reference.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference.svg" alt="Durvalumab_Zhao2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 1500 mg infusion over 10 min, single dose. Dose in the paper: 1500 mg.

<dbs-fmusim paramsurl="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_durvalumab/Durvalumab_Zhao2026_reference/Durvalumab_Zhao2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Durvalumab_Zhao2026_reference_params.json` · controls `Durvalumab_Zhao2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:18 UTC</sub>
