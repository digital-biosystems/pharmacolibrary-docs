# protein C — `ProteinC_Li2025_adults_16_y_n_9`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `protein C concentrate`, measured `protein C`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Li_2025)

## Model component
<dbs-pgx drug="protein C" model-id="ProteinC_Li2025_adults_16_y_n_9" status="" stale="false" population="patients with severe congenital or acquired protein C deficiency" measured-compound="protein C" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t½, hh | `Q57` · t1/2z | —(suppressed) | n = 9 | — | [n=9] | not captured | llm (0.6) | Li_2025_table_2:row1:col4 | — | not captured |
| CL, dL/kg/h | `Q22` · CL | —(suppressed) | n = 9 | — | [n=9] | not captured | llm_confirmed (0.6) | Li_2025_table_2:row2:col4 | — | not captured |
| Vdss, dL/kg | `Q65` · Vss | —(suppressed) | n = 9 | — | [n=9] | not captured | llm (0.6) | Li_2025_table_2:row5:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 9' (t1/2z)
- unit_dimension_unknown: 'n = 9' (CL)
- dropped unlinked row (NIL): 'IR, IU/dL per IU/kg' — extend the ontology if this is a real PK parameter (source ['Li_2025_table_2:row3:col4'])
- unit_dimension_unknown: 'n = 9' (Vss)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=protein C
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'adults (≥16 y)(n = 9)' subgroup of Li_2025 (paper reports 4 populations: adolescents (≥12 to &lt;16 y) (n = 3), adults (≥16 y)(n = 9), neonates and infants (birth to &lt;2 y) (n = 10), population estimate)

**Extraction notes:**
- unparsed cell tbl4:row1:col4 = '7.03 (5.94, 8.66)'
- unparsed cell tbl4:row2:col4 = '60.8 (56.8, 65.3)'
- unparsed cell tbl4:row3:col4 = '0.185 (0.159, 0.214)'
- unparsed cell tbl4:row5:col4 = '201 (159, 248)'
- unparsed cell tbl4:row6:col4 = '−0.566 (−0.651, −0.479)'
- unparsed cell tbl4:row7:col4 = '0.586 (0.422, 0.775)'
- unparsed cell tbl4:row8:col4 = '−0.967 (−0.982, −0.938)'
- unparsed cell tbl4:row9:col4 = '−0.112 (−0.169, −0.0742)'
- unparsed cell tbl4:row10:col4 = '0.0914 (0.0136, 0.162)'
- unparsed cell tbl4:row11:col4 = '0.0488 (0.0231, 0.0777)'
- unparsed cell tbl4:row12:col4 = '0.0953 (0.0158, 0.253)'
- unparsed cell Li_2025_table_2:row1:col1 = '2.38 (84.1)a'
- unparsed cell Li_2025_table_2:row1:col2 = '8.19 (35.8)e'
- unparsed cell Li_2025_table_2:row2:col1 = '0.555 (122.0)a'
- unparsed cell Li_2025_table_2:row2:col2 = '0.0678 (49.0)e'
- unparsed cell Li_2025_table_2:row4:col2 = '56.8 (34.6)f'
- unparsed cell Li_2025_table_2:row4:col3 = '53.5 (13.3)c'
- unparsed cell Li_2025_table_2:row4:col4 = '74.2 (14.8)b'
- unparsed cell Li_2025_table_2:row5:col1 = '2.09 (63.7)a'
- unparsed cell Li_2025_table_2:row5:col2 = '0.780 (31.1)e'
- companion parameter table 2 transcribed (11 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_protein_c/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2025` / `Li_2025::adults_16_y_n_9`)


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
