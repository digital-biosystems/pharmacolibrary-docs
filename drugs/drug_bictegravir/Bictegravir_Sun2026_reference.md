<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Bictegravir&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/&quot;},{&quot;label&quot;:&quot;Sun_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bictegravir_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/Bictegravir_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bictegravir_Sun2026_reference&quot;,&quot;label&quot;:&quot;Sun_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/Bictegravir_Sun2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bictegravir_Khoei2026_reference&quot;,&quot;label&quot;:&quot;Khoei_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/Bictegravir_Khoei2026_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vegas_2025_HIV_RNA&quot;,&quot;label&quot;:&quot;Vegas_2025 \u00b7 HIV-RNA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/pd_Vegas_2025_HIV_RNA.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Bictegravir — `Bictegravir_Sun2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Ka use library defaults, not estimates from this paper; t6_deviations (+1 more).

<div class="pk-model-meta" hidden drug="Bictegravir" model-id="Bictegravir_Sun2026_reference" status="needs_review" stale="false" population="pregnant and postpartum women" measured-compound="bictegravir" parameterization="apparent" topology="1C"></div>

## Citation
Sun S, Nikanjam M, Mirochnick M, Powis KM, Eke AC, Stek A et al. Population Pharmacokinetics of Bictegravir During Pregnancy and Postpartum: Role of Adherence in Maintaining Therapeutic Exposure. Journal of clinical pharmacology 66(1):e70134 (2026).
  ·  DOI: [10.1002/jcph.70134](https://doi.org/10.1002/jcph.70134)

## Population and dosing

**Population:** pregnant and postpartum women · condition HIV · age group adult · n = 27.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference.svg" alt="Bictegravir_Sun2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| apparent clearance (CL/F) | CL/F | 61 | L/h |
| apparent volume of distribution (Vd/F) | V/F | 32 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ka use library defaults, not estimates from this paper; t6_deviations (+1 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — bictegravir: CL/F 61 L/h, V/F 32 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of apparent clearance: this record has 61, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent clearance (CL/F) | `Q27` · CL/F | 61 | L/h | 1.694e-05 | m3/s | L/h | exact (1) | Sun_2026:abstract |
| apparent volume of distribution (Vd/F) | `Q76` · V/F | 32 | L | 0.032 | m3 | L | exact (1) | Sun_2026:abstract |

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
- dropped duplicate Q27 ('CL/F', value 43) — already have one for this compound
- dropped duplicate Q76 ('Vd/F', value 120) — already have one for this compound
- dropped unlinked row (NIL): 'virtual subjects with concentrations below pharmacodynamic target' — extend the ontology if this is a real PK parameter (source ['Sun_2026:abstract'])
- dropped unlinked row (NIL): 'virtual subjects with concentrations below target' — extend the ontology if this is a real PK parameter (source ['Sun_2026:abstract'])
- implicit units: 'apparent clearance (CL/F)' → L/h (from the popPK convention: 'Apparent clearance (CL/F) in population PK for a value of 61 is standardly expressed in L/h.')
- implicit units: 'apparent volume of distribution (Vd/F)' → L (from the popPK convention: 'Apparent volume of distribution (Vd/F) in population PK for a value of 32 is standardly expressed in L.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=bictegravir
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Sun_2026_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent clearance]` | 61 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 32 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[black/african american race was associated with a increase in apparent volume of distribution]` |  | 32 | only_one_extracted |
| `gpt-oss-120b` | `parameters[pregnancy increased bictegravir apparent clearance]` |  | 61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[single missed dose at steady-state during the third trimester results in of virtual subjects with concentrations below pharmacodynamic target]` |  | 43.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[two consecutive missed doses result in with concentrations below target]` |  | 90.4 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Sun_2026:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Sun_2026:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 61 L/h | ['Sun_2026:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 32 L | ['Sun_2026:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=bictegravir) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict partial; agreement 0.4 (4 of 10 compared fields agree, 6 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.4 | cross-check agreement 0.4 is below 0.5: verdict partial; agreement 0.4 (4 of 10 compared fields agree, 6 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_modelica.zip" download>Bictegravir_Sun2026_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_fmi.zip" download>Bictegravir_Sun2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_matlab.zip" download>Bictegravir_Sun2026_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_matlab_simbio.zip" download>Bictegravir_Sun2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_sbml.zip" download>Bictegravir_Sun2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_cellml.zip" download>Bictegravir_Sun2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4494 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 1.694e-05 | m3/s |
| input | model | `VdPerKg` | 0.0004571 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Sun S, Nikanjam M, Mirochnick M, Powis KM, Eke AC, Stek A et al. Population Pharmacokinetics of Bictegravir During Pregnancy and Postpartum: Role of Adherence in Maintaining Therapeutic Exposure. Journal of clinical pharmacology 66(1):e70134 (2026). [doi:10.1002/jcph.70134](https://doi.org/10.1002/jcph.70134)

**This record:** Pharmacolibrary, model `Bictegravir_Sun2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_bictegravir/Bictegravir_Sun2026_reference>

```bibtex
@misc{pharmacolibrary_BictegravirSun2026reference,
  title  = {{Pharmacolibrary model Bictegravir_Sun2026_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bictegravir/Bictegravir_Sun2026_reference},
  note   = {Parameters from doi:10.1002/jcph.70134},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bictegravir/Bictegravir_Sun2026_reference/Bictegravir_Sun2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bictegravir_Sun2026_reference_params.json` · controls `Bictegravir_Sun2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbictegravir%5D%20Bictegravir_Sun2026_reference&body=Drug%3A%20bictegravir%0ARecord%3A%20Bictegravir_Sun2026_reference%0APaper%3A%20Sun_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bictegravir/Bictegravir_Sun2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 17:12 UTC</sub>
