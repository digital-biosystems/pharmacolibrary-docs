<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zalcitabine&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/&quot;},{&quot;label&quot;:&quot;Adams_1998 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zalcitabine_Ibrahim1991_reference&quot;,&quot;label&quot;:&quot;Ibrahim_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zalcitabine_Adams1998_reference&quot;,&quot;label&quot;:&quot;Adams_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zalcitabine — `Zalcitabine_Adams1998_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> biomarker_kinetics_as_drug_pk; t0_analyte_identity (+1 more).

<div class="pk-model-meta" hidden drug="zalcitabine" model-id="Zalcitabine_Adams1998_reference" status="rejected" stale="false" population="HIV-infected adults" measured-compound="zalcitabine" parameterization="apparent" topology="1C"></div>

## Citation
Adams JM, Shelton MJ, Hewitt RG, DeRemer M, DiFrancesco R, Grasela TH et al. Zalcitabine population pharmacokinetics: application of radioimmunoassay. Antimicrobial agents and chemotherapy 42(2):409–413 (1998).
  ·  DOI: [10.1128/AAC.42.2.409](https://doi.org/10.1128/AAC.42.2.409)

## Population and dosing

**Population:** HIV-infected adults · condition HIV infection · age group adult · n = 44.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference/Zalcitabine_Adams1998_reference.svg" alt="Zalcitabine_Adams1998_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| estimated creatinine clearance | CL | 89.1 | ml/min |
| Oral clearance | CL/F | 14.8 | liters/h |
| volume of distribution | V | 87.6 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**biomarker_kinetics_as_drug_pk; t0_analyte_identity (+1 more).**

Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — zalcitabine: CL 89.1 ml/min, CL/F 14.8 liters/h, V 87.6 liters.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[estimated creatinine clearance].parameter_id`: this record has Q26, the second reading Q22; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| estimated creatinine clearance | `Q22` · CL | 89.1 | ml/min | 1.485e-06 | m3/s | ml/min | llm_confirmed (0.6) | Adams_1998:abstract |
| Oral clearance | `Q27` · CL/F | 14.8 | liters/h | 4.111e-06 | m3/s | l/h | exact (1) | Adams_1998:abstract, Adams_1998:abstract |
| volume of distribution | `Q61` · V | 87.6 | liters | 0.0876 | m3 | l | exact (1) | Adams_1998:abstract, Adams_1998:abstract, Adams_1998:abstract, Adams_1998:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'age' — extend the ontology if this is a real PK parameter (source ['Adams_1998:abstract'])
- dropped unlinked row (NIL): 'weight' — extend the ontology if this is a real PK parameter (source ['Adams_1998:abstract'])
- dropped value-less row: 'individual estimates of oral clearance'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=zalcitabine
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Adams_1998_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (7/7 fields) | none |
| `qwen3.8-27b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[estimated creatinine clearance].parameter_id` | Q26 | Q22 | mismatch |
| `qwen3.8-27b` | `parameters[ka]` | 50.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Adams_1998:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Adams_1998:abstract', 'Adams_1998:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Adams_1998:abstract', 'Adams_1998:abstract', 'Adams_1998:abstract', 'Adams_1998:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.35 L/h | ['Adams_1998:abstract'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.8 L/h | ['Adams_1998:abstract', 'Adams_1998:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 87.6 L | ['Adams_1998:abstract', 'Adams_1998:abstract', 'Adams_1998:abstract', 'Adams_1998:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | fail | zalcitabine (or metabolite) | estimated creatinine clearance |  | disposition label(s) name a biomarker, not zalcitabine: 'estimated creatinine clearance' |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=zalcitabine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | pass |  | verdict confirmed; agreement 1.0 (7 of 7 compared fields agree); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 1 | a second reader did not contradict the extraction |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.25 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 2.25 mg oral (J05AF03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference/Zalcitabine_Adams1998_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference/Zalcitabine_Adams1998_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Zalcitabine_Adams1998_reference_params.json` · controls `Zalcitabine_Adams1998_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzalcitabine%5D%20Zalcitabine_Adams1998_reference&body=Drug%3A%20zalcitabine%0ARecord%3A%20Zalcitabine_Adams1998_reference%0APaper%3A%20Adams_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-24 05:40 UTC</sub>
