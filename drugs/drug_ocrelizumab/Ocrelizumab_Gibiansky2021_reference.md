<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ocrelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_ocrelizumab/&quot;},{&quot;label&quot;:&quot;Gibiansky_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ocrelizumab — `Ocrelizumab_Gibiansky2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Ocrelizumab clearance of 0.17 L/day is outside the physiological window, indicating a likely unit or scale extraction error.**

The record lists ocrelizumab total clearance as 0.17 L/day, which is implausibly low for a therapeutic monoclonal antibody. This value violates the physiological bounds for such molecules, suggesting the extracted magnitude is incorrect. The rejection is based on this specific clearance parameter failing the plausibility check. Extracted — ocrelizumab: CL 0.17 L/d, V1 2.78 L, V2 2.68 L, Q 0.294 L/d, kel 1.11 1/h, V 0.0403 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ocrelizumab, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Gibiansky E et al., Ocrelizumab in relapsing and primary pr…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14658](https://doi.org/10.1111/bcp.14658)

<div class="pk-model-meta" hidden drug="ocrelizumab" model-id="Ocrelizumab_Gibiansky2021_reference" status="rejected" stale="false" population="patients with relapsing or primary progressive multiple sclerosis" measured-compound="ocrelizumab" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLinf (L/d) | `Q22` · CL | 0.17 | L/d | 1.967592592592593e-09 | [l] / [d] | 1.26 | llm (0.6) | bcp14658-tbl-0003:row1:col2, bcp14658-tbl-0003:row1:col3, bcp14658-tbl-0003:row1:col4 | — | not captured |
| V1 (L) | `Q63` · V1 | 2.78 | L | 0.00278 | [l] | 1.35 | exact (1.0) | bcp14658-tbl-0003:row2:col2, bcp14658-tbl-0003:row2:col3, bcp14658-tbl-0003:row2:col4 | — | 0.026 (11.3% RSE) |
| V2 (L) | `Q64` · V2 | 2.68 | L | 0.00268 | [l] | 2.76 | exact (1.0) | bcp14658-tbl-0003:row3:col2, bcp14658-tbl-0003:row3:col3, bcp14658-tbl-0003:row3:col4 | — | not captured |
| Q (L/d) | `Q30` · Q | 0.294 | L/d | 3.4027777777777778e-09 | [l] / [d] | 7.46 | exact (1.0) | bcp14658-tbl-0003:row4:col2, bcp14658-tbl-0003:row4:col3, bcp14658-tbl-0003:row4:col4 | — | not captured |
| κdes (y−1) | `Q47` · kel | 1.11 | 1/h | 0.00030833333333333337 | 1/h | 5.95 | llm (0.6) | bcp14658-tbl-0003:row5:col2, bcp14658-tbl-0003:row5:col3, bcp14658-tbl-0003:row5:col4 | — | not captured |
| VLinf,BCD19 c | `Q61` · V | 0.0403 | L | 4.0300000000000004e-05 | L | 13.6 | llm (0.6) | bcp14658-tbl-0003:row14:col2, bcp14658-tbl-0003:row14:col3, bcp14658-tbl-0003:row14:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'y−1' (kel)
- dropped duplicate Q22 ('CLT0 (L/d)', value '0.0489') — already have one for this compound
- dropped duplicate Q22 ('CLT02 (L/d)', value '0.0199') — already have one for this compound
- dropped duplicate Q22 ('CLinf,WT a', value '0.684') — already have one for this compound
- dropped duplicate Q63 ('V1,WT a', value '0.397') — already have one for this compound
- dropped duplicate Q64 ('V2,WT a', value '0.853') — already have one for this compound
- dropped unlinked row (NIL): 'Q,WT a' — extend the ontology if this is a real PK parameter (source ['bcp14658-tbl-0003:row11:col2'])
- dropped duplicate Q22 ('CLT0,WT a', value '0.981') — already have one for this compound
- dropped duplicate Q63 ('V1,Male b', value '1.12') — already have one for this compound
- implicit units: 'κdes (y−1)' → 1/h (from the popPK convention: 'The paper reports the terminal half-life in days (26 days), which corresponds to an elimination rate constant (k_e) in u')
- implicit units: 'VLinf,BCD19 c' → L (from the paper text: "The paper states for a reference patient: 'central volume were estimated at ... 2.78 L'. Parameter 2 (VLinf,BCD19 c) rep")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ocrelizumab
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- molar mass: none found for 'ocrelizumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp14658-tbl-0003:row1:col1 = 'θ1'
- unparsed cell bcp14658-tbl-0003:row2:col1 = 'θ2'
- unparsed cell bcp14658-tbl-0003:row3:col1 = 'θ3'
- unparsed cell bcp14658-tbl-0003:row4:col1 = 'θ4'
- unparsed cell bcp14658-tbl-0003:row5:col1 = 'θ5'
- unparsed cell bcp14658-tbl-0003:row6:col1 = 'θ6'
- unparsed cell bcp14658-tbl-0003:row7:col1 = 'θ7'
- unparsed cell bcp14658-tbl-0003:row8:col1 = 'θ8'
- unparsed cell bcp14658-tbl-0003:row9:col1 = 'θ9'
- unparsed cell bcp14658-tbl-0003:row10:col1 = 'θ10'
- unparsed cell bcp14658-tbl-0003:row11:col1 = 'θ11'
- unparsed cell bcp14658-tbl-0003:row12:col1 = 'θ12'
- unparsed cell bcp14658-tbl-0003:row13:col1 = 'θ13'
- unparsed cell bcp14658-tbl-0003:row14:col1 = 'θ14'
- unparsed cell bcp14658-tbl-0003:row16:col1 = 'Ω(1,1)'
- unparsed cell bcp14658-tbl-0003:row16:col6 = '7.1%'
- unparsed cell bcp14658-tbl-0003:row17:col1 = 'Ω(1,2)'
- unparsed cell bcp14658-tbl-0003:row18:col1 = 'Ω(2,2)'
- unparsed cell bcp14658-tbl-0003:row18:col6 = '31.3%'
- unparsed cell bcp14658-tbl-0003:row19:col1 = 'Ω(3,3)'
- unparsed cell bcp14658-tbl-0003:row19:col6 = '53.3%'
- unparsed cell bcp14658-tbl-0003:row20:col1 = 'Ω(4,4)'
- unparsed cell bcp14658-tbl-0003:row20:col6 = '47.2%'
- unparsed cell bcp14658-tbl-0003:row21:col1 = 'Σ(1,1)'
- unparsed cell bcp14658-tbl-0003:row21:col6 = '28.7%'
- unparsed cell bcp14658-tbl-0003:row22:col1 = 'Σ(2,2)'
- unparsed cell bcp14658-tbl-0003:row22:col6 = '17.9%'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (14/18 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clinf].parameter_id` | Q22 | Q3 | mismatch |
| `gpt-oss-120b` | `parameters[clt0]` | not captured | 0.0489 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ocrelizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ocrelizumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14658-tbl-0003:row1:col2', 'bcp14658-tbl-0003:row1:col3', 'bcp14658-tbl-0003:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp14658-tbl-0003:row4:col2', 'bcp14658-tbl-0003:row4:col3', 'bcp14658-tbl-0003:row4:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp14658-tbl-0003:row5:col2', 'bcp14658-tbl-0003:row5:col3', 'bcp14658-tbl-0003:row5:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14658-tbl-0003:row14:col2', 'bcp14658-tbl-0003:row14:col3', 'bcp14658-tbl-0003:row14:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14658-tbl-0003:row2:col2', 'bcp14658-tbl-0003:row2:col3', 'bcp14658-tbl-0003:row2:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp14658-tbl-0003:row3:col2', 'bcp14658-tbl-0003:row3:col3', 'bcp14658-tbl-0003:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.17 | not captured | not captured | ['bcp14658-tbl-0003:row1:col2', 'bcp14658-tbl-0003:row1:col3', 'bcp14658-tbl-0003:row1:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00708 L/h | not captured | not captured | ['bcp14658-tbl-0003:row1:col2', 'bcp14658-tbl-0003:row1:col3', 'bcp14658-tbl-0003:row1:col4'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0403 L | not captured | not captured | ['bcp14658-tbl-0003:row14:col2', 'bcp14658-tbl-0003:row14:col3', 'bcp14658-tbl-0003:row14:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.78 L | not captured | not captured | ['bcp14658-tbl-0003:row2:col2', 'bcp14658-tbl-0003:row2:col3', 'bcp14658-tbl-0003:row2:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.68 L | not captured | not captured | ['bcp14658-tbl-0003:row3:col2', 'bcp14658-tbl-0003:row3:col3', 'bcp14658-tbl-0003:row3:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ocrelizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibiansky_2021` / `Gibiansky_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:05 UTC</sub>
