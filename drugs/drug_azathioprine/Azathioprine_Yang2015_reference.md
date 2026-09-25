<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;Yang_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_Ding1979_reference&quot;,&quot;label&quot;:&quot;Ding_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Ding1979_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_elYazigi1993_reference&quot;,&quot;label&quot;:&quot;el-Yazigi_1993_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_elYazigi1993_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Yang2015_reference&quot;,&quot;label&quot;:&quot;Yang_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Yang2015_reference.md&quot;,&quot;status&quot;:&quot;needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azathioprine_Rosario2017_reference&quot;,&quot;label&quot;:&quot;Rosario_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Rosario2017_reference.md&quot;,&quot;status&quot;:&quot;rejected \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_Yang2015_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** disposition incomplete — only volume extracted — the engineer needs both; the missing half would be silently filled from the library default.
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (mycophenolate mofetil vs unknown) and 12 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-17 22:55:38.627085+00:00) predates the upstream re-run (2026-09-23 14:54:40.234656+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `unknown`, measured `azathioprine`.

## Citation
Yang X; Sherwin CM; Yu T; Yellepeddi VK; Brunner HI; Vinks AA et al. (2015). Expert review of clinical pharmacology 8
  ·  DOI: [10.1586/17512433.2015.1059751](https://doi.org/10.1586/17512433.2015.1059751)

## Model component
<dbs-pgx drug="azathioprine" model-id="Azathioprine_Yang2015_reference" status="needs_review" stale="true" population="unknown" measured-compound="azathioprine" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| initial volume of distribution | `Q61` · V | 0.18 | l/kg | 0.012599999999999998 | L | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| apparent volume of distribution following oral administration (Vd/F) | `Q76` · V/F | 0.78 | 1/kg | not captured | 1/kg | not captured | boundary (0.8) | Yang_2015:other_prose | — | not captured |
| absorption lag time | `Q83` · tlag | 0.349 | h | 1256.3999999999999 | h | not captured | exact (1.0) | Yang_2015:other_prose | — | not captured |
| absorption rate constant (Ka) | `Q49` · kabs | 0.869 | h−1 | 0.0002413888888888889 | 1/h | not captured | exact (1.0) | Yang_2015:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dose' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'no. of patients' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'model variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'covariates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Filler et al. (2003)' — extend the ontology if this is a real PK parameter (source ['T1:row1:col3', 'T1:row1:col6'])
- dropped unlinked row (NIL): 'Jiao et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col3', 'T1:row2:col6', 'T1:row2:col7', 'T1:row2:col8'])
- dropped unlinked row (NIL): 'Neumann et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1', 'T1:row3:col3', 'T1:row3:col6'])
- dropped unlinked row (NIL): 'Mino et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1', 'T1:row4:col3', 'T1:row4:col6'])
- dropped unlinked row (NIL): 'Zahr et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1', 'T1:row5:col3', 'T1:row5:col6'])
- dropped unlinked row (NIL): 'de Winter et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1', 'T1:row6:col3', 'T1:row6:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col3', 'T1:row7:col6', 'T1:row7:col8'])
- dropped unlinked row (NIL): 'Lertdumrongluk et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1', 'T1:row8:col3', 'T1:row8:col6'])
- dropped unlinked row (NIL): 'Djabarouti et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col3', 'T1:row9:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col3', 'T1:row10:col6', 'T1:row10:col8'])
- dropped unlinked row (NIL): 'Mino et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1'])
- dropped unlinked row (NIL): 'Fukuda et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row12:col3', 'T1:row12:col6'])
- dropped unlinked row (NIL): 'Sagcal-Gironella et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col3', 'T1:row13:col6'])
- dropped unlinked row (NIL): 'Sherwin et al. (2012)' — extend the ontology if this is a real PK parameter (source ['T1:row14:col3', 'T1:row14:col6'])
- dropped unlinked row (NIL): 'Woillard et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row15:col6'])
- dropped unlinked row (NIL): 'Streicher et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row16:col1', 'T1:row16:col3', 'T1:row16:col6'])
- dropped unlinked row (NIL): 'Kittanamongkolchai et al. (2015)' — extend the ontology if this is a real PK parameter (source ['T1:row17:col1', 'T1:row17:col3', 'T1:row17:col6'])
- table mostly unlinked (17/17 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('initial volume of distribution'=0.18) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution following oral administration (Vd/F)'=0.78) from results prose — parameter table was unreadable
- salvaged Q83 ('absorption lag time'=0.349) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant (Ka)'=0.869) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=azathioprine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell T1:row1:col1 = '15 children (12 ± 3 years)'
- unparsed cell T1:row1:col2 = 'Autoimmune including 10 SLE patients'
- unparsed cell T1:row1:col11 = '[51]'
- unparsed cell T1:row2:col11 = '[47]'
- unparsed cell T1:row3:col2 = 'Autoimmune including 12 SLE patients'
- unparsed cell T1:row3:col7 = 'BSV: Tmax (%) 46.8; Cmax (%) 53.8; AUC0–12 h (%) 33.3; AUC0–24 h (%) 35.6; C12 h (%) 74.2; C24 h (%) 85.8'
- unparsed cell T1:row3:col11 = '[52]'
- unparsed cell T1:row4:col2 = '6 Lupus nephritis versus 24 kidney transplantations'
- unparsed cell T1:row4:col11 = '[53]'
- unparsed cell T1:row5:col11 = '[49]'
- unparsed cell T1:row6:col2 = 'Autoimmune with 12 SLE patients'
- unparsed cell T1:row6:col7 = 'BSV: Tlag, short (%) 32; Ka (%) 182 [40]; CL (%) 34 [41]; Vc (%) 53 [48]; TGB1 (%) 200; EHCP (%) 35; RUV (%) 0.414 [6]'
- unparsed cell T1:row6:col8 = 'CrCL on CL 0.42 [26]'
- unparsed cell T1:row6:col11 = '[46]'
- unparsed cell T1:row7:col11 = '[54]'
- unparsed cell T1:row8:col11 = '[55]'
- unparsed cell T1:row9:col7 = 'BSV: mean MPA AUC0–12 h (%) 44; mean MPAG AUC0–12 h (%) 43'
- unparsed cell T1:row9:col11 = '[56]'
- unparsed cell T1:row10:col11 = '[57]'
- unparsed cell T1:row11:col3 = '1.5 (1.0–2.0) g'
- unparsed cell T1:row11:col7 = 'BSV: MPA free fraction (%) 70; MPAG free faction (%) 59.8'
- unparsed cell T1:row11:col8 = 'Metal medication and CrCL on MPA C0; CrCL on MPAG C0; serum albumin on MPA free fraction; serum albumin, metal medication and CrCL on MPAG free faction'
- unparsed cell T1:row11:col11 = '[58]'
- unparsed cell T1:row12:col1 = '19 children'
- unparsed cell T1:row12:col11 = '[59]'
- unparsed cell T1:row13:col1 = '19 children (16.9 ± 4 years)'
- unparsed cell T1:row13:col11 = '[60]'
- unparsed cell T1:row14:col1 = '19 (10–28 years; mean 16.5 years)'
- unparsed cell T1:row14:col7 = 'BSV (%): CL1MPA 48.6; V3MPA 59.2; CL2-MPA 42.9; V4-MPA 60.0; CLMMPAG 55.9 RUV: MPA (%) 41.2; MPAG (%) 45.4'
- unparsed cell T1:row14:col11 = '[48]'
- unparsed cell T1:row15:col1 = '36 children (4.7–16.7)'
- unparsed cell T1:row15:col3 = '728 ± 255 (300–1250) mg; 544 ± 175 (217–998)'
- unparsed cell T1:row15:col11 = '[50]'
- unparsed cell T1:row16:col2 = 'Autoimmune with 23 SLE and 21 vasculitis'
- unparsed cell T1:row16:col11 = '[61]'
- unparsed cell T1:row17:col11 = '[62]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.071 (1/14 fields) | 13 |

<details><summary>13 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['mycophenolate mofetil', 'mycophenolic acid', 'metabolism'], ['mycophenolic acid', '7-o-mpa-glucuronide', 'metabolism']] | [['mycophenolate mofetil', 'mycophenolic acid', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[absorption lag time]` | 0.349 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption lag time]` | not captured | 0.349 | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption rate constant]` | 0.869 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution following oral administration]` | 0.78 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 0.19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[initial volume of distribution]` | 0.18 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[initial volume of distribution]` | not captured | 0.18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 0.869 | only_one_extracted |
| `gpt-oss:120b` | `parameters[oral cl]` | 0.19 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd/f]` | not captured | 0.78 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | mycophenolate mofetil | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | mycophenolic acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q76 | fail | [length] ** 3 | 1/kg | not captured | not captured | ['Yang_2015:other_prose'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.6 L | not captured | not captured | ['Yang_2015:other_prose'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_azathioprine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2015` / `Yang_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-23 14:54 UTC</sub>
