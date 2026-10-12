<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;eltrombopag&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/&quot;},{&quot;label&quot;:&quot;Gibiansky_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eltrombopag_Farrell2014_reference&quot;,&quot;label&quot;:&quot;Farrell_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Farrell2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eltrombopag_Gibiansky2011_reference&quot;,&quot;label&quot;:&quot;Gibiansky_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eltrombopag — `Eltrombopag_Gibiansky2011_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The eltrombopag record was held back because the absorption rate constant ka was not reported in the source and a default value was substituted, an invented absorption the review deemed not acceptable.**

The record, built from the paper's abstract only, reports eltrombopag apparent parameters CL/F 0.668 L/h, V1/F 8.76 L, V2/F 11.3 L and Q/F 0.399 L/h with a two-compartment structure and first-order depot input. The absorption parameters ka and Tlag were missing from the source, so library defaults were used in their place, and the invented ka was judged not acceptable. Bioavailability was assumed to be 1 (F=1, Fm=1, no molar correction), giving an apparent parameterization, which a second reader disputed, preferring a mechanistic parameterization, and the second reader also returned no values for the four apparent parameters. Extracted — eltrombopag: CL/F 0.668 L/h, V1/F 8.76 L, V2/F 11.3 L, Q/F 0.399 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has eltrombopag, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:37:52.554572+00:00) predates the upstream re-run (2026-10-05 18:34:34.229324+00:00). Current validate status: `extracted`.

## Citation
Gibiansky E et al., Population pharmacokinetics of eltrombo…, Journal of clinical pharmac… (2011)
  ·  DOI: [10.1177/0091270010375427](https://doi.org/10.1177/0091270010375427)

## Model component
<dbs-pgx drug="eltrombopag" model-id="Eltrombopag_Gibiansky2011_reference" status="extracted" stale="true" population="healthy subjects and patients with chronic idiopathic thrombocytopenic purpura" measured-compound="eltrombopag" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| apparent clearance (CL/F) | `Q27` · CL/F | 0.668 | L/h | 1.8555555555555557e-07 | [l] / [h] | not captured | exact (1.0) | Gibiansky_2011:abstract | — | not captured |
| apparent volume of the central compartment (Vc/F) | `Q290` · V1/F | 8.76 | L | 0.00876 | [l] | not captured | exact (1.0) | Gibiansky_2011:abstract | — | not captured |
| apparent volume of the peripheral compartment (Vp/F) | `Q82` · V2/F | 11.3 | L | 0.011300000000000001 | [l] | not captured | exact (1.0) | Gibiansky_2011:abstract | — | not captured |
| distributional clearance (Q/F) | `Q69` · Q/F | 0.399 | L/h | 1.1083333333333335e-07 | [l] / [h] | not captured | llm_corrected (0.6) | Gibiansky_2011:abstract | — | not captured |

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
- dropped value-less row: 'Eltrombopag CL/F, Vc/F, Q/F, and Vp/F'
- dropped value-less row: 'parameters'
- dropped value-less row: 'typical eltrombopag CL/F'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'Vc/F'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=eltrombopag
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Gibiansky_2011_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[apparent clearance]` | 0.668 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of the central compartment]` | 8.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of the peripheral compartment]` | 11.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 0.668 | only_one_extracted |
| `gpt-oss:120b` | `parameters[distributional clearance]` | 0.399 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f]` | not captured | 0.399 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f]` | not captured | 8.76 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/f]` | not captured | 11.3 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | eltrombopag | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | eltrombopag | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gibiansky_2011:abstract'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gibiansky_2011:abstract'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gibiansky_2011:abstract'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gibiansky_2011:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.668 L/h | not captured | not captured | ['Gibiansky_2011:abstract'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.76 L | not captured | not captured | ['Gibiansky_2011:abstract'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 11.3 L | not captured | not captured | ['Gibiansky_2011:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=eltrombopag) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_eltrombopag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibiansky_2011` / `Gibiansky_2011::reference`)
- model: `../../../knowledgebase/drugs/drug_eltrombopag/models/modelica/Eltrombopag_Gibiansky2011_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_eltrombopag/models/modelica/Eltrombopag_Gibiansky2011_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_eltrombopag/models/modelica/Eltrombopag_Gibiansky2011_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_modelica.zip" download>Eltrombopag_Gibiansky2011_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_fmi.zip" download>Eltrombopag_Gibiansky2011_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_matlab.zip" download>Eltrombopag_Gibiansky2011_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_matlab_simbio.zip" download>Eltrombopag_Gibiansky2011_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_sbml.zip" download>Eltrombopag_Gibiansky2011_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_cellml.zip" download>Eltrombopag_Gibiansky2011_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference.svg" alt="Eltrombopag_Gibiansky2011_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 50 mg oral (B02BX05) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_eltrombopag/Eltrombopag_Gibiansky2011_reference/Eltrombopag_Gibiansky2011_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Eltrombopag_Gibiansky2011_reference_params.json` · controls `Eltrombopag_Gibiansky2011_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 18:34 UTC</sub>
