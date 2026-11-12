<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Tyramine&quot;,&quot;href&quot;:&quot;drugs/toxin_tyramine/&quot;},{&quot;label&quot;:&quot;Rafehi_2019 \u00b7 tyramine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tyramine_Rafehi2019_4_hpaa&quot;,&quot;label&quot;:&quot;Rafehi_2019_4_hpaa&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tyramine — `Tyramine_Rafehi2019_tyramine`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The extracted clearance and volume parameters are orders of magnitude too large for the drug's actual mass, indicating a unit error.

<div class="pk-model-meta" hidden drug="Tyramine" model-id="Tyramine_Rafehi2019_tyramine" status="rejected" stale="false" population="healthy volunteers" measured-compound="Tyramine" parameterization="apparent" topology="1C"></div>

## Citation
Rafehi M, Faltraco F, Matthaei J, Prukop T, Jensen O, Grytzmann A et al. Highly Variable Pharmacokinetics of Tyramine in Humans and Polymorphisms in OCT1, CYP2D6, and MAO-A. Frontiers in pharmacology 10:1297 (2019).
  ·  DOI: [10.3389/fphar.2019.01297](https://doi.org/10.3389/fphar.2019.01297)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 88.

**Dosing:** 400 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC inf (min*µg/ml) | AUC∞ | 3.74 | min*µg/ml |
| t 1/2 (min) | t1/2z | 55 | min |
| t max (min) | tmax | 46 | min |
| C max (µg/ml) | Cmax | 0.087 | µg/ml |
| CL/F (l/min) | CL/F | 107 | l/min |
| CL renal (l/min) | CLR | 0.26 | l/min |
| Ae 0-6h (mg) | Ae | 0.98 | mg |
| Vitreous RBZ solution V/F | V/F | 1.8 | ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The extracted clearance and volume parameters are orders of magnitude too large for the drug's actual mass, indicating a unit error.**

Tyramine, a low-mass amine, is assigned a total clearance of 107 l/min and a distribution volume of 1.8 ml. The renal clearance is 0.26 l/min, which is implausibly high relative to the reported 0.98 mg excreted amount. These magnitudes are inconsistent with the 55-minute half-life and 3.74 min*µg/ml AUC values provided in the record. Extracted — tyramine: AUC∞ 3.74 min*µg/ml, t1/2z 55 min, tmax 46 min, Cmax 0.087 µg/ml, CL/F 107 l/min, CLR 0.26 l/min, Ae 0.98 mg, V/F 1.8 ml.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC inf (min*µg/ml) | `Q17` · AUC∞ | 3.74 | min*µg/ml | 0.2244 | kg*s/m3 | (min·µg)/ml | space_fold (0.95) | T2:row1:col1 |
| t 1/2 (min) | `Q57` · t1/2z | 55 | min | 3300 | s | min | half_life_rule (0.95) | T2:row2:col1 |
| t max (min) | `Q56` · tmax | 46 | min | 2760 | s | min | space_fold (0.95) | T2:row3:col1 |
| C max (µg/ml) | `Q32` · Cmax | 0.087 | µg/ml | 8.7e-05 | kg/m3 | µg/ml | space_fold (0.95) | T2:row4:col1 |
| CL/F (l/min) | `Q27` · CL/F | 107 | l/min | 0.001783 | m3/s | l/min | exact (1) | T2:row5:col1 |
| CL renal (l/min) | `Q26` · CLR | 0.26 | l/min | 4.333e-06 | m3/s | l/min | llm_corrected (0.6) | T2:row6:col1 |
| Ae 0-6h (mg) | `Q91` · Ae | 0.98 | mg | 9.8e-07 | kg | mg | llm_confirmed (0.6) | T2:row7:col1 |
| Vitreous RBZ solution V/F | `Q76` · V/F | 1.8 | ml | 1.8e-06 | m3 | L | review_gapfill (0.7) | Lee_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q91 ('2x Ae -3-0h (mg)', value '0.089') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Tyramine
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'tyramine' subgroup of Rafehi_2019 (paper reports 2 populations: 4-hpaa, tyramine)
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged Tyramine→parent ×8
- gap-filled Q76 (V/F) from Lee_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['T2:row1:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['T2:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['T2:row4:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['T2:row3:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Lee_2024:review'] |
| C5_dimension_Q91 | pass | [mass] |  | ['T2:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.42e+03 L/h | ['T2:row5:col1'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.0018 L | ['Lee_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btyramine%5D%20Tyramine_Rafehi2019_tyramine&body=Drug%3A%20tyramine%0ARecord%3A%20Tyramine_Rafehi2019_tyramine%0APaper%3A%20Rafehi_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tyramine/Tyramine_Rafehi2019_tyramine%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 04:28 UTC</sub>
