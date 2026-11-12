<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Tityustoxin (Tityus serrulatus )&quot;,&quot;href&quot;:&quot;drugs/toxin_tityustoxin_tityus_serrulatus/&quot;},{&quot;label&quot;:&quot;Nunan_2004 \u00b7 young_rats&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tityustoxin (Tityus serrulatus ) — `TityustoxinTityusSerrulatus_Nunan2004_young_rats`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The AUC for tityustoxin has an impossible unit of ng h -1 ml -1, conflicting with the dimensions of concentration-time area.

<div class="pk-model-meta" hidden drug="Tityustoxin (Tityus serrulatus )" model-id="TityustoxinTityusSerrulatus_Nunan2004_young_rats" status="rejected" stale="false" population="young male/female rats and adult male rats" measured-compound="Tityustoxin (Tityus serrulatus)" parameterization="apparent" topology="1C"></div>

## Citation
Nunan EA, Arya V, Hochhaus G, Cardoso VN, Moraes-Santos T. Age effects on the pharmacokinetics of tityustoxin from Tityus serrulatus scorpion venom in rats. Brazilian journal of medical and biological research = Revista brasileira de pesquisas medicas e biologicas 37(3):385–390 (2004).
  ·  DOI: [10.1590/s0100-879x2004000300016](https://doi.org/10.1590/s0100-879x2004000300016)

## Population and dosing

**Population:** young male/female rats and adult male rats · condition healthy · age group mixed · n = 20-32.

**Dosing:** 0.006 mg, sc, single.

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
| K (h -1 ) | kel | 0.16 | h -1 |
| T ½ K (h) | t1/2α | 5.00 | h |
| AUC ∞ (ng h -1 ml -1 ) | AUC∞ | 296.49 | ng h -1 ml -1 |
| MRT (h) | MRT | 6.77 | h |
| C max (ng/ml) | Cmax | 62.30 | ng/ml |
| T max (h) | tmax | 0.64 | h |
| CL/F (l h -1 kg -1 ) | CL/F | 0.02 | l h -1 kg -1 |
| Vd/F (l/kg) | V/F | 0.15 | l/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The AUC for tityustoxin has an impossible unit of ng h -1 ml -1, conflicting with the dimensions of concentration-time area.**

The record lists the area under the concentration-time curve extrapolated to infinity as 296.49. The assigned unit, ng h -1 ml -1, is dimensionally incompatible with an area under a curve. This unconvertible unit prevented the parameter from being processed into standard SI values. Extracted — tityustoxin tityus serrulatus: kel 0.16 h -1, t1/2α 5 h, AUC∞ 296 ng h -1 ml -1, MRT 6.77 h, Cmax 62.3 ng/ml, tmax 0.64 h, CL/F 0.02 l h -1 kg -1, V/F 0.15 l/kg.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K (h -1 ) | `Q47` · kel | 0.16 | h -1 | 4.444e-05 | 1/s | 1/h | exact (1) | Nunan_2004_table_1:row0:col2, Nunan_2004_table_2:row0:col2 |
| T ½ K (h) | `Q59` · t1/2α | 5.00 | h | 1.8e+04 | s | h | llm (0.6) | Nunan_2004_table_1:row1:col2, Nunan_2004_table_2:row1:col2 |
| AUC ∞ (ng h -1 ml -1 ) | `Q17` · AUC∞ | 296.49 | ng h -1 ml -1 |  |  | ng/(h·ml) | space_fold (0.95) | Nunan_2004_table_1:row2:col2, Nunan_2004_table_2:row2:col2 |
| MRT (h) | `Q53` · MRT | 6.77 | h | 2.437e+04 | s | h | exact (1) | Nunan_2004_table_1:row3:col2, Nunan_2004_table_2:row3:col2 |
| C max (ng/ml) | `Q32` · Cmax | 62.30 | ng/ml | 6.23e-05 | kg/m3 | ng/ml | space_fold (0.95) | Nunan_2004_table_1:row4:col2 |
| T max (h) | `Q56` · tmax | 0.64 | h | 2304 | s | h | space_fold (0.95) | Nunan_2004_table_1:row5:col2, Nunan_2004_table_2:row5:col2 |
| CL/F (l h -1 kg -1 ) | `Q27` · CL/F | 0.02 | l h -1 kg -1 | 3.889e-07 | m3/s | l/(h·kg) | exact (1) | Nunan_2004_table_1:row6:col2, Nunan_2004_table_2:row6:col2 |
| Vd/F (l/kg) | `Q76` · V/F | 0.15 | l/kg | 0.0105 | m3 | l/kg | exact (1) | Nunan_2004_table_1:row7:col2, Nunan_2004_table_2:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC ∞ (ng h -1 ml -1 )' → Q17 (unit '[mass] / [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q32 ('C max (ng kg -1 ml -1 )', value '40.43') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Tityustoxin (Tityus serrulatus)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'young rats' subgroup of Nunan_2004 (paper reports 2 populations: adult rats, young rats)
- molar mass: no plausible PubChem entry for 'Tityustoxin (Tityus serrulatus)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'tityustoxin_tityus_serrulatus' — its concentrations stay mass-only
- molar mass: none found for 'Tityustoxin (Tityus serrulatus)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1, 2
- table Nunan_2004_table_1: ragged_grid

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | ng h -1 ml -1 ([mass] / [time] / [length] ** 3) | ['Nunan_2004_table_1:row2:col2', 'Nunan_2004_table_2:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Nunan_2004_table_1:row6:col2', 'Nunan_2004_table_2:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Nunan_2004_table_1:row4:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Nunan_2004_table_1:row0:col2', 'Nunan_2004_table_2:row0:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['Nunan_2004_table_1:row3:col2', 'Nunan_2004_table_2:row3:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Nunan_2004_table_1:row5:col2', 'Nunan_2004_table_2:row5:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['Nunan_2004_table_1:row1:col2', 'Nunan_2004_table_2:row1:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Nunan_2004_table_1:row7:col2', 'Nunan_2004_table_2:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.4 L/h | ['Nunan_2004_table_1:row6:col2', 'Nunan_2004_table_2:row6:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 10.5 L | ['Nunan_2004_table_1:row7:col2', 'Nunan_2004_table_2:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btityustoxin_tityus_serrulatus%5D%20TityustoxinTityusSerrulatus_Nunan2004_young_rats&body=Drug%3A%20tityustoxin_tityus_serrulatus%0ARecord%3A%20TityustoxinTityusSerrulatus_Nunan2004_young_rats%0APaper%3A%20Nunan_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tityustoxin_tityus_serrulatus/TityustoxinTityusSerrulatus_Nunan2004_young_rats%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 03:57 UTC</sub>
