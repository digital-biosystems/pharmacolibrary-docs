<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;conestat alfa&quot;,&quot;href&quot;:&quot;drugs/drug_conestat_alfa/&quot;},{&quot;label&quot;:&quot;Farrell_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ConestatAlfa_Farrell2013_reference&quot;,&quot;label&quot;:&quot;Farrell_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_conestat_alfa/ConestatAlfa_Farrell2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# conestat alfa — `ConestatAlfa_Farrell2013_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Km`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** every check the reviewer could run passed.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Farrell C; Hayes S; Relan A; van Amersfoort ES; Pijpstra R; Hack CE et al. (2013). British journal of clinical pharmacology 76
  ·  DOI: [10.1111/bcp.12132](https://doi.org/10.1111/bcp.12132)

## Model component
<dbs-pgx drug="conestat alfa" model-id="ConestatAlfa_Farrell2013_reference" status="needs_review" stale="false" population="healthy volunteers and hereditary angioedema patients" measured-compound="recombinant human C1 inhibitor" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Volume of distribution (l) | `Q61` · V | 2.86 | l | 0.00286 | [l] | not captured | exact (1.0) | Farrell_2013_table_p5_1:row2:col1, Farrell_2013_table_p5_1:row2:col2 | — | not captured |
| theta_v_category | `Q900` · theta_v_category | 0.681 | not captured | not captured | not captured | not captured | not captured (not captured) | Farrell_2013_table_p5_1:row3:col1, Farrell_2013_table_p5_1:row3:col2 | — | not captured |
| Vmax (U ml-1 h-1) in healthy volunteers and symptomatic HAE patients | `Q66` · Vmax | 1.63 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Farrell_2013_table_p5_1:row5:col1, Farrell_2013_table_p5_1:row5:col2 | — | not captured |
| Km (U ml-1) | `Q1` · Km | 1.60 | U ml-1 | not captured | [u] / [ml] | not captured | exact (1.0) | Farrell_2013_table_p5_1:row7:col1, Farrell_2013_table_p5_1:row7:col2 | — | not captured |
| theta_v_bodyweight | `Q900` · theta_v_bodyweight | 0.612 | not captured | not captured | not captured | not captured | not captured (not captured) | Farrell_2013_table_p5_1:row4:col1, Farrell_2013_table_p5_1:row4:col2 | — | not captured |
| theta_vmax_category | `Q900` · theta_vmax_category | 0.644 | not captured | not captured | not captured | not captured | not captured (not captured) | Farrell_2013_table_p5_1:row6:col1, Farrell_2013_table_p5_1:row6:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Baseline levels in HAE patients (U ml-1)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Farrell_2013_table_p5_1:row0:col1', 'Farrell_2013_table_p5_1:row0:col2'])
- dropped PD-category row 'Baseline levels in healthy volunteers (U ml-1)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Farrell_2013_table_p5_1:row1:col1', 'Farrell_2013_table_p5_1:row1:col2'])
- covariate level 'Fractional change in volume for studies C1 1202-01 and C1 1203-01' → Q900:theta_v_category = 0.681 (additive_shift on Q61)
- dropped value-less row: 'Interindividual variability in HAE patient baseline levels (%CV)†'
- dropped value-less row: 'Interindividual variability in healthy volunteer baseline levels (%CV)†'
- dropped value-less row: 'Interindividual variability in volume (%CV)*'
- dropped value-less row: 'Interoccasion variability in volume (%CV)*'
- dropped value-less row: 'Interindividual variability in Vmax (%CV)*'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=recombinant human C1 inhibitor
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Farrell_2013_table_p5_2:row0:col2 = '21.0%'
- unparsed cell Farrell_2013_table_p5_2:row1:col2 = '43.1%'
- unparsed cell Farrell_2013_table_p5_2:row2:col2 = '37.8%'
- unparsed cell Farrell_2013_table_p5_2:row3:col2 = '25.8%'
- unparsed cell Farrell_2013_table_p5_2:row4:col2 = '27.7%'
- unparsed cell Farrell_2013_table_p5_2:row5:col2 = '8.09%'
- unparsed cell Farrell_2013_table_p5_2:row6:col2 = '7.31%'
- unparsed cell Farrell_2013_table_p5_2:row7:col2 = '4.30%'
- unparsed cell Farrell_2013_table_p5_2:row8:col2 = '6.21%'
- companion parameter table p5_2 transcribed (9 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Farrell_2013_table_p5_1:row7:col1', 'Farrell_2013_table_p5_1:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Farrell_2013_table_p5_1:row2:col1', 'Farrell_2013_table_p5_1:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.86 L | not captured | not captured | ['Farrell_2013_table_p5_1:row2:col1', 'Farrell_2013_table_p5_1:row2:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_conestat_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Farrell_2013` / `Farrell_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
