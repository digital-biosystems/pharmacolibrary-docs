<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;edoxaban&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/&quot;},{&quot;label&quot;:&quot;Edwina_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Edoxaban_Zou2025_reference&quot;,&quot;label&quot;:&quot;Zou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Zou2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Edoxaban_Edwina2025_reference&quot;,&quot;label&quot;:&quot;Edwina_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_edoxaban/Edoxaban_Edwina2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# edoxaban — `Edoxaban_Edwina2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The edoxaban record was rejected because the model structure was a one-compartment model instead of the required parent-metabolite structure, and the output variable was the parent drug instead of the measured metabolite.

<div class="pk-model-meta" hidden drug="edoxaban" model-id="Edoxaban_Edwina2025_reference" status="rejected" stale="false" population="geriatric patients with atrial fibrillation" measured-compound="edoxaban" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Edwina AE, Van der Linden L, Debruyne L, Foerster K, Burhenne J, Verhamme P et al. Population pharmacokinetics of edoxaban in geriatric patients with atrial fibrillation. Journal of thrombosis and haemostasis : JTH 23(10):3251–3262 (2025).
  ·  DOI: [10.1016/j.jtha.2025.06.023](https://doi.org/10.1016/j.jtha.2025.06.023)

## Population and dosing

**Population:** geriatric patients with atrial fibrillation · condition atrial fibrillation · age group elderly · n = &gt;=17.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_edoxaban/Edoxaban_Edwina2025_reference/Edoxaban_Edwina2025_reference.svg" alt="Edoxaban_Edwina2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| reducing relative bioavailability by | Frel | 24 | % |
| absorption rate constant | kabs | 0.104 | per hour |
| clearance | CL | 9.02 | L/h |
| central and peripheral volumes | V | 47.4 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The edoxaban record was rejected because the model structure was a one-compartment model instead of the required parent-metabolite structure, and the output variable was the parent drug instead of the measured metabolite.**

The record was built from the abstract alone, so reported summary statistics stood in for a fitted model. The model structure was a one-compartment enteral model, which does not match the parent-metabolite topology required for the edoxaban to M4 relationship. The output variable was the central compartment concentration of edoxaban, but the measured compound was the metabolite M4. The model builder also defaulted the absorption lag time (Tlag) instead of using an explicit estimate. Extracted — edoxaban: Frel 24 %, kabs 0.104 per hour, CL 9.02 L/h, V 47.4 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has edoxaban, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| reducing relative bioavailability by | `Q87` · Frel | 24 | % |  |  |  | llm_confirmed (0.6) | Edwina_2025:abstract |
| absorption rate constant | `Q49` · kabs | 0.104 | per hour | 2.889e-05 | 1/s | 1/h | exact (1) | Edwina_2025:abstract |
| clearance | `Q22` · CL | 9.02 | L/h | 2.506e-06 | m3/s | l/h | exact (1) | Edwina_2025:abstract |
| central and peripheral volumes | `Q61` · V | 47.4 | L | 0.0474 | m3 | l | llm (0.6) | Edwina_2025:abstract, Edwina_2025:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'probability of overexposure with 15 mg' — extend the ontology if this is a real PK parameter (source ['Edwina_2025:abstract'])
- dropped unlinked row (NIL): 'probability of overexposure with 30 mg' — extend the ontology if this is a real PK parameter (source ['Edwina_2025:abstract'])
- dropped unlinked row (NIL): 'probability of overexposure with 60 mg' — extend the ontology if this is a real PK parameter (source ['Edwina_2025:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=edoxaban
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 4 linked by role; re-tagged edoxaban→parent ×8
- molar mass: no plausible PubChem entry for 'M4' ('M4') — left in mass units
- molar mass: none found for 'M4' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Edwina_2025_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['edoxaban', 'm4', 'metabolism']] | [['edoxaban', 'm4 metabolite', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[central and peripheral volumes]` | 47.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume]` |  | 47.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume]` |  | 42.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[reducing relative bioavailability by]` | 24 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative bioavailability]` |  | 24 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | edoxaban | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | edoxaban | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Edwina_2025:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Edwina_2025:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Edwina_2025:abstract', 'Edwina_2025:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.02 | ['Edwina_2025:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.02 L/h | ['Edwina_2025:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 47.4 L | ['Edwina_2025:abstract', 'Edwina_2025:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=edoxaban) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
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

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.104 /h, F 24). _The paper's dose was not captured; the default is the WHO ATC DDD 60 mg oral (B01AF03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_edoxaban/Edoxaban_Edwina2025_reference/Edoxaban_Edwina2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_edoxaban/Edoxaban_Edwina2025_reference/Edoxaban_Edwina2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Edoxaban_Edwina2025_reference_params.json` · controls `Edoxaban_Edwina2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bedoxaban%5D%20Edoxaban_Edwina2025_reference&body=Drug%3A%20edoxaban%0ARecord%3A%20Edoxaban_Edwina2025_reference%0APaper%3A%20Edwina_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_edoxaban/Edoxaban_Edwina2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 14:43 UTC</sub>
