<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artenimol&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/&quot;},{&quot;label&quot;:&quot;Chotsiri_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artenimol_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artenimol/Artenimol_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artenimol — `Artenimol_Chotsiri2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Chotsiri P et al., Population pharmacokinetics and electro…, British journal of clinical… (2017)
  ·  DOI: [10.1111/bcp.13372](https://doi.org/10.1111/bcp.13372)

## Model component
<dbs-pgx drug="artenimol" model-id="Artenimol_Chotsiri2017_reference" status="rejected" stale="false" population="healthy Thai adults" measured-compound="dihydroartemisinin (artenimol)" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F (%) | Q40 | not captured | exact |
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'MTT (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'k a (h −1 )' (captured trailing unit 'h −1' for child rows)
- dropped value-less row: 'CL/F (l h −1 )' (captured trailing unit 'l h −1' for child rows)
- dropped value-less row: 'VC/F (l)' (captured trailing unit 'l' for child rows)
- dropped value-less row: 'Q P /F (l h −1 )' (captured trailing unit 'l h −1' for child rows)
- dropped value-less row: 'VP/F (l)' (captured trailing unit 'l' for child rows)
- dropped value-less row: 'Q P1 /F (l h −1 )' (captured trailing unit 'l h −1' for child rows)
- dropped value-less row: 'VP1/F (l)' (captured trailing unit 'l' for child rows)
- dropped value-less row: 'Q P2 /F (l h −1 )' (captured trailing unit 'l h −1' for child rows)
- dropped value-less row: 'BASE (ms)' (captured trailing unit 'ms' for child rows)
- dropped value-less row: 'SLOPE [ms (ng ml −1 ) −1 ]'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dihydroartemisinin (artenimol)
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell bcp13372-tbl-0002:row2:col3 = '35.9% (20.1%)*'
- unparsed cell bcp13372-tbl-0002:row2:col4 = '21.4%–50.4%'
- unparsed cell bcp13372-tbl-0002:row3:col1 = '0.567 (11.4%)'
- unparsed cell bcp13372-tbl-0002:row3:col3 = '52.6% (14.2%)*'
- unparsed cell bcp13372-tbl-0002:row3:col4 = '36.0%–67.6%'
- unparsed cell bcp13372-tbl-0002:row4:col1 = '2.89 (37.1%)'
- unparsed cell bcp13372-tbl-0002:row4:col3 = '89.0% (23.7%)*'
- unparsed cell bcp13372-tbl-0002:row4:col4 = '46.0%–169%'
- unparsed cell bcp13372-tbl-0002:row5:col1 = '148 (10.6%)'
- unparsed cell bcp13372-tbl-0002:row5:col3 = '23.1% (14.2%)'
- unparsed cell bcp13372-tbl-0002:row5:col4 = '15.2%–27.6%'
- unparsed cell bcp13372-tbl-0002:row6:col1 = '214 (16.9%)'
- unparsed cell bcp13372-tbl-0002:row7:col1 = '28.5 (26.0%)'
- unparsed cell bcp13372-tbl-0002:row8:col1 = '65.9 (19.1%)'
- unparsed cell bcp13372-tbl-0002:row9:col1 = '0.358 (9.07%)'
- unparsed cell bcp13372-tbl-0002:row11:col3 = '17.9% (34.0%)'
- unparsed cell bcp13372-tbl-0002:row11:col4 = '0.178%–26.1%'
- unparsed cell bcp13372-tbl-0002:row13:col1 = '3.13 (9.42%)'
- unparsed cell bcp13372-tbl-0002:row13:col3 = '32.2% (13.4%)*'
- unparsed cell bcp13372-tbl-0002:row13:col4 = '21.1%–37.8%'
- unparsed cell bcp13372-tbl-0002:row14:col1 = '27.4 (5.50%)'
- unparsed cell bcp13372-tbl-0002:row14:col3 = '10.9% (37.2%)'
- unparsed cell bcp13372-tbl-0002:row14:col4 = '0.109%–15.72%'
- unparsed cell bcp13372-tbl-0002:row15:col1 = '751 (23.5%)'
- unparsed cell bcp13372-tbl-0002:row15:col3 = '42.4% (40.9%)'
- unparsed cell bcp13372-tbl-0002:row15:col4 = '0.406%–62.9%'
- unparsed cell bcp13372-tbl-0002:row16:col1 = '206 (9.56%)'
- unparsed cell bcp13372-tbl-0002:row17:col1 = '1900 (8.23%)'
- unparsed cell bcp13372-tbl-0002:row18:col1 = '71.5 (9.01%)'
- unparsed cell bcp13372-tbl-0002:row18:col3 = '24.1% (36.3%)'
- unparsed cell bcp13372-tbl-0002:row18:col4 = '0.203%–37.3%'
- unparsed cell bcp13372-tbl-0002:row20:col1 = '0.137 (9.22%)'
- unparsed cell bcp13372-tbl-0002:row22:col3 = '15.9 (33.4%)'
- unparsed cell bcp13372-tbl-0002:row23:col1 = '0.0417 (12.5%)'
- unparsed cell bcp13372-tbl-0002:row24:col1 = '146 (25.5%)'
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

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

- scholar stages: `../../../knowledgebase/drugs/drug_artenimol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chotsiri_2017` / `Chotsiri_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:35 UTC</sub>
