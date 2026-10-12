<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Pibrentasvir&quot;,&quot;href&quot;:&quot;drugs/drug_pibrentasvir/&quot;},{&quot;label&quot;:&quot;Thakre_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pibrentasvir — `Pibrentasvir_Thakre2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The pibrentasvir model was quarantined because its volume of distribution had no extracted value and a library placeholder was used instead, alongside an unconvertible unit for the absorption factor.**

No value for pibrentasvir's volume of distribution was reported; a placeholder stood in, so the model was held back rather than published with an invented number. The absorption factor's unit (a theta expression) could not be converted to SI, so that parameter reached the build without an SI value. The record defines body-weight covariate effects on CL/F (0.440) and V2/F (0.757), but only the reference individual was simulated, so those covariate effects were not exercised. The model also assumes F=1 and Fm=1 with no molar correction, and the deviations were judged not acceptable. Extracted — pibrentasvir: CL/F 2.17e+03 L/day, V2/F 528 L, Q/F 765 L/day, V3/F 3.75e+03 L, tlag 0.0556 days, Fab 2.47 \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ, kabs 7.34 1/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[absorption factorb].value`: this record has 2.47, the second reading 2.79; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `glecaprevir/pibrentasvir`, measured `pibrentasvir`.

## Citation
Thakre N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1)

<div class="pk-model-meta" hidden drug="Pibrentasvir" model-id="Pibrentasvir_Thakre2026_reference" status="model_quarantined" stale="false" population="pediatric patients ≥3 to &lt;18 years with chronic HCV infection" measured-compound="pibrentasvir" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day)a | `Q27` · CL/F | 2170 | L/day | 2.511574074074074e-05 | L/h | not captured | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3, Thakre_2026_table_2:row1:col1, Thakre_2026_table_2:row1:col2, Thakre_2026_table_2:row1:col3 | — | not captured |
| V2/F (L)a | `Q82` · V2/F | 528 | L | 0.528 | L | not captured | llm_confirmed (0.6) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Thakre_2026_table_2:row2:col1, Thakre_2026_table_2:row2:col2, Thakre_2026_table_2:row2:col3 | — | not captured |
| Q/F (L/day)a | `Q69` · Q/F | 765 | L/day | 8.854166666666667e-06 | L/h | not captured | llm_confirmed (0.6) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3 | — | not captured |
| V3/F (L)a | `Q78` · V3/F | 3750 | L | 3.75 | L | not captured | llm_confirmed (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3 | — | not captured |
| ALAG1 (days) | `Q83` · tlag | 0.0556 | days | 4803.84 | [d] | not captured | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3 | — | not captured |
| Absorption factorb | `Q40` · Fab | 2.47 | \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ | not captured | [s] · [min] · [d]^3 · [m] · [$$\] · [-69] · [\]^11 · [amsbsy] · [amsfonts] · [amsmath] · [amssymb] · [athrsfs] · [begin] · [end] · [etlength] · [imal] · [ocument]^2 · [ocumentclass] · [oddsidemargin] · [12pt] · [pt] · [theta$$\] · [upgreek] · [usepackage]^7 · [wasysym] · [θ] | not captured | llm_confirmed (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3, Thakre_2026_table_2:row3:col1, Thakre_2026_table_2:row3:col2, Thakre_2026_table_2:row3:col3 | — | not captured |
| Derived absorption rate, ka (1/day)b | `Q49` · kabs | 7.34 | 1/day | 8.495370370370369e-05 | 1/h | not captured | llm_confirmed (0.6) | Tab3:row11:col3, Thakre_2026_table_2:row7:col3 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | 0.440 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row9:col1, Tab3:row9:col2, Tab3:row9:col3, Thakre_2026_table_2:row5:col1, Thakre_2026_table_2:row5:col2, Thakre_2026_table_2:row5:col3 | — | not captured |
| theta_v2_f_body_weight | `Q900` · theta_v2_f_body_weight | 0.757 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2, Tab3:row10:col3, Thakre_2026_table_2:row6:col1, Thakre_2026_table_2:row6:col2, Thakre_2026_table_2:row6:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (CL/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (V2/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (Q/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (V3/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (Fab)
- dropped unlinked row (NIL): 'Formulation (Part 2) on F1' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1', 'Thakre_2026_table_2:row4:col1'])
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (kabs)
- dropped value-less row: 'GLE AUC24 (ng·h/mL)' (captured trailing unit 'ng·h/mL' for child rows)
- implicit units: 'CL/F (L/day)a' → L/day (from the paper text: "Table 2 lists 'CL/F (L/day)' with estimate 1830 (388).")
- implicit units: 'V2/F (L)a' → L (from the paper text: "Table 2 lists 'V2/F (L)'.")
- implicit units: 'Q/F (L/day)a' → L/day (from the paper text: "Table 2 lists 'Q/F (L/day)'.")
- implicit units: 'V3/F (L)a' → L (from the paper text: "Table 2 lists 'V3/F (L)'.")
- implicit units: 'Derived absorption rate, ka (1/day)b' → 1/day (from the paper text: "Table 2 lists 'Derived absorption rate, ka (1/day)'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pibrentasvir
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
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (6/16 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption factorb].value` | 2.47 | 2.79 | mismatch |
| `gpt-oss-120b` | `parameters[alag1].value` | 0.0556 | 0.0510 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f (l/day)a].value` | 2170 | 1220 | mismatch |
| `gpt-oss-120b` | `parameters[derived absorption rate, ka (1/day)b].value` | 7.34 | 14.0 | mismatch |
| `gpt-oss-120b` | `parameters[q/f (l/day)a].value` | 765 | 606 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_body_weight].value` | 0.440 | 0.626 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q87_formulation]` | not captured | 0.800 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_f_body_weight].value` | 0.757 | 0.708 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f (l)a].value` | 528 | 216 | mismatch |
| `gpt-oss-120b` | `parameters[v3/f (l)a].value` | 3750 | 1900 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Thakre_2026_table_2:row1:col1', 'Thakre_2026_table_2:row1:col2', 'Thakre_2026_table_2:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row11:col3', 'Thakre_2026_table_2:row7:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Thakre_2026_table_2:row2:col1', 'Thakre_2026_table_2:row2:col2', 'Thakre_2026_table_2:row2:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 90.4 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Thakre_2026_table_2:row1:col1', 'Thakre_2026_table_2:row1:col2', 'Thakre_2026_table_2:row1:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 528 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Thakre_2026_table_2:row2:col1', 'Thakre_2026_table_2:row2:col2', 'Thakre_2026_table_2:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pibrentasvir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thakre_2026` / `Thakre_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_pibrentasvir/models/modelica/_needs_review/Pibrentasvir_Thakre2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_pibrentasvir/models/modelica/_needs_review/Pibrentasvir_Thakre2026_reference.deviation.json`


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:22 UTC</sub>
