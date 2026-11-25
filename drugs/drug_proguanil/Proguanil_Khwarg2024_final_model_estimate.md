<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/&quot;},{&quot;label&quot;:&quot;Khwarg_2024 \u00b7 final_model_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Proguanil_McGready2003_reference&quot;,&quot;label&quot;:&quot;McGready_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_McGready2003_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# proguanil — `Proguanil_Khwarg2024_final_model_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q3 unit L/h ([length] ** 3 / [time]) vs [length] ** 3 / [time] / [mass].

<div class="pk-model-meta" hidden drug="proguanil" model-id="Proguanil_Khwarg2024_final_model_estimate" status="rejected" stale="false" population="healthy Korean adults" measured-compound="proguanil" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Khwarg J, Yang E, Park CS, Ji SC, Yu KS, Lee S. Effect of SLC22A1 polymorphism on the pharmacokinetics of proguanil in Korean: A semi-physiologic population pharmacokinetic approach. Clinical and translational science 17(12):e70103 (2024).
  ·  DOI: [10.1111/cts.70103](https://doi.org/10.1111/cts.70103)

## Population and dosing

**Population:** healthy Korean adults · condition healthy · age group adult · n = 16.

**Dosing:** 100, 250 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| K A (1/h) | kabs | 0.101 | 1/h | 6.0 |
| CL/F (L/h) | CL/F | 33.5 | L/h | 16.4 |
| V c/F (L) | V1/F | 58.4 | L | 24.1 |
| Q/F (L/h) | Q/F | 41.4 | L/h | 7.2 |
| V p/F (L) | V2/F | 1400 | L | 26.0 |
| CLint (L/h) | CLint | 78.3 | L/h | 18.6 |
| mKT (1/h) | kel | 1.03 | 1/h | 5.8 |
| CLM/F (L/h) | CL/F | 97.0 | L/h | 13.8 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q3 unit L/h ([length] ** 3 / [time]) vs [length] ** 3 / [time] / [mass].**

A reported unit could not be converted (CLint), so that value has no SI equivalent. Extracted — proguanil: kabs 0.101 1/h, CL/F 33.5 L/h, V1/F 58.4 L, Q/F 41.4 L/h, V2/F 1.4e+03 L, CLint 78.3 L/h; cycloguanil: kel 1.03 1/h, CL/F 97 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has proguanil → cycloguanil (metabolism), the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| K A (1/h) | `Q49` · kabs | 0.101 | 1/h | 2.806e-05 | 1/s | 1/h | 6.0 | exact (1) | cts70103-tbl-0003:row3:col1 |
| CL/F (L/h) | `Q27` · CL/F | 33.5 | L/h | 9.306e-06 | m3/s | l/h | 16.4 | exact (1) | cts70103-tbl-0003:row4:col1 |
| V c/F (L) | `Q290` · V1/F | 58.4 | L | 0.0584 | m3 | l | 24.1 | space_fold (0.95) | cts70103-tbl-0003:row5:col1 |
| Q/F (L/h) | `Q69` · Q/F | 41.4 | L/h | 1.15e-05 | m3/s | l/h | 7.2 | exact (1) | cts70103-tbl-0003:row6:col1 |
| V p/F (L) | `Q82` · V2/F | 1400 | L | 1.4 | m3 | l | 26.0 | space_fold (0.95) | cts70103-tbl-0003:row7:col1 |
| CLint (L/h) | `Q3` · CLint | 78.3 | L/h |  |  | l/h | 18.6 | exact (1) | cts70103-tbl-0003:row8:col1 |
| mKT (1/h) | `Q47` · kel | 1.03 | 1/h | 0.0002861 | 1/s | 1/h | 5.8 | llm (0.6) | cts70103-tbl-0003:row15:col1 |
| CLM/F (L/h) | `Q27` · CL/F | 97.0 | L/h | 2.694e-05 | m3/s | l/h | 13.8 | exact (1) | cts70103-tbl-0003:row16:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'K A (1/h)'; source reconciliation required
- table representations disagree for 'CL/F (L/h)'; source reconciliation required
- table representations disagree for 'V c/F (L)'; source reconciliation required
- table representations disagree for 'Q/F (L/h)'; source reconciliation required
- table representations disagree for 'V p/F (L)'; source reconciliation required
- table representations disagree for 'CLint (L/h)'; source reconciliation required
- table representations disagree for 'FUP'; source reconciliation required
- table representations disagree for 'IIV CL/F (%CV)'; source reconciliation required
- table representations disagree for 'IIV V c/F (%CV)'; source reconciliation required
- table representations disagree for 'IIV Clint (%CV)'; source reconciliation required
- table representations disagree for 'Proportional error'; source reconciliation required
- table representations disagree for 'mKT (1/h)'; source reconciliation required
- table representations disagree for 'CLM/F (L/h)'; source reconciliation required
- table representations disagree for 'IIV mKT (%CV)'; source reconciliation required
- table representations disagree for 'Additive error (μg/L)'; source reconciliation required
- unit_dimension_mismatch: 'CLint (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'FUP' — extend the ontology if this is a real PK parameter (source ['cts70103-tbl-0003:row9:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=proguanil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — hepatic compartment; parent 2 + hepatic, metabolites [0] (site hepatic: 'Based on the PK and genotype data, a parent‐metabolite joint population PK model including a well‐stirred liver compartm')
- status held at "Needs review" — not promoted
- population split: 'final model / estimate' subgroup of Khwarg_2024 (paper reports 3 populations: cc, ct, final model / estimate)
- row roles: 4 per-group rows of proguanil summary_statistic but 4 reference group(s) — kept as printed
- row roles: 26 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 7 linked by role; re-tagged parent→cycloguanil ×29

**Extraction notes:**
- table cts70103-tbl-0003: representations disagree; selected evidence retained, not merged
- companion parameter table 2 transcribed (60 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.714 (15/21 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['proguanil', 'cycloguanil', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clm/f]` |  | 97.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | 97.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fup]` |  | 0.416 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mkt]` |  | 1.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mkt]` | 1.03 |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70103-tbl-0003:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts70103-tbl-0003:row16:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cts70103-tbl-0003:row5:col1'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] / [mass] | L/h ([length] ** 3 / [time]) | ['cts70103-tbl-0003:row8:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cts70103-tbl-0003:row15:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts70103-tbl-0003:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cts70103-tbl-0003:row6:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cts70103-tbl-0003:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 33.5 L/h | ['cts70103-tbl-0003:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 97 L/h | ['cts70103-tbl-0003:row16:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 58.4 L | ['cts70103-tbl-0003:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.4e+03 L | ['cts70103-tbl-0003:row7:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bproguanil%5D%20Proguanil_Khwarg2024_final_model_estimate&body=Drug%3A%20proguanil%0ARecord%3A%20Proguanil_Khwarg2024_final_model_estimate%0APaper%3A%20Khwarg_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_proguanil/Proguanil_Khwarg2024_final_model_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:32 UTC</sub>
