<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_interindividual_variability&quot;,&quot;label&quot;:&quot;Lindemalm_2005_interindividual_variability&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Savic2017_reference&quot;,&quot;label&quot;:&quot;Savic_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Savic2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cladribine — `Cladribine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** C7 apparent-parameter coherence violated (double correction)
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

## Citation
Savic RM; Novakovic AM; Ekblom M; Munafo A; Karlsson MO et al. (2017). Clinical pharmacokinetics 56
  ·  DOI: [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6)

## Model component
<dbs-pgx drug="cladribine" model-id="Cladribine_Savic2017_reference" status="rejected" stale="false" population="patients with multiple sclerosis" measured-compound="cladribine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | `Q26` · CLR | 3.52 | not captured | not captured | not captured | 9.26 | llm_confirmed (0.6) | Tab4:row2:col1, Tab4:row2:col2 | — | not captured |
| CLNR, L/h | `Q79` · CLNR | 23.4 | not captured | not captured | not captured | 9.58 | llm_confirmed (0.6) | Tab4:row3:col1, Tab4:row3:col2 | — | 0.00574 (64.41% RSE) |
| Central volume, L | `Q63` · V1 | 44.0 | not captured | not captured | not captured | 22.77 | llm_confirmed (0.6) | Tab4:row4:col1, Tab4:row4:col2 | — | not captured |
| Intercompartmental Q3, L/h | `Q308` · Q3 | 14.3 | not captured | not captured | not captured | 7.73 | llm_confirmed (0.6) | Tab4:row5:col1, Tab4:row5:col2 | — | not captured |
| Intercompartmental Q4, L/h | `Q30` · Q | 53.7 | not captured | not captured | not captured | 19.06 | llm (0.6) | Tab4:row6:col1, Tab4:row6:col2 | — | not captured |
| Peripheral volume V3, L | `Q77` · V3 | 347 | not captured | not captured | not captured | 6.07 | llm_corrected (0.6) | Tab4:row7:col1, Tab4:row7:col2 | — | 0.0365 (28.47% RSE) |
| Absorption rate constant, h−1 | `Q49` · kabs | 1.08 | not captured | not captured | not captured | 21.14 | llm_confirmed (0.6) | Tab4:row9:col1, Tab4:row9:col2 | — | 0.102 (62.53% RSE) |
| Bioavailability | `Q40` · Fab | 0.456 | not captured | not captured | not captured | 7.03 | exact (1.0) | Tab4:row11:col1, Tab4:row11:col2 | — | not captured |
| Mean transit time (fed state), h | `Q81` · MTT | 0.910 | not captured | not captured | not captured | 11.03 | llm_confirmed (0.6) | Tab4:row14:col1, Tab4:row14:col2 | — | not captured |
| Number of transit compartments | `Q311` · n_transit | 2.24 | not captured | not captured | not captured | 27.15 | exact (1.0) | Tab4:row15:col1, Tab4:row15:col2 | — | not captured |
| CLR e (Vmax), μg/h | `Q66` · Vmax | 0.00280 | not captured | not captured | not captured | 25.53 | llm_confirmed (0.6) | Tab4:row29:col1, Tab4:row29:col2 | — | not captured |
| CLR e (Km), ng/L | `Q1` · Km | 0.0114 | not captured | not captured | not captured | 58.14 | llm_corrected (0.6) | Tab4:row30:col1, Tab4:row30:col2 | — | not captured |
| Apparent hepatic CL, L/hf | `Q25` · CLH | 653 | not captured | not captured | not captured | 10.64 | llm_corrected (0.6) | Tab4:row31:col1, Tab4:row31:col2 | — | not captured |
| Apparent central volume V, Lf | `Q290` · V1/F | 365 | not captured | not captured | not captured | 13.27 | llm_confirmed (0.6) | Tab4:row32:col1, Tab4:row32:col2 | — | not captured |
| theta_q83_category | `Q900` · theta_q83_category | 0.319 | not captured | not captured | not captured | 12.41 | not captured (not captured) | Tab4:row13:col1, Tab4:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q77 ('Peripheral volume V4, L', value '89.5') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant (unknown/fed state), h−1', value '1.03') — already have one for this compound
- dropped duplicate Q79 ('Fold increase in CLNR in the presence of IFNβ-1a', value '1.21') — already have one for this compound
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cladribine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.456 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cladribine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2017` / `Savic_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 06:24 UTC</sub>
