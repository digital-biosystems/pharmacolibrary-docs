<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Levobupivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/&quot;},{&quot;label&quot;:&quot;Vincent_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levobupivacaine_Araneda2025_reference&quot;,&quot;label&quot;:&quot;Araneda_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Araneda2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Chalkiadis2005_reference&quot;,&quot;label&quot;:&quot;Chalkiadis_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Chalkiadis2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Frawley2021_reference&quot;,&quot;label&quot;:&quot;Frawley_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Frawley2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Sessler2025_reference&quot;,&quot;label&quot;:&quot;Sessler_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Sessler2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Vake2024_reference&quot;,&quot;label&quot;:&quot;Vake_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Vake2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levobupivacaine_Vincent2020_reference&quot;,&quot;label&quot;:&quot;Vincent_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levobupivacaine — `Levobupivacaine_Vincent2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.000315, model 0.00166); the model does not reproduce the paper's time of the peak (tmax) (paper 0.283, model 0.391) (+2 more).

<div class="pk-model-meta" hidden drug="Levobupivacaine" model-id="Levobupivacaine_Vincent2020_reference" status="needs_review" stale="false" population="children from 1 to 5 years old" measured-compound="Levobupivacaine" parameterization="apparent" topology="1C"></div>

## Citation
Vincent M, Mathieu O, Nolain P, Menacé C, Khier S. Population Pharmacokinetics of Levobupivacaine During Transversus Abdominis Plane Block in Children. Therapeutic drug monitoring 42(3):497-502 (2020).
  ·  DOI: [10.1097/ftd.0000000000000702](https://doi.org/10.1097/ftd.0000000000000702)

## Population and dosing

**Population:** children from 1 to 5 years old · condition healthy · age group child · n = 40.

**Dosing:** 28 mg, other, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference.svg" alt="Levobupivacaine_Vincent2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CI/F (L/min) | CL/F | 0.15 | L/min | 14 |  |
| V/F (L) | V/F | 14 | L | 12 | 47 (30% RSE) |
| Ka (/min) | kabs | 0.18 | /min | 19 | 81 (25% RSE) |
| F (Small volume) | Fab | 1 | Small volume |  |  |
| theta_q354_weight | theta_q354_weight | 0.87 |  | 44 |  |

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

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.000315, model 0.00166); the model does not reproduce the paper's time of the peak (tmax) (paper 0.283, model 0.391) (+2 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — levobupivacaine: CL/F 0.15 L/min, V/F 14 L, kabs 0.18 /min, Fab 1 Small volume.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CI/F (L/min) | `Q27` · CL/F | 0.15 | L/min | 2.5e-06 | m3/s | l/min | 14 | llm (0.6) | Vincent_2020_table_p12_1:row0:col1 |  |
| V/F (L) | `Q76` · V/F | 14 | L | 0.014 | m3 | l | 12 | exact (1) | Vincent_2020_table_p12_1:row2:col1 | 47 (30% RSE) |
| Ka (/min) | `Q49` · kabs | 0.18 | /min | 0.003 | 1/s | 1/min | 19 | exact (1) | Vincent_2020_table_p12_1:row3:col1 | 81 (25% RSE) |
| F (Small volume) | `Q40` · Fab | 1 | Small volume |  |  |  |  | exact (1) | Vincent_2020_table_p12_1:row4:col1 |  |
| theta_q354_weight | `Q900` · theta_q354_weight | 0.87 |  |  |  |  | 44 |  | Vincent_2020_table_p12_1:row1:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CI/F' routed out of structural estimates ('Between subject variability Estimate (% , CV) % RSE [95% CI]')
- table section iiv: 'V/F' routed out of structural estimates ('Between subject variability Estimate (% , CV) % RSE [95% CI]')
- table section iiv: 'Ka' routed out of structural estimates ('Between subject variability Estimate (% , CV) % RSE [95% CI]')
- table section iiv: 'Residual variability' routed out of structural estimates ('Between subject variability Estimate (% , CV) % RSE [95% CI]')
- covariate effect for Q354 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Levobupivacaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Vincent_2020_table_p12_1:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Vincent_2020_table_p12_1:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Vincent_2020_table_p12_1:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9 L/h | ['Vincent_2020_table_p12_1:row0:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 14 L | ['Vincent_2020_table_p12_1:row2:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Levobupivacaine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.000315 | 0.00166 | 5.27 | mg/L→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | fail | 0.1 | 1.086 | 10.86 | min→SI vs simulated h |
| T1_tmax | reference | fail | 0.2833 | 0.3907 | 1.379 | min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_modelica.zip" download>Levobupivacaine_Vincent2020_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_fmi.zip" download>Levobupivacaine_Vincent2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_matlab.zip" download>Levobupivacaine_Vincent2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_matlab_simbio.zip" download>Levobupivacaine_Vincent2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_sbml.zip" download>Levobupivacaine_Vincent2020_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_cellml.zip" download>Levobupivacaine_Vincent2020_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2884 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.8e-05 | kg |
| input | model | `Cl` | 2.5e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002 | m3/kg |
| input | model | `ka` | 0.003 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Vincent M, Mathieu O, Nolain P, Menacé C, Khier S. Population Pharmacokinetics of Levobupivacaine During Transversus Abdominis Plane Block in Children. Therapeutic drug monitoring 42(3):497-502 (2020). [doi:10.1097/ftd.0000000000000702](https://doi.org/10.1097/ftd.0000000000000702)

**This record:** Pharmacolibrary, model `Levobupivacaine_Vincent2020_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference>

```bibtex
@misc{pharmacolibrary_LevobupivacaineVincent2020reference,
  title  = {{Pharmacolibrary model Levobupivacaine_Vincent2020_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference},
  note   = {Parameters from doi:10.1097/ftd.0000000000000702},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 28 mg, single dose, first-order absorption (ka 10.8 /h, F 1). Dose in the paper: 28 mg.

<dbs-fmusim paramsurl="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference/Levobupivacaine_Vincent2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Levobupivacaine_Vincent2020_reference_params.json` · controls `Levobupivacaine_Vincent2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevobupivacaine%5D%20Levobupivacaine_Vincent2020_reference&body=Drug%3A%20levobupivacaine%0ARecord%3A%20Levobupivacaine_Vincent2020_reference%0APaper%3A%20Vincent_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_levobupivacaine/Levobupivacaine_Vincent2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:55 UTC</sub>
