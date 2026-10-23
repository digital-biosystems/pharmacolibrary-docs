<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;procainamide&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/&quot;},{&quot;label&quot;:&quot;Kharidia_1996 \u00b7 procainamide_a_100_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procainamide_Grasela1984_reference&quot;,&quot;label&quot;:&quot;Grasela_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Grasela1984_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Papich1986_reference&quot;,&quot;label&quot;:&quot;Papich_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Papich1986_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Ellis1994_reference&quot;,&quot;label&quot;:&quot;Ellis_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Ellis1994_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Kamath1981_i_one_compartment_open_model&quot;,&quot;label&quot;:&quot;Kamath_1981_i_one_compartment_open_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# procainamide — `Procainamide_Kharidia1996_procainamide_a_100_mg_kg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> The elimination rate constant for procainamide was recorded with time units instead of rate units, causing a dimension mismatch.

<div class="pk-model-meta" hidden drug="procainamide" model-id="Procainamide_Kharidia1996_procainamide_a_100_mg_kg" status="rejected" stale="false" population="male Sprague Dawley rats" measured-compound="procainamide" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Kharidia J, Eddington ND. Application of computer-assisted radiotelemetry in the pharmacokinetic and pharmacodynamic modeling of procainamide and N-acetylprocainamide. Journal of pharmaceutical sciences 85(6):595–599 (1996).
  ·  DOI: [10.1021/js950473h](https://doi.org/10.1021/js950473h)

## Population and dosing

**Population:** male Sprague Dawley rats · condition healthy · age group adult · n = 20.

**Dosing:** 3500, 7000 mg, ip, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC parent (µg mL-1 min) | AUC | 1430.9 | µg·mL⁻¹·min |
| AUC metabolite (µg mL-1 min) | AUC | 1195.0 | µg·mL⁻¹·min |
| CLS/F (mL min-1 kg-1) | CL/F | 73.72 | mL·min⁻¹·kg⁻¹ |
| Vdss (L/kg) | Vss | 6.7 | L/kg |
| t1/2, 2 (min) | kel | 83.9 | min |
| K f (min-1) | kfm | 0.0034 | min-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The elimination rate constant for procainamide was recorded with time units instead of rate units, causing a dimension mismatch.**

The parameter labeled as the elimination rate constant has a value of 83.9 with units of minutes, which is dimensionally inconsistent with a rate constant. This unit error prevented the parameter from being converted to standard SI units, leading to the record's rejection. Additionally, the second reader could not confirm the values for the parent AUC, clearance, and volume of distribution. Extracted — procainamide: AUC 1.43e+03 µg·mL⁻¹·min, CL/F 73.7 mL·min⁻¹·kg⁻¹, Vss 6.7 L/kg, kel 83.9 min; N-acetylprocainamide: AUC 1.2e+03 µg·mL⁻¹·min, kfm 0.0034 min-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has procainamide, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC parent (µg mL-1 min) | `Q88` · AUC | 1430.9 | µg·mL⁻¹·min |  |  | µg·mL⁻¹·min | llm_confirmed (0.6) | Kharidia_1996_table_p3_1:row0:col2 |
| AUC metabolite (µg mL-1 min) | `Q88` · AUC | 1195.0 | µg·mL⁻¹·min |  |  | µg·mL⁻¹·min | llm_confirmed (0.6) | Kharidia_1996_table_p3_1:row1:col2 |
| CLS/F (mL min-1 kg-1) | `Q27` · CL/F | 73.72 | mL·min⁻¹·kg⁻¹ | 8.601e-05 | m3/s | L/h | exact (1) | Kharidia_1996_table_p3_1:row2:col2 |
| Vdss (L/kg) | `Q65` · Vss | 6.7 | L/kg | 0.469 | m3 | l/kg | llm (0.6) | Kharidia_1996_table_p3_1:row3:col2 |
| t1/2, 2 (min) | `Q47` · kel | 83.9 | min |  |  | min | exact (1) | Kharidia_1996_table_p3_1:row4:col2 |
| K f (min-1) | `Q305` · kfm | 0.0034 | min-1 | 5.667e-05 | 1/s | 1/min | exact (1) | Kharidia_1996_table_p3_1:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'µg mL-1 min' (AUC)
- unit_dimension_unknown: 'mL min-1 kg-1' (CL/F)
- unit_dimension_mismatch: 't1/2, 2 (min)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('λ 2 (min-1)', value '0.0107') — already have one for this compound
- implicit units: 'AUC parent (µg mL-1 min)' → µg·mL⁻¹·min (from the paper text: "The parameter label in the input list explicitly includes the unit '(µg mL-1 min)'.")
- implicit units: 'AUC metabolite (µg mL-1 min)' → µg·mL⁻¹·min (from the paper text: "The parameter label in the input list explicitly includes the unit '(µg mL-1 min)'.")
- implicit units: 'CLS/F (mL min-1 kg-1)' → mL·min⁻¹·kg⁻¹ (from the paper text: "The parameter label in the input list explicitly includes the unit '(mL min-1 kg-1)'. Additionally, the Abstract states ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=procainamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'procainamide a: 100 mg/kg' subgroup of Kharidia_1996 (paper reports 4 populations: n-acetylprocainamide a: 100 mg/kg, n-acetylprocainamide a: 50 mg/kg, procainamide a: 100 mg/kg, procainamide a: 50 mg/kg)
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 18 linked by role; re-tagged procainamide→parent ×20, procainamide→N-acetylprocainamide ×6

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc parent]` | 1430.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc parent]` |  | 1430.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cls/f]` | 73.72 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cls/f]` |  | 73.72 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2, 2]` | 83.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2, 2]` |  | 83.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vdss]` | 6.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vdss]` |  | 6.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[λ 2]` |  | 0.0107 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | procainamide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | procainamide | unknown | mismatch |

</details>

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kharidia_1996_table_p3_1:row2:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Kharidia_1996_table_p3_1:row6:col2'] |
| C5_dimension_Q47 | fail | [time] | min | ['Kharidia_1996_table_p3_1:row4:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kharidia_1996_table_p3_1:row3:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kharidia_1996_table_p3_1:row0:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Kharidia_1996_table_p3_1:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 310 L/h | ['Kharidia_1996_table_p3_1:row2:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 469 L | ['Kharidia_1996_table_p3_1:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocainamide%5D%20Procainamide_Kharidia1996_procainamide_a_100_mg_kg&body=Drug%3A%20procainamide%0ARecord%3A%20Procainamide_Kharidia1996_procainamide_a_100_mg_kg%0APaper%3A%20Kharidia_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_procainamide/Procainamide_Kharidia1996_procainamide_a_100_mg_kg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-08 20:23 UTC</sub>
