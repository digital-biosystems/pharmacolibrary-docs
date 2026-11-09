<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Cadmium chloride&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/&quot;},{&quot;label&quot;:&quot;Houpert_1997 \u00b7 nonlactating&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CadmiumChloride_Han1994_reference&quot;,&quot;label&quot;:&quot;Han_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/CadmiumChloride_Han1994_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CadmiumChloride_Houpert1997_ewe_7&quot;,&quot;label&quot;:&quot;Houpert_1997_ewe_7&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_ewe_7.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CadmiumChloride_Houpert1997_lactating&quot;,&quot;label&quot;:&quot;Houpert_1997_lactating&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_lactating.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CadmiumChloride_Matsuno1991_reference&quot;,&quot;label&quot;:&quot;Matsuno_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/CadmiumChloride_Matsuno1991_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CadmiumChloride_Houpert1997_nonlactating&quot;,&quot;label&quot;:&quot;Houpert_1997_nonlactating&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;CadmiumChloride_Klimisch1993_reference&quot;,&quot;label&quot;:&quot;Klimisch_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cadmium_chloride/CadmiumChloride_Klimisch1993_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cadmium chloride — `CadmiumChloride_Houpert1997_nonlactating`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> K12 and k31 have no unit.

<div class="pk-model-meta" hidden drug="Cadmium chloride" model-id="CadmiumChloride_Houpert1997_nonlactating" status="needs_review" stale="false" population="lactating and nonlactating ewes" measured-compound="Cadmium" parameterization="mechanistic" topology="1C"></div>

## Citation
Houpert P, Federspiel B, Milhaud G. Toxicokinetics of cadmium in lactating and nonlactating ewes after oral and intravenous administration. Environmental research 72(2):140–150 (1997).
  ·  DOI: [10.1006/enrs.1996.3690](https://doi.org/10.1006/enrs.1996.3690)

## Population and dosing

**Population:** lactating and nonlactating ewes · condition experimental exposure · age group adult · n = 11.

**Dosing:** 7, 1750 mg, oral and iv, single.

**Dosed compound ≠ measured compound:** dosed Cadmium chloride, measured Cadmium.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating.svg" alt="CadmiumChloride_Houpert1997_nonlactating diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k12/k21 | k12 | 3.61 |  |
| k13/k31 | k31 | 272 |  |
| Vc (liter/kg) | V | 0.124 | liter/kg |
| Vss (liter/kg) | Vss | 23.8 | liter/kg |
| Cl (liter/kg/day) | CL | 0.20 | liter/kg/day |
| MRT (days) | MRT | 113 | days |
| F (%) | Fab | 0.18 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**K12 and k31 have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — cadmium chloride: k12 3.61, k31 272, V 0.124 liter/kg, Vss 23.8 liter/kg, CL 0.2 liter/kg/day, MRT 113 days, Fab 0.18 %.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k12/k21 | `Q301` · k12 | 3.61 |  |  |  |  | llm (0.6) | Houpert_1997_table_2:row0:col1 |
| k13/k31 | `Q304` · k31 | 272 |  |  |  |  | llm (0.6) | Houpert_1997_table_2:row1:col1 |
| Vc (liter/kg) | `Q61` · V | 0.124 | liter/kg | 0.00868 | m3 | l/kg | exact (1) | Houpert_1997_table_2:row2:col1 |
| Vss (liter/kg) | `Q65` · Vss | 23.8 | liter/kg | 1.666 | m3 | l/kg | exact (1) | Houpert_1997_table_2:row3:col1 |
| Cl (liter/kg/day) | `Q22` · CL | 0.20 | liter/kg/day | 1.62e-07 | m3/s | l/(d·kg) | exact (1) | Houpert_1997_table_2:row4:col1 |
| MRT (days) | `Q53` · MRT | 113 | days | 9.763e+06 | s | d | exact (1) | Houpert_1997_table_2:row5:col1 |
| F (%) | `Q40` · Fab | 0.18 | % |  |  |  | exact (1) | Houpert_1997_table_2:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q53 ('MRTc (days)', value '0.59') — already have one for this compound
- implicit units: 'k12/k21' — the LLM proposed 'dimensionless', whose dimension does not fit Q301; left unset
- implicit units: 'k13/k31' — the LLM proposed 'dimensionless', whose dimension does not fit Q304; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cadmium
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (liter/kg)' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'nonlactating (n = 4)' subgroup of Houpert_1997 (paper reports 3 populations: ewe 7, lactating (n = 6), nonlactating (n = 4))
- review gap-fill skipped: this record measures 'Cadmium', not cadmium_chloride — the review values are the parent's
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q301, Q304 — no SI value to build from)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Houpert_1997_table_2:row4:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['Houpert_1997_table_2:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Houpert_1997_table_2:row2:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Houpert_1997_table_2:row3:col1'] |
| C5_unit_missing_Q301 | fail | 1 / [time] |  | ['Houpert_1997_table_2:row0:col1'] |
| C5_unit_missing_Q304 | fail | 1 / [time] |  | ['Houpert_1997_table_2:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | ['Houpert_1997_table_2:row4:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.583 L/h | ['Houpert_1997_table_2:row4:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.68 L | ['Houpert_1997_table_2:row2:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 1.67e+03 L | ['Houpert_1997_table_2:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_modelica.zip" download>CadmiumChloride_Houpert1997_nonlactating_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_fmi.zip" download>CadmiumChloride_Houpert1997_nonlactating_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_matlab.zip" download>CadmiumChloride_Houpert1997_nonlactating_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_matlab_simbio.zip" download>CadmiumChloride_Houpert1997_nonlactating_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_sbml.zip" download>CadmiumChloride_Houpert1997_nonlactating_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_cellml.zip" download>CadmiumChloride_Houpert1997_nonlactating_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1124 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-06 | kg |
| input | model | `Cl` | 1.62e-07 | m3/s |
| input | model | `VdPerKg` | 0.000124 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Houpert P, Federspiel B, Milhaud G. Toxicokinetics of cadmium in lactating and nonlactating ewes after oral and intravenous administration. Environmental research 72(2):140–150 (1997). [doi:10.1006/enrs.1996.3690](https://doi.org/10.1006/enrs.1996.3690)

**This record:** Pharmacolibrary, model `CadmiumChloride_Houpert1997_nonlactating`. <https://pharmacolibrary.github.io/#/drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating>

```bibtex
@misc{pharmacolibrary_CadmiumChlorideHoupert1997nonlactating,
  title  = {{Pharmacolibrary model CadmiumChloride_Houpert1997_nonlactating}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating},
  note   = {Parameters from doi:10.1006/enrs.1996.3690},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 7 mg infusion over 10 min, single dose. Doses in the paper: 7, 1750 mg.

<dbs-fmusim paramsurl="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating/CadmiumChloride_Houpert1997_nonlactating_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `CadmiumChloride_Houpert1997_nonlactating_params.json` · controls `CadmiumChloride_Houpert1997_nonlactating_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcadmium_chloride%5D%20CadmiumChloride_Houpert1997_nonlactating&body=Drug%3A%20cadmium_chloride%0ARecord%3A%20CadmiumChloride_Houpert1997_nonlactating%0APaper%3A%20Houpert_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cadmium_chloride/CadmiumChloride_Houpert1997_nonlactating%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 09:15 UTC</sub>
