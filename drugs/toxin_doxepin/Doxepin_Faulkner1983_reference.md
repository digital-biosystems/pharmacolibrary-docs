<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Doxepin&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/&quot;},{&quot;label&quot;:&quot;Faulkner_1983 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxepin_Faulkner1984_reference&quot;,&quot;label&quot;:&quot;Faulkner_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Faulkner1984_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Sutherland1987_reference&quot;,&quot;label&quot;:&quot;Sutherland_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Sutherland1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Virtanen1980_reference&quot;,&quot;label&quot;:&quot;Virtanen_1980_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Virtanen1980_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxepin_Faulkner1983_reference&quot;,&quot;label&quot;:&quot;Faulkner_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Faulkner1983_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Doxepin_Ziegler1978_reference&quot;,&quot;label&quot;:&quot;Ziegler_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_doxepin/Doxepin_Ziegler1978_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Doxepin — `Doxepin_Faulkner1983_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> The abstract-derived model for doxepin and desmethyldoxepin lacks a true fit, outputs parent concentration despite requiring metabolite, and ignores covariates.

<div class="pk-model-meta" hidden drug="Doxepin" model-id="Doxepin_Faulkner1983_reference" status="rejected" stale="false" population="depressed patients" measured-compound="Doxepin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Faulkner RD, Pitts WM, Lee CS, Lewis WA, Fann WE. Multiple-dose doxepin kinetics in depressed patients. Clinical pharmacology and therapeutics 34(4):509–515 (1983).
  ·  DOI: [10.1038/clpt.1983.206](https://doi.org/10.1038/clpt.1983.206)

## Population and dosing

**Population:** depressed patients · condition depression · age group adult · n = 7.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_doxepin/Doxepin_Faulkner1983_reference/Doxepin_Faulkner1983_reference.svg" alt="Doxepin_Faulkner1983_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mean DOX t1/2 after the first dose | t1/2z | 17.7 | hr |
| DMD t1/2 after first dose | t1/2z | 34.2 | hr |
| volume of distribution | V | 23.8 | l/kg |
| first-pass metabolism | FG | 69.5 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The abstract-derived model for doxepin and desmethyldoxepin lacks a true fit, outputs parent concentration despite requiring metabolite, and ignores covariates.**

The model topology for the parent-metabolite pair is reduced to a single compartment, which does not match the structure needed to describe both doxepin and desmethyldoxepin kinetics. The simulation output is parent doxepin concentration, although the measured analyte is the metabolite. Because the model was built from abstract summary statistics like the 17.7 hr half-life, fitted parameters are absent, and covariate scenarios were not simulated. Extracted — doxepin: t1/2z 17.7 hr, V 23.8 l/kg, FG 69.5; Desmethyldoxepin: t1/2z 34.2 hr.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Mean DOX t1/2 after the first dose | `Q57` · t1/2z | 17.7 | hr | 6.372e+04 | s | h | llm_confirmed (0.6) | Faulkner_1983:abstract |
| DMD t1/2 after first dose | `Q57` · t1/2z | 34.2 | hr | 1.231e+05 | s | h | llm_confirmed (0.6) | Faulkner_1983:abstract |
| volume of distribution | `Q61` · V | 23.8 | l/kg | 1.666 | m3 | l/kg | exact (1) | Faulkner_1983:abstract |
| first-pass metabolism | `Q41` · FG | 69.5 |  | 0.695 |  |  | llm (0.6) | Faulkner_1983:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('DOX t1/2 after the last dose', value 21.8) — already have one for this compound
- dropped duplicate Q57 ('DMD t1/2 after last dose', value 37.1) — already have one for this compound
- covariate category for CL from footnote/prose kept as documentation only (['Faulkner_1983:abstract'])
- 'first-pass metabolism' → Q41: printed without a unit and above 1 — read as a percentage
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Doxepin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 0 linked by role; re-tagged Doxepin→parent ×5, Doxepin→Desmethyldoxepin ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model
- derived CL=65.242 L/h from ln2/t½z × V = CL (Q57 × Q61); not separately reported

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Faulkner_1983_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model
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
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Faulkner_1983:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Faulkner_1983:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Faulkner_1983:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.67e+03 L | ['Faulkner_1983:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | fail | Metabolite_C (measured=Doxepin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_shared_parameters |  | pass | 1 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 100 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 100 mg parenteral (N06AA12) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/toxin_doxepin/Doxepin_Faulkner1983_reference/Doxepin_Faulkner1983_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_doxepin/Doxepin_Faulkner1983_reference/Doxepin_Faulkner1983_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Doxepin_Faulkner1983_reference_params.json` · controls `Doxepin_Faulkner1983_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxepin%5D%20Doxepin_Faulkner1983_reference&body=Drug%3A%20doxepin%0ARecord%3A%20Doxepin_Faulkner1983_reference%0APaper%3A%20Faulkner_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_doxepin/Doxepin_Faulkner1983_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 07:00 UTC</sub>
