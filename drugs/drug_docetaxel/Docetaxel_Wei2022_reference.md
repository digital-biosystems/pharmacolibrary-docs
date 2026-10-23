<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;docetaxel&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/&quot;},{&quot;label&quot;:&quot;Wei_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Docetaxel_Clarke1999_reference&quot;,&quot;label&quot;:&quot;Clarke_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_Clarke1999_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Docetaxel_LaunayIliadis1995_reference&quot;,&quot;label&quot;:&quot;Launay-Iliadis_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_docetaxel/Docetaxel_LaunayIliadis1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# docetaxel — `Docetaxel_Wei2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Docetaxel allometric exponent of -0.71 implies a physiologically implausible decrease in clearance with increasing body size.

<div class="pk-model-meta" hidden drug="docetaxel" model-id="Docetaxel_Wei2022_reference" status="rejected" stale="false" population="Chinese cancer patients" measured-compound="docetaxel" parameterization="mechanistic" topology="2C"></div>

## Citation
Wei J, Zhang Y, Li Z, Li X, Zhao C. Docetaxel population pharmacokinetic modelling and simulation in Chinese cancer patients. Annals of translational medicine 10(12):705 (2022).
  ·  DOI: [10.21037/atm-22-2619](https://doi.org/10.21037/atm-22-2619)

## Population and dosing

**Population:** Chinese cancer patients · condition cancer · age group adult · n = : 440,  440.

**Dosing:** 75 mg/m2, iv, multiple, every 2160 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h) | CL | 53.40 | L/h |
| Vc (L) | V1 | 48.21 | L |
| Q (L/h) | Q | 0.42 | L/h |
| Vp (L) | V2 | 0.06 | L |
| fAge-CL | allometric_exponent | -0.71 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Docetaxel allometric exponent of -0.71 implies a physiologically implausible decrease in clearance with increasing body size.**

The record lists an allometric exponent of -0.71 for the relationship between body size and clearance. This negative value indicates that the model predicts drug elimination slows down as patients get larger, which contradicts standard pharmacokinetic principles where clearance typically scales positively with body weight. The review rejected the model because this parameter magnitude falls outside the accepted physiological window, suggesting an extraction or estimation error. Extracted — docetaxel: CL 53.4 L/h, V1 48.2 L, Q 0.42 L/h, V2 0.06 L, allometric_exponent -0.71.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 53.40, the second reading 52.42; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 53.40 | L/h | 1.483e-05 | m3/s | l/h | exact (1) | t2:row2:col1, t2:row2:col2, t2:row2:col4, t2:row2:col6, t2:row2:col8 |
| Vc (L) | `Q63` · V1 | 48.21 | L | 0.04821 | m3 | l | exact (1) | t2:row3:col1, t2:row3:col2, t2:row3:col4, t2:row3:col6, t2:row3:col8 |
| Q (L/h) | `Q30` · Q | 0.42 | L/h | 1.167e-07 | m3/s | l/h | exact (1) | t2:row4:col1, t2:row4:col2, t2:row4:col4, t2:row4:col6, t2:row4:col8 |
| Vp (L) | `Q64` · V2 | 0.06 | L | 6e-05 | m3 | l | exact (1) | t2:row5:col1, t2:row5:col2, t2:row5:col4, t2:row5:col6, t2:row5:col8 |
| fAge-CL | `Q319` · allometric_exponent | -0.71 |  |  |  |  | llm_corrected (0.6) | t2:row6:col1, t2:row6:col2, t2:row6:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ' routed out of structural estimates ('Residual error (proportional error, CV%)')
- dropped duplicate Q22 ('fBMI-CL', value '1.35') — already have one for this compound
- dropped duplicate Q22 ('fBSA-CL', value '1.04') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=docetaxel

**Extraction notes:**
- unparsed cell t2:row2:col3 = '34.80 to 41.60'
- unparsed cell t2:row2:col7 = '29.53 to 44.44'
- unparsed cell t2:row3:col3 = '5.13 to 6.34'
- unparsed cell t2:row3:col7 = '4.20 to 6.41'
- unparsed cell t2:row4:col3 = '38.94 to 43.04'
- unparsed cell t2:row4:col7 = '35.76 to 47.70'
- unparsed cell t2:row5:col3 = '241.8 to 299.85'
- unparsed cell t2:row5:col7 = '199.13 to 344.00'
- unparsed cell t2:row6:col3 = '−0.79 to −0.65'
- unparsed cell t2:row6:col7 = '−0.82 to −0.51'
- unparsed cell t2:row7:col3 = '1.19 to 1.43'
- unparsed cell t2:row7:col7 = '1.18 to 1.53'
- unparsed cell t2:row8:col3 = '0.93 to 1.04'
- unparsed cell t2:row8:col7 = '0.72 to 1.23'
- unparsed cell t2:row10:col3 = '24.99 to 29.57'
- unparsed cell t2:row10:col7 = '25.69 to 28.96'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].value` | 53.40 | 52.42 | mismatch |
| `gpt-oss-120b` | `parameters[fage-cl]` | -0.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].value` | 0.42 | 0.32 | mismatch |
| `gpt-oss-120b` | `parameters[vp].value` | 0.06 | 0.05 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t2:row2:col1', 't2:row2:col2', 't2:row2:col4', 't2:row2:col6', 't2:row2:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t2:row4:col1', 't2:row4:col2', 't2:row4:col4', 't2:row4:col6', 't2:row4:col8'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t2:row3:col1', 't2:row3:col2', 't2:row3:col4', 't2:row3:col6', 't2:row3:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t2:row5:col1', 't2:row5:col2', 't2:row5:col4', 't2:row5:col6', 't2:row5:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 53.4 | ['t2:row2:col1', 't2:row2:col2', 't2:row2:col4', 't2:row2:col6', 't2:row2:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 53.4 L/h | ['t2:row2:col1', 't2:row2:col2', 't2:row2:col4', 't2:row2:col6', 't2:row2:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 48.2 L | ['t2:row3:col1', 't2:row3:col2', 't2:row3:col4', 't2:row3:col6', 't2:row3:col8'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.06 L | ['t2:row5:col1', 't2:row5:col2', 't2:row5:col4', 't2:row5:col6', 't2:row5:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdocetaxel%5D%20Docetaxel_Wei2022_reference&body=Drug%3A%20docetaxel%0ARecord%3A%20Docetaxel_Wei2022_reference%0APaper%3A%20Wei_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_docetaxel/Docetaxel_Wei2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:51 UTC</sub>
