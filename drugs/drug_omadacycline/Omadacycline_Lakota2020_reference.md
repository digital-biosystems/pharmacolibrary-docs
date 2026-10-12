<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;omadacycline&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/&quot;},{&quot;label&quot;:&quot;Lakota_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Omadacycline_Chapagain2022_reference&quot;,&quot;label&quot;:&quot;Chapagain_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Chapagain2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Omadacycline_Lakota2020_reference&quot;,&quot;label&quot;:&quot;Lakota_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Lakota2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Omadacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_omadacycline/Omadacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# omadacycline — `Omadacycline_Lakota2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Oral bioavailability (F) and lag time (Tlag) defaulted to library values, and food covariate effects were not simulated for omadacycline.**

The record lists covariate multipliers of 1.68 and 3.59 for food effects, yet the simulation only ran the reference individual. Consequently, the extracted covariate parameters had no impact on the output. The missing F and Tlag values mean the simulated absorption profile relies on generic assumptions rather than paper-specific estimates. Extracted — omadacycline: CL 10.3 liters/h, V1 21.1 liters, V2 79.9 liters, Q 21.3 liters/h, V3 129 liters, kabs 1.74 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of amtime50: this record has none, the second reading 0.568; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Lakota EA et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2020)
  ·  DOI: [10.1128/AAC.02263-19](https://doi.org/10.1128/AAC.02263-19)

<div class="pk-model-meta" hidden drug="omadacycline" model-id="Omadacycline_Lakota2020_reference" status="needs_review" stale="false" population="mixed" measured-compound="omadacycline" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (liters/h) | `Q22` · CL | 10.3 | liters/h | 2.861111111111111e-06 | [l] / [h] | 0.682 | exact (1.0) | T2:row1:col1, T2:row1:col2 | — | None (7.72% RSE) |
| Vc (liters) | `Q63` · V1 | 21.1 | liters | 0.0211 | [l] | 2.20 | exact (1.0) | T2:row3:col1, T2:row3:col2 | — | None (10.9% RSE) |
| Vp1 (liters) | `Q64` · V2 | 79.9 | liters | 0.07990000000000001 | [l] | 0.0842 | exact (1.0) | T2:row6:col1, T2:row6:col2 | — | None (10.6% RSE) |
| CLd2 (liters/h) | `Q30` · Q | 21.3 | liters/h | 5.916666666666666e-06 | [l] / [h] | 0.242 | special_case (0.95) | T2:row8:col1, T2:row8:col2 | — | not captured |
| Vp2 (liters) | `Q77` · V3 | 129 | liters | 0.129 | [l] | 1.45 | exact (1.0) | T2:row9:col1, T2:row9:col2 | — | None (9.59% RSE) |
| ka (h−1) | `Q49` · kabs | 1.74 | h−1 | 0.00048333333333333334 | [1] / [h] | 1.55 | exact (1.0) | T2:row11:col1, T2:row11:col2 | — | None (4.79% RSE) |
| proportional_increase_for_consuming_food_predose | `Q900` · proportional_increase_for_consuming_food_predose | 1.68 | not captured | not captured | not captured | 8.15 | not captured (not captured) | T2:row16:col1, T2:row16:col2 | — | not captured |
| proportional_increase_for_consuming_food_with_dairy_products_predose | `Q900` · proportional_increase_for_consuming_food_with_dairy_products_predose | 3.59 | not captured | not captured | not captured | 4.48 | not captured (not captured) | T2:row17:col1, T2:row17:col2 | — | not captured |
| theta_q31_category | `Q900` · theta_q31_category | -0.280 | not captured | not captured | not captured | 21.8 | not captured (not captured) | T2:row14:col1, T2:row14:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'Proportional change in females' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2', 'T2:row5:col1', 'T2:row5:col2', 'T2:row7:col1', 'T2:row7:col2', 'T2:row10:col1', 'T2:row10:col2'])
- dropped duplicate Q22 ('CLd1 (liters/h)', value '101') — already have one for this compound
- dropped unlinked row (NIL): 'F0' — extend the ontology if this is a real PK parameter (source ['T2:row12:col1', 'T2:row12:col2'])
- dropped unlinked row (NIL): 'Fmax' — extend the ontology if this is a real PK parameter (source ['T2:row13:col1', 'T2:row13:col2'])
- dropped unlinked row (NIL): 'AMTIME50 (h)' — extend the ontology if this is a real PK parameter (source ['T2:row15:col1', 'T2:row15:col2'])
- covariate level 'Proportional increase for consuming food predose' → Q900:proportional_increase_for_consuming_food_predose = 1.68 (additive_shift on Q22)
- covariate level 'Proportional increase for consuming food with dairy products predose' → Q900:proportional_increase_for_consuming_food_with_dairy_products_predose = 3.59 (additive_shift on Q22)
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['T2:row18:col1', 'T2:row18:col2'])
- dropped unlinked row (NIL): 'ELF FRACb' — extend the ontology if this is a real PK parameter (source ['T2:row19:col1', 'T2:row19:col2'])
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (liters/h)); Q63 (Vc (liters)); Q64 (Vp1 (liters)); Q30 (CLd2 (liters/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=omadacycline
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T2:row20:col1 = '0.0497 (22.3% CV)'
- unparsed cell T2:row21:col1 = '0.885 (94.1% CV)'
- unparsed cell T2:row22:col1 = '0.423 (65.0% CV)'
- unparsed cell T2:row23:col1 = '0.0776 (27.9% CV)'
- unparsed cell T2:row24:col1 = '0.0759 (27.5% CV)'
- unparsed cell T2:row25:col1 = '0.154 (39.2% CV)'
- unparsed cell T2:row26:col1 = '0.0599c (24.5% CV)'
- unparsed cell T2:row27:col1 = '0.0599c (24.5% CV)'
- unparsed cell T2:row28:col1 = '0.0495 (22.2% CV)'
- unparsed cell T2:row31:col1 = '0.0217 (14.7% CV)'
- unparsed cell T2:row32:col1 = '0.00145 (0.0381 SD)'
- unparsed cell T2:row33:col1 = '0.206 (45.4% CV)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (16/24 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amtime50]` | not captured | 0.568 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | ['additive_shift', 'additive_shift'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[f0]` | not captured | 0.00663 | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional_increase_for_consuming_food_predose]` | 1.68 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[proportional_increase_for_consuming_food_with_dairy_products_predose]` | 3.59 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` | -0.280 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_category]` | not captured | -0.280 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_food]` | not captured | 1.68 | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row1:col1', 'T2:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row8:col1', 'T2:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.3 | not captured | not captured | ['T2:row1:col1', 'T2:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.3 L/h | not captured | not captured | ['T2:row1:col1', 'T2:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 21.1 L | not captured | not captured | ['T2:row3:col1', 'T2:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 79.9 L | not captured | not captured | ['T2:row6:col1', 'T2:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=omadacycline) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 9 | 0.000315624019015639 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped | 25 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_omadacycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lakota_2020` / `Lakota_2020::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_omadacycline/models/modelica/Omadacycline_Lakota2020_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_omadacycline/models/modelica/Omadacycline_Lakota2020_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_omadacycline/models/modelica/Omadacycline_Lakota2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_modelica.zip" download>Omadacycline_Lakota2020_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_fmi.zip" download>Omadacycline_Lakota2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_matlab.zip" download>Omadacycline_Lakota2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_matlab_simbio.zip" download>Omadacycline_Lakota2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_sbml.zip" download>Omadacycline_Lakota2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_cellml.zip" download>Omadacycline_Lakota2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference.svg" alt="Omadacycline_Lakota2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 1.74 /h, F 0.9). Doses in the paper: 100, 300, 450, 600 mg.

<dbs-fmusim paramsurl="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_omadacycline/Omadacycline_Lakota2020_reference/Omadacycline_Lakota2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Omadacycline_Lakota2020_reference_params.json` · controls `Omadacycline_Lakota2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:01 UTC</sub>
