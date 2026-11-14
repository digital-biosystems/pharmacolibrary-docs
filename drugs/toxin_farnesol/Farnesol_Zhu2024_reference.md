<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Farnesol&quot;,&quot;href&quot;:&quot;drugs/toxin_farnesol/&quot;},{&quot;label&quot;:&quot;Zhu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Farnesol_Zhu2024_reference&quot;,&quot;label&quot;:&quot;Zhu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_farnesol/Farnesol_Zhu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Farnesol — `Farnesol_Zhu2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00111, model 0.998); the model does not reproduce the paper's time of the peak (tmax) (paper 1.3, model 0.0481).

<div class="pk-model-meta" hidden drug="Farnesol" model-id="Farnesol_Zhu2024_reference" status="needs_review" stale="false" population="rats" measured-compound="farnesol" parameterization="mechanistic" topology="retention"></div>

## Citation
Zhu Y, Ouyang H, Lin W, Li W, Cao X, Chang Y et al. GC-MS method for simultaneous determination and pharmacokinetic investigation of five volatile components in rat plasma after oral administration of the essential oil extract of Pogostemon cablin. Heliyon 10(11):e32444 (2024).
  ·  DOI: [10.1016/j.heliyon.2024.e32444](https://doi.org/10.1016/j.heliyon.2024.e32444)

## Population and dosing

**Population:** rats · condition healthy · age group adult · n = 6.

**Dosing:** 77000 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Pogostemon cablin essential oil extract, measured farnesol.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 1413.7 | ng/mL |
| Tmax (h) | tmax | 6.0 | h |
| T1/2α (h) | t1/2α | 4.5 | h |
| AUC(0-tn) (μg/L*h) | AUC | 32149.6 | μg/L*h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00111, model 0.998); the model does not reproduce the paper's time of the peak (tmax) (paper 1.3, model 0.0481).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — farnesol: Cmax 1.41e+03 ng/mL, tmax 6 h, t1/2α 4.5 h, AUC 3.21e+04 μg/L*h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 1413.7 | ng/mL | 0.001414 | kg/m3 | ng/ml | exact (1) | tbl5:row1:col2 |
| Tmax (h) | `Q56` · tmax | 6.0 | h | 2.16e+04 | s | h | exact (1) | tbl5:row2:col2 |
| T1/2α (h) | `Q59` · t1/2α | 4.5 | h | 1.62e+04 | s | h | half_life_rule (0.95) | tbl5:row3:col2 |
| AUC(0-tn) (μg/L*h) | `Q88` · AUC | 32149.6 | μg/L*h | 115.7 | kg*s/m3 | µg/(h·l) | space_fold (0.95) | tbl5:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / T1/2α (h) (Q59)

**Interpretation flags:**
- column 'farnesol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q88 ('AUC(0-∞) (μg/L*h)', value '32534.1') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=farnesol
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 5
- toxin: the located table(s) gave no kinetic value — 6 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl5:row1:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['tbl5:row2:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['tbl5:row3:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl5:row4:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=farnesol) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.001108 | 0.9976 | 899.9 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001414 | 0.9976 | 705.7 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001108 | 0.9976 | 899.9 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001414 | 0.9976 | 705.7 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_alpha | reference | skipped | 2.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 4.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | pass | 6 | 4.5 | 0.75 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 4.5 | 4.5 | 1 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.3 | 0.0481 | 0.037 | h→SI vs simulated h |
| T1_tmax | reference | fail | 6 | 0.0481 | 0.008 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.3 | 0.0481 | 0.037 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.1 | 0.0481 | 0.0229 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_modelica.zip" download>Farnesol_Zhu2024_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_fmi.zip" download>Farnesol_Zhu2024_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_matlab.zip" download>Farnesol_Zhu2024_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_sbml.zip" download>Farnesol_Zhu2024_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_cellml.zip" download>Farnesol_Zhu2024_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2224 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.077 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 1.62e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhu Y, Ouyang H, Lin W, Li W, Cao X, Chang Y et al. GC-MS method for simultaneous determination and pharmacokinetic investigation of five volatile components in rat plasma after oral administration of the essential oil extract of Pogostemon cablin. Heliyon 10(11):e32444 (2024). [doi:10.1016/j.heliyon.2024.e32444](https://doi.org/10.1016/j.heliyon.2024.e32444)

**This record:** Pharmacolibrary, model `Farnesol_Zhu2024_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_farnesol/Farnesol_Zhu2024_reference>

```bibtex
@misc{pharmacolibrary_FarnesolZhu2024reference,
  title  = {{Pharmacolibrary model Farnesol_Zhu2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_farnesol/Farnesol_Zhu2024_reference},
  note   = {Parameters from doi:10.1016/j.heliyon.2024.e32444},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_farnesol/Farnesol_Zhu2024_reference/Farnesol_Zhu2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Farnesol_Zhu2024_reference_params.json` · controls `Farnesol_Zhu2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfarnesol%5D%20Farnesol_Zhu2024_reference&body=Drug%3A%20farnesol%0ARecord%3A%20Farnesol_Zhu2024_reference%0APaper%3A%20Zhu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_farnesol/Farnesol_Zhu2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:48 UTC</sub>
