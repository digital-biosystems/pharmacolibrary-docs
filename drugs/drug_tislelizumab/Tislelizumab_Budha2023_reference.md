<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/&quot;},{&quot;label&quot;:&quot;Budha_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tislelizumab — `Tislelizumab_Budha2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model for tislelizumab was rejected because the second peripheral compartment is unreachable from the dose.

<div class="pk-model-meta" hidden drug="tislelizumab" model-id="Tislelizumab_Budha2023_reference" status="rejected" stale="false" population="patients with advanced tumors" measured-compound="tislelizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Budha N, Wu CY, Tang Z, Yu T, Liu L, Xu F et al. Model-based population pharmacokinetic analysis of tislelizumab in patients with advanced tumors. CPT: pharmacometrics & systems pharmacology 12(1):95–109 (2023).
  ·  DOI: [10.1002/psp4.12880](https://doi.org/10.1002/psp4.12880)

## Population and dosing

**Population:** patients with advanced tumors · condition advanced tumors · age group adult.

**Dosing:** 0.5, 10, 200 mg/kg, mg, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| exp(θ 1 )*24 | equation variable | 0.153 |  | 0.816 |
| θ 12 | k12 | 0.0966 | 1/h | 51.7 |
| V c | V1 | 16.7 |  |  |
| V 2 | V2 | 74.7 |  |  |
| V 3 | V3 | 99.9 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model for tislelizumab was rejected because the second peripheral compartment is unreachable from the dose.**

The record defines a two-compartment structure but includes a volume of distribution for a second peripheral compartment (V3) of 99.9. No transfer rate constant links the central compartment to this second peripheral compartment, leaving it orphaned. Consequently, the model structure contains an unreachable compartment that cannot receive drug from the central compartment. Extracted — tislelizumab: k12 0.0966 1/h, V1 16.7, V2 74.7, V3 99.9.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[exp(θ 1 )*24].parameter_id`: this record has Q900, the second reading Q22; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| exp(θ 1 )*24 | `Q900` · equation variable | 0.153 |  |  |  |  | 0.816 | llm (0.6) | psp412880-tbl-0003:row1:col2 |
| θ 12 | `Q301` · k12 | 0.0966 | 1/h | 2.683e-05 | 1/s | 1/h | 51.7 | llm (0.6) | psp412880-tbl-0003:row11:col2 |
| V c | `Q63` · V1 | 16.7 |  |  |  |  |  | space_fold (0.95) | psp412880-tbl-0003:row18:col1 |
| V 2 | `Q64` · V2 | 74.7 |  |  |  |  |  | space_fold (0.95) | psp412880-tbl-0003:row19:col1 |
| V 3 | `Q77` · V3 | 99.9 |  |  |  |  |  | space_fold (0.95) | psp412880-tbl-0003:row20:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'θ 7' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row2:col2'])
- dropped unlinked row (NIL): 'θ 10' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row3:col2'])
- dropped unlinked row (NIL): 'θ 11' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row4:col2'])
- dropped unlinked row (NIL): 'θ 13' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row5:col2'])
- dropped unlinked row (NIL): 'θ 14' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row6:col2'])
- dropped unlinked row (NIL): 'θ 15' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row7:col2'])
- dropped unlinked row (NIL): 'exp(θ 2 )' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row8:col2'])
- dropped unlinked row (NIL): 'θ 8' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row9:col2'])
- dropped unlinked row (NIL): 'θ 9' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row10:col2'])
- dropped duplicate Q900 ('exp(θ 3 )*24', value '0.740') — already have one for this compound
- dropped unlinked row (NIL): 'exp(θ 4 )' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row13:col2'])
- dropped duplicate Q900 ('exp(θ 5 )*24', value '0.092') — already have one for this compound
- dropped unlinked row (NIL): 'exp(θ 6 )' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row15:col2'])
- dropped unlinked row (NIL): 'Interindividual variability (% RSE)' — extend the ontology if this is a real PK parameter (source ['psp412880-tbl-0003:row17:col2'])
- implicit units: 'θ 12' → 1/h (from the popPK convention: 'The parameter is a first-order transfer rate constant (k12). In population pharmacokinetic modeling, first-order rate co')
- implicit units: 'V c' — the LLM proposed '%', whose dimension does not fit Q63; left unset
- implicit units: 'V 2' — the LLM proposed '%', whose dimension does not fit Q64; left unset
- implicit units: 'V 3' — the LLM proposed '%', whose dimension does not fit Q77; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tislelizumab
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- molar mass: none found for 'tislelizumab' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412880-tbl-0003:row1:col3 = '0.154 (0.151, 0.157)'
- unparsed cell psp412880-tbl-0003:row2:col3 = '0.562 (0.491, 0.631)'
- unparsed cell psp412880-tbl-0003:row3:col3 = '−0.443 (−0.648, −0.229)'
- unparsed cell psp412880-tbl-0003:row4:col3 = '0.0757 (0.056, 0.0953)'
- unparsed cell psp412880-tbl-0003:row5:col3 = '0.110 (0.0783, 0.146)'
- unparsed cell psp412880-tbl-0003:row6:col3 = '0.0778 (−0.00319, 0.161)'
- unparsed cell psp412880-tbl-0003:row7:col3 = '−0.215 (−0.294, −0.137)'
- unparsed cell psp412880-tbl-0003:row8:col3 = '3.05 (3.02, 3.08)'
- unparsed cell psp412880-tbl-0003:row9:col3 = '0.395 (0.354, 0.437)'
- unparsed cell psp412880-tbl-0003:row10:col3 = '−0.116 (−0.135, −0.0997)'
- unparsed cell psp412880-tbl-0003:row11:col3 = '0.0957 (0.0602, 0.132)'
- unparsed cell psp412880-tbl-0003:row12:col3 = '0.746 (0.616, 0.944)'
- unparsed cell psp412880-tbl-0003:row13:col1 = 'Peripheral volume, V 2 (L)'
- unparsed cell psp412880-tbl-0003:row13:col3 = '1.27 (1.14, 1.43)'
- unparsed cell psp412880-tbl-0003:row14:col3 = '0.0923 (0.0796, 0.104)'
- unparsed cell psp412880-tbl-0003:row15:col1 = 'Peripheral volume, V 3 (L)'
- unparsed cell psp412880-tbl-0003:row15:col3 = '2.06 (1.81, 2.30)'
- unparsed cell psp412880-tbl-0003:row16:col3 = '0.0198 (0.0167, 0.0227)'
- unparsed cell psp412880-tbl-0003:row17:col3 = '26.4 (25.2, 27.7)'
- unparsed cell psp412880-tbl-0003:row18:col2 = '16.7 (15.8, 17.6)'
- unparsed cell psp412880-tbl-0003:row19:col2 = '76.3 (65.0, 86.8)'
- unparsed cell psp412880-tbl-0003:row20:col2 = '97.3 (85.7, 110)'
- unparsed cell psp412880-tbl-0003:row21:col3 = '12.6 (12.0, 13.2)'
- unparsed cell psp412880-tbl-0003:row22:col3 = '2.06 (1.79, 2.33)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[exp(θ 1 )*24].parameter_id` | Q900 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[θ 12]` | 0.0966 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 7]` |  | 0.565 | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['psp412880-tbl-0003:row11:col2'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 |  | ['psp412880-tbl-0003:row18:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 |  | ['psp412880-tbl-0003:row19:col1'] |
| C5_unit_missing_Q77 | fail | [length] ** 3 |  | ['psp412880-tbl-0003:row20:col1'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btislelizumab%5D%20Tislelizumab_Budha2023_reference&body=Drug%3A%20tislelizumab%0ARecord%3A%20Tislelizumab_Budha2023_reference%0APaper%3A%20Budha_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tislelizumab/Tislelizumab_Budha2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:11 UTC</sub>
