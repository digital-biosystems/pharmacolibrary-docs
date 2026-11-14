<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tramadol&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/&quot;},{&quot;label&quot;:&quot;Nordmeier_2021 \u00b7 tramadol_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bressolle2009_reference&quot;,&quot;label&quot;:&quot;Bressolle_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Bressolle2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Nordmeier2021_tramadol_estimate&quot;,&quot;label&quot;:&quot;Nordmeier_2021_tramadol_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tramadol — `Tramadol_Nordmeier2021_tramadol_estimate`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Tramadol" model-id="Tramadol_Nordmeier2021_tramadol_estimate" status="extracted" stale="false" population="pigs" measured-compound="Tramadol" parameterization="mechanistic" topology="2C"></div>

## Citation
Nordmeier F, Sihinevich I, Doerr AA, Walle N, Laschke MW, Lehr T et al. Toxicokinetics of U-47700, tramadol, and their main metabolites in pigs following intravenous administration: is a multiple species allometric scaling approach useful for the extrapolation of toxicokinetic parameters to humans?. Archives of toxicology 95(12):3681–3693 (2021).
  ·  DOI: [10.1007/s00204-021-03169-y](https://doi.org/10.1007/s00204-021-03169-y)

## Population and dosing

**Population:** pigs · condition healthy · age group adult · n = 6 per drug.

**Dosing:** 7, 70 mg, iv, single.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate.svg" alt="Tramadol_Nordmeier2021_tramadol_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vcentral | V1 | 1.3 | L/kg | 17.8 |  |
| CL | CL | 1.9 | L/h/kg | 7.6 | 16.6 (31.9% RSE) |
| V2 | V2 | 1.7 | L/kg | 17.3 | 30.5 (49.6% RSE) |
| Q2 | Q | 0.7 | L/h/kg | 13.9 | 31.5 (32.0% RSE) |
| V3 | V3 | 0.7 | L/kg | 18.9 |  |
| Q3 | Q3 | 3.4 | L/h/kg | 51.6 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vcentral | `Q63` · V1 | 1.3 | L/kg | 0.091 | m3 | l/kg | 17.8 | llm (0.6) | Tab1:row3:col2 |  |
| CL | `Q22` · CL | 1.9 | L/h/kg | 3.694e-05 | m3/s | l/(h·kg) | 7.6 | exact (1) | Tab1:row4:col2, Tab1:footnote | 16.6 (31.9% RSE) |
| V2 | `Q64` · V2 | 1.7 | L/kg | 0.119 | m3 | l/kg | 17.3 | exact (1) | Tab1:row5:col2 | 30.5 (49.6% RSE) |
| Q2 | `Q30` · Q | 0.7 | L/h/kg | 1.361e-05 | m3/s | l/(h·kg) | 13.9 | special_case (0.95) | Tab1:row6:col2 | 31.5 (32.0% RSE) |
| V3 | `Q77` · V3 | 0.7 | L/kg | 0.049 | m3 | l/kg | 18.9 | exact (1) | Tab1:row7:col2 |  |
| Q3 | `Q308` · Q3 | 3.4 | L/h/kg | 6.611e-05 | m3/s | l/(h·kg) | 51.6 | exact (1) | Tab1:row8:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Proportional residual error' routed out of structural estimates ('IIV Q3 (%CV) n.a')
- dropped value-less row: 'RSE'
- dropped value-less row: 'V'
- dropped value-less row: 'Q'
- dropped value-less row: 'CV'
- dropped value-less row: 'n.a'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tramadol
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'tramadol / estimate' subgroup of Nordmeier_2021 (paper reports 2 populations: tramadol / estimate, u-47700 / estimate)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col2', 'Tab1:footnote'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col2'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Tab1:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab1:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab1:row5:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab1:row7:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.9 | ['Tab1:row4:col2', 'Tab1:footnote'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 133 L/h | ['Tab1:row4:col2', 'Tab1:footnote'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 91 L | ['Tab1:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 119 L | ['Tab1:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_modelica.zip" download>Tramadol_Nordmeier2021_tramadol_estimate_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_fmi.zip" download>Tramadol_Nordmeier2021_tramadol_estimate_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_matlab.zip" download>Tramadol_Nordmeier2021_tramadol_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_matlab_simbio.zip" download>Tramadol_Nordmeier2021_tramadol_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_sbml.zip" download>Tramadol_Nordmeier2021_tramadol_estimate_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_cellml.zip" download>Tramadol_Nordmeier2021_tramadol_estimate_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2634 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-06 | kg |
| input | model | `Cl` | 3.694e-05 | m3/s |
| input | model | `VdPerKg` | 0.0013 | m3/kg |
| input | model | `k12` | 0.0001496 | 1/s |
| input | model | `k21` | 0.0001144 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nordmeier F, Sihinevich I, Doerr AA, Walle N, Laschke MW, Lehr T et al. Toxicokinetics of U-47700, tramadol, and their main metabolites in pigs following intravenous administration: is a multiple species allometric scaling approach useful for the extrapolation of toxicokinetic parameters to humans?. Archives of toxicology 95(12):3681–3693 (2021). [doi:10.1007/s00204-021-03169-y](https://doi.org/10.1007/s00204-021-03169-y)

**This record:** Pharmacolibrary, model `Tramadol_Nordmeier2021_tramadol_estimate`. <https://pharmacolibrary.github.io/#/drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate>

```bibtex
@misc{pharmacolibrary_TramadolNordmeier2021tramadolestimate,
  title  = {{Pharmacolibrary model Tramadol_Nordmeier2021_tramadol_estimate}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate},
  note   = {Parameters from doi:10.1007/s00204-021-03169-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7, 70 mg.

<dbs-fmusim paramsurl="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate/Tramadol_Nordmeier2021_tramadol_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Tramadol_Nordmeier2021_tramadol_estimate_params.json` · controls `Tramadol_Nordmeier2021_tramadol_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Nordmeier2021_tramadol_estimate&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Nordmeier2021_tramadol_estimate%0APaper%3A%20Nordmeier_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:52 UTC</sub>
