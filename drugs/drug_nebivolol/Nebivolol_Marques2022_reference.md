<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/&quot;},{&quot;label&quot;:&quot;Marques_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebivolol_Marques2022_reference&quot;,&quot;label&quot;:&quot;Marques_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nebivolol — `Nebivolol_Marques2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.875), gpt-oss:120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The nebivolol model was quarantined because clearance, volume of distribution and the intercompartmental rate constants had no source values and library placeholders were used, and the absorption lag time (tlag) was not covered.**

Although the record lists nebivolol parameters (tlag 0.30, absorption half-life 2.06, CL 0.22, V1 4.21, Q 0.59, V2 7.12), the model builder substituted placeholder defaults for clearance, volume of distribution, and the central-to-peripheral and peripheral-to-central rate constants, so the model was held back rather than published with invented numbers. The parameter-coverage check expected 5 parameters emitted or defaulted but obtained 4, with the absorption lag time (tlag) neither emitted nor defaulted. A second reader also disagreed on one parameter value (0.13 versus none recorded) and on which parameter the absorption-rate label refers to. Extracted — nebivolol: tlag 0.3, t1/2ka 2.06, CL 0.22, V1 4.21, Q 0.59, V2 7.12.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nebivolol, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:39:11.288639+00:00) predates the upstream re-run (2026-10-07 00:26:45.680596+00:00). Current validate status: `extracted`.

## Citation
Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911)

<div class="pk-model-meta" hidden drug="nebivolol" model-id="Nebivolol_Marques2022_reference" status="extracted" stale="true" population="young and healthy individuals" measured-compound="nebivolol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag pop | `Q83` · tlag | 0.30 | h | 1080.0 | h | 10.8 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row1:col1, pharmaceutics-14-01911-t005:row1:col2 | — | not captured |
| Ka pop | `Q49` · kabs | 2.06 | 1/h | 0.0005722222222222222 | 1/h | 10.4 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row2:col1, pharmaceutics-14-01911-t005:row2:col2 | — | not captured |
| Cl pop | `Q22` · CL | 0.22 | L/h | 6.111111111111111e-08 | L/h | 36.7 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row3:col1, pharmaceutics-14-01911-t005:row3:col2 | — | not captured |
| V1 pop | `Q63` · V1 | 4.21 | L | 0.00421 | L | 4.96 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row4:col1, pharmaceutics-14-01911-t005:row4:col2 | — | not captured |
| Q pop | `Q30` · Q | 0.59 | L/h | 1.638888888888889e-07 | L/h | 5.73 | llm (0.6) | pharmaceutics-14-01911-t005:row5:col1, pharmaceutics-14-01911-t005:row5:col2 | — | not captured |
| V2 pop | `Q64` · V2 | 7.12 | L | 0.0071200000000000005 | L | 11.2 | llm_confirmed (0.6) | pharmaceutics-14-01911-t005:row6:col1, pharmaceutics-14-01911-t005:row6:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01911-t005:row8:col1', 'pharmaceutics-14-01911-t005:row8:col2'])
- implicit units: 'Tlag pop' → h (from the popPK convention: 'Lag time (Tlag) is a time parameter; the standard unit in population PK is hours (h), consistent with the magnitude 0.30')
- implicit units: 'Ka pop' → 1/h (from the popPK convention: 'Absorption rate constant (Ka) is a first-order rate constant; the standard unit is 1/h, consistent with the magnitude 2.')
- implicit units: 'Cl pop' → L/h (from the popPK convention: 'Clearance (Cl) is typically expressed in L/h in population PK; the magnitude 0.22 is consistent with this unit for a dru')
- implicit units: 'V1 pop' → L (from the popPK convention: 'Volume of distribution (V1) is typically expressed in L; the magnitude 4.21 is consistent with this unit.')
- implicit units: 'Q pop' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is a clearance parameter; the standard unit is L/h, consistent with the magnitude 0.59.')
- implicit units: 'V2 pop' → L (from the popPK convention: 'Volume of distribution (V2) is typically expressed in L; the magnitude 7.12 is consistent with this unit.')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl pop); Q63 (V1 pop); Q30 (Q pop); Q64 (V2 pop)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nebivolol

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.875 (14/16 fields) | 2 |
| `gpt-oss:120b` | partly confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | nebivolol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nebivolol | unknown | mismatch |
| `gpt-oss:120b` | `parameters[b]` | not captured | 0.13 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row3:col1', 'pharmaceutics-14-01911-t005:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row5:col1', 'pharmaceutics-14-01911-t005:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row2:col1', 'pharmaceutics-14-01911-t005:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row4:col1', 'pharmaceutics-14-01911-t005:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row6:col1', 'pharmaceutics-14-01911-t005:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-14-01911-t005:row1:col1', 'pharmaceutics-14-01911-t005:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.22 | not captured | not captured | ['pharmaceutics-14-01911-t005:row3:col1', 'pharmaceutics-14-01911-t005:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.22 L/h | not captured | not captured | ['pharmaceutics-14-01911-t005:row3:col1', 'pharmaceutics-14-01911-t005:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.21 L | not captured | not captured | ['pharmaceutics-14-01911-t005:row4:col1', 'pharmaceutics-14-01911-t005:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.12 L | not captured | not captured | ['pharmaceutics-14-01911-t005:row6:col1', 'pharmaceutics-14-01911-t005:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_nebivolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marques_2022` / `Marques_2022::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_nebivolol/models/modelica/_needs_review/Nebivolol_Marques2022_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_nebivolol/models/modelica/_needs_review/Nebivolol_Marques2022_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_modelica.zip" download>Nebivolol_Marques2022_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_fmi.zip" download>Nebivolol_Marques2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_matlab.zip" download>Nebivolol_Marques2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_matlab_simbio.zip" download>Nebivolol_Marques2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_sbml.zip" download>Nebivolol_Marques2022_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_cellml.zip" download>Nebivolol_Marques2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference.svg" alt="Nebivolol_Marques2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2.5 mg, single dose, first-order absorption (ka 2.06 /h, lag 18 min, F 0.9). Doses in the paper: 2.5, 5, 6, 10, 20 mg.

<dbs-fmusim paramsurl="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_nebivolol/Nebivolol_Marques2022_reference/Nebivolol_Marques2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Nebivolol_Marques2022_reference_params.json` · controls `Nebivolol_Marques2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:26 UTC</sub>
