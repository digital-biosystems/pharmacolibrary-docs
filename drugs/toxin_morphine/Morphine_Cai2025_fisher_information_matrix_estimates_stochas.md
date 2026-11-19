<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Morphine&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/&quot;},{&quot;label&quot;:&quot;Cai_2025 \u00b7 fisher_information_matrix_estimates_stochastic&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Garrett1979v2_reference&quot;,&quot;label&quot;:&quot;Garrett_1979_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Garrett1979v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Glave2023_m3g&quot;,&quot;label&quot;:&quot;G\u00fclave_2023_m3g&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Glave2023_m3g.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Got1994_reference&quot;,&quot;label&quot;:&quot;Got_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Got1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_iv_morphine_2_mg_2_h&quot;,&quot;label&quot;:&quot;Morse_2022_iv_morphine_2_mg_2_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_iv_morphine_2_mg_2_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Morse2022_po_morphine_10_mg_4_h&quot;,&quot;label&quot;:&quot;Morse_2022_po_morphine_10_mg_4_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Morse2022_po_morphine_10_mg_4_h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Verscheijden2021_morphine&quot;,&quot;label&quot;:&quot;Verscheijden_2021_morphine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Verscheijden2021_morphine.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Yalcin2022_mulla_et_al_37_uk&quot;,&quot;label&quot;:&quot;Yalcin_2022_mulla_et_al_37_uk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_morphine/Morphine_Yalcin2022_mulla_et_al_37_uk.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Morphine — `Morphine_Cai2025_fisher_information_matrix_estimates_stochas`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance; v1, V3, k12, kcomp, k31 and CLnorm have no unit.

<div class="pk-model-meta" hidden drug="Morphine" model-id="Morphine_Cai2025_fisher_information_matrix_estimates_stochas" status="needs_review" stale="false" population="virtual pediatric subjects (final sim) from adult diamorphine PK data; children with breakthrough pain" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Cai L, Zhai J, Ji B, Han F, Niu T, Wang L et al. Intranasal diamorphine population pharmacokinetics modeling and simulation in pediatric breakthrough pain. CPT: pharmacometrics & systems pharmacology 14(3):435-447 (2025).
  ·  DOI: [10.1002/psp4.13186](https://doi.org/10.1002/psp4.13186)

## Population and dosing

**Population:** virtual pediatric subjects (final sim) from adult diamorphine PK data; children with breakthrough pain · condition healthy adults (modeling); pediatric breakthrough pain (simulation) · age group mixed · n = 385 concentration measurements from adults; unknown number of subjects.

**Dosing:** 7, 21 mg, intranasal, multiple.

**Dosed compound ≠ measured compound:** dosed diamorphine (diacetylmorphine/heroin), measured morphine.

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| K_a [h−1] per 70 kg] | kabs | 3.04 | h−1 | 12.9 |
| F_% [per 70 kg] | Fab | 0.519 |  | 13.6 |
| V_1 [L/per 70 kg] (=V_2) | V1 | 8.21 | =V_2 | 28.9 |
| V_3 [L/per 70 kg] | V3 | 32.5 |  | 13.5 |
| K_12 [h−1/per 70 kg] | k12 | 103 |  | 23.5 |
| K_23 [h−1/per 70 kg] | kcomp | 106 |  | 23.3 |
| K_3p [h−1/per 70 kg] | k31 | 24.2 |  | 14.1 |
| K_p3 [h−1/per 70 kg] | Kp | 2.69 |  | 14.3 |
| CL [L/h/per 70 kg] | CLnorm | 132 |  | 19.0 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.074). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance; v1, V3, k12, kcomp, k31 and CLnorm have no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V1), so that value has no SI equivalent. Extracted — morphine: kabs 3.04 h−1, Fab 0.519, V1 8.21 =V_2, V3 32.5, k12 103, kcomp 106, k31 24.2, Kp 2.69, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has diamorphine (diacetylmorphine/heroin), the second reading diamorphine; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| K_a [h−1] per 70 kg] | `Q49` · kabs | 3.04 | h−1 | 0.0008444 | 1/s | 1/h | 12.9 | llm_confirmed (0.6) | Cai_2025_table_2:row0:col1 |
| F_% [per 70 kg] | `Q40` · Fab | 0.519 |  | 0.519 |  |  | 13.6 | llm (0.6) | Cai_2025_table_2:row1:col1 |
| V_1 [L/per 70 kg] (=V_2) | `Q63` · V1 | 8.21 | =V_2 |  |  | =·v_2 | 28.9 | llm_confirmed (0.6) | Cai_2025_table_2:row2:col1 |
| V_3 [L/per 70 kg] | `Q77` · V3 | 32.5 |  |  |  |  | 13.5 | llm_confirmed (0.6) | Cai_2025_table_2:row3:col1 |
| K_12 [h−1/per 70 kg] | `Q301` · k12 | 103 |  |  |  |  | 23.5 | llm_confirmed (0.6) | Cai_2025_table_2:row4:col1 |
| K_23 [h−1/per 70 kg] | `Q48` · kcomp | 106 |  |  |  |  | 23.3 | llm_confirmed (0.6) | Cai_2025_table_2:row5:col1 |
| K_3p [h−1/per 70 kg] | `Q304` · k31 | 24.2 |  |  |  |  | 14.1 | llm (0.6) | Cai_2025_table_2:row6:col1 |
| K_p3 [h−1/per 70 kg] | `Q410` · Kp | 2.69 |  |  |  |  | 14.3 | llm (0.6) | Cai_2025_table_2:row7:col1 |
| CL [L/h/per 70 kg] | `Q354` · CLnorm | 132 |  |  |  |  | 19.0 | llm_corrected (0.6) | Cai_2025_table_2:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '=V_2' (V1)
- routed 'corr_V_1–K_a' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at "Needs review" — not promoted
- population split: 'fisher information matrix estimates (stochastic approximation) estimation (rse%)' subgroup of Cai_2025 (paper reports 2 populations: fisher information matrix estimates (stochastic approximation) estimation (rse%), weighted average fold errors)
- row roles (LLM): model_class=compartmental; 0/20 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'diamorphine (heroin/DIAM)' — its concentrations stay mass-only
- molar mass: none found for '6-monoacetylmorphine (MAM)' — its concentrations stay mass-only
- molar mass: none found for 'morphine (MOR)' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Cai_2025_table_2: multiple_interval_summaries
- table Cai_2025_table_3: unparsed_numeric_cell
- transposed table Cai_2025_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (27 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.074 (2/27 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` |  | 0.55647293597588132 | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['diamorphine (heroin/diam)', '6-monoacetylmorphine (mam)', 'first-order metabolic conversion (esterase hydrolysis)'], ['6-monoacetylmorphine (mam)', 'morphine (mor)', 'first-order metabolic conversion (esterase hydrolysis)']] | [['diamorphine', '6-monoacetylmorphine', 'metabolic conversion'], ['6-monoacetylmorphine', 'morphine', 'metabolic conversion']] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[auc]` |  | 26.008600000000001 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl [l/h/per 70 kg]].parameter_id` | Q354 | Q375 | mismatch |
| `gpt-oss:120b` | `parameters[cl [l/h/per 70 kg]].rse_percent` | 19.0 |  | mismatch |
| `gpt-oss:120b` | `parameters[cl [l/h/per 70 kg]].value` | 132 | 139 | mismatch |
| `gpt-oss:120b` | `parameters[cmax]` |  | 57.390599999999999 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f_% [per 70 kg]].rse_percent` | 13.6 |  | mismatch |
| `gpt-oss:120b` | `parameters[f_% [per 70 kg]].value` | 0.519 | 0.532 | mismatch |
| `gpt-oss:120b` | `parameters[k_12 [h-1/per 70 kg]].rse_percent` | 23.5 |  | mismatch |
| `gpt-oss:120b` | `parameters[k_23 [h-1/per 70 kg]].rse_percent` | 23.3 |  | mismatch |
| `gpt-oss:120b` | `parameters[k_23 [h-1/per 70 kg]].value` | 106 | 100 | mismatch |
| `gpt-oss:120b` | `parameters[k_3p [h-1/per 70 kg]].parameter_id` | Q304 | Q47 | mismatch |
| `gpt-oss:120b` | `parameters[k_3p [h-1/per 70 kg]].rse_percent` | 14.1 |  | mismatch |
| `gpt-oss:120b` | `parameters[k_3p [h-1/per 70 kg]].value` | 24.2 | 23.9 | mismatch |
| `gpt-oss:120b` | `parameters[k_a [h-1] per 70 kg]].rse_percent` | 12.9 |  | mismatch |
| `gpt-oss:120b` | `parameters[k_a [h-1] per 70 kg]].value` | 3.04 | 3.70 | mismatch |
| `gpt-oss:120b` | `parameters[k_p3 [h-1/per 70 kg]].rse_percent` | 14.3 |  | mismatch |
| `gpt-oss:120b` | `parameters[k_p3 [h-1/per 70 kg]].value` | 2.69 | 3.07 | mismatch |
| `gpt-oss:120b` | `parameters[v_1 [l/per 70 kg]].rse_percent` | 28.9 |  | mismatch |
| `gpt-oss:120b` | `parameters[v_1 [l/per 70 kg]].value` | 8.21 | 9.43 | mismatch |
| `gpt-oss:120b` | `parameters[v_3 [l/per 70 kg]].rse_percent` | 13.5 |  | mismatch |
| `gpt-oss:120b` | `parameters[v_3 [l/per 70 kg]].value` | 32.5 | 34.3 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | diamorphine (diacetylmorphine/heroin) | diamorphine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Cai_2025_table_2:row0:col1'] |
| C5_unit_missing_Q301 | fail | 1 / [time] |  | ['Cai_2025_table_2:row4:col1'] |
| C5_unit_missing_Q304 | fail | 1 / [time] |  | ['Cai_2025_table_2:row6:col1'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] |  | ['Cai_2025_table_2:row8:col1'] |
| C5_unit_missing_Q48 | fail | 1 / [time] |  | ['Cai_2025_table_2:row5:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | =V_2 | ['Cai_2025_table_2:row2:col1'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['Cai_2025_table_2:row3:col1'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Cai2025_fisher_information_matrix_estimates_stochas&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Cai2025_fisher_information_matrix_estimates_stochas%0APaper%3A%20Cai_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_morphine/Morphine_Cai2025_fisher_information_matrix_estimates_stochas%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:59 UTC</sub>
