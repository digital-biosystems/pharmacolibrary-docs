<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Epirubicin&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/&quot;},{&quot;label&quot;:&quot;Twelves_1992 \u00b7 group_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Camaggi1988_reference&quot;,&quot;label&quot;:&quot;Camaggi_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Camaggi1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Janssen2023_reference&quot;,&quot;label&quot;:&quot;Janssen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Janssen2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_1&quot;,&quot;label&quot;:&quot;Twelves_1992_group_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_2&quot;,&quot;label&quot;:&quot;Twelves_1992_group_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_2.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_3&quot;,&quot;label&quot;:&quot;Twelves_1992_group_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_3.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Epirubicin — `Epirubicin_Twelves1992_group_1`

> ## <span class="pk-badge pk-badge--blue">Simulated</span>

<div class="pk-model-meta" hidden drug="Epirubicin" model-id="Epirubicin_Twelves1992_group_1" status="simulated" stale="false" population="women with advanced breast cancer" measured-compound="Epirubicin" parameterization="mechanistic" topology="1C"></div>

## Citation
Twelves CJ, Dobbs NA, Michael Y, Summers LA, Gregory W, Harper PG et al. Clinical pharmacokinetics of epirubicin: the importance of liver biochemistry tests. British journal of cancer 66(4):765–769 (1992).
  ·  DOI: [10.1038/bjc.1992.353](https://doi.org/10.1038/bjc.1992.353)

## Population and dosing

**Population:** women with advanced breast cancer · condition advanced breast cancer · age group adult · n = 52.

**Dosing:** 12.5, 120 mg/m2, iv, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1.svg" alt="Epirubicin_Twelves1992_group_1 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Median clearance | CL | 25.0 | L/h |
| Median α-t½ | t1/2α | 0.049 | h |
| Median β-t½ | t1/2β | 1.28 | h |
| Median γ-t½ | t1/2γ | 22.7 | h |
| Median Vd | V | 1602 | L |
| Median MRT | MRT | 24.4 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--blue">Simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Median clearance | `Q22` · CL | 25.0 | L/h | 6.944e-06 | m3/s | L/h | llm_confirmed (0.6) | Twelves_1992_table_2:row0:col1 |
| Median α-t½ | `Q59` · t1/2α | 0.049 | h | 176.4 | s | h | half_life_rule (0.95) | Twelves_1992_table_2:row2:col1 |
| Median β-t½ | `Q60` · t1/2β | 1.28 | h | 4608 | s | h | half_life_rule (0.95) | Twelves_1992_table_2:row4:col1 |
| Median γ-t½ | `Q89` · t1/2γ | 22.7 | h | 8.172e+04 | s | h | half_life_rule (0.95) | Twelves_1992_table_2:row6:col1 |
| Median Vd | `Q61` · V | 1602 | L | 1.602 | m3 | L | llm_confirmed (0.6) | Twelves_1992_table_2:row8:col1 |
| Median MRT | `Q53` · MRT | 24.4 | h | 8.784e+04 | s | h | llm_confirmed (0.6) | Twelves_1992_table_2:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'Median clearance' → L/h (from the popPK convention: 'For clearance in population PK, L/h is the standard unit when not specified. The value 25.0 is consistent with typical e')
- implicit units: 'Median α-t½' → h (from the popPK convention: 'Half-life is measured in time. The value 0.049 is very small, consistent with the alpha (distribution) half-life in hour')
- implicit units: 'Median β-t½' → h (from the popPK convention: 'Half-life is measured in time. The value 1.28 is consistent with a beta (distribution/redistribution) half-life in hours')
- implicit units: 'Median γ-t½' → h (from the popPK convention: 'Half-life is measured in time. The value 22.7 is consistent with a terminal elimination half-life in hours for epirubici')
- implicit units: 'Median Vd' → L (from the popPK convention: 'Volume of distribution (Vd) is a volume. The value 1602 is consistent with the large volume of distribution for anthracy')
- implicit units: 'Median MRT' → h (from the popPK convention: 'Mean Residence Time (MRT) is a time parameter. The value 24.4 is consistent with hours, aligning with the terminal half-')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Epirubicin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'group 1' subgroup of Twelves_1992 (paper reports 3 populations: group 1, group 2, group 3)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Twelves_1992_table_2: unbound_uncertainty
- table Twelves_1992_table_2: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Twelves_1992_table_2:row0:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['Twelves_1992_table_2:row10:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['Twelves_1992_table_2:row2:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Twelves_1992_table_2:row4:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Twelves_1992_table_2:row8:col1'] |
| C5_dimension_Q89 | pass | [time] |  | ['Twelves_1992_table_2:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25 | ['Twelves_1992_table_2:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 25 L/h | ['Twelves_1992_table_2:row0:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.6e+03 L | ['Twelves_1992_table_2:row8:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=Epirubicin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_modelica.zip" download>Epirubicin_Twelves1992_group_1_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_fmi.zip" download>Epirubicin_Twelves1992_group_1_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_matlab.zip" download>Epirubicin_Twelves1992_group_1_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_matlab_simbio.zip" download>Epirubicin_Twelves1992_group_1_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_sbml.zip" download>Epirubicin_Twelves1992_group_1_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_cellml.zip" download>Epirubicin_Twelves1992_group_1_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5435 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 6.944e-06 | m3/s |
| input | model | `VdPerKg` | 0.02289 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Twelves CJ, Dobbs NA, Michael Y, Summers LA, Gregory W, Harper PG et al. Clinical pharmacokinetics of epirubicin: the importance of liver biochemistry tests. British journal of cancer 66(4):765–769 (1992). [doi:10.1038/bjc.1992.353](https://doi.org/10.1038/bjc.1992.353)

**This record:** Pharmacolibrary, model `Epirubicin_Twelves1992_group_1`. <https://pharmacolibrary.github.io/#/drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1>

```bibtex
@misc{pharmacolibrary_EpirubicinTwelves1992group1,
  title  = {{Pharmacolibrary model Epirubicin_Twelves1992_group_1}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1},
  note   = {Parameters from doi:10.1038/bjc.1992.353},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1/Epirubicin_Twelves1992_group_1_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Epirubicin_Twelves1992_group_1_params.json` · controls `Epirubicin_Twelves1992_group_1_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepirubicin%5D%20Epirubicin_Twelves1992_group_1&body=Drug%3A%20epirubicin%0ARecord%3A%20Epirubicin_Twelves1992_group_1%0APaper%3A%20Twelves_1992%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 13:06 UTC</sub>
