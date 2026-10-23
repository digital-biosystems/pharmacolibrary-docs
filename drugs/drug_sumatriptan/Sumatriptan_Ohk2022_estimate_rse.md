<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;sumatriptan&quot;,&quot;href&quot;:&quot;drugs/drug_sumatriptan/&quot;},{&quot;label&quot;:&quot;Ohk_2022 \u00b7 estimate_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sumatriptan — `Sumatriptan_Ohk2022_estimate_rse`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejected due to apparent parameter double correction and a dimension mismatch for transit count.

<div class="pk-model-meta" hidden drug="sumatriptan" model-id="Sumatriptan_Ohk2022_estimate_rse" status="rejected" stale="false" population="healthy Korean adults" measured-compound="sumatriptan" parameterization="apparent" topology="1C"></div>

## Citation
Ohk B, Seong S, Lee J, Gwon M, Kang W, Lee H et al. Evaluation of sex differences in the pharmacokinetics of oral sumatriptan in healthy Korean subjects using population pharmacokinetic modeling. Biopharmaceutics & drug disposition 43(1):23–32 (2022).
  ·  DOI: [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307)

## Population and dosing

**Population:** healthy Korean adults · condition healthy · age group adult · n = n_subjects (numeric or 'unknown').

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, CLm/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/FM (L/h) | CLm/F | 444 | L/h | 4 |
| CL/FF (L/h) | CL/F | 281 | L/h | 7 |
| V3/F (L) | V3/F | 68.7 | L | 32 |
| ka1 (h−1) | t1/2ka | 0.568 | h−1 | 12 |
| ka2 (h−1) | λ2 | 0.295 | h−1 | 5 |
| MTT (h) | MTT | 1.52 | h | 11 |
| NN | n_transit | 6.7 |  | 48 |
| f | Fab | 0.558 |  | 7 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.773). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected due to apparent parameter double correction and a dimension mismatch for transit count.**

The record lists apparent parameters with explicit bioavailability denominators, violating coherence rules. The transit compartment count is flagged for a dimensional inconsistency. A unit conversion failure prevented the parameter from receiving a standard value. Extracted — sumatriptan: CLm/F 444 L/h, CL/F 281 L/h, V3/F 68.7 L, t1/2ka 0.568 h−1, λ2 0.295 h−1, MTT 1.52 h, n_transit 6.7, Fab 0.558.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sumatriptan, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/FM (L/h) | `Q351` · CLm/F | 444 | L/h | 0.0001233 | m3/s | l/h | 4 | exact (1) | bdd2307-tbl-0004:row1:col2 |
| CL/FF (L/h) | `Q27` · CL/F | 281 | L/h | 7.806e-05 | m3/s | l/h | 7 | llm (0.6) | bdd2307-tbl-0004:row2:col2 |
| V3/F (L) | `Q78` · V3/F | 68.7 | L | 0.0687 | m3 | l | 32 | exact (1) | bdd2307-tbl-0004:row3:col2 |
| ka1 (h−1) | `Q95` · t1/2ka | 0.568 | h−1 |  |  | 1/h | 12 | llm (0.6) | bdd2307-tbl-0004:row4:col2 |
| ka2 (h−1) | `Q68` · λ2 | 0.295 | h−1 |  |  | 1/h | 5 | llm (0.6) | bdd2307-tbl-0004:row5:col2 |
| MTT (h) | `Q81` · MTT | 1.52 | h |  |  | h | 11 | exact (1) | bdd2307-tbl-0004:row6:col2 |
| NN | `Q311` · n_transit | 6.7 |  |  |  |  | 48 | exact (1) | bdd2307-tbl-0004:row7:col2 |
| f | `Q40` · Fab | 0.558 |  |  |  |  | 7 | exact (1) | bdd2307-tbl-0004:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ka1 (h−1)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'ka2 (h−1)' → Q68 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'ALAG1 (h)' — extend the ontology if this is a real PK parameter (source ['bdd2307-tbl-0004:row8:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sumatriptan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate (%rse)' subgroup of Ohk_2022 (paper reports 5 populations: estimate (%rse), females (n = 9), males (n = 29), p value d, total (n = 38))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell bdd2307-tbl-0004:row8:col1 = 'Lag time for ka1'
- unparsed cell Ohk_2022_table_2:row1:col5 = '&lt;0.001'
- unparsed cell Ohk_2022_table_2:row4:col1 = '1.5 (0.5–4.0)'
- unparsed cell Ohk_2022_table_2:row4:col2 = '1.5 (0.5–3.0)'
- unparsed cell Ohk_2022_table_2:row4:col3 = '1.5 (1.0–4.0)'
- unparsed cell Ohk_2022_table_2:row6:col5 = '&lt;0.001'
- companion parameter table 2 transcribed (35 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.773 (17/22 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1]` |  | 0.239 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[ka2]` | 0.295 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sumatriptan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sumatriptan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['bdd2307-tbl-0004:row2:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['bdd2307-tbl-0004:row1:col2'] |
| C5_dimension_Q68 | fail | 1 / [time] | h−1 | ['bdd2307-tbl-0004:row5:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['bdd2307-tbl-0004:row3:col2'] |
| C5_dimension_Q95 | fail | 1 / [time] | h−1 | ['bdd2307-tbl-0004:row4:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.558 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 281 L/h | ['bdd2307-tbl-0004:row2:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsumatriptan%5D%20Sumatriptan_Ohk2022_estimate_rse&body=Drug%3A%20sumatriptan%0ARecord%3A%20Sumatriptan_Ohk2022_estimate_rse%0APaper%3A%20Ohk_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sumatriptan/Sumatriptan_Ohk2022_estimate_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:44 UTC</sub>
