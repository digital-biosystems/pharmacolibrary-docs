<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Malik_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Levque1996_reference&quot;,&quot;label&quot;:&quot;Lev\u00eaque_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Levque1996_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Malik2016_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Malik2016_reference" status="not_modelled" stale="false" population="Hodgkin&#39;s lymphoma patients" measured-compound="vinblastine" parameterization="mechanistic" topology="1C"></div>

## Citation
Malik MZ, Ahmad M, Muahammad S, Aamir MN. Pharmacokinetic evaluation of anticancer drugs in Hodgkin's lymphoma patients after their simultaneous administration. Pakistan journal of pharmaceutical sciences 29(6):2079–2082 (2016).

## Population and dosing

**Population:** Hodgkin's lymphoma patients · condition Hodgkin's lymphoma · age group adult · n = The abstract states a pharmacokinetic study of anticancer drugs was carried out in 18 Hodgkin's lymphoma male patients..

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μg/ml) | Cmax | 7.95 | μg/ml |
| Tmax (h) | tmax | 0.08 | h |
| AUC0-∞ (μg/ml*h) | AUC∞ | 245.54 | μg/ml*h |
| Ke(h-1) | kel | 0.02 | h-1 |
| T1/2 (h) | t1/2z | 35.06 | h |
| MRT (h) | MRT | 48.75 | h |
| Clearance (ml/h) | CL | 45.90 | ml/h |
| Vd (L/Kg) | V | 2.03 | L/Kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet.**

A reported unit could not be converted (Cmax and AUC∞), so that value has no SI equivalent.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μg/ml) | `Q32` · Cmax | 7.95 | μg/ml |  |  | µg/ml | exact (1) | Malik_2016_table_1:row2:col1 |
| Tmax (h) | `Q56` · tmax | 0.08 | h | 288 | s | h | exact (1) | Malik_2016_table_1:row2:col2 |
| AUC0-∞ (μg/ml*h) | `Q17` · AUC∞ | 245.54 | μg/ml*h |  |  | µg/(h·ml) | exact (1) | Malik_2016_table_1:row2:col3 |
| Ke(h-1) | `Q47` · kel | 0.02 | h-1 | 5.556e-06 | 1/s | 1/h | exact (1) | Malik_2016_table_1:row2:col4 |
| T1/2 (h) | `Q57` · t1/2z | 35.06 | h | 1.262e+05 | s | h | exact (1) | Malik_2016_table_1:row2:col5 |
| MRT (h) | `Q53` · MRT | 48.75 | h | 1.755e+05 | s | h | exact (1) | Malik_2016_table_1:row2:col6 |
| Clearance (ml/h) | `Q22` · CL | 45.90 | ml/h | 1.275e-08 | m3/s | ml/h | exact (1) | Malik_2016_table_1:row2:col7 |
| Vd (L/Kg) | `Q61` · V | 2.03 | L/Kg | 0.1421 | m3 | l/kg | exact (1) | Malik_2016_table_1:row2:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'vinblastine' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Malik_2016_table_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (12/12 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Malik_2016_table_1:row2:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Malik_2016_table_1:row2:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Malik_2016_table_1:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Malik_2016_table_1:row2:col4'] |
| C5_dimension_Q53 | pass | [time] |  | ['Malik_2016_table_1:row2:col6'] |
| C5_dimension_Q56 | pass | [time] |  | ['Malik_2016_table_1:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Malik_2016_table_1:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Malik_2016_table_1:row2:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 45.9 | ['Malik_2016_table_1:row2:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0459 L/h | ['Malik_2016_table_1:row2:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 142 L | ['Malik_2016_table_1:row2:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | note |
|---|---|---|---|---|
| T0_analyte_identity |  | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  | no covariate effects in record |
| T3_param_coverage |  | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations |  | pass |  | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 7.71 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 4.32 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 7.95 | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 6.51 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 22.81 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 4.15 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 35.06 | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 6.8 | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.66 | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.1 | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.08 | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.22 | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Malik2016_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Malik2016_reference%0APaper%3A%20Malik_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vinblastine/Vinblastine_Malik2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 18:39 UTC</sub>
