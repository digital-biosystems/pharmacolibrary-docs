<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;ranibizumab&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/&quot;},{&quot;label&quot;:&quot;Kim_2020 \u00b7 rbz_0_3_mg_0_03_ml&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ranibizumab_Crass2025_reference&quot;,&quot;label&quot;:&quot;Crass_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Crass2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Diack2024v2_reference&quot;,&quot;label&quot;:&quot;Diack_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Diack2024v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ranibizumab_Fidler2020_estimated_value_rse_interval&quot;,&quot;label&quot;:&quot;Fidler_2020_estimated_value_rse_interval&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ranibizumab/Ranibizumab_Fidler2020_estimated_value_rse_interval.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ranibizumab — `Ranibizumab_Kim2020_rbz_0_3_mg_0_03_ml`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Clearance and volume of distribution are physiologically implausible for ranibizumab, and the absorption rate constant unit could not be standardized.**

The apparent clearance is 0.087 mL/h and the apparent volume of distribution is 7.01 mL, both orders of magnitude too small for a large biologic in rabbits. Additionally, the absorption rate constant of 0.0528 days−1 could not be converted to SI units, preventing standard pharmacokinetic validation of the model. Extracted — ranibizumab: t1/2z 55.6 h, MRT 171 h, Cmax 23.1 µg/mL, tmax 1 h, AUC 3.43e+03 h × µg/mL, V/F 7.01 mL, CL/F 0.087 mL/h, kabs 0.0528 days−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.0528, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Kim HM et al., Intraocular Pharmacokinetics of 10-fold…, Translational vision scienc… (2020)
  ·  DOI: [10.1167/tvst.9.4.7](https://doi.org/10.1167/tvst.9.4.7)

<div class="pk-model-meta" hidden drug="ranibizumab" model-id="Ranibizumab_Kim2020_rbz_0_3_mg_0_03_ml" status="rejected" stale="false" population="rabbits" measured-compound="ranibizumab" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t 1/2 (h) | `Q57` · t1/2z | 55.58 | h | 200088.0 | [h] | not captured | space_fold (0.95) | tbl2:row0:col1, tbl2:row0:col3, tbl2:row0:col6, tbl2:row0:col9, tbl2:row0:col12 | — | not captured |
| MRT (h) | `Q53` · MRT | 171.04 | h | 615744.0 | [h] | not captured | exact (1.0) | tbl2:row1:col3, tbl2:row1:col6, tbl2:row1:col9, tbl2:row1:col12 | — | not captured |
| Cmax (µg/mL) | `Q32` · Cmax | 23.08 | µg/mL | not captured | [µg] / [ml] | not captured | exact (1.0) | tbl2:row2:col3, tbl2:row2:col6, tbl2:row2:col9 | — | not captured |
| Tmax (h) | `Q56` · tmax | 1 | h | 3600.0 | [h] | not captured | exact (1.0) | tbl2:row3:col3, tbl2:row3:col6, tbl2:row3:col9, tbl2:row3:col12 | — | not captured |
| AUC (h × µg/mL) | `Q88` · AUC | 3431.81 | h × µg/mL | not captured | [[h] · [µg]] / [ml] | not captured | exact (1.0) | tbl2:row4:col3, tbl2:row4:col6, tbl2:row4:col9 | — | not captured |
| V/F (mL) | `Q76` · V/F | 7.01 | mL | 7.01e-06 | [ml] | not captured | exact (1.0) | tbl2:row5:col3, tbl2:row5:col6, tbl2:row5:col9 | — | not captured |
| CL/F (mL/h) | `Q27` · CL/F | 0.087 | mL/h | 2.4166666666666664e-11 | [ml] / [h] | not captured | exact (1.0) | tbl2:row6:col3, tbl2:row6:col6, tbl2:row6:col9 | — | not captured |
| KA | `Q49` · kabs | 0.0528 | days−1 | 6.111111111111111e-07 | 1/h | not captured | review_gapfill (0.7) | Crass_2025:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h × µg/mL' (AUC)
- implicit units: 'AUC (h × µg/mL)' — the LLM proposed 'h × µg/mL', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ranibizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'rbz 0.3 mg/0.03 ml' subgroup of Kim_2020 (paper reports 2 populations: 10×rbz 3.0 mg/0.03 ml, rbz 0.3 mg/0.03 ml)
- molar mass: none found for 'ranibizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Crass_2025's review values (primary lacked it)

**Extraction notes:**
- transposed table tbl2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tbl2:row2:col12 = '7.35 × 10−3'
- unparsed cell tbl2:row2:col13 = '22.07 × 10−3'
- unparsed cell tbl2:row4:col12 = '1644.41 × 10−3'
- unparsed cell tbl2:row4:col13 = '6885.24 × 10−3'
- unparsed cell tbl2:row5:col12 = '21.85 × 103'
- unparsed cell tbl2:row5:col13 = '103.73 × 103'
- unparsed cell tbl2:row6:col12 = '0.164 × 103'
- unparsed cell tbl2:row6:col13 = '0.401 × 103'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.0528 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl2:row6:col3', 'tbl2:row6:col6', 'tbl2:row6:col9'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tbl2:row2:col3', 'tbl2:row2:col6', 'tbl2:row2:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Crass_2025:review'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tbl2:row1:col3', 'tbl2:row1:col6', 'tbl2:row1:col9', 'tbl2:row1:col12'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tbl2:row3:col3', 'tbl2:row3:col6', 'tbl2:row3:col9', 'tbl2:row3:col12'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tbl2:row0:col1', 'tbl2:row0:col3', 'tbl2:row0:col6', 'tbl2:row0:col9', 'tbl2:row0:col12'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl2:row5:col3', 'tbl2:row5:col6', 'tbl2:row5:col9'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h × µg/mL | not captured | not captured | ['tbl2:row4:col3', 'tbl2:row4:col6', 'tbl2:row4:col9'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | fail | clearance within physiological range | 8.7e-05 L/h | not captured | not captured | ['tbl2:row6:col3', 'tbl2:row6:col6', 'tbl2:row6:col9'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.00701 L | not captured | not captured | ['tbl2:row5:col3', 'tbl2:row5:col6', 'tbl2:row5:col9'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ranibizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2020` / `Kim_2020::rbz_0_3_mg_0_03_ml`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:21 UTC</sub>
