<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;haloperidol&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/&quot;},{&quot;label&quot;:&quot;Pilla_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Franken2017_reference&quot;,&quot;label&quot;:&quot;Franken_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Franken2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_base&quot;,&quot;label&quot;:&quot;Li_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Li2022_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_haloperidol/Haloperidol_Li2022_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# haloperidol — `Haloperidol_Pilla2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-06 15:45 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The haloperidol record was held back because the absorption rate constant (ka) was not reported in the source and a placeholder value was substituted, alongside an apparent-bioavailability assumption (F=1, Fm=1) without molar correction.

<div class="pk-model-meta" hidden drug="haloperidol" model-id="Haloperidol_Pilla2013_reference" status="needs_review" stale="true" population="patients with schizophrenia" measured-compound="haloperidol" parameterization="apparent" topology="2C"></div>

## Citation
Pilla Reddy V, Kozielska M, Johnson M, Mafirakureva N, Vermeulen A, Liu J et al. Population pharmacokinetic-pharmacodynamic modeling of haloperidol in patients with schizophrenia using positive and negative syndrome rating scale. Journal of clinical psychopharmacology 33(6):731–739 (2013).
  ·  DOI: [10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c)

## Population and dosing

**Population:** patients with schizophrenia · condition schizophrenia · age group adult · n = 122.

**Dosing:** 1, 60 mg/d, other, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 86 | L/h |  |
| Q/F (L/h) | Q/F | 12 | L/h |  |
| Vc/F (L) | V1/F | 9 | L |  |
| Vp/F (L) | V2/F | 12 | L |  |
| Ka (h j1 ) | kabs | 6 | h j1 |  |
| RUV proportional | sigma | 0.44 |  |  |
| Baseline PANSS | E0 | 0.5 |  | 16 (None% RSE) |
| P max | Cmax | 4 |  |  |
| E max | Emax | 0.29 |  |  |
| EC 50 (ng/mL) | EC50 | 2.71 | ng/mL |  |
| KT (1/d) | kel | 6 |  |  |
| t 2 (delay in drug effect in days)* | tlag | 6 |  |  |
| BHAZ: placebo (1/d) | placebo_Emax | 0.1 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.294). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The haloperidol record was held back because the absorption rate constant (ka) was not reported in the source and a placeholder value was substituted, alongside an apparent-bioavailability assumption (F=1, Fm=1) without molar correction.**

