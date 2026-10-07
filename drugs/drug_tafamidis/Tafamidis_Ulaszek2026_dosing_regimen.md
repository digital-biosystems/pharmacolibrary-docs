<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tafamidis&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/&quot;},{&quot;label&quot;:&quot;Ulaszek_2026 \u00b7 dosing_regimen&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafamidis_Parkinson2013_reference&quot;,&quot;label&quot;:&quot;Parkinson_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafamidis — `Tafamidis_Ulaszek2026_dosing_regimen`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `tafamidis meglumine`, measured `tafamidis`.

## Citation
Ulaszek S et al., Exploring Tafamidis Effects Through PBP…, Pharmaceutics (2026)
  ·  DOI: [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367)

## Model component
<dbs-pgx drug="tafamidis" model-id="Tafamidis_Ulaszek2026_dosing_regimen" status="rejected" stale="false" population="virtual healthy male subjects aged 30-40 years" measured-compound="tafamidis" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| B3461056 | Q410 | not captured | llm |
| B3461054 | Q900 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fed' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-18-00367-t002:row11:col1'])
- dropped unlinked row (NIL): 'NCT01775761' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-18-00367-t002:row13:col1'])
- dropped unlinked row (NIL): 'Fasted' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-18-00367-t002:row14:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tafamidis
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'dosing regimen' subgroup of Ulaszek_2026 (paper reports 2 populations: dosing regimen, value)
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell pharmaceutics-18-00367-t002:row2:col2 = '171,000 (125,000–258,000)'
- unparsed cell pharmaceutics-18-00367-t002:row2:col3 = '179,721 (127,744–254,519)'
- unparsed cell pharmaceutics-18-00367-t002:row5:col2 = '8950 (6580–14,600)'
- unparsed cell pharmaceutics-18-00367-t002:row5:col3 = '9085 (6819.28–12,840.15)'
- unparsed cell pharmaceutics-18-00367-t002:row7:col2 = '2.0 (0.5–6.0)'
- unparsed cell pharmaceutics-18-00367-t002:row7:col3 = '1.90 (1.18–3.84)'
- unparsed cell pharmaceutics-18-00367-t002:row10:col3 = '1.5 (0.5–4.05)'
- unparsed cell pharmaceutics-18-00367-t002:row10:col4 = '2.26 (1.33–4.53)'
- unparsed cell pharmaceutics-18-00367-t002:row15:col3 = '2.0 (1–6)'
- unparsed cell pharmaceutics-18-00367-t002:row15:col4 = '2.3 (1.37–5.07)'
- unparsed cell Ulaszek_2026_table_2:row1:col3 = 'Based on Ingenbleek et al. dataset, as explained in “Population-level sampling of TTR concentrations” section [9,14,42].'
- unparsed cell Ulaszek_2026_table_2:row2:col3 = '[8]'
- unparsed cell Ulaszek_2026_table_2:row3:col2 = '1μM3·h'
- unparsed cell Ulaszek_2026_table_2:row3:col3 = '[46]'
- unparsed cell Ulaszek_2026_table_2:row4:col3 = 'There are no data on this parameter available in the literature. We assume that for healthy volunteers it is the same as the average degradation rate of TTR [14].'
- unparsed cell Ulaszek_2026_table_2:row5:col2 = '1μM·h'
- unparsed cell Ulaszek_2026_table_2:row5:col3 = '[37]'
- unparsed cell Ulaszek_2026_table_2:row6:col1 = '50.2OR28.8'
- unparsed cell Ulaszek_2026_table_2:row6:col3 = 'Two alternative values presented: one fitted using KD from Nelson et al. (2020) combined with kon from Corazza et al. (2019); the other directly using koff from Corazza et al. (2019) [37,39].'
- unparsed cell Ulaszek_2026_table_2:row7:col2 = '1μM·h'
- unparsed cell Ulaszek_2026_table_2:row7:col3 = '[37]'
- unparsed cell Ulaszek_2026_table_2:row8:col1 = '2998.8OR216'
- unparsed cell Ulaszek_2026_table_2:row8:col3 = 'Two alternative values presented: one fitted using KD from Nelson et al. (2020) combined with kon from Corazza et al. (2019); the other directly using koff from Corazza et al. (2019) [37,39].'
- unparsed cell Ulaszek_2026_table_2:row9:col2 = '1μM·h'
- unparsed cell Ulaszek_2026_table_2:row12:col1 = 'Tdeg × 0.75'
- unparsed cell Ulaszek_2026_table_2:row12:col3 = 'Analytically solved for ~33% increase in total TTR concentration.'
- companion parameter table 2 transcribed (17 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kon/koff'] | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tafamidis/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ulaszek_2026` / `Ulaszek_2026::dosing_regimen`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:51 UTC</sub>
