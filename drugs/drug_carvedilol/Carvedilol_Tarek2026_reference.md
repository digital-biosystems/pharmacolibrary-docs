<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Tarek_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Hwang_2023_HR&quot;,&quot;label&quot;:&quot;Hwang_2023 \u00b7 HR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/pd_Hwang_2023_HR.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yamamoto_2024_E&quot;,&quot;label&quot;:&quot;Yamamoto_2024 \u00b7 E&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/pd_Yamamoto_2024_E.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Tarek2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Tarek M et al., Model-informed dose optimization of car…, Scientific reports (2026)
  ·  DOI: [10.1038/s41598-026-56578-3](https://doi.org/10.1038/s41598-026-56578-3)

## Model component
<dbs-pgx drug="carvedilol" model-id="Carvedilol_Tarek2026_reference" status="rejected" stale="false" population="adults with cirrhosis (Child-Pugh A/B) and healthy volunteers" measured-compound="carvedilol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'SBP (mmHg)' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col5', 'Tab4:row2:col6'])
- dropped unlinked row (NIL): 'The end of 3 months of treatment' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col5', 'Tab4:row6:col5', 'Tab4:row6:col6', 'Tab4:row9:col5', 'Tab4:row9:col6', 'Tab4:row12:col5', 'Tab4:row15:col5', 'Tab4:row18:col5', 'Tab4:row21:col5', 'Tab4:row24:col5', 'Tab4:row27:col5', 'Tab4:row30:col5'])
- dropped unlinked row (NIL): '% Change' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col5', 'Tab4:row7:col5', 'Tab4:row7:col6', 'Tab4:row10:col5', 'Tab4:row10:col6', 'Tab4:row13:col5', 'Tab4:row16:col5', 'Tab4:row19:col5', 'Tab4:row19:col6', 'Tab4:row22:col5', 'Tab4:row25:col5', 'Tab4:row28:col5', 'Tab4:row28:col6', 'Tab4:row31:col5'])
- dropped unlinked row (NIL): 'DBP (mmHg)' — extend the ontology if this is a real PK parameter (source ['Tab4:row5:col5', 'Tab4:row5:col6', 'Tab4:row5:col7'])
- dropped unlinked row (NIL): 'MAP (mmHg)' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col5', 'Tab4:row8:col6'])
- dropped unlinked row (NIL): 'HR (beats/min)' — extend the ontology if this is a real PK parameter (source ['Tab4:row11:col5', 'Tab4:row11:col6', 'Tab4:row11:col7'])
- dropped unlinked row (NIL): 'PVD (mm)' — extend the ontology if this is a real PK parameter (source ['Tab4:row14:col5', 'Tab4:row14:col6'])
- dropped unlinked row (NIL): 'PVV (cm/s)' — extend the ontology if this is a real PK parameter (source ['Tab4:row17:col5', 'Tab4:row17:col6'])
- dropped unlinked row (NIL): 'CI (cm²/[cm/s])' — extend the ontology if this is a real PK parameter (source ['Tab4:row20:col5', 'Tab4:row20:col6'])
- dropped unlinked row (NIL): 'HARI' — extend the ontology if this is a real PK parameter (source ['Tab4:row23:col5', 'Tab4:row23:col6'])
- dropped unlinked row (NIL): 'MLVI (cm/s)' — extend the ontology if this is a real PK parameter (source ['Tab4:row26:col5', 'Tab4:row26:col6'])
- dropped unlinked row (NIL): 'Platelets count (×10³/µL)' — extend the ontology if this is a real PK parameter (source ['Tab4:row29:col5', 'Tab4:row29:col6'])
- table mostly unlinked (12/12 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=carvedilol
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab4:row2:col4 = '&lt; 0.001*'
- unparsed cell Tab4:row2:col7 = '&lt; 0.001*'
- unparsed cell Tab4:row3:col3 = '0.006*'
- unparsed cell Tab4:row3:col6 = '0.002*'
- unparsed cell Tab4:row4:col6 = '0.02 *'
- unparsed cell Tab4:row8:col4 = '0.008*'
- unparsed cell Tab4:row8:col7 = '0.015*'
- unparsed cell Tab4:row9:col3 = '0.016*'
- unparsed cell Tab4:row11:col4 = '0.042*'
- unparsed cell Tab4:row12:col3 = '0.001*'
- unparsed cell Tab4:row12:col6 = '0.003*'
- unparsed cell Tab4:row13:col3 = '0.003*'
- unparsed cell Tab4:row13:col6 = '0.040 *'
- unparsed cell Tab4:row14:col4 = '&lt; 0.001*'
- unparsed cell Tab4:row14:col7 = '&lt; 0.001*'
- unparsed cell Tab4:row15:col3 = '&lt; 0.001*'
- unparsed cell Tab4:row15:col6 = '&lt; 0.001*'
- unparsed cell Tab4:row16:col6 = '0.008 *'
- unparsed cell Tab4:row17:col4 = '&lt; 0.001*'
- unparsed cell Tab4:row17:col7 = '&lt; 0.001*'
- unparsed cell Tab4:row18:col3 = '&lt; 0.001*'
- unparsed cell Tab4:row18:col6 = '&lt; 0.001*'
- unparsed cell Tab4:row20:col4 = '&lt; 0.001*'
- unparsed cell Tab4:row20:col7 = '&lt; 0.001*'
- unparsed cell Tab4:row21:col3 = '&lt; 0.001*'
- unparsed cell Tab4:row21:col6 = '&lt; 0.001*'
- unparsed cell Tab4:row22:col6 = '0.03 *'
- unparsed cell Tab4:row23:col4 = '&lt; 0.001*'
- unparsed cell Tab4:row23:col7 = '&lt; 0.001*'
- unparsed cell Tab4:row24:col3 = '0.001*'
- unparsed cell Tab4:row24:col6 = '&lt; 0.001*'
- unparsed cell Tab4:row25:col6 = '0.007 *'
- unparsed cell Tab4:row26:col4 = '0.001*'
- unparsed cell Tab4:row26:col7 = '&lt; 0.001*'
- unparsed cell Tab4:row27:col3 = '&lt; 0.001*'
- unparsed cell Tab4:row27:col6 = '&lt; 0.001*'
- unparsed cell Tab4:row29:col4 = '0.011*'
- unparsed cell Tab4:row29:col7 = '0.037*'
- unparsed cell Tab4:row30:col3 = '0.007*'
- unparsed cell Tab4:row30:col6 = '0.031*'
- unparsed cell Tab4:row31:col6 = '0.041 *'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (4/4 fields) | none |

_Every reader agrees on every compared field of this record._

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tarek_2026` / `Tarek_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-01 15:58 UTC</sub>
