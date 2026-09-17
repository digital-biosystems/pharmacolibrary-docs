<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;erenumab&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/&quot;},{&quot;label&quot;:&quot;Vu_2017 \u00b7 mean_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erenumab_Vu2017_mean_estimate&quot;,&quot;label&quot;:&quot;Vu_2017_mean_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_mean_estimate.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Erenumab_Vu2017_mean_estimate&quot;,&quot;label&quot;:&quot;Vu_2017_mean_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_mean_estimate.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Erenumab_Vu2017_shrinkage&quot;,&quot;label&quot;:&quot;Vu_2017_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_shrinkage&quot;,&quot;label&quot;:&quot;Vu_2017_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_units&quot;,&quot;label&quot;:&quot;Vu_2017_units&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erenumab_Vu2017_units&quot;,&quot;label&quot;:&quot;Vu_2017_units&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_Vu2017_units.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# erenumab — `Erenumab_Vu2017_mean_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Q`, `V2`, `kabs`, `Fab`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Vu T; Ma P; Chen JS; de Hoon J; Van Hecken A; Yan L; et al. et al. (2017). Pharmaceutical research 34
  ·  DOI: [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6)

## Model component
<dbs-pgx drug="erenumab" model-id="Erenumab_Vu2017_mean_estimate" status="rejected" stale="false" population="healthy and migraine subjects" measured-compound="erenumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Nonspecific linear clearance (CL)a | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab3:row1:col2 | — | 25.1 (None% RSE) |
| Central volume of distribution (Vc)a | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab3:row2:col2 | — | 43.8 (None% RSE) |
| Intercompartmental clearance (Q) | `Q30` · Q | —(suppressed) | Q | — | [q] | not captured | exact (1.0) | Tab3:row3:col2 | — | not captured |
| Peripheral volume (Vp) | `Q64` · V2 | —(suppressed) | Vp | — | [vp] | not captured | exact (1.0) | Tab3:row4:col2 | — | not captured |
| Absorption rate (ka) | `Q49` · kabs | —(suppressed) | ka | — | [ka] | not captured | exact (1.0) | Tab3:row5:col2 | — | 59.5 (None% RSE) |
| Bioavailability (F) | `Q40` · Fab | —(suppressed) | F | — | not captured | not captured | exact (1.0) | Tab3:row6:col2 | — | not captured |
| Binding affinity (Kss) | `Q331` · KD | —(suppressed) | Kss | — | [kss] | not captured | exact (1.0) | Tab3:row9:col2 | — | not captured |
| Internalization rate (kint) | `Q334` · kint | —(suppressed) | kint | — | [kint] | not captured | llm (0.6) | Tab3:row10:col2 | — | 42.3 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Q' (Q)
- unit_dimension_unknown: 'Vp' (V2)
- unit_dimension_mismatch: 'Absorption rate (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped PD-category row 'Receptor production rate (ksyn)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row7:col2'])
- dropped unlinked row (NIL): 'Receptor degradation rate (kdeg)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col2'])
- unit_dimension_unknown: 'Kss' (KD)
- unit_dimension_unknown: 'kint' (kint)
- dropped value-less row: '95% CI'
- dropped value-less row: 'Mean CL and Vc estimates at 70 kg; individual body weight effect on CL and Vc were estimated as Individual CL = 0.214 (weight/70)0.75 L/day and Individual Vc = 4.27 (weight/70) L'
- dropped value-less row: 'CV'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=erenumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'mean estimate' subgroup of Vu_2017 (paper reports 3 populations: mean estimate, shrinkage (%), units)

**Extraction notes:**
- unparsed cell Tab3:row1:col3 = '0.213 (0.191, 0.243)'
- unparsed cell Tab3:row2:col3 = '4.2 (3.4, 5.38)'
- unparsed cell Tab3:row3:col3 = '3.25 (1.41, 6.79)'
- unparsed cell Tab3:row4:col3 = '2.75 (2.2, 3.18)'
- unparsed cell Tab3:row5:col3 = '0.428 (0.346, 0.519)'
- unparsed cell Tab3:row6:col3 = '74 (66, 85)'
- unparsed cell Tab3:row7:col3 = '53 (40.6, 65.4)'
- unparsed cell Tab3:row8:col3 = '0.222 (0.144, 0.427)'
- unparsed cell Tab3:row9:col3 = '18.1 (10.6, 30.6)'
- unparsed cell Tab3:row10:col3 = '0.0347 (0.0251, 0.0442)'
- unparsed cell Tab3:row11:col3 = '25 (21, 29.6)'
- unparsed cell Tab3:row12:col3 = '43.8 (35.3, 53)'
- unparsed cell Tab3:row13:col3 = '58.8 (45.6, 73.3)'
- unparsed cell Tab3:row14:col3 = '42.1 (33.5, 51.7)'
- unparsed cell Tab3:row15:col3 = '−0.0719 (−0.127, –0.0371)'
- unparsed cell Tab3:row16:col3 = '0.0664 (0.0396, 0.101)'
- unparsed cell Tab3:row17:col3 = '17.6 (15.9, 19.7)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | fail | [time] | ka | not captured | not captured | ['Tab3:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.214 | not captured | not captured | ['Tab3:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_erenumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vu_2017` / `Vu_2017::mean_estimate`)


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
