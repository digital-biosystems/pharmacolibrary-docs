<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;etoposide&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/&quot;},{&quot;label&quot;:&quot;Urien_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Etoposide_Toffoli2001_mean_with_covariables&quot;,&quot;label&quot;:&quot;Toffoli_2001_mean_with_covariables&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etoposide/Etoposide_Toffoli2001_mean_with_covariables.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# etoposide — `Etoposide_Urien2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The peripheral volume of distribution (5.7 L/70kg) was orphaned because the allometric exponent (2.05) was incorrectly extracted for clearance.

<div class="pk-model-meta" hidden drug="etoposide" model-id="Etoposide_Urien2011_reference" status="rejected" stale="false" population="pediatric cancer patients" measured-compound="etoposide" parameterization="mechanistic" topology="2C"></div>

## Citation
Urien S, Doz F, Giraud C, Rey E, Gentet JC, Chastagner P et al. Developmental pharmacokinetics of etoposide in 67 children: lack of dexamethasone effect. Cancer chemotherapy and pharmacology 67(3):597–603 (2011).
  ·  DOI: [10.1007/s00280-010-1357-2](https://doi.org/10.1007/s00280-010-1357-2)

## Population and dosing

**Population:** pediatric cancer patients · condition malignancy · age group child · n = 67.

**Dosing:** 150 mg/m2, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL 70 ( L/h/70kg) CL = CL 70 (BWi/70) 3/4 | allometric_exponent | 2.05 |  |
| Vc 70 | Vc 70 | 9.3 | L/70kg |
| Q 70 | Q 70 | 0.68 | L/h/70 kg |
| Vp 70 | Vp 70 | 5.7 | L/70 kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peripheral volume of distribution (5.7 L/70kg) was orphaned because the allometric exponent (2.05) was incorrectly extracted for clearance.**

The parameter record lists an allometric exponent of 2.05 for the central clearance, which contradicts the standard value of 3/4. This discrepancy likely prevented the correct derivation of intercompartmental clearance, leaving the peripheral compartment unreachable. Consequently, the model structure failed to link the 5.7 L/70kg peripheral volume to the dosed central compartment. Extracted — etoposide: allometric_exponent 2.05.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 2.05x: this record has none, the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | link | source |
|---|---|---|---|---|---|---|---|
| CL 70 ( L/h/70kg) CL = CL 70 (BWi/70) 3/4 | `Q319` · allometric_exponent | 2.05 |  |  |  | llm_corrected (0.6) | tab_1:row2:col1 |
| Vc 70 | `Q900` · Vc 70 | 9.3 | L/70kg | 0.0093 | m3 |  | tab_1:row3:col2, tab_1:row3:col3 |
| Q 70 | `Q900` · Q 70 | 0.68 | L/h/70 kg | 1.889e-07 | m3/s |  | tab_1:row4:col1, tab_1:row4:col2 |
| Vp 70 | `Q900` · Vp 70 | 5.7 | L/70 kg | 0.0057 | m3 |  | tab_1:row5:col1, tab_1:row5:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Vc 70 (L/70kg) | Q63 | llm_confirmed |
| Q 70 (L/h/70 kg) | Q30 | llm |
| Vp 70 (L/70 kg) | Q64 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'BSV' routed out of structural estimates ('BSV was estimated for all structural parameters with a covariance term between the clearance and h is the Hill coefficient.')
- table section iiv: 'h' routed out of structural estimates ('BSV was estimated for all structural parameters with a covariance term between the clearance and h is the Hill coefficient.')
- dropped unlinked row (NIL): '2.05x(15/70)' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=etoposide
- bound model equation to Q63 (V1): Vc = CL 70 (BWi/70)^1
- bound model equation to Q30 (Q): Q = CL 70 (BWi/70)^3/4
- bound model equation to Q64 (V2): Vp = CL 70 (BWi/70)^1
- Q63 (V1) is equation-defined: value moved to equation-variable 'Vc 70 (L/70kg)'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q 70 (L/h/70 kg)'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'Vp 70 (L/70 kg)'; equation kept verbatim

**Extraction notes:**
- unparsed cell tab_1:row2:col2 = '0.27 (9) [0.04]'
- unparsed cell tab_1:row3:col4 = '0.28 (15) [0.19]'
- unparsed cell tab_1:row4:col3 = '0.96 (10) [0.21]'
- unparsed cell tab_1:row5:col3 = '0.53 (13) [0.23]'
- captured model equation Vc = CL 70 (BWi/70)^1
- captured model equation Q = CL 70 (BWi/70)^3/4
- captured model equation Vp = CL 70 (BWi/70)^1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[2.05x]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl 70 ( l/h/70kg) cl = cl 70 (bwi/70) 3/4].parameter_id` | Q319 | Q22 | mismatch |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row5:col1', 'tab_1:row5:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Betoposide%5D%20Etoposide_Urien2011_reference&body=Drug%3A%20etoposide%0ARecord%3A%20Etoposide_Urien2011_reference%0APaper%3A%20Urien_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_etoposide/Etoposide_Urien2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:12 UTC</sub>
