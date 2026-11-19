<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Doxepin&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/&quot;},{&quot;label&quot;:&quot;Seok_2026 \u00b7 input_value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxepin_Faulkner1984_reference&quot;,&quot;label&quot;:&quot;Faulkner_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Faulkner1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Sutherland1987_reference&quot;,&quot;label&quot;:&quot;Sutherland_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Sutherland1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Virtanen1980_reference&quot;,&quot;label&quot;:&quot;Virtanen_1980_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Virtanen1980_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Faulkner1983_reference&quot;,&quot;label&quot;:&quot;Faulkner_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Faulkner1983_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Ziegler1978_reference&quot;,&quot;label&quot;:&quot;Ziegler_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Ziegler1978_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Doxepin — `Doxepin_Seok2026_input_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Doxepin's tissue partition coefficient has invalid permeability units, metabolite volumes use permeability values, and the metabolite lacks a dose path.

<div class="pk-model-meta" hidden drug="Doxepin" model-id="Doxepin_Seok2026_input_value" status="rejected" stale="false" population="non-genotyped and CYP2D6-genotyped populations (adults)" measured-compound="Doxepin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Seok J, Kang N, Lee JJ, Cho CK, Lee YJ. PBPK modeling of the antidepressant doxepin incorporating CYP2D6 genotype for precision pharmacotherapy. Archives of pharmacal research 49(2):278–291 (2026).
  ·  DOI: [10.1007/s12272-026-01600-5](https://doi.org/10.1007/s12272-026-01600-5)

## Population and dosing

**Population:** non-genotyped and CYP2D6-genotyped populations (adults) · condition healthy · age group adult.

**Dosing:** 75 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 265.35 | g/mol |
| fu (%) | fu | 20 | % |
| Specific organpermeability (cm/min) | Kp | 0.30 | cm/min |
| f u (%) | fu | 21 | % |
| Specific organ permeability (cm/min) | V2 | 0.33 | cm/min |
| Total hepatic clearance (L/min) | CLH | 2.50 | L/min |
| theta_q1_cyp2c19 | theta_q1_cyp2c19 | 5 |  |
| theta_q1_cyp2d6 | theta_q1_cyp2d6 | 8 |  |
| theta_q47_cyp2d6 | theta_q47_cyp2d6 | 299 |  |
| theta_q1_cyp2d6 | theta_q1_cyp2d6 | 40 |  |
| theta_q47_cyp2d6 | theta_q47_cyp2d6 | 165 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Doxepin's tissue partition coefficient has invalid permeability units, metabolite volumes use permeability values, and the metabolite lacks a dose path.**

The parent doxepin's tissue-to-plasma partition coefficient is assigned a permeability unit (cm/min) instead of being dimensionless. The metabolite N-desmethyldoxepin's peripheral volume uses a permeability value (0.33 cm/min) rather than a volume unit. Additionally, the metabolite is structurally unreachable from the administered dose, and a parameter's unit could not be standardized to SI. Extracted — doxepin: MW 265 g/mol, fu 20 %, Kp 0.3 cm/min, CLH 2.5 L/min; N-desmethyldoxepin: fu 21 %, V2 0.33 cm/min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 265.35 | g/mol | 0.2654 |  | g/(m·ol) | exact (1) | Tab2:row2:col2, Seok_2026_table_3:row1:col2 |
| fu (%) | `Q46` · fu | 20 | % | 0.2 |  | % | exact (1) | Tab2:row6:col2 |
| Specific organpermeability (cm/min) | `Q410` · Kp | 0.30 | cm/min |  |  | cm/min | llm (0.6) | Tab2:row11:col2 |
| f u (%) | `Q46` · fu | 21 | % | 0.21 |  | % | space_fold (0.95) | Seok_2026_table_3:row4:col2 |
| Specific organ permeability (cm/min) | `Q64` · V2 | 0.33 | cm/min |  |  | cm/min | exact (1) | Seok_2026_table_3:row9:col2 |
| Total hepatic clearance (L/min) | `Q25` · CLH | 2.50 | L/min | 4.167e-05 | m3/s | l/min | llm_confirmed (0.6) | Seok_2026_table_3:row17:col2 |
| theta_q1_cyp2c19 | `Q900` · theta_q1_cyp2c19 | 5 |  |  |  |  |  | Tab2:row13:col2 |
| theta_q1_cyp2d6 | `Q900` · theta_q1_cyp2d6 | 8 |  |  |  |  |  | Tab2:row15:col2 |
| theta_q47_cyp2d6 | `Q900` · theta_q47_cyp2d6 | 299 |  |  |  |  |  | Tab2:row18:col2 |
| theta_q1_cyp2d6 | `Q900` · theta_q1_cyp2d6 | 40 |  |  |  |  |  | Seok_2026_table_3:row11:col2 |
| theta_q47_cyp2d6 | `Q900` · theta_q47_cyp2d6 | 165 |  |  |  |  |  | Seok_2026_table_3:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Log P' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col2', 'Seok_2026_table_3:row2:col2'])
- unit_dimension_mismatch: 'Specific organpermeability (cm/min)' → Q410 (unit '[length] / [time]' vs ontology 'dimensionless') — route to review
- dropped unlinked row (NIL): 'CYP2C19 kcat (1/min)' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2'])
- dropped unlinked row (NIL): 'Dissolution time (min)' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): 'Dissolution shape' — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col2'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Seok_2026_table_3:row3:col2'])
- dropped unlinked row (NIL): 'Solubility (mg/L)' — extend the ontology if this is a real PK parameter (source ['Seok_2026_table_3:row5:col2'])
- unit_dimension_mismatch: 'Specific organ permeability (cm/min)' → Q64 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q47 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Doxepin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- pharmacogenetic covariate 'theta_q1_cyp2c19' (cyp2c19) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q47_cyp2d6' (cyp2d6) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'input value' subgroup of Seok_2026 (paper reports 2 populations: input value, reference value)
- row roles: per-genotype parameters — typical value from the reference group: CYP2D6 kcat (1/min), NM, CYP2D6 k cat (1/min), NM
- row roles (LLM): model_class=pbpk; 25/25 row label(s) assigned, 5 linked by role; re-tagged Doxepin→parent ×17, Doxepin→N-desmethyldoxepin ×6
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: unbound_uncertainty
- table Tab2: unparsed_numeric_cell
- table Seok_2026_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (16 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['Seok_2026_table_3:row17:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tab2:row2:col2', 'Seok_2026_table_3:row1:col2'] |
| C5_dimension_Q410 | fail | dimensionless | cm/min ([length] / [time]) | ['Tab2:row11:col2'] |
| C5_dimension_Q64 | fail | [length] ** 3 | cm/min ([length] / [time]) | ['Seok_2026_table_3:row9:col2'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxepin%5D%20Doxepin_Seok2026_input_value&body=Drug%3A%20doxepin%0ARecord%3A%20Doxepin_Seok2026_input_value%0APaper%3A%20Seok_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_doxepin/Doxepin_Seok2026_input_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 07:00 UTC</sub>
