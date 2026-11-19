<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cobaltous chloride&quot;,&quot;href&quot;:&quot;drugs/toxin_cobaltous_chloride/&quot;},{&quot;label&quot;:&quot;Burns_2018 \u00b7 horse_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CobaltousChloride_AyalaFierro1999_reference&quot;,&quot;label&quot;:&quot;Ayala-Fierro_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cobaltous_chloride/CobaltousChloride_AyalaFierro1999_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cobaltous chloride — `CobaltousChloride_Burns2018_horse_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> Rejection stems from unit mismatches where time units incorrectly label dimensionless ratios and mass-volume concentrations, plus unconvertible units blocking SI assignment.

<div class="pk-model-meta" hidden drug="Cobaltous chloride" model-id="CobaltousChloride_Burns2018_horse_1" status="rejected" stale="false" population="Standardbred mares" measured-compound="cobalt" parameterization="mechanistic" topology="retention"></div>

## Citation
Burns TA, Dembek KA, Kamr A, Dooley SB, Dunbar LK, Aarnes TK et al. Effect of Intravenous Administration of Cobalt Chloride to Horses on Clinical and Hemodynamic Variables. Journal of veterinary internal medicine 32(1):441–449 (2018).
  ·  DOI: [10.1111/jvim.15029](https://doi.org/10.1111/jvim.15029)

## Population and dosing

**Population:** Standardbred mares · condition healthy · age group adult · n = 5.

**Dosing:** 17.5, 35, 70, 140, 280 mg, iv, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed Cobalt chloride, measured cobalt.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Lambda_z | kel | 0.003 | h |
| HL_Lambda_z | t1/2z | 235 | h |
| AUC_%Extrap_obs | AUC%ext | 0.12 | h |
| C min | Cmin | 738 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejection stems from unit mismatches where time units incorrectly label dimensionless ratios and mass-volume concentrations, plus unconvertible units blocking SI assignment.**

The terminal half-life and extrapolation percentage are marked as time, contradicting their dimensionless nature. The minimum concentration is labeled with time rather than mass per volume. Additionally, a reported unit could not be converted to standard SI units, leaving that parameter without a valid numeric value. Extracted — cobaltous chloride: kel 0.003 h, t1/2z 235 h, AUC%ext 0.12 h, Cmin 738 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Lambda_z | `Q47` · kel | 0.003 | h |  |  | h | exact (1) | jvim15029-tbl-0003:row3:col2 |
| HL_Lambda_z | `Q57` · t1/2z | 235 | h | 8.46e+05 | s | h | llm (0.6) | jvim15029-tbl-0003:row4:col2 |
| AUC_%Extrap_obs | `Q84` · AUC%ext | 0.12 | h |  |  | h | llm (0.6) | jvim15029-tbl-0003:row10:col2 |
| C min | `Q36` · Cmin | 738 | h |  |  | h | space_fold (0.95) | jvim15029-tbl-0003:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Parameter | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'R 2' — extend the ontology if this is a real PK parameter (source ['jvim15029-tbl-0003:row2:col2'])
- unit_dimension_mismatch: 'Lambda_z' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'C last' — extend the ontology if this is a real PK parameter (source ['jvim15029-tbl-0003:row7:col2'])
- unit_dimension_mismatch: 'AUC_%Extrap_obs' → Q84 (unit '[time]' vs ontology 'dimensionless') — route to review
- dropped unlinked row (NIL): 'T min' — extend the ontology if this is a real PK parameter (source ['jvim15029-tbl-0003:row11:col2'])
- unit_dimension_mismatch: 'C min' → Q36 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Fluctuation%' — extend the ontology if this is a real PK parameter (source ['jvim15029-tbl-0003:row14:col2'])
- dropped unlinked row (NIL): 'Accumulation_Index' — extend the ontology if this is a real PK parameter (source ['jvim15029-tbl-0003:row19:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cobalt
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'horse 1' subgroup of Burns_2018 (paper reports 10 populations: horse 1, horse 2, horse 3, horse 4, horse 5, week 1, week 2, week 3, week 4, week 5)
- row roles: 5 per-group rows of cobalt other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 6 linked by role
- review gap-fill skipped: this record measures 'cobalt', not cobaltous_chloride — the review values are the parent's

**Extraction notes:**
- table jvim15029-tbl-0003: unparsed_numeric_cell
- table Burns_2018_table_3: units_need_context
- companion parameter table 3 transcribed (25 record(s))
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q36 | fail | [mass] / [length] ** 3 | h ([time]) | ['jvim15029-tbl-0003:row12:col2'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['jvim15029-tbl-0003:row3:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['jvim15029-tbl-0003:row4:col2'] |
| C5_dimension_Q84 | fail | dimensionless | h ([time]) | ['jvim15029-tbl-0003:row10:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcobaltous_chloride%5D%20CobaltousChloride_Burns2018_horse_1&body=Drug%3A%20cobaltous_chloride%0ARecord%3A%20CobaltousChloride_Burns2018_horse_1%0APaper%3A%20Burns_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cobaltous_chloride/CobaltousChloride_Burns2018_horse_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 15:44 UTC</sub>
