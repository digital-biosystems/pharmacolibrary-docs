<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Daunorubicin&quot;,&quot;href&quot;:&quot;drugs/toxin_daunorubicin/&quot;},{&quot;label&quot;:&quot;Hempel_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_Hempel2010_reference&quot;,&quot;label&quot;:&quot;Hempel_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_daunorubicin/Daunorubicin_Hempel2010_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Daunorubicin — `Daunorubicin_Hempel2010_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model incorrectly uses a one-compartment structure instead of the required parent-metabolite topology, outputting only daunorubicin concentrations.

<div class="pk-model-meta" hidden drug="Daunorubicin" model-id="Daunorubicin_Hempel2010_reference" status="rejected" stale="false" population="infants with leukemia treated in the Interfant 99 protocol" measured-compound="Daunorubicin" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Hempel G, Relling MV, de Rossi G, Stary J, De Lorenzo P, Valsecchi MG et al. Pharmacokinetics of daunorubicin and daunorubicinol in infants with leukemia treated in the interfant 99 protocol. Pediatric blood & cancer 54(3):355-360 (2010).
  ·  DOI: [10.1002/pbc.22266](https://doi.org/10.1002/pbc.22266)

## Population and dosing

**Population:** infants with leukemia treated in the Interfant 99 protocol · condition acute leukemia treatment · age group infant.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_daunorubicin/Daunorubicin_Hempel2010_reference/Daunorubicin_Hempel2010_reference.svg" alt="Daunorubicin_Hempel2010_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Daunorubicin clearance | CL | 43.9 | L/h |
| central volume of distribution | V1 | 16.4 | L |
| apparent clearance of daunorubicinol | CL/F | 19.1 | L/h |
| apparent volume of distribution | V1/F | 228 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model incorrectly uses a one-compartment structure instead of the required parent-metabolite topology, outputting only daunorubicin concentrations.**

The recorded structure is a one-compartment model, failing the topology requirement for a parent-metabolite model. The model output is restricted to the daunorubicin compartment rather than including the metabolite daunorubicinol. Additionally, absorption parameters for the parent drug were left at library defaults due to extraction failure from the abstract. Extracted — daunorubicin: CL 43.9 L/h, V1 16.4 L; Daunorubicinol: CL/F 19.1 L/h, V1/F 228 L.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Daunorubicin clearance | `Q22` · CL | 43.9 | L/h | 1.219e-05 | m3/s | L/h | llm_confirmed (0.6) | Hempel_2010:abstract |
| central volume of distribution | `Q63` · V1 | 16.4 | L | 0.0164 | m3 | L | boundary_compartment (0.9) | Hempel_2010:abstract |
| apparent clearance of daunorubicinol | `Q27` · CL/F | 19.1 | L/h | 5.306e-06 | m3/s | L/h | exact (1) | Hempel_2010:abstract |
| apparent volume of distribution | `Q290` · V1/F | 228 | L | 0.228 | m3 | L | exact (1) | Hempel_2010:abstract |

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
- unit_dimension_unknown: 'L hr(-1) m(-2)' (CL)
- unit_dimension_unknown: 'L m(-2)' (V1)
- unit_dimension_unknown: 'L hr(-1) m(-2)' (CL/F)
- unit_dimension_unknown: 'L m(-2)' (V1/F)
- implicit units: 'Daunorubicin clearance' → L/h (from the popPK convention: 'Clearance parameters in population PK are conventionally reported in L/h. The value 43.9 is consistent with L/h for a dr')
- implicit units: 'central volume of distribution' → L (from the popPK convention: 'Volume of distribution parameters are conventionally reported in L. The value 16.4 is consistent with L for the central ')
- implicit units: 'apparent clearance of daunorubicinol' → L/h (from the popPK convention: 'Apparent clearance (CL/F) parameters are conventionally reported in L/h. The value 19.1 is consistent with L/h.')
- implicit units: 'apparent volume of distribution' → L (from the popPK convention: 'Apparent volume of distribution (V1/F) parameters are conventionally reported in L. The value 228 is consistent with L.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Daunorubicin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 4 linked by role; re-tagged Daunorubicin→parent ×2, Daunorubicin→Daunorubicinol ×2
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hempel_2010_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hempel_2010:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Hempel_2010:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Hempel_2010:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Hempel_2010:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 43.9 L/h | ['Hempel_2010:abstract'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.1 L/h | ['Hempel_2010:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 228 L | ['Hempel_2010:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 16.4 L | ['Hempel_2010:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=Daunorubicin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_shared_parameters | pass | 2 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_daunorubicin/Daunorubicin_Hempel2010_reference/Daunorubicin_Hempel2010_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_daunorubicin/Daunorubicin_Hempel2010_reference/Daunorubicin_Hempel2010_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Daunorubicin_Hempel2010_reference_params.json` · controls `Daunorubicin_Hempel2010_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20Daunorubicin_Hempel2010_reference&body=Drug%3A%20daunorubicin%0ARecord%3A%20Daunorubicin_Hempel2010_reference%0APaper%3A%20Hempel_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_daunorubicin/Daunorubicin_Hempel2010_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 08:44 UTC</sub>
