<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;imatinib&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/&quot;},{&quot;label&quot;:&quot;Chien_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imatinib_Khosravan2016_reference&quot;,&quot;label&quot;:&quot;Khosravan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Khosravan2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imatinib_Chien2022_reference&quot;,&quot;label&quot;:&quot;Chien_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Chien2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Imatinib_Garrett2023_reference&quot;,&quot;label&quot;:&quot;Garrett_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Garrett2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# imatinib — `Imatinib_Chien2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.947). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00353, model 0.0018).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (MTT), so that value has no SI equivalent. Extracted — imatinib: CL/F 13.2 L/h, Q/F 3.75 L/h, V1/F 172 L, V2/F 43.6 L, kabs 1.22 h−1, MTT 0.537 h, n_transit 3.62.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[n].parameter_id`: this record has Q311, the second reading Q900. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chien YH et al., Population pharmacokinetic modelling of…, Cancer chemotherapy and pha… (2022)
  ·  DOI: [10.1007/s00280-022-04454-y](https://doi.org/10.1007/s00280-022-04454-y)

<div class="pk-model-meta" hidden drug="imatinib" model-id="Imatinib_Chien2022_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="imatinib" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 13.2 | L/h | 3.6666666666666666e-06 | [l] / [h] | 5.0 | exact (1.0) | Tab2:row1:col2, Tab2:row1:col3 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 3.75 | L/h | 1.0416666666666667e-06 | [l] / [h] | 20.5 | exact (1.0) | Tab2:row2:col2, Tab2:row2:col3 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 172 | L | 0.17200000000000001 | [l] | 4.7 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 43.6 | L | 0.0436 | [l] | 10.4 | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 1.22 | h−1 | 0.0003388888888888889 | [1] / [h] | 18.2 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3 | — | 88.3 (15.7% RSE) |
| MTT (h) | `Q81` · MTT | 0.537 | h | not captured | [h] | 14.9 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3 | — | 80.5 (17.3% RSE) |
| N | `Q311` · n_transit | 3.62 | not captured | not captured | not captured | 12.1 | llm (0.6) | Tab2:row7:col2, Tab2:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'p value (paired t test)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Prop error (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'x̅G (RSDG)' — extend the ontology if this is a real PK parameter (source ['Chien_2022_table_3:row0:col5'])
- dropped unlinked row (NIL): 'x̃(IQR)' — extend the ontology if this is a real PK parameter (source ['Chien_2022_table_3:row4:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=imatinib
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col4 = '13.1 (11.9–14.5)'
- unparsed cell Tab2:row2:col4 = '3.81 (2.78–5.62)'
- unparsed cell Tab2:row3:col4 = '170 (154–189)'
- unparsed cell Tab2:row4:col4 = '44.0 (37.4–54.1)'
- unparsed cell Tab2:row5:col4 = '1.20 (0.829–1.84)'
- unparsed cell Tab2:row6:col4 = '0.530 (0.376–0.735)'
- unparsed cell Tab2:row7:col4 = '3.60 (2.51–18.3)'
- unparsed cell Tab2:row8:col4 = '24.2 (18.3–30.3)'
- unparsed cell Tab2:row9:col1 = 'Interindividual variability of V1'
- unparsed cell Tab2:row9:col4 = '27.3 (19.9–33.7)'
- unparsed cell Tab2:row10:col4 = '85.1 (52.6–128.6)'
- unparsed cell Tab2:row11:col4 = '77.4 (40.2–122.2)'
- unparsed cell Tab2:row12:col4 = '13.2 (10.6–15.8)'
- unparsed cell Chien_2022_table_3:row0:col1 = 'AUC0-72'
- unparsed cell Chien_2022_table_3:row0:col2 = 'AUC0-72'
- unparsed cell Chien_2022_table_3:row0:col3 = '31.2 (29.0%)'
- unparsed cell Chien_2022_table_3:row0:col4 = '30.2 (24.5%)'
- unparsed cell Chien_2022_table_3:row4:col3 = '3.04 (2.54–4.38)'
- unparsed cell Chien_2022_table_3:row4:col4 = '2.97 (2.50–4.13)'
- companion parameter table 3 transcribed (2 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.947 (18/19 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[n].parameter_id` | Q311 | Q900 | mismatch |

</details>

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
| C2_base_Q311 | fail | 3.62 | 13.2 | 3.6464 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col2', 'Tab2:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.2 L/h | not captured | not captured | ['Tab2:row1:col2', 'Tab2:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 172 L | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 43.6 L | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=imatinib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.003531 | 0.0017961518367995777 | 0.5087 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001073 | 0.0017961518367995777 | 1.674 | µg/L→SI vs simulated kg/m3 |
| T1_tmax | reference | pass | 3.0 | 2.4453793575341893 | 0.8151 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chien_2022` / `Chien_2022::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imatinib/models/modelica/Imatinib_Chien2022_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imatinib/models/modelica/Imatinib_Chien2022_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_imatinib/models/modelica/Imatinib_Chien2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_modelica.zip" download>Imatinib_Chien2022_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_fmi.zip" download>Imatinib_Chien2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_matlab.zip" download>Imatinib_Chien2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_matlab_simbio.zip" download>Imatinib_Chien2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_sbml.zip" download>Imatinib_Chien2022_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_cellml.zip" download>Imatinib_Chien2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference.svg" alt="Imatinib_Chien2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 400 mg, single dose, first-order absorption (ka 1.22 /h, F 1). Dose in the paper: 400 mg.

<dbs-fmusim paramsurl="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_imatinib/Imatinib_Chien2022_reference/Imatinib_Chien2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Imatinib_Chien2022_reference_params.json` · controls `Imatinib_Chien2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:33 UTC</sub>
