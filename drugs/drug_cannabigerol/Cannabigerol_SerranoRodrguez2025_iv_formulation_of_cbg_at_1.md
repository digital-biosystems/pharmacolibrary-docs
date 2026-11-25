<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Cannabigerol&quot;,&quot;href&quot;:&quot;drugs/drug_cannabigerol/&quot;},{&quot;label&quot;:&quot;Serrano-Rodr\u00edguez_2025 \u00b7 iv_formulation_of_cbg_at_1_0_mg_kg_cbg_g&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cannabigerol — `Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit μmol/L·h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q88 unit μmol/L·h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q32 unit μmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Cannabigerol" model-id="Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1" status="rejected" stale="false" population="healthy adult horses" measured-compound="cannabigerol" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Serrano-Rodríguez JM, Miraz R, Saitua A, Díez de Castro E, Ledesma-Escobar C, Ferreiro-Vera C et al. Metabolism, pharmacokinetics, and bioavailability of cannabigerol in horses following intravenous and oral administration with micellar and oil formulations. Frontiers in veterinary science 12:1688214 (2025).
  ·  DOI: [10.3389/fvets.2025.1688214](https://doi.org/10.3389/fvets.2025.1688214)

## Population and dosing

**Population:** healthy adult horses · condition healthy · age group adult · n = 8.

**Dosing:** 70, 700 mg, iv, oral, single.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC24 (μmol/L·h) | AUCt | 62419.46 | μmol/L·h |
| AUC (μmol/L·h) | AUC | 105071.97 | μmol/L·h |
| Cmax (μmol/L) | Cmax | 5508.28 | μmol/L |
| Tmax (h) | tmax | 2.28 | h |
| t1/2 (h) | t1/2z | 21.01 | h |
| AUCm/AUCp | AUC ratio | 54.25 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.692). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit μmol/L·h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q88 unit μmol/L·h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q32 unit μmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3.**

A reported unit could not be converted (AUCt, AUC and Cmax), so that value has no SI equivalent. Extracted — cannabigerol: AUCt 6.24e+04 μmol/L·h, AUC 1.05e+05 μmol/L·h, Cmax 5.51e+03 μmol/L, tmax 2.28 h, t1/2z 21 h, AUC ratio 54.2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cannabigerol → cannabigerol-glucuronide (metabolism), the second reading cannabigerol → cannabigerol glucuronide (metabolism); it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC24 (μmol/L·h) | `Q19` · AUCt | 62419.46 | μmol/L·h |  |  | (µM·ol)/(h·l) | llm (0.6) | Serrano-Rodríguez_2025_table_2:row2:col3, Serrano-Rodríguez_2025_table_2:row2:col4 |
| AUC (μmol/L·h) | `Q88` · AUC | 105071.97 | μmol/L·h |  |  | (µM·ol)/(h·l) | exact (1) | Serrano-Rodríguez_2025_table_2:row3:col3, Serrano-Rodríguez_2025_table_2:row3:col4 |
| Cmax (μmol/L) | `Q32` · Cmax | 5508.28 | μmol/L |  |  | (µM·ol)/l | exact (1) | Serrano-Rodríguez_2025_table_2:row4:col3, Serrano-Rodríguez_2025_table_2:row4:col4 |
| Tmax (h) | `Q56` · tmax | 2.28 | h | 8208 | s | h | exact (1) | Serrano-Rodríguez_2025_table_2:row5:col3, Serrano-Rodríguez_2025_table_2:row5:col4 |
| t1/2 (h) | `Q57` · t1/2z | 21.01 | h | 7.564e+04 | s | h | half_life_rule (0.95) | Serrano-Rodríguez_2025_table_2:row6:col3, Serrano-Rodríguez_2025_table_2:row6:col4 |
| AUCm/AUCp | `Q21` · AUC ratio | 54.25 |  | 54.25 |  |  | llm (0.6) | Serrano-Rodríguez_2025_table_2:row8:col3, Serrano-Rodríguez_2025_table_2:row8:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC24 (μmol/L·h)' → Q19 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC (μmol/L·h)' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Cmax (μmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped value-less row: 'ka'
- dropped value-less row: 'β'
- dropped value-less row: 'Vc'
- dropped value-less row: 'Cl'
- dropped value-less row: 'Q'
- dropped value-less row: 'Vp'
- dropped value-less row: 'Fm'
- dropped value-less row: 'Clm'
- dropped value-less row: 'Vm'
- dropped value-less row: 'Covka_formulation'
- dropped value-less row: 'Covβ_formulation'
- dropped value-less row: 'b1'
- dropped value-less row: 'b2'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cannabigerol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'The oral bioavailability was estimated at 28% between formulations, and an extensive presystemic metabolism was obtained')
- status held at "Needs review" — not promoted
- population split: 'iv formulation of cbg at 1.0 mg/kg / cbg-g' subgroup of Serrano-Rodríguez_2025 (paper reports 5 populations: cbg / estimate, cbg-g / estimate, estimate, iv formulation of cbg at 1.0 mg/kg / cbg, iv formulation of cbg at 1.0 mg/kg / cbg-g)
- row roles (LLM): model_class=compartmental; 31/31 row label(s) assigned, 30 linked by role; re-tagged parent→cannabigerol-glucuronide ×7, cannabigerol→parent ×9, cannabigerol→cannabigerol-glucuronide ×3
- molar mass: no plausible PubChem entry for 'cannabigerol-glucuronide' ('cannabigerol-glucuronide') — left in mass units
- molar mass: none found for 'cannabigerol-glucuronide' — its concentrations stay mass-only

**Extraction notes:**
- table tab1: representations disagree; selected evidence retained, not merged
- table Serrano-Rodríguez_2025_table_2: ragged_grid
- companion parameter table 2 transcribed (20 record(s))
- companion parameter table 3 transcribed (24 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cannabigerol', 'cannabigerol-glucuronide', 'metabolism']] | [['cannabigerol', 'cannabigerol glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` |  | 1.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f, oral bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | μmol/L·h ([substance] * [time] / [length] ** 3) | ['Serrano-Rodríguez_2025_table_2:row2:col3', 'Serrano-Rodríguez_2025_table_2:row2:col4'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | μmol/L ([substance] / [length] ** 3) | ['Serrano-Rodríguez_2025_table_2:row4:col3', 'Serrano-Rodríguez_2025_table_2:row4:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Serrano-Rodríguez_2025_table_2:row5:col3', 'Serrano-Rodríguez_2025_table_2:row5:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Serrano-Rodríguez_2025_table_2:row6:col3', 'Serrano-Rodríguez_2025_table_2:row6:col4'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | μmol/L·h ([substance] * [time] / [length] ** 3) | ['Serrano-Rodríguez_2025_table_2:row3:col3', 'Serrano-Rodríguez_2025_table_2:row3:col4'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcannabigerol%5D%20Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1&body=Drug%3A%20cannabigerol%0ARecord%3A%20Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1%0APaper%3A%20Serrano-Rodr%C3%ADguez_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cannabigerol/Cannabigerol_SerranoRodrguez2025_iv_formulation_of_cbg_at_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-25 05:34 UTC</sub>
