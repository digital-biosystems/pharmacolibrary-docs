<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Bibi_2024 \u00b7 50_mg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Bibi2024_50_mg`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span>

> Risperidone's volume of distribution (0.2 mL/kg) is unphysiologically low, and the 9-OH-risperidone metabolite is disconnected from the dose.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Bibi2024_50_mg" status="rejected" stale="false" population="beagle dogs; American healthy adults" measured-compound="Risperidone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Bibi D, Bilgraer R, Steiner L, Hallak H. Physiologically-Based Pharmacokinetic Modeling and In Vitro-In Vivo Correlation of TV-46000 (Risperidone LAI): Prediction from Dog to Human. Pharmaceutics 16(7) (2024).
  ·  DOI: [10.3390/pharmaceutics16070896](https://doi.org/10.3390/pharmaceutics16070896)

## Population and dosing

**Population:** beagle dogs; American healthy adults · condition healthy · age group adult.

**Dosing:** 140, 490, 1400, 3500 mg, sc, multiple, every 720 h.

**Dosed compound ≠ measured compound:** dosed TV-46000 (Risperidone LAI), measured Risperidone.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Time lag (h) | tlag | 0.090 | h |
| Phase 1—fraction | FG | 0.197 |  |
| Phase 2—time scale | equation variable | 2745.8 |  |
| Phase 3—fraction | Fab | 0.436 |  |
| CLbv | CL | 0.312 | L/h/kg |
| apical compartment volume | V | 0.2 | mL |
| KaSC-RIS | kabs | 2.84 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.90).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Risperidone's volume of distribution (0.2 mL/kg) is unphysiologically low, and the 9-OH-risperidone metabolite is disconnected from the dose.**

The extracted volume of distribution for Risperidone is 0.2 mL/kg, a value orders of magnitude smaller than physiological limits, indicating a severe unit or scale extraction error. Additionally, the metabolite 9-OH-risperidone is listed with zero compartments and no defined formation link, rendering it an orphan species unreachable from the administered drug. Extracted — risperidone: tlag 0.09 h, FG 0.197, Fab 0.436, CL 0.312 L/h/kg, V 0.2 mL, kabs 2.84 1/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Time lag (h) | `Q83` · tlag | 0.090 | h | 324 | s | h | llm (0.6) | pharmaceutics-16-00896-t007:row1:col1 |
| Phase 1—fraction | `Q41` · FG | 0.197 |  | 0.197 |  |  | llm (0.6) | pharmaceutics-16-00896-t007:row3:col1 |
| Phase 2—time scale | `Q900` · equation variable | 2745.8 |  | 2746 |  |  | llm (0.6) | pharmaceutics-16-00896-t007:row7:col1 |
| Phase 3—fraction | `Q40` · Fab | 0.436 |  | 0.436 |  |  | llm (0.6) | pharmaceutics-16-00896-t007:row9:col1 |
| CLbv | `Q22` · CL | 0.312 | L/h/kg | 6.067e-06 | m3/s | L/h | review_gapfill (0.7) | Kozielska_2012:review |
| apical compartment volume | `Q61` · V | 0.2 | mL | 2e-07 | m3 | L | review_gapfill (0.7) | Chothe_2025:review |
| KaSC-RIS | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | review_gapfill (0.7) | Kozielska_2012:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Total released (%)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-16-00896-t007:row2:col1'])
- dropped unlinked row (NIL): 'Phase 1—time scale' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-16-00896-t007:row4:col1'])
- dropped PD-category row 'Phase 1—shape' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-16-00896-t007:row5:col1'])
- dropped unlinked row (NIL): 'Phase 2—fraction' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-16-00896-t007:row6:col1'])
- dropped PD-category row 'Phase 2—shape' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-16-00896-t007:row8:col1'])
- dropped unlinked row (NIL): 'Phase 3—time scale' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-16-00896-t007:row10:col1'])
- dropped PD-category row 'Phase 3—shape' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-16-00896-t007:row11:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Risperidone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: '50 mg' subgroup of Bibi_2024 (paper reports 4 populations: 225 mg, 50 mg, observed value, predicted value)
- row roles: 12 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=pbpk; 13/13 row label(s) assigned, 2 linked by role; re-tagged TV-46000→parent ×22
- gap-filled Q22 (CL) from Kozielska_2012's review values (primary lacked it)
- gap-filled Q61 (V) from Chothe_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kozielska_2012's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 6 transcribed (12 record(s))
- LLM selected parameter table(s) 6, 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chothe_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-16-00896-t007:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.312 | ['Kozielska_2012:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['Weibull release parameters'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.8 L/h | ['Kozielska_2012:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Chothe_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Bibi2024_50_mg&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Bibi2024_50_mg%0APaper%3A%20Bibi_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Bibi2024_50_mg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
