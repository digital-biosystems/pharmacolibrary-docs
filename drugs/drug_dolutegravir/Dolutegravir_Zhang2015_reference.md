<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dolutegravir&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/&quot;},{&quot;label&quot;:&quot;Zhang_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolutegravir_Kengo2023_reference&quot;,&quot;label&quot;:&quot;Kengo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/Dolutegravir_Kengo2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dolutegravir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dolutegravir — `Dolutegravir_Zhang2015_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — dolutegravir: CL/F 0.901 l h–1, V/F 17.4 l, kabs 2.21 h–1, tlag 0.262 h, CL 1.16.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has dolutegravir, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:20:56.651326+00:00) predates the upstream re-run (2026-10-07 16:25:37.161086+00:00). Current validate status: `extracted`.

## Citation
Zhang J et al., Population pharmacokinetics of dolutegr…, British journal of clinical… (2015)
  ·  DOI: [10.1111/bcp.12639](https://doi.org/10.1111/bcp.12639)

<div class="pk-model-meta" hidden drug="dolutegravir" model-id="Dolutegravir_Zhang2015_reference" status="extracted" stale="true" population="HIV-infected treatment-naive adults" measured-compound="dolutegravir" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h–1)† | `Q27` · CL/F | 2.11 | l h–1 | 5.861111111111111e-07 | [l] / [h] | not captured | space_fold (0.95) | tbl3:row2:col1, tbl3:row2:col2, tbl3:row2:col5 | — | not captured |
| V/F (l)‡ | `Q76` · V/F | 2.49 | l | 0.0024900000000000005 | [l] | not captured | space_fold (0.95) | tbl3:row3:col1, tbl3:row3:col2, tbl3:row3:col5 | — | not captured |
| ka (h–1) | `Q49` · kabs | 15.4 | h–1 | 0.004277777777777778 | [1] / [h] | not captured | exact (1.0) | tbl3:row4:col1, tbl3:row4:col2, tbl3:row4:col5 | — | not captured |
| ALAG (h) | `Q83` · tlag | 32.7 | h | 117720.00000000001 | [h] | not captured | exact (1.0) | tbl3:row5:col1, tbl3:row5:col2, tbl3:row5:col5 | — | not captured |
| F ∼ GENDER§ | `Q40` · Fab | 3.27 | not captured | not captured | not captured | not captured | llm (0.6) | tbl3:row10:col1, tbl3:row10:col2, tbl3:row10:col5 | — | not captured |
| CL ∼ SMOKING | `Q22` · CL | 2.45 | L/h | 6.805555555555557e-07 | L/h | not captured | llm_confirmed (0.6) | tbl3:row11:col1, tbl3:row11:col2, tbl3:row11:col5 | — | 0.0296 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2CL' routed out of structural estimates ('Inter-individual or inter-occasion variability')
- table section iiv: 'ω2V' routed out of structural estimates ('Inter-individual or inter-occasion variability')
- table section iiv: 'ω2ka' routed out of structural estimates ('Inter-individual or inter-occasion variability')
- table section iiv: 'ω2IOV-CL' routed out of structural estimates ('Inter-individual or inter-occasion variability')
- table section residual_error: 'σ2prop' routed out of structural estimates ('Residual variability')
- column 'bootstrap estimates*' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q27 ('CL/F ∼ proof-of-concept', value '4.83') — already have one for this compound
- dropped unlinked row (NIL): 'F ∼ 10 mg§' — extend the ontology if this is a real PK parameter (source ['tbl3:row7:col1', 'tbl3:row7:col2', 'tbl3:row7:col5'])
- dropped duplicate Q27 ('CL/F ∼ WT', value '16.9') — already have one for this compound
- dropped duplicate Q76 ('V/F ∼ WT', value '10.8') — already have one for this compound
- dropped duplicate Q22 ('CL ∼ AGE', value '23.7') — already have one for this compound
- dropped duplicate Q22 ('CL ∼ BILIRUBIN', value '14.0') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tbl3:footnote']); the table cell was unparseable — needs review
- dropped value-less row: '95% CI'
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['tbl3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['tbl3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 9 (source ['tbl3:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL ∼ SMOKING' → L/h (from the paper text: "The paper states units for apparent clearance: 'CL/F = 0.901 (0.864, 0.938) l h–1' (Abstract: 'apparent clearance ... 0.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dolutegravir
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl3:row2:col3 = '0.864, 0.938'
- unparsed cell tbl3:row2:col6 = '0.866, 0.940'
- unparsed cell tbl3:row3:col3 = '16.5, 18.3'
- unparsed cell tbl3:row3:col6 = '16.6, 18.2'
- unparsed cell tbl3:row4:col3 = '1.56, 2.92'
- unparsed cell tbl3:row4:col6 = '1.73, 3.10'
- unparsed cell tbl3:row5:col3 = '0.0942, 0.432'
- unparsed cell tbl3:row5:col6 = '0.0833, 0.393'
- unparsed cell tbl3:row6:col3 = '1.22, 1.48'
- unparsed cell tbl3:row6:col6 = '1.24, 1.51'
- unparsed cell tbl3:row7:col3 = '1.17, 1.31'
- unparsed cell tbl3:row7:col6 = '1.17, 1.31'
- unparsed cell tbl3:row8:col3 = '0.293, 0.583'
- unparsed cell tbl3:row8:col6 = '0.290, 0.582'
- unparsed cell tbl3:row9:col3 = '0.605, 0.931'
- unparsed cell tbl3:row9:col6 = '0.616, 0.944'
- unparsed cell tbl3:row10:col3 = '1.13, 1.29'
- unparsed cell tbl3:row10:col6 = '1.13, 1.30'
- unparsed cell tbl3:row11:col3 = '1.10, 1.22'
- unparsed cell tbl3:row11:col6 = '1.10, 1.22'
- unparsed cell tbl3:row12:col3 = '0.103, 0.283'
- unparsed cell tbl3:row12:col6 = '0.105, 0.283'
- unparsed cell tbl3:row13:col3 = '–0.269, –0.153'
- unparsed cell tbl3:row13:col6 = '–0.267, –0.152'
- unparsed cell tbl3:row15:col3 = '0.0451, 0.0651'
- unparsed cell tbl3:row15:col6 = '0.0449, 0.0652'
- unparsed cell tbl3:row16:col3 = '0.00794, 0.0297'
- unparsed cell tbl3:row16:col6 = '0.00714, 0.0295'
- unparsed cell tbl3:row17:col3 = '0.0535, 0.395'
- unparsed cell tbl3:row17:col6 = '0.0613, 1.11'
- unparsed cell tbl3:row18:col3 = '0.0205, 0.0387'
- unparsed cell tbl3:row18:col6 = '0.0184, 0.0407'
- unparsed cell tbl3:row20:col3 = '0.0602, 0.0806'
- unparsed cell tbl3:row20:col6 = '0.0555, 0.0830'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag].value` | 32.7 | 0.262 | mismatch |
| `gpt-oss-120b` | `parameters[cl ∼ smoking].value` | 2.45 | 1.16 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f (l h-1)].value` | 2.11 | 0.901 | mismatch |
| `gpt-oss-120b` | `parameters[f ∼ gender].value` | 3.27 | 1.21 | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 15.4 | 2.21 | mismatch |
| `gpt-oss-120b` | `parameters[v/f (l)].value` | 2.49 | 17.4 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | dolutegravir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | dolutegravir | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl3:row11:col1', 'tbl3:row11:col2', 'tbl3:row11:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl3:row2:col1', 'tbl3:row2:col2', 'tbl3:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl3:row4:col1', 'tbl3:row4:col2', 'tbl3:row4:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl3:row3:col1', 'tbl3:row3:col2', 'tbl3:row3:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tbl3:row5:col1', 'tbl3:row5:col2', 'tbl3:row5:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.45 L/h | not captured | not captured | ['tbl3:row11:col1', 'tbl3:row11:col2', 'tbl3:row11:col5'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.11 L/h | not captured | not captured | ['tbl3:row2:col1', 'tbl3:row2:col2', 'tbl3:row2:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.49 L | not captured | not captured | ['tbl3:row3:col1', 'tbl3:row3:col2', 'tbl3:row3:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dolutegravir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2015` / `Zhang_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_modelica.zip" download>Dolutegravir_Zhang2015_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_fmi.zip" download>Dolutegravir_Zhang2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_matlab.zip" download>Dolutegravir_Zhang2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_matlab_simbio.zip" download>Dolutegravir_Zhang2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_sbml.zip" download>Dolutegravir_Zhang2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_cellml.zip" download>Dolutegravir_Zhang2015_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference.svg" alt="Dolutegravir_Zhang2015_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 15.4 /h, lag 1.96e+03 min, F 1). Doses in the paper: 10, 25, 50 mg.

<dbs-fmusim paramsurl="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Dolutegravir_Zhang2015_reference_params.json` · controls `Dolutegravir_Zhang2015_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:25 UTC</sub>
