<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;telmisartan&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/&quot;},{&quot;label&quot;:&quot;Huang_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telmisartan_Tatami2003_final&quot;,&quot;label&quot;:&quot;Tatami_2003_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Huang2019_reference&quot;,&quot;label&quot;:&quot;Huang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Huang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Telmisartan_Ieiri2011_reference&quot;,&quot;label&quot;:&quot;Ieiri_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Ieiri2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Petersen2024_reference&quot;,&quot;label&quot;:&quot;Petersen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Petersen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yu_2015_K&quot;,&quot;label&quot;:&quot;Yu_2015 \u00b7 K+&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/pd_Yu_2015_K.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telmisartan — `Telmisartan_Huang2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Absolute bioavailability and lag time were left at default values instead of using explicit estimates from the study.

<div class="pk-model-meta" hidden drug="telmisartan" model-id="Telmisartan_Huang2019_reference" status="needs_review" stale="false" population="Chinese patients with hypertension" measured-compound="telmisartan" parameterization="mechanistic" topology="1C"></div>

## Citation
Huang L, Yang L, Huang J, Tan HY, Liu SK, Guo CX et al. Effects of UGT1A1 Polymorphism, Gender and Triglyceride on the Pharmacokinetics of Telmisartan in Chinese Patients with Hypertension: A Population Pharmacokinetic Analysis. European journal of drug metabolism and pharmacokinetics 44(6):797–806 (2019).
  ·  DOI: [10.1007/s13318-019-00567-7](https://doi.org/10.1007/s13318-019-00567-7)

## Population and dosing

**Population:** Chinese patients with hypertension · age group adult · n = &gt;=58.

**Dosing:** 80 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference.svg" alt="Telmisartan_Huang2019_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 25.1 | L/h |
| V 2 (L) | V2 | 30 | L |
| V 3 (L) | V3 | 958 | L |
| Q (L/h) | Q | 14.6 | L/h |
| Ka (h -1 ) | kabs | 0.571 | h -1 |
| ugt1a1_aa_on | ugt1a1_aa_on | 0.472 |  |
| F1 (%) | Fab | 51.1 |  |
| mean volume of distribution after infusion | V | 460.0 | l |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absolute bioavailability and lag time were left at default values instead of using explicit estimates from the study.**

The model builder substituted library defaults for absolute bioavailability and lag time, which are not supported by this paper's data. The record contains a covariate effect, but only the reference individual was simulated, leaving that effect unverified. A second reader disagreed with the recorded values for clearance, bioavailability, absorption rate constant, intercompartmental clearance, and both peripheral volumes of distribution. Extracted — telmisartan: CL 25.1 L/h, V2 30 L, V3 958 L, Q 14.6 L/h, kabs 0.571 h -1, Fab 51.1, V 460 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 25.1, the second reading 8.2; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 25.1 | L/h | 6.972e-06 | m3/s | l/h | exact (1) | tab_2:row2:col1, tab_2:row2:col2, tab_2:row2:col3 |
| V 2 (L) | `Q64` · V2 | 30 | L | 0.03 | m3 | l | space_fold (0.95) | tab_2:row3:col1, tab_2:row3:col2 |
| V 3 (L) | `Q77` · V3 | 958 | L | 0.958 | m3 | l | space_fold (0.95) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col3 |
| Q (L/h) | `Q30` · Q | 14.6 | L/h | 4.056e-06 | m3/s | l/h | exact (1) | tab_2:row5:col1, tab_2:row5:col2, tab_2:row5:col3 |
| Ka (h -1 ) | `Q49` · kabs | 0.571 | h -1 | 0.0001586 | 1/s | 1/h | exact (1) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col3 |
| ugt1a1_aa_on | `Q900` · ugt1a1_aa_on | 0.472 |  |  |  |  |  | tab_2:row9:col2 |
| F1 (%) | `Q40` · Fab | 51.1 |  |  |  |  | exact (1) | tab_2:row14:col1, tab_2:row14:col2, tab_2:row14:col3 |
| mean volume of distribution after infusion | `Q61` · V | 460.0 | l | 0.46 | m3 | L | review_gapfill (0.7) | Deppe_2010:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q22 ('GNDA on CL', value '0.67') — already have one for this compound
- covariate level 'UGT1A1 AA on' → Q900:ugt1a1_aa_on = 0.472 (linear_fractional on Q22)
- dropped duplicate Q22 ('CL (%)', value '14.9') — already have one for this compound
- dropped duplicate Q64 ('V 2 (%)', value '88') — already have one for this compound
- dropped unlinked row (NIL): 'CV (%)' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1', 'tab_2:row16:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=telmisartan
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- gap-filled Q61 (V) from Deppe_2010's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row2:col4 = '(20.14, 28.95)'
- unparsed cell tab_2:row3:col3 = '30. 2'
- unparsed cell tab_2:row3:col4 = '(18.87, 46.60)'
- unparsed cell tab_2:row4:col4 = '(259.98, 2219.15)'
- unparsed cell tab_2:row5:col4 = '(9.71, 20.25)'
- unparsed cell tab_2:row6:col4 = '(0.464, 0.857)'
- unparsed cell tab_2:row8:col4 = '(0.507, 0.910)'
- unparsed cell tab_2:row9:col1 = '0.481 17'
- unparsed cell tab_2:row9:col3 = '(0.330, 0.646)'
- unparsed cell tab_2:row12:col4 = '(1.6, 39.1)'
- unparsed cell tab_2:row13:col4 = '(15.9, 135.0)'
- unparsed cell tab_2:row14:col4 = '(26.0,59.6)'
- unparsed cell tab_2:row16:col2 = '5%'
- unparsed cell tab_2:row16:col4 = '(41.5, 51.9)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.462 (6/13 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 25.1 | 8.2 | mismatch |
| `gpt-oss-120b` | `parameters[f1].value` | 51.1 | 14 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.571 | 9.4 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 14.6 | 12.6 | mismatch |
| `gpt-oss-120b` | `parameters[v 2].value` | 30 | 20.9 | mismatch |
| `gpt-oss-120b` | `parameters[v 3].value` | 958 | 21.7 | mismatch |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 500.0 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Deppe_2010:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_2:row3:col1', 'tab_2:row3:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25.1 | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 25.1 L/h | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 460 L | ['Deppe_2010:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 30 L | ['tab_2:row3:col1', 'tab_2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=telmisartan) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | deviation_id: defaulted_parameters: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_modelica.zip" download>Telmisartan_Huang2019_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_fmi.zip" download>Telmisartan_Huang2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_matlab.zip" download>Telmisartan_Huang2019_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_matlab_simbio.zip" download>Telmisartan_Huang2019_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_sbml.zip" download>Telmisartan_Huang2019_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_cellml.zip" download>Telmisartan_Huang2019_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5146 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8e-05 | kg |
| input | model | `Cl` | 6.972e-06 | m3/s |
| input | model | `VdPerKg` | 0.006571 | m3/kg |
| input | model | `ka` | 0.0001586 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Huang L, Yang L, Huang J, Tan HY, Liu SK, Guo CX et al. Effects of UGT1A1 Polymorphism, Gender and Triglyceride on the Pharmacokinetics of Telmisartan in Chinese Patients with Hypertension: A Population Pharmacokinetic Analysis. European journal of drug metabolism and pharmacokinetics 44(6):797–806 (2019). [doi:10.1007/s13318-019-00567-7](https://doi.org/10.1007/s13318-019-00567-7)

**This record:** Pharmacolibrary v26.09, model `Telmisartan_Huang2019_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_telmisartan/Telmisartan_Huang2019_reference>

```bibtex
@misc{pharmacolibrary_TelmisartanHuang2019reference,
  title  = {{Pharmacolibrary model Telmisartan_Huang2019_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_telmisartan/Telmisartan_Huang2019_reference},
  note   = {Parameters from doi:10.1007/s13318-019-00567-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.571 /h, F 0.9). Dose in the paper: 80 mg.

<dbs-fmusim paramsurl="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_telmisartan/Telmisartan_Huang2019_reference/Telmisartan_Huang2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Telmisartan_Huang2019_reference_params.json` · controls `Telmisartan_Huang2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelmisartan%5D%20Telmisartan_Huang2019_reference&body=Drug%3A%20telmisartan%0ARecord%3A%20Telmisartan_Huang2019_reference%0APaper%3A%20Huang_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telmisartan/Telmisartan_Huang2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-27 13:49 UTC</sub>
