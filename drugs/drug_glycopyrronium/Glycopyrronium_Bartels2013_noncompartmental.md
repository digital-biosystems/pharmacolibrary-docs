<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;glycopyrronium&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/&quot;},{&quot;label&quot;:&quot;Bartels_2013 \u00b7 noncompartmental&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_model_based&quot;,&quot;label&quot;:&quot;Bartels_2013_model_based&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_model_based.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_noncompartmental&quot;,&quot;label&quot;:&quot;Bartels_2013_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_population_mean_cv&quot;,&quot;label&quot;:&quot;Bartels_2013_population_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glycopyrronium — `Glycopyrronium_Bartels2013_noncompartmental`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.636), gpt-oss:120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — glycopyrronium: CL 42.5, Vss 102, t1/2z 0.45.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[fast lung absorption half-life].parameter_id`: this record has Q59, the second reading Q95; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:08.630139+00:00) predates the upstream re-run (2026-10-07 19:32:01.517625+00:00). Current validate status: `extracted`.

## Citation
Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013)
  ·  DOI: [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118)

<div class="pk-model-meta" hidden drug="glycopyrronium" model-id="Glycopyrronium_Bartels2013_noncompartmental" status="extracted" stale="true" population="healthy volunteers" measured-compound="glycopyrronium" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Systemic clearance | `Q22` · CL | 42.5 | L/h | 1.1805555555555557e-05 | L/h | not captured | llm_confirmed (0.6) | Bartels_2013_table_2:row1:col6 | — | not captured |
| Volume of distribution at steady state ‡ | `Q65` · Vss | 102 | L | 0.10200000000000001 | L | not captured | llm_corrected (0.6) | Bartels_2013_table_2:row2:col4 | — | not captured |
| Intermediate lung absorption half-life | `Q57` · t1/2z | 0.45 | h | 1620.0 | h | not captured | llm_corrected (0.6) | Bartels_2013_table_2:row12:col2, Bartels_2013_table_2:row12:col4 | — | not captured |
| Vz (L/kg) | `Q61` · V | 22.38 | L/kg | 1.5666 | L | not captured | review_gapfill (0.7) | Marchiori_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Fast lung absorption half-life | Q59 | not captured | llm_corrected |
| Slow lung absorption half-life | Q95 | not captured | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- column 'noncompartmental' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q57 ('GI tract absorption half-life', value None) — already have one for this compound
- dropped unlinked row (NIL): '0' — extend the ontology if this is a real PK parameter (source ['Bartels_2013_table_2:row21:col1'])
- implicit units: 'Systemic clearance' → L/h (from the popPK convention: 'Total systemic clearance (CL) is conventionally expressed in L/h. The value 42.5 is consistent with this unit for a larg')
- implicit units: 'Volume of distribution at steady state ‡' → L (from the popPK convention: 'Volume of distribution at steady state (Vss) is conventionally expressed in L. The value 102 is consistent with this uni')
- implicit units: 'Intermediate lung absorption half-life' → h (from the popPK convention: 'Half-lives (t1/2) are conventionally expressed in hours (h). The table footnote states rate constants are expressed as h')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glycopyrronium
- population split: 'noncompartmental' subgroup of Bartels_2013 (paper reports 3 populations: model-based, noncompartmental, population mean (%cv))
- gap-filled Q61 (V) from Marchiori_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Bartels_2013_table_2:row1:col4 = 'l h -1'
- unparsed cell Bartels_2013_table_2:row11:col5 = '&lt;~0.03 (estimate)'
- unparsed cell Bartels_2013_table_2:row13:col6 = '52 or 57 §'
- unparsed cell Bartels_2013_table_2:row21:col2 = '1 0'
- companion parameter table 2 transcribed (14 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.636 (7/11 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fast lung absorption half-life].parameter_id` | Q59 | Q95 | mismatch |
| `gpt-oss-120b` | `parameters[intermediate lung absorption half-life]` | 0.45 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[slow lung absorption half-life]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz]` | 22.38 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[0]` | not captured | 5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fast lung absorption half-life].parameter_id` | Q59 | Q95 | mismatch |
| `gpt-oss:120b` | `parameters[gi tract absorption half-life]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[intermediate lung absorption half-life]` | 0.45 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bartels_2013_table_2:row1:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Bartels_2013_table_2:row12:col2', 'Bartels_2013_table_2:row12:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Marchiori_2026:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bartels_2013_table_2:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 42.5 | not captured | not captured | ['Bartels_2013_table_2:row1:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 42.5 L/h | not captured | not captured | ['Bartels_2013_table_2:row1:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.57e+03 L | not captured | not captured | ['Marchiori_2026:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 102 L | not captured | not captured | ['Bartels_2013_table_2:row2:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_glycopyrronium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bartels_2013` / `Bartels_2013::noncompartmental`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_modelica.zip" download>Glycopyrronium_Bartels2013_noncompartmental_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_fmi.zip" download>Glycopyrronium_Bartels2013_noncompartmental_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_matlab.zip" download>Glycopyrronium_Bartels2013_noncompartmental_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_matlab_simbio.zip" download>Glycopyrronium_Bartels2013_noncompartmental_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_sbml.zip" download>Glycopyrronium_Bartels2013_noncompartmental_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_cellml.zip" download>Glycopyrronium_Bartels2013_noncompartmental_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental.svg" alt="Glycopyrronium_Bartels2013_noncompartmental diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 120 mg infusion over 10 min, single dose. Doses in the paper: 120, 200, 400 mg.

<dbs-fmusim paramsurl="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental/Glycopyrronium_Bartels2013_noncompartmental_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Glycopyrronium_Bartels2013_noncompartmental_params.json` · controls `Glycopyrronium_Bartels2013_noncompartmental_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:32 UTC</sub>
