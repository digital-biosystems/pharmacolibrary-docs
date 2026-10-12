<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;paroxetine&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/&quot;},{&quot;label&quot;:&quot;Feng_2006 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paroxetine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Yan2026_reference&quot;,&quot;label&quot;:&quot;Yan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Yan2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paroxetine_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paroxetine/Paroxetine_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paroxetine — `Paroxetine_Feng2006_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.421), gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paroxetine record (Feng_2006, elderly subjects) was rejected because a structural parameter was reported in a unit that could not be converted to SI, giving a dimension mismatch on that parameter.**

One parameter of the paroxetine three-compartment model was reported in a unit that could not be expressed in SI, so the parameter arrived without a usable value and the dimension check on a structural parameter failed. The fitted parameters themselves are Vmax 32.5 µg h⁻¹, Km 83.4 µg l⁻¹, V2 6.70 l, V3 102.1 l, Q 12.3 l h⁻¹, kabs 8.8 h⁻¹ and Vd/F 1010.0 L. A second reader also disagreed on several covariate-effect values, reading theta_q61_im as 182 and theta_q61_pm as 125 where this record lists theta_q367_im 182, theta_q367_um 3670, theta_vmax_pm 125 and theta_vmax_um as absent. Extracted — paroxetine: Vmax 32.5 µg h -1, Km 83.4 µg l -1, V2 6.7 l, V3 102 l, Q 12.3 l h -1, kabs 8.8 h -1, V 1.01e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has paroxetine, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:39:24.125837+00:00) predates the upstream re-run (2026-10-07 18:54:40.075584+00:00). Current validate status: `rejected`.

## Citation
Feng Y et al., Paroxetine: population pharmacokinetic…, British journal of clinical… (2006)
  ·  DOI: [10.1111/j.1365-2125.2006.02629.x](https://doi.org/10.1111/j.1365-2125.2006.02629.x)

<div class="pk-model-meta" hidden drug="paroxetine" model-id="Paroxetine_Feng2006_final" status="rejected" stale="true" population="elderly depressed subjects" measured-compound="paroxetine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V m (µg h -1 ) | `Q66` · Vmax | 32.5 | µg h -1 | not captured | [µg] / [h] | not captured | special_case (0.95) | tab_4:row2:col2, tab_4:row2:col4, tab_4:row2:col5 | — | not captured |
| K m (µg l -1 ) | `Q1` · Km | 83.4 | µg l -1 | not captured | [µg] / [l] | not captured | space_fold (0.95) | tab_4:row3:col2, tab_4:row3:col4, tab_4:row3:col5 | — | 19.4 (None% RSE) |
| V 2 (l) | `Q64` · V2 | 6.70 | l | 0.0067 | [l] | not captured | space_fold (0.95) | tab_4:row4:col2, tab_4:row4:col4, tab_4:row4:col5 | — | 245.3 (None% RSE) |
| V 3 (l) | `Q77` · V3 | 102.1 | l | 0.1021 | [l] | not captured | space_fold (0.95) | tab_4:row5:col2, tab_4:row5:col4, tab_4:row5:col5 | — | not captured |
| Q (l h -1 ) | `Q30` · Q | 12.3 | l h -1 | 3.416666666666667e-06 | [l] / [h] | not captured | exact (1.0) | tab_4:row6:col2, tab_4:row6:col4, tab_4:row6:col5 | — | not captured |
| K a (h -1 ) | `Q49` · kabs | 8.8 | h -1 | 0.002444444444444445 | [1] / [h] | not captured | space_fold (0.95) | tab_4:row7:col2, tab_4:row7:col4, tab_4:row7:col5 | — | not captured |
| theta_q352_pm | `Q900` · theta_q352_pm | 125 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row8:col4, tab_4:row8:col5 | — | not captured |
| theta_q367_im | `Q900` · theta_q367_im | 182 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row9:col4, tab_4:row9:col5 | — | not captured |
| theta_q367_um | `Q900` · theta_q367_um | 3670 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row11:col4, tab_4:row11:col5 | — | not captured |
| theta_q900_wt_v2 | `Q900` · theta_q900_wt_v2 | 1.83 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_4:row12:col4, tab_4:row12:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V m (µg h -1 )' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'EM (θ Vm )' — extend the ontology if this is a real PK parameter (source ['tab_4:row10:col4', 'tab_4:row10:col5'])
- dropped unlinked row (NIL): 'Sex (θ V2 )' — extend the ontology if this is a real PK parameter (source ['tab_4:row13:col4', 'tab_4:row13:col5'])
- covariate effect for Q352 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (V 2 (l)); Q30 (Q (l h -1 ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=paroxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of Feng_2006 (paper reports 2 stages: base model, final model); same population, different model-building step
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_4:row2:col3 = 'V m (µg h -1 )'
- unparsed cell tab_4:row3:col3 = 'K m (µg l -1 )'
- unparsed cell tab_4:row4:col3 = 'V 2 (l per 75 kg wt)'
- unparsed cell tab_4:row5:col3 = 'V 3 (l)'
- unparsed cell tab_4:row6:col3 = 'Q (l h -1 )'
- unparsed cell tab_4:row7:col3 = 'K a (h -1 )'
- unparsed cell tab_4:row12:col3 = 'Wt (θ V2 )'
- unparsed cell tab_4:row13:col3 = 'Sex (θ V2 )'
- unparsed cell tab_4:row16:col3 = 'ω v2 %'
- unparsed cell tab_4:row17:col3 = 'σ1%'
- unparsed cell tab_4:row18:col3 = 'σ2 (µg l -1 )'
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.421 (8/19 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.429 (9/21 fields) | 12 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q352_pm]` | 125 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_im]` | 182 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_um]` | 3670 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_im]` | not captured | 182 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_pm]` | not captured | 125 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_um]` | not captured | 3670 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_wt_v2]` | 1.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_wt_v2]` | not captured | 1.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | paroxetine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | paroxetine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[theta_q367_em]` | 454 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q367_im]` | 182 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q367_pm]` | 125 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q367_um]` | 3670 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_em]` | not captured | 454 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_im]` | not captured | 182 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_pm]` | not captured | 125 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_um]` | not captured | 3670 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v2_wt_v2]` | 1.83 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 2].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | paroxetine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | paroxetine | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_4:row3:col2', 'tab_4:row3:col4', 'tab_4:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_4:row6:col2', 'tab_4:row6:col4', 'tab_4:row6:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_4:row7:col2', 'tab_4:row7:col4', 'tab_4:row7:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_4:row4:col2', 'tab_4:row4:col4', 'tab_4:row4:col5'] |
| C5_dimension_Q66 | fail | [mass] / [time] | µg h -1 | not captured | not captured | ['tab_4:row2:col2', 'tab_4:row2:col4', 'tab_4:row2:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_4:row5:col2', 'tab_4:row5:col4', 'tab_4:row5:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.7 L | not captured | not captured | ['tab_4:row4:col2', 'tab_4:row4:col4', 'tab_4:row4:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_paroxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Feng_2006` / `Feng_2006::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:54 UTC</sub>
