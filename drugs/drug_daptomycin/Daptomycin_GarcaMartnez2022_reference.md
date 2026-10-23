<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;daptomycin&quot;,&quot;href&quot;:&quot;drugs/drug_daptomycin/&quot;},{&quot;label&quot;:&quot;Garc\u00eda-Mart\u00ednez_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daptomycin_Lou2021_reference&quot;,&quot;label&quot;:&quot;Lou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daptomycin/Daptomycin_Lou2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daptomycin — `Daptomycin_GarcaMartnez2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="daptomycin" model-id="Daptomycin_GarcaMartnez2022_reference" status="rejected" stale="false" population="patients with normal and impaired renal function" measured-compound="daptomycin" parameterization="mechanistic" topology="2C"></div>

## Citation
García-Martínez T, Bellés-Medall MD, García-Cremades M, Ferrando-Piqueres R, Mangas-Sanjuán V, Merino-Sanjuan M. Population Pharmacokinetic/Pharmacodynamic Modelling of Daptomycin for Schedule Optimization in Patients with Renal Impairment. Pharmaceutics 14(10) (2022).
  ·  DOI: [10.3390/pharmaceutics14102226](https://doi.org/10.3390/pharmaceutics14102226)

## Population and dosing

**Population:** patients with normal and impaired renal function · condition renal impairment · age group adult · n = . 157 observations from 46 patients.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 6.98 | L/h | 32 (None% RSE) |
| V1 (L) | V1 | 0.95 | L |  |
| Q (L/h) | Q | 1.96 | L/h |  |
| V2 (L/h) | V2 | 21 | L/h | 47 (None% RSE) |
| Bmax (mg/L) | Bmax | 160 | mg/L |  |
| KD (mg/L) | KD | 3.56 | mg/L |  |
| crcl_on_cl | crcl_on_cl | 0.19 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (Bmax and KD), so that value has no SI equivalent. Extracted — daptomycin: CL 6.98 L/h, V1 0.95 L, Q 1.96 L/h, V2 21 L/h, Bmax 160 mg/L, KD 3.56 mg/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[bmax].value`: this record has 160, the second reading 26; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 6.98 | L/h | 1.939e-06 | m3/s | l/h | exact (1) | pharmaceutics-14-02226-t002:row3:col1, pharmaceutics-14-02226-t002:row3:col2, pharmaceutics-14-02226-t002:row3:col4, pharmaceutics-14-02226-t002:row3:col5 | 32 (None% RSE) |
| V1 (L) | `Q63` · V1 | 0.95 | L | 0.00095 | m3 | l | exact (1) | pharmaceutics-14-02226-t002:row4:col1, pharmaceutics-14-02226-t002:row4:col2, pharmaceutics-14-02226-t002:row4:col4, pharmaceutics-14-02226-t002:row4:col5 |  |
| Q (L/h) | `Q30` · Q | 1.96 | L/h | 5.444e-07 | m3/s | l/h | exact (1) | pharmaceutics-14-02226-t002:row5:col1, pharmaceutics-14-02226-t002:row5:col2, pharmaceutics-14-02226-t002:row5:col4, pharmaceutics-14-02226-t002:row5:col5 |  |
| V2 (L/h) | `Q64` · V2 | 21 | L/h | 5.833e-06 | m3/s | l/h | exact (1) | pharmaceutics-14-02226-t002:row6:col1, pharmaceutics-14-02226-t002:row6:col2, pharmaceutics-14-02226-t002:row6:col4, pharmaceutics-14-02226-t002:row6:col5 | 47 (None% RSE) |
| Bmax (mg/L) | `Q332` · Bmax | 160 | mg/L |  |  | mg/l | exact (1) | pharmaceutics-14-02226-t002:row7:col1, pharmaceutics-14-02226-t002:row7:col2, pharmaceutics-14-02226-t002:row7:col4, pharmaceutics-14-02226-t002:row7:col5 |  |
| KD (mg/L) | `Q331` · KD | 3.56 | mg/L |  |  | mg/l | exact (1) | pharmaceutics-14-02226-t002:row8:col1, pharmaceutics-14-02226-t002:row8:col2, pharmaceutics-14-02226-t002:row8:col4, pharmaceutics-14-02226-t002:row8:col5 |  |
| crcl_on_cl | `Q900` · crcl_on_cl | 0.19 |  |  |  |  |  | pharmaceutics-14-02226-t002:row9:col1, pharmaceutics-14-02226-t002:row9:col2, pharmaceutics-14-02226-t002:row9:col4, pharmaceutics-14-02226-t002:row9:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V2 (%)' routed out of structural estimates ('Inter-individual variability')
- column 'population pk model estimates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bootstrap results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'V2 (L/h)' → Q64 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- covariate level 'CrCl on CL' → Q900:crcl_on_cl = 0.19 (linear_fractional on Q22)
- routed 'Additive on Log-scale (%)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daptomycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell pharmaceutics-14-02226-t002:row3:col6 = '[6.63–7.44]'
- unparsed cell pharmaceutics-14-02226-t002:row4:col6 = '[0.92–1.09]'
- unparsed cell pharmaceutics-14-02226-t002:row5:col6 = '[1.43–2.48]'
- unparsed cell pharmaceutics-14-02226-t002:row6:col6 = '[19.3–22.1]'
- unparsed cell pharmaceutics-14-02226-t002:row7:col6 = '[129–183]'
- unparsed cell pharmaceutics-14-02226-t002:row8:col6 = '[3.17–3.93]'
- unparsed cell pharmaceutics-14-02226-t002:row9:col6 = '[0.18–0.22]'
- unparsed cell pharmaceutics-14-02226-t002:row11:col6 = '[21–42]'
- unparsed cell pharmaceutics-14-02226-t002:row12:col6 = '[52–94]'
- unparsed cell pharmaceutics-14-02226-t002:row14:col6 = '[18–24]'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bmax].value` | 160 | 26 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 6.98 | 14 | mismatch |
| `gpt-oss-120b` | `parameters[crcl_on_cl]` | 0.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd].value` | 3.56 | 15 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 1.96 | 21 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_crcl]` |  | 12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1].value` | 0.95 | 9 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 21 | 19 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-02226-t002:row3:col1', 'pharmaceutics-14-02226-t002:row3:col2', 'pharmaceutics-14-02226-t002:row3:col4', 'pharmaceutics-14-02226-t002:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-02226-t002:row5:col1', 'pharmaceutics-14-02226-t002:row5:col2', 'pharmaceutics-14-02226-t002:row5:col4', 'pharmaceutics-14-02226-t002:row5:col5'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-14-02226-t002:row8:col1', 'pharmaceutics-14-02226-t002:row8:col2', 'pharmaceutics-14-02226-t002:row8:col4', 'pharmaceutics-14-02226-t002:row8:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-14-02226-t002:row4:col1', 'pharmaceutics-14-02226-t002:row4:col2', 'pharmaceutics-14-02226-t002:row4:col4', 'pharmaceutics-14-02226-t002:row4:col5'] |
| C5_dimension_Q64 | fail | [length] ** 3 / [time] | L/h | ['pharmaceutics-14-02226-t002:row6:col1', 'pharmaceutics-14-02226-t002:row6:col2', 'pharmaceutics-14-02226-t002:row6:col4', 'pharmaceutics-14-02226-t002:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.98 | ['pharmaceutics-14-02226-t002:row3:col1', 'pharmaceutics-14-02226-t002:row3:col2', 'pharmaceutics-14-02226-t002:row3:col4', 'pharmaceutics-14-02226-t002:row3:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.98 L/h | ['pharmaceutics-14-02226-t002:row3:col1', 'pharmaceutics-14-02226-t002:row3:col2', 'pharmaceutics-14-02226-t002:row3:col4', 'pharmaceutics-14-02226-t002:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.95 L | ['pharmaceutics-14-02226-t002:row4:col1', 'pharmaceutics-14-02226-t002:row4:col2', 'pharmaceutics-14-02226-t002:row4:col4', 'pharmaceutics-14-02226-t002:row4:col5'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.00583 L | ['pharmaceutics-14-02226-t002:row6:col1', 'pharmaceutics-14-02226-t002:row6:col2', 'pharmaceutics-14-02226-t002:row6:col4', 'pharmaceutics-14-02226-t002:row6:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaptomycin%5D%20Daptomycin_GarcaMartnez2022_reference&body=Drug%3A%20daptomycin%0ARecord%3A%20Daptomycin_GarcaMartnez2022_reference%0APaper%3A%20Garc%C3%ADa-Mart%C3%ADnez_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daptomycin/Daptomycin_GarcaMartnez2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:59 UTC</sub>
