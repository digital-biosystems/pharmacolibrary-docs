<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Desloratadine&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/&quot;},{&quot;label&quot;:&quot;Zhang_2021 \u00b7 mean_con_in_beagles_dl_tablet_10_mg_39&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desloratadine_Wang2015_reference&quot;,&quot;label&quot;:&quot;Wang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Wang2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_beagles_dl_tablet_10_mg_39&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_beagles_ltd_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_beagles_ltd_tablet_10_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_ltd_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_humans_dl_tablet_10_mg_4&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_humans_dl_tablet_10_mg_41&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_humans_dl_tablet_10_mg_4.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Desloratadine_Zhang2021_mean_con_in_humans_ltd_tablet_10_mg&quot;,&quot;label&quot;:&quot;Zhang_2021_mean_con_in_humans_ltd_tablet_10_mg_40&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_humans_ltd_tablet_10_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Desloratadine — `Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The model does not reproduce the paper's time of the peak (tmax); the model does not reproduce the paper's terminal half-life (+1 more).

<div class="pk-model-meta" hidden drug="Desloratadine" model-id="Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg" status="needs_review" stale="false" population="nine male beagle dogs" measured-compound="Desloratadine" parameterization="mechanistic" topology="retention"></div>

## Citation
Zhang Y, Zhang J, Xu Q, Wang Y, Wu W, Wang W et al. Simultaneous Determination of Loratadine and Its Metabolite Desloratadine in Beagle Plasma by LC-MS/MS and Application for Pharmacokinetics Study of Loratadine Tablets and Omeprazole‑Induced Drug-Drug Interaction. Drug design, development and therapy 15:5109–5122 (2021).
  ·  DOI: [10.2147/DDDT.S328106](https://doi.org/10.2147/DDDT.S328106)

## Population and dosing

**Population:** nine male beagle dogs · condition fasting state; omeprazole-induced drug-drug interaction study · age group adult · n = 9.

**Dosing:** 10 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Loratadine, measured Desloratadine.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 393.2 | ng/mL |
| AUC0-t (ng. h/mL) | AUCt | 6293.7 | ng. h/mL |
| AUC0-∞ (ng. h/mL) | AUC∞ | 6511.4 | ng. h/mL |
| Tmax (h) | tmax | 3.2 | h |
| t1/2 (h) | t1/2z | 11.19 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax); the model does not reproduce the paper's terminal half-life (+1 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Extracted — desloratadine: Cmax 393 ng/mL, AUCt 6.29e+03 ng. h/mL, AUC∞ 6.51e+03 ng. h/mL, tmax 3.2 h, t1/2z 11.2 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 393.2 | ng/mL | 0.0003932 | kg/m3 | ng/ml | exact (1) | Zhang_2021_table_6:row2:col3 |
| AUC0-t (ng. h/mL) | `Q19` · AUCt | 6293.7 | ng. h/mL | 22.66 | kg*s/m3 | (h·ng)/ml | exact (1) | Zhang_2021_table_6:row3:col3 |
| AUC0-∞ (ng. h/mL) | `Q17` · AUC∞ | 6511.4 | ng. h/mL | 23.44 | kg*s/m3 | (h·ng)/ml | exact (1) | Zhang_2021_table_6:row4:col3 |
| Tmax (h) | `Q56` · tmax | 3.2 | h | 1.152e+04 | s | h | exact (1) | Zhang_2021_table_6:row5:col3 |
| t1/2 (h) | `Q57` · t1/2z | 11.19 | h | 4.028e+04 | s | h | half_life_rule (0.95) | Zhang_2021_table_6:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 (h) (Q57)

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Desloratadine
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'mean con. in beagles / dl tablet (10 mg)39' subgroup of Zhang_2021 (paper reports 4 populations: mean con. in beagles / dl tablet (10 mg)39, mean con. in beagles / ltd tablet (10 mg), mean con. in humans / dl tablet (10 mg)41, mean con. in humans / ltd tablet (10 mg)40)
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 0 linked by role; re-tagged parent→Desloratadine ×5
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table t0005: unbound_uncertainty
- table t0005: missing_label
- table t0005: ragged_grid
- table t0005: unparsed_numeric_cell
- table t0005: representations disagree; selected evidence retained, not merged
- table Zhang_2021_table_6: ragged_grid
- companion parameter table 6 transcribed (32 record(s))
- companion parameter table 7 transcribed (36 record(s))
- LLM selected parameter table(s) 5, 6, 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Zhang_2021_table_6:row4:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Zhang_2021_table_6:row3:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zhang_2021_table_6:row2:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Zhang_2021_table_6:row5:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Zhang_2021_table_6:row6:col3'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Desloratadine) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.9961 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.9961 |  | non-numeric value |
| T1_cmax | reference | fail | 0.000472 | 0.9961 | 2110 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.717e-06 | 0.9961 | 2.68e+05 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.717e-06 | 0.9961 | 2.68e+05 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.914e-06 | 0.9961 | 2.545e+05 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.777e-06 | 0.9961 | 2.637e+05 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000472 | 0.9961 | 2110 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0004465 | 0.9961 | 2231 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0004969 | 0.9961 | 2005 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped |  | 0.9961 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.9961 |  | non-numeric value |
| T1_cmax | reference | skipped | 40 | 0.9961 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 24 | 0.9961 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | skipped |  | 11.19 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 10.54 | 11.19 | 1.062 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 7.554 | 11.19 | 1.481 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 54 | 11.19 | 0.2072 | →SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.1443 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 0.1443 |  | non-numeric value |
| T1_tmax | reference | fail | 0.389 | 0.1443 | 0.3709 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.795 | 0.1443 | 0.1815 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.225 | 0.1443 | 0.1178 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.812 | 0.1443 | 0.0513 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_modelica.zip" download>Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_fmi.zip" download>Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_matlab.zip" download>Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_matlab.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_sbml.zip" download>Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_cellml.zip" download>Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3108 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 4.028e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhang Y, Zhang J, Xu Q, Wang Y, Wu W, Wang W et al. Simultaneous Determination of Loratadine and Its Metabolite Desloratadine in Beagle Plasma by LC-MS/MS and Application for Pharmacokinetics Study of Loratadine Tablets and Omeprazole‑Induced Drug-Drug Interaction. Drug design, development and therapy 15:5109–5122 (2021). [doi:10.2147/DDDT.S328106](https://doi.org/10.2147/DDDT.S328106)

**This record:** Pharmacolibrary, model `Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg`. <https://pharmacolibrary.github.io/#/drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg>

```bibtex
@misc{pharmacolibrary_DesloratadineZhang2021meanconinbeaglesdltablet10mg,
  title  = {{Pharmacolibrary model Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg},
  note   = {Parameters from doi:10.2147/DDDT.S328106},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_params.json` · controls `Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesloratadine%5D%20Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg&body=Drug%3A%20desloratadine%0ARecord%3A%20Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg%0APaper%3A%20Zhang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_desloratadine/Desloratadine_Zhang2021_mean_con_in_beagles_dl_tablet_10_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:19 UTC</sub>
