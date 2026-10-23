<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_obinutuzumab/&quot;},{&quot;label&quot;:&quot;Gibiansky_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# obinutuzumab — `Obinutuzumab_Gibiansky2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="obinutuzumab" model-id="Obinutuzumab_Gibiansky2019_reference" status="rejected" stale="false" population="patients with CD20+ B-cell malignancies (CLL, NHL, FL, DLBCL, MCL)" measured-compound="obinutuzumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Gibiansky E, Gibiansky L, Buchheit V, Frey N, Brewster M, Fingerle-Rowson G et al. Pharmacokinetics, exposure, efficacy and safety of obinutuzumab in rituximab-refractory follicular lymphoma patients in the GADOLIN phase III study. British journal of clinical pharmacology 85(9):1935–1945 (2019).
  ·  DOI: [10.1111/bcp.13974](https://doi.org/10.1111/bcp.13974)

## Population and dosing

**Population:** patients with CD20+ B-cell malignancies (CLL, NHL, FL, DLBCL, MCL) · condition CD20+ B-cell malignancies · age group adult · n = #961.

**Dosing:** 1000 mg, iv, multiple, every 28 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Cmean (as a continuous covariate) | Cavg | -0.0027 | mg/L | 17.42 |
| age_as_a_continuous_covariate_increase_of_1_y | age_as_a_continuous_covariate_increase_of_1_y | 0.05785 |  | 21.73 |
| decay coefficient of time dependent clearance (kdes) | CL | 0.11 | day−1 |  |
| peripheral volume of distribution (V2) | V2 | 1.23 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (Cavg and CL), so that value has no SI equivalent. Extracted — obinutuzumab: Cavg -0.0027 mg/L, CL 0.11 day−1, V2 1.23 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clt: this record has none, the second reading 0.154; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Cmean (as a continuous covariate) | `Q71` · Cavg | -0.0027 | mg/L |  |  | mg/L | 17.42 | llm (0.6) | bcp13974-tbl-0002:row2:col2, bcp13974-tbl-0002:row2:col3, bcp13974-tbl-0002:row2:col4 |
| age_as_a_continuous_covariate_increase_of_1_y | `Q900` · age_as_a_continuous_covariate_increase_of_1_y | 0.05785 |  |  |  |  | 21.73 |  | bcp13974-tbl-0002:row11:col2, bcp13974-tbl-0002:row11:col3, bcp13974-tbl-0002:row11:col4 |
| decay coefficient of time dependent clearance (kdes) | `Q22` · CL | 0.11 | day−1 |  |  | day−1 |  | boundary (0.8) | Gibiansky_2019:results_prose |
| peripheral volume of distribution (V2) | `Q64` · V2 | 1.23 | L | 0.00123 | m3 | L |  | boundary_compartment (0.9) | Gibiansky_2019:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'covariate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'reference value for covariate *' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'Covariate/tertile'
- unit_dimension_unknown: 'as a continuous covariate' (Cavg)
- dropped unlinked row (NIL): 'Bone marrow involvement at baseline, yes vs no' — extend the ontology if this is a real PK parameter (source ['bcp13974-tbl-0002:row3:col2', 'bcp13974-tbl-0002:row3:col3', 'bcp13974-tbl-0002:row3:col4', 'bcp13974-tbl-0002:row8:col2', 'bcp13974-tbl-0002:row8:col3', 'bcp13974-tbl-0002:row8:col4', 'bcp13974-tbl-0002:row12:col2', 'bcp13974-tbl-0002:row12:col3', 'bcp13974-tbl-0002:row12:col4'])
- unit_dimension_unknown: 'C mean tertiles' (Cavg)
- dropped duplicate Q71 ('Low tertile of Cmean', value '-0.9956') — already have one for this compound
- dropped unlinked row (NIL): 'Middle tertile of Cmean' — extend the ontology if this is a real PK parameter (source ['bcp13974-tbl-0002:row6:col2', 'bcp13974-tbl-0002:row6:col3', 'bcp13974-tbl-0002:row6:col4'])
- dropped duplicate Q71 ('High tertile of Cmean', value '-1.194') — already have one for this compound
- dropped unlinked row (NIL): 'Log Cmean (as a continuous covariate)' — extend the ontology if this is a real PK parameter (source ['bcp13974-tbl-0002:row10:col2', 'bcp13974-tbl-0002:row10:col3', 'bcp13974-tbl-0002:row10:col4'])
- covariate level 'Age (as a continuous covariate), increase of 1 y' → Q900:age_as_a_continuous_covariate_increase_of_1_y = 0.05785 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Serum albumin' — extend the ontology if this is a real PK parameter (source ['Gibiansky_2019_table_1:row2:col1', 'Gibiansky_2019_table_1:row2:col2'])
- salvaged Q22 ('decay coefficient of time dependent clearance (kdes)'=0.11) from results prose — parameter table was unreadable
- salvaged Q64 ('peripheral volume of distribution (V2)'=1.23) from results prose — parameter table was unreadable
- implicit units: 'Cmean (as a continuous covariate)' → mg/L (from the popPK convention: 'The paper does not explicitly state the unit for Cmean in the provided text or table captions. However, Cmean is defined')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=obinutuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'obinutuzumab' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell bcp13974-tbl-0002:row2:col1 = '0.9974 (0.9965 to 0.9983)'
- unparsed cell bcp13974-tbl-0002:row3:col1 = '1.689 (1.217 to 2.346)'
- unparsed cell bcp13974-tbl-0002:row5:col1 = '0.3695 (0.2219 to 0.6154)'
- unparsed cell bcp13974-tbl-0002:row6:col1 = '0.4466 (0.2701 to 0.7383)'
- unparsed cell bcp13974-tbl-0002:row7:col1 = '0.3031 (0.1782 to 0.5156)'
- unparsed cell bcp13974-tbl-0002:row8:col1 = '1.758 (1.259 to −2.454)'
- unparsed cell bcp13974-tbl-0002:row10:col1 = '0.8484 (0.7731 to 0.9309)'
- unparsed cell bcp13974-tbl-0002:row11:col1 = '1.06 (1.034 to 1.086)'
- unparsed cell bcp13974-tbl-0002:row12:col1 = '2.401 (1.473 to 3.914)'
- unparsed cell Gibiansky_2019_table_1:row2:col3 = '25.4 (35.1, 16.4)'
- companion parameter table 1 transcribed (2 record(s), model stage 'final')
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.667 (8/12 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clt]` |  | 0.154 | only_one_extracted |
| `gpt-oss-120b` | `parameters[decay coefficient of time dependent clearance]` | 0.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` | 1.23 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 1.23 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q71 | pass | [mass] / [length] ** 3 |  | ['bcp13974-tbl-0002:row2:col2', 'bcp13974-tbl-0002:row2:col3', 'bcp13974-tbl-0002:row2:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | day−1 | ['Gibiansky_2019:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.11 | ['Gibiansky_2019:results_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.23 L | ['Gibiansky_2019:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bobinutuzumab%5D%20Obinutuzumab_Gibiansky2019_reference&body=Drug%3A%20obinutuzumab%0ARecord%3A%20Obinutuzumab_Gibiansky2019_reference%0APaper%3A%20Gibiansky_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_obinutuzumab/Obinutuzumab_Gibiansky2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:08 UTC</sub>
