<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tepotinib&quot;,&quot;href&quot;:&quot;drugs/drug_tepotinib/&quot;},{&quot;label&quot;:&quot;Xiong_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tepotinib — `Tepotinib_Xiong2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.733). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Q/F and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — tepotinib: CL/F 20.4 L/h, V1/F 1.02e+03 L, kabs 0.278 h−1, Q2/F 1.32 L/h, V2/F 1.18e+03 L, D1 4.09 h, Fab -0.0412, Frel -0.209, … (+1); MSC2571109A: CL 40.2 L/h, V1 131 L, Q 106 L/h, V2 152 L, CL 0.498, fm -0.398.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cf1 covariate on fpar: this record has none, the second reading -0.656; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022)
  ·  DOI: [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5)

<div class="pk-model-meta" hidden drug="tepotinib" model-id="Tepotinib_Xiong2022_reference" status="needs_review" stale="false" population="patients with cancer and healthy participants" measured-compound="tepotinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 15 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLpar/Fa (L/h) | `Q27` · CL/F | 20.4 | L/h | 5.666666666666666e-06 | [l] / [h] | not captured | llm (0.6) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Vc,par/Fa (L) | `Q290` · V1/F | 1020 | L | 1.02 | [l] | not captured | llm_corrected (0.6) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.278 | h−1 | 7.722222222222223e-05 | [1] / [h] | not captured | exact (1.0) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| Qpar/Fa (L/h) | `Q80` · Q2/F | 1.32 | L/h | 3.6666666666666667e-07 | [l] / [h] | not captured | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2 | — | not captured |
| Vp,par/Fa (L) | `Q82` · V2/F | 1180 | L | 1.18 | [l] | not captured | llm_corrected (0.6) | Tab3:row7:col1, Tab3:row7:col2 | — | not captured |
| D1 (h) | `Q310` · D1 | 4.09 | h | 14724.0 | [h] | not captured | exact (1.0) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| Fasting state covariate on D1 | `Q900` · equation variable | -0.370 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| DOSE covariate on Fpar (/100 mg) | `Q40` · Fab | -0.0412 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row11:col1, Tab3:row11:col2 | — | not captured |
| Fasting state covariate on Fpar | `Q87` · Frel | -0.209 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |
| egfr_at_baseline_covariate_on_clpar_f | `Q900` · egfr_at_baseline_covariate_on_clpar_f | 0.199 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row20:col1, Tab3:row20:col2 | — | not captured |
| body_weight_at_baseline_covariate_on_fpar | `Q900` · body_weight_at_baseline_covariate_on_fpar | -0.475 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row25:col1, Tab3:row25:col2 | — | not captured |
| INR at baseline covariate on Qpar/F | `Q69` · Q/F | 3.81 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab3:row27:col1, Tab3:row27:col2 | — | not captured |
| serum_albumin_at_baseline_covariate_on_qpar_f | `Q900` · serum_albumin_at_baseline_covariate_on_qpar_f | 4.14 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row28:col1 | — | not captured |
| CLmeta (L/h) | `Q22` · CL | 40.2 | L/h | 1.116666666666667e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row42:col1, Tab3:row42:col2 | — | not captured |
| Vc, meta (L) | `Q63` · V1 | 131 | L | 0.131 | [l] | not captured | exact (1.0) | Tab3:row43:col1, Tab3:row43:col2 | — | not captured |
| Qmet a (L/h) | `Q30` · Q | 106 | L/h | 2.9444444444444445e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row44:col1, Tab3:row44:col2 | — | not captured |
| Vp, meta (L) | `Q64` · V2 | 152 | L | 0.152 | [l] | not captured | exact (1.0) | Tab3:row45:col1, Tab3:row45:col2 | — | not captured |
| egfr_at_baseline_covariate_on_clmet | `Q900` · egfr_at_baseline_covariate_on_clmet | 0.311 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row46:col1, Tab3:row46:col2 | — | not captured |
| body_weight_at_baseline_covariate_on_clmet | `Q900` · body_weight_at_baseline_covariate_on_clmet | -0.696 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row47:col1, Tab3:row47:col2 | — | not captured |
| Non-small cell lung cancer covariate on CLmet | `Q22` · CL | 0.498 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row48:col1, Tab3:row48:col2 | — | not captured |
| Hepatocellular carcinoma covariate on FM | `Q45` · fm | -0.398 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab3:row49:col1, Tab3:row49:col2 | — | not captured |
| theta_v1_f_age | `Q900` · theta_v1_f_age | 0.219 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row29:col1, Tab3:row29:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[cf1 covariate on fpar]` | not captured | -0.656 | only_one_extracted |
| `qwen3.8-27b` | `parameters[dose covariate on fpar]` | -0.0412 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[fasting state covariate on d1]` | -0.370 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[fasting state covariate on fpar]` | -0.209 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[hepatocellular carcinoma covariate on fm]` | -0.398 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[inr at baseline covariate on qpar/f]` | 3.81 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[non-small cell lung cancer covariate on clmet]` | 0.498 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[qpar/fa].parameter_id` | Q80 | Q309 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row42:col1', 'Tab3:row42:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row44:col1', 'Tab3:row44:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab3:row8:col1', 'Tab3:row8:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row43:col1', 'Tab3:row43:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row45:col1', 'Tab3:row45:col2'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row48:col1', 'Tab3:row48:col2'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row27:col1', 'Tab3:row27:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 40.2 L/h | not captured | not captured | ['Tab3:row42:col1', 'Tab3:row42:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.4 L/h | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.02e+03 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 131 L | not captured | not captured | ['Tab3:row43:col1', 'Tab3:row43:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 152 L | not captured | not captured | ['Tab3:row45:col1', 'Tab3:row45:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.18e+03 L | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tepotinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Xiong_2022` / `Xiong_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:14 UTC</sub>
