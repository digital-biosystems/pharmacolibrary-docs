<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;sotalol&quot;,&quot;href&quot;:&quot;drugs/drug_sotalol/&quot;},{&quot;label&quot;:&quot;Yellepeddi_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotalol_Yellepeddi2025_reference&quot;,&quot;label&quot;:&quot;Yellepeddi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sotalol — `Sotalol_Yellepeddi2025_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-29 08:52 UTC (Reproduces with caveats), but the paper was screened again on 2026-10-07 01:15 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="sotalol" model-id="Sotalol_Yellepeddi2025_reference" status="extracted" stale="true" population="adults with atrial arrhythmias" measured-compound="sotalol" parameterization="mechanistic" topology="2C"></div>

## Citation
Yellepeddi VK, Ismail M, Bunch TJ, Deering TF, Holubkov R, Kennedy R et al. Population Pharmacokinetics and Pharmacodynamics of Sotalol Following Expedited Intravenous Loading in Patients With Atrial Arrhythmias. CPT: pharmacometrics & systems pharmacology 14(4):658–667 (2025).
  ·  DOI: [10.1002/psp4.13302](https://doi.org/10.1002/psp4.13302)

## Population and dosing

**Population:** adults with atrial arrhythmias · condition atrial arrhythmias · age group adult · n = 20.

**Dosing:** 60, 120 mg, iv, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference.svg" alt="Sotalol_Yellepeddi2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Clearance (CL), L/h | CL | 9.5 | L/h | 33.1 |
| Intercompartmental clearance (Q), L/h | Q | 71.3 | L/h | 20.3 |
| Central Volume of distribution (Vc), L | V1 | 38.2 | L | 31.2 |
| Peripheral volume of distribution (Vp), L | V2 | 89.1 | L | 25.4 |
| Absorption rate constant (Ka), h−1 | kabs | 0.2 | h−1 | 34.2 |
| Oral bioavailability relative to IV (Foral) | Frel | 1.6 | Foral | 28.4 |
| theta_cl_crcl | theta_cl_crcl | 0.7 |  | 31.8 |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.952). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (Frel), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[oral bioavailability relative to iv].parameter_id`: this record has Q87, the second reading Q40. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL), L/h | `Q22` · CL | 9.5 | L/h | 2.639e-06 | m3/s | l/h | 33.1 | space_fold (0.95) | psp413302-tbl-0002:row2:col1, psp413302-tbl-0002:row2:col2 |
| Intercompartmental clearance (Q), L/h | `Q30` · Q | 71.3 | L/h | 1.981e-05 | m3/s | l/h | 20.3 | llm_confirmed (0.6) | psp413302-tbl-0002:row3:col1, psp413302-tbl-0002:row3:col2 |
| Central Volume of distribution (Vc), L | `Q63` · V1 | 38.2 | L | 0.0382 | m3 | l | 31.2 | boundary_compartment (0.9) | psp413302-tbl-0002:row4:col1, psp413302-tbl-0002:row4:col2 |
| Peripheral volume of distribution (Vp), L | `Q64` · V2 | 89.1 | L | 0.0891 | m3 | l | 25.4 | boundary_compartment (0.9) | psp413302-tbl-0002:row5:col1, psp413302-tbl-0002:row5:col2 |
| Absorption rate constant (Ka), h−1 | `Q49` · kabs | 0.2 | h−1 | 5.556e-05 | 1/s | 1/h | 34.2 | llm_confirmed (0.6) | psp413302-tbl-0002:row6:col1, psp413302-tbl-0002:row6:col2 |
| Oral bioavailability relative to IV (Foral) | `Q87` · Frel | 1.6 | Foral |  |  |  | 28.4 | llm_corrected (0.6) | psp413302-tbl-0002:row7:col1, psp413302-tbl-0002:row7:col2 |
| theta_cl_crcl | `Q900` · theta_cl_crcl | 0.7 |  |  |  |  | 31.8 |  | psp413302-tbl-0002:row8:col1, psp413302-tbl-0002:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'IIV – CL(%)' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV – Vc (%)' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV – Ka (%)' routed out of structural estimates ('Interindividual variability (IIV)')
- unit_dimension_unknown: 'Vc*[WTKG/104]θ' (V1)
- dropped duplicate Q63 ('θWT on Vc (Vc*[WTKG/104]θ)', value '1.1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sotalol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.952 (20/21 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[oral bioavailability relative to iv].parameter_id` | Q87 | Q40 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413302-tbl-0002:row2:col1', 'psp413302-tbl-0002:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413302-tbl-0002:row3:col1', 'psp413302-tbl-0002:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413302-tbl-0002:row6:col1', 'psp413302-tbl-0002:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp413302-tbl-0002:row4:col1', 'psp413302-tbl-0002:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413302-tbl-0002:row5:col1', 'psp413302-tbl-0002:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.5 | ['psp413302-tbl-0002:row2:col1', 'psp413302-tbl-0002:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.5 L/h | ['psp413302-tbl-0002:row2:col1', 'psp413302-tbl-0002:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 38.2 L | ['psp413302-tbl-0002:row4:col1', 'psp413302-tbl-0002:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 89.1 L | ['psp413302-tbl-0002:row5:col1', 'psp413302-tbl-0002:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=sotalol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_modelica.zip" download>Sotalol_Yellepeddi2025_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_fmi.zip" download>Sotalol_Yellepeddi2025_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_matlab.zip" download>Sotalol_Yellepeddi2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_matlab_simbio.zip" download>Sotalol_Yellepeddi2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_sbml.zip" download>Sotalol_Yellepeddi2025_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_cellml.zip" download>Sotalol_Yellepeddi2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2724 | kg/mol |
| input | dosing | `F` | 1.6 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-05 | kg |
| input | model | `Cl` | 2.639e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005457 | m3/kg |
| input | model | `k12` | 0.0005185 | 1/s |
| input | model | `k21` | 0.0002223 | 1/s |
| input | model | `ka` | 5.556e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yellepeddi VK, Ismail M, Bunch TJ, Deering TF, Holubkov R, Kennedy R et al. Population Pharmacokinetics and Pharmacodynamics of Sotalol Following Expedited Intravenous Loading in Patients With Atrial Arrhythmias. CPT: pharmacometrics & systems pharmacology 14(4):658–667 (2025). [doi:10.1002/psp4.13302](https://doi.org/10.1002/psp4.13302)

**This record:** Pharmacolibrary v26.09, model `Sotalol_Yellepeddi2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference>

```bibtex
@misc{pharmacolibrary_SotalolYellepeddi2025reference,
  title  = {{Pharmacolibrary model Sotalol_Yellepeddi2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference},
  note   = {Parameters from doi:10.1002/psp4.13302},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.2 /h, F 1.6). Doses in the paper: 60–120 mg.

<dbs-fmusim paramsurl="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference/Sotalol_Yellepeddi2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Sotalol_Yellepeddi2025_reference_params.json` · controls `Sotalol_Yellepeddi2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsotalol%5D%20Sotalol_Yellepeddi2025_reference&body=Drug%3A%20sotalol%0ARecord%3A%20Sotalol_Yellepeddi2025_reference%0APaper%3A%20Yellepeddi_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sotalol/Sotalol_Yellepeddi2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 01:15 UTC</sub>
