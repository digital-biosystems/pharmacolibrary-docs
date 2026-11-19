<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Mahdy_2023 \u00b7 gestation_of_pregnancy_40_weeks&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 9.9e-07, model 0.983).

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks" status="needs_review" stale="false" population="Japanese pregnant woman and neonate; White and Japanese healthy adults; pediatric patients" measured-compound="Paliperidone" parameterization="mechanistic" topology="retention"></div>

## Citation
Mahdy WYB, Yamamoto K, Ito T, Fujiwara N, Fujioka K, Horai T et al. Physiologically-based pharmacokinetic model to investigate the effect of pregnancy on risperidone and paliperidone pharmacokinetics: Application to a pregnant woman and her neonate. Clinical and translational science 16(4):618–630 (2023).
  ·  DOI: [10.1111/cts.13473](https://doi.org/10.1111/cts.13473)

## Population and dosing

**Population:** Japanese pregnant woman and neonate; White and Japanese healthy adults; pediatric patients · condition healthy; pregnancy · age group mixed.

**Dosing:** 0.5, 1 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed Risperidone, measured Paliperidone.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Distribution | Vss | 1.05 | L |
| Elimination | kel | 1.09 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 9.9e-07, model 0.983).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — risperidone: Vss 1.05 L, kel 1.09 1/h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Distribution | `Q65` · Vss | 1.05 | L | 0.00105 | m3 | L | llm (0.6) | cts13473-tbl-0001:row6:col8 |
| Elimination | `Q47` · kel | 1.09 | 1/h | 0.0003028 | 1/s | 1/h | llm_confirmed (0.6) | cts13473-tbl-0001:row9:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from Elimination (Q47)
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- table representations disagree for 'Risperidone'; source reconciliation required
- table representations disagree for 'Distribution'; source reconciliation required
- table representations disagree for 'Elimination'; source reconciliation required
- table representations disagree for 'Paliperidone'; source reconciliation required
- dropped unlinked row (NIL): 'Risperidone' — extend the ontology if this is a real PK parameter (source ['cts13473-tbl-0001:row2:col8'])
- dropped unlinked row (NIL): 'Paliperidone' — extend the ontology if this is a real PK parameter (source ['cts13473-tbl-0001:row21:col8'])
- implicit units: 'Distribution' → L (from the popPK convention: 'No unit is stated for the distribution volume in the provided text. Based on Priority 2, volumes of distribution (Vss) i')
- implicit units: 'Elimination' → 1/h (from the popPK convention: 'No unit is stated for the elimination rate constant (kel) in the provided text. Based on Priority 2, first-order elimina')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Paliperidone
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'gestation of pregnancy / 40 weeks' subgroup of Mahdy_2023 (paper reports 5 populations: gestation of pregnancy / 0 week, gestation of pregnancy / 10 weeks, gestation of pregnancy / 20 weeks, gestation of pregnancy / 30 weeks, gestation of pregnancy / 40 weeks)
- row roles (LLM): model_class=pbpk; 23/23 row label(s) assigned, 48 linked by role; re-tagged parent→Paliperidone ×18
- review gap-fill skipped: this record measures 'Paliperidone', not risperidone — the review values are the parent's

**Extraction notes:**
- table cts13473-tbl-0001: ragged_grid
- table cts13473-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 5 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cts13473-tbl-0001:row9:col8'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['cts13473-tbl-0001:row6:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 1.05 L | ['cts13473-tbl-0001:row6:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Paliperidone) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.9e-07 | 0.9831 | 9.93e+05 | ng/ml→SI vs simulated kg/m3 |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_modelica.zip" download>Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_fmi.zip" download>Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_fmi.zip</a> <span class="pk-size">(4.6 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_matlab.zip" download>Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_matlab.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_sbml.zip" download>Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_cellml.zip" download>Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4265 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-07 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2289 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Mahdy WYB, Yamamoto K, Ito T, Fujiwara N, Fujioka K, Horai T et al. Physiologically-based pharmacokinetic model to investigate the effect of pregnancy on risperidone and paliperidone pharmacokinetics: Application to a pregnant woman and her neonate. Clinical and translational science 16(4):618–630 (2023). [doi:10.1111/cts.13473](https://doi.org/10.1111/cts.13473)

**This record:** Pharmacolibrary, model `Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks`. <https://pharmacolibrary.github.io/#/drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks>

```bibtex
@misc{pharmacolibrary_RisperidoneMahdy2023gestationofpregnancy40weeks,
  title  = {{Pharmacolibrary model Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks},
  note   = {Parameters from doi:10.1111/cts.13473},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_params.json` · controls `Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks%0APaper%3A%20Mahdy_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
