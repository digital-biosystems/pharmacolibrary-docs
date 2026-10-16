<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;sotatercept&quot;,&quot;href&quot;:&quot;drugs/drug_sotatercept/&quot;},{&quot;label&quot;:&quot;Ait-Oudhia_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotatercept_AitOudhia2024_reference&quot;,&quot;label&quot;:&quot;Ait-Oudhia_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sotatercept — `Sotatercept_AitOudhia2024_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.579), gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Sotatercept absolute bioavailability and lag time were left at library defaults, and covariate effects were not simulated.**

The record lists an absolute bioavailability of 6.29, but the review notes that bioavailability and lag time were defaulted rather than extracted from the paper. Additionally, the model defines covariate effects for albumin and body weight, yet only the reference individual was simulated, leaving these effects unverified. Extracted — sotatercept: CL 6.22 L/day, V1 5.5 L, Q 20.5 L/day, V2 15.8 L, kabs 16 1/day, Fab 6.29.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].rse_percent`: this record has 16.9, the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-06 16:58:25.215612+00:00) predates the upstream re-run (2026-10-07 15:30:15.587728+00:00). Current validate status: `extracted`.

## Citation
Ait-Oudhia S et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13166](https://doi.org/10.1002/psp4.13166)

<div class="pk-model-meta" hidden drug="sotatercept" model-id="Sotatercept_AitOudhia2024_reference" status="extracted" stale="true" population="healthy participants and patients with pulmonary arterial hypertension" measured-compound="sotatercept" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 6.22 | L/day | 7.199074074074074e-08 | L/h | 16.9 | exact (1.0) | psp413166-tbl-0002:row2:col2, psp413166-tbl-0002:row2:col3, psp413166-tbl-0002:row2:col6 | — | not captured |
| exponent_of_baseline_albumin_effect_a | `Q900` · exponent_of_baseline_albumin_effect_a | 24.2 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413166-tbl-0002:row4:col1, psp413166-tbl-0002:row4:col2 | — | not captured |
| VC | `Q63` · V1 | 5.50 | L | 0.0055 | L | 31.0 | exact (1.0) | psp413166-tbl-0002:row5:col2, psp413166-tbl-0002:row5:col3, psp413166-tbl-0002:row5:col6 | — | not captured |
| Q | `Q30` · Q | 20.5 | L/day | 2.3726851851851853e-07 | L/h | not captured | exact (1.0) | psp413166-tbl-0002:row7:col2, psp413166-tbl-0002:row7:col3 | — | not captured |
| VP | `Q64` · V2 | 15.8 | L | 0.0158 | L | 28.2 | exact (1.0) | psp413166-tbl-0002:row8:col2, psp413166-tbl-0002:row8:col3, psp413166-tbl-0002:row8:col6 | — | not captured |
| KA | `Q49` · kabs | 16.0 | 1/h | 0.0044444444444444444 | 1/h | 24.2 | exact (1.0) | psp413166-tbl-0002:row9:col1, psp413166-tbl-0002:row9:col2, psp413166-tbl-0002:row9:col3, psp413166-tbl-0002:row9:col6 | — | not captured |
| F1 | `Q40` · Fab | 6.29 | not captured | not captured | not captured | 26.3 | exact (1.0) | psp413166-tbl-0002:row10:col2, psp413166-tbl-0002:row10:col3, psp413166-tbl-0002:row10:col6 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 11.9 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413166-tbl-0002:row3:col1, psp413166-tbl-0002:row3:col2 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 11.8 | not captured | not captured | not captured | not captured | not captured (not captured) | psp413166-tbl-0002:row6:col1, psp413166-tbl-0002:row6:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'parameter, definition and (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Exponent of baseline albumin effect (−) a' → Q900:exponent_of_baseline_albumin_effect_a = 24.2 (power on Q22)
- dropped unlinked row (NIL): 'Minimum value of the objective function = −6707.007; Condition number = 124' — extend the ontology if this is a real PK parameter (source ['psp413166-tbl-0002:row13:col1', 'psp413166-tbl-0002:row13:col2', 'psp413166-tbl-0002:row13:col3', 'psp413166-tbl-0002:row13:col4', 'psp413166-tbl-0002:row13:col5', 'psp413166-tbl-0002:row13:col6', 'psp413166-tbl-0002:row13:col7'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL' → L/day (from the paper text: 'The text states: "For example, the typical values for CL are 0.135, 0.177, and 0.237 L/day for subjects with BWs of 50, ')
- implicit units: 'VC' → L (from the paper text: 'The text states: "...and the typical values for VC are 2.55, 3.60, and 5.18 L for subjects with BWs of 50, 70, and 100."')
- implicit units: 'Q' → L/day (from the popPK convention: 'The paper does not explicitly state the unit for Q (intercompartmental clearance). However, since CL is reported in L/da')
- implicit units: 'VP' → L (from the popPK convention: 'The paper does not explicitly state the unit for VP, but VP is a volume of distribution. The text states VC values in L ')
- implicit units: 'KA' → 1/h (from the popPK convention: 'The paper does not explicitly state the unit for KA. First-order absorption rate constants are conventionally reported i')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sotatercept
- molar mass: none found for 'sotatercept' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413166-tbl-0002:row2:col4 = '0.176 (0.150, 0.200)'
- unparsed cell psp413166-tbl-0002:row2:col5 = '28.3 %CV'
- unparsed cell psp413166-tbl-0002:row2:col7 = '28.2 %CV (23.1%, 32.8%)'
- unparsed cell psp413166-tbl-0002:row3:col3 = '0.809 (0.604, 1.00)'
- unparsed cell psp413166-tbl-0002:row4:col3 = '−0.851 (−1.27, −0.454)'
- unparsed cell psp413166-tbl-0002:row5:col4 = '3.61 (3.25, 4.11)'
- unparsed cell psp413166-tbl-0002:row5:col5 = '24.7 %CV'
- unparsed cell psp413166-tbl-0002:row5:col7 = '24.0 %CV (15.3%, 31.7%)'
- unparsed cell psp413166-tbl-0002:row6:col3 = '0.999 (0.732, 1.25)'
- unparsed cell psp413166-tbl-0002:row7:col4 = '0.476 (0.239, 0.677)'
- unparsed cell psp413166-tbl-0002:row8:col4 = '1.66 (0.740, 2.24)'
- unparsed cell psp413166-tbl-0002:row8:col5 = '73.3 %CV'
- unparsed cell psp413166-tbl-0002:row8:col7 = '81.9 %CV (52.9%, 188.2%)'
- unparsed cell psp413166-tbl-0002:row9:col4 = '0.275 (0.199, 0.371)'
- unparsed cell psp413166-tbl-0002:row9:col5 = '60.4 %CV'
- unparsed cell psp413166-tbl-0002:row9:col7 = '60.4 %CV (41.6%, 77.3%)'
- unparsed cell psp413166-tbl-0002:row10:col4 = '0.657 (0.557, 0.745)'
- unparsed cell psp413166-tbl-0002:row10:col5 = '11.9 %CV d'
- unparsed cell psp413166-tbl-0002:row10:col7 = '11.9 %CV (5.8%, 19.8%)'
- unparsed cell psp413166-tbl-0002:row11:col4 = '0.0574 (0.0376, 0.0838)'
- unparsed cell psp413166-tbl-0002:row11:col5 = '0.239 SD e'
- unparsed cell psp413166-tbl-0002:row11:col7 = '0.240 SD (0.194, 0.289)'
- unparsed cell psp413166-tbl-0002:row12:col4 = '0.0357 (0.0279, 0.0456)'
- unparsed cell psp413166-tbl-0002:row12:col5 = '0.189 SD e'
- unparsed cell psp413166-tbl-0002:row12:col7 = '0.189 SD (0.167, 0.214)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.579 (11/19 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.667 (14/21 fields) | 7 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 16.9 | not captured | mismatch |
| `gpt-oss-120b` | `parameters[exponent_of_baseline_albumin_effect_a]` | 24.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1].rse_percent` | 26.3 | not captured | mismatch |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 24.2 | not captured | mismatch |
| `gpt-oss-120b` | `parameters[theta_q38_albumin_power]` | not captured | 24.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].rse_percent` | 31.0 | not captured | mismatch |
| `gpt-oss-120b` | `parameters[vp].rse_percent` | 28.2 | not captured | mismatch |
| `gpt-oss:120b` | `model.bioavailability.theta` | not captured | 0.348 | only_one_extracted |
| `gpt-oss:120b` | `parameters[%cv of sc bioavailability]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[exponent_of_baseline_albumin_effect_a]` | 24.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q38_albumin_power]` | not captured | 24.2 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | sotatercept | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | sotatercept | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413166-tbl-0002:row2:col2', 'psp413166-tbl-0002:row2:col3', 'psp413166-tbl-0002:row2:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413166-tbl-0002:row7:col2', 'psp413166-tbl-0002:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413166-tbl-0002:row9:col1', 'psp413166-tbl-0002:row9:col2', 'psp413166-tbl-0002:row9:col3', 'psp413166-tbl-0002:row9:col6'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413166-tbl-0002:row5:col2', 'psp413166-tbl-0002:row5:col3', 'psp413166-tbl-0002:row5:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413166-tbl-0002:row8:col2', 'psp413166-tbl-0002:row8:col3', 'psp413166-tbl-0002:row8:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.22 | not captured | not captured | ['psp413166-tbl-0002:row2:col2', 'psp413166-tbl-0002:row2:col3', 'psp413166-tbl-0002:row2:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.259 L/h | not captured | not captured | ['psp413166-tbl-0002:row2:col2', 'psp413166-tbl-0002:row2:col3', 'psp413166-tbl-0002:row2:col6'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.5 L | not captured | not captured | ['psp413166-tbl-0002:row5:col2', 'psp413166-tbl-0002:row5:col3', 'psp413166-tbl-0002:row5:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 15.8 L | not captured | not captured | ['psp413166-tbl-0002:row8:col2', 'psp413166-tbl-0002:row8:col3', 'psp413166-tbl-0002:row8:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=sotatercept) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | pass | 528.0 | 499.53140365314204 | 0.9461 | days→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 499.53140365314204 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sotatercept/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ait-Oudhia_2024` / `Ait-Oudhia_2024::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sotatercept/models/modelica/Sotatercept_AitOudhia2024_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sotatercept/models/modelica/Sotatercept_AitOudhia2024_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sotatercept/models/modelica/Sotatercept_AitOudhia2024_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_modelica.zip" download>Sotatercept_AitOudhia2024_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_fmi.zip" download>Sotatercept_AitOudhia2024_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_matlab.zip" download>Sotatercept_AitOudhia2024_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_matlab_simbio.zip" download>Sotatercept_AitOudhia2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_sbml.zip" download>Sotatercept_AitOudhia2024_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_cellml.zip" download>Sotatercept_AitOudhia2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference.svg" alt="Sotatercept_AitOudhia2024_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.7 mg, single dose, first-order absorption (ka 16 /h, F 0.9). Doses in the paper: 0.7, 2.1, 21, 49, 70, 210 mg.

<dbs-fmusim paramsurl="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference/Sotatercept_AitOudhia2024_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Sotatercept_AitOudhia2024_reference_params.json` · controls `Sotatercept_AitOudhia2024_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:30 UTC</sub>
