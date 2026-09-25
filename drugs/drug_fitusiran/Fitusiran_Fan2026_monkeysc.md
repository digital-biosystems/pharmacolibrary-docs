<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fitusiran&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/&quot;},{&quot;label&quot;:&quot;Fan_2026 \u00b7 monkeysc&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fitusiran_Sten2023_reference&quot;,&quot;label&quot;:&quot;Sten_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Sten2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_humansa&quot;,&quot;label&quot;:&quot;Fan_2026_humansa&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_humansa.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_micea&quot;,&quot;label&quot;:&quot;Fan_2026_micea&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_micea.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fitusiran_Fan2026_monkeysc&quot;,&quot;label&quot;:&quot;Fan_2026_monkeysc&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fitusiran_Fan2026_ratsb&quot;,&quot;label&quot;:&quot;Fan_2026_ratsb&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/Fitusiran_Fan2026_ratsb.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fitusiran — `Fitusiran_Fan2026_monkeysc`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** no distribution volume and no clearance/elimination — not a compartmental popPK model (exposure/outcome paper); C5 dimension mismatch on a structural parameter.
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[fesc]` (not captured vs 0.019) and 3 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Fan X; Xiao Y; Cao K; Zhang R; Yan X et al. (2026). Molecular therapy. Nucleic acids 37
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

## Model component
<dbs-pgx drug="fitusiran" model-id="Fitusiran_Fan2026_monkeysc" status="rejected" stale="false" population="mice, rats, monkeys, and humans" measured-compound="fitusiran" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (1/h) | `Q49` · kabs | 0.38 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row3:col4 | — | not captured |
| Fu (1/h) | `Q46` · fu | 0.39 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row4:col4 | — | not captured |
| RTOT0 (nM) | `Q333` · Rtot | 33.1 | nM | not captured | [nM] | not captured | llm (0.6) | tbl1:row9:col4 | — | not captured |
| Vm (nmol/h) | `Q66` · Vmax | 5.81 | nmol/h | not captured | [nM] / [h] | not captured | special_case (0.95) | tbl1:row10:col4 | — | not captured |
| Km (∗105 nM) | `Q1` · Km | 27.44 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row11:col4 | — | not captured |
| koff (1/h) | `Q330` · koff | 0.021 | units | not captured | [units] | not captured | exact (1.0) | tbl1:row12:col4 | — | not captured |
| kint (1/h) | `Q334` · kint | 2.01 | nM−1·h−1 | not captured | [1] / [[h] · [nM]] | not captured | exact (1.0) | tbl1:row15:col4 | — | not captured |
| Kdis (∗10−3 h−1) | `Q331` · KD | 0.14 | nM | not captured | [nM] | not captured | llm (0.6) | tbl1:row21:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'ka (1/h)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'PSLiver (L/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row5:col4'])
- dropped unlinked row (NIL): 'KPLiver' — extend the ontology if this is a real PK parameter (source ['tbl1:row6:col4'])
- dropped unlinked row (NIL): 'KPRem' — extend the ontology if this is a real PK parameter (source ['tbl1:row7:col4'])
- dropped unlinked row (NIL): 'KDEGD (1/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row8:col4'])
- unit_dimension_mismatch: 'RTOT0 (nM)' → Q333 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vm (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Km (∗105 nM)' → Q1 (unit '[luminosity] / [length] ** 2' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'koff (1/h)' → Q330 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'fesc' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col4'])
- unit_dimension_unknown: 'nM−1·h−1' (kint)
- dropped PD-category row 'Ksyn (nM/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row19:col4'])
- dropped unlinked row (NIL): 'Kass (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row20:col4'])
- unit_dimension_mismatch: 'Kdis (∗10−3 h−1)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'KDEGE (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row22:col4'])
- dropped PD-category row 'kdeg, m (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col4'])
- dropped PD-category row 'kdeg, p (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col4'])
- dropped unlinked row (NIL): 'Smax' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col4'])
- dropped PD-category row 'SC50 (nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row29:col4'])
- dropped unlinked row (NIL): 'γ1' — extend the ontology if this is a real PK parameter (source ['tbl1:row30:col4'])
- dropped unlinked row (NIL): 'γ2' — extend the ontology if this is a real PK parameter (source ['tbl1:row31:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fitusiran
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'monkeysc' subgroup of Fan_2026 (paper reports 4 populations: humansa, micea, monkeysc, ratsb)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S3 transcribed (42 record(s))
- LLM selected parameter table(s) 1, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[fesc]` | not captured | 0.019 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kdegd]` | not captured | 0.0012 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpliver]` | not captured | 1.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[psliver]` | not captured | 56.73 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row11:col4'] |
| C5_dimension_Q330 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row12:col4'] |
| C5_dimension_Q331 | fail | [length] | nM | not captured | not captured | ['tbl1:row21:col4'] |
| C5_dimension_Q333 | fail | [length] | nM | not captured | not captured | ['tbl1:row9:col4'] |
| C5_dimension_Q49 | fail | [luminosity] / [length] ** 2 | units | not captured | not captured | ['tbl1:row3:col4'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | not captured | not captured | ['tbl1:row10:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fitusiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fan_2026` / `Fan_2026::monkeysc`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-18 22:20 UTC</sub>
