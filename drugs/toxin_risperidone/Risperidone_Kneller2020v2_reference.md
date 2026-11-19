<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Kneller_2020_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Kneller2020v2_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 19.4, model 1.25); the covariate scenarios were not simulated.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Kneller2020v2_reference" status="needs_review" stale="false" population="geriatric inpatients aged 65+ years" measured-compound="Risperidone" parameterization="mechanistic" topology="retention"></div>

## Citation
Kneller LA, Hempel G. Modelling Age-Related Changes in the Pharmacokinetics of Risperidone and 9-Hydroxyrisperidone in Different CYP2D6 Phenotypes Using a Physiologically Based Pharmacokinetic Approach. Pharmaceutical research 37(6):110 (2020).
  ·  DOI: [10.1007/s11095-020-02843-7](https://doi.org/10.1007/s11095-020-02843-7)

## Population and dosing

**Population:** geriatric inpatients aged 65+ years · condition naturalistic conditions (therapeutic use) · age group elderly · n = 17.

**Dosing:** 0.5, 1 mg, other, multiple, every 12 h.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (μg*h/l) | AUC | 1.39 | μg*h/l |
| im | im | 1.00 |  |
| pm | pm | 0.74 |  |
| um | um | 1.04 |  |
| Cmax (μg/L) | Cmax | 1.36 | μg/L |
| tmax (h) | tmax | 1.00 | h |
| t1/2 (h) | t1/2z | 1.03 | h |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 19.4, model 1.25); the covariate scenarios were not simulated.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — risperidone: AUC 1.39 μg*h/l, Cmax 1.36 μg/L, tmax 1 h, t1/2z 1.03 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (μg*h/l) | `Q88` · AUC | 1.39 | μg*h/l | 0.005004 | kg*s/m3 | (h·µg)/l | exact (1) | Kneller_2020_2_table_3:row1:col2, Kneller_2020_2_table_3:row1:col3, Kneller_2020_2_table_3:row1:col4, Kneller_2020_2_table_3:row1:col5, Kneller_2020_2_table_3:row1:col6, Kneller_2020_2_table_3:row1:col7 |
| im | `Q900` · im | 1.00 |  |  |  |  |  | Kneller_2020_2_table_3:row2:col2, Kneller_2020_2_table_3:row2:col3, Kneller_2020_2_table_3:row2:col4, Kneller_2020_2_table_3:row2:col5, Kneller_2020_2_table_3:row2:col6, Kneller_2020_2_table_3:row6:col2, Kneller_2020_2_table_3:row6:col3, Kneller_2020_2_table_3:row6:col4, Kneller_2020_2_table_3:row6:col5, Kneller_2020_2_table_3:row6:col6, Kneller_2020_2_table_3:row10:col2, Kneller_2020_2_table_3:row10:col3, Kneller_2020_2_table_3:row10:col4, Kneller_2020_2_table_3:row10:col5, Kneller_2020_2_table_3:row10:col6, Kneller_2020_2_table_3:row14:col2, Kneller_2020_2_table_3:row14:col3, Kneller_2020_2_table_3:row14:col4, Kneller_2020_2_table_3:row14:col5, Kneller_2020_2_table_3:row14:col6 |
| pm | `Q900` · pm | 0.74 |  |  |  |  |  | Kneller_2020_2_table_3:row3:col2, Kneller_2020_2_table_3:row3:col3, Kneller_2020_2_table_3:row3:col4, Kneller_2020_2_table_3:row3:col5, Kneller_2020_2_table_3:row3:col6, Kneller_2020_2_table_3:row7:col2, Kneller_2020_2_table_3:row7:col3, Kneller_2020_2_table_3:row7:col4, Kneller_2020_2_table_3:row7:col5, Kneller_2020_2_table_3:row7:col6, Kneller_2020_2_table_3:row11:col2, Kneller_2020_2_table_3:row11:col3, Kneller_2020_2_table_3:row11:col4, Kneller_2020_2_table_3:row11:col5, Kneller_2020_2_table_3:row11:col6, Kneller_2020_2_table_3:row15:col2, Kneller_2020_2_table_3:row15:col3, Kneller_2020_2_table_3:row15:col4, Kneller_2020_2_table_3:row15:col5, Kneller_2020_2_table_3:row15:col6 |
| um | `Q900` · um | 1.04 |  |  |  |  |  | Kneller_2020_2_table_3:row4:col2, Kneller_2020_2_table_3:row4:col3, Kneller_2020_2_table_3:row4:col4, Kneller_2020_2_table_3:row4:col5, Kneller_2020_2_table_3:row4:col6, Kneller_2020_2_table_3:row8:col2, Kneller_2020_2_table_3:row8:col3, Kneller_2020_2_table_3:row8:col4, Kneller_2020_2_table_3:row8:col5, Kneller_2020_2_table_3:row8:col6, Kneller_2020_2_table_3:row12:col2, Kneller_2020_2_table_3:row12:col3, Kneller_2020_2_table_3:row12:col4, Kneller_2020_2_table_3:row12:col5, Kneller_2020_2_table_3:row12:col6, Kneller_2020_2_table_3:row16:col2, Kneller_2020_2_table_3:row16:col3, Kneller_2020_2_table_3:row16:col4, Kneller_2020_2_table_3:row16:col5, Kneller_2020_2_table_3:row16:col6 |
| Cmax (μg/L) | `Q32` · Cmax | 1.36 | μg/L | 1.36e-06 | kg/m3 | µg/l | exact (1) | Kneller_2020_2_table_3:row5:col2, Kneller_2020_2_table_3:row5:col3, Kneller_2020_2_table_3:row5:col4, Kneller_2020_2_table_3:row5:col5, Kneller_2020_2_table_3:row5:col6, Kneller_2020_2_table_3:row5:col7 |
| tmax (h) | `Q56` · tmax | 1.00 | h | 3600 | s | h | exact (1) | Kneller_2020_2_table_3:row9:col2, Kneller_2020_2_table_3:row9:col3, Kneller_2020_2_table_3:row9:col4, Kneller_2020_2_table_3:row9:col5, Kneller_2020_2_table_3:row9:col6, Kneller_2020_2_table_3:row9:col7 |
| t1/2 (h) | `Q57` · t1/2z | 1.03 | h | 3708 | s | h | half_life_rule (0.95) | Kneller_2020_2_table_3:row13:col2, Kneller_2020_2_table_3:row13:col3, Kneller_2020_2_table_3:row13:col4, Kneller_2020_2_table_3:row13:col5, Kneller_2020_2_table_3:row13:col6, Kneller_2020_2_table_3:row13:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / t1/2 (h) (Q57)

