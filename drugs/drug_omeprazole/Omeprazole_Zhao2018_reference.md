# omeprazole — `Omeprazole_Zhao2018_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Zhao W; Leroux S; Biran V; Jacqz-Aigrain E et al. (2018). British journal of clinical pharmacology 84
  ·  DOI: [10.1111/bcp.13526](https://doi.org/10.1111/bcp.13526)

## Model component
<dbs-pgx drug="omeprazole" model-id="Omeprazole_Zhao2018_reference" status="extracted" stale="false" population="neonates and young infants" measured-compound="omeprazole" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CLm/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 /F (l) | `Q290` · V1/F | 0.513 | l | 0.000513 | [l] | not captured | llm (0.6) | tab_1:row8:col5, tab_1:row8:col6, tab_1:row8:col7, tab_1:row8:col8 | — | not captured |
| V 2 /F (l) | `Q82` · V2/F | 1 | l | 0.001 | [l] | not captured | llm (0.6) | tab_1:row9:col5 | — | not captured |
| V 3 /F (l) | `Q78` · V3/F | 1 | l | 0.001 | [l] | not captured | llm (0.6) | tab_1:row10:col5 | — | not captured |
| θ2 | `Q99` · Q2 | 0.658 | not captured | not captured | not captured | not captured | llm (0.6) | tab_1:row13:col6, tab_1:row13:col7, tab_1:row13:col8, tab_1:row13:col9 | — | not captured |
| CL OMZ-M2 (l h | `Q22` · CL | 0.140 | l h | not captured | [h] · [l] | not captured | llm_confirmed (0.6) | tab_1:row18:col4, tab_1:row18:col5, tab_1:row18:col6, tab_1:row18:col7 | — | not captured |
| CL M1 /F (l h | `Q351` · CLm/F | 0.846 | l h | not captured | [h] · [l] | not captured | llm_corrected (0.6) | tab_1:row19:col4, tab_1:row19:col5, tab_1:row19:col6, tab_1:row19:col7 | — | not captured |
| Ka | `Q49` · kabs | 130.0 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row22:col6, tab_1:row22:col7, tab_1:row22:col8, tab_1:row22:col9 | — | not captured |
| theta_kabs_abcb1 | `Q900` · theta_kabs_abcb1 | 0.0497 | not captured | not captured | not captured | not captured | not captured (not captured) | tab_1:row4:col3, tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6 | — | not captured |
| CYP2C19 | `Q900` · CYP2C19 | {'IM': 0.0, 'NM': 0.1935, 'RM': 0.4064} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |
| CYP2C19 | `Q900` · CYP2C19 | {'EM': 0.0, 'IM': -0.5198, 'PM': -0.9054} | not captured | not captured | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'developmental pharmacogenetics of cyp2c19' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Parameters' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col7'])
- dropped unlinked row (NIL): 'F ABCB1 WT' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col4'])
- dropped unlinked row (NIL): 'F ABCB1 HET' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col6', 'tab_1:row6:col7'])
- dropped unlinked row (NIL): 'F ABCB1 MUT' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col3', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6'])
- dropped unlinked row (NIL): 'F CYP2C19 EM/UM' — extend the ontology if this is a real PK parameter (source ['tab_1:row14:col3'])
- dropped unlinked row (NIL): 'F CYP2C19 IM' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col3', 'tab_1:row15:col4', 'tab_1:row15:col5', 'tab_1:row15:col6'])
- dropped unlinked row (NIL): 'F CYP2C19 PM' — extend the ontology if this is a real PK parameter (source ['tab_1:row16:col3', 'tab_1:row16:col4', 'tab_1:row16:col5', 'tab_1:row16:col6'])
- dropped unlinked row (NIL): 'F PNA = (PNA/38)' — extend the ontology if this is a real PK parameter (source ['tab_1:row17:col3', 'tab_1:row17:col4', 'tab_1:row17:col5', 'tab_1:row17:col6'])
- unit_dimension_unknown: 'l h' (CL)
- unit_dimension_unknown: 'l h' (CLm/F)
- unit_dimension_unknown: 'l h' (CLm/F)
- dropped duplicate Q351 ('CL M2 /F (l h', value '0.130') — already have one for this compound
- unit_dimension_unknown: 'l h' (V1/F)
- dropped duplicate Q290 ('V 1 /F', value '99.0') — already have one for this compound
- unit_dimension_unknown: 'l h' (CL)
- dropped duplicate Q22 ('CL OMZ-M1', value '52.6') — already have one for this compound
- unit_dimension_unknown: 'l h' (CL)
- dropped duplicate Q22 ('CL OMZ-M2', value '35.9') — already have one for this compound
- unit_dimension_unknown: 'l h' (CLm/F)
- dropped duplicate Q351 ('CL M1 /F', value '55.9') — already have one for this compound
- unit_dimension_unknown: 'l h' (CLm/F)
- dropped duplicate Q351 ('CL M2 /F', value '68.8') — already have one for this compound
- unit_dimension_mismatch: 'Ka: absorption rate constant (h' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('Ka: absorption rate constant (h', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=omeprazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- model equation 'PNA = (PNA/38)^θ' not bound — neither LHS nor base term 'PNA' linked to an ontology parameter
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row2:col8 = 'th -95'
- unparsed cell tab_1:row17:col1 = 'θ3'
- unparsed cell tab_1:row18:col1 = '-1 )'
- unparsed cell tab_1:row19:col1 = '-1 )'
- unparsed cell tab_1:row20:col1 = '-1 )'
- unparsed cell tab_1:row28:col1 = '-1 )'
- LLM selected parameter table(s) 2
- captured model equation PNA = (PNA/38)^θ

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row8:col7', 'tab_1:row8:col8'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 0.513 L | not captured | not captured | ['tab_1:row8:col5', 'tab_1:row8:col6', 'tab_1:row8:col7', 'tab_1:row8:col8'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1 L | not captured | not captured | ['tab_1:row9:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_omeprazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhao_2018` / `Zhao_2018::reference`)


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
