<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;landiolol&quot;,&quot;href&quot;:&quot;drugs/drug_landiolol/&quot;},{&quot;label&quot;:&quot;Kunisawa_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Landiolol_Kunisawa2015_reference&quot;,&quot;label&quot;:&quot;Kunisawa_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_landiolol/Landiolol_Kunisawa2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Landiolol_Kunisawa2015v2_reference&quot;,&quot;label&quot;:&quot;Kunisawa_2015_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_landiolol/Landiolol_Kunisawa2015v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# landiolol — `Landiolol_Kunisawa2015_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The landiolol record lacks a value for the absorption lag time, leaving the parameter undefined in the two-compartment model.**

The record lists five parameters for landiolol, including a lag time of 0.634 min, but the review found only four parameters covered. The absorption lag time was neither emitted nor included in the defaulted list, causing a parameter coverage failure. Because the record was built from the abstract alone, these summary statistics stand in for a fitted model. Extracted — landiolol: CL 34 mL/min/kg, V1 74.9 mL/kg, Q 70.9 mL/min/kg, V2 38.9 mL/kg, tlag 0.634 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has landiolol hydrochloride, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-29 08:52:02.773497+00:00) predates the upstream re-run (2026-10-06 23:55:10.850575+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `landiolol hydrochloride`, measured `landiolol`.

## Citation
Kunisawa T et al., Target-controlled infusion and populati…, Journal of anesthesia (2015)
  ·  DOI: [10.1007/s00540-014-1908-5](https://doi.org/10.1007/s00540-014-1908-5)

<div class="pk-model-meta" hidden drug="landiolol" model-id="Landiolol_Kunisawa2015_reference" status="extracted" stale="true" population="gynecologic patients" measured-compound="landiolol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| total body clearance (CL) | `Q22` · CL | 34.0 | mL/min/kg | 3.966666666666667e-05 | [ml] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Kunisawa_2015:abstract | — | not captured |
| distribution volume of the central compartment (V 1) | `Q63` · V1 | 74.9 | mL/kg | 0.005243 | [ml] / [kg] | not captured | llm_confirmed (0.6) | Kunisawa_2015:abstract | — | not captured |
| inter-compartmental clearance (Q) | `Q30` · Q | 70.9 | mL/min/kg | 8.271666666666667e-05 | [ml] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Kunisawa_2015:abstract | — | not captured |
| distribution volume of the peripheral compartment (V 2) | `Q64` · V2 | 38.9 | mL/kg | 0.0027229999999999997 | [ml] / [kg] | not captured | llm_confirmed (0.6) | Kunisawa_2015:abstract | — | not captured |
| lag time (ALAG) | `Q83` · tlag | 0.634 | min | 38.04 | [min] | not captured | exact (1.0) | Kunisawa_2015:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (total body clearance (CL)); Q63 (distribution volume of the central compartment (V 1)); Q30 (inter-compartmental clearance (Q)); Q64 (distribution volume of the peripheral compartment (V 2))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=landiolol
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kunisawa_2015_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[distribution volume of the central compartment]` | 74.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution volume of the central compartment]` | not captured | 74.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution volume of the peripheral compartment]` | 38.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution volume of the peripheral compartment]` | not captured | 38.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` | 70.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` | not captured | 70.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.634 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | not captured | 0.634 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 34.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | not captured | 34.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | landiolol hydrochloride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | landiolol | unknown | mismatch |
| `gpt-oss:120b` | `parameters[distribution volume of the central compartment]` | 74.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution volume of the central compartment]` | not captured | 74.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution volume of the peripheral compartment]` | 38.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution volume of the peripheral compartment]` | not captured | 38.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[inter-compartmental clearance]` | 70.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[inter-compartmental clearance]` | not captured | 70.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 0.634 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | not captured | 0.634 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearance]` | 34.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total body clearance]` | not captured | 34.0 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | landiolol hydrochloride | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | landiolol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 34.0 | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 143 L/h | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.24 L | not captured | not captured | ['Kunisawa_2015:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.72 L | not captured | not captured | ['Kunisawa_2015:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=landiolol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_landiolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kunisawa_2015` / `Kunisawa_2015::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_landiolol/models/modelica/Landiolol_Kunisawa2015_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_landiolol/models/modelica/Landiolol_Kunisawa2015_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_landiolol/models/modelica/Landiolol_Kunisawa2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_modelica.zip" download>Landiolol_Kunisawa2015_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_fmi.zip" download>Landiolol_Kunisawa2015_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_matlab.zip" download>Landiolol_Kunisawa2015_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_matlab_simbio.zip" download>Landiolol_Kunisawa2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_sbml.zip" download>Landiolol_Kunisawa2015_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_cellml.zip" download>Landiolol_Kunisawa2015_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference.svg" alt="Landiolol_Kunisawa2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_landiolol/Landiolol_Kunisawa2015_reference/Landiolol_Kunisawa2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Landiolol_Kunisawa2015_reference_params.json` · controls `Landiolol_Kunisawa2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:55 UTC</sub>
