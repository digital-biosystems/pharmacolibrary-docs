<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Doxylamine&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/&quot;},{&quot;label&quot;:&quot;Videla_2012 \u00b7 mean_cv_fed&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxylamine_Balan2013_reference&quot;,&quot;label&quot;:&quot;Balan_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Balan2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxylamine_Friedman1989_reference&quot;,&quot;label&quot;:&quot;Friedman_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Friedman1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxylamine_Videla2012_mean_cv_fasting&quot;,&quot;label&quot;:&quot;Videla_2012_mean_cv_fasting&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fasting.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxylamine_Videla2012_mean_cv_fed&quot;,&quot;label&quot;:&quot;Videla_2012_mean_cv_fed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Doxylamine — `Doxylamine_Videla2012_mean_cv_fed`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUCt and AUC∞ have no unit.

<div class="pk-model-meta" hidden drug="Doxylamine" model-id="Doxylamine_Videla2012_mean_cv_fed" status="needs_review" stale="false" population="healthy volunteers" measured-compound="doxylamine" parameterization="mechanistic" topology="retention"></div>

## Citation
Videla S, Lahjou M, Guibord P, Xu Z, Tolrà C, Encina G et al. Food effects on the pharmacokinetics of doxylamine hydrogen succinate 25 mg film-coated tablets: a single-dose, randomized, two-period crossover study in healthy volunteers. Drugs in R&D 12(4):217–225 (2012).
  ·  DOI: [10.2165/11641640-000000000-00000](https://doi.org/10.2165/11641640-000000000-00000)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 24.

**Dosing:** 25 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed doxylamine hydrogen succinate (doxylamine succinate 25 mg), measured doxylamine.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 120.99 | ng/mL |
| tmax (h)ᵇ | tmax | 2.50 | h |
| AUCt (ng•h/mL) | AUCt | 1712.20 | ng•h/mL |
| AUC∞ (ng•h/mL) | AUC∞ | 1798.14 | ng•h/mL |
| AUCt : AUC∞ (%) | AUC%ext | 95.84 | % |
| ke (h⁻¹) | kel | 0.0544 | h⁻¹ |
| t½ (h) | t1/2z | 13.49 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUCt and AUC∞ have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUCt and AUC∞), so that value has no SI equivalent. Extracted — doxylamine: Cmax 121 ng/mL, tmax 2.5 h, AUCt 1.71e+03 ng•h/mL, AUC∞ 1.8e+03 ng•h/mL, AUC%ext 95.8 %, kel 0.0544 h⁻¹, t1/2z 13.5 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 120.99 | ng/mL | 0.000121 | kg/m3 | ng/ml | exact (1) | Videla_2012_table_1:row0:col1 |
| tmax (h)ᵇ | `Q56` · tmax | 2.50 | h | 9000 | s | h | llm_confirmed (0.6) | Videla_2012_table_1:row2:col1 |
| AUCt (ng•h/mL) | `Q19` · AUCt | 1712.20 | ng•h/mL |  |  | (h·ng)/ml | exact (1) | Videla_2012_table_1:row3:col1 |
| AUC∞ (ng•h/mL) | `Q17` · AUC∞ | 1798.14 | ng•h/mL |  |  | (h·ng)/ml | exact (1) | Videla_2012_table_1:row5:col1 |
| AUCt : AUC∞ (%) | `Q84` · AUC%ext | 95.84 | % | 0.9584 |  | % | llm_corrected (0.6) | Videla_2012_table_1:row7:col1 |
| ke (h⁻¹) | `Q47` · kel | 0.0544 | h⁻¹ | 1.511e-05 | 1/s | 1/h | exact (1) | Videla_2012_table_1:row8:col1 |
| t½ (h) | `Q57` · t1/2z | 13.49 | h | 4.856e+04 | s | h | half_life_rule (0.95) | Videla_2012_table_1:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Table II. Standards for comparative bioavailability of doxylamine | Q40 | llm_confirmed |

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t½ (h) (Q57)

**Interpretation flags:**
- dropped duplicate Q32 ('ln Cmax', value '4.7846') — already have one for this compound
- unit_dimension_unknown: 'ng•h/mL' (AUCt)
- dropped duplicate Q19 ('ln AUCt', value '7.4150') — already have one for this compound
- unit_dimension_unknown: 'ng•h/mL' (AUC∞)
- dropped duplicate Q17 ('ln AUC∞', value '7.4580') — already have one for this compound
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 340)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxylamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'mean [cv (%)] fedᵃ' subgroup of Videla_2012 (paper reports 8 populations: geometric ls mean fasting, geometric ls mean fed, mean [cv (%)] fastingᵃ, mean [cv (%)] fedᵃ, mean [cv (%)] female (n = 11) fasting a, mean [cv (%)] female (n = 11) fed, mean [cv (%)] male (n = 12) fasting a, mean [cv (%)] male (n = 12) fed)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q19, Q17 — no SI value to build from)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3
- table Videla_2012_table_2: unbound_uncertainty
- table Videla_2012_table_2: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Videla_2012_table_1:row0:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Videla_2012_table_1:row8:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Videla_2012_table_1:row2:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Videla_2012_table_1:row9:col1'] |
| C5_dimension_Q84 | pass | dimensionless |  | ['Videla_2012_table_1:row7:col1'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng•h/mL | ['Videla_2012_table_1:row5:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng•h/mL | ['Videla_2012_table_1:row3:col1'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_modelica.zip" download>Doxylamine_Videla2012_mean_cv_fed_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_fmi.zip" download>Doxylamine_Videla2012_mean_cv_fed_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_matlab.zip" download>Doxylamine_Videla2012_mean_cv_fed_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_sbml.zip" download>Doxylamine_Videla2012_mean_cv_fed_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_cellml.zip" download>Doxylamine_Videla2012_mean_cv_fed_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2704 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 4.856e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Videla S, Lahjou M, Guibord P, Xu Z, Tolrà C, Encina G et al. Food effects on the pharmacokinetics of doxylamine hydrogen succinate 25 mg film-coated tablets: a single-dose, randomized, two-period crossover study in healthy volunteers. Drugs in R&D 12(4):217–225 (2012). [doi:10.2165/11641640-000000000-00000](https://doi.org/10.2165/11641640-000000000-00000)

**This record:** Pharmacolibrary, model `Doxylamine_Videla2012_mean_cv_fed`. <https://pharmacolibrary.github.io/#/drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed>

```bibtex
@misc{pharmacolibrary_DoxylamineVidela2012meancvfed,
  title  = {{Pharmacolibrary model Doxylamine_Videla2012_mean_cv_fed}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed},
  note   = {Parameters from doi:10.2165/11641640-000000000-00000},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed/Doxylamine_Videla2012_mean_cv_fed_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Doxylamine_Videla2012_mean_cv_fed_params.json` · controls `Doxylamine_Videla2012_mean_cv_fed_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxylamine%5D%20Doxylamine_Videla2012_mean_cv_fed&body=Drug%3A%20doxylamine%0ARecord%3A%20Doxylamine_Videla2012_mean_cv_fed%0APaper%3A%20Videla_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 04:10 UTC</sub>
