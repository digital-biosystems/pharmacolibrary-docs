<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;tadalafil&quot;,&quot;href&quot;:&quot;drugs/drug_tadalafil/&quot;},{&quot;label&quot;:&quot;Ferguson-Sells_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tadalafil_Kohno2014_reference&quot;,&quot;label&quot;:&quot;Kohno_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tadalafil/Tadalafil_Kohno2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tadalafil_Na2019_group_t&quot;,&quot;label&quot;:&quot;Na_2019_group_t&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tadalafil/Tadalafil_Na2019_group_t.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tadalafil — `Tadalafil_FergusonSells2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (fe), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tadalafil, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:40:31.867225+00:00) predates the upstream re-run (2026-10-06 16:41:56.654891+00:00). Current validate status: `rejected`.

## Citation
Ferguson-Sells L et al., Population Pharmacokinetics of Tadalafi…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01052-8](https://doi.org/10.1007/s40262-021-01052-8)

## Model component
<dbs-pgx drug="tadalafil" model-id="Tadalafil_FergusonSells2022_reference" status="rejected" stale="true" population="adults and pediatric patients with pulmonary arterial hypertension" measured-compound="tadalafil" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h-1) | `Q49` · kabs | 0.860 | h-1 | 0.00023888888888888888 | [1] / [h] | not captured | exact (1.0) | Tab2:row1:col1 | — | not captured |
| Fe | `Q44` · fe | 1 | % SEE | not captured | [s] · [%] · [ee] | not captured | exact (1.0) | Tab2:row9:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive (ng/mL)' routed out of structural estimates ('Residual errorf')
- column 'weight [kg]b' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'age [years]c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dose [mg]d' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'predicted typical value of the parametera (90% prediction interval)' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Patients taking bosentan' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1'])
- dropped unlinked row (NIL): 'Not taking bosentan (calculated)' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1'])
- dropped unlinked row (NIL): '70 kg patient' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1'])
- dropped unlinked row (NIL): 'Effect of weight' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1'])
- unit_dimension_unknown: '% SEE' (fe)
- dropped unlinked row (NIL): 'Effect of age on F' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col1'])
- dropped unlinked row (NIL): 'Typical adult, PHIRST-1 adult model' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row2:col1', 'Ferguson-Sells_2022_table_3:row2:col2', 'Ferguson-Sells_2022_table_3:row2:col3'])
- dropped unlinked row (NIL): 'Typical adult, pediatric model' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row3:col1', 'Ferguson-Sells_2022_table_3:row3:col2', 'Ferguson-Sells_2022_table_3:row3:col3', 'Ferguson-Sells_2022_table_3:row9:col1', 'Ferguson-Sells_2022_table_3:row9:col2', 'Ferguson-Sells_2022_table_3:row9:col3'])
- dropped unlinked row (NIL): '≥ 40 kg' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row4:col1', 'Ferguson-Sells_2022_table_3:row4:col2', 'Ferguson-Sells_2022_table_3:row4:col3', 'Ferguson-Sells_2022_table_3:row10:col1', 'Ferguson-Sells_2022_table_3:row10:col2', 'Ferguson-Sells_2022_table_3:row10:col3'])
- dropped unlinked row (NIL): '25 to &lt; 40 kg' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row5:col1', 'Ferguson-Sells_2022_table_3:row5:col2', 'Ferguson-Sells_2022_table_3:row5:col3', 'Ferguson-Sells_2022_table_3:row11:col1', 'Ferguson-Sells_2022_table_3:row11:col2', 'Ferguson-Sells_2022_table_3:row11:col3'])
- dropped unlinked row (NIL): '&lt; 25 kg' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row6:col1', 'Ferguson-Sells_2022_table_3:row6:col2', 'Ferguson-Sells_2022_table_3:row6:col3', 'Ferguson-Sells_2022_table_3:row12:col1', 'Ferguson-Sells_2022_table_3:row12:col2', 'Ferguson-Sells_2022_table_3:row12:col3'])
- dropped unlinked row (NIL): 'Typical adult PHIRST-1 model' — extend the ontology if this is a real PK parameter (source ['Ferguson-Sells_2022_table_3:row8:col1', 'Ferguson-Sells_2022_table_3:row8:col2', 'Ferguson-Sells_2022_table_3:row8:col3', 'Ferguson-Sells_2022_table_3:row8:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tadalafil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col2 = '201%b (26.4)'
- unparsed cell Tab2:row1:col3 = '0.891 (0.652, 1.22)'
- unparsed cell Tab2:row1:col4 = '198 (91.5, 390)'
- unparsed cell Tab2:row4:col2 = '48.5%b (11.0)'
- unparsed cell Tab2:row4:col3 = '3.22 (3.00, 3.46)'
- unparsed cell Tab2:row4:col4 = '48.2 (42.3, 53.8)'
- unparsed cell Tab2:row7:col2 = '32.1%b (42.3)'
- unparsed cell Tab2:row7:col3 = '88.1 (79.5, 99.5)'
- unparsed cell Tab2:row7:col4 = '31.0 (13.8, 48.2)'
- unparsed cell Tab2:row11:col3 = '0.101 (0.0121, 0.190)'
- unparsed cell Tab2:row13:col3 = '43.3 (17.4, 70.0)'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col4 = '2.46e1.59'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col5 = '123f79.7'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col6 = '14,82511,524'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col7 = '618g480g'
- unparsed cell Ferguson-Sells_2022_table_3:row2:col8 = '34.7g34.7g'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col4 = '2.33 (1.06–4.84)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col5 = '107 (65.8–178)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col6 = '17,100 (8260–37,800)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col7 = '714 (344–1570)'
- unparsed cell Ferguson-Sells_2022_table_3:row3:col8 = '32.0 (13.2–79.4)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col4 = '2.63 (1.29–5.73)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col5 = '85.6 (50.4–145)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col6 = '15,200 (6980–31,100)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col7 = '633 (291–1300)'
- unparsed cell Ferguson-Sells_2022_table_3:row4:col8 = '22.6 (8.98–55.6)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col4 = '2.38 (1.09–4.85)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col5 = '45.7 (27.5–76.5)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col6 = '8390 (4130–18,400)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col7 = '350 (172–767)'
- unparsed cell Ferguson-Sells_2022_table_3:row5:col8 = '13.5 (5.56–34.3)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col4 = '2.45 (1.20–5.19)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col5 = '24.6 (15.1–41.0)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col6 = '8170 (3850–16,700)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col7 = '340 (161–694)'
- unparsed cell Ferguson-Sells_2022_table_3:row6:col8 = '6.94 (2.88–17.7)'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col4 = '4.31e2.79'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col5 = '123f79.7'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col7 = '400g286g'
- unparsed cell Ferguson-Sells_2022_table_3:row8:col8 = '19.8g19.8g'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col4 = '4.05 (1.93–8.10)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col5 = '107 (64.8–181)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col6 = '9870 (4940–20,700)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col7 = '411 (206–863)'
- unparsed cell Ferguson-Sells_2022_table_3:row9:col8 = '18.5 (8.11–44.8)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col4 = '4.45 (2.05–9.36)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col5 = '86.9 (52.9–146)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col6 = '8990 (4270–19,500)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col7 = '375 (178–815)'
- unparsed cell Ferguson-Sells_2022_table_3:row10:col8 = '13.3 (5.65–33.9)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col4 = '4.00 (1.89–8.21)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col5 = '46.8 (26.5–78.8)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col6 = '5000 (2440–10,600)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col7 = '209 (102–440)'
- unparsed cell Ferguson-Sells_2022_table_3:row11:col8 = '8.08 (3.15–20.3)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col4 = '4.39 (2.12–9.22)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col5 = '24.5 (14.5–42.5)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col6 = '4550 (2170–9450)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col7 = '190 (90.4–394)'
- unparsed cell Ferguson-Sells_2022_table_3:row12:col8 = '3.78 (1.60–9.23)'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fe]` | 1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fe]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.860 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 0.860 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q319_weight]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q87_age]` | not captured | 0.100 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tadalafil | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tadalafil | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tadalafil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ferguson-Sells_2022` / `Ferguson-Sells_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 16:41 UTC</sub>
