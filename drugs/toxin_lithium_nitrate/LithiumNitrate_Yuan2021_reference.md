<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Lithium nitrate&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/&quot;},{&quot;label&quot;:&quot;Yuan_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;LithiumNitrate_Jermain1991_reference&quot;,&quot;label&quot;:&quot;Jermain_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jermain1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_base&quot;,&quot;label&quot;:&quot;Jin_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_base_base_model_parameter_estimates_r&quot;,&quot;label&quot;:&quot;Jin_2022_base_base_model_parameter_estimates_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_base_base_model_parameter_estimates_r.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_final&quot;,&quot;label&quot;:&quot;Jin_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Jin2022_final_final_model_parameter_estimates&quot;,&quot;label&quot;:&quot;Jin_2022_final_final_model_parameter_estimates_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Jin2022_final_final_model_parameter_estimates.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LithiumNitrate_Yuan2021_reference&quot;,&quot;label&quot;:&quot;Yuan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lithium nitrate — `LithiumNitrate_Yuan2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V2/F (8.2 L) was unextracted, and absorption rate/lag time used library placeholders rather than paper-specific estimates for lithium in children.

<div class="pk-model-meta" hidden drug="Lithium nitrate" model-id="LithiumNitrate_Yuan2021_reference" status="needs_review" stale="false" population="children with intellectual disability aged 4-10 years old" measured-compound="lithium" parameterization="apparent" topology="1C"></div>

## Citation
Yuan J, Zhang B, Xu Y, Zhang X, Song J, Zhou W et al. Population Pharmacokinetics of Lithium in Young Pediatric Patients With Intellectual Disability. Frontiers in pharmacology 12:650298 (2021).
  ·  DOI: [10.3389/fphar.2021.650298](https://doi.org/10.3389/fphar.2021.650298)

## Population and dosing

**Population:** children with intellectual disability aged 4-10 years old · condition intellectual disability · age group child · n = 52.

**Dosing:** 840 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed lithium carbonate, measured lithium.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference/LithiumNitrate_Yuan2021_reference.svg" alt="LithiumNitrate_Yuan2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F (%) | Fab | 100 | % |  | 30.3 (10.9% RSE) |
| MTT (h) | MTT | 0.52 | h | 9.9 | 65.0 (13.1% RSE) |
| Number of transit compartment | n_transit | 6 |  |  |  |
| CL/F (L/h) | CLm/F | 0.98 | L/h | 4.6 |  |
| VC/F (L) | V1/F | 13.1 | L | 7.2 | 26.5 (16.1% RSE) |
| Q/F (L/h) | Q/F | 0.84 | L/h | 9.5 |  |
| Vp/F (L) | V2/F | 8.2 | L | 17.7 | 118.7 (15.4% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V2/F (8.2 L) was unextracted, and absorption rate/lag time used library placeholders rather than paper-specific estimates for lithium in children.**

The peripheral distribution volume (8.2 L) was neither extracted nor explicitly set, leaving it as an unsupported library placeholder. Additionally, the absorption rate and lag time were filled with standard defaults because they were not reported in the source paper. A reported unit could not be converted to standard SI units, preventing accurate scaling of one parameter. The model also assumed full bioavailability without justification, further compromising the estimated absorption profile. Extracted — lithium nitrate: Fab 100 %; lithium: MTT 0.52 h, n_transit 6, CLm/F 0.98 L/h, V1/F 13.1 L, Q/F 0.84 L/h, V2/F 8.2 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F (%) | `Q40` · Fab | 100 | % |  |  |  |  | exact (1) | T1:row1:col1 | 30.3 (10.9% RSE) |
| MTT (h) | `Q81` · MTT | 0.52 | h | 1872 | s | h | 9.9 | exact (1) | T1:row2:col1 | 65.0 (13.1% RSE) |
| Number of transit compartment | `Q311` · n_transit | 6 |  | 6 |  |  |  | llm_confirmed (0.6) | T1:row3:col1 |  |
| CL/F (L/h) | `Q351` · CLm/F | 0.98 | L/h | 2.722e-07 | m3/s | l/h | 4.6 | exact (1) | T1:row4:col1 |  |
| VC/F (L) | `Q290` · V1/F | 13.1 | L | 0.0131 | m3 | l | 7.2 | exact (1) | T1:row5:col1 | 26.5 (16.1% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 0.84 | L/h | 2.333e-07 | m3/s | l/h | 9.5 | exact (1) | T1:row6:col1 |  |
| Vp/F (L) | `Q82` · V2/F | 8.2 | L | 0.0082 | m3 | l | 17.7 | exact (1) | T1:row7:col1 | 118.7 (15.4% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'F (%)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'MTT (h)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'VC/F (L)' routed out of structural estimates ('CV for IIV (%RSE)')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('CV for IIV (%RSE)')
- dropped value-less row: 'CL'
- dropped value-less row: 'Vc'
- dropped value-less row: 'MTT'
- dropped value-less row: 'Vp'
- dropped value-less row: 'Q'
- dropped value-less row: 'a1-a6'
- metabolite lithium: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lithium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 10 linked by role; re-tagged lithium→parent ×3
- review gap-fill skipped: this record measures 'lithium', not lithium_nitrate — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T1:row5:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['T1:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T1:row6:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['T1:row2:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T1:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 13.1 L | ['T1:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 8.2 L | ['T1:row7:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=lithium) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 3 scholar param(s) emitted or defaulted | 2 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| X1_cross_check | skipped |  |  | no second reading of this record |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference/LithiumNitrate_Yuan2021_reference_modelica.zip" download>LithiumNitrate_Yuan2021_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference/LithiumNitrate_Yuan2021_reference_fmi.zip" download>LithiumNitrate_Yuan2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.00694 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00084 | kg |
| input | model | `Cl` | 2.722e-07 | m3/s |
| input | model | `VdPerKg` | 0.0001871 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yuan J, Zhang B, Xu Y, Zhang X, Song J, Zhou W et al. Population Pharmacokinetics of Lithium in Young Pediatric Patients With Intellectual Disability. Frontiers in pharmacology 12:650298 (2021). [doi:10.3389/fphar.2021.650298](https://doi.org/10.3389/fphar.2021.650298)

**This record:** Pharmacolibrary, model `LithiumNitrate_Yuan2021_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference>

```bibtex
@misc{pharmacolibrary_LithiumNitrateYuan2021reference,
  title  = {{Pharmacolibrary model LithiumNitrate_Yuan2021_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference},
  note   = {Parameters from doi:10.3389/fphar.2021.650298},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 840 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 840 mg.

<dbs-fmusim paramsurl="drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference/LithiumNitrate_Yuan2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference/LithiumNitrate_Yuan2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `LithiumNitrate_Yuan2021_reference_params.json` · controls `LithiumNitrate_Yuan2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blithium_nitrate%5D%20LithiumNitrate_Yuan2021_reference&body=Drug%3A%20lithium_nitrate%0ARecord%3A%20LithiumNitrate_Yuan2021_reference%0APaper%3A%20Yuan_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lithium_nitrate/LithiumNitrate_Yuan2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 12:12 UTC</sub>
