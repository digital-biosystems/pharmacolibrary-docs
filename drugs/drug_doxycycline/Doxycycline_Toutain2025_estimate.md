# doxycycline — `Doxycycline_Toutain2025_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Toutain PL; Bousquet-Melou A; Ferran AA; Roques BB; Del Castillo JRE; Lees P; et al. et al. (2025). Journal of veterinary pharmacology and therapeutics 48
  ·  DOI: [10.1111/jvp.13511](https://doi.org/10.1111/jvp.13511)

## Model component
<dbs-pgx drug="doxycycline" model-id="Doxycycline_Toutain2025_estimate" status="extracted" stale="false" population="pigs" measured-compound="doxycycline" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc | `Q63` · V1 | 0.192 | not captured | not captured | not captured | not captured | exact (1.0) | jvp13511-tbl-0006:row2:col1 | — | not captured |
| V2 | `Q64` · V2 | 0.595 | not captured | not captured | not captured | not captured | exact (1.0) | jvp13511-tbl-0006:row3:col1 | — | not captured |
| V3 | `Q77` · V3 | 0.536 | not captured | not captured | not captured | not captured | exact (1.0) | jvp13511-tbl-0006:row4:col1 | — | not captured |
| Clearance | `Q22` · CL | 0.259 | Thetas fixed and OMEGA estimated | not captured | [thetasfixedandomegaestimated] | not captured | exact (1.0) | jvp13511-tbl-0006:row5:col1 | — | not captured |
| Cld2 | `Q30` · Q | 1.179 | not captured | not captured | not captured | not captured | special_case (0.95) | jvp13511-tbl-0006:row6:col1 | — | not captured |
| MAT_FEED_TLS | `Q73` · MAT | 13.89 | feed, field conditions | not captured | [feed] | not captured | llm (0.6) | jvp13511-tbl-0006:row16:col1 | — | not captured |
| theta_q88_category | `Q900` · theta_q88_category | 38.6 | not captured | not captured | not captured | not captured | not captured (not captured) | jvp13511-tbl-0006:row17:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (CL)
- dropped unlinked row (NIL): 'Cld3' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row7:col1'])
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (CL)
- dropped duplicate Q22 ('Cov BW Cl', value '0.299') — already have one for this compound
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (CL)
- dropped duplicate Q22 ('Cov BW Cl2', value '-0.224') — already have one for this compound
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (CL)
- dropped duplicate Q22 ('Cov BW Cl3', value '-0.544') — already have one for this compound
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (V3)
- dropped duplicate Q77 ('Cov BW V3', value '0.376') — already have one for this compound
- dropped unlinked row (NIL): 'CMultStdevOR_FEEDOTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row12:col1', 'jvp13511-tbl-0006:row24:col1'])
- dropped unlinked row (NIL): 'KaOR_FEED_TLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row14:col1'])
- dropped unlinked row (NIL): 'F_FEED_TLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row15:col1'])
- unit_dimension_unknown: 'feed, field conditions' (MAT)
- dropped unlinked row (NIL): 'CMultStdevOR_FEEDTLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row18:col1'])
- dropped unlinked row (NIL): 'KaOR_FEED_OTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row20:col1'])
- dropped unlinked row (NIL): 'F_FEED_OTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row21:col1'])
- unit_dimension_unknown: 'feed, laboratory conditions' (MAT)
- dropped duplicate Q73 ('MAT_FEED_OTHERS', value '6.95') — already have one for this compound
- dropped unlinked row (NIL): 'KaOR_SOLTUBING' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row26:col1'])
- dropped unlinked row (NIL): 'F_SOLTUBING' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row27:col1'])
- unit_dimension_unknown: 'drinking water, stomach tubing' (MAT)
- dropped duplicate Q73 ('MAT_SOL_TUBING', value '1.38') — already have one for this compound
- dropped unlinked row (NIL): 'CMultStdevOR_SOL_TUBING' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row30:col1'])
- dropped unlinked row (NIL): 'KaOR_SOL_DW' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row32:col1'])
- dropped unlinked row (NIL): 'F_SOL_DW' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row33:col1'])
- unit_dimension_unknown: 'drinking water, spontaneous intake' (MAT)
- dropped duplicate Q73 ('MAT_SOL_DW', value '1.45') — already have one for this compound
- dropped unlinked row (NIL): 'CMultStdevOR_SOL_DW' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row36:col1'])
- dropped unlinked row (NIL): 'stdev0 IV' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row38:col1'])
- dropped unlinked row (NIL): 'stdev1 Trial TLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row39:col1'])
- dropped unlinked row (NIL): 'stdev2 trials FEED_OTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row40:col1'])
- dropped unlinked row (NIL): 'stdev3 trials Stomach tubing' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row41:col1'])
- dropped unlinked row (NIL): 'stdev4 Trials drinking water' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row42:col1'])
- covariate effect for Q88 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q88 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q88 — ambiguous identity (two shifts cannot share one category)
- dropped duplicate covariate effect 'category'/'' on Q88 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxycycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Toutain_2025 (paper reports 3 populations: bsv%, estimate, units)

**Extraction notes:**
- LLM selected parameter table(s) 6
- dropped sensitivity-analysis table(s) 4, 5 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.259 | not captured | not captured | ['jvp13511-tbl-0006:row5:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_doxycycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Toutain_2025` / `Toutain_2025::estimate`)


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
