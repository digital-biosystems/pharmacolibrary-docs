<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;erythropoietin&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/&quot;},{&quot;label&quot;:&quot;Jolling_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erythropoietin_Chakraborty2005_reference&quot;,&quot;label&quot;:&quot;Chakraborty_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/Erythropoietin_Chakraborty2005_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythropoietin_Frymoyer2017_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/Erythropoietin_Frymoyer2017_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythropoietin_OlssonGisleskog2007_reference&quot;,&quot;label&quot;:&quot;Olsson-Gisleskog_2007_reference&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/Erythropoietin_OlssonGisleskog2007_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythropoietin_Gaudard2003_reference&quot;,&quot;label&quot;:&quot;Gaudard_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/Erythropoietin_Gaudard2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Erythropoietin_Jolling2004_reference&quot;,&quot;label&quot;:&quot;Jolling_2004_reference&quot;,&quot;href&quot;:&quot;drugs/drug_erythropoietin/Erythropoietin_Jolling2004_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# erythropoietin — `Erythropoietin_Jolling2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — fulltext.** the record was built from the abstract alone, so reported summary statistics stood in for a fitted model<br><sub>evidence: `provenance.source=abstract-only`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a parameter falls outside the physiological window.

**Steps:**
1. Not a curation fix — fulltext limitation.
2. Confirm the value and unit against the paper before treating it as an error.

<sub>owner: **curator** · guidance written by playbook</sub>

## Citation
Jolling K; Ruixo JJ; Hemeryck A; Piotrovskij V; Greway T et al. (2004). Journal of pharmaceutical sciences 93
  ·  DOI: [10.1002/jps.20200](https://doi.org/10.1002/jps.20200)

## Model component
<dbs-pgx drug="erythropoietin" model-id="Erythropoietin_Jolling2004_reference" status="rejected" stale="false" population="Sprague-Dawley rats" measured-compound="pegylated human erythropoietin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.728 | mL/h | 2.022222222222222e-10 | [ml] / [h] | not captured | exact (1.0) | Jolling_2004:abstract, Jolling_2004:abstract, Jolling_2004:abstract | — | not captured |
| Vc | `Q63` · V1 | 15.8 | mL | 1.58e-05 | [ml] | not captured | exact (1.0) | Jolling_2004:abstract, Jolling_2004:abstract, Jolling_2004:abstract | — | not captured |
| Q | `Q30` · Q | 0.373 | mL/h | 1.0361111111111111e-10 | [ml] / [h] | not captured | exact (1.0) | Jolling_2004:abstract | — | not captured |
| Vp | `Q64` · V2 | 6.99 | mL | 6.99e-06 | [ml] | not captured | exact (1.0) | Jolling_2004:abstract, Jolling_2004:abstract | — | not captured |
| Ka | `Q49` · kabs | 0.0618 | h(-1) | 1.7166666666666666e-05 | [1] / [h] | not captured | exact (1.0) | Jolling_2004:abstract, Jolling_2004:abstract | — | not captured |
| Tlag | `Q83` · tlag | 3.13 | h | 11268.0 | [h] | not captured | exact (1.0) | Jolling_2004:abstract | — | not captured |
| F | `Q40` · Fab | 48.8 | % | not captured | not captured | not captured | exact (1.0) | Jolling_2004:abstract, Jolling_2004:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pegylated human erythropoietin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jolling_2004_metadata.yaml (14 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jolling_2004:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Jolling_2004:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.728 | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000728 L/h | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.0158 L | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract', 'Jolling_2004:abstract'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.00699 L | not captured | not captured | ['Jolling_2004:abstract', 'Jolling_2004:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_erythropoietin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jolling_2004` / `Jolling_2004::reference`)


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
