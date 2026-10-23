<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;apomorphine&quot;,&quot;href&quot;:&quot;drugs/drug_apomorphine/&quot;},{&quot;label&quot;:&quot;Nasser_2024 \u00b7 subcutaneous&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# apomorphine — `Apomorphine_Nasser2024_subcutaneous`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the molecular weight parameter for apomorphine has a dimension mismatch due to its reported unit of mg.

<div class="pk-model-meta" hidden drug="apomorphine" model-id="Apomorphine_Nasser2024_subcutaneous" status="rejected" stale="false" population="hypothetical subjects" measured-compound="apomorphine" parameterization="apparent" topology="1C"></div>

## Citation
Nasser A, Gomeni R, Ceresoli-Borroni G, Xie L, Busse GD, Melyan Z et al. Model-based comparison of subcutaneous versus sublingual apomorphine administration in the treatment of motor fluctuations in Parkinson's disease. Journal of pharmacokinetics and pharmacodynamics 51(4):385–393 (2024).
  ·  DOI: [10.1007/s10928-024-09914-x](https://doi.org/10.1007/s10928-024-09914-x)

## Population and dosing

**Population:** hypothetical subjects · condition Parkinson's disease · age group adult · n = 500.

**Dosing:** 1, 2, 3, 4 mg, sc, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 4 | MW | 7.34 | mg |
| AUEC0-90 | AUCt | 1 | mg |
| Time to maximal response, min | tmax | 1 | min |
| CL/F (L/h) | CL/F | 191 | L/h |
| V/F (L) | V/F | 153 | L |
| Ka (h−1) | kabs | 14.9 | h−1 |
| F (%) | Fab | 1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the molecular weight parameter for apomorphine has a dimension mismatch due to its reported unit of mg.**

The molecular weight parameter for apomorphine is listed with a value of 7.34 and a unit of mg. This unit could not be converted to standard SI units. Consequently, the structural parameter failed the dimension check, leading to the rejection. Extracted — apomorphine: MW 7.34 mg, AUCt 1 mg, tmax 1 min, CL/F 191 L/h, V/F 153 L, kabs 14.9 h−1, Fab 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has apomorphine, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 4 | `Q374` · MW | 7.34 | mg |  |  | mg | llm (0.6) | Tab4:row5:col1, Tab4:row5:col2, Tab4:row9:col1, Tab4:row9:col2, Tab4:row13:col1, Tab4:row13:col2, Tab4:row17:col2, Tab4:row21:col1, Tab4:row21:col2 |
| AUEC0-90 | `Q19` · AUCt | 1 | mg |  |  | mg | llm (0.6) | Tab4:row10:col1, Tab4:row10:col2 |
| Time to maximal response, min | `Q56` · tmax | 1 | min | 60 | s | min | llm_corrected (0.6) | Tab4:row18:col1, Tab4:row18:col2 |
| CL/F (L/h) | `Q27` · CL/F | 191 | L/h | 5.306e-05 | m3/s | l/h | exact (1) | Nasser_2024_table_1:row0:col1 |
| V/F (L) | `Q76` · V/F | 153 | L | 0.153 | m3 | l | exact (1) | Nasser_2024_table_1:row1:col1 |
| Ka (h−1) | `Q49` · kabs | 14.9 | h−1 | 0.004139 | 1/s | 1/h | exact (1) | Nasser_2024_table_1:row2:col1 |
| F (%) | `Q40` · Fab | 1 |  |  |  |  | exact (1) | Nasser_2024_table_1:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Time to response, min' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col1', 'Tab4:row2:col2'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col1', 'Tab4:row3:col2', 'Tab4:row7:col1', 'Tab4:row7:col2', 'Tab4:row11:col1', 'Tab4:row11:col2', 'Tab4:row15:col2', 'Tab4:row19:col1', 'Tab4:row19:col2'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col1', 'Tab4:row4:col2', 'Tab4:row8:col1', 'Tab4:row8:col2', 'Tab4:row12:col1', 'Tab4:row12:col2', 'Tab4:row16:col2', 'Tab4:row20:col1', 'Tab4:row20:col2'])
- unit_dimension_mismatch: '4' → Q374 (unit '[mass]' vs ontology '[mass] / [substance]') — route to review
- dropped unlinked row (NIL): 'Duration of response, min' — extend the ontology if this is a real PK parameter (source ['Tab4:row6:col1', 'Tab4:row6:col2'])
- unit_dimension_mismatch: 'AUEC0-90' → Q19 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'Maximal response' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row14:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apomorphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'subcutaneous' subgroup of Nasser_2024 (paper reports 2 populations: subcutaneous, sublingual)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row14:col2 = '− 6.05 ± 3.13'
- unparsed cell Tab4:row14:col4 = '− 7.07 ± 3.47'
- unparsed cell Tab4:row15:col1 = '− 9.12 ± 4.64'
- unparsed cell Tab4:row15:col3 = '− 9.28 ± 4.85'
- unparsed cell Tab4:row16:col1 = '− 14.46 ± 4.97'
- unparsed cell Tab4:row16:col3 = '− 12.50 ± 5.31'
- unparsed cell Tab4:row17:col1 = '− 17.48 ± 4.71'
- unparsed cell Tab4:row17:col3 = '− 14.83 ± 5.46'
- companion parameter table 1 transcribed (10 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[4]` | 7.34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[4]` |  | 7.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-90]` |  | 224.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auec0-90]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 191 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 191 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` |  | 5.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 14.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 14.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximal response]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to response]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 153 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 153 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | apomorphine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | apomorphine | unknown | mismatch |

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
| C5_dimension_Q19 | fail | [mass] | mg | ['Tab4:row10:col1', 'Tab4:row10:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Nasser_2024_table_1:row0:col1'] |
| C5_dimension_Q374 | fail | [mass] | mg | ['Tab4:row5:col1', 'Tab4:row5:col2', 'Tab4:row9:col1', 'Tab4:row9:col2', 'Tab4:row13:col1', 'Tab4:row13:col2', 'Tab4:row17:col2', 'Tab4:row21:col1', 'Tab4:row21:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Nasser_2024_table_1:row2:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab4:row18:col1', 'Tab4:row18:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Nasser_2024_table_1:row1:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 191 L/h | ['Nasser_2024_table_1:row0:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 153 L | ['Nasser_2024_table_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapomorphine%5D%20Apomorphine_Nasser2024_subcutaneous&body=Drug%3A%20apomorphine%0ARecord%3A%20Apomorphine_Nasser2024_subcutaneous%0APaper%3A%20Nasser_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apomorphine/Apomorphine_Nasser2024_subcutaneous%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:09 UTC</sub>
