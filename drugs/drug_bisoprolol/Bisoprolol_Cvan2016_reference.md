<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;bisoprolol&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/&quot;},{&quot;label&quot;:&quot;Cvan_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bisoprolol_Cvan2016_reference&quot;,&quot;label&quot;:&quot;Cvan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bisoprolol_Momilovi2019_reference&quot;,&quot;label&quot;:&quot;Mom\u010dilovi\u0107_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Momilovi2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2016_reference&quot;,&quot;label&quot;:&quot;Nikolic_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bisoprolol_Nikolic2018_reference&quot;,&quot;label&quot;:&quot;Nikolic_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bisoprolol/Bisoprolol_Nikolic2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bisoprolol — `Bisoprolol_Cvan2016_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="bisoprolol" model-id="Bisoprolol_Cvan2016_reference" status="accepted_with_caveats" stale="false" population="patients with chronic heart failure" measured-compound="bisoprolol" parameterization="mechanistic" topology="1C"></div>

## Citation
KatjaCvan Trobec katja.cvan.trobec@gmail.com Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, IztokGrabnar Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, MojcaKerecKos Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, TomazVovk Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, JurijTrontelj Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, StefanDAnker Department of Cardiology and Pneumology Innovative Clinical Trials University Medical Center Göttingen (UMG) Göttingen Germany et al. PHARMACOKINETICS AND DISPOSITION Bisoprolol pharmacokinetics and body composition in patients with chronic heart failure: a longitudinal study (2016).
  ·  DOI: [10.1007/s00228-016-2041-1](https://doi.org/10.1007/s00228-016-2041-1)

## Population and dosing

**Population:** patients with chronic heart failure · condition chronic heart failure · age group adult · n = 46.

**Dosing:** 1.25, 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference.svg" alt="Bisoprolol_Cvan2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | covariates |
|---|---|---|---|---|
| Ka (h -1 ) | kabs | 12.2 | h -1 | — |
| CL (L/h) | CL | 3.5 | L/h | — |
| V (L) | V | 3.6 | L | linear_fractional on wt=31.8 |
| Additive (ng/mL) | add_error | 49.9 | ng/mL | — |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (add_error), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bisoprolol, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | covariates |
|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1 ) | `Q49` · kabs | 12.2 | h -1 | 0.003389 | 1/s | 1/h | exact (1) | tab_0:row3:col1, tab_0:row3:col2 | — |
| CL (L/h) | `Q22` · CL | 3.5 | L/h | 9.722e-07 | m3/s | l/h | exact (1) | tab_0:row4:col1, tab_0:row4:col2 | — |
| V (L) | `Q61` · V | 3.6 | L | 0.0036 | m3 | l | exact (1) | tab_0:row6:col1, tab_0:row6:col2 | linear_fractional on wt=31.8 |
| Additive (ng/mL) | `Q317` · add_error | 49.9 | ng/mL |  |  | ng/ml | llm (0.5) | tab_0:row20:col1, tab_0:row20:col2 | — |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q22 ('Effect of MDRD4 on CL a', value '12.8') — already have one for this compound
- dropped duplicate Q61 ('Effect of SMI on V b', value '27.1') — already have one for this compound
- dropped duplicate Q22 ('CL-V correlation', value '63.8') — already have one for this compound
- dropped unlinked row (NIL): 'Proportional (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row21:col1'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number None (source ['tab_0:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bisoprolol
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row2:col3 = 'Mean (95 % CI)'
- unparsed cell tab_0:row3:col3 = '2.50 (1.61-3.81)'
- unparsed cell tab_0:row4:col3 = '10.4 (9.8-11.1)'
- unparsed cell tab_0:row5:col3 = '0.614 (0.416-0.778)'
- unparsed cell tab_0:row6:col3 = '218 (203-238)'
- unparsed cell tab_0:row7:col3 = '0.00563 (0.00146-0.00983)'
- unparsed cell tab_0:row8:col3 = '0.718 (0.319-1.216)'
- unparsed cell tab_0:row10:col1 = '94.4 % (46.7 %)'
- unparsed cell tab_0:row10:col3 = '101.0 % (18.6 %-248.0 %)'
- unparsed cell tab_0:row11:col1 = '13.2 % (37.8 %)'
- unparsed cell tab_0:row11:col3 = '13.9 % (2.0 %-21.3 %)'
- unparsed cell tab_0:row12:col1 = '13.5 % (23.9 %)'
- unparsed cell tab_0:row12:col3 = '13.4 % (5.6 %-21.5 %)'
- unparsed cell tab_0:row15:col1 = '70.0 % (62.7 %)'
- unparsed cell tab_0:row15:col3 = '74.9 % (20.4 %-156.1 %)'
- unparsed cell tab_0:row16:col1 = '26.1 % (15.3 %)'
- unparsed cell tab_0:row16:col3 = '25.3 % (18.4 %-33.1 %)'
- unparsed cell tab_0:row17:col1 = '10.2 % (48.5 %)'
- unparsed cell tab_0:row17:col3 = '10.4 % (5.2 %-16.2 %)'
- unparsed cell tab_0:row19:col1 = '(27.7 %)'
- unparsed cell tab_0:row20:col3 = '0.510 (0.207-0.949)'
- unparsed cell tab_0:row21:col2 = '14.2 %'
- unparsed cell tab_0:row21:col3 = '4.64 (3.33-5.96)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[additive]` | 49.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].value` | 3.5 | 10.4 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 12.2 | 2.31 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v_wt]` |  | 0.00568 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 3.6 | 218 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | bisoprolol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bisoprolol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C5_dimension_Q317 | pass | [mass] / [length] ** 3 |  | ['tab_0:row20:col1', 'tab_0:row20:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_0:row3:col1', 'tab_0:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_0:row6:col1', 'tab_0:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.5 | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.5 L/h | ['tab_0:row4:col1', 'tab_0:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.6 L | ['tab_0:row6:col1', 'tab_0:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=bisoprolol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_modelica.zip" download>Bisoprolol_Cvan2016_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_fmi.zip" download>Bisoprolol_Cvan2016_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_matlab.zip" download>Bisoprolol_Cvan2016_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_matlab_simbio.zip" download>Bisoprolol_Cvan2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_sbml.zip" download>Bisoprolol_Cvan2016_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_cellml.zip" download>Bisoprolol_Cvan2016_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3254 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.25e-06 | kg |
| input | model | `Cl` | 9.722e-07 | m3/s |
| input | model | `VdPerKg` | 5.143e-05 | m3/kg |
| input | model | `ka` | 0.003389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): KatjaCvan Trobec katja.cvan.trobec@gmail.com Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, IztokGrabnar Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, MojcaKerecKos Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, TomazVovk Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, JurijTrontelj Faculty of Pharmacy University of Ljubljana Ljubljana Slovenia, StefanDAnker Department of Cardiology and Pneumology Innovative Clinical Trials University Medical Center Göttingen (UMG) Göttingen Germany et al. PHARMACOKINETICS AND DISPOSITION Bisoprolol pharmacokinetics and body composition in patients with chronic heart failure: a longitudinal study (2016). [doi:10.1007/s00228-016-2041-1](https://doi.org/10.1007/s00228-016-2041-1)

**This record:** Pharmacolibrary v26.09, model `Bisoprolol_Cvan2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference>

```bibtex
@misc{pharmacolibrary_BisoprololCvan2016reference,
  title  = {{Pharmacolibrary model Bisoprolol_Cvan2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference},
  note   = {Parameters from doi:10.1007/s00228-016-2041-1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1.25 mg, single dose, first-order absorption (ka 12.2 /h, F 0.9). Doses in the paper: 1.25–20 mg.

<dbs-fmusim paramsurl="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference/Bisoprolol_Cvan2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bisoprolol_Cvan2016_reference_params.json` · controls `Bisoprolol_Cvan2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbisoprolol%5D%20Bisoprolol_Cvan2016_reference&body=Drug%3A%20bisoprolol%0ARecord%3A%20Bisoprolol_Cvan2016_reference%0APaper%3A%20Cvan_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bisoprolol/Bisoprolol_Cvan2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-07-15 10:08 UTC</sub>
