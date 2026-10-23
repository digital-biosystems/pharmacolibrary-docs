<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;ropeginterferon alfa-2b&quot;,&quot;href&quot;:&quot;drugs/drug_ropeginterferon_alfa_2b/&quot;},{&quot;label&quot;:&quot;Zhu_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RopeginterferonAlfa2b_Zhu2021_reference&quot;,&quot;label&quot;:&quot;Zhu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ropeginterferon alfa-2b — `RopeginterferonAlfa2b_Zhu2021_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span>

<div class="pk-model-meta" hidden drug="ropeginterferon alfa-2b" model-id="RopeginterferonAlfa2b_Zhu2021_reference" status="accepted_with_caveats" stale="false" population="healthy Caucasian and Chinese adults" measured-compound="ropeginterferon_alfa_2b" parameterization="apparent" topology="1C"></div>

## Citation
Zhu M, Wang MX, Li ZR, Wang W, Su X, Jiao Z. Population Pharmacokinetics of Ropeginterferon Alfa-2b: A Comparison Between Healthy Caucasian and Chinese Subjects. Frontiers in pharmacology 12:673492 (2021).
  ·  DOI: [10.3389/fphar.2021.673492](https://doi.org/10.3389/fphar.2021.673492)

## Population and dosing

**Population:** healthy Caucasian and Chinese adults · condition healthy · age group adult · n = 57.

**Dosing:** 0.024, 0.048, 0.09, 0.18, 0.225, 0.27 mg, sc, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference.svg" alt="RopeginterferonAlfa2b_Zhu2021_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/day) | CL/F | 0.778 | L/day | 12 | 35.7 (14% RSE) |
| impact_of_body_weight | impact_of_body_weight | 0.927 |  | 43 |  |
| V/F (L) | V/F | 2.32 | L | 14 | 90.8 (15% RSE) |
| ka (1/day) | kabs | 0.14 | 1/day | 14 | 63.5 (17% RSE) |
| tlag (h) | tlag | 0.426 | h | 9 |  |
| kint (h−1) | kint | 0.0788 | h−1 |  |  |
| KD (ng/ml) | KD | 0.142 | ng/ml |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Reproduces with caveats</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.882). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (KD), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ropeginterferon_alfa_2b, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 0.778 | L/day | 9.005e-09 | m3/s | l/d | 12 | exact (1) | T2:row2:col1 | 35.7 (14% RSE) |
| impact_of_body_weight | `Q900` · impact_of_body_weight | 0.927 |  |  |  |  | 43 |  | T2:row3:col1 |  |
| V/F (L) | `Q76` · V/F | 2.32 | L | 0.00232 | m3 | l | 14 | exact (1) | T2:row4:col1 | 90.8 (15% RSE) |
| ka (1/day) | `Q49` · kabs | 0.14 | 1/day | 1.62e-06 | 1/s | 1/h | 14 | exact (1) | T2:row5:col1 | 63.5 (17% RSE) |
| tlag (h) | `Q83` · tlag | 0.426 | h | 1534 | s | h | 9 | exact (1) | T2:row6:col1 |  |
| kint (h−1) | `Q334` · kint | 0.0788 | h−1 | 2.189e-05 | 1/s | 1/h |  | exact (1) | T2:row8:col1 |  |
| KD (ng/ml) | `Q331` · KD | 0.142 | ng/ml |  |  | ng/ml |  | exact (1) | T2:row10:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row2:col1'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 |  | ['T2:row10:col1'] |
| C5_dimension_Q334 | pass | 1 / [time] |  | ['T2:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T2:row4:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['T2:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0324 L/h | ['T2:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.32 L | ['T2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=ropeginterferon_alfa_2b) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4475 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1534 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 2.4e-08 | kg |
| input | model | `Cl` | 9.005e-09 | m3/s |
| input | model | `VdPerKg` | 3.314e-05 | m3/kg |
| input | model | `ka` | 1.62e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Zhu M, Wang MX, Li ZR, Wang W, Su X, Jiao Z. Population Pharmacokinetics of Ropeginterferon Alfa-2b: A Comparison Between Healthy Caucasian and Chinese Subjects. Frontiers in pharmacology 12:673492 (2021). [doi:10.3389/fphar.2021.673492](https://doi.org/10.3389/fphar.2021.673492)

**This record:** Pharmacolibrary v26.09, model `RopeginterferonAlfa2b_Zhu2021_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference>

```bibtex
@misc{pharmacolibrary_RopeginterferonAlfa2bZhu2021reference,
  title  = {{Pharmacolibrary model RopeginterferonAlfa2b_Zhu2021_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference},
  note   = {Parameters from doi:10.3389/fphar.2021.673492},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.024 mg, single dose, first-order absorption (ka 0.00583 /h, lag 25.6 min, F 1). Doses in the paper: 0.024, 0.048, 0.09, 0.18, 0.225, 0.27 mg.

<dbs-fmusim paramsurl="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference/RopeginterferonAlfa2b_Zhu2021_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `RopeginterferonAlfa2b_Zhu2021_reference_params.json` · controls `RopeginterferonAlfa2b_Zhu2021_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bropeginterferon_alfa_2b%5D%20RopeginterferonAlfa2b_Zhu2021_reference&body=Drug%3A%20ropeginterferon_alfa_2b%0ARecord%3A%20RopeginterferonAlfa2b_Zhu2021_reference%0APaper%3A%20Zhu_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:04 UTC</sub>
