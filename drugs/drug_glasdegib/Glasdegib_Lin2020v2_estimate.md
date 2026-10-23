<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;glasdegib&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/&quot;},{&quot;label&quot;:&quot;Lin_2020_2 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glasdegib_Lin2020v2_estimate&quot;,&quot;label&quot;:&quot;Lin_2020_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Glasdegib_Lin2020v2_final_model&quot;,&quot;label&quot;:&quot;Lin_2020_2_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Lin2020v2_final_model.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glasdegib_Shaik2021_reference&quot;,&quot;label&quot;:&quot;Shaik_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Shaik2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glasdegib — `Glasdegib_Lin2020v2_estimate`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="glasdegib" model-id="Glasdegib_Lin2020v2_estimate" status="accepted_with_caveats" stale="false" population="patients with advanced hematologic malignancies and solid tumors" measured-compound="glasdegib" parameterization="apparent" topology="2C"></div>

## Citation
Lin S, Shaik N, Martinelli G, Wagner AJ, Cortes J, Ruiz-Garcia A. Population Pharmacokinetics of Glasdegib in Patients With Advanced Hematologic Malignancies and Solid Tumors. Journal of clinical pharmacology 60(5):605–616 (2020).
  ·  DOI: [10.1002/jcph.1556](https://doi.org/10.1002/jcph.1556)

## Population and dosing

**Population:** patients with advanced hematologic malignancies and solid tumors · condition hematologic malignancies and solid tumors · age group adult · n = 269.

**Dosing:** 5, 10, 20, 40, 80, 100, 120, 160, 180, 200, 270, 320, 400, 600, 640 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate.svg" alt="Glasdegib_Lin2020v2_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F, L/h | CL/F | 6.23 | L/h |
| Vc/F, L | V1/F | 3.52 | L |
| Vp/F, L | V2/F | 296.04 | L |
| Q/F, L/h | Q/F | 1.58 | L/h |
| ka, hour–1 | kabs | 0.06 | hour–1 |
| body_weight | body_weight | 5.7 |  |
| crcl_a | crcl_a | 6.5 |  |
| θCYPmod | θCYPmod | -0.18 |  |
| θCYPstrong | θCYPstrong | -0.31 |  |
| θBPBL | θBPBL | -0.004 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has glasdegib, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 6.23 | L/h | 1.731e-06 | m3/s | l/h | exact (1) | jcph1556-tbl-0003:row3:col4 |
| Vc/F, L | `Q290` · V1/F | 3.52 | L | 0.00352 | m3 | l | exact (1) | jcph1556-tbl-0003:row8:col4 |
| Vp/F, L | `Q82` · V2/F | 296.04 | L | 0.296 | m3 | l | exact (1) | jcph1556-tbl-0003:row9:col4 |
| Q/F, L/h | `Q69` · Q/F | 1.58 | L/h | 4.389e-07 | m3/s | l/h | exact (1) | jcph1556-tbl-0003:row11:col4 |
| ka, hour–1 | `Q49` · kabs | 0.06 | hour–1 | 1.667e-05 | 1/s | 1/h | exact (1) | jcph1556-tbl-0003:row13:col4 |
| body_weight | `Q900` · body_weight | 5.7 |  |  |  |  |  | Lin_2020_2_table_4:row4:col3 |
| crcl_a | `Q900` · crcl_a | 6.5 |  |  |  |  |  | Lin_2020_2_table_4:row12:col3 |
| θCYPmod | `Q900` · θCYPmod | -0.18 |  |  |  |  |  |  |
| θCYPstrong | `Q900` · θCYPstrong | -0.31 |  |  |  |  |  |  |
| θBPBL | `Q900` · θBPBL | -0.004 |  |  |  |  |  |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['jcph1556-tbl-0003:row2:col6'])
- kept covariate coefficient θCYPmod=-0.18 (covariate CYPmod) — not an ontology parameter
- kept covariate coefficient θCYPstrong=-0.31 (covariate CYPstrong) — not an ontology parameter
- routed 'θWNCL' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- kept covariate coefficient θBPBL=-0.004 (covariate BPBL) — not an ontology parameter
- routed 'θsolid' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Typical 70‐kg hematologic patient with 38.2% BMB and no concomitant use of CYP3A inhibitor' — extend the ontology if this is a real PK parameter (source ['Lin_2020_2_table_4:row0:col3'])
- covariate level 'Body weight' → Q900:body_weight = 5.7 (power on Q27)
- dropped unlinked row (NIL): 'Percent BMB' — extend the ontology if this is a real PK parameter (source ['Lin_2020_2_table_4:row8:col3'])
- dropped unlinked row (NIL): 'Use of CYP3A inhibitor' — extend the ontology if this is a real PK parameter (source ['Lin_2020_2_table_4:row10:col3'])
- covariate level 'CRCL a' → Q900:crcl_a = 6.5 (power on Q27)
- dropped unlinked row (NIL): 'Tumor type' — extend the ontology if this is a real PK parameter (source ['Lin_2020_2_table_4:row16:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=glasdegib
- population split: 'estimate' subgroup of Lin_2020_2 (paper reports 2 populations: estimate, final model)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph1556-tbl-0003:row3:col5 = '5.56 to 6.81'
- unparsed cell jcph1556-tbl-0003:row3:col6 = '10.1 (4.1%)'
- unparsed cell jcph1556-tbl-0003:row4:col5 = '–0.37 to 0.09'
- unparsed cell jcph1556-tbl-0003:row5:col5 = '–0.53 to –0.06'
- unparsed cell jcph1556-tbl-0003:row6:col5 = '0.22 to 0.60'
- unparsed cell jcph1556-tbl-0003:row7:col5 = '–0.006 to –0.001'
- unparsed cell jcph1556-tbl-0003:row8:col5 = '1.87 to 5.55'
- unparsed cell jcph1556-tbl-0003:row8:col6 = '112 (4.1%)'
- unparsed cell jcph1556-tbl-0003:row9:col5 = '80.09 to 1090.45'
- unparsed cell jcph1556-tbl-0003:row9:col6 = '53.5 (6.9%)'
- unparsed cell jcph1556-tbl-0003:row10:col5 = '–0.95 to –0.30'
- unparsed cell jcph1556-tbl-0003:row11:col5 = '0.90 to 2.57'
- unparsed cell jcph1556-tbl-0003:row11:col6 = '1.92 (11.4%)'
- unparsed cell jcph1556-tbl-0003:row12:col5 = '–0.91 to –0.27'
- unparsed cell jcph1556-tbl-0003:row13:col5 = '0.06 to 0.07'
- unparsed cell jcph1556-tbl-0003:row13:col6 = '0.79 (8.9%)'
- unparsed cell jcph1556-tbl-0003:row15:col1 = '43.0%'
- unparsed cell jcph1556-tbl-0003:row15:col4 = '42.3%'
- unparsed cell jcph1556-tbl-0003:row15:col5 = '36.8% to 49.4%'
- unparsed cell jcph1556-tbl-0003:row15:col6 = '19.6% (5.8%)'
- unparsed cell jcph1556-tbl-0003:row16:col1 = '215.3%'
- unparsed cell jcph1556-tbl-0003:row16:col4 = '215.2%'
- unparsed cell jcph1556-tbl-0003:row16:col5 = '170.3% to 267.6%'
- unparsed cell jcph1556-tbl-0003:row16:col6 = '11.0% (52.0%)'
- unparsed cell jcph1556-tbl-0003:row17:col1 = '112.8%'
- unparsed cell jcph1556-tbl-0003:row17:col4 = '126.8%'
- unparsed cell jcph1556-tbl-0003:row17:col5 = '42.4% to 212.8%'
- unparsed cell jcph1556-tbl-0003:row17:col6 = '3.2% FIXED'
- unparsed cell jcph1556-tbl-0003:row18:col1 = '65.8%'
- unparsed cell jcph1556-tbl-0003:row18:col4 = '59.7%'
- unparsed cell jcph1556-tbl-0003:row18:col5 = '18.0% to 85.8%'
- unparsed cell jcph1556-tbl-0003:row18:col6 = '3.2% FIXED'
- unparsed cell jcph1556-tbl-0003:row19:col1 = '13.5%'
- unparsed cell jcph1556-tbl-0003:row19:col4 = '11.0%'
- unparsed cell jcph1556-tbl-0003:row19:col5 = '4.1% to 21.1%'
- unparsed cell jcph1556-tbl-0003:row19:col6 = '53.4% (10.6%)'
- unparsed cell jcph1556-tbl-0003:row21:col1 = '65.8%'
- unparsed cell jcph1556-tbl-0003:row21:col4 = '65.7%'
- unparsed cell jcph1556-tbl-0003:row21:col5 = '59.2 to 73.3'
- unparsed cell jcph1556-tbl-0003:row21:col6 = '58.6%'
- unparsed cell jcph1556-tbl-0003:row22:col1 = '59.5%'
- unparsed cell jcph1556-tbl-0003:row22:col4 = '59.3%'
- unparsed cell jcph1556-tbl-0003:row22:col5 = '51.4 to 67.9'
- unparsed cell Lin_2020_2_table_4:row0:col1 = 'Typical 70‐kg hematologic patient with 38.2% BMB and no concomitant use of CYP3A inhibitor'
- unparsed cell Lin_2020_2_table_4:row4:col1 = '61.24 kg (10th)'
- unparsed cell Lin_2020_2_table_4:row4:col4 = '↓ 10%'
- unparsed cell Lin_2020_2_table_4:row8:col1 = '15% (10th)'
- unparsed cell Lin_2020_2_table_4:row8:col4 = '↑ 9%'
- unparsed cell Lin_2020_2_table_4:row10:col4 = '↓ 17%'
- unparsed cell Lin_2020_2_table_4:row16:col4 = '↓ 83%'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.526 (10/19 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θbpbl]` | -0.004 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbpbl]` |  | -0.004 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcypmod]` | -0.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcypstrong]` | -0.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcypstrong]` |  | -0.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θsolid]` |  | -0.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θwncl]` |  | 0.41 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | glasdegib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | glasdegib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1556-tbl-0003:row3:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph1556-tbl-0003:row8:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph1556-tbl-0003:row13:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph1556-tbl-0003:row11:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph1556-tbl-0003:row9:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.23 L/h | ['jcph1556-tbl-0003:row3:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 3.52 L | ['jcph1556-tbl-0003:row8:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 296 L | ['jcph1556-tbl-0003:row9:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=glasdegib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_modelica.zip" download>Glasdegib_Lin2020v2_estimate_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_fmi.zip" download>Glasdegib_Lin2020v2_estimate_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_matlab.zip" download>Glasdegib_Lin2020v2_estimate_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_matlab_simbio.zip" download>Glasdegib_Lin2020v2_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_sbml.zip" download>Glasdegib_Lin2020v2_estimate_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_cellml.zip" download>Glasdegib_Lin2020v2_estimate_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3744 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-06 | kg |
| input | model | `Cl` | 1.731e-06 | m3/s |
| input | model | `VdPerKg` | 5.029e-05 | m3/kg |
| input | model | `k12` | 0.0001247 | 1/s |
| input | model | `k21` | 1.483e-06 | 1/s |
| input | model | `ka` | 1.667e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Lin S, Shaik N, Martinelli G, Wagner AJ, Cortes J, Ruiz-Garcia A. Population Pharmacokinetics of Glasdegib in Patients With Advanced Hematologic Malignancies and Solid Tumors. Journal of clinical pharmacology 60(5):605–616 (2020). [doi:10.1002/jcph.1556](https://doi.org/10.1002/jcph.1556)

**This record:** Pharmacolibrary v26.09, model `Glasdegib_Lin2020v2_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate>

```bibtex
@misc{pharmacolibrary_GlasdegibLin2020v2estimate,
  title  = {{Pharmacolibrary model Glasdegib_Lin2020v2_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate},
  note   = {Parameters from doi:10.1002/jcph.1556},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 5 mg, single dose, first-order absorption (ka 0.06 /h, F 1). Doses in the paper: 5, 10, 20, 40, 80, 100, 120, 160, 180, 200, 270, 320, 400, 600, 640 mg.

<dbs-fmusim paramsurl="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate/Glasdegib_Lin2020v2_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Glasdegib_Lin2020v2_estimate_params.json` · controls `Glasdegib_Lin2020v2_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglasdegib%5D%20Glasdegib_Lin2020v2_estimate&body=Drug%3A%20glasdegib%0ARecord%3A%20Glasdegib_Lin2020v2_estimate%0APaper%3A%20Lin_2020_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:43 UTC</sub>
