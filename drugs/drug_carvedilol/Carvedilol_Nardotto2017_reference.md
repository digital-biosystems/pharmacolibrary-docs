<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;carvedilol&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/&quot;},{&quot;label&quot;:&quot;Nardotto_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carvedilol_McTavish1993_reference&quot;,&quot;label&quot;:&quot;McTavish_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_McTavish1993_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Nikolic2013_reference&quot;,&quot;label&quot;:&quot;Nikolic_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Nikolic2013_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim&quot;,&quot;label&quot;:&quot;Yamamoto_2024_final_s_carvedilol_final_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carvedilol/Carvedilol_Yamamoto2024_final_s_carvedilol_final_model_estim.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# carvedilol — `Carvedilol_Nardotto2017_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.091). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

### Reviewer guidance

**The carvedilol absorption parameter was rejected for a dimension mismatch: it is reported as 17.41 h⁻¹ (label 'KaR (h-1)') but its meaning is an absorption half-life, a time quantity, so the value and unit contradict the parameter's definition.**

In this parent–metabolite model for carvedilol in type-2 diabetes and healthy subjects, the parameter named t1/2ka is labeled 'KaR (h-1)' with value 17.41 in units of h⁻¹, yet its meaning is the half-life of the absorption phase — a time, not a rate — giving a structural parameter with mismatched dimensions. The record also reached review without an SI value because the reported unit could not be converted. Secondary readers further disagreed on several extracted values, e.g. FR as 18.25 versus 17.67, KaR as 17.41 versus 10.25, and a renal clearance of 16.50 L/h versus none, so the extraction itself is not settled. Extracted — carvedilol: t1/2ka 17.4 h -1, FR 18.2, V 17.9 L, Q3 17.9 L/h, CLR 16.5 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has carvedilol enantiomers, the second reading carvedilol; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:09.159210+00:00) predates the upstream re-run (2026-10-07 00:33:23.563545+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `carvedilol`, measured `carvedilol enantiomers`.

## Citation
Nardotto GHB et al., Population pharmacokinetics of carvedil…, European journal of pharmac… (2017)
  ·  DOI: [10.1016/j.ejps.2017.05.033](https://doi.org/10.1016/j.ejps.2017.05.033)

## Model component
<dbs-pgx drug="carvedilol" model-id="Carvedilol_Nardotto2017_reference" status="extracted" stale="true" population="type-2 diabetes and healthy subjects" measured-compound="carvedilol enantiomers" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KaR (h -1 ) | `Q49` · kabs | 10.63 | h -1 | 0.002952777777777778 | [1] / [h] | not captured | exact (1.0) | tab_1:row6:col3, tab_1:row6:col4, tab_1:row6:col5, tab_1:row6:col7, tab_1:row6:col9 | — | not captured |
| FR (%) | `Q43` · FR | 19.54 | not captured | not captured | not captured | not captured | exact (1.0) | tab_1:row8:col3, tab_1:row8:col4, tab_1:row8:col5, tab_1:row8:col7, tab_1:row8:col9 | — | not captured |
| VcR (L) | `Q63` · V1 | 0.67 | L | 0.00067 | [l] | not captured | llm (0.6) | tab_1:row9:col3, tab_1:row9:col4, tab_1:row9:col6, tab_1:row9:col8 | — | not captured |
| QR (L/h) | `Q30` · Q | 12.67 | L/h | 3.5194444444444445e-06 | [l] / [h] | not captured | llm (0.6) | tab_1:row10:col3, tab_1:row10:col4, tab_1:row10:col5, tab_1:row10:col7, tab_1:row10:col9 | — | not captured |
| CLR_CYP2D6 (L/h) | `Q370` · CLfm | 15.42 | L/h | 4.2833333333333335e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row15:col3, tab_1:row15:col4, tab_1:row15:col5, tab_1:row15:col7, tab_1:row15:col9 | — | not captured |
| (L/h) | `Q22` · CL | 4.85 | L/h | 1.3472222222222222e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row22:col2, tab_1:row22:col3, tab_1:row22:col4, tab_1:row22:col5, tab_1:row22:col6, tab_1:row22:col7, tab_1:row22:col9 | — | not captured |
| Total CLR (L/h) | `Q26` · CLR | 16.25 | L/h | 4.513888888888889e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | tab_1:row28:col7 | — | not captured |
| OHC_CLR (L/h) | `Q22` · CL | 14.08 | L/h | 3.911111111111111e-06 | [l] / [h] | not captured | exact (1.0) | tab_1:row32:col3, tab_1:row32:col7 | — | not captured |
| OHC_VcR (L) | `Q61` · V | 16.14 | L | 0.01614 | [l] | not captured | exact (1.0) | tab_1:row33:col3, tab_1:row33:col7 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q63 ('VpR (L)', value '64.44') — already have one for this compound
- dropped duplicate Q370 ('CLR_CYP2C9', value '10.50') — already have one for this compound
- linked '(L/h)' as 'CL' → Q22 (CL) for carvedilol enantiomers — compound marker removed
- dropped duplicate Q22 ('DMC_CLR (L/h)', value '16.24') — already have one for this compound
- metabolite volume: 'OHC_VcR (L)' Q63→Q61 for carvedilol metabolites — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (VcR (L)); Q30 (QR (L/h)); Q22 ((L/h)); Q22 (OHC_CLR (L/h)); Q61 (OHC_VcR (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=carvedilol enantiomers
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 48 linked by role; re-tagged parent→carvedilol enantiomers ×40, parent→carvedilol metabolites ×13
- molar mass: no plausible PubChem entry for 'carvedilol enantiomers' ('carvedilol enantiomers') — left in mass units
- molar mass: none found for 'carvedilol enantiomers' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row6:col2 = '0.86 (0.54-1.46)'
- unparsed cell tab_1:row6:col6 = '0.85 (0.75-1.02)'
- unparsed cell tab_1:row6:col8 = '0.12 0.16) (0.08-'
- unparsed cell tab_1:row7:col2 = '4.81 (3.47 -7.19)'
- unparsed cell tab_1:row7:col6 = '4.19 (3.87-5.20)'
- unparsed cell tab_1:row7:col8 = '0.110 0.16) (0.08-'
- unparsed cell tab_1:row8:col2 = '25.40 (16.89 -51.54)'
- unparsed cell tab_1:row8:col6 = '23.13 (18.49-30.20)'
- unparsed cell tab_1:row8:col8 = '0.16 0.25) (0.11-'
- unparsed cell tab_1:row9:col2 = '21.42 (7.84 -68.06) 16.88'
- unparsed cell tab_1:row9:col5 = '19.63 (16.30-26.02)'
- unparsed cell tab_1:row9:col7 = '0.66 (0.42-1.1)'
- unparsed cell tab_1:row10:col2 = '28.52 (7.52-34.13)'
- unparsed cell tab_1:row10:col6 = '28.49 (21.83-35.84)'
- unparsed cell tab_1:row10:col8 = '0.18 (0.13-0.26)'
- unparsed cell tab_1:row15:col1 = 'EM T2DM EM CYP2D6'
- unparsed cell tab_1:row15:col2 = '13.70 (7.45-27.56)'
- unparsed cell tab_1:row15:col6 = '6.07 (5.42-8.04)'
- unparsed cell tab_1:row15:col8 = '0.11 (0.08-0.15)'
- unparsed cell tab_1:row21:col1 = 'T2DM'
- unparsed cell tab_1:row21:col8 = '(0.16-'
- unparsed cell tab_1:row22:col1 = 'CYP2D6'
- unparsed cell tab_1:row22:col8 = '0.35)'
- unparsed cell tab_1:row28:col1 = 'T2DM CYP2D6 EM'
- unparsed cell tab_1:row28:col2 = '29.01 (19.34-44.04)'
- unparsed cell tab_1:row28:col6 = '21.69 (17.74-26.34)'
- unparsed cell tab_1:row32:col2 = '31.10 --'
- unparsed cell tab_1:row32:col6 = '42.87 (34.39-53.43)'
- unparsed cell tab_1:row33:col2 = '10.05 --'
- unparsed cell tab_1:row33:col6 = '9.98 (8.72-11.42)'
- unparsed cell tab_1:row34:col2 = '131.54 --'
- unparsed cell tab_1:row34:col6 = '142.44 (102.62-'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.091 (2/22 fields) | 20 |

<details><summary>20 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['carvedilol', 'carvedilol metabolites', 'metabolism']] | [['carvedilol', 'carvedilol metabolite', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[]` | 4.85 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr_cyp2d6]` | not captured | 15.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr_cyp2d6]` | 15.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fr]` | not captured | 19.54 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fr]` | 19.54 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kar]` | not captured | 10.63 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kar]` | 10.63 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_clr]` | not captured | 14.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_clr]` | 14.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_vcr]` | not captured | 16.14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ohc_vcr]` | 16.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[qr]` | not captured | 12.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[qr]` | 12.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[qs]` | not captured | 14.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total clr]` | 16.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vcr]` | not captured | 0.67 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vcr]` | 0.67 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vpr]` | not captured | 64.44 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | carvedilol enantiomers | carvedilol | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row32:col3', 'tab_1:row32:col7'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row28:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row10:col3', 'tab_1:row10:col4', 'tab_1:row10:col5', 'tab_1:row10:col7', 'tab_1:row10:col9'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row15:col3', 'tab_1:row15:col4', 'tab_1:row15:col5', 'tab_1:row15:col7', 'tab_1:row15:col9'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row6:col3', 'tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col7', 'tab_1:row6:col9'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row33:col3', 'tab_1:row33:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col6', 'tab_1:row9:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.85 | not captured | not captured | ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.85 L/h | not captured | not captured | ['tab_1:row22:col2', 'tab_1:row22:col3', 'tab_1:row22:col4', 'tab_1:row22:col5', 'tab_1:row22:col6', 'tab_1:row22:col7', 'tab_1:row22:col9'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14.1 L/h | not captured | not captured | ['tab_1:row32:col3', 'tab_1:row32:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 16.1 L | not captured | not captured | ['tab_1:row33:col3', 'tab_1:row33:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.67 L | not captured | not captured | ['tab_1:row9:col3', 'tab_1:row9:col4', 'tab_1:row9:col6', 'tab_1:row9:col8'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nardotto_2017` / `Nardotto_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_modelica.zip" download>Carvedilol_Nardotto2017_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_matlab.zip" download>Carvedilol_Nardotto2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_matlab_simbio.zip" download>Carvedilol_Nardotto2017_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_sbml.zip" download>Carvedilol_Nardotto2017_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_carvedilol/Carvedilol_Nardotto2017_reference/Carvedilol_Nardotto2017_reference_cellml.zip" download>Carvedilol_Nardotto2017_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:33 UTC</sub>
