<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Lee_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Lee2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.522). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The metabolite O-desmethyltramadol is an unreachable orphan compartment with no linked formation rate from parent tramadol.**

The model structure defines a parent-metabolite relationship, but the metabolite O-desmethyltramadol is marked as unreachable from the dose. While absorption and elimination parameters exist for the metabolite, no formation rate constant connects it to the parent. This structural defect prevents the metabolite from receiving any flux, making the model invalid for simulation or fitting. Extracted — tramadol: CL/F 16.9 L/hr, V2/F 59.9 L, kabs 0.095 hr−1, FR 0.88; O-desmethyltramadol: V1/F 8.63 L, CL/F 4.11 L/hr, D1 1.93 hr, tlag 1.63 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tramadol, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Lee J et al., Population pharmacokinetic analysis of…, Drug design, development an… (2019)
  ·  DOI: [10.2147/DDDT.S199574](https://doi.org/10.2147/DDDT.S199574)

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Lee2019_reference" status="rejected" stale="false" population="healthy Korean male subjects" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

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
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tramadol', 'o-desmethyltramadol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[alag2]` | not captured | 1.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag2]` | 1.63 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | not captured | 15.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpm/f]` | 4.11 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[d2]` | 1.93 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp2d6]` | 0.528 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f]` | not captured | 8.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f]` | 8.63 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tramadol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tramadol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


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
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
