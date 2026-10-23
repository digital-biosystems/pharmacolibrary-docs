<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotaxime&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/&quot;},{&quot;label&quot;:&quot;Swartling_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefotaxime_Guerrini1986_reference&quot;,&quot;label&quot;:&quot;Guerrini_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Guerrini1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_dctx&quot;,&quot;label&quot;:&quot;Trang_1985_dctx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_dctx.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Trang1985_noncompartmental&quot;,&quot;label&quot;:&quot;Trang_1985_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Trang1985_noncompartmental.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefotaxime_Branger2018_reference&quot;,&quot;label&quot;:&quot;B\u00e9ranger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefotaxime/Cefotaxime_Branger2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefotaxime — `Cefotaxime_Swartling2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The dialysate flow rate parameter for cefotaxime was recorded as 3.1 L/h.

<div class="pk-model-meta" hidden drug="cefotaxime" model-id="Cefotaxime_Swartling2022_reference" status="rejected" stale="false" population="adult ICU patients" measured-compound="cefotaxime" parameterization="mechanistic" topology="2C"></div>

## Citation
Swartling M, Smekal AK, Furebring M, Lipcsey M, Jönsson S, Nielsen EI. Population pharmacokinetics of cefotaxime in intensive care patients. European journal of clinical pharmacology 78(2):251–258 (2022).
  ·  DOI: [10.1007/s00228-021-03218-6](https://doi.org/10.1007/s00228-021-03218-6)

## Population and dosing

**Population:** adult ICU patients · condition infection · age group adult.

**Dosing:** 1000, 3000 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL (L/h)a | CL | 8.5 | L/h |
| Vc (L)b | V1 | 1.5 | L |
| Vp (L)c | V2 | 8.0 | L |
| Q (L/h)d | Qd | 3.1 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The dialysate flow rate parameter for cefotaxime was recorded as 3.1 L/h.**

The model structure defines a second compartment intended to represent the peripheral volume of distribution. However, the specific meaning assigned to the parameter for this compartment's flow is a dialysate flow rate, not a standard inter-compartmental clearance. This creates a structural inconsistency where the peripheral compartment lacks a valid pharmacokinetic link from the central compartment, rendering it an unreachable or orphan compartment in the model. Extracted — cefotaxime: CL 8.5 L/h, V1 1.5 L, V2 8 L, Qd 3.1 L/h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q22` · CL | 8.5 | L/h | 2.361e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row2:col2, Tab2:row2:col4, Tab2:row2:col5 |
| Vc (L)b | `Q63` · V1 | 1.5 | L | 0.0015 | m3 | L | llm_confirmed (0.6) | Tab2:row3:col2, Tab2:row3:col4, Tab2:row3:col5 |
| Vp (L)c | `Q64` · V2 | 8.0 | L | 0.008 | m3 | L | boundary (0.8) | Tab2:row4:col2, Tab2:row4:col4, Tab2:row4:col5 |
| Q (L/h)d | `Q364` · Qd | 3.1 | L/h | 8.611e-07 | m3/s | L/h | space_fold (0.95) | Tab2:row5:col2, Tab2:row5:col4, Tab2:row5:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Proportional residual error (%CV)' routed out of structural estimates ('IIV Vc (%CV)')
- dropped unlinked row (NIL): 'θcov (eCLcr ≤ 120)' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row6:col4', 'Tab2:row6:col5'])
- dropped duplicate Q22 ('fCL, Vc', value '0.2') — already have one for this compound
- implicit units: 'CL (L/h)a' → L/h (from the paper text: "The text states 'The resulting typical value of clearance was 11.1 L/h' and the table row is labeled 'CL (L/h)a'. Additi")
- implicit units: 'Vc (L)b' → L (from the paper text: "The text states 'central volume of distribution 5.1 L' and the table row is labeled 'Vc (L)b'.")
- implicit units: 'Vp (L)c' → L (from the paper text: "The text states 'peripheral volume of distribution 18.2 L' and the table row is labeled 'Vp (L)c'.")
- implicit units: 'Q (L/h)d' → L/h (from the paper text: "The text states 'inter-compartmental clearance 14.5 L/h' and the table row is labeled 'Q (L/h)d'. Note: The description ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefotaxime

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '(8.2)'
- unparsed cell Tab2:row3:col3 = '(28)'
- unparsed cell Tab2:row4:col3 = '(12)'
- unparsed cell Tab2:row5:col3 = '(19)'
- unparsed cell Tab2:row6:col3 = '(17)'
- unparsed cell Tab2:row7:col3 = '(39)'
- unparsed cell Tab2:row8:col3 = '(15) [0.8]'
- unparsed cell Tab2:row10:col3 = '(5.9) [7.8]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col2', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C5_dimension_Q364 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2', 'Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row3:col2', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row4:col2', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.5 | ['Tab2:row2:col2', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.5 L/h | ['Tab2:row2:col2', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.5 L | ['Tab2:row3:col2', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8 L | ['Tab2:row4:col2', 'Tab2:row4:col4', 'Tab2:row4:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefotaxime%5D%20Cefotaxime_Swartling2022_reference&body=Drug%3A%20cefotaxime%0ARecord%3A%20Cefotaxime_Swartling2022_reference%0APaper%3A%20Swartling_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefotaxime/Cefotaxime_Swartling2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:17 UTC</sub>
