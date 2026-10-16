<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desvenlafaxine&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/&quot;},{&quot;label&quot;:&quot;Mangas-Sanju\u00e1n_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desvenlafaxine_MangasSanjun2023_reference&quot;,&quot;label&quot;:&quot;Mangas-Sanju\u00e1n_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desvenlafaxine — `Desvenlafaxine_MangasSanjun2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.9), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — desvenlafaxine: kabs 22 h -1, ktr 16.8 h -1, CL 11.4 L/h, V1 65.3 L, t1/2ka 7.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[plasma].parameter_id`: this record has Q84, the second reading Q46. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:07.977135+00:00) predates the upstream re-run (2026-10-06 22:21:36.398200+00:00). Current validate status: `extracted`.

## Citation
Mangas-Sanjuán V et al., Alternative Pharmacokinetic Metrics in…, Pharmaceutics (2023)
  ·  DOI: [10.3390/pharmaceutics15020409](https://doi.org/10.3390/pharmaceutics15020409)

<div class="pk-model-meta" hidden drug="desvenlafaxine" model-id="Desvenlafaxine_MangasSanjun2023_reference" status="extracted" stale="true" population="healthy adults" measured-compound="desvenlafaxine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h–1) | `Q49` · kabs | 21 | h–1 | 0.005833333333333334 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-15-00409-t003:row2:col2, pharmaceutics-15-00409-t003:row2:col5 | — | 15 (None% RSE) |
| ktr (h–1) | `Q306` · ktr | 31 | h–1 | 0.008611111111111111 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-15-00409-t003:row3:col1, pharmaceutics-15-00409-t003:row3:col2, pharmaceutics-15-00409-t003:row3:col4, pharmaceutics-15-00409-t003:row3:col5, pharmaceutics-15-00409-t003:row3:col6 | — | 39 (None% RSE) |
| CL (L/h) | `Q22` · CL | 12 | L/h | 3.3333333333333333e-06 | [l] / [h] | not captured | exact (1.0) | pharmaceutics-15-00409-t003:row4:col1, pharmaceutics-15-00409-t003:row4:col2, pharmaceutics-15-00409-t003:row4:col4, pharmaceutics-15-00409-t003:row4:col5, pharmaceutics-15-00409-t003:row4:col6 | — | 17 (None% RSE) |
| V1 (L) | `Q61` · V | 19 | L | 0.019 | [l] | not captured | exact (1.0) | pharmaceutics-15-00409-t003:row5:col1, pharmaceutics-15-00409-t003:row5:col2, pharmaceutics-15-00409-t003:row5:col4, pharmaceutics-15-00409-t003:row5:col5, pharmaceutics-15-00409-t003:row5:col6 | — | 43 (None% RSE) |
| Plasma (%) | `Q84` · AUC%ext | 8 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-15-00409-t003:row16:col1, pharmaceutics-15-00409-t003:row16:col2, pharmaceutics-15-00409-t003:row16:col3, pharmaceutics-15-00409-t003:row16:col4, pharmaceutics-15-00409-t003:row16:col5, pharmaceutics-15-00409-t003:row16:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'ka (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ktr (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'CL (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V1 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iov: 'ka (%)' routed out of structural estimates ('Inter-occasion variability')
- table section iov: 'ktr (%)' routed out of structural estimates ('Inter-occasion variability')
- table section iov: 'CL (%)' routed out of structural estimates ('Inter-occasion variability')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (V1 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=desvenlafaxine
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1 (L)' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-15-00409-t003:row2:col1 = '7.37 × 10–2'
- unparsed cell pharmaceutics-15-00409-t003:row2:col4 = '7.35 × 10–2'
- unparsed cell pharmaceutics-15-00409-t003:row2:col6 = '(6.84–7.56) × 10–2'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.9 (9/10 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[plasma].parameter_id` | Q84 | Q46 | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 11.42 | 12 | mismatch |
| `gpt-oss:120b` | `parameters[k a]` | 22 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k tr]` | 16.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ktr]` | not captured | 31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma]` | not captured | 8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 1]` | 65.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1]` | not captured | 19 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-15-00409-t003:row4:col1', 'pharmaceutics-15-00409-t003:row4:col2', 'pharmaceutics-15-00409-t003:row4:col4', 'pharmaceutics-15-00409-t003:row4:col5', 'pharmaceutics-15-00409-t003:row4:col6'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-15-00409-t003:row3:col1', 'pharmaceutics-15-00409-t003:row3:col2', 'pharmaceutics-15-00409-t003:row3:col4', 'pharmaceutics-15-00409-t003:row3:col5', 'pharmaceutics-15-00409-t003:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-15-00409-t003:row2:col2', 'pharmaceutics-15-00409-t003:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-15-00409-t003:row5:col1', 'pharmaceutics-15-00409-t003:row5:col2', 'pharmaceutics-15-00409-t003:row5:col4', 'pharmaceutics-15-00409-t003:row5:col5', 'pharmaceutics-15-00409-t003:row5:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 12.0 | not captured | not captured | ['pharmaceutics-15-00409-t003:row4:col1', 'pharmaceutics-15-00409-t003:row4:col2', 'pharmaceutics-15-00409-t003:row4:col4', 'pharmaceutics-15-00409-t003:row4:col5', 'pharmaceutics-15-00409-t003:row4:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12 L/h | not captured | not captured | ['pharmaceutics-15-00409-t003:row4:col1', 'pharmaceutics-15-00409-t003:row4:col2', 'pharmaceutics-15-00409-t003:row4:col4', 'pharmaceutics-15-00409-t003:row4:col5', 'pharmaceutics-15-00409-t003:row4:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 19 L | not captured | not captured | ['pharmaceutics-15-00409-t003:row5:col1', 'pharmaceutics-15-00409-t003:row5:col2', 'pharmaceutics-15-00409-t003:row5:col4', 'pharmaceutics-15-00409-t003:row5:col5', 'pharmaceutics-15-00409-t003:row5:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_desvenlafaxine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mangas-Sanjuán_2023` / `Mangas-Sanjuán_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_modelica.zip" download>Desvenlafaxine_MangasSanjun2023_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_fmi.zip" download>Desvenlafaxine_MangasSanjun2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_matlab.zip" download>Desvenlafaxine_MangasSanjun2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_matlab_simbio.zip" download>Desvenlafaxine_MangasSanjun2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_sbml.zip" download>Desvenlafaxine_MangasSanjun2023_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_cellml.zip" download>Desvenlafaxine_MangasSanjun2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference.svg" alt="Desvenlafaxine_MangasSanjun2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 21 /h, F 0.9). Dose in the paper: 100 mg.

<dbs-fmusim paramsurl="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference/Desvenlafaxine_MangasSanjun2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Desvenlafaxine_MangasSanjun2023_reference_params.json` · controls `Desvenlafaxine_MangasSanjun2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:21 UTC</sub>
