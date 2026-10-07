<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2021 \u00b7 stochastic_approximation&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2021_stochastic_approximation`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**T1/2ka , V and KD have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is rutoside's own; they describe quercetin. Extracted — quercetin: kabs 0.0129 h−1, t1/2ka 0.167, Fab 0.0275, tlag 0.021 h, V1 1.14 L/kg, V 0.0951, kel 0.119 h−1, KD 0.231, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has rutin, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:38.483033+00:00) predates the upstream re-run (2026-10-06 22:23:31.578034+00:00). Current validate status: `needs_review`.

## Citation
Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535)

## Model component
<dbs-pgx drug="rutoside" model-id="Rutoside_Domnguez2021_stochastic_approximation" status="needs_review" stale="true" population="Wistar rats" measured-compound="rutin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka1_pop (h−1) | `Q49` · kabs | 0.0129 | h−1 | 3.5833333333333335e-06 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00535-t005:row3:col2, pharmaceutics-13-00535-t005:row3:col3 | — | not captured |
| Tlag2_pop (h) | `Q83` · tlag | 0.021 | h | 75.60000000000001 | [h] | not captured | exact (1.0) | pharmaceutics-13-00535-t005:row10:col2, pharmaceutics-13-00535-t005:row10:col3 | — | not captured |
| Vpop (L/kg) | `Q352` · Vnorm | 1.14 | L/kg | 0.0798 | [l] / [kg] | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row15:col2, pharmaceutics-13-00535-t005:row15:col3, Domínguez_2021_table_4:row2:col2, Domínguez_2021_table_4:row2:col3 | — | not captured |
| kpop (h−1) | `Q47` · kel | 0.119 | h−1 | 3.3055555555555553e-05 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00535-t005:row20:col2, pharmaceutics-13-00535-t005:row20:col3, Domínguez_2021_table_4:row4:col2, Domínguez_2021_table_4:row4:col3 | — | 0.0231 (None% RSE) |
| k12_pop (h−1) | `Q301` · k12 | 0.0802 | h−1 | 2.2277777777777778e-05 | [1] / [h] | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row25:col2, pharmaceutics-13-00535-t005:row25:col3, Domínguez_2021_table_4:row6:col2, Domínguez_2021_table_4:row6:col3 | — | not captured |
| k21_pop (h−1) | `Q302` · k21 | 0.107 | h−1 | 2.9722222222222223e-05 | [1] / [h] | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row26:col2, pharmaceutics-13-00535-t005:row26:col3, Domínguez_2021_table_4:row7:col2, Domínguez_2021_table_4:row7:col3 | — | not captured |
| a | `Q900` · equation variable | 2.49 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row33:col2, pharmaceutics-13-00535-t005:row33:col3, Domínguez_2021_table_4:row14:col2, Domínguez_2021_table_4:row14:col3 | — | not captured |
| k V | `Q61` · V | 0.111 | not captured | not captured | not captured | not captured | llm (0.6) | Domínguez_2021_table_4:row12:col2, Domínguez_2021_table_4:row12:col3 | — | 0.0148 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'stochastic approximation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'βka1D75' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row4:col2', 'pharmaceutics-13-00535-t005:row4:col3'])
- dropped unlinked row (NIL): 'βka1D500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row5:col2', 'pharmaceutics-13-00535-t005:row5:col3'])
- dropped unlinked row (NIL): 'βka1D750' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row6:col2', 'pharmaceutics-13-00535-t005:row6:col3'])
- dropped unlinked row (NIL): 'βka1D1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row7:col2', 'pharmaceutics-13-00535-t005:row7:col3'])
- dropped duplicate Q49 ('ka2_pop (h−1)', value '0.0686') — already have one for this compound
- dropped unlinked row (NIL): 'F1_pop' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row9:col2', 'pharmaceutics-13-00535-t005:row9:col3'])
- dropped duplicate Q83 ('βTlag2D75', value '0.00556') — already have one for this compound
- dropped unlinked row (NIL): 'βTlag2D500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row12:col2', 'pharmaceutics-13-00535-t005:row12:col3'])
- dropped duplicate Q83 ('βTlag2D750', value '0.0595') — already have one for this compound
- dropped unlinked row (NIL): 'βTlag2D1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row14:col2', 'pharmaceutics-13-00535-t005:row14:col3'])
- dropped unlinked row (NIL): 'βVD75' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row16:col2', 'pharmaceutics-13-00535-t005:row16:col3'])
- dropped unlinked row (NIL): 'βVD500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row17:col2', 'pharmaceutics-13-00535-t005:row17:col3'])
- dropped unlinked row (NIL): 'βVD750' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row18:col2', 'pharmaceutics-13-00535-t005:row18:col3'])
- dropped unlinked row (NIL): 'βVD1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row19:col2', 'pharmaceutics-13-00535-t005:row19:col3'])
- dropped unlinked row (NIL): 'βkD75' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row21:col2', 'pharmaceutics-13-00535-t005:row21:col3'])
- dropped unlinked row (NIL): 'βkD500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row22:col2', 'pharmaceutics-13-00535-t005:row22:col3'])
- dropped unlinked row (NIL): 'βkD750' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row23:col2', 'pharmaceutics-13-00535-t005:row23:col3'])
- dropped unlinked row (NIL): 'βkD1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row24:col2', 'pharmaceutics-13-00535-t005:row24:col3'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row34:col2', 'pharmaceutics-13-00535-t005:row34:col3', 'Domínguez_2021_table_4:row15:col2', 'Domínguez_2021_table_4:row15:col3'])
- dropped unlinked row (NIL): 'βVGEXT' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_4:row3:col2', 'Domínguez_2021_table_4:row3:col3'])
- dropped unlinked row (NIL): 'βkGEXT' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_4:row5:col2', 'Domínguez_2021_table_4:row5:col3'])
- implicit units: 'k V' — the LLM proposed '1/h', whose dimension does not fit Q61; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (k V)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rutin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'stochastic approximation' subgroup of Domínguez_2021 (paper reports 3 populations: rutin, stochastic approximation, value)
- row roles: 8 per-group rows of quercetin covariate_effect but 0 reference group(s) — kept as printed
- row roles: 10 per-group rows of rutin covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 50/50 row label(s) assigned, 21 linked by role; re-tagged parent→quercetin ×45, rutin→parent ×33
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Domínguez_2021_table_2:row3:col3 = '0.18 ± 0.056 #'
- unparsed cell Domínguez_2021_table_2:row3:col4 = '0.18 ± 0.052 #'
- unparsed cell Domínguez_2021_table_2:row4:col3 = '0.23 ± 0.065 *#'
- unparsed cell Domínguez_2021_table_2:row4:col4 = '0.27 ± 0.067 *#'
- unparsed cell Domínguez_2021_table_2:row4:col5 = '0.19 ± 0.049 *#'
- unparsed cell Domínguez_2021_table_2:row5:col3 = '1.67 ± 0.312 *'
- unparsed cell Domínguez_2021_table_2:row5:col4 = '1.77 ± 0.05 *#'
- unparsed cell Domínguez_2021_table_2:row5:col5 = '1.96 ± 0.175 *#'
- unparsed cell Domínguez_2021_table_2:row6:col3 = '0.43 ± 0.070 *'
- unparsed cell Domínguez_2021_table_2:row6:col4 = '0.39 ± 0.011 *#'
- unparsed cell Domínguez_2021_table_2:row6:col5 = '0.36 ± 0.031 *##'
- unparsed cell Domínguez_2021_table_2:row7:col2 = '0.81 ± 0.053 *'
- unparsed cell Domínguez_2021_table_2:row7:col3 = '0.78 ± 0.089 *'
- unparsed cell Domínguez_2021_table_2:row7:col4 = '0.66 ± 0.027 *'
- unparsed cell Domínguez_2021_table_2:row7:col5 = '0.54 ± 0.078 *# ¥'
- unparsed cell Domínguez_2021_table_2:row8:col3 = '0.14 ± 0.039 #'
- unparsed cell Domínguez_2021_table_2:row8:col4 = '0.15 ± 0.043 #'
- unparsed cell Domínguez_2021_table_2:row9:col3 = '4576.46 ± 1234.634 *#'
- unparsed cell Domínguez_2021_table_2:row9:col4 = '3894.74 ± 896.421 *#'
- unparsed cell Domínguez_2021_table_2:row9:col5 = '5452.47 ± 1320.012 *#'
- companion parameter table 2 transcribed (24 record(s))
- unparsed cell Domínguez_2021_table_3:row4:col3 = '1.80 ± 0.274 *#'
- unparsed cell Domínguez_2021_table_3:row4:col4 = '1.60 ± 1.282 *#'
- unparsed cell Domínguez_2021_table_3:row4:col5 = '0.60 ± 0.137 *# ¥'
- unparsed cell Domínguez_2021_table_3:row5:col3 = '26.40 ± 3.714 *#'
- unparsed cell Domínguez_2021_table_3:row5:col4 = '35.76 ± 4.681 *#'
- unparsed cell Domínguez_2021_table_3:row5:col5 = '79.98 ± 10.112 *# ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row6:col3 = '2.32 ± 0.144 *#'
- unparsed cell Domínguez_2021_table_3:row6:col4 = '2.99 ± 0.214 *#'
- unparsed cell Domínguez_2021_table_3:row6:col5 = '1.64 ± 0.125 *#'
- unparsed cell Domínguez_2021_table_3:row7:col3 = '0.09 ± 0.010 *#'
- unparsed cell Domínguez_2021_table_3:row7:col4 = '0.08 ± 0.005 *#'
- unparsed cell Domínguez_2021_table_3:row7:col5 = '0.02 ± 0.002 ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row8:col3 = '7.87 ± 0.907 *#'
- unparsed cell Domínguez_2021_table_3:row8:col4 = '8.26 ± 0.545 *#'
- unparsed cell Domínguez_2021_table_3:row8:col5 = '33.82 ± 3.412 ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row9:col5 = '49.06 ± 4.864 *# ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row10:col3 = '432.14 ± 26.864 *#'
- unparsed cell Domínguez_2021_table_3:row10:col4 = '335.54 ± 24.714 *# ¥'
- unparsed cell Domínguez_2021_table_3:row10:col5 = '613.16 ± 49.838 *# ¥ ƶ'
- companion parameter table 3 transcribed (35 record(s))
- companion parameter table 4 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>16 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[a]` | 2.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1_pop]` | not captured | 0.0275 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12_pop]` | 0.0802 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12_pop]` | not captured | 0.0802 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21_pop]` | 0.107 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21_pop]` | not captured | 0.107 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1_pop]` | 0.0129 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1_pop]` | not captured | 0.0129 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpop]` | 0.119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpop]` | not captured | 0.119 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag2_pop]` | 0.021 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag2_pop]` | not captured | 0.021 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vpop]` | 1.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vpop]` | not captured | 1.14 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | rutin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | rutin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row25:col2', 'pharmaceutics-13-00535-t005:row25:col3', 'Domínguez_2021_table_4:row6:col2', 'Domínguez_2021_table_4:row6:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row26:col2', 'pharmaceutics-13-00535-t005:row26:col3', 'Domínguez_2021_table_4:row7:col2', 'Domínguez_2021_table_4:row7:col3'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row15:col2', 'pharmaceutics-13-00535-t005:row15:col3', 'Domínguez_2021_table_4:row2:col2', 'Domínguez_2021_table_4:row2:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row20:col2', 'pharmaceutics-13-00535-t005:row20:col3', 'Domínguez_2021_table_4:row4:col2', 'Domínguez_2021_table_4:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row3:col2', 'pharmaceutics-13-00535-t005:row3:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row10:col2', 'pharmaceutics-13-00535-t005:row10:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_4:row12:col2', 'Domínguez_2021_table_4:row12:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rutoside/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Domínguez_2021` / `Domínguez_2021::stochastic_approximation`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:23 UTC</sub>
