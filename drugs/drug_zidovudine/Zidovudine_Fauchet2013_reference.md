<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zidovudine&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/&quot;},{&quot;label&quot;:&quot;Fauchet_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zidovudine — `Zidovudine_Fauchet2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The zidovudine record was refused: apparent clearance is 89.7 L/h, while its parent–metabolite structure was represented as a one-compartment enteral model.

<div class="pk-model-meta" hidden drug="zidovudine" model-id="Zidovudine_Fauchet2013_reference" status="rejected" stale="false" population="HIV-1-infected children" measured-compound="zidovudine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Fauchet F, Treluyer JM, Frange P, Urien S, Foissac F, Bouazza N et al. Population pharmacokinetics study of recommended zidovudine doses in HIV-1-infected children. Antimicrobial agents and chemotherapy 57(10):4801–4808 (2013).
  ·  DOI: [10.1128/AAC.00911-13](https://doi.org/10.1128/AAC.00911-13)

## Population and dosing

**Population:** HIV-1-infected children · condition HIV-1 infection · age group mixed · n = 247.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference.svg" alt="Zidovudine_Fauchet2013_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absorption rate | kabs | 2.86 | h(-1) |
| apparent elimination clearance | CL | 89.7 | liters · h(-1) |
| apparent volume of distribution | V/F | 229 | liters |
| metabolic formation rate constant | kfm | 12.6 | h(-1) |
| elimination rate constant of G-ZDV | kel | 2.27 | h(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The zidovudine record was refused: apparent clearance is 89.7 L/h, while its parent–metabolite structure was represented as a one-compartment enteral model.**

The output was assigned to the central concentration rather than the compartment for measured zidovudine, and the parent–metabolite topology did not match the represented one-compartment enteral structure. The abstract alone was read, so summary statistics stood in for a fitted model. Tlag was defaulted, and the apparent parameterization assumed F=1, Fm=1, with no molar correction. Extracted — zidovudine: kabs 2.86 h(-1), CL 89.7 liters · h(-1), V/F 229 liters; G-ZDV (3′-azido-3′-deoxy-5′-glucuronylthymidine): kfm 12.6 h(-1), kel 2.27 h(-1).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the links between molecules: this record has zidovudine → g-zdv (3′-azido-3′-deoxy-5′-glucuronylthymidine) (metabolism), the second reading zidovudine → g-zdv (metabolism); it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absorption rate | `Q49` · kabs | 2.86 | h(-1) | 0.0007944 | 1/s | 1/h | exact (1) | Fauchet_2013:abstract |
| apparent elimination clearance | `Q22` · CL | 89.7 | liters · h(-1) | 2.492e-05 | m3/s | l/h | llm_confirmed (0.6) | Fauchet_2013:abstract |
| apparent volume of distribution | `Q76` · V/F | 229 | liters | 0.229 | m3 | l | exact (1) | Fauchet_2013:abstract |
| metabolic formation rate constant | `Q305` · kfm | 12.6 | h(-1) | 0.0035 | 1/s | 1/h | exact (1) | Fauchet_2013:abstract |
| elimination rate constant of G-ZDV | `Q47` · kel | 2.27 | h(-1) | 0.0006306 | 1/s | 1/h | exact (1) | Fauchet_2013:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=zidovudine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 5/5 row label(s) assigned, 5 linked by role; re-tagged zidovudine→parent ×3, zidovudine→G-ZDV (3′-azido-3′-deoxy-5′-glucuronylthymidine) ×2
- molar mass: no plausible PubChem entry for 'G-ZDV (3′-azido-3′-deoxy-5′-glucuronylthymidine)' ('3′-azido-3′-deoxy-5′-glucuronylthymidine') — left in mass units
- molar mass: none found for 'G-ZDV (3′-azido-3′-deoxy-5′-glucuronylthymidine)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fauchet_2013_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.5 (6/12 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['zidovudine', 'g-zdv (3′-azido-3′-deoxy-5′-glucuronylthymidine)', 'metabolism']] | [['zidovudine', 'g-zdv', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[apparent elimination clearance].parameter_id` | Q22 | Q27 | mismatch |
| `qwen3.8-27b` | `parameters[elimination rate constant of g-zdv]` |  | 2.27 | only_one_extracted |
| `qwen3.8-27b` | `parameters[elimination rate constant of g-zdv]` | 2.27 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[metabolic formation rate constant]` |  | 12.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[metabolic formation rate constant]` | 12.6 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fauchet_2013:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Fauchet_2013:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 89.7 L/h | ['Fauchet_2013:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 229 L | ['Fauchet_2013:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=zidovudine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
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

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 2.86 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 600 mg oral (J05AF01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference/Zidovudine_Fauchet2013_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Zidovudine_Fauchet2013_reference_params.json` · controls `Zidovudine_Fauchet2013_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidovudine%5D%20Zidovudine_Fauchet2013_reference&body=Drug%3A%20zidovudine%0ARecord%3A%20Zidovudine_Fauchet2013_reference%0APaper%3A%20Fauchet_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:28 UTC</sub>
