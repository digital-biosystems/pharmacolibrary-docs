<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pramipexole&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/&quot;},{&quot;label&quot;:&quot;Chen_2026 \u00b7 fed_study&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pramipexole_Pu2017_reference&quot;,&quot;label&quot;:&quot;Pu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Pu2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Chen2026_fasting_study&quot;,&quot;label&quot;:&quot;Chen_2026_fasting_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Chen2026_fasting_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Chen2026_fed_study&quot;,&quot;label&quot;:&quot;Chen_2026_fed_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pramipexole_Yang2023_geometric_mean&quot;,&quot;label&quot;:&quot;Yang_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Yang2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Yang2023_geometric_mean_ratio&quot;,&quot;label&quot;:&quot;Yang_2023_geometric_mean_ratio&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Yang2023_geometric_mean_ratio.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Yang2023_pramipexole_test&quot;,&quot;label&quot;:&quot;Yang_2023_pramipexole_test&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Yang2023_pramipexole_test.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pramipexole — `Pramipexole_Chen2026_fed_study`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax); the model does not reproduce the paper's time of the peak (tmax).

<div class="pk-model-meta" hidden drug="Pramipexole" model-id="Pramipexole_Chen2026_fed_study" status="needs_review" stale="false" population="healthy Chinese volunteers" measured-compound="Pramipexole" parameterization="mechanistic" topology="retention"></div>

## Citation
Chen Q, Shi HQ, Chen YF, Zhang W, Ye L, Li YM et al. Comparative pharmacokinetics for bioequivalence of pramipexole dihydrochloride extended-release tablets in fasting and fed Chinese healthy volunteers: a randomized, open-label, single-dose, crossover study. BMC pharmacology & toxicology 27(1) (2026).
  ·  DOI: [10.1186/s40360-026-01144-w](https://doi.org/10.1186/s40360-026-01144-w)

## Population and dosing

**Population:** healthy Chinese volunteers · condition healthy · age group adult · n = 48 (24 fasting + 24 fed).

**Dosing:** 0.375 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Pramipexole dihydrochloride, measured Pramipexole.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) # | tmax | 8.0 | h |
| t1/2 | t1/2z | 8.61 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax); the model does not reproduce the paper's time of the peak (tmax).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — pramipexole: tmax 8 h, t1/2z 8.61 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) # | `Q56` · tmax | 8.0 | h | 2.88e+04 | s | h | llm_confirmed (0.6) | Tab2:row7:col3, Tab2:row7:col4 |
| t1/2 | `Q57` · t1/2z | 8.61 | h | 3.1e+04 | s | h | half_life_rule (0.95) | Chen_2026:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'TestN = 24' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col3'])
- salvaged Q57 ('t1/2'=8.61) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Pramipexole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'fed study' subgroup of Chen_2026 (paper reports 2 populations: fasting study, fed study)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: ragged_grid
- table Tab2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['Tab2:row7:col3', 'Tab2:row7:col4'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Pramipexole) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.9971 |  | non-numeric value |
| T1_cmax | reference | fail | 4.5e-07 | 0.9971 | 2.216e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.7e-07 | 0.9971 | 2.122e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.2e-07 | 0.9971 | 1.918e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 5.3e-07 | 0.9971 | 1.881e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 96.8 | 0.9971 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 97.43 | 0.9971 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 4.5e-07 | 0.9971 | 2.216e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.7e-07 | 0.9971 | 2.122e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 13 | 0.9971 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 5.2e-07 | 0.9971 | 1.918e+06 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | pass | 9.55 | 8.61 | 0.9016 | h→SI vs simulated h |
| T1_t_half_beta | reference | skipped |  | 8.61 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 8.61 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 8.61 | 8.61 | 1 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 8.61 | 8.61 | 1 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.08818 |  | non-numeric value |
| T1_tmax | reference | fail | 6 | 0.08818 | 0.0147 | h→SI vs simulated h |
| T1_tmax | reference | fail | 8 | 0.08818 | 0.011 | h→SI vs simulated h |
| T1_tmax | reference | fail | 6 | 0.08818 | 0.0147 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 0.08818 | 0.0441 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_modelica.zip" download>Pramipexole_Chen2026_fed_study_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_fmi.zip" download>Pramipexole_Chen2026_fed_study_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_matlab.zip" download>Pramipexole_Chen2026_fed_study_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_sbml.zip" download>Pramipexole_Chen2026_fed_study_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_cellml.zip" download>Pramipexole_Chen2026_fed_study_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2113 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 3.75e-07 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 3.1e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Chen Q, Shi HQ, Chen YF, Zhang W, Ye L, Li YM et al. Comparative pharmacokinetics for bioequivalence of pramipexole dihydrochloride extended-release tablets in fasting and fed Chinese healthy volunteers: a randomized, open-label, single-dose, crossover study. BMC pharmacology & toxicology 27(1) (2026). [doi:10.1186/s40360-026-01144-w](https://doi.org/10.1186/s40360-026-01144-w)

**This record:** Pharmacolibrary, model `Pramipexole_Chen2026_fed_study`. <https://pharmacolibrary.github.io/#/drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study>

```bibtex
@misc{pharmacolibrary_PramipexoleChen2026fedstudy,
  title  = {{Pharmacolibrary model Pramipexole_Chen2026_fed_study}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study},
  note   = {Parameters from doi:10.1186/s40360-026-01144-w},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study/Pramipexole_Chen2026_fed_study_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Pramipexole_Chen2026_fed_study_params.json` · controls `Pramipexole_Chen2026_fed_study_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpramipexole%5D%20Pramipexole_Chen2026_fed_study&body=Drug%3A%20pramipexole%0ARecord%3A%20Pramipexole_Chen2026_fed_study%0APaper%3A%20Chen_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:20 UTC</sub>
