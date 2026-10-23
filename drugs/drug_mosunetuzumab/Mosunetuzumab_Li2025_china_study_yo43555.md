<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;mosunetuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_mosunetuzumab/&quot;},{&quot;label&quot;:&quot;Li_2025 \u00b7 china_study_yo43555&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mosunetuzumab — `Mosunetuzumab_Li2025_china_study_yo43555`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="mosunetuzumab" model-id="Mosunetuzumab_Li2025_china_study_yo43555" status="needs_review" stale="false" population="Chinese patients with relapsed or refractory follicular lymphoma" measured-compound="mosunetuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Li J, Liao MZ, Wilkins J, Penuel E, Wang B, Vadhavkar S et al. Ethnic Sensitivity Assessment of Mosunetuzumab Pharmacokinetics and Pharmacodynamics in Chinese Patients With Relapsed or Refractory Follicular Lymphoma. Clinical and translational science 18(5):e70211 (2025).
  ·  DOI: [10.1111/cts.70211](https://doi.org/10.1111/cts.70211)

## Population and dosing

**Population:** Chinese patients with relapsed or refractory follicular lymphoma · condition relapsed or refractory follicular lymphoma · age group adult.

**Dosing:** 1, 2, 30, 60 mg, iv, multiple, every 21 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Half‐life (day) | t1/2z | 10 | day |
| Tmax (day) | tmax | 13 | day |
| Cmax (μg/mL) | Cmax | 13 | μg/mL |
| AUC0–42 (day·μg/mL) | AUCt | 10 | day·μg/mL |
| linear CL estimate | CL | 0.725 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Jamois_2025) cannot stand in for this paper's evidence. A reported unit could not be converted (Cmax and AUCt), so that value has no SI equivalent. Extracted — mosunetuzumab: t1/2z 10 day, tmax 13 day, Cmax 13 μg/mL, AUCt 10 day·μg/mL, CL 0.725 L/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of linear cl estimate: this record has 0.725, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Half‐life (day) | `Q57` · t1/2z | 10 | day | 8.64e+05 | s | d | llm (0.6) | Li_2025_table_2:row1:col1 |
| Tmax (day) | `Q56` · tmax | 13 | day | 1.123e+06 | s | d | exact (1) | Li_2025_table_2:row2:col1 |
| Cmax (μg/mL) | `Q32` · Cmax | 13 | μg/mL |  |  | µg/ml | exact (1) | Li_2025_table_2:row3:col1 |
| AUC0–42 (day·μg/mL) | `Q19` · AUCt | 10 | day·μg/mL |  |  | (d·µg)/ml | llm (0.6) | Li_2025_table_2:row4:col1 |
| linear CL estimate | `Q22` · CL | 0.725 | L/day | 8.391e-09 | m3/s | L/h | review_gapfill (0.7) | Jamois_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mosunetuzumab
- population split: 'china study yo43555 (n = 17)' subgroup of Li_2025 (paper reports 3 populations: china study yo43555 (n = 17), global study go29781 group b dose expansion cohort patients with r/r fl (n = 90), mean)
- molar mass: none found for 'mosunetuzumab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Jamois_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table cts70211-tbl-0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell cts70211-tbl-0003:row1:col4 = '0.436 (0.453) {0.209} [0.317–0.553]'
- transposed table Li_2025_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (32 record(s))
- unparsed cell Li_2025_table_4:row0:col3 = '127 (145) {0.582} [35.0–210]'
- unparsed cell Li_2025_table_4:row0:col4 = '14.1 (14.9) {0.472} [5.92–23.9]'
- unparsed cell Li_2025_table_4:row0:col5 = '48.5 (51.0) {0.265} [29.3–62.6]'
- unparsed cell Li_2025_table_4:row1:col3 = '123 (144) {0.600} [34.1–205]'
- unparsed cell Li_2025_table_4:row1:col4 = '13.7 (14.7) {0.480} [5.90–23.5]'
- unparsed cell Li_2025_table_4:row1:col5 = '47.8 (50.7) {0.271} [29.2–62.2]'
- unparsed cell Li_2025_table_4:row2:col2 = '172 (175) {0.168} [137–211]'
- unparsed cell Li_2025_table_4:row2:col3 = '19.0 (19.3) {0.239} [13.3–24.1]'
- unparsed cell Li_2025_table_4:row2:col4 = '56.7 (57.5) {0.106} [48.0–62.8]'
- unparsed cell Li_2025_table_4:row3:col3 = '158 (168) {0.298} [96.9–223]'
- unparsed cell Li_2025_table_4:row3:col4 = '17.6 (17.4) {0.295} [10.8–24.3]'
- unparsed cell Li_2025_table_4:row3:col5 = '54.6 (54.9) {0.137} [43.1–62.9]'
- companion parameter table 4 transcribed (4 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[linear cl estimate]` | 0.725 |  | only_one_extracted |

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
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Li_2025_table_2:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Jamois_2025:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Li_2025_table_2:row3:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Li_2025_table_2:row2:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Li_2025_table_2:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.725 | ['Jamois_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0302 L/h | ['Jamois_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmosunetuzumab%5D%20Mosunetuzumab_Li2025_china_study_yo43555&body=Drug%3A%20mosunetuzumab%0ARecord%3A%20Mosunetuzumab_Li2025_china_study_yo43555%0APaper%3A%20Li_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mosunetuzumab/Mosunetuzumab_Li2025_china_study_yo43555%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:11 UTC</sub>
