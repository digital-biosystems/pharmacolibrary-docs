<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;aminobutyric acid&quot;,&quot;href&quot;:&quot;drugs/drug_aminobutyric_acid/&quot;},{&quot;label&quot;:&quot;Poslusney_2026 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** LI-633 drives name (in AUC of EMG response) (inhibition; the model form was not identified).

**Model:** No model was generated from this record.

> LI-633 acts as a positive allosteric modulator of GABA-A receptors, potentiating muscimol- and GABA-induced currents (in rat DRG neurons, EC50 70.4 nM with Emax ~100% at an EC30 muscimol concentration of 3 µM); in heterologous systems LI-633 potentiated GABA responses with EC50 values of 0.093 µM (α1β2γ2), 0.009 µM (α2β2γ2), 0.128 µM (α3β2γ2) and 0.008 µM (α5β2γ2) and Emax values of 236%, 222%, 208% and 79.4%, respectively. In vivo, oral LI-633 doses (1–30 mg/kg) dose-dependently reduced the visceromotor response (VMR, EMG AUC) to colorectal distension in IBS rats, consistent with potentiation of GABAergic inhibition of peripheral nociceptive signalling rather than a direct inhibitory effect
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Poslusney_2026`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Poslusney MS; Li Q; Buchler IP; Huang Y; Liu L; Zhu Y; et al. et al. (2026). Cellular and molecular gastroenterology and hepatology 20
  ·  DOI: [10.1016/j.jcmgh.2025.101704](https://doi.org/10.1016/j.jcmgh.2025.101704)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | EC50, μM — α1ß2γ2 | `Q321` · not captured | 0.093 | unknown | not captured | llm_confirmed (not captured) | tbl1:row0:col2 |
| PD (effect) | EC50, μM — α2ß2γ2 | `Q321` · not captured | 0.009 | unknown | not captured | llm_confirmed (not captured) | tbl1:row0:col3 |
| PD (effect) | EC50, μM — α3ß2γ2 | `Q321` · not captured | 0.128 | unknown | not captured | llm_confirmed (not captured) | tbl1:row0:col4 |
| PD (effect) | EC50, μM — α5ß2γ2 | `Q321` · not captured | 0.008 | unknown | not captured | llm_confirmed (not captured) | tbl1:row0:col5 |
| PD (effect) | Emax, %a — α1ß2γ2 | `Q320` · not captured | 236 | not captured | not captured | llm_confirmed (not captured) | tbl1:row1:col2 |
| PD (effect) | Emax, %a — α2ß2γ2 | `Q320` · not captured | 222 | not captured | not captured | llm_confirmed (not captured) | tbl1:row1:col3 |
| PD (effect) | Emax, %a — α3ß2γ2 | `Q320` · not captured | 208 | not captured | not captured | llm_confirmed (not captured) | tbl1:row1:col4 |
| PD (effect) | Emax, %a — α5ß2γ2 | `Q320` · not captured | 79.4 | not captured | not captured | llm_confirmed (not captured) | tbl1:row1:col5 |

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
<sub>← back to [aminobutyric acid](drugs/drug_aminobutyric_acid/)</sub>
