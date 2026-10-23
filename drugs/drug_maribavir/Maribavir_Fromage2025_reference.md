<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maribavir&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/&quot;},{&quot;label&quot;:&quot;Fromage_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maribavir_Song2024_reference&quot;,&quot;label&quot;:&quot;Song_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Sun2025_estimates&quot;,&quot;label&quot;:&quot;Sun_2025_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Sun2025_estimates.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Fromage2025_reference&quot;,&quot;label&quot;:&quot;Fromage_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Fromage2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Maribavir_Song2020_reference&quot;,&quot;label&quot;:&quot;Song_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# maribavir — `Maribavir_Fromage2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0149, model 0.0051).

<div class="pk-model-meta" hidden drug="maribavir" model-id="Maribavir_Fromage2025_reference" status="needs_review" stale="false" population="patients treated for CMV infection" measured-compound="maribavir" parameterization="apparent" topology="2C"></div>

## Citation
Fromage Y, Sayadi H, Alain S, Marquet P, Peytavin G, Woillard JB. Optimizing CMV therapy: Population pharmacokinetics and Monte Carlo simulations for letermovir and maribavir dosage. PloS one 20(4):e0321180 (2025).
  ·  DOI: [10.1371/journal.pone.0321180](https://doi.org/10.1371/journal.pone.0321180)

## Population and dosing

**Population:** patients treated for CMV infection · condition CMV infection · age group adult.

**Dosing:** 400, 480, 960 mg, oral, multiple.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference.svg" alt="Maribavir_Fromage2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl/F (L.h − 1) | CL/F | 3.9 | L/h |
| Vc/F (L) | V1/F | 19 | L |
| Vp/F (L) | V2/F | 8.5 | L |
| Ka (h − 1) | kabs | 0.3 | h − 1 |
| Q (L/h) | Q | 0.83 | L/h |
| Alag (h) | tlag | 0.26 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.0149, model 0.0051).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — maribavir: CL/F 3.9 L/h, V1/F 19 L, V2/F 8.5 L, kabs 0.3 h − 1, Q 0.83 L/h, tlag 0.26 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl/F (L.h − 1) | `Q27` · CL/F | 3.9 | L/h | 1.083e-06 | m3/s | L/h | exact (1) | pone.0321180.t001:row0:col3 |
| Vc/F (L) | `Q290` · V1/F | 19 | L | 0.019 | m3 | l | exact (1) | pone.0321180.t001:row1:col3 |
| Vp/F (L) | `Q82` · V2/F | 8.5 | L | 0.0085 | m3 | l | exact (1) | pone.0321180.t001:row2:col3 |
| Ka (h − 1) | `Q49` · kabs | 0.3 | h − 1 | 8.333e-05 | 1/s | 1/h | exact (1) | pone.0321180.t001:row3:col3 |
| Q (L/h) | `Q30` · Q | 0.83 | L/h | 2.306e-07 | m3/s | l/h | exact (1) | pone.0321180.t001:row4:col3 |
| Alag (h) | `Q83` · tlag | 0.26 | h | 936 | s | h | exact (1) | pone.0321180.t001:row5:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_unknown: 'L.h − 1' (CL/F)
- routed 'Original ε prop' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'ε add used' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'ε prop used' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'Cl/F (L.h − 1)' → L/h (from the paper text: "Table 1 caption/footnote states 'Cl/F mean apparent clearance' and the parameter listing itself shows 'Cl/F (L.h − 1) = ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=maribavir

**Extraction notes:**
- transposed table pone.0321180.t001: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell pone.0321180.t001:row3:col1 = 'Ka (h − 1)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pone.0321180.t001:row0:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pone.0321180.t001:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pone.0321180.t001:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pone.0321180.t001:row3:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pone.0321180.t001:row2:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['pone.0321180.t001:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.9 L/h | ['pone.0321180.t001:row0:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 19 L | ['pone.0321180.t001:row1:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 8.5 L | ['pone.0321180.t001:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=maribavir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.0149 | 0.005102 | 0.3424 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0392 | 0.005102 | 0.1302 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.025 | 0.005102 | 0.2041 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0296 | 0.005102 | 0.1724 | mg/L→SI vs simulated kg/m3 |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_modelica.zip" download>Maribavir_Fromage2025_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_fmi.zip" download>Maribavir_Fromage2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_matlab.zip" download>Maribavir_Fromage2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_matlab_simbio.zip" download>Maribavir_Fromage2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_sbml.zip" download>Maribavir_Fromage2025_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_cellml.zip" download>Maribavir_Fromage2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3762 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 936 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0004 | kg |
| input | model | `Cl` | 1.083e-06 | m3/s |
| input | model | `VdPerKg` | 0.0002714 | m3/kg |
| input | model | `k12` | 1.213e-05 | 1/s |
| input | model | `k21` | 2.712e-05 | 1/s |
| input | model | `ka` | 8.333e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Fromage Y, Sayadi H, Alain S, Marquet P, Peytavin G, Woillard JB. Optimizing CMV therapy: Population pharmacokinetics and Monte Carlo simulations for letermovir and maribavir dosage. PloS one 20(4):e0321180 (2025). [doi:10.1371/journal.pone.0321180](https://doi.org/10.1371/journal.pone.0321180)

**This record:** Pharmacolibrary v26.09, model `Maribavir_Fromage2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_maribavir/Maribavir_Fromage2025_reference>

```bibtex
@misc{pharmacolibrary_MaribavirFromage2025reference,
  title  = {{Pharmacolibrary model Maribavir_Fromage2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_maribavir/Maribavir_Fromage2025_reference},
  note   = {Parameters from doi:10.1371/journal.pone.0321180},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 0.3 /h, lag 15.6 min, F 1). Doses in the paper: 400, 480, 960 mg.

<dbs-fmusim paramsurl="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_maribavir/Maribavir_Fromage2025_reference/Maribavir_Fromage2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Maribavir_Fromage2025_reference_params.json` · controls `Maribavir_Fromage2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaribavir%5D%20Maribavir_Fromage2025_reference&body=Drug%3A%20maribavir%0ARecord%3A%20Maribavir_Fromage2025_reference%0APaper%3A%20Fromage_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_maribavir/Maribavir_Fromage2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:08 UTC</sub>
