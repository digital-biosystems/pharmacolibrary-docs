<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ibandronate&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/&quot;},{&quot;label&quot;:&quot;Nakai_2016 \u00b7 healthy_postmenopausal_women&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibandronate_Barrett2004_reference&quot;,&quot;label&quot;:&quot;Barrett_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Barrett2004_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Hanif2020_reference_formulation_bonish_150_mg_ta&quot;,&quot;label&quot;:&quot;Hanif_2020_reference_formulation_bonish_150_mg_tablets&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Hanif2020_reference_formulation_bonish_150_mg_ta.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Hanif2020_test_formulation_ppr5&quot;,&quot;label&quot;:&quot;Hanif_2020_test_formulation_ppr5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Hanif2020_test_formulation_ppr5.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Klawitter2025_gem_ib&quot;,&quot;label&quot;:&quot;Klawitter_2025_gem_ib&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Klawitter2025_gem_ib.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Nakai2016_healthy_postmenopausal_women&quot;,&quot;label&quot;:&quot;Nakai_2016_healthy_postmenopausal_women&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ibandronate_Nakai2016_postmenopausal_women_with_osteoporosis&quot;,&quot;label&quot;:&quot;Nakai_2016_postmenopausal_women_with_osteoporosis&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Nakai2016_postmenopausal_women_with_osteoporosis.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ibandronate — `Ibandronate_Nakai2016_healthy_postmenopausal_women`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 9.02e-06, model 0.997); the model does not reproduce the paper's time of the peak (tmax) (paper 0.98, model 0.144) (+1 more).

<div class="pk-model-meta" hidden drug="Ibandronate" model-id="Ibandronate_Nakai2016_healthy_postmenopausal_women" status="needs_review" stale="false" population="Japanese patients with osteoporosis, healthy postmenopausal Japanese women, and postmenopausal Japanese women with osteopenia" measured-compound="Ibandronate" parameterization="mechanistic" topology="retention"></div>

## Citation
Nakai K, Tobinai M, Hashimoto J, Iida S, Kawanishi T. The optimal oral dose selection of ibandronate in Japanese patients with osteoporosis based on pharmacokinetic and pharmacodynamic properties. European journal of drug metabolism and pharmacokinetics 41(2):139–147 (2016).
  ·  DOI: [10.1007/s13318-014-0242-5](https://doi.org/10.1007/s13318-014-0242-5)

## Population and dosing

**Population:** Japanese patients with osteoporosis, healthy postmenopausal Japanese women, and postmenopausal Japanese women with osteopenia · condition healthy · age group adult.

**Dosing:** 0.25, 0.5, 1, 2, 20, 50, 100, 150 mg, mixed, multiple, every 720 h.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUCinf (ng h/mL) | AUC∞ | 31.2 | ng h/mL |
| C max or C 5min (ng/mL) | Cmax | 9.02 | ng/mL |
| T max (h) | tmax | 0.980 | h |
| t 1/2 (h) | t1/2z | 14.4 | h |
| CLr (mL/min) | CLR | 59.4 | mL/min |
| Fe (%) | fe | 0.542 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 9.02e-06, model 0.997); the model does not reproduce the paper's time of the peak (tmax) (paper 0.98, model 0.144) (+1 more).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — ibandronate: AUC∞ 31.2 ng h/mL, Cmax 9.02 ng/mL, tmax 0.98 h, t1/2z 14.4 h, CLR 59.4 mL/min, fe 0.542 %.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCinf (ng h/mL) | `Q17` · AUC∞ | 31.2 | ng h/mL | 0.1123 | kg*s/m3 | (h·ng)/ml | exact (1) | Tab2:row2:col5 |
| C max or C 5min (ng/mL) | `Q32` · Cmax | 9.02 | ng/mL | 9.02e-06 | kg/m3 | ng/ml | llm (0.6) | Tab2:row2:col6 |
| T max (h) | `Q56` · tmax | 0.980 | h | 3528 | s | h | space_fold (0.95) | Tab2:row2:col7 |
| t 1/2 (h) | `Q57` · t1/2z | 14.4 | h | 5.184e+04 | s | h | half_life_rule (0.95) | Tab2:row2:col8 |
| CLr (mL/min) | `Q26` · CLR | 59.4 | mL/min | 9.9e-07 | m3/s | ml/min | exact (1) | Tab2:row2:col10 |
| Fe (%) | `Q44` · fe | 0.542 | % | 0.00542 |  | % | exact (1) | Tab2:row2:col11 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t 1/2 (h) (Q57)

