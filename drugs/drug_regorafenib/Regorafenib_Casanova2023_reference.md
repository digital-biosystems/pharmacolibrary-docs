<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Casanova_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Casanova2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Casanova2023_reference" status="needs_review" stale="false" population="pediatric patients with recurrent/refractory solid tumors" measured-compound="regorafenib" parameterization="mechanistic" topology="1C"></div>

## Citation
Casanova M, Bautista F, Campbell-Hewson Q, Makin G, Marshall LV, Verschuur AC et al. Regorafenib plus Vincristine and Irinotecan in Pediatric Patients with Recurrent/Refractory Solid Tumors: An Innovative Therapy for Children with Cancer Study. Clinical cancer research : an official journal of the American Association for Cancer Research 29(21):4341–4351 (2023).
  ·  DOI: [10.1158/1078-0432.CCR-23-0257](https://doi.org/10.1158/1078-0432.CCR-23-0257)

## Population and dosing

**Population:** pediatric patients with recurrent/refractory solid tumors · condition recurrent/refractory solid tumors · age group mixed · n = 21.

**Dosing:** 60, 65, 72, 82 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| AUC(0–24)md (mg•h/L) | AUCt | 55.6 | mg*h/L | 41.3 |
| t1/2eff,md (h) | t1/2z | 34.1 | h | 32.3 |
| CL | CL | 158.0 | L/h |  |
| REG ka IREG (n = 8) | kabs | 0.41 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; the clearance plausibility check could not be computed.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Delahousse_2024, Szkutnik-Fiedler_2024) cannot stand in for this paper's evidence. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — regorafenib: AUCt 55.6 mg*h/L, t1/2z 34.1 h, CL 158 L/h, kabs 0.41 h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl: this record has 158.0, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| AUC(0–24)md (mg•h/L) | `Q19` · AUCt | 55.6 | mg*h/L |  |  | mg*h/L | 41.3 | llm_corrected (0.6) | Casanova_2023_table_5:row0:col1, Casanova_2023_table_5:row0:col2, Casanova_2023_table_5:row1:col1, Casanova_2023_table_5:row1:col2 |
| t1/2eff,md (h) | `Q57` · t1/2z | 34.1 | h | 1.228e+05 | s | h | 32.3 | llm (0.6) | Casanova_2023_table_5:row2:col1, Casanova_2023_table_5:row2:col2, Casanova_2023_table_5:row3:col1, Casanova_2023_table_5:row3:col2 |
| CL | `Q22` · CL | 158.0 | L/h | 4.389e-05 | m3/s | L/h |  | review_gapfill (0.7) | Delahousse_2024:review |
| REG ka IREG (n = 8) | `Q49` · kabs | 0.41 | h−1 | 0.0001139 | 1/s | 1/h |  | review_gapfill (0.7) | Szkutnik-Fiedler_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'geometric mean (cv %)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_unknown: 'mg•h/L' (AUCt)
- implicit units: 'AUC(0–24)md (mg•h/L)' → mg*h/L (from the paper text: 'The parameter is labeled “AUC(0–24)md (mg•h/L) = 55.6,” which states the unit as mg•h/L.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=regorafenib
- gap-filled Q22 (CL) from Delahousse_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Szkutnik-Fiedler_2024's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 5
- unparsed cell Casanova_2023_table_5:row0:col3 = '57.6 (44.5–114.0)'
- unparsed cell Casanova_2023_table_5:row1:col3 = '60.1 (31.6–88.6)'
- unparsed cell Casanova_2023_table_5:row2:col3 = '41.4 (31.1–69.2)'
- unparsed cell Casanova_2023_table_5:row3:col3 = '34.4 (17.7–68.9)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl]` | 158.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[reg ka ireg]` | 0.41 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2eff,md]` | 34.1 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Casanova_2023_table_5:row0:col1', 'Casanova_2023_table_5:row0:col2', 'Casanova_2023_table_5:row1:col1', 'Casanova_2023_table_5:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Delahousse_2024:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Szkutnik-Fiedler_2024:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Casanova_2023_table_5:row2:col1', 'Casanova_2023_table_5:row2:col2', 'Casanova_2023_table_5:row3:col1', 'Casanova_2023_table_5:row3:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 158 | ['Delahousse_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 158 L/h | ['Delahousse_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bregorafenib%5D%20Regorafenib_Casanova2023_reference&body=Drug%3A%20regorafenib%0ARecord%3A%20Regorafenib_Casanova2023_reference%0APaper%3A%20Casanova_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_regorafenib/Regorafenib_Casanova2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:39 UTC</sub>
