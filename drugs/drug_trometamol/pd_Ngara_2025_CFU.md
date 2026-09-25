<div class="pk-tab-mark" data-tab="Information"></div>

# colony-forming units — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Ngara_2025`
- **model family:** `emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Ngara B; Flori L; van Wijk RC; Ernest JP; Tyagi S; Soni H; Hölscher C; Walter K; Dreisbach J; Hoelscher M; Nuermberger EL; Savic RM et al. (2025). The Journal of infectious diseases 231
  ·  DOI: [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL/F, Lh−1 — Estimates (RSE %) | `Q27` · not captured | 0.119 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row2:col1 |
| Km, mgL−1 — Estimates (RSE %) | `Q1` · not captured | 0.948 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row3:col1 |
| Vc/F, L — Estimates (RSE %) | `Q290` · not captured | 0.041 | L | not captured | exact (not captured) | jiaf088-T1:row4:col1 |
| Vmax, mgL−1h−1 — Estimates (RSE %) | `Q66` · not captured | 1.9 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row5:col1 |
| Vp/F, L — Estimates (RSE %) | `Q82` · not captured | 0.203 | L | not captured | exact (not captured) | jiaf088-T1:row6:col1 |
| Q/F, Lh−1 — Estimates (RSE %) | `Q69` · not captured | 0.042 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row7:col1 |
| Additive error, mgL−1 — Estimates (RSE %) | `Q317` · not captured | 0.105 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row9:col1 |
| Emax, d−1 — Estimates (RSE %) | `Q320` · not captured | 0.181 | d−1 | not captured | exact (not captured) | jiaf088-T1:row12:col1 |
| EC50, mgL−1 — Estimates (RSE %) | `Q321` · not captured | 0.005135 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row13:col1 |
| Additive error, log CFU lung−1 — Estimates (RSE %) | `Q317` · not captured | 1.416 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row14:col1 |
| Kd, d−1 — Estimates (RSE %) | `Q331` · not captured | 0.41 | d−1 | not captured | exact (not captured) | jiaf088-T1:row18:col1 |
| CL/F, Lh−1 — Estimates (RSE %) | `Q27` · not captured | 404 | RSE % | not captured | llm_confirmed (not captured) | jiaf088-T1:row26:col1 |
| Ka, h−1 — Estimates (RSE %) | `Q49` · not captured | 1.69 | h−1 | not captured | exact (not captured) | jiaf088-T1:row27:col1 |
| Vc/F, L — Estimates (RSE %) | `Q290` · not captured | 764 | L | not captured | exact (not captured) | jiaf088-T1:row28:col1 |
| MTT — Estimates (RSE %) | `Q81` · not captured | 0.34 | RSE % | not captured | exact (not captured) | jiaf088-T1:row30:col1 |
| Q/F — Estimates (RSE %) | `Q69` · not captured | 68 | RSE % | not captured | exact (not captured) | jiaf088-T1:row32:col1 |
| Vp/F — Estimates (RSE %) | `Q82` · not captured | 382 | RSE % | not captured | exact (not captured) | jiaf088-T1:row33:col1 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [trometamol](drugs/drug_trometamol/)</sub>
