<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;3-Methoxytyrosine&quot;,&quot;href&quot;:&quot;drugs/toxin_3_methoxytyrosine/&quot;},{&quot;label&quot;:&quot;Adamiak-Giera_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_3Methoxytyrosine_AdamiakGiera2021_reference&quot;,&quot;label&quot;:&quot;Adamiak-Giera_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_3_methoxytyrosine/D_3Methoxytyrosine_AdamiakGiera2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 3-Methoxytyrosine — `D_3Methoxytyrosine_AdamiakGiera2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model structure was incorrectly set as a single-compartment oral absorption model rather than a parent-metabolite system, so the measured 3-methoxytyrosine concentration was output from the parent central compartment.

<div class="pk-model-meta" hidden drug="3-Methoxytyrosine" model-id="D_3Methoxytyrosine_AdamiakGiera2021_reference" status="rejected" stale="false" population="idiopathic Parkinson&#39;s disease patients" measured-compound="3-Methoxytyrosine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Adamiak-Giera U, Jawień W, Pierzchlińska A, Białecka M, Kobierski JD, Janus T et al. Pharmacokinetics of Levodopa and 3-O-Methyldopa in Parkinsonian Patients Treated with Levodopa and Ropinirole and in Patients with Motor Complications. Pharmaceutics 13(9):1395 (2021).
  ·  DOI: [10.3390/pharmaceutics13091395](https://doi.org/10.3390/pharmaceutics13091395)

## Population and dosing

**Population:** idiopathic Parkinson's disease patients · condition Parkinson's disease · age group adult · n = 27.

**Dosing:** 100 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Levodopa, measured 3-Methoxytyrosine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 14 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_3_methoxytyrosine/D_3Methoxytyrosine_AdamiakGiera2021_reference/D_3Methoxytyrosine_AdamiakGiera2021_reference.svg" alt="D_3Methoxytyrosine_AdamiakGiera2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| lag time (min) | tlag | 9.97 | min |
| V/F (L) | Vm/F | 32.4 | L |
| CL/F (L/min) | CLm/F | 0.816 | L/min |
| AUC0-∞ (mg × min/L) | AUC∞ | 150 | mg × min/L |
| tmax (min) | tmax | 35.5 | min |
| Cmax (mg/L) | Cmax | 2.27 | mg/L |
| MRT (min) | MRT | 41.6 | min |
| ka (min-1) | kabs | 0.18 | min-1 |
| k10 (min-1) | kel | 0.0213 | min-1 |
| k12 (min-1) | kfm | 0.00333 | min-1 |
| k20 (min-1) | kel | 0.000262 | min-1 |
| tmax 3-OMD (min) | tmax | 305 | min |
| Cmax 3-OMD (mg/L) | Cmax | 0.476 | mg/L |
| AUC3-OMD [0-∞] (mg × min/L) | AUC | 1993 | mg × min/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model structure was incorrectly set as a single-compartment oral absorption model rather than a parent-metabolite system, so the measured 3-methoxytyrosine concentration was output from the parent central compartment.**

The topology described a parent-metabolite relationship, but the implemented model used a one-compartment enteral structure that lacks a metabolite compartment. As a result, the output variable corresponded to the parent central concentration instead of the metabolite analyte. Furthermore, the absorption lag time was not explicitly set to the extracted value of 9.97 minutes, resulting in an unspecified default. Extracted — 3 methoxytyrosine: tlag 9.97 min, Vm/F 32.4 L, CLm/F 0.816 L/min, AUC∞ 150 mg × min/L, tmax 35.5 min, Cmax 2.27 mg/L, MRT 41.6 min, kabs 0.18 min-1, … (+6).

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| lag time (min) | `Q83` · tlag | 9.97 | min | 598.2 | s | min | exact (1) | Adamiak-Giera_2021_table_5:row0:col1, Adamiak-Giera_2021_table_5:row0:col2 |
| V/F (L) | `Q367` · Vm/F | 32.4 | L | 0.0324 | m3 | l | exact (1) | Adamiak-Giera_2021_table_5:row1:col1, Adamiak-Giera_2021_table_5:row1:col2 |
| CL/F (L/min) | `Q351` · CLm/F | 0.816 | L/min | 1.36e-05 | m3/s | l/min | exact (1) | Adamiak-Giera_2021_table_5:row2:col1, Adamiak-Giera_2021_table_5:row2:col2 |
| AUC0-∞ (mg × min/L) | `Q17` · AUC∞ | 150 | mg × min/L | 9 | kg*s/m3 | (min·mg)/l | exact (1) | Adamiak-Giera_2021_table_5:row3:col1, Adamiak-Giera_2021_table_5:row3:col2 |
| tmax (min) | `Q56` · tmax | 35.5 | min | 2130 | s | min | exact (1) | Adamiak-Giera_2021_table_5:row4:col1, Adamiak-Giera_2021_table_5:row4:col2 |
| Cmax (mg/L) | `Q32` · Cmax | 2.27 | mg/L | 0.00227 | kg/m3 | mg/l | exact (1) | Adamiak-Giera_2021_table_5:row5:col1, Adamiak-Giera_2021_table_5:row5:col2 |
| MRT (min) | `Q53` · MRT | 41.6 | min | 2496 | s | min | exact (1) | Adamiak-Giera_2021_table_5:row6:col1, Adamiak-Giera_2021_table_5:row6:col2 |
| ka (min-1) | `Q49` · kabs | 0.18 | min-1 | 0.003 | 1/s | 1/min | exact (1) | Adamiak-Giera_2021_table_5:row7:col1, Adamiak-Giera_2021_table_5:row7:col2 |
| k10 (min-1) | `Q47` · kel | 0.0213 | min-1 | 0.000355 | 1/s | 1/min | exact (1) | Adamiak-Giera_2021_table_5:row8:col1, Adamiak-Giera_2021_table_5:row8:col2 |
| k12 (min-1) | `Q305` · kfm | 0.00333 | min-1 | 5.55e-05 | 1/s | 1/min | exact (1) | Adamiak-Giera_2021_table_5:row9:col1, Adamiak-Giera_2021_table_5:row9:col2 |
| k20 (min-1) | `Q47` · kel | 0.000262 | min-1 | 4.367e-06 | 1/s | 1/min | exact (1) | Adamiak-Giera_2021_table_5:row10:col1, Adamiak-Giera_2021_table_5:row10:col2 |
| tmax 3-OMD (min) | `Q56` · tmax | 305 | min | 1.83e+04 | s | min | llm_confirmed (0.6) | Adamiak-Giera_2021_table_5:row11:col1, Adamiak-Giera_2021_table_5:row11:col2 |
| Cmax 3-OMD (mg/L) | `Q32` · Cmax | 0.476 | mg/L | 0.000476 | kg/m3 | mg/l | llm_confirmed (0.6) | Adamiak-Giera_2021_table_5:row13:col1, Adamiak-Giera_2021_table_5:row13:col2 |
| AUC3-OMD [0-∞] (mg × min/L) | `Q88` · AUC | 1993 | mg × min/L | 119.6 | kg*s/m3 | (min·mg)/l | llm (0.6) | Adamiak-Giera_2021_table_5:row14:col1, Adamiak-Giera_2021_table_5:row14:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'MET3-OMD (min)' — extend the ontology if this is a real PK parameter (source ['Adamiak-Giera_2021_table_5:row12:col1', 'Adamiak-Giera_2021_table_5:row12:col2'])
- metabolite 3-methoxytyrosine: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite 3-methoxytyrosine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=3-Methoxytyrosine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 14 linked by role; re-tagged Levodopa→parent ×18, Levodopa→3-Methoxytyrosine ×12
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- companion parameter table 4 transcribed (3 record(s))
- LLM selected parameter table(s) 4, 5
- dropped sensitivity-analysis table(s) 6 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 14 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Adamiak-Giera_2021_table_5:row3:col1', 'Adamiak-Giera_2021_table_5:row3:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Adamiak-Giera_2021_table_5:row9:col1', 'Adamiak-Giera_2021_table_5:row9:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Adamiak-Giera_2021_table_5:row5:col1', 'Adamiak-Giera_2021_table_5:row5:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Adamiak-Giera_2021_table_5:row13:col1', 'Adamiak-Giera_2021_table_5:row13:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Adamiak-Giera_2021_table_5:row2:col1', 'Adamiak-Giera_2021_table_5:row2:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Adamiak-Giera_2021_table_5:row1:col1', 'Adamiak-Giera_2021_table_5:row1:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Adamiak-Giera_2021_table_5:row8:col1', 'Adamiak-Giera_2021_table_5:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Adamiak-Giera_2021_table_5:row10:col1', 'Adamiak-Giera_2021_table_5:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adamiak-Giera_2021_table_5:row7:col1', 'Adamiak-Giera_2021_table_5:row7:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['Adamiak-Giera_2021_table_5:row6:col1', 'Adamiak-Giera_2021_table_5:row6:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Adamiak-Giera_2021_table_5:row4:col1', 'Adamiak-Giera_2021_table_5:row4:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Adamiak-Giera_2021_table_5:row11:col1', 'Adamiak-Giera_2021_table_5:row11:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Adamiak-Giera_2021_table_5:row0:col1', 'Adamiak-Giera_2021_table_5:row0:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Adamiak-Giera_2021_table_5:row14:col1', 'Adamiak-Giera_2021_table_5:row14:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=3-Methoxytyrosine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | k12 (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.2 /h, F 1). Dose in the paper: 100 mg.

<dbs-fmusim paramsurl="drugs/toxin_3_methoxytyrosine/D_3Methoxytyrosine_AdamiakGiera2021_reference/D_3Methoxytyrosine_AdamiakGiera2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_3_methoxytyrosine/D_3Methoxytyrosine_AdamiakGiera2021_reference/D_3Methoxytyrosine_AdamiakGiera2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `D_3Methoxytyrosine_AdamiakGiera2021_reference_params.json` · controls `D_3Methoxytyrosine_AdamiakGiera2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B3_methoxytyrosine%5D%20D_3Methoxytyrosine_AdamiakGiera2021_reference&body=Drug%3A%203_methoxytyrosine%0ARecord%3A%20D_3Methoxytyrosine_AdamiakGiera2021_reference%0APaper%3A%20Adamiak-Giera_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_3_methoxytyrosine/D_3Methoxytyrosine_AdamiakGiera2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 15:28 UTC</sub>
