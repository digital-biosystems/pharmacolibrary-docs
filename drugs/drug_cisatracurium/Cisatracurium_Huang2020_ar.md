<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;cisatracurium&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/&quot;},{&quot;label&quot;:&quot;Huang_2020 \u00b7 ar&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisatracurium_Liu2012_reference&quot;,&quot;label&quot;:&quot;Liu_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisatracurium_Tran1998_reference&quot;,&quot;label&quot;:&quot;Tran_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisatracurium — `Cisatracurium_Huang2020_ar`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The second compartment of the cisatracurium model is unreachable from the dose because no intercompartmental clearance parameter was extracted.

<div class="pk-model-meta" hidden drug="cisatracurium" model-id="Cisatracurium_Huang2020_ar" status="rejected" stale="false" population="patients with severe aortic regurgitation and control group" measured-compound="cisatracurium" parameterization="mechanistic" topology="2C"></div>

## Citation
Huang X, Chen L, Cai Y, Wei J, Lin L, Sun J et al. Abnormal cisatracurium pharmacodynamics and pharmacokinetics among patients with severe aortic regurgitation during anesthetic induction. BMC anesthesiology 20(1):21 (2020).
  ·  DOI: [10.1186/s12871-020-0935-z](https://doi.org/10.1186/s12871-020-0935-z)

## Population and dosing

**Population:** patients with severe aortic regurgitation and control group · condition severe aortic regurgitation · age group adult.

**Dosing:** 10.5 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K10 (1/min) | kel | 0.07 |  |
| K20 (1/min) | ki0 | 0.04 |  |
| V1 (ml/kg) | V1 | 52.34 | ml/kg |
| V2 (ml/kg) | V2 | 38.90 | ml/kg |
| T1/2β (min) | t1/2β | 23.76 | min |
| CL (ml/min/kg) | CL | 7.06 | ml/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The second compartment of the cisatracurium model is unreachable from the dose because no intercompartmental clearance parameter was extracted.**

The record defines central and peripheral volumes (V1 = 52.34 ml/kg, V2 = 38.90 ml/kg) and elimination rate constants (K10 = 0.07 1/min, K20 = 0.04 1/min), but it lacks a parameter describing drug flow between compartments. Consequently, the structure is flagged as having an unreachable compartment, meaning the model topology does not permit drug to enter the peripheral space after dosing. Extracted — cisatracurium: kel 0.07, ki0 0.04, V1 52.3 ml/kg, V2 38.9 ml/kg, t1/2β 23.8 min, CL 7.06 ml/min/kg.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K10 (1/min) | `Q47` · kel | 0.07 |  |  |  |  | exact (1) | Tab3:row1:col2 |
| K20 (1/min) | `Q373` · ki0 | 0.04 |  |  |  |  | exact (1) | Tab3:row2:col2 |
| V1 (ml/kg) | `Q63` · V1 | 52.34 | ml/kg | 0.003664 | m3 | ml/kg | exact (1) | Tab3:row5:col2 |
| V2 (ml/kg) | `Q64` · V2 | 38.90 | ml/kg | 0.002723 | m3 | ml/kg | exact (1) | Tab3:row6:col2 |
| T1/2β (min) | `Q60` · t1/2β | 23.76 | min | 1426 | s | min | exact (1) | Tab3:row8:col2 |
| CL (ml/min/kg) | `Q22` · CL | 7.06 | ml/min/kg | 8.237e-06 | m3/s | ml/(min·kg) | exact (1) | Tab3:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'ar' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cisatracurium
- population split: 'ar' subgroup of Huang_2020 (paper reports 2 populations: ar, control)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col2 = '0.19 ± 0.01*'
- unparsed cell Tab3:row4:col2 = '0.11 ± 0.01*'
- unparsed cell Tab3:row7:col2 = '2.56 ± 0.16*'
- unparsed cell Tab3:row10:col2 = '28.79 ± 6.25*'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row9:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['Tab3:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row6:col2'] |
| C5_unit_missing_Q373 | fail | 1 / [time] |  | ['Tab3:row2:col2'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Tab3:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.06 | ['Tab3:row9:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.7 L/h | ['Tab3:row9:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.66 L | ['Tab3:row5:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.72 L | ['Tab3:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcisatracurium%5D%20Cisatracurium_Huang2020_ar&body=Drug%3A%20cisatracurium%0ARecord%3A%20Cisatracurium_Huang2020_ar%0APaper%3A%20Huang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cisatracurium/Cisatracurium_Huang2020_ar%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:22 UTC</sub>
