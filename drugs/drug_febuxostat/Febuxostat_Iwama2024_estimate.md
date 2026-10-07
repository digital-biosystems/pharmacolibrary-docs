<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;febuxostat&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/&quot;},{&quot;label&quot;:&quot;Iwama_2024 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Febuxostat_Kamel2022_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Febuxostat_Kamel2022_se_for_the_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_se_for_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_se_for_the_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# febuxostat — `Febuxostat_Iwama2024_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Iwama R et al., An integrated population pharmacokineti…, Pharmacology research & per… (2024)
  ·  DOI: [10.1002/prp2.70032](https://doi.org/10.1002/prp2.70032)

## Model component
<dbs-pgx drug="febuxostat" model-id="Febuxostat_Iwama2024_estimate" status="extracted" stale="false" population="pediatric patients with hyperuricemia and adult subjects" measured-compound="febuxostat" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 6.53 | L/h | 1.813888888888889e-06 | [l] / [h] | not captured | exact (1.0) | prp270032-tbl-0002:row2:col1 | — | 0.0662 (None% RSE) |
| V2/F, L | `Q82` · V2/F | 19.4 | L | 0.0194 | [l] | not captured | exact (1.0) | prp270032-tbl-0002:row3:col1 | — | 0.0638 (None% RSE) |
| Q/F, L/h | `Q69` · Q/F | 1.80 | L/h | 5.000000000000001e-07 | [l] / [h] | not captured | exact (1.0) | prp270032-tbl-0002:row4:col1 | — | 0.411 (None% RSE) |
| V3/F, L | `Q78` · V3/F | 15.6 | L | 0.0156 | [l] | not captured | exact (1.0) | prp270032-tbl-0002:row5:col1 | — | 0.307 (None% RSE) |
| Ka, 1/h | `Q49` · kabs | 3.43 | 1/h | 0.0009527777777777779 | [1] / [h] | not captured | exact (1.0) | prp270032-tbl-0002:row6:col1 | — | 2.34 (None% RSE) |
| F1 (FED) | `Q40` · Fab | 0.838 | FED | not captured | [fed] | not captured | exact (1.0) | prp270032-tbl-0002:row8:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ 2 (exponential error)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ALAG1, h' — extend the ontology if this is a real PK parameter (source ['prp270032-tbl-0002:row7:col1'])
- unit_dimension_unknown: 'FED' (Fab)
- dropped unlinked row (NIL): 'CLWGT' — extend the ontology if this is a real PK parameter (source ['prp270032-tbl-0002:row9:col1'])
- dropped unlinked row (NIL): 'CLEGFR' — extend the ontology if this is a real PK parameter (source ['prp270032-tbl-0002:row10:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=febuxostat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Iwama_2024 (paper reports 2 populations: estimate, median)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell prp270032-tbl-0002:row2:col5 = '6.14, 6.92'
- unparsed cell prp270032-tbl-0002:row2:col8 = '6.13, 6.93'
- unparsed cell prp270032-tbl-0002:row3:col5 = '17.8, 21.0'
- unparsed cell prp270032-tbl-0002:row3:col8 = '17.9, 21.1'
- unparsed cell prp270032-tbl-0002:row4:col5 = '1.55, 2.05'
- unparsed cell prp270032-tbl-0002:row4:col8 = '1.52, 2.06'
- unparsed cell prp270032-tbl-0002:row5:col5 = '14.0, 17.2'
- unparsed cell prp270032-tbl-0002:row5:col8 = '13.8, 17.3'
- unparsed cell prp270032-tbl-0002:row6:col5 = '1.78, 5.08'
- unparsed cell prp270032-tbl-0002:row6:col8 = '2.47, 14.5'
- unparsed cell prp270032-tbl-0002:row7:col5 = '0.398, 0.476'
- unparsed cell prp270032-tbl-0002:row7:col8 = '0.406, 0.492'
- unparsed cell prp270032-tbl-0002:row8:col5 = '0.773, 0.903'
- unparsed cell prp270032-tbl-0002:row8:col8 = '0.780, 0.906'
- unparsed cell prp270032-tbl-0002:row9:col5 = '0.351, 0.817'
- unparsed cell prp270032-tbl-0002:row9:col8 = '0.347, 0.853'
- unparsed cell prp270032-tbl-0002:row10:col5 = '0.214, 0.434'
- unparsed cell prp270032-tbl-0002:row10:col8 = '0.207, 0.441'
- unparsed cell prp270032-tbl-0002:row12:col5 = '0.0435, 0.0889'
- unparsed cell prp270032-tbl-0002:row12:col8 = '0.0430, 0.0894'
- unparsed cell prp270032-tbl-0002:row13:col5 = '0.0279, 0.0687'
- unparsed cell prp270032-tbl-0002:row13:col8 = '0.0274, 0.0719'
- unparsed cell prp270032-tbl-0002:row15:col5 = '0.0258, 0.102'
- unparsed cell prp270032-tbl-0002:row15:col8 = '0.0312, 0.107'
- unparsed cell prp270032-tbl-0002:row16:col5 = '0.268, 0.554'
- unparsed cell prp270032-tbl-0002:row16:col8 = '0.281, 0.575'
- unparsed cell prp270032-tbl-0002:row17:col5 = '0.196, 0.418'
- unparsed cell prp270032-tbl-0002:row17:col8 = '0.209, 0.418'
- unparsed cell prp270032-tbl-0002:row19:col5 = '0.155, 0.363'
- unparsed cell prp270032-tbl-0002:row19:col8 = '0.165, 0.364'
- unparsed cell prp270032-tbl-0002:row20:col5 = '1.34, 3.34'
- unparsed cell prp270032-tbl-0002:row20:col8 = '1.60, 5.80'
- unparsed cell prp270032-tbl-0002:row24:col5 = '0.120, 0.152'
- unparsed cell prp270032-tbl-0002:row24:col8 = '0.120, 0.153'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270032-tbl-0002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp270032-tbl-0002:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp270032-tbl-0002:row4:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp270032-tbl-0002:row5:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp270032-tbl-0002:row3:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.53 L/h | not captured | not captured | ['prp270032-tbl-0002:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 19.4 L | not captured | not captured | ['prp270032-tbl-0002:row3:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_febuxostat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Iwama_2024` / `Iwama_2024::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:23 UTC</sub>
