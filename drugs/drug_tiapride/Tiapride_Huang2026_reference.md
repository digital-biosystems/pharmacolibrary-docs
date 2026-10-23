<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;tiapride&quot;,&quot;href&quot;:&quot;drugs/drug_tiapride/&quot;},{&quot;label&quot;:&quot;Huang_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tiapride — `Tiapride_Huang2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The tiapride model record was rejected because the back-conversion rate constant kmp (θFFM-K30 = 0.38) was reported without a unit, giving a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="tiapride" model-id="Tiapride_Huang2026_reference" status="rejected" stale="false" population="children and adolescents with tic disorders" measured-compound="tiapride" parameterization="apparent" topology="1C"></div>

## Citation
Huang W, Shen J, Luo X, Wu Y, Zheng Y, Zhou J et al. Population Pharmacokinetics of Tiapride in Children and Adolescents with Tic Disorders: Leveraging Plasma and Saliva Concentration to Guide Individualized Dosing. Drug design, development and therapy 20:587387 (2026).
  ·  DOI: [10.2147/DDDT.S587387](https://doi.org/10.2147/DDDT.S587387)

## Population and dosing

**Population:** children and adolescents with tic disorders · condition tic disorders · age group mixed · n = 38.

**Dosing:** 50, 66.6, 75 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θVmax (mg/h) | Vmax | 34.7 | mg/h |
| θKm (ng/mL) | Km | 762 | ng/mL |
| θFFM-K30 | kmp | 0.38 |  |
| θKa (h−1) | kabs | 0.219 | h−1 |
| θCL/F (L/h) | CL/F | 15.3 | L/h |
| θVd/F (L) | V/F | 5.77 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.357). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tiapride model record was rejected because the back-conversion rate constant kmp (θFFM-K30 = 0.38) was reported without a unit, giving a dimension mismatch on a structural parameter.**

In the Huang_2026 population model of tiapride in children and adolescents with tic disorders, the first-order rate constant of back-conversion from metabolite to parent, kmp, is given as 0.38 with no unit at all, while every other parameter carries a unit (e.g. kabs 0.219 h−1, CL/F 15.3 L/h, V/F 5.77 L, Vmax 34.7 mg/h, Km 762 ng/mL). Because the reported unit could not be converted to SI units, the parameter entered the model without an SI value, and the dimension check on this structural parameter failed. Extracted — tiapride: Vmax 34.7 mg/h, Km 762 ng/mL, kmp 0.38, kabs 0.219 h−1, CL/F 15.3 L/h, V/F 5.77 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of parameter: this record has none, the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θVmax (mg/h) | `Q66` · Vmax | 34.7 | mg/h |  |  | mg/h | llm_confirmed (0.6) | t0003:row2:col1, t0003:row2:col2, t0003:row2:col4, t0003:row2:col5, t0003:row2:col6 |
| θKm (ng/mL) | `Q1` · Km | 762 | ng/mL |  |  | ng/ml | llm_confirmed (0.6) | t0003:row3:col1, t0003:row3:col4 |
| θFFM-K30 | `Q372` · kmp | 0.38 |  |  |  |  | llm_corrected (0.6) | t0003:row5:col1, t0003:row5:col2, t0003:row5:col4, t0003:row5:col5, t0003:row5:col6 |
| θKa (h−1) | `Q49` · kabs | 0.219 | h−1 | 6.083e-05 | 1/s | 1/h | llm_confirmed (0.6) | Huang_2026_table_2:row1:col1, Huang_2026_table_2:row1:col2, Huang_2026_table_2:row1:col4, Huang_2026_table_2:row1:col5, Huang_2026_table_2:row1:col6 |
| θCL/F (L/h) | `Q27` · CL/F | 15.3 | L/h | 4.25e-06 | m3/s | l/h | llm_confirmed (0.6) | Huang_2026_table_2:row2:col1, Huang_2026_table_2:row2:col2, Huang_2026_table_2:row2:col4, Huang_2026_table_2:row2:col5, Huang_2026_table_2:row2:col6 |
| θVd/F (L) | `Q76` · V/F | 5.77 | L | 0.00577 | m3 | l | llm_confirmed (0.6) | Huang_2026_table_2:row3:col1, Huang_2026_table_2:row3:col2, Huang_2026_table_2:row3:col4, Huang_2026_table_2:row3:col5, Huang_2026_table_2:row3:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['t0003:row0:col4', 't0003:row0:col5', 't0003:row0:col6'])
- unit_dimension_mismatch: 'θVmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'θK30 (h−1)' — extend the ontology if this is a real PK parameter (source ['t0003:row4:col1', 't0003:row4:col2', 't0003:row4:col4', 't0003:row4:col5', 't0003:row4:col6'])
- dropped unlinked row (NIL): 'ηK30 (%)' — extend the ontology if this is a real PK parameter (source ['t0003:row6:col1', 't0003:row6:col2', 't0003:row6:col3', 't0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6'])
- routed 'εprop (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'θFFM-CL/F' — extend the ontology if this is a real PK parameter (source ['Huang_2026_table_2:row4:col1', 'Huang_2026_table_2:row4:col2', 'Huang_2026_table_2:row4:col4', 'Huang_2026_table_2:row4:col5', 'Huang_2026_table_2:row4:col6'])
- dropped duplicate Q49 ('ηKa (%)', value '17.6') — already have one for this compound
- dropped duplicate Q27 ('ηCL/F (%)', value '22.8') — already have one for this compound
- dropped duplicate Q76 ('ηVd/F (%)', value '84.3') — already have one for this compound
- routed 'εadd (ng/mL)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tiapride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (50 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.357 (5/14 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[parameter]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ηk30]` |  | 35.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl/f].value` | 15.3 | 16.3 | mismatch |
| `gpt-oss-120b` | `parameters[θffm-k30].parameter_id` | Q372 | Q319 | mismatch |
| `gpt-oss-120b` | `parameters[θffm-k30].value` | 0.38 | 0.627 | mismatch |
| `gpt-oss-120b` | `parameters[θk30]` |  | 6.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θka].value` | 0.219 | 0.234 | mismatch |
| `gpt-oss-120b` | `parameters[θvd/f].value` | 5.77 | 11.6 | mismatch |
| `gpt-oss-120b` | `parameters[θvmax].value` | 34.7 | 46.9 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 3.23 | 0.261 | 0.0808 | 0.25 | reported t½β |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  |  |  | ['t0003:row3:col1', 't0003:row3:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Huang_2026_table_2:row2:col1', 'Huang_2026_table_2:row2:col2', 'Huang_2026_table_2:row2:col4', 'Huang_2026_table_2:row2:col5', 'Huang_2026_table_2:row2:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Huang_2026_table_2:row1:col1', 'Huang_2026_table_2:row1:col2', 'Huang_2026_table_2:row1:col4', 'Huang_2026_table_2:row1:col5', 'Huang_2026_table_2:row1:col6'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h |  |  | ['t0003:row2:col1', 't0003:row2:col2', 't0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Huang_2026_table_2:row3:col1', 'Huang_2026_table_2:row3:col2', 'Huang_2026_table_2:row3:col4', 'Huang_2026_table_2:row3:col5', 'Huang_2026_table_2:row3:col6'] |
| C5_unit_missing_Q372 | fail | 1 / [time] |  |  |  | ['t0003:row5:col1', 't0003:row5:col2', 't0003:row5:col4', 't0003:row5:col5', 't0003:row5:col6'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.3 L/h |  |  | ['Huang_2026_table_2:row2:col1', 'Huang_2026_table_2:row2:col2', 'Huang_2026_table_2:row2:col4', 'Huang_2026_table_2:row2:col5', 'Huang_2026_table_2:row2:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 5.77 L |  |  | ['Huang_2026_table_2:row3:col1', 'Huang_2026_table_2:row3:col2', 'Huang_2026_table_2:row3:col4', 'Huang_2026_table_2:row3:col5', 'Huang_2026_table_2:row3:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btiapride%5D%20Tiapride_Huang2026_reference&body=Drug%3A%20tiapride%0ARecord%3A%20Tiapride_Huang2026_reference%0APaper%3A%20Huang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tiapride/Tiapride_Huang2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 17:39 UTC</sub>
