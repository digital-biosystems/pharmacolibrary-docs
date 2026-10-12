<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;daclatasvir&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/&quot;},{&quot;label&quot;:&quot;Osawa_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daclatasvir_Osawa2018_reference&quot;,&quot;label&quot;:&quot;Osawa_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Daclatasvir_Wang2018_dcv_estimate_rse&quot;,&quot;label&quot;:&quot;Wang_2018_dcv_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daclatasvir/Daclatasvir_Wang2018_dcv_estimate_rse.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daclatasvir — `Daclatasvir_Osawa2018_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Kabs has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kabs), so that value has no SI equivalent. Extracted — daclatasvir: CL/F 5.29 L/h, V/F 64.2 L, kabs 0.865 h‐1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has daclatasvir, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:19:57.143033+00:00) predates the upstream re-run (2026-10-07 15:33:57.963968+00:00). Current validate status: `extracted`.

## Citation
Osawa M et al., Population Pharmacokinetic Analysis for…, Journal of clinical pharmac… (2018)
  ·  DOI: [10.1002/jcph.1274](https://doi.org/10.1002/jcph.1274)

<div class="pk-model-meta" hidden drug="daclatasvir" model-id="Daclatasvir_Osawa2018_reference" status="extracted" stale="true" population="Japanese adults with chronic HCV genotype 1 infection" measured-compound="daclatasvir" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 5.29 | L/h | 1.4694444444444445e-06 | [l] / [h] | not captured | exact (1.0) | jcph1274-tbl-0002:row3:col2, jcph1274-tbl-0002:row3:col3 | — | not captured |
| V/F (L) | `Q76` · V/F | 64.2 | L | 0.06420000000000001 | [l] | not captured | exact (1.0) | jcph1274-tbl-0002:row4:col2, jcph1274-tbl-0002:row4:col3 | — | not captured |
| Ka (h‐1) | `Q49` · kabs | 0.865 | 1/h | 0.0002402777777777778 | 1/h | not captured | exact (1.0) | jcph1274-tbl-0002:row5:col2, jcph1274-tbl-0002:row5:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: 'σ' routed out of structural estimates ('Residual error')
- unit_dimension_unknown: 'h‐1' (kabs)
- dropped duplicate Q27 ('CL/F ∼SEX', value '0.0274') — already have one for this compound
- dropped duplicate Q27 ('CL/F ∼TX', value '0.0336') — already have one for this compound
- dropped duplicate Q27 ('CL/F ∼BCRCL', value '0.235') — already have one for this compound
- dropped duplicate Q76 ('V/F ∼BBWT', value '0.605') — already have one for this compound
- dropped duplicate Q27 ('CL/F', value '0.155') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '0.145') — already have one for this compound
- dropped duplicate Q49 ('Ka', value '0.756') — already have one for this compound
- dropped duplicate Q27 ('CL/F: V/F', value '0.141') — already have one for this compound
- dropped value-less row: 'AST'
- dropped value-less row: 'BAST'
- dropped value-less row: 'BBWT'
- dropped value-less row: 'BCRCL'
- dropped value-less row: 'CI'
- dropped value-less row: 'CIRHOSIS'
- dropped value-less row: 'FORM'
- dropped value-less row: 'TX'
- implicit units: 'Ka (h‐1)' → 1/h (from the paper text: 'Text states Ka was 0.865 h‐1 (5.97 RSE%).')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=daclatasvir
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph1274-tbl-0002:row3:col1 = 'θ1'
- unparsed cell jcph1274-tbl-0002:row3:col4 = '4.98‐5.59'
- unparsed cell jcph1274-tbl-0002:row4:col1 = 'θ2'
- unparsed cell jcph1274-tbl-0002:row4:col4 = '60.1‐68.2'
- unparsed cell jcph1274-tbl-0002:row5:col1 = 'θ3'
- unparsed cell jcph1274-tbl-0002:row5:col4 = '0.753‐0.974'
- unparsed cell jcph1274-tbl-0002:row6:col1 = 'θ6'
- unparsed cell jcph1274-tbl-0002:row6:col2 = '‐0.110'
- unparsed cell jcph1274-tbl-0002:row6:col4 = '‐0.197 to ‐0.053'
- unparsed cell jcph1274-tbl-0002:row7:col1 = 'θ8'
- unparsed cell jcph1274-tbl-0002:row7:col2 = '‐0.122'
- unparsed cell jcph1274-tbl-0002:row7:col4 = '‐0.189‐0.132'
- unparsed cell jcph1274-tbl-0002:row8:col1 = 'θ10'
- unparsed cell jcph1274-tbl-0002:row8:col4 = '0.142‐0.333'
- unparsed cell jcph1274-tbl-0002:row9:col1 = 'θ14'
- unparsed cell jcph1274-tbl-0002:row9:col4 = '0.405‐0.974'
- unparsed cell jcph1274-tbl-0002:row11:col1 = 'ω1,1'
- unparsed cell jcph1274-tbl-0002:row11:col4 = '0.0176‐0.182'
- unparsed cell jcph1274-tbl-0002:row12:col1 = 'ω2,2'
- unparsed cell jcph1274-tbl-0002:row12:col4 = '0.0168‐0.186'
- unparsed cell jcph1274-tbl-0002:row13:col1 = 'ω3,3'
- unparsed cell jcph1274-tbl-0002:row13:col4 = '0.590‐0.968'
- unparsed cell jcph1274-tbl-0002:row14:col1 = 'ω1,2'
- unparsed cell jcph1274-tbl-0002:row14:col4 = '0.00099‐0.171'
- unparsed cell jcph1274-tbl-0002:row15:col1 = 'ω4,4'
- unparsed cell jcph1274-tbl-0002:row15:col4 = '0.072‐0.148'
- unparsed cell jcph1274-tbl-0002:row17:col1 = 'θ4'
- unparsed cell jcph1274-tbl-0002:row17:col4 = '0.358‐0.408'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | daclatasvir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | daclatasvir | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1274-tbl-0002:row3:col2', 'jcph1274-tbl-0002:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph1274-tbl-0002:row5:col2', 'jcph1274-tbl-0002:row5:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1274-tbl-0002:row4:col2', 'jcph1274-tbl-0002:row4:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.29 L/h | not captured | not captured | ['jcph1274-tbl-0002:row3:col2', 'jcph1274-tbl-0002:row3:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 64.2 L | not captured | not captured | ['jcph1274-tbl-0002:row4:col2', 'jcph1274-tbl-0002:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_daclatasvir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Osawa_2018` / `Osawa_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_modelica.zip" download>Daclatasvir_Osawa2018_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_fmi.zip" download>Daclatasvir_Osawa2018_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_matlab.zip" download>Daclatasvir_Osawa2018_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_matlab_simbio.zip" download>Daclatasvir_Osawa2018_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_sbml.zip" download>Daclatasvir_Osawa2018_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_cellml.zip" download>Daclatasvir_Osawa2018_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference.svg" alt="Daclatasvir_Osawa2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 0.865 /h, F 1). Doses in the paper: 10, 60 mg.

<dbs-fmusim paramsurl="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_daclatasvir/Daclatasvir_Osawa2018_reference/Daclatasvir_Osawa2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Daclatasvir_Osawa2018_reference_params.json` · controls `Daclatasvir_Osawa2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:33 UTC</sub>
