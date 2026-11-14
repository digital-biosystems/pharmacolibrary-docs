<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Risedronate&quot;,&quot;href&quot;:&quot;drugs/toxin_risedronate/&quot;},{&quot;label&quot;:&quot;Namazi_2025 \u00b7 reference_formulation_actonel_tablet_of_rdn&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risedronate_Namazi2025_reference_formulation_actonel_tablet&quot;,&quot;label&quot;:&quot;Namazi_2025_reference_formulation_actonel_tablet_of_rdn&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Risedronate_Namazi2025_test_formulation_xr5&quot;,&quot;label&quot;:&quot;Namazi_2025_test_formulation_xr5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risedronate/Risedronate_Namazi2025_test_formulation_xr5.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risedronate — `Risedronate_Namazi2025_reference_formulation_actonel_tablet`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Risedronate" model-id="Risedronate_Namazi2025_reference_formulation_actonel_tablet" status="extracted" stale="false" population="healthy albino rats" measured-compound="Risedronate" parameterization="mechanistic" topology="retention"></div>

## Citation
Namazi NI, Bafail R, Alanezi AA, Almuqati AF, Alshammari MS, Alghamdi MA. Enhancement of oral bioavailability of risedronate through xyloglucan rafts. Journal of pharmacy & pharmaceutical sciences : a publication of the Canadian Society for Pharmaceutical Sciences, Societe canadienne des sciences pharmaceutiques 28:15525 (2025).
  ·  DOI: [10.3389/jpps.2025.15525](https://doi.org/10.3389/jpps.2025.15525)

## Population and dosing

**Population:** healthy albino rats · condition healthy · age group adult · n = 12.

**Dosing:** 70 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| tmax (h) | tmax | 3.86 | h |
| C max (ng/mL) | Cmax | 18.2 | ng/mL |
| t1/2 (h) | t1/2z | 5.29 | h |
| AUC(0-t) (ng/mL.h) | AUC | 1423.29 | ng/mL.h |
| AUMC (ng/mL.h) | AUMC | 34567.56 | ng/mL.h |
| MRT (h) | MRT | 8.95 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tmax (h) | `Q56` · tmax | 3.86 | h | 1.39e+04 | s | h | exact (1) | T4:row1:col2 |
| C max (ng/mL) | `Q32` · Cmax | 18.2 | ng/mL | 1.82e-05 | kg/m3 | ng/ml | space_fold (0.95) | T4:row2:col2 |
| t1/2 (h) | `Q57` · t1/2z | 5.29 | h | 1.904e+04 | s | h | half_life_rule (0.95) | T4:row3:col2 |
| AUC(0-t) (ng/mL.h) | `Q88` · AUC | 1423.29 | ng/mL.h | 5.124 | kg*s/m3 | ng/(h·ml) | space_fold (0.95) | T4:row4:col2 |
| AUMC (ng/mL.h) | `Q20` · AUMC | 34567.56 | ng/mL.h | 124.4 | kg*s/m3 | ng/(h·ml) | exact (1) | T4:row6:col2 |
| MRT (h) | `Q53` · MRT | 8.95 | h | 3.222e+04 | s | h | exact (1) | T4:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 (h) (Q57)

**Interpretation flags:**
- dropped duplicate Q88 ('AUC (0- ∞ ) (ng/mL.h)', value '2476.61') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Risedronate
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- population split: 'reference formulation actonel® (tablet of rdn)' subgroup of Namazi_2025 (paper reports 2 populations: reference formulation actonel® (tablet of rdn), test formulation (xr5))
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q20 | pass | [mass] * [time] / [length] ** 3 |  | ['T4:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T4:row2:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['T4:row7:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['T4:row1:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T4:row3:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['T4:row4:col2'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_modelica.zip" download>Risedronate_Namazi2025_reference_formulation_actonel_tablet_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_fmi.zip" download>Risedronate_Namazi2025_reference_formulation_actonel_tablet_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_matlab.zip" download>Risedronate_Namazi2025_reference_formulation_actonel_tablet_matlab.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_sbml.zip" download>Risedronate_Namazi2025_reference_formulation_actonel_tablet_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_cellml.zip" download>Risedronate_Namazi2025_reference_formulation_actonel_tablet_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2831 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 7e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.904e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Namazi NI, Bafail R, Alanezi AA, Almuqati AF, Alshammari MS, Alghamdi MA. Enhancement of oral bioavailability of risedronate through xyloglucan rafts. Journal of pharmacy & pharmaceutical sciences : a publication of the Canadian Society for Pharmaceutical Sciences, Societe canadienne des sciences pharmaceutiques 28:15525 (2025). [doi:10.3389/jpps.2025.15525](https://doi.org/10.3389/jpps.2025.15525)

**This record:** Pharmacolibrary, model `Risedronate_Namazi2025_reference_formulation_actonel_tablet`. <https://pharmacolibrary.github.io/#/drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet>

```bibtex
@misc{pharmacolibrary_RisedronateNamazi2025referenceformulationactoneltablet,
  title  = {{Pharmacolibrary model Risedronate_Namazi2025_reference_formulation_actonel_tablet}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet},
  note   = {Parameters from doi:10.3389/jpps.2025.15525},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet/Risedronate_Namazi2025_reference_formulation_actonel_tablet_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Risedronate_Namazi2025_reference_formulation_actonel_tablet_params.json` · controls `Risedronate_Namazi2025_reference_formulation_actonel_tablet_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisedronate%5D%20Risedronate_Namazi2025_reference_formulation_actonel_tablet&body=Drug%3A%20risedronate%0ARecord%3A%20Risedronate_Namazi2025_reference_formulation_actonel_tablet%0APaper%3A%20Namazi_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risedronate/Risedronate_Namazi2025_reference_formulation_actonel_tablet%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 14:13 UTC</sub>
