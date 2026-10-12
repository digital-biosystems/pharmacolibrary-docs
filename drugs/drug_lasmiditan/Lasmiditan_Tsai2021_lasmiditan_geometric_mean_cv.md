<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;lasmiditan&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/&quot;},{&quot;label&quot;:&quot;Tsai_2021 \u00b7 lasmiditan_geometric_mean_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv&quot;,&quot;label&quot;:&quot;Tsai_2021_lasmiditan_geometric_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lasmiditan — `Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.263). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 1.5, model 4.3).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent. Extracted — lasmiditan: Cmax 426 ng/mL, AUClast 2.22e+03 ng*h/mL, AUC∞ 2.05e+03 ng*h/mL, CL/F 48.9 L/h, V/F 261 L, kabs 0.295 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of aucinf: this record has 2050, the second reading none; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Tsai M et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z)

<div class="pk-model-meta" hidden drug="lasmiditan" model-id="Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv" status="needs_review" stale="false" population="pediatric patients with migraine" measured-compound="lasmiditan" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax, ng/mL | `Q32` · Cmax | 426 | ng/mL | not captured | [ng] / [ml] | 46.7 | exact (1.0) | Tsai_2021_table_2:row1:col1, Tsai_2021_table_2:row1:col2 | — | not captured |
| AUCtlast, ng*h/mL | `Q74` · AUClast | 2220 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | 38.2 | llm_confirmed (0.6) | Tsai_2021_table_2:row3:col1, Tsai_2021_table_2:row3:col2 | — | not captured |
| AUC∞, ng*h/mL | `Q17` · AUC∞ | 2050 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | 38.4 | exact (1.0) | Tsai_2021_table_2:row4:col1 | — | not captured |
| CL/F, L/h | `Q27` · CL/F | 48.9 | L/h | 1.3583333333333333e-05 | [l] / [h] | 38.4 | exact (1.0) | Tsai_2021_table_2:row6:col1 | — | not captured |
| Vz/F, L | `Q76` · V/F | 261 | L | 0.261 | [l] | 35.5 | exact (1.0) | Tsai_2021_table_2:row7:col1 | — | not captured |
| Ka, 1/h | `Q49` · kabs | 0.295 | 1/h | 8.194444444444444e-05 | 1/h | not captured | review_gapfill (0.7) | Tsai_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Cohort 1: 100 mg [n = 11][15 to ≤ 40 kg]' — extend the ontology if this is a real PK parameter (source ['Tsai_2021_table_2:row0:col1'])
- dropped unlinked row (NIL): 'Vss/F, L' — extend the ontology if this is a real PK parameter (source ['Tsai_2021_table_2:row8:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lasmiditan
- population split: 'lasmiditan geometric mean (cv%)' subgroup of Tsai_2021 (paper reports 2 populations: lasmiditan geometric mean (cv%), population mean (%see))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Tsai_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tsai_2021_table_2:row4:col2 = '2590 (13.7)c'
- unparsed cell Tsai_2021_table_2:row6:col2 = '77.1 (13.7)c'
- unparsed cell Tsai_2021_table_2:row7:col2 = '456 (11.3)c'
- unparsed cell Tsai_2021_table_2:row8:col2 = '534 (21.1)c'
- companion parameter table 2 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.263 (5/19 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[aucinf]` | 2050 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auctlast]` | 2220 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].rse_percent` | 38.4 | 22.7 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 48.9 | 107 | mismatch |
| `gpt-oss-120b` | `parameters[cmax]` | 426 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | not captured | 0 | mismatch |
| `gpt-oss-120b` | `parameters[mtt]` | not captured | 0.436 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 21.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight]` | not captured | 0.877 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_body_weight]` | not captured | 1.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 127 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 172 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 261 | not captured | only_one_extracted |

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
| C1_half_life_beta | pass | 4.0 | 3.7 | 0.925 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tsai_2021_table_2:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tsai_2021_table_2:row6:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tsai_2021_table_2:row1:col1', 'Tsai_2021_table_2:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tsai_2021:review'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tsai_2021_table_2:row3:col1', 'Tsai_2021_table_2:row3:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tsai_2021_table_2:row7:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 48.9 L/h | not captured | not captured | ['Tsai_2021_table_2:row6:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 261 L | not captured | not captured | ['Tsai_2021_table_2:row7:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=lasmiditan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | pass | 4.0 | 3.888509166905623 | 0.9721 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 4.0 | 3.888509166905623 | 0.9721 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.5 | 4.30060120240481 | 2.8671 | h→SI vs simulated h |
| T1_tmax | reference | skipped | not captured | 4.30060120240481 | not captured | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lasmiditan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tsai_2021` / `Tsai_2021::lasmiditan_geometric_mean_cv`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lasmiditan/models/modelica/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lasmiditan/models/modelica/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_lasmiditan/models/modelica/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_modelica.zip" download>Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_fmi.zip" download>Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_matlab.zip" download>Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_matlab_simbio.zip" download>Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_sbml.zip" download>Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_cellml.zip" download>Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv.svg" alt="Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.295 /h, F 1). Doses in the paper: 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_lasmiditan/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv/Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_params.json` · controls `Lasmiditan_Tsai2021_lasmiditan_geometric_mean_cv_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:26 UTC</sub>
