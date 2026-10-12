<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Johnson_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Westra2025_reference&quot;,&quot;label&quot;:&quot;Westra_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Johnson2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.471). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**CLm/F has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — osimertinib: CL/F 14.3 L/h, V/F 918 L, kabs 0.196 1/h; AZ5104: CL/F 31.3 L/h, V1/F 143 L, CLm/F 0.182.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[clparent/f].covariate_forms`: this record has ['linear_fractional', 'linear_fractional'], the second reading ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional']; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Johnson M et al., Population Pharmacokinetics of Osimerti…, Pharmacology research & per… (2025)
  ·  DOI: [10.1002/prp2.70098](https://doi.org/10.1002/prp2.70098)

<div class="pk-model-meta" hidden drug="osimertinib" model-id="Osimertinib_Johnson2025_reference" status="needs_review" stale="false" population="patients with advanced non-small cell lung cancer" measured-compound="osimertinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 6 extracted, plus 7 covariate effects.

**Parameterization:** CL/F, CLm/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLparent/F (L/h) | `Q27` · CL/F | 14.3 | L/h | 3.972222222222223e-06 | [l] / [h] | 1.39 | llm (0.6) | prp270098-tbl-0002:row2:col1, prp270098-tbl-0002:row2:col2 | — | not captured |
| CLmetabolite/F (L/h) | `Q27` · CL/F | 31.3 | L/h | 8.694444444444445e-06 | [l] / [h] | 2.00 | exact (1.0) | prp270098-tbl-0002:row3:col1, prp270098-tbl-0002:row3:col2 | — | not captured |
| Vparent/F (L) | `Q76` · V/F | 918 | L | 0.918 | [l] | 3.30 | llm (0.6) | prp270098-tbl-0002:row4:col1, prp270098-tbl-0002:row4:col2 | — | not captured |
| Vmetabolite/F (L) | `Q290` · V1/F | 143 | L | 0.14300000000000002 | [l] | 4.22 | exact (1.0) | prp270098-tbl-0002:row5:col1, prp270098-tbl-0002:row5:col2 | — | not captured |
| ka (1/h) | `Q49` · kabs | 0.196 | 1/h | 5.4444444444444446e-05 | 1/h | 5.09 | exact (1.0) | prp270098-tbl-0002:row6:col1, prp270098-tbl-0002:row6:col2 | — | not captured |
| effect_of_baseline_albumin_on_clparent_f | `Q900` · effect_of_baseline_albumin_on_clparent_f | 0.825 | not captured | not captured | not captured | 11.7 | not captured (not captured) | prp270098-tbl-0002:row16:col1, prp270098-tbl-0002:row16:col2 | — | not captured |
| Asian (non‐Chinese, non‐Japanese) population effect on CLmetabolite/F | `Q351` · CLm/F | 0.182 | not captured | not captured | not captured | 11.2 | llm (0.6) | prp270098-tbl-0002:row19:col1, prp270098-tbl-0002:row19:col2 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.421 | not captured | not captured | not captured | 13.9 | not captured (not captured) | prp270098-tbl-0002:row17:col1, prp270098-tbl-0002:row17:col2 | — | not captured |
| theta_clm_f_albumin | `Q900` · theta_clm_f_albumin | 0.928 | not captured | not captured | not captured | 11.4 | not captured (not captured) | prp270098-tbl-0002:row18:col1, prp270098-tbl-0002:row18:col2 | — | not captured |
| theta_clm_f_body_weight | `Q900` · theta_clm_f_body_weight | 0.822 | not captured | not captured | not captured | 8.01 | not captured (not captured) | prp270098-tbl-0002:row23:col1, prp270098-tbl-0002:row23:col2 | — | not captured |
| theta_q900_albumin | `Q900` · theta_q900_albumin | 2.27 | not captured | not captured | not captured | 9.82 | not captured (not captured) | prp270098-tbl-0002:row24:col1, prp270098-tbl-0002:row24:col2 | — | not captured |
| theta_v_f_body_weight | `Q900` · theta_v_f_body_weight | 0.814 | not captured | not captured | not captured | 16.9 | not captured (not captured) | prp270098-tbl-0002:row25:col1, prp270098-tbl-0002:row25:col2 | — | not captured |
| theta_q367_albumin | `Q900` · theta_q367_albumin | -0.831 | not captured | not captured | not captured | 28.6 | not captured (not captured) | prp270098-tbl-0002:row26:col1, prp270098-tbl-0002:row26:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section covariance: 'Correlation (CLparent/F and CLmetabolite/F)' routed out of structural estimates ('Correlation of random effects')
- table section residual_error: 'Additive error osimertinib (nM)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error AZ5104 (nM)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error osimertinib (fraction)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error AZ5104 (fraction)' routed out of structural estimates ('Residual variability')
- covariate level 'Effect of baseline albumin on CLparent/F' → Q900:effect_of_baseline_albumin_on_clparent_f = 0.825 (linear_fractional on Q27)
- dropped duplicate Q351 ('Chinese population effect on CLmetabolite/F', value '0.076') — already have one for this compound
- dropped duplicate Q351 ('Japanese population effect on CLmetabolite/F', value '0.184') — already have one for this compound
- dropped duplicate Q351 ('Non‐Asian, non‐White population effect on CLmetabolite/F', value '0.090') — already have one for this compound
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (1/h)' → 1/h (from the paper text: 'The parameter is identified as “ka (1/h)” in the provided parameter description.')
- implicit units: 'Asian (non‐Chinese, non‐Japanese) population effect on CLmetabolite/F' — the LLM proposed 'unitless', whose dimension does not fit Q351; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=osimertinib
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 10 linked by role; re-tagged parent→AZ5104 ×28
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.471 (16/34 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[asian (non‐chinese, non‐japanese) population effect on clmetabolite/f]` | 0.182 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[chinese population effect on clmetabolite/f]` | not captured | 0.076 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clmetabolite/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[clparent/f].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[effect_of_baseline_albumin_on_clparent_f]` | 0.825 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_baseline_albumin_on_vmetabolite_f]` | not captured | -0.831 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_baseline_body_weight_on_clmetabolite_f]` | not captured | 0.822 | only_one_extracted |
| `qwen3.8-27b` | `parameters[effect_of_baseline_body_weight_on_vparent_f]` | not captured | 0.814 | only_one_extracted |
| `qwen3.8-27b` | `parameters[japanese population effect on clmetabolite/f]` | not captured | 0.184 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_f_albumin]` | not captured | 0.825 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_f_body_weight]` | 0.421 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_clm_f_body_weight]` | 0.822 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q324_body_weight]` | not captured | 0.421 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q367_albumin]` | -0.831 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q63_albumin]` | not captured | 2.27 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_albumin]` | 2.27 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v_f_body_weight]` | 0.814 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vparent/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270098-tbl-0002:row2:col1', 'prp270098-tbl-0002:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270098-tbl-0002:row3:col1', 'prp270098-tbl-0002:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp270098-tbl-0002:row5:col1', 'prp270098-tbl-0002:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp270098-tbl-0002:row6:col1', 'prp270098-tbl-0002:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp270098-tbl-0002:row4:col1', 'prp270098-tbl-0002:row4:col2'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270098-tbl-0002:row19:col1', 'prp270098-tbl-0002:row19:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.3 L/h | not captured | not captured | ['prp270098-tbl-0002:row2:col1', 'prp270098-tbl-0002:row2:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 31.3 L/h | not captured | not captured | ['prp270098-tbl-0002:row3:col1', 'prp270098-tbl-0002:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 143 L | not captured | not captured | ['prp270098-tbl-0002:row5:col1', 'prp270098-tbl-0002:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 918 L | not captured | not captured | ['prp270098-tbl-0002:row4:col1', 'prp270098-tbl-0002:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_osimertinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Johnson_2025` / `Johnson_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:48 UTC</sub>
