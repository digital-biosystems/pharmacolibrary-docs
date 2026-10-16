<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;tanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_tanezumab/&quot;},{&quot;label&quot;:&quot;Jonsson_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tanezumab — `Tanezumab_Jonsson2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.619), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The tanezumab record was rejected because one structural parameter's reported unit could not be expressed in SI units, producing a dimension mismatch on a structural parameter.**

The two-compartment tanezumab model carries clearance 0.135 l day–1, central volume 2.71 l, intercompartmental clearance 0.371 l day–1, peripheral volume 1.98 l, plus target-mediated parameters Km 27.7 ng ml–1 and Vmax 8.03 μg day–1 and weight and gender covariate effects. One of the reported units could not be converted to a standard SI unit, so that parameter entered the model without a consistent dimension, and the dimension check on a structural parameter failed. The record was therefore rejected. Extracted — tanezumab: CL 0.135 l day –1, V1 2.71 l, Q 0.371 l day –1, V2 1.98 l, Km 27.7 ng ml –1, Vmax 8.03 μg day –1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of gender_on_cl: this record has 0.143, the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:40:39.552711+00:00) predates the upstream re-run (2026-10-07 06:17:49.296438+00:00). Current validate status: `rejected`.

## Citation
Jonsson EN et al., Population pharmacokinetics of tanezuma…, British journal of clinical… (2016)
  ·  DOI: [10.1111/bcp.12850](https://doi.org/10.1111/bcp.12850)

<div class="pk-model-meta" hidden drug="tanezumab" model-id="Tanezumab_Jonsson2016_reference" status="rejected" stale="true" population="adults with osteoarthritis" measured-compound="tanezumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL † (l day –1) | `Q22` · CL | 0.135 | l day –1 | 1.5625e-09 | [l] / [d] | not captured | exact (1.0) | bcp12850-tbl-0002:row1:col1 | — | not captured |
| V 1 † (l) | `Q63` · V1 | 2.71 | l | 0.00271 | [l] | not captured | space_fold (0.95) | bcp12850-tbl-0002:row2:col1 | — | not captured |
| Q † (l day –1) | `Q30` · Q | 0.371 | l day –1 | 4.293981481481482e-09 | [l] / [d] | not captured | exact (1.0) | bcp12850-tbl-0002:row3:col1 | — | not captured |
| V 2 † (l) | `Q64` · V2 | 1.98 | l | 0.00198 | [l] | not captured | space_fold (0.95) | bcp12850-tbl-0002:row4:col1 | — | not captured |
| KM (ng ml –1) | `Q1` · Km | 27.7 | ng ml –1 | not captured | [ng] / [ml] | not captured | exact (1.0) | bcp12850-tbl-0002:row6:col1 | — | not captured |
| VM (μg day –1) | `Q66` · Vmax | 8.03 | μg day –1 | not captured | [µg] / [d] | not captured | special_case (0.95) | bcp12850-tbl-0002:row7:col1 | — | not captured |
| gender_on_cl | `Q900` · gender_on_cl | 0.143 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row14:col1 | — | not captured |
| theta_cl_wt | `Q900` · theta_cl_wt | 0.77 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row8:col1 | — | not captured |
| theta_q3_wt | `Q900` · theta_q3_wt | 0.554 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row9:col1 | — | not captured |
| theta_q314_wt | `Q900` · theta_q314_wt | 0.302 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row10:col1 | — | not captured |
| theta_v1_gender | `Q900` · theta_v1_gender | 0.175 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp12850-tbl-0002:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Parameter'
- dropped unlinked row (NIL): 'Mixture probability with low RSV' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row5:col1'])
- unit_dimension_mismatch: 'VM (μg day –1)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'CL cr on CL' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row11:col1'])
- dropped duplicate Q22 ('Dose on CL', value '0.0669') — already have one for this compound
- covariate level 'Gender on CL' → Q900:gender_on_cl = 0.143 (linear_fractional on Q22)
- routed 'Cov CL‐V 1 ‡' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Low RSV, %CV' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row20:col1'])
- dropped unlinked row (NIL): 'High RSV, %CV' — extend the ontology if this is a real PK parameter (source ['bcp12850-tbl-0002:row21:col1'])
- covariate effect for Q3 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tanezumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'tanezumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp12850-tbl-0002:row1:col2 = '0.129, 0.14'
- unparsed cell bcp12850-tbl-0002:row2:col2 = '2.66, 2.76'
- unparsed cell bcp12850-tbl-0002:row3:col2 = '0.198, 0.545'
- unparsed cell bcp12850-tbl-0002:row4:col2 = '1.72, 2.24'
- unparsed cell bcp12850-tbl-0002:row5:col2 = '0.738, 0.789'
- unparsed cell bcp12850-tbl-0002:row6:col2 = '7.8, 47.7'
- unparsed cell bcp12850-tbl-0002:row7:col2 = '5.72, 10.3'
- unparsed cell bcp12850-tbl-0002:row8:col2 = '0.682, 0.858'
- unparsed cell bcp12850-tbl-0002:row9:col2 = '0.489, 0.62'
- unparsed cell bcp12850-tbl-0002:row10:col2 = '0.15, 0.454'
- unparsed cell bcp12850-tbl-0002:row11:col2 = '0.0738, 0.141'
- unparsed cell bcp12850-tbl-0002:row12:col2 = '0.0346, 0.0992'
- unparsed cell bcp12850-tbl-0002:row13:col2 = '0.143, 0.208'
- unparsed cell bcp12850-tbl-0002:row14:col2 = '0.106, 0.181'
- unparsed cell bcp12850-tbl-0002:row15:col2 = '25, 27'
- unparsed cell bcp12850-tbl-0002:row16:col2 = '19, 21'
- unparsed cell bcp12850-tbl-0002:row17:col2 = '0.03, 0.038'
- unparsed cell bcp12850-tbl-0002:row18:col2 = '26, 52'
- unparsed cell bcp12850-tbl-0002:row19:col2 = '15, 24'
- unparsed cell bcp12850-tbl-0002:row20:col2 = '13, 13'
- unparsed cell bcp12850-tbl-0002:row21:col2 = '52, 55'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.619 (13/21 fields) | 8 |
| `gpt-oss:120b` | confirmed | 1.0 (18/18 fields) | none |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[gender_on_cl]` | 0.143 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_gender]` | not captured | 0.143 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_wt]` | 0.302 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q3_wt]` | 0.554 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_wt]` | not captured | 0.554 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_wt]` | not captured | 0.302 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v 2].covariate_forms` | [] | ['linear_fractional'] | mismatch |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp12850-tbl-0002:row6:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp12850-tbl-0002:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp12850-tbl-0002:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp12850-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp12850-tbl-0002:row4:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg day –1 | not captured | not captured | ['bcp12850-tbl-0002:row7:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.135 | not captured | not captured | ['bcp12850-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00562 L/h | not captured | not captured | ['bcp12850-tbl-0002:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.71 L | not captured | not captured | ['bcp12850-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.98 L | not captured | not captured | ['bcp12850-tbl-0002:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tanezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jonsson_2016` / `Jonsson_2016::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:17 UTC</sub>
