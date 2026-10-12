<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pemigatinib&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/&quot;},{&quot;label&quot;:&quot;Ji_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pemigatinib_Gong2023_reference&quot;,&quot;label&quot;:&quot;Gong_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Gong2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pemigatinib — `Pemigatinib_Ji2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Pemigatinib total clearance (CL) is reported as 26.4 without a unit, preventing its conversion and use; the record was held back.**

CL has no unit. Without a unit the value cannot be converted, so the model cannot use it. Two additional parameter comparison checks failed, with ratios 0.1211 and 17.2316. Extracted — pemigatinib: kabs 12.3 h−1, CL/F 3.86 L/h, V1/F 7.08 L, V2/F 7.07 L, Q/F 13 L/h, CL 26.4.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of body_weight_on_vp_f: this record has none, the second reading 28.2; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Ji T et al., Population Pharmacokinetics Analysis of…, Clinical pharmacology in dr… (2022)
  ·  DOI: [10.1002/cpdd.1038](https://doi.org/10.1002/cpdd.1038)

<div class="pk-model-meta" hidden drug="pemigatinib" model-id="Pemigatinib_Ji2022_reference" status="needs_review" stale="false" population="patients with advanced malignancies" measured-compound="pemigatinib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka, h−1 | `Q49` · kabs | 12.3 | h−1 | 0.003416666666666667 | [1] / [h] | not captured | exact (1.0) | cpdd1038-tbl-0004:row2:col1, cpdd1038-tbl-0004:row2:col2 | — | 127 (None% RSE) |
| CL/F, L/h | `Q27` · CL/F | 3.86 | L/h | 1.0722222222222223e-06 | [l] / [h] | not captured | exact (1.0) | cpdd1038-tbl-0004:row3:col1, cpdd1038-tbl-0004:row3:col2 | — | 43.4 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 7.08 | L | 0.00708 | [l] | not captured | exact (1.0) | cpdd1038-tbl-0004:row4:col1, cpdd1038-tbl-0004:row4:col2 | — | 35.1 (None% RSE) |
| Vp/F, L | `Q82` · V2/F | 7.07 | L | 0.007070000000000001 | [l] | not captured | exact (1.0) | cpdd1038-tbl-0004:row5:col1, cpdd1038-tbl-0004:row5:col2 | — | not captured |
| Q/F, L/h | `Q69` · Q/F | 13.0 | L/h | 3.6111111111111115e-06 | [l] / [h] | not captured | exact (1.0) | cpdd1038-tbl-0004:row6:col1, cpdd1038-tbl-0004:row6:col2 | — | not captured |
| Phosphate binder on CL | `Q22` · CL | 26.4 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cpdd1038-tbl-0004:row7:col1, cpdd1038-tbl-0004:row7:col2 | — | not captured |
| body_weight_median_73.3_kg_on_vc_f | `Q900` · body_weight_median_73.3_kg_on_vc_f | 17.9 | not captured | not captured | not captured | not captured | not captured (not captured) | cpdd1038-tbl-0004:row9:col1, cpdd1038-tbl-0004:row9:col2 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | 26.4 | not captured | not captured | not captured | not captured | not captured (not captured) | cpdd1038-tbl-0004:row8:col1, cpdd1038-tbl-0004:row8:col2 | — | not captured |
| theta_v2_f_body_weight | `Q900` · theta_v2_f_body_weight | 28.2 | not captured | not captured | not captured | not captured | not captured (not captured) | cpdd1038-tbl-0004:row11:col1, cpdd1038-tbl-0004:row11:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka, h−1' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- table section iiv: 'CL/F, L/h' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- table section iiv: 'Vc/F, L' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- covariate level 'Body weight (median = 73.3 kg) on Vc/F' → Q900:body_weight_median_73.3_kg_on_vc_f = 17.9 (linear_fractional on Q27)
- dropped duplicate Q290 ('Proton pump inhibitor on Vc/F', value '23.0') — already have one for this compound
- dropped unlinked row (NIL): 'RV, SD' — extend the ontology if this is a real PK parameter (source ['cpdd1038-tbl-0004:row13:col1', 'cpdd1038-tbl-0004:row13:col2'])
- implicit units: 'Phosphate binder on CL' — the LLM proposed '%', whose dimension does not fit Q22; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pemigatinib
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpdd1038-tbl-0004:row2:col3 = '1.11‐1.91'
- unparsed cell cpdd1038-tbl-0004:row2:col6 = '112, 143'
- unparsed cell cpdd1038-tbl-0004:row3:col3 = '8.38‐9.77'
- unparsed cell cpdd1038-tbl-0004:row3:col6 = '38.9, 47.7'
- unparsed cell cpdd1038-tbl-0004:row4:col3 = '140‐188'
- unparsed cell cpdd1038-tbl-0004:row4:col6 = '24.9, 42.8'
- unparsed cell cpdd1038-tbl-0004:row5:col3 = '66.0‐91.2'
- unparsed cell cpdd1038-tbl-0004:row6:col3 = '11.1‐20.1'
- unparsed cell cpdd1038-tbl-0004:row7:col3 = '0.0697‐0.223'
- unparsed cell cpdd1038-tbl-0004:row8:col3 = '0.0812‐0.300'
- unparsed cell cpdd1038-tbl-0004:row9:col3 = '0.512‐1.01'
- unparsed cell cpdd1038-tbl-0004:row10:col3 = '–0.344‐0.130'
- unparsed cell cpdd1038-tbl-0004:row11:col3 = '0.338‐1.74'
- unparsed cell cpdd1038-tbl-0004:row12:col3 = '0.0853‐0.162'
- unparsed cell cpdd1038-tbl-0004:row13:col3 = '0.374‐0.429'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[body_weight_on_vp_f]` | not captured | 28.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[phosphate binder on cl]` | 26.4 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_male_vs_female_on_cl]` | not captured | 26.4 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_sex]` | 26.4 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_f_body_weight]` | 28.2 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |

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
| C2_base_Q290 | fail | 7.08 | 122.0 | 17.2316 | 0.05 | footnote reference category |
| C2_base_Q49 | fail | 12.3 | 1.49 | 0.1211 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpdd1038-tbl-0004:row3:col1', 'cpdd1038-tbl-0004:row3:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpdd1038-tbl-0004:row4:col1', 'cpdd1038-tbl-0004:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpdd1038-tbl-0004:row2:col1', 'cpdd1038-tbl-0004:row2:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpdd1038-tbl-0004:row6:col1', 'cpdd1038-tbl-0004:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpdd1038-tbl-0004:row5:col1', 'cpdd1038-tbl-0004:row5:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpdd1038-tbl-0004:row7:col1', 'cpdd1038-tbl-0004:row7:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.86 L/h | not captured | not captured | ['cpdd1038-tbl-0004:row3:col1', 'cpdd1038-tbl-0004:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 7.08 L | not captured | not captured | ['cpdd1038-tbl-0004:row4:col1', 'cpdd1038-tbl-0004:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 7.07 L | not captured | not captured | ['cpdd1038-tbl-0004:row5:col1', 'cpdd1038-tbl-0004:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pemigatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ji_2022` / `Ji_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:14 UTC</sub>
