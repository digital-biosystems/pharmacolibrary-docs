<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;dexmedetomidine&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/&quot;},{&quot;label&quot;:&quot;Ashraf_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexmedetomidine_Ber2020_reference&quot;,&quot;label&quot;:&quot;Ber_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_Ber2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexmedetomidine_James2022_reference&quot;,&quot;label&quot;:&quot;James_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_James2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexmedetomidine_Levionnois2022_reference&quot;,&quot;label&quot;:&quot;Levionnois_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_Levionnois2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexmedetomidine_Huang2025_reference&quot;,&quot;label&quot;:&quot;Huang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_Huang2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexmedetomidine — `Dexmedetomidine_Ashraf2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The dexmedetomidine two-compartment model was rejected because a peripheral/tissue compartment is unreachable from the dose, leaving part of the structure unlinked to drug input.**

The record for dexmedetomidine in healthy adults (Ashraf_2020) carries parameters CL 8.74 L/h, V1 64.2 L, V2 13.0 L, absorption rate constant 36.5 1/h, intercompartmental rate 39.8 1/h, bioavailability 15.2, and peripheral elimination rate constant 7.53 1/h, but the structural check found an unreachable or orphan compartment — a compartment with no path from the administered dose. This topology defect means the stated two-compartment structure cannot be reproduced as written, so the record was refused despite the parameter values being present. Extracted — dexmedetomidine: CL 8.74 L/h, V1 64.2 L, V2 13 L, kabs 36.5 1/h, kcomp 39.8 1/h, Fab 15.2, C0 20.5, kout_peripheral 7.53 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${c}_{\text{e}\text{0}}$$\end{document}ce: this record has 20.5, the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Ashraf MW et al., Population Modelling of Dexmedetomidine…, Clinical pharmacokinetics (2020)
  ·  DOI: [10.1007/s40262-020-00900-3](https://doi.org/10.1007/s40262-020-00900-3)

<div class="pk-model-meta" hidden drug="dexmedetomidine" model-id="Dexmedetomidine_Ashraf2020_reference" status="rejected" stale="false" population="healthy adults" measured-compound="dexmedetomidine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${\text{Cl}}_{1}$$\end{document}Cl1 | `Q22` · CL | 8.74 | L/h | 2.4277777777777783e-06 | L/h | not captured | llm_confirmed (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${V}_{1}$$\end{document}V1 | `Q63` · V1 | 64.2 | L | 0.06420000000000001 | L | not captured | llm_confirmed (0.6) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${V}_{2}$$\end{document}V2 | `Q64` · V2 | 13.0 | L | 0.013000000000000001 | L | not captured | llm_confirmed (0.6) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${k}_{\text{a}, \text{FAST}}$$\end{document}ka,FAST | `Q49` · kabs | 36.5 | 1/h | 0.010138888888888888 | 1/h | not captured | llm_confirmed (0.6) | Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${k}_{\text{FAT}}$$\end{document}kFAT | `Q48` · kcomp | 39.8 | 1/h | 0.011055555555555555 | 1/h | not captured | llm (0.6) | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${F}_{\text{D}\text{E}\text{P}\text{O}\text{T}}$$\end{document}FDEPOT | `Q40` · Fab | 15.2 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row10:col2, Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${C}_{\text{E}\text{0}}$$\end{document}CE | `Q86` · C0 | 20.5 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col4, Tab2:row21:col5 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${f}_{\text{S}\text{P}\text{I}\text{L}\text{L}}$$\end{document}fSPILL | `Q900` · equation variable | 0.15 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row23:col2 | — | not captured |
| \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${k}_{\text{O}\text{U}\text{T}, \text{P}}$$\end{document}kOUT,P | `Q346` · kout_peripheral | 7.53 | 1/h | 0.0020916666666666666 | 1/h | not captured | llm_corrected (0.6) | Tab2:row24:col2, Tab2:row24:col3, Tab2:row24:col4, Tab2:row24:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sir results' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\text{Cl}}_{2}$$\\end{document}Cl2', value '8.49') — already have one for this compound
- dropped duplicate Q49 ('\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${k}_{\\text{a}, \\text{SLOW}}$$\\end{document}ka,SLOW', value '41.6') — already have one for this compound
- dropped unlinked row (NIL): '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${F}_{\\text{F}\\text{A}\\text{T}}$$\\end{document}FFAT' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4', 'Tab2:row11:col5'])
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\eta }_{1, \\text{C}\\text{L}1}$$\\end{document}η1,CL1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\eta }_{2, \\text{V}1}$$\\end{document}η2,V1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\eta }_{3,\\text{F},\\text{D}\\text{E}\\text{P}\\text{O}\\text{T}}$$\\end{document}η3,F,DEPOT' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\eta }_{4,\\text{F},\\text{F}\\text{A}\\text{T}}$$\\end{document}η4,F,FAT' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\sigma }_{\\text{P}\\text{R}\\text{O}\\text{P}, \\text{I}\\text{V}}$$\\end{document}σPROP,IV' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\sigma }_{\\text{P}\\text{R}\\text{O}\\text{P}, \\text{S}\\text{C}}$$\\end{document}σPROP,SC' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped PD-category row '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${E}_{\\text{M}\\text{A}\\text{X}}$$\\end{document}EMAX' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row19:col2'])
- dropped PD-category row '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\text{E}\\text{C}}_{50, \\text{N}\\text{E}}$$\\end{document}EC50,NE' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col4', 'Tab2:row20:col5'])
- dropped PD-category row '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${k}_{\\text{O}\\text{U}\\text{T}, \\text{R}}$$\\end{document}kOUT,R' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row22:col2', 'Tab2:row22:col3', 'Tab2:row22:col4', 'Tab2:row22:col5'])
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\eta }_{1, \\text{C}\\text{E}0}$$\\end{document}η1,CE0' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\eta }_{2, \\text{k}\\text{O}\\text{U}\\text{T},\\text{R}}$$\\end{document}η2,kOUT,R' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\sigma }_{\\text{A}\\text{D}\\text{D}, \\text{N}\\text{E},\\text{I}\\text{V}}$$\\end{document}σADD,NE,IV' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- routed '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\sigma }_{\\text{A}\\text{D}\\text{D},\\text{N}\\text{E},\\text{S}\\text{C}}$$\\end{document}σADD,NE,SC' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped value-less row: 'Table 2. Parameter estimates from the final pharmacokinetic model for dexmedetomidine (DEX) and norepinephrine (NE) with median and 95% confidence intervals (CIs) from the sampling importance resampling (SIR) procedure with 40,000 final samples and 2000 resamples'
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\text{Cl}}_{1}$$\\end{document}Cl1' → L/h (from the popPK convention: 'No unit stated in text or footnotes; total clearance conventionally in L/h, consistent with AUC = DOSE×F/CL and value 8.')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${V}_{1}$$\\end{document}V1' → L (from the popPK convention: 'No unit stated; central volume of distribution conventionally in L, consistent with value 64.2.')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${V}_{2}$$\\end{document}V2' → L (from the popPK convention: 'No unit stated; peripheral volume of distribution conventionally in L, consistent with value 13.0.')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${k}_{\\text{a}, \\text{FAST}}$$\\end{document}ka,FAST' → 1/h (from the popPK convention: 'No unit stated; first-order absorption rate constant conventionally in 1/h, consistent with value 36.5.')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${k}_{\\text{FAT}}$$\\end{document}kFAT' → 1/h (from the popPK convention: 'No unit stated; micro rate constant for distribution conventionally in 1/h, consistent with value 39.8.')
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${C}_{\\text{E}\\text{0}}$$\\end{document}CE' — the LLM proposed 'ng/mL', whose dimension does not fit Q86; left unset
- implicit units: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${k}_{\\text{O}\\text{U}\\text{T}, \\text{P}}$$\\end{document}kOUT,P' → 1/h (from the popPK convention: 'No unit stated; first-order elimination rate constant conventionally in 1/h, consistent with value 7.53.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dexmedetomidine
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row7:col1 = 'Rate constant for fast absorption (h−1)'
- unparsed cell Tab2:row8:col1 = 'Rate constant for slow absorption (h−1)'
- unparsed cell Tab2:row9:col1 = 'Rate constant for partitioning to subcutaneous fat (h−1)'
- unparsed cell Tab2:row12:col1 = 'Inter-individual variability on CL1'
- unparsed cell Tab2:row13:col1 = 'Inter-individual variability on V1'
- unparsed cell Tab2:row20:col1 = 'DEX concentration at 50% inhibition in NE release (nM)'
- unparsed cell Tab2:row22:col1 = 'Rate constant for NE spill-over from release compartment (h−1)'
- unparsed cell Tab2:row24:col1 = 'Rate constant for NE elimination from plasma (h−1)'
- unparsed cell Tab2:row25:col1 = 'Interindividual variability on CE,0'
- unparsed cell Tab2:row26:col1 = 'Interindividual variability on \\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$${\\text{k}}_{\\text{O}\\text{U}\\text{T}, \\text{R}}$$\\end{document}kOUT,R'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${c}_{\text{e}\text{0}}$$\end{document}ce]` | 20.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${f}_{\text{s}\text{p}\text{i}\text{l}\text{l}}$$\end{document}fspill].parameter_id` | Q900 | Q44 | mismatch |
| `gpt-oss-120b` | `parameters[\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$${k}_{\text{fat}}$$\end{document}kfat]` | 39.8 | not captured | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q346 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row24:col2', 'Tab2:row24:col3', 'Tab2:row24:col4', 'Tab2:row24:col5'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col4', 'Tab2:row21:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.74 | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.74 L/h | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 64.2 L | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13 L | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_dexmedetomidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ashraf_2020` / `Ashraf_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:16 UTC</sub>
