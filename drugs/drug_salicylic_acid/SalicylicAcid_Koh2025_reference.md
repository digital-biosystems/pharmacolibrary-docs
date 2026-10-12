<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;salicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_salicylic_acid/&quot;},{&quot;label&quot;:&quot;Koh_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SalicylicAcid_Mathurkar2018_reference&quot;,&quot;label&quot;:&quot;Mathurkar_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salicylic_acid/SalicylicAcid_Mathurkar2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salicylic acid — `SalicylicAcid_Koh2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.103). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**K31 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — salicylic acid: FR 0.69, kabs 0.22 h−1, tlag 2.81 h, kcomp 2.32 h−1, kcomp 0.57 h−1, kfm 2.97 h−1, k31 1.31, CLm/F 2.76 L/h, … (+4); thromboxane B2: kel 0.023 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has acetylsalicylic acid, the second reading acetylsalicylic_acid; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `acetylsalicylic acid`, measured `salicylic acid`.

## Citation
Koh J et al., Population Pharmacokinetic and Pharmaco…, Drug design, development an… (2025)
  ·  DOI: [10.2147/DDDT.S533428](https://doi.org/10.2147/DDDT.S533428)

<div class="pk-model-meta" hidden drug="salicylic acid" model-id="SalicylicAcid_Koh2025_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="salicylic acid" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| fr | `Q43` · FR | 0.69 | not captured | not captured | not captured | 4.99 | exact (1.0) | t0001:row2:col1, t0001:row2:col2 | — | 0.29 (16.5% RSE) |
| ka capsule (h−1) | `Q49` · kabs | 0.22 | h−1 | 6.111111111111111e-05 | [1] / [h] | 21.8 | exact (1.0) | t0001:row3:col1, t0001:row3:col2 | — | 1.09 (14.7% RSE) |
| Lag0 (h) | `Q83` · tlag | 2.81 | h | 10116.0 | [h] | 8.26 | exact (1.0) | t0001:row6:col1, t0001:row6:col2 | — | not captured |
| k23 (h−1) | `Q48` · kcomp | 2.32 | h−1 | 0.0006444444444444444 | [1] / [h] | 4.11 | exact (1.0) | t0001:row7:col1, t0001:row7:col2 | — | 0.27 (15% RSE) |
| k24 (h−1) | `Q48` · kcomp | 0.57 | h−1 | 0.00015833333333333332 | [1] / [h] | not captured | exact (1.0) | t0001:row8:col1 | — | not captured |
| k34 (h−1) | `Q305` · kfm | 2.97 | h−1 | 0.0008250000000000001 | [1] / [h] | 11.7 | exact (1.0) | t0001:row9:col1, t0001:row9:col2 | — | not captured |
| βweight_k34 | `Q304` · k31 | 1.31 | not captured | not captured | not captured | 30.9 | llm (0.6) | t0001:row10:col1, t0001:row10:col2 | — | not captured |
| CLm/F (L/h) | `Q351` · CLm/F | 2.76 | L/h | 7.666666666666666e-07 | [l] / [h] | 3.86 | exact (1.0) | t0001:row11:col1, t0001:row11:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 0.08 | L/h | 2.2222222222222224e-08 | [l] / [h] | not captured | exact (1.0) | t0001:row13:col1 | — | not captured |
| V3/F (L) | `Q290` · V1/F | 23.51 | L | 0.023510000000000003 | [l] | 12.3 | exact (1.0) | t0001:row14:col1, t0001:row14:col2 | — | not captured |
| V4/F (L) | `Q290` · V1/F | 7.5 | L | 0.0075 | [l] | 2.6 | exact (1.0) | t0001:row15:col1, t0001:row15:col2 | — | not captured |
| V5/F (L) | `Q82` · V2/F | 1.98 | L | 0.00198 | [l] | not captured | exact (1.0) | t0001:row16:col1 | — | not captured |
| kout (h−1) | `Q47` · kel | 0.023 | h−1 | 6.3888888888888885e-06 | [1] / [h] | 5.51 | exact (1.0) | t0001:row18:col1, t0001:row18:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (ASA)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error (SA)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error (TXB2)' routed out of structural estimates ('Residual error')
- dropped duplicate Q49 ('ka tablet (h−1)', value '0.053') — already have one for this compound
- dropped unlinked row (NIL): 'Tk0 (h)' — extend the ontology if this is a real PK parameter (source ['t0001:row5:col1', 't0001:row5:col2'])
- routed 'βweight_CLm' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped PD-category row 'R0 (μg/L)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row17:col1', 't0001:row17:col2'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row19:col1'])
- dropped PD-category row 'IC50 (mol/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row20:col1'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['t0001:row21:col1'])
- metabolite salicylic acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=salicylic acid
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [2] (site presystemic: 'Differences in absorption profiles between two formulations were assessed as a covariate effect.ResultsThe PK of aspirin')
- row roles: 2 per-group rows of acetylsalicylic acid absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 17 linked by role; re-tagged parent→salicylic acid ×19, parent→thromboxane B2 ×11
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (9/27 fields) | 18 |
| `gpt-oss:120b` | not confirmed | 0.103 (3/29 fields) | 26 |

<details><summary>44 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['acetylsalicylic acid', 'salicylic acid', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clm/f]` | not captured | 2.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | 2.76 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` | 0.57 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k34]` | 2.97 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kout]` | 0.023 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag0]` | 2.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 0.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 0.08 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0]` | not captured | 1.58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f].parameter_id` | Q290 | Q78 | mismatch |
| `gpt-oss-120b` | `parameters[v4/f]` | not captured | 7.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | 7.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v5/f]` | 1.98 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[βweight_clm]` | not captured | 1.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[βweight_k34]` | 1.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | acetylsalicylic acid | acetylsalicylic_acid | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | salicylic acid | acetylsalicylic_acid | mismatch |
| `gpt-oss:120b` | `model.links` | [['acetylsalicylic acid', 'salicylic acid', 'metabolism']] | [['acetylsalicylic_acid', 'salicylic_acid', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[clm/f]` | 2.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clm/f]` | not captured | 2.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k23]` | 2.32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k23]` | not captured | 2.32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k24]` | 0.57 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k34]` | 2.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k34]` | not captured | 2.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka capsule]` | 0.22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka capsule]` | not captured | 0.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kout]` | not captured | 0.023 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kout]` | 0.023 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag0]` | 2.81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag0]` | not captured | 2.81 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f]` | 0.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f]` | not captured | 0.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3/f]` | 23.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3/f]` | not captured | 23.51 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v4/f]` | 7.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v4/f]` | not captured | 7.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v5/f]` | 1.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v5/f]` | not captured | 1.98 | only_one_extracted |
| `gpt-oss:120b` | `parameters[βweight_clm]` | not captured | 1.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[βweight_k34]` | 1.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | acetylsalicylic acid | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | salicylic acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0001:row14:col1', 't0001:row14:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0001:row15:col1', 't0001:row15:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row9:col1', 't0001:row9:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0001:row11:col1', 't0001:row11:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row18:col1', 't0001:row18:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row7:col1', 't0001:row7:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['t0001:row3:col1', 't0001:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0001:row13:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['t0001:row16:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['t0001:row6:col1', 't0001:row6:col2'] |
| C5_unit_missing_Q304 | fail | 1 / [time] | not captured | not captured | not captured | ['t0001:row10:col1', 't0001:row10:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 23.5 L | not captured | not captured | ['t0001:row14:col1', 't0001:row14:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 7.5 L | not captured | not captured | ['t0001:row15:col1', 't0001:row15:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.98 L | not captured | not captured | ['t0001:row16:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salicylic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Koh_2025` / `Koh_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:08 UTC</sub>
