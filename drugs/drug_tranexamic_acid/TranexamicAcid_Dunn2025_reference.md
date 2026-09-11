# tranexamic acid — `TranexamicAcid_Dunn2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked

**Steps:**
1. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
2. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Dunn A; Felfeli M; Seifert SM; Gilliot S; Ducloy-Bouthors AS; Shakur-Still H; et al. et al. (2025). Journal of clinical pharmacology 65
  ·  DOI: [10.1002/jcph.70031](https://doi.org/10.1002/jcph.70031)

## Model component
<dbs-pgx drug="tranexamic acid" model-id="TranexamicAcid_Dunn2025_reference" status="rejected" stale="false" population="pregnant individuals" measured-compound="tranexamic acid" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL b | `Q23` · CLb | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | jcph70031-tbl-0002:row3:col1, jcph70031-tbl-0002:row3:col2 | — | not captured |
| Vc b | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | jcph70031-tbl-0002:row4:col1, jcph70031-tbl-0002:row4:col2 | — | not captured |
| Q b | `Q54` · Qb | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | jcph70031-tbl-0002:row5:col1, jcph70031-tbl-0002:row5:col2 | — | not captured |
| Vp b | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | jcph70031-tbl-0002:row6:col1, jcph70031-tbl-0002:row6:col2 | — | not captured |
| Tlagoral | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | jcph70031-tbl-0002:row10:col2 | — | not captured |
| weight_on_cl_and_q | `Q900` · weight_on_cl_and_q | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | jcph70031-tbl-0002:row12:col2 | — | not captured |
| weight_on_vc_and_vp | `Q900` · weight_on_vc_and_vp | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | jcph70031-tbl-0002:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Kaoral' — extend the ontology if this is a real PK parameter (source ['jcph70031-tbl-0002:row7:col1', 'jcph70031-tbl-0002:row7:col2'])
- dropped unlinked row (NIL): 'KaIM' — extend the ontology if this is a real PK parameter (source ['jcph70031-tbl-0002:row8:col1', 'jcph70031-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Foral' — extend the ontology if this is a real PK parameter (source ['jcph70031-tbl-0002:row9:col2'])
- covariate level 'Weight on CL and Q' → Q900:weight_on_cl_and_q = 0.89 (linear_fractional on Q23)
- covariate level 'Weight on Vc and Vp' → Q900:weight_on_vc_and_vp = 0.44 (linear_fractional on Q23)
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['jcph70031-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['jcph70031-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Q' from footnote/prose loose number None (source ['jcph70031-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V' from footnote/prose loose number None (source ['jcph70031-tbl-0002:footnote']); the table cell was unparseable — needs review
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc b); Q64 (Vp b)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tranexamic acid
- model equation 'CLi = 8.59*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model equation 'Vci = 10.7*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model equation 'Qi = 28.9*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model equation 'Vpi = 15.0*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter

**Extraction notes:**
- unparsed cell jcph70031-tbl-0002:row3:col3 = '8.55 [8.07, 9.08]'
- unparsed cell jcph70031-tbl-0002:row4:col3 = '10.6 [8.38, 13.9]'
- unparsed cell jcph70031-tbl-0002:row5:col3 = '28.1 [19.6, 47.2]'
- unparsed cell jcph70031-tbl-0002:row6:col3 = '15.1 [13.2, 16.9]'
- unparsed cell jcph70031-tbl-0002:row7:col3 = '0.18 [0.16, 0.32]'
- unparsed cell jcph70031-tbl-0002:row8:col3 = '2.36 [1.89, 3.10]'
- unparsed cell jcph70031-tbl-0002:row9:col3 = '0.54 [0.38, 0.73]'
- unparsed cell jcph70031-tbl-0002:row10:col3 = '0.18 [0.12, 0.31]'
- unparsed cell jcph70031-tbl-0002:row12:col3 = '0.88 [0.57, 1.18]'
- unparsed cell jcph70031-tbl-0002:row13:col3 = '0.45 [0.25, 0.73]'
- unparsed cell jcph70031-tbl-0002:row21:col3 = '0.69 [0.52, 0.88]'
- unparsed cell jcph70031-tbl-0002:row22:col3 = '26.7 [22.7, 29.5]'
- LLM selected parameter table(s) 2
- captured model equation CLi = 8.59*(WT/8)^0.75
- captured model equation Vci = 10.7*(WT/8)^0.75
- captured model equation Qi = 28.9*(WT/8)^0.75
- captured model equation Vpi = 15.0*(WT/8)^0.75

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.59 | not captured | not captured | ['jcph70031-tbl-0002:row3:col1', 'jcph70031-tbl-0002:row3:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tranexamic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dunn_2025` / `Dunn_2025::pregnant individuals`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
