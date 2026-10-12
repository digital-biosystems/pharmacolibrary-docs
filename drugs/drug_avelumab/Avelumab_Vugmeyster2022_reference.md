<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Vugmeyster_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Vugmeyster2022_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.438). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (AUCt and Ctrough), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of auc0-336: this record has 23.7, the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Vugmeyster Y et al., Avelumab Dose Selection for Clinical St…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-022-01111-8](https://doi.org/10.1007/s40262-022-01111-8)

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Vugmeyster2022_reference" status="not_modelled" stale="false" population="pediatric patients with refractory/relapsed solid tumors" measured-compound="avelumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Baseline CL, L/h | `Q22` · CL | 0.0274 | L/h | 7.611111111111112e-09 | [l] / [h] | not captured | llm_corrected (0.6) | Tab2:row2:col2 | — | not captured |
| V1, L | `Q61` · V | 3.15 | L | 0.00315 | [l] | not captured | exact (1.0) | Tab2:row3:col2 | — | not captured |
| Q, L/ha | `Q30` · Q | 0.0299 | L/h | 8.305555555555557e-09 | L/h | not captured | llm (0.6) | Tab2:row5:col2 | — | not captured |
| T50, daysa | `Q57` · t1/2z | 79 | h | 284400.0 | h | not captured | llm (0.6) | Tab2:row7:col2 | — | not captured |
| AUC0–336, µg⋅h/mL | `Q19` · AUCt | 23.7 | µg⋅h/mL | not captured | [[h] · [µg]] / [ml] | 187.5 | llm (0.6) | Vugmeyster_2022_table_1:row1:col1, Vugmeyster_2022_table_1:row1:col3, Vugmeyster_2022_table_1:row4:col1, Vugmeyster_2022_table_1:row4:col3, Vugmeyster_2022_table_1:row4:col4, Vugmeyster_2022_table_1:row7:col1, Vugmeyster_2022_table_1:row7:col3, Vugmeyster_2022_table_1:row7:col4, Vugmeyster_2022_table_1:row13:col1, Vugmeyster_2022_table_1:row13:col3, Vugmeyster_2022_table_1:row13:col4, Vugmeyster_2022_table_1:row16:col1, Vugmeyster_2022_table_1:row16:col3, Vugmeyster_2022_table_1:row16:col4, Vugmeyster_2022_table_1:row19:col1, Vugmeyster_2022_table_1:row19:col3, Vugmeyster_2022_table_1:row19:col4 | — | not captured |
| Ctrough, µg/mL | `Q37` · Ctrough | 97.5 | µg/mL | not captured | [µg] / [ml] | 148.3 | exact (1.0) | Vugmeyster_2022_table_1:row2:col1, Vugmeyster_2022_table_1:row2:col3, Vugmeyster_2022_table_1:row5:col1, Vugmeyster_2022_table_1:row5:col3, Vugmeyster_2022_table_1:row5:col4, Vugmeyster_2022_table_1:row8:col1, Vugmeyster_2022_table_1:row8:col3, Vugmeyster_2022_table_1:row8:col4, Vugmeyster_2022_table_1:row11:col1, Vugmeyster_2022_table_1:row11:col3, Vugmeyster_2022_table_1:row11:col4, Vugmeyster_2022_table_1:row14:col1, Vugmeyster_2022_table_1:row14:col3, Vugmeyster_2022_table_1:row14:col4, Vugmeyster_2022_table_1:row17:col1, Vugmeyster_2022_table_1:row17:col3, Vugmeyster_2022_table_1:row17:col4, Vugmeyster_2022_table_1:row20:col1, Vugmeyster_2022_table_1:row20:col3, Vugmeyster_2022_table_1:row20:col4 | — | not captured |
| theta_q_weight | `Q900` · theta_q_weight | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row12:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'variable' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'V2, La' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2'])
- dropped PD-category row 'Imaxa' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row6:col2'])
- dropped PD-category row 'Curve shape factor, γa' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row8:col2'])
- dropped unlinked row (NIL): '800 mg q2w, adult data' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row0:col3', 'Vugmeyster_2022_table_1:row0:col4'])
- dropped unlinked row (NIL): '10 mg/kg q2w, all patients' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row3:col3', 'Vugmeyster_2022_table_1:row3:col4', 'Vugmeyster_2022_table_1:row3:col5'])
- dropped unlinked row (NIL): '10 mg/kg q2w, &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row6:col3', 'Vugmeyster_2022_table_1:row6:col4', 'Vugmeyster_2022_table_1:row6:col5'])
- dropped unlinked row (NIL): '10 mg/kg q2w, ≥ 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row9:col3', 'Vugmeyster_2022_table_1:row9:col4', 'Vugmeyster_2022_table_1:row9:col5'])
- dropped duplicate Q19 ('AUC0–336, µg\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\cdot$$\\end{document}·h/mL', value '7.3') — already have one for this compound
- dropped unlinked row (NIL): '20 mg/kg q2w, all pediatric patients' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row12:col3', 'Vugmeyster_2022_table_1:row12:col4', 'Vugmeyster_2022_table_1:row12:col5'])
- dropped unlinked row (NIL): '20 mg/kg q2w, &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row15:col3', 'Vugmeyster_2022_table_1:row15:col4', 'Vugmeyster_2022_table_1:row15:col5'])
- dropped unlinked row (NIL): '20 mg/kg q2w, ≥ 40 kg' — extend the ontology if this is a real PK parameter (source ['Vugmeyster_2022_table_1:row18:col3', 'Vugmeyster_2022_table_1:row18:col4', 'Vugmeyster_2022_table_1:row18:col5'])
- implicit units: 'Q, L/ha' → L/h (from the paper text: 'The text states “an intercompartmental clearance of 0.0323 L/h and 0.0299 L/h, respectively.”')
- implicit units: 'T50, daysa' → h (from the popPK convention: 'This is a terminal half-life; half-lives are conventionally reported in hours. A value of 79 is consistent with hours fo')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1, L' is the general volume)
- molar mass: none found for 'avelumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = '0.0177 (7%)'
- unparsed cell Tab2:row3:col1 = '1.96 (3%)'
- unparsed cell Tab2:row4:col1 = '0.917 (0.8%)'
- unparsed cell Tab2:row5:col1 = '0.0323 (0.8%)'
- unparsed cell Tab2:row6:col1 = '−0.0199 (13%)'
- unparsed cell Tab2:row7:col1 = '80 (0.3%)'
- unparsed cell Tab2:row8:col1 = '2.13 (0.2%)'
- unparsed cell Tab2:row12:col1 = '1b (fixed)'
- unparsed cell Tab2:row13:col1 = '0.235 (5%)'
- unparsed cell Tab2:row14:col1 = '2.68 (2%)'
- companion parameter table 1 transcribed (81 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.438 (7/16 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc0-336]` | 23.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[baseline cl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[ctrough]` | 97.5 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q, l/ha].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[t50, daysa]` | 79 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q_weight]` | 1 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1].parameter_id` | Q61 | Q63 | mismatch |
| `qwen3.8-27b` | `parameters[v2, la]` | not captured | 0.91 | only_one_extracted |
| `qwen3.8-27b` | `parameters[weight_on_q]` | not captured | 1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Vugmeyster_2022_table_1:row1:col1', 'Vugmeyster_2022_table_1:row1:col3', 'Vugmeyster_2022_table_1:row4:col1', 'Vugmeyster_2022_table_1:row4:col3', 'Vugmeyster_2022_table_1:row4:col4', 'Vugmeyster_2022_table_1:row7:col1', 'Vugmeyster_2022_table_1:row7:col3', 'Vugmeyster_2022_table_1:row7:col4', 'Vugmeyster_2022_table_1:row13:col1', 'Vugmeyster_2022_table_1:row13:col3', 'Vugmeyster_2022_table_1:row13:col4', 'Vugmeyster_2022_table_1:row16:col1', 'Vugmeyster_2022_table_1:row16:col3', 'Vugmeyster_2022_table_1:row16:col4', 'Vugmeyster_2022_table_1:row19:col1', 'Vugmeyster_2022_table_1:row19:col3', 'Vugmeyster_2022_table_1:row19:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Vugmeyster_2022_table_1:row2:col1', 'Vugmeyster_2022_table_1:row2:col3', 'Vugmeyster_2022_table_1:row5:col1', 'Vugmeyster_2022_table_1:row5:col3', 'Vugmeyster_2022_table_1:row5:col4', 'Vugmeyster_2022_table_1:row8:col1', 'Vugmeyster_2022_table_1:row8:col3', 'Vugmeyster_2022_table_1:row8:col4', 'Vugmeyster_2022_table_1:row11:col1', 'Vugmeyster_2022_table_1:row11:col3', 'Vugmeyster_2022_table_1:row11:col4', 'Vugmeyster_2022_table_1:row14:col1', 'Vugmeyster_2022_table_1:row14:col3', 'Vugmeyster_2022_table_1:row14:col4', 'Vugmeyster_2022_table_1:row17:col1', 'Vugmeyster_2022_table_1:row17:col3', 'Vugmeyster_2022_table_1:row17:col4', 'Vugmeyster_2022_table_1:row20:col1', 'Vugmeyster_2022_table_1:row20:col3', 'Vugmeyster_2022_table_1:row20:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0274 | not captured | not captured | ['Tab2:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0274 L/h | not captured | not captured | ['Tab2:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.15 L | not captured | not captured | ['Tab2:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 256.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 190 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 157 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 281 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 384 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 338 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 496 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 17.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 11.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 8.80 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 18.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 34.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 39.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 25.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vugmeyster_2022` / `Vugmeyster_2022::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:40 UTC</sub>
