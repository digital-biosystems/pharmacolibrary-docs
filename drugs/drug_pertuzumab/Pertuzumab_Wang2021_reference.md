<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pertuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pertuzumab_Luo2017_reference&quot;,&quot;label&quot;:&quot;Luo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Luo2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pertuzumab_Sakaeda2024_10_mg_kg_iv&quot;,&quot;label&quot;:&quot;Sakaeda_2024_10_mg_kg_iv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pertuzumab/Pertuzumab_Sakaeda2024_10_mg_kg_iv.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pertuzumab — `Pertuzumab_Wang2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wang B et al., Population pharmacokinetic and explorat…, Cancer chemotherapy and pha… (2021)
  ·  DOI: [10.1007/s00280-021-04296-0](https://doi.org/10.1007/s00280-021-04296-0)

## Model component
<dbs-pgx drug="pertuzumab" model-id="Pertuzumab_Wang2021_reference" status="needs_review" stale="false" population="patients with HER2-positive early breast cancer" measured-compound="pertuzumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| theta_q318_category | `Q900` · theta_q318_category | 31.0 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab1:row2:col2, Tab1:row2:col3, Tab1:row2:col4, Tab1:row2:col5, Tab1:row2:col6, Tab1:row2:col7, Tab1:row2:col9, Tab1:row2:col10, Tab1:row2:col12, Tab1:row2:col13, Tab1:row2:col14, Tab1:row2:col15, Tab1:row2:col16 | — | not captured |
| Q (L/days) | `Q30` · Q | 0.616 | L/days | 7.12962962962963e-09 | L/h | not captured | exact (1.0) | Wang_2021:results_prose | — | not captured |
| θ1 CL, L/d | `Q22` · CL | 0.163 | L/d | 1.886574074074074e-09 | L/h | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ2 Vc, L | `Q63` · V1 | 2.77 | L | 0.00277 | L | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ4 Vp, L | `Q64` · V2 | 2.49 | L | 0.0024900000000000005 | L | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |
| θ5 ka, d | `Q49` · kabs | 0.348 | d | not captured | d | not captured | boundary (0.8) | Wang_2021:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Estimate (95% CI)' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col17'])
- dropped diagnostic row 'Shrinkage, %' → Q318 (shrinkage) — reported statistic, not a parameter
- covariate effect for Q318 has no base parameter row (kept as unattached equation-variable)
- salvaged Q30 ('Q (L/days)'=0.616) from results prose — parameter table was unreadable
- salvaged Q22 ('θ1 CL, L/d'=0.163) from results prose — parameter table was unreadable
- salvaged Q63 ('θ2 Vc, L'=2.77) from results prose — parameter table was unreadable
- salvaged Q64 ('θ4 Vp, L'=2.49) from results prose — parameter table was unreadable
- salvaged Q49 ('θ5 ka, d'=0.348) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q (L/days)); Q22 (θ1 CL, L/d); Q63 (θ2 Vc, L); Q64 (θ4 Vp, L)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pertuzumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'pertuzumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Tab1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab1:row1:col1 = 'Estimate (95% CI)'
- unparsed cell Tab1:row1:col2 = '0.163 (0.144, 0.182)'
- unparsed cell Tab1:row1:col3 = '2.77 (2.60, 2.94)'
- unparsed cell Tab1:row1:col4 = '0.616 (0.553, 0.679)'
- unparsed cell Tab1:row1:col5 = '2.49 (2.11, 2.87)'
- unparsed cell Tab1:row1:col6 = '0.348 (0.295, 0.401)'
- unparsed cell Tab1:row1:col7 = '0.712 (0.489, 0.935)'
- unparsed cell Tab1:row1:col9 = '0.155 (0.142, 0.168)'
- unparsed cell Tab1:row1:col10 = '0.175 (0.160, 0.190)'
- unparsed cell Tab1:row1:col12 = '–0.629 (–0.221, –1.04)'
- unparsed cell Tab1:row1:col13 = '1.25 (0.922, 1.58)'
- unparsed cell Tab1:row1:col14 = '0.839 (0.545, 1.13)'
- unparsed cell Tab1:row1:col15 = '0.716 (0.251, 1.18)'
- unparsed cell Tab1:row1:col16 = '0.123 (0.049, 0.197)'
- unparsed cell Tab1:row3:col1 = 'IIV, CV% (95% CI)'
- unparsed cell Tab1:row3:col2 = '23.5 (4.89, 32.8)'
- unparsed cell Tab1:row3:col3 = '34.8 (32.1, 37.3)'
- unparsed cell Tab1:row3:col5 = '25.6 (23.5, 27.5)'
- unparsed cell Tab1:row3:col7 = '17.8 (17.6, 18.0)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q49 | fail | 1 / [time] | d | not captured | not captured | ['Wang_2021:results_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.163 | not captured | not captured | ['Wang_2021:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00679 L/h | not captured | not captured | ['Wang_2021:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['Wang_2021:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.49 L | not captured | not captured | ['Wang_2021:results_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pertuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:35 UTC</sub>
