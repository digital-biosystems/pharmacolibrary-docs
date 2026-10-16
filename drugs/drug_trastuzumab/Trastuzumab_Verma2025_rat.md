<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/&quot;},{&quot;label&quot;:&quot;Verma_2025 \u00b7 rat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trastuzumab_Verma2025_rat&quot;,&quot;label&quot;:&quot;Verma_2025_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab — `Trastuzumab_Verma2025_rat`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Verma A et al., Oral Bioavailability of Monoclonal Anti…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics18010022](https://doi.org/10.3390/pharmaceutics18010022)

<div class="pk-model-meta" hidden drug="trastuzumab" model-id="Trastuzumab_Verma2025_rat" status="curated_candidate" stale="false" population="mice and rats" measured-compound="trastuzumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.33 | L/h | 9.166666666666667e-08 | L/h | not captured | exact (1.0) | pharmaceutics-18-00022-t002:row2:col2, pharmaceutics-18-00022-t002:row2:col3, Verma_2025_table_1:row3:col2 | — | not captured |
| CLd | `Q30` · Q | 14.06 | L/h | 3.9055555555555555e-06 | L/h | not captured | exact (1.0) | pharmaceutics-18-00022-t002:row3:col2, pharmaceutics-18-00022-t002:row3:col3 | — | not captured |
| V1 | `Q63` · V1 | 28.86 | L | 0.02886 | L | not captured | exact (1.0) | pharmaceutics-18-00022-t002:row4:col2, pharmaceutics-18-00022-t002:row4:col3 | — | not captured |
| V2 | `Q64` · V2 | 48.79 | L | 0.04879 | L | not captured | exact (1.0) | pharmaceutics-18-00022-t002:row5:col2, pharmaceutics-18-00022-t002:row5:col3 | — | not captured |
| F | `Q40` · Fab | 0.025 | not captured | not captured | not captured | not captured | exact (1.0) | pharmaceutics-18-00022-t002:row6:col2, pharmaceutics-18-00022-t002:row6:col3, Verma_2025_table_1:row4:col3 | — | not captured |
| ka | `Q49` · kabs | 0.78 | 1/h | 0.00021666666666666668 | 1/h | not captured | exact (1.0) | pharmaceutics-18-00022-t002:row7:col2, pharmaceutics-18-00022-t002:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- implicit units: 'CL' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CL in the provided text or table captions. However, CL is a clearance p')
- implicit units: 'CLd' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CLd (intercompartmental clearance). By convention, intercompartmental c')
- implicit units: 'V1' → L (from the popPK convention: 'The paper does not explicitly state the unit for V1 (central volume of distribution). By convention, volumes of distribu')
- implicit units: 'V2' → L (from the popPK convention: 'The paper does not explicitly state the unit for V2 (peripheral volume of distribution). By convention, volumes of distr')
- implicit units: 'ka' → 1/h (from the paper text: "The text explicitly states: 'Interestingly, the model estimated value for the rate of oral absorption of trastuzumab (i.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab
- population split: 'rat' subgroup of Verma_2025 (paper reports 2 populations: mouse, rat)
- molar mass: none found for 'trastuzumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-18-00022-t002:row7:col1 = 'h−1'
- companion parameter table 1 transcribed (4 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-18-00022-t002:row2:col2', 'pharmaceutics-18-00022-t002:row2:col3', 'Verma_2025_table_1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-18-00022-t002:row3:col2', 'pharmaceutics-18-00022-t002:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-18-00022-t002:row7:col2', 'pharmaceutics-18-00022-t002:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-18-00022-t002:row4:col2', 'pharmaceutics-18-00022-t002:row4:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-18-00022-t002:row5:col2', 'pharmaceutics-18-00022-t002:row5:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.33 | not captured | not captured | ['pharmaceutics-18-00022-t002:row2:col2', 'pharmaceutics-18-00022-t002:row2:col3', 'Verma_2025_table_1:row3:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.33 L/h | not captured | not captured | ['pharmaceutics-18-00022-t002:row2:col2', 'pharmaceutics-18-00022-t002:row2:col3', 'Verma_2025_table_1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 28.9 L | not captured | not captured | ['pharmaceutics-18-00022-t002:row4:col2', 'pharmaceutics-18-00022-t002:row4:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 48.8 L | not captured | not captured | ['pharmaceutics-18-00022-t002:row5:col2', 'pharmaceutics-18-00022-t002:row5:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=trastuzumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trastuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Verma_2025` / `Verma_2025::rat`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trastuzumab/models/modelica/Trastuzumab_Verma2025_rat.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trastuzumab/models/modelica/Trastuzumab_Verma2025_rat.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trastuzumab/models/modelica/Trastuzumab_Verma2025_rat.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_modelica.zip" download>Trastuzumab_Verma2025_rat_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_fmi.zip" download>Trastuzumab_Verma2025_rat_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_matlab.zip" download>Trastuzumab_Verma2025_rat_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_matlab_simbio.zip" download>Trastuzumab_Verma2025_rat_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_sbml.zip" download>Trastuzumab_Verma2025_rat_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_cellml.zip" download>Trastuzumab_Verma2025_rat_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat.svg" alt="Trastuzumab_Verma2025_rat diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 7000 mg, single dose, first-order absorption (ka 0.78 /h, F 0.025). Dose in the paper: 7000 mg.

<dbs-fmusim paramsurl="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat/Trastuzumab_Verma2025_rat_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Trastuzumab_Verma2025_rat_params.json` · controls `Trastuzumab_Verma2025_rat_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:23 UTC</sub>
