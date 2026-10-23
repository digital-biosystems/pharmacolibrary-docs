<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pefloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_pefloxacin/&quot;},{&quot;label&quot;:&quot;Mart\u00ednez_2017 \u00b7 oral&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pefloxacin — `Pefloxacin_Martnez2017_oral`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> The intercompartmental clearance value of 0.16 h−1 was rejected because its unit could not be converted to standard SI units.

<div class="pk-model-meta" hidden drug="pefloxacin" model-id="Pefloxacin_Martnez2017_oral" status="rejected" stale="false" population="healthy broiler chickens" measured-compound="pefloxacin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Martínez MA, Ares I, Rodríguez JL, Martínez M, Martínez-Larrañaga MR, Isea G et al. Oral Bioavailability and Plasma Disposition of Pefloxacin in Healthy Broiler Chickens. Frontiers in veterinary science 4:77 (2017).
  ·  DOI: [10.3389/fvets.2017.00077](https://doi.org/10.3389/fvets.2017.00077)

## Population and dosing

**Population:** healthy broiler chickens · condition healthy · n = 8.

**Dosing:** 700 mg, iv, single.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 16 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A1 (μg/mL) | equation variable | 16.33 | μg/mL |
| α (h−1) | λ1 | 0.43 | h−1 |
| β (h−1) | kel | 0.054 | h−1 |
| Ka (h−1) | kabs | 0.80 | h−1 |
| t½α (h) | t1/2α | 1.68 | h |
| t½a (h) | t1/2ka | 0.87 | h |
| Vd(area) (L/kg) | V | 3.55 | L/kg |
| K12 (h−1) | Q | 0.16 | h−1 |
| K21 (h−1) | Q2 | 0.10 | h−1 |
| AUC (mg/h/L) | AUC | 37.71 | mg/h/L |
| F (%) | Fab | 70 |  |
| MRT (h) | MRT | 13.57 | h |
| CL (L/h/kg) | CL | 0.19 | L/h/kg |
| CMAX (μg/mL) | Cmax | 4.02 | μg/mL |
| TMAX (h) | tmax | 2.01 | h |
| T½α (h) | t1/2α | 1.25 | h |
| t½β (h) | t1/2β | 10.93 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intercompartmental clearance value of 0.16 h−1 was rejected because its unit could not be converted to standard SI units.**

The record defines the apparent intercompartmental clearance between central and peripheral compartments with a value of 0.16 h−1. This specific unit was not recognized for conversion to standard SI units, leaving the parameter without a valid metric value. Consequently, a structural check for dimensional consistency failed for this parameter. Extracted — pefloxacin: λ1 0.43 h−1, kel 0.054 h−1, kabs 0.8 h−1, t1/2α 1.68 h, t1/2ka 0.87 h, V 3.55 L/kg, Q 0.16 h−1, Q2 0.1 h−1, … (+7); N-demethyl pefloxacin: t1/2α 1.25 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pefloxacin, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A1 (μg/mL) | `Q900` · equation variable | 16.33 | μg/mL |  |  | µg/ml | llm (0.6) | T1:row1:col2 |
| α (h−1) | `Q67` · λ1 | 0.43 | h−1 |  |  | 1/h | exact (1) | T1:row4:col2 |
| β (h−1) | `Q47` · kel | 0.054 | h−1 | 1.5e-05 | 1/s | 1/h | exact (1) | T1:row5:col2 |
| Ka (h−1) | `Q49` · kabs | 0.80 | h−1 | 0.0002222 | 1/s | 1/h | exact (1) | T1:row6:col2 |
| t½α (h) | `Q59` · t1/2α | 1.68 | h | 6048 | s | h | llm (0.6) | T1:row7:col2 |
| t½a (h) | `Q95` · t1/2ka | 0.87 | h | 3132 | s | h | llm (0.6) | T1:row9:col2 |
| Vd(area) (L/kg) | `Q61` · V | 3.55 | L/kg | 0.2485 | m3 | l/kg | space_fold (0.95) | T1:row10:col2 |
| K12 (h−1) | `Q30` · Q | 0.16 | h−1 |  |  | 1/h | exact (1) | T1:row12:col2, Martínez_2017_table_2:row2:col2 |
| K21 (h−1) | `Q99` · Q2 | 0.10 | h−1 |  |  | 1/h | exact (1) | T1:row13:col2, Martínez_2017_table_2:row3:col2 |
| AUC (mg/h/L) | `Q88` · AUC | 37.71 | mg/h/L |  |  | mg/(h·l) | exact (1) | T1:row15:col2, Martínez_2017_table_2:row5:col2 |
| F (%) | `Q40` · Fab | 70 |  |  |  |  | exact (1) | T1:row16:col2 |
| MRT (h) | `Q53` · MRT | 13.57 | h | 4.885e+04 | s | h | exact (1) | T1:row17:col2, Martínez_2017_table_2:row6:col2 |
| CL (L/h/kg) | `Q22` · CL | 0.19 | L/h/kg | 3.694e-06 | m3/s | l/(h·kg) | exact (1) | T1:row18:col2 |
| CMAX (μg/mL) | `Q32` · Cmax | 4.02 | μg/mL |  |  | µg/ml | exact (1) | T1:row19:col2, Martínez_2017_table_2:row7:col2 |
| TMAX (h) | `Q56` · tmax | 2.01 | h | 7236 | s | h | exact (1) | T1:row20:col2, Martínez_2017_table_2:row8:col2 |
| T½α (h) | `Q59` · t1/2α | 1.25 | h | 4500 | s | h | llm (0.6) | Martínez_2017_table_2:row0:col2 |
| t½β (h) | `Q60` · t1/2β | 10.93 | h | 3.935e+04 | s | h | llm (0.6) | Martínez_2017_table_2:row1:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A2 (μg/mL)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col2'])
- dropped duplicate Q900 ('A3 (μg/mL)', value '18.40') — already have one for this compound
- unit_dimension_mismatch: 'α (h−1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'K12 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K21 (h−1)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q47 ('K10 (h−1)', value '0.21') — already have one for this compound
- unit_dimension_mismatch: 'AUC (mg/h/L)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pefloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'oral' subgroup of Martínez_2017 (paper reports 2 populations: iv, oral)
- row roles (LLM): model_class=noncompartmental; 21/21 row label(s) assigned, 20 linked by role; re-tagged pefloxacin→parent ×46, pefloxacin→N-demethyl pefloxacin ×2
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T1:row8:col2 = '13.18 ± 0.82***'
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.692 (18/26 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['pefloxacin', 'n-demethyl pefloxacin', 'metabolism']] | [['pefloxacin', 'n-demethyl pefloxacin (norfloxacin)', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[a1].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[a3]` |  | 18.40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12].parameter_id` | Q30 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[k21].parameter_id` | Q99 | Q302 | mismatch |
| `gpt-oss-120b` | `parameters[t1⁄2α]` | 1.25 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pefloxacin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pefloxacin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 16 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 8.44 | 12.95 | 1.534 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['T1:row18:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | h−1 |  |  | ['T1:row12:col2', 'Martínez_2017_table_2:row2:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['T1:row19:col2', 'Martínez_2017_table_2:row7:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['T1:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['T1:row6:col2'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['T1:row17:col2', 'Martínez_2017_table_2:row6:col2'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['T1:row20:col2', 'Martínez_2017_table_2:row8:col2'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['T1:row7:col2'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Martínez_2017_table_2:row0:col2'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Martínez_2017_table_2:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['T1:row10:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | h−1 |  |  | ['T1:row4:col2'] |
| C5_dimension_Q88 | fail | [mass] / [time] / [length] ** 3 | mg/h/L |  |  | ['T1:row15:col2', 'Martínez_2017_table_2:row5:col2'] |
| C5_dimension_Q95 | pass | [time] |  |  |  | ['T1:row9:col2'] |
| C5_dimension_Q99 | fail | 1 / [time] | h−1 |  |  | ['T1:row13:col2', 'Martínez_2017_table_2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.19 |  |  | ['T1:row18:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.3 L/h |  |  | ['T1:row18:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 248 L |  |  | ['T1:row10:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpefloxacin%5D%20Pefloxacin_Martnez2017_oral&body=Drug%3A%20pefloxacin%0ARecord%3A%20Pefloxacin_Martnez2017_oral%0APaper%3A%20Mart%C3%ADnez_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pefloxacin/Pefloxacin_Martnez2017_oral%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:46 UTC</sub>
