<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Melphalan&quot;,&quot;href&quot;:&quot;drugs/toxin_melphalan/&quot;},{&quot;label&quot;:&quot;Choi_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melphalan_Ahmed1982_reference&quot;,&quot;label&quot;:&quot;Ahmed_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_melphalan/Melphalan_Ahmed1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Melphalan_Radhakrishnan2019_reference&quot;,&quot;label&quot;:&quot;Radhakrishnan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_melphalan/Melphalan_Radhakrishnan2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Melphalan_Choi2026_reference&quot;,&quot;label&quot;:&quot;Choi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_melphalan/Melphalan_Choi2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Melphalan_Nath2010_reference&quot;,&quot;label&quot;:&quot;Nath_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_melphalan/Melphalan_Nath2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Melphalan_Wu1997_reference&quot;,&quot;label&quot;:&quot;Wu_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_melphalan/Melphalan_Wu1997_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Melphalan — `Melphalan_Choi2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00595, model 0.000163); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="Melphalan" model-id="Melphalan_Choi2026_reference" status="needs_review" stale="false" population="pediatric patients undergoing autologous hematopoietic stem cell transplantation" measured-compound="Melphalan" parameterization="mechanistic" topology="2C"></div>

## Citation
Choi JY, Kim B, Park HJ, Kim BK, Hong KT, Lee S et al. Population Pharmacokinetics of Melphalan in Pediatric Patients Undergoing Autologous Hematopoietic Stem Cell Transplantation with Various Conditioning Regimens. European journal of drug metabolism and pharmacokinetics 51(4):391-400 (2026).
  ·  DOI: [10.1007/s13318-026-01000-6](https://doi.org/10.1007/s13318-026-01000-6)

## Population and dosing

**Population:** pediatric patients undergoing autologous hematopoietic stem cell transplantation · condition autologous hematopoietic stem cell transplantation · age group child · n = 20.

**Dosing:** 50, 70, 140 mg/m2, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference.svg" alt="Melphalan_Choi2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h/28 kg)a | CL | 24.9 | L/h/28 kg | 7.7 | 27.9 (11.1% RSE) |
| V1 (L/28 kg) | V1 | 13.4 | L/28 kg | 8.7 | 39.9 (18.4% RSE) |
| Q (L/h) | Q | 14.5 | L/h | 22.9 |  |
| V2 (L/28 kg) | V2 | 7.37 | L/28 kg | 12.2 | 7.0 (83.8% RSE) |
| theta_v1_wt_power | theta_v1_wt_power | 0.872 |  | 15.1 |  |
| theta_v2_wt_power | theta_v2_wt_power | 0.553 |  | 14.2 |  |
| theta_q26_creatinine_power | theta_q26_creatinine_power | -0.686 |  | 14.7 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00595, model 0.000163); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — melphalan: CL 24.9 L/h/28 kg, V1 13.4 L/28 kg, Q 14.5 L/h, V2 7.37 L/28 kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/28 kg)a | `Q22` · CL | 24.9 | L/h/28 kg | 1.729e-05 | m3/s | l/(h·28kg) | 7.7 | llm_confirmed (0.6) | Tab2:row3:col1 | 27.9 (11.1% RSE) |
| V1 (L/28 kg) | `Q63` · V1 | 13.4 | L/28 kg | 0.0335 | m3 | l/28kg | 8.7 | exact (1) | Tab2:row4:col1 | 39.9 (18.4% RSE) |
| Q (L/h) | `Q30` · Q | 14.5 | L/h | 4.028e-06 | m3/s | l/h | 22.9 | exact (1) | Tab2:row5:col1 |  |
| V2 (L/28 kg) | `Q64` · V2 | 7.37 | L/28 kg | 0.01843 | m3 | l/28kg | 12.2 | exact (1) | Tab2:row6:col1 | 7.0 (83.8% RSE) |
| theta_v1_wt_power | `Q900` · theta_v1_wt_power | 0.872 |  |  |  |  | 15.1 |  | Tab2:row8:col1 |  |
| theta_v2_wt_power | `Q900` · theta_v2_wt_power | 0.553 |  |  |  |  | 14.2 |  | Tab2:row9:col1 |  |
| theta_q26_creatinine_power | `Q900` · theta_q26_creatinine_power | -0.686 |  |  |  |  | 14.7 |  | Tab2:row11:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLB | Q23 | exact |

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'CL~V1' routed out of structural estimates ('Covariance')
- table section iiv: 'CL (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'V1 (%)' routed out of structural estimates ('PK IIV')
- table section iiv: 'V2 (%)' routed out of structural estimates ('PK IIV')
- table section residual_error: 'Proportional' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'CL~WT' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- unit_dimension_unknown: '27.6 kg' (CL)
- dropped duplicate Q22 ('CL~RegimenB', value '0.846') — already have one for this compound
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Melphalan
- bound model equation to Q23 (CLb): CLB = 0.846 * (BW/70)^0.75
- Q23 (CLb) is equation-defined: value moved to equation-variable 'CLB'; equation kept verbatim

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation CLB = 0.846 * (BW/70)^0.75
- toxin: the located table(s) gave no kinetic value — 32 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.9 | ['Tab2:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 62.2 L/h | ['Tab2:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 33.5 L | ['Tab2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 18.4 L | ['Tab2:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=Melphalan) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | fail | 0.005948 | 0.0001629 | 0.0274 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.006181 | 0.0001629 | 0.0264 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.005727 | 0.0001629 | 0.0284 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000586 | 0.0001629 | 0.278 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.005908 | 0.0001629 | 0.0276 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.005411 | 0.0001629 | 0.0301 | μg/L→SI vs simulated kg/m3 |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_modelica.zip" download>Melphalan_Choi2026_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_fmi.zip" download>Melphalan_Choi2026_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_matlab.zip" download>Melphalan_Choi2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_matlab_simbio.zip" download>Melphalan_Choi2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_sbml.zip" download>Melphalan_Choi2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_cellml.zip" download>Melphalan_Choi2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3052 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.729e-05 | m3/s |
| input | model | `VdPerKg` | 0.0004786 | m3/kg |
| input | model | `k12` | 0.0001202 | 1/s |
| input | model | `k21` | 0.0002186 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Choi JY, Kim B, Park HJ, Kim BK, Hong KT, Lee S et al. Population Pharmacokinetics of Melphalan in Pediatric Patients Undergoing Autologous Hematopoietic Stem Cell Transplantation with Various Conditioning Regimens. European journal of drug metabolism and pharmacokinetics 51(4):391-400 (2026). [doi:10.1007/s13318-026-01000-6](https://doi.org/10.1007/s13318-026-01000-6)

**This record:** Pharmacolibrary, model `Melphalan_Choi2026_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_melphalan/Melphalan_Choi2026_reference>

```bibtex
@misc{pharmacolibrary_MelphalanChoi2026reference,
  title  = {{Pharmacolibrary model Melphalan_Choi2026_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_melphalan/Melphalan_Choi2026_reference},
  note   = {Parameters from doi:10.1007/s13318-026-01000-6},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/toxin_melphalan/Melphalan_Choi2026_reference/Melphalan_Choi2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Melphalan_Choi2026_reference_params.json` · controls `Melphalan_Choi2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmelphalan%5D%20Melphalan_Choi2026_reference&body=Drug%3A%20melphalan%0ARecord%3A%20Melphalan_Choi2026_reference%0APaper%3A%20Choi_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_melphalan/Melphalan_Choi2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 00:15 UTC</sub>
