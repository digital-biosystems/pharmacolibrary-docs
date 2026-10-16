<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/&quot;},{&quot;label&quot;:&quot;Marathe_2023 \u00b7 geometric_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belzutifan — `Belzutifan_Marathe2023_geometric_mean`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.815). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (AUC, Cmin and Cmax), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has belzutifan, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

<div class="pk-model-meta" hidden drug="belzutifan" model-id="Belzutifan_Marathe2023_geometric_mean" status="curated_candidate" stale="false" population="patients with solid tumors and VHL" measured-compound="belzutifan" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.25 | L/h | 2.013888888888889e-06 | [l] / [h] | not captured | exact (1.0) | Marathe_2023_table_5:row0:col2 | — | not captured |
| V d/F (L) | `Q76` · V/F | 129.5 | L | 0.1295 | [l] | not captured | space_fold (0.95) | Marathe_2023_table_5:row1:col2 | — | not captured |
| KA (1/h) | `Q49` · kabs | 2.51 | 1/h | 0.0006972222222222221 | [1] / [h] | not captured | exact (1.0) | Marathe_2023_table_5:row2:col2 | — | not captured |
| AUC0–24h (μg∙h/mL) | `Q88` · AUC | 16.71 | μg∙h/mL | not captured | μg∙h/mL | not captured | llm (0.6) | Marathe_2023_table_5:row4:col2 | — | not captured |
| C min (ng/mL) | `Q36` · Cmin | 306.66 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Marathe_2023_table_5:row5:col2 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 1362.54 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Marathe_2023_table_5:row7:col2 | — | not captured |
| T max (h) | `Q56` · tmax | 1.42 | h | 5112.0 | [h] | not captured | space_fold (0.95) | Marathe_2023_table_5:row9:col2 | — | not captured |
| t 1/2 alpha (h) | `Q59` · t1/2α | 2.60 | h | 9360.0 | [h] | not captured | llm_corrected (0.6) | Marathe_2023_table_5:row11:col2 | — | not captured |
| t 1/2 beta (h) | `Q60` · t1/2β | 14.34 | h | 51624.0 | [h] | not captured | llm_corrected (0.6) | Marathe_2023_table_5:row12:col2 | — | not captured |
| t 1/2 eff (h) | `Q57` · t1/2z | 12.39 | h | 44604.0 | [h] | not captured | llm (0.6) | Marathe_2023_table_5:row13:col2 | — | not captured |
| t 1/2 abs (h) | `Q95` · t1/2ka | 0.28 | h | 1008.0000000000001 | [h] | not captured | fuzzy_llm_dim_refused (0.94) | Marathe_2023_table_5:row14:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/Fpop | Q22 | not captured | exact |
| V2/Fpop | Q64 | not captured | exact |
| Q/Fpop | Q30 | not captured | exact |
| V3/Fpop | Q77 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'FMF' — extend the ontology if this is a real PK parameter (source ['Marathe_2023_table_5:row3:col2', 'Marathe_2023_table_5:row6:col2', 'Marathe_2023_table_5:row8:col2', 'Marathe_2023_table_5:row10:col2', 'Marathe_2023_table_5:row15:col2'])
- unit_dimension_unknown: 'N = 61' (AUC)
- implicit units: 'AUC0–24h (μg∙h/mL)' → μg∙h/mL (from the paper text: 'The paper text explicitly states: "geometric means (%CV) of AUC for a 24‐h interval (AUC‐0–24h) and C max were 16.71 μg∙')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=belzutifan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q22 (CL): CL/Fpop = CL/Fpop * (WT/73.64)^
- bound model equation to Q64 (V2): V2/Fpop = V2/Fpop * (WT/73.64)^
- bound model equation to Q30 (Q): Q/Fpop = Q/Fpop * (WT/73.64)^
- bound model equation to Q77 (V3): V3/Fpop = V3/Fpop * (WT/73.64)^
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL/Fpop'; equation kept verbatim
- Q64 (V2) is equation-defined: value moved to equation-variable 'V2/Fpop'; equation kept verbatim
- Q30 (Q) is equation-defined: value moved to equation-variable 'Q/Fpop'; equation kept verbatim
- Q77 (V3) is equation-defined: value moved to equation-variable 'V3/Fpop'; equation kept verbatim
- population split: 'geometric mean' subgroup of Marathe_2023 (paper reports 4 populations: absolute parameter value, arithmetic mean, estimate, geometric mean)

**Extraction notes:**
- table psp413028-tbl-0002: unbound_uncertainty
- table psp413028-tbl-0002: unparsed_numeric_cell
- table Marathe_2023_table_3: units_need_context
- table Marathe_2023_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (18 record(s))
- table Marathe_2023_table_5: unbound_uncertainty
- table Marathe_2023_table_5: ragged_grid
- companion parameter table 5 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3, 5
- captured model equation CL/Fpop = CL/Fpop * (WT/73.64)^
- captured model equation V2/Fpop = V2/Fpop * (WT/73.64)^
- captured model equation Q/Fpop = Q/Fpop * (WT/73.64)^
- captured model equation V3/Fpop = V3/Fpop * (WT/73.64)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.815 (22/27 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 abs]` | not captured | 0.28 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | belzutifan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | belzutifan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row0:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row7:col2'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row2:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row9:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row13:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row11:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row12:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row1:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row4:col2'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row14:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.25 L/h | not captured | not captured | ['Marathe_2023_table_5:row0:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 130 L | not captured | not captured | ['Marathe_2023_table_5:row1:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=belzutifan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marathe_2023` / `Marathe_2023::geometric_mean`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/models/modelica/Belzutifan_Marathe2023_geometric_mean.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/models/modelica/Belzutifan_Marathe2023_geometric_mean.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_belzutifan/models/modelica/Belzutifan_Marathe2023_geometric_mean.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_modelica.zip" download>Belzutifan_Marathe2023_geometric_mean_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_fmi.zip" download>Belzutifan_Marathe2023_geometric_mean_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_matlab.zip" download>Belzutifan_Marathe2023_geometric_mean_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_matlab_simbio.zip" download>Belzutifan_Marathe2023_geometric_mean_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_sbml.zip" download>Belzutifan_Marathe2023_geometric_mean_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_cellml.zip" download>Belzutifan_Marathe2023_geometric_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean.svg" alt="Belzutifan_Marathe2023_geometric_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 2.51 /h, F 1). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Belzutifan_Marathe2023_geometric_mean_params.json` · controls `Belzutifan_Marathe2023_geometric_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 04:23 UTC</sub>
