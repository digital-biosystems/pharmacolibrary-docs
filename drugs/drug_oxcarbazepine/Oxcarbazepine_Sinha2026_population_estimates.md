<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Sinha_2026 \u00b7 population_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxcarbazepine — `Oxcarbazepine_Sinha2026_population_estimates`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The 10-monohydroxy derivative is an orphan compartment with no path from the dose, making it unreachable in the oxcarbazepine model.**

The structure lists a metabolism link from oxcarbazepine to the 10-monohydroxy derivative, but the review flagged the metabolite as unreachable. This indicates that the dose compartment is not connected to the metabolite compartment through the defined links. Consequently, the 10-monohydroxy derivative has no path from the dose, resulting in an invalid topology. Extracted — 10-monohydroxy derivative: CL 3.05 L/h, Km 0.671, V 50 L; oxcarbazepine: CL 220 L/h, V1 33.1 L, kabs 0.269 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has oxcarbazepine → 10-monohydroxy derivative (metabolism); 10-monohydroxy derivative → oxcarbazepine (interconversion), the second reading oxcarbazepine → 10‐monohydroxy derivative (mhd) (metabolism); 10‐monohydroxy derivative (mhd) → oxcarbazepine (interconversion); it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Sinha J et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01579-0](https://doi.org/10.1007/s40262-025-01579-0)

<div class="pk-model-meta" hidden drug="oxcarbazepine" model-id="Oxcarbazepine_Sinha2026_population_estimates" status="rejected" stale="false" population="children and adolescents" measured-compound="oxcarbazepine" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\mathrm{CL}}_{\mathrm{MHD}}$$\end{document}CLMHD | `Q22` · CL | 3.05 | L/h | 8.472222222222221e-07 | L/h | not captured | exact (1.0) | Tab4:row2:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\theta }_{\mathrm{CL},\text{ MHD}}$$\end{document}θCL,MHD | `Q1` · Km | 0.671 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab4:row3:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\mathrm{CL}}_{\mathrm{OXZ}}$$\end{document}CLOXZ | `Q22` · CL | 220 | L/h | 6.111111111111111e-05 | L/h | not captured | exact (1.0) | Tab4:row4:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\theta }_{\mathrm{CL},\mathrm{OXZ}}$$\end{document}θCL,OXZ | `Q900` · equation variable | 1 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab4:row5:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${V}_{\mathrm{MHD}}$$\end{document}VMHD | `Q61` · V | 50 | L | 0.05 | L | not captured | exact (1.0) | Tab4:row6:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${V}_{\mathrm{OXZ}}$$\end{document}VOXZ | `Q63` · V1 | 33.1 | L | 0.033100000000000004 | L | not captured | exact (1.0) | Tab4:row7:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${K}_{a}$$\end{document}Ka | `Q49` · kabs | 0.269 | 1/h | 7.472222222222223e-05 | 1/h | not captured | exact (1.0) | Tab4:row9:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\theta }_{V}$$\\end{document}θV', value '0.752') — already have one for this compound
- dropped duplicate Q900 ('\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${K}_{\\mathrm{bt}}$$\\end{document}Kbt', value '0.0433') — already have one for this compound
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\mathrm{CL}}_{\\mathrm{MHD}}$$\\end{document}CLMHD' → L/h (from the paper text: 'The text states: "The estimated CL of OXZ ... and MHD ... in a reference adult with 50 kg FFM were 220 L/h and 3.05 L/h,')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\theta }_{\\mathrm{CL},\\text{ MHD}}$$\\end{document}θCL,MHD' — the LLM proposed 'L/h', whose dimension does not fit Q1; left unset
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\mathrm{CL}}_{\\mathrm{OXZ}}$$\\end{document}CLOXZ' → L/h (from the paper text: 'The text states: "The estimated CL of OXZ ... and MHD ... in a reference adult with 50 kg FFM were 220 L/h and 3.05 L/h,')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${V}_{\\mathrm{MHD}}$$\\end{document}VMHD' → L (from the popPK convention: 'No unit is explicitly stated in the provided text for V_MHD, but Volume of Distribution in population PK is conventional')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${V}_{\\mathrm{OXZ}}$$\\end{document}VOXZ' → L (from the popPK convention: 'No unit is explicitly stated in the provided text for V_OXZ, but Volume of Distribution in population PK is conventional')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${K}_{a}$$\\end{document}Ka' → 1/h (from the popPK convention: 'Ka is a first-order absorption rate constant. The standard unit for first-order rate constants in pharmacokinetics is 1/')
- metabolite volume: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${V}_{\\mathrm{MHD}}$$\\end{document}VMHD' Q63→Q61 for 10-monohydroxy derivative — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\mathrm{CL}}_{\mathrm{MHD}}$$\end{document}CLMHD); Q22 (\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\mathrm{CL}}_{\mathrm{OXZ}}$$\end{document}CLOXZ); Q61 (\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${V}_{\mathrm{MHD}}$$\end{document}VMHD); Q63 (\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${V}_{\mathrm{OXZ}}$$\end{document}VOXZ)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxcarbazepine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — back-conversion needs PK_3M_3C, but formation is not hepatic
- status held at route_to_review — not promoted
- population split: 'population estimates' subgroup of Sinha_2026 (paper reports 2 populations: bsv estimates (cv), population estimates)
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 7 linked by role; re-tagged parent→10-monohydroxy derivative ×3
- molar mass: no plausible PubChem entry for '10-monohydroxy derivative' ('10-monohydroxy derivative') — left in mass units
- molar mass: none found for '10-monohydroxy derivative' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row2:col3 = '3.04 (2.68–3.51)'
- unparsed cell Tab4:row2:col4 = '3.04 (2.68–3.51)'
- unparsed cell Tab4:row2:col5 = '36% (12, 16)'
- unparsed cell Tab4:row2:col6 = '36% (27–45)'
- unparsed cell Tab4:row2:col7 = '36% (27–45)'
- unparsed cell Tab4:row3:col3 = '0.670 (0.546–0.802)'
- unparsed cell Tab4:row3:col4 = '0.670 (0.546–0.802)'
- unparsed cell Tab4:row4:col3 = '204 (155–380)'
- unparsed cell Tab4:row4:col4 = '204 (155–380)'
- unparsed cell Tab4:row4:col5 = '51% (19, 26)'
- unparsed cell Tab4:row4:col6 = '51% (23–69)'
- unparsed cell Tab4:row4:col7 = '51% (23–69)'
- unparsed cell Tab4:row6:col5 = '80% (20, 33)'
- unparsed cell Tab4:row6:col6 = '87% (44–142)'
- unparsed cell Tab4:row6:col7 = '87% (44–142)'
- unparsed cell Tab4:row7:col3 = '38.1 (20.0–223.3)'
- unparsed cell Tab4:row7:col4 = '38.1 (20.0–223.3)'
- unparsed cell Tab4:row8:col3 = '0.789 (0.500–1.234)'
- unparsed cell Tab4:row8:col4 = '0.789 (0.500–1.234)'
- unparsed cell Tab4:row9:col1 = 'h−1'
- unparsed cell Tab4:row9:col3 = '0.246 (0.146–1.988)'
- unparsed cell Tab4:row9:col4 = '0.246 (0.146–1.988)'
- unparsed cell Tab4:row10:col1 = 'h−1'
- unparsed cell Tab4:row10:col3 = '0.0374 (0.0143–0.1107)'
- unparsed cell Tab4:row10:col4 = '0.0374 (0.0143–0.1107)'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (6/15 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['oxcarbazepine', '10-monohydroxy derivative', 'metabolism'], ['10-monohydroxy derivative', 'oxcarbazepine', 'interconversion']] | [['oxcarbazepine', '10‐monohydroxy derivative (mhd)', 'metabolism'], ['10‐monohydroxy derivative (mhd)', 'oxcarbazepine', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\mathrm{cl}}_{\mathrm{mhd}}$$\end{document}clmhd]` | 3.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\mathrm{cl}}_{\mathrm{mhd}}$$\end{document}clmhd]` | not captured | 3.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\theta }_{\mathrm{cl},\mathrm{oxz}}$$\end{document}θcl,oxz]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\theta }_{\mathrm{cl},\text{ mhd}}$$\end{document}θcl,mhd]` | 0.671 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\theta }_{v}$$\end{document}θv]` | not captured | 0.752 | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${k}_{\mathrm{bt}}$$\end{document}kbt]` | not captured | 0.0433 | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${v}_{\mathrm{mhd}}$$\end{document}vmhd]` | 50 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${v}_{\mathrm{mhd}}$$\end{document}vmhd]` | not captured | 50 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row2:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row7:col2'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab4:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.05 | not captured | not captured | ['Tab4:row2:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['Kbt'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.05 L/h | not captured | not captured | ['Tab4:row2:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 220 L/h | not captured | not captured | ['Tab4:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 50 L | not captured | not captured | ['Tab4:row6:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 33.1 L | not captured | not captured | ['Tab4:row7:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_oxcarbazepine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sinha_2026` / `Sinha_2026::population_estimates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:12 UTC</sub>
