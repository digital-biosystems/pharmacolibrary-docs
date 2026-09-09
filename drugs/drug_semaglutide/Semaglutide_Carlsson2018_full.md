# semaglutide — `Semaglutide_Carlsson2018_full`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Carlsson Petri KC; Ingwersen SH; Flint A; Zacho J; Overgaard RV et al. (2018). Diabetes therapy : research, treatment and education of diabetes and related disorders 9
  ·  DOI: [10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

## Model component
<dbs-pgx drug="semaglutide" model-id="Semaglutide_Carlsson2018_full" status="extracted" stale="false" population="adults with type 2 diabetes" measured-compound="semaglutide" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 0.0286 | h-1 | 7.944444444444445e-06 | [1] / [h] | not captured | exact (1.0) | Carlsson_2018_table_S3:row0:col1 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 0.0478 | L/h | 1.3277777777777778e-08 | [l] / [h] | 12.9 | exact (1.0) | Carlsson_2018_table_S3:row1:col1, Carlsson_2018_table_S3:row1:col2, Carlsson_2018_table_S3:row1:col3, Carlsson_2018_table_S3:row1:col4, Carlsson_2018_table_S3:row1:col5 | — | not captured |
| V/F (L) | `Q76` · V/F | 12.2 | L | 0.012199999999999999 | [l] | 37.3 | exact (1.0) | Carlsson_2018_table_S3:row2:col1, Carlsson_2018_table_S3:row2:col2, Carlsson_2018_table_S3:row2:col3, Carlsson_2018_table_S3:row2:col4, Carlsson_2018_table_S3:row2:col5 | — | not captured |
| body_weight | `Q900` · body_weight | 0.774 | not captured | not captured | not captured | 3.27 | not captured (not captured) | Carlsson_2018_table_S3:row3:col1, Carlsson_2018_table_S3:row3:col2, Carlsson_2018_table_S3:row3:col3, Carlsson_2018_table_S3:row3:col4 | — | not captured |
| sex_male | `Q900` · sex_male | 1.04 | not captured | not captured | not captured | 0.963 | not captured (not captured) | Carlsson_2018_table_S3:row4:col1, Carlsson_2018_table_S3:row4:col2, Carlsson_2018_table_S3:row4:col3, Carlsson_2018_table_S3:row4:col4 | — | not captured |
| age_65_74_years | `Q900` · age_65_74_years | 0.988 | not captured | not captured | not captured | 1.11 | not captured (not captured) | Carlsson_2018_table_S3:row5:col1, Carlsson_2018_table_S3:row5:col2, Carlsson_2018_table_S3:row5:col3, Carlsson_2018_table_S3:row5:col4 | — | not captured |
| age_gt_74_years | `Q900` · age_gt_74_years | 0.961 | not captured | not captured | not captured | 2.41 | not captured (not captured) | Carlsson_2018_table_S3:row6:col1, Carlsson_2018_table_S3:row6:col2, Carlsson_2018_table_S3:row6:col3, Carlsson_2018_table_S3:row6:col4 | — | not captured |
| maintenance_dose_0.5_mg | `Q900` · maintenance_dose_0.5_mg | 1.00 | not captured | not captured | not captured | 0.855 | not captured (not captured) | Carlsson_2018_table_S3:row7:col1, Carlsson_2018_table_S3:row7:col2, Carlsson_2018_table_S3:row7:col3, Carlsson_2018_table_S3:row7:col4 | — | not captured |
| race_black | `Q900` · race_black | 0.974 | not captured | not captured | not captured | 3.28 | not captured (not captured) | Carlsson_2018_table_S3:row8:col1, Carlsson_2018_table_S3:row8:col2, Carlsson_2018_table_S3:row8:col3, Carlsson_2018_table_S3:row8:col4 | — | not captured |
| race_asian | `Q900` · race_asian | 0.989 | not captured | not captured | not captured | 1.25 | not captured (not captured) | Carlsson_2018_table_S3:row9:col1, Carlsson_2018_table_S3:row9:col2, Carlsson_2018_table_S3:row9:col3, Carlsson_2018_table_S3:row9:col4 | — | not captured |
| ethnicity_hispanic_or_latino | `Q900` · ethnicity_hispanic_or_latino | 1.06 | not captured | not captured | not captured | 1.62 | not captured (not captured) | Carlsson_2018_table_S3:row10:col1, Carlsson_2018_table_S3:row10:col2, Carlsson_2018_table_S3:row10:col3, Carlsson_2018_table_S3:row10:col4 | — | not captured |
| injection_site_thigh | `Q900` · injection_site_thigh | 1.04 | not captured | not captured | not captured | 2.1 | not captured (not captured) | Carlsson_2018_table_S3:row11:col1, Carlsson_2018_table_S3:row11:col2, Carlsson_2018_table_S3:row11:col3, Carlsson_2018_table_S3:row11:col4 | — | not captured |
| injection_site_upper_arm | `Q900` · injection_site_upper_arm | 1.08 | not captured | not captured | not captured | 2.13 | not captured (not captured) | Carlsson_2018_table_S3:row12:col1, Carlsson_2018_table_S3:row12:col2, Carlsson_2018_table_S3:row12:col3, Carlsson_2018_table_S3:row12:col4 | — | not captured |
| renal_mild_impairment | `Q900` · renal_mild_impairment | 0.948 | not captured | not captured | not captured | 0.963 | not captured (not captured) | Carlsson_2018_table_S3:row13:col1, Carlsson_2018_table_S3:row13:col2, Carlsson_2018_table_S3:row13:col3, Carlsson_2018_table_S3:row13:col4 | — | not captured |
| renal_moderate_impairment | `Q900` · renal_moderate_impairment | 0.955 | not captured | not captured | not captured | 2.95 | not captured (not captured) | Carlsson_2018_table_S3:row14:col1, Carlsson_2018_table_S3:row14:col2, Carlsson_2018_table_S3:row14:col3, Carlsson_2018_table_S3:row14:col4 | — | not captured |
| renal_severe_impairment | `Q900` · renal_severe_impairment | 0.920 | not captured | not captured | not captured | 4.15 | not captured (not captured) | Carlsson_2018_table_S3:row15:col1, Carlsson_2018_table_S3:row15:col2, Carlsson_2018_table_S3:row15:col3, Carlsson_2018_table_S3:row15:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Body weight, kg' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2'])
- dropped unlinked row (NIL): 'BMI, kg/m2' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): 'Duration of diabetes, years' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col2'])
- dropped unlinked row (NIL): 'HbA1c, %' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2'])
- covariate level 'Body weight' → Q900:body_weight = 0.774 (power on Q27)
- covariate level 'Sex - male' → Q900:sex_male = 1.04 (linear_fractional on Q27)
- covariate level 'Age 65–74 years' → Q900:age_65_74_years = 0.988 (linear_fractional on Q27)
- covariate level 'Age &gt;74 years' → Q900:age_gt_74_years = 0.961 (linear_fractional on Q27)
- covariate level 'Maintenance dose 0.5 mg' → Q900:maintenance_dose_0.5_mg = 1.00 (linear_fractional on Q27)
- covariate level 'Race - black' → Q900:race_black = 0.974 (linear_fractional on Q27)
- covariate level 'Race - Asian' → Q900:race_asian = 0.989 (linear_fractional on Q27)
- covariate level 'Ethnicity – Hispanic or Latino' → Q900:ethnicity_hispanic_or_latino = 1.06 (linear_fractional on Q27)
- covariate level 'Injection site - thigh' → Q900:injection_site_thigh = 1.04 (linear_fractional on Q27)
- covariate level 'Injection site - upper arm' → Q900:injection_site_upper_arm = 1.08 (linear_fractional on Q27)
- covariate level 'Renal - Mild impairment' → Q900:renal_mild_impairment = 0.948 (linear_fractional on Q27)
- covariate level 'Renal - Moderate impairment' → Q900:renal_moderate_impairment = 0.955 (linear_fractional on Q27)
- covariate level 'Renal - Severe impairment' → Q900:renal_severe_impairment = 0.920 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- model-stage split: 'full' is the full model of Carlsson_2018 (paper reports 2 stages: base, full); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S2 transcribed (15 record(s), model stage 'base')
- companion parameter table S3 transcribed (67 record(s), model stage 'full')
- LLM selected parameter table(s) S2, S3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 16 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Carlsson_2018_table_S3:row1:col1', 'Carlsson_2018_table_S3:row1:col2', 'Carlsson_2018_table_S3:row1:col3', 'Carlsson_2018_table_S3:row1:col4', 'Carlsson_2018_table_S3:row1:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Carlsson_2018_table_S3:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Carlsson_2018_table_S3:row2:col1', 'Carlsson_2018_table_S3:row2:col2', 'Carlsson_2018_table_S3:row2:col3', 'Carlsson_2018_table_S3:row2:col4', 'Carlsson_2018_table_S3:row2:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0478 L/h | not captured | not captured | ['Carlsson_2018_table_S3:row1:col1', 'Carlsson_2018_table_S3:row1:col2', 'Carlsson_2018_table_S3:row1:col3', 'Carlsson_2018_table_S3:row1:col4', 'Carlsson_2018_table_S3:row1:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.2 L | not captured | not captured | ['Carlsson_2018_table_S3:row2:col1', 'Carlsson_2018_table_S3:row2:col2', 'Carlsson_2018_table_S3:row2:col3', 'Carlsson_2018_table_S3:row2:col4', 'Carlsson_2018_table_S3:row2:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carlsson_2018` / `Carlsson_2018::full`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_modelica.zip" download>Semaglutide_Carlsson2018_full_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_fmi.zip" download>Semaglutide_Carlsson2018_full_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_matlab.zip" download>Semaglutide_Carlsson2018_full_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_matlab_simbio.zip" download>Semaglutide_Carlsson2018_full_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_sbml.zip" download>Semaglutide_Carlsson2018_full_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_semaglutide/Semaglutide_Carlsson2018_full/Semaglutide_Carlsson2018_full_cellml.zip" download>Semaglutide_Carlsson2018_full_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
