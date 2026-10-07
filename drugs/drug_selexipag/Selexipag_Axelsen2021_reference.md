<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;selexipag&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/&quot;},{&quot;label&quot;:&quot;Axelsen_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selexipag_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selexipag/Selexipag_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# selexipag — `Selexipag_Axelsen2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `selexipag`, measured `ACT-333679`.

## Citation
Axelsen LN et al., Clopidogrel, a CYP2C8 inhibitor, causes…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14365](https://doi.org/10.1111/bcp.14365)

## Model component
<dbs-pgx drug="selexipag" model-id="Selexipag_Axelsen2021_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="ACT-333679" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| AUCτ geometric mean ratio (90% CI) | Q21 | not captured | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Treatment A c (n = 21)' — extend the ontology if this is a real PK parameter (source ['Axelsen_2021_table_1:row1:col1', 'Axelsen_2021_table_1:row1:col2', 'Axelsen_2021_table_1:row1:col3', 'Axelsen_2021_table_1:row1:col4'])
- dropped value-less row: 'Cmax [ng mL−1]' (captured trailing unit 'ng mL−1' for child rows)
- dropped value-less row: 'AUCτ [h*ng mL−1]' (captured trailing unit 'h*ng mL−1' for child rows)
- unit 'h*ng mL−1' inherited from a section-header row for AUC ratio (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ACT-333679
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 3 per-group rows of selexipag summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 0 linked by role; re-tagged ACT-333679→parent ×24
- review gap-fill skipped: this record measures 'ACT-333679', not selexipag — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1, 2, 3
- unparsed cell Axelsen_2021_table_1:row3:col4 = '1.35 (1.22, 1.50) [35.63]'
- unparsed cell Axelsen_2021_table_1:row3:col5 = '0.98 (0.89, 1.08) [32.82]'
- unparsed cell Axelsen_2021_table_1:row5:col4 = '1.44 (1.32, 1.56) [32.96]'
- unparsed cell Axelsen_2021_table_1:row5:col5 = '1.14 (1.04, 1.26) [29.03]'
- unparsed cell Axelsen_2021_table_1:row9:col4 = '1.69 (1.55, 1.84) [37.03]'
- unparsed cell Axelsen_2021_table_1:row9:col5 = '1.90 (1.72, 2.11) [33.83]'
- unparsed cell Axelsen_2021_table_1:row11:col4 = '2.25 (2.06, 2.46) [31.96]'
- unparsed cell Axelsen_2021_table_1:row11:col5 = '2.70 (2.45, 2.96) [30.91]'
- transposed table Axelsen_2021_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Axelsen_2021_table_2:row0:col3 = '1.41 (1.29, 1.54)'
- unparsed cell Axelsen_2021_table_2:row0:col4 = '2.06 (1.89, 2.25)'
- unparsed cell Axelsen_2021_table_2:row0:col6 = '1.08 (0.95, 1.23)'
- unparsed cell Axelsen_2021_table_2:row0:col7 = '2.42 (2.19, 2.68)'
- unparsed cell Axelsen_2021_table_2:row1:col3 = '1.68 (1.47, 1.92)'
- unparsed cell Axelsen_2021_table_2:row1:col4 = '2.88 (2.54, 3.27)'
- unparsed cell Axelsen_2021_table_2:row1:col6 = '1.27 (1.06, 1.53)'
- unparsed cell Axelsen_2021_table_2:row1:col7 = '3.36 (2.91, 3.89)'
- unparsed cell Axelsen_2021_table_2:row2:col3 = '1.02 (0.81, 1.29)'
- unparsed cell Axelsen_2021_table_2:row2:col4 = '1.86 (1.49, 2.32)'
- unparsed cell Axelsen_2021_table_2:row2:col6 = '1.19 (0.86, 1.63)'
- unparsed cell Axelsen_2021_table_2:row2:col7 = '2.70 (2.11, 3.47)'

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

- scholar stages: `../../../knowledgebase/drugs/drug_selexipag/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Axelsen_2021` / `Axelsen_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:20 UTC</sub>
