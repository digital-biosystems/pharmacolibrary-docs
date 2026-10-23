<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Lee_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Lee2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The metabolite O-desmethyltramadol is an orphan compartment because the metabolism link from tramadol lacks a defined formation clearance value.

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Lee2019_reference" status="rejected" stale="false" population="healthy adults" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Lee J, Yoo HD, Bae JW, Lee S, Shin KH. Population pharmacokinetic analysis of tramadol and O-desmethyltramadol with genetic polymorphism of CYP2D6. Drug design, development and therapy 13:1751–1761 (2019).
  ·  DOI: [10.2147/DDDT.S199574](https://doi.org/10.2147/DDDT.S199574)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = &gt;= 22.

**Dosing:** 100 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/hr) | CL/F | 16.9 | L/hr | 20.7 |
| Vp/F (L) | V2/F | 59.9 | L | 42.4 |
| ka (hr−1) | kabs | 0.095 | hr−1 | 25.6 |
| Vm/F (L) | V1/F | 8.63 | L | 67.4 |
| CLPM/F (L/hr) | CL/F | 4.11 | L/hr | 34 |
| clpm_f_cyp2d6_10_10 | clpm_f_cyp2d6_10_10 | 0.528 |  | 34.1 |
| D2(hr) | D1 | 1.93 | hr | 48.8 |
| ALAG2(hr) | tlag | 1.63 | hr | 47.1 |
| Fr | FR | 0.88 |  | 7.2 |
| theta_cl_f_cyp2d6 | theta_cl_f_cyp2d6 | 0.351 |  | 81.4 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The metabolite O-desmethyltramadol is an orphan compartment because the metabolism link from tramadol lacks a defined formation clearance value.**

The record defines a metabolism link from tramadol to O-desmethyltramadol with a formation clearance parameter, but no value is provided for this specific parameter in the list. Consequently, the metabolite compartment is structurally unreachable from the dose, triggering the rejection for an orphan metabolite. While the second reader disputed several parameter assignments, the missing link value remains the concrete structural defect. Extracted — tramadol: CL/F 16.9 L/hr, V2/F 59.9 L, kabs 0.095 hr−1, FR 0.88; O-desmethyltramadol: V1/F 8.63 L, CL/F 4.11 L/hr, D1 1.93 hr, tlag 1.63 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tramadol, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr) | `Q27` · CL/F | 16.9 | L/hr | 4.694e-06 | m3/s | l/h | 20.7 | exact (1) | T0002:row2:col2 |
| Vp/F (L) | `Q82` · V2/F | 59.9 | L | 0.0599 | m3 | l | 42.4 | exact (1) | T0002:row4:col2 |
| ka (hr−1) | `Q49` · kabs | 0.095 | hr−1 | 2.639e-05 | 1/s | 1/h | 25.6 | exact (1) | T0002:row5:col2 |
| Vm/F (L) | `Q290` · V1/F | 8.63 | L | 0.00863 | m3 | l | 67.4 | exact (1) | T0002:row6:col2 |
| CLPM/F (L/hr) | `Q27` · CL/F | 4.11 | L/hr | 1.142e-06 | m3/s | l/h | 34 | exact (1) | T0002:row7:col2 |
| clpm_f_cyp2d6_10_10 | `Q900` · clpm_f_cyp2d6_10_10 | 0.528 |  |  |  |  | 34.1 |  | T0002:row8:col1, T0002:row8:col2 |
| D2(hr) | `Q310` · D1 | 1.93 | hr | 6948 | s | h | 48.8 | llm (0.6) | T0002:row10:col2 |
| ALAG2(hr) | `Q83` · tlag | 1.63 | hr | 5868 | s | h | 47.1 | exact (1) | T0002:row11:col2 |
| Fr | `Q43` · FR | 0.88 |  |  |  |  | 7.2 | exact (1) | T0002:row12:col2 |
| theta_cl_f_cyp2d6 | `Q900` · theta_cl_f_cyp2d6 | 0.351 |  |  |  |  | 81.4 |  | T0002:row3:col1, T0002:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 6 row(s) → O-desmethyltramadol (m_suffix 6)
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{CL/F}^2$$ \\end{document}ωCL/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{V/F}^2$$ \\end{document}ωV/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{CLPM/F}^2$$ \\end{document}ωCLPM/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $$\\omega _{D2}^2$$ \\end{document}ωD22' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{pro}}, tra}}$$ \\end{document}σpro,tra' routed out of structural estimates ('Residual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{add}}, tra}}$$ \\end{document}σadd,tra' routed out of structural estimates ('Residual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{pro}},{\\rm{ODMT}}}}$$ \\end{document}σpro,ODMT' routed out of structural estimates ('Residual variability')
- table section residual_error: '\\documentclass[12pt]{minimal} \\usepackage{wasysym} \\usepackage[substack]{amsmath} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage[mathscr]{eucal} \\usepackage{mathrsfs} \\DeclareFontFamily{T1}{linotext}{} \\DeclareFontShape{T1}{linotext}{m}{n} {linotext }{} \\DeclareSymbolFont{linotext}{T1}{linotext}{m}{n} \\DeclareSymbolFontAlphabet{\\mathLINOTEXT}{linotext} \\begin{document} $${\\sigma _{{\\rm{add}},{\\rm{ODMT}}}}$$ \\end{document}σadd,ODMT' routed out of structural estimates ('Residual variability')
- column 'comment' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'CLPM/F,CYP2D6*10/*10' → Q900:clpm_f_cyp2d6_10_10 = 0.528 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'CLM/F (L/hr)' — extend the ontology if this is a real PK parameter (source ['T0002:row9:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- pharmacogenetic covariate 'clpm_f_cyp2d6_10_10' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_cl_f_cyp2d6' (cyp2d6) — PGx domain
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 7 linked by role; re-tagged parent→O-desmethyltramadol ×15
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
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
| `gpt-oss-120b` | `parameters[alag2]` |  | 1.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag2]` | 1.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` |  | 15.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpm/f]` | 4.11 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d2]` | 1.93 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp2d6]` | 0.528 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f]` |  | 8.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f]` | 8.63 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tramadol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tramadol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T0002:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T0002:row7:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T0002:row6:col2'] |
| C5_dimension_Q310 | pass | [time] |  | ['T0002:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T0002:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T0002:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['T0002:row11:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.9 L/h | ['T0002:row2:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.11 L/h | ['T0002:row7:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.63 L | ['T0002:row6:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 59.9 L | ['T0002:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Lee2019_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Lee2019_reference%0APaper%3A%20Lee_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tramadol/Tramadol_Lee2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:13 UTC</sub>
