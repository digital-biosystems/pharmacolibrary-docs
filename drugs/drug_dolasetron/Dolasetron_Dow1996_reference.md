<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;dolasetron&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/&quot;},{&quot;label&quot;:&quot;Dow_1996 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolasetron_Dow1996_reference&quot;,&quot;label&quot;:&quot;Dow_1996_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dolasetron/Dolasetron_Dow1996_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dolasetron — `Dolasetron_Dow1996_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the model was built differently from what the record describes. Evidence: T3_rate_constant_conversion — expected Kfm (rate_constant) → CL = k·V — got unit_class_mismatch flagged, not converted.
**How to address:** not a curation fix — the pipeline is the limit here (fulltext: the record was built from the abstract alone, so reported summary statistics stood in for a fitted model).
<sub>owner: **scholar**</sub>

## Citation
Dow J; Francesco GF; Berg C et al. (1996). Journal of pharmaceutical sciences 85
  ·  DOI: [10.1021/js960041m](https://doi.org/10.1021/js960041m)

## Model component
<dbs-pgx drug="dolasetron" model-id="Dolasetron_Dow1996_reference" status="model_quarantined" stale="false" population="dogs" measured-compound="dolasetron" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| terminal elimination half-life (t1/2) | `Q57` · t1/2z | 0.1 | h | 360.0 | [h] | not captured | llm (0.6) | Dow_1996:abstract | — | not captured |
| total body plasma clearance (Cltot) | `Q22` · CL | 109 | mL/min/kg | 0.00012716666666666665 | [ml] / [[min] · [kg]] | not captured | llm_confirmed (0.6) | Dow_1996:abstract | — | not captured |
| apparent volume of distribution (aVd beta) | `Q76` · V/F | 0.83 | L/kg | 0.0581 | [l] / [kg] | not captured | exact (1.0) | Dow_1996:abstract | — | not captured |
| bioavailability (F) | `Q40` · Fab | 7 | % | not captured | not captured | not captured | exact (1.0) | Dow_1996:abstract | — | not captured |
| aVd beta | `Q63` · V1 | 8.5 | L/kg | 0.5950000000000001 | [l] / [kg] | not captured | llm_corrected (0.6) | Dow_1996:abstract | — | not captured |
| apparent first-order formation rate constant (ki) | `Q305` · kfm | 7 | h-1 | 0.0019444444444444444 | [1] / [h] | not captured | llm_confirmed (0.6) | Dow_1996:abstract | — | not captured |
| median Tmax | `Q56` · tmax | 0.33 | h | 1188.0 | [h] | not captured | llm_confirmed (0.6) | Dow_1996:abstract, Dow_1996:abstract | — | not captured |
| first-order absorption rate constants (ka) | `Q49` · kabs | 14 | h-1 | 0.0038888888888888888 | [1] / [h] | not captured | llm_confirmed (0.6) | Dow_1996:abstract, Dow_1996:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('t1/2', value 4.0) — already have one for this compound
- dropped duplicate Q22 ('Cltot', value 25) — already have one for this compound
- dropped value-less row: 'first-order elimination rate constant (kel)' (captured trailing unit 'kel' for child rows)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dolasetron
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Dow_1996_metadata.yaml (14 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Dow_1996:abstract', 'Dow_1996:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Dow_1996:abstract', 'Dow_1996:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dow_1996:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 458 L/h | not captured | not captured | ['Dow_1996:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 595 L | not captured | not captured | ['Dow_1996:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 58.1 L | not captured | not captured | ['Dow_1996:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | fail | Kfm (rate_constant) → CL = k·V | unit_class_mismatch flagged, not converted | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dolasetron/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dow_1996` / `Dow_1996::reference`)
- model: `../../../knowledgebase/drugs/drug_dolasetron/models/modelica/_needs_review/Dolasetron_Dow1996_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_dolasetron/models/modelica/_needs_review/Dolasetron_Dow1996_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_matlab.zip" download>Dolasetron_Dow1996_reference_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_matlab_simbio.zip" download>Dolasetron_Dow1996_reference_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_sbml.zip" download>Dolasetron_Dow1996_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dolasetron/Dolasetron_Dow1996_reference/Dolasetron_Dow1996_reference_cellml.zip" download>Dolasetron_Dow1996_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-18 11:58 UTC</sub>
