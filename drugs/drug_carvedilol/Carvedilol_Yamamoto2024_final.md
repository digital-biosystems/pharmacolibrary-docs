<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Yamamoto_2024 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Yamamoto2024_final`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Rejected), but the paper was screened again on 2026-10-07 00:34 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks.

<div class="pk-model-meta" hidden drug="carvedilol" model-id="Carvedilol_Yamamoto2024_final" status="extracted" stale="true" population="nonobese, obese, and post-RYGB patients" measured-compound="(S)-carvedilol" parameterization="mechanistic" topology="2C"></div>

## Citation
Yamamoto PA, Vozmediano V, Cristofoletti R, Jiang J, Schmittgen TD, de Gaitani CM et al. Rerouting cardiovascular management following gastric bypass surgery: Dose optimization of carvedilol using population-based analysis. British journal of clinical pharmacology 90(9):2223–2235 (2024).
  ·  DOI: [10.1111/bcp.16129](https://doi.org/10.1111/bcp.16129)

## Population and dosing

**Population:** nonobese, obese, and post-RYGB patients · condition gastric bypass surgery · age group adult · n = 52.

**Dosing:** 25, 50 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed rac-carvedilol, measured (S)-carvedilol.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final.svg" alt="Carvedilol_Yamamoto2024_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ka1pop | kabs | 0.095 | 1/h | 8.89 |  |
| F1pop | Fab | 0.28 |  | 0.31 | 0.77 (14.5% RSE) |
| Clpop | CL | 18.21 | L/h | 8.44 | 0.58 (10.0% RSE) |
| V1pop | V1 | 5.81 | L | 21.6 | 0.96 (15.8% RSE) |
| Qpop | Q | 1.54 | L/h | 0.09 |  |
| V2pop | V2 | 23.21 | L | 66.4 | 0.71 (66.1% RSE) |
| BIO1 | Frel | 0.17 |  | 0.36 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The carvedilol record was rejected because a compartment or metabolite has no path from the administered dose, and one parameter's reported unit could not be converted to SI, so it arrived without an SI value.**

The model links carvedilol to (R)- and (S)-carvedilol by interconversion, but the check for unreachable or orphan compartments or unlinked metabolites failed, meaning some species has no path from the administered dose. A reported unit could not be expressed in SI units, so one parameter was left without a usable numeric value. A second reader also disagreed on several extracted values, e.g. assigning the 0.3 bioavailability to (R)-carvedilol rather than (S)-carvedilol and reading the links as metabolism from racemic carvedilol rather than interconversion. Extracted — carvedilol: kabs 0.095 1/h, CL 18.2 L/h, V1 5.81 L, Q 1.54 L/h, V2 23.2 L, Fab 0.3 fixed, Frel 0.17, t1/2ka 0.49 h; (S)-carvedilol: Fab 0.3 fixed.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rac-carvedilol, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka1pop | `Q49` · kabs | 0.095 | 1/h | 2.639e-05 | 1/s | 1/h | 8.89 | llm (0.6) | Yamamoto_2024_table_1:row0:col1 |  |
| F1pop | `Q40` · Fab | 0.28 |  |  |  |  | 0.31 | llm (0.6) | Yamamoto_2024_table_1:row2:col1 | 0.77 (14.5% RSE) |
| Clpop | `Q22` · CL | 18.21 | L/h | 5.058e-06 | m3/s | L/h | 8.44 | llm (0.6) | Yamamoto_2024_table_1:row6:col1 | 0.58 (10.0% RSE) |
| V1pop | `Q63` · V1 | 5.81 | L | 0.00581 | m3 | L | 21.6 | llm (0.6) | Yamamoto_2024_table_1:row8:col1 | 0.96 (15.8% RSE) |
| Qpop | `Q30` · Q | 1.54 | L/h | 4.278e-07 | m3/s | L/h | 0.09 | llm (0.6) | Yamamoto_2024_table_1:row9:col1 |  |
| V2pop | `Q64` · V2 | 23.21 | L | 0.02321 | m3 | L | 66.4 | llm (0.6) | Yamamoto_2024_table_1:row10:col1 | 0.71 (66.1% RSE) |
| BIO1 | `Q87` · Frel | 0.17 |  |  |  |  | 0.36 | llm (0.6) | Yamamoto_2024_table_1:row12:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- dropped duplicate Q49 ('ka2pop', value '0.43') — already have one for this compound
- dropped unlinked row (NIL): 'RVGB on F1' — extend the ontology if this is a real PK parameter (source ['Yamamoto_2024_table_1:row3:col1'])
- dropped unlinked row (NIL): 'TIag2pop' — extend the ontology if this is a real PK parameter (source ['Yamamoto_2024_table_1:row4:col1'])
- dropped unlinked row (NIL): 'log(MRmet/MTmet) on Cl' — extend the ontology if this is a real PK parameter (source ['Yamamoto_2024_table_1:row7:col1'])
- dropped duplicate Q87 ('BIO2', value '0.33') — already have one for this compound
- implicit units: 'ka1pop' → 1/h (from the popPK convention: 'ka is an absorption rate constant; the standard unit in population PK is 1/h, consistent with the value 0.095.')
- implicit units: 'Clpop' → L/h (from the popPK convention: 'Cl is total clearance; the standard unit in population PK is L/h, consistent with the value 18.21.')
- implicit units: 'V1pop' → L (from the popPK convention: 'V1 is the volume of distribution of the central compartment; the standard unit in population PK is L, consistent with th')
- implicit units: 'Qpop' → L/h (from the popPK convention: 'Q is intercompartmental clearance; the standard unit in population PK is L/h, consistent with the value 1.54.')
- implicit units: 'V2pop' → L (from the popPK convention: 'V2 is the volume of distribution of the peripheral compartment; the standard unit in population PK is L, consistent with')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=(S)-carvedilol
- model-stage split: '(r)-carvedilol: final model estimate (rse %)' is the final model of Yamamoto_2024 (paper reports 2 stages: (r)-carvedilol: final model estimate (rse %), (s)-carvedilol: final model estimate (rse %)); same population, different model-building step
- molar mass: none of 1 PubChem candidate(s) is '(S)-carvedilol' (LLM) — left in mass units
- molar mass: none found for '(S)-carvedilol' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Yamamoto_2024_table_1:row0:col3 = '0.10 (0.08; 0.12)'
- unparsed cell Yamamoto_2024_table_1:row0:col6 = '0.15 (0.09; 0.23)'
- unparsed cell Yamamoto_2024_table_1:row1:col3 = '0.42 (0.39; 0.48)'
- unparsed cell Yamamoto_2024_table_1:row1:col6 = '0.55 (0.47; 0.68)'
- unparsed cell Yamamoto_2024_table_1:row2:col3 = '0.25 (0.20; 0.41)'
- unparsed cell Yamamoto_2024_table_1:row2:col6 = '0.36 (0.18; 0.51)'
- unparsed cell Yamamoto_2024_table_1:row3:col3 = '1.96 (1.47; 2.47)'
- unparsed cell Yamamoto_2024_table_1:row3:col6 = '1.57 (0.87; 2.42)'
- unparsed cell Yamamoto_2024_table_1:row4:col3 = '0.14 (0.09; 0.25)'
- unparsed cell Yamamoto_2024_table_1:row4:col6 = '0.09 (0.05; 0.17)'
- unparsed cell Yamamoto_2024_table_1:row6:col3 = '17.17 (14.19; 20.19)'
- unparsed cell Yamamoto_2024_table_1:row6:col6 = '17.37 (12.85; 21.39)'
- unparsed cell Yamamoto_2024_table_1:row7:col3 = '−0.21 (−0.32; −0.12)'
- unparsed cell Yamamoto_2024_table_1:row8:col3 = '5.61 (3.91; 8.08)'
- unparsed cell Yamamoto_2024_table_1:row8:col6 = '4.90 (2.62; 8.45)'
- unparsed cell Yamamoto_2024_table_1:row9:col3 = '2.43 (1.51; 4.17)'
- unparsed cell Yamamoto_2024_table_1:row9:col6 = '10.63 (4.21; 18.76)'
- unparsed cell Yamamoto_2024_table_1:row10:col3 = '37.81 (10.98; 260.72)'
- unparsed cell Yamamoto_2024_table_1:row10:col6 = '131.58 (27.28; 580.51)'
- unparsed cell Yamamoto_2024_table_1:row12:col3 = '0.18 (0.15; 0.23)'
- unparsed cell Yamamoto_2024_table_1:row12:col6 = '0.07 (0.06; 0.09)'
- unparsed cell Yamamoto_2024_table_1:row13:col3 = '0.28 (0.22; 0.35)'
- unparsed cell Yamamoto_2024_table_1:row13:col6 = '0.13 (0.10; 0.16)'
- unparsed cell Yamamoto_2024_table_1:row14:col3 = '0.51 (0.40; 0.65)'
- unparsed cell Yamamoto_2024_table_1:row14:col6 = '0.30 (0.12; 0.46)'
- unparsed cell Yamamoto_2024_table_1:row15:col3 = '0.20 (0.11; 0.28)'
- unparsed cell Yamamoto_2024_table_1:row15:col6 = '0.19 (0.09; 0.29)'
- unparsed cell Yamamoto_2024_table_1:row16:col3 = '0.66 (0.48; 0.83)'
- unparsed cell Yamamoto_2024_table_1:row16:col6 = '0.61 (0.32; 0.91)'
- unparsed cell Yamamoto_2024_table_1:row17:col3 = '0.78 (0.59; 0.94)'
- unparsed cell Yamamoto_2024_table_1:row17:col6 = '0.94 (0.63; 1.28)'
- unparsed cell Yamamoto_2024_table_1:row18:col3 = '0.59 (0.48; 0.70)'
- unparsed cell Yamamoto_2024_table_1:row18:col6 = '0.57 (0.45; 0.70)'
- unparsed cell Yamamoto_2024_table_1:row19:col3 = '1.07 (0.81; 1.40)'
- unparsed cell Yamamoto_2024_table_1:row19:col6 = '1.07 (0.55; 1.63)'
- unparsed cell Yamamoto_2024_table_1:row20:col6 = '0.70 (0.41; 1.13)'
- unparsed cell Yamamoto_2024_table_1:row21:col3 = '1.20 (0.51; 2.85)'
- unparsed cell Yamamoto_2024_table_1:row21:col6 = '1.31 (0.68; 3.72)'
- unparsed cell Yamamoto_2024_table_1:row22:col3 = '0.24 (0.22; 0.26)'
- unparsed cell Yamamoto_2024_table_1:row22:col6 = '0.26 (0.24; 0.29)'
- LLM region Yamamoto_2024:results_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (15/20 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability (f) of (r)-carvedilol]` |  | 0.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpop]` | 18.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tiag2pop]` |  | 0.13 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rac-carvedilol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | (S)-carvedilol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Yamamoto_2024_table_1:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Yamamoto_2024_table_1:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Yamamoto_2024_table_1:row0:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Yamamoto_2024_table_1:row8:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Yamamoto_2024_table_1:row10:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.21 | ['Yamamoto_2024_table_1:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.2 L/h | ['Yamamoto_2024_table_1:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.81 L | ['Yamamoto_2024_table_1:row8:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 23.2 L | ['Yamamoto_2024_table_1:row10:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_modelica.zip" download>Carvedilol_Yamamoto2024_final_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_fmi.zip" download>Carvedilol_Yamamoto2024_final_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_matlab.zip" download>Carvedilol_Yamamoto2024_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_matlab_simbio.zip" download>Carvedilol_Yamamoto2024_final_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_sbml.zip" download>Carvedilol_Yamamoto2024_final_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_cellml.zip" download>Carvedilol_Yamamoto2024_final_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 0.3 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.5e-05 | kg |
| input | model | `Cl` | 5.058e-06 | m3/s |
| input | model | `VdPerKg` | 8.3e-05 | m3/kg |
| input | model | `k12` | 7.363e-05 | 1/s |
| input | model | `k21` | 1.843e-05 | 1/s |
| input | model | `ka` | 2.639e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yamamoto PA, Vozmediano V, Cristofoletti R, Jiang J, Schmittgen TD, de Gaitani CM et al. Rerouting cardiovascular management following gastric bypass surgery: Dose optimization of carvedilol using population-based analysis. British journal of clinical pharmacology 90(9):2223–2235 (2024). [doi:10.1111/bcp.16129](https://doi.org/10.1111/bcp.16129)

**This record:** Pharmacolibrary v26.09, model `Carvedilol_Yamamoto2024_final`. <https://pharmacolibrary.github.io/#/drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final>

```bibtex
@misc{pharmacolibrary_CarvedilolYamamoto2024final,
  title  = {{Pharmacolibrary model Carvedilol_Yamamoto2024_final}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final},
  note   = {Parameters from doi:10.1111/bcp.16129},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 25 mg, single dose, first-order absorption (ka 0.095 /h, F 0.3). Doses in the paper: 25, 50 mg.

<dbs-fmusim paramsurl="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final/Carvedilol_Yamamoto2024_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Carvedilol_Yamamoto2024_final_params.json` · controls `Carvedilol_Yamamoto2024_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarvedilol%5D%20Carvedilol_Yamamoto2024_final&body=Drug%3A%20carvedilol%0ARecord%3A%20Carvedilol_Yamamoto2024_final%0APaper%3A%20Yamamoto_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 00:34 UTC</sub>
