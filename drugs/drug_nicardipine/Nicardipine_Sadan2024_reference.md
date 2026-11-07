<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nicardipine&quot;,&quot;href&quot;:&quot;drugs/drug_nicardipine/&quot;},{&quot;label&quot;:&quot;Sadan_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nicardipine_Modi1993_reference&quot;,&quot;label&quot;:&quot;Modi_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nicardipine/Nicardipine_Modi1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicardipine — `Nicardipine_Sadan2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The extracted central volume of distribution (0.064 L) is implausibly small for a two-compartment model of nicardipine.

<div class="pk-model-meta" hidden drug="nicardipine" model-id="Nicardipine_Sadan2024_reference" status="rejected" stale="false" population="subarachnoid hemorrhage patients" measured-compound="nicardipine" parameterization="mechanistic" topology="2C"></div>

## Citation
Sadan O, Jeong YS, Cohen-Sadan S, Sathialingam E, Buckley EM, Kandiah PA et al. Cerebrospinal Fluid Pharmacokinetics of Nicardipine Following Intrathecal Administration in Subarachnoid Hemorrhage Patients. Journal of clinical pharmacology 64(11):1373–1381 (2024).
  ·  DOI: [10.1002/jcph.2488](https://doi.org/10.1002/jcph.2488)

## Population and dosing

**Population:** subarachnoid hemorrhage patients · condition subarachnoid hemorrhage · age group adult · n = 16.

**Dosing:** 5 mg, intrathecal, multiple, every 6 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V1 (L) | V1 | 0.064 | L |
| CL (L/hr) | CL | 0.130 | L/hr |
| V2 (L) | V2 | 0.73 | L |
| CLD (L/hr) | Q | 0.11 | L/hr |
| Tlag (hr) | tlag | 0.55 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The extracted central volume of distribution (0.064 L) is implausibly small for a two-compartment model of nicardipine.**

A volume of 0.064 L represents less than one-hundredth of a liter, which is physically unrealistic for a systemic compartment. This magnitude suggests an error in unit extraction or data scaling rather than a genuine pharmacokinetic finding. Extracted — nicardipine: V1 0.064 L, CL 0.13 L/hr, V2 0.73 L, Q 0.11 L/hr, tlag 0.55 hr.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V1 (L) | `Q63` · V1 | 0.064 | L | 6.4e-05 | m3 | l | exact (1) | T2:row1:col2 |
| CL (L/hr) | `Q22` · CL | 0.130 | L/hr | 3.611e-08 | m3/s | l/h | exact (1) | T2:row2:col2 |
| V2 (L) | `Q64` · V2 | 0.73 | L | 0.00073 | m3 | l | exact (1) | T2:row3:col2 |
| CLD (L/hr) | `Q30` · Q | 0.11 | L/hr | 3.056e-08 | m3/s | l/h | exact (1) | T2:row4:col2 |
| Tlag (hr) | `Q83` · tlag | 0.55 | hr | 1980 | s | h | exact (1) | T2:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'θICP,CL' → Q22 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θICP,CL', value '1.46') — already have one for this compound
- unit_dimension_mismatch: 'θICP,V1' → Q63 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q63 ('θICP,V1', value '0.35') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V1 (L)); Q22 (CL (L/hr)); Q64 (V2 (L)); Q30 (CLD (L/hr))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nicardipine

**Extraction notes:**
- unparsed cell T2:row1:col3 = '1.04 (27.2) [21.3%]'
- unparsed cell T2:row2:col3 = '0.69 (23.1) [8.83%]'
- unparsed cell T2:row3:col3 = '1.38 (21.1) [2.86%]'
- unparsed cell T2:row5:col3 = '0.6 (27.8) [29.5%]'
- unparsed cell T2:row7:col1 = 'ICP effect on V1'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T2:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['T2:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.13 | ['T2:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.13 L/h | ['T2:row2:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.064 L | ['T2:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.73 L | ['T2:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicardipine%5D%20Nicardipine_Sadan2024_reference&body=Drug%3A%20nicardipine%0ARecord%3A%20Nicardipine_Sadan2024_reference%0APaper%3A%20Sadan_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nicardipine/Nicardipine_Sadan2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-13 13:14 UTC</sub>
