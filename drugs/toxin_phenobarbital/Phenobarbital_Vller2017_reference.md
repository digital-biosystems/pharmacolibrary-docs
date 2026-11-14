<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenobarbital&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/&quot;},{&quot;label&quot;:&quot;V\u00f6ller_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenobarbital_Schoemaker2017_reference&quot;,&quot;label&quot;:&quot;Schoemaker_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Schoemaker2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Moffett2018_reference&quot;,&quot;label&quot;:&quot;Moffett_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Moffett2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Pokorn2022_reference&quot;,&quot;label&quot;:&quot;Pokorn\u00e1_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Pokorn2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Thibault2021_reference&quot;,&quot;label&quot;:&quot;Thibault_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Thibault2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Thompson2007_reference&quot;,&quot;label&quot;:&quot;Thompson_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Thompson2007_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenobarbital_Vller2017_reference&quot;,&quot;label&quot;:&quot;V\u00f6ller_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Phenobarbital — `Phenobarbital_Vller2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Vnorm has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 1.53).

<div class="pk-model-meta" hidden drug="Phenobarbital" model-id="Phenobarbital_Vller2017_reference" status="needs_review" stale="false" population="term and preterm newborns" measured-compound="Phenobarbital" parameterization="mechanistic" topology="1C"></div>

## Citation
Völler S, Flint RB, Stolk LM, Degraeuwe PLJ, Simons SHP, Pokorna P et al. Model-based clinical dose optimization for phenobarbital in neonates: An illustration of the importance of data sharing and external validation. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 109S:S90-S97 (2017).
  ·  DOI: [10.1016/j.ejps.2017.05.026](https://doi.org/10.1016/j.ejps.2017.05.026)

## Population and dosing

**Population:** term and preterm newborns · condition clinical therapeutic drug monitoring · age group neonate · n = 70.

**Dosing:** 91, 280, 1400, 2849 mg, other, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference.svg" alt="Phenobarbital_Vller2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL [L/h] = CLp | CL | 0.0091 | L/h | 9 | 30.0 (29% RSE) |
| V [L] = Vp | V | 2.38 | L | 5 |  |
| ΘaBW [increase in V per kg actual bodyweight (aBW) (fraction)] | Vnorm | 0.309 |  | 8 |  |
| ka [h−1] | kabs | 50 | h−1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Vnorm has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 1.53).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — phenobarbital: CL 0.0091 L/h, V 2.38 L, Vnorm 0.309, kabs 50 h−1.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL [L/h] = CLp | `Q22` · CL | 0.0091 | L/h | 2.528e-09 | m3/s | l/h | 9 | llm_confirmed (0.6) | Völler_2017_table_p4_1:row1:col1 | 30.0 (29% RSE) |
| V [L] = Vp | `Q61` · V | 2.38 | L | 0.00238 | m3 | l | 5 | llm_corrected (0.6) | Völler_2017_table_p4_1:row5:col1 |  |
| ΘaBW [increase in V per kg actual bodyweight (aBW) (fraction)] | `Q352` · Vnorm | 0.309 |  |  |  |  | 8 | llm (0.6) | Völler_2017_table_p4_1:row7:col1 |  |
| ka [h−1] | `Q49` · kabs | 50 | h−1 | 0.01389 | 1/s | 1/h |  | llm_confirmed (0.6) | Völler_2017_table_p4_1:row8:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'On CL [%]' routed out of structural estimates ('Inter-individual variability (eta)')
- table section iiv: 'On V [%]' routed out of structural estimates ('Inter-individual variability (eta)')
- table section residual_error: 'Proportional [%]' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ΘPNA [increase in CL per postnatal day (PNA) (fraction)]' — extend the ontology if this is a real PK parameter (source ['Völler_2017_table_p4_1:row3:col1'])
- dropped duplicate Q22 ('ΘbBW [increase in CL per kg birthweight (bBW) (fraction)]', value '0.369') — already have one for this compound
- dropped unlinked row (NIL): 'F [%]' — extend the ontology if this is a real PK parameter (source ['Völler_2017_table_p4_1:row9:col1'])
- dropped value-less row: 'Ɵ PNA'
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL [L/h] = CLp); Q61 (V [L] = Vp)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Phenobarbital
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q352 — no SI value to build from; C1_half_life_beta failed (ratio 1.5285))

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 118.6 | 181.3 | 1.528 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Völler_2017_table_p4_1:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Völler_2017_table_p4_1:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Völler_2017_table_p4_1:row5:col1'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 |  |  |  | ['Völler_2017_table_p4_1:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0091 |  |  | ['Völler_2017_table_p4_1:row1:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0091 L/h |  |  | ['Völler_2017_table_p4_1:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.38 L |  |  | ['Völler_2017_table_p4_1:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_modelica.zip" download>Phenobarbital_Vller2017_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_fmi.zip" download>Phenobarbital_Vller2017_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_matlab.zip" download>Phenobarbital_Vller2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_matlab_simbio.zip" download>Phenobarbital_Vller2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_sbml.zip" download>Phenobarbital_Vller2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_cellml.zip" download>Phenobarbital_Vller2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2322 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 9.1e-05 | kg |
| input | model | `Cl` | 2.528e-09 | m3/s |
| input | model | `VdPerKg` | 3.4e-05 | m3/kg |
| input | model | `ka` | 0.01389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Völler S, Flint RB, Stolk LM, Degraeuwe PLJ, Simons SHP, Pokorna P et al. Model-based clinical dose optimization for phenobarbital in neonates: An illustration of the importance of data sharing and external validation. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 109S:S90-S97 (2017). [doi:10.1016/j.ejps.2017.05.026](https://doi.org/10.1016/j.ejps.2017.05.026)

**This record:** Pharmacolibrary, model `Phenobarbital_Vller2017_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference>

```bibtex
@misc{pharmacolibrary_PhenobarbitalVller2017reference,
  title  = {{Pharmacolibrary model Phenobarbital_Vller2017_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference},
  note   = {Parameters from doi:10.1016/j.ejps.2017.05.026},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: oral** — 91 mg, single dose, first-order absorption (ka 50 /h, F 0.9). Doses in the paper: 91, 280, 1400, 2849 mg.

<dbs-fmusim paramsurl="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference/Phenobarbital_Vller2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Phenobarbital_Vller2017_reference_params.json` · controls `Phenobarbital_Vller2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenobarbital%5D%20Phenobarbital_Vller2017_reference&body=Drug%3A%20phenobarbital%0ARecord%3A%20Phenobarbital_Vller2017_reference%0APaper%3A%20V%C3%B6ller_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenobarbital/Phenobarbital_Vller2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 17:06 UTC</sub>
