<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levomethadone&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/&quot;},{&quot;label&quot;:&quot;Sandbaumh\u00fcter_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levomethadone_Gittel2021v2_reference&quot;,&quot;label&quot;:&quot;Gittel_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levomethadone — `Levomethadone_Sandbaumhter20212_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q47 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q301 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="levomethadone" model-id="Levomethadone_Sandbaumhter20212_reference" status="rejected" stale="false" population="anesthetized Shetland ponies" measured-compound="l-methadone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Sandbaumhüter FA, Gittel C, Larenza-Menzies MP, Theurillat R, Thormann W, Braun C. Stereoselective methadone disposition after administration of racemic methadone to anesthetized Shetland ponies assessed by capillary electrophoresis. Electrophoresis 42(17-18):1826–1831 (2021).
  ·  DOI: [10.1002/elps.202100115](https://doi.org/10.1002/elps.202100115)

## Population and dosing

**Population:** anesthetized Shetland ponies · condition healthy · n = 9.

**Dosing:** 17.5, 35 mg, iv, multiple, every 1 h.

**Dosed compound ≠ measured compound:** dosed racemic methadone, measured l-methadone.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A (ng/mL) | A1 | 2936.1 | ng/mL |
| B (ng/mL)* | A2 | 384.2 | ng/mL |
| α (L/min) | λ1 | 0.860 | L/min |
| β (L/min) | kel | 0.014 | L/min |
| t 1/2α (min) | t1/2α | 0.973 | min |
| t 1/2β (min) | t1/2β | 53.88 | min |
| k12 (L/min) | k12 | 0.641 | L/min |
| k21 (L/min)* | k21 | 0.114 | L/min |
| V2 (L/kg)* | V2 | 0.393 | L/kg |
| V1 (L/kg) | V1 | 0.078 | L/kg |
| Vss (L/kg)* | Vss | 0.471 | L/kg |
| AUC (0→∞) (min ng/L)* | AUC∞ | 33.42 | min ng/L |
| MRT (min) | MRT | 69.43 | min |
| ClB (mL/min/kg) * | CLb | 7.44 | mL/min/kg |
| C0 (ng/mL) | C0 | 3320.3 | ng/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q67 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q47 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; Q301 unit L/min ([length] ** 3 / [time]) vs 1 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (A1, A2, λ1 and kel), so that value has no SI equivalent. Extracted — levomethadone: A1 2.94e+03 ng/mL, A2 384 ng/mL, λ1 0.86 L/min, kel 0.014 L/min, t1/2α 0.973 min, t1/2β 53.9 min, k12 0.641 L/min, k21 0.114 L/min, … (+7).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has racemic methadone, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A (ng/mL) | `Q415` · A1 | 2936.1 | ng/mL |  |  | ng/ml | llm (0.6) | elps7427-tbl-0001:row2:col1, elps7427-tbl-0001:row2:col2 |
| B (ng/mL)* | `Q416` · A2 | 384.2 | ng/mL |  |  | ng/ml | llm (0.6) | elps7427-tbl-0001:row3:col1, elps7427-tbl-0001:row3:col2 |
| α (L/min) | `Q67` · λ1 | 0.860 | L/min |  |  | l/min | exact (1) | elps7427-tbl-0001:row4:col1, elps7427-tbl-0001:row4:col2 |
| β (L/min) | `Q47` · kel | 0.014 | L/min |  |  | l/min | exact (1) | elps7427-tbl-0001:row5:col1, elps7427-tbl-0001:row5:col2 |
| t 1/2α (min) | `Q59` · t1/2α | 0.973 | min | 58.38 | s | min | half_life_rule (0.95) | elps7427-tbl-0001:row6:col1, elps7427-tbl-0001:row6:col2 |
| t 1/2β (min) | `Q60` · t1/2β | 53.88 | min | 3233 | s | min | half_life_rule (0.95) | elps7427-tbl-0001:row7:col1, elps7427-tbl-0001:row7:col2 |
| k12 (L/min) | `Q301` · k12 | 0.641 | L/min |  |  | l/min | exact (1) | elps7427-tbl-0001:row9:col1, elps7427-tbl-0001:row9:col2 |
| k21 (L/min)* | `Q302` · k21 | 0.114 | L/min |  |  | l/min | llm_confirmed (0.6) | elps7427-tbl-0001:row10:col1, elps7427-tbl-0001:row10:col2 |
| V2 (L/kg)* | `Q64` · V2 | 0.393 | L/kg | 0.02751 | m3 | l/kg | llm_confirmed (0.6) | elps7427-tbl-0001:row11:col1, elps7427-tbl-0001:row11:col2 |
| V1 (L/kg) | `Q63` · V1 | 0.078 | L/kg | 0.00546 | m3 | l/kg | exact (1) | elps7427-tbl-0001:row12:col1, elps7427-tbl-0001:row12:col2 |
| Vss (L/kg)* | `Q65` · Vss | 0.471 | L/kg | 0.03297 | m3 | l/kg | llm_confirmed (0.6) | elps7427-tbl-0001:row13:col1, elps7427-tbl-0001:row13:col2 |
| AUC (0→∞) (min ng/L)* | `Q17` · AUC∞ | 33.42 | min ng/L | 2.005e-06 | kg*s/m3 | (min·ng)/l | llm_corrected (0.6) | elps7427-tbl-0001:row14:col1, elps7427-tbl-0001:row14:col2 |
| MRT (min) | `Q53` · MRT | 69.43 | min | 4166 | s | min | exact (1) | elps7427-tbl-0001:row15:col1, elps7427-tbl-0001:row15:col2 |
| ClB (mL/min/kg) * | `Q23` · CLb | 7.44 | mL/min/kg | 8.68e-06 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | elps7427-tbl-0001:row16:col1, elps7427-tbl-0001:row16:col2 |
| C0 (ng/mL) | `Q86` · C0 | 3320.3 | ng/mL |  |  | ng/ml | exact (1) | elps7427-tbl-0001:row17:col1, elps7427-tbl-0001:row17:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'A (ng/mL)'; source reconciliation required
- table representations disagree for 'B (ng/mL)*'; source reconciliation required
- table representations disagree for 'α (L/min)'; source reconciliation required
- table representations disagree for 'β (L/min)'; source reconciliation required
- table representations disagree for 't 1/2α (min)'; source reconciliation required
- table representations disagree for 't 1/2β (min)'; source reconciliation required
- table representations disagree for 'k10 (L/min)'; source reconciliation required
- table representations disagree for 'k12 (L/min)'; source reconciliation required
- table representations disagree for 'k21 (L/min)*'; source reconciliation required
- table representations disagree for 'V2 (L/kg)*'; source reconciliation required
- table representations disagree for 'V1 (L/kg)'; source reconciliation required
- table representations disagree for 'Vss (L/kg)*'; source reconciliation required
- table representations disagree for 'AUC (0→∞) (min ng/L)*'; source reconciliation required
- table representations disagree for 'MRT (min)'; source reconciliation required
- table representations disagree for 'ClB (mL/min/kg) *'; source reconciliation required
- table representations disagree for 'C0 (ng/mL)'; source reconciliation required
- unit_dimension_mismatch: 'α (L/min)' → Q67 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'β (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k10 (L/min)' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('k10 (L/min)', value '0.119') — already have one for this compound
- unit_dimension_mismatch: 'k12 (L/min)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'k21 (L/min)*' → Q302 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=l-methadone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted

**Extraction notes:**
- table elps7427-tbl-0001: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (16/20 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` | 2936.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[b (ng/ml)*].parameter_id` | Q416 | Q900 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | racemic methadone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | l-methadone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['elps7427-tbl-0001:row14:col1', 'elps7427-tbl-0001:row14:col2'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['elps7427-tbl-0001:row16:col1', 'elps7427-tbl-0001:row16:col2'] |
| C5_dimension_Q301 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['elps7427-tbl-0001:row9:col1', 'elps7427-tbl-0001:row9:col2'] |
| C5_dimension_Q302 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['elps7427-tbl-0001:row10:col1', 'elps7427-tbl-0001:row10:col2'] |
| C5_dimension_Q47 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['elps7427-tbl-0001:row5:col1', 'elps7427-tbl-0001:row5:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['elps7427-tbl-0001:row15:col1', 'elps7427-tbl-0001:row15:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['elps7427-tbl-0001:row6:col1', 'elps7427-tbl-0001:row6:col2'] |
| C5_dimension_Q60 | pass | [time] |  | ['elps7427-tbl-0001:row7:col1', 'elps7427-tbl-0001:row7:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['elps7427-tbl-0001:row12:col1', 'elps7427-tbl-0001:row12:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['elps7427-tbl-0001:row11:col1', 'elps7427-tbl-0001:row11:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['elps7427-tbl-0001:row13:col1', 'elps7427-tbl-0001:row13:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | L/min ([length] ** 3 / [time]) | ['elps7427-tbl-0001:row4:col1', 'elps7427-tbl-0001:row4:col2'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['elps7427-tbl-0001:row17:col1', 'elps7427-tbl-0001:row17:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 7.44 | ['elps7427-tbl-0001:row16:col1', 'elps7427-tbl-0001:row16:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 31.2 L/h | ['elps7427-tbl-0001:row16:col1', 'elps7427-tbl-0001:row16:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.46 L | ['elps7427-tbl-0001:row12:col1', 'elps7427-tbl-0001:row12:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 27.5 L | ['elps7427-tbl-0001:row11:col1', 'elps7427-tbl-0001:row11:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 33 L | ['elps7427-tbl-0001:row13:col1', 'elps7427-tbl-0001:row13:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevomethadone%5D%20Levomethadone_Sandbaumhter20212_reference&body=Drug%3A%20levomethadone%0ARecord%3A%20Levomethadone_Sandbaumhter20212_reference%0APaper%3A%20Sandbaumh%C3%BCter_2021_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levomethadone/Levomethadone_Sandbaumhter20212_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:42 UTC</sub>
