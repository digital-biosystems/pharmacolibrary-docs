<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Antimony potassium tartrate&quot;,&quot;href&quot;:&quot;drugs/toxin_antimony_potassium_tartrate/&quot;},{&quot;label&quot;:&quot;Coelho_2025 \u00b7 free_te&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Antimony potassium tartrate — `AntimonyPotassiumTartrate_Coelho2025_free_te`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Rejected because the antimony clearance unit mg/L lacks the required time dimension, creating a dimensional mismatch with clearance.

<div class="pk-model-meta" hidden drug="Antimony potassium tartrate" model-id="AntimonyPotassiumTartrate_Coelho2025_free_te" status="rejected" stale="false" population="female BALB/c mice" measured-compound="Antimony" parameterization="apparent" topology="1C"></div>

## Citation
Coelho L, Aguiar M, Souza M, Paiva M, Nascentes C, Miranda A et al. Liposomal Encapsulation of Tartar Emetic Improves Pharmacokinetic Profile and Mitigates Cardiotoxicity in Murine Experimental Model. Pharmaceutics 17(9) (2025).
  ·  DOI: [10.3390/pharmaceutics17091109](https://doi.org/10.3390/pharmaceutics17091109)

## Population and dosing

**Population:** female BALB/c mice · condition experimental model for visceral leishmaniasis · age group adult · n = 7 per group per time point (biodistribution); 10 per group (toxicity/PK follow-up).

**Dosing:** 560 mg, other, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed Antimony potassium tartrate, measured Antimony.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm,norm/F, Vm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (min) | t1/2z | 177.5 | min |
| Cmax (mg/L) | Cmax | 1.7 | mg/L |
| AUC0–t (mg/L·min) | AUCt | 110.3 | mg/L·min |
| AUC0–inf (mg/L·min) | AUC∞ | 210.5 | mg/L·min |
| MRT0–inf (min) | MRT | 253.0 | min |
| Vz (mg/kg)/(mg/L) | Vm,norm/F | 13.3 | (mg/kg)/(mg/L) |
| Cl (mg/kg)/(mg/L)/min | CLm,norm/F | 0.04 | mg/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the antimony clearance unit mg/L lacks the required time dimension, creating a dimensional mismatch with clearance.**

The reported clearance for antimony potassium tartrate is 0.04 with a unit of mg/L. Clearance requires a volume per time unit, but the provided unit represents volume alone. The unit mg/L could not be converted to standard SI units, preventing the model from resolving the parameter's dimensions. Extracted — antimony potassium tartrate: t1/2z 178 min, Cmax 1.7 mg/L, AUCt 110 mg/L·min, AUC∞ 210 mg/L·min, MRT 253 min, Vm,norm/F 13.3 (mg/kg)/(mg/L), CLm,norm/F 0.04 mg/L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (min) | `Q57` · t1/2z | 177.5 | min | 1.065e+04 | s | min | half_life_rule (0.95) | pharmaceutics-17-01109-t003:row1:col1 |
| Cmax (mg/L) | `Q32` · Cmax | 1.7 | mg/L | 0.0017 | kg/m3 | mg/l | exact (1) | pharmaceutics-17-01109-t003:row2:col1 |
| AUC0–t (mg/L·min) | `Q19` · AUCt | 110.3 | mg/L·min | 6.618 | kg*s/m3 | mg/(min·l) | exact (1) | pharmaceutics-17-01109-t003:row3:col1 |
| AUC0–inf (mg/L·min) | `Q17` · AUC∞ | 210.5 | mg/L·min | 12.63 | kg*s/m3 | mg/(min·l) | exact (1) | pharmaceutics-17-01109-t003:row4:col1 |
| MRT0–inf (min) | `Q53` · MRT | 253.0 | min | 1.518e+04 | s | min | exact (1) | pharmaceutics-17-01109-t003:row5:col1 |
| Vz (mg/kg)/(mg/L) | `Q376` · Vm,norm/F | 13.3 | (mg/kg)/(mg/L) | 0.931 | m3 | kg/l | llm_confirmed (0.6) | pharmaceutics-17-01109-t003:row6:col1 |
| Cl (mg/kg)/(mg/L)/min | `Q375` · CLm,norm/F | 0.04 | mg/L |  |  | mg/l | llm_confirmed (0.6) | pharmaceutics-17-01109-t003:row7:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'free te' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- 'Vz (mg/kg)/(mg/L)': unit 'mg/L' is part of the label's '(mg/kg)/(mg/L)' — the label's unit used
- unit_dimension_mismatch: 'Cl (mg/kg)/(mg/L)/min' → Q22 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 7 (source ['pharmaceutics-17-01109-t003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.05 (source ['pharmaceutics-17-01109-t003:footnote']); the table cell was unparseable — needs review
- metabolite antimony: Q61→Q376 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- metabolite antimony: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Antimony
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'free te' subgroup of Coelho_2025 (paper reports 2 populations: free te, lip-te)
- row roles: 7 per-group rows of Antimony potassium tartrate summary_statistic but 7 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 9/9 row label(s) assigned, 0 linked by role
- molar mass: no plausible PubChem entry for 'Antimony potassium tartrate' ('potassium antimony tartrate trihydrate') — left in mass units
- molar mass: none found for 'Antimony potassium tartrate' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-17-01109-t003:row4:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-17-01109-t003:row3:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-17-01109-t003:row2:col1'] |
| C5_dimension_Q375 | fail | [length] ** 3 / [time] | mg/L ([mass] / [length] ** 3) | ['pharmaceutics-17-01109-t003:row7:col1'] |
| C5_dimension_Q376 | pass | [length] ** 3 |  | ['pharmaceutics-17-01109-t003:row6:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['pharmaceutics-17-01109-t003:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['pharmaceutics-17-01109-t003:row1:col1'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bantimony_potassium_tartrate%5D%20AntimonyPotassiumTartrate_Coelho2025_free_te&body=Drug%3A%20antimony_potassium_tartrate%0ARecord%3A%20AntimonyPotassiumTartrate_Coelho2025_free_te%0APaper%3A%20Coelho_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_antimony_potassium_tartrate/AntimonyPotassiumTartrate_Coelho2025_free_te%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 14:27 UTC</sub>
