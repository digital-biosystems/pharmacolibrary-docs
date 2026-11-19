<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Modafinil&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/&quot;},{&quot;label&quot;:&quot;Liu_2026 \u00b7 control_group&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Darwish2009_reference&quot;,&quot;label&quot;:&quot;Darwish_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Darwish2009_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Thorpy2020_reference&quot;,&quot;label&quot;:&quot;Thorpy_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Thorpy2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Willavize2017_reference&quot;,&quot;label&quot;:&quot;Willavize_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Willavize2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Wong1999v2_reference&quot;,&quot;label&quot;:&quot;Wong_1999_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Wong1999v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Liu2026_control_group&quot;,&quot;label&quot;:&quot;Liu_2026_control_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Liu2026_control_group.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Modafinil_Liu2026_gz_group&quot;,&quot;label&quot;:&quot;Liu_2026_gz_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Liu2026_gz_group.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Modafinil — `Modafinil_Liu2026_control_group`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The model does not reproduce the paper's terminal half-life; ka use library defaults, not estimates from this paper (+1 more).

<div class="pk-model-meta" hidden drug="Modafinil" model-id="Modafinil_Liu2026_control_group" status="needs_review" stale="false" population="male C57BL/6J mice" measured-compound="Modafinil" parameterization="apparent" topology="1C"></div>

## Citation
Liu F, Shen H, Wan Q, Li Y, Zhao G, Liu X et al. Alterations in the hepatic drug-metabolizing enzyme network of mice induced by +Gz exposure and its impact on the pharmacokinetics and pharmacodynamics of modafinil. Frontiers in pharmacology 17:1818737 (2026).
  ·  DOI: [10.3389/fphar.2026.1818737](https://doi.org/10.3389/fphar.2026.1818737)

## Population and dosing

**Population:** male C57BL/6J mice · condition +Gz exposure and sleep deprivation · age group adult · n = 40-50.

**Dosing:** 8400 mg, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group.svg" alt="Modafinil_Liu2026_control_group diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-t (mg·h/L) | AUCt | 92.422 | mg·h/L |
| AUC0−∞ (mg·h/L) | AUC∞ | 94.252 | mg·h/L |
| MRT0-t(h) | MRT | 2.188 | h |
| t 1/2z (h) | t1/2z | 1.298 | h |
| Tmax (h) | tmax | 0.5 | h |
| Vz/F (L/kg) | V/F | 2.427 | L/kg |
| CLz/F (L/h/kg) | CL/F | 1.301 | L/h/kg |
| Cmax (mg/L) | Cmax | 44.289 | mg/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life; ka use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — modafinil: AUCt 92.4 mg·h/L, AUC∞ 94.3 mg·h/L, MRT 2.19 h, t1/2z 1.3 h, tmax 0.5 h, V/F 2.43 L/kg, CL/F 1.3 L/h/kg, Cmax 44.3 mg/L.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-t (mg·h/L) | `Q19` · AUCt | 92.422 | mg·h/L | 332.7 | kg*s/m3 | (h·mg)/l | exact (1) | T2:row1:col1 |
| AUC0−∞ (mg·h/L) | `Q17` · AUC∞ | 94.252 | mg·h/L | 339.3 | kg*s/m3 | (h·mg)/l | exact (1) | T2:row2:col1 |
| MRT0-t(h) | `Q53` · MRT | 2.188 | h | 7877 | s | h | exact (1) | T2:row3:col1 |
| t 1/2z (h) | `Q57` · t1/2z | 1.298 | h | 4673 | s | h | half_life_rule (0.95) | T2:row5:col1 |
| Tmax (h) | `Q56` · tmax | 0.5 | h | 1800 | s | h | exact (1) | T2:row6:col1 |
| Vz/F (L/kg) | `Q76` · V/F | 2.427 | L/kg | 0.1699 | m3 | l/kg | exact (1) | T2:row7:col1 |
| CLz/F (L/h/kg) | `Q27` · CL/F | 1.301 | L/h/kg | 2.53e-05 | m3/s | l/(h·kg) | llm_confirmed (0.6) | T2:row8:col1 |
| Cmax (mg/L) | `Q32` · Cmax | 44.289 | mg/L | 0.04429 | kg/m3 | mg/l | exact (1) | T2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q53 ('MRT0−∞ (h)', value '2.246') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Modafinil
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: 'control group' subgroup of Liu_2026 (paper reports 2 populations: +gz group, control group)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['T2:row2:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['T2:row1:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row8:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T2:row9:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['T2:row3:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['T2:row6:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T2:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 91.1 L/h | ['T2:row8:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 170 L | ['T2:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=Modafinil) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.01755 |  | non-numeric value |
| T1_cmax | reference | skipped | 22.8 | 0.01755 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped |  | 1.49 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 46.4 | 1.49 | 0.0321 | →SI vs simulated h |
| T1_tmax | reference | skipped |  | 2.032 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_modelica.zip" download>Modafinil_Liu2026_control_group_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_fmi.zip" download>Modafinil_Liu2026_control_group_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_matlab.zip" download>Modafinil_Liu2026_control_group_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_matlab_simbio.zip" download>Modafinil_Liu2026_control_group_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_sbml.zip" download>Modafinil_Liu2026_control_group_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_cellml.zip" download>Modafinil_Liu2026_control_group_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2734 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0084 | kg |
| input | model | `Cl` | 2.53e-05 | m3/s |
| input | model | `VdPerKg` | 0.002427 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Liu F, Shen H, Wan Q, Li Y, Zhao G, Liu X et al. Alterations in the hepatic drug-metabolizing enzyme network of mice induced by +Gz exposure and its impact on the pharmacokinetics and pharmacodynamics of modafinil. Frontiers in pharmacology 17:1818737 (2026). [doi:10.3389/fphar.2026.1818737](https://doi.org/10.3389/fphar.2026.1818737)

**This record:** Pharmacolibrary, model `Modafinil_Liu2026_control_group`. <https://pharmacolibrary.github.io/#/drugs/toxin_modafinil/Modafinil_Liu2026_control_group>

```bibtex
@misc{pharmacolibrary_ModafinilLiu2026controlgroup,
  title  = {{Pharmacolibrary model Modafinil_Liu2026_control_group}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_modafinil/Modafinil_Liu2026_control_group},
  note   = {Parameters from doi:10.3389/fphar.2026.1818737},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 8400 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 8400 mg.

<dbs-fmusim paramsurl="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_modafinil/Modafinil_Liu2026_control_group/Modafinil_Liu2026_control_group_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Modafinil_Liu2026_control_group_params.json` · controls `Modafinil_Liu2026_control_group_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmodafinil%5D%20Modafinil_Liu2026_control_group&body=Drug%3A%20modafinil%0ARecord%3A%20Modafinil_Liu2026_control_group%0APaper%3A%20Liu_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_modafinil/Modafinil_Liu2026_control_group%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:04 UTC</sub>
