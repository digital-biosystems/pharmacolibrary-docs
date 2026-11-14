<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Varenicline&quot;,&quot;href&quot;:&quot;drugs/toxin_varenicline/&quot;},{&quot;label&quot;:&quot;Wu_2022 \u00b7 result_of_fit_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Varenicline_Fediuk2021_reference&quot;,&quot;label&quot;:&quot;Fediuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_varenicline/Varenicline_Fediuk2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Glatard2019_reference&quot;,&quot;label&quot;:&quot;Glatard_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_varenicline/Varenicline_Glatard2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Wu2022_result_of_fit_1&quot;,&quot;label&quot;:&quot;Wu_2022_result_of_fit_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_1.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Varenicline_Wu2022_result_of_fit_2&quot;,&quot;label&quot;:&quot;Wu_2022_result_of_fit_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Varenicline — `Varenicline_Wu2022_result_of_fit_2`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Varenicline" model-id="Varenicline_Wu2022_result_of_fit_2" status="extracted" stale="false" population="Virtual subjects (American and Chinese)" measured-compound="Varenicline" parameterization="mechanistic" topology="1C"></div>

## Citation
Wu X, Zhang F, Yu M, Ding F, Luo J, Liu B et al. Semi-PBPK Modeling and Simulation to Evaluate the Local and Systemic Pharmacokinetics of OC-01(Varenicline) Nasal Spray. Frontiers in pharmacology 13:910629 (2022).
  ·  DOI: [10.3389/fphar.2022.910629](https://doi.org/10.3389/fphar.2022.910629)

## Population and dosing

**Population:** Virtual subjects (American and Chinese) · condition healthy · age group adult · n = 300 virtual subjects.

**Dosing:** 0.06, 1 mg, other, multiple, every 12 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2.svg" alt="Varenicline_Wu2022_result_of_fit_2 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| tlag | tlag | 0.156 | h |
| ka | kabs | 1.064 | h−1 |
| Vc | V | 190.823 | L |
| CL | CL | 11.320 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tlag | `Q83` · tlag | 0.156 | h | 561.6 | s | h | exact (1) | T2:row1:col2 |
| ka | `Q49` · kabs | 1.064 | h−1 | 0.0002956 | 1/s | 1/h | exact (1) | T2:row2:col2 |
| Vc | `Q61` · V | 190.823 | L | 0.1908 | m3 | l | exact (1) | T2:row3:col2 |
| CL | `Q22` · CL | 11.320 | L/h | 3.144e-06 | m3/s | l/h | exact (1) | T2:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc); Q22 (CL)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Varenicline
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc' is the general volume)
- population split: 'result of fit 2' subgroup of Wu_2022 (paper reports 2 populations: result of fit 1, result of fit 2)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 15.4 | 11.68 | 0.7587 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T2:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['T2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['T2:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['T2:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.32 |  |  | ['T2:row4:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.3 L/h |  |  | ['T2:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 191 L |  |  | ['T2:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_modelica.zip" download>Varenicline_Wu2022_result_of_fit_2_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_fmi.zip" download>Varenicline_Wu2022_result_of_fit_2_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_matlab.zip" download>Varenicline_Wu2022_result_of_fit_2_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_matlab_simbio.zip" download>Varenicline_Wu2022_result_of_fit_2_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_sbml.zip" download>Varenicline_Wu2022_result_of_fit_2_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_cellml.zip" download>Varenicline_Wu2022_result_of_fit_2_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2113 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 561.6 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 6e-08 | kg |
| input | model | `Cl` | 3.144e-06 | m3/s |
| input | model | `VdPerKg` | 0.002726 | m3/kg |
| input | model | `ka` | 0.0002956 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wu X, Zhang F, Yu M, Ding F, Luo J, Liu B et al. Semi-PBPK Modeling and Simulation to Evaluate the Local and Systemic Pharmacokinetics of OC-01(Varenicline) Nasal Spray. Frontiers in pharmacology 13:910629 (2022). [doi:10.3389/fphar.2022.910629](https://doi.org/10.3389/fphar.2022.910629)

**This record:** Pharmacolibrary, model `Varenicline_Wu2022_result_of_fit_2`. <https://pharmacolibrary.github.io/#/drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2>

```bibtex
@misc{pharmacolibrary_VareniclineWu2022resultoffit2,
  title  = {{Pharmacolibrary model Varenicline_Wu2022_result_of_fit_2}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2},
  note   = {Parameters from doi:10.3389/fphar.2022.910629},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.06 mg, single dose, first-order absorption (ka 1.06 /h, lag 9.36 min, F 0.9). Doses in the paper: 0.06, 1 mg.

<dbs-fmusim paramsurl="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2/Varenicline_Wu2022_result_of_fit_2_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Varenicline_Wu2022_result_of_fit_2_params.json` · controls `Varenicline_Wu2022_result_of_fit_2_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvarenicline%5D%20Varenicline_Wu2022_result_of_fit_2&body=Drug%3A%20varenicline%0ARecord%3A%20Varenicline_Wu2022_result_of_fit_2%0APaper%3A%20Wu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_varenicline/Varenicline_Wu2022_result_of_fit_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 12:54 UTC</sub>
