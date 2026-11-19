<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flupenthixol&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/&quot;},{&quot;label&quot;:&quot;Wu_2019 \u00b7 geometric_mean_test&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flupenthixol_Correll2021_reference&quot;,&quot;label&quot;:&quot;Correll_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Correll2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Levron1987_reference&quot;,&quot;label&quot;:&quot;Levron_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Levron1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_fasted_state&quot;,&quot;label&quot;:&quot;Wu_2019_fasted_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_fasted_state.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_fed_state&quot;,&quot;label&quot;:&quot;Wu_2019_fed_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_fed_state.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_geometric_mean_reference&quot;,&quot;label&quot;:&quot;Wu_2019_geometric_mean_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flupenthixol_Wu2019_geometric_mean_test&quot;,&quot;label&quot;:&quot;Wu_2019_geometric_mean_test&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flupenthixol — `Flupenthixol_Wu2019_geometric_mean_test`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax) (paper 23.2, model 0.183); the model does not reproduce the paper's terminal half-life.

<div class="pk-model-meta" hidden drug="Flupenthixol" model-id="Flupenthixol_Wu2019_geometric_mean_test" status="needs_review" stale="false" population="healthy Chinese volunteers" measured-compound="flupentixol" parameterization="mechanistic" topology="retention"></div>

## Citation
Wu L, Xu C, Wu G, Zhou H, Lv D, Zhai Y et al. Bioequivalence Study Of A Fixed-Dose Combination Tablet Containing Melitracen 10 mg And Flupentixol 0.5 mg In Healthy Chinese Volunteers Under Fasted And Fed Conditions. Drug design, development and therapy 13:3331–3342 (2019).
  ·  DOI: [10.2147/DDDT.S207561](https://doi.org/10.2147/DDDT.S207561)

## Population and dosing

**Population:** healthy Chinese volunteers · condition healthy · age group adult · n = 48.

**Dosed compound ≠ measured compound:** dosed flupentixol (in fixed-dose combination tablet with melitracen), measured flupentixol.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax, ng/mL | Cmax | 0.1485 | ng/mL |
| AUC0-t, ng·h/mL | AUCt | 9.3338 | ng·h/mL |
| AUC0-∞, ng·h/mL | AUC∞ | 11.1573 | ng·h/mL |
| t½, h (Fasted, Flupentixol Test) | t1/2z | 24.17 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 23.2, model 0.183); the model does not reproduce the paper's terminal half-life.**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — flupenthixol: Cmax 0.148 ng/mL, AUCt 9.33 ng·h/mL, AUC∞ 11.2 ng·h/mL, t1/2z 24.2 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has flupentixol (in fixed-dose combination tablet with melitracen), the second reading Flupentixol; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax, ng/mL | `Q32` · Cmax | 0.1485 | ng/mL | 1.485e-07 | kg/m3 | ng/ml | exact (1) | Wu_2019_table_5:row1:col1, Wu_2019_table_5:row5:col1, Wu_2019_table_6:row1:col1, Wu_2019_table_6:row5:col1 |
| AUC0-t, ng·h/mL | `Q19` · AUCt | 9.3338 | ng·h/mL | 0.0336 | kg*s/m3 | (h·ng)/ml | exact (1) | Wu_2019_table_5:row2:col1, Wu_2019_table_5:row6:col1, Wu_2019_table_6:row2:col1, Wu_2019_table_6:row6:col1 |
| AUC0-∞, ng·h/mL | `Q17` · AUC∞ | 11.1573 | ng·h/mL | 0.04017 | kg*s/m3 | (h·ng)/ml | exact (1) | Wu_2019_table_5:row3:col1, Wu_2019_table_5:row7:col1, Wu_2019_table_6:row3:col1, Wu_2019_table_6:row7:col1 |
| t½, h (Fasted, Flupentixol Test) | `Q57` · t1/2z | 24.17 | h | 8.701e+04 | s | h | half_life_rule (0.95) | Wu_2019:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t½, h (Fasted, Flupentixol Test) (Q57)

