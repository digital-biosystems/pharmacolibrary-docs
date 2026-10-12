<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) succimer&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_succimer/&quot;},{&quot;label&quot;:&quot;Storgaard_2026_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Technetium99mtcSuccimer_Storgaard2026v2_reference&quot;,&quot;label&quot;:&quot;Storgaard_2026_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# technetium (99mTc) succimer — `Technetium99mtcSuccimer_Storgaard2026v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Technetium 99mtc succimer was held back because its absorption rate constant ka has no reported value and was defaulted, rather than estimated from the paper.**

The absorption rate constant ka and lag time Tlag were defaulted rather than estimated from the paper; these defaults affect the simulated concentration-time profile. The model also assumed F=1 and Fm=1, omitted molar correction, and used a first-order depot input representing extravascular dosing with apparent (/F) parameters. Extracted — technetium 99mtc succimer: CL/F 162 L h−1, V/F 1.67e+03 L, V2 539 L, Q/F 183 L h−1.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on parameter Q22: this record has 696, the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Storgaard IK et al., Population pharmacokinetic modelling re…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70284](https://doi.org/10.1002/bcp.70284)

<div class="pk-model-meta" hidden drug="technetium (99mTc) succimer" model-id="Technetium99mtcSuccimer_Storgaard2026v2_reference" status="needs_review" stale="false" population="" measured-compound="technetium_99mtc_succimer" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLO/F Apparent clearance of THC through other pathways | `Q27` · CL/F | 162.0 | L h−1 | 4.5e-05 | L/h | not captured | review (0.7) | Storgaard_2026_2:review | — | not captured |
| V/F Apparent distribution volume for THC | `Q76` · V/F | 1669.0 | L | 1.669 | L | not captured | review (0.7) | Storgaard_2026_2:review | — | not captured |
| V2MET/F Apparent distribution volume of the peripheral THC‐OH compartment | `Q64` · V2 | 539.0 | L | 0.539 | L | not captured | review (0.7) | Storgaard_2026_2:review | — | not captured |
| QMET/F Intercompartmental clearance for THC‐OH | `Q69` · Q/F | 183.0 | L h−1 | 5.0833333333333333e-05 | L/h | not captured | review (0.7) | Storgaard_2026_2:review | — | not captured |

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
- built from REVIEW reference values (Storgaard_2026_2) — secondary source
- volume reported by review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.429 (6/14 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `values[Q22]` | 696 | not captured | only_one_extracted |
| `qwen3.8-27b` | `values[Q27]` | 162 | 765 | mismatch |
| `qwen3.8-27b` | `values[Q367]` | not captured | 77.5 | only_one_extracted |
| `qwen3.8-27b` | `values[Q370]` | 765 | not captured | only_one_extracted |
| `qwen3.8-27b` | `values[Q61]` | 66.4 | not captured | only_one_extracted |
| `qwen3.8-27b` | `values[Q63]` | 77.5 | not captured | only_one_extracted |
| `qwen3.8-27b` | `values[Q64]` | 539 | not captured | only_one_extracted |
| `qwen3.8-27b` | `values[Q82]` | not captured | 539 | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Storgaard_2026_2:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Storgaard_2026_2:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Storgaard_2026_2:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Storgaard_2026_2:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 162 L/h | not captured | not captured | ['Storgaard_2026_2:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 539 L | not captured | not captured | ['Storgaard_2026_2:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.67e+03 L | not captured | not captured | ['Storgaard_2026_2:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=technetium_99mtc_succimer) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_technetium_99mtc_succimer/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Storgaard_2026_2` / `Storgaard_2026_2::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_technetium_99mtc_succimer/models/modelica/Technetium99mtcSuccimer_Storgaard2026v2_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_technetium_99mtc_succimer/models/modelica/Technetium99mtcSuccimer_Storgaard2026v2_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_technetium_99mtc_succimer/models/modelica/Technetium99mtcSuccimer_Storgaard2026v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_modelica.zip" download>Technetium99mtcSuccimer_Storgaard2026v2_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_fmi.zip" download>Technetium99mtcSuccimer_Storgaard2026v2_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_matlab.zip" download>Technetium99mtcSuccimer_Storgaard2026v2_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_matlab_simbio.zip" download>Technetium99mtcSuccimer_Storgaard2026v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_sbml.zip" download>Technetium99mtcSuccimer_Storgaard2026v2_reference_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_cellml.zip" download>Technetium99mtcSuccimer_Storgaard2026v2_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference.svg" alt="Technetium99mtcSuccimer_Storgaard2026v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_technetium_99mtc_succimer/Technetium99mtcSuccimer_Storgaard2026v2_reference/Technetium99mtcSuccimer_Storgaard2026v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Technetium99mtcSuccimer_Storgaard2026v2_reference_params.json` · controls `Technetium99mtcSuccimer_Storgaard2026v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:13 UTC</sub>
