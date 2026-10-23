<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemisinin&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/&quot;},{&quot;label&quot;:&quot;Birgersson_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemisinin_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artemisinin_Birgersson2016_reference&quot;,&quot;label&quot;:&quot;Birgersson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Artemisinin_Chotsiri2024_reference&quot;,&quot;label&quot;:&quot;Chotsiri_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemisinin/Artemisinin_Chotsiri2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemisinin — `Artemisinin_Birgersson2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The artemisinin model's terminal half-life (2.06 h) does not reproduce the paper's reported values (127 h and 600 h), and the absorption rate constant ka was left at library defaults instead of being reported, so the record was held back.

<div class="pk-model-meta" hidden drug="artemisinin" model-id="Artemisinin_Birgersson2016_reference" status="needs_review" stale="false" population="healthy male Vietnamese volunteers" measured-compound="artemisinin" parameterization="apparent" topology="1C"></div>

## Citation
Birgersson S, Van Toi P, Truong NT, Dung NT, Ashton M, Hien TT et al. Population pharmacokinetic properties of artemisinin in healthy male Vietnamese volunteers. Malaria journal 15:90 (2016).
  ·  DOI: [10.1186/s12936-016-1134-8](https://doi.org/10.1186/s12936-016-1134-8)

## Population and dosing

**Population:** healthy male Vietnamese volunteers · condition healthy · age group adult · n = 15.

**Dosing:** 160, 500 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference.svg" alt="Artemisinin_Birgersson2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 417 | L/h | 9.32 |  |
| V/F (L) | V/F | 1210 | L | 9.02 |  |
| Nr. trans comp | n_transit | 7 |  |  |  |
| MTT (h) | MTT | 0.787 | h | 5.97 |  |
| F (%) | Fab | 100 |  |  | 34.3 (52.3% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The artemisinin model's terminal half-life (2.06 h) does not reproduce the paper's reported values (127 h and 600 h), and the absorption rate constant ka was left at library defaults instead of being reported, so the record was held back.**

Simulated as the paper dosed it, the model's terminal half-life is 2.06 h versus 127 h reported in the paper (ratio 0.0162) and versus 600 h in a second comparison (ratio 0.0034), both outside tolerance. The absorption rate constant ka (and Tlag) were not reported in the source and were substituted with library defaults, which affect the simulated profile but are not supported by this paper. The model also assumes apparent parameterization (F=1, Fm=1, no molar correction) with first-order depot input, and one reported unit could not be converted to SI, so a parameter reached the record without an SI value. Extracted — artemisinin: CL/F 417 L/h, V/F 1.21e+03 L, n_transit 7, MTT 0.787 h, Fab 100.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemisinin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 417 | L/h | 0.0001158 | m3/s | l/h | 9.32 | exact (1) | Tab2:row1:col1, Tab2:row1:col2, Tab2:row1:col4 |  |
| V/F (L) | `Q76` · V/F | 1210 | L | 1.21 | m3 | l | 9.02 | exact (1) | Tab2:row2:col1, Tab2:row2:col2 |  |
| Nr. trans comp | `Q311` · n_transit | 7 |  |  |  |  |  | llm (0.6) | Tab2:row3:col1, Tab2:footnote |  |
| MTT (h) | `Q81` · MTT | 0.787 | h |  |  | h | 5.97 | exact (1) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col4 |  |
| F (%) | `Q40` · Fab | 100 |  |  |  |  |  | exact (1) | Tab2:row5:col1, Tab2:row5:col4 | 34.3 (52.3% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'F (%)' routed out of structural estimates ('IIV/IOV* CV % (RSE %)')
- dropped value-less row: 'CL/F'
- dropped value-less row: 'V/F'
- dropped value-less row: 'MTT'
- dropped value-less row: 'RSE'
- dropped value-less row: 'CV %'
- dropped value-less row: '95 % CI'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artemisinin
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row1:col3 = '17.1* (34.3)'
- unparsed cell Tab2:row4:col3 = '53.9* (20.3)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | artemisinin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | artemisinin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab2:row2:col1', 'Tab2:row2:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 417 L/h | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.21e+03 L | ['Tab2:row2:col1', 'Tab2:row2:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=artemisinin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 127 | 2.056 | 0.0162 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 127 | 2.056 | 0.0162 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 600 | 2.056 | 0.0034 | days→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_modelica.zip" download>Artemisinin_Birgersson2016_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_fmi.zip" download>Artemisinin_Birgersson2016_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_matlab.zip" download>Artemisinin_Birgersson2016_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_matlab_simbio.zip" download>Artemisinin_Birgersson2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_sbml.zip" download>Artemisinin_Birgersson2016_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_cellml.zip" download>Artemisinin_Birgersson2016_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2823 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.00016 | kg |
| input | model | `Cl` | 0.0001158 | m3/s |
| input | model | `VdPerKg` | 0.01729 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Birgersson S, Van Toi P, Truong NT, Dung NT, Ashton M, Hien TT et al. Population pharmacokinetic properties of artemisinin in healthy male Vietnamese volunteers. Malaria journal 15:90 (2016). [doi:10.1186/s12936-016-1134-8](https://doi.org/10.1186/s12936-016-1134-8)

**This record:** Pharmacolibrary v26.09, model `Artemisinin_Birgersson2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference>

```bibtex
@misc{pharmacolibrary_ArtemisininBirgersson2016reference,
  title  = {{Pharmacolibrary model Artemisinin_Birgersson2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference},
  note   = {Parameters from doi:10.1186/s12936-016-1134-8},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 160 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 160, 500 mg.

<dbs-fmusim paramsurl="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference/Artemisinin_Birgersson2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Artemisinin_Birgersson2016_reference_params.json` · controls `Artemisinin_Birgersson2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartemisinin%5D%20Artemisinin_Birgersson2016_reference&body=Drug%3A%20artemisinin%0ARecord%3A%20Artemisinin_Birgersson2016_reference%0APaper%3A%20Birgersson_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artemisinin/Artemisinin_Birgersson2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:10 UTC</sub>
