# simvastatin — `Simvastatin_Ogungbenro2019_base`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ogungbenro K; Wagner JB; Abdel-Rahman S; Leeder JS; Galetin A et al. (2019). European journal of clinical pharmacology 75
  ·  DOI: [10.1007/s00228-019-02697-y](https://doi.org/10.1007/s00228-019-02697-y)

## Model component
<dbs-pgx drug="simvastatin" model-id="Simvastatin_Ogungbenro2019_base" status="rejected" stale="false" population="children and adolescents" measured-compound="simvastatin" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| D2 (h−1) | `Q310` · D1 | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Tab1:row3:col2 | — | not captured |
| ka1 (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Tab1:row4:col2 | — | not captured |
| ka2 (h−1) | `Q302` · k21 | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Tab1:row5:col2 | — | not captured |
| BA* | `Q900` · equation variable | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab1:row6:col2 | — | not captured |
| ALAG (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Tab1:row7:col2 | — | not captured |
| CLSLe/F (L/h) | `Q27` · CL/F | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.6) | Tab1:row8:col2 | — | not captured |
| VSL/F (L) | `Q76` · V/F | —(suppressed) | L | — | [l] | not captured | llm (0.6) | Tab1:row9:col2 | — | not captured |
| SVA | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab1:row10:col2, Tab1:row10:col3, Tab1:row32:col2, Tab1:row32:col3 | — | not captured |
| CLHSVHSVA/VHSVA (h−1) | `Q22` · CL | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Tab1:row20:col2 | — | not captured |
| CLDHSe/VDHSV (h−1) | `Q47` · kel | —(suppressed) | h−1 | — | [1] / [h] | not captured | llm (0.6) | Tab1:row24:col2 | — | not captured |
| age3_age_fra_on_cldhse | `Q900` · age3_age_fra_on_cldhse | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab1:row25:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'structural model' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'SV' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col2', 'Tab1:row2:col3'])
- unit_dimension_mismatch: 'D2 (h−1)' → Q310 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'CLSVAe/VSVA (h−1)' → Q27 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CLSVAe/VSVA (h−1)', value '0.11') — already have one for this compound
- dropped unlinked row (NIL): 'θ562: c.521T&gt;C on CLLA' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col2'])
- dropped unlinked row (NIL): 'HMSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row14:col2', 'Tab1:row14:col3', 'Tab1:row35:col2', 'Tab1:row35:col3'])
- dropped unlinked row (NIL): 'CLEmax/VHSV (nM/h)' — extend the ontology if this is a real PK parameter (source ['Tab1:row15:col2'])
- dropped unlinked row (NIL): 'CLEC50 (nM)' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col2'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['Tab1:row17:col2'])
- dropped unlinked row (NIL): 'HMSVA' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col2', 'Tab1:row18:col3', 'Tab1:row39:col2', 'Tab1:row39:col3'])
- unit_dimension_mismatch: 'CLHSVAe/VHSVA (h−1)' → Q27 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CLHSVAe/VHSVA (h−1)', value '4.6') — already have one for this compound
- unit_dimension_mismatch: 'CLHSVHSVA/VHSVA (h−1)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'θAGE2: age (50%) on CLHSVAe (year)' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col2'])
- dropped unlinked row (NIL): 'DHSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row23:col2', 'Tab1:row23:col3', 'Tab1:row42:col2', 'Tab1:row42:col3'])
- covariate level 'θAGE3: age (Fra) on CLDHSe' → Q900:age3_age_fra_on_cldhse = 0.83 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'θAGE4: age (50%) on CLDHSe (year)' — extend the ontology if this is a real PK parameter (source ['Tab1:row26:col2'])
- dropped unlinked row (NIL): 'eps2SV' — extend the ontology if this is a real PK parameter (source ['Tab1:row29:col2'])
- dropped unlinked row (NIL): 'eps3SV' — extend the ontology if this is a real PK parameter (source ['Tab1:row30:col2'])
- dropped unlinked row (NIL): 'mSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row31:col2'])
- dropped unlinked row (NIL): 'eps2SVA' — extend the ontology if this is a real PK parameter (source ['Tab1:row33:col2'])
- dropped unlinked row (NIL): 'mSVA' — extend the ontology if this is a real PK parameter (source ['Tab1:row34:col2'])
- dropped unlinked row (NIL): 'eps2HMSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row36:col2'])
- dropped unlinked row (NIL): 'eps3HMSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row37:col2'])
- dropped unlinked row (NIL): 'eps2HMSVA' — extend the ontology if this is a real PK parameter (source ['Tab1:row40:col2'])
- dropped unlinked row (NIL): 'eps2 DHSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row43:col2'])
- dropped unlinked row (NIL): 'eps3 DHSV' — extend the ontology if this is a real PK parameter (source ['Tab1:row44:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=simvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 5 first-order transfer(s) across 5 compounds → general_linear
- status held at route_to_review — not promoted
- model-stage split: 'structural model' is the base model of Ogungbenro_2019 (paper reports 3 stages: between subject variability (bsvb), parameters, structural model); same population, different model-building step
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab1:row2:col1 = 'D1 (h−1)'
- unparsed cell Tab1:row3:col3 = '2.07 [17]'
- unparsed cell Tab1:row5:col3 = '0.41 [0.5]'
- unparsed cell Tab1:row7:col3 = '1.70 [13]'
- unparsed cell Tab1:row8:col3 = '0.63 [3]'
- unparsed cell Tab1:row9:col3 = '2.17 [27]'
- unparsed cell Tab1:row10:col4 = '0.96 [9]'
- unparsed cell Tab1:row11:col3 = '0.79 [25]'
- unparsed cell Tab1:row14:col4 = '0.26 [32]'
- unparsed cell Tab1:row16:col3 = '0.67 [6]'
- unparsed cell Tab1:row18:col4 = '0.33 [60]'
- unparsed cell Tab1:row19:col3 = '0.18 [47]'
- unparsed cell Tab1:row20:col3 = '0.51 [4]'
- unparsed cell Tab1:row23:col4 = '0.29 [34]'
- unparsed cell Tab1:row24:col3 = '0.28 [42]'
- unparsed cell Tab1:row28:col1 = 'eps1SV'
- unparsed cell Tab1:row32:col1 = 'eps1SVA'
- unparsed cell Tab1:row35:col1 = 'eps1HMSV'
- unparsed cell Tab1:row39:col1 = 'eps1HMSVA'
- unparsed cell Tab1:row42:col1 = 'eps1DHSV'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | 1 / [time] | h−1 | not captured | not captured | ['Tab1:row20:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row8:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row5:col2'] |
| C5_dimension_Q310 | fail | 1 / [time] | h−1 | not captured | not captured | ['Tab1:row3:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row24:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab1:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row9:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab1:row7:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.21e+03 L/h | not captured | not captured | ['Tab1:row8:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 98.7 L | not captured | not captured | ['Tab1:row9:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_simvastatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ogungbenro_2019` / `Ogungbenro_2019::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
