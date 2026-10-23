<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;telmisartan&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/&quot;},{&quot;label&quot;:&quot;Jeong_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Telmisartan_Tatami2003_final&quot;,&quot;label&quot;:&quot;Tatami_2003_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Tatami2003_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Huang2019_reference&quot;,&quot;label&quot;:&quot;Huang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Huang2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Ieiri2011_reference&quot;,&quot;label&quot;:&quot;Ieiri_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Ieiri2011_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Telmisartan_Petersen2024_reference&quot;,&quot;label&quot;:&quot;Petersen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/Telmisartan_Petersen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yu_2015_K&quot;,&quot;label&quot;:&quot;Yu_2015 \u00b7 K+&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_telmisartan/pd_Yu_2015_K.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# telmisartan — `Telmisartan_Jeong2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model for telmisartan was rejected because a structural parameter lacked a valid SI unit.

<div class="pk-model-meta" hidden drug="telmisartan" model-id="Telmisartan_Jeong2025_reference" status="rejected" stale="false" population="healthy subjects and hypertensive patients" measured-compound="telmisartan" parameterization="apparent" topology="1C"></div>

## Citation
Jeong IH, Ryu S, Han N, Staatz CE, Baek IH. Population Pharmacokinetics of Telmisartan in Healthy Subjects and Hypertensive Patients. Clinical pharmacokinetics 64(2):285–295 (2025).
  ·  DOI: [10.1007/s40262-024-01471-3](https://doi.org/10.1007/s40262-024-01471-3)

## Population and dosing

**Population:** healthy subjects and hypertensive patients · condition healthy and hypertension · age group adult · n = 879.

**Dosing:** 10, 120 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dose-normalized C max (ng/mL/mg) | Cmax/dose | 4.00 | ng/mL/mg |
| Dose-normalized AUC t (ng•h/mL/mg) | AUCt | 30.44 | ng•h/mL/mg |
| Dose-normalized AUC ∞ (ng•h/mL/mg) | AUC∞ | 40.26 | ng•h/mL/mg |
| t 1/2 (h) | t1/2z | 20.86 | h |
| CL t /F (mL/min) | CL/F | 551.80 | mL/min |
| V z /F (L) | V/F | 1332.06 | L |
| Ka | kabs | 4.53 | /h |
| Tlag | tlag | 0.25 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model for telmisartan was rejected because a structural parameter lacked a valid SI unit.**

The record contains a one-compartment structural parameter that could not be converted to SI units, causing a dimension mismatch. A second reader disagreed with the recorded dose compound and several parameter values, such as the absorption lag time and apparent clearance. Extracted — telmisartan: Cmax/dose 4 ng/mL/mg, AUCt 30.4 ng•h/mL/mg, AUC∞ 40.3 ng•h/mL/mg, t1/2z 20.9 h, CL/F 552 mL/min, V/F 1.33e+03 L, kabs 4.53 /h, tlag 0.25 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dose-normalized C max (ng/mL/mg) | `Q174` · Cmax/dose | 4.00 | ng/mL/mg |  |  | ng/(mg·ml) | llm_confirmed (0.6) | tab_0:row2:col1 |
| Dose-normalized AUC t (ng•h/mL/mg) | `Q19` · AUCt | 30.44 | ng•h/mL/mg |  |  | (h·ng)/(mg·ml) | llm_corrected (0.6) | tab_0:row3:col1 |
| Dose-normalized AUC ∞ (ng•h/mL/mg) | `Q17` · AUC∞ | 40.26 | ng•h/mL/mg |  |  | (h·ng)/(mg·ml) | llm_corrected (0.6) | tab_0:row4:col1 |
| t 1/2 (h) | `Q57` · t1/2z | 20.86 | h | 7.51e+04 | s | h | space_fold (0.95) | tab_0:row5:col1 |
| CL t /F (mL/min) | `Q27` · CL/F | 551.80 | mL/min | 9.197e-06 | m3/s | ml/min | llm_corrected (0.6) | tab_0:row6:col1 |
| V z /F (L) | `Q76` · V/F | 1332.06 | L | 1.332 | m3 | l | space_fold (0.95) | tab_0:row7:col1 |
| Ka | `Q49` · kabs | 4.53 | /h | 0.001258 | 1/s | 1/h | review_gapfill (0.7) | Chae_2018:review |
| Tlag | `Q83` · tlag | 0.25 | h | 900 | s | h | review_gapfill (0.7) | Chae_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'pooled estimates (95% cis)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_mismatch: 'Dose-normalized C max (ng/mL/mg)' → Q174 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'ng•h/mL/mg' (AUCt)
- unit_dimension_unknown: 'ng•h/mL/mg' (AUC∞)
- implicit units: 'Dose-normalized AUC t (ng•h/mL/mg)' — the LLM proposed 'ng*h/mL/mg', whose dimension does not fit Q19; left unset
- implicit units: 'Dose-normalized AUC ∞ (ng•h/mL/mg)' — the LLM proposed 'ng*h/mL/mg', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=telmisartan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chae_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Chae_2018's review values (primary lacked it)

**Extraction notes:**
- table tab_0: unknown_column_role
- table tab_0: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q174 | fail | 1 / [length] ** 3 | ng/mL/mg | ['tab_0:row2:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_0:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chae_2018:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_0:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_0:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Chae_2018:review'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng•h/mL/mg | ['tab_0:row4:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng•h/mL/mg | ['tab_0:row3:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 33.1 L/h | ['tab_0:row6:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.33e+03 L | ['tab_0:row7:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelmisartan%5D%20Telmisartan_Jeong2025_reference&body=Drug%3A%20telmisartan%0ARecord%3A%20Telmisartan_Jeong2025_reference%0APaper%3A%20Jeong_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telmisartan/Telmisartan_Jeong2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 10:07 UTC</sub>
