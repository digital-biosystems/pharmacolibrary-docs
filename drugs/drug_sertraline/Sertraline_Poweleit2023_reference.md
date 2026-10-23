<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;sertraline&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/&quot;},{&quot;label&quot;:&quot;Poweleit_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sertraline_Poweleit2023_reference&quot;,&quot;label&quot;:&quot;Poweleit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Poweleit2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Sertraline_Xia2025_reference&quot;,&quot;label&quot;:&quot;Xia_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sertraline/Sertraline_Xia2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sertraline — `Sertraline_Poweleit2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:40 UTC) predates the latest extraction (2026-10-06 23:44 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="sertraline" model-id="Sertraline_Poweleit2023_reference" status="extracted" stale="true" population="psychiatrically hospitalized pediatric patients aged 5-18 years" measured-compound="sertraline" parameterization="apparent" topology="1C"></div>

## Citation
Poweleit EA, Taylor ZL, Mizuno T, Vaughn SE, Desta Z, Strawn JR et al. Escitalopram and Sertraline Population Pharmacokinetic Analysis in Pediatric Patients. Clinical pharmacokinetics 62(11):1621–1637 (2023).
  ·  DOI: [10.1007/s40262-023-01294-8](https://doi.org/10.1007/s40262-023-01294-8)

## Population and dosing

**Population:** psychiatrically hospitalized pediatric patients aged 5-18 years · condition anxiety and depressive disorders · age group mixed · n = 255.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference.svg" alt="Sertraline_Poweleit2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL/F (escitalopram) | CL/F | 14.2 | L/h |
| V/F (escitalopram) | V/F | 428 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F and V/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — sertraline: CL/F 14.2 L/h/1.73 m2, V/F 428 L/1.73 m2, Ctrough 151 ng/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sertraline, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (escitalopram) | `Q27` · CL/F | 14.2 | L/h | 3.944e-06 | m3/s | L/h | exact (1) | Poweleit_2023:abstract |
| V/F (escitalopram) | `Q76` · V/F | 428 | L | 0.428 | m3 | L | exact (1) | Poweleit_2023:abstract |

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
- unit_dimension_unknown: 'L/h/1.73 m2' (CL/F)
- unit_dimension_unknown: 'L/1.73 m2' (V/F)
- dropped duplicate Q27 ('CL/F (sertraline)', value 124) — already have one for this compound
- dropped duplicate Q76 ('V/F (sertraline)', value 4320) — already have one for this compound
- covariate cyp2c19 for Ctrough from footnote/prose kept as documentation only (['Poweleit_2023:abstract'])
- covariate normal metabolizer for Ctrough from footnote/prose kept as documentation only (['Poweleit_2023:abstract'])
- covariate normal metabolizer for AUC ratio from footnote/prose kept as documentation only (['Poweleit_2023:abstract'])
- dropped value-less row: 'p (escitalopram)' (captured trailing unit 'escitalopram' for child rows)
- covariate ultrarapid metabolizer for Ctrough from footnote/prose kept as documentation only (['Poweleit_2023:abstract'])
- covariate ultrarapid metabolizer for AUC ratio from footnote/prose kept as documentation only (['Poweleit_2023:abstract'])
- dropped value-less row: 'p (sertraline)' (captured trailing unit 'sertraline' for child rows)
- dropped value-less row: 'dose reduction (escitalopram, poor metabolizers)'
- dropped value-less row: 'dose reduction (sertraline, poor metabolizers)'
- dropped unlinked row (NIL): 'escitalopram cohort samples' — extend the ontology if this is a real PK parameter (source ['Poweleit_2023:abstract'])
- dropped unlinked row (NIL): 'escitalopram cohort patients' — extend the ontology if this is a real PK parameter (source ['Poweleit_2023:abstract'])
- dropped unlinked row (NIL): 'sertraline cohort samples' — extend the ontology if this is a real PK parameter (source ['Poweleit_2023:abstract'])
- dropped unlinked row (NIL): 'sertraline cohort patients' — extend the ontology if this is a real PK parameter (source ['Poweleit_2023:abstract'])
- dropped value-less row: 'age'
- implicit units: 'CL/F (escitalopram)' → L/h (from the popPK convention: 'No unit stated in text or footnotes; CL/F for oral population PK conventionally in L/h, consistent with 14.2.')
- implicit units: 'V/F (escitalopram)' → L (from the popPK convention: 'No unit stated; V/F conventionally in L, consistent with 428.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sertraline
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Poweleit_2023_metadata.yaml (19 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', '', '']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | 14.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 14.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 428 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 428 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sertraline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sertraline | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Poweleit_2023:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Poweleit_2023:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 14.2 L/h | ['Poweleit_2023:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 428 L | ['Poweleit_2023:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_modelica.zip" download>Sertraline_Poweleit2023_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_fmi.zip" download>Sertraline_Poweleit2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_matlab.zip" download>Sertraline_Poweleit2023_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_matlab_simbio.zip" download>Sertraline_Poweleit2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_sbml.zip" download>Sertraline_Poweleit2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_cellml.zip" download>Sertraline_Poweleit2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3062 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5e-05 | kg |
| input | model | `Cl` | 3.944e-06 | m3/s |
| input | model | `VdPerKg` | 0.006114 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Poweleit EA, Taylor ZL, Mizuno T, Vaughn SE, Desta Z, Strawn JR et al. Escitalopram and Sertraline Population Pharmacokinetic Analysis in Pediatric Patients. Clinical pharmacokinetics 62(11):1621–1637 (2023). [doi:10.1007/s40262-023-01294-8](https://doi.org/10.1007/s40262-023-01294-8)

**This record:** Pharmacolibrary v26.09, model `Sertraline_Poweleit2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_sertraline/Sertraline_Poweleit2023_reference>

```bibtex
@misc{pharmacolibrary_SertralinePoweleit2023reference,
  title  = {{Pharmacolibrary model Sertraline_Poweleit2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_sertraline/Sertraline_Poweleit2023_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01294-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 50 mg oral (N06AB06) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sertraline/Sertraline_Poweleit2023_reference/Sertraline_Poweleit2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Sertraline_Poweleit2023_reference_params.json` · controls `Sertraline_Poweleit2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsertraline%5D%20Sertraline_Poweleit2023_reference&body=Drug%3A%20sertraline%0ARecord%3A%20Sertraline_Poweleit2023_reference%0APaper%3A%20Poweleit_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sertraline/Sertraline_Poweleit2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:44 UTC</sub>
