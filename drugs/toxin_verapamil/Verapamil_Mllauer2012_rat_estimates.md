<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Verapamil&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/&quot;},{&quot;label&quot;:&quot;M\u00fcllauer_2012 \u00b7 rat_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Verapamil_Sips2026_dofetilide_observed&quot;,&quot;label&quot;:&quot;Sips_2026_dofetilide_observed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sips2026_dofetilide_observed.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Sips2026_verapamil_observed&quot;,&quot;label&quot;:&quot;Sips_2026_verapamil_observed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sips2026_verapamil_observed.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Hanley2024_reference&quot;,&quot;label&quot;:&quot;Hanley_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Hanley2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Hong2021_reference&quot;,&quot;label&quot;:&quot;Hong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Hong2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Mllauer2012_human_estimates&quot;,&quot;label&quot;:&quot;M\u00fcllauer_2012_human_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Mllauer2012_human_estimates.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Verapamil_Sauder1990_reference&quot;,&quot;label&quot;:&quot;Sauder_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_verapamil/Verapamil_Sauder1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Verapamil — `Verapamil_Mllauer2012_rat_estimates`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

> C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Verapamil" model-id="Verapamil_Mllauer2012_rat_estimates" status="rejected" stale="false" population="naive and 48-h post status epilepticus rats and healthy human volunteers" measured-compound="(R)-[11C]verapamil" parameterization="mechanistic" topology="2C"></div>

## Citation
Müllauer J, Kuntner C, Bauer M, Bankstahl JP, Müller M, Voskuyl RA et al. Pharmacokinetic modeling of P-glycoprotein function at the rat and human blood-brain barriers studied with (R)-[11C]verapamil positron emission tomography. EJNMMI research 2(1):58 (2012).
  ·  DOI: [10.1186/2191-219x-2-58](https://doi.org/10.1186/2191-219x-2-58)

## Population and dosing

**Population:** naive and 48-h post status epilepticus rats and healthy human volunteers · condition healthy controls and pilocarpine-induced status epilepticus (PET tracer dosing) · age group adult · n = 21 rats and 5 humans.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.60).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc (ml) | V1 | 38.8 | ml |
| Vp1 (ml) | V2 | 141 | ml |
| Vp2 (ml) | V3 | 1580 | ml |
| CL (ml·min−1) | CL | 16.4 | ml·min−1 |
| Q1 (ml·min−1) | Q | 29.1 | ml·min−1 |
| Q2 (ml·min−1) | Q2 | 22.3 | ml·min−1 |
| first-order absorption rate constant (ka) | kabs | 1.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

None of the extracted parameters is verapamil's own; they describe (R)-[11C]verapamil. Extracted — (R)-[11C]verapamil: V1 38.8 ml, V2 141 ml, V3 1.58e+03 ml, CL 16.4 ml·min−1, Q 29.1 ml·min−1, Q2 22.3 ml·min−1, kabs 1 h−1.

Independently confirmed by `gpt-oss:120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc (ml) | `Q63` · V1 | 38.8 | ml | 3.88e-05 | m3 | ml | exact (1) | T3:row2:col1 |
| Vp1 (ml) | `Q64` · V2 | 141 | ml | 0.000141 | m3 | ml | exact (1) | T3:row4:col1 |
| Vp2 (ml) | `Q77` · V3 | 1580 | ml | 0.00158 | m3 | ml | exact (1) | T3:row6:col1 |
| CL (ml·min−1) | `Q22` · CL | 16.4 | ml·min−1 | 2.733e-07 | m3/s | ml/min | exact (1) | T3:row8:col1 |
| Q1 (ml·min−1) | `Q30` · Q | 29.1 | ml·min−1 | 4.85e-07 | m3/s | ml/min | exact (1) | T3:row10:col1 |
| Q2 (ml·min−1) | `Q99` · Q2 | 22.3 | ml·min−1 | 3.717e-07 | m3/s | ml/min | second_intercompartmental (0.9) | T3:row12:col1 |
| first-order absorption rate constant (ka) | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Sips_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- 'Q2 (ml·min−1)' linked to Q99: a second intercompartmental clearance beside the Q30 already present
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=(R)-[11C]verapamil
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'rat / estimates' subgroup of Müllauer_2012 (paper reports 4 populations: human estimates, rat / estimates, species / human, species / rat)
- molar mass: none found for '(R)-[11C]verapamil' — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Sips_2026's review values (primary lacked it)

**Extraction notes:**
- table T3: ragged_grid
- table Müllauer_2012_table_4: ragged_grid
- companion parameter table 4 transcribed (115 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row8:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sips_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row4:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T3:row6:col1'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['T3:row12:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.4 | ['T3:row8:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.984 L/h | ['T3:row8:col1'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0388 L | ['T3:row2:col1'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.141 L | ['T3:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bverapamil%5D%20Verapamil_Mllauer2012_rat_estimates&body=Drug%3A%20verapamil%0ARecord%3A%20Verapamil_Mllauer2012_rat_estimates%0APaper%3A%20M%C3%BCllauer_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_verapamil/Verapamil_Mllauer2012_rat_estimates%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 21:31 UTC</sub>
