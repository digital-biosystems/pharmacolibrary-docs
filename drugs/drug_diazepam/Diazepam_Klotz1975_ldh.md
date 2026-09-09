# diazepam — `Diazepam_Klotz1975_ldh`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Klotz U; Avant GR; Hoyumpa A; Schenker S; Wilkinson GR et al. (1975). The Journal of clinical investigation 55
  ·  DOI: [10.1172/JCI107938](https://doi.org/10.1172/JCI107938)

## Model component
<dbs-pgx drug="diazepam" model-id="Diazepam_Klotz1975_ldh" status="extracted" stale="false" population="adults with liver disease and healthy controls" measured-compound="diazepam" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| B. S.* | `Q60` · t1/2β | 250 | not captured | not captured | not captured | not captured | llm (0.6) | Klotz_1975_table_p9_1:row1:col3 | — | not captured |
| drug clearance | `Q22` · CL | 13.0 | ml/min | 2.1666666666666665e-07 | L/h | not captured | boundary (0.8) | Klotz_1975:other_prose | — | not captured |
| blood clearance of diazepam | `Q23` · CLb | 24.8 | ml/min | 4.1333333333333333e-07 | L/h | not captured | boundary (0.8) | Klotz_1975:other_prose | — | not captured |
| Vd(os)/kg, liter/kg | `Q61` · V | 1.13 | liter/kg | 0.07909999999999999 | L | not captured | boundary (0.8) | Klotz_1975:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q60 ('B. S.†', value '169') — already have one for this compound
- dropped unlinked row (NIL): 'M. C.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row3:col3'])
- dropped unlinked row (NIL): 'M. C.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row4:col3'])
- dropped unlinked row (NIL): 'J. H.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row5:col3'])
- dropped unlinked row (NIL): 'J. H.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row6:col3'])
- dropped unlinked row (NIL): 'J. H.§' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row7:col3'])
- dropped unlinked row (NIL): 'J. M.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row8:col3'])
- dropped unlinked row (NIL): 'J. M.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row9:col3'])
- dropped unlinked row (NIL): 'J. J.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row11:col3'])
- dropped unlinked row (NIL): 'Upper normal limit' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row12:col3'])
- table mostly unlinked (9/11 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('drug clearance'=13.0) from results prose — parameter table was unreadable
- salvaged Q23 ('blood clearance of diazepam'=24.8) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd(os)/kg, liter/kg'=1.13) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diazepam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'ldh' subgroup of Klotz_1975 (paper reports 6 populations: albumin, alkaline phosphatase, bilirubin, ldh, sgot, t1/2(b))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.8 | not captured | not captured | ['Klotz_1975:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.78 L/h | not captured | not captured | ['Klotz_1975:other_prose'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 1.49 L/h | not captured | not captured | ['Klotz_1975:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 79.1 L | not captured | not captured | ['Klotz_1975:discussion_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_diazepam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Klotz_1975` / `Klotz_1975::ldh`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_diazepam/Diazepam_Klotz1975_ldh/Diazepam_Klotz1975_ldh_modelica.zip" download>Diazepam_Klotz1975_ldh_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_diazepam/Diazepam_Klotz1975_ldh/Diazepam_Klotz1975_ldh_fmi.zip" download>Diazepam_Klotz1975_ldh_fmi.zip</a> <span class="pk-size">(1.2 MB)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_diazepam/Diazepam_Klotz1975_ldh/Diazepam_Klotz1975_ldh_matlab.zip" download>Diazepam_Klotz1975_ldh_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_diazepam/Diazepam_Klotz1975_ldh/Diazepam_Klotz1975_ldh_matlab_simbio.zip" download>Diazepam_Klotz1975_ldh_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_diazepam/Diazepam_Klotz1975_ldh/Diazepam_Klotz1975_ldh_sbml.zip" download>Diazepam_Klotz1975_ldh_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_diazepam/Diazepam_Klotz1975_ldh/Diazepam_Klotz1975_ldh_cellml.zip" download>Diazepam_Klotz1975_ldh_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
