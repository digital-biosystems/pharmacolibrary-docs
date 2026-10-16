<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_obinutuzumab/&quot;},{&quot;label&quot;:&quot;Zhai_2017 \u00b7 jo21900_b_phase_i&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# obinutuzumab — `Obinutuzumab_Zhai2017_jo21900_b_phase_i`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7), gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Cmax, Cmax/dose, Ctrough and AUCt), so that value has no SI equivalent. Extracted — obinutuzumab: Cmax 0.751 μg ml−1, Cmax/dose 416 μg ml−1 mg−1, Ctrough 0.52 μg ml−1, AUCt 11.4 day·μg ml−1, AUC/dose 9.35 day·μg ml−1 mg−1, CL 0.584 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has obinutuzumab, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017)
  ·  DOI: [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232)

<div class="pk-model-meta" hidden drug="obinutuzumab" model-id="Obinutuzumab_Zhai2017_jo21900_b_phase_i" status="rejected" stale="false" population="Chinese patients with B-cell lymphomas" measured-compound="obinutuzumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max (μg ml−1) | `Q32` · Cmax | 0.751 | μg ml−1 | not captured | [µg] / [ml] | not captured | space_fold (0.95) | Zhai_2017_table_3:row2:col4, Zhai_2017_table_3:row4:col4, Zhai_2017_table_3:row5:col4, Zhai_2017_table_3:row6:col4, Zhai_2017_table_3:row7:col4, Zhai_2017_table_3:row8:col4 | — | not captured |
| C max/dose (μg ml−1 mg−1) | `Q174` · Cmax/dose | 416 | μg ml−1 mg−1 | not captured | [µg] / [[mg] · [ml]] | not captured | space_fold (0.95) | Zhai_2017_table_3:row2:col5, Zhai_2017_table_3:row4:col5, Zhai_2017_table_3:row5:col5, Zhai_2017_table_3:row6:col5, Zhai_2017_table_3:row7:col5, Zhai_2017_table_3:row8:col5 | — | not captured |
| C trough (μg ml−1) | `Q37` · Ctrough | 0.520 | μg ml−1 | not captured | [µg] / [ml] | not captured | space_fold (0.95) | Zhai_2017_table_3:row2:col6, Zhai_2017_table_3:row4:col6, Zhai_2017_table_3:row5:col6, Zhai_2017_table_3:row6:col6, Zhai_2017_table_3:row7:col6, Zhai_2017_table_3:row8:col6 | — | not captured |
| AUC 21d (day·μg ml−1) | `Q19` · AUCt | 11.4 | day·μg ml−1 | not captured | [[d] · [µg]] / [ml] | not captured | llm_corrected (0.6) | Zhai_2017_table_3:row2:col8, Zhai_2017_table_3:row4:col8, Zhai_2017_table_3:row5:col8, Zhai_2017_table_3:row6:col8, Zhai_2017_table_3:row7:col8, Zhai_2017_table_3:row8:col8 | — | not captured |
| AUC 21d/dose (day·μg ml−1 mg−1) | `Q189` · AUC/dose | 9.35 | day·μg ml−1 mg−1 | not captured | [[d] · [µg]] / [[mg] · [ml]] | not captured | llm_corrected (0.6) | Zhai_2017_table_3:row5:col9 | — | not captured |
| CLss | `Q22` · CL | 0.584 | L/day | 6.759259259259259e-09 | L/h | not captured | review_gapfill (0.7) | Bender_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Disease' — extend the ontology if this is a real PK parameter (source ['Zhai_2017_table_3:row2:col1', 'Zhai_2017_table_3:row4:col1', 'Zhai_2017_table_3:row6:col1', 'Zhai_2017_table_3:row7:col1', 'Zhai_2017_table_3:row8:col1'])
- dropped unlinked row (NIL): 'No. of patients' — extend the ontology if this is a real PK parameter (source ['Zhai_2017_table_3:row2:col2', 'Zhai_2017_table_3:row4:col2', 'Zhai_2017_table_3:row5:col2', 'Zhai_2017_table_3:row6:col2', 'Zhai_2017_table_3:row7:col2', 'Zhai_2017_table_3:row8:col2'])
- dropped unlinked row (NIL): 'Obinutuzumab dose (mg)' — extend the ontology if this is a real PK parameter (source ['Zhai_2017_table_3:row2:col3', 'Zhai_2017_table_3:row4:col3', 'Zhai_2017_table_3:row5:col3', 'Zhai_2017_table_3:row6:col3', 'Zhai_2017_table_3:row7:col3', 'Zhai_2017_table_3:row8:col3'])
- unit_dimension_mismatch: 'C max/dose (μg ml−1 mg−1)' → Q174 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'C trough/dose (μg ml−1 mg−1)' → Q37 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q37 ('C trough/dose (μg ml−1 mg−1)', value '9159') — already have one for this compound
- unit_dimension_mismatch: 'AUC 21d/dose (day·μg ml−1 mg−1)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=obinutuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'jo21900 b phase i' subgroup of Zhai_2017 (paper reports 8 populations: dlbcl, dlbcla (n = 21), fl, fl (n = 13), gauguin a phase ii, gershwin phase ib, inhl, jo21900 b phase i)
- molar mass: none found for 'obinutuzumab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Bender_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table bcp13232-tbl-0002: ragged_grid
- table Zhai_2017_table_3: ragged_grid
- table Zhai_2017_table_3: unparsed_numeric_cell
- transposed table Zhai_2017_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (88 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.7 (7/10 fields) | 3 |
| `gpt-oss:120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clss]` | 0.584 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | obinutuzumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | obinutuzumab | unknown | mismatch |
| `gpt-oss:120b` | `parameters[obinutuzumab dose]` | not captured | 601 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q174 | fail | 1 / [length] ** 3 | μg ml−1 mg−1 | not captured | not captured | ['Zhai_2017_table_3:row2:col5', 'Zhai_2017_table_3:row4:col5', 'Zhai_2017_table_3:row5:col5', 'Zhai_2017_table_3:row6:col5', 'Zhai_2017_table_3:row7:col5', 'Zhai_2017_table_3:row8:col5'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | day·μg ml−1 mg−1 | not captured | not captured | ['Zhai_2017_table_3:row5:col9'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhai_2017_table_3:row2:col8', 'Zhai_2017_table_3:row4:col8', 'Zhai_2017_table_3:row5:col8', 'Zhai_2017_table_3:row6:col8', 'Zhai_2017_table_3:row7:col8', 'Zhai_2017_table_3:row8:col8'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bender_2024:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhai_2017_table_3:row2:col4', 'Zhai_2017_table_3:row4:col4', 'Zhai_2017_table_3:row5:col4', 'Zhai_2017_table_3:row6:col4', 'Zhai_2017_table_3:row7:col4', 'Zhai_2017_table_3:row8:col4'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Zhai_2017_table_3:row2:col6', 'Zhai_2017_table_3:row4:col6', 'Zhai_2017_table_3:row5:col6', 'Zhai_2017_table_3:row6:col6', 'Zhai_2017_table_3:row7:col6', 'Zhai_2017_table_3:row8:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.584 | not captured | not captured | ['Bender_2024:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0243 L/h | not captured | not captured | ['Bender_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_obinutuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhai_2017` / `Zhai_2017::jo21900_b_phase_i`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:55 UTC</sub>
