<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;natalizumab&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/&quot;},{&quot;label&quot;:&quot;van_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Natalizumab_Moes2022_reference&quot;,&quot;label&quot;:&quot;Moes_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Moes2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Natalizumab_Quan2025_reference&quot;,&quot;label&quot;:&quot;Quan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Quan2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Natalizumab_Rosario2017_reference&quot;,&quot;label&quot;:&quot;Rosario_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Rosario2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Natalizumab_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_natalizumab/Natalizumab_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# natalizumab — `Natalizumab_van2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The intercompartmental clearance unit L/d could not be processed, causing a dimension mismatch for this structural parameter.

<div class="pk-model-meta" hidden drug="natalizumab" model-id="Natalizumab_van2025_reference" status="rejected" stale="false" population="patients with multiple sclerosis" measured-compound="natalizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
van den Berg SPH, Toorop AA, Hooijberg F, Wolbink G, Voelkner NMF, Gelissen LMY et al. Pharmacokinetic Model-Informed Precision Dosing of Natalizumab in Multiple Sclerosis. CPT: pharmacometrics & systems pharmacology 14(6):1032–1041 (2025).
  ·  DOI: [10.1002/psp4.70014](https://doi.org/10.1002/psp4.70014)

## Population and dosing

**Population:** patients with multiple sclerosis · condition multiple sclerosis · age group adult · n = 379.

**Dosing:** 150 mg, subcutaneous, multiple, every 20160 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Clearance (CL, L/d) | CL | 0.164 | L/d | 22.8 (16.6% RSE) |
| Central Volume of distribution (Vc, L) | V1 | 3.48 | L |  |
| Peripheral Volume of distribution (Vp, L) | V2 | 3.48 | L | 31.5 (49.5% RSE) |
| Intercompartmental clearance (Q, L/d) | Q | 0.4 | L/d |  |
| Maximum elimination rate (Vmax, mg/d) | Vmax | 2.86 | mg/d | 26 (23.1% RSE) |
| Concentration at half Vmax (Km, mg/L) | Km | 0.875 | mg/L |  |
| theta_q319_wt | theta_q319_wt | 0.6 |  |  |
| theta_q319_wt | theta_q319_wt | 0.26 |  |  |
| absorption rate constant of the SC formulation | kabs | 0.213 | /day |  |
| Lag | tlag | 2.61 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance unit L/d could not be processed, causing a dimension mismatch for this structural parameter.**

The record lists intercompartmental clearance Q as 0.4 L/d. Because this unit was unrecognized by the extraction process, no standardized value was assigned to the parameter. Extracted — natalizumab: CL 0.164 L/d, V1 3.48 L, V2 3.48 L, Q 0.4 L/d, Vmax 2.86 mg/d, Km 0.875 mg/L, kabs 0.213 /day, tlag 2.61 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has natalizumab, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL, L/d) | `Q22` · CL | 0.164 | L/d | 1.898e-09 | m3/s | l/d | exact (1) | psp470014-tbl-0002:row2:col1, psp470014-tbl-0002:row2:col2 | 22.8 (16.6% RSE) |
| Central Volume of distribution (Vc, L) | `Q63` · V1 | 3.48 | L | 0.00348 | m3 | l | boundary_compartment (0.9) | psp470014-tbl-0002:row3:col1, psp470014-tbl-0002:row3:col2 |  |
| Peripheral Volume of distribution (Vp, L) | `Q64` · V2 | 3.48 | L | 0.00348 | m3 | l | boundary_compartment (0.9) | psp470014-tbl-0002:row4:col1, psp470014-tbl-0002:row4:col2 | 31.5 (49.5% RSE) |
| Intercompartmental clearance (Q, L/d) | `Q30` · Q | 0.4 | L/d | 4.63e-09 | m3/s | l/d | exact (1) | psp470014-tbl-0002:row5:col1, psp470014-tbl-0002:row5:col2, psp470014-tbl-0002:row5:col3 |  |
| Maximum elimination rate (Vmax, mg/d) | `Q66` · Vmax | 2.86 | mg/d |  |  | mg/d | llm_corrected (0.6) | psp470014-tbl-0002:row6:col1, psp470014-tbl-0002:row6:col2 | 26 (23.1% RSE) |
| Concentration at half Vmax (Km, mg/L) | `Q1` · Km | 0.875 | mg/L |  |  | mg/l | llm_corrected (0.6) | psp470014-tbl-0002:row7:col1, psp470014-tbl-0002:row7:col2 |  |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.6 |  |  |  |  |  | psp470014-tbl-0002:row8:col1, psp470014-tbl-0002:row8:col2 |  |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.26 |  |  |  |  |  | psp470014-tbl-0002:row9:col1, psp470014-tbl-0002:row9:col2 |  |
| absorption rate constant of the SC formulation | `Q49` · kabs | 0.213 | /day | 2.465e-06 | 1/s | 1/h | review_gapfill (0.7) | Moein_2025:review |  |
| Lag | `Q83` · tlag | 2.61 | h | 9396 | s | h | review_gapfill (0.7) | Wang_2020:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Vp' routed out of structural estimates ('IIV (CV%)')
- table section iiv: 'Vmax' routed out of structural estimates ('IIV (CV%)')
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['psp470014-tbl-0002:row0:col3'])
- unit_dimension_mismatch: 'Maximum elimination rate (Vmax, mg/d)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=natalizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'natalizumab' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Moein_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Wang_2020's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp470014-tbl-0002:row2:col3 = '0.164 (0.155, 0.173)'
- unparsed cell psp470014-tbl-0002:row3:col3 = '3.49 (3.25, 3.76)'
- unparsed cell psp470014-tbl-0002:row4:col3 = '3.47 (2.98, 3.95)'
- unparsed cell psp470014-tbl-0002:row6:col3 = '2.85 (2.52, 3.20)'
- unparsed cell psp470014-tbl-0002:row7:col3 = '0.84 (0.11, 1.55)'
- unparsed cell psp470014-tbl-0002:row8:col3 = '0.60 (0.44, 0.76)'
- unparsed cell psp470014-tbl-0002:row9:col3 = '0.25 (0.01, 0.48)'
- unparsed cell psp470014-tbl-0002:row11:col3 = '22.7 (19.4, 25.7)'
- unparsed cell psp470014-tbl-0002:row12:col3 = '30.3 (1.96, 43.2)'
- unparsed cell psp470014-tbl-0002:row13:col3 = '26.1 (20.7, 31.4)'
- unparsed cell psp470014-tbl-0002:row15:col3 = '21.9 (21.0, 22.9)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.615 (8/13 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant of the sc formulation]` | 0.213 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[concentration at half vmax].value` | 0.875 | 0.85 | mismatch |
| `gpt-oss-120b` | `parameters[lag]` | 2.61 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | natalizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | natalizumab | unknown | mismatch |

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
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['psp470014-tbl-0002:row7:col1', 'psp470014-tbl-0002:row7:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470014-tbl-0002:row2:col1', 'psp470014-tbl-0002:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp470014-tbl-0002:row5:col1', 'psp470014-tbl-0002:row5:col2', 'psp470014-tbl-0002:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Moein_2025:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp470014-tbl-0002:row3:col1', 'psp470014-tbl-0002:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp470014-tbl-0002:row4:col1', 'psp470014-tbl-0002:row4:col2'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/d | ['psp470014-tbl-0002:row6:col1', 'psp470014-tbl-0002:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Wang_2020:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.164 | ['psp470014-tbl-0002:row2:col1', 'psp470014-tbl-0002:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00683 L/h | ['psp470014-tbl-0002:row2:col1', 'psp470014-tbl-0002:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.48 L | ['psp470014-tbl-0002:row3:col1', 'psp470014-tbl-0002:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.48 L | ['psp470014-tbl-0002:row4:col1', 'psp470014-tbl-0002:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnatalizumab%5D%20Natalizumab_van2025_reference&body=Drug%3A%20natalizumab%0ARecord%3A%20Natalizumab_van2025_reference%0APaper%3A%20van_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_natalizumab/Natalizumab_van2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:57 UTC</sub>
