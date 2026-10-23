<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/&quot;},{&quot;label&quot;:&quot;Khwarg_2024 \u00b7 final_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# proguanil — `Proguanil_Khwarg2024_final_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The proguanil parent–metabolite model (metabolite cycloguanil) was rejected because a structural parameter failed a dimensional consistency check, and one reported parameter's unit could not be converted to a standard unit.

<div class="pk-model-meta" hidden drug="proguanil" model-id="Proguanil_Khwarg2024_final_model" status="rejected" stale="false" population="healthy Korean adults" measured-compound="proguanil" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Khwarg J, Yang E, Park CS, Ji SC, Yu KS, Lee S. Effect of SLC22A1 polymorphism on the pharmacokinetics of proguanil in Korean: A semi-physiologic population pharmacokinetic approach. Clinical and translational science 17(12):e70103 (2024).
  ·  DOI: [10.1111/cts.70103](https://doi.org/10.1111/cts.70103)

## Population and dosing

**Population:** healthy Korean adults · condition healthy · age group adult · n = 16.

**Dosing:** 100 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K A (1/h) | kabs | 0.101 | 1/h |
| CL/F (L/h) | CL/F | 33.5 | L/h |
| V c/F (L) | V1/F | 58.4 | L |
| Q/F (L/h) | Q/F | 41.4 | L/h |
| V p/F (L) | V2/F | 1400 | L |
| CLint (L/h) | CLint | 78.3 | L/h |
| FUP | fu | 0.416 |  |
| mKT (1/h) | ktr | 1.03 | 1/h |
| CLM/F (L/h) | CLfm | 97.0 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The proguanil parent–metabolite model (metabolite cycloguanil) was rejected because a structural parameter failed a dimensional consistency check, and one reported parameter's unit could not be converted to a standard unit.**

The record for proguanil, with its hepatically formed metabolite cycloguanil linked by an intrinsic clearance CLint of 78.3 L/h, was refused on a dimension mismatch affecting a structural parameter; the finding does not name which of the reported parameters (kabs 0.101 1/h, CL/F 33.5 L/h, V1/F 58.4 L, Q/F 41.4 L/h, V2/F 1400 L, CLfm 97.0 L/h) is at fault. Separately, one parameter was reported in a unit that could not be expressed in a standard unit, so that parameter entered the model without a usable numeric value in consistent units. No other checks are reported as failed or inconclusive. Extracted — proguanil: kabs 0.101 1/h, CL/F 33.5 L/h, V1/F 58.4 L, Q/F 41.4 L/h, V2/F 1.4e+03 L, CLint 78.3 L/h, fu 0.416; cycloguanil: ktr 1.03 1/h, CLfm 97 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has proguanil, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K A (1/h) | `Q49` · kabs | 0.101 | 1/h | 2.806e-05 | 1/s | 1/h | exact (1) | cts70103-tbl-0003:row3:col1, cts70103-tbl-0003:row3:col2 |
| CL/F (L/h) | `Q27` · CL/F | 33.5 | L/h | 9.306e-06 | m3/s | l/h | exact (1) | cts70103-tbl-0003:row4:col1, cts70103-tbl-0003:row4:col2 |
| V c/F (L) | `Q290` · V1/F | 58.4 | L | 0.0584 | m3 | l | space_fold (0.95) | cts70103-tbl-0003:row5:col1, cts70103-tbl-0003:row5:col2 |
| Q/F (L/h) | `Q69` · Q/F | 41.4 | L/h | 1.15e-05 | m3/s | l/h | exact (1) | cts70103-tbl-0003:row6:col1, cts70103-tbl-0003:row6:col2 |
| V p/F (L) | `Q82` · V2/F | 1400 | L | 1.4 | m3 | l | space_fold (0.95) | cts70103-tbl-0003:row7:col1, cts70103-tbl-0003:row7:col2 |
| CLint (L/h) | `Q3` · CLint | 78.3 | L/h |  |  | l/h | exact (1) | cts70103-tbl-0003:row8:col1, cts70103-tbl-0003:row8:col2 |
| FUP | `Q46` · fu | 0.416 |  |  |  |  | llm (0.6) | cts70103-tbl-0003:row9:col1, cts70103-tbl-0003:row9:col2, cts70103-tbl-0003:footnote |
| mKT (1/h) | `Q306` · ktr | 1.03 | 1/h | 0.0002861 | 1/s | 1/h | llm (0.6) | cts70103-tbl-0003:row15:col1, cts70103-tbl-0003:row15:col2 |
| CLM/F (L/h) | `Q370` · CLfm | 97.0 | L/h | 2.694e-05 | m3/s | l/h | llm_confirmed (0.6) | cts70103-tbl-0003:row16:col1, cts70103-tbl-0003:row16:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CLint (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- implicit units: 'K A (1/h)' → 1/h (from the paper text: "The parameter list itself shows 'K A (1/h) = 0.101', and the paper describes first-order absorption; rate constants are ")
- implicit units: 'mKT (1/h)' → 1/h (from the paper text: "The parameter list shows 'mKT (1/h) = 1.03'; the paper describes mKT as the transit rate constant, a first-order rate co")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=proguanil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — hepatic compartment; parent 2 + hepatic, metabolites [0] (site hepatic: 'Based on the PK and genotype data, a parent‐metabolite joint population PK model including a well‐stirred liver compartm')
- status held at route_to_review — not promoted
- population split: 'final model' subgroup of Khwarg_2024 (paper reports 3 populations: cc, ct, final model)
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→cycloguanil ×9, proguanil→parent ×1
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 2 transcribed (48 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 33.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 16.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint]` | 78.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint]` |  | 18.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f].parameter_id` | Q370 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[clm/f].value` | 97.0 | 13.8 | mismatch |
| `gpt-oss-120b` | `parameters[fup]` | 0.416 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fup]` |  | 54.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.101 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` |  | 6.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mkt].parameter_id` | Q306 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[mkt].value` | 1.03 | 5.8 | mismatch |
| `gpt-oss-120b` | `parameters[q/f]` | 41.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 7.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f]` | 58.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f]` |  | 24.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p/f]` | 1400 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p/f]` |  | 26.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | proguanil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | proguanil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70103-tbl-0003:row4:col1', 'cts70103-tbl-0003:row4:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts70103-tbl-0003:row5:col1', 'cts70103-tbl-0003:row5:col2'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/h | ['cts70103-tbl-0003:row8:col1', 'cts70103-tbl-0003:row8:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['cts70103-tbl-0003:row15:col1', 'cts70103-tbl-0003:row15:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['cts70103-tbl-0003:row16:col1', 'cts70103-tbl-0003:row16:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70103-tbl-0003:row3:col1', 'cts70103-tbl-0003:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts70103-tbl-0003:row6:col1', 'cts70103-tbl-0003:row6:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts70103-tbl-0003:row7:col1', 'cts70103-tbl-0003:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 33.5 L/h | ['cts70103-tbl-0003:row4:col1', 'cts70103-tbl-0003:row4:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 58.4 L | ['cts70103-tbl-0003:row5:col1', 'cts70103-tbl-0003:row5:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.4e+03 L | ['cts70103-tbl-0003:row7:col1', 'cts70103-tbl-0003:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bproguanil%5D%20Proguanil_Khwarg2024_final_model&body=Drug%3A%20proguanil%0ARecord%3A%20Proguanil_Khwarg2024_final_model%0APaper%3A%20Khwarg_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_proguanil/Proguanil_Khwarg2024_final_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:59 UTC</sub>
