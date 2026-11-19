<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Acetyldeoxynivalenol&quot;,&quot;href&quot;:&quot;drugs/toxin_acetyldeoxynivalenol/&quot;},{&quot;label&quot;:&quot;Valgaeren_2019 \u00b7 3_adon_rum&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Acetyldeoxynivalenol — `Acetyldeoxynivalenol_Valgaeren2019_3_adon_rum`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q17 unit h ng ([time] * [mass]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Acetyldeoxynivalenol" model-id="Acetyldeoxynivalenol_Valgaeren2019_3_adon_rum" status="rejected" stale="false" population="ruminating and non-ruminating male beef calves" measured-compound="deoxynivalenol (DON) and DON-3-glucuronide" parameterization="mechanistic" topology="1C"></div>

## Citation
Valgaeren B, Théron L, Croubels S, Devreese M, De Baere S, Van Pamel E et al. The role of roughage provision on the absorption and disposition of the mycotoxin deoxynivalenol and its acetylated derivatives in calves: from field observations to toxicokinetics. Archives of toxicology 93(2):293–310 (2019).
  ·  DOI: [10.1007/s00204-018-2368-8](https://doi.org/10.1007/s00204-018-2368-8)

## Population and dosing

**Population:** ruminating and non-ruminating male beef calves · condition healthy calves, experimental cross-over toxicokinetic study · n = 4.

**Dosed compound ≠ measured compound:** dosed Acetyldeoxynivalenol (3-ADON; also DON, 15-ADON administered), measured deoxynivalenol (DON) and DON-3-glucuronide.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C_0 (ng/mL) | C0 | 23.4 | ng/mL |
| AUC_0-t (h ng/mL) | AUCt | 8.1 | h ng/mL |
| AUC_0-∞ ((h ng)/mL) | AUC∞ | 8.1 | h ng |
| CI (L/h/kg) | CLnorm | 3.2 | L/h/kg |
| k_el (h^-1) | kel | 2.1 | h^-1 |
| T_1/2e (h) | t1/2z | 0.4 | h |
| V_d (L/kg) | V | 1.6 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q86 unit ng/mL ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q17 unit h ng ([time] * [mass]) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (C0 and AUC∞), so that value has no SI equivalent. Extracted — acetyldeoxynivalenol: C0 23.4 ng/mL, AUCt 8.1 h ng/mL, AUC∞ 8.1 h ng, CLnorm 3.2 L/h/kg, kel 2.1 h^-1, t1/2z 0.4 h, V 1.6 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Acetyldeoxynivalenol (3-ADON; also DON, 15-ADON administered), the second reading DON, 3-ADON, 15-ADON; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C_0 (ng/mL) | `Q86` · C0 | 23.4 | ng/mL |  |  | ng/ml | exact (1) | Valgaeren_2019_table_3:row0:col3 |
| AUC_0-t (h ng/mL) | `Q19` · AUCt | 8.1 | h ng/mL | 0.02916 | kg*s/m3 | (h·ng)/ml | exact (1) | Valgaeren_2019_table_3:row1:col3 |
| AUC_0-∞ ((h ng)/mL) | `Q17` · AUC∞ | 8.1 | h ng |  |  | h·ng | llm_confirmed (0.6) | Valgaeren_2019_table_3:row2:col3 |
| CI (L/h/kg) | `Q354` · CLnorm | 3.2 | L/h/kg | 6.222e-05 | m3/s | l/(h·kg) | llm (0.6) | Valgaeren_2019_table_3:row3:col3 |
| k_el (h^-1) | `Q47` · kel | 2.1 | h^-1 | 0.0005833 | 1/s | 1/h | exact (1) | Valgaeren_2019_table_3:row4:col3 |
| T_1/2e (h) | `Q57` · t1/2z | 0.4 | h | 1440 | s | h | llm (0.6) | Valgaeren_2019_table_3:row5:col3 |
| V_d (L/kg) | `Q61` · V | 1.6 | L/kg | 0.112 | m3 | l/kg | exact (1) | Valgaeren_2019_table_3:row6:col3 |

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
- unit_dimension_mismatch: 'C_0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC_0-∞ ((h ng)/mL)' → Q17 (unit '[time] * [mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- documentation only: 'Cl' → Q22 (CL) comes from ['fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'V d' → Q61 (V) comes from ['fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'C max' → Q32 (Cmax) comes from ['fig_2:caption', 'fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- documentation only: 'T max' → Q56 (tmax) comes from ['fig_2:caption', 'fig_2:caption', 'fig_2:caption'], not from a located parameter table — not emitted as a model parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=deoxynivalenol (DON) and DON-3-glucuronide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 4 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: '3-adon rum' subgroup of Valgaeren_2019 (paper reports 2 populations: 3-adon non-rum, 3-adon rum)
- row roles (LLM): model_class=noncompartmental; 0/17 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'DON (deoxynivalenol)' — its concentrations stay mass-only
- molar mass: none found for 'DON-3-glucuronide (DON-3-GlcA)' — its concentrations stay mass-only
- molar mass: none found for 'deoxynivalenol (DON) and DON-3-glucuronide' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'deoxynivalenol (DON) and DON-3-glucuronide', not acetyldeoxynivalenol — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 100 | 4.1 | mismatch |
| `gpt-oss:120b` | `parameters[auc_0-inf ((h ng)/ml)].value` | 8.1 | 4.2 | mismatch |
| `gpt-oss:120b` | `parameters[auc_0-t].value` | 8.1 | 4.0 | mismatch |
| `gpt-oss:120b` | `parameters[c_0].value` | 23.4 | 10.4 | mismatch |
| `gpt-oss:120b` | `parameters[ci].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[ci].value` | 3.2 | 6.0 | mismatch |
| `gpt-oss:120b` | `parameters[don]` |  | 822.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` |  | 4.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k_el].value` | 2.1 | 2.7 | mismatch |
| `gpt-oss:120b` | `parameters[t_1/2e].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss:120b` | `parameters[t_1/2e].value` | 0.4 | 0.7 | mismatch |
| `gpt-oss:120b` | `parameters[v_d].value` | 1.6 | 5.5 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | Acetyldeoxynivalenol (3-ADON; also DON, 15-ADON administered) | DON, 3-ADON, 15-ADON | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | deoxynivalenol (DON) and DON-3-glucuronide | DON | mismatch |

</details>

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
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | h ng ([time] * [mass]) | ['Valgaeren_2019_table_3:row2:col3'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Valgaeren_2019_table_3:row1:col3'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Valgaeren_2019_table_3:row3:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Valgaeren_2019_table_3:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Valgaeren_2019_table_3:row5:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Valgaeren_2019_table_3:row6:col3'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['Valgaeren_2019_table_3:row0:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 112 L | ['Valgaeren_2019_table_3:row6:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacetyldeoxynivalenol%5D%20Acetyldeoxynivalenol_Valgaeren2019_3_adon_rum&body=Drug%3A%20acetyldeoxynivalenol%0ARecord%3A%20Acetyldeoxynivalenol_Valgaeren2019_3_adon_rum%0APaper%3A%20Valgaeren_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_acetyldeoxynivalenol/Acetyldeoxynivalenol_Valgaeren2019_3_adon_rum%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 06:55 UTC</sub>
