<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Methanol&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/&quot;},{&quot;label&quot;:&quot;Jacobsen_1983 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methanol_Aldhafiri2020_reference&quot;,&quot;label&quot;:&quot;Aldhafiri_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/Methanol_Aldhafiri2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methanol_Yu2014_reference&quot;,&quot;label&quot;:&quot;Yu_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/Methanol_Yu2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methanol_Zhao2019_reference&quot;,&quot;label&quot;:&quot;Zhao_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/Methanol_Zhao2019_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methanol_EscuderoOrtiz2023_reference&quot;,&quot;label&quot;:&quot;Escudero-Ortiz_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/Methanol_EscuderoOrtiz2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methanol_Jacobsen1983_reference&quot;,&quot;label&quot;:&quot;Jacobsen_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/Methanol_Jacobsen1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Methanol_Shen2020_reference&quot;,&quot;label&quot;:&quot;Shen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methanol/Methanol_Shen2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methanol — `Methanol_Jacobsen1983_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model was held back because the methanol-to-formate absorption rate constant (ka) was missing and substituted with a library placeholder rather than an estimated value.

<div class="pk-model-meta" hidden drug="Methanol" model-id="Methanol_Jacobsen1983_reference" status="needs_review" stale="false" population="methanol poisoned patient" measured-compound="Formate" parameterization="apparent" topology="1C"></div>

## Citation
Jacobsen D, Ovrebø S, Sejersted OM. Toxicokinetics of formate during hemodialysis. Acta medica Scandinavica 214(5):409–412 (1983).
  ·  DOI: [10.1111/j.0954-6820.1983.tb08616.x](https://doi.org/10.1111/j.0954-6820.1983.tb08616.x)

## Population and dosing

**Population:** methanol poisoned patient · condition acute poisoning · age group adult · n = 1.

**Dosed compound ≠ measured compound:** dosed Methanol, measured Formate.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_methanol/Methanol_Jacobsen1983_reference/Methanol_Jacobsen1983_reference.svg" alt="Methanol_Jacobsen1983_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| plasma half-life of formate | t1/2z | 165 | min |
| mean dialysator clearance of formate | CLm/F | 148 | ml/min |
| blood flow | Qb | 215 | ml/min |
| volume of distribution | Vm,norm/F | 0.5 | l/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was held back because the methanol-to-formate absorption rate constant (ka) was missing and substituted with a library placeholder rather than an estimated value.**

Since only the abstract was available, reported summary statistics replaced a fitted model. The builder defaulted ka and lag time instead of deriving them from the source. Furthermore, the record assumes complete bioavailability and metabolite fraction without molar correction, while relying on arbitrary defaults for absorption kinetics. Extracted — Formate: t1/2z 165 min, CLm/F 148 ml/min, Qb 215 ml/min, Vm,norm/F 0.5 l/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| plasma half-life of formate | `Q57` · t1/2z | 165 | min | 9900 | s | min | toxin_unit_relink (0.85) | Jacobsen_1983:abstract |
| mean dialysator clearance of formate | `Q351` · CLm/F | 148 | ml/min | 2.467e-06 | m3/s | ml/min | exact (1) | Jacobsen_1983:abstract |
| blood flow | `Q54` · Qb | 215 | ml/min | 3.583e-06 | m3/s | ml/min | exact (1) | Jacobsen_1983:abstract |
| volume of distribution | `Q376` · Vm,norm/F | 0.5 | l/kg | 0.035 | m3 | l/kg | exact (1) | Jacobsen_1983:abstract |

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
- relinked 'plasma half-life of formate' Q47 → Q57: a half-life by its label (the unit decides, not the label)
- metabolite formate: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite formate: Q61→Q376 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Formate
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 3 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Formate', not methanol — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jacobsen_1983_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Jacobsen_1983:abstract'] |
| C5_dimension_Q376 | pass | [length] ** 3 |  | ['Jacobsen_1983:abstract'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Jacobsen_1983:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Jacobsen_1983:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=Formate) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_methanol/Methanol_Jacobsen1983_reference/Methanol_Jacobsen1983_reference_modelica.zip" download>Methanol_Jacobsen1983_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_methanol/Methanol_Jacobsen1983_reference/Methanol_Jacobsen1983_reference_fmi.zip" download>Methanol_Jacobsen1983_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.04502 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 2.467e-06 | m3/s |
| input | model | `VdPerKg` | 0.0005 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Jacobsen D, Ovrebø S, Sejersted OM. Toxicokinetics of formate during hemodialysis. Acta medica Scandinavica 214(5):409–412 (1983). [doi:10.1111/j.0954-6820.1983.tb08616.x](https://doi.org/10.1111/j.0954-6820.1983.tb08616.x)

**This record:** Pharmacolibrary, model `Methanol_Jacobsen1983_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_methanol/Methanol_Jacobsen1983_reference>

```bibtex
@misc{pharmacolibrary_MethanolJacobsen1983reference,
  title  = {{Pharmacolibrary model Methanol_Jacobsen1983_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_methanol/Methanol_Jacobsen1983_reference},
  note   = {Parameters from doi:10.1111/j.0954-6820.1983.tb08616.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_methanol/Methanol_Jacobsen1983_reference/Methanol_Jacobsen1983_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_methanol/Methanol_Jacobsen1983_reference/Methanol_Jacobsen1983_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Methanol_Jacobsen1983_reference_params.json` · controls `Methanol_Jacobsen1983_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethanol%5D%20Methanol_Jacobsen1983_reference&body=Drug%3A%20methanol%0ARecord%3A%20Methanol_Jacobsen1983_reference%0APaper%3A%20Jacobsen_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methanol/Methanol_Jacobsen1983_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 15:27 UTC</sub>
