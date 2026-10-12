<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zanamivir&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/&quot;},{&quot;label&quot;:&quot;Zuo_2020 \u00b7 full&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zanamivir_Wollacott2016_reference&quot;,&quot;label&quot;:&quot;Wollacott_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Wollacott2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_base&quot;,&quot;label&quot;:&quot;Zuo_2020_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_base.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_final&quot;,&quot;label&quot;:&quot;Zuo_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_full&quot;,&quot;label&quot;:&quot;Zuo_2020_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_full.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zanamivir — `Zanamivir_Zuo2020_full`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 3.2, model 4.69); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — zanamivir: CL 6.81 L/hour, V1 12.3 L, Q 4.82 L/hour, V2 6.52 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[cl].covariate_forms`: this record has none, the second reading ['power', 'power', 'power']; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zuo P et al., Population Pharmacokinetic/Pharmacodyna…, Clinical and translational… (2020)
  ·  DOI: [10.1111/cts.12697](https://doi.org/10.1111/cts.12697)

<div class="pk-model-meta" hidden drug="zanamivir" model-id="Zanamivir_Zuo2020_full" status="needs_review" stale="false" population="healthy adults and hospitalized adult and pediatric subjects with influenza" measured-compound="zanamivir" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/hour | `Q22` · CL | 6.81 | L/hour | 1.8916666666666666e-06 | [l] / [h] | not captured | exact (1.0) | cts12697-tbl-0002:row2:col2 | — | 3.07 (None% RSE) |
| V1, L | `Q63` · V1 | 12.3 | L | 0.0123 | [l] | not captured | exact (1.0) | cts12697-tbl-0002:row3:col2 | — | not captured |
| Q, L/hour | `Q30` · Q | 4.82 | L/hour | 1.338888888888889e-06 | [l] / [h] | not captured | exact (1.0) | cts12697-tbl-0002:row4:col2 | — | not captured |
| V2, L | `Q64` · V2 | 6.52 | L | 0.00652 | [l] | not captured | exact (1.0) | cts12697-tbl-0002:row5:col2 | — | not captured |
| theta_q900_crcl_power | `Q900` · theta_q900_crcl_power | 97.0 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12697-tbl-0002:row7:col2 | — | not captured |
| theta_q335_crcl_power | `Q900` · theta_q335_crcl_power | 0.00923 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12697-tbl-0002:row8:col2 | — | not captured |
| theta_q900_wt_power | `Q900` · theta_q900_wt_power | 0.711 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12697-tbl-0002:row12:col2 | — | not captured |
| theta_q_wt_power | `Q900` · theta_q_wt_power | 0.658 | not captured | not captured | not captured | not captured | not captured (not captured) | cts12697-tbl-0002:row14:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIVCL, CV% (% η‐shrinkage)' routed out of structural estimates ('IIV')
- table section iiv: 'IIVV1, CV% (% η‐shrinkage)' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional error, CV% (% RSE)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (μg/mL), SD (% RSE)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('CL ~ FLU', value '0.763') — already have one for this compound
- dropped duplicate Q22 ('CL ~ RRT', value '0.900') — already have one for this compound
- dropped duplicate Q22 ('CL ~ ECMO', value '0.704') — already have one for this compound
- dropped unlinked row (NIL): 'V1/V2 ~ Study (NAI114346)' — extend the ontology if this is a real PK parameter (source ['cts12697-tbl-0002:row13:col2'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q335 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=zanamivir
- model-stage split: 'full model' is the full model of Zuo_2020 (paper reports 3 stages: base model, final model, full model); same population, different model-building step

**Extraction notes:**
- unparsed cell cts12697-tbl-0002:row2:col3 = '6.56, 7.05'
- unparsed cell cts12697-tbl-0002:row2:col5 = '6.83 (6.60, 7.0909)'
- unparsed cell cts12697-tbl-0002:row3:col3 = '11.8, 12.8'
- unparsed cell cts12697-tbl-0002:row3:col5 = '12.3 (11.88, 12.8)'
- unparsed cell cts12697-tbl-0002:row4:col3 = '4.06, 5.58'
- unparsed cell cts12697-tbl-0002:row4:col5 = '4.83 (4.20, 5.5858)'
- unparsed cell cts12697-tbl-0002:row5:col3 = '5.99, 7.05'
- unparsed cell cts12697-tbl-0002:row5:col5 = '6.54 (6.0606, 7.0404)'
- unparsed cell cts12697-tbl-0002:row7:col3 = '93.1, 101'
- unparsed cell cts12697-tbl-0002:row7:col5 = '97.1 (87.55, 111)'
- unparsed cell cts12697-tbl-0002:row8:col3 = '0.00786, 0.0106'
- unparsed cell cts12697-tbl-0002:row8:col5 = '0.00923 (0.00754, 0.0110)'
- unparsed cell cts12697-tbl-0002:row9:col3 = '0.701, 0.825'
- unparsed cell cts12697-tbl-0002:row9:col5 = '0.760 (0.707, 0.814)'
- unparsed cell cts12697-tbl-0002:row10:col3 = '0.645, 1.155'
- unparsed cell cts12697-tbl-0002:row11:col3 = '0.416, 0.992'
- unparsed cell cts12697-tbl-0002:row12:col3 = '0.652, 0.770'
- unparsed cell cts12697-tbl-0002:row12:col5 = '0.712 (0.649, 0.769)'
- unparsed cell cts12697-tbl-0002:row13:col3 = '0.699, 0.759'
- unparsed cell cts12697-tbl-0002:row13:col5 = '0.728 (0.700, 0.760)'
- unparsed cell cts12697-tbl-0002:row14:col3 = '0.538, 0.778'
- unparsed cell cts12697-tbl-0002:row14:col5 = '0.659 (0.514, 0.768)'
- unparsed cell cts12697-tbl-0002:row15:col3 = '2.41, 3.73'
- unparsed cell cts12697-tbl-0002:row15:col5 = '3.12 (2.5454, 3.8181)'
- unparsed cell cts12697-tbl-0002:row17:col5 = '18.5 (15.4, 22.7)'
- unparsed cell cts12697-tbl-0002:row18:col5 = '34.8 (30.5, 40.7)'
- unparsed cell cts12697-tbl-0002:row20:col5 = '26.2 (24.9, 27.5)'
- unparsed cell cts12697-tbl-0002:row21:col5 = '0.0269 (0.0243, 0.0294)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.471 (8/17 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | [] | ['power', 'power', 'power'] | mismatch |
| `qwen3.8-27b` | `parameters[q].covariate_forms` | ['power'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[q_wt]` | not captured | 0.658 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_crcl_power]` | not captured | 97.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q21_wt_power]` | not captured | 0.711 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q335_crcl_power]` | 0.00923 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_crcl_power]` | 97.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_wt_power]` | 0.711 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q_wt_power]` | 0.658 | not captured | only_one_extracted |

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
| C2_base_Q22 | pass | 6.81 | 6.82 | 1.0015 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12697-tbl-0002:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts12697-tbl-0002:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12697-tbl-0002:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts12697-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.81 | not captured | not captured | ['cts12697-tbl-0002:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.81 L/h | not captured | not captured | ['cts12697-tbl-0002:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.3 L | not captured | not captured | ['cts12697-tbl-0002:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.52 L | not captured | not captured | ['cts12697-tbl-0002:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=zanamivir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 3.2 | 4.694301389922161 | 1.467 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_zanamivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zuo_2020` / `Zuo_2020::full`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_zanamivir/models/modelica/Zanamivir_Zuo2020_full.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_zanamivir/models/modelica/Zanamivir_Zuo2020_full.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_zanamivir/models/modelica/Zanamivir_Zuo2020_full.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_modelica.zip" download>Zanamivir_Zuo2020_full_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_fmi.zip" download>Zanamivir_Zuo2020_full_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_matlab.zip" download>Zanamivir_Zuo2020_full_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_matlab_simbio.zip" download>Zanamivir_Zuo2020_full_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_sbml.zip" download>Zanamivir_Zuo2020_full_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_cellml.zip" download>Zanamivir_Zuo2020_full_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full.svg" alt="Zanamivir_Zuo2020_full diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 100 mg infusion over 10 min, single dose. Doses in the paper: 100, 300, 600, 1200 mg.

<dbs-fmusim paramsurl="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_zanamivir/Zanamivir_Zuo2020_full/Zanamivir_Zuo2020_full_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Zanamivir_Zuo2020_full_params.json` · controls `Zanamivir_Zuo2020_full_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:12 UTC</sub>
