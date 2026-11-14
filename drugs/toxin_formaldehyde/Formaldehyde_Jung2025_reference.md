<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Formaldehyde&quot;,&quot;href&quot;:&quot;drugs/toxin_formaldehyde/&quot;},{&quot;label&quot;:&quot;Jung_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Formaldehyde_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_formaldehyde/Formaldehyde_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Formaldehyde — `Formaldehyde_Jung2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The model rejects formaldehyde because its metabolite compartment is orphaned, lacking a valid formation rate or path from the parent hydantoin.

<div class="pk-model-meta" hidden drug="Formaldehyde" model-id="Formaldehyde_Jung2025_reference" status="rejected" stale="false" population="rats" measured-compound="5,5-Dimethyl hydantoin" parameterization="apparent" topology="general_linear"></div>

## Citation
Jung W, Lee J, Kim W, Kim S, Nam W, Myeong IS et al. Toxicokinetic Characterization of MDM Hydantoin via Stable Metabolite DMH: Population Modeling for Predicting Dermal Formaldehyde Formation. Toxics 13(11) (2025).
  ·  DOI: [10.3390/toxics13110917](https://doi.org/10.3390/toxics13110917)

## Population and dosing

**Population:** rats · condition healthy · n = 10 (5 per group in IV, 5 per group in TD, plus additional for stability/modeling but main PK is n=5 per dose/route).

**Dosing:** 700, 3500 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed MDM hydantoin, measured 5,5-Dimethyl hydantoin.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The terminal elimination half-life | t1/2z | 0.4 | min |
| The whole-body clearance | CLm,norm/F | 94.1 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model rejects formaldehyde because its metabolite compartment is orphaned, lacking a valid formation rate or path from the parent hydantoin.**

Formaldehyde is listed as a metabolite formed from MDM hydantoin but is assigned to zero compartments (n_cmt: 0) at the central site. The formation link relies on a combined parameter 'Fa,met, ka,met' which does not define a distinct kinetic rate from the parent to the metabolite pool. Consequently, the model structure is incomplete as the formaldehyde entity cannot be dynamically reached from the dose administration. Extracted — 5,5-Dimethyl hydantoin: t1/2z 0.4 min, CLm,norm/F 94.1 L/h/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The terminal elimination half-life | `Q57` · t1/2z | 0.4 | min | 24 | s | h | half_life_rule (0.95) | Jung_2025:other_prose |
| The whole-body clearance | `Q375` · CLm,norm/F | 94.1 | L/h/kg | 0.00183 | m3/s | L/h | boundary (0.8) | Jung_2025:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Clearance for MDMH' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Clearance for DMH' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Distribution clearance for DMH' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Central volume of distribution for MDMH' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Central volume of distribution for DMH' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Peripheral volume of distribution for DMH' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Absorption rate constant for DMH into the central compartment from skin' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Absorption-metabolism rate constant for MDMH in skin' routed out of structural estimates ('Mean (BSV)')
- table section iiv: 'Fraction of applied MDMH absorbed and metabolized in skin' routed out of structural estimates ('Mean (BSV)')
- salvaged Q57 ('The terminal elimination half-life'=0.4) from results prose — parameter table was unreadable
- salvaged Q22 ('The whole-body clearance'=94.1) from results prose — parameter table was unreadable
- metabolite 5,5-dimethyl hydantoin: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5,5-Dimethyl hydantoin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 8 linked by role; re-tagged parent→5,5-Dimethyl hydantoin ×5
- review gap-fill skipped: this record measures '5,5-Dimethyl hydantoin', not formaldehyde — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 6

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | pass | 2 |
| C0b_disposition_core | pass |  |
| C0c_disposition_complete | fail |  |
| C7_apparent_coherence | pass |  |
| C8_topology | fail |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bformaldehyde%5D%20Formaldehyde_Jung2025_reference&body=Drug%3A%20formaldehyde%0ARecord%3A%20Formaldehyde_Jung2025_reference%0APaper%3A%20Jung_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_formaldehyde/Formaldehyde_Jung2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 09:39 UTC</sub>
