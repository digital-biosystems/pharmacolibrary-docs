<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;amifampridine&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/&quot;},{&quot;label&quot;:&quot;Thakkar_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amifampridine — `Amifampridine_Thakkar2017_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="amifampridine" model-id="Amifampridine_Thakkar2017_reference" status="not_simulated" stale="false" population="patients with Lambert-Eaton myasthenia" measured-compound="3,4-diaminopyridine (amifampridine)" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Thakkar N, Guptill JT, Aleš K, Jacobus D, Jacobus L, Peloquin C et al. Population Pharmacokinetics/Pharmacodynamics of 3,4-Diaminopyridine Free Base in Patients With Lambert-Eaton Myasthenia. CPT: pharmacometrics & systems pharmacology 6(9):625–634 (2017).
  ·  DOI: [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

## Population and dosing

**Population:** patients with Lambert-Eaton myasthenia · condition Lambert-Eaton myasthenia · age group adult · n = 49.

**Dosed compound ≠ measured compound:** dosed 3,4-diaminopyridine (amifampridine) free base, measured 3,4-diaminopyridine (amifampridine).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| KA, h−1 | kabs | 1.1 | h−1 | 36.2 (None% RSE) |
| CL/F, L/h | CL/F | 107.7 | L/h | 48.1 (None% RSE) |
| Vc/F, L | V1/F | 72.6 | L | 182.4 (None% RSE) |
| Q/F, L/h | Q/F | 147.7 | L/h | 48.7 (None% RSE) |
| Vp/F, L | V2/F | 902.2 | L | 89.8 (None% RSE) |
| CLm/F3ACDAP , L/h | CL | 23.3 | L/h |  |
| Vm/F3ACDAP , L | V | 52.3 | L |  |
| theta_q351_weight_power | theta_q351_weight_power | 1.1 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The amifampridine parent–metabolite model was not published because the peripheral volume V2/F (902.2 L) was not carried into the built model, the structure was reduced to a one-compartment enteral model instead of the parent–metabolite structure, and covariate effects were never simulated.**

The record defines a two-compartment parent with a metabolite (3-N-acetyl-3,4-diaminopyridine) formed from amifampridine, but the built model used a one-compartment enteral structure, and of 7 parameters only 6 were covered — V2/F (902.2 L) was neither emitted nor defaulted. The covariate effect on the metabolite (theta_q351_weight_power, 1.1) was defined but only the reference individual was simulated, so covariate scenarios were not exercised. The builder also left the lag time (Tlag) at a default rather than an explicit estimate and assumed F=1 and Fm=1 with no molar correction (apparent parameterization). Extracted — amifampridine: kabs 1.1 h−1, CL/F 108 L/h, V1/F 72.6 L, Q/F 148 L/h, V2/F 902 L; 3-N-acetyl-3,4-diaminopyridine (3-Ac DAP): CL 23.3 L/h, V 52.3 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has 3,4-diaminopyridine (amifampridine) free base, the second reading 3,4-diaminopyridine (3,4-DAP) free base; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| KA, h−1 | `Q49` · kabs | 1.1 | h−1 | 0.0003056 | 1/s | 1/h | exact (1) | psp412218-tbl-0002:row2:col1, psp412218-tbl-0002:row2:col2, psp412218-tbl-0002:row2:col3, psp412218-tbl-0002:row2:col4, psp412218-tbl-0002:row2:col5 | 36.2 (None% RSE) |
| CL/F, L/h | `Q27` · CL/F | 107.7 | L/h | 2.992e-05 | m3/s | l/h | exact (1) | psp412218-tbl-0002:row3:col1, psp412218-tbl-0002:row3:col2, psp412218-tbl-0002:row3:col3, psp412218-tbl-0002:row3:col4, psp412218-tbl-0002:row3:col5 | 48.1 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 72.6 | L | 0.0726 | m3 | l | exact (1) | psp412218-tbl-0002:row4:col1, psp412218-tbl-0002:row4:col2, psp412218-tbl-0002:row4:col3, psp412218-tbl-0002:row4:col4, psp412218-tbl-0002:row4:col5 | 182.4 (None% RSE) |
| Q/F, L/h | `Q69` · Q/F | 147.7 | L/h | 4.103e-05 | m3/s | l/h | exact (1) | psp412218-tbl-0002:row5:col1, psp412218-tbl-0002:row5:col2, psp412218-tbl-0002:row5:col3, psp412218-tbl-0002:row5:col4, psp412218-tbl-0002:row5:col5 | 48.7 (None% RSE) |
| Vp/F, L | `Q82` · V2/F | 902.2 | L | 0.9022 | m3 | l | exact (1) | psp412218-tbl-0002:row6:col1, psp412218-tbl-0002:row6:col2, psp412218-tbl-0002:row6:col3, psp412218-tbl-0002:row6:col4, psp412218-tbl-0002:row6:col5 | 89.8 (None% RSE) |
| CLm/F3ACDAP , L/h | `Q22` · CL | 23.3 | L/h | 6.472e-06 | m3/s | l/h | exact (1) | psp412218-tbl-0002:row7:col1, psp412218-tbl-0002:row7:col2, psp412218-tbl-0002:row7:col3, psp412218-tbl-0002:row7:col4, psp412218-tbl-0002:row7:col5 |  |
| Vm/F3ACDAP , L | `Q61` · V | 52.3 | L | 0.0523 | m3 | l | exact (1) | psp412218-tbl-0002:row8:col1, psp412218-tbl-0002:row8:col2, psp412218-tbl-0002:row8:col3, psp412218-tbl-0002:row8:col4, psp412218-tbl-0002:row8:col5 |  |
| theta_q351_weight_power | `Q900` · theta_q351_weight_power | 1.1 |  |  |  |  |  | psp412218-tbl-0002:row9:col1, psp412218-tbl-0002:row9:col2, psp412218-tbl-0002:row9:col3, psp412218-tbl-0002:row9:col4, psp412218-tbl-0002:row9:col5 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'KA, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CL/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Vc/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Q/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Vp/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CLm/F3ACDAP, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CL/F‐Vc/F covariance d' routed out of structural estimates ('Between subject variability (%CV)')
- table section residual_error: '3,4‐DAP proportional error, %' routed out of structural estimates ('Residual error')
- table section residual_error: '3‐Ac DAP proportional error, %' routed out of structural estimates ('Residual error')
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 82 (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate weight for equation variable from footnote/prose kept as documentation only (['psp412218-tbl-0002:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.8 (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 500 (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- metabolite volume: 'Vm/F3ACDAP , L' Q63→Q61 for 3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=3,4-diaminopyridine (amifampridine)
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 38 linked by role; re-tagged parent→3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) ×25, 3,4-diaminopyridine (amifampridine)→parent ×2, 3,4-diaminopyridine (amifampridine)→3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) ×2
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (6/16 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['3,4-diaminopyridine (amifampridine)', '3-n-acetyl-3,4-diaminopyridine (3-ac dap)', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[clm/f3acdap]` |  | 23.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f3acdap]` | 23.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[exponent_for_scr_on_clm_f3acdap_c]` |  | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q351_weight_power]` | 1.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f3acdap]` |  | 52.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f3acdap]` | 52.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | 3,4-diaminopyridine (amifampridine) free base | 3,4-diaminopyridine (3,4-DAP) free base | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 3,4-diaminopyridine (amifampridine) | 3,4-diaminopyridine (3,4-DAP) | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412218-tbl-0002:row7:col1', 'psp412218-tbl-0002:row7:col2', 'psp412218-tbl-0002:row7:col3', 'psp412218-tbl-0002:row7:col4', 'psp412218-tbl-0002:row7:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp412218-tbl-0002:row3:col1', 'psp412218-tbl-0002:row3:col2', 'psp412218-tbl-0002:row3:col3', 'psp412218-tbl-0002:row3:col4', 'psp412218-tbl-0002:row3:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp412218-tbl-0002:row4:col1', 'psp412218-tbl-0002:row4:col2', 'psp412218-tbl-0002:row4:col3', 'psp412218-tbl-0002:row4:col4', 'psp412218-tbl-0002:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp412218-tbl-0002:row2:col1', 'psp412218-tbl-0002:row2:col2', 'psp412218-tbl-0002:row2:col3', 'psp412218-tbl-0002:row2:col4', 'psp412218-tbl-0002:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp412218-tbl-0002:row8:col1', 'psp412218-tbl-0002:row8:col2', 'psp412218-tbl-0002:row8:col3', 'psp412218-tbl-0002:row8:col4', 'psp412218-tbl-0002:row8:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['psp412218-tbl-0002:row5:col1', 'psp412218-tbl-0002:row5:col2', 'psp412218-tbl-0002:row5:col3', 'psp412218-tbl-0002:row5:col4', 'psp412218-tbl-0002:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['psp412218-tbl-0002:row6:col1', 'psp412218-tbl-0002:row6:col2', 'psp412218-tbl-0002:row6:col3', 'psp412218-tbl-0002:row6:col4', 'psp412218-tbl-0002:row6:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.3 L/h | ['psp412218-tbl-0002:row7:col1', 'psp412218-tbl-0002:row7:col2', 'psp412218-tbl-0002:row7:col3', 'psp412218-tbl-0002:row7:col4', 'psp412218-tbl-0002:row7:col5'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 108 L/h | ['psp412218-tbl-0002:row3:col1', 'psp412218-tbl-0002:row3:col2', 'psp412218-tbl-0002:row3:col3', 'psp412218-tbl-0002:row3:col4', 'psp412218-tbl-0002:row3:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 72.6 L | ['psp412218-tbl-0002:row4:col1', 'psp412218-tbl-0002:row4:col2', 'psp412218-tbl-0002:row4:col3', 'psp412218-tbl-0002:row4:col4', 'psp412218-tbl-0002:row4:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 52.3 L | ['psp412218-tbl-0002:row8:col1', 'psp412218-tbl-0002:row8:col2', 'psp412218-tbl-0002:row8:col3', 'psp412218-tbl-0002:row8:col4', 'psp412218-tbl-0002:row8:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 902 L | ['psp412218-tbl-0002:row6:col1', 'psp412218-tbl-0002:row6:col2', 'psp412218-tbl-0002:row6:col3', 'psp412218-tbl-0002:row6:col4', 'psp412218-tbl-0002:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 7 scholar param(s) emitted or defaulted | 6 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_modelica.zip" download>Amifampridine_Thakkar2017_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_matlab.zip" download>Amifampridine_Thakkar2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_matlab_simbio.zip" download>Amifampridine_Thakkar2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_sbml.zip" download>Amifampridine_Thakkar2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_cellml.zip" download>Amifampridine_Thakkar2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Thakkar N, Guptill JT, Aleš K, Jacobus D, Jacobus L, Peloquin C et al. Population Pharmacokinetics/Pharmacodynamics of 3,4-Diaminopyridine Free Base in Patients With Lambert-Eaton Myasthenia. CPT: pharmacometrics & systems pharmacology 6(9):625–634 (2017). [doi:10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

**This record:** Pharmacolibrary v26.09, model `Amifampridine_Thakkar2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference>

```bibtex
@misc{pharmacolibrary_AmifampridineThakkar2017reference,
  title  = {{Pharmacolibrary model Amifampridine_Thakkar2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference},
  note   = {Parameters from doi:10.1002/psp4.12218},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamifampridine%5D%20Amifampridine_Thakkar2017_reference&body=Drug%3A%20amifampridine%0ARecord%3A%20Amifampridine_Thakkar2017_reference%0APaper%3A%20Thakkar_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:17 UTC</sub>
