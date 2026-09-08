# tramadol — `Tramadol_Healy2025_point_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Healy P; Allegaert K; Della Pasqua O et al. (2025). British journal of clinical pharmacology 91
  ·  DOI: [10.1111/bcp.16201](https://doi.org/10.1111/bcp.16201)

## Model component
<dbs-pgx drug="tramadol" model-id="Tramadol_Healy2025_point_estimate" status="rejected" stale="false" population="neonatal patients" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLPO | `Q27` · CL/F | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | bcp16201-tbl-0005:row4:col2 | — | not captured |
| VP1 | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | bcp16201-tbl-0005:row6:col2, bcp16201-tbl-0005:row24:col2 | — | not captured |
| VP2 | `Q77` · V3 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | bcp16201-tbl-0005:row7:col2 | — | not captured |
| kₐ | `Q49` · kabs | —(suppressed) | 1/h | — | 1/h | not captured | review_gapfill (0.7) | Ekstrand_2026:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLPP (CYP2D6‐G1)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row1:col2'])
- dropped unlinked row (NIL): 'CLPP (CYP2D6‐G2)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row2:col2'])
- dropped unlinked row (NIL): 'CLPP (CYP2D6‐G3)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row3:col2'])
- dropped unlinked row (NIL): 'QP' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row5:col2'])
- dropped unlinked row (NIL): 'CLMO (OCT1‐G0)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row8:col2'])
- dropped unlinked row (NIL): 'CLMO (OCT1‐G1)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row9:col2'])
- dropped unlinked row (NIL): 'CLMO (OCT1‐G2)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row10:col2'])
- dropped unlinked row (NIL): 'QM' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row11:col2', 'bcp16201-tbl-0005:row29:col2'])
- dropped unlinked row (NIL): 'VM1' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row12:col2', 'bcp16201-tbl-0005:row30:col2'])
- dropped unlinked row (NIL): 'VM2' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row13:col2'])
- dropped unlinked row (NIL): 'CLPM (CYP2D6‐G1)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row14:col2'])
- dropped unlinked row (NIL): 'CLPM (CYP2D6‐G2)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row15:col2'])
- dropped unlinked row (NIL): 'CLPM (CYP2D6‐G3)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row16:col2'])
- dropped unlinked row (NIL): 'TM50 CLPO' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row17:col2'])
- dropped PD-category row 'Hill coefficient CLPO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row18:col2'])
- dropped unlinked row (NIL): 'TM50 CLPM' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row19:col2'])
- dropped PD-category row 'Hill coefficient CLPM' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row20:col2'])
- dropped unlinked row (NIL): 'TM50 CLMO' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row21:col2'])
- dropped PD-category row 'Hill coefficient CLMO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row22:col2'])
- unit_dimension_unknown: 'CYP1' (CL/F)
- dropped duplicate Q27 ('CLPO (CYP1)', value '0.161') — already have one for this compound
- dropped unlinked row (NIL): 'CLPM (CYP1)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row26:col2'])
- dropped unlinked row (NIL): 'CLPM (CYP2)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row27:col2'])
- dropped unlinked row (NIL): 'CLPM (CYP3)' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row28:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- population split: 'point estimate' subgroup of Healy_2025 (paper reports 2 populations: point estimate, units)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ekstrand_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ekstrand_2026:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Healy_2025` / `Healy_2025::point_estimate`)


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
