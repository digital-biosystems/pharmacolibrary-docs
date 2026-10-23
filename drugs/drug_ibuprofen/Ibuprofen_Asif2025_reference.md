<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ibuprofen&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/&quot;},{&quot;label&quot;:&quot;Asif_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibuprofen_Clissold1987_reference&quot;,&quot;label&quot;:&quot;Clissold_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Clissold1987_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Knihinicki1990_reference&quot;,&quot;label&quot;:&quot;Knihinicki_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Knihinicki1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Todd1986_reference&quot;,&quot;label&quot;:&quot;Todd_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Todd1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_DeGraves1993v2_reference&quot;,&quot;label&quot;:&quot;DeGraves_1993_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_DeGraves1993v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Trocniz2000_reference&quot;,&quot;label&quot;:&quot;Troc\u00f3niz_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibuprofen — `Ibuprofen_Asif2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the extracted clearance of 40.0 L/h is physiologically implausible for an extremely low gestational age neonate, indicating a unit or scale error.

<div class="pk-model-meta" hidden drug="ibuprofen" model-id="Ibuprofen_Asif2025_reference" status="rejected" stale="false" population="extremely low gestational age neonates with patent ductus arteriosus" measured-compound="ibuprofen" parameterization="mechanistic" topology="1C"></div>

## Citation
Asif M, Sushko K, Razak A, Borhan S, Rieder M, van den Anker J et al. A Retrospective Analysis of PK and Response of Oral Ibuprofen in the Treatment of a Patent Ductus Arteriosus in Extremely Low Gestational Age Neonates. Journal of clinical pharmacology 65(9):1157–1162 (2025).
  ·  DOI: [10.1002/jcph.70033](https://doi.org/10.1002/jcph.70033)

## Population and dosing

**Population:** extremely low gestational age neonates with patent ductus arteriosus · condition patent ductus arteriosus · age group neonate · n = 23.

**Dosing:** 350, 700, 1400 mg, oral, multiple, every 8 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0‐24 h | AUCt | 486 |  |
| total body clearance | CL | 40.0 | L/h |
| V,, ml | V | 22.37 | ml |
| first-order absorption rate constant (k a) | kabs | 1.1 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3), gpt-5.6-luna (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the extracted clearance of 40.0 L/h is physiologically implausible for an extremely low gestational age neonate, indicating a unit or scale error.**

The population consists of extremely low gestational age neonates, for whom a total body clearance of 40.0 L/h exceeds plausible physiological limits. This magnitude suggests an extraction error regarding the unit or scale of the clearance parameter. A second reader disagreed on several fields, including the primary analyte and specific parameter values, though the clearance magnitude was the primary cause of rejection. Extracted — ibuprofen: AUCt 486, CL 40 L/h, V 22.4 ml, kabs 1.1 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ibuprofen, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0‐24 h | `Q19` · AUCt | 486 |  |  |  |  | llm (0.6) | Asif_2025_table_2:row1:col1, Asif_2025_table_2:row1:col2 |
| total body clearance | `Q22` · CL | 40.0 | L/h | 1.111e-05 | m3/s | L/h | review_gapfill (0.7) | Clissold_1987:review |
| V,, ml | `Q61` · V | 22.37 | ml | 2.237e-05 | m3 | L | review_gapfill (0.7) | Askholt_1985:review |
| first-order absorption rate constant (k a) | `Q49` · kabs | 1.1 | h -1 | 0.0003056 | 1/s | 1/h | review_gapfill (0.7) | Hong_2008:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q19 ('AUC0‐72 h', value '1529') — already have one for this compound
- dropped unlinked row (NIL): 'PDA closure' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row3:col1', 'Asif_2025_table_2:row3:col2'])
- dropped unlinked row (NIL): 'Repeat pharmacotherapy' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row4:col1', 'Asif_2025_table_2:row4:col2'])
- dropped unlinked row (NIL): 'Ligation' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row5:col1', 'Asif_2025_table_2:row5:col2'])
- dropped unlinked row (NIL): 'Feeding intolerance' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row6:col1', 'Asif_2025_table_2:row6:col2'])
- dropped unlinked row (NIL): 'GI bleeding' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row7:col1', 'Asif_2025_table_2:row7:col2'])
- dropped unlinked row (NIL): 'SIP' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row8:col1', 'Asif_2025_table_2:row8:col2'])
- dropped unlinked row (NIL): 'NEC' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row9:col1', 'Asif_2025_table_2:row9:col2'])
- dropped unlinked row (NIL): 'IVH (any grade)' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row11:col1', 'Asif_2025_table_2:row11:col2'])
- dropped unlinked row (NIL): 'IVH (III‐IV)' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row12:col1', 'Asif_2025_table_2:row12:col2'])
- dropped unlinked row (NIL): 'Oliguria' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row13:col1', 'Asif_2025_table_2:row13:col2'])
- dropped unlinked row (NIL): 'Rise in creatinine' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row14:col1', 'Asif_2025_table_2:row14:col2'])
- dropped unlinked row (NIL): 'Thrombocytopenia' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row15:col1', 'Asif_2025_table_2:row15:col2'])
- dropped unlinked row (NIL): 'PVL' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row16:col1', 'Asif_2025_table_2:row16:col2'])
- dropped unlinked row (NIL): 'NDV disability' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row17:col1', 'Asif_2025_table_2:row17:col2'])
- dropped unlinked row (NIL): 'BPD' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row18:col1', 'Asif_2025_table_2:row18:col2'])
- dropped unlinked row (NIL): 'Mortality' — extend the ontology if this is a real PK parameter (source ['Asif_2025_table_2:row19:col1', 'Asif_2025_table_2:row19:col2'])
- table mostly unlinked (16/18 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ibuprofen
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Clissold_1987's review values (primary lacked it)
- gap-filled Q61 (V) from Askholt_1985's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Hong_2008's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |
| `gpt-5.6-luna` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[auc0‐24 h].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-5.6-luna` | `parameters[auc0‐72 h]` |  | 1529 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[first-order absorption rate constant]` | 1.1 |  | only_one_extracted |
| `gpt-5.6-luna` | `parameters[v,,]` | 22.37 |  | only_one_extracted |
| `gpt-5.6-luna` | `screen.primary_analyte` | ibuprofen | R- and S-ibuprofen | mismatch |
| `gpt-oss-120b` | `parameters[feeding intolerance]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order absorption rate constant]` | 1.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 34.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance]` | 0.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.13 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ibuprofen | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ibuprofen | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Ground-truth comparison:** <span class="pk-badge pk-badge--orange">unconfirmed</span>  (expected: no popPK params — 3 false positives)

> Clinical-outcome paper on standard vs high-dose ibuprofen for PDA closure in neonates — reports exposure/outcome metrics (AUC, closure rate, ligation, feeding intolerance, GI bleeding) but NO distribution volume and NO clearance/elimination. Not a compartmental popPK model even though popPK is mentioned. The pipeline must REJECT it (validate C0b: no disposition core → provisional_status=rejected), so nothing is extracted for scoring.

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `['Q19', '']` | false_positive | 486 | None |  |
| `['Q49', '']` | false_positive | 1.1 | None |  |
| `['Q61', '']` | false_positive | 22.37 | None |  |

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Clissold_1987:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hong_2008:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Askholt_1985:review'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['Asif_2025_table_2:row1:col1', 'Asif_2025_table_2:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 40 | ['Clissold_1987:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 40 L/h | ['Clissold_1987:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0224 L | ['Askholt_1985:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibuprofen%5D%20Ibuprofen_Asif2025_reference&body=Drug%3A%20ibuprofen%0ARecord%3A%20Ibuprofen_Asif2025_reference%0APaper%3A%20Asif_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibuprofen/Ibuprofen_Asif2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-20 17:41 UTC</sub>
