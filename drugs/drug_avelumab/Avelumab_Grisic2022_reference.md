<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Grisic_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Grisic2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Avelumab’s KD of 0.105 month−1 was refused because its reported dimension conflicts with its meaning as an equilibrium dissociation constant.

<div class="pk-model-meta" hidden drug="avelumab" model-id="Avelumab_Grisic2022_reference" status="rejected" stale="false" population="patients with metastatic Merkel cell carcinoma" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Grisic AM, Xiong W, Tanneau L, Jönsson S, Friberg LE, Karlsson MO et al. Model-Based Characterization of the Bidirectional Interaction Between Pharmacokinetics and Tumor Growth Dynamics in Patients with Metastatic Merkel Cell Carcinoma Treated with Avelumab. Clinical cancer research : an official journal of the American Association for Cancer Research 28(7):1363–1371 (2022).
  ·  DOI: [10.1158/1078-0432.CCR-21-2662](https://doi.org/10.1158/1078-0432.CCR-21-2662)

## Population and dosing

**Population:** patients with metastatic Merkel cell carcinoma · condition metastatic Merkel cell carcinoma · age group adult · n = 147.

**Dosing:** 700 mg, iv, multiple, every 336 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KD, month−1 | KD | 0.105 | month−1 |
| λ, month–1 | kel | 0.199 | month–1 |
| CL, L/h | CL | 0.0236 | L/h |
| Vc, L | V1 | 3.29 | L |
| Q, L/h | Q | 0.022 | L/h |
| Vp, L | V2 | 1.1 | L |
| box_cox_for_baseline_ts | box_cox_for_baseline_ts | -0.391 |  |
| box_cox_for_effect_decay | box_cox_for_effect_decay | -2.97 |  |
| theta_q314_albumin | theta_q314_albumin | -0.0193 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Avelumab’s KD of 0.105 month−1 was refused because its reported dimension conflicts with its meaning as an equilibrium dissociation constant.**

The record defines KD as an equilibrium dissociation constant for drug-target binding but reports it in month−1, and a reported unit lacked an SI conversion. The findings also report a negative clearance or volume at baseline or in a covariate scenario, but do not identify the parameter or value, so that result cannot be tied to a listed estimate. Extracted — avelumab: KD 0.105 month−1, kel 0.199 month–1, CL 0.0236 L/h, V1 3.29 L, Q 0.022 L/h, V2 1.1 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of box_cox_for_baseline_ts: this record has -0.391, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KD, month−1 | `Q331` · KD | 0.105 | month−1 |  |  | 1/month | exact (1) | tbl1:row2:col1 |
| λ, month–1 | `Q47` · kel | 0.199 | month–1 |  |  | 1/month | exact (1) | tbl1:row4:col1 |
| CL, L/h | `Q22` · CL | 0.0236 | L/h | 6.556e-09 | m3/s | l/h | exact (1) | tbl1:row6:col1 |
| Vc, L | `Q63` · V1 | 3.29 | L | 0.00329 | m3 | l | exact (1) | tbl1:row7:col1 |
| Q, L/h | `Q30` · Q | 0.022 | L/h | 6.111e-09 | m3/s | l/h | exact (1) | tbl1:row8:col1 |
| Vp, L | `Q64` · V2 | 1.1 | L | 0.0011 | m3 | l | exact (1) | tbl1:row9:col1 |
| box_cox_for_baseline_ts | `Q900` · box_cox_for_baseline_ts | -0.391 |  |  |  |  |  | tbl1:row12:col1 |
| box_cox_for_effect_decay | `Q900` · box_cox_for_effect_decay | -2.97 |  |  |  |  |  | tbl1:row13:col1 |
| theta_q314_albumin | `Q900` · theta_q314_albumin | -0.0193 |  |  |  |  |  | tbl1:row10:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at "Needs review" — not promoted
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
| `qwen3.8-27b` | `parameters[box_cox_for_baseline_ts]` | -0.391 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].covariate_forms` | ['additive_shift', 'additive_shift'] | ['additive_shift', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_albumin]` |  | -0.0193 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q314_albumin]` | -0.0193 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q324_category]` |  | -0.391 | only_one_extracted |

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
| C2_sign_Q22_category | fail | -0.3674 |  | base 0.0236 + shift -0.391 (category) |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tbl1:row8:col1'] |
| C5_dimension_Q331 | fail | 1 / [time] | month−1 | ['tbl1:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tbl1:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tbl1:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tbl1:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0236 | ['tbl1:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0236 L/h | ['tbl1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.29 L | ['tbl1:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.1 L | ['tbl1:row9:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavelumab%5D%20Avelumab_Grisic2022_reference&body=Drug%3A%20avelumab%0ARecord%3A%20Avelumab_Grisic2022_reference%0APaper%3A%20Grisic_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_avelumab/Avelumab_Grisic2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:39 UTC</sub>