**Interpretation flags:**
- table representations disagree for 'Administration / Number'; source reconciliation required
- table representations disagree for 'AUCinf (ng h/mL)'; source reconciliation required
- table representations disagree for 'C max or C 5min (ng/mL)'; source reconciliation required
- table representations disagree for 'T max (h)'; source reconciliation required
- table representations disagree for 't 1/2 (h)'; source reconciliation required
- table representations disagree for 'CLr (mL/min)'; source reconciliation required
- table representations disagree for 'Fe (%)'; source reconciliation required
- dropped unlinked row (NIL): 'Administration / Number' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ibandronate
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'healthy postmenopausal women' subgroup of Nakai_2016 (paper reports 4 populations: healthy postmenopausal women, postmenopausal healthy women + postmenopausal women with osteoporosis, postmenopausal women with osteopenia, postmenopausal women with osteoporosis)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: ragged_grid
- transposed table Tab2: logical view retains original source coordinates
- table Tab2: representations disagree; selected evidence retained, not merged
- transposed table Nakai_2016_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab2:row2:col5'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col10'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab2:row2:col6'] |
| C5_dimension_Q44 | pass | dimensionless |  | ['Tab2:row2:col11'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab2:row2:col7'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row2:col8'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Ibandronate) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.02e-06 | 0.9969 | 1.105e+05 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.43e-05 | 0.9969 | 4.103e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.72e-05 | 0.9969 | 2.112e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.6e-05 | 0.9969 | 1.159e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.29e-05 | 0.9969 | 7.728e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.66e-05 | 0.9969 | 6.006e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.65e-05 | 0.9969 | 2.731e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 3.12e-05 | 0.9969 | 3.195e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.6e-05 | 0.9969 | 1.038e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000111 | 0.9969 | 8981 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000272 | 0.9969 | 3665 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000254 | 0.9969 | 3925 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.05e-05 | 0.9969 | 1.648e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000117 | 0.9969 | 8521 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000186 | 0.9969 | 5360 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000388 | 0.9969 | 2569 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped |  | 0.9969 |  | non-numeric value |
| T1_cmax | reference | skipped | 0.75 | 0.9969 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.19 | 0.9969 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 14.4 | 14.4 | 1 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 20.4 | 14.4 | 0.7059 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 21.5 | 14.4 | 0.6698 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 23 | 14.4 | 0.6261 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 9.59 | 14.4 | 1.502 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 21.3 | 14.4 | 0.6761 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 16 | 14.4 | 0.9 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 19.6 | 14.4 | 0.7347 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 15.9 | 14.4 | 0.9057 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 16.1 | 14.4 | 0.8944 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 17 | 14.4 | 0.8471 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.9 | 14.4 | 0.7619 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.7 | 14.4 | 0.77 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.5 | 14.4 | 0.7784 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.5 | 14.4 | 0.7784 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.9 | 14.4 | 0.7619 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 14.4 |  | non-numeric value |
| T1_tmax | reference | fail | 0.98 | 0.1443 | 0.1472 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.1443 | 0.1443 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.19 | 0.1443 | 0.1213 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.19 | 0.1443 | 0.1213 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.1443 | 0.1924 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.917 | 0.1443 | 0.1573 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.837 | 0.1443 | 0.1724 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.1443 | 0.1924 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.917 | 0.1443 | 0.1573 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.1443 | 0.1924 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.917 | 0.1443 | 0.1573 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.08 | 0.1443 | 0.1336 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_modelica.zip" download>Ibandronate_Nakai2016_healthy_postmenopausal_women_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_fmi.zip" download>Ibandronate_Nakai2016_healthy_postmenopausal_women_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_matlab.zip" download>Ibandronate_Nakai2016_healthy_postmenopausal_women_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_sbml.zip" download>Ibandronate_Nakai2016_healthy_postmenopausal_women_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_cellml.zip" download>Ibandronate_Nakai2016_healthy_postmenopausal_women_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3192 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-07 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 5.184e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Nakai K, Tobinai M, Hashimoto J, Iida S, Kawanishi T. The optimal oral dose selection of ibandronate in Japanese patients with osteoporosis based on pharmacokinetic and pharmacodynamic properties. European journal of drug metabolism and pharmacokinetics 41(2):139–147 (2016). [doi:10.1007/s13318-014-0242-5](https://doi.org/10.1007/s13318-014-0242-5)

**This record:** Pharmacolibrary, model `Ibandronate_Nakai2016_healthy_postmenopausal_women`. <https://pharmacolibrary.github.io/#/drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women>

```bibtex
@misc{pharmacolibrary_IbandronateNakai2016healthypostmenopausalwomen,
  title  = {{Pharmacolibrary model Ibandronate_Nakai2016_healthy_postmenopausal_women}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women},
  note   = {Parameters from doi:10.1007/s13318-014-0242-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women/Ibandronate_Nakai2016_healthy_postmenopausal_women_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Ibandronate_Nakai2016_healthy_postmenopausal_women_params.json` · controls `Ibandronate_Nakai2016_healthy_postmenopausal_women_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibandronate%5D%20Ibandronate_Nakai2016_healthy_postmenopausal_women&body=Drug%3A%20ibandronate%0ARecord%3A%20Ibandronate_Nakai2016_healthy_postmenopausal_women%0APaper%3A%20Nakai_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 23:27 UTC</sub>
