<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Atomoxetine&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/&quot;},{&quot;label&quot;:&quot;Kim_2018 \u00b7 cyp2d6_wt_wt&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Farid1985_reference&quot;,&quot;label&quot;:&quot;Farid_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Farid1985_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Kim2018_cyp2d6_10_10&quot;,&quot;label&quot;:&quot;Kim_2018_cyp2d6_10_10&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_10_10.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Kim2018_cyp2d6_wt_wt&quot;,&quot;label&quot;:&quot;Kim_2018_cyp2d6_wt_wt&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atomoxetine_Morais2025_reference&quot;,&quot;label&quot;:&quot;Morais_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Morais2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Sauer2005_reference&quot;,&quot;label&quot;:&quot;Sauer_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Sauer2005_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atomoxetine — `Atomoxetine_Kim2018_cyp2d6_wt_wt`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Atomoxetine" model-id="Atomoxetine_Kim2018_cyp2d6_wt_wt" status="extracted" stale="false" population="healthy Korean adults (CYP2D6*wt/*wt and CYP2D6*10/*10), plus simulated CYP2D6 EM and PM populations" measured-compound="Atomoxetine" parameterization="apparent" topology="retention"></div>

## Citation
Kim SH, Byeon JY, Kim YH, Lee CM, Lee YJ, Jang CG et al. Physiologically based pharmacokinetic modelling of atomoxetine with regard to CYP2D6 genotypes. Scientific reports 8(1):12405 (2018).
  ·  DOI: [10.1038/s41598-018-30841-8](https://doi.org/10.1038/s41598-018-30841-8)

## Population and dosing

**Population:** healthy Korean adults (CYP2D6*wt/*wt and CYP2D6*10/*10), plus simulated CYP2D6 EM and PM populations · condition healthy · age group adult · n = 19.

**Dosing:** 20 mg, oral, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** CLnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| AUC0–24 [ng·hr/mL] | AUCt | 503.74 | ng·hr/mL |
| AUC0–∞ [ng·hr/mL] | AUC∞ | 521.09 | ng·hr/mL |
| Cmax [ng/mL] | Cmax | 159.73 | ng/mL |
| CL/F [L/hr/kg] | CLnorm/F | 0.64 | L/hr/kg |
| tmax [hr] | tmax | 0.50 | hr |
| t1/2 [hr] | t1/2z | 2.24 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–24 [ng·hr/mL] | `Q19` · AUCt | 503.74 | ng·hr/mL | 1.813 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Kim_2018_table_1:row0:col1 |
| AUC0–∞ [ng·hr/mL] | `Q17` · AUC∞ | 521.09 | ng·hr/mL | 1.876 | kg*s/m3 | (h·ng)/ml | llm_confirmed (0.6) | Kim_2018_table_1:row1:col1 |
| Cmax [ng/mL] | `Q32` · Cmax | 159.73 | ng/mL | 0.0001597 | kg/m3 | ng/ml | llm_confirmed (0.6) | Kim_2018_table_1:row2:col1 |
| CL/F [L/hr/kg] | `Q355` · CLnorm/F | 0.64 | L/hr/kg | 1.244e-05 | m3/s | l/(h·kg) | llm_corrected (0.6) | Kim_2018_table_1:row3:col1 |
| tmax [hr] | `Q56` · tmax | 0.50 | hr | 1800 | s | h | llm_confirmed (0.6) | Kim_2018_table_1:row4:col1 |
| t1/2 [hr] | `Q57` · t1/2z | 2.24 | hr | 8064 | s | h | llm_confirmed (0.6) | Kim_2018_table_1:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 [hr] (Q57)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped value-less row: 'Table 2. Atomoxetine parameters used for PBPK development in the CYP2D6*wt/*wt genotype group.'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Atomoxetine
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'cyp2d6*wt/*wt' subgroup of Kim_2018 (paper reports 2 populations: cyp2d6*10/*10, cyp2d6*wt/*wt)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: unparsed_numeric_cell
- companion parameter table 1 transcribed (13 record(s))
- companion parameter table 3 transcribed (14 record(s))
- LLM selected parameter table(s) 1, 2, 3
- LLM region Kim_2018:other_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['Kim_2018_table_1:row1:col1'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Kim_2018_table_1:row0:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kim_2018_table_1:row2:col1'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] |  | ['Kim_2018_table_1:row3:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kim_2018_table_1:row4:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kim_2018_table_1:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_modelica.zip" download>Atomoxetine_Kim2018_cyp2d6_wt_wt_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_fmi.zip" download>Atomoxetine_Kim2018_cyp2d6_wt_wt_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_matlab.zip" download>Atomoxetine_Kim2018_cyp2d6_wt_wt_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_sbml.zip" download>Atomoxetine_Kim2018_cyp2d6_wt_wt_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_cellml.zip" download>Atomoxetine_Kim2018_cyp2d6_wt_wt_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2554 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 8064 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kim SH, Byeon JY, Kim YH, Lee CM, Lee YJ, Jang CG et al. Physiologically based pharmacokinetic modelling of atomoxetine with regard to CYP2D6 genotypes. Scientific reports 8(1):12405 (2018). [doi:10.1038/s41598-018-30841-8](https://doi.org/10.1038/s41598-018-30841-8)

**This record:** Pharmacolibrary, model `Atomoxetine_Kim2018_cyp2d6_wt_wt`. <https://pharmacolibrary.github.io/#/drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt>

```bibtex
@misc{pharmacolibrary_AtomoxetineKim2018cyp2d6wtwt,
  title  = {{Pharmacolibrary model Atomoxetine_Kim2018_cyp2d6_wt_wt}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt},
  note   = {Parameters from doi:10.1038/s41598-018-30841-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt/Atomoxetine_Kim2018_cyp2d6_wt_wt_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Atomoxetine_Kim2018_cyp2d6_wt_wt_params.json` · controls `Atomoxetine_Kim2018_cyp2d6_wt_wt_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batomoxetine%5D%20Atomoxetine_Kim2018_cyp2d6_wt_wt&body=Drug%3A%20atomoxetine%0ARecord%3A%20Atomoxetine_Kim2018_cyp2d6_wt_wt%0APaper%3A%20Kim_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:23 UTC</sub>
