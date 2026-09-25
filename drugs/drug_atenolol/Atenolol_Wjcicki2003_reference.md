<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;W\u00f3jcicki_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atenolol_Kir2025_reference&quot;,&quot;label&quot;:&quot;Kir_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/Atenolol_Kir2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atenolol_Buck1989_reference&quot;,&quot;label&quot;:&quot;Buck_1989_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/Atenolol_Buck1989_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atenolol_Scherholz2018_reference&quot;,&quot;label&quot;:&quot;Scherholz_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/Atenolol_Scherholz2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atenolol_Wjcicki2003_reference&quot;,&quot;label&quot;:&quot;W\u00f3jcicki_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/Atenolol_Wjcicki2003_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Wjcicki2003_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** no structural parameters extracted (nothing to build)
**Second reading:** Independently confirmed by `gpt-oss:120b`.
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

## Citation
Wójcicki J; Jaroszynska M; Droździk M; Pawlik A; Gawrońska-Szklarz B; Sterna R et al. (2003). Biopharmaceutics & drug disposition 24
  ·  DOI: [10.1002/bdd.357](https://doi.org/10.1002/bdd.357)

## Model component
<dbs-pgx drug="atenolol" model-id="Atenolol_Wjcicki2003_reference" status="rejected" stale="false" population="obese subjects with normolipaemia or hyperlipidaemia and healthy lean volunteers" measured-compound="propranolol and atenolol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol and atenolol

**Extraction notes:**
- unparsed cell tab_2:row2:col1 = '125.0 AE 4.2 81.0 AE 2.6 75.6 AE 1.8 132.2 AE 4.7 87.2 AE 2.4 61.4 AE 4.6 130.0 AE 5.6 88.3 AE 2.5 73.7 AE 5.8'
- unparsed cell tab_2:row3:col1 = '122.2 AE 2.9 81.4 AE 2.5 68.9 AE 1.2 a 126.7 AE 5.6 84.4 AE 3.2 56.7 AE 3.2 a 115.8 AE 4.0 a 88.3 AE 1.0 67.8 AE 4.8'
- unparsed cell tab_2:row4:col1 = '116.1 AE 2.2 a 78.9 AE 2.6 66.3 AE 1.2 a 122.8 AE 5.9 83.3 AE 3.1 57.1 AE 2.2 113.3 AE 1.7 a 85.8 AE 1.5 64.5 AE 4.7 a'
- unparsed cell tab_2:row5:col1 = '117.5 AE 2.6 78.6 AE 2.8 65.6 AE 1.6 a 118.9 AE 7.0 83.3 AE 3.7 56.1 AE 2.7 121.7 AE 6.7 90.0 AE 3.4 62.3 AE 5.0 a'
- unparsed cell tab_2:row6:col1 = '112.5 AE 2.7 a 76.8 AE 2.2 a 62.7 AE 1.1 a 117.2 AE 6.7 a 77.8 AE 4.7 a 55.2 AE 2.2 115.8 AE 6.0 86.7 AE 1.7 64.0 AE 5.8 a'
- unparsed cell tab_2:row7:col1 = '112.2 AE 2.9 a 77.5 AE 2.3 61.9 AE 1.4 a 111.1 AE 4.8 a 76.7 AE 3.2 51.8 AE 2.4 a 113.3 AE 5.7 80.8 AE 4.0 a 63.0 AE 5.2 a'
- unparsed cell tab_2:row8:col1 = '114.2 AE 3.1 a 74.2 AE 2.3 64.5 AE 1.3 a 109.4 AE 6.2 70.6 AE 4.3 56.0 AE 3.0 115.0 AE 5.5 79.2 AE 3.7 66.3 AE 6.2'
- unparsed cell tab_2:row9:col1 = '113.9 AE 4.2 a 74.4 AE 2.8 a 65.8 AE 1.4 122.8 AE 4.7 75.6 AE 3.3 56.0 AE 2.1 120.8 AE 4.4 85.0 AE 3.6 a 69.3 AE 6.2 a'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

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
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atenolol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wójcicki_2003` / `Wójcicki_2003::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-22 12:45 UTC</sub>
