<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flutamide&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/&quot;},{&quot;label&quot;:&quot;Ali_2021 \u00b7 free_flutamide_suspension&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flutamide_Ali2021_flutamide_loaded_niosomes&quot;,&quot;label&quot;:&quot;Ali_2021_flutamide_loaded_niosomes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Radwanski1989_reference&quot;,&quot;label&quot;:&quot;Radwanski_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Radwanski1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Sharma2020_reference&quot;,&quot;label&quot;:&quot;Sharma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Sharma2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Mendoza2017_reference&quot;,&quot;label&quot;:&quot;Mendoza_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Mendoza2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flutamide — `Flutamide_Ali2021_free_flutamide_suspension`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q27 unit µg/mL ([mass] / [length] ** 3) vs [length] ** 3 / [time].

<div class="pk-model-meta" hidden drug="Flutamide" model-id="Flutamide_Ali2021_free_flutamide_suspension" status="rejected" stale="false" population="male rats" measured-compound="Flutamide" parameterization="apparent" topology="1C"></div>

## Citation
Ali MA, Mohamed MI, Megahed MA, Abdelghany TM, El-Say KM. Cholesterol-Based Nanovesicles Enhance the In Vitro Cytotoxicity, Ex Vivo Intestinal Absorption, and In Vivo Bioavailability of Flutamide. Pharmaceutics 13(11) (2021).
  ·  DOI: [10.3390/pharmaceutics13111741](https://doi.org/10.3390/pharmaceutics13111741)

## Population and dosing

**Population:** male rats · condition healthy · age group adult.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (min) | t1/2z | 164.224 | min |
| Cmax (µg/mL) | Cmax | 2.650 | µg/mL |
| AUC(0–t) (µg/mL × min) | AUC | 280.550 | µg/mL × min |
| AUMC(0–∞) (µg/mL × min²) | AUMC | 88926.240 | µg/mL × min² |
| MRT(0–∞) (min) | MRT | 239.542 | min |
| Vz/F (mg/kg)/(µg/mL) | V/F | 16.833 | (mg/kg)/(µg/mL) |
| Cl/F (mg/kg)/(µg/mL)/min | CL/F | 0.072 | µg/mL |
| first order absorption rate constant | kabs | 0.62 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q27 unit µg/mL ([mass] / [length] ** 3) vs [length] ** 3 / [time].**

A reported unit could not be converted (AUMC and CL/F), so that value has no SI equivalent. Extracted — flutamide: t1/2z 164 min, Cmax 2.65 µg/mL, AUC 281 µg/mL × min, AUMC 8.89e+04 µg/mL × min², MRT 240 min, V/F 16.8 (mg/kg)/(µg/mL), CL/F 0.072 µg/mL, kabs 0.62 h-1.

Independently confirmed by `gpt-oss:120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (min) | `Q57` · t1/2z | 164.224 | min | 9853 | s | min | half_life_rule (0.95) | Ali_2021_table_6:row0:col2 |
| Cmax (µg/mL) | `Q32` · Cmax | 2.650 | µg/mL | 0.00265 | kg/m3 | µg/ml | exact (1) | Ali_2021_table_6:row1:col2 |
| AUC(0–t) (µg/mL × min) | `Q88` · AUC | 280.550 | µg/mL × min | 16.83 | kg*s/m3 | µg/(min·ml) | space_fold (0.95) | Ali_2021_table_6:row2:col2 |
| AUMC(0–∞) (µg/mL × min²) | `Q20` · AUMC | 88926.240 | µg/mL × min² |  |  | µg/(ml·min2) | space_fold (0.95) | Ali_2021_table_6:row5:col2 |
| MRT(0–∞) (min) | `Q53` · MRT | 239.542 | min | 1.437e+04 | s | min | space_fold (0.95) | Ali_2021_table_6:row6:col2 |
| Vz/F (mg/kg)/(µg/mL) | `Q76` · V/F | 16.833 | (mg/kg)/(µg/mL) | 1.178 | m3 | (mg·kg)/(µg·ml) | llm_confirmed (0.6) | Ali_2021_table_6:row7:col2 |
| Cl/F (mg/kg)/(µg/mL)/min | `Q27` · CL/F | 0.072 | µg/mL |  |  | µg/ml | llm_confirmed (0.6) | Ali_2021_table_6:row8:col2 |
| first order absorption rate constant | `Q49` · kabs | 0.62 | h-1 | 0.0001722 | 1/s | 1/h | review_gapfill (0.7) | Sharma_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q88 ('AUC(6–∞) (µg/mL × min)', value '83.986') — already have one for this compound
- dropped duplicate Q88 ('AUC(0–∞) (µg/mL × min)', value '364.536') — already have one for this compound
- unit_dimension_unknown: 'µg/mL × min²' (AUMC)
- 'Vz/F (mg/kg)/(µg/mL)': unit 'µg/mL' is part of the label's '(mg/kg)/(µg/mL)' — the label's unit used
- unit_dimension_mismatch: 'Cl/F (mg/kg)/(µg/mL)/min' → Q27 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped value-less row: 'X1'
- dropped value-less row: 'X2'
- dropped value-less row: 'X3'
- dropped value-less row: 'X4'
- dropped value-less row: 'X1X2, X1X3, X1X4, X2X3, X2X4 and X3X4'
- dropped value-less row: 'X12, X22, X32 and X42'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Flutamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'free flutamide suspension' subgroup of Ali_2021 (paper reports 2 populations: flutamide loaded niosomes, free flutamide suspension)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Sharma_2020's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-13-01741-t003: units_need_context
- table Ali_2021_table_6: unparsed_numeric_cell
- companion parameter table 6 transcribed (12 record(s))
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | µg/mL ([mass] / [length] ** 3) | ['Ali_2021_table_6:row8:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ali_2021_table_6:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sharma_2020:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Ali_2021_table_6:row6:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Ali_2021_table_6:row0:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Ali_2021_table_6:row7:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Ali_2021_table_6:row2:col2'] |
| C5_unit_missing_Q20 | fail | [mass] * [time] / [length] ** 3 | µg/mL × min² | ['Ali_2021_table_6:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.18e+03 L | ['Ali_2021_table_6:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflutamide%5D%20Flutamide_Ali2021_free_flutamide_suspension&body=Drug%3A%20flutamide%0ARecord%3A%20Flutamide_Ali2021_free_flutamide_suspension%0APaper%3A%20Ali_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flutamide/Flutamide_Ali2021_free_flutamide_suspension%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 11:12 UTC</sub>
