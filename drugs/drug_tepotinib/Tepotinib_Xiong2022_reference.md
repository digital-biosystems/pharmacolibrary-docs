<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tepotinib&quot;,&quot;href&quot;:&quot;drugs/drug_tepotinib/&quot;},{&quot;label&quot;:&quot;Xiong_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tepotinib — `Tepotinib_Xiong2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Q/F and CL have no unit.

<div class="pk-model-meta" hidden drug="tepotinib" model-id="Tepotinib_Xiong2022_reference" status="needs_review" stale="false" population="patients with cancer and healthy participants" measured-compound="tepotinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Xiong W, Papasouliotis O, Jonsson EN, Strotmann R, Girard P. Population pharmacokinetic analysis of tepotinib, an oral MET kinase inhibitor, including data from the VISION study. Cancer chemotherapy and pharmacology 89(5):655–669 (2022).
  ·  DOI: [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5)

## Population and dosing

**Population:** patients with cancer and healthy participants · condition cancer and healthy participants · age group adult.

**Dosing:** 30, 1400 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 15 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLpar/Fa (L/h) | CL/F | 20.4 | L/h |
| Vc,par/Fa (L) | V1/F | 1020 | L |
| ka (h−1) | kabs | 0.278 | h−1 |
| Qpar/Fa (L/h) | Q2/F | 1.32 | L/h |
| Vp,par/Fa (L) | V2/F | 1180 | L |
| D1 (h) | D1 | 4.09 | h |
| Fasting state covariate on D1 | equation variable | -0.370 |  |
| DOSE covariate on Fpar (/100 mg) | Fab | -0.0412 |  |
| Fasting state covariate on Fpar | Frel | -0.209 |  |
| egfr_at_baseline_covariate_on_clpar_f | egfr_at_baseline_covariate_on_clpar_f | 0.199 |  |
| body_weight_at_baseline_covariate_on_fpar | body_weight_at_baseline_covariate_on_fpar | -0.475 |  |
| INR at baseline covariate on Qpar/F | Q/F | 3.81 |  |
| serum_albumin_at_baseline_covariate_on_qpar_f | serum_albumin_at_baseline_covariate_on_qpar_f | 4.14 |  |
| CLmeta (L/h) | CL | 40.2 | L/h |
| Vc, meta (L) | V1 | 131 | L |
| Qmet a (L/h) | Q | 106 | L/h |
| Vp, meta (L) | V2 | 152 | L |
| egfr_at_baseline_covariate_on_clmet | egfr_at_baseline_covariate_on_clmet | 0.311 |  |
| body_weight_at_baseline_covariate_on_clmet | body_weight_at_baseline_covariate_on_clmet | -0.696 |  |
| Non-small cell lung cancer covariate on CLmet | CL | 0.498 |  |
| Hepatocellular carcinoma covariate on FM | fm | -0.398 |  |
| theta_v1_f_age | theta_v1_f_age | 0.219 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.733). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Q/F and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — tepotinib: CL/F 20.4 L/h, V1/F 1.02e+03 L, kabs 0.278 h−1, Q2/F 1.32 L/h, V2/F 1.18e+03 L, D1 4.09 h, Fab -0.0412, Frel -0.209, … (+1); MSC2571109A: CL 40.2 L/h, V1 131 L, Q 106 L/h, V2 152 L, CL 0.498, fm -0.398.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cf1 covariate on fpar: this record has none, the second reading -0.656; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLpar/Fa (L/h) | `Q27` · CL/F | 20.4 | L/h | 5.667e-06 | m3/s | l/h | llm (0.6) | Tab3:row3:col1, Tab3:row3:col2 |
| Vc,par/Fa (L) | `Q290` · V1/F | 1020 | L | 1.02 | m3 | l | llm_corrected (0.6) | Tab3:row4:col1, Tab3:row4:col2 |
| ka (h−1) | `Q49` · kabs | 0.278 | h−1 | 7.722e-05 | 1/s | 1/h | exact (1) | Tab3:row5:col1, Tab3:row5:col2 |
| Qpar/Fa (L/h) | `Q80` · Q2/F | 1.32 | L/h | 3.667e-07 | m3/s | l/h | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2 |
| Vp,par/Fa (L) | `Q82` · V2/F | 1180 | L | 1.18 | m3 | l | llm_corrected (0.6) | Tab3:row7:col1, Tab3:row7:col2 |
| D1 (h) | `Q310` · D1 | 4.09 | h | 1.472e+04 | s | h | exact (1) | Tab3:row8:col1, Tab3:row8:col2 |
| Fasting state covariate on D1 | `Q900` · equation variable | -0.370 |  |  |  |  | llm_corrected (0.6) | Tab3:row10:col1, Tab3:row10:col2 |
| DOSE covariate on Fpar (/100 mg) | `Q40` · Fab | -0.0412 |  |  |  |  | llm (0.6) | Tab3:row11:col1, Tab3:row11:col2 |
| Fasting state covariate on Fpar | `Q87` · Frel | -0.209 |  |  |  |  | llm (0.6) | Tab3:row12:col1, Tab3:row12:col2 |
| egfr_at_baseline_covariate_on_clpar_f | `Q900` · egfr_at_baseline_covariate_on_clpar_f | 0.199 |  |  |  |  |  | Tab3:row20:col1, Tab3:row20:col2 |
| body_weight_at_baseline_covariate_on_fpar | `Q900` · body_weight_at_baseline_covariate_on_fpar | -0.475 |  |  |  |  |  | Tab3:row25:col1, Tab3:row25:col2 |
| INR at baseline covariate on Qpar/F | `Q69` · Q/F | 3.81 |  |  |  |  | llm_corrected (0.6) | Tab3:row27:col1, Tab3:row27:col2 |
| serum_albumin_at_baseline_covariate_on_qpar_f | `Q900` · serum_albumin_at_baseline_covariate_on_qpar_f | 4.14 |  |  |  |  |  | Tab3:row28:col1 |
| CLmeta (L/h) | `Q22` · CL | 40.2 | L/h | 1.117e-05 | m3/s | l/h | exact (1) | Tab3:row42:col1, Tab3:row42:col2 |
| Vc, meta (L) | `Q63` · V1 | 131 | L | 0.131 | m3 | l | exact (1) | Tab3:row43:col1, Tab3:row43:col2 |
| Qmet a (L/h) | `Q30` · Q | 106 | L/h | 2.944e-05 | m3/s | l/h | exact (1) | Tab3:row44:col1, Tab3:row44:col2 |
| Vp, meta (L) | `Q64` · V2 | 152 | L | 0.152 | m3 | l | exact (1) | Tab3:row45:col1, Tab3:row45:col2 |
| egfr_at_baseline_covariate_on_clmet | `Q900` · egfr_at_baseline_covariate_on_clmet | 0.311 |  |  |  |  |  | Tab3:row46:col1, Tab3:row46:col2 |
| body_weight_at_baseline_covariate_on_clmet | `Q900` · body_weight_at_baseline_covariate_on_clmet | -0.696 |  |  |  |  |  | Tab3:row47:col1, Tab3:row47:col2 |
| Non-small cell lung cancer covariate on CLmet | `Q22` · CL | 0.498 |  |  |  |  | llm (0.6) | Tab3:row48:col1, Tab3:row48:col2 |
| Hepatocellular carcinoma covariate on FM | `Q45` · fm | -0.398 |  |  |  |  | llm_confirmed (0.6) | Tab3:row49:col1, Tab3:row49:col2 |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.219 |  |  |  |  |  | Tab3:row29:col1, Tab3:row29:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Relative Fpar (CV)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1'])
- dropped duplicate Q87 ('High-fat meal covariate on Fpar', value '0.320') — already have one for this compound
- dropped duplicate Q87 ('CF1 covariate on Fpar', value '-0.656') — already have one for this compound
- dropped duplicate Q87 ('TF3 covariate on Fpar', value '0.154') — already have one for this compound
- dropped duplicate Q49 ('Fasting state covariate on ka', value '-0.561') — already have one for this compound
- dropped unlinked row (NIL): 'CF1 covariate on ka' — extend the ontology if this is a real PK parameter (source ['Tab3:row17:col1', 'Tab3:row17:col2'])
- dropped duplicate Q49 ('TF1 covariate on ka', value '0.305') — already have one for this compound
- dropped unlinked row (NIL): 'TF1* covariate on ka' — extend the ontology if this is a real PK parameter (source ['Tab3:row19:col1', 'Tab3:row19:col2'])
- covariate level 'eGFR at baseline covariate on CLpar/F' → Q900:egfr_at_baseline_covariate_on_clpar_f = 0.199 (linear_fractional on Q27)
- dropped duplicate Q27 ('Hepatocellular carcinoma covariate on CLpar/F', value '0.130') — already have one for this compound
- dropped duplicate Q27 ('Colorectal cancer covariate on CLpar/F', value '-0.281') — already have one for this compound
- dropped duplicate Q27 ('μ-Opioids covariate on CLpar/F', value '-0.167') — already have one for this compound
- dropped duplicate Q310 ('NCI-ODG class &gt; 0 covariate (liver dysfunction) on D1', value '-0.332') — already have one for this compound
- covariate level 'Body weight at baseline covariate on Fpar' → Q900:body_weight_at_baseline_covariate_on_fpar = -0.475 (linear_fractional on Q27)
- dropped duplicate Q87 ('NCI-ODG class &gt; 0 covariate on Fpar', value '-0.0729') — already have one for this compound
- covariate level 'Serum albumin at baseline covariate on Qpar/F' → Q900:serum_albumin_at_baseline_covariate_on_qpar_f = 4.14 (linear_fractional on Q27)
- dropped duplicate Q290 ('Non-small cell lung cancer covariate on Vc,par/F', value '-0.232') — already have one for this compound
- dropped duplicate Q82 ('Patient/participant covariate on Vp,par/F', value '-0.810') — already have one for this compound
- dropped unlinked row (NIL): 'Study MS200095-0028 covariate on CLpar/F' — extend the ontology if this is a real PK parameter (source ['Tab3:row32:col1', 'Tab3:row32:col2'])
- covariate level 'eGFR at baseline covariate on CLmet' → Q900:egfr_at_baseline_covariate_on_clmet = 0.311 (linear_fractional on Q27)
- covariate level 'Body weight at baseline covariate on CLmet' → Q900:body_weight_at_baseline_covariate_on_clmet = -0.696 (linear_fractional on Q27)
- dropped duplicate Q30 ('East Asian on Qmet', value '1.40') — already have one for this compound
- dropped duplicate Q64 ('Patient/participant covariate on Vp,met', value '2.31') — already have one for this compound
- dropped duplicate Q63 ('NCI-ODG class &gt; 0 covariate on Vc.met', value '0.520') — already have one for this compound
- metabolite msc2571109a: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tepotinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 55/55 row label(s) assigned, 18 linked by role; re-tagged tepotinib→parent ×79, tepotinib→MSC2571109A ×37
- molar mass: no plausible PubChem entry for 'MSC2571109A' ('Tepotinib M506 metabolite') — left in mass units
- molar mass: none found for 'MSC2571109A' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.733 (22/30 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cf1 covariate on fpar]` |  | -0.656 | only_one_extracted |
| `qwen3.8-27b` | `parameters[dose covariate on fpar]` | -0.0412 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[fasting state covariate on d1]` | -0.370 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[fasting state covariate on fpar]` | -0.209 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[hepatocellular carcinoma covariate on fm]` | -0.398 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[inr at baseline covariate on qpar/f]` | 3.81 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[non-small cell lung cancer covariate on clmet]` | 0.498 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[qpar/fa].parameter_id` | Q80 | Q309 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row42:col1', 'Tab3:row42:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row44:col1', 'Tab3:row44:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['Tab3:row8:col1', 'Tab3:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row43:col1', 'Tab3:row43:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row45:col1', 'Tab3:row45:col2'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row7:col1', 'Tab3:row7:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['Tab3:row48:col1', 'Tab3:row48:col2'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] |  | ['Tab3:row27:col1', 'Tab3:row27:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 40.2 L/h | ['Tab3:row42:col1', 'Tab3:row42:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.4 L/h | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.02e+03 L | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 131 L | ['Tab3:row43:col1', 'Tab3:row43:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 152 L | ['Tab3:row45:col1', 'Tab3:row45:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.18e+03 L | ['Tab3:row7:col1', 'Tab3:row7:col2'] |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btepotinib%5D%20Tepotinib_Xiong2022_reference&body=Drug%3A%20tepotinib%0ARecord%3A%20Tepotinib_Xiong2022_reference%0APaper%3A%20Xiong_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tepotinib/Tepotinib_Xiong2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:14 UTC</sub>
