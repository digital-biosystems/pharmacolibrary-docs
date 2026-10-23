<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;ivermectin&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/&quot;},{&quot;label&quot;:&quot;Alshehri_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivermectin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ivermectin_Kobylinski2017_reference&quot;,&quot;label&quot;:&quot;Kobylinski_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ivermectin_Duthaler2019_reference&quot;,&quot;label&quot;:&quot;Duthaler_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Duthaler2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ivermectin — `Ivermectin_Alshehri2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="ivermectin" model-id="Ivermectin_Alshehri2023_reference" status="accepted_with_caveats" stale="false" population="Wuchereria bancrofti-infected and uninfected adults in Côte d’Ivoire" measured-compound="ivermectin" parameterization="apparent" topology="2C"></div>

## Citation
Alshehri A, Chhonker YS, Bala V, Edi C, Bjerum CM, Koudou BG et al. Population pharmacokinetic model of ivermectin in mass drug administration against lymphatic filariasis. PLoS neglected tropical diseases 17(6):e0011319 (2023).
  ·  DOI: [10.1371/journal.pntd.0011319](https://doi.org/10.1371/journal.pntd.0011319)

## Population and dosing

**Population:** Wuchereria bancrofti-infected and uninfected adults in Côte d’Ivoire · condition lymphatic filariasis · age group adult.

**Dosing:** 14 mg, oral, single.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference.svg" alt="Ivermectin_Alshehri2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 7.02 | L/h | 6.7 |
| Q/F (L/h) | Q/F | 9.11 | L/h | 10.4 |
| Vc/F (L) | V1/F | 138 | L | 8.4 |
| Vp /F(L) | V2/F | 424.33 | L | 8.4 |
| Tlag (h) | tlag | 0.75 | h | 9.5 |
| Ka (1/h) | kabs | 0.71 | 1/h | 13.6 |
| sex_male_on_vp_f | sex_male_on_vp_f | -0.74 |  | 12.4 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.02 | L/h | 1.95e-06 | m3/s | l/h | 6.7 | exact (1) | pntd.0011319.t002:row2:col1 |
| Q/F (L/h) | `Q69` · Q/F | 9.11 | L/h | 2.531e-06 | m3/s | l/h | 10.4 | exact (1) | pntd.0011319.t002:row3:col1 |
| Vc/F (L) | `Q290` · V1/F | 138 | L | 0.138 | m3 | l | 8.4 | exact (1) | pntd.0011319.t002:row4:col1 |
| Vp /F(L) | `Q82` · V2/F | 424.33 | L | 0.4243 | m3 | l | 8.4 | space_fold (0.95) | pntd.0011319.t002:row5:col1 |
| Tlag (h) | `Q83` · tlag | 0.75 | h | 2700 | s | h | 9.5 | exact (1) | pntd.0011319.t002:row6:col1 |
| Ka (1/h) | `Q49` · kabs | 0.71 | 1/h | 0.0001972 | 1/s | 1/h | 13.6 | exact (1) | pntd.0011319.t002:row8:col1 |
| sex_male_on_vp_f | `Q900` · sex_male_on_vp_f | -0.74 |  |  |  |  | 12.4 |  | pntd.0011319.t002:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Additive residual error (ng/mL)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional residual error' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Tk0 (h)' — extend the ontology if this is a real PK parameter (source ['pntd.0011319.t002:row7:col1'])
- covariate level 'Sex (male) on Vp/F' → Q900:sex_male_on_vp_f = -0.74 (linear_fractional on Q27)
- dropped duplicate Q27 ('CL/F', value '0.25') — already have one for this compound
- dropped duplicate Q69 ('Q/F', value '0.19') — already have one for this compound
- dropped duplicate Q290 ('Vc/F', value '0.23') — already have one for this compound
- dropped duplicate Q82 ('Vp /F', value '0.17') — already have one for this compound
- dropped duplicate Q83 ('Tlag', value '0.35') — already have one for this compound
- dropped unlinked row (NIL): 'Tk0' — extend the ontology if this is a real PK parameter (source ['pntd.0011319.t002:row16:col1', 'pntd.0011319.t002:row16:col3'])
- dropped duplicate Q49 ('Ka', value '0.55') — already have one for this compound
- implicit units: 'Ka (1/h)' → 1/h (from the paper text: "The paper text explicitly states: 'Estimates of mean population values for Vc/F, CL/F, Q/F, Ka, TK0, and Tlag were 138 l")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ivermectin

**Extraction notes:**
- unparsed cell pntd.0011319.t002:row2:col3 = '7.01 (6.17–7.95)'
- unparsed cell pntd.0011319.t002:row3:col3 = '9.04 (7.43–10.88)'
- unparsed cell pntd.0011319.t002:row4:col3 = '137.17 (117–159.50)'
- unparsed cell pntd.0011319.t002:row5:col3 = '437.94 (368.45–530.87)'
- unparsed cell pntd.0011319.t002:row6:col3 = '0.76 (0.63–0.93)'
- unparsed cell pntd.0011319.t002:row7:col3 = '3.73 (3.33–4.11)'
- unparsed cell pntd.0011319.t002:row8:col3 = '0.72 (0.53–0.99)'
- unparsed cell pntd.0011319.t002:row9:col3 = '-0.77 (- 1.0–0.58)'
- unparsed cell pntd.0011319.t002:row19:col3 = '0.45 (0.37–0.64)'
- unparsed cell pntd.0011319.t002:row20:col3 = '0.22 (0.19–0.24)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (16/20 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[sex_male_on_vp_f]` | -0.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_sex]` |  | -0.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp /f].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pntd.0011319.t002:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pntd.0011319.t002:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pntd.0011319.t002:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['pntd.0011319.t002:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pntd.0011319.t002:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['pntd.0011319.t002:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.02 L/h | ['pntd.0011319.t002:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 138 L | ['pntd.0011319.t002:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 424 L | ['pntd.0011319.t002:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=ivermectin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_modelica.zip" download>Ivermectin_Alshehri2023_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_fmi.zip" download>Ivermectin_Alshehri2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_matlab.zip" download>Ivermectin_Alshehri2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_matlab_simbio.zip" download>Ivermectin_Alshehri2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_sbml.zip" download>Ivermectin_Alshehri2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_cellml.zip" download>Ivermectin_Alshehri2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.736 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 2700 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.4e-05 | kg |
| input | model | `Cl` | 1.95e-06 | m3/s |
| input | model | `VdPerKg` | 0.001971 | m3/kg |
| input | model | `k12` | 1.834e-05 | 1/s |
| input | model | `k21` | 5.964e-06 | 1/s |
| input | model | `ka` | 0.0001972 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Alshehri A, Chhonker YS, Bala V, Edi C, Bjerum CM, Koudou BG et al. Population pharmacokinetic model of ivermectin in mass drug administration against lymphatic filariasis. PLoS neglected tropical diseases 17(6):e0011319 (2023). [doi:10.1371/journal.pntd.0011319](https://doi.org/10.1371/journal.pntd.0011319)

**This record:** Pharmacolibrary v26.09, model `Ivermectin_Alshehri2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference>

```bibtex
@misc{pharmacolibrary_IvermectinAlshehri2023reference,
  title  = {{Pharmacolibrary model Ivermectin_Alshehri2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference},
  note   = {Parameters from doi:10.1371/journal.pntd.0011319},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 0.71 /h, lag 45 min, F 1). Dose in the paper: 14 mg.

<dbs-fmusim paramsurl="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference/Ivermectin_Alshehri2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ivermectin_Alshehri2023_reference_params.json` · controls `Ivermectin_Alshehri2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bivermectin%5D%20Ivermectin_Alshehri2023_reference&body=Drug%3A%20ivermectin%0ARecord%3A%20Ivermectin_Alshehri2023_reference%0APaper%3A%20Alshehri_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:32 UTC</sub>
