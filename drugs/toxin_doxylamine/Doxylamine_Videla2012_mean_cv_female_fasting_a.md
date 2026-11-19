<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Doxylamine&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/&quot;},{&quot;label&quot;:&quot;Videla_2012 \u00b7 mean_cv_female_fasting_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxylamine_Balan2013_reference&quot;,&quot;label&quot;:&quot;Balan_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Balan2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxylamine_Friedman1989_reference&quot;,&quot;label&quot;:&quot;Friedman_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Friedman1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxylamine_Videla2012_mean_cv_fasting&quot;,&quot;label&quot;:&quot;Videla_2012_mean_cv_fasting&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fasting.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxylamine_Videla2012_mean_cv_fed&quot;,&quot;label&quot;:&quot;Videla_2012_mean_cv_fed&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_fed.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Doxylamine — `Doxylamine_Videla2012_mean_cv_female_fasting_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit h/mL ([time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q17 unit h/mL ([time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Doxylamine" model-id="Doxylamine_Videla2012_mean_cv_female_fasting_a" status="rejected" stale="false" population="healthy volunteers" measured-compound="doxylamine" parameterization="mechanistic" topology="retention"></div>

## Citation
Videla S, Lahjou M, Guibord P, Xu Z, Tolrà C, Encina G et al. Food effects on the pharmacokinetics of doxylamine hydrogen succinate 25 mg film-coated tablets: a single-dose, randomized, two-period crossover study in healthy volunteers. Drugs in R&D 12(4):217–225 (2012).
  ·  DOI: [10.2165/11641640-000000000-00000](https://doi.org/10.2165/11641640-000000000-00000)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 24.

**Dosing:** 25 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed doxylamine hydrogen succinate (doxylamine succinate 25 mg), measured doxylamine.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 125.16 | ng/mL |
| tmax (h) b | tmax | 2.00 | h |
| AUCt (ng • h/mL) | AUCt | 1867.11 | h/mL |
| AUC∞ (ng • h/mL) | AUC∞ | 1958.35 | h/mL |
| AUCt : AUC∞ (%) | AUC%ext | 95.94 | % |
| ke (h-1) | kel | 0.0561 | h-1 |
| t½ (h) | t1/2z | 13.13 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q19 unit h/mL ([time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q17 unit h/mL ([time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (AUCt and AUC∞), so that value has no SI equivalent. Extracted — doxylamine: Cmax 125 ng/mL, tmax 2 h, AUCt 1.87e+03 h/mL, AUC∞ 1.96e+03 h/mL, AUC%ext 95.9 %, kel 0.0561 h-1, t1/2z 13.1 h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 125.16 | ng/mL | 0.0001252 | kg/m3 | ng/ml | exact (1) | Videla_2012_table_3:row0:col4 |
| tmax (h) b | `Q56` · tmax | 2.00 | h | 7200 | s | h | llm_confirmed (0.6) | Videla_2012_table_3:row2:col4 |
| AUCt (ng • h/mL) | `Q19` · AUCt | 1867.11 | h/mL |  |  | h/ml | exact (1) | Videla_2012_table_3:row3:col4 |
| AUC∞ (ng • h/mL) | `Q17` · AUC∞ | 1958.35 | h/mL |  |  | h/ml | exact (1) | Videla_2012_table_3:row5:col4 |
| AUCt : AUC∞ (%) | `Q84` · AUC%ext | 95.94 | % | 0.9594 |  | % | llm_corrected (0.6) | Videla_2012_table_3:row7:col4 |
| ke (h-1) | `Q47` · kel | 0.0561 | h-1 | 1.558e-05 | 1/s | 1/h | exact (1) | Videla_2012_table_3:row8:col4 |
| t½ (h) | `Q57` · t1/2z | 13.13 | h | 4.727e+04 | s | h | half_life_rule (0.95) | Videla_2012_table_3:row9:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Table II. Standards for comparative bioavailability of doxylamine | Q40 | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('ln Cmax', value '4.8081') — already have one for this compound
- unit_dimension_mismatch: 'AUCt (ng • h/mL)' → Q19 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q19 ('ln AUCt', value '7.4848') — already have one for this compound
- unit_dimension_mismatch: 'AUC∞ (ng • h/mL)' → Q17 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q17 ('ln AUC∞', value '7.5264') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxylamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'mean [cv (%)] female (n = 11) fasting a' subgroup of Videla_2012 (paper reports 8 populations: geometric ls mean fasting, geometric ls mean fed, mean [cv (%)] fastingᵃ, mean [cv (%)] fedᵃ, mean [cv (%)] female (n = 11) fasting a, mean [cv (%)] female (n = 11) fed, mean [cv (%)] male (n = 12) fasting a, mean [cv (%)] male (n = 12) fed)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1, 2, 3
- table Videla_2012_table_2: unbound_uncertainty
- table Videla_2012_table_2: units_need_context

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | h/mL ([time] / [length] ** 3) | ['Videla_2012_table_3:row5:col4'] |
| C5_dimension_Q19 | fail | [mass] * [time] / [length] ** 3 | h/mL ([time] / [length] ** 3) | ['Videla_2012_table_3:row3:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Videla_2012_table_3:row0:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Videla_2012_table_3:row8:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Videla_2012_table_3:row2:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Videla_2012_table_3:row9:col4'] |
| C5_dimension_Q84 | pass | dimensionless |  | ['Videla_2012_table_3:row7:col4'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxylamine%5D%20Doxylamine_Videla2012_mean_cv_female_fasting_a&body=Drug%3A%20doxylamine%0ARecord%3A%20Doxylamine_Videla2012_mean_cv_female_fasting_a%0APaper%3A%20Videla_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_doxylamine/Doxylamine_Videla2012_mean_cv_female_fasting_a%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 04:10 UTC</sub>
