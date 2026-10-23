<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ibuprofen&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/&quot;},{&quot;label&quot;:&quot;Brown_1998 \u00b7 ibu05&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibuprofen_Clissold1987_reference&quot;,&quot;label&quot;:&quot;Clissold_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Clissold1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Knihinicki1990_reference&quot;,&quot;label&quot;:&quot;Knihinicki_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Knihinicki1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Todd1986_reference&quot;,&quot;label&quot;:&quot;Todd_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Todd1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_DeGraves1993v2_reference&quot;,&quot;label&quot;:&quot;DeGraves_1993_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_DeGraves1993v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Trocniz2000_reference&quot;,&quot;label&quot;:&quot;Troc\u00f3niz_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibuprofen — `Ibuprofen_Brown1998_ibu05`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The ibuprofen record was rejected because the model structure lacks defined dose links, leaving the system without a path from administration to the drug.

<div class="pk-model-meta" hidden drug="ibuprofen" model-id="Ibuprofen_Brown1998_ibu05" status="rejected" stale="false" population="febrile children" measured-compound="ibuprofen" parameterization="apparent" topology="general_linear"></div>

## Citation
Brown RD, Kearns GL, Wilson JT. Integrated pharmacokinetic-pharmacodynamic model for acetaminophen, ibuprofen, and placebo antipyresis in children. Journal of pharmacokinetics and biopharmaceutics 26(5):559–579 (1998).
  ·  DOI: [10.1023/a:1023225217108](https://doi.org/10.1023/a:1023225217108)

## Population and dosing

**Population:** febrile children · condition febrile · age group child · n = 178.

**Dosing:** 350, 700, 875 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| tlag (hr) x̄ | tlag | 0.31 | hr |
| ka (hr⁻¹) x̄ | kabs | 7.75 | hr⁻¹ |
| β (hr⁻¹) x̄ | kel | 0.57 | hr⁻¹ |
| T1/2 (hr) x̄ | t1/2z | 1.44 | hr |
| Total n | equation variable | 28 |  |
| AUC0→∞ (μg/ml*hr) x̄ | AUC∞ | 71.05 | μg/ml*hr |
| Va/F (L/kg) x̄ | V/F | 0.16 | L/kg |
| Clp/F (L/kg/hr) x̄ | CL/F | 0.08 | L/kg/hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833), gpt-5.6-luna (not confirmed, agreement 0.818). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ibuprofen record was rejected because the model structure lacks defined dose links, leaving the system without a path from administration to the drug.**

The model links list is empty or undefined, resulting in an unreachable compartment where the drug has no origin from the dose. Additionally, a reported unit could not be converted to SI, preventing a parameter from being processed with a standard value. Extracted — ibuprofen: tlag 0.31 hr, kabs 7.75 hr⁻¹, kel 0.57 hr⁻¹, t1/2z 1.44 hr, AUC∞ 71 μg/ml*hr, V/F 0.16 L/kg, CL/F 0.08 L/kg/hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none → none (none), the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tlag (hr) x̄ | `Q83` · tlag | 0.31 | hr | 1116 | s | h | exact (1) | Brown_1998_table_3:row0:col2 |
| ka (hr⁻¹) x̄ | `Q49` · kabs | 7.75 | hr⁻¹ | 0.002153 | 1/s | 1/h | exact (1) | Brown_1998_table_3:row2:col2 |
| β (hr⁻¹) x̄ | `Q47` · kel | 0.57 | hr⁻¹ | 0.0001583 | 1/s | 1/h | exact (1) | Brown_1998_table_3:row4:col2 |
| T1/2 (hr) x̄ | `Q57` · t1/2z | 1.44 | hr | 5184 | s | h | exact (1) | Brown_1998_table_3:row6:col2 |
| Total n | `Q900` · equation variable | 28 |  |  |  |  | llm (0.6) | Brown_1998_table_3:row8:col2, Brown_1998_table_4:row6:col2 |
| AUC0→∞ (μg/ml*hr) x̄ | `Q17` · AUC∞ | 71.05 | μg/ml*hr |  |  | µg/(h·ml) | exact (1) | Brown_1998_table_4:row0:col2 |
| Va/F (L/kg) x̄ | `Q76` · V/F | 0.16 | L/kg | 0.0112 | m3 | l/kg | llm (0.6) | Brown_1998_table_4:row2:col2 |
| Clp/F (L/kg/hr) x̄ | `Q27` · CL/F | 0.08 | L/kg/hr | 1.556e-06 | m3/s | l/(h·kg) | special_case (0.95) | Brown_1998_table_4:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'tlag (hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row1:col2'])
- dropped unlinked row (NIL): 'ka (hr⁻¹) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row3:col2'])
- dropped unlinked row (NIL): 'β (hr⁻¹) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row5:col2'])
- dropped unlinked row (NIL): 'T1/2 (hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_3:row7:col2'])
- dropped unlinked row (NIL): 'AUC0→∞ (μg/ml*hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_4:row1:col2'])
- dropped unlinked row (NIL): 'Va/F (L/kg) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_4:row3:col2'])
- dropped unlinked row (NIL): 'Clp/F (L/kg/hr) SE' — extend the ontology if this is a real PK parameter (source ['Brown_1998_table_4:row5:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ibuprofen
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- population split: 'ibu05' subgroup of Brown_1998 (paper reports 2 populations: ibu05, ibu10)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4
- transposed table Brown_1998_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- transposed table Brown_1998_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- skipped illustrative/example figure caption(s) fig_1, fig_2, fig_3 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (10/12 fields) | 2 |
| `gpt-5.6-luna` | not confirmed | 0.818 (9/11 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `screen.dose_compound` | ibuprofen | acetaminophen or ibuprofen | mismatch |
| `gpt-5.6-luna` | `screen.primary_analyte` | ibuprofen | acetaminophen and ibuprofen | mismatch |
| `gpt-oss-120b` | `model.links` | [['none', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[total n]` | 28 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.82 | 1.386 | 0.7615 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Brown_1998_table_4:row0:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Brown_1998_table_4:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Brown_1998_table_3:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Brown_1998_table_3:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Brown_1998_table_3:row6:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Brown_1998_table_4:row2:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Brown_1998_table_3:row0:col2'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.6 L/h |  |  | ['Brown_1998_table_4:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.2 L |  |  | ['Brown_1998_table_4:row2:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibuprofen%5D%20Ibuprofen_Brown1998_ibu05&body=Drug%3A%20ibuprofen%0ARecord%3A%20Ibuprofen_Brown1998_ibu05%0APaper%3A%20Brown_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibuprofen/Ibuprofen_Brown1998_ibu05%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-20 17:41 UTC</sub>
