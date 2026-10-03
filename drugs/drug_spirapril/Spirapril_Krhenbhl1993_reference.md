<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;spirapril&quot;,&quot;href&quot;:&quot;drugs/drug_spirapril/&quot;},{&quot;label&quot;:&quot;Kr\u00e4henb\u00fchl_1993 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# spirapril — `Spirapril_Krhenbhl1993_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The spiraprilat metabolite compartment has no path from the spirapril dose (unlinked metabolite), and the record was built from the abstract only, so it was rejected.**

The record lists spiraprilat as a metabolite formed from spirapril by hydrolysis, but the metabolite has 0 compartments and no reachable path from the dose, so the structure fails the connectivity check. Because only the paper's abstract was read, summary statistics (AUC 1300 micrograms.h.l-1 and kel 2.0 h-1 for spiraprilat in healthy subjects) stand in for a fitted model. A second reader also disagreed on the primary analyte (spiraprilat vs spirapril), the link relation (hydrolysis vs metabolism), and which parameters belong to the record. Extracted — spiraprilat: AUC 1.3e+03 micrograms.h.l-1, kel 2 h-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has spiraprilat, the second reading spirapril; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-30 20:08:08.373450+00:00) predates the upstream re-run (2026-09-30 23:48:55.120843+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `spirapril`, measured `spiraprilat`.

## Citation
Krähenbühl S et al., Pharmacokinetics and haemodynamic effec…, European journal of clinica… (1993)
  ·  DOI: [10.1007/BF00315391](https://doi.org/10.1007/BF00315391)

## Model component
<dbs-pgx drug="spirapril" model-id="Spirapril_Krhenbhl1993_reference" status="needs_review" stale="true" population="patients with chronic liver disease (cirrhotic and non-cirrhotic) and healthy subjects" measured-compound="spiraprilat" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cma x | `Q32` · Cmax | 572 | ng/ml | not captured | ng/ml | not captured | space_fold (0.95) | tab_1:row0:col4, tab_1:row0:col5, tab_1:row0:col6, tab_1:row0:col7, tab_1:row0:col8, tab_1:row0:col9, tab_1:row0:col10, tab_1:row0:col11, tab_1:row0:col12, tab_1:row0:col13, tab_1:row0:col14, tab_1:row0:col16, tab_1:row0:col18 | — | not captured |
| tma~ | `Q56` · tmax | 0.8 | h | 2880.0 | h | not captured | llm (0.6) | tab_1:row1:col4, tab_1:row1:col5, tab_1:row1:col6, tab_1:row1:col7, tab_1:row1:col8, tab_1:row1:col9, tab_1:row1:col10, tab_1:row1:col11, tab_1:row1:col12, tab_1:row1:col13, tab_1:row1:col14, tab_1:row1:col16, tab_1:row1:col18 | — | not captured |
| AUC | `Q88` · AUC | 1190 | µg·h/l | not captured | µg·h/l | not captured | exact (1.0) | tab_1:row2:col4, tab_1:row2:col5, tab_1:row2:col6, tab_1:row2:col7, tab_1:row2:col8, tab_1:row2:col9, tab_1:row2:col10, tab_1:row2:col11, tab_1:row2:col12, tab_1:row2:col13, tab_1:row2:col18 | — | not captured |
| CL/f ~ | `Q27` · CL/F | 0.35 | L/h | 9.722222222222222e-08 | L/h | not captured | llm_confirmed (0.6) | tab_1:row3:col4, tab_1:row3:col5, tab_1:row3:col6, tab_1:row3:col7, tab_1:row3:col8, tab_1:row3:col9, tab_1:row3:col10, tab_1:row3:col11, tab_1:row3:col12, tab_1:row3:col13, tab_1:row3:col18 | — | not captured |
| Vdf ~ | `Q76` · V/F | 46.5 | L | 0.0465 | L | not captured | llm (0.6) | tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6, tab_1:row4:col7, tab_1:row4:col8, tab_1:row4:col9, tab_1:row4:col10, tab_1:row4:col11, tab_1:row4:col12, tab_1:row4:col13, tab_1:row4:col14, tab_1:row4:col16, tab_1:row4:col18 | — | not captured |
| kd | `Q331` · KD | 0.45 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row5:col4, tab_1:row5:col5, tab_1:row5:col6, tab_1:row5:col7, tab_1:row5:col8, tab_1:row5:col9, tab_1:row5:col10, tab_1:row5:col11, tab_1:row5:col12, tab_1:row5:col13, tab_1:row5:col14, tab_1:row5:col16, tab_1:row5:col18 | — | not captured |
| C(0) | `Q86` · C0 | 1600 | not captured | not captured | not captured | not captured | llm (0.6) | tab_1:row6:col4, tab_1:row6:col5, tab_1:row6:col6, tab_1:row6:col7, tab_1:row6:col8, tab_1:row6:col9, tab_1:row6:col10, tab_1:row6:col11, tab_1:row6:col12, tab_1:row6:col13, tab_1:row6:col14, tab_1:row6:col16, tab_1:row6:col18 | — | not captured |
| tl/21 | `Q57` · t1/2z | 1.53 | h | 5508.0 | h | not captured | llm (0.6) | tab_1:row7:col1, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row7:col7, tab_1:row7:col8, tab_1:row7:col9, tab_1:row7:col10, tab_1:row7:col11, tab_1:row7:col12, tab_1:row7:col13 | — | not captured |
| t~ | `Q57` · t1/2z | 2.0 | h | 7200.0 | h | not captured | llm (0.6) | Krähenbühl_1993_table_3:row1:col3, Krähenbühl_1993_table_3:row1:col4, Krähenbühl_1993_table_3:row1:col5, Krähenbühl_1993_table_3:row1:col6, Krähenbühl_1993_table_3:row1:col7, Krähenbühl_1993_table_3:row1:col8, Krähenbühl_1993_table_3:row1:col9, Krähenbühl_1993_table_3:row1:col10, Krähenbühl_1993_table_3:row1:col11, Krähenbühl_1993_table_3:row1:col12, Krähenbühl_1993_table_3:row1:col17 | — | not captured |
| AUC (0-t) a | `Q19` · AUCt | 611 | µg·h/l | not captured | µg·h/l | not captured | llm_corrected (0.6) | Krähenbühl_1993_table_3:row2:col3, Krähenbühl_1993_table_3:row2:col4, Krähenbühl_1993_table_3:row2:col5, Krähenbühl_1993_table_3:row2:col6, Krähenbühl_1993_table_3:row2:col7, Krähenbühl_1993_table_3:row2:col8, Krähenbühl_1993_table_3:row2:col9, Krähenbühl_1993_table_3:row2:col10, Krähenbühl_1993_table_3:row2:col11, Krähenbühl_1993_table_3:row2:col12, Krähenbühl_1993_table_3:row2:col15, Krähenbühl_1993_table_3:row2:col17 | — | not captured |
| AUG | `Q88` · AUC | 1030 | µg·h/l | not captured | µg·h/l | not captured | llm (0.6) | Krähenbühl_1993_table_3:row3:col3, Krähenbühl_1993_table_3:row3:col4, Krähenbühl_1993_table_3:row3:col5, Krähenbühl_1993_table_3:row3:col6, Krähenbühl_1993_table_3:row3:col7, Krähenbühl_1993_table_3:row3:col8, Krähenbühl_1993_table_3:row3:col9, Krähenbühl_1993_table_3:row3:col10, Krähenbühl_1993_table_3:row3:col11, Krähenbühl_1993_table_3:row3:col12, Krähenbühl_1993_table_3:row3:col15, Krähenbühl_1993_table_3:row3:col17 | — | not captured |
| km b | `Q305` · kfm | 1.03 | 1/h | 0.0002861111111111111 | 1/h | not captured | exact (1.0) | Krähenbühl_1993_table_3:row4:col3, Krähenbühl_1993_table_3:row4:col4, Krähenbühl_1993_table_3:row4:col5, Krähenbühl_1993_table_3:row4:col6, Krähenbühl_1993_table_3:row4:col7, Krähenbühl_1993_table_3:row4:col8, Krähenbühl_1993_table_3:row4:col9, Krähenbühl_1993_table_3:row4:col10, Krähenbühl_1993_table_3:row4:col11, Krähenbühl_1993_table_3:row4:col12, Krähenbühl_1993_table_3:row4:col13, Krähenbühl_1993_table_3:row4:col15, Krähenbühl_1993_table_3:row4:col17 | — | not captured |
| C (0) | `Q86` · C0 | 553 | not captured | not captured | not captured | not captured | llm (0.6) | Krähenbühl_1993_table_3:row5:col3, Krähenbühl_1993_table_3:row5:col4, Krähenbühl_1993_table_3:row5:col5, Krähenbühl_1993_table_3:row5:col6, Krähenbühl_1993_table_3:row5:col7, Krähenbühl_1993_table_3:row5:col8, Krähenbühl_1993_table_3:row5:col9, Krähenbühl_1993_table_3:row5:col10, Krähenbühl_1993_table_3:row5:col11, Krähenbühl_1993_table_3:row5:col12, Krähenbühl_1993_table_3:row5:col13, Krähenbühl_1993_table_3:row5:col15, Krähenbühl_1993_table_3:row5:col17 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'C .....' — extend the ontology if this is a real PK parameter (source ['Krähenbühl_1993_table_3:row0:col3', 'Krähenbühl_1993_table_3:row0:col4', 'Krähenbühl_1993_table_3:row0:col5', 'Krähenbühl_1993_table_3:row0:col6', 'Krähenbühl_1993_table_3:row0:col7', 'Krähenbühl_1993_table_3:row0:col8', 'Krähenbühl_1993_table_3:row0:col9', 'Krähenbühl_1993_table_3:row0:col10', 'Krähenbühl_1993_table_3:row0:col11', 'Krähenbühl_1993_table_3:row0:col12', 'Krähenbühl_1993_table_3:row0:col13', 'Krähenbühl_1993_table_3:row0:col15', 'Krähenbühl_1993_table_3:row0:col17'])
- dropped duplicate Q57 ('tz/2 b', value '1.29') — already have one for this compound
- dropped value-less row: 'Table 2 . Pharmacokinetic parameters of spirapril in patients and control subjects'
- implicit units: 'Cma x' → ng/ml (from the popPK convention: 'The paper reports plasma concentrations in ng/ml (limit of quantification 4 ng.ml-1 for spirapril and 13 ng.ml-1 for spi')
- implicit units: 'tma~' → h (from the popPK convention: 'tmax is a time point; the paper computes profiles over 24-28 h and reports half-lives in h (e.g. rate constants in h-1),')
- implicit units: 'AUC' → µg·h/l (from the paper text: "Abstract states bioavailability AUC values as '820 gg. h-1-1, 923 gg. h-1-1 and 1300 gg-h. 1-1', i.e. µg·h·l-1 (µg·h/l).")
- implicit units: 'CL/f ~' → L/h (from the popPK convention: 'No unit stated in the table; CL/F for a one-compartment oral PK analysis is conventionally in L/h, consistent with V/F o')
- implicit units: 'Vdf ~' → L (from the popPK convention: 'No unit stated in the table; V/F for a one-compartment model is conventionally in L, consistent with CL/F of 0.35 L/h an')
- implicit units: 'kd' — the LLM proposed '1/h', whose dimension does not fit Q331; left unset
- implicit units: 'C(0)' — the LLM proposed 'ng/ml', whose dimension does not fit Q86; left unset
- implicit units: 'tl/21' → h (from the popPK convention: 't1/2z is an elimination half-life; the paper discusses elimination half-life of spiraprilat in time units with rate cons')
- implicit units: 't~' → h (from the popPK convention: 't1/2z is an elimination half-life; consistent with rate constants reported in h-1 in the abstract, the half-life is in h')
- implicit units: 'AUC (0-t) a' → µg·h/l (from the paper text: 'AUC(0-t) is part of the AUC calculation (AUC = AUC(0-t) + C(t)/λz); the abstract gives AUC in µg·h·l-1, so AUC(0-t) is i')
- implicit units: 'AUG' → µg·h/l (from the paper text: "Abstract reports AUC values as '820 gg. h-1-1, 923 gg. h-1-1 and 1300 gg-h. 1-1', i.e. µg·h·l-1 (µg·h/l).")
- implicit units: 'km b' → 1/h (from the paper text: "The text defines km as 'the slope of the formation phase of spiraprilat', a first-order rate constant; the abstract repo")
- implicit units: 'C (0)' — the LLM proposed 'ng/ml', whose dimension does not fit Q86; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=spiraprilat
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 16/16 row label(s) assigned, 50 linked by role; re-tagged spirapril→parent ×98, spirapril→spiraprilat ×84
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table tab_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_1:row0:col2 = '(ng-ml 1)'
- unparsed cell tab_1:row2:col2 = '(ng.h.ml-0'
- unparsed cell tab_1:row2:col14 = '0.46 (0.21) c'
- unparsed cell tab_1:row2:col16 = '0.80 (0.53) °'
- unparsed cell tab_1:row3:col2 = '(l.min 1)'
- unparsed cell tab_1:row3:col14 = '48.5 (14.5) c'
- unparsed cell tab_1:row3:col16 = '83.3 (41.1) b'
- unparsed cell tab_1:row4:col2 = '(1)'
- unparsed cell tab_1:row6:col1 = 'C(0)'
- unparsed cell tab_1:row6:col2 = '(ng.m1-1)'
- transposed table Krähenbühl_1993_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Krähenbühl_1993_table_3:row0:col1 = '(ng-m1-1 )'
- unparsed cell Krähenbühl_1993_table_3:row1:col13 = '820 (431) c'
- unparsed cell Krähenbühl_1993_table_3:row1:col15 = '923 (485) c'
- unparsed cell Krähenbühl_1993_table_3:row2:col13 = '1150 (490) c'
- unparsed cell Krähenbühl_1993_table_3:row3:col13 = '1.10 (0.22) c'
- unparsed cell Krähenbühl_1993_table_3:row4:col1 = '(1-h 1)'
- unparsed cell Krähenbühl_1993_table_3:row5:col1 = '(ng. m1-1)'
- companion parameter table 3 transcribed (84 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['spirapril', 'spiraprilat', 'hydrolysis']] | [['spirapril', 'spiraprilat', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[2.00 h-1 in control subjects]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[2.00 h-1]` | not captured | 2.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | not captured | 820 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | 1300 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | spiraprilat | spirapril | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q86 | fail | 1600.0 | 16.0 | 0.01 | 0.05 | footnote reference category |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Krähenbühl_1993_table_3:row2:col3', 'Krähenbühl_1993_table_3:row2:col4', 'Krähenbühl_1993_table_3:row2:col5', 'Krähenbühl_1993_table_3:row2:col6', 'Krähenbühl_1993_table_3:row2:col7', 'Krähenbühl_1993_table_3:row2:col8', 'Krähenbühl_1993_table_3:row2:col9', 'Krähenbühl_1993_table_3:row2:col10', 'Krähenbühl_1993_table_3:row2:col11', 'Krähenbühl_1993_table_3:row2:col12', 'Krähenbühl_1993_table_3:row2:col15', 'Krähenbühl_1993_table_3:row2:col17'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7', 'tab_1:row3:col8', 'tab_1:row3:col9', 'tab_1:row3:col10', 'tab_1:row3:col11', 'tab_1:row3:col12', 'tab_1:row3:col13', 'tab_1:row3:col18'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Krähenbühl_1993_table_3:row4:col3', 'Krähenbühl_1993_table_3:row4:col4', 'Krähenbühl_1993_table_3:row4:col5', 'Krähenbühl_1993_table_3:row4:col6', 'Krähenbühl_1993_table_3:row4:col7', 'Krähenbühl_1993_table_3:row4:col8', 'Krähenbühl_1993_table_3:row4:col9', 'Krähenbühl_1993_table_3:row4:col10', 'Krähenbühl_1993_table_3:row4:col11', 'Krähenbühl_1993_table_3:row4:col12', 'Krähenbühl_1993_table_3:row4:col13', 'Krähenbühl_1993_table_3:row4:col15', 'Krähenbühl_1993_table_3:row4:col17'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row0:col4', 'tab_1:row0:col5', 'tab_1:row0:col6', 'tab_1:row0:col7', 'tab_1:row0:col8', 'tab_1:row0:col9', 'tab_1:row0:col10', 'tab_1:row0:col11', 'tab_1:row0:col12', 'tab_1:row0:col13', 'tab_1:row0:col14', 'tab_1:row0:col16', 'tab_1:row0:col18'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tab_1:row1:col4', 'tab_1:row1:col5', 'tab_1:row1:col6', 'tab_1:row1:col7', 'tab_1:row1:col8', 'tab_1:row1:col9', 'tab_1:row1:col10', 'tab_1:row1:col11', 'tab_1:row1:col12', 'tab_1:row1:col13', 'tab_1:row1:col14', 'tab_1:row1:col16', 'tab_1:row1:col18'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_1:row7:col1', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row7:col7', 'tab_1:row7:col8', 'tab_1:row7:col9', 'tab_1:row7:col10', 'tab_1:row7:col11', 'tab_1:row7:col12', 'tab_1:row7:col13'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Krähenbühl_1993_table_3:row1:col3', 'Krähenbühl_1993_table_3:row1:col4', 'Krähenbühl_1993_table_3:row1:col5', 'Krähenbühl_1993_table_3:row1:col6', 'Krähenbühl_1993_table_3:row1:col7', 'Krähenbühl_1993_table_3:row1:col8', 'Krähenbühl_1993_table_3:row1:col9', 'Krähenbühl_1993_table_3:row1:col10', 'Krähenbühl_1993_table_3:row1:col11', 'Krähenbühl_1993_table_3:row1:col12', 'Krähenbühl_1993_table_3:row1:col17'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row4:col7', 'tab_1:row4:col8', 'tab_1:row4:col9', 'tab_1:row4:col10', 'tab_1:row4:col11', 'tab_1:row4:col12', 'tab_1:row4:col13', 'tab_1:row4:col14', 'tab_1:row4:col16', 'tab_1:row4:col18'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row2:col4', 'tab_1:row2:col5', 'tab_1:row2:col6', 'tab_1:row2:col7', 'tab_1:row2:col8', 'tab_1:row2:col9', 'tab_1:row2:col10', 'tab_1:row2:col11', 'tab_1:row2:col12', 'tab_1:row2:col13', 'tab_1:row2:col18'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Krähenbühl_1993_table_3:row3:col3', 'Krähenbühl_1993_table_3:row3:col4', 'Krähenbühl_1993_table_3:row3:col5', 'Krähenbühl_1993_table_3:row3:col6', 'Krähenbühl_1993_table_3:row3:col7', 'Krähenbühl_1993_table_3:row3:col8', 'Krähenbühl_1993_table_3:row3:col9', 'Krähenbühl_1993_table_3:row3:col10', 'Krähenbühl_1993_table_3:row3:col11', 'Krähenbühl_1993_table_3:row3:col12', 'Krähenbühl_1993_table_3:row3:col15', 'Krähenbühl_1993_table_3:row3:col17'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row5:col6', 'tab_1:row5:col7', 'tab_1:row5:col8', 'tab_1:row5:col9', 'tab_1:row5:col10', 'tab_1:row5:col11', 'tab_1:row5:col12', 'tab_1:row5:col13', 'tab_1:row5:col14', 'tab_1:row5:col16', 'tab_1:row5:col18'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col6', 'tab_1:row6:col7', 'tab_1:row6:col8', 'tab_1:row6:col9', 'tab_1:row6:col10', 'tab_1:row6:col11', 'tab_1:row6:col12', 'tab_1:row6:col13', 'tab_1:row6:col14', 'tab_1:row6:col16', 'tab_1:row6:col18'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Krähenbühl_1993_table_3:row5:col3', 'Krähenbühl_1993_table_3:row5:col4', 'Krähenbühl_1993_table_3:row5:col5', 'Krähenbühl_1993_table_3:row5:col6', 'Krähenbühl_1993_table_3:row5:col7', 'Krähenbühl_1993_table_3:row5:col8', 'Krähenbühl_1993_table_3:row5:col9', 'Krähenbühl_1993_table_3:row5:col10', 'Krähenbühl_1993_table_3:row5:col11', 'Krähenbühl_1993_table_3:row5:col12', 'Krähenbühl_1993_table_3:row5:col13', 'Krähenbühl_1993_table_3:row5:col15', 'Krähenbühl_1993_table_3:row5:col17'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.35 L/h | not captured | not captured | ['tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7', 'tab_1:row3:col8', 'tab_1:row3:col9', 'tab_1:row3:col10', 'tab_1:row3:col11', 'tab_1:row3:col12', 'tab_1:row3:col13', 'tab_1:row3:col18'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 46.5 L | not captured | not captured | ['tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row4:col7', 'tab_1:row4:col8', 'tab_1:row4:col9', 'tab_1:row4:col10', 'tab_1:row4:col11', 'tab_1:row4:col12', 'tab_1:row4:col13', 'tab_1:row4:col14', 'tab_1:row4:col16', 'tab_1:row4:col18'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_spirapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krähenbühl_1993` / `Krähenbühl_1993::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 23:48 UTC</sub>
