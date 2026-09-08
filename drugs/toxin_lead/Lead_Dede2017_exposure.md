# lead — `Lead_Dede2017_exposure`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Dede E; Tindall MJ; Cherrie JW; Hankin S; Collins C et al. (2017).
  ·  DOI: [10.1016/j.etap.2017.12.003](https://doi.org/10.1016/j.etap.2017.12.003)

## Model component
<dbs-pgx drug="lead" model-id="Lead_Dede2017_exposure" status="needs_review" stale="false" population="adult humans" measured-compound="arsenic, cadmium, chromium, nickel, lead" parameterization="mechanistic" topology="manual_model_class"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Pb | `Q411` · Pb:a | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_2:row17:col1 | — | not captured |
| V , As(III)→MMA max | `Q61` · V | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Dede_2017_table_S1:row46:col6, Dede_2017_table_S2:row0:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'exposure' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'exposure' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'exposure' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'exposure' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'exposure' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'As' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col4'])
- dropped unlinked row (NIL): 'Cd' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1'])
- dropped unlinked row (NIL): 'Cr' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1'])
- dropped unlinked row (NIL): 'Ni' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1', 'tab_2:row14:col4'])
- dropped unlinked row (NIL): 'QCC' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row15:col4'])
- dropped unlinked row (NIL): 'QLC' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row19:col3', 'Dede_2017_table_S1:row19:col4'])
- dropped unlinked row (NIL): 'K red' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row42:col4'])
- dropped duplicate Q61 ('V , As(III)→DMA max', value '1500') — already have one for this compound
- dropped duplicate Q61 ('V , MMA→DMA max', value '1067') — already have one for this compound
- dropped unlinked row (NIL): 'K As(III)→MMA m,' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row52:col6', 'Dede_2017_table_S2:row6:col4'])
- dropped unlinked row (NIL): 'K , As(III)→DMA m' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row54:col6', 'Dede_2017_table_S2:row8:col4'])
- dropped unlinked row (NIL): 'K , MMA→DMA m' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S1:row56:col6', 'Dede_2017_table_S2:row10:col4'])
- dropped duplicate Q61 ('V sysRBC', value None) — already have one for this compound
- dropped unlinked row (NIL): 'Q kid' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row36:col4'])
- dropped unlinked row (NIL): 'Q portalRBC' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row39:col3', 'Dede_2017_table_S4:row39:col4', 'Dede_2017_table_S4:row39:col13'])
- dropped unlinked row (NIL): 'Q bone' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row41:col4'])
- dropped unlinked row (NIL): 'Q OT' — extend the ontology if this is a real PK parameter (source ['Dede_2017_table_S4:row43:col3', 'Dede_2017_table_S4:row43:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=arsenic, cadmium, chromium, nickel, lead
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- status held at route_to_review — not promoted
- population split: 'exposure' subgroup of Dede_2017 (paper reports 2 populations: exposure, optimal)

**Extraction notes:**
- unparsed cell tab_2:row5:col3 = '7 -14 days'
- unparsed cell tab_2:row8:col4 = '&lt; 0.01'
- unparsed cell tab_2:row11:col4 = '&lt; 0.01'
- unparsed cell tab_2:row14:col3 = '3-9 days'
- unparsed cell tab_2:row17:col3 = '15-90 days'
- unparsed cell tab_2:row17:col4 = '≥0.3'
- companion parameter table S1 transcribed (10 record(s))
- companion parameter table S2 transcribed (6 record(s))
- unparsed cell Dede_2017_table_S4:row21:col3 = '1.83 L'
- companion parameter table S4 transcribed (8 record(s))
- LLM selected parameter table(s) S1, S2, S3, S4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/toxins/toxin_lead/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dede_2017` / `Dede_2017::exposure`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
