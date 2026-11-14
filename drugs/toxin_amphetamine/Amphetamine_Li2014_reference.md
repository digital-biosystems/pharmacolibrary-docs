<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amphetamine&quot;,&quot;href&quot;:&quot;drugs/toxin_amphetamine/&quot;},{&quot;label&quot;:&quot;Li_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amphetamine_Honecker1975_reference&quot;,&quot;label&quot;:&quot;Honecker_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amphetamine/Amphetamine_Honecker1975_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Amphetamine — `Amphetamine_Li2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Amphetamine" model-id="Amphetamine_Li2014_reference" status="rejected" stale="false" population="rabbits" measured-compound="amphetamine" parameterization="apparent" topology="1C"></div>

## Citation
Li B, Wang Y, Zhang Y, Liu M. Effects of ethanol on the toxicokinetics of methamphetamine in rabbits. Iranian journal of pharmaceutical research : IJPR 13(1):329–336 (2014).

## Population and dosing

**Population:** rabbits · condition healthy · age group adult · n = 8.

**Dosed compound ≠ measured compound:** dosed methamphetamine hydrochloride, measured amphetamine.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 0.266 |  |
| V/F(c) ** | Vm/F | 37.774 | c |
| t1/2α | t1/2α | 2.637 |  |
| t1/2β** | t1/2β | 6.919 |  |
| t1/2ka | t1/2ka | 2.609 |  |
| K21 | k21 | 0.061 |  |
| K10** | kel | 0.150 |  |
| K12 | k12 | 0.086 |  |
| AUC0-30h ** | AUCt | 5.281 |  |
| CL* | CLm/F | 5.681 |  |
| Tmax | tmax | 4.151 |  |
| Cmax * | Cmax | 0.315 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 0.266 |  |  | exact (1) | Li_2014_table_p5_2:row0:col2, Li_2014_table_p5_2:row0:col3 |
| V/F(c) ** | `Q367` · Vm/F | 37.774 | c | c | llm_confirmed (0.6) | Li_2014_table_p5_2:row1:col2, Li_2014_table_p5_2:row1:col3 |
| t1/2α | `Q59` · t1/2α | 2.637 |  |  | half_life_rule (0.95) | Li_2014_table_p5_2:row2:col2, Li_2014_table_p5_2:row2:col3 |
| t1/2β** | `Q60` · t1/2β | 6.919 |  |  | half_life_rule (0.95) | Li_2014_table_p5_2:row3:col2, Li_2014_table_p5_2:row3:col3 |
| t1/2ka | `Q95` · t1/2ka | 2.609 |  |  | exact (1) | Li_2014_table_p5_2:row4:col2, Li_2014_table_p5_2:row4:col3 |
| K21 | `Q302` · k21 | 0.061 |  |  | exact (1) | Li_2014_table_p5_2:row5:col2, Li_2014_table_p5_2:row5:col3 |
| K10** | `Q47` · kel | 0.150 |  |  | llm_confirmed (0.6) | Li_2014_table_p5_2:row6:col2, Li_2014_table_p5_2:row6:col3 |
| K12 | `Q301` · k12 | 0.086 |  |  | exact (1) | Li_2014_table_p5_2:row7:col2, Li_2014_table_p5_2:row7:col3 |
| AUC0-30h ** | `Q19` · AUCt | 5.281 |  |  | llm (0.6) | Li_2014_table_p5_2:row8:col2, Li_2014_table_p5_2:row8:col3 |
| CL* | `Q351` · CLm/F | 5.681 |  |  | llm_confirmed (0.6) | Li_2014_table_p5_2:row9:col2, Li_2014_table_p5_2:row9:col3 |
| Tmax | `Q56` · tmax | 4.151 |  |  | exact (1) | Li_2014_table_p5_2:row10:col2, Li_2014_table_p5_2:row10:col3 |
| Cmax * | `Q32` · Cmax | 0.315 |  |  | llm_confirmed (0.6) | Li_2014_table_p5_2:row11:col2, Li_2014_table_p5_2:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V/F(c) **' → Q76 (unit '[length] / [time]' vs ontology '[length] ** 3') — route to review
- dropped value-less row: 'Table 4. Toxicokinetic parameters of AP after administration of MA alone or co-administration of MA and EtOH (n=8).﹡P﹤0.05,** P﹤0.01'
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 177 (char 176)) — units left missing
- metabolite amphetamine: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite amphetamine: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amphetamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/13 row label(s) assigned, 0 linked by role
- molar mass: none found for 'methamphetamine' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Li_2014_table_3: no_numeric_grid
- table Li_2014_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q367 | fail | [length] ** 3 | c ([length] / [time]) | ['Li_2014_table_p5_2:row1:col2', 'Li_2014_table_p5_2:row1:col3'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  | ['Li_2014_table_p5_2:row8:col2', 'Li_2014_table_p5_2:row8:col3'] |
| C5_unit_missing_Q301 | fail | 1 / [time] |  | ['Li_2014_table_p5_2:row7:col2', 'Li_2014_table_p5_2:row7:col3'] |
| C5_unit_missing_Q302 | fail | 1 / [time] |  | ['Li_2014_table_p5_2:row5:col2', 'Li_2014_table_p5_2:row5:col3'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Li_2014_table_p5_2:row11:col2', 'Li_2014_table_p5_2:row11:col3'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] |  | ['Li_2014_table_p5_2:row9:col2', 'Li_2014_table_p5_2:row9:col3'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['Li_2014_table_p5_2:row6:col2', 'Li_2014_table_p5_2:row6:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Li_2014_table_p5_2:row0:col2', 'Li_2014_table_p5_2:row0:col3'] |
| C5_unit_missing_Q56 | fail | [time] |  | ['Li_2014_table_p5_2:row10:col2', 'Li_2014_table_p5_2:row10:col3'] |
| C5_unit_missing_Q59 | fail | [time] |  | ['Li_2014_table_p5_2:row2:col2', 'Li_2014_table_p5_2:row2:col3'] |
| C5_unit_missing_Q60 | fail | [time] |  | ['Li_2014_table_p5_2:row3:col2', 'Li_2014_table_p5_2:row3:col3'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['Li_2014_table_p5_2:row4:col2', 'Li_2014_table_p5_2:row4:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamphetamine%5D%20Amphetamine_Li2014_reference&body=Drug%3A%20amphetamine%0ARecord%3A%20Amphetamine_Li2014_reference%0APaper%3A%20Li_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amphetamine/Amphetamine_Li2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 20:46 UTC</sub>
