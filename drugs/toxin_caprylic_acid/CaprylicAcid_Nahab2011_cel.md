<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Caprylic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_caprylic_acid/&quot;},{&quot;label&quot;:&quot;Nahab_2011 \u00b7 cel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CaprylicAcid_Nahab2011_cel&quot;,&quot;label&quot;:&quot;Nahab_2011_cel&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;CaprylicAcid_Nahab2011_soy&quot;,&quot;label&quot;:&quot;Nahab_2011_soy&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_soy.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Caprylic acid — `CaprylicAcid_Nahab2011_cel`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 1.46, model 7.5).

<div class="pk-model-meta" hidden drug="Caprylic acid" model-id="CaprylicAcid_Nahab2011_cel" status="needs_review" stale="false" population="patients with essential tremor" measured-compound="1-octanol" parameterization="mechanistic" topology="retention"></div>

## Citation
Nahab FB, Wittevrongel L, Ippolito D, Toro C, Grimes GJ, Starling J et al. An open-label, single-dose, crossover study of the pharmacokinetics and metabolism of two oral formulations of 1-octanol in patients with essential tremor. Neurotherapeutics : the journal of the American Society for Experimental NeuroTherapeutics 8(4):753–762 (2011).
  ·  DOI: [10.1007/s13311-011-0045-1](https://doi.org/10.1007/s13311-011-0045-1)

## Population and dosing

**Population:** patients with essential tremor · condition essential tremor · age group adult · n = 14.

**Dosing:** 70, 560, 1120, 2240, 4480, 8960 mg, oral, multiple.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (ng/mL) | Cmax | 385.7 | ng/mL |
| T max (min) | tmax | 20.0 | min |
| AUC 6h (ng min/mL) | AUCt | 46231.0 | ng min/mL |
| λ z (1/min) | kel | 0.00154 | 1/min |
| T 1/2 (min) | t1/2z | 450.3 | min |
| AUC ∞ (ng min/mL) | AUC∞ | 94938.2 | ng min/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 1.46, model 7.5).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. None of the extracted parameters is caprylic acid's own; they describe 1-octanol. Extracted — 1-octanol: Cmax 386 ng/mL, tmax 20 min, AUCt 4.62e+04 ng min/mL, kel 0.00154 1/min, t1/2z 450 min, AUC∞ 9.49e+04 ng min/mL.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (ng/mL) | `Q32` · Cmax | 385.7 | ng/mL | 0.0003857 | kg/m3 | ng/ml | space_fold (0.95) | tab_0:row1:col3, tab_0:row2:col3, tab_0:row3:col3, tab_0:row4:col3, tab_0:row5:col3, tab_0:row6:col3, tab_0:row7:col3 |
| T max (min) | `Q56` · tmax | 20.0 | min | 1200 | s | min | space_fold (0.95) | tab_0:row1:col4, tab_0:row2:col4, tab_0:row3:col4, tab_0:row4:col4, tab_0:row5:col4, tab_0:row6:col4, tab_0:row7:col4 |
| AUC 6h (ng min/mL) | `Q19` · AUCt | 46231.0 | ng min/mL | 2.774 | kg*s/m3 | (min·ng)/ml | llm_corrected (0.6) | tab_0:row1:col5, tab_0:row2:col5, tab_0:row3:col5, tab_0:row4:col5, tab_0:row5:col5, tab_0:row6:col5, tab_0:row7:col5 |
| λ z (1/min) | `Q47` · kel | 0.00154 | 1/min | 2.567e-05 | 1/s | 1/min | space_fold (0.95) | tab_0:row1:col6, tab_0:row2:col6, tab_0:row3:col6, tab_0:row4:col6, tab_0:row5:col6, tab_0:row6:col6, tab_0:row7:col6 |
| T 1/2 (min) | `Q57` · t1/2z | 450.3 | min | 2.702e+04 | s | min | half_life_rule (0.95) | tab_0:row1:col7, tab_0:row2:col7, tab_0:row3:col7, tab_0:row4:col7, tab_0:row5:col7, tab_0:row6:col7, tab_0:row7:col7 |
| AUC ∞ (ng min/mL) | `Q17` · AUC∞ | 94938.2 | ng min/mL | 5.696 | kg*s/m3 | (min·ng)/ml | space_fold (0.95) | tab_0:row1:col8, tab_0:row2:col8, tab_0:row3:col8, tab_0:row4:col8, tab_0:row5:col8, tab_0:row6:col8, tab_0:row7:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / T 1/2 (min) (Q57)

