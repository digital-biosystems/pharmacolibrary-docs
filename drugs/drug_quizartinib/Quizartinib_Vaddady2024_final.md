<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Vaddady_2024 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final&quot;,&quot;label&quot;:&quot;Vaddady_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final_final_quizartinib_model&quot;,&quot;label&quot;:&quot;Vaddady_2024_final_final_quizartinib_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kang_2021_QTcF&quot;,&quot;label&quot;:&quot;Kang_2021 \u00b7 QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/pd_Kang_2021_QTcF.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Vaddady2024_final`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> The record was rejected because the model structure lacked a metabolite compartment and parameter V2 was missing.

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Vaddady2024_final" status="rejected" stale="false" population="newly diagnosed and relapsed/refractory FLT3-ITD-positive AML patients and non-AML subjects" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Vaddady P, Glatard A, Smania G, Nakayama S, Inoue H, Kurumaddali A et al. Population pharmacokinetic analysis of quizartinib in patients with newly diagnosed FLT3-internal-tandem-duplication-positive acute myeloid leukemia. Clinical and translational science 17(12):e70074 (2024).
  ·  DOI: [10.1111/cts.70074](https://doi.org/10.1111/cts.70074)

## Population and dosing

**Population:** newly diagnosed and relapsed/refractory FLT3-ITD-positive AML patients and non-AML subjects · condition acute myeloid leukemia.

**Dosing:** 20, 90 mg/day, oral.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_quizartinib/Quizartinib_Vaddady2024_final/Quizartinib_Vaddady2024_final.svg" alt="Quizartinib_Vaddady2024_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLquiz | CL | 4.61 | L/h |
| V c,quiz | V1 | 8.93 | L |
| Q 1,quiz | Q | 68.5 | L/h |
| V p1,quiz | V2 | 3.76 | L |
| Fractional change in CLquiz with strong CYP3A inhibitors | CL_ratio | 0.843 |  |
| Fractional change in F rel with strong CYP3A inhibitors | Frel | 0.488 |  |
| theta_frel_category | theta_frel_category | 0.298 |  |
| theta_q49_category | theta_q49_category | 0.715 |  |
| theta_v2_age | theta_v2_age | 0.272 |  |
| theta_cl_race | theta_cl_race | -0.249 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the model structure lacked a metabolite compartment and parameter V2 was missing.**

Although the drug is defined as a parent with metabolite AC886, the model structure only contains compartments for the parent, omitting the metabolite. The parameter coverage check found that V2 (3.76 L) was not included in the model, while other parameters like CL (4.61 L/h) were present. A second reader disagreed on whether the age covariate applies to V1 or V2. Extracted — quizartinib: CL 4.61 L/h, V1 8.93 L, Q 68.5 L/h, V2 3.76 L, CL_ratio 0.843, Frel 0.488.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_v2_age: this record has 0.272, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLquiz | `Q22` · CL | 4.61 | L/h | 1.281e-06 | m3/s | L/h | llm (0.6) | cts70074-tbl-0003:row2:col7, cts70074-tbl-0003:row2:col8 |
| V c,quiz | `Q63` · V1 | 8.93 | L | 0.00893 | m3 | L | llm (0.6) | cts70074-tbl-0003:row3:col7, cts70074-tbl-0003:row3:col8 |
| Q 1,quiz | `Q30` · Q | 68.5 | L/h | 1.903e-05 | m3/s | L/h | exact (1) | cts70074-tbl-0003:row4:col7, cts70074-tbl-0003:row4:col8 |
| V p1,quiz | `Q64` · V2 | 3.76 | L | 0.00376 | m3 | L | exact (1) | cts70074-tbl-0003:row5:col7, cts70074-tbl-0003:row5:col8 |
| Fractional change in CLquiz with strong CYP3A inhibitors | `Q31` · CL_ratio | 0.843 |  |  |  |  | llm (0.6) | cts70074-tbl-0003:row11:col7, cts70074-tbl-0003:row11:col8 |
| Fractional change in F rel with strong CYP3A inhibitors | `Q87` · Frel | 0.488 |  |  |  |  | llm_confirmed (0.6) | cts70074-tbl-0003:row12:col7, cts70074-tbl-0003:row12:col8 |
| theta_frel_category | `Q900` · theta_frel_category | 0.298 |  |  |  |  |  | cts70074-tbl-0003:row13:col7, cts70074-tbl-0003:row13:col8 |
| theta_q49_category | `Q900` · theta_q49_category | 0.715 |  |  |  |  |  | cts70074-tbl-0003:row15:col7, cts70074-tbl-0003:row15:col8 |
| theta_v2_age | `Q900` · theta_v2_age | 0.272 |  |  |  |  |  | cts70074-tbl-0003:row16:col7, cts70074-tbl-0003:row16:col8 |
| theta_cl_race | `Q900` · theta_cl_race | -0.249 |  |  |  |  |  | cts70074-tbl-0003:row17:col7, cts70074-tbl-0003:row17:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q87 ('Fractional change in F rel with moderate CYP3A inhibitors', value '2.79') — already have one for this compound
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row33:col7'])
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row34:col7'])
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLquiz' → L/h (from the popPK convention: 'No unit is stated for this parameter. Clearance is conventionally reported in L/h; the estimate of 4.61 is consistent wi')
- implicit units: 'V c,quiz' → L (from the popPK convention: 'No unit is stated for this parameter. Compartment volumes are conventionally reported in L; the estimate of 8.93 is cons')
- implicit units: 'Q 1,quiz' → L/h (from the popPK convention: 'No unit is stated for this parameter. Intercompartmental clearances are conventionally reported in L/h; the estimate of ')
- implicit units: 'V p1,quiz' → L (from the popPK convention: 'No unit is stated for this parameter. Compartment volumes are conventionally reported in L; the estimate of 3.76 is cons')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- model equation 'COVEffWT = (WT/75)^θ' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model-stage split: 'final ac886 model' is the final model of Vaddady_2024 (paper reports 2 stages: final ac886 model, final quizartinib model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 25 linked by role; re-tagged quizartinib→parent ×74, AC886→parent ×37
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell cts70074-tbl-0003:row2:col5 = 'CLAC886'
- unparsed cell cts70074-tbl-0003:row3:col5 = 'V c,AC886'
- unparsed cell cts70074-tbl-0003:row4:col5 = 'V p,AC886'
- unparsed cell cts70074-tbl-0003:row5:col5 = 'Q AC886'
- unparsed cell cts70074-tbl-0003:row11:col5 = 'Fractional change in CLAC886 for non‐AML subjects'
- unparsed cell cts70074-tbl-0003:row12:col5 = 'Fractional change in CLAC886 for Black race'
- unparsed cell cts70074-tbl-0003:row13:col5 = 'Fractional change in CLAC886 with strong CYP3A inhibitors'
- unparsed cell cts70074-tbl-0003:row14:col5 = 'Fractional change in V c,AC886 with strong CYP3A inhibitors'
- unparsed cell cts70074-tbl-0003:row23:col5 = 'IIV CLAC886 AML patients'
- unparsed cell cts70074-tbl-0003:row24:col5 = 'IIV CLAC886 non‐AML subjects'
- unparsed cell cts70074-tbl-0003:row25:col5 = 'IIV V c,AC886'
- LLM selected parameter table(s) 3
- captured model equation COVEffWT = (WT/75)^θ

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.75 (15/20 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_v2_age]` | 0.272 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v_age]` |  | 0.272 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c,quiz].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[v c,quiz].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[v p1,quiz].covariate_forms` | ['linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts70074-tbl-0003:row2:col7', 'cts70074-tbl-0003:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts70074-tbl-0003:row4:col7', 'cts70074-tbl-0003:row4:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cts70074-tbl-0003:row3:col7', 'cts70074-tbl-0003:row3:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts70074-tbl-0003:row5:col7', 'cts70074-tbl-0003:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.61 | ['cts70074-tbl-0003:row2:col7', 'cts70074-tbl-0003:row2:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.61 L/h | ['cts70074-tbl-0003:row2:col7', 'cts70074-tbl-0003:row2:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.93 L | ['cts70074-tbl-0003:row3:col7', 'cts70074-tbl-0003:row3:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.76 L | ['cts70074-tbl-0003:row5:col7', 'cts70074-tbl-0003:row5:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | fail | Metabolite_C (measured=quizartinib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 4 scholar param(s) emitted or defaulted | 3 covered |  | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check |  | fail | second reader agrees | verdict disputed, agreement 0.75, 0 of 1 reader(s) agree | 0.75 | cross-check disputed by a second reader: verdict disputed, agreement 0.75, 0 of 1 reader(s) agree |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_quizartinib/Quizartinib_Vaddady2024_final/Quizartinib_Vaddady2024_final_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_quizartinib/Quizartinib_Vaddady2024_final/Quizartinib_Vaddady2024_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Quizartinib_Vaddady2024_final_params.json` · controls `Quizartinib_Vaddady2024_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquizartinib%5D%20Quizartinib_Vaddady2024_final&body=Drug%3A%20quizartinib%0ARecord%3A%20Quizartinib_Vaddady2024_final%0APaper%3A%20Vaddady_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quizartinib/Quizartinib_Vaddady2024_final%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 05:30 UTC</sub>
