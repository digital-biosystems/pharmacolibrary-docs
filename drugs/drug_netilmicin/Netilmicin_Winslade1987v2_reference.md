# netilmicin — `Netilmicin_Winslade1987v2_reference`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Winslade NE; Adelman MH; Evans EJ; Schentag JJ et al. (1987). Antimicrobial agents and chemotherapy 31
  ·  DOI: [10.1128/AAC.31.4.605](https://doi.org/10.1128/AAC.31.4.605)

## Model component
<dbs-pgx drug="netilmicin" model-id="Netilmicin_Winslade1987v2_reference" status="not_modelled" stale="false" population="normal volunteers" measured-compound="tobramycin and netilmicin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| total body clearance for netilmicin | `Q22` · CL | —(suppressed) | ml/min | — | L/h | not captured | boundary (0.8) | Winslade_1987_2:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Subject' — extend the ontology if this is a real PK parameter (source ['tab_2:row0:col1', 'tab_2:row0:col6'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col1', 'tab_2:row1:col2', 'tab_2:row1:col3', 'tab_2:row1:col4', 'tab_2:row1:col5', 'tab_2:row1:col6', 'tab_2:row1:col7', 'tab_2:row1:col8'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4', 'tab_2:row2:col5', 'tab_2:row2:col6', 'tab_2:row2:col7', 'tab_2:row2:col8'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col1', 'tab_2:row3:col2', 'tab_2:row3:col3', 'tab_2:row3:col4', 'tab_2:row3:col5', 'tab_2:row3:col6', 'tab_2:row3:col7', 'tab_2:row3:col8'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row4:col6', 'tab_2:row4:col7', 'tab_2:row4:col8'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4', 'tab_2:row5:col5', 'tab_2:row5:col6', 'tab_2:row5:col7', 'tab_2:row5:col8'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6', 'tab_2:row6:col7', 'tab_2:row6:col8'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col1', 'tab_2:row7:col2', 'tab_2:row7:col3', 'tab_2:row7:col4', 'tab_2:row7:col5', 'tab_2:row7:col6', 'tab_2:row7:col7', 'tab_2:row7:col8'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3', 'tab_2:row8:col4', 'tab_2:row8:col5', 'tab_2:row8:col6', 'tab_2:row8:col7', 'tab_2:row8:col8'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col3', 'tab_2:row9:col4', 'tab_2:row9:col5', 'tab_2:row9:col6', 'tab_2:row9:col7', 'tab_2:row9:col8'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1', 'tab_2:row10:col2', 'tab_2:row10:col3', 'tab_2:row10:col4', 'tab_2:row10:col5', 'tab_2:row10:col6', 'tab_2:row10:col7', 'tab_2:row10:col8'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1', 'tab_2:row11:col2', 'tab_2:row11:col3', 'tab_2:row11:col4', 'tab_2:row11:col5', 'tab_2:row11:col6', 'tab_2:row11:col7', 'tab_2:row11:col8'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col2', 'tab_2:row12:col5', 'tab_2:row12:col6', 'tab_2:row12:col7'])
- salvaged Q22 ('total body clearance for netilmicin'=48) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tobramycin and netilmicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell tab_2:row0:col3 = "k12 (h-')"
- unparsed cell tab_2:row0:col4 = 'k2l (h-1)'
- unparsed cell tab_2:row0:col5 = 'klo (h-1)'
- unparsed cell tab_2:row12:col1 = '0.148b'
- unparsed cell tab_2:row12:col3 = '0.06480b'
- unparsed cell tab_2:row12:col4 = '0.00591b'
- unparsed cell tab_2:row12:col8 = '490.9b'
- unparsed cell tab_2:row13:col1 = '± 0.041'
- unparsed cell tab_2:row13:col2 = '± 1.448'
- unparsed cell tab_2:row13:col3 = '± 0.02247'
- unparsed cell tab_2:row13:col4 = '± 0.00171'
- unparsed cell tab_2:row13:col5 = '± 0.059'
- unparsed cell tab_2:row13:col6 = '± 65.96'
- unparsed cell tab_2:row13:col7 = '± 10.9'
- unparsed cell tab_2:row13:col8 = '± 398.7'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48.0 | not captured | not captured | ['Winslade_1987_2:discussion_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_netilmicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Winslade_1987_2` / `Winslade_1987_2::normal volunteers`)


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
