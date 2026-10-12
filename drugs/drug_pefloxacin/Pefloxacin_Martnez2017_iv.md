<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pefloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_pefloxacin/&quot;},{&quot;label&quot;:&quot;Mart\u00ednez_2017 \u00b7 iv&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pefloxacin — `Pefloxacin_Martnez2017_iv`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.65). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record is rejected because the metabolite link parameter was extracted without a value, leaving the structural connection undefined.**

The model defines N-demethyl pefloxacin as a metabolite formed from pefloxacin, but the metabolic link parameter is recorded as 'none' with an unknown kind. This structural incompleteness, compounded by a dimension mismatch on a structural parameter, prevents the model from correctly describing the metabolic formation of the metabolite. Extracted — pefloxacin: λ1 0.7 h−1, kel 0.082 h−1, t1/2α 1 h, t1/2β 8.44 h, V 2.36 L/kg, Vss 1.54 L/kg, Q 0.28 h−1, Q2 0.18 h−1, … (+3); N-demethyl pefloxacin: t1/2α 0.6 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pefloxacin, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Martínez MA et al., Oral Bioavailability and Plasma Disposi…, Frontiers in veterinary sci… (2017)
  ·  DOI: [10.3389/fvets.2017.00077](https://doi.org/10.3389/fvets.2017.00077)

<div class="pk-model-meta" hidden drug="pefloxacin" model-id="Pefloxacin_Martnez2017_iv" status="rejected" stale="false" population="healthy broiler chickens" measured-compound="pefloxacin" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A1 (μg/mL) | `Q900` · equation variable | 14.77 | μg/mL | not captured | [µg] / [ml] | not captured | llm (0.6) | T1:row1:col1 | — | not captured |
| α (h−1) | `Q67` · λ1 | 0.70 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | T1:row4:col1 | — | not captured |
| β (h−1) | `Q47` · kel | 0.082 | h−1 | 2.277777777777778e-05 | [1] / [h] | not captured | exact (1.0) | T1:row5:col1 | — | not captured |
| t½α (h) | `Q59` · t1/2α | 1.00 | h | 3600.0 | [h] | not captured | llm (0.6) | T1:row7:col1 | — | not captured |
| t½β (h) | `Q60` · t1/2β | 8.44 | h | 30384.0 | [h] | not captured | llm (0.6) | T1:row8:col1, Martínez_2017_table_2:row1:col1 | — | not captured |
| Vd(area) (L/kg) | `Q61` · V | 2.36 | L/kg | 0.1652 | [l] / [kg] | not captured | space_fold (0.95) | T1:row10:col1 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 1.54 | L/kg | 0.1078 | [l] / [kg] | not captured | exact (1.0) | T1:row11:col1 | — | not captured |
| K12 (h−1) | `Q30` · Q | 0.28 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | T1:row12:col1, Martínez_2017_table_2:row2:col1 | — | not captured |
| K21 (h−1) | `Q99` · Q2 | 0.18 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | T1:row13:col1, Martínez_2017_table_2:row3:col1 | — | not captured |
| AUC (mg/h/L) | `Q88` · AUC | 53.56 | mg/h/L | not captured | [mg] / [[h] · [l]] | not captured | exact (1.0) | T1:row15:col1, Martínez_2017_table_2:row5:col1 | — | not captured |
| MRT (h) | `Q53` · MRT | 7.94 | h | 28584.0 | [h] | not captured | exact (1.0) | T1:row17:col1, Martínez_2017_table_2:row6:col1 | — | not captured |
| CL (L/h/kg) | `Q22` · CL | 0.19 | L/h/kg | 3.694444444444445e-06 | [l] / [[h] · [kg]] | not captured | exact (1.0) | T1:row18:col1 | — | not captured |
| T½α (h) | `Q59` · t1/2α | 0.60 | h | 2160.0 | [h] | not captured | llm (0.6) | Martínez_2017_table_2:row0:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A2 (μg/mL)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1'])
- unit_dimension_mismatch: 'α (h−1)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'K12 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K21 (h−1)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q47 ('K10 (h−1)', value '0.32') — already have one for this compound
- unit_dimension_mismatch: 'AUC (mg/h/L)' → Q88 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pefloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'iv' subgroup of Martínez_2017 (paper reports 2 populations: iv, oral)
- row roles (LLM): model_class=noncompartmental; 21/21 row label(s) assigned, 20 linked by role; re-tagged pefloxacin→parent ×46, pefloxacin→N-demethyl pefloxacin ×2
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row8:col2 = '13.18 ± 0.82***'
- companion parameter table 2 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.65 (13/20 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['pefloxacin', 'n-demethyl pefloxacin', 'metabolism']] | [['pefloxacin', 'n-demethyl pefloxacin (norfloxacin)', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[a1].parameter_id` | Q900 | Q86 | mismatch |
| `gpt-oss-120b` | `parameters[k12].parameter_id` | Q30 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[k21].parameter_id` | Q99 | Q302 | mismatch |
| `gpt-oss-120b` | `parameters[t1⁄2α]` | 0.60 | not captured | only_one_extracted |
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
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 8.44 | 8.61 | 1.0201 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row18:col1'] |
| C5_dimension_Q30 | fail | 1 / [time] | h−1 | not captured | not captured | ['T1:row12:col1', 'Martínez_2017_table_2:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row5:col1'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['T1:row17:col1', 'Martínez_2017_table_2:row6:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['T1:row7:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Martínez_2017_table_2:row0:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['T1:row8:col1', 'Martínez_2017_table_2:row1:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row10:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row11:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | h−1 | not captured | not captured | ['T1:row4:col1'] |
| C5_dimension_Q88 | fail | [mass] / [time] / [length] ** 3 | mg/h/L | not captured | not captured | ['T1:row15:col1', 'Martínez_2017_table_2:row5:col1'] |
| C5_dimension_Q99 | fail | 1 / [time] | h−1 | not captured | not captured | ['T1:row13:col1', 'Martínez_2017_table_2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.19 | not captured | not captured | ['T1:row18:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.3 L/h | not captured | not captured | ['T1:row18:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 165 L | not captured | not captured | ['T1:row10:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 108 L | not captured | not captured | ['T1:row11:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pefloxacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Martínez_2017` / `Martínez_2017::iv`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:46 UTC</sub>
