<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Capecitabine&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/&quot;},{&quot;label&quot;:&quot;Siegel-Lakhai_2008 \u00b7 capecitabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Gruber2018_reference&quot;,&quot;label&quot;:&quot;Gruber_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Gruber2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_OyagaIriarte2019_reference&quot;,&quot;label&quot;:&quot;Oyaga-Iriarte_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_OyagaIriarte2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Capecitabine — `Capecitabine_SiegelLakhai2008_capecitabine`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Capecitabine" model-id="Capecitabine_SiegelLakhai2008_capecitabine" status="rejected" stale="false" population="patients with solid tumours" measured-compound="Capecitabine" parameterization="mechanistic" topology="retention"></div>

## Citation
Siegel-Lakhai WS, Zandvliet AS, Huitema AD, Tibben MM, Milano G, Girre V et al. A dose-escalation study of indisulam in combination with capecitabine (Xeloda) in patients with solid tumours. British journal of cancer 98(8):1320-1326 (2008).
  ·  DOI: [10.1038/sj.bjc.6604300](https://doi.org/10.1038/sj.bjc.6604300)

## Population and dosing

**Population:** patients with solid tumours · condition solid tumours · age group adult · n = 33.

**Dosing:** 350, 500, 600, 700, 800 mg/m2, iv, multiple, every 504 h.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| number_of_patients_evaluable_for_pk_assessment | number_of_patients_evaluable_for_pk_assessment | 32 |  |
| number_of_curves_evaluable_for_pk_assessment | number_of_curves_evaluable_for_pk_assessment | 40 |  |
| Absorption rate constant of capecitabine (h⁻¹) meanᵇ | kabs | 5.27 | h⁻¹ |
| Absorption lag time of capecitabine (h) meanᵇ | tlag | 0.57 | h |
| Terminal half-life (h) meanᵇ | t1/2z | 0.73 | h |
| AUC (mg l⁻¹ h⁻¹) meanᵇ | AUC | 7.71 | mg l⁻¹ h⁻¹ |
| Normalized AUCᶜ (mg l⁻¹ h⁻¹) meanᵇ | AUC/dose | 6.67 | mg l⁻¹ h⁻¹ |
| Cltot | CL | 5.51 | l/h |
| Vd | V | 97.86 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| number_of_patients_evaluable_for_pk_assessment | `Q900` · number_of_patients_evaluable_for_pk_assessment | 32 |  |  |  |  |  | Siegel-Lakhai_2008_table_6:row0:col1 |
| number_of_curves_evaluable_for_pk_assessment | `Q900` · number_of_curves_evaluable_for_pk_assessment | 40 |  |  |  |  |  | Siegel-Lakhai_2008_table_6:row1:col1 |
| Absorption rate constant of capecitabine (h⁻¹) meanᵇ | `Q49` · kabs | 5.27 | h⁻¹ | 0.001464 | 1/s | 1/h | llm_confirmed (0.6) | Siegel-Lakhai_2008_table_6:row4:col1 |
| Absorption lag time of capecitabine (h) meanᵇ | `Q83` · tlag | 0.57 | h | 2052 | s | h | llm_confirmed (0.6) | Siegel-Lakhai_2008_table_6:row8:col1 |
| Terminal half-life (h) meanᵇ | `Q57` · t1/2z | 0.73 | h | 2628 | s | h | llm (0.6) | Siegel-Lakhai_2008_table_6:row12:col1 |
| AUC (mg l⁻¹ h⁻¹) meanᵇ | `Q88` · AUC | 7.71 | mg l⁻¹ h⁻¹ |  |  | mg/(h·l) | llm_confirmed (0.6) | Siegel-Lakhai_2008_table_6:row14:col1 |
| Normalized AUCᶜ (mg l⁻¹ h⁻¹) meanᵇ | `Q189` · AUC/dose | 6.67 | mg l⁻¹ h⁻¹ |  |  | mg/(h·l) | llm (0.6) | Siegel-Lakhai_2008_table_6:row15:col1 |
| Cltot | `Q22` · CL | 5.51 | l/h | 1.531e-06 | m3/s | L/h | review_gapfill (0.7) | Gruber_2018:review |
| Vd | `Q61` · V | 97.86 | l | 0.09786 | m3 | L | review_gapfill (0.7) | Gruber_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Number of patients evaluable for PK assessment' → Q900:number_of_patients_evaluable_for_pk_assessment = 32 (additive_shift on the model)
- covariate level 'Number of curves evaluable for PK assessmentᵃ' → Q900:number_of_curves_evaluable_for_pk_assessment = 40 (additive_shift on the model)
- dropped unlinked row (NIL): 'Number of curves fitted to a 1-compartment model' — extend the ontology if this is a real PK parameter (source ['Siegel-Lakhai_2008_table_6:row2:col1'])
- dropped unlinked row (NIL): 'Number of curves fitted to a 2-compartment model' — extend the ontology if this is a real PK parameter (source ['Siegel-Lakhai_2008_table_6:row3:col1'])
- dropped 'Absorption rate constant of capecitabine (h⁻¹) CVᵇ (%)' → Q49: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a rate — the row is a variability or a ratio, not the estimate
- dropped 'Absorption lag time of capecitabine (h) CVᵇ (%)' → Q83: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a time — the row is a variability or a ratio, not the estimate
- dropped 'Terminal half-life (h) CVᵇ (%)' → Q57: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a time — the row is a variability or a ratio, not the estimate
- unit_dimension_mismatch: 'AUC (mg l⁻¹ h⁻¹) meanᵇ' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Normalized AUCᶜ (mg l⁻¹ h⁻¹) meanᵇ' → Q189 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Normalized AUCᶜ (mg l⁻¹ h⁻¹) CVᵇ (%)' — extend the ontology if this is a real PK parameter (source ['Siegel-Lakhai_2008_table_6:row16:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Capecitabine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'capecitabine' subgroup of Siegel-Lakhai_2008 (paper reports 2 populations: 3 and 7, capecitabine)
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 24 linked by role; re-tagged Capecitabine→parent ×9, 5'-DFUR→5'-DFCR ×4, 5-FU→5'-DFCR ×4, 5'-DFCR→parent ×5, 5'-DFUR→parent ×5, 5-FU→parent ×5
- gap-filled Q22 (CL) from Gruber_2018's review values (primary lacked it)
- gap-filled Q61 (V) from Gruber_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Siegel-Lakhai_2008_table_4: unknown_column_role
- table Siegel-Lakhai_2008_table_4: units_need_context
- companion parameter table 4 transcribed (35 record(s))
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q189 | fail | [mass] * [time] / [length] ** 3 | mg l⁻¹ h⁻¹ ([mass] / [length] ** 3 / [time]) | ['Siegel-Lakhai_2008_table_6:row15:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Gruber_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Siegel-Lakhai_2008_table_6:row4:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Siegel-Lakhai_2008_table_6:row12:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Gruber_2018:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Siegel-Lakhai_2008_table_6:row8:col1'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | mg l⁻¹ h⁻¹ ([mass] / [length] ** 3 / [time]) | ['Siegel-Lakhai_2008_table_6:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.51 | ['Gruber_2018:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.51 L/h | ['Gruber_2018:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 97.9 L | ['Gruber_2018:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_SiegelLakhai2008_capecitabine&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_SiegelLakhai2008_capecitabine%0APaper%3A%20Siegel-Lakhai_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_capecitabine/Capecitabine_SiegelLakhai2008_capecitabine%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:34 UTC</sub>
