<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Casirivimab&quot;,&quot;href&quot;:&quot;drugs/drug_casirivimab/&quot;},{&quot;label&quot;:&quot;Lin_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Casirivimab — `Casirivimab_Lin2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The casirivimab absorption rate constant kabs (0.2354) was reported with the unit 'units' instead of 1/day, a dimension mismatch on a structural parameter, so the record was rejected.

<div class="pk-model-meta" hidden drug="Casirivimab" model-id="Casirivimab_Lin2024_reference" status="rejected" stale="false" population="pediatric and adult non-infected individuals and SARS-CoV-2 infected patients or household contacts" measured-compound="casirivimab" parameterization="mechanistic" topology="2C"></div>

## Citation
Lin KJ, Turner KC, Rosario M, Harnisch LO, Davis JD, DiCioccio AT. Population Pharmacokinetics of Casirivimab and Imdevimab in Pediatric and Adult Non-Infected Individuals, Pediatric and Adult Ambulatory or Hospitalized Patients or Household Contacts of Patients Infected with SARS-COV-2. Pharmaceutical research 41(10):1933–1949 (2024).
  ·  DOI: [10.1007/s11095-024-03764-5](https://doi.org/10.1007/s11095-024-03764-5)

## Population and dosing

**Population:** pediatric and adult non-infected individuals and SARS-CoV-2 infected patients or household contacts · condition SARS-CoV-2 infection / non-infected · age group mixed · n = 7598.

**Dosing:** 300, 600, 1200, 8000 mg, iv and sc, multiple, every 672 h.

**Dosed compound ≠ measured compound:** dosed casirivimab + imdevimab, measured casirivimab.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL: Clearance (L/day) | CL | 0.2359 | L/day | 1.533 |
| Vc: Central volume of distribution (L) | V1 | 3.823 | L | 1.025 |
| Q: Intercompartmental clearance (L/day) | Q | 0.4029 | L/day | 4.604 |
| Vp: Peripheral volume of distribution (L) | V2 | 3.199 | L | 1.771 |
| KA: Absorption rate constant (1/day) | kabs | 0.2354 | units | 6.648 |
| Bioavailability | Fab | 0.6617 | units | 1.208 |
| Objective function | equation variable | -56426.6 | units | -56426.6 |
| theta_q314_weight | theta_q314_weight | 0.7959 |  | 2.577 |
| theta_v1_weight | theta_v1_weight | 0.5392 |  | 4.457 |
| theta_q314_race | theta_q314_race | -0.09478 |  | 12.72 |
| theta_q314_sex | theta_q314_sex | -0.08783 |  | 16.13 |
| theta_v1_albumin | theta_v1_albumin | -0.4167 |  | 9.225 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.543). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The casirivimab absorption rate constant kabs (0.2354) was reported with the unit 'units' instead of 1/day, a dimension mismatch on a structural parameter, so the record was rejected.**

The absorption rate constant kabs for casirivimab carries the verbatim unit 'units', which is not a valid dimension for a first-order rate constant and could not be converted to SI, leaving the parameter without a usable value. The other structural parameters (CL 0.2359 L/day, V1 3.823 L, Q 0.4029 L/day, V2 3.199 L) are dimensionally consistent. The rejection rests on this single dimension mismatch; no other failed checks are recorded. Extracted — casirivimab: CL 0.236 L/day, V1 3.82 L, Q 0.403 L/day, V2 3.2 L, kabs 0.235 units, Fab 0.662 units.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has casirivimab, the second reading casirivimab and imdevimab; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL: Clearance (L/day) | `Q22` · CL | 0.2359 | L/day | 2.73e-09 | m3/s | l/d | 1.533 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4 |
| Vc: Central volume of distribution (L) | `Q63` · V1 | 3.823 | L | 0.003823 | m3 | l | 1.025 | boundary_compartment (0.9) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 |
| Q: Intercompartmental clearance (L/day) | `Q30` · Q | 0.4029 | L/day | 4.663e-09 | m3/s | l/d | 4.604 | llm_confirmed (0.6) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4 |
| Vp: Peripheral volume of distribution (L) | `Q64` · V2 | 3.199 | L | 0.003199 | m3 | l | 1.771 | boundary_compartment (0.9) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 |
| KA: Absorption rate constant (1/day) | `Q49` · kabs | 0.2354 | units |  |  | units | 6.648 | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 |
| Bioavailability | `Q40` · Fab | 0.6617 | units |  |  |  | 1.208 | exact (1) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 |
| Objective function | `Q900` · equation variable | -56426.6 | units |  |  | units | -56426.6 | llm (0.6) | Tab2:row28:col1, Tab2:row28:col2, Tab2:row28:col3, Tab2:row28:col4, Tab2:row28:col5, Tab2:row28:col6 |
| theta_q314_weight | `Q900` · theta_q314_weight | 0.7959 |  |  |  |  | 2.577 |  | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4 |
| theta_v1_weight | `Q900` · theta_v1_weight | 0.5392 |  |  |  |  | 4.457 |  | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 |
| theta_q314_race | `Q900` · theta_q314_race | -0.09478 |  |  |  |  | 12.72 |  | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col4 |
| theta_q314_sex | `Q900` · theta_q314_sex | -0.08783 |  |  |  |  | 16.13 |  | Tab2:row21:col1, Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col4 |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.4167 |  |  |  |  | 9.225 |  | Tab2:row22:col1, Tab2:row22:col2, Tab2:row22:col3, Tab2:row22:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'KA: Absorption rate constant (1/day)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Age on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'])
- dropped unlinked row (NIL): 'Sex on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'])
- dropped unlinked row (NIL): 'Albumin on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4'])
- dropped unlinked row (NIL): 'Hepatic impairment on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'])
- dropped unlinked row (NIL): 'Viral load on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4'])
- dropped unlinked row (NIL): 'Serostatus on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4'])
- unit_dimension_mismatch: 'CRP on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CRP on CL', value '0.02252') — already have one for this compound
- unit_dimension_mismatch: 'NLR on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('NLR on CL', value '0.02883') — already have one for this compound
- dropped unlinked row (NIL): 'Low oxygen supply on CL' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col1', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col4'])
- unit_dimension_mismatch: 'High oxygen supply on CL' → Q22 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('High oxygen supply on CL', value '0.3802') — already have one for this compound
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=casirivimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'casirivimab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col5 = '(0.1869, 0.1983)'
- unparsed cell Tab2:row2:col6 = '(0.2288, 0.243)'
- unparsed cell Tab2:row3:col5 = '(3.838, 3.996)'
- unparsed cell Tab2:row3:col6 = '(3.746, 3.9)'
- unparsed cell Tab2:row4:col5 = '(0.368, 0.4582)'
- unparsed cell Tab2:row4:col6 = '(0.3665, 0.4393)'
- unparsed cell Tab2:row5:col5 = '(2.952, 3.178)'
- unparsed cell Tab2:row5:col6 = '(3.088, 3.31)'
- unparsed cell Tab2:row6:col5 = '(0.19, 0.2466)'
- unparsed cell Tab2:row6:col6 = '(0.2047, 0.2661)'
- unparsed cell Tab2:row7:col5 = '(0.7035, 0.7365)'
- unparsed cell Tab2:row7:col6 = '(0.646, 0.6774)'
- unparsed cell Tab2:row8:col5 = '(0.7557, 0.8361)'
- unparsed cell Tab2:row8:col6 = '(0.7557, 0.8361)'
- unparsed cell Tab2:row9:col5 = '(0.4921, 0.5863)'
- unparsed cell Tab2:row9:col6 = '(0.4921, 0.5863)'
- unparsed cell Tab2:row10:col5 = '(0.04485, 0.09589)'
- unparsed cell Tab2:row10:col6 = '(0.04485, 0.09589)'
- unparsed cell Tab2:row11:col5 = '(–0.09839, –0.06263)'
- unparsed cell Tab2:row11:col6 = '(–0.08723, –0.05115)'
- unparsed cell Tab2:row12:col5 = '(-0.1184, -0.07114)'
- unparsed cell Tab2:row12:col6 = '(-0.1184, -0.07114)'
- unparsed cell Tab2:row13:col5 = '(–1.179, –0.9774)'
- unparsed cell Tab2:row13:col6 = '(–1.063, –0.8652)'
- unparsed cell Tab2:row14:col5 = '(0.04128, 0.09076)'
- unparsed cell Tab2:row14:col6 = '(0.04128, 0.09076)'
- unparsed cell Tab2:row15:col5 = '(–0.01133, –0.003745)'
- unparsed cell Tab2:row15:col6 = '(–0.01133, –0.003745)'
- unparsed cell Tab2:row16:col5 = '(0.05065, 0.09565)'
- unparsed cell Tab2:row16:col6 = '(0.05065, 0.09565)'
- unparsed cell Tab2:row17:col5 = '(0.01254, 0.0325)'
- unparsed cell Tab2:row17:col6 = '(0.01254, 0.0325)'
- unparsed cell Tab2:row18:col5 = '(0.01237, 0.04529)'
- unparsed cell Tab2:row18:col6 = '(0.01237, 0.04529)'
- unparsed cell Tab2:row19:col5 = '(0.0791, 0.1337)'
- unparsed cell Tab2:row19:col6 = '(0.0791, 0.1337)'
- unparsed cell Tab2:row20:col5 = '(0.2666, 0.4938)'
- unparsed cell Tab2:row20:col6 = '(0.2666, 0.4938)'
- unparsed cell Tab2:row21:col5 = '(–0.1354, –0.08299)'
- unparsed cell Tab2:row21:col6 = '(–0.1156, –0.06006)'
- unparsed cell Tab2:row22:col5 = '(–0.492, –0.3414)'
- unparsed cell Tab2:row22:col6 = '(–0.492, –0.3414)'
- unparsed cell Tab2:row23:col5 = '(0.7976,0.96)'
- unparsed cell Tab2:row23:col6 = '(0.7624,0.9178)'
- unparsed cell Tab2:row24:col5 = '(23.51, 23.53)'
- unparsed cell Tab2:row24:col6 = '(23.71, 23.73)'
- unparsed cell Tab2:row25:col5 = '(30.03, 30.05)'
- unparsed cell Tab2:row25:col6 = '(30.03, 30.05)'
- unparsed cell Tab2:row26:col5 = '(34.55, 34.61)'
- unparsed cell Tab2:row26:col6 = '(34.55, 34.61)'
- unparsed cell Tab2:row27:col5 = '(78.05, 78.51)'
- unparsed cell Tab2:row27:col6 = '(78.05, 78.51)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.543 (19/35 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[bioavailability in pediatrics]` |  | 0.8401 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl: clearance].covariate_forms` | [] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[objective function]` | -56426.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_age]` |  | 0.07037 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -0.9643 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_hepatic]` |  | 0.06602 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_race]` |  | -0.09478 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` |  | -0.06919 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_weight]` |  | 0.7959 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_race]` | -0.09478 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_sex]` | -0.08783 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_weight]` | 0.7959 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` |  | -0.08783 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc: central volume of distribution].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | casirivimab | casirivimab and imdevimab | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2359 | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00983 L/h | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.82 L | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.2 L | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcasirivimab%5D%20Casirivimab_Lin2024_reference&body=Drug%3A%20casirivimab%0ARecord%3A%20Casirivimab_Lin2024_reference%0APaper%3A%20Lin_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_casirivimab/Casirivimab_Lin2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:00 UTC</sub>
