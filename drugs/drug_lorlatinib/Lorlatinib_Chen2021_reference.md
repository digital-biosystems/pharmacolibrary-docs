<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lorlatinib&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/&quot;},{&quot;label&quot;:&quot;Chen_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorlatinib_Hibma2022_reference&quot;,&quot;label&quot;:&quot;Hibma_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lorlatinib — `Lorlatinib_Chen2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q22 unit mg ([mass]) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="lorlatinib" model-id="Lorlatinib_Chen2021_reference" status="rejected" stale="false" population="patients with non-small cell lung cancer and healthy participants" measured-compound="lorlatinib" parameterization="apparent" topology="1C"></div>

## Citation
Chen J, Houk B, Pithavala YK, Ruiz-Garcia A. Population pharmacokinetic model with time-varying clearance for lorlatinib using pooled data from patients with non-small cell lung cancer and healthy participants. CPT: pharmacometrics & systems pharmacology 10(2):148–160 (2021).
  ·  DOI: [10.1002/psp4.12585](https://doi.org/10.1002/psp4.12585)

## Population and dosing

**Population:** patients with non-small cell lung cancer and healthy participants · condition non-small cell lung cancer · age group adult.

**Dosing:** 10, 100, 200 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θ CLI (L/h) | Q | 9.035 | L/h |
| θ V2 (L) | V2 | 120.511 | L |
| θ ka (h−1) | kabs | 3.113 | h−1 |
| θ V3 (L) | V3 | 154.905 | L |
| θ D1 (h) | D1 | 1.148 | h |
| θCLMX (L/h) | CL/F | 14.472 | L/h |
| θ TDOSE on CL | CL | 0.001 | mg |
| theta_q900_category | theta_q900_category | 0.115 |  |
| θ IND | θ IND | 0.02 |  |
| θ F | θ F | 0.759 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), qwen3.8-27b (not confirmed, agreement 0.632). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q22 unit mg ([mass]) vs [length] ** 3 / [time].**

A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — lorlatinib: Q 9.04 L/h, V2 121 L, kabs 3.11 h−1, V3 155 L, D1 1.15 h, CL/F 14.5 L/h, CL 0.001 mg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θ CLI (L/h) | `Q30` · Q | 9.035 | L/h | 2.51e-06 | m3/s | l/h | llm (0.6) | psp412585-tbl-0004:row2:col1 |
| θ V2 (L) | `Q64` · V2 | 120.511 | L | 0.1205 | m3 | l | llm_confirmed (0.6) | psp412585-tbl-0004:row3:col1 |
| θ ka (h−1) | `Q49` · kabs | 3.113 | h−1 | 0.0008647 | 1/s | 1/h | llm_confirmed (0.6) | psp412585-tbl-0004:row4:col1 |
| θ V3 (L) | `Q77` · V3 | 154.905 | L | 0.1549 | m3 | l | llm_confirmed (0.6) | psp412585-tbl-0004:row6:col1 |
| θ D1 (h) | `Q310` · D1 | 1.148 | h | 4133 | s | h | llm_confirmed (0.6) | psp412585-tbl-0004:row8:col1 |
| θCLMX (L/h) | `Q27` · CL/F | 14.472 | L/h | 4.02e-06 | m3/s | l/h | llm (0.6) | psp412585-tbl-0004:row10:col1 |
| θ TDOSE on CL | `Q22` · CL | 0.001 | mg |  |  | mg | llm_confirmed (0.6) | psp412585-tbl-0004:row14:col1 |
| theta_q900_category | `Q900` · theta_q900_category | 0.115 |  |  |  |  |  | psp412585-tbl-0004:row11:col1 |
| θ IND | `Q900` · θ IND | 0.02 |  |  |  |  |  |  |
| θ F | `Q900` · θ F | 0.759 |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 CL' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ωFωCL (L/h)' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 F' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 V2' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ωV2ωV3' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 V3' routed out of structural estimates ('IIV parameter')
- table section iiv: 'ω2 ka' routed out of structural estimates ('IIV parameter')
- dropped duplicate Q30 ('θ Q (L/h)', value '22.002') — already have one for this compound
- kept covariate coefficient θ IND=0.020 (covariate IND) — not an ontology parameter
- kept covariate coefficient θ F=0.759 (covariate F) — not an ontology parameter
- dropped unlinked row (NIL): 'θ Res Error for PO' — extend the ontology if this is a real PK parameter (source ['psp412585-tbl-0004:row12:col1'])
- routed 'θ BALB on CL' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'θ TDOSE on CL' → Q22 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'θ WNCL on CL' → Q22 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θ WNCL on CL', value '0.235') — already have one for this compound
- dropped 'θ PPI on ka' → Q49 = -0.675: a rate of -0.675 is not a parameter value (source ['psp412585-tbl-0004:row16:col1'])
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lorlatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (9/18 fields) | 9 |
| `qwen3.8-27b` | not confirmed | 0.632 (12/19 fields) | 7 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[theta_q317_category]` |  | 0.115 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_category]` | 0.115 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ cli].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[θ d1]` | 1.148 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ ind].parameter_id` | Q900 | Q310 | mismatch |
| `gpt-oss-120b` | `parameters[θ q]` |  | 22.002 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ tdose on cl]` | 0.001 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θclmx]` | 14.472 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_category]` |  | 0.115 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_category]` |  | 0.438 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q315_category]` | 0.115 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q316_category]` | 0.438 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θ f].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `qwen3.8-27b` | `parameters[θ f].parameter_id` | Q87 | Q900 | mismatch |
| `qwen3.8-27b` | `parameters[θ ind].covariate_forms` | [] | ['additive_shift'] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [length] ** 3 / [time] | mg ([mass]) | ['psp412585-tbl-0004:row14:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412585-tbl-0004:row10:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412585-tbl-0004:row2:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['psp412585-tbl-0004:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412585-tbl-0004:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412585-tbl-0004:row3:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['psp412585-tbl-0004:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.5 L/h | ['psp412585-tbl-0004:row10:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 121 L | ['psp412585-tbl-0004:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blorlatinib%5D%20Lorlatinib_Chen2021_reference&body=Drug%3A%20lorlatinib%0ARecord%3A%20Lorlatinib_Chen2021_reference%0APaper%3A%20Chen_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:51 UTC</sub>
