<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Hydroxyzine&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/&quot;},{&quot;label&quot;:&quot;Simons_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxyzine_Knych2019_reference&quot;,&quot;label&quot;:&quot;Knych_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Knych2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyzine_Simons1984_reference&quot;,&quot;label&quot;:&quot;Simons_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Simons1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyzine_Simons1984v2_reference&quot;,&quot;label&quot;:&quot;Simons_1984_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Simons1984v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxyzine_Simons1989_reference&quot;,&quot;label&quot;:&quot;Simons_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydroxyzine — `Hydroxyzine_Simons1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model failed because it measured the parent hydroxyzine instead of the metabolite cetirizine and lacked the necessary multi-compartment structure for the metabolite.

<div class="pk-model-meta" hidden drug="Hydroxyzine" model-id="Hydroxyzine_Simons1989_reference" status="rejected" stale="false" population="patients with primary biliary cirrhosis" measured-compound="Hydroxyzine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Simons FE, Watson WT, Chen XY, Minuk GY, Simons KJ. The pharmacokinetics and pharmacodynamics of hydroxyzine in patients with primary biliary cirrhosis. Journal of clinical pharmacology 29(9):809–815 (1989).
  ·  DOI: [10.1002/j.1552-4604.1989.tb03424.x](https://doi.org/10.1002/j.1552-4604.1989.tb03424.x)

## Population and dosing

**Population:** patients with primary biliary cirrhosis · condition primary biliary cirrhosis · age group adult · n = 8.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989_reference/Hydroxyzine_Simons1989_reference.svg" alt="Hydroxyzine_Simons1989_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The mean serum elimination half-life of hydroxyzine | t1/2z | 36.6 | hours |
| the mean serum elimination half-life of cetirizine | t1/2z | 25.0 | hours |
| The mean hydroxyzine clearance rate | CL | 8.65 | mL/min/kg |
| the mean volume of distribution | V | 22.7 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model failed because it measured the parent hydroxyzine instead of the metabolite cetirizine and lacked the necessary multi-compartment structure for the metabolite.**

The output variable was incorrectly assigned to the parent compartment, violating the requirement to measure cetirizine. The model structure was limited to a single compartment, conflicting with the declared parent-metabolite topology which requires separate compartments for the metabolite. These structural errors resulted from building the model solely on abstract summary statistics rather than fitted data. Extracted — hydroxyzine: t1/2z 36.6 hours, CL 8.65 mL/min/kg, V 22.7 L/kg; Cetirizine: t1/2z 25 hours.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The mean serum elimination half-life of hydroxyzine | `Q57` · t1/2z | 36.6 | hours | 1.318e+05 | s | h | llm (0.6) | Simons_1989:abstract |
| the mean serum elimination half-life of cetirizine | `Q57` · t1/2z | 25.0 | hours | 9e+04 | s | h | llm (0.6) | Simons_1989:abstract |
| The mean hydroxyzine clearance rate | `Q22` · CL | 8.65 | mL/min/kg | 1.009e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Simons_1989:abstract |
| the mean volume of distribution | `Q61` · V | 22.7 | L/kg | 1.589 | m3 | l/kg | llm_confirmed (0.6) | Simons_1989:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Hydroxyzine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 0 linked by role; re-tagged Hydroxyzine→parent ×3, Hydroxyzine→Cetirizine ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Simons_1989_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Simons_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Simons_1989:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Simons_1989:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Simons_1989:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.65 | ['Simons_1989:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 36.3 L/h | ['Simons_1989:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.59e+03 L | ['Simons_1989:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=Hydroxyzine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 75 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 75 mg parenteral (N05BB01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989_reference/Hydroxyzine_Simons1989_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989_reference/Hydroxyzine_Simons1989_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Hydroxyzine_Simons1989_reference_params.json` · controls `Hydroxyzine_Simons1989_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydroxyzine%5D%20Hydroxyzine_Simons1989_reference&body=Drug%3A%20hydroxyzine%0ARecord%3A%20Hydroxyzine_Simons1989_reference%0APaper%3A%20Simons_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydroxyzine/Hydroxyzine_Simons1989_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 23:13 UTC</sub>
