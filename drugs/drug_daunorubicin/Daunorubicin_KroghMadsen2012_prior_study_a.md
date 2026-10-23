<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Krogh-Madsen_2012 \u00b7 prior_study_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_daunorubicin&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_daunorubicin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_daunorubicin.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present_study&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_KroghMadsen2012_prior_study_a`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="daunorubicin" model-id="Daunorubicin_KroghMadsen2012_prior_study_a" status="needs_review" stale="false" population="patients with acute myeloid leukemia" measured-compound="cytarabine, etoposide, and daunorubicin" parameterization="mechanistic" topology="2C"></div>

## Citation
Krogh-Madsen M, Bender B, Jensen MK, Nielsen OJ, Friberg LE, Honoré PH. Population pharmacokinetics of cytarabine, etoposide, and daunorubicin in the treatment for acute myeloid leukemia. Cancer chemotherapy and pharmacology 69(5):1155–1163 (2012).
  ·  DOI: [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z)

## Population and dosing

**Population:** patients with acute myeloid leukemia · condition acute myeloid leukemia · n = 23.

**Dosing:** 50, 100 mg/m2, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 115 | L/h |
| Vc (L) | V1 | 373 | L |
| Q (L/h) | Q | 252 | L/h |
| Vp (L) | V2 | 1120 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — daunorubicin: CL 115 L/h, V1 373 L, Q 252 L/h, V2 1.12e+03 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has cytarabine, etoposide, and daunorubicin, the second reading daunorubicin; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 115 | L/h | 3.194e-05 | m3/s | l/h | exact (1) | tab_1:row4:col2, tab_1:row4:col4, tab_1:row4:col6, Krogh-Madsen_2012_table_3:row1:col1 |
| Vc (L) | `Q63` · V1 | 373 | L | 0.373 | m3 | l | exact (1) | tab_1:row6:col2, tab_1:row6:col4, tab_1:row6:col6, Krogh-Madsen_2012_table_3:row2:col1 |
| Q (L/h) | `Q30` · Q | 252 | L/h | 7e-05 | m3/s | l/h | exact (1) | Krogh-Madsen_2012_table_3:row3:col1 |
| Vp (L) | `Q64` · V2 | 1120 | L | 1.12 | m3 | l | exact (1) | Krogh-Madsen_2012_table_3:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'Res. error (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cytarabine, etoposide, and daunorubicin
- population split: 'prior study a' subgroup of Krogh-Madsen_2012 (paper reports 5 populations: daunorubicin, only present, only present study ?, prior study ?, prior study a)

**Extraction notes:**
- unparsed cell tab_1:row4:col1 = '0.99 (15) a'
- companion parameter table 3 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl]` |  | 129 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl].value` | 115 | 28 | mismatch |
| `qwen3.8-27b` | `parameters[q]` | 252 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` |  | 152 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc]` |  | 453 | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc].value` | 373 | 22 | mismatch |
| `qwen3.8-27b` | `parameters[vp]` | 1120 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vp]` |  | 911 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | cytarabine, etoposide, and daunorubicin | daunorubicin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | cytarabine, etoposide, and daunorubicin | daunorubicin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col6', 'Krogh-Madsen_2012_table_3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Krogh-Madsen_2012_table_3:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row6:col2', 'tab_1:row6:col4', 'tab_1:row6:col6', 'Krogh-Madsen_2012_table_3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Krogh-Madsen_2012_table_3:row4:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 115 | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col6', 'Krogh-Madsen_2012_table_3:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 115 L/h | ['tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col6', 'Krogh-Madsen_2012_table_3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 373 L | ['tab_1:row6:col2', 'tab_1:row6:col4', 'tab_1:row6:col6', 'Krogh-Madsen_2012_table_3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.12e+03 L | ['Krogh-Madsen_2012_table_3:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20Daunorubicin_KroghMadsen2012_prior_study_a&body=Drug%3A%20daunorubicin%0ARecord%3A%20Daunorubicin_KroghMadsen2012_prior_study_a%0APaper%3A%20Krogh-Madsen_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_prior_study_a%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:53 UTC</sub>
