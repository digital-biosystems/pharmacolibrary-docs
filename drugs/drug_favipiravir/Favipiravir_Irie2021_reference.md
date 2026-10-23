<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;favipiravir&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/&quot;},{&quot;label&quot;:&quot;Irie_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Favipiravir_Agyeman2026_reference&quot;,&quot;label&quot;:&quot;Agyeman_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Agyeman2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Irie2023_reference&quot;,&quot;label&quot;:&quot;Irie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Irie2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_arithmetic_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Prasanchaimontri2024_geometric_mean&quot;,&quot;label&quot;:&quot;Prasanchaimontri_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Prasanchaimontri2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Favipiravir_Pertinez2021_reference&quot;,&quot;label&quot;:&quot;Pertinez_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_favipiravir/Favipiravir_Pertinez2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# favipiravir — `Favipiravir_Irie2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Favipiravir’s V/F of 41.6 L/h was flagged for implausible clearance/volume scale, and its absorption rate constant kabs of 1.5 h⁻¹ had a structural-parameter dimension mismatch.

<div class="pk-model-meta" hidden drug="favipiravir" model-id="Favipiravir_Irie2021_reference" status="rejected" stale="false" population="patients with COVID-19" measured-compound="favipiravir" parameterization="apparent" topology="1C"></div>

## Citation
Irie K, Nakagawa A, Fujita H, Tamura R, Eto M, Ikesue H et al. Population pharmacokinetics of favipiravir in patients with COVID-19. CPT: pharmacometrics & systems pharmacology 10(10):1161–1170 (2021).
  ·  DOI: [10.1002/psp4.12685](https://doi.org/10.1002/psp4.12685)

## Population and dosing

**Population:** patients with COVID-19 · condition COVID-19 · age group mixed · n = 39.

**Dosing:** 600, 800, 1600, 1800 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F, L/h | CL/F | 5.11 | L/h | 24.10 | 0.355 (None% RSE) |
| V/F, L/h | V/F | 41.6 | L/h | 29.60 |  |
| k a (h À1 ) a | kabs | 1.5 | h À1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Favipiravir’s V/F of 41.6 L/h was flagged for implausible clearance/volume scale, and its absorption rate constant kabs of 1.5 h⁻¹ had a structural-parameter dimension mismatch.**

The record reports CL/F of 5.11 L/h and V/F of 41.6 L/h; the review flags the clearance/volume magnitude as implausible because of a unit/scale extraction error. It also identifies a dimension mismatch for kabs, the absorption rate constant, reported as 1.5 h⁻¹. Extracted — favipiravir: CL/F 5.11 L/h, V/F 41.6 L/h, kabs 1.5 h À1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of k a (h à1 ) a: this record has 1.5, the second reading none. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 5.11 | L/h | 1.419e-06 | m3/s | l/h | 24.10 | exact (1) | psp412685-tbl-0004:row2:col1, psp412685-tbl-0004:row2:col3, psp412685-tbl-0004:row2:col5, psp412685-tbl-0004:row2:col6, psp412685-tbl-0004:row2:col8 | 0.355 (None% RSE) |
| V/F, L/h | `Q76` · V/F | 41.6 | L/h | 1.156e-05 | m3/s | l/h | 29.60 | exact (1) | psp412685-tbl-0004:row3:col1, psp412685-tbl-0004:row3:col3, psp412685-tbl-0004:row3:col5, psp412685-tbl-0004:row3:col6, psp412685-tbl-0004:row3:col8 |  |
| k a (h À1 ) a | `Q49` · kabs | 1.5 | h À1 | 0.0004167 | 1/s | 1/h |  | review_gapfill (0.7) | Agyeman_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 CL/F' routed out of structural estimates ('Interindividual variability model parameters')
- table section residual_error: 'σ2 proportional error' routed out of structural estimates ('Residual error model parameters')
- table section residual_error: 'σ2 additive error' routed out of structural estimates ('Residual error model parameters')
- column 'bootstrap (n = 983/1000)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Structure model parameters' — extend the ontology if this is a real PK parameter (source ['psp412685-tbl-0004:row0:col5', 'psp412685-tbl-0004:row0:col6', 'psp412685-tbl-0004:row0:col7', 'psp412685-tbl-0004:row0:col8'])
- unit_dimension_mismatch: 'V/F, L/h' → Q76 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q27 ('Dose on CL/F', value '-0.61') — already have one for this compound
- routed 'IMV on CL/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q27 ('BSA on CL/F', value '2.22') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=favipiravir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Agyeman_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[k a (h à1 ) a]` | 1.5 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412685-tbl-0004:row2:col1', 'psp412685-tbl-0004:row2:col3', 'psp412685-tbl-0004:row2:col5', 'psp412685-tbl-0004:row2:col6', 'psp412685-tbl-0004:row2:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Agyeman_2026:review'] |
| C5_dimension_Q76 | fail | [length] ** 3 / [time] | L/h | ['psp412685-tbl-0004:row3:col1', 'psp412685-tbl-0004:row3:col3', 'psp412685-tbl-0004:row3:col5', 'psp412685-tbl-0004:row3:col6', 'psp412685-tbl-0004:row3:col8'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.11 L/h | ['psp412685-tbl-0004:row2:col1', 'psp412685-tbl-0004:row2:col3', 'psp412685-tbl-0004:row2:col5', 'psp412685-tbl-0004:row2:col6', 'psp412685-tbl-0004:row2:col8'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.0116 L | ['psp412685-tbl-0004:row3:col1', 'psp412685-tbl-0004:row3:col3', 'psp412685-tbl-0004:row3:col5', 'psp412685-tbl-0004:row3:col6', 'psp412685-tbl-0004:row3:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfavipiravir%5D%20Favipiravir_Irie2021_reference&body=Drug%3A%20favipiravir%0ARecord%3A%20Favipiravir_Irie2021_reference%0APaper%3A%20Irie_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_favipiravir/Favipiravir_Irie2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:16 UTC</sub>
