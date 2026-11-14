<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Triazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_triazolam/&quot;},{&quot;label&quot;:&quot;Chetty_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Triazolam — `Triazolam_Chetty2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Triazolam" model-id="Triazolam_Chetty2014_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="Triazolam" parameterization="apparent" topology="1C"></div>

## Citation
Chetty M, Rose RH, Abduljalil K, Patel N, Lu G, Cain T et al. Applications of linking PBPK and PD models to predict the impact of genotypic variability, formulation differences, differences in target binding capacity and target site drug concentrations on drug responses and variability. Frontiers in pharmacology 5:258 (2014).
  ·  DOI: [10.3389/fphar.2014.00258](https://doi.org/10.3389/fphar.2014.00258)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

**Dosing:** 10 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight | MW | 346.3 | g/mol |
| Blood:plasma | Kp | 0.685 |  |
| Fu plasma | fu | 0.039 |  |
| fa | Fab | 1 |  |
| ka | kabs | 3.67 | 1/h |
| Vss | Vss | 0.57 | L/kg |
| AUC (ug/L/h) | AUC | 273 | ug/L/h |
| Tmax (h) | tmax | 1 | h |
| Cmax (ug/L) | Cmax | 67 | ug/L |
| CL/F (L/h) | CL/F | 367 | L/h |
| theta_q1_cyp3a4 | theta_q1_cyp3a4 | 10.5 |  |
| theta_q66_cyp3a4 | theta_q66_cyp3a4 | 22 |  |
| theta_q1_cyp3a5 | theta_q1_cyp3a5 | 31.9 |  |
| theta_q66_cyp3a5 | theta_q66_cyp3a5 | 3.5 |  |
| theta_q329_category | theta_q329_category | 19 |  |
| theta_q330_category | theta_q330_category | 0.15 |  |

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
| Molecular weight | `Q374` · MW | 346.3 | g/mol | 0.3463 |  | g/(m·ol) | exact (1) | T2:row1:col1 |
| Blood:plasma | `Q410` · Kp | 0.685 |  |  |  |  | llm (0.6) | T2:row5:col1 |
| Fu plasma | `Q46` · fu | 0.039 |  | 0.039 |  |  | llm_confirmed (0.6) | T2:row6:col1 |
| fa | `Q40` · Fab | 1 |  | 1 |  |  | llm (0.6) | T2:row9:col1 |
| ka | `Q49` · kabs | 3.67 | 1/h | 0.001019 | 1/s | 1/h | exact (1) | T2:row10:col1 |
| Vss | `Q65` · Vss | 0.57 | L/kg | 0.0399 | m3 | l/kg | exact (1) | T2:row12:col1 |
| AUC (ug/L/h) | `Q88` · AUC | 273 | ug/L/h |  |  | µg/(h·l) | exact (1) | Chetty_2014_table_6:row2:col3, Chetty_2014_table_6:row2:col4, Chetty_2014_table_6:row2:col5, Chetty_2014_table_6:row2:col6, Chetty_2014_table_6:row2:col7, Chetty_2014_table_6:row2:col8, Chetty_2014_table_6:row2:col9 |
| Tmax (h) | `Q56` · tmax | 1 | h | 3600 | s | h | exact (1) | Chetty_2014_table_6:row3:col1, Chetty_2014_table_6:row3:col2, Chetty_2014_table_6:row3:col3, Chetty_2014_table_6:row3:col4, Chetty_2014_table_6:row3:col5, Chetty_2014_table_6:row3:col6, Chetty_2014_table_6:row3:col7, Chetty_2014_table_6:row3:col8, Chetty_2014_table_6:row3:col9 |
| Cmax (ug/L) | `Q32` · Cmax | 67 | ug/L | 6.7e-05 | kg/m3 | µg/l | exact (1) | Chetty_2014_table_6:row4:col1, Chetty_2014_table_6:row4:col2, Chetty_2014_table_6:row4:col3, Chetty_2014_table_6:row4:col4, Chetty_2014_table_6:row4:col5, Chetty_2014_table_6:row4:col6, Chetty_2014_table_6:row4:col7, Chetty_2014_table_6:row4:col8, Chetty_2014_table_6:row4:col9 |
| CL/F (L/h) | `Q27` · CL/F | 367 | L/h | 0.0001019 | m3/s | l/h | exact (1) | Chetty_2014_table_6:row5:col1, Chetty_2014_table_6:row5:col2, Chetty_2014_table_6:row5:col3, Chetty_2014_table_6:row5:col4, Chetty_2014_table_6:row5:col5, Chetty_2014_table_6:row5:col6, Chetty_2014_table_6:row5:col7, Chetty_2014_table_6:row5:col8, Chetty_2014_table_6:row5:col9 |
| theta_q1_cyp3a4 | `Q900` · theta_q1_cyp3a4 | 10.5 |  |  |  |  |  | T2:row14:col1 |
| theta_q66_cyp3a4 | `Q900` · theta_q66_cyp3a4 | 22 |  |  |  |  |  | T2:row15:col1 |
| theta_q1_cyp3a5 | `Q900` · theta_q1_cyp3a5 | 31.9 |  |  |  |  |  | T2:row16:col1 |
| theta_q66_cyp3a5 | `Q900` · theta_q66_cyp3a5 | 3.5 |  |  |  |  |  | T2:row17:col1 |
| theta_q329_category | `Q900` · theta_q329_category | 19 |  |  |  |  |  | T2:row22:col1 |
| theta_q330_category | `Q900` · theta_q330_category | 0.15 |  |  |  |  |  | T2:row23:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'pm / ratio' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'em / ratio' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'um / ratio' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'LogP' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1'])
- dropped 'CLR (renal clearance)' → Q26 = 0: a clearance of 0 is not a parameter value (source ['T2:row18:col1'])
- dropped PD-category row 'Baseline' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row24:col1'])
- dropped PD-category row 'slope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row25:col1'])
- unit_dimension_mismatch: 'AUC (ug/L/h)' → Q88 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Rmax (beat/min)' — extend the ontology if this is a real PK parameter (source ['Chetty_2014_table_6:row7:col1', 'Chetty_2014_table_6:row7:col2', 'Chetty_2014_table_6:row7:col3', 'Chetty_2014_table_6:row7:col4', 'Chetty_2014_table_6:row7:col5', 'Chetty_2014_table_6:row7:col6', 'Chetty_2014_table_6:row7:col7', 'Chetty_2014_table_6:row7:col8', 'Chetty_2014_table_6:row7:col9'])
- dropped unlinked row (NIL): 'Rmin (beat/min)' — extend the ontology if this is a real PK parameter (source ['Chetty_2014_table_6:row8:col1', 'Chetty_2014_table_6:row8:col2', 'Chetty_2014_table_6:row8:col3', 'Chetty_2014_table_6:row8:col4', 'Chetty_2014_table_6:row8:col5', 'Chetty_2014_table_6:row8:col6', 'Chetty_2014_table_6:row8:col7', 'Chetty_2014_table_6:row8:col8', 'Chetty_2014_table_6:row8:col9'])
- dropped unlinked row (NIL): 't(Rmin) (h)' — extend the ontology if this is a real PK parameter (source ['Chetty_2014_table_6:row9:col1', 'Chetty_2014_table_6:row9:col2', 'Chetty_2014_table_6:row9:col3', 'Chetty_2014_table_6:row9:col4', 'Chetty_2014_table_6:row9:col5', 'Chetty_2014_table_6:row9:col6', 'Chetty_2014_table_6:row9:col7', 'Chetty_2014_table_6:row9:col8', 'Chetty_2014_table_6:row9:col9'])
- unit_dimension_unknown: 'beat.h/min' (AUC)
- dropped duplicate Q88 ('AUC (beat.h/min)', value '308') — already have one for this compound
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q329 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q330 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Triazolam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- pharmacogenetic covariate 'theta_q1_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_q66_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp3a5' (cyp3a5) — PGx domain
- pharmacogenetic covariate 'theta_q66_cyp3a5' (cyp3a5) — PGx domain
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T2: missing_unit_binding
- table Chetty_2014_table_6: ambiguous_numeric_format
- table Chetty_2014_table_6: ragged_grid
- companion parameter table 6 transcribed (72 record(s))
- LLM selected parameter table(s) 3, 6
- phenotype-stratified table(s) 6 read with them

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Chetty_2014_table_6:row5:col1', 'Chetty_2014_table_6:row5:col2', 'Chetty_2014_table_6:row5:col3', 'Chetty_2014_table_6:row5:col4', 'Chetty_2014_table_6:row5:col5', 'Chetty_2014_table_6:row5:col6', 'Chetty_2014_table_6:row5:col7', 'Chetty_2014_table_6:row5:col8', 'Chetty_2014_table_6:row5:col9'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Chetty_2014_table_6:row4:col1', 'Chetty_2014_table_6:row4:col2', 'Chetty_2014_table_6:row4:col3', 'Chetty_2014_table_6:row4:col4', 'Chetty_2014_table_6:row4:col5', 'Chetty_2014_table_6:row4:col6', 'Chetty_2014_table_6:row4:col7', 'Chetty_2014_table_6:row4:col8', 'Chetty_2014_table_6:row4:col9'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['T2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row10:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Chetty_2014_table_6:row3:col1', 'Chetty_2014_table_6:row3:col2', 'Chetty_2014_table_6:row3:col3', 'Chetty_2014_table_6:row3:col4', 'Chetty_2014_table_6:row3:col5', 'Chetty_2014_table_6:row3:col6', 'Chetty_2014_table_6:row3:col7', 'Chetty_2014_table_6:row3:col8', 'Chetty_2014_table_6:row3:col9'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['T2:row12:col1'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | ug/L/h ([mass] / [length] ** 3 / [time]) | ['Chetty_2014_table_6:row2:col3', 'Chetty_2014_table_6:row2:col4', 'Chetty_2014_table_6:row2:col5', 'Chetty_2014_table_6:row2:col6', 'Chetty_2014_table_6:row2:col7', 'Chetty_2014_table_6:row2:col8', 'Chetty_2014_table_6:row2:col9'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 367 L/h | ['Chetty_2014_table_6:row5:col1', 'Chetty_2014_table_6:row5:col2', 'Chetty_2014_table_6:row5:col3', 'Chetty_2014_table_6:row5:col4', 'Chetty_2014_table_6:row5:col5', 'Chetty_2014_table_6:row5:col6', 'Chetty_2014_table_6:row5:col7', 'Chetty_2014_table_6:row5:col8', 'Chetty_2014_table_6:row5:col9'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 39.9 L | ['T2:row12:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriazolam%5D%20Triazolam_Chetty2014_reference&body=Drug%3A%20triazolam%0ARecord%3A%20Triazolam_Chetty2014_reference%0APaper%3A%20Chetty_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triazolam/Triazolam_Chetty2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:02 UTC</sub>
