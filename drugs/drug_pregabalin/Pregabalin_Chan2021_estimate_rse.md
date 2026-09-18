<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;pregabalin&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/&quot;},{&quot;label&quot;:&quot;Chan_2021 \u00b7 estimate_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pregabalin_Bae2016_reference&quot;,&quot;label&quot;:&quot;Bae_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bae2016_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Chan2021_estimate_rse&quot;,&quot;label&quot;:&quot;Chan_2021_estimate_rse&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Chan2021_estimate_rse.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pregabalin_Chan2021_estimate_rse&quot;,&quot;label&quot;:&quot;Chan_2021_estimate_rse&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Chan2021_estimate_rse.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Pregabalin_Hong2016_estimate&quot;,&quot;label&quot;:&quot;Hong_2016_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Hong2016_estimate.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Hong2016_estimate&quot;,&quot;label&quot;:&quot;Hong_2016_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Hong2016_estimate.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Bender2009_reference&quot;,&quot;label&quot;:&quot;Bender_2009_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Bender2009_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Chan2021_model&quot;,&quot;label&quot;:&quot;Chan_2021_model&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Chan2021_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Chan2021_model&quot;,&quot;label&quot;:&quot;Chan_2021_model&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Chan2021_model.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Hong2016_description_unit&quot;,&quot;label&quot;:&quot;Hong_2016_description_unit&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Hong2016_description_unit.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Hong2016_description_unit&quot;,&quot;label&quot;:&quot;Hong_2016_description_unit&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Hong2016_description_unit.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_Park2023_reference&quot;,&quot;label&quot;:&quot;Park_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_Park2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pregabalin_van2018_reference&quot;,&quot;label&quot;:&quot;van_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pregabalin/Pregabalin_van2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pregabalin — `Pregabalin_Chan2021_estimate_rse`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines; the engineer's deviations are not documented and quantified. Evidence: T2_covariates_not_exercised; T6_deviations — got invented_absorption: not acceptable

**Steps:**
1. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
2. If the paper never reports it, the record cannot become a model.
3. Advisory only — the base model still replicates.
4. Check the record's covariate_definitions in _interpretv2.yaml.
5. Re-run the engineer for this drug if the covariate curves are wanted.
6. Read the .deviation.json and confirm each deviation names what changed and why.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Chan PLS; Marshall SF; McFadyen L; Liu J et al. (2021). Clinical pharmacology and therapeutics 110
  ·  DOI: [10.1002/cpt.2132](https://doi.org/10.1002/cpt.2132)

## Model component
<dbs-pgx drug="pregabalin" model-id="Pregabalin_Chan2021_estimate_rse" status="model_quarantined" stale="false" population="children (4-16 years) and adults with focal onset seizures" measured-compound="pregabalin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| body_weight_on_cl_fd | `Q900` · body_weight_on_cl_fd | 0.48 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2132-tbl-0002:row3:col2 | — | not captured |
| sex_on_cl_fe | `Q900` · sex_on_cl_fe | 0.88 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2132-tbl-0002:row4:col2 | — | not captured |
| V/F | `Q76` · V/F | 10.3 | not captured | not captured | not captured | not captured | exact (1.0) | cpt2132-tbl-0002:row6:col2, cpt2132-tbl-0002:row15:col2 | — | not captured |
| sex_on_v_fe | `Q900` · sex_on_v_fe | 0.79 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2132-tbl-0002:row7:col2 | — | not captured |
| body_weight_on_v_fd | `Q900` · body_weight_on_v_fd | 0.64 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2132-tbl-0002:row8:col2 | — | not captured |
| ka fastedf | `Q49` · kabs | 7.44 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cpt2132-tbl-0002:row9:col2 | — | not captured |
| T lag | `Q83` · tlag | 0.31 | not captured | not captured | not captured | not captured | llm (0.6) | cpt2132-tbl-0002:row12:col2 | — | not captured |
| u 1 Typical value of apparent clearance (L/h) | `Q27` · CL/F | 1.16 | L/h | 3.222222222222222e-07 | L/h | not captured | review_gapfill (0.7) | Bae_2016:review | — | not captured |
| NAT2 | `Q900` · NAT2 | {'*1/*1': 0.0, '*1/*6': -0.0783, 'C/C': -0.138, 'G/T': -0.2769, 'IM': -0.0496, 'PM': -0.0594, 'T/C': 0.007} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Model parameter' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row2:col2'])
- covariate level 'Body weight on CL/Fd' → Q900:body_weight_on_cl_fd = 0.48 (linear_fractional on the model)
- covariate level 'Sex on CL/Fe' → Q900:sex_on_cl_fe = 0.88 (linear_fractional on the model)
- dropped unlinked row (NIL): 'CLcr breakpoint' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row5:col2'])
- covariate level 'Sex on V/Fe' → Q900:sex_on_v_fe = 0.79 (linear_fractional on the model)
- covariate level 'Body weight on V/Fd' → Q900:body_weight_on_v_fd = 0.64 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Food: fedg' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row10:col2'])
- dropped unlinked row (NIL): 'Food: unknowng' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row11:col2'])
- dropped unlinked row (NIL): 'Food: fedh' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row13:col2'])
- dropped duplicate Q49 ('k a', value '103') — already have one for this compound
- dropped duplicate Q49 ('ka: fed', value '25.5') — already have one for this compound
- dropped unlinked row (NIL): 'Phase III adult' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row19:col2', 'cpt2132-tbl-0002:row23:col2'])
- dropped unlinked row (NIL): 'Phase I pediatric' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row20:col2'])
- dropped unlinked row (NIL): 'Phase III pediatric' — extend the ontology if this is a real PK parameter (source ['cpt2132-tbl-0002:row21:col2', 'cpt2132-tbl-0002:row24:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pregabalin
- population split: 'estimate [rse]' subgroup of Chan_2021 (paper reports 2 populations: estimate [rse], model)
- gap-filled Q27 (CL/F) from Bae_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cpt2132-tbl-0002:row3:col1 = '0.52 [4.72]'
- unparsed cell cpt2132-tbl-0002:row4:col1 = '0.92 [2.00]'
- unparsed cell cpt2132-tbl-0002:row6:col1 = '39.8 [1.62] L'
- unparsed cell cpt2132-tbl-0002:row7:col1 = '0.83 [2.48]'
- unparsed cell cpt2132-tbl-0002:row8:col1 = '0.70 [4.59]'
- unparsed cell cpt2132-tbl-0002:row10:col1 = '0.71 [2.39]'
- unparsed cell cpt2132-tbl-0002:row11:col1 = '1.22 [3.26]'
- unparsed cell cpt2132-tbl-0002:row12:col1 = '0.32 [1.52] hr'
- unparsed cell cpt2132-tbl-0002:row13:col1 = '0.43 [10.5]'
- unparsed cell cpt2132-tbl-0002:row14:col2 = '20.2 [18.7]%'
- unparsed cell cpt2132-tbl-0002:row14:col4 = '27.4%'
- unparsed cell cpt2132-tbl-0002:row15:col1 = '12.8 [21.7]%'
- unparsed cell cpt2132-tbl-0002:row15:col3 = '60.7%'
- unparsed cell cpt2132-tbl-0002:row16:col1 = '117 [13.9]%'
- unparsed cell cpt2132-tbl-0002:row16:col3 = '46.2%'
- unparsed cell cpt2132-tbl-0002:row17:col1 = '57.9 [74.4]%'
- unparsed cell cpt2132-tbl-0002:row17:col3 = '89.6%'
- unparsed cell cpt2132-tbl-0002:row18:col2 = '16.6 [10.1]%'
- unparsed cell cpt2132-tbl-0002:row18:col4 = '8.2%'
- unparsed cell cpt2132-tbl-0002:row19:col1 = '28.9 [7.49]%'
- unparsed cell cpt2132-tbl-0002:row19:col3 = '13.5%'
- unparsed cell cpt2132-tbl-0002:row20:col1 = '29.8 [22.7]%'
- unparsed cell cpt2132-tbl-0002:row20:col3 = '11.4%'
- unparsed cell cpt2132-tbl-0002:row21:col1 = '35.0 [21.0]%'
- unparsed cell cpt2132-tbl-0002:row21:col3 = '10.3%'
- unparsed cell cpt2132-tbl-0002:row22:col4 = '5.15%'
- unparsed cell cpt2132-tbl-0002:row23:col3 = '13.5%'
- unparsed cell cpt2132-tbl-0002:row24:col3 = '10.3%'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bae_2016:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.16 L/h | not captured | not captured | ['Bae_2016:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pregabalin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chan_2021` / `Chan_2021::estimate_rse`)
- model: `../../../knowledgebase/drugs/drug_pregabalin/models/modelica/_needs_review/Pregabalin_Chan2021_estimate_rse.mo`
- deviation: `../../../knowledgebase/drugs/drug_pregabalin/models/modelica/_needs_review/Pregabalin_Chan2021_estimate_rse.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
