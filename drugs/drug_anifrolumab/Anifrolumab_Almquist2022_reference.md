<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anifrolumab&quot;,&quot;href&quot;:&quot;drugs/drug_anifrolumab/&quot;},{&quot;label&quot;:&quot;Almquist_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Anifrolumab_Almquist2022_reference&quot;,&quot;label&quot;:&quot;Almquist_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# anifrolumab — `Anifrolumab_Almquist2022_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.692). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (allometric_exponent), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bw on cl: this record has 0.601, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Almquist J et al., Nonlinear Population Pharmacokinetics o…, Journal of clinical pharmac… (2022)
  ·  DOI: [10.1002/jcph.2055](https://doi.org/10.1002/jcph.2055)

<div class="pk-model-meta" hidden drug="anifrolumab" model-id="Anifrolumab_Almquist2022_reference" status="curated_candidate" stale="false" population="healthy volunteers and patients with systemic lupus erythematosus" measured-compound="anifrolumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Systemic clearance in patients with high IFNGS (CL) (L/day) | `Q22` · CL | 0.193 | L/day | 2.2337962962962963e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | jcph2055-tbl-0001:row1:col1 | — | not captured |
| Volume of distribution, central (Vc ) (L) | `Q63` · V1 | 2.93 | L | 0.0029300000000000003 | [l] | not captured | boundary_compartment (0.9) | jcph2055-tbl-0001:row2:col1 | — | not captured |
| Intercompartmental clearance (Q) (L/day) | `Q30` · Q | 0.937 | L/day | 1.0844907407407408e-08 | [l] / [d] | not captured | llm_confirmed (0.6) | jcph2055-tbl-0001:row3:col1 | — | not captured |
| Volume of distribution, peripheral (Vp ) (L) | `Q64` · V2 | 3.30 | L | 0.0033 | [l] | not captured | boundary_compartment (0.9) | jcph2055-tbl-0001:row4:col1 | — | not captured |
| Internalization rate constant (kint ) (day−1) | `Q334` · kint | 77.4 | day−1 | 0.0008958333333333333 | [1] / [d] | not captured | llm_confirmed (0.6) | jcph2055-tbl-0001:row7:col1 | — | not captured |
| BW on CL (θCL,BW) | `Q319` · allometric_exponent | 0.601 | θCL,BW | not captured | [θcl] | not captured | llm_corrected (0.6) | jcph2055-tbl-0001:row9:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Steady‐state constant (KSS ) (nmol/L)' — extend the ontology if this is a real PK parameter (source ['jcph2055-tbl-0001:row5:col1'])
- dropped PD-category row 'Baseline IFNAR1 level (R0 ) (nmol/L)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph2055-tbl-0001:row6:col1'])
- dropped unlinked row (NIL): 'Baseline IFNGS on CL: Factor for IFNGS low (FIFNGS‐low )' — extend the ontology if this is a real PK parameter (source ['jcph2055-tbl-0001:row8:col1'])
- unit_dimension_unknown: 'θCL,BW' (allometric_exponent)
- unit_dimension_unknown: 'θVc,BW' (allometric_exponent)
- dropped duplicate Q319 ('BW on Vc (θVc,BW)', value '0.764') — already have one for this compound
- unit_dimension_unknown: 'T max' (CL)
- dropped duplicate Q22 ('Maximal possible change in the log of clearance (T max )', value '-0.155') — already have one for this compound
- dropped unlinked row (NIL): 'Time to reach half the maximal change in log clearance (TC 50)' — extend the ontology if this is a real PK parameter (source ['jcph2055-tbl-0001:row12:col1'])
- routed 'Variance (ηCL)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Variance (ηVc)' — extend the ontology if this is a real PK parameter (source ['jcph2055-tbl-0001:row14:col1'])
- routed 'Variance (ηR0)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Variance (ηTmax)' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- routed 'Standard deviation of additive error' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Standard deviation of proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=anifrolumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'anifrolumab' — its concentrations stay mass-only

**Extraction notes:**
- table jcph2055-tbl-0001: unparsed_numeric_cell
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bw on cl]` | 0.601 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximal possible change in the log of clearance]` | -0.155 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady‐state constant (kss )]` | not captured | 0.712 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` | not captured | 0.793 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph2055-tbl-0001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph2055-tbl-0001:row3:col1'] |
| C5_dimension_Q334 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph2055-tbl-0001:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph2055-tbl-0001:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph2055-tbl-0001:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.193 | not captured | not captured | ['jcph2055-tbl-0001:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00804 L/h | not captured | not captured | ['jcph2055-tbl-0001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.93 L | not captured | not captured | ['jcph2055-tbl-0001:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.3 L | not captured | not captured | ['jcph2055-tbl-0001:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=anifrolumab) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_anifrolumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Almquist_2022` / `Almquist_2022::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_anifrolumab/models/modelica/Anifrolumab_Almquist2022_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_anifrolumab/models/modelica/Anifrolumab_Almquist2022_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_anifrolumab/models/modelica/Anifrolumab_Almquist2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_modelica.zip" download>Anifrolumab_Almquist2022_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_fmi.zip" download>Anifrolumab_Almquist2022_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_matlab.zip" download>Anifrolumab_Almquist2022_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_matlab_simbio.zip" download>Anifrolumab_Almquist2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_sbml.zip" download>Anifrolumab_Almquist2022_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_cellml.zip" download>Anifrolumab_Almquist2022_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference.svg" alt="Anifrolumab_Almquist2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 100 mg infusion over 10 min, single dose. Doses in the paper: 100, 150, 300, 1000 mg.

<dbs-fmusim paramsurl="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_anifrolumab/Anifrolumab_Almquist2022_reference/Anifrolumab_Almquist2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Anifrolumab_Almquist2022_reference_params.json` · controls `Anifrolumab_Almquist2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:29 UTC</sub>
