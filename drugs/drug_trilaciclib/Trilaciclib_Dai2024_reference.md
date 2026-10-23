<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;trilaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_trilaciclib/&quot;},{&quot;label&quot;:&quot;Dai_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trilaciclib_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trilaciclib — `Trilaciclib_Dai2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="trilaciclib" model-id="Trilaciclib_Dai2024_reference" status="needs_review" stale="false" population="Chinese and non-Chinese patients with ES-SCLC" measured-compound="trilaciclib" parameterization="mechanistic" topology="2C"></div>

## Citation
Dai HR, Yang Y, Wang CY, Chen YT, Cui YF, Li PJ et al. Trilaciclib dosage in Chinese patients with extensive-stage small cell lung cancer: a pooled pharmacometrics analysis. Acta pharmacologica Sinica 45(10):2212–2225 (2024).
  ·  DOI: [10.1038/s41401-024-01297-6](https://doi.org/10.1038/s41401-024-01297-6)

## Population and dosing

**Population:** Chinese and non-Chinese patients with ES-SCLC · condition extensive-stage small cell lung cancer · age group adult.

**Dosing:** 280 mg/m2, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 157 | L/h | 27.5 (None% RSE) |
| V 1 (L) | V1 | 218 | L |  |
| V 2 (L) | V2 | 790 | L |  |
| V 3 (L) | V3 | 236 | L |  |
| Q 2 (L/h) | Q | 134 | L/h |  |
| Q 3 (L/h) | Q3 | 262 | L/h |  |
| sex_on_v_2 | sex_on_v_2 | -0.159 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — trilaciclib: CL 157 L/h, V1 218 L, V2 790 L, V3 236 L, Q 134 L/h, Q3 262 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].covariate_forms`: this record has ['linear_fractional'], the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 157 | L/h | 4.361e-05 | m3/s | l/h | exact (1) | tab_2:row2:col1, tab_2:row2:col2, tab_2:row2:col4, tab_2:row2:col6 | 27.5 (None% RSE) |
| V 1 (L) | `Q63` · V1 | 218 | L | 0.218 | m3 | l | space_fold (0.95) | tab_2:row3:col1, tab_2:row3:col2, tab_2:row3:col4, tab_2:row3:col6 |  |
| V 2 (L) | `Q64` · V2 | 790 | L | 0.79 | m3 | l | space_fold (0.95) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row4:col4, tab_2:row4:col6 |  |
| V 3 (L) | `Q77` · V3 | 236 | L | 0.236 | m3 | l | space_fold (0.95) | tab_2:row5:col1, tab_2:row5:col2, tab_2:row5:col4, tab_2:row5:col6 |  |
| Q 2 (L/h) | `Q30` · Q | 134 | L/h | 3.722e-05 | m3/s | l/h | special_case (0.95) | tab_2:row6:col1, tab_2:row6:col2, tab_2:row6:col4, tab_2:row6:col6 |  |
| Q 3 (L/h) | `Q308` · Q3 | 262 | L/h | 7.278e-05 | m3/s | l/h | space_fold (0.95) | tab_2:row7:col1, tab_2:row7:col2, tab_2:row7:col4, tab_2:row7:col6 |  |
| sex_on_v_2 | `Q900` · sex_on_v_2 | -0.159 |  |  |  |  |  | tab_2:row10:col1, tab_2:row10:col2, tab_2:row10:col4, tab_2:row10:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['tab_2:row0:col4'])
- dropped unlinked row (NIL): 'BSA on CL' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col4', 'tab_2:row8:col6'])
- routed 'Chinese on CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- covariate level 'Sex on V 2' → Q900:sex_on_v_2 = -0.159 (linear_fractional on Q22)
- dropped duplicate Q22 ('η CL (%)', value '23.3') — already have one for this compound
- dropped duplicate Q63 ('η V1 (%)', value '81.5') — already have one for this compound
- routed 'η V2 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ε p (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trilaciclib
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell tab_2:row2:col5 = '148~167'
- unparsed cell tab_2:row3:col5 = '181~274'
- unparsed cell tab_2:row4:col5 = '733~862'
- unparsed cell tab_2:row5:col5 = '185~362'
- unparsed cell tab_2:row6:col5 = '83~161'
- unparsed cell tab_2:row7:col5 = '220~318'
- unparsed cell tab_2:row8:col5 = '0.575~1.172'
- unparsed cell tab_2:row9:col5 = '0.08~0.26'
- unparsed cell tab_2:row10:col5 = '-0.295~-0.046'
- unparsed cell tab_2:row11:col5 = '19.5~27.2'
- unparsed cell tab_2:row12:col5 = '17.6~37.5'
- unparsed cell tab_2:row13:col5 = '68.6~95.0'
- unparsed cell tab_2:row14:col5 = '12.4~36.9'
- unparsed cell tab_2:row15:col5 = '21.5~24.6'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.467 (7/15 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[q 2].value` | 134 | 131 | mismatch |
| `gpt-oss-120b` | `parameters[q 3].value` | 262 | 265 | mismatch |
| `gpt-oss-120b` | `parameters[sex_on_v_2]` | -0.159 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_sex]` |  | -0.161 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v 3].value` | 236 | 240 | mismatch |
| `gpt-oss-120b` | `parameters[ε p]` |  | 23.1 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col4', 'tab_2:row2:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col4', 'tab_2:row6:col6'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_2:row7:col1', 'tab_2:row7:col2', 'tab_2:row7:col4', 'tab_2:row7:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_2:row3:col1', 'tab_2:row3:col2', 'tab_2:row3:col4', 'tab_2:row3:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col4', 'tab_2:row4:col6'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col4', 'tab_2:row5:col6'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 157 | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col4', 'tab_2:row2:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 157 L/h | ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col4', 'tab_2:row2:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 218 L | ['tab_2:row3:col1', 'tab_2:row3:col2', 'tab_2:row3:col4', 'tab_2:row3:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 790 L | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col4', 'tab_2:row4:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrilaciclib%5D%20Trilaciclib_Dai2024_reference&body=Drug%3A%20trilaciclib%0ARecord%3A%20Trilaciclib_Dai2024_reference%0APaper%3A%20Dai_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trilaciclib/Trilaciclib_Dai2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 20:01 UTC</sub>
