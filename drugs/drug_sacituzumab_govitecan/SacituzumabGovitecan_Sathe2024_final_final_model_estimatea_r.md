<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;,&quot;href&quot;:&quot;drugs/drug_sacituzumab_govitecan/&quot;},{&quot;label&quot;:&quot;Sathe_2024 \u00b7 final_final_model_estimatea_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sacituzumab govitecan — `SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The free SN-38 metabolite is an orphan compartment with no path from the dose, causing the model to be rejected.

<div class="pk-model-meta" hidden drug="sacituzumab govitecan" model-id="SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r" status="rejected" stale="false" population="patients with metastatic triple-negative breast cancer and other solid tumors" measured-compound="sacituzumab_govitecan" parameterization="apparent" topology="general_linear"></div>

## Citation
Sathe AG, Singh I, Singh P, Diderichsen PM, Wang X, Chang P et al. Population Pharmacokinetics of Sacituzumab Govitecan in Patients with Metastatic Triple-Negative Breast Cancer and Other Solid Tumors. Clinical pharmacokinetics 63(5):669–681 (2024).
  ·  DOI: [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3)

## Population and dosing

**Population:** patients with metastatic triple-negative breast cancer and other solid tumors · condition metastatic triple-negative breast cancer and other solid tumors · age group adult.

**Dosing:** 560, 700, 840, 1260 mg, iv, multiple, every 21 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Log (KREL), 1/h | kfm | -2.34 | 1/h | 2.61 |
| Log (CLSN38/F), L/h | CL/F | 6.02 | L/h | 1.05 |
| Log(QSN38/F), L/h | Q/F | 5.51 | L/h | 0.466 |
| theta_q319_weight_power | theta_q319_weight_power | 0.500 |  | 13.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The free SN-38 metabolite is an orphan compartment with no path from the dose, causing the model to be rejected.**

The record defines a link from sacituzumab govitecan to free SN-38 using the rate constant KREL. However, the review finding identifies the metabolite as unreachable or orphaned, meaning it lacks a valid path from the dose. This structural inconsistency prevents the model from being published. Extracted — free SN-38: kfm -2.34 1/h, CL/F 6.02 L/h, Q/F 5.51 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sacituzumab_govitecan, the second reading sacituzumab govitecan; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Log (KREL), 1/h | `Q305` · kfm | -2.34 | 1/h | -0.00065 | 1/s | 1/h | 2.61 | exact (1) | Sathe_2024_table_2:row0:col1 |
| Log (CLSN38/F), L/h | `Q27` · CL/F | 6.02 | L/h | 1.672e-06 | m3/s | l/h | 1.05 | exact (1) | Sathe_2024_table_2:row1:col1 |
| Log(QSN38/F), L/h | `Q69` · Q/F | 5.51 | L/h | 1.531e-06 | m3/s | l/h | 0.466 | exact (1) | Sathe_2024_table_2:row2:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.500 |  |  |  |  | 13.3 |  | Sathe_2024_table_2:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sacituzumab_govitecan
- topology: 1 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- model-stage split: 'final model estimatea (%rse)' is the final model of Sathe_2024 (paper reports 3 stages: final model estimate (%rse), final model estimatea (%rse), untransformed estimate); same population, different model-building step
- row roles (LLM): model_class=compartmental; 34/34 row label(s) assigned, 14 linked by role; re-tagged parent→free SN-38 ×13, parent→total antibody ×14
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab1:row1:col2 = '0.133 (0.131 to 0.137)'
- unparsed cell Tab1:row2:col2 = '0.006 (0.005 to 0.006)'
- unparsed cell Tab1:row3:col2 = '2.770 (2.72 to 2.82)'
- unparsed cell Tab1:row4:col2 = '0.906 (0.852 to 0.974)'
- unparsed cell Tab1:row5:col2 = '0.011 (0.008 to 0.016)'
- unparsed cell Tab1:row6:col2 = '0.503 (0.428 to 0.567)'
- unparsed cell Tab1:row7:col2 = '0.526 (0.463 to 0.593)'
- unparsed cell Tab1:row8:col2 = '–0.355 (–0.467 to –0.256)'
- unparsed cell Tab1:row9:col2 = '0.005 (0.004 to 0.008)'
- unparsed cell Tab1:row10:col2 = '0.202 (0.182 to 0.23)'
- unparsed cell Sathe_2024_table_2:row0:col2 = '–2.35 (–2.48 to –2.22)'
- unparsed cell Sathe_2024_table_2:row1:col2 = '6.00 (5.89 to 6.13)'
- unparsed cell Sathe_2024_table_2:row2:col2 = '5.51 (5.34 to 5.70)'
- unparsed cell Sathe_2024_table_2:row5:col2 = '0.341 (0.258 to 0.430)'
- unparsed cell Sathe_2024_table_2:row6:col2 = '0.412 (0.299 to 0.555)'
- unparsed cell Sathe_2024_table_2:row7:col2 = '0.494 (0.355 to 0.648)'
- unparsed cell Sathe_2024_table_2:row8:col2 = '0.011 (0.009 to 0.013)'
- unparsed cell Sathe_2024_table_2:row9:col2 = '–0.224 (–0.361 to 0.038)'
- unparsed cell Sathe_2024_table_2:row10:col2 = '–1.05 (–1.33 to –0.860)'
- unparsed cell Sathe_2024_table_2:row11:col2 = '0.274 (0.191 to 0.370)'
- companion parameter table 2 transcribed (14 record(s))
- unparsed cell Sathe_2024_table_3:row0:col2 = '0.016 (0.015 to 0.018)'
- unparsed cell Sathe_2024_table_3:row1:col2 = '0.010 (0.008 to 0.012)'
- unparsed cell Sathe_2024_table_3:row2:col2 = '3.06 (2.97 to 3.13)'
- unparsed cell Sathe_2024_table_3:row3:col2 = '1.18 (0.852 to 1.71)'
- unparsed cell Sathe_2024_table_3:row4:col2 = '0.374 (0.210 to 0.548)'
- unparsed cell Sathe_2024_table_3:row5:col2 = '0.449 (0.332 to 0.553)'
- unparsed cell Sathe_2024_table_3:row6:col2 = '–0.756 (–1.04 to –0.404)'
- unparsed cell Sathe_2024_table_3:row7:col2 = '–0.135 (–0.195 to –0.082)'
- unparsed cell Sathe_2024_table_3:row8:col2 = '0.122 (0.068 to 0.182)'
- unparsed cell Sathe_2024_table_3:row9:col2 = '–0.259 (–0.346 to –0.152)'
- unparsed cell Sathe_2024_table_3:row10:col2 = '17.8 (6.85 to 27.3)'
- unparsed cell Sathe_2024_table_3:row12:col2 = '0.206 (0.172 to 0.264)'
- unparsed cell Sathe_2024_table_3:row13:col2 = '26.2 (12.7 to 35.9)'
- unparsed cell Sathe_2024_table_3:row14:col2 = '0.102 (0.073 to 0.132)'
- unparsed cell Sathe_2024_table_3:row15:col2 = '0.045 (0.036 to 0.061)'
- unparsed cell Sathe_2024_table_3:row16:col2 = '0.045 (0.032 to 0.062)'
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/17 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['sacituzumab_govitecan', 'free sn-38', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[clsg]` |  | 0.133 | only_one_extracted |
| `gpt-oss-120b` | `parameters[log (clsn38/f)]` | 6.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[log (krel)]` | -2.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[log(qsn38/f)]` | 5.51 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum relative reduction of cltab, %]` |  | 16.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qsg]` |  | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_albumin_power]` |  | -0.735 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` |  | 0.508 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` | 0.500 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q38_albumin_power]` |  | -0.355 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` |  | 0.121 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1sg]` |  | 2.770 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2sg]` |  | 0.908 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sacituzumab_govitecan | sacituzumab govitecan | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sacituzumab_govitecan | sacituzumab govitecan | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Sathe_2024_table_2:row1:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Sathe_2024_table_2:row0:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Sathe_2024_table_2:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.02 L/h | ['Sathe_2024_table_2:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsacituzumab_govitecan%5D%20SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r&body=Drug%3A%20sacituzumab_govitecan%0ARecord%3A%20SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r%0APaper%3A%20Sathe_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:58 UTC</sub>
