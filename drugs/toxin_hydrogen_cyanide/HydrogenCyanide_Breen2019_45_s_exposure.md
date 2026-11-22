<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Hydrogen cyanide&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/&quot;},{&quot;label&quot;:&quot;Breen_2019 \u00b7 45_s_exposure&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;HydrogenCyanide_Bhandari2014_reference&quot;,&quot;label&quot;:&quot;Bhandari_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bhandari2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Michaelis1991_reference&quot;,&quot;label&quot;:&quot;Michaelis_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Michaelis1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Sousa2003_reference&quot;,&quot;label&quot;:&quot;Sousa_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Sousa2003_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Bonanno2021_reference&quot;,&quot;label&quot;:&quot;Bonanno_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Bonanno2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Breen2019_value&quot;,&quot;label&quot;:&quot;Breen_2019_value&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Breen2019_value.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;HydrogenCyanide_Hall1987_reference&quot;,&quot;label&quot;:&quot;Hall_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Hall1987_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydrogen cyanide — `HydrogenCyanide_Breen2019_45_s_exposure`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

> The fast disposition rate parameter for thiocyanate is stored as 1.45 days, conflicting with the required inverse-time dimension for a rate constant.

<div class="pk-model-meta" hidden drug="Hydrogen cyanide" model-id="HydrogenCyanide_Breen2019_45_s_exposure" status="rejected" stale="false" population="Marine fish Amphiprion ocellaris" measured-compound="Thiocyanate" parameterization="mechanistic" topology="retention"></div>

## Citation
Breen NE, Bonanno JA, Hunt S, Grossman J, Brown J, Nolte H et al. On the half-life of thiocyanate in the plasma of the marine fish Amphiprion ocellaris: implications for cyanide detection. PeerJ 7:e6644 (2019).
  ·  DOI: [10.7717/peerj.6644](https://doi.org/10.7717/peerj.6644)

## Population and dosing

**Population:** Marine fish Amphiprion ocellaris · condition acute exposure (cyanide fishing simulation).

**Dosed compound ≠ measured compound:** dosed Hydrogen cyanide, measured Thiocyanate.

> **Species: fish.** This record comes from an animal study (fish), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (days) | t1/2z | 1.01 | days |
| Y0 (ppm) | equation variable | 0.609 | ppm |
| A1 (ppm) | A1 | 2.54 | ppm |
| t1 (days) | λ1 | 1.45 | days |
| k (days−1) | kel | 0.69 | days−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The fast disposition rate parameter for thiocyanate is stored as 1.45 days, conflicting with the required inverse-time dimension for a rate constant.**

The parameter intended as the fast disposition rate constant carries a time unit (days) instead of inverse time, creating a dimensional inconsistency. Additionally, the original unit failed standard conversion to SI, preventing proper calculation. This structural mismatch led to the record's rejection. Extracted — Thiocyanate: t1/2z 1.01 days, A1 2.54 ppm, λ1 1.45 days, kel 0.69 days−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (days) | `Q57` · t1/2z | 1.01 | days | 8.726e+04 | s | d | half_life_rule (0.95) | table-1:row1:col1 |
| Y0 (ppm) | `Q900` · equation variable | 0.609 | ppm |  |  | ppm | llm (0.6) | table-1:row2:col1 |
| A1 (ppm) | `Q415` · A1 | 2.54 | ppm |  |  | ppm | exact (1) | table-1:row3:col1 |
| t1 (days) | `Q67` · λ1 | 1.45 | days |  |  | d | llm (0.6) | table-1:row4:col1 |
| k (days−1) | `Q47` · kel | 0.69 | days−1 | 7.986e-06 | 1/s | 1/d | exact (1) | table-1:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 't1 (days)' → Q67 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q415 ('r2', value '0.832') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Thiocyanate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: '45-s exposure' subgroup of Breen_2019 (paper reports 3 populations: 20-s exposure, 45-s exposure, value)
- row roles (LLM): model_class=noncompartmental; 9/9 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures 'Thiocyanate', not hydrogen_cyanide — the review values are the parent's

**Extraction notes:**
- companion parameter table 2 transcribed (6 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['table-1:row5:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['table-1:row1:col1'] |
| C5_dimension_Q67 | fail | 1 / [time] | days ([time]) | ['table-1:row4:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydrogen_cyanide%5D%20HydrogenCyanide_Breen2019_45_s_exposure&body=Drug%3A%20hydrogen_cyanide%0ARecord%3A%20HydrogenCyanide_Breen2019_45_s_exposure%0APaper%3A%20Breen_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydrogen_cyanide/HydrogenCyanide_Breen2019_45_s_exposure%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 12:10 UTC</sub>
