<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_obinutuzumab/&quot;},{&quot;label&quot;:&quot;Zhai_2017 \u00b7 clla_b&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# obinutuzumab — `Obinutuzumab_Zhai2017_clla_b`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="obinutuzumab" model-id="Obinutuzumab_Zhai2017_clla_b" status="rejected" stale="false" population="Chinese patients with B-cell lymphomas" measured-compound="obinutuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhai J, Qin Y, Zhu J, Song Y, Shen Z, Du X et al. Pharmacokinetics of obinutuzumab in Chinese patients with B-cell lymphomas. British journal of clinical pharmacology 83(7):1446–1456 (2017).
  ·  DOI: [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232)

## Population and dosing

**Population:** Chinese patients with B-cell lymphomas · condition B-cell lymphomas · age group adult · n = &gt;=48.

**Dosing:** 1000 mg, iv, multiple, every 168 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max (μg ml−1) | Cmax | 0.751 | μg ml−1 |
| C max/dose (μg ml−1 mg−1) | Cmax/dose | 416 | μg ml−1 mg−1 |
| C trough (μg ml−1) | Ctrough | 0.520 | μg ml−1 |
| AUC 21d (day·μg ml−1) | AUCt | 11.4 | day·μg ml−1 |
| CLss | CL | 0.584 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Cmax, Cmax/dose, Ctrough and AUCt), so that value has no SI equivalent. Extracted — obinutuzumab: Cmax 0.751 μg ml−1, Cmax/dose 416 μg ml−1 mg−1, Ctrough 0.52 μg ml−1, AUCt 11.4 day·μg ml−1, CL 0.584 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has obinutuzumab, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max (μg ml−1) | `Q32` · Cmax | 0.751 | μg ml−1 |  |  | µg/ml | space_fold (0.95) | Zhai_2017_table_3:row3:col3, Zhai_2017_table_3:row3:col5, Zhai_2017_table_3:row3:col7, Zhai_2017_table_3:row3:col8, Zhai_2017_table_3:row3:col9 |
| C max/dose (μg ml−1 mg−1) | `Q174` · Cmax/dose | 416 | μg ml−1 mg−1 |  |  | µg/(mg·ml) | space_fold (0.95) | Zhai_2017_table_3:row4:col3, Zhai_2017_table_3:row4:col5, Zhai_2017_table_3:row4:col7, Zhai_2017_table_3:row4:col8, Zhai_2017_table_3:row4:col9 |
| C trough (μg ml−1) | `Q37` · Ctrough | 0.520 | μg ml−1 |  |  | µg/ml | space_fold (0.95) | Zhai_2017_table_3:row5:col3, Zhai_2017_table_3:row5:col5, Zhai_2017_table_3:row5:col7, Zhai_2017_table_3:row5:col8, Zhai_2017_table_3:row5:col9 |
| AUC 21d (day·μg ml−1) | `Q19` · AUCt | 11.4 | day·μg ml−1 |  |  | (d·µg)/ml | llm_corrected (0.6) | Zhai_2017_table_3:row7:col3, Zhai_2017_table_3:row7:col5, Zhai_2017_table_3:row7:col7, Zhai_2017_table_3:row7:col8, Zhai_2017_table_3:row7:col9 |
| CLss | `Q22` · CL | 0.584 | L/day | 6.759e-09 | m3/s | L/h | review_gapfill (0.7) | Bender_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Time point' — extend the ontology if this is a real PK parameter (source ['bcp13232-tbl-0002:row0:col4'])
- dropped unlinked row (NIL): 'Cycle 1, Day 1 b' — extend the ontology if this is a real PK parameter (source ['bcp13232-tbl-0002:row1:col4'])
- dropped unlinked row (NIL): 'Disease' — extend the ontology if this is a real PK parameter (source ['Zhai_2017_table_3:row0:col3', 'Zhai_2017_table_3:row0:col5', 'Zhai_2017_table_3:row0:col7', 'Zhai_2017_table_3:row0:col8', 'Zhai_2017_table_3:row0:col9'])
- dropped unlinked row (NIL): 'No. of patients' — extend the ontology if this is a real PK parameter (source ['Zhai_2017_table_3:row1:col3', 'Zhai_2017_table_3:row1:col5', 'Zhai_2017_table_3:row1:col7', 'Zhai_2017_table_3:row1:col8', 'Zhai_2017_table_3:row1:col9'])
- dropped unlinked row (NIL): 'Obinutuzumab dose (mg)' — extend the ontology if this is a real PK parameter (source ['Zhai_2017_table_3:row2:col3', 'Zhai_2017_table_3:row2:col5', 'Zhai_2017_table_3:row2:col7', 'Zhai_2017_table_3:row2:col8', 'Zhai_2017_table_3:row2:col9'])
- unit_dimension_mismatch: 'C max/dose (μg ml−1 mg−1)' → Q174 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'C trough/dose (μg ml−1 mg−1)' → Q37 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q37 ('C trough/dose (μg ml−1 mg−1)', value '9159') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=obinutuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'clla , b (n = 11)' subgroup of Zhai_2017 (paper reports 10 populations: clla , b (n = 11), dlbcl, dlbcla (n = 21), fl, fl (n = 13), gauguin a phase ii, gershwin phase ib, inhl, jo21900 b phase i, αnhl)
- molar mass: none found for 'obinutuzumab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Bender_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell bcp13232-tbl-0002:row1:col1 = 'C max, μg ml−1'
- transposed table Zhai_2017_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Zhai_2017_table_3:row6:col5 = '10 223'
- unparsed cell Zhai_2017_table_3:row6:col7 = '11 900'
- unparsed cell Zhai_2017_table_3:row6:col8 = '10 800'
- unparsed cell Zhai_2017_table_3:row6:col9 = '25 100'
- unparsed cell Zhai_2017_table_3:row6:col11 = '13 000'
- unparsed cell Zhai_2017_table_3:row6:col12 = '11 285'
- unparsed cell Zhai_2017_table_3:row7:col1 = '11 001'
- unparsed cell Zhai_2017_table_3:row7:col10 = '12 289'
- companion parameter table 3 transcribed (88 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clss]` | 0.584 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | obinutuzumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | obinutuzumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q174 | fail | 1 / [length] ** 3 | μg ml−1 mg−1 | ['Zhai_2017_table_3:row4:col3', 'Zhai_2017_table_3:row4:col5', 'Zhai_2017_table_3:row4:col7', 'Zhai_2017_table_3:row4:col8', 'Zhai_2017_table_3:row4:col9'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Zhai_2017_table_3:row7:col3', 'Zhai_2017_table_3:row7:col5', 'Zhai_2017_table_3:row7:col7', 'Zhai_2017_table_3:row7:col8', 'Zhai_2017_table_3:row7:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bender_2024:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zhai_2017_table_3:row3:col3', 'Zhai_2017_table_3:row3:col5', 'Zhai_2017_table_3:row3:col7', 'Zhai_2017_table_3:row3:col8', 'Zhai_2017_table_3:row3:col9'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 |  | ['Zhai_2017_table_3:row5:col3', 'Zhai_2017_table_3:row5:col5', 'Zhai_2017_table_3:row5:col7', 'Zhai_2017_table_3:row5:col8', 'Zhai_2017_table_3:row5:col9'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.584 | ['Bender_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0243 L/h | ['Bender_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bobinutuzumab%5D%20Obinutuzumab_Zhai2017_clla_b&body=Drug%3A%20obinutuzumab%0ARecord%3A%20Obinutuzumab_Zhai2017_clla_b%0APaper%3A%20Zhai_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_clla_b%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:09 UTC</sub>
