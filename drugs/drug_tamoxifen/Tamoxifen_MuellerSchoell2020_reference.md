<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;Mueller-Schoell_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamoxifen_Bosch2023_reference&quot;,&quot;label&quot;:&quot;Bosch_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Bosch2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tamoxifen_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tamoxifen_MuellerSchoell2020_reference&quot;,&quot;label&quot;:&quot;Mueller-Schoell_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_MuellerSchoell2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Croxtall_1994_A549_cell_proliferation&quot;,&quot;label&quot;:&quot;Croxtall_1994 \u00b7 A549 cell proliferation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/pd_Croxtall_1994_A549_cell_proliferation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Montenegro_2011_vasorelaxation&quot;,&quot;label&quot;:&quot;Montenegro_2011 \u00b7 vasorelaxation&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/pd_Montenegro_2011_vasorelaxation.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tamoxifen — `Tamoxifen_MuellerSchoell2020_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> The record was rejected because the simulated output compartment did not match the measured metabolite, endoxifen, and the model structure was incorrect.

<div class="pk-model-meta" hidden drug="tamoxifen" model-id="Tamoxifen_MuellerSchoell2020_reference" status="rejected" stale="false" population="young breast cancer patients" measured-compound="endoxifen" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Mueller-Schoell A, Klopp-Schulze L, Schroth W, Mürdter T, Michelet R, Brauch H et al. Obesity Alters Endoxifen Plasma Levels in Young Breast Cancer Patients: A Pharmacometric Simulation Approach. Clinical pharmacology and therapeutics 108(3):661–670 (2020).
  ·  DOI: [10.1002/cpt.1960](https://doi.org/10.1002/cpt.1960)

## Population and dosing

**Population:** young breast cancer patients · condition breast cancer · age group mixed · n = &gt;&lt;/.

**Dosing:** 20, 40 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed tamoxifen, measured endoxifen.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, V1/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_tamoxifen/Tamoxifen_MuellerSchoell2020_reference/Tamoxifen_MuellerSchoell2020_reference.svg" alt="Tamoxifen_MuellerSchoell2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k a (1/hour) | kabs | 1.08 | 1/hour |
| t lag (hour) | tlag | 0.442 | hour |
| V TAM /F (L) | Vm/F | 912 | L |
| CL30/F (L/hour) | CLm/F | 5.10 | L/hour |
| V ENDX /F (L) | V1/F | 400 | L |
| CL20/F (L/hour) | CLm/F | 5.07 | L/hour |
| CL20/F_Age a | equation variable | -0.17 |  |
| theta_q1_weight_cl20_f_body_a | theta_q1_weight_cl20_f_body_a | 0.284 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the simulated output compartment did not match the measured metabolite, endoxifen, and the model structure was incorrect.**

The simulation output was the central compartment rather than the measured metabolite, endoxifen. Additionally, the model topology used was a one-compartment enteral model, which did not match the parent-metabolite structure required for tamoxifen and endoxifen. The second reader also disagreed on the existence of the metabolism link and specific parameter values. Extracted — tamoxifen: kabs 1.08 1/hour, tlag 0.442 hour, Vm/F 912 L, CLm/F 5.07 L/hour; endoxifen: CLm/F 5.1 L/hour, V1/F 400 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tamoxifen → endoxifen (metabolism), the second reading none; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k a (1/hour) | `Q49` · kabs | 1.08 | 1/hour | 0.0003 | 1/s | 1/h | exact (1) | tab_3:row2:col2 |
| t lag (hour) | `Q83` · tlag | 0.442 | hour | 1591 | s | h | space_fold (0.95) | tab_3:row3:col2 |
| V TAM /F (L) | `Q367` · Vm/F | 912 | L | 0.912 | m3 | l | llm (0.6) | tab_3:row4:col2 |
| CL30/F (L/hour) | `Q351` · CLm/F | 5.10 | L/hour | 1.417e-06 | m3/s | l/h | exact (1) | tab_3:row5:col2 |
| V ENDX /F (L) | `Q290` · V1/F | 400 | L | 0.4 | m3 | l | exact (1) | tab_3:row6:col2 |
| CL20/F (L/hour) | `Q351` · CLm/F | 5.07 | L/hour | 1.408e-06 | m3/s | l/h | exact (1) | tab_3:row7:col2 |
| CL20/F_Age a | `Q900` · equation variable | -0.17 |  |  |  |  | llm (0.6) | tab_3:row8:col2 |
| theta_q1_weight_cl20_f_body_a | `Q900` · theta_q1_weight_cl20_f_body_a | 0.284 |  |  |  |  |  | tab_3:row10:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- compound tags: 1 row(s) → endoxifen (name 1)
- dropped duplicate Q27 ('CL23/F (L/hour)', value '0.459') — already have one for this compound
- dropped duplicate Q27 ('CL23/F_AS: 2.5-3 b', value '0.302') — already have one for this compound
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- metabolite endoxifen: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite endoxifen: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=endoxifen
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CL23/F_AS: 2.5-3 b
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 7 linked by role; re-tagged parent→endoxifen ×6
- review gap-fill skipped: this record measures 'endoxifen', not tamoxifen — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- table tab_3: unbound_uncertainty
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (6/15 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tamoxifen', 'endoxifen', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl20/f]` | 5.07 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl20/f_age a]` | -0.17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl30/f]` |  | 5.10 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl30/f]` | 5.10 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_weight_cl20_f_body_a]` |  | 0.284 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q1_weight_cl20_f_body_a]` | 0.284 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v endx /f]` | 400 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v tam /f].parameter_id` | Q367 | Q76 | mismatch |

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_3:row6:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_3:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_3:row7:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['tab_3:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_3:row2:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_3:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 400 L | ['tab_3:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=endoxifen) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 1.08 /h, F 1). Doses in the paper: 20, 40 mg.

<dbs-fmusim paramsurl="drugs/drug_tamoxifen/Tamoxifen_MuellerSchoell2020_reference/Tamoxifen_MuellerSchoell2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_tamoxifen/Tamoxifen_MuellerSchoell2020_reference/Tamoxifen_MuellerSchoell2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Tamoxifen_MuellerSchoell2020_reference_params.json` · controls `Tamoxifen_MuellerSchoell2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btamoxifen%5D%20Tamoxifen_MuellerSchoell2020_reference&body=Drug%3A%20tamoxifen%0ARecord%3A%20Tamoxifen_MuellerSchoell2020_reference%0APaper%3A%20Mueller-Schoell_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tamoxifen/Tamoxifen_MuellerSchoell2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 12:05 UTC</sub>