**Interpretation flags:**
- table representations disagree for 'C max (ng/mL)'; source reconciliation required
- table representations disagree for 'T max (min)'; source reconciliation required
- table representations disagree for 'AUC 6h (ng min/mL)'; source reconciliation required
- table representations disagree for 'λ z (1/min)'; source reconciliation required
- table representations disagree for 'T 1/2 (min)'; source reconciliation required
- table representations disagree for 'AUC ∞ (ng min/mL)'; source reconciliation required
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=1-octanol
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'cel' subgroup of Nahab_2011 (paper reports 2 populations: cel, soy)
- review gap-fill skipped: this record measures '1-octanol', not caprylic_acid — the review values are the parent's

**Extraction notes:**
- transposed table tab_0: logical view retains original source coordinates
- table tab_0: representations disagree; selected evidence retained, not merged

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_0:row1:col8', 'tab_0:row2:col8', 'tab_0:row3:col8', 'tab_0:row4:col8', 'tab_0:row5:col8', 'tab_0:row6:col8', 'tab_0:row7:col8'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_0:row1:col5', 'tab_0:row2:col5', 'tab_0:row3:col5', 'tab_0:row4:col5', 'tab_0:row5:col5', 'tab_0:row6:col5', 'tab_0:row7:col5'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_0:row1:col3', 'tab_0:row2:col3', 'tab_0:row3:col3', 'tab_0:row4:col3', 'tab_0:row5:col3', 'tab_0:row6:col3', 'tab_0:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_0:row1:col6', 'tab_0:row2:col6', 'tab_0:row3:col6', 'tab_0:row4:col6', 'tab_0:row5:col6', 'tab_0:row6:col6', 'tab_0:row7:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['tab_0:row1:col4', 'tab_0:row2:col4', 'tab_0:row3:col4', 'tab_0:row4:col4', 'tab_0:row5:col4', 'tab_0:row6:col4', 'tab_0:row7:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row1:col7', 'tab_0:row2:col7', 'tab_0:row3:col7', 'tab_0:row4:col7', 'tab_0:row5:col7', 'tab_0:row6:col7', 'tab_0:row7:col7'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=1-octanol) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 1.46 | 7.505 | 5.14 | minutes→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_modelica.zip" download>CaprylicAcid_Nahab2011_cel_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_fmi.zip" download>CaprylicAcid_Nahab2011_cel_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_matlab.zip" download>CaprylicAcid_Nahab2011_cel_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_sbml.zip" download>CaprylicAcid_Nahab2011_cel_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_cellml.zip" download>CaprylicAcid_Nahab2011_cel_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1302 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.702e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nahab FB, Wittevrongel L, Ippolito D, Toro C, Grimes GJ, Starling J et al. An open-label, single-dose, crossover study of the pharmacokinetics and metabolism of two oral formulations of 1-octanol in patients with essential tremor. Neurotherapeutics : the journal of the American Society for Experimental NeuroTherapeutics 8(4):753–762 (2011). [doi:10.1007/s13311-011-0045-1](https://doi.org/10.1007/s13311-011-0045-1)

**This record:** Pharmacolibrary, model `CaprylicAcid_Nahab2011_cel`. <https://pharmacolibrary.github.io/#/drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel>

```bibtex
@misc{pharmacolibrary_CaprylicAcidNahab2011cel,
  title  = {{Pharmacolibrary model CaprylicAcid_Nahab2011_cel}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel},
  note   = {Parameters from doi:10.1007/s13311-011-0045-1},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel/CaprylicAcid_Nahab2011_cel_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `CaprylicAcid_Nahab2011_cel_params.json` · controls `CaprylicAcid_Nahab2011_cel_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcaprylic_acid%5D%20CaprylicAcid_Nahab2011_cel&body=Drug%3A%20caprylic_acid%0ARecord%3A%20CaprylicAcid_Nahab2011_cel%0APaper%3A%20Nahab_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_caprylic_acid/CaprylicAcid_Nahab2011_cel%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 23:36 UTC</sub>
