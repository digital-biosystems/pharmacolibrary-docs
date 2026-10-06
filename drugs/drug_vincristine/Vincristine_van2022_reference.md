<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vincristine&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/&quot;},{&quot;label&quot;:&quot;van_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vincristine_Centanni2024_reference&quot;,&quot;label&quot;:&quot;Centanni_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vincristine/Vincristine_Centanni2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vincristine — `Vincristine_van2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
van de Velde ME et al., Genetic Polymorphisms Associated with V…, Cancers (2022)
  ·  DOI: [10.3390/cancers14143510](https://doi.org/10.3390/cancers14143510)

## Model component
<dbs-pgx drug="vincristine" model-id="Vincristine_van2022_reference" status="needs_review" stale="false" population="pediatric oncology patients" measured-compound="vincristine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC | `Q88` · AUC | 0.0032 | ng·h/mL | not captured | ng·h/mL | not captured | exact (1.0) | cancers-14-03510-t002:row4:col1, cancers-14-03510-t002:row4:col5, cancers-14-03510-t002:row4:col6, cancers-14-03510-t002:row4:col7, cancers-14-03510-t002:row4:col8 | — | not captured |
| Cmax | `Q32` · Cmax | 0.0029 | ng/mL | not captured | ng/mL | not captured | exact (1.0) | cancers-14-03510-t002:row6:col1, cancers-14-03510-t002:row6:col5, cancers-14-03510-t002:row6:col6, cancers-14-03510-t002:row6:col7, cancers-14-03510-t002:row6:col8 | — | not captured |
| difference in CL | `Q22` · CL | 1.87 | L/h | 5.194444444444445e-07 | L/h | not captured | review_gapfill (0.7) | Centanni_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'outcomes per snp' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'RAB7A *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row5:col4', 'cancers-14-03510-t002:row5:col5', 'cancers-14-03510-t002:row5:col6', 'cancers-14-03510-t002:row5:col7'])
- dropped unlinked row (NIL): 'Total CTCAE' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row9:col1', 'cancers-14-03510-t002:row9:col5', 'cancers-14-03510-t002:row9:col6', 'cancers-14-03510-t002:row9:col7'])
- dropped unlinked row (NIL): 'GARS *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row10:col4', 'cancers-14-03510-t002:row10:col5', 'cancers-14-03510-t002:row10:col6', 'cancers-14-03510-t002:row10:col7'])
- dropped unlinked row (NIL): 'Total ped-mTNS' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row11:col1', 'cancers-14-03510-t002:row11:col5', 'cancers-14-03510-t002:row11:col6', 'cancers-14-03510-t002:row11:col7'])
- dropped unlinked row (NIL): 'FIG4 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row12:col4', 'cancers-14-03510-t002:row12:col5', 'cancers-14-03510-t002:row12:col6'])
- dropped unlinked row (NIL): 'FGD4 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row13:col4', 'cancers-14-03510-t002:row13:col5', 'cancers-14-03510-t002:row13:col6', 'cancers-14-03510-t002:row14:col4', 'cancers-14-03510-t002:row14:col5', 'cancers-14-03510-t002:row14:col6'])
- dropped unlinked row (NIL): 'SEPTIN9 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row15:col4', 'cancers-14-03510-t002:row15:col5', 'cancers-14-03510-t002:row15:col6'])
- dropped unlinked row (NIL): 'CEP72 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row16:col4', 'cancers-14-03510-t002:row16:col5', 'cancers-14-03510-t002:row16:col6'])
- dropped unlinked row (NIL): 'ETAA1 *' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row17:col4', 'cancers-14-03510-t002:row17:col5', 'cancers-14-03510-t002:row17:col6', 'cancers-14-03510-t002:row17:col7'])
- dropped unlinked row (NIL): 'VIPN (yes/no) according to CTCAE' — extend the ontology if this is a real PK parameter (source ['cancers-14-03510-t002:row20:col5', 'cancers-14-03510-t002:row20:col6', 'cancers-14-03510-t002:row20:col7', 'cancers-14-03510-t002:row20:col8'])
- routed 'ETAA1 **' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- implicit units: 'AUC' → ng·h/mL (from the paper text: 'The paper reports median AUC as “39.78 (ng·hr)/mL.”')
- implicit units: 'Cmax' → ng/mL (from the paper text: 'The paper reports median Cmax as “57.28 ng/mL.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vincristine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q22 (CL) from Centanni_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cancers-14-03510-t002:row4:col2 = 'rs8192552'
- unparsed cell cancers-14-03510-t002:row4:col9 = '20.42 (8.0–32.8)'
- unparsed cell cancers-14-03510-t002:row5:col1 = 'rs4548'
- unparsed cell cancers-14-03510-t002:row5:col8 = '23.54(10.9–36.2)'
- unparsed cell cancers-14-03510-t002:row6:col2 = 'rs6519270'
- unparsed cell cancers-14-03510-t002:row6:col9 = '26.72(7.4–46.0)'
- unparsed cell cancers-14-03510-t002:row6:col10 = '69.55(23.0, 116.1)'
- unparsed cell cancers-14-03510-t002:row9:col2 = 'rs2272653'
- unparsed cell cancers-14-03510-t002:row9:col8 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row9:col9 = '0.84 (0.73–0.96)'
- unparsed cell cancers-14-03510-t002:row9:col10 = '0.49 (0.40–0.60)'
- unparsed cell cancers-14-03510-t002:row10:col1 = 'rs1049402'
- unparsed cell cancers-14-03510-t002:row10:col8 = '0.71 (0.62–0.82)'
- unparsed cell cancers-14-03510-t002:row10:col9 = '0.47 (0.34–0.64)'
- unparsed cell cancers-14-03510-t002:row11:col2 = 'rs9885672'
- unparsed cell cancers-14-03510-t002:row11:col4 = 'Missense UTR variant of the 5′ UTR'
- unparsed cell cancers-14-03510-t002:row11:col8 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row11:col9 = '1.44 (1.30–1.59)'
- unparsed cell cancers-14-03510-t002:row12:col1 = 'rs10659'
- unparsed cell cancers-14-03510-t002:row12:col3 = 'UTR variant of the 3′ UTR'
- unparsed cell cancers-14-03510-t002:row12:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row12:col8 = '1.53 (1.34–1.75)'
- unparsed cell cancers-14-03510-t002:row13:col1 = 'rs12823621'
- unparsed cell cancers-14-03510-t002:row13:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row13:col8 = '1.43 (1.27–1.60)'
- unparsed cell cancers-14-03510-t002:row13:col9 = '1.88 (1.36–2.59)'
- unparsed cell cancers-14-03510-t002:row14:col1 = 'rs73083501'
- unparsed cell cancers-14-03510-t002:row14:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row14:col8 = '0.86 (0.76–0.97)'
- unparsed cell cancers-14-03510-t002:row14:col9 = '0.46 (0.32–0.68)'
- unparsed cell cancers-14-03510-t002:row15:col1 = 'rs11650934'
- unparsed cell cancers-14-03510-t002:row15:col3 = 'UTR variant of the 5′ UTR'
- unparsed cell cancers-14-03510-t002:row15:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row15:col8 = '0.62 (0.54–0.71)'
- unparsed cell cancers-14-03510-t002:row15:col9 = '0.81 (0.48–1.38)'
- unparsed cell cancers-14-03510-t002:row16:col1 = 'rs71585289'
- unparsed cell cancers-14-03510-t002:row16:col7 = '&lt;0.0001'
- unparsed cell cancers-14-03510-t002:row16:col8 = '0.84 (0.75–0.93)'
- unparsed cell cancers-14-03510-t002:row16:col9 = '0.53 (0.43–0.66)'
- unparsed cell cancers-14-03510-t002:row17:col1 = 'rs35777125'
- unparsed cell cancers-14-03510-t002:row17:col8 = '0.9 1 (0.82–1.02)'
- unparsed cell cancers-14-03510-t002:row17:col9 = '0.36 (0.19–0.70)'
- unparsed cell cancers-14-03510-t002:row20:col2 = 'rs1049402'
- unparsed cell cancers-14-03510-t002:row20:col9 = '0.52 (0.28–0.99)'
- unparsed cell cancers-14-03510-t002:row20:col10 = '0.18 (0.03–0.92)'
- unparsed cell cancers-14-03510-t002:row23:col1 = 'rs35777125'
- unparsed cell cancers-14-03510-t002:row23:col8 = '0.31 (0.16–0.57)'
- unparsed cell cancers-14-03510-t002:row23:col9 = '0.31 (0.16–0.57)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Centanni_2024:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['cancers-14-03510-t002:row6:col1', 'cancers-14-03510-t002:row6:col5', 'cancers-14-03510-t002:row6:col6', 'cancers-14-03510-t002:row6:col7', 'cancers-14-03510-t002:row6:col8'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['cancers-14-03510-t002:row4:col1', 'cancers-14-03510-t002:row4:col5', 'cancers-14-03510-t002:row4:col6', 'cancers-14-03510-t002:row4:col7', 'cancers-14-03510-t002:row4:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.87 | not captured | not captured | ['Centanni_2024:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.87 L/h | not captured | not captured | ['Centanni_2024:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vincristine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2022` / `van_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:56 UTC</sub>
