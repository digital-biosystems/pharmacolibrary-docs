<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftriaxone&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/&quot;},{&quot;label&quot;:&quot;Roubaud-Baudron_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftriaxone_Alonso2021_reference&quot;,&quot;label&quot;:&quot;Alonso_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Alonso2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_Kumar2010_reference&quot;,&quot;label&quot;:&quot;Kumar_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_RoubaudBaudron2025_reference&quot;,&quot;label&quot;:&quot;Roubaud-Baudron_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ceftriaxone — `Ceftriaxone_RoubaudBaudron2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Bioavailability (F) and lag time (Tlag) for ceftriaxone were omitted, forcing the model to rely on unsupported default values.

<div class="pk-model-meta" hidden drug="ceftriaxone" model-id="Ceftriaxone_RoubaudBaudron2025_reference" status="needs_review" stale="false" population="older patients (≥65 years)" measured-compound="ceftriaxone" parameterization="mechanistic" topology="2C"></div>

## Citation
Roubaud-Baudron C, Fauchon H, Stanke-Labesque F, Paccalin M, Breilh D, Grégoire N et al. Pharmacokinetics of Subcutaneous and Intravenous Ceftriaxone in an Older Population: The PhASAge Study. Open forum infectious diseases 12(6):ofaf313 (2025).
  ·  DOI: [10.1093/ofid/ofaf313](https://doi.org/10.1093/ofid/ofaf313)

## Population and dosing

**Population:** older patients (≥65 years) · condition infection · age group elderly · n = 47.

**Dosing:** 1000 mg, intravenous, subcutaneous, multiple, every 24 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference.svg" alt="Ceftriaxone_RoubaudBaudron2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka, h−1 | kabs | 1.63 | h−1 | 15.5 |
| Vc, L | V1 | 7.13 | L | 8.83 |
| Vp, L | V2 | 8.29 | L | 0.51 |
| Q, L/h | Q | 9.14 | L/h | 0.29 |
| CL, L/h | CL | 0.35 | L/h | 15.2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.938). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Bioavailability (F) and lag time (Tlag) for ceftriaxone were omitted, forcing the model to rely on unsupported default values.**

The record includes a two-compartment model for ceftriaxone with estimated parameters like clearance (0.35 L/h) and central volume (7.13 L). However, the bioavailability (F) and lag time (Tlag) were not reported in the paper, leaving them as library defaults. Because these values affect the simulated drug profile but lack support from this specific study, the record requires review to extract or justify the missing parameters. Extracted — ceftriaxone: kabs 1.63 h−1, V1 7.13 L, V2 8.29 L, Q 9.14 L/h, CL 0.35 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clnr: this record has none, the second reading 0.527. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka, h−1 | `Q49` · kabs | 1.63 | h−1 | 0.0004528 | 1/s | 1/h | 15.5 | exact (1) | ofaf313-T2:row2:col1, ofaf313-T2:row2:col2 |
| Vc, L | `Q63` · V1 | 7.13 | L | 0.00713 | m3 | l | 8.83 | exact (1) | ofaf313-T2:row3:col1, ofaf313-T2:row3:col2 |
| Vp, L | `Q64` · V2 | 8.29 | L | 0.00829 | m3 | l | 0.51 | exact (1) | ofaf313-T2:row4:col1, ofaf313-T2:row4:col2 |
| Q, L/h | `Q30` · Q | 9.14 | L/h | 2.539e-06 | m3/s | l/h | 0.29 | exact (1) | ofaf313-T2:row5:col1, ofaf313-T2:row5:col2 |
| CL, L/h | `Q22` · CL | 0.35 | L/h | 9.722e-08 | m3/s | l/h | 15.2 | exact (1) | ofaf313-T2:row6:col1, ofaf313-T2:row6:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Equationc | Q900 | llm |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'β Cockcrofta' — extend the ontology if this is a real PK parameter (source ['ofaf313-T2:row7:col1', 'ofaf313-T2:row7:col2'])
- dropped duplicate Q49 ('Ka', value '0.56') — already have one for this compound
- dropped duplicate Q63 ('Vc', value '0.46') — already have one for this compound
- dropped duplicate Q22 ('CL', value '0.14') — already have one for this compound
- dropped value-less row: 'Ka (h-1)Vc (L)Vp (L)Q (L/h)CLnr (L/h)CoeffR'
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc, L); Q64 (Vp, L); Q30 (Q, L/h); Q22 (CL, L/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ceftriaxone
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S1 transcribed (3 record(s))
- LLM selected parameter table(s) 2, S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.938 (15/16 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clnr]` |  | 0.527 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ofaf313-T2:row6:col1', 'ofaf313-T2:row6:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['ofaf313-T2:row5:col1', 'ofaf313-T2:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['ofaf313-T2:row2:col1', 'ofaf313-T2:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['ofaf313-T2:row3:col1', 'ofaf313-T2:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['ofaf313-T2:row4:col1', 'ofaf313-T2:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.35 | ['ofaf313-T2:row6:col1', 'ofaf313-T2:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.35 L/h | ['ofaf313-T2:row6:col1', 'ofaf313-T2:row6:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7.13 L | ['ofaf313-T2:row3:col1', 'ofaf313-T2:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 8.29 L | ['ofaf313-T2:row4:col1', 'ofaf313-T2:row4:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=ceftriaxone) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_modelica.zip" download>Ceftriaxone_RoubaudBaudron2025_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_fmi.zip" download>Ceftriaxone_RoubaudBaudron2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_matlab.zip" download>Ceftriaxone_RoubaudBaudron2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_matlab_simbio.zip" download>Ceftriaxone_RoubaudBaudron2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_sbml.zip" download>Ceftriaxone_RoubaudBaudron2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_cellml.zip" download>Ceftriaxone_RoubaudBaudron2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.5546 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `Cl` | 9.722e-08 | m3/s |
| input | model | `VdPerKg` | 0.0001019 | m3/kg |
| input | model | `k12` | 0.0003561 | 1/s |
| input | model | `k21` | 0.0003063 | 1/s |
| input | model | `ka` | 0.0004528 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Roubaud-Baudron C, Fauchon H, Stanke-Labesque F, Paccalin M, Breilh D, Grégoire N et al. Pharmacokinetics of Subcutaneous and Intravenous Ceftriaxone in an Older Population: The PhASAge Study. Open forum infectious diseases 12(6):ofaf313 (2025). [doi:10.1093/ofid/ofaf313](https://doi.org/10.1093/ofid/ofaf313)

**This record:** Pharmacolibrary v26.09, model `Ceftriaxone_RoubaudBaudron2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference>

```bibtex
@misc{pharmacolibrary_CeftriaxoneRoubaudBaudron2025reference,
  title  = {{Pharmacolibrary model Ceftriaxone_RoubaudBaudron2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference},
  note   = {Parameters from doi:10.1093/ofid/ofaf313},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1000 mg, single dose, first-order absorption (ka 1.63 /h, F 0.9). Dose in the paper: 1000 mg.

<dbs-fmusim paramsurl="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference/Ceftriaxone_RoubaudBaudron2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Ceftriaxone_RoubaudBaudron2025_reference_params.json` · controls `Ceftriaxone_RoubaudBaudron2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bceftriaxone%5D%20Ceftriaxone_RoubaudBaudron2025_reference&body=Drug%3A%20ceftriaxone%0ARecord%3A%20Ceftriaxone_RoubaudBaudron2025_reference%0APaper%3A%20Roubaud-Baudron_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:45 UTC</sub>
