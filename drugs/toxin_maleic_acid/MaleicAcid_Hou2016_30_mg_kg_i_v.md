<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Maleic acid&quot;,&quot;href&quot;:&quot;drugs/toxin_maleic_acid/&quot;},{&quot;label&quot;:&quot;Hou_2016 \u00b7 30_mg_kg_i_v&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MaleicAcid_Hou2016_10_mg_kg_i_v&quot;,&quot;label&quot;:&quot;Hou_2016_10_mg_kg_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_maleic_acid/MaleicAcid_Hou2016_10_mg_kg_i_v.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MaleicAcid_Hou2016_30_mg_kg_i_v&quot;,&quot;label&quot;:&quot;Hou_2016_30_mg_kg_i_v&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Maleic acid — `MaleicAcid_Hou2016_30_mg_kg_i_v`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Maleic acid" model-id="MaleicAcid_Hou2016_30_mg_kg_i_v" status="needs_review" stale="false" population="rat" measured-compound="Maleic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Hou ML, Lu CM, Lin CH, Lin LC, Tsai TH. Pharmacokinetics of Maleic Acid as a Food Adulterant Determined by Microdialysis in Rat Blood and Kidney Cortex. Molecules (Basel, Switzerland) 21(3):367 (2016).
  ·  DOI: [10.3390/molecules21030367](https://doi.org/10.3390/molecules21030367)

## Population and dosing

**Population:** rat · condition food adulterant study / experimental administration · n = 10.

**Dosing:** 700, 2100 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v.svg" alt="MaleicAcid_Hou2016_30_mg_kg_i_v diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (min∙µg/mL) | AUC | 1236 | min∙µg/mL |
| Cmax (µg/mL) | Cmax | 32.1 | µg/mL |
| T1/2 (min) | t1/2z | 28.4 | min |
| CL (mL/min/kg) | CL | 25.3 | mL/min/kg |
| MRT (min) | MRT | 40.9 | min |
| Vd (mL/kg) | V | 1050 | mL/kg |
| AUC/Dose | AUC/dose | 41.2 |  |
| AUC ratio of (AUCkidney/AUCblood) | AUC ratio | 5.49 | AUCkidney/AUCblood |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (min∙µg/mL) | `Q88` · AUC | 1236 | min∙µg/mL | 74.16 | kg*s/m3 | (min·µg)/ml | exact (1) | molecules-21-00367-t003:row4:col2, molecules-21-00367-t003:row13:col2 |
| Cmax (µg/mL) | `Q32` · Cmax | 32.1 | µg/mL | 0.0321 | kg/m3 | µg/ml | exact (1) | molecules-21-00367-t003:row5:col2, molecules-21-00367-t003:row14:col2 |
| T1/2 (min) | `Q57` · t1/2z | 28.4 | min | 1704 | s | min | half_life_rule (0.95) | molecules-21-00367-t003:row6:col2, molecules-21-00367-t003:row15:col2 |
| CL (mL/min/kg) | `Q22` · CL | 25.3 | mL/min/kg | 2.952e-05 | m3/s | ml/(min·kg) | exact (1) | molecules-21-00367-t003:row7:col2, molecules-21-00367-t003:row16:col2 |
| MRT (min) | `Q53` · MRT | 40.9 | min | 2454 | s | min | exact (1) | molecules-21-00367-t003:row8:col2, molecules-21-00367-t003:row17:col2 |
| Vd (mL/kg) | `Q61` · V | 1050 | mL/kg | 0.0735 | m3 | ml/kg | exact (1) | molecules-21-00367-t003:row9:col2, molecules-21-00367-t003:row18:col2 |
| AUC/Dose | `Q189` · AUC/dose | 41.2 |  |  |  |  | exact (1) | molecules-21-00367-t003:row10:col2, molecules-21-00367-t003:row19:col2 |
| AUC ratio of (AUCkidney/AUCblood) | `Q21` · AUC ratio | 5.49 | AUCkidney/AUCblood |  |  | auckidney/aucblood | llm_confirmed (0.6) | molecules-21-00367-t003:row20:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'AUC (min∙µg/mL)'; source reconciliation required
- table representations disagree for 'Cmax (µg/mL)'; source reconciliation required
- table representations disagree for 'T1/2 (min)'; source reconciliation required
- table representations disagree for 'CL (mL/min/kg)'; source reconciliation required
- table representations disagree for 'MRT (min)'; source reconciliation required
- table representations disagree for 'Vd (mL/kg)'; source reconciliation required
- table representations disagree for 'AUC/Dose'; source reconciliation required
- table representations disagree for 'AUC ratio of (AUCkidney/AUCblood)'; source reconciliation required
- unit_dimension_unknown: 'AUCkidney/AUCblood' (AUC ratio)
- implicit units: 'AUC/Dose' — the LLM proposed 'h/kg', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Maleic acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: '30 mg/kg, i.v.' subgroup of Hou_2016 (paper reports 2 populations: 10 mg/kg, i.v., 30 mg/kg, i.v.)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q189 — no SI value to build from)

**Extraction notes:**
- table molecules-21-00367-t003: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 24.1 | 28.77 | 1.194 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['molecules-21-00367-t003:row7:col2', 'molecules-21-00367-t003:row16:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['molecules-21-00367-t003:row5:col2', 'molecules-21-00367-t003:row14:col2'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['molecules-21-00367-t003:row8:col2', 'molecules-21-00367-t003:row17:col2'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['molecules-21-00367-t003:row6:col2', 'molecules-21-00367-t003:row15:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['molecules-21-00367-t003:row9:col2', 'molecules-21-00367-t003:row18:col2'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  |  |  | ['molecules-21-00367-t003:row4:col2', 'molecules-21-00367-t003:row13:col2'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['molecules-21-00367-t003:row10:col2', 'molecules-21-00367-t003:row19:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25.3 |  |  | ['molecules-21-00367-t003:row7:col2', 'molecules-21-00367-t003:row16:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 106 L/h |  |  | ['molecules-21-00367-t003:row7:col2', 'molecules-21-00367-t003:row16:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 73.5 L |  |  | ['molecules-21-00367-t003:row9:col2', 'molecules-21-00367-t003:row18:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_modelica.zip" download>MaleicAcid_Hou2016_30_mg_kg_i_v_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_fmi.zip" download>MaleicAcid_Hou2016_30_mg_kg_i_v_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_matlab.zip" download>MaleicAcid_Hou2016_30_mg_kg_i_v_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_matlab_simbio.zip" download>MaleicAcid_Hou2016_30_mg_kg_i_v_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_sbml.zip" download>MaleicAcid_Hou2016_30_mg_kg_i_v_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_cellml.zip" download>MaleicAcid_Hou2016_30_mg_kg_i_v_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1161 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 2.952e-05 | m3/s |
| input | model | `VdPerKg` | 0.00105 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Hou ML, Lu CM, Lin CH, Lin LC, Tsai TH. Pharmacokinetics of Maleic Acid as a Food Adulterant Determined by Microdialysis in Rat Blood and Kidney Cortex. Molecules (Basel, Switzerland) 21(3):367 (2016). [doi:10.3390/molecules21030367](https://doi.org/10.3390/molecules21030367)

**This record:** Pharmacolibrary, model `MaleicAcid_Hou2016_30_mg_kg_i_v`. <https://pharmacolibrary.github.io/#/drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v>

```bibtex
@misc{pharmacolibrary_MaleicAcidHou201630mgkgiv,
  title  = {{Pharmacolibrary model MaleicAcid_Hou2016_30_mg_kg_i_v}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v},
  note   = {Parameters from doi:10.3390/molecules21030367},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

**Administration: intravenous** — 700 mg infusion over 10 min, single dose. Doses in the paper: 700, 2100 mg.

<dbs-fmusim paramsurl="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v/MaleicAcid_Hou2016_30_mg_kg_i_v_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `MaleicAcid_Hou2016_30_mg_kg_i_v_params.json` · controls `MaleicAcid_Hou2016_30_mg_kg_i_v_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmaleic_acid%5D%20MaleicAcid_Hou2016_30_mg_kg_i_v&body=Drug%3A%20maleic_acid%0ARecord%3A%20MaleicAcid_Hou2016_30_mg_kg_i_v%0APaper%3A%20Hou_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_maleic_acid/MaleicAcid_Hou2016_30_mg_kg_i_v%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 08:27 UTC</sub>
