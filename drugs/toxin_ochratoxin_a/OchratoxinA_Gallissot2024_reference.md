<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Ochratoxin A&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/&quot;},{&quot;label&quot;:&quot;Gallissot_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OchratoxinA_Bernhoft2017_reference&quot;,&quot;label&quot;:&quot;Bernhoft_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/OchratoxinA_Bernhoft2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;OchratoxinA_Fuchs1992_reference&quot;,&quot;label&quot;:&quot;Fuchs_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/OchratoxinA_Fuchs1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ochratoxin A — `OchratoxinA_Gallissot2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Ochratoxin A" model-id="OchratoxinA_Gallissot2024_reference" status="rejected" stale="false" population="27-day-old male broiler chickens (~1.6 kg BW)" measured-compound="Ochratoxin A in plasma" parameterization="mechanistic" topology="1C"></div>

## Citation
Gallissot M, Rodriguez MA, Devreese M, Van Herteryck I, Molist F, Santos RR. An Algoclay-Based Decontaminant Decreases Exposure to Aflatoxin B1, Ochratoxin A, and Deoxynivalenol in a Toxicokinetic Model, as well as Supports Intestinal Morphology, and Decreases Liver Oxidative Stress in Broiler Chickens Fed a Diet Naturally Contaminated with Deoxynivalenol. Toxins 16(5) (2024).
  ·  DOI: [10.3390/toxins16050207](https://doi.org/10.3390/toxins16050207)

## Population and dosing

**Population:** 27-day-old male broiler chickens (~1.6 kg BW) · condition healthy, single oral bolus mycotoxin exposure with/without algoclay-based decontaminant · n = 16 (8 per group, experiment 1).

**Dosed compound ≠ measured compound:** dosed Ochratoxin A (oral bolus with DON and AFB1), measured Ochratoxin A in plasma.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–8h (h.ng/mL) | AUCt | 9.44 | h.ng/mL |
| Cmax (ng/mL) | Cmax | 8.65 | ng/mL |
| Tmax (h) | tmax | 0.26 | h |
| Relative F (%) | Frel | 100 | % |
| AUC0–12h (response.h) | AUC | 760.9 | response.h |
| reconstituted volume | V | 150 | µL |
| GT | tlag | 6.32 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (Frel and AUC), so that value has no SI equivalent. None of the extracted parameters is ochratoxin a's own; they describe Ochratoxin A in plasma. Extracted — Ochratoxin A in plasma: AUCt 9.44 h.ng/mL, Cmax 8.65 ng/mL, tmax 0.26 h, Frel 100 %, AUC 761 response.h, V 150 µL, tlag 6.32 min.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Ochratoxin A (oral bolus with DON and AFB1), the second reading Ochratoxin A; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–8h (h.ng/mL) | `Q19` · AUCt | 9.44 | h.ng/mL | 0.03398 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Gallissot_2024_table_1:row0:col1, Gallissot_2024_table_1:row0:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 8.65 | ng/mL | 8.65e-06 | kg/m3 | ng/ml | exact (1) | Gallissot_2024_table_1:row1:col1, Gallissot_2024_table_1:row1:col2, Gallissot_2024_table_2:row1:col1, Gallissot_2024_table_2:row1:col2 |
| Tmax (h) | `Q56` · tmax | 0.26 | h | 936 | s | h | exact (1) | Gallissot_2024_table_1:row2:col1, Gallissot_2024_table_1:row2:col2, Gallissot_2024_table_2:row2:col1, Gallissot_2024_table_2:row2:col2, Gallissot_2024_table_3:row2:col1, Gallissot_2024_table_3:row2:col2 |
| Relative F (%) | `Q87` · Frel | 100 | % |  |  |  | exact (1) | Gallissot_2024_table_1:row3:col1, Gallissot_2024_table_1:row3:col2, Gallissot_2024_table_2:row3:col1, Gallissot_2024_table_2:row3:col2, Gallissot_2024_table_3:row3:col1, Gallissot_2024_table_3:row3:col2 |
| AUC0–12h (response.h) | `Q88` · AUC | 760.9 | response.h |  |  | h·response | llm (0.6) | Gallissot_2024_table_3:row0:col1, Gallissot_2024_table_3:row0:col2 |
| reconstituted volume | `Q61` · V | 150 | µL | 1.5e-07 | m3 | L | boundary (0.8) | Gallissot_2024:prose |
| GT | `Q83` · tlag | 6.32 | min | 379.2 | s | h | review_gapfill (0.7) | Berger_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q19 ('AUC0–24h (h.ng/mL)', value '205.99') — already have one for this compound
- unit_dimension_unknown: 'response.h' (AUC)
- unit_dimension_unknown: 'response' (Cmax)
- dropped duplicate Q32 ('Cmax (response)', value '346.1') — already have one for this compound
- salvaged Q61 ('reconstituted volume'=150) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ochratoxin A in plasma
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles: LLM call failed (JSONDecodeError) — deterministic compound tags kept
- molar mass: none found for 'Deoxynivalenol (DON)' — its concentrations stay mass-only
- molar mass: none found for 'DON-3-sulphate (DON-3S)' — its concentrations stay mass-only
- molar mass: none found for 'Ochratoxin A in plasma' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Berger_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 1, 2, 3
- table Gallissot_2024_table_1: unbound_uncertainty
- table Gallissot_2024_table_2: unbound_uncertainty
- table Gallissot_2024_table_3: unbound_uncertainty
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0-12h]` | 760.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-8h]` |  | 9.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-8h]` | 9.44 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` |  | 8.65 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 8.65 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[reconstituted volume]` | 150 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative f]` |  | 100 | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative f]` | 100 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` |  | 0.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 0.26 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Ochratoxin A (oral bolus with DON and AFB1) | Ochratoxin A | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Ochratoxin A in plasma | Ochratoxin A | mismatch |

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
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Gallissot_2024_table_1:row0:col1', 'Gallissot_2024_table_1:row0:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Gallissot_2024_table_1:row1:col1', 'Gallissot_2024_table_1:row1:col2', 'Gallissot_2024_table_2:row1:col1', 'Gallissot_2024_table_2:row1:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Gallissot_2024_table_1:row2:col1', 'Gallissot_2024_table_1:row2:col2', 'Gallissot_2024_table_2:row2:col1', 'Gallissot_2024_table_2:row2:col2', 'Gallissot_2024_table_3:row2:col1', 'Gallissot_2024_table_3:row2:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Berger_2025:review'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | response.h | ['Gallissot_2024_table_3:row0:col1', 'Gallissot_2024_table_3:row0:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.00015 L | ['Gallissot_2024:prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bochratoxin_a%5D%20OchratoxinA_Gallissot2024_reference&body=Drug%3A%20ochratoxin_a%0ARecord%3A%20OchratoxinA_Gallissot2024_reference%0APaper%3A%20Gallissot_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ochratoxin_a/OchratoxinA_Gallissot2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 15:43 UTC</sub>
