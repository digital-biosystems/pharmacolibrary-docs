<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Chen_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Chen2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model for trimethoprim was rejected because it contains an unreachable compartment with no connection to the dose.

<div class="pk-model-meta" hidden drug="trimethoprim" model-id="Trimethoprim_Chen2025_reference" status="rejected" stale="false" population="adult patients with Pneumocystis jirovecii pneumonia" measured-compound="trimethoprim" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Chen B, Chen Y, Chen M, Mao Y, Huang Y, Zhou L et al. Population pharmacokinetics and Monte Carlo-based dosing optimization of trimethoprim-sulfamethoxazole. Antimicrobial agents and chemotherapy 69(11):e0051925 (2025).
  ·  DOI: [10.1128/aac.00519-25](https://doi.org/10.1128/aac.00519-25)

## Population and dosing

**Population:** adult patients with Pneumocystis jirovecii pneumonia · condition Pneumocystis jirovecii pneumonia · age group adult · n = :.

**Dosed compound ≠ measured compound:** dosed trimethoprim-sulfamethoxazole, measured trimethoprim.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| tv V (L/kg) | Vnorm | 8.22 | L/kg |  |
| tv CL (L/kg/h) | CL | 0.11 | L/kg/h | 0.25 (None% RSE) |
| dCLdCRRT | CL_CRRT | 0.59 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model for trimethoprim was rejected because it contains an unreachable compartment with no connection to the dose.**

The model structure is defined as a general linear system, but the connection list shows no links from the dose to any compartment. Specifically, the only recorded link has a source of 'none' and a destination of 'none', indicating that no path exists from the administered drug. This lack of structural connectivity renders the model invalid for simulation or fitting. Extracted — trimethoprim: Vnorm 8.22 L/kg, CL 0.11 L/kg/h, CL_CRRT 0.59 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none → none (none), the second reading none; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| tv V (L/kg) | `Q352` · Vnorm | 8.22 | L/kg | 0.5754 | m3 | l/kg | llm (0.6) | T6:row2:col1, T6:row2:col2, T6:row2:col3, T6:row2:col4, Chen_2025_table_5:row1:col1, Chen_2025_table_5:row1:col2, Chen_2025_table_5:row1:col3, Chen_2025_table_5:row1:col4 |  |
| tv CL (L/kg/h) | `Q22` · CL | 0.11 | L/kg/h | 2.139e-06 | m3/s | l/(h·kg) | llm_confirmed (0.6) | T6:row3:col1, T6:row3:col2, T6:row3:col3, T6:row3:col4, Chen_2025_table_5:row2:col1, Chen_2025_table_5:row2:col2, Chen_2025_table_5:row2:col3, Chen_2025_table_5:row2:col4 | 0.25 (None% RSE) |
| dCLdCRRT | `Q357` · CL_CRRT | 0.59 | L/h | 1.639e-07 | m3/s | L/h | llm (0.6) | Chen_2025_table_5:row4:col1, Chen_2025_table_5:row4:col2, Chen_2025_table_5:row4:col3, Chen_2025_table_5:row4:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 V' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 CL' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability')
- dropped duplicate Q22 ('dCLdCrCL', value '0.29') — already have one for this compound
- implicit units: 'dCLdCRRT' → L/h (from the popPK convention: "The parameter represents clearance (CL) by continuous renal replacement therapy. The table footnote explicitly defines '")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 5 transcribed (28 record(s))
- LLM selected parameter table(s) 5, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.429 (3/7 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['none', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[dcldcrrt].value` | 0.59 | 0.41 | mismatch |
| `gpt-oss-120b` | `parameters[tv cl].value` | 0.11 | 0.18 | mismatch |
| `gpt-oss-120b` | `parameters[tv v].value` | 8.22 | 0.30 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T6:row3:col1', 'T6:row3:col2', 'T6:row3:col3', 'T6:row3:col4', 'Chen_2025_table_5:row2:col1', 'Chen_2025_table_5:row2:col2', 'Chen_2025_table_5:row2:col3', 'Chen_2025_table_5:row2:col4'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['T6:row2:col1', 'T6:row2:col2', 'T6:row2:col3', 'T6:row2:col4', 'Chen_2025_table_5:row1:col1', 'Chen_2025_table_5:row1:col2', 'Chen_2025_table_5:row1:col3', 'Chen_2025_table_5:row1:col4'] |
| C5_dimension_Q357 | pass | [length] ** 3 / [time] |  | ['Chen_2025_table_5:row4:col1', 'Chen_2025_table_5:row4:col2', 'Chen_2025_table_5:row4:col3', 'Chen_2025_table_5:row4:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.11 | ['T6:row3:col1', 'T6:row3:col2', 'T6:row3:col3', 'T6:row3:col4', 'Chen_2025_table_5:row2:col1', 'Chen_2025_table_5:row2:col2', 'Chen_2025_table_5:row2:col3', 'Chen_2025_table_5:row2:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.7 L/h | ['T6:row3:col1', 'T6:row3:col2', 'T6:row3:col3', 'T6:row3:col4', 'Chen_2025_table_5:row2:col1', 'Chen_2025_table_5:row2:col2', 'Chen_2025_table_5:row2:col3', 'Chen_2025_table_5:row2:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrimethoprim%5D%20Trimethoprim_Chen2025_reference&body=Drug%3A%20trimethoprim%0ARecord%3A%20Trimethoprim_Chen2025_reference%0APaper%3A%20Chen_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trimethoprim/Trimethoprim_Chen2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:15 UTC</sub>
