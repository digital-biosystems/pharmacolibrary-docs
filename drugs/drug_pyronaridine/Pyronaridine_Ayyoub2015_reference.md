<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Pyronaridine&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/&quot;},{&quot;label&quot;:&quot;Ayyoub_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyronaridine_Tan2009_reference&quot;,&quot;label&quot;:&quot;Tan_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Tan2009_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyronaridine_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pyronaridine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyronaridine/Pyronaridine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pyronaridine — `Pyronaridine_Ayyoub2015_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 295, model 6.88); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="Pyronaridine" model-id="Pyronaridine_Ayyoub2015_reference" status="needs_review" stale="false" population="pediatric malaria patients younger than 16 years with uncomplicated malaria" measured-compound="pyronaridine" parameterization="apparent" topology="1C"></div>

## Citation
Ayyoub A, Methaneethorn J, Ramharter M, Djimde AA, Tekete M, Duparc S et al. Population Pharmacokinetics of Pyronaridine in Pediatric Malaria Patients. Antimicrobial agents and chemotherapy 60(3):1450–1458 (2015).
  ·  DOI: [10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15)

## Population and dosing

**Population:** pediatric malaria patients younger than 16 years with uncomplicated malaria · condition uncomplicated P. falciparum / P. vivax malaria · age group child · n = 349.

**Dosing:** 420, 630, 840 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed pyronaridine (as pyronaridine tetraphosphate, Pyramax granules with artesunate), measured pyronaridine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference.svg" alt="Pyronaridine_Ayyoub2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (liters/day) | CL/F | 377 | liters/day | 0.166 (None% RSE) |
| V2/F (liters) | V2/F | 2230 | liters | 0.993 (None% RSE) |
| V3/F (liters) | V3/F | 3230 | liters | 0.256 (None% RSE) |
| Q/F (liters/day) | Q/F | 804 | liters/day |  |
| Ka (day−1) | kabs | 17.9 | day−1 |  |
| 6_age_on_v3_f | 6_age_on_v3_f | 0.624 |  |  |
| theta_kabs_formulation | theta_kabs_formulation | 1.63 |  |  |
| V/FPRQ (L) | V/F | 156.0 | L |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 295, model 6.88); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — pyronaridine: CL/F 377 liters/day, V2/F 2.23e+03 liters, V3/F 3.23e+03 liters, Q/F 804 liters/day, kabs 17.9 day−1, V/F 156 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pyronaridine (as pyronaridine tetraphosphate, Pyramax granules with artesunate), the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (liters/day) | `Q27` · CL/F | 377 | liters/day | 4.363e-06 | m3/s | l/d | exact (1) | T2:row2:col1, T2:row2:col2, T2:row2:col4, T2:row2:col5 | 0.166 (None% RSE) |
| V2/F (liters) | `Q82` · V2/F | 2230 | liters | 2.23 | m3 | l | exact (1) | T2:row3:col1, T2:row3:col2, T2:row3:col4, T2:row3:col5 | 0.993 (None% RSE) |
| V3/F (liters) | `Q78` · V3/F | 3230 | liters | 3.23 | m3 | l | exact (1) | T2:row4:col1, T2:row4:col2, T2:row4:col4, T2:row4:col5 | 0.256 (None% RSE) |
| Q/F (liters/day) | `Q69` · Q/F | 804 | liters/day | 9.306e-06 | m3/s | l/d | exact (1) | T2:row5:col1, T2:row5:col2, T2:row5:col4, T2:row5:col5 |  |
| Ka (day−1) | `Q49` · kabs | 17.9 | day−1 | 0.0002072 | 1/s | 1/d | exact (1) | T2:row6:col1, T2:row6:col2, T2:row6:col4, T2:row6:col5 |  |
| 6_age_on_v3_f | `Q900` · 6_age_on_v3_f | 0.624 |  |  |  |  |  | T2:row7:col1, T2:row7:col2, T2:row7:col4, T2:row7:col5 |  |
| theta_kabs_formulation | `Q900` · theta_kabs_formulation | 1.63 |  |  |  |  |  | T2:row8:col1, T2:row8:col2, T2:row8:col4, T2:row8:col5 |  |
| V/FPRQ (L) | `Q76` · V/F | 156.0 | L | 0.156 | m3 | L | review_gapfill (0.7) | Chairat_2018:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('IIV')
- table section iiv: 'V2/F' routed out of structural estimates ('IIV')
- table section iiv: 'V3/F' routed out of structural estimates ('IIV')
- covariate level 'θ6 age on V3/F' → Q900:6_age_on_v3_f = 0.624 (linear_fractional on Q27)
- dropped duplicate Q49 ('Ka', value '0.433') — already have one for this compound
- routed 'RV (additive error)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate category for t1/2α from footnote/prose kept as documentation only (['T2:footnote'])
- dropped value-less row: 'CL'
- dropped value-less row: 'V2'
- dropped value-less row: 'V3'
- dropped value-less row: 'Q'
- dropped value-less row: 'RV'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pyronaridine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q76 (V/F) from Chairat_2018's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.529 (9/17 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[6_age_on_v3_f]` | 0.624 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_f_age]` |  | 0.624 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fprq]` | 156.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | pyronaridine (as pyronaridine tetraphosphate, Pyramax granules with artesunate) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pyronaridine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Chairat_2018:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.7 L/h | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 156 L | ['Chairat_2018:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.23e+03 L | ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col4', 'T2:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=pyronaridine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 295.2 | 6.884 | 0.0233 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_modelica.zip" download>Pyronaridine_Ayyoub2015_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_fmi.zip" download>Pyronaridine_Ayyoub2015_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_matlab.zip" download>Pyronaridine_Ayyoub2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_matlab_simbio.zip" download>Pyronaridine_Ayyoub2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_sbml.zip" download>Pyronaridine_Ayyoub2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_cellml.zip" download>Pyronaridine_Ayyoub2015_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5181 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00042 | kg |
| input | model | `Cl` | 4.363e-06 | m3/s |
| input | model | `VdPerKg` | 0.002229 | m3/kg |
| input | model | `ka` | 0.0002072 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Ayyoub A, Methaneethorn J, Ramharter M, Djimde AA, Tekete M, Duparc S et al. Population Pharmacokinetics of Pyronaridine in Pediatric Malaria Patients. Antimicrobial agents and chemotherapy 60(3):1450–1458 (2015). [doi:10.1128/AAC.02004-15](https://doi.org/10.1128/AAC.02004-15)

**This record:** Pharmacolibrary v26.09, model `Pyronaridine_Ayyoub2015_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference>

```bibtex
@misc{pharmacolibrary_PyronaridineAyyoub2015reference,
  title  = {{Pharmacolibrary model Pyronaridine_Ayyoub2015_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference},
  note   = {Parameters from doi:10.1128/AAC.02004-15},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 420 mg, single dose, first-order absorption (ka 0.746 /h, F 1). Doses in the paper: 420, 630, 840 mg.

<dbs-fmusim paramsurl="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference/Pyronaridine_Ayyoub2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Pyronaridine_Ayyoub2015_reference_params.json` · controls `Pyronaridine_Ayyoub2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyronaridine%5D%20Pyronaridine_Ayyoub2015_reference&body=Drug%3A%20pyronaridine%0ARecord%3A%20Pyronaridine_Ayyoub2015_reference%0APaper%3A%20Ayyoub_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyronaridine/Pyronaridine_Ayyoub2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:25 UTC</sub>
