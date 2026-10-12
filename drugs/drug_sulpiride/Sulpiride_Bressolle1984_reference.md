<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/&quot;},{&quot;label&quot;:&quot;Bressolle_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulpiride — `Sulpiride_Bressolle1984_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulpiride, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Bressolle F et al., Sulpiride pharmacokinetics in humans af…, Journal of pharmaceutical s… (1984)
  ·  DOI: [10.1002/jps.2600730826](https://doi.org/10.1002/jps.2600730826)

<div class="pk-model-meta" hidden drug="sulpiride" model-id="Sulpiride_Bressolle1984_reference" status="curated_candidate" stale="false" population="healthy male subjects" measured-compound="sulpiride" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| initial volume of distribution | `Q61` · V | 0.145 | L/kg | 0.01015 | [l] / [kg] | not captured | llm_corrected (0.6) | Bressolle_1984:abstract | — | not captured |
| steady-state volume of distribution | `Q65` · Vss | 0.639 | L/kg | 0.04473 | [l] / [kg] | not captured | llm_corrected (0.6) | Bressolle_1984:abstract | — | not captured |
| total clearance | `Q22` · CL | 89.8 | mL/min | 1.4966666666666664e-06 | [ml] / [min] | not captured | exact (1.0) | Bressolle_1984:abstract, Bressolle_1984:abstract | — | not captured |
| renal clearance | `Q26` · CLR | 83.0 | mL/min | 1.3833333333333334e-06 | [ml] / [min] | not captured | exact (1.0) | Bressolle_1984:abstract | — | not captured |
| f | `Q40` · Fab | 0.15 | not captured | not captured | not captured | not captured | exact (1.0) | Bressolle_1984:abstract | — | not captured |
| administered dose recovered unchanged in urine | `Q44` · fe | 93.1 | % | not captured | [%] | not captured | llm (0.6) | Bressolle_1984:abstract | — | not captured |
| Ka1,sul | `Q49` · kabs | 1.66 | h−1 | 0.0004611111111111111 | 1/h | not captured | review_gapfill (0.7) | Yao_2019:review | — | not captured |
| Tlag | `Q83` · tlag | 1.5 | h | 5400.0 | h | not captured | review_gapfill (0.7) | Yao_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q26 ('renal clearance of unbound drug', value 97.6) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulpiride
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'initial volume of distribution' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Yao_2019's review values (primary lacked it)
- gap-filled Q83 (tlag) from Yao_2019's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Bressolle_1984_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[administered dose recovered unchanged in urine]` | 93.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 0.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 0.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[initial volume of distribution]` | 0.145 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[initial volume of distribution]` | not captured | 0.145 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1,sul]` | 1.66 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[of the administered dose being recovered unchanged in urine]` | not captured | 93.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | 83.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | not captured | 83.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.639 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | not captured | 0.639 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 1.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` | 89.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` | not captured | 89.8 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulpiride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulpiride | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bressolle_1984:abstract', 'Bressolle_1984:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bressolle_1984:abstract'] |
| C5_dimension_Q44 | pass | dimensionless | not captured | not captured | not captured | ['Bressolle_1984:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Yao_2019:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bressolle_1984:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bressolle_1984:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Yao_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 89.8 | not captured | not captured | ['Bressolle_1984:abstract', 'Bressolle_1984:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.39 L/h | not captured | not captured | ['Bressolle_1984:abstract', 'Bressolle_1984:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.1 L | not captured | not captured | ['Bressolle_1984:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 44.7 L | not captured | not captured | ['Bressolle_1984:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=sulpiride) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulpiride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bressolle_1984` / `Bressolle_1984::reference`)
- model: `../../../knowledgebase/drugs/drug_sulpiride/models/modelica/Sulpiride_Bressolle1984_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_sulpiride/models/modelica/Sulpiride_Bressolle1984_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_sulpiride/models/modelica/Sulpiride_Bressolle1984_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_modelica.zip" download>Sulpiride_Bressolle1984_reference_modelica.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_fmi.zip" download>Sulpiride_Bressolle1984_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_matlab.zip" download>Sulpiride_Bressolle1984_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_matlab_simbio.zip" download>Sulpiride_Bressolle1984_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_sbml.zip" download>Sulpiride_Bressolle1984_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_cellml.zip" download>Sulpiride_Bressolle1984_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference.svg" alt="Sulpiride_Bressolle1984_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 800 mg, single dose, first-order absorption (ka 1.66 /h, lag 90 min, F 0.15). _The paper's dose was not captured; the default is the WHO ATC DDD 800 mg oral (N05AL01) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference/Sulpiride_Bressolle1984_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Sulpiride_Bressolle1984_reference_params.json` · controls `Sulpiride_Bressolle1984_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:33 UTC</sub>
