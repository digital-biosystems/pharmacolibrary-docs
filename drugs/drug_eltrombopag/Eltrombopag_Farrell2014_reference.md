<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;eltrombopag&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/&quot;},{&quot;label&quot;:&quot;Farrell_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eltrombopag_Farrell2014_reference&quot;,&quot;label&quot;:&quot;Farrell_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Eltrombopag_Gibiansky2011_reference&quot;,&quot;label&quot;:&quot;Gibiansky_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eltrombopag — `Eltrombopag_Farrell2014_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:37 UTC (Reproduces paper), but the paper was screened again on 2026-10-05 18:34 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="eltrombopag" model-id="Eltrombopag_Farrell2014_reference" status="extracted" stale="true" population="healthy volunteers and subjects with chronic liver disease" measured-compound="eltrombopag" parameterization="apparent" topology="2C"></div>

## Citation
Farrell C, Hayes SC, Wire M, Zhang J. Population pharmacokinetic/pharmacodynamic modelling of eltrombopag in healthy volunteers and subjects with chronic liver disease. British journal of clinical pharmacology 77(3):532–544 (2014).
  ·  DOI: [10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244)

## Population and dosing

**Population:** healthy volunteers and subjects with chronic liver disease · condition chronic liver disease · age group adult · n = &gt;=107.

**Dosing:** 5, 10, 12.5, 20, 25, 30, 37.5, 50, 75 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference.svg" alt="Eltrombopag_Farrell2014_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (l h -1 ) | CL/F | 15.1 | l h -1 |  |
| Vc/F (l) | V1/F | 9.14 | l |  |
| Vp/F (l) | V2/F | 9.82 | l |  |
| Q/F (l h -1 ) | Q/F | 8.94 | l h -1 |  |
| Ka1 (h -1 ) | kabs | 20.2 | h -1 | 1.61 (None% RSE) |
| Ka2 (h -1 ) | k21 | 21.9 | h -1 |  |
| MTIME (h) | MTT | 1.28 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (MTT), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of alag1: this record has none, the second reading 1.42; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 15.1 | l h -1 | 4.194e-06 | m3/s | l/h | exact (1) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3, tab_1:row2:col5, tab_1:row2:col6 |  |
| Vc/F (l) | `Q290` · V1/F | 9.14 | l | 0.00914 | m3 | l | exact (1) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col5, tab_1:row3:col6 |  |
| Vp/F (l) | `Q82` · V2/F | 9.82 | l | 0.00982 | m3 | l | exact (1) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col3, tab_1:row4:col5, tab_1:row4:col6 |  |
| Q/F (l h -1 ) | `Q69` · Q/F | 8.94 | l h -1 | 2.483e-06 | m3/s | l/h | exact (1) | tab_1:row5:col1, tab_1:row5:col2, tab_1:row5:col3, tab_1:row5:col5, tab_1:row5:col6 |  |
| Ka1 (h -1 ) | `Q49` · kabs | 20.2 | h -1 | 0.005611 | 1/s | 1/h | llm (0.6) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col5, tab_1:row6:col6 | 1.61 (None% RSE) |
| Ka2 (h -1 ) | `Q302` · k21 | 21.9 | h -1 | 0.006083 | 1/s | 1/h | llm (0.6) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col5, tab_1:row7:col6 |  |
| MTIME (h) | `Q81` · MTT | 1.28 | h |  |  | h | llm (0.6) | tab_1:row9:col1, tab_1:row9:col2, tab_1:row9:col3, tab_1:row9:col5, tab_1:row9:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω 2 CL' routed out of structural estimates ('Interindividual or interoccasion variability')
- table section iiv: 'Covar ωCL, ωVc' routed out of structural estimates ('Interindividual or interoccasion variability')
- table section iiv: 'ω 2 Vc' routed out of structural estimates ('Interindividual or interoccasion variability')
- table section iiv: 'ω 2 Ka' routed out of structural estimates ('Interindividual or interoccasion variability')
- table section residual_error: 'σ 2 prop' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ 2 add (ng ml -1 )' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ALAG1 (h)' — extend the ontology if this is a real PK parameter (source ['tab_1:row8:col1', 'tab_1:row8:col2', 'tab_1:row8:col3', 'tab_1:row8:col5', 'tab_1:row8:col6'])
- unit_dimension_mismatch: 'CL/F ∼Females' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼Females', value '10.4') — already have one for this compound
- unit_dimension_mismatch: 'CL/F ∼CP Score 5' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼CP Score 5', value '16.5') — already have one for this compound
- unit_dimension_mismatch: 'CL/F ∼East Asians' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼East Asians', value '8.63') — already have one for this compound
- unit_dimension_mismatch: 'CL/F ∼ CP Score &gt; 5 †' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F ∼ CP Score &gt; 5 †', value '16.2') — already have one for this compound
- unit_dimension_mismatch: 'Vc/F ∼South/Central Asians' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('Vc/F ∼South/Central Asians', value '13.2') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=eltrombopag
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row15:col3 = '-0.149 to -0.0771'
- unparsed cell tab_1:row15:col6 = '-0.151 to -0.074'
- unparsed cell tab_1:row24:col3 = '-409 to 2630'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alag1]` |  | 1.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka2]` | 21.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mtime]` | 1.28 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col5', 'tab_1:row2:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col5', 'tab_1:row3:col6'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col3', 'tab_1:row7:col5', 'tab_1:row7:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col5', 'tab_1:row6:col6'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col1', 'tab_1:row5:col2', 'tab_1:row5:col3', 'tab_1:row5:col5', 'tab_1:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col5', 'tab_1:row4:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.1 L/h | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3', 'tab_1:row2:col5', 'tab_1:row2:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 9.14 L | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col5', 'tab_1:row3:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 9.82 L | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col3', 'tab_1:row4:col5', 'tab_1:row4:col6'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=eltrombopag) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_modelica.zip" download>Eltrombopag_Farrell2014_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_fmi.zip" download>Eltrombopag_Farrell2014_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_matlab.zip" download>Eltrombopag_Farrell2014_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_matlab_simbio.zip" download>Eltrombopag_Farrell2014_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_sbml.zip" download>Eltrombopag_Farrell2014_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_cellml.zip" download>Eltrombopag_Farrell2014_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4425 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 4.194e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001306 | m3/kg |
| input | model | `k21` | 0.0002529 | 1/s |
| input | model | `ka` | 0.005611 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Farrell C, Hayes SC, Wire M, Zhang J. Population pharmacokinetic/pharmacodynamic modelling of eltrombopag in healthy volunteers and subjects with chronic liver disease. British journal of clinical pharmacology 77(3):532–544 (2014). [doi:10.1111/bcp.12244](https://doi.org/10.1111/bcp.12244)

**This record:** Pharmacolibrary v26.09, model `Eltrombopag_Farrell2014_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference>

```bibtex
@misc{pharmacolibrary_EltrombopagFarrell2014reference,
  title  = {{Pharmacolibrary model Eltrombopag_Farrell2014_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference},
  note   = {Parameters from doi:10.1111/bcp.12244},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 20.2 /h, F 1). Doses in the paper: 5, 10, 12.5, 20, 25, 30, 37.5, 50, 75 mg.

<dbs-fmusim paramsurl="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference/Eltrombopag_Farrell2014_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Eltrombopag_Farrell2014_reference_params.json` · controls `Eltrombopag_Farrell2014_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beltrombopag%5D%20Eltrombopag_Farrell2014_reference&body=Drug%3A%20eltrombopag%0ARecord%3A%20Eltrombopag_Farrell2014_reference%0APaper%3A%20Farrell_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 18:34 UTC</sub>
