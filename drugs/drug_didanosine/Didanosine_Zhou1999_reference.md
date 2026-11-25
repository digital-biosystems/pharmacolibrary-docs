<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;didanosine&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/&quot;},{&quot;label&quot;:&quot;Zhou_1999 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Didanosine_Drusano1992_reference&quot;,&quot;label&quot;:&quot;Drusano_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Drusano1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Pai1992_reference&quot;,&quot;label&quot;:&quot;Pai_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Pai1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Didanosine_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Ngara2020_reference&quot;,&quot;label&quot;:&quot;Ngara_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Ngara2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# didanosine — `Didanosine_Zhou1999_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> cross_check_disputed; x1_cross_check.

<div class="pk-model-meta" hidden drug="didanosine" model-id="Didanosine_Zhou1999_reference" status="needs_review" stale="false" population="adults with HIV" measured-compound="didanosine" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhou XJ, Sheiner LB, D'Aquila RT, Hughes MD, Hirsch MS, Fischl MA et al. Population pharmacokinetics of nevirapine, zidovudine, and didanosine in human immunodeficiency virus-infected patients. The National Institute of Allergy and Infectious Diseases AIDS Clinical Trials Group Protocol 241 Investigators. Antimicrobial agents and chemotherapy 43(1):121–128 (1999).
  ·  DOI: [10.1128/AAC.43.1.121](https://doi.org/10.1128/AAC.43.1.121)

## Population and dosing

**Population:** adults with HIV · condition HIV infection · age group adult.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference.svg" alt="Didanosine_Zhou1999_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Individual oral clearance (CL) | CL | 0.0533 | L/h |
| volume of distribution (V) | V | 1.17 | liters/kg |
| VSS (volume of distribution at steady state) | Vss | 6.68 | liters/kg |
| average individual oral CL | CLnorm | 1.64 | liters/h/kg |
| FTRIPLE | Frel | 1.05 | relative bioavailability (F) of ddI |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**cross_check_disputed; x1_cross_check.**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — didanosine: CL 0.0533 L/h, V 1.17 liters/kg, Vss 6.68 liters/kg, CLnorm 1.64 liters/h/kg, Frel 1.05 relative bioavailability (F) of ddI.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has didanosine, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Individual oral clearance (CL) | `Q22` · CL | 0.0533 | L/h | 1.481e-08 | m3/s | L/h | llm_corrected (0.6) | Zhou_1999:abstract |
| volume of distribution (V) | `Q61` · V | 1.17 | liters/kg | 0.0819 | m3 | l/kg | exact (1) | Zhou_1999:abstract |
| VSS (volume of distribution at steady state) | `Q65` · Vss | 6.68 | liters/kg | 0.4676 | m3 | l/kg | exact (1) | Zhou_1999:abstract |
| average individual oral CL | `Q354` · CLnorm | 1.64 | liters/h/kg | 3.189e-05 | m3/s | l/(h·kg) | llm_corrected (0.6) | Zhou_1999:abstract |
| FTRIPLE | `Q87` · Frel | 1.05 | relative bioavailability (F) of ddI |  |  | d^2·bioavailability·f·i·of·relative | llm (0.6) | Zhou_1999:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'liters/h/kg of body weight' (CL)
- dropped duplicate Q22 ('Individual mean oral CL', value '1.84') — already have one for this compound
- dropped duplicate Q61 ('V', value '2.67') — already have one for this compound
- dropped duplicate Q65 ('VSS', value '3.56') — already have one for this compound
- unit_dimension_unknown: 'relative bioavailability (F) of ddI' (Frel)
- dropped duplicate Q87 ('FDOUBLE', value '1') — already have one for this compound
- dropped value-less row: 'F of ZDV'
- implicit units: 'Individual oral clearance (CL)' → L/h (from the popPK convention: 'No unit is provided in the text or table. Oral clearance (CL) is standardly reported in L/h in population PK. The value ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=didanosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Zhou_1999_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[average individual oral cl]` | 1.64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.0533 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f of zdv]` |  | 67.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ftriple]` | 1.05 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ftriple]` |  | 1.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[individual oral clearance]` | 0.0533 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` |  | 1.17 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 1.17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` | 6.68 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss]` |  | 6.68 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | didanosine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | didanosine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zhou_1999:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Zhou_1999:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Zhou_1999:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Zhou_1999:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0533 | ['Zhou_1999:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0533 L/h | ['Zhou_1999:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 81.9 L | ['Zhou_1999:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 468 L | ['Zhou_1999:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=didanosine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.143 (2 of 14 compared fields agree, 10 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.143 | cross-check contradicted by a second reader: verdict disputed; agreement 0.143 (2 of 14 compared fields agree, 10 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_modelica.zip" download>Didanosine_Zhou1999_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_fmi.zip" download>Didanosine_Zhou1999_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_matlab.zip" download>Didanosine_Zhou1999_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_matlab_simbio.zip" download>Didanosine_Zhou1999_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_sbml.zip" download>Didanosine_Zhou1999_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_cellml.zip" download>Didanosine_Zhou1999_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2362 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.481e-08 | m3/s |
| input | model | `VdPerKg` | 0.00117 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhou XJ, Sheiner LB, D'Aquila RT, Hughes MD, Hirsch MS, Fischl MA et al. Population pharmacokinetics of nevirapine, zidovudine, and didanosine in human immunodeficiency virus-infected patients. The National Institute of Allergy and Infectious Diseases AIDS Clinical Trials Group Protocol 241 Investigators. Antimicrobial agents and chemotherapy 43(1):121–128 (1999). [doi:10.1128/AAC.43.1.121](https://doi.org/10.1128/AAC.43.1.121)

**This record:** Pharmacolibrary, model `Didanosine_Zhou1999_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_didanosine/Didanosine_Zhou1999_reference>

```bibtex
@misc{pharmacolibrary_DidanosineZhou1999reference,
  title  = {{Pharmacolibrary model Didanosine_Zhou1999_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_didanosine/Didanosine_Zhou1999_reference},
  note   = {Parameters from doi:10.1128/AAC.43.1.121},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_didanosine/Didanosine_Zhou1999_reference/Didanosine_Zhou1999_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Didanosine_Zhou1999_reference_params.json` · controls `Didanosine_Zhou1999_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdidanosine%5D%20Didanosine_Zhou1999_reference&body=Drug%3A%20didanosine%0ARecord%3A%20Didanosine_Zhou1999_reference%0APaper%3A%20Zhou_1999%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_didanosine/Didanosine_Zhou1999_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 22:08 UTC</sub>
