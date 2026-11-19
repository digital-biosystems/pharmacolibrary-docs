<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Haloperidol&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/&quot;},{&quot;label&quot;:&quot;Pilla_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Franken2017_reference&quot;,&quot;label&quot;:&quot;Franken_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Franken2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Johnson2016_reference&quot;,&quot;label&quot;:&quot;Johnson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Johnson2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Holley1983_reference&quot;,&quot;label&quot;:&quot;Holley_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Holley1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_base&quot;,&quot;label&quot;:&quot;Li_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Haloperidol — `Haloperidol_Pilla2012_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q18 unit 0.06–0.10 (dimensionless) vs [mass] * [time] / [length] ** 3; Q18 unit 7.5–10.0 (dimensionless) vs [mass] * [time] / [length] ** 3; Q18 unit 7.5–10.0 (dimensionless) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Haloperidol" model-id="Haloperidol_Pilla2012_reference" status="rejected" stale="false" population="adult schizophrenic patients treated with antipsychotics (haloperidol among five drugs)" measured-compound="Haloperidol" parameterization="mechanistic" topology="1C"></div>

## Citation
Pilla Reddy V, Petersson KJ, Suleiman AA, Vermeulen A, Proost JH, Friberg LE. Pharmacokinetic-pharmacodynamic modeling of severity levels of extrapyramidal side effects with markov elements. CPT: pharmacometrics & systems pharmacology 1:e1 (2012).
  ·  DOI: [10.1038/psp.2012.9](https://doi.org/10.1038/psp.2012.9)

## Population and dosing

**Population:** adult schizophrenic patients treated with antipsychotics (haloperidol among five drugs) · condition schizophrenia, chronic oral antipsychotic therapy · age group adult · n = 2630.

**Dosing:** 2.5, 40 mg/day, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Steady-state exposure (linear model) ≤Day 16 | AUCSS | 0.263 | 0.06–0.10 |
| Steady-state exposure (linear model) ≤Day 16 | AUCSS | 2.4 | 7.5–10.0 |
| Steady-state exposure (linear model) ≤Day 16 | AUCSS | 0.0198 | 7.5–10.0 |
| Steady-state exposure (linear model) ≤Day 16 | AUCSS | 0.0089 | 7.5–10.0 |
| Steady-state exposure (linear model) ≤Day 16 | AUCSS | 0.0194 | 7.5–10.0 |
| CL (L/h) | CL | 29.31 | L/h |
| Vd (L) | V | 1260.0 | L |
| Ka (h -1 ) | kabs | 1.37 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q18 unit 0.06–0.10 (dimensionless) vs [mass] * [time] / [length] ** 3; Q18 unit 7.5–10.0 (dimensionless) vs [mass] * [time] / [length] ** 3; Q18 unit 7.5–10.0 (dimensionless) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (AUCSS, AUCSS, AUCSS and AUCSS), so that value has no SI equivalent. Extracted — haloperidol: AUCSS 0.263 0.06–0.10, AUCSS 2.4 7.5–10.0, CL 29.3 L/h, V 1.26e+03 L, kabs 1.37 h -1; Paliperidone: AUCSS 0.0198 7.5–10.0; Ziprasidone: AUCSS 0.0089 7.5–10.0; JNJ-37822681: AUCSS 0.0194 7.5–10.0.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Steady-state exposure (linear model) ≤Day 16 | `Q18` · AUCSS | 0.263 | 0.06–0.10 |  |  | 0.06-0.10 | llm_corrected (0.6) | Pilla_2012_table_2:row0:col1, Pilla_2012_table_2:row2:col1, Pilla_2012_table_2:row5:col1, Pilla_2012_table_2:row6:col1 |
| Steady-state exposure (linear model) ≤Day 16 | `Q18` · AUCSS | 2.4 | 7.5–10.0 |  |  | 7.5-10.0 | llm_corrected (0.6) | Pilla_2012_table_2:row7:col1 |
| Steady-state exposure (linear model) ≤Day 16 | `Q18` · AUCSS | 0.0198 | 7.5–10.0 |  |  | 7.5-10.0 | llm_corrected (0.6) | Pilla_2012_table_2:row8:col1 |
| Steady-state exposure (linear model) ≤Day 16 | `Q18` · AUCSS | 0.0089 | 7.5–10.0 |  |  | 7.5-10.0 | llm_corrected (0.6) | Pilla_2012_table_2:row9:col1 |
| Steady-state exposure (linear model) ≤Day 16 | `Q18` · AUCSS | 0.0194 | 7.5–10.0 |  |  | 7.5-10.0 | llm_corrected (0.6) | Pilla_2012_table_2:row10:col1 |
| CL (L/h) | `Q22` · CL | 29.31 | L/h | 8.142e-06 | m3/s | L/h | review_gapfill (0.7) | Franken_2017:review |
| Vd (L) | `Q61` · V | 1260.0 | L | 1.26 | m3 | L | review_gapfill (0.7) | Franken_2017:review |
| Ka (h -1 ) | `Q49` · kabs | 1.37 | h -1 | 0.0003806 | 1/s | 1/h | review_gapfill (0.7) | Johnson_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Steady-state exposure (linear model) ≤Day 16' → Q18 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'D2-receptor occupancy (Emax model) ≤Day 16' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Pilla_2012_table_2:row0:col3', 'Pilla_2012_table_2:row2:col3', 'Pilla_2012_table_2:row6:col3', 'Pilla_2012_table_2:row12:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Haloperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Franken_2017's review values (primary lacked it)
- gap-filled Q61 (V) from Franken_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Johnson_2016's review values (primary lacked it)

**Extraction notes:**
- table Pilla_2012_table_2: ambiguous_numeric_format
- table Pilla_2012_table_2: unparsed_numeric_cell
- transposed table Pilla_2012_table_2: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | 0.06–0.10 (dimensionless) | ['Pilla_2012_table_2:row0:col1', 'Pilla_2012_table_2:row2:col1', 'Pilla_2012_table_2:row5:col1', 'Pilla_2012_table_2:row6:col1'] |
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | 7.5–10.0 (dimensionless) | ['Pilla_2012_table_2:row7:col1'] |
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | 7.5–10.0 (dimensionless) | ['Pilla_2012_table_2:row8:col1'] |
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | 7.5–10.0 (dimensionless) | ['Pilla_2012_table_2:row9:col1'] |
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | 7.5–10.0 (dimensionless) | ['Pilla_2012_table_2:row10:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Franken_2017:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Johnson_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Franken_2017:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 29.31 | ['Franken_2017:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 29.3 L/h | ['Franken_2017:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.26e+03 L | ['Franken_2017:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhaloperidol%5D%20Haloperidol_Pilla2012_reference&body=Drug%3A%20haloperidol%0ARecord%3A%20Haloperidol_Pilla2012_reference%0APaper%3A%20Pilla_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_haloperidol/Haloperidol_Pilla2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:44 UTC</sub>
