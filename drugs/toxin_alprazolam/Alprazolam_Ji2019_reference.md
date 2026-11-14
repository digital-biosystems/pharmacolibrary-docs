<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Alprazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/&quot;},{&quot;label&quot;:&quot;Ji_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Yamamoto2019_reference&quot;,&quot;label&quot;:&quot;Yamamoto_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/Alprazolam_Yamamoto2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alprazolam — `Alprazolam_Ji2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Alprazolam" model-id="Alprazolam_Ji2019_reference" status="rejected" stale="false" population="100 virtual healthy adults (&quot;Sim-healthy volunteers&quot;)" measured-compound="Alprazolam" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ji B, Liu S, Xue Y, He X, Man VH, Xie XQ et al. Prediction of Drug-Drug Interactions Between Opioids and Overdosed Benzodiazepines Using Physiologically Based Pharmacokinetic (PBPK) Modeling and Simulation. Drugs in R&D 19(3):297–305 (2019).
  ·  DOI: [10.1007/s40268-019-00282-3](https://doi.org/10.1007/s40268-019-00282-3)

## Population and dosing

**Population:** 100 virtual healthy adults ("Sim-healthy volunteers") · condition healthy · age group adult · n = 100.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax ± SD (ng/mL) | Cmax | 33 | ng/mL |
| tmax ± SD (h) | tmax | 1.9 | h |
| AUC0–24h ± SD (ng·h/mL) | AUCt | 405.96 | ng·h/mL |
| Clearance | CL | 8.23 | L/h |
| absorption rate constant for the slow absorption component | kabs | 5.37 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax ± SD (ng/mL) | `Q32` · Cmax | 33 | ng/mL | 3.3e-05 | kg/m3 | ng/ml | llm_confirmed (0.6) | Ji_2019_table_1:row7:col3, Ji_2019_table_1:row8:col3 |
| tmax ± SD (h) | `Q56` · tmax | 1.9 | h | 6840 | s | h | llm_confirmed (0.6) | Ji_2019_table_1:row7:col4, Ji_2019_table_1:row8:col4 |
| AUC0–24h ± SD (ng·h/mL) | `Q19` · AUCt | 405.96 | ng·h/mL | 1.461 | kg*s/m3 | (h·ng)/ml | llm (0.6) | Ji_2019_table_1:row8:col2 |
| Clearance | `Q22` · CL | 8.23 | L/h | 2.286e-06 | m3/s | L/h | review_gapfill (0.7) | Klein_2026:review |
| absorption rate constant for the slow absorption component | `Q49` · kabs | 5.37 | h−1 | 0.001492 | 1/s | 1/h | review_gapfill (0.7) | Klein_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Cmax ± SD (ng/mL)'; source reconciliation required
- table representations disagree for 'tmax ± SD (h)'; source reconciliation required
- table representations disagree for 'AUC0–24h ± SD (ng·h/mL)'; source reconciliation required
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alprazolam
- topology: 2 first-order transfer(s) across 9 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/5 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for '1-hydroxyalprazolam' — its concentrations stay mass-only
- molar mass: none found for '4-hydroxyalprazolam' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Klein_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Klein_2026's review values (primary lacked it)

**Extraction notes:**
- transposed table Ji_2019_table_1: logical view retains original source coordinates
- table Tab1: representations disagree; selected evidence retained, not merged
- table Ji_2019_table_2: units_need_context
- transposed table Ji_2019_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (24 record(s))
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Ji_2019_table_1:row8:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Klein_2026:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ji_2019_table_1:row7:col3', 'Ji_2019_table_1:row8:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Klein_2026:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Ji_2019_table_1:row7:col4', 'Ji_2019_table_1:row8:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.23 | ['Klein_2026:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.23 L/h | ['Klein_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balprazolam%5D%20Alprazolam_Ji2019_reference&body=Drug%3A%20alprazolam%0ARecord%3A%20Alprazolam_Ji2019_reference%0APaper%3A%20Ji_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alprazolam/Alprazolam_Ji2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:15 UTC</sub>
