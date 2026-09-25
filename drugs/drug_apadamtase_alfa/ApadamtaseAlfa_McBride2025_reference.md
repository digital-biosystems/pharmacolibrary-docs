<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;Apadamtase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/&quot;},{&quot;label&quot;:&quot;McBride_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ApadamtaseAlfa_McBride2025_reference&quot;,&quot;label&quot;:&quot;McBride_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/ApadamtaseAlfa_McBride2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;ApadamtaseAlfa_Patel2025_estimate&quot;,&quot;label&quot;:&quot;Patel_2025_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_estimate.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ApadamtaseAlfa_Patel2025_shrinkage&quot;,&quot;label&quot;:&quot;Patel_2025_shrinkage&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_shrinkage.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Apadamtase alfa — `ApadamtaseAlfa_McBride2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** no structural parameters extracted (nothing to build)
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

## Citation
not matched (stem McBride_2025)

## Model component
<dbs-pgx drug="Apadamtase alfa" model-id="ApadamtaseAlfa_McBride2025_reference" status="rejected" stale="false" population="patients with congenital thrombotic thrombocytopenic purpura" measured-compound="rADAMTS13" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| konVE_ADAM | Q329 | not captured | llm |
| CL | Q22 | not captured | exact |
| CLD | Q30 | not captured | exact |
| V1 | Q63 | not captured | exact |
| V2 | Q64 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ADAM_Activity_UperUg' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row0:col1'])
- dropped unlinked row (NIL): 'KdegHb' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row2:col1'])
- dropped unlinked row (NIL): 'VEFrac' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row4:col1'])
- dropped duplicate Q329 ('konVE_platelet', value None) — already have one for this compound
- dropped unlinked row (NIL): 'kcatE' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row9:col1'])
- dropped unlinked row (NIL): 'kcatS_ag' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row10:col1'])
- dropped unlinked row (NIL): 'kag' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row11:col1'])
- dropped PD-category row 'rADAM_Ag_EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['McBride_2025_table_S2:row12:col1'])
- dropped unlinked row (NIL): 'ksynPlate_human' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row13:col1'])
- dropped unlinked row (NIL): 'ksynPlate_mouse' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row14:col1'])
- dropped unlinked row (NIL): 'n_pl' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row15:col1'])
- dropped duplicate Q329 ('konVE_Hb', value None) — already have one for this compound
- dropped duplicate Q329 ('konVE_TSP', value None) — already have one for this compound
- dropped unlinked row (NIL): 'KonVG_ADAM' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row19:col1'])
- dropped unlinked row (NIL): 'KonVG_Hb' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row20:col1'])
- dropped unlinked row (NIL): 'kdegADAM' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row21:col1'])
- dropped unlinked row (NIL): 'kdegVWF' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row22:col1'])
- dropped unlinked row (NIL): 'kdegAg' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row23:col1'])
- dropped unlinked row (NIL): 'kdegPlatelet' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row24:col1'])
- dropped unlinked row (NIL): 'kdegTSP' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row25:col1'])
- dropped unlinked row (NIL): 'kcatG' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row27:col1'])
- dropped unlinked row (NIL): 'TSP1_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row28:col1'])
- dropped unlinked row (NIL): 'VWF_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row29:col1'])
- dropped unlinked row (NIL): 'ADAMTS13_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row30:col1'])
- dropped duplicate Q30 ('Q', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rADAMTS13
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) S2
- unparsed cell McBride_2025_table_S2:row0:col2 = 'ADAMTS13 activity conversion between IU and µg'
- unparsed cell McBride_2025_table_S2:row0:col3 = 'Rieger et al. (2006)4 Inherited from previous SCD model,model derived, fixed'
- unparsed cell McBride_2025_table_S2:row7:col2 = 'Association rate constant of ADAMTS13 with VE'
- unparsed cell McBride_2025_table_S2:row8:col2 = 'Association rate constant of ADAMTS13 with platelet'
- unparsed cell McBride_2025_table_S2:row9:col2 = 'Cleavage rate of elongated VWF by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row10:col2 = 'Cleavage rate of VWF aggregates by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row12:col2 = 'Cleavage EC50 of VWF aggregates by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row14:col2 = 'Synthesis rate of platelet for mice for248.220.5098 and Kopic et al. (2016)5 studies, respectively'
- unparsed cell McBride_2025_table_S2:row14:col3 = 'Calculated based on pretreatment level for in-house study #248.220.5098and Kopic et al. (2016)5, fitted'
- unparsed cell McBride_2025_table_S2:row15:col3 = 'Assumed nonlinear dependency in Step 2, fixed'
- unparsed cell McBride_2025_table_S2:row17:col3 = 'Schlosshauer & Baker (2004)7'
- unparsed cell McBride_2025_table_S2:row18:col2 = 'Association rate constant of plasma free Hb with TSP-1'
- unparsed cell McBride_2025_table_S2:row19:col2 = 'Association rate constant of ADAMTS13 with VGb'
- unparsed cell McBride_2025_table_S2:row21:col2 = 'Degradation rate of endogenous ADAMTS13'
- unparsed cell McBride_2025_table_S2:row21:col3 = 'Half-life: 60 hoursKremer Hovinga & Lämmle (2012)8 Crawley et al. (2011)9'
- unparsed cell McBride_2025_table_S2:row22:col3 = 'Half-life: 15 hrDenis et al. (2008)10'
- unparsed cell McBride_2025_table_S2:row23:col3 = 'Assume half-life of 24 hoursClot lysis in the range of hoursBoudjeltia et al. (2002)11'
- unparsed cell McBride_2025_table_S2:row24:col3 = 'Half-life: 7 daysGrossman et al. (1960)12'
- unparsed cell McBride_2025_table_S2:row25:col2 = 'Degradation rate of TSP-1'
- unparsed cell McBride_2025_table_S2:row25:col3 = 'Half-life: 9 hoursBarclay et al. (2016)13'
- unparsed cell McBride_2025_table_S2:row27:col2 = 'Cleavage rate of ADAMTS13 for VG'
- unparsed cell McBride_2025_table_S2:row27:col3 = 'Crawley et al. (2011)9'
- unparsed cell McBride_2025_table_S2:row28:col2 = 'Baseline TSP-1 level in patients with cTTPand healthy individuals'
- unparsed cell McBride_2025_table_S2:row28:col3 = 'Liu et al. (2005)16 Gonzalez et al. (2004)17 Tan et al. (2008)18'
- unparsed cell McBride_2025_table_S2:row29:col3 = 'Zeigler et al. (1996)19 Yagi et al. (2007)20 Stufano et al. (2012)21'
- unparsed cell McBride_2025_table_S2:row30:col2 = 'Baseline ADAMTS13 level in patients with cTTPand healthy individuals'
- unparsed cell McBride_2025_table_S2:row30:col3 = 'Yagi et al. (2007)20'
- unparsed cell McBride_2025_table_S2:row32:col3 = 'Calibrated with Taylor et al. (2019)22, fitted'
- unparsed cell McBride_2025_table_S2:row37:col3 = 'Allometrically scaled from human PK parameters using data from a Phase 1 TTP study (Scully et al. 2017)23, fitted'
- unparsed cell McBride_2025_table_S2:row47:col3 = 'Patel et al. (2023)29'

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

- scholar stages: `../../../knowledgebase/drugs/drug_apadamtase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `McBride_2025` / `McBride_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-06 16:29 UTC</sub>
