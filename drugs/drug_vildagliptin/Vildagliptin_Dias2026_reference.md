<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;vildagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/&quot;},{&quot;label&quot;:&quot;Dias_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vildagliptin_Dias2026_reference&quot;,&quot;label&quot;:&quot;Dias_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vildagliptin — `Vildagliptin_Dias2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Vildagliptin absorption rate constant (ka) and lag time (Tlag) were defaulted instead of being estimated, making the record unsuitable.**

The model builder substituted library defaults for ka and Tlag because these absorption parameters are not reported in the source paper for vildagliptin. Additionally, the record relies on apparent parameterization (F=1) with an invented first-order depot input rather than explicit bioavailability estimates. Consequently, the simulated absorption profile is based on assumed conventions rather than data supported by the study. Extracted — vildagliptin: CL 2.72 L/h/kg, V1 1.11 L/kg, Q 0.338 L/h/kg, V2 1.85 L/kg, V3 2.55 L/kg, Vnorm 0.856 L/kg, Q/F 56.6 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Dias BB et al., Preclinical Modeling and Simulation to…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70165](https://doi.org/10.1002/psp4.70165)

<div class="pk-model-meta" hidden drug="vildagliptin" model-id="Vildagliptin_Dias2026_reference" status="needs_review" stale="false" population="healthy and diabetic rats" measured-compound="vildagliptin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/kg) | `Q22` · CL | 2.72 | L/h/kg | 5.288888888888889e-05 | [l] / [[h] · [kg]] | 5 | exact (1.0) | psp470165-tbl-0001:row1:col1 | — | 19.2 (19% RSE) |
| V 1 (L/kg) | `Q63` · V1 | 1.11 | L/kg | 0.0777 | [l] / [kg] | 9 | space_fold (0.95) | psp470165-tbl-0001:row2:col1 | — | not captured |
| Q 1,healthy (L/h/kg) | `Q30` · Q | 0.338 | L/h/kg | 6.572222222222223e-06 | [l] / [[h] · [kg]] | 21 | llm (0.6) | psp470165-tbl-0001:row3:col1 | — | not captured |
| V 2 (L/kg) | `Q64` · V2 | 1.85 | L/kg | 0.1295 | [l] / [kg] | 12 | space_fold (0.95) | psp470165-tbl-0001:row5:col1 | — | not captured |
| V 3 (L/kg) | `Q77` · V3 | 2.55 | L/kg | 0.1785 | [l] / [kg] | 26 | space_fold (0.95) | psp470165-tbl-0001:row8:col1 | — | 76.6 (29% RSE) |
| V 4 (L/kg) | `Q352` · Vnorm | 0.856 | L/kg | 0.05992 | [l] / [kg] | 49 | llm (0.6) | psp470165-tbl-0001:row12:col1 | — | not captured |
| Qin,liver (L/h) | `Q69` · Q/F | 56.65 | L/h | 1.5736111111111112e-05 | [l] / [h] | not captured | llm (0.6) | Dias_2026_table_S2:row7:col1 | — | not captured |

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
- table section iiv: 'CL (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q 1,healthy (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q 1,diabetic (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'V 3 (L/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q out,liver,healthy (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q out,liver,diabetic (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'V 4 (L/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section residual_error: 'Plasma' routed out of structural estimates ('Residual error (ng/L)')
- table section residual_error: 'Muscle' routed out of structural estimates ('Residual error (ng/L)')
- table section residual_error: 'Liver' routed out of structural estimates ('Residual error (ng/L)')
- dropped duplicate Q30 ('Q 1,diabetic (L/h/kg)', value '2.61') — already have one for this compound
- dropped duplicate Q30 ('Q in,muscle (L/h/kg)', value '2.09') — already have one for this compound
- dropped duplicate Q30 ('Q out,muscle (L/h/kg)', value '14.3') — already have one for this compound
- dropped duplicate Q30 ('Q in,liver (L/h/kg)', value '2.5') — already have one for this compound
- dropped duplicate Q30 ('Q out,liver,healthy (L/h/kg)', value '218') — already have one for this compound
- dropped duplicate Q30 ('Q out,liver,diabetic (L/h/kg)', value '19.7') — already have one for this compound
- dropped duplicate Q22 ('CL (L/h)', value '101.01') — already have one for this compound
- dropped duplicate Q63 ('V1 (L)', value '61.64') — already have one for this compound
- dropped duplicate Q30 ('Q1 (L/h)', value '27.65') — already have one for this compound
- dropped duplicate Q64 ('V2 (L)', value '168.35') — already have one for this compound
- dropped duplicate Q30 ('Qin,muscle (L/h)', value '47.36') — already have one for this compound
- dropped duplicate Q30 ('Qout,muscle (L/h)', value '324.07') — already have one for this compound
- dropped duplicate Q77 ('V3 (L)', value '232.05') — already have one for this compound
- dropped duplicate Q69 ('Qout,liver (L/h)', value '446.44') — already have one for this compound
- dropped duplicate Q77 ('V4 (L)', value '77.90') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vildagliptin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell psp470165-tbl-0001:row1:col4 = '2.64 (2.34–2.92)'
- unparsed cell psp470165-tbl-0001:row2:col4 = '1.09 (0.85–1.29)'
- unparsed cell psp470165-tbl-0001:row3:col4 = '0.322 (0.217–0.428)'
- unparsed cell psp470165-tbl-0001:row5:col4 = '1.54 (0.73–1.98)'
- unparsed cell psp470165-tbl-0001:row6:col4 = '1.92 (1.19–3.17)'
- unparsed cell psp470165-tbl-0001:row7:col4 = '13.51 (8.22–23.27)'
- unparsed cell psp470165-tbl-0001:row8:col4 = '2.47 (1.29–4.12)'
- unparsed cell psp470165-tbl-0001:row9:col4 = '1.74 (0.62–3.87)'
- unparsed cell psp470165-tbl-0001:row10:col4 = '165 (49–419)'
- unparsed cell psp470165-tbl-0001:row12:col4 = '2.24 (0.52–6.69)'
- unparsed cell psp470165-tbl-0001:row14:col4 = '0.209 (0.148–0.267)'
- unparsed cell psp470165-tbl-0001:row15:col4 = '0.208 (0.158–0.251)'
- unparsed cell psp470165-tbl-0001:row16:col4 = '0.160 (0.128–0.206)'
- companion parameter table S2 transcribed (10 record(s))
- LLM selected parameter table(s) 1, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.833 (15/18 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[qin,liver]` | 56.65 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4]` | not captured | 77.90 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470165-tbl-0001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470165-tbl-0001:row3:col1'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row12:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dias_2026_table_S2:row7:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 190 L/h | not captured | not captured | ['psp470165-tbl-0001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 77.7 L | not captured | not captured | ['psp470165-tbl-0001:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 130 L | not captured | not captured | ['psp470165-tbl-0001:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=vildagliptin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vildagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dias_2026` / `Dias_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_vildagliptin/models/modelica/Vildagliptin_Dias2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_vildagliptin/models/modelica/Vildagliptin_Dias2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_vildagliptin/models/modelica/Vildagliptin_Dias2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_modelica.zip" download>Vildagliptin_Dias2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_fmi.zip" download>Vildagliptin_Dias2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_matlab.zip" download>Vildagliptin_Dias2026_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_matlab_simbio.zip" download>Vildagliptin_Dias2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_sbml.zip" download>Vildagliptin_Dias2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_cellml.zip" download>Vildagliptin_Dias2026_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference.svg" alt="Vildagliptin_Dias2026_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3500 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Vildagliptin_Dias2026_reference_params.json` · controls `Vildagliptin_Dias2026_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:22 UTC</sub>
