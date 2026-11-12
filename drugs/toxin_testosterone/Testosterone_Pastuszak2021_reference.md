<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Testosterone&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/&quot;},{&quot;label&quot;:&quot;Pastuszak_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Testosterone_Bi2018_bootstrapa_median&quot;,&quot;label&quot;:&quot;Bi_2018_bootstrapa_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Bi2018_bootstrapa_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Testosterone_Bi2018_final_model_estimate&quot;,&quot;label&quot;:&quot;Bi_2018_final_model_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Bi2018_final_model_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Testosterone_Torne2007_reference&quot;,&quot;label&quot;:&quot;Torn\u00f8e_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Torne2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Testosterone — `Testosterone_Pastuszak2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Absorption and elimination rate constants were assigned liter-per-hour units, conflicting with their required time-inverse dimensions.

<div class="pk-model-meta" hidden drug="Testosterone" model-id="Testosterone_Pastuszak2021_reference" status="rejected" stale="false" population="men with hypogonadism" measured-compound="Testosterone" parameterization="apparent" topology="1C"></div>

## Citation
Pastuszak AW, Bush M, Curd L, Vijayan S, Priestley T, Xiang Q et al. Population Pharmacokinetic Modeling and Simulations to Evaluate a Potential Dose Regimen of Testosterone Undecanoate in Hypogonadal Males. Journal of clinical pharmacology 61(12):1618-1625 (2021).
  ·  DOI: [10.1002/jcph.1939](https://doi.org/10.1002/jcph.1939)

## Population and dosing

**Population:** men with hypogonadism · condition hypogonadism · age group adult · n = 117.

**Dosing:** 750 mg, im, multiple, every 720 h.

**Dosed compound ≠ measured compound:** dosed Testosterone Undecanoate, measured Testosterone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F, L/h | CLm/F | 197 | L/h | 6.9 |
| Ka, L/h | kabs | 0.001 | L/h | 8.6 |
| K1, L/h | kel | 10 | L/h |  |
| theta_cl_f_weight_power | theta_cl_f_weight_power | -0.219 |  | 17.9 |
| theta_q76_weight_power | theta_q76_weight_power | 1.0 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absorption and elimination rate constants were assigned liter-per-hour units, conflicting with their required time-inverse dimensions.**

The absorption rate constant and elimination rate constant are both recorded with a unit of L/h. These parameters are rate constants that physically require dimensions of inverse time, such as per hour. The dimension mismatch between the recorded volume-over-time unit and the required rate dimension caused the record to be rejected. Extracted — testosterone: CLm/F 197 L/h, kabs 0.001 L/h, kel 10 L/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q351` · CLm/F | 197 | L/h | 5.472e-05 | m3/s | l/h | 6.9 | exact (1) | jcph1939-tbl-0002:row2:col1 |
| Ka, L/h | `Q49` · kabs | 0.001 | L/h |  |  | l/h | 8.6 | exact (1) | jcph1939-tbl-0002:row4:col1 |
| K1, L/h | `Q47` · kel | 10 | L/h |  |  | l/h |  | exact (1) | jcph1939-tbl-0002:row7:col1 |
| theta_cl_f_weight_power | `Q900` · theta_cl_f_weight_power | -0.219 |  |  |  |  | 17.9 |  | jcph1939-tbl-0002:row10:col1 |
| theta_q76_weight_power | `Q900` · theta_q76_weight_power | 1.0 |  |  |  |  |  |  | jcph1939-tbl-0002:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Ka, L/h' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Rb, mg/h' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row5:col1'])
- dropped unlinked row (NIL): 'Rss, mg/h' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row6:col1'])
- unit_dimension_mismatch: 'K1, L/h' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'K2, L/h' → Q47 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('K2, L/h', value '0.000727') — already have one for this compound
- dropped unlinked row (NIL): 'Weight, CL/F (power)' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row9:col1'])
- dropped unlinked row (NIL): 'Weight, Ka (power)' — extend the ontology if this is a real PK parameter (source ['jcph1939-tbl-0002:row11:col1'])
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- metabolite testosterone: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Testosterone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 4 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table jcph1939-tbl-0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['jcph1939-tbl-0002:row2:col1'] |
| C5_dimension_Q47 | fail | 1 / [time] | L/h ([length] ** 3 / [time]) | ['jcph1939-tbl-0002:row7:col1'] |
| C5_dimension_Q49 | fail | 1 / [time] | L/h ([length] ** 3 / [time]) | ['jcph1939-tbl-0002:row4:col1'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D%20Testosterone_Pastuszak2021_reference&body=Drug%3A%20testosterone%0ARecord%3A%20Testosterone_Pastuszak2021_reference%0APaper%3A%20Pastuszak_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_testosterone/Testosterone_Pastuszak2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 02:32 UTC</sub>
