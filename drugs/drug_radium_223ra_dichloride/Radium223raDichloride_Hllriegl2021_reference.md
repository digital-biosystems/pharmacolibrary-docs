<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;radium (223Ra) dichloride&quot;,&quot;href&quot;:&quot;drugs/drug_radium_223ra_dichloride/&quot;},{&quot;label&quot;:&quot;H\u00f6llriegl_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Radium223raDichloride_Hllriegl2021_reference&quot;,&quot;label&quot;:&quot;H\u00f6llriegl_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_radium_223ra_dichloride/Radium223raDichloride_Hllriegl2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# radium (223Ra) dichloride — `Radium223raDichloride_Hllriegl2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.167). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** missing key parameters — none reported by this paper
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (radium_223ra_dichloride vs radium-223 dichloride) and 4 more field(s) — not a structural parameter.
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

## Citation
Höllriegl V; Petoussi-Henss N; Hürkamp K; Ocampo Ramos JC; Li WB et al. (2021). EJNMMI physics 8
  ·  DOI: [10.1186/s40658-021-00388-1](https://doi.org/10.1186/s40658-021-00388-1)

## Model component
<dbs-pgx drug="radium (223Ra) dichloride" model-id="Radium223raDichloride_Hllriegl2021_reference" status="rejected" stale="false" population="patients with metastatic castration-resistant prostate cancer" measured-compound="radium_223ra_dichloride" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col2', 'Tab2:row2:col2', 'Tab2:row3:col2', 'Tab2:row4:col2', 'Tab2:row5:col2', 'Tab2:row6:col2', 'Tab2:row7:col2', 'Tab2:row8:col2', 'Tab2:row9:col2', 'Tab2:row29:col2', 'Tab2:row30:col2', 'Tab2:row31:col2', 'Tab2:row35:col2', 'Tab2:row36:col2', 'Tab2:row37:col2', 'Tab2:row38:col2', 'Tab2:row39:col2', 'Tab2:row40:col2', 'Tab2:row41:col2', 'Tab2:row42:col2', 'Tab2:row43:col2', 'Tab2:row44:col2', 'Tab2:row45:col2', 'Tab2:row46:col2'])
- dropped unlinked row (NIL): 'Liver 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col2', 'Tab2:row12:col2'])
- dropped unlinked row (NIL): 'Liver 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col2'])
- dropped unlinked row (NIL): 'ST0' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col2'])
- dropped unlinked row (NIL): 'ST1' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2'])
- dropped unlinked row (NIL): 'ST2' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col2'])
- dropped unlinked row (NIL): 'Cortical bone surface' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2', 'Tab2:row17:col2'])
- dropped unlinked row (NIL): 'Exch cortical bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2', 'Tab2:row19:col2'])
- dropped unlinked row (NIL): 'Nonexch cortical bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2'])
- dropped unlinked row (NIL): 'Trabecular bone surface' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row22:col2'])
- dropped unlinked row (NIL): 'Exch trabecular bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col2', 'Tab2:row24:col2'])
- dropped unlinked row (NIL): 'Nonexch trabecular bone volume' — extend the ontology if this is a real PK parameter (source ['Tab2:row25:col2'])
- dropped unlinked row (NIL): 'Trabecular marrow 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2'])
- dropped unlinked row (NIL): 'Trabecular marrow 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col2'])
- dropped unlinked row (NIL): 'Trabecular marrow 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col2'])
- dropped unlinked row (NIL): 'Cortical marrow 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row32:col2'])
- dropped unlinked row (NIL): 'Cortical marrow 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row33:col2'])
- dropped unlinked row (NIL): 'Cortical marrow 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row34:col2'])
- dropped unlinked row (NIL): 'Skin 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row47:col2'])
- dropped unlinked row (NIL): 'Skin 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row48:col2'])
- dropped unlinked row (NIL): 'Skin 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row49:col2'])
- dropped unlinked row (NIL): 'Spleen 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row50:col2'])
- dropped unlinked row (NIL): 'Spleen 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row51:col2'])
- dropped unlinked row (NIL): 'Spleen 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row52:col2'])
- dropped unlinked row (NIL): 'Testes 0' — extend the ontology if this is a real PK parameter (source ['Tab2:row53:col2'])
- dropped unlinked row (NIL): 'Testes 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row54:col2'])
- dropped unlinked row (NIL): 'Testes 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row55:col2'])
- dropped unlinked row (NIL): 'Kidneys 1' — extend the ontology if this is a real PK parameter (source ['Tab2:row56:col2', 'Tab2:row57:col2'])
- dropped unlinked row (NIL): 'Kidneys 2' — extend the ontology if this is a real PK parameter (source ['Tab2:row58:col2'])
- dropped unlinked row (NIL): 'Right colon content' — extend the ontology if this is a real PK parameter (source ['Tab2:row59:col2'])
- dropped unlinked row (NIL): 'Left colon content' — extend the ontology if this is a real PK parameter (source ['Tab2:row60:col2'])
- dropped unlinked row (NIL): 'Recto sigmoid content' — extend the ontology if this is a real PK parameter (source ['Tab2:row61:col2'])
- dropped unlinked row (NIL): 'Urinary bladder content' — extend the ontology if this is a real PK parameter (source ['Tab2:row62:col2'])
- table mostly unlinked (33/33 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=radium_223ra_dichloride
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab2:row1:col1 = 'ST0'
- unparsed cell Tab2:row2:col1 = 'ST1'
- unparsed cell Tab2:row3:col1 = 'ST2'
- unparsed cell Tab2:row6:col1 = 'Kidneys 1'
- unparsed cell Tab2:row7:col1 = 'Liver 1'
- unparsed cell Tab2:row12:col1 = 'Liver 2'
- unparsed cell Tab2:row29:col1 = 'Trabecular marrow 0'
- unparsed cell Tab2:row30:col1 = 'Trabecular marrow 1'
- unparsed cell Tab2:row31:col1 = 'Trabecular marrow 2'
- unparsed cell Tab2:row35:col1 = 'Cortical marrow 0'
- unparsed cell Tab2:row36:col1 = 'Cortical marrow 1'
- unparsed cell Tab2:row37:col1 = 'Cortical marrow 2'
- unparsed cell Tab2:row38:col1 = 'Skin 0'
- unparsed cell Tab2:row39:col1 = 'Skin 1'
- unparsed cell Tab2:row40:col1 = 'Skin 2'
- unparsed cell Tab2:row41:col1 = 'Spleen 0'
- unparsed cell Tab2:row42:col1 = 'Spleen 1'
- unparsed cell Tab2:row43:col1 = 'Spleen 2'
- unparsed cell Tab2:row44:col1 = 'Testes 0'
- unparsed cell Tab2:row45:col1 = 'Testes 1'
- unparsed cell Tab2:row46:col1 = 'Testes 2'
- unparsed cell Tab2:row57:col1 = 'Kidneys 2'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | primary re-run | 0.167 (1/6 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['radium_223ra_dichloride', 'radon_219', 'metabolism'], ['radon_219', 'polonium_215', 'metabolism'], ['polonium_215', 'lead_211', 'metabolism'], ['lead_211', 'bismuth_211', 'metabolism'], ['bismuth_211', 'polonium_211', 'metabolism'], ['polonium_211', 'thallium_207', 'metabolism']] | [['radium-223', 'radon-219', 'interconversion'], ['radon-219', 'polonium-215', 'interconversion'], ['polonium-215', 'lead-211', 'interconversion'], ['lead-211', 'bismuth-211', 'interconversion'], ['bismuth-211', 'polonium-211', 'interconversion'], ['polonium-211', 'thallium-207', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[exch cortical bone volume]` | not captured | 0.0046 | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver 1]` | not captured | 0.00208 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | radium_223ra_dichloride | radium-223 dichloride | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | radium_223ra_dichloride | radium-223 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none', 'none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_radium_223ra_dichloride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Höllriegl_2021` / `Höllriegl_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-25 06:45 UTC</sub>
