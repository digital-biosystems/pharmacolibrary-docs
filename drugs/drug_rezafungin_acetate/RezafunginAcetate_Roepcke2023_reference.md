<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;rezafungin acetate&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/&quot;},{&quot;label&quot;:&quot;Roepcke_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RezafunginAcetate_Lakota2018_reference&quot;,&quot;label&quot;:&quot;Lakota_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Lakota2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Roepcke2023_reference&quot;,&quot;label&quot;:&quot;Roepcke_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;RezafunginAcetate_Rubino2021_reference&quot;,&quot;label&quot;:&quot;Rubino_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Rubino2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RezafunginAcetate_Zhao2020_reference&quot;,&quot;label&quot;:&quot;Zhao_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rezafungin_acetate/RezafunginAcetate_Zhao2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rezafungin acetate — `RezafunginAcetate_Roepcke2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Roepcke S et al., Population pharmacokinetic modeling and…, Antimicrobial agents and ch… (2023)
  ·  DOI: [10.1128/aac.00916-23](https://doi.org/10.1128/aac.00916-23)

<div class="pk-model-meta" hidden drug="rezafungin acetate" model-id="RezafunginAcetate_Roepcke2023_reference" status="accepted_with_caveats" stale="false" population="healthy volunteers and patients with candidemia/invasive candidiasis" measured-compound="rezafungin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted, plus 6 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 2.77 | L/h | 7.694444444444444e-07 | L/h | 13.7 | exact (1.0) | T2:row2:col2, T2:row2:col3, T2:row2:col5 | — | not captured |
| theta_cl_category | `Q900` · theta_cl_category | 9.25 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row3:col1, T2:row3:col2 | — | not captured |
| V1 | `Q61` · V | 3.96 | L | 0.00396 | L | 14.7 | exact (1.0) | T2:row5:col2, T2:row5:col3, T2:row5:col5 | — | not captured |
| Q2 | `Q30` · Q | 5.38 | L/h | 1.4944444444444444e-06 | L/h | not captured | special_case (0.95) | T2:row8:col1, T2:row8:col2, T2:row8:col3 | — | not captured |
| Q3 | `Q308` · Q3 | 4.37 | L/h | 1.2138888888888891e-06 | L/h | not captured | exact (1.0) | T2:row12:col1, T2:row12:col2, T2:row12:col3 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 16.4 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row4:col1, T2:row4:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 9.47 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row6:col1, T2:row6:col2 | — | not captured |
| theta_v1_category | `Q900` · theta_v1_category | 18.1 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row7:col1, T2:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 11.4 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row10:col1, T2:row10:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 14.9 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row11:col1, T2:row11:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Proportional shift in CL for healthy' → Q900:theta_cl_category = 9.25 (additive_shift on Q22)
- dropped unlinked row (NIL): 'V23' — extend the ontology if this is a real PK parameter (source ['T2:row9:col2', 'T2:row9:col3', 'T2:row9:col5'])
- dropped unlinked row (NIL): 'Minimum value of the objective function = 2067.21' — extend the ontology if this is a real PK parameter (source ['T2:row17:col1', 'T2:row17:col2', 'T2:row17:col3', 'T2:row17:col4', 'T2:row17:col5'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL' → L/h (from the paper text: 'The paper text states: "a doubling of BSA from 1.3 to 2.6 m2 corresponded to an increase in CL from 0.235 to 0.433 L/h, ')
- implicit units: 'V1' → L (from the popPK convention: 'No explicit unit is stated for V1 in the text. Based on population PK conventions and the value magnitude (3.96), the un')
- implicit units: 'Q2' → L/h (from the popPK convention: 'No explicit unit is stated for Q2. Intercompartmental clearance is conventionally expressed in volume per time (L/h) in ')
- implicit units: 'Q3' → L/h (from the popPK convention: 'No explicit unit is stated for Q3. Intercompartmental clearance is conventionally expressed in volume per time (L/h) in ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rezafungin
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- review gap-fill skipped: this record measures 'rezafungin', not rezafungin_acetate — the review values are the parent's

**Extraction notes:**
- unparsed cell T2:row2:col4 = '30.5%CV'
- unparsed cell T2:row5:col4 = '37.6%CV'
- unparsed cell T2:row9:col1 = 'Peripheral volume 1 and 2 (L)'
- unparsed cell T2:row9:col4 = '29.3%CV'
- unparsed cell T2:row13:col1 = 'cov(IIV in V1, IIV in CL)'
- unparsed cell T2:row13:col2 = '0.0560b'
- unparsed cell T2:row14:col1 = 'cov(IIV in V23, IIV in CL)'
- unparsed cell T2:row14:col2 = '0.0619c'
- unparsed cell T2:row15:col1 = 'cov(IIV in V23, IIV in V1)'
- unparsed cell T2:row15:col2 = '0.0373d'
- unparsed cell T2:row16:col4 = '9.74%CV'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col2', 'T2:row2:col3', 'T2:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col3'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row5:col2', 'T2:row5:col3', 'T2:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.77 | not captured | not captured | ['T2:row2:col2', 'T2:row2:col3', 'T2:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.77 L/h | not captured | not captured | ['T2:row2:col2', 'T2:row2:col3', 'T2:row2:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.96 L | not captured | not captured | ['T2:row5:col2', 'T2:row5:col3', 'T2:row5:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=rezafungin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rezafungin_acetate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Roepcke_2023` / `Roepcke_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rezafungin_acetate/models/modelica/RezafunginAcetate_Roepcke2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rezafungin_acetate/models/modelica/RezafunginAcetate_Roepcke2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_rezafungin_acetate/models/modelica/RezafunginAcetate_Roepcke2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_modelica.zip" download>RezafunginAcetate_Roepcke2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_fmi.zip" download>RezafunginAcetate_Roepcke2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_matlab.zip" download>RezafunginAcetate_Roepcke2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_matlab_simbio.zip" download>RezafunginAcetate_Roepcke2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_sbml.zip" download>RezafunginAcetate_Roepcke2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_cellml.zip" download>RezafunginAcetate_Roepcke2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference.svg" alt="RezafunginAcetate_Roepcke2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 50 mg infusion over 10 min, single dose. Doses in the paper: 50–1400 mg.

<dbs-fmusim paramsurl="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_rezafungin_acetate/RezafunginAcetate_Roepcke2023_reference/RezafunginAcetate_Roepcke2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `RezafunginAcetate_Roepcke2023_reference_params.json` · controls `RezafunginAcetate_Roepcke2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:58 UTC</sub>