**Interpretation flags:**
- dropped value-less row: 'Table 7. Total Number Of Adverse Events And Percentage Of Healthy Subjects Experiencing Adverse Events In The Fasted Or Fed Study. Values Are Given As No. (%)' (captured trailing unit '%' for child rows)
- salvaged Q57 ('t½, h (Fasted, Flupentixol Test)'=24.17) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flupentixol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'geometric mean (test)' subgroup of Wu_2019 (paper reports 7 populations: fasted state (n=24), fed state (n=24), flupentixol / reference (n=22c), flupentixol / reference (n=24), flupentixol / test (n=24), geometric mean (reference), geometric mean (test))
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table T0007: representations disagree; selected evidence retained, not merged
- table Wu_2019_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (27 record(s))
- table Wu_2019_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (27 record(s))
- table Wu_2019_table_5: unbound_uncertainty
- table Wu_2019_table_5: conflicting_units
- companion parameter table 5 transcribed (30 record(s))
- table Wu_2019_table_6: unbound_uncertainty
- table Wu_2019_table_6: conflicting_units
- companion parameter table 6 transcribed (30 record(s))
- LLM selected parameter table(s) 3, 4, 5, 6
- LLM region Wu_2019:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[auc0-inf]` |  | 411.2933 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-inf]` | 11.1573 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-t]` |  | 336.6385 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-t]` | 9.3338 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f, l/hb]` |  | 46.6168 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` |  | 10.1628 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 0.1485 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1⁄2, hb]` |  | 54.7142 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1⁄2]` | 24.17 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f, lb]` |  | 3483.3519 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | flupentixol (in fixed-dose combination tablet with melitracen) | Flupentixol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Wu_2019_table_5:row3:col1', 'Wu_2019_table_5:row7:col1', 'Wu_2019_table_6:row3:col1', 'Wu_2019_table_6:row7:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Wu_2019_table_5:row2:col1', 'Wu_2019_table_5:row6:col1', 'Wu_2019_table_6:row2:col1', 'Wu_2019_table_6:row6:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Wu_2019_table_5:row1:col1', 'Wu_2019_table_5:row5:col1', 'Wu_2019_table_6:row1:col1', 'Wu_2019_table_6:row5:col1'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=flupentixol) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.9976 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 24.17 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 24.17 | 24.17 | 1 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 24.83 | 24.17 | 0.9734 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | 0.869 | 24.17 |  | unresolved time unit 'Fasted, Flupentixol t½' |
| T1_t_half_terminal | reference | pass | 25.13 | 24.17 | 0.9618 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 21.87 | 24.17 | 1.105 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | 0.41 | 24.17 |  | unresolved time unit 'Fasted, Melitracen t½' |
| T1_t_half_terminal | reference | pass | 21.68 | 24.17 | 1.115 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 23.32 | 24.17 | 1.036 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | 0.673 | 24.17 |  | unresolved time unit 'Fed, Flupentixol t½' |
| T1_t_half_terminal | reference | pass | 20.11 | 24.17 | 1.202 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 18.89 | 24.17 | 1.28 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | 0.737 | 24.17 |  | unresolved time unit 'Fed, Melitracen t½' |
| T1_tmax | reference | fail | 23.17 | 0.1833 | 0.0079 | h→SI vs simulated h |
| T1_tmax | reference | fail | 25.83 | 0.1833 | 0.0071 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 0.506 | 0.1833 |  | unresolved time unit 'Fasted, Flupentixol Tmax' |
| T1_tmax | reference | fail | 24.5 | 0.1833 | 0.0075 | h→SI vs simulated h |
| T1_tmax | reference | fail | 22.5 | 0.1833 | 0.0081 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 0.605 | 0.1833 |  | unresolved time unit 'Fasted, Melitracen Tmax' |
| T1_tmax | reference | fail | 24.14 | 0.1833 | 0.0076 | h→SI vs simulated h |
| T1_tmax | reference | fail | 20.86 | 0.1833 | 0.0088 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 0.392 | 0.1833 |  | unresolved time unit 'Fed, Flupentixol Tmax' |
| T1_tmax | reference | fail | 20.45 | 0.1833 | 0.009 | h→SI vs simulated h |
| T1_tmax | reference | fail | 18.55 | 0.1833 | 0.0099 | h→SI vs simulated h |
| T1_tmax | reference | skipped | 0.592 | 0.1833 |  | unresolved time unit 'Fed, Melitracen Tmax' |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_modelica.zip" download>Flupenthixol_Wu2019_geometric_mean_test_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_fmi.zip" download>Flupenthixol_Wu2019_geometric_mean_test_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_matlab.zip" download>Flupenthixol_Wu2019_geometric_mean_test_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_sbml.zip" download>Flupenthixol_Wu2019_geometric_mean_test_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_cellml.zip" download>Flupenthixol_Wu2019_geometric_mean_test_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4365 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 8.701e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Wu L, Xu C, Wu G, Zhou H, Lv D, Zhai Y et al. Bioequivalence Study Of A Fixed-Dose Combination Tablet Containing Melitracen 10 mg And Flupentixol 0.5 mg In Healthy Chinese Volunteers Under Fasted And Fed Conditions. Drug design, development and therapy 13:3331–3342 (2019). [doi:10.2147/DDDT.S207561](https://doi.org/10.2147/DDDT.S207561)

**This record:** Pharmacolibrary, model `Flupenthixol_Wu2019_geometric_mean_test`. <https://pharmacolibrary.github.io/#/drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test>

```bibtex
@misc{pharmacolibrary_FlupenthixolWu2019geometricmeantest,
  title  = {{Pharmacolibrary model Flupenthixol_Wu2019_geometric_mean_test}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test},
  note   = {Parameters from doi:10.2147/DDDT.S207561},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test/Flupenthixol_Wu2019_geometric_mean_test_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Flupenthixol_Wu2019_geometric_mean_test_params.json` · controls `Flupenthixol_Wu2019_geometric_mean_test_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflupenthixol%5D%20Flupenthixol_Wu2019_geometric_mean_test&body=Drug%3A%20flupenthixol%0ARecord%3A%20Flupenthixol_Wu2019_geometric_mean_test%0APaper%3A%20Wu_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flupenthixol/Flupenthixol_Wu2019_geometric_mean_test%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 09:00 UTC</sub>
