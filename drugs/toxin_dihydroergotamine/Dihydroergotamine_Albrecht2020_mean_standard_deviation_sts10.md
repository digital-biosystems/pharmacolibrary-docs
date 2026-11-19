<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Dihydroergotamine&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/&quot;},{&quot;label&quot;:&quot;Albrecht_2020 \u00b7 mean_standard_deviation_sts101_5_2_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dihydroergotamine_Wyss1991_reference&quot;,&quot;label&quot;:&quot;Wyss_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Wyss1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dihydroergotamine_Albrecht2020_mean_standard_deviation_im_dh&quot;,&quot;label&quot;:&quot;Albrecht_2020_mean_standard_deviation_im_dhe&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_im_dh.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dihydroergotamine_Albrecht2020_mean_standard_deviation_migra&quot;,&quot;label&quot;:&quot;Albrecht_2020_mean_standard_deviation_migranal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_migra.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10&quot;,&quot;label&quot;:&quot;Albrecht_2020_mean_standard_deviation_sts101_5_2_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Dihydroergotamine_Albrecht2020_migranal&quot;,&quot;label&quot;:&quot;Albrecht_2020_migranal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_migranal.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dihydroergotamine_Kanto1981_reference&quot;,&quot;label&quot;:&quot;Kanto_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Kanto1981_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dihydroergotamine_Schran1983_reference&quot;,&quot;label&quot;:&quot;Schran_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dihydroergotamine/Dihydroergotamine_Schran1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dihydroergotamine — `Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 6.45e-07, model 0.997); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183).

<div class="pk-model-meta" hidden drug="Dihydroergotamine" model-id="Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10" status="needs_review" stale="false" population="Healthy Adult Subjects" measured-compound="Dihydroergotamine" parameterization="mechanistic" topology="retention"></div>

## Citation
Albrecht D, Iwashima M, Dillon D, Harris S, Levy J. A Phase 1, Randomized, Open-Label, Safety, Tolerability, and Comparative Bioavailability Study of Intranasal Dihydroergotamine Powder (STS101), Intramuscular Dihydroergotamine Mesylate, and Intranasal DHE Mesylate Spray in Healthy Adult Subjects. Headache 60(4):701–712 (2020).
  ·  DOI: [10.1111/head.13737](https://doi.org/10.1111/head.13737)

## Population and dosing

**Population:** Healthy Adult Subjects · condition healthy · age group adult · n = 43.

**Dosing:** 1, 1.3, 2, 2.6, 5.2 mg, other, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (pg/mL) | Cmax | 126 | pg/mL |
| AUC0‐last, h × pg/mL | AUClast | 1382 | h × pg/mL |
| AUC0‐inf, h × pg/mL | AUC∞ | 1923 | h × pg/mL |
| T max, h (median [min, max]) | tmax | 2.00 | h |
| t 1/2 (h) | t1/2z | 19 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 6.45e-07, model 0.997); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. None of the extracted parameters is dihydroergotamine's own; they describe 8'-OH-DHE. Extracted — 8'-OH-DHE: Cmax 126 pg/mL, AUClast 1.38e+03 h × pg/mL, AUC∞ 1.92e+03 h × pg/mL, tmax 2 h, t1/2z 19 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (pg/mL) | `Q32` · Cmax | 126 | pg/mL | 1.26e-07 | kg/m3 | pg/ml | space_fold (0.95) | Albrecht_2020_table_6:row1:col1 |
| AUC0‐last, h × pg/mL | `Q74` · AUClast | 1382 | h × pg/mL | 0.004975 | kg*s/m3 | (h·pg)/ml | llm (0.6) | Albrecht_2020_table_6:row3:col1 |
| AUC0‐inf, h × pg/mL | `Q17` · AUC∞ | 1923 | h × pg/mL | 0.006923 | kg*s/m3 | (h·pg)/ml | llm (0.6) | Albrecht_2020_table_6:row4:col1 |
| T max, h (median [min, max]) | `Q56` · tmax | 2.00 | h | 7200 | s | h | space_fold (0.95) | Albrecht_2020_table_6:row5:col1 |
| t 1/2 (h) | `Q57` · t1/2z | 19 | h | 6.84e+04 | s | h | half_life_rule (0.95) | Albrecht_2020_table_6:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t 1/2 (h) (Q57)

**Interpretation flags:**
- unit_dimension_mismatch: 'C max CV (%)' → Q32 (unit 'dimensionless' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('C max CV (%)', value '45') — already have one for this compound
- unit_dimension_unknown: 'median [min, max]' (tmax)
- implicit units: 'T max, h (median [min, max])' → h (from the popPK convention: 'No explicit unit is stated in the text for Tmax in the context of the specific value 2.00. The text mentions Tmax in min')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Dihydroergotamine
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'mean ± standard deviation / sts101 5.2 mg (n = 27)' subgroup of Albrecht_2020 (paper reports 7 populations: im dhe (n = 26), mean ± standard deviation / im dhe (n = 26), mean ± standard deviation / migranal (n = 26), mean ± standard deviation / sts101 5.2 mg (n = 27), migranal (n = 26), ratio of geometric means (%), sts101 5.2 mg (n = 27))
- row roles (LLM): model_class=noncompartmental; 19/19 row label(s) assigned, 0 linked by role; re-tagged parent→8'-OH-DHE ×21
- molar mass: no plausible PubChem entry for "8'-OH-DHE" ('no full name in the paper') — left in mass units
- molar mass: none found for "8'-OH-DHE" — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Albrecht_2020_table_p6_2: ambiguous_numeric_format
- table Albrecht_2020_table_p6_2: unparsed_numeric_cell
- table Albrecht_2020_table_5: ambiguous_numeric_format
- table Albrecht_2020_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (9 record(s))
- table Albrecht_2020_table_6: ragged_grid
- table Albrecht_2020_table_6: unparsed_numeric_cell
- companion parameter table 6 transcribed (16 record(s))
- LLM selected parameter table(s) 4, 5, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Albrecht_2020_table_6:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Albrecht_2020_table_6:row1:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Albrecht_2020_table_6:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Albrecht_2020_table_6:row7:col1'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Albrecht_2020_table_6:row3:col1'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Dihydroergotamine) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 6.45e-07 | 0.997 | 1.546e+06 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.244e-06 | 0.997 | 8.014e+05 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.87e-06 | 0.997 | 5.331e+05 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.175e-06 | 0.997 | 4.584e+05 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.368e-06 | 0.997 | 2.96e+05 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.61e-07 | 0.997 | 1.037e+06 | pg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 41 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 76 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 61 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 283 | 0.997 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_tmax | reference | fail | 0.5 | 0.1833 | 0.3667 | minutes→SI vs simulated h |
| T1_tmax | reference | fail | 0.25 | 0.1833 | 0.7333 | minutes→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1833 | 0.1833 | minutes→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_modelica.zip" download>Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_fmi.zip" download>Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_matlab.zip" download>Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_matlab.zip</a> <span class="pk-size">(3.9 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_sbml.zip" download>Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_cellml.zip" download>Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_cellml.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5837 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-06 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 6.84e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Albrecht D, Iwashima M, Dillon D, Harris S, Levy J. A Phase 1, Randomized, Open-Label, Safety, Tolerability, and Comparative Bioavailability Study of Intranasal Dihydroergotamine Powder (STS101), Intramuscular Dihydroergotamine Mesylate, and Intranasal DHE Mesylate Spray in Healthy Adult Subjects. Headache 60(4):701–712 (2020). [doi:10.1111/head.13737](https://doi.org/10.1111/head.13737)

**This record:** Pharmacolibrary, model `Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10`. <https://pharmacolibrary.github.io/#/drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10>

```bibtex
@misc{pharmacolibrary_DihydroergotamineAlbrecht2020meanstandarddeviationsts10,
  title  = {{Pharmacolibrary model Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10},
  note   = {Parameters from doi:10.1111/head.13737},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_params.json` · controls `Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdihydroergotamine%5D%20Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10&body=Drug%3A%20dihydroergotamine%0ARecord%3A%20Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10%0APaper%3A%20Albrecht_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dihydroergotamine/Dihydroergotamine_Albrecht2020_mean_standard_deviation_sts10%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 15:12 UTC</sub>
