<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Codeine&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/&quot;},{&quot;label&quot;:&quot;Yang_2024 \u00b7 codeine_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Gretler2020_reference&quot;,&quot;label&quot;:&quot;Gretler_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/Codeine_Gretler2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Guay1988_reference&quot;,&quot;label&quot;:&quot;Guay_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/Codeine_Guay1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_KuKanich2016_reference&quot;,&quot;label&quot;:&quot;KuKanich_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_codeine/Codeine_KuKanich2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Codeine — `Codeine_Yang2024_codeine_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejected due to dimensional mismatches for Michaelis-Menten affinity, clearance, and dissolution parameters, plus a missing unit conversion for the dissolution shape.

<div class="pk-model-meta" hidden drug="Codeine" model-id="Codeine_Yang2024_codeine_value" status="rejected" stale="false" population="healthy adults with different CYP2D6 phenotypes" measured-compound="Codeine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Yang Y, Zhang X, Wang Y, Xi H, Xu M, Zheng L. Physiologically based pharmacokinetic modeling to predict the pharmacokinetics of codeine in different CYP2D6 phenotypes. Frontiers in pharmacology 15:1342515 (2024).
  ·  DOI: [10.3389/fphar.2024.1342515](https://doi.org/10.3389/fphar.2024.1342515)

## Population and dosing

**Population:** healthy adults with different CYP2D6 phenotypes · condition healthy · age group adult.

**Dosing:** 20, 30, 80, 1500 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW, g/mol | MW | 299.36 | g/mol |
| fup | fu | 0.925 |  |
| Blood to plasma ratio (B/P) | Qb | 0.97 | B/P |
| Km, 3A4 (μM) | Km | 104.1 | μM |
| CLmet (mL/min/kg) | CLH | 20.32 | mL/min/kg |
| CLrenal (mL/min/kg) | CLR | 5 | mL/min/kg |
| Specific CL (/min) | CLu | 1.88 | /min |
| Dissolution shape (T) | R1 | 0.92 | T |
| theta_q66_em | theta_q66_em | 1.6 |  |
| theta_km_ugt2b7 | theta_km_ugt2b7 | 2.32 |  |
| theta_q66_ugt2b7 | theta_q66_ugt2b7 | 573 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected due to dimensional mismatches for Michaelis-Menten affinity, clearance, and dissolution parameters, plus a missing unit conversion for the dissolution shape.**

The Michaelis-Menten affinity (Km) for CYP3A4 was recorded in micromolar, which conflicts with the required mass per volume dimension. Unbound clearance (CLu) was assigned units of inverse time instead of volume per time, and the dissolution shape parameter (R1) used an unconvertible unit that blocked SI conversion. Additionally, the model topology contains unreachable compartments or unlinked metabolites that lack a path from the dose. Extracted — codeine: MW 299 g/mol, fu 0.925, Qb 0.97 B/P, Km 104 μM, CLH 20.3 mL/min/kg, CLR 5 mL/min/kg, CLu 1.88 /min, R1 0.92 T.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW, g/mol | `Q374` · MW | 299.36 | g/mol | 0.2994 |  | g/(m·ol) | exact (1) | T1:row6:col1 |
| fup | `Q46` · fu | 0.925 |  | 0.925 |  |  | llm (0.6) | T1:row8:col1 |
| Blood to plasma ratio (B/P) | `Q54` · Qb | 0.97 | B/P |  |  | b/p | llm (0.6) | T1:row9:col1 |
| Km, 3A4 (μM) | `Q1` · Km | 104.1 | μM |  |  | µM | llm_confirmed (0.6) | T1:row13:col1 |
| CLmet (mL/min/kg) | `Q25` · CLH | 20.32 | mL/min/kg | 2.371e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | T1:row19:col1 |
| CLrenal (mL/min/kg) | `Q26` · CLR | 5 | mL/min/kg | 5.833e-06 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | T1:row20:col1 |
| Specific CL (/min) | `Q24` · CLu | 1.88 | /min |  |  | 1/min | llm_corrected (0.6) | T1:row21:col1 |
| Dissolution shape (T) | `Q307` · R1 | 0.92 | T |  |  | t | llm (0.6) | T1:row26:col1 |
| theta_q66_em | `Q900` · theta_q66_em | 1.6 |  |  |  |  |  | T1:row16:col1 |
| theta_km_ugt2b7 | `Q900` · theta_km_ugt2b7 | 2.32 |  |  |  |  |  | T1:row17:col1 |
| theta_q66_ugt2b7 | `Q900` · theta_q66_ugt2b7 | 573 |  |  |  |  |  | T1:row18:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'logP' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1'])
- dropped unlinked row (NIL): 'pKa-acid' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1'])
- dropped unlinked row (NIL): 'pKa-basic' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1'])
- dropped unlinked row (NIL): 'Solubility at pH7, mg/mL' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1'])
- unit_dimension_unknown: 'B/P' (Qb)
- unit_dimension_mismatch: 'Km, 3A4 (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Kcat, 3A4 (/min)' — extend the ontology if this is a real PK parameter (source ['T1:row14:col1'])
- unit_dimension_mismatch: 'Km, 2D6 (μM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('Km, 2D6 (μM)', value '100') — already have one for this compound
- unit_dimension_mismatch: 'Specific CL (/min)' → Q24 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Dissolution time (C) (min)' — extend the ontology if this is a real PK parameter (source ['T1:row23:col1'])
- dropped unlinked row (NIL): 'Dissolution shape (C)' — extend the ontology if this is a real PK parameter (source ['T1:row24:col1'])
- dropped unlinked row (NIL): 'Dissolution time (T) (min)' — extend the ontology if this is a real PK parameter (source ['T1:row25:col1'])
- unit_dimension_mismatch: 'Dissolution shape (T)' → Q307 (unit '[mass]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Dissolution time (SR) (min)' — extend the ontology if this is a real PK parameter (source ['T1:row27:col1'])
- dropped PD-category row 'Dissolution shape (SR)' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T1:row28:col1'])
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Codeine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- pharmacogenetic covariate 'theta_q66_em' (em) — PGx domain
- pharmacogenetic covariate 'theta_km_ugt2b7' (ugt2b7) — PGx domain
- pharmacogenetic covariate 'theta_q66_ugt2b7' (ugt2b7) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'codeine / value' subgroup of Yang_2024 (paper reports 2 populations: codeine / value, morphine / value)
- row roles (LLM): model_class=pbpk; 26/26 row label(s) assigned, 3 linked by role; re-tagged Codeine→parent ×19, Morphine→parent ×10, Codeine→Demethylcodeine ×1, Codeine→Morphine ×1, Codeine→Codeine-6-glucuronide ×1, Morphine→Codeine-6-glucuronide ×1
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table Yang_2024_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (21 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μM ([length]) | ['T1:row13:col1'] |
| C5_dimension_Q24 | fail | [length] ** 3 / [time] | /min (1 / [time]) | ['T1:row21:col1'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['T1:row19:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['T1:row20:col1'] |
| C5_dimension_Q307 | fail | [mass] / [time] | T ([mass]) | ['T1:row26:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['T1:row6:col1'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] | B/P | ['T1:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.88 | ['T1:row21:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['Kcat CYP2D6', 'Kcat CYP3A4', 'Kcat UGT2B7', 'Kcat UGT2B7'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcodeine%5D%20Codeine_Yang2024_codeine_value&body=Drug%3A%20codeine%0ARecord%3A%20Codeine_Yang2024_codeine_value%0APaper%3A%20Yang_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_codeine/Codeine_Yang2024_codeine_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 16:12 UTC</sub>
