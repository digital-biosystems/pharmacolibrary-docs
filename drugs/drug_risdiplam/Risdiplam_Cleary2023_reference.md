<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;risdiplam&quot;,&quot;href&quot;:&quot;drugs/drug_risdiplam/&quot;},{&quot;label&quot;:&quot;Cleary_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risdiplam_Cleary2023_reference&quot;,&quot;label&quot;:&quot;Cleary_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_risdiplam/Risdiplam_Cleary2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# risdiplam — `Risdiplam_Cleary2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

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

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has risdiplam, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Cleary Y et al., Estimation of FMO3 Ontogeny by Mechanis…, Clinical pharmacokinetics (2023)
  ·  DOI: [10.1007/s40262-023-01241-7](https://doi.org/10.1007/s40262-023-01241-7)

<div class="pk-model-meta" hidden drug="risdiplam" model-id="Risdiplam_Cleary2023_reference" status="accepted_with_caveats" stale="false" population="SMA patients and healthy subjects" measured-compound="risdiplam" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 2.64 | L/h | 7.333333333333333e-07 | L/h | 2.13 | exact (1.0) | Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:footnote, Tab2:footnote | — | not captured |
| ktr | `Q306` · ktr | 5.18 | 1/h | 0.0014388888888888889 | 1/h | 2.74 | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:footnote | — | not captured |
| Vc/F | `Q290` · V1/F | 98.0 | L | 0.098 | L | 1.80 | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:footnote, Tab2:footnote | — | not captured |
| Q/F | `Q69` · Q/F | 0.682 | L/h | 1.8944444444444447e-07 | L/h | 10.5 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 | — | not captured |
| Vp/F | `Q82` · V2/F | 92.9 | L | 0.09290000000000001 | L | 25.8 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4 | — | not captured |
| effect_of_wt_on_cl_f_and_q_f | `Q900` · effect_of_wt_on_cl_f_and_q_f | 0.276 | not captured | not captured | not captured | 11.8 | not captured (not captured) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4 | — | not captured |
| theta_v1_f_wt | `Q900` · theta_v1_f_wt | 0.860 | not captured | not captured | not captured | 3.34 | not captured (not captured) | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.001439/s, n=0) folded to first-order ka = ktr/(n+1) = 0.001439/s — same mean absorption time, no delay phase

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Effect of WT on CL/F and Q/F' → Q900:effect_of_wt_on_cl_f_and_q_f = 0.276 (linear_fractional on Q27)
- dropped duplicate Q27 ('Age50—CL/F', value '0.877') — already have one for this compound
- routed 'Age50—Vc/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q27 ('Healthy subjects on CL/F', value '0.524') — already have one for this compound
- dropped value-less row: 'CL/F (CV)' (captured trailing unit 'CV' for child rows)
- dropped value-less row: 'ktr (CV)' (captured trailing unit 'CV' for child rows)
- dropped value-less row: 'Vc/F (CV)' (captured trailing unit 'CV' for child rows)
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'allometric_exponent' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL/F' → L/h (from the popPK convention: 'The paper describes CL/F as apparent clearance (hepatic clearance). While Table 2 is not fully provided in the excerpt, ')
- implicit units: 'ktr' → 1/h (from the popPK convention: 'ktr is a first-order transit rate constant. By definition, first-order rate constants have units of inverse time (1/h). ')
- implicit units: 'Vc/F' → L (from the popPK convention: 'Vc/F is the apparent volume of distribution of the central compartment. The text notes Vss = 4.2 L/kg, implying Vc/F wou')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'Q/F is the apparent intercompartmental clearance. By convention, intercompartmental clearances are expressed in L/h. The')
- implicit units: 'Vp/F' → L (from the popPK convention: 'Vp/F is the apparent volume of distribution of the peripheral compartment. Similar to Vc/F, the value 92.9 is consistent')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=risdiplam

**Extraction notes:**
- unparsed cell Tab2:row14:col2 = '0.0678 (26.0%)'
- unparsed cell Tab2:row15:col2 = '0.272 (52.2%)'
- unparsed cell Tab2:row16:col2 = '0.0651 (25.5%)'
- unparsed cell Tab2:row18:col2 = '0.0546 (23.4%)'
- unparsed cell Tab2:row19:col2 = '0.117 (34.2%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (14/28 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alpha]` | not captured | 3.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[beta]` | not captured | 0.509 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint,cyp3a healthy adult]` | not captured | 0.000133 | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_wt_on_cl_f_and_q_f]` | 0.276 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ktr].rse_percent` | 2.74 | 3.09 | mismatch |
| `gpt-oss-120b` | `parameters[ktr].value` | 5.18 | 5.12 | mismatch |
| `gpt-oss-120b` | `parameters[q]` | not captured | 0.963 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt]` | not captured | 0.276 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_wt]` | not captured | 0.811 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_wt]` | not captured | 0.605 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 94.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 60.1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | risdiplam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | risdiplam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q27 | fail | 2.64 | 0.524 | 0.1985 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:footnote'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.64 L/h | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 98 L | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:footnote', 'Tab2:footnote'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 92.9 L | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=risdiplam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risdiplam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cleary_2023` / `Cleary_2023::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risdiplam/models/modelica/Risdiplam_Cleary2023_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risdiplam/models/modelica/Risdiplam_Cleary2023_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_risdiplam/models/modelica/Risdiplam_Cleary2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_modelica.zip" download>Risdiplam_Cleary2023_reference_modelica.zip</a> <span class="pk-size">(5.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_fmi.zip" download>Risdiplam_Cleary2023_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_matlab.zip" download>Risdiplam_Cleary2023_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_matlab_simbio.zip" download>Risdiplam_Cleary2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_sbml.zip" download>Risdiplam_Cleary2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_cellml.zip" download>Risdiplam_Cleary2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference.svg" alt="Risdiplam_Cleary2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 14 mg, single dose, first-order absorption (ka 5.18 /h, F 1). Doses in the paper: 14, 17.5, 350 mg.

<dbs-fmusim paramsurl="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_risdiplam/Risdiplam_Cleary2023_reference/Risdiplam_Cleary2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Risdiplam_Cleary2023_reference_params.json` · controls `Risdiplam_Cleary2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:44 UTC</sub>
