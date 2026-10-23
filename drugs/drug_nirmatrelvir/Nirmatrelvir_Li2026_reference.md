<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Nirmatrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/&quot;},{&quot;label&quot;:&quot;Li_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nirmatrelvir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zaryab2026_reference&quot;,&quot;label&quot;:&quot;Zaryab_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zaryab2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nirmatrelvir_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Nirmatrelvir_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nirmatrelvir/Nirmatrelvir_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nirmatrelvir — `Nirmatrelvir_Li2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's time of the peak (tmax); the model does not reproduce the paper's peak concentration (Cmax).

<div class="pk-model-meta" hidden drug="Nirmatrelvir" model-id="Nirmatrelvir_Li2026_reference" status="needs_review" stale="false" population="healthy Chinese adults" measured-compound="nirmatrelvir" parameterization="apparent" topology="1C"></div>

## Citation
Li N, Yu J, Wu J, Zhang J, Ma Y, Zhang C et al. Pharmacokinetics of Nirmatrelvir/Ritonavir after Multiple Administration in a Phase 1, Open-Label Study in Healthy Chinese Adults and Compared with Non-Chinese Participants. Clinical drug investigation 46(7):783-793 (2026).
  ·  DOI: [10.1007/s40261-026-01554-y](https://doi.org/10.1007/s40261-026-01554-y)

## Population and dosing

**Population:** healthy Chinese adults · condition healthy · age group adult · n = 14.

**Dosing:** 300 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed nirmatrelvir/ritonavir, measured nirmatrelvir.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference.svg" alt="Nirmatrelvir_Li2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC12, µg·h/mL | AUCSS | 19.66 | µg·h/mL |
| Cmax , µg/mL | Cmax | 3.082 | µg/mL |
| Aetau (mg) | Ae | 86.43 | mg |
| Aetau% | fe | 28.81 |  |
| CLr (L/h) | CLR | 4.397 | L/h |
| t½, h | t1/2z | 6.842 | h |
| CL/F, L/h | CL/F | 9.379 | L/h |
| Vz/F, L | V/F | 91.01 | L |
| Ka | kabs | 0.2 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax); the model does not reproduce the paper's peak concentration (Cmax).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUCSS, Cmax and Ae ), so that value has no SI equivalent. Extracted — nirmatrelvir: AUCSS 19.7 µg·h/mL, Cmax 3.08 µg/mL, Ae 86.4 mg, fe 28.8, CLR 4.4 L/h, t1/2z 6.84 h, CL/F 9.38 L/h, V/F 91 L, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nirmatrelvir/ritonavir, the second reading nirmatrelvir; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC12, µg·h/mL | `Q18` · AUCSS | 19.66 | µg·h/mL |  |  | (h·µg)/ml | llm (0.6) | Tab2:row8:col1, Tab2:row8:col2 |
| Cmax , µg/mL | `Q32` · Cmax | 3.082 | µg/mL |  |  | µg/ml | exact (1) | Tab2:row9:col1, Tab2:row9:col2 |
| Aetau (mg) | `Q91` · Ae | 86.43 | mg |  |  | mg | llm (0.6) | Tab2:row10:col1, Tab2:row25:col1 |
| Aetau% | `Q44` · fe | 28.81 |  |  |  |  | llm (0.6) | Tab2:row11:col1, Tab2:row26:col1, Tab2:footnote |
| CLr (L/h) | `Q26` · CLR | 4.397 | L/h | 1.221e-06 | m3/s | l/h | exact (1) | Tab2:row12:col1, Tab2:row27:col1 |
| t½, h | `Q57` · t1/2z | 6.842 | h | 2.463e+04 | s | h | llm (0.6) | Tab2:row19:col1, Tab2:row19:col2 |
| CL/F, L/h | `Q27` · CL/F | 9.379 | L/h | 2.605e-06 | m3/s | l/h | exact (1) | Tab2:row23:col1, Tab2:row23:col2 |
| Vz/F, L | `Q76` · V/F | 91.01 | L | 0.09101 | m3 | l | exact (1) | Tab2:row24:col1, Tab2:row24:col2 |
| Ka | `Q49` · kabs | 0.2 | h−1 | 5.556e-05 | 1/s | 1/h | review_gapfill (0.7) | Yao_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'After first dose on day 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2'])
- dropped duplicate Q18 ('AUCtau, µg·h/mL', value '32.01') — already have one for this compound
- dropped duplicate Q32 ('Cmax, µg/mL', value '4.500') — already have one for this compound
- dropped value-less row: 'Aetau'
- dropped value-less row: 'AUC12'
- dropped value-less row: 'AUCtau'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'CLr'
- dropped value-less row: 'CV'
- dropped value-less row: 'N'
- dropped value-less row: 'n'
- dropped value-less row: 'PK'
- dropped value-less row: 't½'
- dropped value-less row: 'tmax'
- dropped value-less row: 'Vz/F'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nirmatrelvir
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Yao_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['', '', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[auc12].parameter_id` | Q18 | Q19 | mismatch |
| `gpt-oss-120b` | `parameters[auctau]` |  | 32.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.2 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nirmatrelvir/ritonavir | nirmatrelvir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 6.842 | 6.726 | 0.983 | 0.25 | reported t½β |
| C5_dimension_Q18 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Tab2:row8:col1', 'Tab2:row8:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row12:col1', 'Tab2:row27:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab2:row23:col1', 'Tab2:row23:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Tab2:row9:col1', 'Tab2:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Yao_2025:review'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Tab2:row19:col1', 'Tab2:row19:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Tab2:row24:col1', 'Tab2:row24:col2'] |
| C5_dimension_Q91 | pass | [mass] |  |  |  | ['Tab2:row10:col1', 'Tab2:row25:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 9.38 L/h |  |  | ['Tab2:row23:col1', 'Tab2:row23:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 91 L |  |  | ['Tab2:row24:col1', 'Tab2:row24:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=nirmatrelvir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.001629 |  | non-numeric value |
| T1_cmax | reference | fail | 0.003082 | 0.001629 | 0.5285 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0045 | 0.001629 | 0.362 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000546 | 0.001629 | 2.983 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001109 | 0.001629 | 1.469 | µg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 39.5% higher | 0.001629 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.8% lower | 0.001629 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmin_ss | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  | 6.744 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 6.842 | 6.744 | 0.9857 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 5.471 | 6.744 | 1.233 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 6.951 |  | non-numeric value |
| T1_tmax | reference | fail | 1.76 | 6.951 | 3.949 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 6.951 | 3.475 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 6.951 | 3.475 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_modelica.zip" download>Nirmatrelvir_Li2026_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_fmi.zip" download>Nirmatrelvir_Li2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_matlab.zip" download>Nirmatrelvir_Li2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_matlab_simbio.zip" download>Nirmatrelvir_Li2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_sbml.zip" download>Nirmatrelvir_Li2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_cellml.zip" download>Nirmatrelvir_Li2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4995 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0003 | kg |
| input | model | `Cl` | 2.605e-06 | m3/s |
| input | model | `VdPerKg` | 0.0013 | m3/kg |
| input | model | `ka` | 5.556e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li N, Yu J, Wu J, Zhang J, Ma Y, Zhang C et al. Pharmacokinetics of Nirmatrelvir/Ritonavir after Multiple Administration in a Phase 1, Open-Label Study in Healthy Chinese Adults and Compared with Non-Chinese Participants. Clinical drug investigation 46(7):783-793 (2026). [doi:10.1007/s40261-026-01554-y](https://doi.org/10.1007/s40261-026-01554-y)

**This record:** Pharmacolibrary v26.09, model `Nirmatrelvir_Li2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference>

```bibtex
@misc{pharmacolibrary_NirmatrelvirLi2026reference,
  title  = {{Pharmacolibrary model Nirmatrelvir_Li2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference},
  note   = {Parameters from doi:10.1007/s40261-026-01554-y},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 300 mg, single dose, first-order absorption (ka 0.2 /h, F 1). Dose in the paper: 300 mg.

<dbs-fmusim paramsurl="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference/Nirmatrelvir_Li2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Nirmatrelvir_Li2026_reference_params.json` · controls `Nirmatrelvir_Li2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnirmatrelvir%5D%20Nirmatrelvir_Li2026_reference&body=Drug%3A%20nirmatrelvir%0ARecord%3A%20Nirmatrelvir_Li2026_reference%0APaper%3A%20Li_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nirmatrelvir/Nirmatrelvir_Li2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:40 UTC</sub>
