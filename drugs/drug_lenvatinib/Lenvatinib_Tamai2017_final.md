<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lenvatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lenvatinib/&quot;},{&quot;label&quot;:&quot;Tamai_2017 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lenvatinib — `Lenvatinib_Tamai2017_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Lenvatinib’s absorption rate constant is reported as 1.04 L/h, a clearance dimension rather than a rate, prompting rejection.

<div class="pk-model-meta" hidden drug="lenvatinib" model-id="Lenvatinib_Tamai2017_final" status="rejected" stale="false" population="healthy subjects and subjects with cancer, including HCC" measured-compound="lenvatinib" parameterization="apparent" topology="1C"></div>

## Citation
Tamai T, Hayato S, Hojo S, Suzuki T, Okusaka T, Ikeda K et al. Dose Finding of Lenvatinib in Subjects With Advanced Hepatocellular Carcinoma Based on Population Pharmacokinetic and Exposure-Response Analyses. Journal of clinical pharmacology 57(9):1138–1147 (2017).
  ·  DOI: [10.1002/jcph.917](https://doi.org/10.1002/jcph.917)

## Population and dosing

**Population:** healthy subjects and subjects with cancer, including HCC · condition healthy and cancer, including hepatocellular carcinoma · age group adult · n = 452.

**Dosing:** 8, 16 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Basal CL/F in L/h [ΘCL] | CL/F | 6.43 | L/h |
| Ka (L/h) | kabs | 1.04 | L/h |
| D1 (hours) | D1 | 1.06 | hours |
| theta_q319_body_weight | theta_q319_body_weight | 0.708 |  |
| theta_q319_body_weight | theta_q319_body_weight | 1.08 |  |
| theta_q40_formulation_f1_capsule_vs_tablet | theta_q40_formulation_f1_capsule_vs_tablet | 0.867 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.867). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lenvatinib’s absorption rate constant is reported as 1.04 L/h, a clearance dimension rather than a rate, prompting rejection.**

The record defines kabs as an absorption rate constant but gives it the value 1.04 L/h. Separately, a reported unit could not be converted to SI, leaving a parameter without an SI value. Extracted — lenvatinib: CL/F 6.43 L/h, kabs 1.04 L/h, D1 1.06 hours.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_q314_body_weight: this record has none, the second reading 0.708; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Basal CL/F in L/h [ΘCL] | `Q27` · CL/F | 6.43 | L/h | 1.786e-06 | m3/s | l/h | llm_confirmed (0.6) | jcph917-tbl-0002:row3:col3, jcph917-tbl-0002:row3:col4 |
| Ka (L/h) | `Q49` · kabs | 1.04 | L/h |  |  | l/h | exact (1) | jcph917-tbl-0002:row20:col3, jcph917-tbl-0002:row20:col4 |
| D1 (hours) | `Q310` · D1 | 1.06 | hours | 3816 | s | h | exact (1) | jcph917-tbl-0002:row21:col3, jcph917-tbl-0002:row21:col4 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.708 |  |  |  |  |  | jcph917-tbl-0002:row4:col3 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 1.08 |  |  |  |  |  | jcph917-tbl-0002:row15:col3 |
| theta_q40_formulation_f1_capsule_vs_tablet | `Q900` · theta_q40_formulation_f1_capsule_vs_tablet | 0.867 |  |  |  |  |  | jcph917-tbl-0002:row22:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Q1/F [L/h] = ΘQ1 · (WGT/75) ΘWGT1 | Q69 | llm_confirmed |
| Q2/F [L/h] = ΘQ2 · (WGT/75) ΘWGT1 | Q80 | llm_confirmed |
| V1/F [L] = ΘV1 · (WGT/75) ΘWGT2 | Q290 | llm_confirmed |
| V2/F [L] = ΘV2 · (WGT/75) ΘWGT2 | Q82 | llm_confirmed |
| V3/F [L] = ΘV3 · (WGT/75) ΘWGT2 | Q78 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('Inducer on CL/F [ΘINDU]', value '1.30') — already have one for this compound
- dropped duplicate Q27 ('Inhibitor on CL/F [ΘINHIB]', value '0.922') — already have one for this compound
- dropped duplicate Q27 ('Population (healthy vs subjects) on CL/F [ΘTM]', value '1.19') — already have one for this compound
- dropped duplicate Q27 ('ALP (&gt; ULN vs ≤ ULN) on CL/F [ΘALP]', value '0.852') — already have one for this compound
- dropped duplicate Q69 ('Basal Q1/F in L/h [ΘQ1]', value '3.96') — already have one for this compound
- dropped duplicate Q80 ('Basal Q2/F in L/h [ΘQ2]', value '0.726') — already have one for this compound
- unit_dimension_mismatch: 'Basal V1/F in L [ΘV1]' → Q290 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q290 ('Basal V1/F in L [ΘV1]', value '47.0') — already have one for this compound
- unit_dimension_mismatch: 'Basal V2/F in L [ΘV2]' → Q82 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q82 ('Basal V2/F in L [ΘV2]', value '31.2') — already have one for this compound
- unit_dimension_mismatch: 'Basal V3/F in L [ΘV3]' → Q78 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q78 ('Basal V3/F in L [ΘV3]', value '34.5') — already have one for this compound
- unit_dimension_mismatch: 'Ka (L/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- routed 'Proportional (%CV) (Clinical pharmacology studies)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional (%CV) (Patient studies)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Proportional (%CV) (TAD ≤ 2 hours)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additional (ng/mL) (TAD ≤ 2 hours)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lenvatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- model-stage split: 'final model' is the final model of Tamai_2017 (paper reports 2 stages: base model, final model); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph917-tbl-0002:row3:col5 = '6.42 (6.07‐6.76)'
- unparsed cell jcph917-tbl-0002:row4:col5 = '0.711 (0.538‐0.886)'
- unparsed cell jcph917-tbl-0002:row5:col5 = '1.30 (1.23‐1.38)'
- unparsed cell jcph917-tbl-0002:row6:col5 = '0.921 (0.893‐0.951)'
- unparsed cell jcph917-tbl-0002:row7:col5 = '1.19 (1.11‐1.27)'
- unparsed cell jcph917-tbl-0002:row8:col5 = '0.855 (0.807‐0.910)'
- unparsed cell jcph917-tbl-0002:row10:col5 = '3.99 (3.57‐4.49)'
- unparsed cell jcph917-tbl-0002:row12:col5 = '0.738 (0.639‐0.845)'
- unparsed cell jcph917-tbl-0002:row14:col5 = '46.8 (43.9‐49.8)'
- unparsed cell jcph917-tbl-0002:row15:col5 = '1.08 (0.876‐1.28)'
- unparsed cell jcph917-tbl-0002:row17:col5 = '31.1 (28.3‐33.7)'
- unparsed cell jcph917-tbl-0002:row19:col5 = '34.7 (31.6‐37.7)'
- unparsed cell jcph917-tbl-0002:row20:col5 = '1.04 (0.933‐1.13)'
- unparsed cell jcph917-tbl-0002:row21:col5 = '1.06 (0.987‐1.14)'
- unparsed cell jcph917-tbl-0002:row22:col5 = '0.867 (0.815‐0.908)'
- unparsed cell jcph917-tbl-0002:row23:col5 = '17.1 (15.5‐18.8)'
- unparsed cell jcph917-tbl-0002:row24:col5 = '30.1 (27.7‐32.2)'
- unparsed cell jcph917-tbl-0002:row25:col5 = '44.8 (40.7‐48.8)'
- unparsed cell jcph917-tbl-0002:row26:col5 = '7.50 (4.62‐9.85)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_q314_body_weight]` |  | 0.708 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight]` | 0.708 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph917-tbl-0002:row3:col3', 'jcph917-tbl-0002:row3:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph917-tbl-0002:row13:col3', 'jcph917-tbl-0002:row13:col4', 'jcph917-tbl-0002:row13:col5'] |
| C5_dimension_Q310 | pass | [time] |  | ['jcph917-tbl-0002:row21:col3', 'jcph917-tbl-0002:row21:col4'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | ['jcph917-tbl-0002:row20:col3', 'jcph917-tbl-0002:row20:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph917-tbl-0002:row9:col3', 'jcph917-tbl-0002:row9:col4', 'jcph917-tbl-0002:row9:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['jcph917-tbl-0002:row18:col3', 'jcph917-tbl-0002:row18:col4', 'jcph917-tbl-0002:row18:col5'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['jcph917-tbl-0002:row11:col3', 'jcph917-tbl-0002:row11:col4', 'jcph917-tbl-0002:row11:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph917-tbl-0002:row16:col3', 'jcph917-tbl-0002:row16:col4', 'jcph917-tbl-0002:row16:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.43 L/h | ['jcph917-tbl-0002:row3:col3', 'jcph917-tbl-0002:row3:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blenvatinib%5D%20Lenvatinib_Tamai2017_final&body=Drug%3A%20lenvatinib%0ARecord%3A%20Lenvatinib_Tamai2017_final%0APaper%3A%20Tamai_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lenvatinib/Lenvatinib_Tamai2017_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 02:38 UTC</sub>
