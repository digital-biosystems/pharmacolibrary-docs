<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;avalglucosidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_avalglucosidase_alfa/&quot;},{&quot;label&quot;:&quot;Tiraboschi_2023 \u00b7 40_mg_kg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avalglucosidase alfa — `AvalglucosidaseAlfa_Tiraboschi2023_40_mg_kg`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has avalglucosidase_alfa, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:14.943673+00:00) predates the upstream re-run (2026-10-05 10:59:50.643363+00:00). Current validate status: `rejected`.

## Citation
Tiraboschi G et al., Population pharmacokinetic modeling and…, Journal of pharmacokinetics… (2023)
  ·  DOI: [10.1007/s10928-023-09874-8](https://doi.org/10.1007/s10928-023-09874-8)

## Model component
<dbs-pgx drug="avalglucosidase alfa" model-id="AvalglucosidaseAlfa_Tiraboschi2023_40_mg_kg" status="rejected" stale="true" population="pediatric and adult patients with Pompe disease" measured-compound="avalglucosidase_alfa" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL CRN (mL/min/1.73 m²) | Q22 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'IOPD' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row3:col5'])
- dropped unlinked row (NIL): 'LOPD' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row4:col5'])
- dropped unlinked row (NIL): '&lt; 6' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row6:col5'])
- dropped unlinked row (NIL): '6–11' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row7:col5'])
- dropped unlinked row (NIL): '12–17' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row8:col5'])
- dropped unlinked row (NIL): '18–64' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row9:col5'])
- dropped unlinked row (NIL): '≥ 65' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row10:col5'])
- dropped unlinked row (NIL): '&lt; 50' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row12:col5'])
- dropped unlinked row (NIL): '50–100' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row13:col5', 'Tiraboschi_2023_table_4:row13:col6', 'Tiraboschi_2023_table_4:row13:col7'])
- dropped unlinked row (NIL): '≥ 100' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row14:col5'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row16:col5'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row17:col5'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row19:col5'])
- dropped unlinked row (NIL): 'Black' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row20:col5'])
- dropped unlinked row (NIL): 'Caucasian' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row21:col5'])
- dropped unlinked row (NIL): 'Naïve' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row23:col5'])
- dropped unlinked row (NIL): 'Pre-treated' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row24:col5'])
- unit_dimension_unknown: 'mL/min/1.73 m²' (CL)
- dropped unlinked row (NIL): '30:60' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row26:col5'])
- dropped unlinked row (NIL): '60:90' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row27:col5'])
- dropped unlinked row (NIL): '≥ 90' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row28:col5'])
- dropped unlinked row (NIL): '&lt; 45e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row30:col5'])
- dropped unlinked row (NIL): '≥ 45e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row31:col5'])
- dropped unlinked row (NIL): '&lt; 73e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row33:col5'])
- dropped unlinked row (NIL): '≥ 73e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row34:col5'])
- dropped unlinked row (NIL): '&lt; 66e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row36:col5', 'Tiraboschi_2023_table_4:row36:col6', 'Tiraboschi_2023_table_4:row36:col7'])
- dropped unlinked row (NIL): '≥ 66e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row37:col5'])
- dropped unlinked row (NIL): '&lt; 64e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row39:col5'])
- dropped unlinked row (NIL): '≥ 64e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row40:col5'])
- dropped unlinked row (NIL): '&lt; 6.8e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row42:col5'])
- dropped unlinked row (NIL): '≥ 6.8e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row43:col5'])
- dropped unlinked row (NIL): '&lt; 580e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row45:col5', 'Tiraboschi_2023_table_4:row45:col6', 'Tiraboschi_2023_table_4:row45:col7'])
- dropped unlinked row (NIL): '≥ 580e' — extend the ontology if this is a real PK parameter (source ['Tiraboschi_2023_table_4:row46:col5'])
- table mostly unlinked (32/33 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avalglucosidase_alfa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: '40 mg/kg' subgroup of Tiraboschi_2023 (paper reports 3 populations: 20 mg/kg, 40 mg/kg, estimate (cv %))
- molar mass: none found for 'avalglucosidase_alfa' — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab3:row1:col2 = '3.33%'
- unparsed cell Tab3:row1:col3 = '[0.755;0.862]'
- unparsed cell Tab3:row1:col5 = '[0.674;0.874]'
- unparsed cell Tab3:row2:col2 = '2.21%'
- unparsed cell Tab3:row2:col3 = '[3.22;3.52]'
- unparsed cell Tab3:row2:col5 = '[3;3.57]'
- unparsed cell Tab3:row3:col2 = '4.59%'
- unparsed cell Tab3:row3:col3 = '[10.9;13.1]'
- unparsed cell Tab3:row3:col5 = '[9.28;15.1]'
- unparsed cell Tab3:row4:col2 = '4.45%'
- unparsed cell Tab3:row4:col3 = '[0.493;0.589]'
- unparsed cell Tab3:row4:col5 = '[0.395;0.728]'
- unparsed cell Tab3:row9:col2 = '11.60%'
- unparsed cell Tab3:row9:col3 = '[0.0121;0.0194]'
- unparsed cell Tab3:row9:col5 = '[0.00826;0.0227]'
- unparsed cell Tab3:row10:col2 = '7.91%'
- unparsed cell Tab3:row10:col3 = '[0.754;1.04]'
- unparsed cell Tab3:row10:col5 = '[0.618;1.1]'
- unparsed cell Tab3:row11:col2 = '6.29%'
- unparsed cell Tab3:row11:col3 = '[0.578;0.744]'
- unparsed cell Tab3:row11:col5 = '[0.484;0.78]'
- unparsed cell Tab3:row12:col2 = '12%'
- unparsed cell Tab3:row12:col3 = '[0.352;0.574]'
- unparsed cell Tab3:row12:col5 = '[0.166;0.652]'
- unparsed cell Tab3:row14:col1 = '0.0907 (30.8%)'
- unparsed cell Tab3:row14:col2 = '18.50%'
- unparsed cell Tab3:row14:col3 = '[0.0578;0.124] (7.56%)'
- unparsed cell Tab3:row14:col5 = '[0.0573;0.136]'
- unparsed cell Tab3:row15:col1 = '0.0184 (13.6%)'
- unparsed cell Tab3:row15:col2 = '35.20%'
- unparsed cell Tab3:row15:col3 = '[0.00569;0.031] (28.3%)'
- unparsed cell Tab3:row15:col5 = '[0.00476;0.0388]'
- unparsed cell Tab3:row16:col1 = '0.118 (35.4%)'
- unparsed cell Tab3:row16:col2 = '25.40%'
- unparsed cell Tab3:row16:col3 = '[0.0593;0.177] (30.4%)'
- unparsed cell Tab3:row16:col5 = '[0.0201;0.236]'
- unparsed cell Tab3:row17:col1 = '0.243 (52.4%)'
- unparsed cell Tab3:row17:col2 = '27.90%'
- unparsed cell Tab3:row17:col3 = '[0.11;0.376] (29.6%)'
- unparsed cell Tab3:row17:col5 = '[0.0702;0.417]'
- unparsed cell Tab3:row18:col1 = '1.23 (156%)'
- unparsed cell Tab3:row18:col2 = '26.20%'
- unparsed cell Tab3:row18:col3 = '[0.599;1.86] (30.6%)'
- unparsed cell Tab3:row18:col5 = '[0.492;3.48]'
- unparsed cell Tab3:row20:col1 = '0.12 (34.6%)'
- unparsed cell Tab3:row20:col2 = '2.43%'
- unparsed cell Tab3:row20:col3 = '[0.114;0.125]'
- unparsed cell Tab3:row20:col5 = '[0.0967;0.136]'
- unparsed cell Tiraboschi_2023_table_4:row3:col3 = '[157; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row3:col4 = '[591; 463–1089]'
- unparsed cell Tiraboschi_2023_table_4:row3:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row3:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row4:col3 = '[266; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row4:col4 = '[1164; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row6:col6 = '[216; 195–250]'
- unparsed cell Tiraboschi_2023_table_4:row6:col7 = '[1419; 1247–1584]'
- unparsed cell Tiraboschi_2023_table_4:row7:col2 = '[157; 151–256]'
- unparsed cell Tiraboschi_2023_table_4:row7:col3 = '[157; 151–256]'
- unparsed cell Tiraboschi_2023_table_4:row7:col4 = '[591; 576–1089]'
- unparsed cell Tiraboschi_2023_table_4:row7:col6 = '[320; 232–382]'
- unparsed cell Tiraboschi_2023_table_4:row7:col7 = '[2181; 1536–2620]'
- unparsed cell Tiraboschi_2023_table_4:row9:col2 = '[268; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row9:col3 = '[268; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row9:col4 = '[1141; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row10:col2 = '[265; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row10:col3 = '[265; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row10:col4 = '[1264; 824–2086]'
- unparsed cell Tiraboschi_2023_table_4:row12:col2 = '[209; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row12:col3 = '[209; 139–256]'
- unparsed cell Tiraboschi_2023_table_4:row12:col4 = '[833; 463–1089]'
- unparsed cell Tiraboschi_2023_table_4:row12:col6 = '[250; 195–381]'
- unparsed cell Tiraboschi_2023_table_4:row12:col7 = '[1584; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row13:col2 = '[263; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row13:col3 = '[263; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row13:col4 = '[1164; 749–2086]'
- unparsed cell Tiraboschi_2023_table_4:row14:col2 = '[307; 273–378]'
- unparsed cell Tiraboschi_2023_table_4:row14:col3 = '[307; 273–378]'
- unparsed cell Tiraboschi_2023_table_4:row14:col4 = '[1333; 997–2149]'
- unparsed cell Tiraboschi_2023_table_4:row16:col2 = '[254; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row16:col3 = '[254; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row16:col4 = '[1053; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row16:col6 = '[232; 195–328]'
- unparsed cell Tiraboschi_2023_table_4:row16:col7 = '[1536; 1247–2277]'
- unparsed cell Tiraboschi_2023_table_4:row17:col2 = '[271; 151–378]'
- unparsed cell Tiraboschi_2023_table_4:row17:col3 = '[271; 151–378]'
- unparsed cell Tiraboschi_2023_table_4:row17:col4 = '[1188; 576–2086]'
- unparsed cell Tiraboschi_2023_table_4:row17:col6 = '[275; 216–382]'
- unparsed cell Tiraboschi_2023_table_4:row17:col7 = '[1872; 1419–2620]'
- unparsed cell Tiraboschi_2023_table_4:row19:col2 = '[231; 151–279]'
- unparsed cell Tiraboschi_2023_table_4:row19:col3 = '[231; 151–279]'
- unparsed cell Tiraboschi_2023_table_4:row19:col4 = '[933; 591–1175]'
- unparsed cell Tiraboschi_2023_table_4:row19:col6 = '[275; 232–381]'
- unparsed cell Tiraboschi_2023_table_4:row19:col7 = '[1872; 1536–2620]'
- unparsed cell Tiraboschi_2023_table_4:row20:col2 = '[255; 255–278]'
- unparsed cell Tiraboschi_2023_table_4:row20:col3 = '[255; 255–278]'
- unparsed cell Tiraboschi_2023_table_4:row20:col4 = '[1204; 1204–1264]'
- unparsed cell Tiraboschi_2023_table_4:row21:col2 = '[265; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row21:col3 = '[265; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row21:col4 = '[1141; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row21:col6 = '[216; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row21:col7 = '[1419; 1247–2449]'
- unparsed cell Tiraboschi_2023_table_4:row23:col2 = '[266; 189–368]'
- unparsed cell Tiraboschi_2023_table_4:row23:col3 = '[266; 189–368]'
- unparsed cell Tiraboschi_2023_table_4:row23:col4 = '[1179; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row24:col2 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row24:col3 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row24:col4 = '[1072; 463–1764]'
- unparsed cell Tiraboschi_2023_table_4:row24:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row24:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row26:col2 = '[265; 265–265]'
- unparsed cell Tiraboschi_2023_table_4:row26:col3 = '[265; 265–265]'
- unparsed cell Tiraboschi_2023_table_4:row27:col2 = '[301; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row27:col3 = '[301; 160–368]'
- unparsed cell Tiraboschi_2023_table_4:row27:col4 = '[1459; 824–2086]'
- unparsed cell Tiraboschi_2023_table_4:row28:col2 = '[259; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row28:col3 = '[259; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row28:col4 = '[1140; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row28:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row28:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row30:col2 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row30:col3 = '[238; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row30:col4 = '[1038; 463–2086]'
- unparsed cell Tiraboschi_2023_table_4:row30:col6 = '[250; 232–275]'
- unparsed cell Tiraboschi_2023_table_4:row30:col7 = '[1584; 1536–1872]'
- unparsed cell Tiraboschi_2023_table_4:row31:col2 = '[273; 189–366]'
- unparsed cell Tiraboschi_2023_table_4:row31:col3 = '[273; 189–366]'
- unparsed cell Tiraboschi_2023_table_4:row31:col4 = '[1179; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row31:col6 = '[320; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row31:col7 = '[2181; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row33:col2 = '[255; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row33:col3 = '[255; 189–378]'
- unparsed cell Tiraboschi_2023_table_4:row33:col4 = '[1118; 737–1764]'
- unparsed cell Tiraboschi_2023_table_4:row34:col2 = '[265; 139–368]'
- unparsed cell Tiraboschi_2023_table_4:row34:col3 = '[265; 139–368]'
- unparsed cell Tiraboschi_2023_table_4:row34:col4 = '[1189; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row34:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row34:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row36:col2 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row36:col3 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row36:col4 = '[1160; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row37:col2 = '[256; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row37:col3 = '[256; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row37:col4 = '[1089; 463–1846]'
- unparsed cell Tiraboschi_2023_table_4:row37:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row37:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row39:col2 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row39:col3 = '[268; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row39:col4 = '[1164; 737–2149]'
- unparsed cell Tiraboschi_2023_table_4:row40:col2 = '[255; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row40:col3 = '[255; 139–355]'
- unparsed cell Tiraboschi_2023_table_4:row40:col4 = '[1053; 463–1846]'
- unparsed cell Tiraboschi_2023_table_4:row40:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row40:col7 = '[1872; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row42:col2 = '[252; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row42:col3 = '[252; 139–366]'
- unparsed cell Tiraboschi_2023_table_4:row42:col4 = '[1053; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row42:col6 = '[250; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row42:col7 = '[1584; 1247–2620]'
- unparsed cell Tiraboschi_2023_table_4:row43:col2 = '[273; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row43:col3 = '[273; 160–378]'
- unparsed cell Tiraboschi_2023_table_4:row43:col4 = '[1189; 737–2086]'
- unparsed cell Tiraboschi_2023_table_4:row43:col6 = '[314; 275–320]'
- unparsed cell Tiraboschi_2023_table_4:row43:col7 = '[2116; 1872–2181]'
- unparsed cell Tiraboschi_2023_table_4:row45:col2 = '[271; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row45:col3 = '[271; 139–378]'
- unparsed cell Tiraboschi_2023_table_4:row45:col4 = '[1188; 463–2149]'
- unparsed cell Tiraboschi_2023_table_4:row46:col2 = '[256; 151–355]'
- unparsed cell Tiraboschi_2023_table_4:row46:col3 = '[256; 151–355]'
- unparsed cell Tiraboschi_2023_table_4:row46:col4 = '[1053; 591–1566]'
- unparsed cell Tiraboschi_2023_table_4:row46:col6 = '[275; 195–382]'
- unparsed cell Tiraboschi_2023_table_4:row46:col7 = '[1872; 1247–2620]'
- companion parameter table 4 transcribed (86 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[30:60]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[&lt; 45e]` | not captured | 3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[&lt; 6.8e]` | not captured | 7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[≥ 45e]` | not captured | 7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[≥ 6.8e]` | not captured | 3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[≥ 64e]` | not captured | 10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[≥ 66e]` | not captured | 9 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | avalglucosidase_alfa | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | avalglucosidase_alfa | unknown | mismatch |

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
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avalglucosidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tiraboschi_2023` / `Tiraboschi_2023::40_mg_kg`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 10:59 UTC</sub>
