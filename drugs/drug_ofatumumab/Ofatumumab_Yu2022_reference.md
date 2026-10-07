<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ofatumumab&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/&quot;},{&quot;label&quot;:&quot;Yu_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofatumumab_Struemper2014_reference&quot;,&quot;label&quot;:&quot;Struemper_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ofatumumab — `Ofatumumab_Yu2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.783). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has ofatumumab, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Yu H et al., Population Pharmacokinetic-B Cell Model…, CNS drugs (2022)
  ·  DOI: [10.1007/s40263-021-00895-w](https://doi.org/10.1007/s40263-021-00895-w)

## Model component
<dbs-pgx drug="ofatumumab" model-id="Ofatumumab_Yu2022_reference" status="rejected" stale="false" population="adults with relapsing multiple sclerosis" measured-compound="ofatumumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (day−1) | `Q49` · kabs | 0.157 | day−1 | 1.8171296296296296e-06 | [1] / [d] | 5.80 | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2 | — | 0.652 (None% RSE) |
| F (–) | `Q40` · Fab | 0.685 | not captured | not captured | not captured | 3.10 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | 0.531 (None% RSE) |
| Vc (L) | `Q63` · V1 | 2.62 | L | 0.0026200000000000004 | [l] | 2.11 | exact (1.0) | Tab3:row5:col1, Tab3:row5:col2 | — | 0.116 (None% RSE) |
| β(Vc,lwt70) | `Q47` · kel | 1.2 | Vc,lwt70 | not captured | [vc] | 8.66 | exact (1.0) | Tab3:row6:col1, Tab3:row6:col2 | — | 1.14 (None% RSE) |
| CL (L/day) | `Q22` · CL | 0.34 | L/day | 3.935185185185186e-09 | [l] / [d] | 2.99 | exact (1.0) | Tab3:row14:col1, Tab3:row14:col2 | — | 0.486 (None% RSE) |
| Q (L/day) | `Q30` · Q | 0.358 | L/day | 4.1435185185185185e-09 | [l] / [d] | 10.9 | exact (1.0) | Tab3:row17:col1, Tab3:row17:col2 | — | 0.705 (None% RSE) |
| Vp (L) | `Q64` · V2 | 2.8 | L | 0.0028 | [l] | not captured | exact (1.0) | Tab3:row19:col1 | — | not captured |
| KD (nmol/L) | `Q331` · KD | 0.167 | nmol/L | not captured | [nM] / [l] | not captured | exact (1.0) | Tab3:row20:col1 | — | not captured |
| koff (day−1) | `Q330` · koff | 5.53 | day−1 | 6.400462962962964e-05 | [1] / [d] | not captured | exact (1.0) | Tab3:row21:col1 | — | not captured |
| QB (L/day) | `Q54` · Qb | 0.78 | L/day | 9.027777777777778e-09 | [l] / [d] | not captured | exact (1.0) | Tab3:row36:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka (day−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'F (–)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Vc (L)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ke(P) (days−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ksyn0 (nmol/L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'R0 (nmol/L)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'CL (L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Q (L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'kdes (year−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ksyn∞ (nmol/L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'B0 (cells/µL)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Emax (–)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'EC50 (mg/L)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Gamma (–)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'kout (day−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Vb (L)' routed out of structural estimates ('Inter-individual variability')
- dropped value-less row: 'β(ka,lwt70)' (captured trailing unit 'ka,lwt70' for child rows)
- unit_dimension_unknown: 'Vc,lwt70' (kel)
- dropped duplicate Q47 ('ke(P) (days−1)', value '1.31') — already have one for this compound
- unit 'ka,lwt70' inherited from a section-header row for kel (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: 'ka,lwt70' (kel)
- dropped duplicate Q47 ('β(ke(P),AI)', value '0.713') — already have one for this compound
- dropped PD-category row 'ksyn0 (nmol/L/day)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped value-less row: 'β(ksyn0,lwt70)' (captured trailing unit 'ksyn0,lwt70' for child rows)
- dropped PD-category row 'R0 (nmol/L)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row11:col1', 'Tab3:row11:col2'])
- dropped value-less row: 'β(R0,AI)' (captured trailing unit 'R0,AI' for child rows)
- unit_dimension_unknown: 'R0,IV' (kel)
- dropped duplicate Q47 ('β(R0,IV)', value '0.987') — already have one for this compound
- unit_dimension_unknown: 'CL,lwt70' (kel)
- dropped duplicate Q47 ('β(CL,lwt70)', value '1.52') — already have one for this compound
- dropped value-less row: 'β(CL,IV)' (captured trailing unit 'CL,IV' for child rows)
- unit_dimension_mismatch: 'KD (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q47 ('kdes (year−1)', value '2.58') — already have one for this compound
- dropped unlinked row (NIL): 'ksyn∞ (nmol/L/day)' — extend the ontology if this is a real PK parameter (source ['Tab3:row23:col1', 'Tab3:row23:col2'])
- unit_dimension_unknown: 'ksyn∞,IV' (kel)
- dropped duplicate Q47 ('β(ksyn∞,IV)', value '2.49') — already have one for this compound
- dropped unlinked row (NIL): 'B0 (cells/µL)' — extend the ontology if this is a real PK parameter (source ['Tab3:row25:col1', 'Tab3:row25:col2'])
- dropped value-less row: 'β(B0,lage38)' (captured trailing unit 'B0,lage38' for child rows)
- unit_dimension_unknown: 'B0,lwt70' (kel)
- dropped duplicate Q47 ('β(B0,lwt70)', value '0.271') — already have one for this compound
- dropped PD-category row 'Emax (–)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row28:col1', 'Tab3:row28:col2'])
- unit_dimension_unknown: 'Emax,lBc200' (kel)
- dropped duplicate Q47 ('β(Emax,lBc200)', value '0.275') — already have one for this compound
- unit_dimension_unknown: 'Emax,APLIOS' (kel)
- dropped duplicate Q47 ('β(Emax,APLIOS)', value '0.503') — already have one for this compound
- dropped PD-category row 'EC50 (mg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row31:col1', 'Tab3:row31:col2'])
- dropped PD-category row 'Gamma (–)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row32:col1', 'Tab3:row32:col2'])
- dropped PD-category row 'kout (day−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row33:col1', 'Tab3:row33:col2'])
- dropped value-less row: 'β(kout,lwt70)' (captured trailing unit 'kout,lwt70' for child rows)
- dropped value-less row: 'β(kout,MIRROR)' (captured trailing unit 'kout,MIRROR' for child rows)
- unit_dimension_mismatch: 'Vb (L)' → Q54 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q54 ('Vb (L)', value '3.7') — already have one for this compound
- dropped unlinked row (NIL): 'Corr_Vb_Emax' — extend the ontology if this is a real PK parameter (source ['Tab3:row38:col1', 'Tab3:row38:col2'])
- dropped PD-category row 'Corr_kout_Vb' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row39:col2', 'Tab3:row40:col1', 'Tab3:row40:col2'])
- dropped value-less row: 'Corr_ka_CL'
- dropped unlinked row (NIL): 'Corr_kdes_CL' — extend the ontology if this is a real PK parameter (source ['Tab3:row42:col1', 'Tab3:row42:col2'])
- dropped unlinked row (NIL): 'Corr_kdes_ka' — extend the ontology if this is a real PK parameter (source ['Tab3:row43:col1', 'Tab3:row43:col2'])
- dropped value-less row: 'Corr_ke(P)_R0'
- dropped unlinked row (NIL): 'Corr_ksyn∞_R0' — extend the ontology if this is a real PK parameter (source ['Tab3:row45:col1', 'Tab3:row45:col2'])
- dropped value-less row: 'Corr_ksyn∞_ke(P)' (captured trailing unit 'P' for child rows)
- dropped unlinked row (NIL): 'Ofatumumab conc. additive (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row47:col1', 'Tab3:row47:col2'])
- dropped unlinked row (NIL): 'Ofatumumab conc. proportional' — extend the ontology if this is a real PK parameter (source ['Tab3:row48:col1', 'Tab3:row48:col2'])
- dropped unlinked row (NIL): 'B cell count additive (cells/µL)' — extend the ontology if this is a real PK parameter (source ['Tab3:row49:col1'])
- dropped unlinked row (NIL): 'B cell count proportional' — extend the ontology if this is a real PK parameter (source ['Tab3:row50:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ofatumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'ofatumumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = '3.95 [52]'
- unparsed cell Tab3:row3:col1 = '− 0.457'
- unparsed cell Tab3:row4:col4 = '9.00 [72]'
- unparsed cell Tab3:row5:col4 = '19.3 [NA]'
- unparsed cell Tab3:row7:col4 = '5.10 [65]'
- unparsed cell Tab3:row9:col4 = '64.1 [99]'
- unparsed cell Tab3:row10:col1 = '− 1.52'
- unparsed cell Tab3:row11:col4 = '4.66 [61]'
- unparsed cell Tab3:row12:col1 = '− 0.544'
- unparsed cell Tab3:row14:col4 = '4.66 [53]'
- unparsed cell Tab3:row16:col1 = '− 1.07'
- unparsed cell Tab3:row17:col4 = '27.3 [81]'
- unparsed cell Tab3:row22:col4 = '7.01 [58]'
- unparsed cell Tab3:row23:col4 = '10.3 [64]'
- unparsed cell Tab3:row25:col4 = '2.63 [26]'
- unparsed cell Tab3:row26:col1 = '− 0.282'
- unparsed cell Tab3:row28:col4 = '4.17 [57]'
- unparsed cell Tab3:row31:col4 = '9.68 [81]'
- unparsed cell Tab3:row32:col4 = '4.79 [80]'
- unparsed cell Tab3:row33:col4 = '4.64 [64]'
- unparsed cell Tab3:row34:col1 = '− 0.624'
- unparsed cell Tab3:row35:col1 = '− 0.554'
- unparsed cell Tab3:row37:col4 = '5.16 [51]'
- unparsed cell Tab3:row39:col1 = '− 0.336'
- unparsed cell Tab3:row41:col1 = '− 0.294'
- unparsed cell Tab3:row44:col1 = '− 0.551'
- unparsed cell Tab3:row46:col1 = '− 0.464'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.783 (18/23 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['ofatumumab', 'b cells', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[ofatumumab conc. additive]` | not captured | 0.0316 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vb]` | not captured | 3.7 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ofatumumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ofatumumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row17:col1', 'Tab3:row17:col2'] |
| C5_dimension_Q330 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row21:col1'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['Tab3:row20:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row36:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row19:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | Vc,lwt70 | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.34 | not captured | not captured | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0142 L/h | not captured | not captured | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.62 L | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.8 L | not captured | not captured | ['Tab3:row19:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ofatumumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yu_2022` / `Yu_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:37 UTC</sub>
