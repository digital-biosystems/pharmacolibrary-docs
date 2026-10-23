<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;,&quot;href&quot;:&quot;drugs/drug_baricitinib/&quot;},{&quot;label&quot;:&quot;Decker_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baricitinib — `Baricitinib_Decker2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because a dialysis compartment is disconnected from the dose, and the bioavailability parameter lacks a numerical value.

<div class="pk-model-meta" hidden drug="baricitinib" model-id="Baricitinib_Decker2026_reference" status="rejected" stale="false" population="pediatric patients with atopic dermatitis" measured-compound="baricitinib" parameterization="apparent" topology="3C"></div>

## Citation
Decker RL, Ernest CS, Radtke DB, Prakash A, Zhang X. A Population Pharmacokinetic and Exposure-Response Analysis for Baricitinib in Pediatric Patients with Atopic Dermatitis. Clinical pharmacokinetics 65(1):119–131 (2026).
  ·  DOI: [10.1007/s40262-025-01563-8](https://doi.org/10.1007/s40262-025-01563-8)

## Population and dosing

**Population:** pediatric patients with atopic dermatitis · condition atopic dermatitis · age group child · n = 393.

**Dosing:** 0.5, 1, 2, 4 mg, oral, multiple, every 24 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| D1 (h) | D1 | 0.263 | h | 164 |
| CLnr/F(L/h)b | CLNR | 2.76 | L/h | 58.4 |
| CLr/F (L/h)b | CLR | 7.9 | L/h | 62.3 |
| V1/F (L)c | V1/F | 119 | L | 12.7 |
| Q (L/h)d | Qd | 2.4 | L/h | 15.1 |
| V2/F (L)e | V2/F | 46.8 | L | 117 |
| LAG (h) | tlag | 0.144 | h |  |
| Allometric scaling CLb | AUCt | 0.75 | %SEE |  |
| Allometric scaling Vc,e | V1 | 1 | %SEE |  |
| theta_d1_category | theta_d1_category | 0.311 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because a dialysis compartment is disconnected from the dose, and the bioavailability parameter lacks a numerical value.**

The dialysate flow rate parameter is defined, but the structure lacks a path linking the dose to the dialysis compartment. Additionally, the absolute bioavailability parameter has no extracted value, causing the model to rely on a placeholder rather than a fitted estimate. Extracted — baricitinib: D1 0.263 h, CLNR 2.76 L/h, CLR 7.9 L/h, V1/F 119 L, Qd 2.4 L/h, V2/F 46.8 L, tlag 0.144 h, AUCt 0.75 %SEE, … (+1).

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| D1 (h) | `Q310` · D1 | 0.263 | h | 946.8 | s | h | 164 | exact (1) | Tab1:row1:col1, Tab1:row1:col3 |
| CLnr/F(L/h)b | `Q79` · CLNR | 2.76 | L/h | 7.667e-07 | m3/s | L/h | 58.4 | llm (0.6) | Tab1:row3:col1, Tab1:row3:col3 |
| CLr/F (L/h)b | `Q26` · CLR | 7.9 | L/h | 2.194e-06 | m3/s | L/h | 62.3 | llm (0.6) | Tab1:row4:col1, Tab1:row4:col3 |
| V1/F (L)c | `Q290` · V1/F | 119 | L | 0.119 | m3 | L | 12.7 | llm_confirmed (0.6) | Tab1:row5:col1, Tab1:row5:col3 |
| Q (L/h)d | `Q364` · Qd | 2.4 | L/h | 6.667e-07 | m3/s | L/h | 15.1 | space_fold (0.95) | Tab1:row6:col1, Tab1:row6:col3 |
| V2/F (L)e | `Q82` · V2/F | 46.8 | L | 0.0468 | m3 | L | 117 | llm_confirmed (0.6) | Tab1:row7:col1, Tab1:row7:col3 |
| LAG (h) | `Q83` · tlag | 0.144 | h | 518.4 | s | h |  | llm (0.6) | Tab1:row8:col1 |
| Allometric scaling CLb | `Q19` · AUCt | 0.75 | %SEE |  |  | s·%·ee |  | llm_corrected (0.6) | Tab1:row9:col1 |
| Allometric scaling Vc,e | `Q63` · V1 | 1 | %SEE |  |  | s·%·ee |  | llm_confirmed (0.6) | Tab1:row10:col1 |
| theta_d1_category | `Q900` · theta_d1_category | 0.311 | h |  |  |  |  |  | Tab1:row2:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '%SEE' (CLNR)
- unit_dimension_unknown: '%SEE' (CLR)
- unit_dimension_unknown: '%SEE' (V1/F)
- unit_dimension_unknown: '%SEE' (Qd)
- unit_dimension_unknown: '%SEE' (V2/F)
- unit_dimension_unknown: '%SEE' (AUCt)
- unit_dimension_unknown: '%SEE' (V1)
- dropped unlinked row (NIL): 'Covariate for change in eGFR on CLr/Ff' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col1'])
- implicit units: 'CLnr/F(L/h)b' → L/h (from the paper text: "Table 1 caption: 'CLnr/F apparent non-renal clearance'")
- implicit units: 'CLr/F (L/h)b' → L/h (from the paper text: "Table 1 caption: 'CLr/F apparent renal clearance'")
- implicit units: 'V1/F (L)c' → L (from the paper text: "Table 1 caption: 'V volume of distribution'")
- implicit units: 'Q (L/h)d' → L/h (from the popPK convention: 'Q is the intercompartmental clearance between central and peripheral compartments; conventionally expressed in L/h, cons')
- implicit units: 'V2/F (L)e' → L (from the paper text: "Table 1 caption: 'V volume of distribution'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baricitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = (CLnr/F+CLr/F)*((WTE/74)^
- model equation 'dQ = 2.4*((WTE/74)^' not bound — neither LHS nor base term 'WTE' linked to an ontology parameter
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell Tab1:row1:col4 = '0.253 (0.232–0.295)'
- unparsed cell Tab1:row2:col4 = '0.395 (0.167–0.481)'
- unparsed cell Tab1:row3:col4 = '2.68 (2.51–3.03)'
- unparsed cell Tab1:row4:col2 = '1.00 E−10'
- unparsed cell Tab1:row4:col4 = '8.02 (7.44–8.38)'
- unparsed cell Tab1:row5:col4 = '119 (116–122)'
- unparsed cell Tab1:row6:col4 = '2.52 (2.19–2.63)'
- unparsed cell Tab1:row7:col4 = '46.5 (34.3–60.5)'
- unparsed cell Tab1:row8:col4 = '0.146 (0.135–0.151)'
- unparsed cell Tab1:row11:col4 = '0.00738 (0.00462–0.0115)'
- unparsed cell Tab1:row12:col4 = '0.295 (0.247–0.359)'
- unparsed cell Tab1:row13:col4 = '−0.0278 (−0.0360 to −0.0182)'
- unparsed cell Tab1:row14:col4 = '0.426 (0.411–0.441)'
- LLM selected parameter table(s) 1
- captured model equation F = (CLnr/F+CLr/F)*((WTE/74)^
- captured model equation dQ = 2.4*((WTE/74)^

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col1', 'Tab1:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab1:row5:col1', 'Tab1:row5:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['Tab1:row1:col1', 'Tab1:row1:col3'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col1', 'Tab1:row6:col3'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Tab1:row3:col1', 'Tab1:row3:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab1:row7:col1', 'Tab1:row7:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab1:row8:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | %SEE | ['Tab1:row9:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | %SEE | ['Tab1:row10:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 119 L | ['Tab1:row5:col1', 'Tab1:row5:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 46.8 L | ['Tab1:row7:col1', 'Tab1:row7:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbaricitinib%5D%20Baricitinib_Decker2026_reference&body=Drug%3A%20baricitinib%0ARecord%3A%20Baricitinib_Decker2026_reference%0APaper%3A%20Decker_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_baricitinib/Baricitinib_Decker2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:46 UTC</sub>
