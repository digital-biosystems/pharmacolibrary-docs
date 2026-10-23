<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eptinezumab&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/&quot;},{&quot;label&quot;:&quot;Baker_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eptinezumab_Baker2020_reference&quot;,&quot;label&quot;:&quot;Baker_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eptinezumab — `Eptinezumab_Baker2020_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:37 UTC) predates the latest extraction (2026-10-07 06:32 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="eptinezumab" model-id="Eptinezumab_Baker2020_reference" status="extracted" stale="true" population="patients with episodic or chronic migraine" measured-compound="eptinezumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Baker B, Schaeffler B, Beliveau M, Rubets I, Pederson S, Trinh M et al. Population pharmacokinetic and exposure-response analysis of eptinezumab in the treatment of episodic and chronic migraine. Pharmacology research & perspectives 8(2):e00567 (2020).
  ·  DOI: [10.1002/prp2.567](https://doi.org/10.1002/prp2.567)

## Population and dosing

**Population:** patients with episodic or chronic migraine · age group adult · n = ,
    "condition": "episodic or chronic migraine",
    "species": "human",
    "compounds": [
      {
        "name": "eptinezumab",
        "role": "parent",
        "dosed": "yes",
        "measured": "yes",
        "has_parameters": "yes"
      }
    ],
    "links": "none"
  },
  "links": []
}.

**Dosing:** 10, 1000 mg, iv, multiple, every 84 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference.svg" alt="Eptinezumab_Baker2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| AUC0‐12wk, mean (CV%), h·μg mL−1 | AUCt | 158 | h·μg mL−1 |
| C max, mean (CV%), μg mL−1 | Cmax | 0.279 | μg mL−1 |
| C avg, mean (CV%), μg mL−1 | Cavg | 0.0785 | μg mL−1 |
| C trough, mean (CV%), μg mL−1 | Ctrough | 0.0232 | μg mL−1 |
| Css,avg, mean (CV%), μg mL−1 | Css | 0.0910 | μg mL−1 |
| CL | CL | 0.0062 | L h−1 |
| the central volume of distribution (Vc) | V | 3.64 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 648, model 407); the model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.183).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUCt, Cmax, Cavg and Ctrough), so that value has no SI equivalent. Extracted — eptinezumab: AUCt 158 h·μg mL−1, Cmax 0.279 μg mL−1, Cavg 0.0785 μg mL−1, Ctrough 0.0232 μg mL−1, Css 0.091 μg mL−1, CL 0.0062 L h−1, V 3.64 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eptinezumab, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0‐12wk, mean (CV%), h·μg mL−1 | `Q19` · AUCt | 158 | h·μg mL−1 |  |  | (h·µg)/ml | llm (0.6) | prp2567-tbl-0002:row2:col1, prp2567-tbl-0002:row2:col2, prp2567-tbl-0002:row2:col3, prp2567-tbl-0002:row2:col4 |
| C max, mean (CV%), μg mL−1 | `Q32` · Cmax | 0.279 | μg mL−1 |  |  | µg/ml | llm (0.6) | prp2567-tbl-0002:row3:col1, prp2567-tbl-0002:row3:col2, prp2567-tbl-0002:row3:col3, prp2567-tbl-0002:row3:col4, prp2567-tbl-0002:row3:col5, prp2567-tbl-0002:row3:col6, prp2567-tbl-0002:row3:col7 |
| C avg, mean (CV%), μg mL−1 | `Q71` · Cavg | 0.0785 | μg mL−1 |  |  | µg/ml | llm (0.6) | prp2567-tbl-0002:row4:col1, prp2567-tbl-0002:row4:col2, prp2567-tbl-0002:row4:col3, prp2567-tbl-0002:row4:col4, prp2567-tbl-0002:row4:col5, prp2567-tbl-0002:row4:col6, prp2567-tbl-0002:row4:col7 |
| C trough, mean (CV%), μg mL−1 | `Q37` · Ctrough | 0.0232 | μg mL−1 |  |  | µg/ml | llm_confirmed (0.6) | prp2567-tbl-0002:row5:col1, prp2567-tbl-0002:row5:col2, prp2567-tbl-0002:row5:col3, prp2567-tbl-0002:row5:col4, prp2567-tbl-0002:row5:col5, prp2567-tbl-0002:row5:col6, prp2567-tbl-0002:row5:col7 |
| Css,avg, mean (CV%), μg mL−1 | `Q34` · Css | 0.0910 | μg mL−1 |  |  | µg/ml | llm_confirmed (0.6) | Baker_2020_table_3:row2:col1, Baker_2020_table_3:row2:col2, Baker_2020_table_3:row2:col3, Baker_2020_table_3:row2:col4, Baker_2020_table_3:row2:col5, Baker_2020_table_3:row2:col6, Baker_2020_table_3:row2:col7 |
| CL | `Q22` · CL | 0.0062 | L h−1 | 1.722e-09 | m3/s | L/h | exact (1) | Baker_2020:results_prose |
| the central volume of distribution (Vc) | `Q61` · V | 3.64 | L | 0.00364 | m3 | L | boundary_compartment (0.9) | Baker_2020:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| 1 (n = 4) | Q308 | llm |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 4' (Q3)
- dropped duplicate Q19 ('AUC0‐τ, mean (CV%), h·μg mL−1', value '183') — already have one for this compound
- dropped unlinked row (NIL): 'Rac(AUCτ), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row3:col1', 'Baker_2020_table_3:row3:col2', 'Baker_2020_table_3:row3:col3', 'Baker_2020_table_3:row3:col4', 'Baker_2020_table_3:row3:col5', 'Baker_2020_table_3:row3:col6', 'Baker_2020_table_3:row3:col7'])
- dropped unlinked row (NIL): 'Rac(C max), mean (CV%)' — extend the ontology if this is a real PK parameter (source ['Baker_2020_table_3:row4:col1', 'Baker_2020_table_3:row4:col2', 'Baker_2020_table_3:row4:col3', 'Baker_2020_table_3:row4:col4', 'Baker_2020_table_3:row4:col5', 'Baker_2020_table_3:row4:col6', 'Baker_2020_table_3:row4:col7'])
- salvaged Q22 ('CL'=0.0062) from results prose — parameter table was unreadable
- salvaged Q63 ('the central volume of distribution (Vc)'=3.64) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eptinezumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'the central volume of distribution (Vc)' is the general volume)
- status held at route_to_review — not promoted
- molar mass: none found for 'eptinezumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell prp2567-tbl-0002:row2:col5 = '17 900 (29.0)'
- unparsed cell prp2567-tbl-0002:row2:col6 = '54 500 (27.7)'
- unparsed cell prp2567-tbl-0002:row2:col7 = '164 000 (24.0)'
- unparsed cell Baker_2020_table_3:row1:col5 = '20 800 (32.1)'
- unparsed cell Baker_2020_table_3:row1:col6 = '63 100 (30.1)'
- unparsed cell Baker_2020_table_3:row1:col7 = '187 000 (25.4)'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐12wk, mean (cv%)]` | 158 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐12wk, mean (cv%)]` |  | 158 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0‐τ, mean (cv%)]` |  | 183 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c avg, mean (cv%)]` | 0.0785 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c avg, mean (cv%)]` |  | 0.0785 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max, mean (cv%)]` | 0.279 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max, mean (cv%)]` |  | 0.279 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c trough, mean (cv%)]` | 0.0232 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c trough, mean (cv%)]` |  | 0.0232 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.0062 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 0.0062 | only_one_extracted |
| `gpt-oss-120b` | `parameters[css,avg, mean (cv%)]` | 0.0910 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[css,avg, mean (cv%)]` |  | 0.0910 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the central volume of distribution]` | 3.64 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 3.64 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | eptinezumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | eptinezumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['prp2567-tbl-0002:row2:col1', 'prp2567-tbl-0002:row2:col2', 'prp2567-tbl-0002:row2:col3', 'prp2567-tbl-0002:row2:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['prp2567-tbl-0002:row3:col1', 'prp2567-tbl-0002:row3:col2', 'prp2567-tbl-0002:row3:col3', 'prp2567-tbl-0002:row3:col4', 'prp2567-tbl-0002:row3:col5', 'prp2567-tbl-0002:row3:col6', 'prp2567-tbl-0002:row3:col7'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 |  | ['Baker_2020_table_3:row2:col1', 'Baker_2020_table_3:row2:col2', 'Baker_2020_table_3:row2:col3', 'Baker_2020_table_3:row2:col4', 'Baker_2020_table_3:row2:col5', 'Baker_2020_table_3:row2:col6', 'Baker_2020_table_3:row2:col7'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['prp2567-tbl-0002:row5:col1', 'prp2567-tbl-0002:row5:col2', 'prp2567-tbl-0002:row5:col3', 'prp2567-tbl-0002:row5:col4', 'prp2567-tbl-0002:row5:col5', 'prp2567-tbl-0002:row5:col6', 'prp2567-tbl-0002:row5:col7'] |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['prp2567-tbl-0002:row4:col1', 'prp2567-tbl-0002:row4:col2', 'prp2567-tbl-0002:row4:col3', 'prp2567-tbl-0002:row4:col4', 'prp2567-tbl-0002:row4:col5', 'prp2567-tbl-0002:row4:col6', 'prp2567-tbl-0002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0062 | ['Baker_2020:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0062 L/h | ['Baker_2020:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.64 L | ['Baker_2020:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=eptinezumab) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 37.3 | 0.002747 |  | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 114 | 0.002747 |  | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 30 | 0.002747 |  | unresolved concentration unit (exp 'minutes', sim 'kg/m3') |
| T1_cmax | reference | skipped | 60 | 0.002747 |  | unresolved concentration unit (exp 'minutes', sim 'kg/m3') |
| T1_cmax | reference | skipped | 37 | 0.002747 |  | unresolved concentration unit (exp 'μg mL−1', sim 'kg/m3') |
| T1_t_half_beta | reference | fail | 648 | 406.9 | 0.628 | days→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.1833 | 0.3667 | minutes→SI vs simulated h |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_modelica.zip" download>Eptinezumab_Baker2020_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_fmi.zip" download>Eptinezumab_Baker2020_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_matlab.zip" download>Eptinezumab_Baker2020_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_matlab_simbio.zip" download>Eptinezumab_Baker2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_sbml.zip" download>Eptinezumab_Baker2020_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_cellml.zip" download>Eptinezumab_Baker2020_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.722e-09 | m3/s |
| input | model | `VdPerKg` | 5.2e-05 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Baker B, Schaeffler B, Beliveau M, Rubets I, Pederson S, Trinh M et al. Population pharmacokinetic and exposure-response analysis of eptinezumab in the treatment of episodic and chronic migraine. Pharmacology research & perspectives 8(2):e00567 (2020). [doi:10.1002/prp2.567](https://doi.org/10.1002/prp2.567)

**This record:** Pharmacolibrary v26.09, model `Eptinezumab_Baker2020_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference>

```bibtex
@misc{pharmacolibrary_EptinezumabBaker2020reference,
  title  = {{Pharmacolibrary model Eptinezumab_Baker2020_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference},
  note   = {Parameters from doi:10.1002/prp2.567},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. Doses in the paper: 10–1000 mg.

<dbs-fmusim paramsurl="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference/Eptinezumab_Baker2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Eptinezumab_Baker2020_reference_params.json` · controls `Eptinezumab_Baker2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beptinezumab%5D%20Eptinezumab_Baker2020_reference&body=Drug%3A%20eptinezumab%0ARecord%3A%20Eptinezumab_Baker2020_reference%0APaper%3A%20Baker_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:32 UTC</sub>
