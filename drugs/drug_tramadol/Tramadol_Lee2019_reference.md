<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Lee_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Lee2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Lee J et al., Population pharmacokinetic analysis of…, Drug design, development an… (2019)
  ·  DOI: [10.2147/DDDT.S199574](https://doi.org/10.2147/DDDT.S199574)

## Model component
<dbs-pgx drug="tramadol" model-id="Tramadol_Lee2019_reference" status="rejected" stale="false" population="healthy Korean male subjects" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr) | `Q27` · CL/F | 16.9 | L/hr | 4.694444444444444e-06 | [l] / [h] | 20.7 | exact (1.0) | T0002:row2:col2, T0002:row2:col3, T0002:row2:col5, T0002:row2:col6 | — | not captured |
| Vp/F (L) | `Q82` · V2/F | 59.9 | L | 0.0599 | [l] | 42.4 | exact (1.0) | T0002:row4:col2, T0002:row4:col3, T0002:row4:col5, T0002:row4:col6 | — | not captured |
| ka (hr−1) | `Q49` · kabs | 0.095 | hr−1 | 2.638888888888889e-05 | [1] / [h] | 25.6 | exact (1.0) | T0002:row5:col2, T0002:row5:col3, T0002:row5:col5, T0002:row5:col6 | — | not captured |
| Vm/F (L) | `Q290` · V1/F | 8.63 | L | 0.00863 | [l] | 67.4 | exact (1.0) | T0002:row6:col2, T0002:row6:col3, T0002:row6:col5, T0002:row6:col6 | — | not captured |
| CLPM/F (L/hr) | `Q27` · CL/F | 4.11 | L/hr | 1.1416666666666668e-06 | [l] / [h] | 34 | exact (1.0) | T0002:row7:col2, T0002:row7:col3, T0002:row7:col5, T0002:row7:col6 | — | not captured |
| D2(hr) | `Q310` · D1 | 1.93 | hr | 6948.0 | [h] | 48.8 | llm (0.6) | T0002:row10:col2, T0002:row10:col3, T0002:row10:col5, T0002:row10:col6 | — | not captured |
| ALAG2(hr) | `Q83` · tlag | 1.63 | hr | 5868.0 | [h] | 47.1 | exact (1.0) | T0002:row11:col2, T0002:row11:col3, T0002:row11:col5, T0002:row11:col6 | — | not captured |
| Fr | `Q43` · FR | 0.88 | not captured | not captured | not captured | 7.2 | exact (1.0) | T0002:row12:col2, T0002:row12:col3, T0002:row12:col5, T0002:row12:col6 | — | not captured |
| theta_cl_f_cyp2d6 | `Q900` · theta_cl_f_cyp2d6 | 0.351 | not captured | not captured | not captured | 81.4 | not captured (not captured) | T0002:row3:col1, T0002:row3:col2, T0002:row3:col3, T0002:row3:col5, T0002:row3:col6 | — | not captured |
| theta_cl_f_cyp2d6 | `Q900` · theta_cl_f_cyp2d6 | 0.528 | not captured | not captured | not captured | 34.1 | not captured (not captured) | T0002:row8:col1, T0002:row8:col2, T0002:row8:col3, T0002:row8:col5, T0002:row8:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{CL/F}^2$$ \\end{document}ωCL/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{V/F}^2$$ \\end{document}ωV/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{CLPM/F}^2$$ \\end{document}ωCLPM/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{D2}^2$$ \\end{document}ωD22' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{pro}}, tra}}$$ \\end{document}σpro,tra' routed out of structural estimates ('Residual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{add}}, tra}}$$ \\end{document}σadd,tra' routed out of structural estimates ('Residual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{pro}},{\\rm{ODMT}}}}$$ \\end{document}σpro,ODMT' routed out of structural estimates ('Residual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{add}},{\\rm{ODMT}}}}$$ \\end{document}σadd,ODMT' routed out of structural estimates ('Residual variability')
- column 'comment' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CLM/F (L/hr)' — extend the ontology if this is a real PK parameter (source ['T0002:row9:col2', 'T0002:row9:col3', 'T0002:row9:col5', 'T0002:row9:col6'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 28 linked by role; re-tagged parent→O-desmethyltramadol ×45
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T0002:row12:col1 = 'Fraction of 1st order absorption'
- unparsed cell T0002:row17:col1 = 'Variance of D2'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T0002:row2:col2', 'T0002:row2:col3', 'T0002:row2:col5', 'T0002:row2:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T0002:row7:col2', 'T0002:row7:col3', 'T0002:row7:col5', 'T0002:row7:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T0002:row6:col2', 'T0002:row6:col3', 'T0002:row6:col5', 'T0002:row6:col6'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['T0002:row10:col2', 'T0002:row10:col3', 'T0002:row10:col5', 'T0002:row10:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T0002:row5:col2', 'T0002:row5:col3', 'T0002:row5:col5', 'T0002:row5:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T0002:row4:col2', 'T0002:row4:col3', 'T0002:row4:col5', 'T0002:row4:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['T0002:row11:col2', 'T0002:row11:col3', 'T0002:row11:col5', 'T0002:row11:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.9 L/h | not captured | not captured | ['T0002:row2:col2', 'T0002:row2:col3', 'T0002:row2:col5', 'T0002:row2:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.11 L/h | not captured | not captured | ['T0002:row7:col2', 'T0002:row7:col3', 'T0002:row7:col5', 'T0002:row7:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.63 L | not captured | not captured | ['T0002:row6:col2', 'T0002:row6:col3', 'T0002:row6:col5', 'T0002:row6:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 59.9 L | not captured | not captured | ['T0002:row4:col2', 'T0002:row4:col3', 'T0002:row4:col5', 'T0002:row4:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lee_2019` / `Lee_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:14 UTC</sub>
