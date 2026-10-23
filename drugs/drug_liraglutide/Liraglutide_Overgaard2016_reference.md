<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;liraglutide&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/&quot;},{&quot;label&quot;:&quot;Overgaard_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Liraglutide_Overgaard2016_reference&quot;,&quot;label&quot;:&quot;Overgaard_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Liraglutide_Woodward2014_reference&quot;,&quot;label&quot;:&quot;Woodward_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Woodward2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Liraglutide_Carlsson2021_reference&quot;,&quot;label&quot;:&quot;Carlsson_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/Liraglutide_Carlsson2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Guo_2025_Weight&quot;,&quot;label&quot;:&quot;Guo_2025 \u00b7 \u0394\u0394Weight&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_liraglutide/pd_Guo_2025_Weight.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# liraglutide — `Liraglutide_Overgaard2016_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="liraglutide" model-id="Liraglutide_Overgaard2016_reference" status="accepted_with_caveats" stale="false" population="overweight and obese adults" measured-compound="liraglutide" parameterization="apparent" topology="1C"></div>

## Citation
Overgaard RV, Petri KC, Jacobsen LV, Jensen CB. Liraglutide 3.0 mg for Weight Management: A Population Pharmacokinetic Analysis. Clinical pharmacokinetics 55(11):1413–1422 (2016).
  ·  DOI: [10.1007/s40262-016-0410-7](https://doi.org/10.1007/s40262-016-0410-7)

## Population and dosing

**Population:** overweight and obese adults · condition obesity · age group adult · n = &gt;3200.

**Dosing:** 3 mg, sc, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference.svg" alt="Liraglutide_Overgaard2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| K A, Lira | kabs | 0.09 | 1/h |  |  |
| CL/F Lira | CL/F | 0.86 | L/h | 2 | 24.70 (23.90% RSE) |
| V/F Lira | V/F | 24.60 | L | 9 | 34.70 (83.20% RSE) |
| theta_q314_weight_power | theta_q314_weight_power | 0.68 |  | 5 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K A, Lira | `Q49` · kabs | 0.09 | 1/h | 2.5e-05 | 1/s | 1/h |  | llm (0.6) | Overgaard_2016_table_S1:row0:col3 |  |
| CL/F Lira | `Q27` · CL/F | 0.86 | L/h | 2.389e-07 | m3/s | l/h | 2 | llm_confirmed (0.6) | Overgaard_2016_table_S1:row1:col3 | 24.70 (23.90% RSE) |
| V/F Lira | `Q76` · V/F | 24.60 | L | 0.0246 | m3 | l | 9 | llm_confirmed (0.6) | Overgaard_2016_table_S1:row2:col3 | 34.70 (83.20% RSE) |
| theta_q314_weight_power | `Q900` · theta_q314_weight_power | 0.68 |  |  |  |  | 5 |  | Overgaard_2016_table_S1:row3:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'Sigma' routed out of structural estimates ('Residual error parameters Description Unit Estimate % Shrinkage')
- dropped unlinked row (NIL): 'Cov. 1.8 mg' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row4:col3'])
- dropped unlinked row (NIL): 'Cov. male' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row5:col3'])
- dropped unlinked row (NIL): 'Cov. age ≥70 years' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row6:col3'])
- dropped unlinked row (NIL): 'Cov. Black' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row7:col3'])
- dropped unlinked row (NIL): 'Cov. Asian' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row8:col3'])
- dropped unlinked row (NIL): 'Cov. Other' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row9:col3'])
- dropped unlinked row (NIL): 'Cov. Hispanic' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row10:col3'])
- dropped unlinked row (NIL): 'Cov. prediabetes' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row11:col3'])
- dropped unlinked row (NIL): 'Cov. diabetes' — extend the ontology if this is a real PK parameter (source ['Overgaard_2016_table_S1:row12:col3'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=liraglutide
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) S1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Overgaard_2016_table_S1:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Overgaard_2016_table_S1:row0:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Overgaard_2016_table_S1:row2:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.86 L/h | ['Overgaard_2016_table_S1:row1:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 24.6 L | ['Overgaard_2016_table_S1:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=liraglutide) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_modelica.zip" download>Liraglutide_Overgaard2016_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_fmi.zip" download>Liraglutide_Overgaard2016_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_matlab.zip" download>Liraglutide_Overgaard2016_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_matlab_simbio.zip" download>Liraglutide_Overgaard2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_sbml.zip" download>Liraglutide_Overgaard2016_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_cellml.zip" download>Liraglutide_Overgaard2016_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 3.751 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3e-06 | kg |
| input | model | `Cl` | 2.389e-07 | m3/s |
| input | model | `VdPerKg` | 0.0003514 | m3/kg |
| input | model | `ka` | 2.5e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Overgaard RV, Petri KC, Jacobsen LV, Jensen CB. Liraglutide 3.0 mg for Weight Management: A Population Pharmacokinetic Analysis. Clinical pharmacokinetics 55(11):1413–1422 (2016). [doi:10.1007/s40262-016-0410-7](https://doi.org/10.1007/s40262-016-0410-7)

**This record:** Pharmacolibrary v26.09, model `Liraglutide_Overgaard2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference>

```bibtex
@misc{pharmacolibrary_LiraglutideOvergaard2016reference,
  title  = {{Pharmacolibrary model Liraglutide_Overgaard2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference},
  note   = {Parameters from doi:10.1007/s40262-016-0410-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3 mg, single dose, first-order absorption (ka 0.09 /h, F 1). Dose in the paper: 3 mg.

<dbs-fmusim paramsurl="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference/Liraglutide_Overgaard2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Liraglutide_Overgaard2016_reference_params.json` · controls `Liraglutide_Overgaard2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bliraglutide%5D%20Liraglutide_Overgaard2016_reference&body=Drug%3A%20liraglutide%0ARecord%3A%20Liraglutide_Overgaard2016_reference%0APaper%3A%20Overgaard_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_liraglutide/Liraglutide_Overgaard2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:00 UTC</sub>