The ka value of 6 (unit 'h j1') and the lag time tlag of 6 were not extracted from the source; library defaults were used instead, which the adjudication judged an invented absorption process and not acceptable. The model was parameterized as apparent (F=1, Fm=1, no molar correction), so all reported clearances and volumes (CL/F 86 L/h, Q/F 12 L/h, V1/F 9 L, V2/F 12 L) are bioavailability-adjusted. The reported unit 'h j1' for ka could not be converted to SI, so that parameter was carried without an SI value. A second reader disagreed on the classification of the placebo-effect parameter (maximum placebo effect, 0.1 1/d) and of the elimination rate constant kel (6 1/d). Extracted — haloperidol: CL/F 86 L/h, Q/F 12 L/h, V1/F 9 L, V2/F 12 L, kabs 6 h j1, sigma 0.44, E0 0.5, Cmax 4, … (+5).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of baseline panss: this record has 0.5, the second reading none; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 86 | L/h | 2.389e-05 | m3/s | l/h | exact (1) | tab_1:row4:col1, tab_1:row4:col3 |  |
| Q/F (L/h) | `Q69` · Q/F | 12 | L/h | 3.333e-06 | m3/s | l/h | exact (1) | tab_1:row5:col1, tab_1:row5:col3, tab_1:row5:col4 |  |
| Vc/F (L) | `Q290` · V1/F | 9 | L | 0.009 | m3 | l | exact (1) | tab_1:row6:col1, tab_1:row6:col3, tab_1:row6:col4 |  |
| Vp/F (L) | `Q82` · V2/F | 12 | L | 0.012 | m3 | l | exact (1) | tab_1:row7:col1, tab_1:row7:col3, tab_1:row7:col4 |  |
| Ka (h j1 ) | `Q49` · kabs | 6 | h j1 |  |  | h·j1 | exact (1) | tab_1:row8:col1, tab_1:row8:col3, tab_1:row8:col4 |  |
| RUV proportional | `Q315` · sigma | 0.44 |  |  |  |  | boundary (0.8) | tab_1:row11:col1, tab_1:row11:col3 |  |
| Baseline PANSS | `Q324` · E0 | 0.5 |  |  |  |  | boundary (0.8) | tab_1:row13:col1, tab_1:row13:col3, tab_1:row13:col4 | 16 (None% RSE) |
| P max | `Q32` · Cmax | 4 |  |  |  |  | llm (0.5) | tab_1:row14:col1, tab_1:row14:col3, tab_1:row14:col4 |  |
| E max | `Q320` · Emax | 0.29 |  |  |  |  | llm (0.5) | tab_1:row15:col1, tab_1:row15:col3 |  |
| EC 50 (ng/mL) | `Q321` · EC50 | 2.71 | ng/mL |  |  | ng/ml | llm (0.5) | tab_1:row16:col1, tab_1:row16:col3 |  |
| KT (1/d) | `Q47` · kel | 6 |  |  |  |  | llm (0.5) | tab_1:row17:col1, tab_1:row17:col3, tab_1:row17:col4 |  |
| t 2 (delay in drug effect in days)* | `Q83` · tlag | 6 |  |  |  |  | llm (0.5) | tab_1:row18:col1 |  |
| BHAZ: placebo (1/d) | `Q341` · placebo_Emax | 0.1 |  |  |  |  | llm (0.5) | tab_1:row19:col1, tab_1:row19:col3, tab_1:row19:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h j1' (kabs)
- dropped duplicate Q47 ('BHAZ: haloperidol (1/d)', value '0.1') — already have one for this compound
- unit_dimension_unknown: 'additive' (sigma)
- dropped duplicate Q315 ('RUV as SD (additive)', value '0.1') — already have one for this compound
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 16.2 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=haloperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- unparsed cell tab_1:row4:col2 = '89 (77Y101)'
- unparsed cell tab_1:row4:col4 = 'j2'
- unparsed cell tab_1:row5:col2 = '225 (56Y391)'
- unparsed cell tab_1:row6:col2 = '637 (91Y1143)'
- unparsed cell tab_1:row7:col2 = '2487 (573Y3565)'
- unparsed cell tab_1:row8:col2 = '0.227 (0.056Y0.387)'
- unparsed cell tab_1:row9:col2 = '44 (31Y55)'
- unparsed cell tab_1:row9:col4 = 'j0.5'
- unparsed cell tab_1:row10:col2 = '119 (95Y180)'
- unparsed cell tab_1:row10:col4 = 'j5'
- unparsed cell tab_1:row11:col2 = '0.44 (0.38Y0.50)'
- unparsed cell tab_1:row11:col4 = 'j6'
- unparsed cell tab_1:row13:col2 = '91.6 (90.8Y92.3)'
- unparsed cell tab_1:row14:col2 = '0.075 (0.064Y0.096)'
- unparsed cell tab_1:row15:col2 = '0.34 (0.19Y0.66)'
- unparsed cell tab_1:row15:col4 = 'j2'
- unparsed cell tab_1:row16:col2 = '4.03(1.89Y10.78)'
- unparsed cell tab_1:row16:col4 = 'j15'
- unparsed cell tab_1:row17:col2 = '0.113 (0.062Y0.167)'
- unparsed cell tab_1:row19:col2 = '0.00144 (0.0009Y0.0015)'
- unparsed cell tab_1:row20:col2 = '0.00087 (0.00066Y0.00111)'
- unparsed cell tab_1:row21:col1 = 'j0.0295 (2)'
- unparsed cell tab_1:row21:col2 = 'j0.0292 (j0.0317 to 0.0271)'
- unparsed cell tab_1:row21:col3 = 'j0.0292'
- unparsed cell tab_1:row21:col4 = 'j0.2'
- unparsed cell tab_1:row22:col2 = '0.20 (0.19Y0.22)'
- unparsed cell tab_1:row22:col4 = 'j0.2'
- unparsed cell tab_1:row23:col2 = '16 (15Y17)'
- unparsed cell tab_1:row23:col4 = 'j1'
- unparsed cell tab_1:row24:col2 = '0.28 (0.17Y0.48)'
- unparsed cell tab_1:row24:col4 = 'j7'
- unparsed cell tab_1:row25:col2 = '151 (76Y287)'
- unparsed cell tab_1:row26:col2 = '8.7 (8.3Y9.1)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.294 (5/17 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[baseline panss]` | 0.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bhaz: placebo]` | 0.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].value` | 86 |  | mismatch |
| `gpt-oss-120b` | `parameters[e max]` | 0.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ec 50]` | 2.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 6 | 0.236 | mismatch |
| `gpt-oss-120b` | `parameters[kt].value` | 6 | 0.116 | mismatch |
| `gpt-oss-120b` | `parameters[p max]` | 4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f].value` | 12 | 233 | mismatch |
| `gpt-oss-120b` | `parameters[ruv proportional]` | 0.44 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f].value` | 9 | 669 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f].value` | 12 | 2500 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row4:col1', 'tab_1:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row6:col1', 'tab_1:row6:col3', 'tab_1:row6:col4'] |
| C5_dimension_Q321 | pass | [mass] / [length] ** 3 |  | ['tab_1:row16:col1', 'tab_1:row16:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col1', 'tab_1:row5:col3', 'tab_1:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['tab_1:row7:col1', 'tab_1:row7:col3', 'tab_1:row7:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['tab_1:row14:col1', 'tab_1:row14:col3', 'tab_1:row14:col4'] |
| C5_unit_missing_Q47 | fail | 1 / [time] |  | ['tab_1:row17:col1', 'tab_1:row17:col3', 'tab_1:row17:col4'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | h j1 | ['tab_1:row8:col1', 'tab_1:row8:col3', 'tab_1:row8:col4'] |
| C5_unit_missing_Q83 | fail | [time] |  | ['tab_1:row18:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 86 L/h | ['tab_1:row4:col1', 'tab_1:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 9 L | ['tab_1:row6:col1', 'tab_1:row6:col3', 'tab_1:row6:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12 L | ['tab_1:row7:col1', 'tab_1:row7:col3', 'tab_1:row7:col4'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=haloperidol) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 7 scholar param(s) emitted or defaulted | 7 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_modelica.zip" download>Haloperidol_Pilla2013_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_fmi.zip" download>Haloperidol_Pilla2013_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_matlab.zip" download>Haloperidol_Pilla2013_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_matlab_simbio.zip" download>Haloperidol_Pilla2013_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_sbml.zip" download>Haloperidol_Pilla2013_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_haloperidol/Haloperidol_Pilla2013_reference/Haloperidol_Pilla2013_reference_cellml.zip" download>Haloperidol_Pilla2013_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Pilla Reddy V, Kozielska M, Johnson M, Mafirakureva N, Vermeulen A, Liu J et al. Population pharmacokinetic-pharmacodynamic modeling of haloperidol in patients with schizophrenia using positive and negative syndrome rating scale. Journal of clinical psychopharmacology 33(6):731–739 (2013). [doi:10.1097/JCP.0b013e3182a4ee2c](https://doi.org/10.1097/JCP.0b013e3182a4ee2c)

**This record:** Pharmacolibrary v26.09, model `Haloperidol_Pilla2013_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_haloperidol/Haloperidol_Pilla2013_reference>

```bibtex
@misc{pharmacolibrary_HaloperidolPilla2013reference,
  title  = {{Pharmacolibrary model Haloperidol_Pilla2013_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_haloperidol/Haloperidol_Pilla2013_reference},
  note   = {Parameters from doi:10.1097/JCP.0b013e3182a4ee2c},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhaloperidol%5D%20Haloperidol_Pilla2013_reference&body=Drug%3A%20haloperidol%0ARecord%3A%20Haloperidol_Pilla2013_reference%0APaper%3A%20Pilla_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_haloperidol/Haloperidol_Pilla2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 15:45 UTC</sub>
