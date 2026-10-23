<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;bilastine&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/&quot;},{&quot;label&quot;:&quot;Togawa_2016 \u00b7 japanesea&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bilastine_Togawa2016_caucasianb_5&quot;,&quot;label&quot;:&quot;Togawa_2016_caucasianb_5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_caucasianb_5.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bilastine_Togawa2016_japanesea&quot;,&quot;label&quot;:&quot;Togawa_2016_japanesea&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bilastine/Bilastine_Togawa2016_japanesea.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bilastine — `Bilastine_Togawa2016_japanesea`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bioavailability and lag time were left at library defaults rather than extracted from the bilastine model.

<div class="pk-model-meta" hidden drug="bilastine" model-id="Bilastine_Togawa2016_japanesea" status="needs_review" stale="false" population="healthy Japanese adults" measured-compound="bilastine" parameterization="mechanistic" topology="2C"></div>

## Citation
Togawa M, Yamaya H, Rodríguez M, Nagashima H. Pharmacokinetics, Pharmacodynamics and Population Pharmacokinetic/Pharmacodynamic Modelling of Bilastine, a Second-Generation Antihistamine, in Healthy Japanese Subjects. Clinical drug investigation 36(12):1011–1021 (2016).
  ·  DOI: [10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2)

## Population and dosing

**Population:** healthy Japanese adults · condition healthy · age group adult · n = 60.

**Dosing:** 10, 20, 50 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea.svg" alt="Bilastine_Togawa2016_japanesea diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 14.4 | L/h | 28 (22% RSE) |
| Vc (L) | V1 | 51.2 | L | 34 (19% RSE) |
| Q (L/h) | Q | 1.55 | L/h |  |
| Vp (L) | V2 | 20.2 | L | 61 (21% RSE) |
| ka (h−1) | kabs | 1.7 | h−1 | 28 (40% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability and lag time were left at library defaults rather than extracted from the bilastine model.**

The record lacks explicit estimates for bioavailability (F) and lag time (Tlag), forcing the use of placeholder values. These unreported parameters affect the simulated concentration profile but are not supported by the paper's data. Consequently, the model was held back because these critical inputs were not explicitly justified or extracted. Extracted — bilastine: CL 14.4 L/h, V1 51.2 L, Q 1.55 L/h, V2 20.2 L, kabs 1.7 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bilastine, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 14.4 | L/h | 4e-06 | m3/s | l/h | exact (1) | Tab5:row2:col1 | 28 (22% RSE) |
| Vc (L) | `Q63` · V1 | 51.2 | L | 0.0512 | m3 | l | exact (1) | Tab5:row3:col1 | 34 (19% RSE) |
| Q (L/h) | `Q30` · Q | 1.55 | L/h | 4.306e-07 | m3/s | l/h | exact (1) | Tab5:row4:col1 |  |
| Vp (L) | `Q64` · V2 | 20.2 | L | 0.0202 | m3 | l | exact (1) | Tab5:row5:col1 | 61 (21% RSE) |
| ka (h−1) | `Q49` · kabs | 1.7 | h−1 | 0.0004722 | 1/s | 1/h | exact (1) | Tab5:row6:col1 | 28 (40% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'ωCL (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωVc (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωQ (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωVp (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωka (%)' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σ (%)' routed out of structural estimates ('Residual variability')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q30 (Q (L/h)); Q64 (Vp (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bilastine
- population split: 'japanesea' subgroup of Togawa_2016 (paper reports 2 populations: caucasianb [5], japanesea)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 14.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  | 14.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 1.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 51.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 51.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 20.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 20.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bilastine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bilastine | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab5:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab5:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab5:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab5:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab5:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.4 | ['Tab5:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.4 L/h | ['Tab5:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 51.2 L | ['Tab5:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 20.2 L | ['Tab5:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=bilastine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped |  | 3.867 | non-numeric value |
| T1_tmax | reference | skipped |  | 1.154 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_modelica.zip" download>Bilastine_Togawa2016_japanesea_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_fmi.zip" download>Bilastine_Togawa2016_japanesea_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_matlab.zip" download>Bilastine_Togawa2016_japanesea_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_matlab_simbio.zip" download>Bilastine_Togawa2016_japanesea_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_sbml.zip" download>Bilastine_Togawa2016_japanesea_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_cellml.zip" download>Bilastine_Togawa2016_japanesea_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4636 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 4e-06 | m3/s |
| input | model | `VdPerKg` | 0.0007314 | m3/kg |
| input | model | `k12` | 8.409e-06 | 1/s |
| input | model | `k21` | 2.131e-05 | 1/s |
| input | model | `ka` | 0.0004722 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Togawa M, Yamaya H, Rodríguez M, Nagashima H. Pharmacokinetics, Pharmacodynamics and Population Pharmacokinetic/Pharmacodynamic Modelling of Bilastine, a Second-Generation Antihistamine, in Healthy Japanese Subjects. Clinical drug investigation 36(12):1011–1021 (2016). [doi:10.1007/s40261-016-0447-2](https://doi.org/10.1007/s40261-016-0447-2)

**This record:** Pharmacolibrary v26.09, model `Bilastine_Togawa2016_japanesea`. <https://pharmacolibrary.github.io/#/drugs/drug_bilastine/Bilastine_Togawa2016_japanesea>

```bibtex
@misc{pharmacolibrary_BilastineTogawa2016japanesea,
  title  = {{Pharmacolibrary model Bilastine_Togawa2016_japanesea}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bilastine/Bilastine_Togawa2016_japanesea},
  note   = {Parameters from doi:10.1007/s40261-016-0447-2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 1.7 /h, F 0.9). Doses in the paper: 10, 20, 50 mg.

<dbs-fmusim paramsurl="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_bilastine/Bilastine_Togawa2016_japanesea/Bilastine_Togawa2016_japanesea_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Bilastine_Togawa2016_japanesea_params.json` · controls `Bilastine_Togawa2016_japanesea_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbilastine%5D%20Bilastine_Togawa2016_japanesea&body=Drug%3A%20bilastine%0ARecord%3A%20Bilastine_Togawa2016_japanesea%0APaper%3A%20Togawa_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bilastine/Bilastine_Togawa2016_japanesea%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 22:37 UTC</sub>
