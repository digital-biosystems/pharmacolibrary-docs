<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;alverine&quot;,&quot;href&quot;:&quot;drugs/drug_alverine/&quot;},{&quot;label&quot;:&quot;Cho_2026 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alverine — `Alverine_Cho2026_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.773). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Rejected because the alverine mouse model's clearance/volume values fall outside the physiological window, indicating a unit or scale extraction error (e.g., CL 0.512 L/h, V1 0.443 L, V2 0.29 L).**

The record for alverine in mice lists CL = 0.512 L/h, V1 = 0.443 L, V2 = 0.29 L and Q = 0.372 L/h, which the review judged physiologically implausible in magnitude, consistent with a unit or scale extraction error. Implausible metabolite values also appear, such as an M2 elimination rate constant of 1874.08 1/h and an M3 absorption rate constant of 823.25 1/h. A second reader disagreed on the dose compound and primary analyte (alverine) and left the values 2.183, 1.064 and 823.25 for kam1, km1,total and kam3 unconfirmed (null). Extracted — alverine: CL 0.512 L/h, Kp 1.16, V1 0.443 L, V2 0.29 L, Q 0.372 L/h, kabs 6.9 1/h; M1: kfm 0.582 1/h, kabs 2.18 1/h, fm 0.92, V 47.9 L, kel 1.06 1/h; M3: kfm 1.13 1/h, kabs 823 1/h, fm 0.0399, V 2.29 L, kel 1.68 1/h; M2: kfm 1.06 1/h, kel 1.87e+03 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has alverine, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Cho A et al., Development of Integrated Parent-Metabo…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342)

## Model component
<dbs-pgx drug="alverine" model-id="Alverine_Cho2026_estimate" status="rejected" stale="false" population="mice" measured-compound="alverine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 18 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.512 | L/h | 1.4222222222222222e-07 | L/h | not captured | exact (1.0) | psp470342-tbl-0003:row2:col2 | — | not captured |
| kp,total ‡ | `Q410` · Kp | 1.156 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp470342-tbl-0003:row3:col2 | — | not captured |
| Vp1 | `Q63` · V1 | 0.443 | L | 0.00044300000000000003 | L | not captured | exact (1.0) | psp470342-tbl-0003:row4:col2 | — | not captured |
| Vp2 | `Q64` · V2 | 0.29 | L | 0.00029 | L | not captured | exact (1.0) | psp470342-tbl-0003:row5:col2 | — | not captured |
| Q | `Q30` · Q | 0.372 | L/h | 1.0333333333333333e-07 | L/h | not captured | exact (1.0) | psp470342-tbl-0003:row6:col2 | — | not captured |
| km1 | `Q305` · kfm | 0.582 | 1/h | 0.00016166666666666665 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row9:col2 | — | not captured |
| km3 ‡ | `Q305` · kfm | 1.131 | 1/h | 0.00031416666666666664 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row10:col2 | — | not captured |
| ka † | `Q49` · kabs | 6.9 | 1/h | 0.0019166666666666668 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row12:col2 | — | not captured |
| kam1 | `Q49` · kabs | 2.183 | 1/h | 0.0006063888888888888 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row13:col2 | — | not captured |
| kam3 | `Q49` · kabs | 823.25 | 1/h | 0.22868055555555555 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row14:col2 | — | not captured |
| fm1 ‡ | `Q45` · fm | 0.92 | not captured | not captured | not captured | not captured | special_case (0.95) | psp470342-tbl-0003:row16:col2 | — | not captured |
| fm3 | `Q45` · fm | 0.0399 | not captured | not captured | not captured | not captured | special_case (0.95) | psp470342-tbl-0003:row17:col2 | — | not captured |
| Vm1 | `Q61` · V | 47.905 | L | 0.047905 | L | not captured | exact (1.0) | psp470342-tbl-0003:row19:col2 | — | not captured |
| km2 ‡ | `Q305` · kfm | 1.064 | 1/h | 0.0002955555555555556 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row21:col2 | — | not captured |
| km1,total | `Q47` · kel | 1.064 | 1/h | 0.0002955555555555556 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row22:col2 | — | not captured |
| km2,total | `Q47` · kel | 1874.08 | 1/h | 0.5205777777777778 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row25:col2 | — | not captured |
| Vm3 | `Q61` · V | 2.287 | L | 0.002287 | L | not captured | exact (1.0) | psp470342-tbl-0003:row27:col2 | — | not captured |
| km3,total | `Q47` · kel | 1.683 | 1/h | 0.00046750000000000003 | 1/h | not captured | exact (1.0) | psp470342-tbl-0003:row28:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q410 ('kp', value '0.0249') — already have one for this compound
- dropped unlinked row (NIL): 'fp †' — extend the ontology if this is a real PK parameter (source ['psp470342-tbl-0003:row15:col2'])
- implicit units: 'CL' → L/h (from the popPK convention: 'Clearance (CL) is conventionally expressed in L/h in population PK models. The value 0.512 is consistent with this unit ')
- implicit units: 'Vp1' → L (from the popPK convention: 'Volume of distribution (Vp1) is conventionally expressed in L. The value 0.443 is consistent with a central volume in a ')
- implicit units: 'Vp2' → L (from the popPK convention: 'Volume of distribution (Vp2) is conventionally expressed in L. The value 0.29 is consistent with a peripheral volume in ')
- implicit units: 'Q' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is conventionally expressed in L/h. The value 0.372 is consistent with this unit.')
- implicit units: 'km1' → 1/h (from the popPK convention: 'First-order rate constant (km1) is conventionally expressed in 1/h. The value 0.582 is consistent with this unit.')
- implicit units: 'km3 ‡' → 1/h (from the popPK convention: 'First-order rate constant (km3) is conventionally expressed in 1/h. The value 1.131 is consistent with this unit.')
- implicit units: 'ka †' → 1/h (from the popPK convention: 'Absorption rate constant (ka) is conventionally expressed in 1/h. The value 6.9 is consistent with this unit.')
- implicit units: 'kam1' → 1/h (from the popPK convention: 'Absorption rate constant (kam1) is conventionally expressed in 1/h. The value 2.183 is consistent with this unit.')
- implicit units: 'kam3' → 1/h (from the popPK convention: 'Absorption rate constant (kam3) is conventionally expressed in 1/h. The value 823.25 is consistent with this unit, indic')
- implicit units: 'Vm1' → L (from the popPK convention: 'Apparent distribution volume (Vm1) is conventionally expressed in L. The value 47.905 is consistent with this unit.')
- implicit units: 'km2 ‡' → 1/h (from the popPK convention: 'First-order rate constant (km2) is conventionally expressed in 1/h. The value 1.064 is consistent with this unit.')
- implicit units: 'km1,total' → 1/h (from the popPK convention: 'Elimination rate constant (km1,total) is conventionally expressed in 1/h. The value 1.064 is consistent with this unit.')
- implicit units: 'km2,total' → 1/h (from the popPK convention: 'Elimination rate constant (km2,total) is conventionally expressed in 1/h. The value 1874.08 is consistent with this unit')
- implicit units: 'Vm3' → L (from the popPK convention: 'Apparent distribution volume (Vm3) is conventionally expressed in L. The value 2.287 is consistent with this unit.')
- implicit units: 'km3,total' → 1/h (from the popPK convention: 'Elimination rate constant (km3,total) is conventionally expressed in 1/h. The value 1.683 is consistent with this unit.')
- metabolite volume: 'Vm1' Q63→Q61 for M1 — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vm3' Q63→Q61 for M3 — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (Vp1); Q64 (Vp2); Q30 (Q); Q61 (Vm1); Q61 (Vm3)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alverine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two (site hepatic: 'Beyond PBPK modeling, semi‐physiological population PK approaches have incorporated presystemic metabolite formation usi')
- population split: 'estimate' subgroup of Cho_2026 (paper reports 7 populations: estimate, m1, m1 (4‐hydroxy alverine), m2 (4‐hydroxy alverine glucuronide), m3 (n‐desethyl alverine), parent (alverine), po)
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 43 linked by role; re-tagged parent→M1 ×11, parent→M3 ×10, parent→M2 ×5, M1→parent ×3, M2→parent ×5, M3→parent ×3
- molar mass: no plausible PubChem entry for 'M3' ('N-desethyl alverine') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M2' (LLM) — left in mass units
- molar mass: none found for 'M2' — its concentrations stay mass-only
- molar mass: none found for 'M3' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp470342-tbl-0003:row3:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row8:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row9:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row10:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row12:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row13:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row14:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row14:col3 = '8.82×103'
- unparsed cell psp470342-tbl-0003:row21:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row22:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row24:col2 = '8.1 × 10−5'
- unparsed cell psp470342-tbl-0003:row24:col4 = '5.5E‐05–0.00012'
- unparsed cell psp470342-tbl-0003:row25:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row28:col1 = 'h−1'
- transposed table Cho_2026_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (42 record(s))
- companion parameter table S2 transcribed (3 record(s))
- LLM selected parameter table(s) 1, 3, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.773 (17/22 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[kam1]` | 2.183 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kam3]` | 823.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[km1,total]` | 1.064 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alverine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alverine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 18 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row6:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row9:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row10:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row21:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row22:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row25:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row28:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470342-tbl-0003:row14:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470342-tbl-0003:row19:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470342-tbl-0003:row27:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470342-tbl-0003:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470342-tbl-0003:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.512 | not captured | not captured | ['psp470342-tbl-0003:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.512 L/h | not captured | not captured | ['psp470342-tbl-0003:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 47.9 L | not captured | not captured | ['psp470342-tbl-0003:row19:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.29 L | not captured | not captured | ['psp470342-tbl-0003:row27:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.443 L | not captured | not captured | ['psp470342-tbl-0003:row4:col2'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.29 L | not captured | not captured | ['psp470342-tbl-0003:row5:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alverine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cho_2026` / `Cho_2026::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 12:23 UTC</sub>
