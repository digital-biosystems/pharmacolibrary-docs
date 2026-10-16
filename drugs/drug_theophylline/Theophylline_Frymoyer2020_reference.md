<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;theophylline&quot;,&quot;href&quot;:&quot;drugs/drug_theophylline/&quot;},{&quot;label&quot;:&quot;Frymoyer_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Theophylline_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# theophylline — `Theophylline_Frymoyer2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Theophylline bioavailability and absorption lag time were left at library defaults, and the defined weight covariate effects were not simulated.**

The record includes a covariate effect on the peripheral clearance parameter but the covariate scenarios were not exercised, so only the reference individual was simulated. Additionally, the bioavailability and lag time parameters were not estimated from the paper, relying on unsupported library defaults instead. Extracted — theophylline: V3 2.7 L, CL 0.049 L/h, V 2.7 L, kabs 0.58 min -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of k (rbc/plasma ratio)4: this record has none, the second reading 0.42; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `aminophylline`, measured `theophylline`.

## Citation
Frymoyer A et al., Theophylline dosing and pharmacokinetic…, Pediatric research (2020)
  ·  DOI: [10.1038/s41390-020-01140-8](https://doi.org/10.1038/s41390-020-01140-8)

<div class="pk-model-meta" hidden drug="theophylline" model-id="Theophylline_Frymoyer2020_reference" status="needs_review" stale="false" population="neonates with hypoxic ischemic encephalopathy undergoing therapeutic hypothermia" measured-compound="theophylline" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V (L per 3.3 kg)3 | `Q77` · V3 | 2.70 | L | 0.0027 | L | not captured | space_fold (0.95) | T2:row3:col1, T2:row3:col3, T2:row3:col4 | — | not captured |
| theta_q22_category | `Q900` · theta_q22_category | 0.048 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row2:col1, T2:row2:col3, T2:row2:col4 | — | not captured |
| clearance | `Q22` · CL | 0.049 | L/h | 1.3611111111111113e-08 | L/h | not captured | exact (1.0) | Frymoyer_2020:results_prose | — | not captured |
| volume | `Q61` · V | 2.7 | L | 0.0027 | L | not captured | exact (1.0) | Frymoyer_2020:results_prose | — | not captured |
| k a | `Q49` · kabs | 0.58 | min -1 | 0.009666666666666665 | 1/h | not captured | review_gapfill (0.7) | Świerczek_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL, %CV' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V, %CV' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'DBS, %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Plasma, %CV' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'K (RBC/plasma ratio)4' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1', 'T2:row4:col3', 'T2:row4:col4'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['T2:footnote']); the table cell was unparseable — needs review
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('clearance'=0.049) from results prose — parameter table was unreadable
- salvaged Q61 ('volume'=2.7) from results prose — parameter table was unreadable
- implicit units: 'V (L per 3.3 kg)3' → L (from the paper text: "The paper text explicitly states: 'The mean (range) of pharmacokinetic parameters estimates in the 22 study patients wer")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=theophylline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Świerczek_2022's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T2:row2:col2 = '9.6%'
- unparsed cell T2:row3:col2 = '5.6%'
- unparsed cell T2:row4:col2 = '19.4%'
- unparsed cell T2:row6:col1 = '25.0%'
- unparsed cell T2:row6:col2 = '54.9%'
- unparsed cell T2:row6:col4 = '0.4% – 53.5%'
- unparsed cell T2:row7:col1 = '20.5%'
- unparsed cell T2:row7:col2 = '37.4%'
- unparsed cell T2:row7:col4 = '0.6% – 27.4%'
- unparsed cell T2:row9:col1 = '10.3%'
- unparsed cell T2:row9:col2 = '37.0%'
- unparsed cell T2:row10:col1 = '14.3%'
- unparsed cell T2:row10:col2 = '35.9%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.6 (6/10 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k (rbc/plasma ratio)4]` | not captured | 0.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_category].value` | 0.048 | 0.040 | mismatch |
| `gpt-oss-120b` | `parameters[v (l per 3.3 kg)3].value` | 2.70 | 2.38 | mismatch |

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
| C1_half_life_beta | pass | 39.2 | 38.194 | 0.9743 | 0.25 | reported t½β |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Świerczek_2022:review'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col1', 'T2:row3:col3', 'T2:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.049 | not captured | not captured | ['Frymoyer_2020:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.049 L/h | not captured | not captured | ['Frymoyer_2020:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.7 L | not captured | not captured | ['Frymoyer_2020:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | pass | C_central (measured=theophylline) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | pass | 39.2 | 38.185126410554 | 0.9741 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_theophylline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frymoyer_2020` / `Frymoyer_2020::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_theophylline/models/modelica/Theophylline_Frymoyer2020_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_theophylline/models/modelica/Theophylline_Frymoyer2020_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_theophylline/models/modelica/Theophylline_Frymoyer2020_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_modelica.zip" download>Theophylline_Frymoyer2020_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_fmi.zip" download>Theophylline_Frymoyer2020_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_matlab.zip" download>Theophylline_Frymoyer2020_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_matlab_simbio.zip" download>Theophylline_Frymoyer2020_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_sbml.zip" download>Theophylline_Frymoyer2020_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_cellml.zip" download>Theophylline_Frymoyer2020_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference.svg" alt="Theophylline_Frymoyer2020_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 126 mg, single dose, first-order absorption (ka 34.8 /h, F 0.9). Doses in the paper: 126, 350 mg.

<dbs-fmusim paramsurl="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_theophylline/Theophylline_Frymoyer2020_reference/Theophylline_Frymoyer2020_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Theophylline_Frymoyer2020_reference_params.json` · controls `Theophylline_Frymoyer2020_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:15 UTC</sub>
