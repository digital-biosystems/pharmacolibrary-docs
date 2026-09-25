<div class="pk-tab-mark" data-tab="Information"></div>

# vertical force — PD  <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Jeunesse_2011`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Jeunesse EC; Bargues IA; Toutain CE; Lacroix MZ; Letellier IM; Giraudel JM; et al. et al. (2011). The Journal of pharmacology and experimental therapeutics 338
  ·  DOI: [10.1124/jpet.110.178350](https://doi.org/10.1124/jpet.110.178350)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k in — Body Temperature (CV%) | `Q327` · not captured | 94.6 | not captured | not captured | space_fold (not captured) | tab_2:row1:col3 |
| k in — Lameness Score (CV%) | `Q327` · not captured | 0.0057 | not captured | not captured | space_fold (not captured) | tab_2:row1:col4 |
| k in — Creeping (CV%) | `Q327` · not captured | 13.8 | not captured | not captured | space_fold (not captured) | tab_2:row1:col5 |
| k in — Force Plate (CV%) | `Q327` · not captured | 7.64 | not captured | not captured | space_fold (not captured) | tab_2:row1:col6 |
| k in — Analgesia (CV%) | `Q327` · not captured | 43 | not captured | not captured | space_fold (not captured) | tab_2:row1:col7 |
| IC 50B Nanograms per — Definition | `Q322` · not captured | 69 | ng/ml | not captured | llm (not captured) | tab_2:row3:col2 |
| IC 50B Nanograms per — Lameness Score (CV%) | `Q322` · not captured | 56 | ng/ml | not captured | llm (not captured) | tab_2:row3:col4 |
| IC 50B Nanograms per — Force Plate (CV%) | `Q322` · not captured | 72 | ng/ml | not captured | llm (not captured) | tab_2:row3:col6 |
| IC 50B Nanograms per | `Q322` · not captured | 68 | ng/ml | not captured | llm (not captured) | tab_2:row3:col8 |
| IC 50B Nanograms per | `Q322` · not captured | 61 | ng/ml | not captured | llm (not captured) | tab_2:row3:col10 |
| I maxA No unit — Definition | `Q323` · not captured | 0.84 | not captured | not captured | llm (not captured) | tab_2:row8:col2 |
| I maxA No unit — Body Temperature (CV%) | `Q323` · not captured | 0.82 | not captured | not captured | llm (not captured) | tab_2:row8:col3 |
| I maxA No unit — Lameness Score (CV%) | `Q323` · not captured | 1 | not captured | not captured | llm (not captured) | tab_2:row8:col4 |
| I maxA No unit — Force Plate (CV%) | `Q323` · not captured | 1 | not captured | not captured | llm (not captured) | tab_2:row8:col6 |
| I maxA No unit | `Q323` · not captured | 1 | not captured | not captured | llm (not captured) | tab_2:row8:col8 |
| IC 50A Nanograms per — Definition | `Q322` · not captured | 210 | ng/ml | not captured | llm (not captured) | tab_2:row10:col2 |
| IC 50A Nanograms per — Lameness Score (CV%) | `Q322` · not captured | 466 | ng/ml | not captured | llm (not captured) | tab_2:row10:col4 |
| IC 50A Nanograms per — Analgesia (CV%) | `Q322` · not captured | 546 | ng/ml | not captured | llm (not captured) | tab_2:row10:col7 |
| IC 50A Nanograms per | `Q322` · not captured | 390 | ng/ml | not captured | llm (not captured) | tab_2:row10:col9 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>← back to [kaolin](drugs/drug_kaolin/)</sub>
