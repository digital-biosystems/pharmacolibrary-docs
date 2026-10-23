<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;infliximab&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/&quot;},{&quot;label&quot;:&quot;Hemperly_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Infliximab_Eser2021_reference&quot;,&quot;label&quot;:&quot;Eser_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Eser2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Little2022_reference&quot;,&quot;label&quot;:&quot;Little_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Little2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# infliximab — `Infliximab_Hemperly2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The population clearance typical value lacks an extracted numeric value, preventing dimension validation for the pediatric infliximab model.

<div class="pk-model-meta" hidden drug="infliximab" model-id="Infliximab_Hemperly2025_reference" status="rejected" stale="false" population="pediatric patients with inflammatory bowel disease" measured-compound="infliximab" parameterization="mechanistic" topology="2C"></div>

## Citation
Hemperly A, Yang J, Ta A, Vande Casteele N. Pharmacokinetics and Exposure-Response During Infliximab Induction Therapy in Pediatric IBD Using Point-of-Care Assay. Journal of clinical medicine 14(22) (2025).
  ·  DOI: [10.3390/jcm14227968](https://doi.org/10.3390/jcm14227968)

## Population and dosing

**Population:** pediatric patients with inflammatory bowel disease · condition inflammatory bowel disease · age group child.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Θ1 (VC; L) | V1 | 3.43 | L | 0.224 |
| Θ3 (VP; L) | V2 | 2.11 | L | 0.403 |
| Θ4 (Q; L/day) | Q | 1.41 | L/day | 0.438 |
| theta_q900_albumin | theta_q900_albumin | -1.73 |  | 0.31 |
| theta_q900_albumin | theta_q900_albumin | -0.906 |  | 0.27 |
| Θ2 | Θ2 | 0.252 | CL; L/day | 0.0244 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The population clearance typical value lacks an extracted numeric value, preventing dimension validation for the pediatric infliximab model.**

The record lists a population clearance typical value of 0.252 L/day without a corresponding parameter value entry. This missing value prevents the necessary dimension check for the structural clearance parameter. Consequently, the record was rejected due to a dimension mismatch on the structural parameter. Extracted — infliximab: V1 3.43 L, V2 2.11 L, Q 1.41 L/day.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Θ1 (VC; L) | `Q63` · V1 | 3.43 | L | 0.00343 | m3 | L | 0.224 | llm (0.6) | jcm-14-07968-t003:row1:col1 |
| Θ3 (VP; L) | `Q64` · V2 | 2.11 | L | 0.00211 | m3 | L | 0.403 | llm (0.6) | jcm-14-07968-t003:row3:col1 |
| Θ4 (Q; L/day) | `Q30` · Q | 1.41 | L/day | 1.632e-08 | m3/s | L/h | 0.438 | llm (0.6) | jcm-14-07968-t003:row4:col1 |
| theta_q900_albumin | `Q900` · theta_q900_albumin | -1.73 |  |  |  |  | 0.31 |  | jcm-14-07968-t003:row5:col1 |
| theta_q900_albumin | `Q900` · theta_q900_albumin | -0.906 |  |  |  |  | 0.27 |  | jcm-14-07968-t003:row7:col1 |
| Θ2 | `Q900` · Θ2 | 0.252 | CL; L/day |  |  |  | 0.0244 |  | jcm-14-07968-t003:row2:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Θ2 (CL; L/day) | Q22 | llm |
| theta_cl_wt_power | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'VC; L' (V1)
- unit_dimension_mismatch: 'Θ2 (CL; L/day)' → Q22 (unit '[length] ** 6 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'VP; L' (V2)
- unit_dimension_unknown: 'Q; L/day' (Q)
- dropped unlinked row (NIL): 'Θ6 (Albumin on VP)' — extend the ontology if this is a real PK parameter (source ['jcm-14-07968-t003:row6:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Θ1 (VC; L)' → L (from the paper text: "The text states: 'central compartment volume of distribution (Vc), 3.43 ± 0.22 L'.")
- implicit units: 'Θ3 (VP; L)' → L (from the paper text: "The text states: 'peripheral compartment volume of distribution (Vp), 2.11 ± 0.40 L'.")
- implicit units: 'Θ4 (Q; L/day)' → L/day (from the paper text: "The text states: 'intercompartmental clearance (Q), 1.41 ± 0.44 L/day'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=infliximab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q22 (CL): CL = 0.252 * (WT/51.2)^0.75 * (Albumin/4.2)-1.73.VC (L) = 2.47 * (WT/51.2) * (Albumin/4.2)-0.906Vp (L) = 2.11 * (WT/51.2) * (Albumin/4.2)-1.86Q (L/day) = 1.41 * (WT/51.2)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'Θ2 (CL; L/day)'; equation kept verbatim
- status held at "Needs review" — not promoted
- molar mass: none found for 'infliximab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell jcm-14-07968-t003:row1:col2 = '3.33 (1.05, 3.86)'
- unparsed cell jcm-14-07968-t003:row2:col2 = '0.252 (0.205, 0.307)'
- unparsed cell jcm-14-07968-t003:row3:col2 = '2.20 (1.31, 5.05)'
- unparsed cell jcm-14-07968-t003:row4:col2 = '1.46 (0.66, 15.21)'
- unparsed cell jcm-14-07968-t003:row5:col2 = '−1.73 (−2.52, −1.11)'
- unparsed cell jcm-14-07968-t003:row6:col2 = '−1.87 (−2.60, −0.279)'
- unparsed cell jcm-14-07968-t003:row7:col2 = '−0.914 (−3.82, −0.443)'
- LLM selected parameter table(s) 3
- captured model equation CL = 0.252 * (WT/51.2)^0.75 * (Albumin/4.2)-1.73.VC (L) = 2.47 * (WT/51.2) * (Albumin/4.2)-0.906Vp (L) = 2.11 * (WT/51.2) * (Albumin/4.2)-1.86Q (L/day) = 1.41 * (WT/51.2)^0.75

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | fail |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 6 / [time] | CL; L/day | ['jcm-14-07968-t003:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcm-14-07968-t003:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcm-14-07968-t003:row1:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcm-14-07968-t003:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.43 L | ['jcm-14-07968-t003:row1:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.11 L | ['jcm-14-07968-t003:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binfliximab%5D%20Infliximab_Hemperly2025_reference&body=Drug%3A%20infliximab%0ARecord%3A%20Infliximab_Hemperly2025_reference%0APaper%3A%20Hemperly_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_infliximab/Infliximab_Hemperly2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:53 UTC</sub>
