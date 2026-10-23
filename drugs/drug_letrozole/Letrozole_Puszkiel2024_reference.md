<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;letrozole&quot;,&quot;href&quot;:&quot;drugs/drug_letrozole/&quot;},{&quot;label&quot;:&quot;Puszkiel_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Letrozole_Puszkiel2024_reference&quot;,&quot;label&quot;:&quot;Puszkiel_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_letrozole/Letrozole_Puszkiel2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# letrozole — `Letrozole_Puszkiel2024_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="letrozole" model-id="Letrozole_Puszkiel2024_reference" status="accepted_with_caveats" stale="false" population="adults with hormone receptor-positive breast cancer" measured-compound="letrozole" parameterization="apparent" topology="1C"></div>

## Citation
Puszkiel A, Dalenc F, Tafzi N, Marquet P, Debled M, Jacot W et al. Identification of non-adherence to adjuvant letrozole using a population pharmacokinetics approach in hormone receptor-positive breast cancer patients. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 199:106809 (2024).
  ·  DOI: [10.1016/j.ejps.2024.106809](https://doi.org/10.1016/j.ejps.2024.106809)

## Population and dosing

**Population:** adults with hormone receptor-positive breast cancer · condition breast cancer · age group adult · n = 617.

**Dosing:** 2.5 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference.svg" alt="Letrozole_Puszkiel2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| k a (h -1 ) | kabs | 2.12 | h -1 | 55 |
| V/F (L) | V/F | 207 | L | 10 |
| CL/F (L/h) | CL/F | 1.31 | L/h | 2 |
| effect_of_cyp2a6_sm_on | effect_of_cyp2a6_sm_on | 0.54 |  |  |
| effect_of_missing_cyp2a6 | effect_of_missing_cyp2a6 | 0.85 |  |  |
| theta_q22_cyp2a6 | theta_q22_cyp2a6 | 0.79 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

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

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| k a (h -1 ) | `Q49` · kabs | 2.12 | h -1 | 0.0005889 | 1/s | 1/h | 55 | space_fold (0.95) | tab_2:row4:col1, tab_2:row4:col2 |
| V/F (L) | `Q76` · V/F | 207 | L | 0.207 | m3 | l | 10 | exact (1) | tab_2:row5:col1, tab_2:row5:col2 |
| CL/F (L/h) | `Q27` · CL/F | 1.31 | L/h | 3.639e-07 | m3/s | l/h | 2 | exact (1) | tab_2:row6:col1, tab_2:row6:col2 |
| effect_of_cyp2a6_sm_on | `Q900` · effect_of_cyp2a6_sm_on | 0.54 |  |  |  |  |  |  | tab_2:row9:col2 |
| effect_of_missing_cyp2a6 | `Q900` · effect_of_missing_cyp2a6 | 0.85 |  |  |  |  |  |  | tab_2:row11:col2 |
| theta_q22_cyp2a6 | `Q900` · theta_q22_cyp2a6 | 0.79 |  |  |  |  |  |  | tab_2:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Effect of CYP2A6 SM on' → Q900:effect_of_cyp2a6_sm_on = 0.54 (linear_fractional on Q27)
- covariate level 'Effect of missing CYP2A6' → Q900:effect_of_missing_cyp2a6 = 0.85 (linear_fractional on Q27)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=letrozole
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row4:col3 = '2.24 (1.11 -8.35)'
- unparsed cell tab_2:row5:col3 = '208 (167 -249)'
- unparsed cell tab_2:row6:col3 = '1.30 (1.26 -1.35)'
- unparsed cell tab_2:row7:col3 = '0.79 (0.69 -0.89)'
- unparsed cell tab_2:row9:col3 = '0.55 (0.49 -0.60)'
- unparsed cell tab_2:row11:col3 = '0.85 (0.72 -0.99)'
- unparsed cell tab_2:row13:col3 = '35.6 (32.8 -38.6)'
- unparsed cell tab_2:row15:col3 = '14.2 (13.7 -14.7)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_2:row6:col1', 'tab_2:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row4:col1', 'tab_2:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_2:row5:col1', 'tab_2:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.31 L/h | ['tab_2:row6:col1', 'tab_2:row6:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 207 L | ['tab_2:row5:col1', 'tab_2:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=letrozole) | central.C | output must be the measured/analyte compartment |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_modelica.zip" download>Letrozole_Puszkiel2024_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_fmi.zip" download>Letrozole_Puszkiel2024_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_matlab.zip" download>Letrozole_Puszkiel2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_matlab_simbio.zip" download>Letrozole_Puszkiel2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_sbml.zip" download>Letrozole_Puszkiel2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_cellml.zip" download>Letrozole_Puszkiel2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2853 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-06 | kg |
| input | model | `Cl` | 3.639e-07 | m3/s |
| input | model | `VdPerKg` | 0.002957 | m3/kg |
| input | model | `ka` | 0.0005889 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Puszkiel A, Dalenc F, Tafzi N, Marquet P, Debled M, Jacot W et al. Identification of non-adherence to adjuvant letrozole using a population pharmacokinetics approach in hormone receptor-positive breast cancer patients. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 199:106809 (2024). [doi:10.1016/j.ejps.2024.106809](https://doi.org/10.1016/j.ejps.2024.106809)

**This record:** Pharmacolibrary v26.09, model `Letrozole_Puszkiel2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_letrozole/Letrozole_Puszkiel2024_reference>

```bibtex
@misc{pharmacolibrary_LetrozolePuszkiel2024reference,
  title  = {{Pharmacolibrary model Letrozole_Puszkiel2024_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_letrozole/Letrozole_Puszkiel2024_reference},
  note   = {Parameters from doi:10.1016/j.ejps.2024.106809},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 2.12 /h, F 1). Dose in the paper: 2.5 mg.

<dbs-fmusim paramsurl="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_letrozole/Letrozole_Puszkiel2024_reference/Letrozole_Puszkiel2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Letrozole_Puszkiel2024_reference_params.json` · controls `Letrozole_Puszkiel2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bletrozole%5D%20Letrozole_Puszkiel2024_reference&body=Drug%3A%20letrozole%0ARecord%3A%20Letrozole_Puszkiel2024_reference%0APaper%3A%20Puszkiel_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_letrozole/Letrozole_Puszkiel2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:17 UTC</sub>
