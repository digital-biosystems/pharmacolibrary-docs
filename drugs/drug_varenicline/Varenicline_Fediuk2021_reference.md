<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;varenicline&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/&quot;},{&quot;label&quot;:&quot;Fediuk_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Varenicline_Fediuk2021_reference&quot;,&quot;label&quot;:&quot;Fediuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Fediuk2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Varenicline_Glatard2019_reference&quot;,&quot;label&quot;:&quot;Glatard_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_varenicline/Varenicline_Glatard2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# varenicline — `Varenicline_Fediuk2021_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (equation variable), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of covcl/f,ka: this record has -0.0582, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Fediuk DJ et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021)
  ·  DOI: [10.1002/psp4.12645](https://doi.org/10.1002/psp4.12645)

<div class="pk-model-meta" hidden drug="varenicline" model-id="Varenicline_Fediuk2021_reference" status="curated_candidate" stale="false" population="adolescent smokers" measured-compound="varenicline" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 12.5 | L/h | 3.4722222222222224e-06 | [l] / [h] | 5.06 | exact (1.0) | psp412645-tbl-0003:row1:col1, psp412645-tbl-0003:row1:col2 | — | 0.102 (26.3% RSE) |
| V/F (L) | `Q76` · V/F | 231 | L | 0.231 | [l] | 5.02 | exact (1.0) | psp412645-tbl-0003:row6:col1, psp412645-tbl-0003:row6:col2 | — | 0.0182 (42.6% RSE) |
| ka (h−1) | `Q49` · kabs | 0.860 | h−1 | 0.00023888888888888888 | [1] / [h] | 12.3 | exact (1.0) | psp412645-tbl-0003:row11:col1, psp412645-tbl-0003:row11:col2 | — | 0.174 (48.5% RSE) |
| COVCL/F,ka | `Q900` · equation variable | -0.0582 | unit | not captured | [unit] | 71.0 | llm_corrected (0.6) | psp412645-tbl-0003:row16:col1, psp412645-tbl-0003:row16:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['psp412645-tbl-0003:row2:col1', 'psp412645-tbl-0003:row2:col2', 'psp412645-tbl-0003:row7:col1', 'psp412645-tbl-0003:row7:col2'])
- dropped unlinked row (NIL): 'Black race' — extend the ontology if this is a real PK parameter (source ['psp412645-tbl-0003:row3:col1', 'psp412645-tbl-0003:row3:col2', 'psp412645-tbl-0003:row8:col1', 'psp412645-tbl-0003:row8:col2'])
- dropped unlinked row (NIL): 'Other race' — extend the ontology if this is a real PK parameter (source ['psp412645-tbl-0003:row4:col1', 'psp412645-tbl-0003:row4:col2', 'psp412645-tbl-0003:row9:col1', 'psp412645-tbl-0003:row9:col2'])
- dropped unlinked row (NIL): 'Female sex' — extend the ontology if this is a real PK parameter (source ['psp412645-tbl-0003:row5:col1', 'psp412645-tbl-0003:row5:col2', 'psp412645-tbl-0003:row10:col1', 'psp412645-tbl-0003:row10:col2'])
- dropped unlinked row (NIL): 'COVCL/F,V/F' — extend the ontology if this is a real PK parameter (source ['psp412645-tbl-0003:row15:col1', 'psp412645-tbl-0003:row15:col2'])
- routed 'COVV/F,ka' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Phase 1 additive' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'Phase 1 proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Phase 4 additive' — extend the ontology if this is a real PK parameter (source ['psp412645-tbl-0003:row21:col1', 'psp412645-tbl-0003:row21:col2'])
- routed 'Phase 4 proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=varenicline
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp412645-tbl-0003:row1:col3 = '12.4 (11.3–13.9)'
- unparsed cell psp412645-tbl-0003:row2:col3 = '0.583 (0.317–0.904)'
- unparsed cell psp412645-tbl-0003:row3:col3 = '1.01 (0.840–1.22)'
- unparsed cell psp412645-tbl-0003:row4:col3 = '1.12 (0.982–1.31)'
- unparsed cell psp412645-tbl-0003:row5:col3 = '0.849 (0.756–0.953)'
- unparsed cell psp412645-tbl-0003:row6:col3 = '230 (199–256)'
- unparsed cell psp412645-tbl-0003:row7:col3 = '0.864 (0.638–1.05)'
- unparsed cell psp412645-tbl-0003:row8:col3 = '0.754 (0.677–0.844)'
- unparsed cell psp412645-tbl-0003:row9:col3 = '0.858 (0.775–0.946)'
- unparsed cell psp412645-tbl-0003:row10:col3 = '0.858 (0.793–0.934)'
- unparsed cell psp412645-tbl-0003:row11:col3 = '0.844 (0.668–1.12)'
- unparsed cell psp412645-tbl-0003:row12:col3 = '0.0988 (0.0553–0.170)'
- unparsed cell psp412645-tbl-0003:row13:col3 = '0.0169 (0.00371–0.0375)'
- unparsed cell psp412645-tbl-0003:row14:col3 = '0.182 (0.0483–0.389)'
- unparsed cell psp412645-tbl-0003:row15:col3 = '–0.000885 (–0.0369 to 0.0317)'
- unparsed cell psp412645-tbl-0003:row16:col3 = '–0.0541 (–0.151 to 0.0306)'
- unparsed cell psp412645-tbl-0003:row17:col3 = '0.0319 (–0.00836 to 0.0802)'
- unparsed cell psp412645-tbl-0003:row19:col3 = '0.0579 (0.00245–0.205)'
- unparsed cell psp412645-tbl-0003:row20:col3 = '0.0810 (0.0455–0.114)'
- unparsed cell psp412645-tbl-0003:row21:col3 = '0.338 (0.0912–0.857)'
- unparsed cell psp412645-tbl-0003:row22:col3 = '0.183 (0.126–0.230)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[covcl/f,ka]` | -0.0582 | not captured | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412645-tbl-0003:row1:col1', 'psp412645-tbl-0003:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412645-tbl-0003:row11:col1', 'psp412645-tbl-0003:row11:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412645-tbl-0003:row6:col1', 'psp412645-tbl-0003:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.5 L/h | not captured | not captured | ['psp412645-tbl-0003:row1:col1', 'psp412645-tbl-0003:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 231 L | not captured | not captured | ['psp412645-tbl-0003:row6:col1', 'psp412645-tbl-0003:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=varenicline) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_varenicline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fediuk_2021` / `Fediuk_2021::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_varenicline/models/modelica/Varenicline_Fediuk2021_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_varenicline/models/modelica/Varenicline_Fediuk2021_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_varenicline/models/modelica/Varenicline_Fediuk2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_modelica.zip" download>Varenicline_Fediuk2021_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_fmi.zip" download>Varenicline_Fediuk2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_matlab.zip" download>Varenicline_Fediuk2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_matlab_simbio.zip" download>Varenicline_Fediuk2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_sbml.zip" download>Varenicline_Fediuk2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_cellml.zip" download>Varenicline_Fediuk2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference.svg" alt="Varenicline_Fediuk2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.5 mg, single dose, first-order absorption (ka 0.86 /h, F 1). Doses in the paper: 0.5, 1 mg.

<dbs-fmusim paramsurl="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_varenicline/Varenicline_Fediuk2021_reference/Varenicline_Fediuk2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Varenicline_Fediuk2021_reference_params.json` · controls `Varenicline_Fediuk2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:49 UTC</sub>
