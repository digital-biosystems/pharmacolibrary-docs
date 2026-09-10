# nicorandil — `Nicorandil_Iida2008_obj`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Iida S; Kinoshita H; Holford NH et al. (2008). British journal of clinical pharmacology 66
  ·  DOI: [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x)

## Model component
<dbs-pgx drug="nicorandil" model-id="Nicorandil_Iida2008_obj" status="" stale="false" population="healthy subjects and acute heart failure patients" measured-compound="nicorandil" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| R78 | `Q78` · V3/F | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_2:row11:col7, tab_2:row11:col8, tab_2:row11:col10, tab_2:row11:col11 | — | not captured |
| R89 | `Q89` · t1/2γ | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab_2:row12:col7, tab_2:row12:col8, tab_2:row12:col10, tab_2:row12:col11 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obj' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'PPV_S0' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col5', 'tab_2:row2:col6', 'tab_2:row2:col8', 'tab_2:row2:col9'])
- dropped unlinked row (NIL): 'PPV_Sss' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col5', 'tab_2:row3:col6', 'tab_2:row3:col8', 'tab_2:row3:col9'])
- dropped PD-category row 'PPV_EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row4:col5', 'tab_2:row4:col6', 'tab_2:row4:col8', 'tab_2:row4:col9'])
- dropped unlinked row (NIL): 'R12' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col7', 'tab_2:row9:col8', 'tab_2:row9:col10', 'tab_2:row9:col11'])
- dropped unlinked row (NIL): 'R23' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col7', 'tab_2:row10:col8', 'tab_2:row10:col10', 'tab_2:row10:col11'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row0:col5'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row1:col5'])
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row2:col5'])
- dropped unlinked row (NIL): '13' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row3:col5'])
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row4:col5'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row5:col5'])
- dropped unlinked row (NIL): '16' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row6:col5'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['Iida_2008_table_2:row7:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nicorandil
- population split: 'obj' subgroup of Iida_2008 (paper reports 2 populations: obj, sig)

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = 'Population parameter variability in S0'
- unparsed cell tab_2:row4:col1 = 'Population parameter variability in EC50'
- unparsed cell tab_2:row6:col1 = 'Between subject variability in V1'
- unparsed cell tab_2:row9:col2 = 'Correlation of S0 and Sss'
- unparsed cell tab_2:row10:col2 = 'Correlation of Sss and EC50'
- unparsed cell tab_2:row11:col2 = 'Correlation of CL and V1'
- unparsed cell tab_2:row12:col2 = 'Correlation of V1 and Q'
- unparsed cell Iida_2008_table_2:row0:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_table_2:row1:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_table_2:row2:col3 = 'Covariance of S0, SS, EC50'
- unparsed cell Iida_2008_table_2:row4:col3 = 'Covariance of S0, alpha, Emax, EC50'
- unparsed cell Iida_2008_table_2:row5:col3 = 'Covariance of S0, alpha, Emax, EC50'
- unparsed cell Iida_2008_table_2:row7:col3 = 'Covariance of S0, Emax, EC50'
- companion parameter table 2 transcribed (15 record(s))

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nicorandil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Iida_2008` / `Iida_2008::obj`)


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
