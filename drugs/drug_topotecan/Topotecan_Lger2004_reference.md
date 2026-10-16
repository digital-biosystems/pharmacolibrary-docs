<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;topotecan&quot;,&quot;href&quot;:&quot;drugs/drug_topotecan/&quot;},{&quot;label&quot;:&quot;L\u00e9ger_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topotecan_Lger2004_reference&quot;,&quot;label&quot;:&quot;L\u00e9ger_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_topotecan/Topotecan_Lger2004_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# topotecan — `Topotecan_Lger2004_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), qwen3.8-27b (partly confirmed, agreement 0.929). Primary extraction retained.">cross-check: partial 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for topotecan's clearance and volume of distribution; the covariate scenarios were not simulated.**

The model was built, but topotecan's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (CL and V), so that value has no SI equivalent. Extracted — topotecan: CL 62 1−θ3 × PS, V 27 1−θ3 × PS.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl=θ1 ×: this record has none, the second reading +47. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:41:50.475095+00:00) predates the upstream re-run (2026-10-07 14:22:45.442353+00:00). Current validate status: `extracted`.

## Citation
Léger F et al., Factors affecting pharmacokinetic varia…, British journal of cancer (2004)
  ·  DOI: [10.1038/sj.bjc.6601469](https://doi.org/10.1038/sj.bjc.6601469)

<div class="pk-model-meta" hidden drug="topotecan" model-id="Topotecan_Lger2004_reference" status="extracted" stale="true" population="patients" measured-compound="topotecan" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 2 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL=θ1 | `Q22` · CL | +62 | L/h | 1.7222222222222224e-05 | L/h | 39 | llm_confirmed (0.6) | tbl3:row18:col2, tbl3:row18:col4 | — | not captured |
| V1=θ4 | `Q61` · V | +27 | L | 0.027 | L | 33 | llm_confirmed (0.6) | tbl3:row21:col2, tbl3:row21:col4 | — | not captured |
| theta_cl_crcl_cl_1_2 | `Q900` · theta_cl_crcl_cl_1_2 | +20 | not captured | not captured | not captured | 20 | not captured (not captured) | tbl3:row19:col2, tbl3:row19:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Bioavailability: F(%)=θ7 | Q40 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL(l h−1)=(θ1+θ2 × CrCl) × (1−θ3 × PS)' (captured trailing unit '1−θ3 × PS' for child rows)
- dropped value-less row: 'Interday variability of CL'
- dropped value-less row: 'Central volume: V1 (l)=θ4 × body weight'
- dropped value-less row: 'Interday variability of V1'
- dropped value-less row: 'Peripheral volume: V2 (l)=θ5'
- dropped value-less row: 'Intercompartmental clearance: Q(l h−1)=θ6'
- dropped value-less row: 'Interday variability of F'
- dropped value-less row: 'Constant rate of absorption: Ka(h−1)=θ9'
- dropped value-less row: 'Lag time (h)=θ10'
- unit '1−θ3 × PS' inherited from a section-header row for CL (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: '1−θ3 × PS' (CL)
- dropped duplicate Q22 ('CL=θ1 × (1−θ3 × PS)', value '+47') — already have one for this compound
- unit '1−θ3 × PS' inherited from a section-header row for V1 (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: '1−θ3 × PS' (V1)
- implicit units: 'CL=θ1' → L/h (from the paper text: "The table footnote for Table 3 states 'CrCl for Cockcroft–Gault creatinine clearance (L h−1)', and the text explicitly i")
- implicit units: 'V1=θ4' → L (from the popPK convention: 'The paper does not explicitly state the unit for V1, but it is a volume of distribution parameter. In population PK, vol')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=topotecan
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1=θ4' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl3:row2:col1 = 'θ1=12.8 (4.8); θ2=2.1 (1.0); θ3=0.12 (0.09)'
- unparsed cell tbl3:row5:col1 = 'θ4=0.58 (0.13)'
- unparsed cell tbl3:row8:col1 = 'θ5=45.5 (7.0)'
- unparsed cell tbl3:row9:col1 = 'θ6=49.2 (16.9)'
- unparsed cell tbl3:row10:col1 = 'θ7=32.4 (3.9)'
- unparsed cell tbl3:row13:col1 = 'θ9=1.7 (0.6)'
- unparsed cell tbl3:row14:col1 = 'θ10=0.17 (0.03)'
- unparsed cell tbl3:row18:col1 = 'θ1=20.1 (2.3)'
- unparsed cell tbl3:row18:col3 = '&lt;0.001'
- unparsed cell tbl3:row19:col1 = 'θ1=11.8 (4.5); θ2=1.90 (1.16)'
- unparsed cell tbl3:row19:col3 = '&lt;0.001'
- unparsed cell tbl3:row20:col1 = 'θ1=21.8 (3.1); θ2=0.11 (0.10)'
- unparsed cell tbl3:row20:col3 = '&lt;0.001'
- unparsed cell tbl3:row21:col1 = 'θ4=35.2 (10.1)'
- unparsed cell tbl3:row21:col3 = '&lt;0.001'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (13/13 fields) | none |
| `qwen3.8-27b` | partly confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl=θ1 ×]` | not captured | +47 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl3:row18:col2', 'tbl3:row18:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl3:row21:col2', 'tbl3:row21:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 62.0 | not captured | not captured | ['tbl3:row18:col2', 'tbl3:row18:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 62 L/h | not captured | not captured | ['tbl3:row18:col2', 'tbl3:row18:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 27 L | not captured | not captured | ['tbl3:row21:col2', 'tbl3:row21:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_topotecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Léger_2004` / `Léger_2004::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_topotecan/models/modelica/_needs_review/Topotecan_Lger2004_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_topotecan/models/modelica/_needs_review/Topotecan_Lger2004_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_modelica.zip" download>Topotecan_Lger2004_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_fmi.zip" download>Topotecan_Lger2004_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_matlab.zip" download>Topotecan_Lger2004_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_matlab_simbio.zip" download>Topotecan_Lger2004_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_sbml.zip" download>Topotecan_Lger2004_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_cellml.zip" download>Topotecan_Lger2004_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference.svg" alt="Topotecan_Lger2004_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_topotecan/Topotecan_Lger2004_reference/Topotecan_Lger2004_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Topotecan_Lger2004_reference_params.json` · controls `Topotecan_Lger2004_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:22 UTC</sub>
