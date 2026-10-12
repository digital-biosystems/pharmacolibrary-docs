<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;ranibizumab&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/&quot;},{&quot;label&quot;:&quot;Crawshaw_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ranibizumab_Crass2025_reference&quot;,&quot;label&quot;:&quot;Crass_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Crass2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Diack2024v2_reference&quot;,&quot;label&quot;:&quot;Diack_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Diack2024v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Fidler2020_estimated_value_rse_interval&quot;,&quot;label&quot;:&quot;Fidler_2020_estimated_value_rse_interval&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Fidler2020_estimated_value_rse_interval.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ranibizumab — `Ranibizumab_Crawshaw2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Ranibizumab clearance and volume units are milliliters instead of liters, making values physiologically implausible for cynomolgus macaques.**

The record lists clearance as 0.450 mL/day and volume as 0.502 mL. These magnitudes are orders of magnitude too small for a monoclonal antibody in macaques. The values suggest an unconverted volume unit rather than a true biological parameter. Extracted — ranibizumab: kel 0.102 1/day, koff 1.07, KD 0.008, CL 0.45 mL/day, V 0.502 mL, kabs 0.0528 days−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading ranibizumab → vr (interconversion); vr → rvr (interconversion); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Crawshaw JR et al., Modeling the Ocular Pharmacokinetics an…, Investigative ophthalmology… (2025)
  ·  DOI: [10.1167/iovs.66.6.20](https://doi.org/10.1167/iovs.66.6.20)

<div class="pk-model-meta" hidden drug="ranibizumab" model-id="Ranibizumab_Crawshaw2025_reference" status="rejected" stale="false" population="cynomolgus macaques" measured-compound="ranibizumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| kelr | `Q47` · kel | 0.102 | 1/day | 1.1805555555555554e-06 | 1/h | not captured | llm (0.6) | tbl2:row1:col1, tbl2:row1:col2, tbl2:row1:col4 | — | not captured |
| k off | `Q330` · koff | 1.069 | not captured | not captured | not captured | not captured | space_fold (0.95) | tbl2:row5:col1, tbl2:row5:col2, tbl2:row5:col4 | — | not captured |
| K D | `Q331` · KD | 0.008 | not captured | not captured | not captured | not captured | space_fold (0.95) | tbl2:row6:col1, tbl2:row6:col2, tbl2:row6:col4 | — | not captured |
| CL | `Q22` · CL | 0.450 | mL/day | 5.208333333333333e-12 | L/h | not captured | exact (1.0) | tbl2:row7:col1, tbl2:row7:col2, tbl2:row7:col4 | — | not captured |
| V in | `Q61` · V | 0.502 | mL | 5.02e-07 | L | not captured | llm (0.6) | tbl2:row8:col1, tbl2:row8:col2, tbl2:row8:col4 | — | not captured |
| KA | `Q49` · kabs | 0.0528 | days−1 | 6.111111111111111e-07 | 1/h | not captured | review_gapfill (0.7) | Crass_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'skew' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'r^' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q47 ('kelv', value '0.163') — already have one for this compound
- dropped duplicate Q47 ('kelc', value '-1.171') — already have one for this compound
- dropped duplicate Q47 ('kelh', value '-0.131') — already have one for this compound
- implicit units: 'kelr' → 1/day (from the paper text: "The text describing Table 2 explicitly states: 'the kelv posterior distribution is wide with an interquartile range of [")
- implicit units: 'k off' — the LLM proposed 'M/s', whose dimension does not fit Q330; left unset
- implicit units: 'K D' — the LLM proposed 'pM', whose dimension does not fit Q331; left unset
- implicit units: 'CL' → mL/day (from the popPK convention: 'CL is total clearance. In a PK model where time is in days (indicated by kelr in 1/day) and volume is likely in mL (indi')
- implicit units: 'V in' → mL (from the popPK convention: "Vin is the volume of distribution/intravitreal volume. The text regression 'Vin = λ·CL - μ' has units: Volume = (pM) * (")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ranibizumab
- molar mass: none found for 'ranibizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Crass_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tbl2:row1:col3 = '[0.288, 0.293, 0.297]'
- unparsed cell tbl2:row1:col5 = 'day−1'
- unparsed cell tbl2:row2:col3 = '[0.413, 0.548, 0.717]'
- unparsed cell tbl2:row2:col5 = 'day−1'
- unparsed cell tbl2:row3:col3 = '[0.244, 0.266, 0.281]'
- unparsed cell tbl2:row3:col5 = 'day−1'
- unparsed cell tbl2:row4:col3 = '[0.136, 0.179, 0.219]'
- unparsed cell tbl2:row4:col5 = 'day−1'
- unparsed cell tbl2:row5:col3 = '[0.716, 1.448, 2.392]'
- unparsed cell tbl2:row5:col5 = 'day−1'
- unparsed cell tbl2:row6:col3 = '[1393, 1459, 1525]'
- unparsed cell tbl2:row7:col3 = '[2.474, 2.731, 3.351]'
- unparsed cell tbl2:row7:col5 = 'mL· day−1'
- unparsed cell tbl2:row8:col3 = '[4.825, 5.332, 5.921]'
- unparsed cell tbl2:row8:col5 = 'pM·mL · day−1'
- unparsed cell tbl2:row9:col3 = '[0.187, 0.225, 0.344]'
- unparsed cell tbl2:row10:col3 = '[0.136, 0.163, 0.243]'
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['ranibizumab', 'vr', 'interconversion'], ['vr', 'rvr', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 0.450 | 1.007 | mismatch |
| `gpt-oss-120b` | `parameters[k d].value` | 0.008 | 1.007 | mismatch |
| `gpt-oss-120b` | `parameters[k off].value` | 1.069 | 1.009 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 0.0528 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kelr].value` | 0.102 | 1.009 | mismatch |
| `gpt-oss-120b` | `parameters[v in].value` | 0.502 | 1.007 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 1.0 | 0.773 | 0.773 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl2:row7:col1', 'tbl2:row7:col2', 'tbl2:row7:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl2:row1:col1', 'tbl2:row1:col2', 'tbl2:row1:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Crass_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl2:row8:col1', 'tbl2:row8:col2', 'tbl2:row8:col4'] |
| C5_unit_missing_Q330 | fail | 1 / [time] | not captured | not captured | not captured | ['tbl2:row5:col1', 'tbl2:row5:col2', 'tbl2:row5:col4'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tbl2:row6:col1', 'tbl2:row6:col2', 'tbl2:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.45 | not captured | not captured | ['tbl2:row7:col1', 'tbl2:row7:col2', 'tbl2:row7:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 1.87e-05 L/h | not captured | not captured | ['tbl2:row7:col1', 'tbl2:row7:col2', 'tbl2:row7:col4'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.000502 L | not captured | not captured | ['tbl2:row8:col1', 'tbl2:row8:col2', 'tbl2:row8:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ranibizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Crawshaw_2025` / `Crawshaw_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:21 UTC</sub>
