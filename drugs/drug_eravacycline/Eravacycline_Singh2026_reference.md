<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01A&quot;,&quot;href&quot;:&quot;atc/J01A.md&quot;},{&quot;label&quot;:&quot;eravacycline&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/&quot;},{&quot;label&quot;:&quot;Singh_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eravacycline_Ji2025_reference&quot;,&quot;label&quot;:&quot;Ji_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Ji2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eravacycline_Zhanel2016_reference&quot;,&quot;label&quot;:&quot;Zhanel_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Zhanel2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eravacycline_Singh2026_reference&quot;,&quot;label&quot;:&quot;Singh_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eravacycline/Eravacycline_Singh2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eravacycline — `Eravacycline_Singh2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life.**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — eravacycline: CL 16.3 L/h, V1 3.88 L, Q 33.9 L/h, V2 39 L, Q2 23.5 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[central volume in l].value`: this record has 3.88, the second reading 111.9; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Singh S et al., Eravacycline pharmacokinetics/pharmacod…, Microbiology spectrum (2026)
  ·  DOI: [10.1128/spectrum.03432-25](https://doi.org/10.1128/spectrum.03432-25)

<div class="pk-model-meta" hidden drug="eravacycline" model-id="Eravacycline_Singh2026_reference" status="needs_review" stale="false" population="virtual patients (M. abscessus lung disease)" measured-compound="eravacycline" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance in L/h | `Q22` · CL | 16.3 | L/h | 4.527777777777778e-06 | L/h | not captured | llm_confirmed (0.6) | T4:row2:col1, T4:row2:col2, T4:row2:col3, T4:row2:col4 | — | not captured |
| Central volume in L | `Q63` · V1 | 3.88 | L | 0.0038799999999999998 | L | not captured | llm_confirmed (0.6) | T4:row3:col1, T4:row3:col2, T4:row3:col3, T4:row3:col4 | — | not captured |
| Intercompartmental clearance (first compartment) in L/h | `Q30` · Q | 33.9 | L/h | 9.416666666666666e-06 | L/h | not captured | llm_confirmed (0.6) | T4:row4:col1, T4:row4:col2, T4:row4:col3, T4:row4:col4 | — | not captured |
| Peripheral volume one in L | `Q64` · V2 | 39 | L | 0.039 | L | not captured | llm_confirmed (0.6) | T4:row5:col1, T4:row5:col2, T4:row5:col3, T4:row5:col4 | — | not captured |
| Intercompartmental clearance (second compartment) in L/h | `Q99` · Q2 | 23.5 | L/h | 6.527777777777778e-06 | L/h | not captured | llm_corrected (0.6) | T4:row6:col1, T4:row6:col2, T4:row6:col3, T4:row6:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'published by ji et al. (18), used in the domain of input' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mce generated in 10,000 virtual subjects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q64 ('Peripheral volume two in L', value '122') — already have one for this compound
- dropped unlinked row (NIL): 'ELF-to-plasma ratio' — extend the ontology if this is a real PK parameter (source ['T4:row8:col1'])
- implicit units: 'Clearance in L/h' → L/h (from the paper text: 'Mean ± standard deviation eravacycline clearance rate was 0.03 ± 0.001 L/h')
- implicit units: 'Central volume in L' → L (from the paper text: 'volume of distribution was 0.58 ± 0.11 L')
- implicit units: 'Intercompartmental clearance (first compartment) in L/h' → L/h (from the popPK convention: 'Intercompartmental clearance is a first-order rate constant scaled by volume, conventionally expressed in L/h in populat')
- implicit units: 'Peripheral volume one in L' → L (from the popPK convention: 'Peripheral volume of distribution is a volume parameter, conventionally expressed in L; value 39 is consistent with this')
- implicit units: 'Intercompartmental clearance (second compartment) in L/h' → L/h (from the popPK convention: 'Intercompartmental clearance is a first-order rate constant scaled by volume, conventionally expressed in L/h in populat')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eravacycline
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume in l].value` | 3.88 | 111.9 | mismatch |
| `gpt-oss-120b` | `parameters[clearance in l/h].value` | 16.3 | 13.68 | mismatch |
| `gpt-oss-120b` | `parameters[elf-to-plasma ratio]` | not captured | 8.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance (first compartment) in l/h].value` | 33.9 | 43.9 | mismatch |
| `gpt-oss-120b` | `parameters[intercompartmental clearance (second compartment) in l/h].value` | 23.5 | 39.76 | mismatch |
| `gpt-oss-120b` | `parameters[peripheral volume one in l].value` | 39 | 54.43 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row2:col1', 'T4:row2:col2', 'T4:row2:col3', 'T4:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row4:col1', 'T4:row4:col2', 'T4:row4:col3', 'T4:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row3:col1', 'T4:row3:col2', 'T4:row3:col3', 'T4:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row5:col1', 'T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row6:col1', 'T4:row6:col2', 'T4:row6:col3', 'T4:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.3 | not captured | not captured | ['T4:row2:col1', 'T4:row2:col2', 'T4:row2:col3', 'T4:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.3 L/h | not captured | not captured | ['T4:row2:col1', 'T4:row2:col2', 'T4:row2:col3', 'T4:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.88 L | not captured | not captured | ['T4:row3:col1', 'T4:row3:col2', 'T4:row3:col3', 'T4:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 39 L | not captured | not captured | ['T4:row5:col1', 'T4:row5:col2', 'T4:row5:col3', 'T4:row5:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=eravacycline) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | skipped | not captured | 27.143474527600034 | not captured | non-numeric value |
| T1_t_half_terminal | reference | fail | 15.0 | 27.143474527600034 | 1.8096 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 27.143474527600034 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_eravacycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Singh_2026` / `Singh_2026::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_eravacycline/models/modelica/Eravacycline_Singh2026_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_eravacycline/models/modelica/Eravacycline_Singh2026_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_eravacycline/models/modelica/Eravacycline_Singh2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_modelica.zip" download>Eravacycline_Singh2026_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_fmi.zip" download>Eravacycline_Singh2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_matlab.zip" download>Eravacycline_Singh2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_matlab_simbio.zip" download>Eravacycline_Singh2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_sbml.zip" download>Eravacycline_Singh2026_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_cellml.zip" download>Eravacycline_Singh2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference.svg" alt="Eravacycline_Singh2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 35 mg infusion over 10 min, single dose. Doses in the paper: 35, 70, 140, 210, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_eravacycline/Eravacycline_Singh2026_reference/Eravacycline_Singh2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Eravacycline_Singh2026_reference_params.json` · controls `Eravacycline_Singh2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:55 UTC</sub>
