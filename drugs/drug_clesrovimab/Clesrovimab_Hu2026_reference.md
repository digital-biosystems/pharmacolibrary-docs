<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;clesrovimab&quot;,&quot;href&quot;:&quot;drugs/drug_clesrovimab/&quot;},{&quot;label&quot;:&quot;Hu_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clesrovimab — `Clesrovimab_Hu2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-07 14:30 UTC (Needs review), but the paper was screened again on 2026-10-07 16:14 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. CL/F, Q/F, V/F, CL and t1/2_ratio have no unit.

<div class="pk-model-meta" hidden drug="clesrovimab" model-id="Clesrovimab_Hu2026_reference" status="rejected" stale="true" population="preterm and full-term infants" measured-compound="clesrovimab" parameterization="apparent" topology="2C"></div>

## Citation
Hu Z, Hellmann F, Zang X, Plock N, Parmar K, Railkar RA et al. Population Pharmacokinetics of Clesrovimab in Preterm and Full-Term Infants. Clinical pharmacology and therapeutics 119(4):1036–1046 (2026).
  ·  DOI: [10.1002/cpt.70199](https://doi.org/10.1002/cpt.70199)

## Population and dosing

**Population:** preterm and full-term infants · condition infants entering first RSV season, including healthy and at increased risk for severe RSV disease · age group infant · n = 2942.

**Dosing:** 20, 100, 105, 210 mg, im, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F, L/daya | CL/F | 0.0197 | L/day | 21.3 | 14.4 (2.58% RSE) |
| Q/F, L/dayb | Q/F | 0.0406 | L/day | 8.32 |  |
| V c/F, Lc | V1/F | 0.514 | L | 2.04 |  |
| V p/F, Lc | V2/F | 0.316 | L | 2.17 |  |
| K a, 1/day | kabs | 0.286 | 1/day | 3.13 |  |
| β CL a | CL | 0.579 |  | 20.5 |  |
| T50CL, monthsa | equation variable | 20.3 |  | 21.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F, Q/F, V/F, CL and t1/2_ratio have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — clesrovimab: CL/F 0.0197, Q/F 0.0406, V/F 0.514, kabs 0.286 1/day, CL 0.579, t1/2_ratio 20.3.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/daya | `Q27` · CL/F | 0.0197 | L/day | 2.28e-10 | m3/s | L/h | 21.3 | llm_confirmed (0.6) | cpt70199-tbl-0002:row1:col1, cpt70199-tbl-0002:row1:col2 | 14.4 (2.58% RSE) |
| Q/F, L/dayb | `Q69` · Q/F | 0.0406 | L/day | 4.699e-10 | m3/s | L/h | 8.32 | llm_confirmed (0.6) | cpt70199-tbl-0002:row2:col1, cpt70199-tbl-0002:row2:col2 |  |
| V c/F, Lc | `Q290` · V1/F | 0.514 | L | 0.000514 | m3 | L | 2.04 | llm (0.6) | cpt70199-tbl-0002:row3:col1, cpt70199-tbl-0002:row3:col2 |  |
| V p/F, Lc | `Q82` · V2/F | 0.316 | L | 0.000316 | m3 | L | 2.17 | llm (0.6) | cpt70199-tbl-0002:row4:col1, cpt70199-tbl-0002:row4:col2 |  |
| K a, 1/day | `Q49` · kabs | 0.286 | 1/day | 3.31e-06 | 1/s | 1/d | 3.13 | space_fold (0.95) | cpt70199-tbl-0002:row5:col1, cpt70199-tbl-0002:row5:col2 |  |
| β CL a | `Q22` · CL | 0.579 |  |  |  |  | 20.5 | llm_confirmed (0.6) | cpt70199-tbl-0002:row6:col1, cpt70199-tbl-0002:row6:col2 |  |
| T50CL, monthsa | `Q900` · equation variable | 20.3 |  |  |  |  | 21.1 | llm (0.6) | cpt70199-tbl-0002:row7:col1, cpt70199-tbl-0002:row7:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'BW effect on clearance (CL, Q) a , b' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'BW effect on volumes (V c, V p)c' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Asian a , d' — extend the ontology if this is a real PK parameter (source ['cpt70199-tbl-0002:row11:col1', 'cpt70199-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): 'Black a , d' — extend the ontology if this is a real PK parameter (source ['cpt70199-tbl-0002:row12:col1', 'cpt70199-tbl-0002:row12:col2'])
- dropped unlinked row (NIL): 'Multiracial a , d' — extend the ontology if this is a real PK parameter (source ['cpt70199-tbl-0002:row13:col1', 'cpt70199-tbl-0002:row13:col2'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['cpt70199-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 20.3 (source ['cpt70199-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 3.01 (source ['cpt70199-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q/F' from footnote/prose loose number None (source ['cpt70199-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1/F' from footnote/prose loose number None (source ['cpt70199-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['cpt70199-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL/F, L/daya' → L/day (from the paper text: "Table 2 footnote states 'CL/F, L/daya = 0.0197'.")
- implicit units: 'Q/F, L/dayb' → L/day (from the paper text: "Table 2 footnote states 'Q/F, L/dayb = 0.0406'.")
- implicit units: 'V c/F, Lc' → L (from the paper text: "Table 2 footnote states 'V c/F, Lc = 0.514'.")
- implicit units: 'V p/F, Lc' → L (from the paper text: "Table 2 footnote states 'V p/F, Lc = 0.316'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clesrovimab
- molar mass: none found for 'clesrovimab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt70199-tbl-0002:row1:col3 = '0.0115 to 0.0278'
- unparsed cell cpt70199-tbl-0002:row2:col3 = '0.0340 to 0.0473'
- unparsed cell cpt70199-tbl-0002:row3:col3 = '0.494 to 0.535'
- unparsed cell cpt70199-tbl-0002:row4:col3 = '0.303 to 0.330'
- unparsed cell cpt70199-tbl-0002:row5:col3 = '0.269 to 0.304'
- unparsed cell cpt70199-tbl-0002:row6:col3 = '0.346 to 0.811'
- unparsed cell cpt70199-tbl-0002:row7:col3 = '5.81 to 70.8'
- unparsed cell cpt70199-tbl-0002:row8:col3 = '0.482 to 0.566'
- unparsed cell cpt70199-tbl-0002:row9:col3 = '0.639 to 0.685'
- unparsed cell cpt70199-tbl-0002:row11:col3 = '−7.19 to −4.51'
- unparsed cell cpt70199-tbl-0002:row12:col3 = '11.1 to 15.3'
- unparsed cell cpt70199-tbl-0002:row13:col3 = '6.77 to 10.7'
- unparsed cell cpt70199-tbl-0002:row14:col3 = '20.8 to 25.9'
- unparsed cell cpt70199-tbl-0002:row15:col3 = '7.18 to 8.97'
- unparsed cell cpt70199-tbl-0002:row16:col3 = '13.6 to 15.1'
- unparsed cell cpt70199-tbl-0002:row17:col3 = '13.4 to 15.1'
- unparsed cell cpt70199-tbl-0002:row18:col3 = '0.163 to 0.284'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt70199-tbl-0002:row1:col1', 'cpt70199-tbl-0002:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt70199-tbl-0002:row3:col1', 'cpt70199-tbl-0002:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt70199-tbl-0002:row5:col1', 'cpt70199-tbl-0002:row5:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cpt70199-tbl-0002:row2:col1', 'cpt70199-tbl-0002:row2:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt70199-tbl-0002:row4:col1', 'cpt70199-tbl-0002:row4:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['cpt70199-tbl-0002:row6:col1', 'cpt70199-tbl-0002:row6:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | fail | clearance within physiological range | 0.000821 L/h | ['cpt70199-tbl-0002:row1:col1', 'cpt70199-tbl-0002:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 0.514 L | ['cpt70199-tbl-0002:row3:col1', 'cpt70199-tbl-0002:row3:col2'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.316 L | ['cpt70199-tbl-0002:row4:col1', 'cpt70199-tbl-0002:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclesrovimab%5D%20Clesrovimab_Hu2026_reference&body=Drug%3A%20clesrovimab%0ARecord%3A%20Clesrovimab_Hu2026_reference%0APaper%3A%20Hu_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clesrovimab/Clesrovimab_Hu2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:14 UTC</sub>
