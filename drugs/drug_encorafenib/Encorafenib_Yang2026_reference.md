<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;encorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_encorafenib/&quot;},{&quot;label&quot;:&quot;Yang_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Encorafenib_Yang2026_reference&quot;,&quot;label&quot;:&quot;Yang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# encorafenib — `Encorafenib_Yang2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 64, model 7.76); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="encorafenib" model-id="Encorafenib_Yang2026_reference" status="needs_review" stale="false" population="healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors" measured-compound="encorafenib" parameterization="apparent" topology="2C"></div>

## Citation
Yang DZ, Hahn EM, Piscitelli J, Pithavala YK, Hibma JE. Population Pharmacokinetic Modeling of Encorafenib in Healthy Participants and Patients with BRAF V600-Mutant Solid Tumors: A Semi-mechanistic Autoinduction Model. Clinical pharmacokinetics 65(5):693–707 (2026).
  ·  DOI: [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y)

## Population and dosing

**Population:** healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors · condition healthy or solid tumors · age group adult · n = 1310.

**Dosing:** 50, 700 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference.svg" alt="Encorafenib_Yang2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θKa (h−1) | kabs | 0.954 | h−1 | 3.342 |
| θCL/F day 1 (L/h) | CL/F | 12.238 | L/h | 3.015 |
| θVc/F (L) | V1/F | 61.73 | L | 2.583 |
| θQ/F (L/h) | Q/F | 1.045 | L/h | 2.391 |
| θVp/F (L) | V2/F | 54.549 | L | 2.376 |
| θTurnover HL (h) | t1/2z | 64.279 | h | 5.882 |
| θAge on CL/F day 1 (L/h) | equation variable | -0.326 | L/h | 20.74 |
| θGamma | θGamma | 10.0 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.882). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 64, model 7.76); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — encorafenib: kabs 0.954 h−1, CL/F 12.2 L/h, V1/F 61.7 L, Q/F 1.04 L/h, V2/F 54.5 L, t1/2z 64.3 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of θage on cl/f day 1: this record has -0.326, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θKa (h−1) | `Q49` · kabs | 0.954 | h−1 | 0.000265 | 1/s | 1/h | 3.342 | llm_confirmed (0.6) | Tab2:row1:col1, Tab2:row1:col2 |
| θCL/F day 1 (L/h) | `Q27` · CL/F | 12.238 | L/h | 3.399e-06 | m3/s | l/h | 3.015 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2 |
| θVc/F (L) | `Q290` · V1/F | 61.73 | L | 0.06173 | m3 | l | 2.583 | llm_confirmed (0.6) | Tab2:row3:col1, Tab2:row3:col2 |
| θQ/F (L/h) | `Q69` · Q/F | 1.045 | L/h | 2.903e-07 | m3/s | l/h | 2.391 | llm_confirmed (0.6) | Tab2:row4:col1, Tab2:row4:col2 |
| θVp/F (L) | `Q82` · V2/F | 54.549 | L | 0.05455 | m3 | l | 2.376 | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2 |
| θTurnover HL (h) | `Q57` · t1/2z | 64.279 | h | 2.314e+05 | s | h | 5.882 | llm (0.6) | Tab2:row6:col1, Tab2:row6:col2 |
| θAge on CL/F day 1 (L/h) | `Q900` · equation variable | -0.326 | L/h |  |  | l/h | 20.74 | llm_corrected (0.6) | Tab2:row14:col1, Tab2:row14:col2 |
| θGamma | `Q900` · θGamma | 10.0 |  |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'θEmax' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row7:col1', 'Tab2:row7:col2'])
- dropped PD-category row 'θEC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row8:col1', 'Tab2:row8:col2'])
- kept covariate coefficient θGamma=10 (covariate Gamma) — not an ontology parameter
- routed 'θProp err' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q27 ('θmCRC tumor on CL/F day 1 (L/h)', value '-0.175') — already have one for this compound
- dropped duplicate Q27 ('θOther tumor type on CL/F day 1 (L/h)', value '-0.094') — already have one for this compound
- dropped duplicate Q290 ('θBWT on c(Vc/F) day 1 (L)', value '0.588') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=encorafenib
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col4 = '(0.892 to 1.017)'
- unparsed cell Tab2:row1:col5 = '0.970 (0.877 to 1.083)'
- unparsed cell Tab2:row2:col4 = '(11.515 to 12.961)'
- unparsed cell Tab2:row2:col5 = '11.951 (11.066 to 12.653)'
- unparsed cell Tab2:row3:col4 = '(58.606 to 64.855)'
- unparsed cell Tab2:row3:col5 = '62.48 (58.78 to 66.99)'
- unparsed cell Tab2:row4:col4 = '(0.996 to 1.094)'
- unparsed cell Tab2:row4:col5 = '1.095 (1.023 to 1.165)'
- unparsed cell Tab2:row5:col4 = '(52.008 to 57.090)'
- unparsed cell Tab2:row5:col5 = '52.677 (49.125 to 90.174)'
- unparsed cell Tab2:row6:col4 = '(56.869 to 71.689)'
- unparsed cell Tab2:row6:col5 = '55.569 (52.816 to 60.591)'
- unparsed cell Tab2:row7:col4 = '(1.768 to 1.953)'
- unparsed cell Tab2:row7:col5 = '1.931 (1.840 to 2.398)'
- unparsed cell Tab2:row8:col4 = '(8.381 to 9.813)'
- unparsed cell Tab2:row8:col5 = '8.386 (8.033 to 9.833)'
- unparsed cell Tab2:row10:col4 = '(0.577 to 0.601)'
- unparsed cell Tab2:row10:col5 = '0.590 (0.577 to 0.603)'
- unparsed cell Tab2:row11:col4 = '(− 0.267 to − 0.083)'
- unparsed cell Tab2:row11:col5 = '− 0.178 (− 0.246 to − 0.101)'
- unparsed cell Tab2:row12:col4 = '(− 0.195 to 0.008)'
- unparsed cell Tab2:row12:col5 = '− 0.094 (− 0.171 to 0.016)'
- unparsed cell Tab2:row13:col4 = '(0.421 to 0.755)'
- unparsed cell Tab2:row13:col5 = '0.589 (0.416 to 0.757)'
- unparsed cell Tab2:row14:col4 = '(− 0.459 to − 0.194)'
- unparsed cell Tab2:row14:col5 = '− 0.325 (− 0.468 to − 0.184)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.882 (15/17 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[θage on cl/f day 1]` | -0.326 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θturnover hl]` | 64.279 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row1:col1', 'Tab2:row1:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1', 'Tab2:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.2 L/h | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 61.7 L | ['Tab2:row3:col1', 'Tab2:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 54.5 L | ['Tab2:row5:col1', 'Tab2:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=encorafenib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 64 | 7.764 | 0.1213 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 64 | 7.764 | 0.1213 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_modelica.zip" download>Encorafenib_Yang2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_fmi.zip" download>Encorafenib_Yang2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_matlab.zip" download>Encorafenib_Yang2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_matlab_simbio.zip" download>Encorafenib_Yang2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_sbml.zip" download>Encorafenib_Yang2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_cellml.zip" download>Encorafenib_Yang2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.54 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 3.399e-06 | m3/s |
| input | model | `VdPerKg` | 0.0008819 | m3/kg |
| input | model | `k12` | 4.702e-06 | 1/s |
| input | model | `k21` | 5.321e-06 | 1/s |
| input | model | `ka` | 0.000265 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yang DZ, Hahn EM, Piscitelli J, Pithavala YK, Hibma JE. Population Pharmacokinetic Modeling of Encorafenib in Healthy Participants and Patients with BRAF V600-Mutant Solid Tumors: A Semi-mechanistic Autoinduction Model. Clinical pharmacokinetics 65(5):693–707 (2026). [doi:10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y)

**This record:** Pharmacolibrary v26.09, model `Encorafenib_Yang2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_encorafenib/Encorafenib_Yang2026_reference>

```bibtex
@misc{pharmacolibrary_EncorafenibYang2026reference,
  title  = {{Pharmacolibrary model Encorafenib_Yang2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_encorafenib/Encorafenib_Yang2026_reference},
  note   = {Parameters from doi:10.1007/s40262-025-01608-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.954 /h, F 1). Doses in the paper: 50–700 mg.

<dbs-fmusim paramsurl="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_encorafenib/Encorafenib_Yang2026_reference/Encorafenib_Yang2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Encorafenib_Yang2026_reference_params.json` · controls `Encorafenib_Yang2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bencorafenib%5D%20Encorafenib_Yang2026_reference&body=Drug%3A%20encorafenib%0ARecord%3A%20Encorafenib_Yang2026_reference%0APaper%3A%20Yang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_encorafenib/Encorafenib_Yang2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:38 UTC</sub>
