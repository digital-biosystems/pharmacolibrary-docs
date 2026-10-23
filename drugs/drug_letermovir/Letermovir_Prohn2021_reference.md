<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;letermovir&quot;,&quot;href&quot;:&quot;drugs/drug_letermovir/&quot;},{&quot;label&quot;:&quot;Prohn_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# letermovir — `Letermovir_Prohn2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The letermovir model was rejected due to an implausible negative clearance or volume in a covariate scenario, compounded by an unconvertible unit.

<div class="pk-model-meta" hidden drug="letermovir" model-id="Letermovir_Prohn2021_reference" status="rejected" stale="false" population="healthy participants and allogeneic hematopoietic cell transplantation recipients" measured-compound="letermovir" parameterization="mechanistic" topology="3C"></div>

## Citation
Prohn M, Viberg A, Zhang D, Dykstra K, Davis C, Macha S et al. Population pharmacokinetics of letermovir following oral and intravenous administration in healthy participants and allogeneic hematopoietic cell transplantation recipients. CPT: pharmacometrics & systems pharmacology 10(3):255–267 (2021).
  ·  DOI: [10.1002/psp4.12593](https://doi.org/10.1002/psp4.12593)

## Population and dosing

**Population:** healthy participants and allogeneic hematopoietic cell transplantation recipients · condition healthy and cytomegalovirus prophylaxis · age group adult · n = 679.

**Dosing:** 30, 60, 240, 480, 720, 960 mg, oral, multiple, every 24 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Clearance Vmax, L/h | CL | 12.2 | L/h | 2.60 | 0.0641 (9.90% RSE) |
| Central volume of distribution, L | V1 | 7.45 | L | 6.30 | 0.0613 (30.7% RSE) |
| Asian effect on Vd | V | -0.280 |  | 8.80 |  |
| Number of transit compartments | n_transit | 3.60 |  | 1.70 |  |
| Mean transit time, h | MTT | 1.04 | h | 4.20 | 0.0836 (14.2% RSE) |
| Peripheral volume, L | V2 | 25.8 | L | 4.00 | 0.229 (36.7% RSE) |
| Bioavailability | Fab | 0.938 |  | 2.10 | 0.137 (24.5% RSE) |
| Bioavailability without CSA | FG | 0.346 |  |  |  |
| Absorption rate, 1/h | kabs | 0.150 | 1/h |  | 0.719 (41.4% RSE) |
| Absorption lag, h | tlag | 0.674 | h |  |  |
| theta_q367_weight | theta_q367_weight | 0.560 |  | 26.4 |  |
| theta_v_weight | theta_v_weight | 0.656 |  | 10.9 |  |
| Q | Q | 1.54 | L/h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.759). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The letermovir model was rejected due to an implausible negative clearance or volume in a covariate scenario, compounded by an unconvertible unit.**

The record shows a volume covariate effect of -0.280, which may result in negative volume values under certain covariate conditions. The parameter with the missing unit, specifically labeled with a dimensionless count or ambiguous unit context, could not be standardized to SI units. This prevents valid calculation of the clearance or volume check. Extracted — letermovir: CL 12.2 L/h, V1 7.45 L, V -0.28, n_transit 3.6, MTT 1.04 h, V2 25.8 L, Fab 0.938, FG 0.346, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has letermovir, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance Vmax, L/h | `Q22` · CL | 12.2 | L/h | 3.389e-06 | m3/s | l/h | 2.60 | boundary_llm_dim_refused (0.8) | psp412593-tbl-0002:row1:col2, psp412593-tbl-0002:row1:col3, psp412593-tbl-0002:row1:col4, psp412593-tbl-0002:row1:col5 | 0.0641 (9.90% RSE) |
| Central volume of distribution, L | `Q63` · V1 | 7.45 | L | 0.00745 | m3 | l | 6.30 | boundary_compartment (0.9) | psp412593-tbl-0002:row3:col2, psp412593-tbl-0002:row3:col3, psp412593-tbl-0002:row3:col4, psp412593-tbl-0002:row3:col5 | 0.0613 (30.7% RSE) |
| Asian effect on Vd | `Q61` · V | -0.280 |  |  |  |  | 8.80 | llm_confirmed (0.6) | psp412593-tbl-0002:row5:col2, psp412593-tbl-0002:row5:col3, psp412593-tbl-0002:row5:col4 |  |
| Number of transit compartments | `Q311` · n_transit | 3.60 |  |  |  |  | 1.70 | exact (1) | psp412593-tbl-0002:row6:col2, psp412593-tbl-0002:row6:col3, psp412593-tbl-0002:row6:col4, psp412593-tbl-0002:row6:col5 |  |
| Mean transit time, h | `Q81` · MTT | 1.04 | h |  |  | h | 4.20 | exact (1) | psp412593-tbl-0002:row7:col2, psp412593-tbl-0002:row7:col3, psp412593-tbl-0002:row7:col4, psp412593-tbl-0002:row7:col5 | 0.0836 (14.2% RSE) |
| Peripheral volume, L | `Q64` · V2 | 25.8 | L | 0.0258 | m3 | l | 4.00 | exact (1) | psp412593-tbl-0002:row10:col2, psp412593-tbl-0002:row10:col3, psp412593-tbl-0002:row10:col4, psp412593-tbl-0002:row10:col5, psp412593-tbl-0002:row12:col2, psp412593-tbl-0002:row12:col3, psp412593-tbl-0002:row12:col4, psp412593-tbl-0002:row12:col5, psp412593-tbl-0002:row19:col2, psp412593-tbl-0002:row19:col3, psp412593-tbl-0002:row19:col4, psp412593-tbl-0002:row19:col5, Prohn_2021_table_3:row3:col1, Prohn_2021_table_3:row3:col3, Prohn_2021_table_3:row3:col4 | 0.229 (36.7% RSE) |
| Bioavailability | `Q40` · Fab | 0.938 |  |  |  |  | 2.10 | exact (1) | psp412593-tbl-0002:row17:col2, psp412593-tbl-0002:row17:col3, psp412593-tbl-0002:row17:col4, psp412593-tbl-0002:row17:col5 | 0.137 (24.5% RSE) |
| Bioavailability without CSA | `Q41` · FG | 0.346 |  |  |  |  |  | llm_corrected (0.6) | Prohn_2021_table_3:row5:col1, Prohn_2021_table_3:row5:col3, Prohn_2021_table_3:row5:col4 |  |
| Absorption rate, 1/h | `Q49` · kabs | 0.150 | 1/h | 4.167e-05 | 1/s | 1/h |  | exact (1) | Prohn_2021_table_3:row8:col1, Prohn_2021_table_3:row8:col3, Prohn_2021_table_3:row8:col4 | 0.719 (41.4% RSE) |
| Absorption lag, h | `Q83` · tlag | 0.674 | h | 2426 | s | h |  | exact (1) | Prohn_2021_table_3:row10:col1, Prohn_2021_table_3:row10:col3, Prohn_2021_table_3:row10:col4 |  |
| theta_q367_weight | `Q900` · theta_q367_weight | 0.560 |  |  |  |  | 26.4 |  | psp412593-tbl-0002:row2:col2, psp412593-tbl-0002:row2:col3, psp412593-tbl-0002:row2:col4, psp412593-tbl-0002:row2:col5 |  |
| theta_v_weight | `Q900` · theta_v_weight | 0.656 |  |  |  |  | 10.9 |  | psp412593-tbl-0002:row4:col2, psp412593-tbl-0002:row4:col3, psp412593-tbl-0002:row4:col4, psp412593-tbl-0002:row4:col5 |  |
| Q | `Q30` · Q | 1.54 | L/h | 4.278e-07 | m3/s | L/h |  | review_gapfill (0.7) | Fromage_2025:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose effect on MTT' — extend the ontology if this is a real PK parameter (source ['psp412593-tbl-0002:row8:col2', 'psp412593-tbl-0002:row8:col3', 'psp412593-tbl-0002:row8:col4', 'psp412593-tbl-0002:row8:col5'])
- dropped duplicate Q22 ('Intercompartment clearance Vmax, L/h', value '4.41') — already have one for this compound
- dropped unlinked row (NIL): 'Intercompartment clearance, L/h' — extend the ontology if this is a real PK parameter (source ['psp412593-tbl-0002:row11:col2', 'psp412593-tbl-0002:row11:col3', 'psp412593-tbl-0002:row11:col4', 'psp412593-tbl-0002:row11:col5', 'psp412593-tbl-0002:row18:col2', 'psp412593-tbl-0002:row18:col3', 'psp412593-tbl-0002:row18:col4', 'psp412593-tbl-0002:row18:col5'])
- dropped value-less row: 'Michaelis‐Menten constant, ng/ml'
- dropped PD-category row 'Turnover rate induction,/h' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412593-tbl-0002:row15:col2', 'psp412593-tbl-0002:row15:col4', 'psp412593-tbl-0002:row15:col5'])
- dropped PD-category row 'Slope of induction effect' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412593-tbl-0002:row16:col2', 'psp412593-tbl-0002:row16:col4', 'psp412593-tbl-0002:row16:col5'])
- dropped duplicate Q22 ('CL non‐CSA treatment, L/h', value '4.84') — already have one for this compound
- dropped duplicate Q22 ('CL CSA treatment, L/h', value '3.38') — already have one for this compound
- dropped duplicate Q63 ('Central volume, L', value '19.7') — already have one for this compound
- dropped duplicate Q22 ('Intercompartment CL, L/h', value '1.54') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate HP, 1/h', value '1.26') — already have one for this compound
- dropped duplicate Q64 ('Asian effect peripheral volume', value '0.609') — already have one for this compound
- covariate effect for Q367 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=letermovir
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- gap-filled Q30 (Q) from Fromage_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412593-tbl-0002:row3:col1 = 'V1'
- unparsed cell psp412593-tbl-0002:row5:col5 = '−0.334 to −0.227'
- unparsed cell psp412593-tbl-0002:row9:col1 = 'Q1 max'
- unparsed cell psp412593-tbl-0002:row10:col1 = 'V2'
- unparsed cell psp412593-tbl-0002:row11:col1 = 'Q2'
- unparsed cell psp412593-tbl-0002:row12:col1 = 'V3'
- unparsed cell psp412593-tbl-0002:row13:col2 = '2.68 × 103'
- unparsed cell psp412593-tbl-0002:row13:col4 = '2.72 × 103'
- unparsed cell psp412593-tbl-0002:row13:col5 = '2.20 × 103–3.41 × 103'
- unparsed cell psp412593-tbl-0002:row14:col1 = 'KMQ1'
- unparsed cell psp412593-tbl-0002:row14:col2 = '5.63 × 103'
- unparsed cell psp412593-tbl-0002:row14:col4 = '5.35 × 103'
- unparsed cell psp412593-tbl-0002:row14:col5 = '3.81 × 103–7.32 × 103'
- unparsed cell psp412593-tbl-0002:row17:col1 = 'F1'
- unparsed cell psp412593-tbl-0002:row18:col1 = 'Q3'
- unparsed cell psp412593-tbl-0002:row19:col1 = 'V4'
- unparsed cell psp412593-tbl-0002:row21:col1 = 'IIV–V1'
- unparsed cell psp412593-tbl-0002:row23:col1 = 'IIV–Q1 max'
- unparsed cell psp412593-tbl-0002:row24:col1 = 'IIV–V2'
- unparsed cell psp412593-tbl-0002:row25:col1 = 'IIV–F1'
- companion parameter table 3 transcribed (75 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.759 (22/29 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability without csa]` | 0.346 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartment clearance vmax]` |  | 4.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q367_weight]` | 0.560 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q66_weight]` |  | 0.560 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | letermovir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | letermovir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q61 | fail |  | -0.28 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412593-tbl-0002:row1:col2', 'psp412593-tbl-0002:row1:col3', 'psp412593-tbl-0002:row1:col4', 'psp412593-tbl-0002:row1:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Fromage_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Prohn_2021_table_3:row8:col1', 'Prohn_2021_table_3:row8:col3', 'Prohn_2021_table_3:row8:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412593-tbl-0002:row3:col2', 'psp412593-tbl-0002:row3:col3', 'psp412593-tbl-0002:row3:col4', 'psp412593-tbl-0002:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412593-tbl-0002:row10:col2', 'psp412593-tbl-0002:row10:col3', 'psp412593-tbl-0002:row10:col4', 'psp412593-tbl-0002:row10:col5', 'psp412593-tbl-0002:row12:col2', 'psp412593-tbl-0002:row12:col3', 'psp412593-tbl-0002:row12:col4', 'psp412593-tbl-0002:row12:col5', 'psp412593-tbl-0002:row19:col2', 'psp412593-tbl-0002:row19:col3', 'psp412593-tbl-0002:row19:col4', 'psp412593-tbl-0002:row19:col5', 'Prohn_2021_table_3:row3:col1', 'Prohn_2021_table_3:row3:col3', 'Prohn_2021_table_3:row3:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Prohn_2021_table_3:row10:col1', 'Prohn_2021_table_3:row10:col3', 'Prohn_2021_table_3:row10:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['psp412593-tbl-0002:row5:col2', 'psp412593-tbl-0002:row5:col3', 'psp412593-tbl-0002:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.2 | ['psp412593-tbl-0002:row1:col2', 'psp412593-tbl-0002:row1:col3', 'psp412593-tbl-0002:row1:col4', 'psp412593-tbl-0002:row1:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.2 L/h | ['psp412593-tbl-0002:row1:col2', 'psp412593-tbl-0002:row1:col3', 'psp412593-tbl-0002:row1:col4', 'psp412593-tbl-0002:row1:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.45 L | ['psp412593-tbl-0002:row3:col2', 'psp412593-tbl-0002:row3:col3', 'psp412593-tbl-0002:row3:col4', 'psp412593-tbl-0002:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 25.8 L | ['psp412593-tbl-0002:row10:col2', 'psp412593-tbl-0002:row10:col3', 'psp412593-tbl-0002:row10:col4', 'psp412593-tbl-0002:row10:col5', 'psp412593-tbl-0002:row12:col2', 'psp412593-tbl-0002:row12:col3', 'psp412593-tbl-0002:row12:col4', 'psp412593-tbl-0002:row12:col5', 'psp412593-tbl-0002:row19:col2', 'psp412593-tbl-0002:row19:col3', 'psp412593-tbl-0002:row19:col4', 'psp412593-tbl-0002:row19:col5', 'Prohn_2021_table_3:row3:col1', 'Prohn_2021_table_3:row3:col3', 'Prohn_2021_table_3:row3:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bletermovir%5D%20Letermovir_Prohn2021_reference&body=Drug%3A%20letermovir%0ARecord%3A%20Letermovir_Prohn2021_reference%0APaper%3A%20Prohn_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_letermovir/Letermovir_Prohn2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 13:49 UTC</sub>
