<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;allopurinol&quot;,&quot;href&quot;:&quot;drugs/drug_allopurinol/&quot;},{&quot;label&quot;:&quot;Wen_2023 \u00b7 base&quot;}]"></div>

# allopurinol — `Allopurinol_Wen2023_base`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `allopurinol`, measured `oxypurinol`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wen YF; Brundage RC; Roman YM; Culhane-Pera KA; Straka RJ et al. (2023). British journal of clinical pharmacology 89
  ·  DOI: [10.1111/bcp.15792](https://doi.org/10.1111/bcp.15792)

## Model component
<dbs-pgx drug="allopurinol" model-id="Allopurinol_Wen2023_base" status="curated_candidate" stale="false" population="Hmong adults with gout and/or hyperuricemia" measured-compound="oxypurinol" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/fm (L/h) | `Q351` · CLm/F | 1 | L/h | 2.7777777777777776e-07 | [l] / [h] | not captured | exact (1.0) | T2:row2:col1 | — | not captured |
| V/fm (L) | `Q367` · Vm/F | 47.7 | L | 0.047700000000000006 | [l] | not captured | exact (1.0) | T2:row3:col1 | — | not captured |
| Kfm (/h) | `Q305` · kfm | 1.1 | /h | 0.0003055555555555556 | [1] / [h] | not captured | exact (1.0) | T2:row4:col1 | — | 27.9 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'BLurate (mg/dL)' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1'])
- dropped PD-category row 'Imax (mg/dL)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1'])
- dropped PD-category row 'IC50 (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=oxypurinol
- model-stage split: 'base model' is the base model of Wen_2023 (paper reports 2 stages: base model, final model); same population, different model-building step
- review gap-fill skipped: this record measures 'oxypurinol', not allopurinol — the review values are the parent's
- unit_dimension_unknown: '/h' (kfm)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q27 (CL/F) from Day_2007's review values (primary lacked it)
- gap-filled Q76 (V/F) from Day_2007's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Ekobena_2025's review values (primary lacked it)
- unit re-normalised: kfm '/h' now converts (value unchanged)

**Extraction notes:**
- unparsed cell T2:row2:col3 = '1.05 (0.92, 1.22)'
- unparsed cell T2:row3:col3 = '58.8 (50.8, 70.7)'
- unparsed cell T2:row5:col3 = '9.0 (8.5, 9.5)'
- unparsed cell T2:row6:col3 = '7.7 (5.3, 11.3)'
- unparsed cell T2:row7:col3 = '18.2 (7.5, 32.8)'
- unparsed cell T2:row9:col3 = '0.45 (0.18, 0.73)'
- unparsed cell T2:row10:col3 = '0.32 (0.13, 0.55)'
- unparsed cell T2:row12:col3 = '−0.18 (−0.33, −0.036)'
- unparsed cell T2:row13:col3 = '−0.27 (−0.38, −0.13)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row4:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row3:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=oxypurinol) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no structural disposition parameters in record |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_allopurinol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wen_2023` / `Wen_2023::base`)
- model: `../../../knowledgebase/drugs/drug_allopurinol/models/modelica/Allopurinol_Wen2023_base.mo`
- deviation: `../../../knowledgebase/drugs/drug_allopurinol/models/modelica/Allopurinol_Wen2023_base.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_allopurinol/models/modelica/Allopurinol_Wen2023_base.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base.svg" alt="Allopurinol_Wen2023_base diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C_enteral.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_modelica.zip" download>Allopurinol_Wen2023_base_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_fmi.zip" download>Allopurinol_Wen2023_base_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_matlab.zip" download>Allopurinol_Wen2023_base_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_matlab_simbio.zip" download>Allopurinol_Wen2023_base_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_sbml.zip" download>Allopurinol_Wen2023_base_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_cellml.zip" download>Allopurinol_Wen2023_base_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_allopurinol/Allopurinol_Wen2023_base/Allopurinol_Wen2023_base_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Allopurinol_Wen2023_base_params.json` · controls `Allopurinol_Wen2023_base_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
