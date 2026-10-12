<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Grisic_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Grisic2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Avelumab’s KD of 0.105 month−1 was refused because its reported dimension conflicts with its meaning as an equilibrium dissociation constant.**

The record defines KD as an equilibrium dissociation constant for drug-target binding but reports it in month−1, and a reported unit lacked an SI conversion. The findings also report a negative clearance or volume at baseline or in a covariate scenario, but do not identify the parameter or value, so that result cannot be tied to a listed estimate. Extracted — avelumab: KD 0.105 month−1, kel 0.199 month–1, CL 0.0236 L/h, V1 3.29 L, Q 0.022 L/h, V2 1.1 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of box_cox_for_baseline_ts: this record has -0.391, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Grisic AM et al., Model-Based Characterization of the Bid…, Clinical cancer research :… (2022)
  ·  DOI: [10.1158/1078-0432.CCR-21-2662](https://doi.org/10.1158/1078-0432.CCR-21-2662)

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Grisic2022_reference" status="rejected" stale="false" population="patients with metastatic Merkel cell carcinoma" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KD, month−1 | `Q331` · KD | 0.105 | month−1 | not captured | [1] / [month] | not captured | exact (1.0) | tbl1:row2:col1 | — | not captured |
| λ, month–1 | `Q47` · kel | 0.199 | month–1 | not captured | [1] / [month] | not captured | exact (1.0) | tbl1:row4:col1 | — | not captured |
| CL, L/h | `Q22` · CL | 0.0236 | L/h | 6.555555555555556e-09 | [l] / [h] | not captured | exact (1.0) | tbl1:row6:col1 | — | not captured |
| Vc, L | `Q63` · V1 | 3.29 | L | 0.00329 | [l] | not captured | exact (1.0) | tbl1:row7:col1 | — | not captured |
| Q, L/h | `Q30` · Q | 0.022 | L/h | 6.111111111111111e-09 | [l] / [h] | not captured | exact (1.0) | tbl1:row8:col1 | — | not captured |
| Vp, L | `Q64` · V2 | 1.1 | L | 0.0011 | [l] | not captured | exact (1.0) | tbl1:row9:col1 | — | not captured |
| box_cox_for_baseline_ts | `Q900` · box_cox_for_baseline_ts | -0.391 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row12:col1 | — | not captured |
| box_cox_for_effect_decay | `Q900` · box_cox_for_effect_decay | -2.97 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row13:col1 | — | not captured |
| theta_q314_albumin | `Q900` · theta_q314_albumin | -0.0193 | not captured | not captured | not captured | not captured | not captured (not captured) | tbl1:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Baseline TS, mm' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col1'])
- unit_dimension_mismatch: 'KD, month−1' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'KG, month−1' — extend the ontology if this is a real PK parameter (source ['tbl1:row3:col1'])
- dropped PD-category row 'Effect of drug concentration on effect decay (Exposureeffect), 1/(μg/mL)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row5:col1'])
- dropped duplicate Q22 ('Effect of TS on CL (TSeffect), L/h per mm TS different from median TS 51 mm', value '0.00476') — already have one for this compound
- covariate level 'Box-Cox for baseline TS' → Q900:box_cox_for_baseline_ts = -0.391 (additive_shift on Q22)
- covariate level 'Box-Cox for effect decay' → Q900:box_cox_for_effect_decay = -2.97 (additive_shift on Q22)
- dropped PD-category row 'Dropout: Intercept logit' → Q344 (logit_intercept, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col1', 'tbl1:row26:col3'])
- dropped PD-category row 'Dropout: Effect of progressive disease' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col1', 'tbl1:row27:col3'])
- dropped PD-category row 'Dropout: Effect of relative change from baseline TS' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row28:col1', 'tbl1:row28:col3'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell tbl1:row1:col3 = '85.9 (44.8–150)'
- unparsed cell tbl1:row2:col3 = '0.161 (0.102–0.363)'
- unparsed cell tbl1:row3:col3 = '0.0275 (0.00372–0.0641)'
- unparsed cell tbl1:row4:col3 = '0.193 (0.0479–0.465)'
- unparsed cell tbl1:row5:col3 = '0.00052 (0.0000125–0.00061)'
- unparsed cell tbl1:row6:col3 = '0.252 (0.0194–0.0353)'
- unparsed cell tbl1:row7:col3 = '3.28 (2.97–4.15)'
- unparsed cell tbl1:row8:col3 = '0.022 (0.0156–0.0270)'
- unparsed cell tbl1:row9:col3 = '1.1 (0.836–1.52)'
- unparsed cell tbl1:row10:col3 = '−0.0184 (−0.0396 to −0.0131)'
- unparsed cell tbl1:row11:col3 = '0.00486 (0.00243–0.00985)'
- unparsed cell tbl1:row12:col3 = '−0.551 (−2.45–0.443)'
- unparsed cell tbl1:row13:col3 = '−2.97 (−2.99 to −2.97)'
- unparsed cell tbl1:row14:col3 = '0.452 (0.137–51.6)'
- unparsed cell tbl1:row15:col3 = '235 (93.0–479)'
- unparsed cell tbl1:row16:col3 = '109 (21.1–404)'
- unparsed cell tbl1:row17:col3 = '31.3 (26.7–45.9)'
- unparsed cell tbl1:row18:col3 = '26.2 (19.8–34.2)'
- unparsed cell tbl1:row19:col3 = '0.488 (0.128–1.40)'
- unparsed cell tbl1:row20:col3 = '111 (33.0–210)'
- unparsed cell tbl1:row21:col3 = '50.6 (38.7–69.7)'
- unparsed cell tbl1:row22:col3 = '13.7 (10.7–16.2)'
- unparsed cell tbl1:row23:col3 = '2.42 (0.573–5.53)'
- unparsed cell tbl1:row24:col3 = '30.1 (19.1–482)'
- unparsed cell tbl1:row25:col3 = '0.00011 (0.000113–0.0107)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[box_cox_for_baseline_ts]` | -0.391 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['additive_shift', 'additive_shift'] | ['additive_shift', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_albumin]` | not captured | -0.0193 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_albumin]` | -0.0193 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q324_category]` | not captured | -0.391 | only_one_extracted |

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
| C2_sign_Q22_category | fail | -0.3674 | not captured | not captured | not captured | base 0.0236 + shift -0.391 (category) |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row8:col1'] |
| C5_dimension_Q331 | fail | 1 / [time] | month−1 | not captured | not captured | ['tbl1:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl1:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0236 | not captured | not captured | ['tbl1:row6:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0236 L/h | not captured | not captured | ['tbl1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.29 L | not captured | not captured | ['tbl1:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.1 L | not captured | not captured | ['tbl1:row9:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Grisic_2022` / `Grisic_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:39 UTC</sub>
