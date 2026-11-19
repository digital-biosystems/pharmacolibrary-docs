<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flutamide&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/&quot;},{&quot;label&quot;:&quot;Mendoza_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flutamide_Ali2021_flutamide_loaded_niosomes&quot;,&quot;label&quot;:&quot;Ali_2021_flutamide_loaded_niosomes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Ali2021_flutamide_loaded_niosomes.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Radwanski1989_reference&quot;,&quot;label&quot;:&quot;Radwanski_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Radwanski1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Sharma2020_reference&quot;,&quot;label&quot;:&quot;Sharma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Sharma2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flutamide_Mendoza2017_reference&quot;,&quot;label&quot;:&quot;Mendoza_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flutamide/Flutamide_Mendoza2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flutamide — `Flutamide_Mendoza2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

> F use library defaults, not estimates from this paper; t3_output_variable (+2 more).

<div class="pk-model-meta" hidden drug="Flutamide" model-id="Flutamide_Mendoza2017_reference" status="rejected" stale="false" population="healthy mature stallions" measured-compound="Flutamide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Mendoza FJ, Serrano-Rodriguez JM, Buzon-Cuevas A, Perez-Ecija A. Pharmacokinetics of the anti-androgenic drug flutamide in healthy stallions. Veterinary journal (London, England : 1997) 224:50–54 (2017).
  ·  DOI: [10.1016/j.tvjl.2017.06.001](https://doi.org/10.1016/j.tvjl.2017.06.001)

## Population and dosing

**Population:** healthy mature stallions · condition healthy · age group adult · n = 7.

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_flutamide/Flutamide_Mendoza2017_reference/Flutamide_Mendoza2017_reference.svg" alt="Flutamide_Mendoza2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| volume of distribution | V | 0.83 | L/kg |
| clearance | CL | 1.2 | L/h/kg |
| Half lives of flutamide | t1/2z | 1 | h |
| first order absorption rate constant | kabs | 0.62 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; t3_output_variable (+2 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — flutamide: V 0.83 L/kg, CL 1.2 L/h/kg, t1/2z 1 h, kabs 0.62 h-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has flutamide → 2-hydroxyflutamide (metabolism), the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| volume of distribution | `Q61` · V | 0.83 | L/kg | 0.0581 | m3 | l/kg | exact (1) | Mendoza_2017:abstract |
| clearance | `Q22` · CL | 1.2 | L/h/kg | 2.333e-05 | m3/s | l/(h·kg) | exact (1) | Mendoza_2017:abstract |
| Half lives of flutamide | `Q57` · t1/2z | 1 | h | 3600 | s | h | llm (0.6) | Mendoza_2017:abstract, Mendoza_2017:abstract |
| first order absorption rate constant | `Q49` · kabs | 0.62 | h-1 | 0.0001722 | 1/s | 1/h | review_gapfill (0.7) | Sharma_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q57 ('Half lives of 2-hydroxyflutamide', value 4.79) — already have one for this compound
- dropped duplicate Q57 ('Half lives', value '5.815') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Flutamide
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 0/5 row label(s) assigned, 0 linked by role
- molar mass: none found for '2-hydroxyflutamide' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Sharma_2020's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Mendoza_2017_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['flutamide', '2-hydroxyflutamide', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[clearance]` | 1.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` |  | 1.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[half lives of flutamide]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[half lives of flutamide]` |  | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` | 0.83 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution]` |  | 0.83 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Mendoza_2017:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Sharma_2020:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Mendoza_2017:abstract', 'Mendoza_2017:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Mendoza_2017:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.2 | ['Mendoza_2017:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 84 L/h | ['Mendoza_2017:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 58.1 L | ['Mendoza_2017:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=Flutamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 750 mg, single dose, first-order absorption (ka 0.62 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 750 mg oral (L02BB01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_flutamide/Flutamide_Mendoza2017_reference/Flutamide_Mendoza2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_flutamide/Flutamide_Mendoza2017_reference/Flutamide_Mendoza2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Flutamide_Mendoza2017_reference_params.json` · controls `Flutamide_Mendoza2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflutamide%5D%20Flutamide_Mendoza2017_reference&body=Drug%3A%20flutamide%0ARecord%3A%20Flutamide_Mendoza2017_reference%0APaper%3A%20Mendoza_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flutamide/Flutamide_Mendoza2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 11:13 UTC</sub>
