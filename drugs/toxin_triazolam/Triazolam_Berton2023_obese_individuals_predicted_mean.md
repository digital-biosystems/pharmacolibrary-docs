<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Triazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_triazolam/&quot;},{&quot;label&quot;:&quot;Berton_2023 \u00b7 obese_individuals_predicted_mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Triazolam — `Triazolam_Berton2023_obese_individuals_predicted_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Triazolam" model-id="Triazolam_Berton2023_obese_individuals_predicted_mean" status="rejected" stale="false" population="Obese individuals (BMI &gt;= 30 kg/m2) and non-obese individuals" measured-compound="Triazolam" parameterization="mechanistic" topology="retention"></div>

## Citation
Berton M, Bettonte S, Stader F, Battegay M, Marzolini C. Physiologically Based Pharmacokinetic Modelling to Identify Physiological and Drug Parameters Driving Pharmacokinetics in Obese Individuals. Clinical pharmacokinetics 62(2):277–295 (2023).
  ·  DOI: [10.1007/s40262-022-01194-3](https://doi.org/10.1007/s40262-022-01194-3)

## Population and dosing

**Population:** Obese individuals (BMI &gt;= 30 kg/m2) and non-obese individuals · condition healthy · age group adult.

**Dosing:** 0.5, 5 mg, iv, single.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax ng/mL | Cmax | 16.5 | S.D. |
| t1/2 h | t1/2z | 326.8 | S.D. |
| theta_q17_cyp2d6 | theta_q17_cyp2d6 | 260 |  |
| theta_q17_cyp2c9 | theta_q17_cyp2c9 | 2818 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| Cmax ng/mL | `Q32` · Cmax | 16.5 | S.D. | s·d | exact (1) | Berton_2023_table_3:row2:col5, Berton_2023_table_3:row6:col5, Berton_2023_table_3:row10:col5, Berton_2023_table_3:row15:col5, Berton_2023_table_3:row19:col5, Berton_2023_table_3:row23:col5 |
| t1/2 h | `Q57` · t1/2z | 326.8 | S.D. | s·d | half_life_rule (0.95) | Berton_2023_table_3:row3:col5, Berton_2023_table_3:row7:col5, Berton_2023_table_3:row11:col5, Berton_2023_table_3:row16:col5, Berton_2023_table_3:row20:col5, Berton_2023_table_3:row24:col5 |
| theta_q17_cyp2d6 | `Q900` · theta_q17_cyp2d6 | 260 |  |  |  | Berton_2023_table_3:row12:col5 |
| theta_q17_cyp2c9 | `Q900` · theta_q17_cyp2c9 | 2818 |  |  |  | Berton_2023_table_3:row25:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax ng/mL' → Q32 (unit '[time] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 't1/2 h' → Q57 (unit '[time] ** 2' vs ontology '[time]') — route to review
- dropped value-less row: 'AUCinf'
- dropped value-less row: 'CYP'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'GFR'
- dropped value-less row: 'IVB'
- dropped value-less row: 'IVF'
- dropped value-less row: 'PO'
- dropped value-less row: 'SD'
- dropped value-less row: 'S.D.'
- dropped value-less row: 't1/2'
- dropped value-less row: 'UGT'
- covariate effect for Q17 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Triazolam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- pharmacogenetic covariate 'theta_q17_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q17_cyp2c9' (cyp2c9) — PGx domain
- status held at "Needs review" — not promoted
- population split: 'obese individuals: predicted mean' subgroup of Berton_2023 (paper reports 4 populations: non-obese individuals: observed mean, non-obese individuals: predicted mean, obese individuals: observed mean, obese individuals: predicted mean)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Berton_2023_table_3: unbound_uncertainty
- table Berton_2023_table_S1: unknown_column_role
- table Berton_2023_table_S1: missing_unit_binding
- table Berton_2023_table_S1: ragged_grid
- table Berton_2023_table_S1: unparsed_numeric_cell
- companion parameter table S1 transcribed (95 record(s))
- LLM selected parameter table(s) S1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | S.D. ([time] ** 2) | ['Berton_2023_table_3:row2:col5', 'Berton_2023_table_3:row6:col5', 'Berton_2023_table_3:row10:col5', 'Berton_2023_table_3:row15:col5', 'Berton_2023_table_3:row19:col5', 'Berton_2023_table_3:row23:col5'] |
| C5_dimension_Q57 | fail | [time] | S.D. ([time] ** 2) | ['Berton_2023_table_3:row3:col5', 'Berton_2023_table_3:row7:col5', 'Berton_2023_table_3:row11:col5', 'Berton_2023_table_3:row16:col5', 'Berton_2023_table_3:row20:col5', 'Berton_2023_table_3:row24:col5'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriazolam%5D%20Triazolam_Berton2023_obese_individuals_predicted_mean&body=Drug%3A%20triazolam%0ARecord%3A%20Triazolam_Berton2023_obese_individuals_predicted_mean%0APaper%3A%20Berton_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triazolam/Triazolam_Berton2023_obese_individuals_predicted_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:02 UTC</sub>
