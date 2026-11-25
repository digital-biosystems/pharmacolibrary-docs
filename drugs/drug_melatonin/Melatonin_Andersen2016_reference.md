<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;melatonin&quot;,&quot;href&quot;:&quot;drugs/drug_melatonin/&quot;},{&quot;label&quot;:&quot;Andersen_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melatonin_Merchant2013_reference&quot;,&quot;label&quot;:&quot;Merchant_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melatonin/Melatonin_Merchant2013_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Melatonin_Andersen2016_reference&quot;,&quot;label&quot;:&quot;Andersen_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melatonin/Melatonin_Andersen2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Melatonin_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melatonin/Melatonin_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# melatonin — `Melatonin_Andersen2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's terminal half-life (paper 0.1, model 2.49); the model does not reproduce the paper's time of the peak (tmax) (paper 0.68, model 0.183) (+1 more).

<div class="pk-model-meta" hidden drug="melatonin" model-id="Melatonin_Andersen2016_reference" status="needs_review" stale="false" population="healthy male volunteers" measured-compound="melatonin" parameterization="mechanistic" topology="1C"></div>

## Citation
Andersen LP, Werner MU, Rosenkilde MM, Harpsøe NG, Fuglsang H, Rosenberg J et al. Pharmacokinetics of oral and intravenous melatonin in healthy volunteers. BMC pharmacology & toxicology 17:8 (2016).
  ·  DOI: [10.1186/s40360-016-0052-2](https://doi.org/10.1186/s40360-016-0052-2)

## Population and dosing

**Population:** healthy male volunteers · condition healthy · age group adult · n = 12.

**Dosing:** 10 mg, oral, single.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference.svg" alt="Melatonin_Andersen2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2 elimination min | t1/2z | 39.4 | min |
| V d l kg-1 | V | 1.2 | L/kg |
| CL l min-1 kg-1 | CLnorm | 0.0218 | L/min/kg |
| clearance rate | CL | 5.21 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 0.1, model 2.49); the model does not reproduce the paper's time of the peak (tmax) (paper 0.68, model 0.183) (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Extracted — melatonin: t1/2z 39.4 min, V 1.2 L/kg, CLnorm 0.0218 L/min/kg, CL 5.21 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl l min-1 kg-1].parameter_id`: this record has Q354, the second reading Q22; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2 elimination min | `Q57` · t1/2z | 39.4 | min | 2364 | s | h | llm (0.6) | Tab2:row0:col1, Tab2:row0:col2 |
| V d l kg-1 | `Q61` · V | 1.2 | L/kg | 0.084 | m3 | L | llm (0.6) | Tab2:row1:col2 |
| CL l min-1 kg-1 | `Q354` · CLnorm | 0.0218 | L/min/kg | 2.543e-05 | m3/s | L/h | llm_corrected (0.6) | Tab2:row2:col2 |
| clearance rate | `Q22` · CL | 5.21 | L/h/kg | 0.0001013 | m3/s | L/h | review_gapfill (0.7) | Wang_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: '6.0 (3.1)' (captured trailing unit '3.1' for child rows)
- implicit units: 't 1/2 elimination min' → min (from the paper text: '"Mean t1/2 elimination was 39.4 (3.6) min" for iv melatonin.')
- implicit units: 'V d l kg-1' → L/kg (from the paper text: '"mean Vd 1.2 (0.6) l kg-1".')
- implicit units: 'CL l min-1 kg-1' → L/min/kg (from the paper text: '"mean CL 0.0218 (0.0102) l min-1 kg-1".')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=melatonin
- gap-filled Q22 (CL) from Wang_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- derived CL=88.6665 L/h from ln2/t½z × V = CL (Q57 × Q61); not separately reported

**Extraction notes:**
- transposed table Tab2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab2:row1:col1 = 'V d l kg-1'
- unparsed cell Tab2:row2:col1 = 'CL l min-1 kg-1'
- unparsed cell Andersen_2016_table_1:row0:col2 = '3550.5 (2500.5–8057.5)'
- unparsed cell Andersen_2016_table_1:row0:col4 = '281,538.3 (232,696.1–546,285.4)'
- unparsed cell Andersen_2016_table_1:row0:col5 = '2.5 (1.7–4.7)'
- companion parameter table 1 transcribed (2 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl l min-1 kg-1].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[clearance rate]` | 5.21 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Wang_2024:review'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab2:row0:col1', 'Tab2:row0:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.21 | ['Wang_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 365 L/h | ['Wang_2024:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 84 L | ['Tab2:row1:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=melatonin) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.778 (7 of 9 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.778 | cross-check contradicted by a second reader: verdict disputed; agreement 0.778 (7 of 9 compared fields agree, 1 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | skipped | 3550 | 0.0001092 |  | unresolved concentration unit (exp 'pg ml-1', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.0001092 |  | the transcribed record carries no number for this value |
| T1_cmax | reference | skipped |  | 0.0001092 |  | the transcribed record carries no number for this value |
| T1_t_half_beta | reference | skipped |  | 2.488 |  | the transcribed record carries no number for this value |
| T1_t_half_beta | reference | fail | 0.895 | 2.488 | 2.78 | reported 53.7 min→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.6567 | 2.488 | 3.789 | reported 39.4 min→SI vs simulated h |
| T1_t_half_beta | reference | skipped |  | 2.488 |  | the transcribed record carries no number for this value |
| T1_t_half_beta | reference | fail | 0.9 | 2.488 | 2.765 | reported 54.0 min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.1 | 2.488 | 24.88 | reported 6.0 min→SI vs simulated h |
| T1_tmax | reference | fail | 0.68 | 0.1833 | 0.2696 | reported 40.8 min→SI vs simulated h |
| T1_tmax | reference | fail | 0.6833 | 0.1833 | 0.2683 | reported 41.0 min→SI vs simulated h |
| T1_tmax | reference | skipped |  | 0.1833 |  | the transcribed record carries no number for this value |
| T1_tmax | reference | fail | 0.6833 | 0.1833 | 0.2683 | reported 41.0 min→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_modelica.zip" download>Melatonin_Andersen2016_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_fmi.zip" download>Melatonin_Andersen2016_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_matlab.zip" download>Melatonin_Andersen2016_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_matlab_simbio.zip" download>Melatonin_Andersen2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_sbml.zip" download>Melatonin_Andersen2016_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_cellml.zip" download>Melatonin_Andersen2016_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2323 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 2.463e-05 | m3/s |
| input | model | `VdPerKg` | 0.0012 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Andersen LP, Werner MU, Rosenkilde MM, Harpsøe NG, Fuglsang H, Rosenberg J et al. Pharmacokinetics of oral and intravenous melatonin in healthy volunteers. BMC pharmacology & toxicology 17:8 (2016). [doi:10.1186/s40360-016-0052-2](https://doi.org/10.1186/s40360-016-0052-2)

**This record:** Pharmacolibrary, model `Melatonin_Andersen2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_melatonin/Melatonin_Andersen2016_reference>

```bibtex
@misc{pharmacolibrary_MelatoninAndersen2016reference,
  title  = {{Pharmacolibrary model Melatonin_Andersen2016_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_melatonin/Melatonin_Andersen2016_reference},
  note   = {Parameters from doi:10.1186/s40360-016-0052-2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_melatonin/Melatonin_Andersen2016_reference/Melatonin_Andersen2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Melatonin_Andersen2016_reference_params.json` · controls `Melatonin_Andersen2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmelatonin%5D%20Melatonin_Andersen2016_reference&body=Drug%3A%20melatonin%0ARecord%3A%20Melatonin_Andersen2016_reference%0APaper%3A%20Andersen_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_melatonin/Melatonin_Andersen2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-06 21:33 UTC</sub>
