<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;moclobemide&quot;,&quot;href&quot;:&quot;drugs/drug_moclobemide/&quot;},{&quot;label&quot;:&quot;G\u0142\u00f3wka_2019 \u00b7 aurorix&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# moclobemide — `Moclobemide_Gwka2019_aurorix`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit mg/l ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="moclobemide" model-id="Moclobemide_Gwka2019_aurorix" status="rejected" stale="false" population="healthy humans" measured-compound="moclobemide" parameterization="apparent" topology="1C"></div>

## Citation
Główka FK, Hermann TW, Danielak D, Zabel M, Hermann J. Bioavailability of moclobemide from two formulation tablets in healthy humans. Die Pharmazie 74(2):97–100 (2019).
  ·  DOI: [10.1691/ph.2019.8819](https://doi.org/10.1691/ph.2019.8819)

## Population and dosing

**Population:** healthy humans · condition healthy · age group adult · n = 10.

**Dosing:** 150 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 3 | equation variable | 0.37 |  |
| AUC (mg/l) h | AUC | 2.36 | mg/l |
| Cmax [mg/l] | Cmax | 0.94 | mg/l |
| tlag [h] | tlag | 0.83 | h |
| tmax [h] | tmax | 0.202 | h |
| t1/2 [h] | t1/2z | 1.20 | h |
| k [1/h] | kel | 0.610 | 1/h |
| V/f [l] | V/F | 112.8 | l |
| CL/f [l/h] | CL/F | 67.8 | l/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit mg/l ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — moclobemide: AUC 2.36 mg/l, Cmax 0.94 mg/l, tlag 0.83 h, tmax 0.202 h, t1/2z 1.2 h, kel 0.61 1/h, V/F 113 l, CL/F 67.8 l/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 0.5: this record has none, the second reading 0.67; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 3 | `Q900` · equation variable | 0.37 |  | 0.37 |  |  | llm (0.6) | Główka_2019_table_p3_1:row4:col1 |
| AUC (mg/l) h | `Q88` · AUC | 2.36 | mg/l |  |  | mg/l | llm_confirmed (0.6) | Główka_2019_table_p3_1:row8:col1 |
| Cmax [mg/l] | `Q32` · Cmax | 0.94 | mg/l | 0.00094 | kg/m3 | mg/l | llm_confirmed (0.6) | Główka_2019_table_p3_1:row9:col1 |
| tlag [h] | `Q83` · tlag | 0.83 | h | 2988 | s | h | llm_confirmed (0.6) | Główka_2019_table_p3_1:row10:col1 |
| tmax [h] | `Q56` · tmax | 0.202 | h | 727.2 | s | h | llm_confirmed (0.6) | Główka_2019_table_p3_1:row11:col1 |
| t1/2 [h] | `Q57` · t1/2z | 1.20 | h | 4320 | s | h | llm_confirmed (0.6) | Główka_2019_table_p3_1:row12:col1 |
| k [1/h] | `Q47` · kel | 0.610 | 1/h | 0.0001694 | 1/s | 1/h | llm (0.6) | Główka_2019_table_p3_1:row13:col1 |
| V/f [l] | `Q76` · V/F | 112.8 | l | 0.1128 | m3 | l | llm_confirmed (0.6) | Główka_2019_table_p3_1:row14:col1 |
| CL/f [l/h] | `Q27` · CL/F | 67.8 | l/h | 1.883e-05 | m3/s | l/h | llm_confirmed (0.6) | Główka_2019_table_p3_1:row15:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '0.5' — extend the ontology if this is a real PK parameter (source ['Główka_2019_table_p3_1:row0:col1'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['Główka_2019_table_p3_1:row1:col1'])
- dropped unlinked row (NIL): '1.5' — extend the ontology if this is a real PK parameter (source ['Główka_2019_table_p3_1:row2:col1'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['Główka_2019_table_p3_1:row3:col1'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Główka_2019_table_p3_1:row5:col1'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Główka_2019_table_p3_1:row6:col1'])
- unit_dimension_mismatch: 'AUC (mg/l) h' → Q88 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=moclobemide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'aurorix' subgroup of Główka_2019 (paper reports 2 populations: aurorix, moclobemide)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[0.5]` |  | 0.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | 0.37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc (mg/l) h].value` | 2.36 | 2.66 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f [l/h]].value` | 67.8 | 59.1 | mismatch |
| `gpt-oss-120b` | `parameters[cmax [mg/l]].value` | 0.94 | 1.05 | mismatch |
| `gpt-oss-120b` | `parameters[k [1/h]]` | 0.610 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 [h]].value` | 1.20 | 1.16 | mismatch |
| `gpt-oss-120b` | `parameters[tlag [h]].value` | 0.83 | 1.01 | mismatch |
| `gpt-oss-120b` | `parameters[tmax [h]].value` | 0.202 | 0.295 | mismatch |
| `gpt-oss-120b` | `parameters[v/f [l]].value` | 112.8 | 96.1 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.2 | 1.153 | 0.9608 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Główka_2019_table_p3_1:row15:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Główka_2019_table_p3_1:row9:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Główka_2019_table_p3_1:row13:col1'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Główka_2019_table_p3_1:row11:col1'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Główka_2019_table_p3_1:row12:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Główka_2019_table_p3_1:row14:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Główka_2019_table_p3_1:row10:col1'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | mg/l ([mass] / [length] ** 3) |  |  | ['Główka_2019_table_p3_1:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 67.8 L/h |  |  | ['Główka_2019_table_p3_1:row15:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 113 L |  |  | ['Główka_2019_table_p3_1:row14:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmoclobemide%5D%20Moclobemide_Gwka2019_aurorix&body=Drug%3A%20moclobemide%0ARecord%3A%20Moclobemide_Gwka2019_aurorix%0APaper%3A%20G%C5%82%C3%B3wka_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_moclobemide/Moclobemide_Gwka2019_aurorix%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 14:09 UTC</sub>
