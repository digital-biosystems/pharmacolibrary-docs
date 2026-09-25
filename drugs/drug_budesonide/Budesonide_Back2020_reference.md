<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;budesonide&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/&quot;},{&quot;label&quot;:&quot;Back_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Budesonide_Lnnebo2007_reference&quot;,&quot;label&quot;:&quot;L\u00f6nnebo_2007_reference&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/Budesonide_Lnnebo2007_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Budesonide_Rubin2015_reference&quot;,&quot;label&quot;:&quot;Rubin_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/Budesonide_Rubin2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Budesonide_Back2020_reference&quot;,&quot;label&quot;:&quot;Back_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_budesonide/Budesonide_Back2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# budesonide — `Budesonide_Back2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C8 unreachable/orphan compartment or unlinked metabolite.
**How to address:** not a curation fix — the pipeline is the limit here (fulltext: the record was built from the abstract alone, so reported summary statistics stood in for a fitted model).
<sub>owner: **curator**</sub>

> **Dose compound ≠ measured compound:** dosed `budesonide/formoterol`, measured `budesonide`.

## Citation
Back HM; Lee JB; Kim A; Park SJ; Kim J; Chae JW; et al. et al. (2020). Pharmaceutics 12
  ·  DOI: [10.3390/pharmaceutics12040336](https://doi.org/10.3390/pharmaceutics12040336)

## Model component
<dbs-pgx drug="budesonide" model-id="Budesonide_Back2020_reference" status="rejected" stale="false" population="adults with moderate asthma" measured-compound="budesonide" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q63` · V1 | 216 | L | 0.216 | [l] | not captured | exact (1.0) | Back_2020:abstract, Back_2020:abstract | — | not captured |
| CL (L·hr−1) | `Q22` · CL | 18.4 | L·hr−1 | 5.111111111111111e-06 | [l] / [h] | not captured | exact (1.0) | Back_2020:abstract, Back_2020:abstract | — | not captured |
| ka,Lung (hr−1) | `Q49` · kabs | 19.7 | hr−1 | 0.005472222222222222 | [1] / [h] | not captured | llm_confirmed (0.6) | Back_2020:abstract | — | not captured |
| Vp,BUD (L) | `Q64` · V2 | 106 | L | 0.106 | [l] | not captured | llm_confirmed (0.6) | Back_2020:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('ka,Gut (hr−1)', value 0) — already have one for this compound
- dropped unlinked row (NIL): 'BASE' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped PD-category row 'IC50 (ng·mL−1)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract'])
- dropped PD-category row 'EC50 (pg·mL−1)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract'])
- dropped PD-category row 'kout (hr−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Back_2020:abstract', 'Back_2020:abstract'])
- dropped value-less row: 'Sex (male/female), n/n (%/%)' (captured trailing unit '%/%' for child rows)
- dropped unlinked row (NIL): 'Age (years), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Weight (kg), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Height (cm), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped value-less row: 'ADRB2 genotype (n), AA/AG/GG'
- dropped unlinked row (NIL): 'Asthma duration (years), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline FEV1 (%), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline sputum eosinophil cationic protein (µg·L−1), mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- dropped unlinked row (NIL): 'Baseline Asthma control test score, mean ± SD' — extend the ontology if this is a real PK parameter (source ['Back_2020:abstract'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc (L)); Q22 (CL (L·hr−1)); Q64 (Vp,BUD (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=budesonide
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Back_2020_extracted.txt (21 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Back_2020:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Back_2020:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 18.4 | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18.4 L/h | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 216 L | not captured | not captured | ['Back_2020:abstract', 'Back_2020:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 106 L | not captured | not captured | ['Back_2020:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_budesonide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Back_2020` / `Back_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-22 04:51 UTC</sub>
