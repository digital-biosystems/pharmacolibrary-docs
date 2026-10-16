<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/&quot;},{&quot;label&quot;:&quot;Czock_2022 \u00b7 healthy_sca&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Takada2022v2_reference&quot;,&quot;label&quot;:&quot;Takada_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Roxadustat_Czock2022_healthy_sca&quot;,&quot;label&quot;:&quot;Czock_2022_healthy_sca&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Roxadustat_Czock2022_kidney_function_normal&quot;,&quot;label&quot;:&quot;Czock_2022_kidney_function_normal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Czock2022_kidney_function_normal.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roxadustat — `Roxadustat_Czock2022_healthy_sca`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 13, model 11.8); ka use library defaults, not estimates from this paper (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. A reported unit could not be converted (fu, AUC and Cmax), so that value has no SI equivalent. Extracted — roxadustat: tmax 2 h, t1/2z 15.7 h, fu 0.94 %, AUC 480 h·ng/mL, Cmax 65 ng/mL, CL/F 2.29 L/h, V/F 39 L.

Independently confirmed by `gpt-oss:120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

<div class="pk-model-meta" hidden drug="roxadustat" model-id="Roxadustat_Czock2022_healthy_sca" status="needs_review" stale="false" population="healthy volunteers and chronic kidney disease patients" measured-compound="roxadustat" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tmax (h) | `Q56` · tmax | 2 | h | 7200.0 | [h] | not captured | exact (1.0) | Czock_2022_table_1:row6:col6, Czock_2022_table_1:row14:col6, Czock_2022_table_1:row15:col6, Czock_2022_table_1:row21:col6 | — | not captured |
| t½ or t½α and t½ß (h) | `Q57` · t1/2z | 15.7 | h | 56520.0 | [h] | not captured | llm (0.6) | Czock_2022_table_1:row6:col9, Czock_2022_table_1:row14:col9, Czock_2022_table_1:row15:col9, Czock_2022_table_1:row21:col9 | — | not captured |
| fu (%) | `Q46` · fu | 0.94 | % | not captured | [%] | not captured | exact (1.0) | Czock_2022_table_1:row6:col11 | — | not captured |
| AUC (h·ng/mL per mg) | `Q88` · AUC | 480 | h·ng/mL | not captured | h·ng/mL | not captured | exact (1.0) | Czock_2022_table_1:row14:col3, Czock_2022_table_1:row15:col3, Czock_2022_table_1:row21:col3 | — | not captured |
| Cmax (ng/mL per mg) | `Q32` · Cmax | 65 | ng/mL | not captured | ng/mL | not captured | exact (1.0) | Czock_2022_table_1:row14:col4, Czock_2022_table_1:row15:col4, Czock_2022_table_1:row21:col4 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 2.29 | L/h | 6.361111111111111e-07 | [l] / [h] | not captured | exact (1.0) | Czock_2022_table_1:row14:col7, Czock_2022_table_1:row15:col7, Czock_2022_table_1:row21:col7 | — | not captured |
| Vd/F | `Q76` · V/F | 39.0 | L | 0.039 | L | not captured | review_gapfill (0.7) | Czock_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- unit_dimension_unknown: 'h·ng/mL per mg' (AUC)
- unit_dimension_unknown: 'ng/mL per mg' (Cmax)
- implicit units: 'AUC (h·ng/mL per mg)' → h·ng/mL (from the paper text: "The table caption and footnotes define 'AUC area under the concentration-time curve'. The text explicitly reports Cmax i")
- implicit units: 'Cmax (ng/mL per mg)' → ng/mL (from the paper text: "The text explicitly states: 'an average peak roxadustat concentration of 69 ng/mL/mg... can be measured... (Table 1)' an")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=roxadustat
- population split: 'healthy, sca' subgroup of Czock_2022 (paper reports 9 populations: eskd, healthy, healthy, fasting, healthy, fed, healthy, sca, kidney function - failure, kidney function - normal, liver cirrhosis cp b, severe renal impairment)
- gap-filled Q76 (V/F) from Czock_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Czock_2022_table_p4_1: unbound_uncertainty
- table Czock_2022_table_1: unparsed_numeric_cell
- transposed table Czock_2022_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (114 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 11.8 | 11.805 | 1.0004 | 0.25 | reported t½β |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row14:col7', 'Czock_2022_table_1:row15:col7', 'Czock_2022_table_1:row21:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Czock_2022_table_1:row14:col4', 'Czock_2022_table_1:row15:col4', 'Czock_2022_table_1:row21:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row6:col6', 'Czock_2022_table_1:row14:col6', 'Czock_2022_table_1:row15:col6', 'Czock_2022_table_1:row21:col6'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row6:col9', 'Czock_2022_table_1:row14:col9', 'Czock_2022_table_1:row15:col9', 'Czock_2022_table_1:row21:col9'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Czock_2022:review'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Czock_2022_table_1:row14:col3', 'Czock_2022_table_1:row15:col3', 'Czock_2022_table_1:row21:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.29 L/h | not captured | not captured | ['Czock_2022_table_1:row14:col7', 'Czock_2022_table_1:row15:col7', 'Czock_2022_table_1:row21:col7'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 39 L | not captured | not captured | ['Czock_2022:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=roxadustat) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 11.8 | 11.79749805883277 | 0.9998 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 12.0 | 11.79749805883277 | 0.9831 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 13.0 | 11.79749805883277 | 0.9075 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 17.5 | 11.79749805883277 | 0.6741 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 14.6 | 11.79749805883277 | 0.808 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 18.2 | 11.79749805883277 | 0.6482 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_roxadustat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Czock_2022` / `Czock_2022::healthy_sca`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_roxadustat/models/modelica/Roxadustat_Czock2022_healthy_sca.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_roxadustat/models/modelica/Roxadustat_Czock2022_healthy_sca.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_roxadustat/models/modelica/Roxadustat_Czock2022_healthy_sca.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_modelica.zip" download>Roxadustat_Czock2022_healthy_sca_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_fmi.zip" download>Roxadustat_Czock2022_healthy_sca_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_matlab.zip" download>Roxadustat_Czock2022_healthy_sca_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_matlab_simbio.zip" download>Roxadustat_Czock2022_healthy_sca_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_sbml.zip" download>Roxadustat_Czock2022_healthy_sca_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_cellml.zip" download>Roxadustat_Czock2022_healthy_sca_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca.svg" alt="Roxadustat_Czock2022_healthy_sca diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 20, 50, 70, 100, 150 mg.

<dbs-fmusim paramsurl="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca/Roxadustat_Czock2022_healthy_sca_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Roxadustat_Czock2022_healthy_sca_params.json` · controls `Roxadustat_Czock2022_healthy_sca_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:39 UTC</sub>
