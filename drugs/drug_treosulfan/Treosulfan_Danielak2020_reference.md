<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;treosulfan&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/&quot;},{&quot;label&quot;:&quot;Danielak_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Treosulfan_Chiesa2020_reference&quot;,&quot;label&quot;:&quot;Chiesa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Chiesa2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Danielak2018_reference&quot;,&quot;label&quot;:&quot;Danielak_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Danielak2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Rosser2023_reference&quot;,&quot;label&quot;:&quot;Rosser_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Rosser2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_Ten2014_reference&quot;,&quot;label&quot;:&quot;Ten_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_Ten2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_van2019_base&quot;,&quot;label&quot;:&quot;van_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_van2019_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Treosulfan_van2019_final&quot;,&quot;label&quot;:&quot;van_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_treosulfan/Treosulfan_van2019_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# treosulfan — `Treosulfan_Danielak2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The record was rejected because the peripheral volume parameter for treosulfan has a missing unit, preventing SI conversion and causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="treosulfan" model-id="Treosulfan_Danielak2020_reference" status="rejected" stale="false" population="Wistar rats" measured-compound="treosulfan" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Danielak D, Romański M, Kasprzyk A, Teżyk A, Główka F. Population pharmacokinetic approach for evaluation of treosulfan and its active monoepoxide disposition in plasma and brain on the basis of a rat model. Pharmacological reports : PR 72(5):1297–1309 (2020).
  ·  DOI: [10.1007/s43440-020-00115-0](https://doi.org/10.1007/s43440-020-00115-0)

## Population and dosing

**Population:** Wistar rats · condition healthy · age group adult · n = 96.

**Dosing:** 35000 mg, ip, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| k12 [1/h] | Q | 5.12 | 1/h | 17 |
| V2/F [L/kg] | V1/F | 1.03 | L/kg |  |
| CL1/F [L/h/kg] | CL/F | 0.419 | L/h/kg | 5 |
| V3/F L/kg] | V2/F | 0.914 |  |  |
| CL2/F [L/h/kg] | CL/F | 6.24 | L/h/kg | 3 |
| Q1/F [L/h/kg] | Q/F | 0.0233 | L/h/kg | 14 |
| k45 [1/h] | k41 | 0.271 | 1/h |  |
| V5/F [× 10–3 L/kg] | V1/F | 6.56 | L/kg |  |
| Q3/F [L/h/kg] | Q2/F | 0.0122 | L/h/kg | 10 |
| BBB1 | CLint | 0.120 |  | 5 |
| BBB2 | equation variable | 0.317 |  | 5 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the peripheral volume parameter for treosulfan has a missing unit, preventing SI conversion and causing a dimension mismatch.**

The parameter V2/F is assigned a value of 0.914 with the label 'V3/F L/kg]', but no unit is recorded. Consequently, the value cannot be converted to standard SI units. This absence of a defined unit leads to a dimension mismatch on this structural parameter. Extracted — treosulfan: Q 5.12 1/h, V1/F 1.03 L/kg, CL/F 0.419 L/h/kg, V2/F 0.914, Q/F 0.0233 L/h/kg, k41 0.271 1/h, Q2/F 0.0122 L/h/kg, CLint 0.12; EBDM: CL/F 6.24 L/h/kg, V1/F 6.56 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has treosulfan → ebdm (metabolism), the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| k12 [1/h] | `Q30` · Q | 5.12 | 1/h |  |  | 1/h | 17 | exact (1) | Tab1:row2:col1 |
| V2/F [L/kg] | `Q290` · V1/F | 1.03 | L/kg | 0.0721 | m3 | l/kg |  | exact (1) | Tab1:row3:col1, Tab1:row3:col2 |
| CL1/F [L/h/kg] | `Q27` · CL/F | 0.419 | L/h/kg | 8.147e-06 | m3/s | l/(h·kg) | 5 | exact (1) | Tab1:row4:col1 |
| V3/F L/kg] | `Q82` · V2/F | 0.914 |  |  |  |  |  | exact (1) | Tab1:row5:col1, Tab1:row5:col2 |
| CL2/F [L/h/kg] | `Q27` · CL/F | 6.24 | L/h/kg | 0.0001213 | m3/s | l/(h·kg) | 3 | exact (1) | Tab1:row7:col1 |
| Q1/F [L/h/kg] | `Q69` · Q/F | 0.0233 | L/h/kg | 4.531e-07 | m3/s | l/(h·kg) | 14 | llm_confirmed (0.6) | Tab1:row8:col1 |
| k45 [1/h] | `Q348` · k41 | 0.271 | 1/h | 7.528e-05 | 1/s | 1/h |  | llm_corrected (0.6) | Tab1:row10:col1, Tab1:row10:col2 |
| V5/F [× 10–3 L/kg] | `Q290` · V1/F | 6.56 | L/kg | 0.4592 | m3 | l/kg |  | exact (1) | Tab1:row11:col1, Tab1:row11:col2 |
| Q3/F [L/h/kg] | `Q80` · Q2/F | 0.0122 | L/h/kg | 2.372e-07 | m3/s | l/(h·kg) | 10 | special_case (0.95) | Tab1:row14:col1 |
| BBB1 | `Q3` · CLint | 0.120 |  |  |  |  | 5 | llm (0.6) | Tab1:row15:col1 |
| BBB2 | `Q900` · equation variable | 0.317 |  |  |  |  | 5 | llm (0.6) | Tab1:row16:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωk12' routed out of structural estimates ('IIV [%]b')
- table section iiv: 'ωCL' routed out of structural estimates ('IIV [%]b')
- table section residual_error: 'For TREO and EBDM in plasma' routed out of structural estimates ('Residual error')
- table section residual_error: 'For TREO and EBDM in brain tissue' routed out of structural estimates ('Residual error')
- unit_dimension_mismatch: 'k12 [1/h]' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k23 [1/h]' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k23 [1/h]', value '0.451') — already have one for this compound
- dropped duplicate Q290 ('V4/F [× 10–3 L/kg]', value '6.56') — already have one for this compound
- dropped duplicate Q27 ('Q2/F [L/h/kg]', value '0.304') — already have one for this compound
- dropped duplicate Q82 ('V6/F [L/kg]', value '0.364') — already have one for this compound
- dropped value-less row: 'Table 1. Estimates from the final pharmacokinetic model and the mean values obtained from the bootstrap analysis'
- dropped value-less row: 'RSE'
- dropped value-less row: 'relative standard error'
- dropped value-less row: 'CI'
- dropped value-less row: 'confidence intervala'
- NIL: refused to back-fill base 'omega_cov' from footnote/prose loose number None (source ['Tab1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'IIV' from footnote/prose loose number None (source ['Tab1:footnote']); the table cell was unparseable — needs review
- unit inherited for V1/F (Q290): 'L/kg' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=treosulfan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 17 linked by role; re-tagged parent→EBDM ×5, treosulfan→parent ×1
- molar mass: no plausible PubChem entry for 'EBDM' ('(2S,3S)-1,2-epoxybutane-3,4-diol-4-methanesulfonate') — left in mass units
- molar mass: none found for 'EBDM' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab1:row2:col2 = '5.40 (4.16–6.08)'
- unparsed cell Tab1:row4:col2 = '0.412 (0.386–0.452)'
- unparsed cell Tab1:row7:col2 = '6.26 (6.00–6.49)'
- unparsed cell Tab1:row8:col2 = '0.0230 (0.021–0.026)'
- unparsed cell Tab1:row12:col2 = '0.301 (0.251–0.356)'
- unparsed cell Tab1:row14:col2 = '0.0122 (0.011–0.014)'
- unparsed cell Tab1:row15:col2 = '0.120 (0.116–0.124)'
- unparsed cell Tab1:row16:col2 = '0.317 (0.303–0.332)'
- unparsed cell Tab1:row19:col2 = '62.3 (45.0–90.1)'
- unparsed cell Tab1:row20:col2 = '12.5 (9.4–17.0)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (13/26 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['treosulfan', 'ebdm', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[bbb1]` | 0.120 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bbb2]` | 0.317 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2/f [l/h/kg]]` | 6.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12 [1/h]].parameter_id` | Q30 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[k23 [1/h]]` |  | 0.451 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k45 [1/h]]` | 0.271 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2/f [l/h/kg]]` |  | 0.304 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3/f [l/h/kg]].parameter_id` | Q80 | Q309 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f [l/kg]].parameter_id` | Q290 | Q82 | mismatch |
| `gpt-oss-120b` | `parameters[v3/f l/kg]].parameter_id` | Q82 | Q78 | mismatch |
| `gpt-oss-120b` | `parameters[v4/f [× 10-3 l/kg]]` |  | 6.56 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v5/f [× 10-3 l/kg]]` | 6.56 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab1:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab1:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab1:row3:col1', 'Tab1:row3:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | 1/h | ['Tab1:row2:col1'] |
| C5_dimension_Q348 | pass | 1 / [time] |  | ['Tab1:row10:col1', 'Tab1:row10:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab1:row8:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['Tab1:row14:col1'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] |  | ['Tab1:row15:col1'] |
| C5_unit_missing_Q82 | fail | [length] ** 3 |  | ['Tab1:row5:col1', 'Tab1:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 29.3 L/h | ['Tab1:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 437 L/h | ['Tab1:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 72.1 L | ['Tab1:row3:col1', 'Tab1:row3:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 459 L | ['Tab1:row11:col1', 'Tab1:row11:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btreosulfan%5D%20Treosulfan_Danielak2020_reference&body=Drug%3A%20treosulfan%0ARecord%3A%20Treosulfan_Danielak2020_reference%0APaper%3A%20Danielak_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_treosulfan/Treosulfan_Danielak2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:33 UTC</sub>
