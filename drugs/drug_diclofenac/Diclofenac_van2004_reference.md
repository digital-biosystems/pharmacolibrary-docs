<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;van_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_van2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.368). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The diclofenac record was rejected because the volume of distribution is reported as 55 '%' instead of a volume unit, a dimension mismatch on a structural parameter.**

The record, built from the abstract only of van_2004 (children undergoing tonsillectomy), lists diclofenac volume of distribution as 55 with unit '%', which is not a valid dimension for a volume of distribution. The formation clearances to 4'-hydroxydiclofenac (8.41 l.h(-1)) and 5'-hydroxydiclofenac (3.41 l.h(-1)) are labelled with '% CV' in the source text despite carrying l.h(-1) units. A second reader disagreed on several parameter assignments, including the absorption half-time (null versus 14) and the relative bioavailability (1.26 assigned to a differently worded field). Extracted — 4'-hydroxydiclofenac: CLfm 8.41 l.h(-1); 5'-hydroxydiclofenac: CLfm 3.41 l.h(-1); diclofenac: CL 33 l.h(-1) 70 kg(-1), CL 27.5 l.h(-1) 70 kg(-1), t1/2ka 0.613 h, tlag 0.188 h, V 55 %, Frel 1.26 relative bioavailability.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has diclofenac, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
van der Marel CD et al., Diclofenac and metabolite pharmacokinet…, Paediatric anaesthesia (2004)
  ·  DOI: [10.1111/j.1460-9592.2004.01232.x](https://doi.org/10.1111/j.1460-9592.2004.01232.x)

## Model component
<dbs-pgx drug="diclofenac" model-id="Diclofenac_van2004_reference" status="rejected" stale="false" population="children undergoing tonsillectomy" measured-compound="diclofenac" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| The formation clearance to 4'-hydroxydiclofenac (% CV) | `Q370` · CLfm | 8.41 | l.h(-1) | 2.3361111111111114e-06 | [l] / [h] | not captured | exact (1.0) | van_2004:abstract | — | not captured |
| and to 5'-hydroxydiclofenac | `Q370` · CLfm | 3.41 | l.h(-1) | 9.472222222222223e-07 | [l] / [h] | not captured | exact (1.0) | van_2004:abstract | — | not captured |
| Clearance by other routes | `Q22` · CL | 33.0 | l.h(-1) 70 kg(-1) | 0.0006416666666666667 | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| Elimination clearance of hydroxyl metabolites | `Q22` · CL | 27.5 | l.h(-1) 70 kg(-1) | 0.0005347222222222222 | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| absorption half-life | `Q95` · t1/2ka | 0.613 | h | 2206.8 | [h] | not captured | llm_corrected (0.6) | van_2004:abstract | — | not captured |
| lag time | `Q83` · tlag | 0.188 | h | 676.8 | [h] | not captured | exact (1.0) | van_2004:abstract | — | not captured |
| diclofenac volume of distribution | `Q61` · V | 55 | % | not captured | [%] | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| The relative bioavailability of the suppository compared with an enteric-coated tablet | `Q87` · Frel | 1.26 | relative bioavailability | not captured | not captured | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed "Interoccasion variability of formation clearance to 4'-hydroxydiclofenac" → Q313 (IOV) to iov — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'diclofenac volume of distribution' → Q61 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'absorption half-time' → Q95 (unit 'dimensionless' vs ontology '[time]') — route to review
- dropped duplicate Q95 ('absorption half-time', value 14) — already have one for this compound
- covariate category for tlag from footnote/prose kept as documentation only (['van_2004:abstract'])
- unit_dimension_mismatch: "The formation clearance of the active metabolite 4'-hydroxydiclofenac contributed" → Q370 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q370 ("The formation clearance of the active metabolite 4'-hydroxydiclofenac contributed", value 19) — already have one for this compound
- dropped duplicate Q22 ('total clearance', value 44.82) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 7 linked by role; re-tagged diclofenac→4'-hydroxydiclofenac ×3, diclofenac→5'-hydroxydiclofenac ×1, diclofenac→parent ×8
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in van_2004_metadata.yaml (13 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.368 (7/19 fields) | 12 |

<details><summary>12 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[absorption half-time]` | not captured | 14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[and to 5'-hydroxydiclofenac]` | 3.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[contribution of formation clearance of the active metabolite 4'-hydroxydiclofenac to total clearance]` | not captured | 19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[diclofenac volume of distribution]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[diclofenac volume of distribution]` | not captured | 55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination clearance of hydroxyl metabolites]` | 27.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination clearance of hydroxyl metabolites]` | not captured | 27.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[formation clearance to 5'-hydroxydiclofenac]` | not captured | 3.41 | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative bioavailability of the suppository compared with an enteric-coated tablet]` | not captured | 1.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[the relative bioavailability of the suppository compared with an enteric-coated tablet]` | 1.26 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | diclofenac | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | diclofenac | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q61 | fail | dimensionless | % | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 33.0 | not captured | not captured | ['van_2004:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.31e+03 L/h | not captured | not captured | ['van_2004:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.92e+03 L/h | not captured | not captured | ['van_2004:abstract'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_diclofenac/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2004` / `van_2004::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-03 20:31 UTC</sub>
