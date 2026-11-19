<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Valaciclovir&quot;,&quot;href&quot;:&quot;drugs/toxin_valaciclovir/&quot;},{&quot;label&quot;:&quot;Samies_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valaciclovir_Ohtsu2018_reference&quot;,&quot;label&quot;:&quot;Ohtsu_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_valaciclovir/Valaciclovir_Ohtsu2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Valaciclovir_de1994_reference&quot;,&quot;label&quot;:&quot;de_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_valaciclovir/Valaciclovir_de1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Valaciclovir_Wang1996_reference&quot;,&quot;label&quot;:&quot;Wang_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_valaciclovir/Valaciclovir_Wang1996_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Valaciclovir_Samies2025_reference&quot;,&quot;label&quot;:&quot;Samies_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_valaciclovir/Valaciclovir_Samies2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Valaciclovir — `Valaciclovir_Samies2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Abstract-derived acyclovir parameters forced into a parent-only structure fail topology and output checks, misassigning the metabolite output to the parent compartment.

<div class="pk-model-meta" hidden drug="Valaciclovir" model-id="Valaciclovir_Samies2025_reference" status="rejected" stale="false" population="Seven infants with neonatal HSV disease" measured-compound="Acyclovir" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Samies N, Ahmed A, Kimberlin DW, Ryan KJ, Acosta EP, Whitley RJ. Valacyclovir Pharmacokinetics in Infants With Neonatal Herpes Simplex Virus Disease. The Pediatric infectious disease journal 44(9):860–865 (2025).
  ·  DOI: [10.1097/INF.0000000000004829](https://doi.org/10.1097/INF.0000000000004829)

## Population and dosing

**Population:** Seven infants with neonatal HSV disease · condition neonatal Herpes simplex virus (HSV) disease · age group neonate · n = 7.

**Dosed compound ≠ measured compound:** dosed Valaciclovir, measured Acyclovir.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_valaciclovir/Valaciclovir_Samies2025_reference/Valaciclovir_Samies2025_reference.svg" alt="Valaciclovir_Samies2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| clearance | CLm/F | 1.1 | L/h |
| volume | Vm/F | 3.6 | L |
| half-life | t1/2z | 2.5 | hours |
| area under the curve from zero to infinity | AUC∞ | 70.1 | mg h/L |
| oral clearance | CLm/F | 3.1 | L/h |
| absorption rate constant | kabs | 3.4 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Abstract-derived acyclovir parameters forced into a parent-only structure fail topology and output checks, misassigning the metabolite output to the parent compartment.**

The record extracted summary statistics from the abstract for acyclovir but retained the parent valaciclovir's one-compartment structure, violating the requirement for a multi-compartment metabolite model. Consequently, the simulation output incorrectly targeted the parent valaciclovir concentration instead of the measured acyclovir. Apparent acyclovir clearance and volume parameters, derived with assumed unit conversion fractions, could not support a valid metabolite kinetic fit. Extracted — Acyclovir: CLm/F 1.1 L/h, Vm/F 3.6 L, t1/2z 2.5 hours, AUC∞ 70.1 mg h/L, CLm/F 3.1 L/h, kabs 3.4 /h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| clearance | `Q351` · CLm/F | 1.1 | L/h | 3.056e-07 | m3/s | l/h | exact (1) | Samies_2025:abstract |
| volume | `Q367` · Vm/F | 3.6 | L | 0.0036 | m3 | l | exact (1) | Samies_2025:abstract |
| half-life | `Q57` · t1/2z | 2.5 | hours | 9000 | s | h | half_life_rule (0.95) | Samies_2025:abstract, Samies_2025:abstract |
| area under the curve from zero to infinity | `Q17` · AUC∞ | 70.1 | mg h/L | 252.4 | kg*s/m3 | (h·mg)/l | llm_corrected (0.6) | Samies_2025:abstract, Samies_2025:abstract |
| oral clearance | `Q351` · CLm/F | 3.1 | L/h | 8.611e-07 | m3/s | l/h | exact (1) | Samies_2025:abstract |
| absorption rate constant | `Q49` · kabs | 3.4 | /h | 0.0009444 | 1/s | 1/h | exact (1) | Samies_2025:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q61 ('apparent distribution volume', value 12.3) — already have one for this compound
- metabolite acyclovir: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite acyclovir: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite acyclovir: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Acyclovir
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 0 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Acyclovir', not valaciclovir — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Samies_2025_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Samies_2025:abstract', 'Samies_2025:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Samies_2025:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Samies_2025:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Samies_2025:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Samies_2025:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Samies_2025:abstract', 'Samies_2025:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=Acyclovir) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
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

**Administration: oral** — 3000 mg, single dose, first-order absorption (ka 3.4 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 3000 mg oral (J05AB11) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_valaciclovir/Valaciclovir_Samies2025_reference/Valaciclovir_Samies2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_valaciclovir/Valaciclovir_Samies2025_reference/Valaciclovir_Samies2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Valaciclovir_Samies2025_reference_params.json` · controls `Valaciclovir_Samies2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalaciclovir%5D%20Valaciclovir_Samies2025_reference&body=Drug%3A%20valaciclovir%0ARecord%3A%20Valaciclovir_Samies2025_reference%0APaper%3A%20Samies_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_valaciclovir/Valaciclovir_Samies2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 08:53 UTC</sub>
