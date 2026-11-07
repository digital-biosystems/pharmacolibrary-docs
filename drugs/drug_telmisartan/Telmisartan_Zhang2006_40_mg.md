<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;telmisartan&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/&quot;},{&quot;label&quot;:&quot;Zhang_2006 \u00b7 40_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telmisartan_Huang2019_reference&quot;,&quot;label&quot;:&quot;Huang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Huang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Ieiri2011_reference&quot;,&quot;label&quot;:&quot;Ieiri_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Ieiri2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Petersen2024_reference&quot;,&quot;label&quot;:&quot;Petersen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Petersen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Tatami2003_final&quot;,&quot;label&quot;:&quot;Tatami_2003_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Jeong2025_reference&quot;,&quot;label&quot;:&quot;Jeong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Jeong2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Tatami2003_estimated_parameters&quot;,&quot;label&quot;:&quot;Tatami_2003_estimated_parameters&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_estimated_parameters.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telmisartan — `Telmisartan_Zhang2006_40_mg`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Telmisartan model was rejected because the elimination rate constant unit could not be standardized.

<div class="pk-model-meta" hidden drug="telmisartan" model-id="Telmisartan_Zhang2006_40_mg" status="rejected" stale="false" population="healthy Chinese adults" measured-compound="telmisartan" parameterization="apparent" topology="1C"></div>

## Citation
Zhang P, Zhang Y, Chen X, Li R, Yin J, Zhong D. Pharmacokinetics of telmisartan in healthy Chinese subjects after oral administration of two dosage levels. Arzneimittel-Forschung 56(8):569–573 (2006).
  ·  DOI: [10.1055/s-0031-1296753](https://doi.org/10.1055/s-0031-1296753)

## Population and dosing

**Population:** healthy Chinese adults · condition healthy · age group adult.

**Dosing:** 40, 80 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 163.2 | ng/mL |
| tmax (h) | tmax | 1.8 | h |
| t1/2 (h) | t1/2z | 23.6 | h |
| ke (h) | kel | 0.033 | h |
| AUC0-t (ng·h/mL) | AUCt | 1456 | ng·h/mL |
| AUC0-∞ (ng·h/mL) | AUC∞ | 1611 | ng·h/mL |
| CL/F (mL/min) | CL/F | 722.9 | mL/min |
| Vd/F (L) | V/F | 1453 | L |
| Ka | kabs | 4.53 | /h |
| Tlag | tlag | 0.25 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Telmisartan model was rejected because the elimination rate constant unit could not be standardized.**

The elimination rate constant was reported in hours, which is dimensionally incorrect for a first-order rate constant. This non-standard unit prevented the value from being expressed in compatible SI terms. Consequently, the parameter lacked a valid numerical value for the model. Extracted — telmisartan: Cmax 163 ng/mL, tmax 1.8 h, t1/2z 23.6 h, kel 0.033 h, AUCt 1.46e+03 ng·h/mL, AUC∞ 1.61e+03 ng·h/mL, CL/F 723 mL/min, V/F 1.45e+03 L, … (+2).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 163.2 | ng/mL |  |  | ng/ml | exact (1) | Zhang_2006_table_p4_1:row0:col1 |
| tmax (h) | `Q56` · tmax | 1.8 | h | 6480 | s | h | exact (1) | Zhang_2006_table_p4_1:row1:col1 |
| t1/2 (h) | `Q57` · t1/2z | 23.6 | h | 8.496e+04 | s | h | exact (1) | Zhang_2006_table_p4_1:row2:col1 |
| ke (h) | `Q47` · kel | 0.033 | h |  |  | h | exact (1) | Zhang_2006_table_p4_1:row3:col1 |
| AUC0-t (ng·h/mL) | `Q19` · AUCt | 1456 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Zhang_2006_table_p4_1:row4:col1 |
| AUC0-∞ (ng·h/mL) | `Q17` · AUC∞ | 1611 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Zhang_2006_table_p4_1:row5:col1 |
| CL/F (mL/min) | `Q27` · CL/F | 722.9 | mL/min | 1.205e-05 | m3/s | ml/min | exact (1) | Zhang_2006_table_p4_1:row6:col1 |
| Vd/F (L) | `Q76` · V/F | 1453 | L | 1.453 | m3 | l | exact (1) | Zhang_2006_table_p4_1:row7:col1 |
| Ka | `Q49` · kabs | 4.53 | /h | 0.001258 | 1/s | 1/h | review_gapfill (0.7) | Chae_2018:review |
| Tlag | `Q83` · tlag | 0.25 | h | 900 | s | h | review_gapfill (0.7) | Chae_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ke (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telmisartan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: '40 mg (n = 18)' subgroup of Zhang_2006 (paper reports 2 populations: 40 mg (n = 18), 80 mg (n = 18))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Chae_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Chae_2018's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (12/12 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Zhang_2006_table_p4_1:row5:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Zhang_2006_table_p4_1:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Zhang_2006_table_p4_1:row6:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Zhang_2006_table_p4_1:row0:col1'] |
| C5_dimension_Q47 | fail | [time] | h | ['Zhang_2006_table_p4_1:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chae_2018:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Zhang_2006_table_p4_1:row1:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Zhang_2006_table_p4_1:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Zhang_2006_table_p4_1:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Chae_2018:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 43.4 L/h | ['Zhang_2006_table_p4_1:row6:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.45e+03 L | ['Zhang_2006_table_p4_1:row7:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelmisartan%5D%20Telmisartan_Zhang2006_40_mg&body=Drug%3A%20telmisartan%0ARecord%3A%20Telmisartan_Zhang2006_40_mg%0APaper%3A%20Zhang_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telmisartan/Telmisartan_Zhang2006_40_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 16:54 UTC</sub>
