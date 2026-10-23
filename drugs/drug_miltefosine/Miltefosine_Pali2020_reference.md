<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;miltefosine&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/&quot;},{&quot;label&quot;:&quot;Pali\u0107_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miltefosine_Dorlo2017_reference&quot;,&quot;label&quot;:&quot;Dorlo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Pali2020_reference&quot;,&quot;label&quot;:&quot;Pali\u0107_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Miltefosine_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# miltefosine — `Miltefosine_Pali2020_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="miltefosine" model-id="Miltefosine_Pali2020_reference" status="accepted_with_caveats" stale="false" population="paediatric visceral leishmaniasis patients from Eastern Africa" measured-compound="miltefosine" parameterization="apparent" topology="2C"></div>

## Citation
Palić S, Kip AE, Beijnen JH, Mbui J, Musa A, Solomos A et al. Characterizing the non-linear pharmacokinetics of miltefosine in paediatric visceral leishmaniasis patients from Eastern Africa. The Journal of antimicrobial chemotherapy 75(11):3260–3268 (2020).
  ·  DOI: [10.1093/jac/dkaa314](https://doi.org/10.1093/jac/dkaa314)

## Population and dosing

**Population:** paediatric visceral leishmaniasis patients from Eastern Africa · condition visceral leishmaniasis · age group child · n = 51.

**Dosing:** 2.5, 3.2 mg/kg/day, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference.svg" alt="Miltefosine_Pali2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/day) | CL/F | 2.44 | L/day |
| Vc/F (L) | V1/F | 22.9 | L |
| ka (day−1) | kabs | 1.61 | day−1 |
| Q/F (L/day) | Q/F | 0.0233 | L/day |
| Vp/F (L) | V2/F | 2.27 | L |
| F | Fab | 1 |  |
| relative decrease F first week | Frel | -0.69 |  |
| theta_q319_weight_power | theta_q319_weight_power | -1.72 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 2.44 | L/day | 2.824e-08 | m3/s | l/d | exact (1) | dkaa314-T2:row2:col1 |
| Vc/F (L) | `Q290` · V1/F | 22.9 | L | 0.0229 | m3 | l | exact (1) | dkaa314-T2:row3:col1 |
| ka (day−1) | `Q49` · kabs | 1.61 | day−1 | 1.863e-05 | 1/s | 1/d | exact (1) | dkaa314-T2:row4:col1 |
| Q/F (L/day) | `Q69` · Q/F | 0.0233 | L/day | 2.697e-10 | m3/s | l/d | exact (1) | dkaa314-T2:row5:col1 |
| Vp/F (L) | `Q82` · V2/F | 2.27 | L | 0.00227 | m3 | l | exact (1) | dkaa314-T2:row6:col1 |
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | dkaa314-T2:row7:col1 |
| relative decrease F first week | `Q87` · Frel | -0.69 |  |  |  |  | llm (0.6) | dkaa314-T2:row8:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | -1.72 |  |  |  |  |  | dkaa314-T2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'Vp'
- dropped value-less row: 'Q'
- dropped unlinked row (NIL): 'ΔOFV' — extend the ontology if this is a real PK parameter (source ['dkaa314-F3:caption', 'dkaa314-F3:caption'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=miltefosine
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell dkaa314-T2:row2:col2 = '2.42 (2.25–2.61)'
- unparsed cell dkaa314-T2:row3:col2 = '22.8 (21.4–24.39)'
- unparsed cell dkaa314-T2:row4:col2 = '1.63 (1.07–2.15)'
- unparsed cell dkaa314-T2:row5:col2 = '0.023 (0.019–0.027)'
- unparsed cell dkaa314-T2:row6:col2 = '2.26 (2.04–2.49)'
- unparsed cell dkaa314-T2:row8:col2 = '−0.69 (−0.77 to −0.61)'
- unparsed cell dkaa314-T2:row9:col2 = '−1.69 (−2.34 to −1.11)'
- companion parameter table 3 transcribed (20 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['dkaa314-T2:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['dkaa314-T2:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['dkaa314-T2:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['dkaa314-T2:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['dkaa314-T2:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.102 L/h | ['dkaa314-T2:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 22.9 L | ['dkaa314-T2:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.27 L | ['dkaa314-T2:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=miltefosine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_tmax | reference | skipped | −20 | 39.96 | unresolved time unit '°C' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_modelica.zip" download>Miltefosine_Pali2020_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_fmi.zip" download>Miltefosine_Pali2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_matlab.zip" download>Miltefosine_Pali2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_matlab_simbio.zip" download>Miltefosine_Pali2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_sbml.zip" download>Miltefosine_Pali2020_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_cellml.zip" download>Miltefosine_Pali2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4076 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00015 | kg |
| input | model | `Cl` | 2.824e-08 | m3/s |
| input | model | `VdPerKg` | 0.0003271 | m3/kg |
| input | model | `k12` | 1.178e-08 | 1/s |
| input | model | `k21` | 1.188e-07 | 1/s |
| input | model | `ka` | 1.863e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Palić S, Kip AE, Beijnen JH, Mbui J, Musa A, Solomos A et al. Characterizing the non-linear pharmacokinetics of miltefosine in paediatric visceral leishmaniasis patients from Eastern Africa. The Journal of antimicrobial chemotherapy 75(11):3260–3268 (2020). [doi:10.1093/jac/dkaa314](https://doi.org/10.1093/jac/dkaa314)

**This record:** Pharmacolibrary v26.09, model `Miltefosine_Pali2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_miltefosine/Miltefosine_Pali2020_reference>

```bibtex
@misc{pharmacolibrary_MiltefosinePali2020reference,
  title  = {{Pharmacolibrary model Miltefosine_Pali2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_miltefosine/Miltefosine_Pali2020_reference},
  note   = {Parameters from doi:10.1093/jac/dkaa314},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0671 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 150 mg oral (P01CX04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_miltefosine/Miltefosine_Pali2020_reference/Miltefosine_Pali2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Miltefosine_Pali2020_reference_params.json` · controls `Miltefosine_Pali2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmiltefosine%5D%20Miltefosine_Pali2020_reference&body=Drug%3A%20miltefosine%0ARecord%3A%20Miltefosine_Pali2020_reference%0APaper%3A%20Pali%C4%87_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_miltefosine/Miltefosine_Pali2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:52 UTC</sub>
