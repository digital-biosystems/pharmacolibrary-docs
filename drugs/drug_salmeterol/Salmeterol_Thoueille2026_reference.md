<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salmeterol&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/&quot;},{&quot;label&quot;:&quot;Thoueille_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salmeterol_Berkhout2025_reference&quot;,&quot;label&quot;:&quot;Berkhout_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Berkhout2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Himstedt2020_salmeterol&quot;,&quot;label&quot;:&quot;Himstedt_2020_salmeterol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Thoueille2026_reference&quot;,&quot;label&quot;:&quot;Thoueille_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salmeterol — `Salmeterol_Thoueille2026_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The salmeterol parent–metabolite model was rejected because the simulated structure was a one-compartment enteral model instead of the three-compartment parent–metabolite topology, the output was the parent central compartment rather than the metabolite, and the peripheral volume V2/F (871 L) was neither emitted nor defaulted.**

The record describes a parent–metabolite structure for salmeterol forming α-hydroxysalmeterol (k13 = 0.30 h⁻¹) with three compartments (V1/F 446 L, V2/F 871 L, Q/F 1490 L/h, CL/F 193 L/h), but the simulated model was a one-compartment enteral model, so the structure did not match. The simulated output was the parent's central compartment instead of the measured metabolite compartment. Of 8 expected parameters, only 7 were covered: V2/F was missing. In addition, the athlete covariate effect (θAthletes = 2.91) was defined but only the reference individual was simulated, so covariate scenarios were not exercised; the builder also left the lag time at a default and assumed F = 1, Fm = 1 with no molar correction. Extracted — salmeterol: V1/F 446 L, Q/F 1.49e+03 L/h, V2/F 871 L, CL/F 193 L/h, kel 0.00094 h −1, kabs -0.89 h−1; α-hydroxysalmeterol: kfm 0.3 h −1, CL/F 233 L/h, kel 0.015 h −1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has salmeterol → α-hydroxysalmeterol (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Thoueille P et al., Pharmacometric-Based Evaluation of Salm…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70187](https://doi.org/10.1002/psp4.70187)

<div class="pk-model-meta" hidden drug="salmeterol" model-id="Salmeterol_Thoueille2026_reference" status="rejected" stale="false" population="healthy participants, chronic asthmatics, and athletes" measured-compound="salmeterol" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1/F (L) | `Q290` · V1/F | 446 | L | 0.446 | [l] | not captured | exact (1.0) | psp470187-tbl-0002:row2:col1 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 1490 | L/h | 0.0004138888888888889 | [l] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row4:col1 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 871 | L | 0.871 | [l] | not captured | exact (1.0) | psp470187-tbl-0002:row6:col1 | — | not captured |
| CLS/F (L/h) | `Q27` · CL/F | 193 | L/h | 5.3611111111111115e-05 | [l] / [h] | not captured | llm (0.6) | psp470187-tbl-0002:row8:col1 | — | not captured |
| k13 (h −1 ) | `Q305` · kfm | 0.30 | h −1 | 8.333333333333333e-05 | [1] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row11:col1 | — | not captured |
| CLα/F (L/h) | `Q27` · CL/F | 233 | L/h | 6.472222222222223e-05 | [l] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row13:col1 | — | not captured |
| k14 (h −1 ) | `Q47` · kel | 0.00094 | h −1 | 2.6111111111111113e-07 | [1] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row14:col1 | — | not captured |
| k35 (h −1 ) | `Q47` · kel | 0.015 | h −1 | 4.166666666666667e-06 | [1] / [h] | not captured | exact (1.0) | psp470187-tbl-0002:row17:col1 | — | not captured |
| θAthletes | `Q900` · θAthletes | 2.91 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| KA | `Q49` · kabs | -0.89 | h−1 | -0.00024722222222222224 | 1/h | not captured | review_gapfill (0.7) | Ambery_2015:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'Parameters'
- kept covariate coefficient θAthletes=2.91 (covariate Athletes) — not an ontology parameter
- dropped unlinked row (NIL): 'UR_PROD (L/h)' — extend the ontology if this is a real PK parameter (source ['psp470187-tbl-0002:row18:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=salmeterol
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- row roles: 3 per-group rows of salmeterol residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of α-hydroxysalmeterol residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 8 linked by role; re-tagged parent→α-hydroxysalmeterol ×7
- gap-filled Q49 (kabs) from Ambery_2015's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell psp470187-tbl-0002:row2:col2 = '446 [356–524]'
- unparsed cell psp470187-tbl-0002:row3:col2 = '16 [5–22]'
- unparsed cell psp470187-tbl-0002:row4:col2 = '1443 [1121–2144]'
- unparsed cell psp470187-tbl-0002:row5:col2 = '81 [33–174]'
- unparsed cell psp470187-tbl-0002:row6:col2 = '873 [766–985]'
- unparsed cell psp470187-tbl-0002:row7:col2 = '43 [28–62]'
- unparsed cell psp470187-tbl-0002:row8:col2 = '192 [154–231]'
- unparsed cell psp470187-tbl-0002:row9:col2 = '31 [16–44]'
- unparsed cell psp470187-tbl-0002:row10:col2 = '1.64 [1.23–2.16]'
- unparsed cell psp470187-tbl-0002:row11:col2 = '0.30 [0.23–0.39]'
- unparsed cell psp470187-tbl-0002:row12:col2 = '41 [25–54]'
- unparsed cell psp470187-tbl-0002:row13:col2 = '232 [177–293]'
- unparsed cell psp470187-tbl-0002:row14:col2 = '0.00095 [0.00075–0.0012]'
- unparsed cell psp470187-tbl-0002:row15:col2 = '27 [19–37]'
- unparsed cell psp470187-tbl-0002:row16:col2 = '2.91 [2.28–3.70]'
- unparsed cell psp470187-tbl-0002:row17:col2 = '0.015 [0.012–0.017]'
- unparsed cell psp470187-tbl-0002:row18:col2 = '0.080 [0.062–0.100]'
- unparsed cell psp470187-tbl-0002:row19:col2 = '72 [40–109]'
- unparsed cell psp470187-tbl-0002:row20:col2 = '22 [19–24]'
- unparsed cell psp470187-tbl-0002:row21:col2 = '38 [31–45]'
- unparsed cell psp470187-tbl-0002:row22:col2 = '52 [33–65]'
- unparsed cell psp470187-tbl-0002:row23:col2 = '29 [22–35]'
- unparsed cell psp470187-tbl-0002:row24:col2 = '40 [36–46]'
- unparsed cell psp470187-tbl-0002:row25:col2 = '38 [31–45]'
- unparsed cell psp470187-tbl-0002:row26:col2 = '57 [41–75]'
- unparsed cell psp470187-tbl-0002:row27:col2 = '51 [41–61]'
- unparsed cell psp470187-tbl-0002:row28:col2 = '60 [44–73]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (9/18 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['salmeterol', 'α-hydroxysalmeterol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clα/f]` | 233 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | not captured | 0.30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k13]` | 0.30 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14].parameter_id` | Q47 | Q347 | mismatch |
| `gpt-oss-120b` | `parameters[k35]` | not captured | 0.015 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k35]` | 0.015 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | -0.89 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ur_prod]` | not captured | 0.079 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row8:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row13:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470187-tbl-0002:row2:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row11:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row14:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row17:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ambery_2015:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470187-tbl-0002:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470187-tbl-0002:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 193 L/h | not captured | not captured | ['psp470187-tbl-0002:row8:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 233 L/h | not captured | not captured | ['psp470187-tbl-0002:row13:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 446 L | not captured | not captured | ['psp470187-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 871 L | not captured | not captured | ['psp470187-tbl-0002:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=salmeterol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 8 scholar param(s) emitted or defaulted | 7 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_rate_constant_conversion | not captured | pass | k13 (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_shared_parameters | not captured | pass | 3 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 0.13 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | not captured | 0.0 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salmeterol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thoueille_2026` / `Thoueille_2026::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salmeterol/models/modelica/Salmeterol_Thoueille2026_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salmeterol/models/modelica/Salmeterol_Thoueille2026_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salmeterol/models/modelica/Salmeterol_Thoueille2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.1 mg, single dose, first-order absorption (ka -0.89 /h, F 1). Doses in the paper: 0.1, 0.2 mg.

<dbs-fmusim paramsurl="drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference/Salmeterol_Thoueille2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference/Salmeterol_Thoueille2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Salmeterol_Thoueille2026_reference_params.json` · controls `Salmeterol_Thoueille2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:51 UTC</sub>
