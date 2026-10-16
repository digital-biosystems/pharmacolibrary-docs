<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;fremanezumab&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/&quot;},{&quot;label&quot;:&quot;Jones_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fremanezumab_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fremanezumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fremanezumab — `Fremanezumab_Jones2021_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span>

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
Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785)

<div class="pk-model-meta" hidden drug="fremanezumab" model-id="Fremanezumab_Jones2021_reference" status="accepted_with_caveats" stale="false" population="pediatric patients with migraine weighing &lt;45 kg" measured-compound="fremanezumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL: central clearance (L/day) | `Q22` · CL | 0.0905 | L/day | 1.0474537037037038e-09 | [l] / [d] | 0.305 | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row1:col1, pharmaceutics-13-00785-t001:row1:col2, pharmaceutics-13-00785-t001:row1:col3, pharmaceutics-13-00785-t001:row1:col4 | — | not captured |
| Vc: central volume of distribution (L) | `Q63` · V1 | 1.89 | L | 0.00189 | [l] | 0.512 | boundary_compartment (0.9) | pharmaceutics-13-00785-t001:row3:col1, pharmaceutics-13-00785-t001:row3:col2, pharmaceutics-13-00785-t001:row3:col3, pharmaceutics-13-00785-t001:row3:col4 | — | not captured |
| ka: absorption rate constant (1/day) | `Q49` · kabs | 0.176 | 1/day | 2.0370370370370367e-06 | [1] / [d] | 2.72 | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row5:col1, pharmaceutics-13-00785-t001:row5:col2, pharmaceutics-13-00785-t001:row5:col3, pharmaceutics-13-00785-t001:row5:col4 | — | not captured |
| Q: intercompartmental clearance (L/day) | `Q30` · Q | 0.262 | L/day | 3.0324074074074076e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row6:col1, pharmaceutics-13-00785-t001:row6:col2, pharmaceutics-13-00785-t001:row6:col3, pharmaceutics-13-00785-t001:row6:col4 | — | not captured |
| Vp: peripheral volume of distribution (L) | `Q64` · V2 | 1.72 | L | 0.00172 | [l] | not captured | boundary_compartment (0.9) | pharmaceutics-13-00785-t001:row7:col1, pharmaceutics-13-00785-t001:row7:col2, pharmaceutics-13-00785-t001:row7:col3, pharmaceutics-13-00785-t001:row7:col4 | — | not captured |
| ALAG1: lag time (day) | `Q83` · tlag | 0.0803 | day | 6937.92 | [d] | not captured | llm_confirmed (0.6) | pharmaceutics-13-00785-t001:row9:col1, pharmaceutics-13-00785-t001:row9:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.642 | not captured | not captured | not captured | 10.6 | not captured (not captured) | pharmaceutics-13-00785-t001:row2:col1, pharmaceutics-13-00785-t001:row2:col2, pharmaceutics-13-00785-t001:row2:col3, pharmaceutics-13-00785-t001:row2:col4 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 2.56 | not captured | not captured | not captured | 8.03 | not captured (not captured) | pharmaceutics-13-00785-t001:row4:col1, pharmaceutics-13-00785-t001:row4:col2, pharmaceutics-13-00785-t001:row4:col3, pharmaceutics-13-00785-t001:row4:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Residual variability proportional component' routed out of structural estimates ('Interindividual variability in ka 59.0 %CV (15.8) NE 28.4 %CV (57.5) 27.9 %CV (59.5)')
- table section iiv: 'Residual variability additive component' routed out of structural estimates ('Interindividual variability in ka 59.0 %CV (15.8) NE 28.4 %CV (57.5) 27.9 %CV (59.5)')
- table section iiv: 'VOF' routed out of structural estimates ('Interindividual variability in ka 59.0 %CV (15.8) NE 28.4 %CV (57.5) 27.9 %CV (59.5)')
- documentation only: 'AUC28d' → Q19 (AUCt) comes from ['pharmaceutics-13-00785-f003:caption'], not from a located parameter table — not emitted as a model parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fremanezumab
- molar mass: none found for 'fremanezumab' — its concentrations stay mass-only

**Extraction notes:**
- table pharmaceutics-13-00785-t001: unbound_uncertainty
- table pharmaceutics-13-00785-t001: unparsed_numeric_cell
- LLM selected parameter table(s) 1
- skipped illustrative/example figure caption(s) pharmaceutics-13-00785-f001 — per-individual fit, not model parameters

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row1:col1', 'pharmaceutics-13-00785-t001:row1:col2', 'pharmaceutics-13-00785-t001:row1:col3', 'pharmaceutics-13-00785-t001:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row6:col1', 'pharmaceutics-13-00785-t001:row6:col2', 'pharmaceutics-13-00785-t001:row6:col3', 'pharmaceutics-13-00785-t001:row6:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row5:col1', 'pharmaceutics-13-00785-t001:row5:col2', 'pharmaceutics-13-00785-t001:row5:col3', 'pharmaceutics-13-00785-t001:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row3:col1', 'pharmaceutics-13-00785-t001:row3:col2', 'pharmaceutics-13-00785-t001:row3:col3', 'pharmaceutics-13-00785-t001:row3:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row7:col1', 'pharmaceutics-13-00785-t001:row7:col2', 'pharmaceutics-13-00785-t001:row7:col3', 'pharmaceutics-13-00785-t001:row7:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-13-00785-t001:row9:col1', 'pharmaceutics-13-00785-t001:row9:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0905 | not captured | not captured | ['pharmaceutics-13-00785-t001:row1:col1', 'pharmaceutics-13-00785-t001:row1:col2', 'pharmaceutics-13-00785-t001:row1:col3', 'pharmaceutics-13-00785-t001:row1:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00377 L/h | not captured | not captured | ['pharmaceutics-13-00785-t001:row1:col1', 'pharmaceutics-13-00785-t001:row1:col2', 'pharmaceutics-13-00785-t001:row1:col3', 'pharmaceutics-13-00785-t001:row1:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.89 L | not captured | not captured | ['pharmaceutics-13-00785-t001:row3:col1', 'pharmaceutics-13-00785-t001:row3:col2', 'pharmaceutics-13-00785-t001:row3:col3', 'pharmaceutics-13-00785-t001:row3:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.72 L | not captured | not captured | ['pharmaceutics-13-00785-t001:row7:col1', 'pharmaceutics-13-00785-t001:row7:col2', 'pharmaceutics-13-00785-t001:row7:col3', 'pharmaceutics-13-00785-t001:row7:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=fremanezumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fremanezumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jones_2021` / `Jones_2021::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fremanezumab/models/modelica/Fremanezumab_Jones2021_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fremanezumab/models/modelica/Fremanezumab_Jones2021_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fremanezumab/models/modelica/Fremanezumab_Jones2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_modelica.zip" download>Fremanezumab_Jones2021_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_fmi.zip" download>Fremanezumab_Jones2021_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_matlab.zip" download>Fremanezumab_Jones2021_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_matlab_simbio.zip" download>Fremanezumab_Jones2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_sbml.zip" download>Fremanezumab_Jones2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_cellml.zip" download>Fremanezumab_Jones2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference.svg" alt="Fremanezumab_Jones2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 0.00733 /h, lag 116 min, F 0.658). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference/Fremanezumab_Jones2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Fremanezumab_Jones2021_reference_params.json` · controls `Fremanezumab_Jones2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 04:14 UTC</sub>
