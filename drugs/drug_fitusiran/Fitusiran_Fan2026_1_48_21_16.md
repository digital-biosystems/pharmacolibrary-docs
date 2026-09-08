# fitusiran — `Fitusiran_Fan2026_1_48_21_16`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Fan X; Xiao Y; Cao K; Zhang R; Yan X et al. (2026). Molecular therapy. Nucleic acids 37
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

## Model component
<dbs-pgx drug="fitusiran" model-id="Fitusiran_Fan2026_1_48_21_16" status="" stale="false" population="mice, rats, monkeys, and humans" measured-compound="fitusiran" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| elimination rate constant from plasma | `Q47` · kel | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Fan_2026_table_S3:row0:col1 | — | not captured |
| rate_constant_for_free_cytosolic_sirna_degradation | `Q900` · rate_constant_for_free_cytosolic_sirna_degradation | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Fan_2026_table_S3:row4:col1 | — | not captured |
| Michaelis constant | `Q1` · Km | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Fan_2026_table_S3:row7:col1 | — | not captured |
| theta_q330_category | `Q900` · theta_q330_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Fan_2026_table_S3:row8:col1 | — | not captured |
| theta_q334_category | `Q900` · theta_q334_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Fan_2026_table_S3:row11:col1 | — | not captured |
| theta_q329_category | `Q900` · theta_q329_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Fan_2026_table_S3:row16:col1 | — | not captured |
| theta_q328_category | `Q900` · theta_q328_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Fan_2026_table_S3:row18:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'membrane permeability in the liver' — extend the ontology if this is a real PK parameter (source ['Fan_2026_table_S3:row1:col1'])
- dropped unlinked row (NIL): 'liver to plasma partition coefficient' — extend the ontology if this is a real PK parameter (source ['Fan_2026_table_S3:row2:col1'])
- dropped unlinked row (NIL): 'remainder to plasma partition coefficient' — extend the ontology if this is a real PK parameter (source ['Fan_2026_table_S3:row3:col1'])
- covariate level 'rate constant for free cytosolic siRNA degradation' → Q900:rate_constant_for_free_cytosolic_sirna_degradation = 0.012 (additive_shift on the model)
- dropped unlinked row (NIL): 'total RISC concentration in hepatocytes' — extend the ontology if this is a real PK parameter (source ['Fan_2026_table_S3:row5:col1'])
- dropped unlinked row (NIL): 'Michaelis-Menten maximum elimination rate' — extend the ontology if this is a real PK parameter (source ['Fan_2026_table_S3:row6:col1'])
- dropped unlinked row (NIL): 'fraction of siRNA in endosome escape into cytosol' — extend the ontology if this is a real PK parameter (source ['Fan_2026_table_S3:row10:col1'])
- covariate effect for Q330 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q334 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q329 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q330 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q328 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fitusiran
- population split: '1.48 (21.16)' subgroup of Fan_2026 (paper reports 7 populations: 0.38, 0.71 (9.45), 1.48 (21.16), humansa, micea, monkeysc, ratsb)

**Extraction notes:**
- companion parameter table S3 transcribed (42 record(s))
- LLM selected parameter table(s) 1, S3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fitusiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fan_2026` / `Fan_2026::1_48_21_16`)


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
