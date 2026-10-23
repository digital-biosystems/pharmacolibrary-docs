<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Glecaprevir&quot;,&quot;href&quot;:&quot;drugs/drug_glecaprevir/&quot;},{&quot;label&quot;:&quot;Thakre_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Glecaprevir — `Glecaprevir_Thakre2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> Glecaprevir clearance, volume, and absorption lag time were missing; pibrentasvir’s clearance of 2170 L/day could not supply those parameters, so the model was held back.

<div class="pk-model-meta" hidden drug="Glecaprevir" model-id="Glecaprevir_Thakre2026_reference" status="model_quarantined" stale="false" population="pediatric patients with chronic HCV infection, ages 3 to &lt; 18 years" measured-compound="glecaprevir and pibrentasvir" parameterization="apparent" topology="1C"></div>

## Citation
Thakre N, Beck D, Saeed AM, Eckert D, Chen MJ, Liu W et al. Population Pharmacokinetic Analysis of Glecaprevir and Pibrentasvir in Pediatric Patients ≥ 3 to &lt; 18 Years of Age with Genotypes 1-6 Chronic Hepatitis C Virus (HCV) Infection. Clinical pharmacokinetics 65(7):1061–1072 (2026).
  ·  DOI: [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1)

## Population and dosing

**Population:** pediatric patients with chronic HCV infection, ages 3 to &lt; 18 years · condition chronic hepatitis C virus infection · age group mixed · n = 126.

**Dosing:** 15, 20, 40, 50, 120, 300 mg (GLE/PIB, respectively), oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed glecaprevir + pibrentasvir, measured glecaprevir and pibrentasvir.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 3 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/day)a | CL/F | 2170 | L/day |
| V2/F (L)a | V2/F | 528 | L |
| Q/F (L/day)a | Q/F | 765 | L/day |
| V3/F (L)a | V3/F | 3750 | L |
| ALAG1 (days) | tlag | 0.0556 | days |
| Absorption factorb | Fab | 2.47 | \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ |
| Derived absorption rate, ka (1/day)b | kabs | 7.34 | 1/day |
| theta_q87_formulation | theta_q87_formulation | 1.20 |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.440 |  |
| theta_q319_body_weight | theta_q319_body_weight | 0.757 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Glecaprevir clearance, volume, and absorption lag time were missing; pibrentasvir’s clearance of 2170 L/day could not supply those parameters, so the model was held back.**

No value for glecaprevir's clearance, volume of distribution and absorption lag time — all 7 extracted parameters describe pibrentasvir. The model was built, but glecaprevir's clearance, volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted to SI; the builder also defaulted clearance, volume, and lag time and assumed F=1, Fm=1, with no molar correction. Extracted — pibrentasvir: CL/F 2.17e+03 L/day, V2/F 528 L, Q/F 765 L/day, V3/F 3.75e+03 L, tlag 0.0556 days, Fab 2.47 \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ, kabs 7.34 1/day.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has glecaprevir + pibrentasvir, the second reading glecaprevir; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/day)a | `Q27` · CL/F | 2170 | L/day | 2.512e-05 | m3/s | L/h | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3, Thakre_2026_table_2:row1:col1, Thakre_2026_table_2:row1:col2, Thakre_2026_table_2:row1:col3 |
| V2/F (L)a | `Q82` · V2/F | 528 | L | 0.528 | m3 | L | llm_confirmed (0.6) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Thakre_2026_table_2:row2:col1, Thakre_2026_table_2:row2:col2, Thakre_2026_table_2:row2:col3 |
| Q/F (L/day)a | `Q69` · Q/F | 765 | L/day | 8.854e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3 |
| V3/F (L)a | `Q78` · V3/F | 3750 | L | 3.75 | m3 | L | llm_confirmed (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3 |
| ALAG1 (days) | `Q83` · tlag | 0.0556 | days | 4804 | s | d | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3 |
| Absorption factorb | `Q40` · Fab | 2.47 | \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ |  |  | s·min·d^3·m·$$\·-69·\^11·amsbsy·amsfonts·amsmath·amssymb·athrsfs·begin·end·etlength·imal·ocument^2·ocumentclass·oddsidemargin·12pt·pt·theta$$\·upgreek·usepackage^7·wasysym·θ | llm_confirmed (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3, Thakre_2026_table_2:row3:col1, Thakre_2026_table_2:row3:col2, Thakre_2026_table_2:row3:col3 |
| Derived absorption rate, ka (1/day)b | `Q49` · kabs | 7.34 | 1/day | 8.495e-05 | 1/s | 1/h | llm_confirmed (0.6) | Tab3:row11:col3, Thakre_2026_table_2:row7:col3 |
| theta_q87_formulation | `Q900` · theta_q87_formulation | 1.20 |  |  |  |  |  | Tab3:row8:col1, Thakre_2026_table_2:row4:col1 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.440 |  |  |  |  |  | Tab3:row9:col1, Tab3:row9:col2, Tab3:row9:col3, Thakre_2026_table_2:row5:col1, Thakre_2026_table_2:row5:col2, Thakre_2026_table_2:row5:col3 |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.757 |  |  |  |  |  | Tab3:row10:col1, Tab3:row10:col2, Tab3:row10:col3, Thakre_2026_table_2:row6:col1, Thakre_2026_table_2:row6:col2, Thakre_2026_table_2:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (CL/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (V2/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (Q/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (V3/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (Fab)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (kabs)
- dropped value-less row: 'GLE AUC24 (ng·h/mL)' (captured trailing unit 'ng·h/mL' for child rows)
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F (L/day)a' → L/day (from the paper text: 'The parameter label states “CL/F (L/day)a.”')
- implicit units: 'V2/F (L)a' → L (from the paper text: 'The parameter label states “V2/F (L)a.”')
- implicit units: 'Q/F (L/day)a' → L/day (from the paper text: 'The parameter label states “Q/F (L/day)a.”')
- implicit units: 'V3/F (L)a' → L (from the paper text: 'The parameter label states “V3/F (L)a.”')
- implicit units: 'Derived absorption rate, ka (1/day)b' → 1/day (from the paper text: 'The parameter label states “Derived absorption rate, ka (1/day)b.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=glecaprevir and pibrentasvir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab3:row11:col1 = '10.1 (NA)'
- unparsed cell Thakre_2026_table_2:row7:col1 = '18.6 (NA)'
- companion parameter table 2 transcribed (17 record(s), model stage 'final')
- companion parameter table 4 transcribed (1 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[absorption factorb]` | 2.47 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[alag1]` | 0.0556 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight]` | 0.440 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q87_formulation]` | 1.20 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | glecaprevir + pibrentasvir | glecaprevir | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | glecaprevir and pibrentasvir | glecaprevir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Thakre_2026_table_2:row1:col1', 'Thakre_2026_table_2:row1:col2', 'Thakre_2026_table_2:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row11:col3', 'Thakre_2026_table_2:row7:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Thakre_2026_table_2:row2:col1', 'Thakre_2026_table_2:row2:col2', 'Thakre_2026_table_2:row2:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 90.4 L/h | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Thakre_2026_table_2:row1:col1', 'Thakre_2026_table_2:row1:col2', 'Thakre_2026_table_2:row1:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 528 L | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Thakre_2026_table_2:row2:col1', 'Thakre_2026_table_2:row2:col2', 'Thakre_2026_table_2:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglecaprevir%5D%20Glecaprevir_Thakre2026_reference&body=Drug%3A%20glecaprevir%0ARecord%3A%20Glecaprevir_Thakre2026_reference%0APaper%3A%20Thakre_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glecaprevir/Glecaprevir_Thakre2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:54 UTC</sub>
