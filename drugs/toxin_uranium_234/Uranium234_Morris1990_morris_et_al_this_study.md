<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Uranium-234&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/&quot;},{&quot;label&quot;:&quot;Morris_1990 \u00b7 morris_et_al_this_study&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Uranium234_Morris1990_batchelor&quot;,&quot;label&quot;:&quot;Morris_1990_batchelor&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/Uranium234_Morris1990_batchelor.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Uranium234_Morris1990_downs_et_al&quot;,&quot;label&quot;:&quot;Morris_1990_downs_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/Uranium234_Morris1990_downs_et_al.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Uranium234_Morris1990_morris_et_al_this_study&quot;,&quot;label&quot;:&quot;Morris_1990_morris_et_al_this_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Uranium234_Morris1990_rhoads_et_al&quot;,&quot;label&quot;:&quot;Morris_1990_rhoads_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/Uranium234_Morris1990_rhoads_et_al.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Uranium234_Morris1990_sanders_et_al&quot;,&quot;label&quot;:&quot;Morris_1990_sanders_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/Uranium234_Morris1990_sanders_et_al.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Uranium234_Morris1990_stanley_et_al&quot;,&quot;label&quot;:&quot;Morris_1990_stanley_et_al&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_uranium_234/Uranium234_Morris1990_stanley_et_al.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Uranium-234 — `Uranium234_Morris1990_morris_et_al_this_study`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Body_burden has no unit.

<div class="pk-model-meta" hidden drug="Uranium-234" model-id="Uranium234_Morris1990_morris_et_al_this_study" status="needs_review" stale="false" population="Fischer-344 rats" measured-compound="enriched uranium dioxide (UO2)" parameterization="mechanistic" topology="retention"></div>

## Citation
Morris KJ, Khanna P, Batchelor AL. Long-term clearance of inhaled UO2 particles from the pulmonary region of the rat. Health physics 58(4):477–485 (1990).
  ·  DOI: [10.1097/00004032-199004000-00010](https://doi.org/10.1097/00004032-199004000-00010)

## Population and dosing

**Population:** Fischer-344 rats · condition occupational exposure · n = 46.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| INITIAL LUNG BURDEN kBq | body_burden | 0.515 |  |
| LUNG RATE CLEARANCE CONSTANT k(d-1) | kel | 0.0028 | d-1 |
| t1/2 IN LUNG (d) | t1/2z | 247 | d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Body_burden has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — uranium 234: body_burden 0.515, kel 0.0028 d-1, t1/2z 247 d.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| INITIAL LUNG BURDEN kBq | `Q414` · body_burden | 0.515 |  |  |  |  | llm (0.6) | Morris_1990_table_5:row0:col2 |
| LUNG RATE CLEARANCE CONSTANT k(d-1) | `Q47` · kel | 0.0028 | d-1 | 3.241e-08 | 1/s | 1/d | llm_corrected (0.6) | Morris_1990_table_5:row0:col6 |
| t1/2 IN LUNG (d) | `Q57` · t1/2z | 247 | d | 2.134e+07 | s | d | llm_confirmed (0.6) | Morris_1990_table_5:row0:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 IN LUNG (d) (Q57)

**Interpretation flags:**
- dropped duplicate Q414 ('INITIAL LUNG BURDEN μg', value '270.0') — already have one for this compound
- dropped unlinked row (NIL): 'TIMES (d) t0' — extend the ontology if this is a real PK parameter (source ['Morris_1990_table_5:row0:col4'])
- dropped unlinked row (NIL): 'TIMES (d) tf' — extend the ontology if this is a real PK parameter (source ['Morris_1990_table_5:row0:col5'])
- implicit units: 'INITIAL LUNG BURDEN kBq' — the LLM proposed 'kBq', whose dimension does not fit Q414; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=enriched uranium dioxide (UO2)
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'morris et al. (this study)' subgroup of Morris_1990 (paper reports 6 populations: batchelor (1989), downs et al. (1967), morris et al. (this study), rhoads et al. (1986), sanders et al. (1976), stanley et al. (1982))
- review gap-fill skipped: this record measures 'enriched uranium dioxide (UO2)', not uranium_234 — the review values are the parent's
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q414 — no SI value to build from)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 5
- table Morris_1990_table_5: unparsed_numeric_cell
- transposed table Morris_1990_table_5: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Morris_1990_table_5:row0:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['Morris_1990_table_5:row0:col8'] |
| C5_unit_missing_Q414 | fail | [mass] |  | ['Morris_1990_table_5:row0:col2'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_modelica.zip" download>Uranium234_Morris1990_morris_et_al_this_study_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_fmi.zip" download>Uranium234_Morris1990_morris_et_al_this_study_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_matlab.zip" download>Uranium234_Morris1990_morris_et_al_this_study_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_sbml.zip" download>Uranium234_Morris1990_morris_et_al_this_study_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_cellml.zip" download>Uranium234_Morris1990_morris_et_al_this_study_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.27 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.134e+07 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Morris KJ, Khanna P, Batchelor AL. Long-term clearance of inhaled UO2 particles from the pulmonary region of the rat. Health physics 58(4):477–485 (1990). [doi:10.1097/00004032-199004000-00010](https://doi.org/10.1097/00004032-199004000-00010)

**This record:** Pharmacolibrary, model `Uranium234_Morris1990_morris_et_al_this_study`. <https://pharmacolibrary.github.io/#/drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study>

```bibtex
@misc{pharmacolibrary_Uranium234Morris1990morrisetalthisstudy,
  title  = {{Pharmacolibrary model Uranium234_Morris1990_morris_et_al_this_study}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study},
  note   = {Parameters from doi:10.1097/00004032-199004000-00010},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study/Uranium234_Morris1990_morris_et_al_this_study_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Uranium234_Morris1990_morris_et_al_this_study_params.json` · controls `Uranium234_Morris1990_morris_et_al_this_study_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Buranium_234%5D%20Uranium234_Morris1990_morris_et_al_this_study&body=Drug%3A%20uranium_234%0ARecord%3A%20Uranium234_Morris1990_morris_et_al_this_study%0APaper%3A%20Morris_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_uranium_234/Uranium234_Morris1990_morris_et_al_this_study%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:12 UTC</sub>
