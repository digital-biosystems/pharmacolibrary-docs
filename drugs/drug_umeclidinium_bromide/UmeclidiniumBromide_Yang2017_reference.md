<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;umeclidinium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/&quot;},{&quot;label&quot;:&quot;Yang_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;UmeclidiniumBromide_Yang2017_reference&quot;,&quot;label&quot;:&quot;Yang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# umeclidinium bromide — `UmeclidiniumBromide_Yang2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The umeclidinium record was held back because the absorption rate constant ka (and Tlag) was not reported in the Yang_2017 abstract, so library defaults would stand in for unreported absorption parameters.

<div class="pk-model-meta" hidden drug="umeclidinium bromide" model-id="UmeclidiniumBromide_Yang2017_reference" status="needs_review" stale="false" population="adults with asthma" measured-compound="umeclidinium" parameterization="apparent" topology="1C"></div>

## Citation
Yang S, Lee L, Pascoe S. Population Pharmacokinetics Modeling of Inhaled Umeclidinium for Adult Patients with Asthma. European journal of drug metabolism and pharmacokinetics 42(1):79–88 (2017).
  ·  DOI: [10.1007/s13318-016-0331-8](https://doi.org/10.1007/s13318-016-0331-8)

## Population and dosing

**Population:** adults with asthma · condition asthma · age group adult · n = 128.

**Dosed compound ≠ measured compound:** dosed umeclidinium bromide, measured umeclidinium.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference.svg" alt="UmeclidiniumBromide_Yang2017_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 257 | L/h |
| V c/F | V/F | 804 | L |
| AUC0-24 median | AUCt | 64.7 | mg·h/L |
| C max median | Cmax | 10.6 | pg/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The umeclidinium record was held back because the absorption rate constant ka (and Tlag) was not reported in the Yang_2017 abstract, so library defaults would stand in for unreported absorption parameters.**

The paper reports only CL/F 257 L/h, V/F 804 L, AUC0-24 64.7 mg·h/L and Cmax 10.6 pg/mL for umeclidinium; ka is absent from the source. The model builder defaulted ka and Tlag and assumed F=1, Fm=1 with no molar correction, giving an apparent (/F) parameterization with first-order depot input. The failed check flagged both the defaulted parameters and the invented absorption as not acceptable. Because the record is abstract-only, the summary statistics stand in for a fitted model, so the absorption values are not supported by this paper. Extracted — umeclidinium bromide: CL/F 257 L/h, V/F 804 L, AUCt 64.7 mg·h/L, Cmax 10.6 pg/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has umeclidinium bromide, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 257 | L/h | 7.139e-05 | m3/s | l/h | exact (1) | Yang_2017:abstract |
| V c/F | `Q76` · V/F | 804 | L | 0.804 | m3 | l | space_fold (0.95) | Yang_2017:abstract |
| AUC0-24 median | `Q19` · AUCt | 64.7 | mg·h/L |  |  | mg·h/L | llm (0.6) | Yang_2017:abstract |
| C max median | `Q32` · Cmax | 10.6 | pg/mL |  |  | pg/ml | space_fold (0.95) | Yang_2017:abstract |

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
- unit_dimension_unknown: 'pg h/mL' (AUCt)
- implicit units: 'AUC0-24 median' → mg·h/L (from the popPK convention: 'No unit stated in text, caption, or footnotes. AUC0-24 for an antibacterial is conventionally reported as mg·h/L (concen')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=umeclidinium
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V c/F' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Yang_2017_metadata.yaml (4 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-24]` | 64.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-24]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 10.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 257 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 257 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f]` | 804 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/f]` |  | 804 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | umeclidinium bromide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | umeclidinium | unknown | mismatch |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Yang_2017:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Yang_2017:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Yang_2017:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Yang_2017:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 257 L/h | ['Yang_2017:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 804 L | ['Yang_2017:abstract'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=umeclidinium) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_modelica.zip" download>UmeclidiniumBromide_Yang2017_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_fmi.zip" download>UmeclidiniumBromide_Yang2017_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_matlab.zip" download>UmeclidiniumBromide_Yang2017_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_matlab_simbio.zip" download>UmeclidiniumBromide_Yang2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_sbml.zip" download>UmeclidiniumBromide_Yang2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_cellml.zip" download>UmeclidiniumBromide_Yang2017_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4286 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 7.139e-05 | m3/s |
| input | model | `VdPerKg` | 0.01149 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yang S, Lee L, Pascoe S. Population Pharmacokinetics Modeling of Inhaled Umeclidinium for Adult Patients with Asthma. European journal of drug metabolism and pharmacokinetics 42(1):79–88 (2017). [doi:10.1007/s13318-016-0331-8](https://doi.org/10.1007/s13318-016-0331-8)

**This record:** Pharmacolibrary v26.09, model `UmeclidiniumBromide_Yang2017_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference>

```bibtex
@misc{pharmacolibrary_UmeclidiniumBromideYang2017reference,
  title  = {{Pharmacolibrary model UmeclidiniumBromide_Yang2017_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference},
  note   = {Parameters from doi:10.1007/s13318-016-0331-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference/UmeclidiniumBromide_Yang2017_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `UmeclidiniumBromide_Yang2017_reference_params.json` · controls `UmeclidiniumBromide_Yang2017_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bumeclidinium_bromide%5D%20UmeclidiniumBromide_Yang2017_reference&body=Drug%3A%20umeclidinium_bromide%0ARecord%3A%20UmeclidiniumBromide_Yang2017_reference%0APaper%3A%20Yang_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_umeclidinium_bromide/UmeclidiniumBromide_Yang2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 15:20 UTC</sub>
