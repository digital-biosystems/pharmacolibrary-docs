<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Jo\u0144czyk_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Joczyk2022_reference&quot;,&quot;label&quot;:&quot;Jo\u0144czyk_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tapentadol_Zhang2017_reference&quot;,&quot;label&quot;:&quot;Zhang_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Zhang2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tapentadol — `Tapentadol_Joczyk2022_reference`

> ## <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the model was built but never simulated.
**Second reading:** `gpt-oss:120b` read this paper differently on `model.parameterization` (apparent vs mechanistic) and 4 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Jończyk R; Beuter C; Bulawa B; Buller S; Eibl C; Elling C; et al. et al. (2022). Journal of pain research 15
  ·  DOI: [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902)

## Model component
<dbs-pgx drug="tapentadol" model-id="Tapentadol_Joczyk2022_reference" status="not_simulated" stale="false" population="children aged 2 to &lt;7 years with acute pain" measured-compound="tapentadol" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax,sd (ng/mL) | `Q32` · Cmax | 159.3 | ng/mL | not captured | [ng] / [ml] | 51.6 | llm_confirmed (0.6) | t0003:row0:col3, t0003:row0:col4, t0003:row0:col5, t0003:row0:col6, t0003:row0:col8, t0003:row0:col9, t0003:row0:col10, t0003:row0:col11, t0003:row0:col13, t0003:row0:col14, t0003:row0:col15, t0003:row0:col16 | — | not captured |
| Cmin,sd (ng/mL) | `Q36` · Cmin | 22.2 | ng/mL | not captured | [ng] / [ml] | 72.9 | llm_confirmed (0.6) | t0003:row1:col3, t0003:row1:col4, t0003:row1:col5, t0003:row1:col6, t0003:row1:col8, t0003:row1:col9, t0003:row1:col10, t0003:row1:col11, t0003:row1:col13, t0003:row1:col14, t0003:row1:col15, t0003:row1:col16 | — | not captured |
| AUCτ,sd (h•ng/mL) | `Q19` · AUCt | 230.7 | h•ng/mL | not captured | [[h] · [ng]] / [ml] | 34.9 | llm_confirmed (0.6) | t0003:row2:col3, t0003:row2:col4, t0003:row2:col5, t0003:row2:col6, t0003:row2:col8, t0003:row2:col9, t0003:row2:col10, t0003:row2:col11, t0003:row2:col13, t0003:row2:col14, t0003:row2:col15, t0003:row2:col16 | — | not captured |
| AUCτ,ss (h•ng/mL) | `Q18` · AUCSS | 292.3 | h•ng/mL | not captured | [[h] · [ng]] / [ml] | 41.4 | llm_corrected (0.6) | t0003:row5:col3, t0003:row5:col4, t0003:row5:col5, t0003:row5:col6, t0003:row5:col8, t0003:row5:col9, t0003:row5:col10, t0003:row5:col11, t0003:row5:col13, t0003:row5:col14, t0003:row5:col15, t0003:row5:col16 | — | not captured |
| Tapentadol mature CL | `Q22` · CL | 93.7 | L/h | 2.602777777777778e-05 | L/h | not captured | boundary (0.8) | Jończyk_2022:other_prose | — | not captured |
| CL/F | `Q27` · CL/F | 272 | L/h | 7.555555555555556e-05 | L/h | not captured | exact (1.0) | Jończyk_2022:other_prose | — | not captured |
| V/F | `Q76` · V/F | 1203 | L | 1.203 | L | not captured | exact (1.0) | Jończyk_2022:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- unit_dimension_unknown: 'h•ng/mL' (AUCt)
- dropped duplicate Q32 ('Cmax,ss (ng/mL)', value '201.2') — already have one for this compound
- dropped duplicate Q36 ('Cmin,ss (ng/mL)', value '29.3') — already have one for this compound
- unit_dimension_unknown: 'h•ng/mL' (AUCSS)
- dropped unlinked row (NIL): 'AF' — extend the ontology if this is a real PK parameter (source ['t0003:row6:col3', 't0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6', 't0003:row6:col8', 't0003:row6:col9', 't0003:row6:col10', 't0003:row6:col11', 't0003:row6:col13', 't0003:row6:col14', 't0003:row6:col15', 't0003:row6:col16'])
- salvaged Q22 ('Tapentadol mature CL'=93.7) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F'=272) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=1203) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tapentadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table t0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[af]` | not captured | 1.28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 272 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tapentadol mature cl]` | 93.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | 1203 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t0003:row0:col3', 't0003:row0:col4', 't0003:row0:col5', 't0003:row0:col6', 't0003:row0:col8', 't0003:row0:col9', 't0003:row0:col10', 't0003:row0:col11', 't0003:row0:col13', 't0003:row0:col14', 't0003:row0:col15', 't0003:row0:col16'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t0003:row1:col3', 't0003:row1:col4', 't0003:row1:col5', 't0003:row1:col6', 't0003:row1:col8', 't0003:row1:col9', 't0003:row1:col10', 't0003:row1:col11', 't0003:row1:col13', 't0003:row1:col14', 't0003:row1:col15', 't0003:row1:col16'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 93.7 L/h | not captured | not captured | ['Jończyk_2022:other_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 272 L/h | not captured | not captured | ['Jończyk_2022:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.2e+03 L | not captured | not captured | ['Jończyk_2022:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tapentadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jończyk_2022` / `Jończyk_2022::reference`)
- model: `../../../knowledgebase/drugs/drug_tapentadol/models/modelica/Tapentadol_Joczyk2022_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_tapentadol/models/modelica/Tapentadol_Joczyk2022_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference/Tapentadol_Joczyk2022_reference_modelica.zip" download>Tapentadol_Joczyk2022_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference/Tapentadol_Joczyk2022_reference_matlab.zip" download>Tapentadol_Joczyk2022_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference/Tapentadol_Joczyk2022_reference_matlab_simbio.zip" download>Tapentadol_Joczyk2022_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference/Tapentadol_Joczyk2022_reference_sbml.zip" download>Tapentadol_Joczyk2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference/Tapentadol_Joczyk2022_reference_cellml.zip" download>Tapentadol_Joczyk2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-20 21:29 UTC</sub>
