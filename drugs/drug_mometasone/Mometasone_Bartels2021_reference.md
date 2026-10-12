<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;mometasone&quot;,&quot;href&quot;:&quot;drugs/drug_mometasone/&quot;},{&quot;label&quot;:&quot;Bartels_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mometasone_Vlachou2021_reference&quot;,&quot;label&quot;:&quot;Vlachou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mometasone/Mometasone_Vlachou2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mometasone — `Mometasone_Bartels2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.412). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Mometasone furoate's absorption rate constant has a dimension mismatch, and the peripheral compartment is unreachable from the dose.**

The absorption rate constant is listed with units of L/h, which is dimensionally inconsistent with a first-order rate constant. Additionally, the model structure defines a peripheral compartment that lacks a path from the dosing compartment, rendering it an orphan compartment. Extracted — mometasone: V2/F 1.3e+03 L, kabs 50 L/h, D1 0.01 h, CL/F 370 ml/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of body_weight_on_cl_f: this record has 0.75, the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Bartels C et al., Population Pharmacokinetic Analysis of…, European journal of drug me… (2021)
  ·  DOI: [10.1007/s13318-021-00689-x](https://doi.org/10.1007/s13318-021-00689-x)

<div class="pk-model-meta" hidden drug="mometasone" model-id="Mometasone_Bartels2021_reference" status="rejected" stale="false" population="patients with asthma" measured-compound="mometasone furoate" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vp/F (L) | `Q82` · V2/F | 1300 | L | 1.3 | [l] | not captured | exact (1.0) | Tab5:row6:col3 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 50 | L/h | not captured | [l] / [h] | not captured | exact (1.0) | Tab5:row7:col1 | — | not captured |
| Duration of zero-order absorption (h) | `Q310` · D1 | 0.01 | h | 36.0 | [h] | not captured | exact (1.0) | Tab5:row8:col5 | — | not captured |
| body_weight_on_cl_f | `Q900` · body_weight_on_cl_f | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row22:col3 | — | not captured |
| body_weight_on_vc_f | `Q900` · body_weight_on_vc_f | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row23:col3 | — | not captured |
| body_weight_on_q_f | `Q900` · body_weight_on_q_f | 0.75 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row25:col1, Tab5:row25:col3, Tab5:row25:col5 | — | not captured |
| body_weight_on_vp_f | `Q900` · body_weight_on_vp_f | 1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row26:col1, Tab5:row26:col3, Tab5:row26:col5 | — | not captured |
| Cl/F (ml/min) | `Q27` · CL/F | 370.0 | ml/min | 6.166666666666666e-06 | L/h | not captured | review_gapfill (0.7) | Vlachou_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'gly' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ind' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mf' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Ka (1/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- covariate level 'Body weight on CL/F' → Q900:body_weight_on_cl_f = 0.75 (linear_fractional on the model)
- covariate level 'Body weight on Vc/F' → Q900:body_weight_on_vc_f = 1 (linear_fractional on the model)
- covariate level 'Body weight on Q/F' → Q900:body_weight_on_q_f = 0.75 (linear_fractional on the model)
- covariate level 'Body weight on Vp/F' → Q900:body_weight_on_vp_f = 1 (linear_fractional on the model)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mometasone furoate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- gap-filled Q27 (CL/F) from Vlachou_2021's review values (primary lacked it)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab5:row6:col1 = '5700 (15%)'
- unparsed cell Tab5:row6:col5 = '3700 (21%)'
- unparsed cell Tab5:row7:col5 = '2.4 (9.8%)'
- unparsed cell Tab5:row8:col1 = '0.055 (8.2%)'
- unparsed cell Tab5:row22:col1 = '0.28 (46%)'
- unparsed cell Tab5:row22:col5 = '0.34 (28%)'
- unparsed cell Tab5:row23:col1 = '0.43 (29%)'
- unparsed cell Tab5:row23:col5 = '0.33 (27%)'
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.412 (7/17 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[body_weight_on_cl_f]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_on_q_f]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_on_vc_f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_on_vp_f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 370.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_body_weight]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q290_body_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q69_body_weight]` | not captured | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_body_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vlachou_2021:review'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab5:row8:col5'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['Tab5:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.2 L/h | not captured | not captured | ['Vlachou_2021:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.3e+03 L | not captured | not captured | ['Tab5:row6:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mometasone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bartels_2021` / `Bartels_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 00:38 UTC</sub>
