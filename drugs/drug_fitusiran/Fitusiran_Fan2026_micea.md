# fitusiran — `Fitusiran_Fan2026_micea`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Fan X; Xiao Y; Cao K; Zhang R; Yan X et al. (2026). Molecular therapy. Nucleic acids 37
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

## Model component
<dbs-pgx drug="fitusiran" model-id="Fitusiran_Fan2026_micea" status="" stale="false" population="mice, rats, monkeys, and humans" measured-compound="fitusiran" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (1/h) | `Q49` · kabs | —(suppressed) | units | — | [units] | not captured | exact (1.0) | tbl1:row3:col2 | — | not captured |
| Fu (1/h) | `Q46` · fu | —(suppressed) | units | — | [units] | not captured | exact (1.0) | tbl1:row4:col2 | — | not captured |
| RTOT0 (nM) | `Q333` · Rtot | —(suppressed) | nM | — | [nM] | not captured | llm (0.6) | tbl1:row9:col2 | — | not captured |
| Vm (nmol/h) | `Q66` · Vmax | —(suppressed) | nmol/h | — | [nM] / [h] | not captured | special_case (0.95) | tbl1:row10:col2 | — | not captured |
| Km (∗105 nM) | `Q1` · Km | —(suppressed) | units | — | [units] | not captured | exact (1.0) | tbl1:row11:col2 | — | not captured |
| koff (1/h) | `Q330` · koff | —(suppressed) | units | — | [units] | not captured | exact (1.0) | tbl1:row12:col2 | — | not captured |
| kint (1/h) | `Q334` · kint | —(suppressed) | nM−1·h−1 | — | [1] / [[h] · [nM]] | not captured | exact (1.0) | tbl1:row15:col2 | — | not captured |
| Kdis (∗10−3 h−1) | `Q331` · KD | —(suppressed) | nM | — | [nM] | not captured | llm (0.6) | tbl1:row21:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'PSLiver (L/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row5:col2'])
- dropped unlinked row (NIL): 'KPLiver' — extend the ontology if this is a real PK parameter (source ['tbl1:row6:col2'])
- dropped unlinked row (NIL): 'KPRem' — extend the ontology if this is a real PK parameter (source ['tbl1:row7:col2'])
- dropped unlinked row (NIL): 'KDEGD (1/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row8:col2'])
- unit_dimension_mismatch: 'RTOT0 (nM)' → Q333 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vm (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (∗105 nM)' → Q1 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'koff (1/h)' → Q330 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'fesc' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col2'])
- unit_dimension_unknown: 'nM−1·h−1' (kint)
- dropped PD-category row 'Ksyn (nM/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row19:col2'])
- dropped unlinked row (NIL): 'Kass (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row20:col2'])
- unit_dimension_mismatch: 'Kdis (∗10−3 h−1)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'KDEGE (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row22:col2'])
- dropped PD-category row 'kdeg, m (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col2'])
- dropped PD-category row 'kdeg, p (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col2'])
- dropped unlinked row (NIL): 'Smax' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col2'])
- dropped PD-category row 'SC50 (nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row29:col2'])
- dropped unlinked row (NIL): 'γ1' — extend the ontology if this is a real PK parameter (source ['tbl1:row30:col2'])
- dropped unlinked row (NIL): 'γ2' — extend the ontology if this is a real PK parameter (source ['tbl1:row31:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fitusiran
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'micea' subgroup of Fan_2026 (paper reports 7 populations: 0.38, 0.71 (9.45), 1.48 (21.16), humansa, micea, monkeysc, ratsb)

**Extraction notes:**
- companion parameter table S3 transcribed (42 record(s))
- LLM selected parameter table(s) 1, S3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fitusiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fan_2026` / `Fan_2026::micea`)


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
