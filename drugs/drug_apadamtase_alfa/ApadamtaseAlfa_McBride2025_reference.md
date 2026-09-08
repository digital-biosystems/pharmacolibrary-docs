# Apadamtase alfa — `ApadamtaseAlfa_McBride2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem McBride_2025)

## Model component
<dbs-pgx drug="Apadamtase alfa" model-id="ApadamtaseAlfa_McBride2025_reference" status="rejected" stale="false" population="patients with congenital thrombotic thrombocytopenic purpura" measured-compound="rADAMTS13" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| konVE_ADAM | Q329 | not captured | llm |
| CL | Q22 | not captured | exact |
| CLD | Q30 | not captured | exact |
| V1 | Q63 | not captured | exact |
| V2 | Q64 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ADAM_Activity_UperUg' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row0:col1'])
- dropped unlinked row (NIL): 'KdegHb' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row2:col1'])
- dropped unlinked row (NIL): 'VEFrac' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row4:col1'])
- dropped duplicate Q329 ('konVE_platelet', value None) — already have one for this compound
- dropped unlinked row (NIL): 'kcatE' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row9:col1'])
- dropped unlinked row (NIL): 'kcatS_ag' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row10:col1'])
- dropped unlinked row (NIL): 'kag' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row11:col1'])
- dropped PD-category row 'rADAM_Ag_EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['McBride_2025_table_S2:row12:col1'])
- dropped unlinked row (NIL): 'ksynPlate_human' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row13:col1'])
- dropped unlinked row (NIL): 'ksynPlate_mouse' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row14:col1'])
- dropped unlinked row (NIL): 'n_pl' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row15:col1'])
- dropped duplicate Q329 ('konVE_Hb', value None) — already have one for this compound
- dropped duplicate Q329 ('konVE_TSP', value None) — already have one for this compound
- dropped unlinked row (NIL): 'KonVG_ADAM' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row19:col1'])
- dropped unlinked row (NIL): 'KonVG_Hb' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row20:col1'])
- dropped unlinked row (NIL): 'kdegADAM' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row21:col1'])
- dropped unlinked row (NIL): 'kdegVWF' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row22:col1'])
- dropped unlinked row (NIL): 'kdegAg' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row23:col1'])
- dropped unlinked row (NIL): 'kdegPlatelet' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row24:col1'])
- dropped unlinked row (NIL): 'kdegTSP' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row25:col1'])
- dropped unlinked row (NIL): 'kcatG' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row27:col1'])
- dropped unlinked row (NIL): 'TSP1_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row28:col1'])
- dropped unlinked row (NIL): 'VWF_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row29:col1'])
- dropped unlinked row (NIL): 'ADAMTS13_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row30:col1'])
- dropped duplicate Q30 ('Q', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rADAMTS13
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) S2
- unparsed cell McBride_2025_table_S2:row0:col2 = 'ADAMTS13 activity conversion between IU and µg'
- unparsed cell McBride_2025_table_S2:row0:col3 = 'Rieger et al. (2006)4 Inherited from previous SCD model,model derived, fixed'
- unparsed cell McBride_2025_table_S2:row7:col2 = 'Association rate constant of ADAMTS13 with VE'
- unparsed cell McBride_2025_table_S2:row8:col2 = 'Association rate constant of ADAMTS13 with platelet'
- unparsed cell McBride_2025_table_S2:row9:col2 = 'Cleavage rate of elongated VWF by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row10:col2 = 'Cleavage rate of VWF aggregates by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row12:col2 = 'Cleavage EC50 of VWF aggregates by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row14:col2 = 'Synthesis rate of platelet for mice for248.220.5098 and Kopic et al. (2016)5 studies, respectively'
- unparsed cell McBride_2025_table_S2:row14:col3 = 'Calculated based on pretreatment level for in-house study #248.220.5098and Kopic et al. (2016)5, fitted'
- unparsed cell McBride_2025_table_S2:row15:col3 = 'Assumed nonlinear dependency in Step 2, fixed'
- unparsed cell McBride_2025_table_S2:row17:col3 = 'Schlosshauer & Baker (2004)7'
- unparsed cell McBride_2025_table_S2:row18:col2 = 'Association rate constant of plasma free Hb with TSP-1'
- unparsed cell McBride_2025_table_S2:row19:col2 = 'Association rate constant of ADAMTS13 with VGb'
- unparsed cell McBride_2025_table_S2:row21:col2 = 'Degradation rate of endogenous ADAMTS13'
- unparsed cell McBride_2025_table_S2:row21:col3 = 'Half-life: 60 hoursKremer Hovinga & Lämmle (2012)8 Crawley et al. (2011)9'
- unparsed cell McBride_2025_table_S2:row22:col3 = 'Half-life: 15 hrDenis et al. (2008)10'
- unparsed cell McBride_2025_table_S2:row23:col3 = 'Assume half-life of 24 hoursClot lysis in the range of hoursBoudjeltia et al. (2002)11'
- unparsed cell McBride_2025_table_S2:row24:col3 = 'Half-life: 7 daysGrossman et al. (1960)12'
- unparsed cell McBride_2025_table_S2:row25:col2 = 'Degradation rate of TSP-1'
- unparsed cell McBride_2025_table_S2:row25:col3 = 'Half-life: 9 hoursBarclay et al. (2016)13'
- unparsed cell McBride_2025_table_S2:row27:col2 = 'Cleavage rate of ADAMTS13 for VG'
- unparsed cell McBride_2025_table_S2:row27:col3 = 'Crawley et al. (2011)9'
- unparsed cell McBride_2025_table_S2:row28:col2 = 'Baseline TSP-1 level in patients with cTTPand healthy individuals'
- unparsed cell McBride_2025_table_S2:row28:col3 = 'Liu et al. (2005)16 Gonzalez et al. (2004)17 Tan et al. (2008)18'
- unparsed cell McBride_2025_table_S2:row29:col3 = 'Zeigler et al. (1996)19 Yagi et al. (2007)20 Stufano et al. (2012)21'
- unparsed cell McBride_2025_table_S2:row30:col2 = 'Baseline ADAMTS13 level in patients with cTTPand healthy individuals'
- unparsed cell McBride_2025_table_S2:row30:col3 = 'Yagi et al. (2007)20'
- unparsed cell McBride_2025_table_S2:row32:col3 = 'Calibrated with Taylor et al. (2019)22, fitted'
- unparsed cell McBride_2025_table_S2:row37:col3 = 'Allometrically scaled from human PK parameters using data from a Phase 1 TTP study (Scully et al. 2017)23, fitted'
- unparsed cell McBride_2025_table_S2:row47:col3 = 'Patel et al. (2023)29'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_apadamtase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `McBride_2025` / `McBride_2025::reference`)


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