**Interpretation flags:**
- covariate level 'IM' → Q900:im = 1.00 (linear_fractional on the model)
- covariate level 'PM' → Q900:pm = 0.74 (linear_fractional on the model)
- covariate level 'UM' → Q900:um = 1.04 (linear_fractional on the model)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Risperidone
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- pharmacogenetic covariate 'im' (im) — PGx domain
- pharmacogenetic covariate 'pm' (pm) — PGx domain
- pharmacogenetic covariate 'um' (um) — PGx domain
- row roles: 7 per-group rows of none summary_statistic but 4 reference group(s) — kept as printed
- row roles (LLM): model_class=pbpk; 7/7 row label(s) assigned, 0 linked by role
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3
- table Kneller_2020_2_table_3: unknown_column_role
- table Kneller_2020_2_table_3: ragged_grid

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kneller_2020_2_table_3:row5:col2', 'Kneller_2020_2_table_3:row5:col3', 'Kneller_2020_2_table_3:row5:col4', 'Kneller_2020_2_table_3:row5:col5', 'Kneller_2020_2_table_3:row5:col6', 'Kneller_2020_2_table_3:row5:col7'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kneller_2020_2_table_3:row9:col2', 'Kneller_2020_2_table_3:row9:col3', 'Kneller_2020_2_table_3:row9:col4', 'Kneller_2020_2_table_3:row9:col5', 'Kneller_2020_2_table_3:row9:col6', 'Kneller_2020_2_table_3:row9:col7'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kneller_2020_2_table_3:row13:col2', 'Kneller_2020_2_table_3:row13:col3', 'Kneller_2020_2_table_3:row13:col4', 'Kneller_2020_2_table_3:row13:col5', 'Kneller_2020_2_table_3:row13:col6', 'Kneller_2020_2_table_3:row13:col7'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kneller_2020_2_table_3:row1:col2', 'Kneller_2020_2_table_3:row1:col3', 'Kneller_2020_2_table_3:row1:col4', 'Kneller_2020_2_table_3:row1:col5', 'Kneller_2020_2_table_3:row1:col6', 'Kneller_2020_2_table_3:row1:col7'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | retainedFraction (measured=Risperidone) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 29 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 37 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 44 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 24 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 36 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 37 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 35 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 35 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 7.54 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 18.7 | 0.9895 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.9895 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 19.4 | 1.245 | 0.0642 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_modelica.zip" download>Risperidone_Kneller2020v2_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_fmi.zip" download>Risperidone_Kneller2020v2_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_matlab.zip" download>Risperidone_Kneller2020v2_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_sbml.zip" download>Risperidone_Kneller2020v2_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_cellml.zip" download>Risperidone_Kneller2020v2_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4105 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-07 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 3708 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kneller LA, Hempel G. Modelling Age-Related Changes in the Pharmacokinetics of Risperidone and 9-Hydroxyrisperidone in Different CYP2D6 Phenotypes Using a Physiologically Based Pharmacokinetic Approach. Pharmaceutical research 37(6):110 (2020). [doi:10.1007/s11095-020-02843-7](https://doi.org/10.1007/s11095-020-02843-7)

**This record:** Pharmacolibrary, model `Risperidone_Kneller2020v2_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference>

```bibtex
@misc{pharmacolibrary_RisperidoneKneller2020v2reference,
  title  = {{Pharmacolibrary model Risperidone_Kneller2020v2_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference},
  note   = {Parameters from doi:10.1007/s11095-020-02843-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference/Risperidone_Kneller2020v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Risperidone_Kneller2020v2_reference_params.json` · controls `Risperidone_Kneller2020v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Kneller2020v2_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Kneller2020v2_reference%0APaper%3A%20Kneller_2020_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
