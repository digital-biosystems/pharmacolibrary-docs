<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2021 \u00b7 rutin&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2021_rutin`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The rutoside (rutin) record was rejected because the relative bioavailability parameter Frel is reported with the unit mg/kg, a dimension mismatch for a dimensionless fraction, and its unit could not be converted to SI.**

In the Domínguez_2021 rat model, Frel is defined as relative bioavailability — a fraction reaching systemic circulation — but is recorded with the verbatim unit mg/kg, so the dimension check on this structural parameter failed and no SI value could be produced. The remaining reported parameters (AUC∞ 14853.11 ng*h/mL, Vss 0.11 L/kg, CL 0.10 L/h/kg, kel 1.08 h−1, t1/2z 0.66 h, MRT 1.08 h, V 0.096 L/kg, Cmax 462.78 ng/mL, tmax 6 h, V/F 86.08 L/kg, CL/F 18.36 L/h/kg) carry consistent units, but the record could not be published while Frel's unit remained unconvertible. Extracted — rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model): AUC∞ 1.49e+04 ng*h/mL, Vss 0.11 L/kg, CL 0.1 L/h/kg, kel 1.08 h−1, t1/2z 0.66 h, MRT 1.08 h, V 0.096 L/kg, AUC/dose 1.02e+04 h/L, … (+5).

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `rutin (pure or as Physalis peruviana extract)`, measured `rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model)`.

## Citation
Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535)

## Model component
<dbs-pgx drug="rutoside" model-id="Rutoside_Domnguez2021_rutin" status="rejected" stale="false" population="Wistar rats" measured-compound="rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model)" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 13 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0-INF(ng*h/mL) | `Q17` · AUC∞ | 14853.11 | ng*h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Domínguez_2021_table_2:row2:col1, Domínguez_2021_table_2:row2:col2, Domínguez_2021_table_3:row2:col1, Domínguez_2021_table_3:row2:col2 | — | not captured |
| Vdss (L/kg) | `Q65` · Vss | 0.11 | L/kg | 0.0077 | [l] / [kg] | not captured | llm (0.6) | Domínguez_2021_table_2:row3:col1, Domínguez_2021_table_2:row3:col2 | — | not captured |
| Cl (L/h/kg) | `Q22` · CL | 0.10 | L/h/kg | 1.944444444444445e-06 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Domínguez_2021_table_2:row4:col1, Domínguez_2021_table_2:row4:col2 | — | not captured |
| k (h−1) | `Q47` · kel | 1.08 | h−1 | 0.00030000000000000003 | [1] / [h] | not captured | exact (1.0) | Domínguez_2021_table_2:row5:col1, Domínguez_2021_table_2:row5:col2, Domínguez_2021_table_3:row7:col1, Domínguez_2021_table_3:row7:col2 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 0.66 | h | 2376.0 | [h] | not captured | exact (1.0) | Domínguez_2021_table_2:row6:col1, Domínguez_2021_table_2:row6:col2, Domínguez_2021_table_3:row8:col1, Domínguez_2021_table_3:row8:col2 | — | not captured |
| MRT (h) | `Q53` · MRT | 1.08 | h | 3888.0000000000005 | [h] | not captured | exact (1.0) | Domínguez_2021_table_2:row7:col1, Domínguez_2021_table_3:row9:col1, Domínguez_2021_table_3:row9:col2 | — | not captured |
| Vdz (L/kg) | `Q61` · V | 0.096 | L/kg | 0.00672 | [l] / [kg] | not captured | llm (0.6) | Domínguez_2021_table_2:row8:col1, Domínguez_2021_table_2:row8:col2 | — | not captured |
| AUC/dose× 10−3 (h/L) | `Q189` · AUC/dose | 10243.52 | h/L | not captured | [h] / [l] | not captured | llm_confirmed (0.6) | Domínguez_2021_table_2:row9:col1, Domínguez_2021_table_2:row9:col2 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | 462.78 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Domínguez_2021_table_3:row3:col1, Domínguez_2021_table_3:row3:col2 | — | not captured |
| Tmax (h) | `Q56` · tmax | 6 | h | 21600.0 | [h] | not captured | exact (1.0) | Domínguez_2021_table_3:row4:col1, Domínguez_2021_table_3:row4:col2 | — | not captured |
| Vdz/F (L/kg) | `Q76` · V/F | 86.08 | L/kg | 6.0256 | [l] / [kg] | not captured | llm (0.6) | Domínguez_2021_table_3:row5:col1, Domínguez_2021_table_3:row5:col2 | — | not captured |
| Cl/F (L/h/kg) | `Q27` · CL/F | 18.36 | L/h/kg | 0.000357 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Domínguez_2021_table_3:row6:col1, Domínguez_2021_table_3:row6:col2 | — | not captured |
| Frel | `Q87` · Frel | 1.0 | mg/kg | not captured | not captured | not captured | exact (1.0) | Domínguez_2021_table_3:row11:col1, Domínguez_2021_table_3:row11:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1.45' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_2:row1:col1', 'Domínguez_2021_table_2:row1:col2'])
- unit_dimension_mismatch: 'AUC/dose× 10−3 (h/L)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '75' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_3:row1:col1', 'Domínguez_2021_table_3:row1:col2'])
- unit_dimension_mismatch: 'AUC/dose × 10−3 (h/L)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q189 ('AUC/dose × 10−3 (h/L)', value '54.61') — already have one for this compound
- dropped value-less row: 'β: variability due to significant covariate'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 75 (source ['pharmaceutics-13-00535-t005:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'D500, D750, D1000: covariate extract doses 500, 750, and 1000 mg/kg, respectively'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- population split: 'rutin' subgroup of Domínguez_2021 (paper reports 3 populations: rutin, stochastic approximation, value)
- row roles (LLM): model_class=compartmental; 53/53 row label(s) assigned, 21 linked by role; re-tagged parent→quercetin ×111, rutin→rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model) ×39, parent→rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model) ×20
- molar mass: none of 1 PubChem candidate(s) is 'quercetin-3-O-sulfate (Q3OS)' (LLM) — left in mass units
- molar mass: none found for 'quercetin-3-O-sulfate (Q3OS)' — its concentrations stay mass-only
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

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_2:row2:col1', 'Domínguez_2021_table_2:row2:col2', 'Domínguez_2021_table_3:row2:col1', 'Domínguez_2021_table_3:row2:col2'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | h/L | not captured | not captured | ['Domínguez_2021_table_2:row9:col1', 'Domínguez_2021_table_2:row9:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Domínguez_2021_table_2:row4:col1', 'Domínguez_2021_table_2:row4:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Domínguez_2021_table_3:row6:col1', 'Domínguez_2021_table_3:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_3:row3:col1', 'Domínguez_2021_table_3:row3:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Domínguez_2021_table_2:row5:col1', 'Domínguez_2021_table_2:row5:col2', 'Domínguez_2021_table_3:row7:col1', 'Domínguez_2021_table_3:row7:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2021_table_2:row7:col1', 'Domínguez_2021_table_3:row9:col1', 'Domínguez_2021_table_3:row9:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2021_table_3:row4:col1', 'Domínguez_2021_table_3:row4:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2021_table_2:row6:col1', 'Domínguez_2021_table_2:row6:col2', 'Domínguez_2021_table_3:row8:col1', 'Domínguez_2021_table_3:row8:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_2:row8:col1', 'Domínguez_2021_table_2:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_2:row3:col1', 'Domínguez_2021_table_2:row3:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_3:row5:col1', 'Domínguez_2021_table_3:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7 L/h | not captured | not captured | ['Domínguez_2021_table_2:row4:col1', 'Domínguez_2021_table_2:row4:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.29e+03 L/h | not captured | not captured | ['Domínguez_2021_table_3:row6:col1', 'Domínguez_2021_table_3:row6:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.72 L | not captured | not captured | ['Domínguez_2021_table_2:row8:col1', 'Domínguez_2021_table_2:row8:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 7.7 L | not captured | not captured | ['Domínguez_2021_table_2:row3:col1', 'Domínguez_2021_table_2:row3:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 6.03e+03 L | not captured | not captured | ['Domínguez_2021_table_3:row5:col1', 'Domínguez_2021_table_3:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rutoside/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Domínguez_2021` / `Domínguez_2021::rutin`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-01 17:05 UTC</sub>
