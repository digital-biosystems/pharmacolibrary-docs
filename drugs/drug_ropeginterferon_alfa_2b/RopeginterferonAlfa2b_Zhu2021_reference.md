<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;ropeginterferon alfa-2b&quot;,&quot;href&quot;:&quot;drugs/drug_ropeginterferon_alfa_2b/&quot;},{&quot;label&quot;:&quot;Zhu_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RopeginterferonAlfa2b_Zhu2021_reference&quot;,&quot;label&quot;:&quot;Zhu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ropeginterferon alfa-2b — `RopeginterferonAlfa2b_Zhu2021_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.882). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (KD), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ropeginterferon_alfa_2b, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zhu M et al., Population Pharmacokinetics of Ropegint…, Frontiers in pharmacology (2021)
  ·  DOI: [10.3389/fphar.2021.673492](https://doi.org/10.3389/fphar.2021.673492)

<div class="pk-model-meta" hidden drug="ropeginterferon alfa-2b" model-id="RopeginterferonAlfa2b_Zhu2021_reference" status="accepted_with_caveats" stale="false" population="healthy Caucasian and Chinese adults" measured-compound="ropeginterferon_alfa_2b" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 0.778 | L/day | 9.00462962962963e-09 | [l] / [d] | 12 | exact (1.0) | T2:row2:col1 | — | 35.7 (14% RSE) |
| impact_of_body_weight | `Q900` · impact_of_body_weight | 0.927 | not captured | not captured | not captured | 43 | not captured (not captured) | T2:row3:col1 | — | not captured |
| V/F (L) | `Q76` · V/F | 2.32 | L | 0.00232 | [l] | 14 | exact (1.0) | T2:row4:col1 | — | 90.8 (15% RSE) |
| ka (1/day) | `Q49` · kabs | 0.14 | 1/day | 1.6203703703703705e-06 | 1/h | 14 | exact (1.0) | T2:row5:col1 | — | 63.5 (17% RSE) |
| tlag (h) | `Q83` · tlag | 0.426 | h | 1533.6 | [h] | 9 | exact (1.0) | T2:row6:col1 | — | not captured |
| kint (h−1) | `Q334` · kint | 0.0788 | h−1 | 2.1888888888888887e-05 | [1] / [h] | not captured | exact (1.0) | T2:row8:col1 | — | not captured |
| KD (ng/ml) | `Q331` · KD | 0.142 | ng/ml | not captured | [ng] / [ml] | not captured | exact (1.0) | T2:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Between subject variability (CV%)')
- table section iiv: 'V/F' routed out of structural estimates ('Between subject variability (CV%)')
- table section iiv: 'ka' routed out of structural estimates ('Between subject variability (CV%)')
- covariate level 'Impact of body weight' → Q900:impact_of_body_weight = 0.927 (power on Q27)
- dropped PD-category row 'R0 (ng/ml)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row7:col1'])
- dropped PD-category row 'kdeg (h−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row9:col1'])
- routed 'Proptional (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive (ng/ml)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'ka (1/day)' → 1/day (from the paper text: "The paper states in the Results section: 'The typical value ... of apparent clearance (CL/F) ... were 0.778 ... L/day'. ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ropeginterferon_alfa_2b
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T2:row2:col3 = '0.779 (0.653–0.905)'
- unparsed cell T2:row3:col3 = '0.987 (0.347–1.556)'
- unparsed cell T2:row4:col3 = '2.259 (1.650–3.098)'
- unparsed cell T2:row5:col3 = '0.138 (0.117–0.166)'
- unparsed cell T2:row6:col3 = '0.502 (0.045–0.822)'
- unparsed cell T2:row7:col3 = '0.126 (0.037–1.176)'
- unparsed cell T2:row9:col3 = '0.479 (0.046–2.167)'
- unparsed cell T2:row12:col3 = '32.2 (23.2–42.3)'
- unparsed cell T2:row13:col3 = '76.0 (61.8–96.3)'
- unparsed cell T2:row14:col3 = '56.6 (44.6–68.6)'
- unparsed cell T2:row16:col3 = '18.06 (14.7–24.2)'
- unparsed cell T2:row17:col3 = '0.331 (0.113–0.487)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.882 (15/17 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | ropeginterferon_alfa_2b | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ropeginterferon_alfa_2b | unknown | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['T2:row10:col1'] |
| C5_dimension_Q334 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T2:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0324 L/h | not captured | not captured | ['T2:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.32 L | not captured | not captured | ['T2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ropeginterferon_alfa_2b) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ropeginterferon_alfa_2b/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhu_2021` / `Zhu_2021::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ropeginterferon_alfa_2b/models/modelica/RopeginterferonAlfa2b_Zhu2021_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ropeginterferon_alfa_2b/models/modelica/RopeginterferonAlfa2b_Zhu2021_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ropeginterferon_alfa_2b/models/modelica/RopeginterferonAlfa2b_Zhu2021_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_modelica.zip" download>RopeginterferonAlfa2b_Zhu2021_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_fmi.zip" download>RopeginterferonAlfa2b_Zhu2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_matlab.zip" download>RopeginterferonAlfa2b_Zhu2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_matlab_simbio.zip" download>RopeginterferonAlfa2b_Zhu2021_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_sbml.zip" download>RopeginterferonAlfa2b_Zhu2021_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_cellml.zip" download>RopeginterferonAlfa2b_Zhu2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference.svg" alt="RopeginterferonAlfa2b_Zhu2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.024 mg, single dose, first-order absorption (ka 0.00583 /h, lag 25.6 min, F 1). Doses in the paper: 0.024, 0.048, 0.09, 0.18, 0.225, 0.27 mg.

<dbs-fmusim paramsurl="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `RopeginterferonAlfa2b_Zhu2021_reference_params.json` · controls `RopeginterferonAlfa2b_Zhu2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:04 UTC</sub>
