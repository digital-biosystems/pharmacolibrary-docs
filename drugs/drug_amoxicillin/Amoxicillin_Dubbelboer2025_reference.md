<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/&quot;},{&quot;label&quot;:&quot;Dubbelboer_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amoxicillin_AlbanellFernndez2025_reference&quot;,&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_AlbanellFernndez2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Bardhi2026_reference&quot;,&quot;label&quot;:&quot;Bardhi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Bardhi2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Baklouti2026_reference&quot;,&quot;label&quot;:&quot;Baklouti_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Baklouti2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Dubbelboer2025_reference&quot;,&quot;label&quot;:&quot;Dubbelboer_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Amoxicillin_Echizen2016_reference&quot;,&quot;label&quot;:&quot;Echizen_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Echizen2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amoxicillin_Wu2021_reference&quot;,&quot;label&quot;:&quot;Wu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/Amoxicillin_Wu2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Li_1994_N&quot;,&quot;label&quot;:&quot;Li_1994 \u00b7 N&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_amoxicillin/pd_Li_1994_N.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amoxicillin — `Amoxicillin_Dubbelboer2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

> Amoxicillin absolute bioavailability was not set to the paper's 33%, and male covariate effects on absorption were not simulated.

<div class="pk-model-meta" hidden drug="amoxicillin" model-id="Amoxicillin_Dubbelboer2025_reference" status="needs_review" stale="false" population="healthy cats" measured-compound="amoxicillin" parameterization="mechanistic" topology="2C"></div>

## Citation
Dubbelboer IR, Olsén L, Pelander L, Lacroix MZ, Claustre L, Roques B et al. Pharmacokinetics of Amoxicillin in the Cat. Journal of veterinary pharmacology and therapeutics 48(5):380–388 (2025).
  ·  DOI: [10.1111/jvp.70003](https://doi.org/10.1111/jvp.70003)

## Population and dosing

**Population:** healthy cats · condition healthy · age group adult · n = 6.

**Dosing:** 700, 1050, 3500 mg, iv, oral, sc, single.

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference.svg" alt="Amoxicillin_Dubbelboer2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| V 1 | V1 | 0.12 | L/kg | 12.7 | 13.31 (None% RSE) |
| V 2 | V2 | 0.092 | L/kg | 0.0003 | 0.0001 (None% RSE) |
| V 3 | V3 | 0.021 | L/kg | 0.0002 | 0.00004 (None% RSE) |
| Cl | CL | 0.18 | L/kg·h | 4.97 | 8.03 (None% RSE) |
| Q 1 | Q | 0.39 | L/kg·h | 15.8 |  |
| Q 2 | Q2 | 0.009 | L/kg·h | 7.47 |  |
| T lagpo | tlag | 0.25 | h | 3.9 | 108.6 (None% RSE) |
| k apo | kabs | 0.6 | 1/h | 20.5 | 40.9 (None% RSE) |
| theta_kabs_sex_male | theta_kabs_sex_male | -1.7 |  | 22.3 |  |
| F oral | Fab | 33 | % | 8.2 | 12.8 (None% RSE) |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Amoxicillin absolute bioavailability was not set to the paper's 33%, and male covariate effects on absorption were not simulated.**

The record lists oral bioavailability as 33%, but the model used placeholder values rather than this reported estimate. Additionally, although the record includes a covariate effect on absorption for males, the simulation only exercised the reference individual. The second reader also disputed the identification of the absorption rate constant and its associated covariate. Extracted — amoxicillin: V1 0.12 L/kg, V2 0.092 L/kg, V3 0.021 L/kg, CL 0.18 L/kg·h, Q 0.39 L/kg·h, Q2 0.009 L/kg·h, tlag 0.25 h, kabs 0.6 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[f oral].parameter_id`: this record has Q87, the second reading Q40; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 | `Q63` · V1 | 0.12 | L/kg | 0.0084 | m3 | l/kg | 12.7 | space_fold (0.95) | jvp70003-tbl-0002:row1:col2 | 13.31 (None% RSE) |
| V 2 | `Q64` · V2 | 0.092 | L/kg | 0.00644 | m3 | l/kg | 0.0003 | space_fold (0.95) | jvp70003-tbl-0002:row2:col2 | 0.0001 (None% RSE) |
| V 3 | `Q77` · V3 | 0.021 | L/kg | 0.00147 | m3 | l/kg | 0.0002 | space_fold (0.95) | jvp70003-tbl-0002:row3:col2 | 0.00004 (None% RSE) |
| Cl | `Q22` · CL | 0.18 | L/kg·h | 3.5e-06 | m3/s | l/(h·kg) | 4.97 | exact (1) | jvp70003-tbl-0002:row4:col2 | 8.03 (None% RSE) |
| Q 1 | `Q30` · Q | 0.39 | L/kg·h | 7.583e-06 | m3/s | l/(h·kg) | 15.8 | space_fold (0.95) | jvp70003-tbl-0002:row5:col2 |  |
| Q 2 | `Q99` · Q2 | 0.009 | L/kg·h | 1.75e-07 | m3/s | l/(h·kg) | 7.47 | second_intercompartmental (0.9) | jvp70003-tbl-0002:row6:col2 |  |
| T lagpo | `Q83` · tlag | 0.25 | h | 900 | s | h | 3.9 | route_fold (0.9) | jvp70003-tbl-0002:row8:col2 | 108.6 (None% RSE) |
| k apo | `Q49` · kabs | 0.6 | 1/h | 0.0001667 | 1/s | 1/h | 20.5 | route_fold (0.9) | jvp70003-tbl-0002:row10:col2 | 40.9 (None% RSE) |
| theta_kabs_sex_male | `Q900` · theta_kabs_sex_male | -1.7 |  |  |  |  | 22.3 |  | jvp70003-tbl-0002:row11:col2 |  |
| F oral | `Q40` · Fab | 33 | % |  |  | % | 8.2 | route_fold (0.9) | jvp70003-tbl-0002:row13:col2 | 12.8 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- table section iiv: 'V 1' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'V 2' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'V 3' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'Cl' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'T lagpo' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'T lagsc' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'k apo' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'K asc' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'F oral' routed out of structural estimates ('I.I.V. (%)')
- table section iiv: 'F sc' routed out of structural estimates ('I.I.V. (%)')
- 'Q 2' linked to Q99: a second intercompartmental clearance beside the Q30 already present
- dropped duplicate Q83 ('T lagsc', value '0.06') — already have one for this compound
- covariate level 'K apo_covariate sex “male”' → Q900:theta_kabs_sex_male = -1.7 (linear_fractional on Q49)
- dropped duplicate Q49 ('K asc', value '0.31') — already have one for this compound
- dropped duplicate Q40 ('F sc', value '69') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- table jvp70003-tbl-0002: missing_unit_binding
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.6:27b-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.833 (20/24 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[f oral].parameter_id` | Q87 | Q40 | mismatch |
| `gpt-oss:120b` | `parameters[k apo].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss:120b` | `parameters[k apo_covariate sex “male”]` |  | -1.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k asc]` | 5.7 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Ground-truth comparison:** <span class="pk-badge pk-badge--orange">unconfirmed</span>  (0/10 matched, agreement 0.0, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q22` · CL | missing_in_extraction | None | 0.18 |  |
| `Q30` · Q | missing_in_extraction | None | 0.39 |  |
| `Q40` · Fab | missing_in_extraction | None | 0.33 |  |
| `Q49` · kabs | missing_in_extraction | None | 0.6 |  |
| `Q63` · V1 | missing_in_extraction | None | 0.12 |  |
| `Q64` · V2 | missing_in_extraction | None | 0.092 |  |
| `Q77` · V3 | missing_in_extraction | None | 0.021 |  |
| `Q83` · tlag | missing_in_extraction | None | 0.25 |  |
| `Q900:theta_sex_male` | missing_in_extraction | None | -1.7 |  |
| `Q99` · Q2 | missing_in_extraction | None | 0.009 |  |

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jvp70003-tbl-0002:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jvp70003-tbl-0002:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jvp70003-tbl-0002:row10:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jvp70003-tbl-0002:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jvp70003-tbl-0002:row2:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['jvp70003-tbl-0002:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['jvp70003-tbl-0002:row8:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['jvp70003-tbl-0002:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | ['jvp70003-tbl-0002:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.6 L/h | ['jvp70003-tbl-0002:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.4 L | ['jvp70003-tbl-0002:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.44 L | ['jvp70003-tbl-0002:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=amoxicillin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 7 scholar param(s) emitted or defaulted | 7 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_modelica.zip" download>Amoxicillin_Dubbelboer2025_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_fmi.zip" download>Amoxicillin_Dubbelboer2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_matlab.zip" download>Amoxicillin_Dubbelboer2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_matlab_simbio.zip" download>Amoxicillin_Dubbelboer2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_sbml.zip" download>Amoxicillin_Dubbelboer2025_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_cellml.zip" download>Amoxicillin_Dubbelboer2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3654 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 900 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0007 | kg |
| input | model | `Cl` | 3.5e-06 | m3/s |
| input | model | `VdPerKg` | 0.00012 | m3/kg |
| input | model | `k12` | 0.0009028 | 1/s |
| input | model | `k21` | 0.001178 | 1/s |
| input | model | `ka` | 0.0001667 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Dubbelboer IR, Olsén L, Pelander L, Lacroix MZ, Claustre L, Roques B et al. Pharmacokinetics of Amoxicillin in the Cat. Journal of veterinary pharmacology and therapeutics 48(5):380–388 (2025). [doi:10.1111/jvp.70003](https://doi.org/10.1111/jvp.70003)

**This record:** Pharmacolibrary v26.09, model `Amoxicillin_Dubbelboer2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference>

```bibtex
@misc{pharmacolibrary_AmoxicillinDubbelboer2025reference,
  title  = {{Pharmacolibrary model Amoxicillin_Dubbelboer2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference},
  note   = {Parameters from doi:10.1111/jvp.70003},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 0.6 /h, lag 15 min, F 0.9). Doses in the paper: 700, 1050, 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference/Amoxicillin_Dubbelboer2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Amoxicillin_Dubbelboer2025_reference_params.json` · controls `Amoxicillin_Dubbelboer2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamoxicillin%5D%20Amoxicillin_Dubbelboer2025_reference&body=Drug%3A%20amoxicillin%0ARecord%3A%20Amoxicillin_Dubbelboer2025_reference%0APaper%3A%20Dubbelboer_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amoxicillin/Amoxicillin_Dubbelboer2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-20 18:04 UTC</sub>
