<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/&quot;},{&quot;label&quot;:&quot;Chotsiri_2021 \u00b7 prior_estimateb&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_population_estimatec&quot;,&quot;label&quot;:&quot;Chotsiri_2021_population_estimatec&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_prior_estimateb&quot;,&quot;label&quot;:&quot;Chotsiri_2021_prior_estimateb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Ding2024_nonmem_population_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_population_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Piperaquine — `Piperaquine_Chotsiri2021_prior_estimateb`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The piperaquine model's simulated peak concentration (0.000126) misses the paper's reported Cmax (0.000212, ratio 0.595), and the absorption rate ka was not reported in the paper, so a library default was used instead.**

Simulating piperaquine in pregnant women on IPTp as dosed in the paper gives a Cmax of 0.000126 against reported values of 0.000212 and 0.000232 (ratios 0.595 and 0.5437), beyond tolerance. The absorption parameters ka and Tlag were never estimated in the source, so defaults were substituted, and the adjudication flagged both the defaulted parameters and the invented absorption as unacceptable. Additionally, one reported parameter's unit could not be converted to SI, so that parameter was carried without an SI value. Extracted — piperaquine: MTT 2.04 h, CL/F 59.4 liters/h, V1/F 2.14e+03 liters, Q/F 276 liters/h, V3/F 2.07e+04 liters.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Chotsiri P et al., Piperaquine Pharmacokinetics during Int…, Antimicrobial agents and ch… (2021)
  ·  DOI: [10.1128/AAC.01150-20](https://doi.org/10.1128/AAC.01150-20)

<div class="pk-model-meta" hidden drug="Piperaquine" model-id="Piperaquine_Chotsiri2021_prior_estimateb" status="needs_review" stale="false" population="pregnant women receiving IPTp with dihydroartemisinin-piperaquine" measured-compound="piperaquine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MTT (h) | `Q81` · MTT | 2.04 | h | not captured | [h] | not captured | exact (1.0) | T2:row2:col1 | — | not captured |
| CL/F (liters/h) | `Q27` · CL/F | 59.4 | liters/h | 1.65e-05 | [l] / [h] | not captured | exact (1.0) | T2:row3:col1 | — | 19.6 (None% RSE) |
| VC/F (liters) | `Q290` · V1/F | 2140 | liters | 2.14 | [l] | not captured | exact (1.0) | T2:row4:col1 | — | 38.5 (None% RSE) |
| Q1/F (liters/h) | `Q69` · Q/F | 276 | liters/h | 7.666666666666667e-05 | [l] / [h] | not captured | exact (1.0) | T2:row5:col1 | — | 34.6 (None% RSE) |
| VP2/F (liters) | `Q78` · V3/F | 20700 | liters | 20.7 | [l] | not captured | exact (1.0) | T2:row8:col1 | — | not captured |

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
- table section iiv: 'CL/F (liters/h)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'VC/F (liters)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q2/F (liters/h)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iov: 'MTT (h)' routed out of structural estimates ('Interoccasion variability (%CV)')
- table section iov: 'F' routed out of structural estimates ('Interoccasion variability (%CV)')
- dropped duplicate Q290 ('VP1/F (liters)', value '3560') — already have one for this compound
- dropped duplicate Q69 ('Q2/F (liters/h)', value '105') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=piperaquine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'prior estimateb' subgroup of Chotsiri_2021 (paper reports 2 populations: population estimatec, prior estimateb)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row5:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 59.4 L/h | not captured | not captured | ['T2:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.14e+03 L | not captured | not captured | ['T2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=piperaquine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.000212 | 0.00012614849770207804 | 0.595 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000232 | 0.00012614849770207804 | 0.5437 | ng/ml→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | skipped | not captured | 24.964555106482003 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_piperaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chotsiri_2021` / `Chotsiri_2021::prior_estimateb`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_piperaquine/models/modelica/Piperaquine_Chotsiri2021_prior_estimateb.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_piperaquine/models/modelica/Piperaquine_Chotsiri2021_prior_estimateb.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_piperaquine/models/modelica/Piperaquine_Chotsiri2021_prior_estimateb.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_modelica.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_fmi.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_matlab.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_matlab_simbio.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_sbml.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_cellml.zip" download>Piperaquine_Chotsiri2021_prior_estimateb_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb.svg" alt="Piperaquine_Chotsiri2021_prior_estimateb diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 320 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 320 mg.

<dbs-fmusim paramsurl="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb/Piperaquine_Chotsiri2021_prior_estimateb_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Piperaquine_Chotsiri2021_prior_estimateb_params.json` · controls `Piperaquine_Chotsiri2021_prior_estimateb_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:37 UTC</sub>
