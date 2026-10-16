<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Vaddady_2024 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final&quot;,&quot;label&quot;:&quot;Vaddady_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Quizartinib_Vaddady2024_final_final_quizartinib_model&quot;,&quot;label&quot;:&quot;Vaddady_2024_final_final_quizartinib_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kang_2021_QTcF&quot;,&quot;label&quot;:&quot;Kang_2021 \u00b7 QTcF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/pd_Kang_2021_QTcF.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Vaddady2024_final`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The covariate scenarios were not simulated; t3_output_variable (+2 more).**

The base model was simulated, not the covariate effects the record defines. Extracted — quizartinib: CL 4.61 L/h, V1 8.93 L, Q 68.5 L/h, V2 3.76 L, Frel 0.488.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_v2_age: this record has 0.272, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024)
  ·  DOI: [10.1111/cts.70074](https://doi.org/10.1111/cts.70074)

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Vaddady2024_final" status="rejected" stale="false" population="patients with FLT3-ITD-positive acute myeloid leukemia" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLquiz | `Q22` · CL | 4.61 | L/h | 1.2805555555555557e-06 | L/h | not captured | exact (1.0) | cts70074-tbl-0003:row2:col7, cts70074-tbl-0003:row2:col8 | — | not captured |
| V c,quiz | `Q63` · V1 | 8.93 | L | 0.00893 | L | not captured | llm (0.6) | cts70074-tbl-0003:row3:col7, cts70074-tbl-0003:row3:col8 | — | not captured |
| Q 1,quiz | `Q30` · Q | 68.5 | L/h | 1.902777777777778e-05 | L/h | not captured | exact (1.0) | cts70074-tbl-0003:row4:col7, cts70074-tbl-0003:row4:col8 | — | not captured |
| V p1,quiz | `Q64` · V2 | 3.76 | L | 0.00376 | L | not captured | exact (1.0) | cts70074-tbl-0003:row5:col7, cts70074-tbl-0003:row5:col8 | — | not captured |
| Fractional change in F rel with strong CYP3A inhibitors | `Q87` · Frel | 0.488 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cts70074-tbl-0003:row12:col7, cts70074-tbl-0003:row12:col8 | — | not captured |
| theta_v1_age | `Q900` · theta_v1_age | 0.272 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row16:col7, cts70074-tbl-0003:row16:col8 | — | not captured |
| theta_cl_race | `Q900` · theta_cl_race | -0.249 | not captured | not captured | not captured | not captured | not captured (not captured) | cts70074-tbl-0003:row17:col7, cts70074-tbl-0003:row17:col8 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'CLquiz'; source reconciliation required
- table representations disagree for 'V c,quiz'; source reconciliation required
- table representations disagree for 'Q 1,quiz'; source reconciliation required
- table representations disagree for 'V p1,quiz'; source reconciliation required
- table representations disagree for 'Fractional change in CLquiz with strong CYP3A inhibitors'; source reconciliation required
- table representations disagree for 'Fractional change in F rel with strong CYP3A inhibitors'; source reconciliation required
- table representations disagree for 'Fractional change in F rel with moderate CYP3A inhibitors'; source reconciliation required
- table representations disagree for 'Age effect on V p1,quiz'; source reconciliation required
- table representations disagree for 'Fractional change in CLquiz for Black race'; source reconciliation required
- table representations disagree for 'IIV Q 1,quiz'; source reconciliation required
- table representations disagree for 'IIV CLquiz'; source reconciliation required
- table representations disagree for 'IIV V c,quiz'; source reconciliation required
- table representations disagree for 'Additive RUV log scale AML patients'; source reconciliation required
- table representations disagree for 'Condition number'; source reconciliation required
- linked 'CLquiz' as 'CL' → Q22 (CL) for  — compound marker removed
- dropped duplicate Q22 ('Fractional change in CLquiz with strong CYP3A inhibitors', value '0.843') — already have one for this compound
- dropped duplicate Q87 ('Fractional change in F rel with moderate CYP3A inhibitors', value '2.79') — already have one for this compound
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['cts70074-tbl-0003:row34:col7'])
- implicit units: 'CLquiz' → L/h (from the popPK convention: 'The parameter is a clearance (CL). In population pharmacokinetic modeling, apparent clearance is conventionally expresse')
- implicit units: 'V c,quiz' → L (from the popPK convention: 'The parameter is a volume of distribution (Vc). In population pharmacokinetic modeling, volume of distribution is conven')
- implicit units: 'Q 1,quiz' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance (Q). In population pharmacokinetic modeling, intercompartmental clearan')
- implicit units: 'V p1,quiz' → L (from the popPK convention: 'The parameter is a volume of distribution (Vp). In population pharmacokinetic modeling, volume of distribution is conven')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- model-stage split: 'final ac886 model' is the final model of Vaddady_2024 (paper reports 2 stages: final ac886 model, final quizartinib model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 25 linked by role; re-tagged quizartinib→parent ×64, AC886→parent ×30
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table cts70074-tbl-0003: units_need_context
- table cts70074-tbl-0003: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.75 (15/20 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_v2_age]` | 0.272 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v_age]` | not captured | 0.272 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v c,quiz].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[v c,quiz].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[v p1,quiz].covariate_forms` | ['linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row2:col7', 'cts70074-tbl-0003:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70074-tbl-0003:row4:col7', 'cts70074-tbl-0003:row4:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70074-tbl-0003:row3:col7', 'cts70074-tbl-0003:row3:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70074-tbl-0003:row5:col7', 'cts70074-tbl-0003:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.61 | not captured | not captured | ['cts70074-tbl-0003:row2:col7', 'cts70074-tbl-0003:row2:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.61 L/h | not captured | not captured | ['cts70074-tbl-0003:row2:col7', 'cts70074-tbl-0003:row2:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.93 L | not captured | not captured | ['cts70074-tbl-0003:row3:col7', 'cts70074-tbl-0003:row3:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.76 L | not captured | not captured | ['cts70074-tbl-0003:row5:col7', 'cts70074-tbl-0003:row5:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | fail | Metabolite_C (measured=quizartinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_quizartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vaddady_2024` / `Vaddady_2024::final`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_quizartinib/models/modelica/Quizartinib_Vaddady2024_final.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_quizartinib/models/modelica/Quizartinib_Vaddady2024_final.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_quizartinib/models/modelica/Quizartinib_Vaddady2024_final.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_quizartinib/Quizartinib_Vaddady2024_final/Quizartinib_Vaddady2024_final_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_quizartinib/Quizartinib_Vaddady2024_final/Quizartinib_Vaddady2024_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Quizartinib_Vaddady2024_final_params.json` · controls `Quizartinib_Vaddady2024_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:46 UTC</sub>
