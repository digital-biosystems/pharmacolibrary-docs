<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;ethambutol&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/&quot;},{&quot;label&quot;:&quot;Sundell_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethambutol_Sundell2020_reference&quot;,&quot;label&quot;:&quot;Sundell_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/Ethambutol_Sundell2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ethambutol_Tikiso2022_reference&quot;,&quot;label&quot;:&quot;Tikiso_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/Ethambutol_Tikiso2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethambutol_Srivastava2022v2_reference&quot;,&quot;label&quot;:&quot;Srivastava_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethambutol/Ethambutol_Srivastava2022v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ethambutol — `Ethambutol_Sundell2020_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="ethambutol" model-id="Ethambutol_Sundell2020_reference" status="curated_candidate" stale="false" population="adult patients coinfected with tuberculosis and HIV" measured-compound="ethambutol" parameterization="apparent" topology="1C"></div>

## Citation
Sundell J, Bienvenu E, Birgersson S, Äbelö A, Ashton M. Population Pharmacokinetics and Pharmacogenetics of Ethambutol in Adult Patients Coinfected with Tuberculosis and HIV. Antimicrobial agents and chemotherapy 64(2) (2020).
  ·  DOI: [10.1128/AAC.01583-19](https://doi.org/10.1128/AAC.01583-19)

## Population and dosing

**Population:** adult patients coinfected with tuberculosis and HIV · condition tuberculosis and HIV coinfection · age group adult · n = # This study aimed to characterize the population pharmacokinetics and pharmacogenetics of ethambutol in tuberculosis-HIV-coinfected adult patients. Ethambutol plasma concentrations, determined by liquid chromatography-tandem mass spectrometry, in 63 patients receiving ethambutol as part of rifampin-based fixed-dose combination therapy for tuberculosis were analyzed using nonlinear mixed-effects modeling. A one-compartment disposition model with first-order elimination and four transit compartments prior to first-order absorption was found to adequately describe the concentration-time profiles of ethambutol in plasma. Body weight was implemented as an allometric function on the clearance and volume parameters. Estimates of oral clearance and volume of distribution were 77.4 liters/h and 76.2 liters, respectively. A G/A mutation with regard to CYP1A2 2159 G&gt;A was associated with a 50% reduction in relative bioavailability. Simulations revealed that doses of 30 mg/kg of body weight and 50 mg/kg for G/G and G/A carriers, respectively, would result in clinically adequate exposure. The results presented here suggest that CYP1A2 polymorphism affects ethambutol exposure in this population and that current treatment guidelines may result in underexposure in patients coinfected with tuberculosis and HIV. Based on simulations, a dose increase from15 to 20 mg/kg to 30 mg/kg is suggested. However, the 50-mg/kg dose required to reach therapeutic exposure in G/A carriers may be inappropriate due to the dose-dependent toxicity of ethambutol. Additional studies are required to further investigate CYP450 polymorphism effects on ethambutol pharmacokinetics..

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference.svg" alt="Ethambutol_Sundell2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| oral clearance | CL/F | 77.4 | liters/h |
| volume of distribution | V | 76.2 | liters |
| reduction in relative bioavailability | Frel | 50 | % |
| absorption constant | kabs | 1.61 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption constant: this record has 1.61, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| oral clearance | `Q27` · CL/F | 77.4 | liters/h | 2.15e-05 | m3/s | l/h | exact (1) | Sundell_2020:abstract |
| volume of distribution | `Q61` · V | 76.2 | liters | 0.0762 | m3 | l | exact (1) | Sundell_2020:abstract |
| reduction in relative bioavailability | `Q87` · Frel | 50 | % |  |  |  | llm_confirmed (0.6) | Sundell_2020:abstract |
| absorption constant | `Q49` · kabs | 1.61 | h−1 | 0.0004472 | 1/s | 1/h | review_gapfill (0.7) | Srivastava_2022_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'doses of 30 mg/kg of body weight and 50 mg/kg for G/G and G/A carriers, respectively' — extend the ontology if this is a real PK parameter (source ['Sundell_2020:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ethambutol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Srivastava_2022_2's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Sundell_2020_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption constant]` | 1.61 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose]` |  | 30 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Sundell_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Srivastava_2022_2:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Sundell_2020:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 77.4 L/h | ['Sundell_2020:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 76.2 L | ['Sundell_2020:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=ethambutol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_modelica.zip" download>Ethambutol_Sundell2020_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_fmi.zip" download>Ethambutol_Sundell2020_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_matlab.zip" download>Ethambutol_Sundell2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_matlab_simbio.zip" download>Ethambutol_Sundell2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_sbml.zip" download>Ethambutol_Sundell2020_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_cellml.zip" download>Ethambutol_Sundell2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2043 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0012 | kg |
| input | model | `Cl` | 2.15e-05 | m3/s |
| input | model | `VdPerKg` | 0.001089 | m3/kg |
| input | model | `ka` | 0.0004472 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sundell J, Bienvenu E, Birgersson S, Äbelö A, Ashton M. Population Pharmacokinetics and Pharmacogenetics of Ethambutol in Adult Patients Coinfected with Tuberculosis and HIV. Antimicrobial agents and chemotherapy 64(2) (2020). [doi:10.1128/AAC.01583-19](https://doi.org/10.1128/AAC.01583-19)

**This record:** Pharmacolibrary v26.09, model `Ethambutol_Sundell2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ethambutol/Ethambutol_Sundell2020_reference>

```bibtex
@misc{pharmacolibrary_EthambutolSundell2020reference,
  title  = {{Pharmacolibrary model Ethambutol_Sundell2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ethambutol/Ethambutol_Sundell2020_reference},
  note   = {Parameters from doi:10.1128/AAC.01583-19},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1200 mg, single dose, first-order absorption (ka 1.61 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 1200 mg oral (J04AK02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ethambutol/Ethambutol_Sundell2020_reference/Ethambutol_Sundell2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ethambutol_Sundell2020_reference_params.json` · controls `Ethambutol_Sundell2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethambutol%5D%20Ethambutol_Sundell2020_reference&body=Drug%3A%20ethambutol%0ARecord%3A%20Ethambutol_Sundell2020_reference%0APaper%3A%20Sundell_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ethambutol/Ethambutol_Sundell2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:47 UTC</sub>
