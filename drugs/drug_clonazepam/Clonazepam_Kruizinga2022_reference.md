<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;clonazepam&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/&quot;},{&quot;label&quot;:&quot;Kruizinga_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonazepam_Kruizinga2022_reference&quot;,&quot;label&quot;:&quot;Kruizinga_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonazepam — `Clonazepam_Kruizinga2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Km), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clonazepam, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:37:00.852506+00:00) predates the upstream re-run (2026-10-07 07:36:16.483508+00:00). Current validate status: `extracted`.

## Citation
Kruizinga MD et al., Population pharmacokinetics of clonazep…, British journal of clinical… (2022)
  ·  DOI: [10.1111/bcp.15152](https://doi.org/10.1111/bcp.15152)

## Model component
<dbs-pgx drug="clonazepam" model-id="Clonazepam_Kruizinga2022_reference" status="extracted" stale="true" population="healthy adults" measured-compound="clonazepam" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ V D central (L) | `Q63` · V1 | 11.5 | L | 0.0115 | [l] | 10.4 | llm (0.6) | bcp15152-tbl-0002:row3:col1, bcp15152-tbl-0002:row3:col2, bcp15152-tbl-0002:row3:col3 | — | not captured |
| θ clearance (L h−1) | `Q22` · CL | 0.16 | L h−1 | 4.444444444444445e-08 | [l] / [h] | 5.5 | llm_confirmed (0.6) | bcp15152-tbl-0002:row4:col1, bcp15152-tbl-0002:row4:col2, bcp15152-tbl-0002:row4:col3 | — | not captured |
| θ V D peripheral (L) | `Q64` · V2 | 12.9 | L | 0.0129 | [l] | 9.9 | llm (0.6) | bcp15152-tbl-0002:row5:col1, bcp15152-tbl-0002:row5:col2, bcp15152-tbl-0002:row5:col3 | — | not captured |
| θ Q (L h−1) | `Q30` · Q | 11.2 | L h−1 | 3.111111111111111e-06 | [l] / [h] | 18.3 | llm (0.6) | bcp15152-tbl-0002:row6:col1, bcp15152-tbl-0002:row6:col2, bcp15152-tbl-0002:row6:col3 | — | not captured |
| θ K el saliva (h−1) | `Q47` · kel | 0.12 | h−1 | 3.3333333333333335e-05 | [1] / [h] | 6.0 | llm (0.6) | bcp15152-tbl-0002:row8:col1, bcp15152-tbl-0002:row8:col2, bcp15152-tbl-0002:row8:col3 | — | not captured |
| θ RatioKM (μg/L) | `Q1` · Km | 0.74 | μg/L | not captured | [µg] / [l] | 28.5 | llm (0.6) | bcp15152-tbl-0002:row10:col1, bcp15152-tbl-0002:row10:col2, bcp15152-tbl-0002:row10:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped diagnostic row 'Plasma kinetics' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped diagnostic row 'θ Prob. slow group' → Q318 (shrinkage) — reported statistic, not a parameter
- dropped unlinked row (NIL): 'Saliva kinetics' — extend the ontology if this is a real PK parameter (source ['bcp15152-tbl-0002:row7:col2', 'bcp15152-tbl-0002:row7:col3', 'bcp15152-tbl-0002:row7:col4'])
- dropped diagnostic row 'θ RatioMAX' → Q318 (shrinkage) — reported statistic, not a parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonazepam

**Extraction notes:**
- unparsed cell bcp15152-tbl-0002:row1:col1 = 'θ k a ‐ slow group (h−1)'
- unparsed cell bcp15152-tbl-0002:row7:col1 = 'θ F saliva (% 1000−1)'
- unparsed cell bcp15152-tbl-0002:row11:col1 = 'ω 2 k a ‐ slow group'
- unparsed cell bcp15152-tbl-0002:row11:col2 = '0.16 [2.24%]'
- unparsed cell bcp15152-tbl-0002:row12:col1 = '0.25 [0.33%]'
- unparsed cell bcp15152-tbl-0002:row13:col1 = '0.026 [3.98%]'
- unparsed cell bcp15152-tbl-0002:row14:col1 = '0.28 [5.30%]'
- unparsed cell bcp15152-tbl-0002:row15:col1 = '0.056 [17.2%]'
- unparsed cell bcp15152-tbl-0002:row16:col1 = 'σ 2 proportional plasma'
- unparsed cell bcp15152-tbl-0002:row16:col2 = '0.0058 [15.9%]'
- unparsed cell bcp15152-tbl-0002:row17:col1 = '0.057 [16.5%]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θ ratiomax]` | not captured | 0.031 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clonazepam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clonazepam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row10:col1', 'bcp15152-tbl-0002:row10:col2', 'bcp15152-tbl-0002:row10:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row6:col1', 'bcp15152-tbl-0002:row6:col2', 'bcp15152-tbl-0002:row6:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp15152-tbl-0002:row8:col1', 'bcp15152-tbl-0002:row8:col2', 'bcp15152-tbl-0002:row8:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row3:col1', 'bcp15152-tbl-0002:row3:col2', 'bcp15152-tbl-0002:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp15152-tbl-0002:row5:col1', 'bcp15152-tbl-0002:row5:col2', 'bcp15152-tbl-0002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | not captured | not captured | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.16 L/h | not captured | not captured | ['bcp15152-tbl-0002:row4:col1', 'bcp15152-tbl-0002:row4:col2', 'bcp15152-tbl-0002:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11.5 L | not captured | not captured | ['bcp15152-tbl-0002:row3:col1', 'bcp15152-tbl-0002:row3:col2', 'bcp15152-tbl-0002:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['bcp15152-tbl-0002:row5:col1', 'bcp15152-tbl-0002:row5:col2', 'bcp15152-tbl-0002:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=clonazepam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clonazepam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kruizinga_2022` / `Kruizinga_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_clonazepam/models/modelica/Clonazepam_Kruizinga2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_clonazepam/models/modelica/Clonazepam_Kruizinga2022_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_clonazepam/models/modelica/Clonazepam_Kruizinga2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_modelica.zip" download>Clonazepam_Kruizinga2022_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_fmi.zip" download>Clonazepam_Kruizinga2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_matlab.zip" download>Clonazepam_Kruizinga2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_matlab_simbio.zip" download>Clonazepam_Kruizinga2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_sbml.zip" download>Clonazepam_Kruizinga2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_cellml.zip" download>Clonazepam_Kruizinga2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference.svg" alt="Clonazepam_Kruizinga2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 0.5 mg infusion over 10 min, single dose. Doses in the paper: 0.5, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_clonazepam/Clonazepam_Kruizinga2022_reference/Clonazepam_Kruizinga2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Clonazepam_Kruizinga2022_reference_params.json` · controls `Clonazepam_Kruizinga2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:36 UTC</sub>
