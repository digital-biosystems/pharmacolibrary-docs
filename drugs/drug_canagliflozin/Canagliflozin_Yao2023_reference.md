<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;canagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/&quot;},{&quot;label&quot;:&quot;Yao_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canagliflozin_Yao2023_reference&quot;,&quot;label&quot;:&quot;Yao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Yao_2023_UGEc&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 \u0394UGEc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/pd_Yao_2023_UGEc.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canagliflozin — `Canagliflozin_Yao2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.941). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[fed].parameter_id`: this record has Q40, the second reading Q43. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:36:24.141684+00:00) predates the upstream re-run (2026-10-04 22:24:09.384131+00:00). Current validate status: `extracted`.

## Citation
Yao X et al., A model-based meta analysis study of so…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934)

## Model component
<dbs-pgx drug="canagliflozin" model-id="Canagliflozin_Yao2023_reference" status="extracted" stale="true" population="healthy subjects and patients with T2DM" measured-compound="canagliflozin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 4.25 | L/h | 1.1805555555555556e-06 | [l] / [h] | 6.10 | exact (1.0) | psp412934-tbl-0001:row2:col2, psp412934-tbl-0001:row2:col3, psp412934-tbl-0001:row11:col2, psp412934-tbl-0001:row11:col3, psp412934-tbl-0001:row18:col2, psp412934-tbl-0001:row18:col3 | — | 2.50 (None% RSE) |
| Vc (L) | `Q63` · V1 | 30.6 | L | 0.030600000000000002 | [l] | 9.50 | exact (1.0) | psp412934-tbl-0001:row3:col2, psp412934-tbl-0001:row3:col3, psp412934-tbl-0001:row12:col2, psp412934-tbl-0001:row12:col3, psp412934-tbl-0001:row19:col2, psp412934-tbl-0001:row19:col3 | — | 9.44 (None% RSE) |
| CLD | `Q30` · Q | 1.37 | L/h | 3.805555555555556e-07 | L/h | 13.5 | exact (1.0) | psp412934-tbl-0001:row4:col2, psp412934-tbl-0001:row4:col3, psp412934-tbl-0001:row13:col2, psp412934-tbl-0001:row13:col3, psp412934-tbl-0001:row20:col2, psp412934-tbl-0001:row20:col3 | — | 12.8 (None% RSE) |
| VT (L) | `Q61` · V | 28.3 | L | 0.028300000000000002 | [l] | 26.5 | llm (0.6) | psp412934-tbl-0001:row5:col2, psp412934-tbl-0001:row5:col3, psp412934-tbl-0001:row14:col2, psp412934-tbl-0001:row14:col3, psp412934-tbl-0001:row21:col2, psp412934-tbl-0001:row21:col3 | — | not captured |
| K t (h−1) | `Q47` · kel | 4.13 | h−1 | 0.0011472222222222222 | [1] / [h] | 6.90 | llm (0.6) | psp412934-tbl-0001:row6:col2, psp412934-tbl-0001:row6:col3, psp412934-tbl-0001:row15:col2, psp412934-tbl-0001:row15:col3, psp412934-tbl-0001:row22:col2, psp412934-tbl-0001:row22:col3 | — | not captured |
| Fed | `Q40` · Fab | 0.254 | not captured | not captured | not captured | 29.8 | llm (0.6) | psp412934-tbl-0001:row7:col2, psp412934-tbl-0001:row7:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k21']

**Interpretation flags:**
- table section iiv: 'CL (L/h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vc (L)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'VT (L)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K t (h−1)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'CLD' routed out of structural estimates ('IIV (%)')
- table section iiv: 'FPGbaseline (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Pfmax1 (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Pfmax3 (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Pfmax4 (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K fp (week−1)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'SLOPEfd (mg/dL2)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'HbA1cbaseline (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Phmax1 (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Phmax3 (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Phmax4 (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K hp (week−1)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'DIShp (%/100 weeks)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K out (week−1)' routed out of structural estimates ('IIV (%)')
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'Emax (g/(mg/dL))' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row1:col2', 'Yao_2023_table_2:row1:col3'])
- dropped PD-category row 'Dapa‐EC50 (ng/mL·h)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row2:col2', 'Yao_2023_table_2:row2:col3'])
- dropped PD-category row 'Cana‐EC50 (ng/mL·h)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row3:col2', 'Yao_2023_table_2:row3:col3'])
- dropped PD-category row 'Empa‐EC50 (ng/mL·h)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row4:col2', 'Yao_2023_table_2:row4:col3'])
- dropped unlinked row (NIL): 'FPGbaseline (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row8:col2', 'Yao_2023_table_2:row8:col3'])
- dropped unlinked row (NIL): 'Pfmax1 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row9:col2', 'Yao_2023_table_2:row9:col3'])
- dropped unlinked row (NIL): 'Pfmax2 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row10:col2', 'Yao_2023_table_2:row10:col3'])
- dropped unlinked row (NIL): 'Pfmax3 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row11:col2', 'Yao_2023_table_2:row11:col3'])
- dropped unlinked row (NIL): 'Pfmax4 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row12:col2', 'Yao_2023_table_2:row12:col3'])
- dropped unlinked row (NIL): 'K fp (week−1)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row13:col2', 'Yao_2023_table_2:row13:col3'])
- dropped unlinked row (NIL): 'DISfp (mg/dl/100 weeks)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row14:col2', 'Yao_2023_table_2:row14:col3'])
- dropped PD-category row 'SLOPEfd (mg/dL2)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row15:col2', 'Yao_2023_table_2:row15:col3'])
- dropped unlinked row (NIL): 'HbA1cbaseline (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row17:col2', 'Yao_2023_table_2:row17:col3'])
- dropped unlinked row (NIL): 'Phmax1 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row18:col2', 'Yao_2023_table_2:row18:col3'])
- dropped unlinked row (NIL): 'Phmax2 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row19:col2', 'Yao_2023_table_2:row19:col3'])
- dropped unlinked row (NIL): 'Phmax3 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row20:col2', 'Yao_2023_table_2:row20:col3'])
- dropped unlinked row (NIL): 'Phmax4 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row21:col2', 'Yao_2023_table_2:row21:col3'])
- dropped unlinked row (NIL): 'K hp (week−1)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row22:col2', 'Yao_2023_table_2:row22:col3'])
- dropped unlinked row (NIL): 'DIShp (%/100 weeks)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row23:col2', 'Yao_2023_table_2:row23:col3'])
- dropped PD-category row 'K out (week−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row24:col2', 'Yao_2023_table_2:row24:col3'])
- dropped unlinked row (NIL): 'K in2 (%/week)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row25:col2', 'Yao_2023_table_2:row25:col3'])
- implicit units: 'CLD' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance (CLD). In population pharmacokinetic modeling, clearances are conventio')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=canagliflozin

**Extraction notes:**
- unparsed cell Yao_2023_table_2:row17:col1 = 'The estimated population HbA1c baseline level'
- unparsed cell Yao_2023_table_2:row18:col1 = 'Maximal placebo effects on HbA1c in naïve group'
- unparsed cell Yao_2023_table_2:row19:col1 = 'Maximal placebo effects on HbA1c in non‐naïve group'
- unparsed cell Yao_2023_table_2:row20:col1 = 'Maximal placebo effects on HbA1c in add‐on group'
- unparsed cell Yao_2023_table_2:row21:col1 = 'Maximal placebo effects on HbA1c in mixed group'
- unparsed cell Yao_2023_table_2:row22:col1 = 'HbA1c rate constant of placebo effect'
- unparsed cell Yao_2023_table_2:row23:col1 = 'Disease progression rate of HbA1c'
- unparsed cell Yao_2023_table_2:row24:col1 = 'Decrease rate of HbA1c'
- unparsed cell Yao_2023_table_2:row25:col1 = 'Increase rate of HbA1c independent of FPG'
- companion parameter table 2 transcribed (60 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[fed].parameter_id` | Q40 | Q43 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row4:col2', 'psp412934-tbl-0001:row4:col3', 'psp412934-tbl-0001:row13:col2', 'psp412934-tbl-0001:row13:col3', 'psp412934-tbl-0001:row20:col2', 'psp412934-tbl-0001:row20:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row6:col2', 'psp412934-tbl-0001:row6:col3', 'psp412934-tbl-0001:row15:col2', 'psp412934-tbl-0001:row15:col3', 'psp412934-tbl-0001:row22:col2', 'psp412934-tbl-0001:row22:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412934-tbl-0001:row5:col2', 'psp412934-tbl-0001:row5:col3', 'psp412934-tbl-0001:row14:col2', 'psp412934-tbl-0001:row14:col3', 'psp412934-tbl-0001:row21:col2', 'psp412934-tbl-0001:row21:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412934-tbl-0001:row3:col2', 'psp412934-tbl-0001:row3:col3', 'psp412934-tbl-0001:row12:col2', 'psp412934-tbl-0001:row12:col3', 'psp412934-tbl-0001:row19:col2', 'psp412934-tbl-0001:row19:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.25 | not captured | not captured | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.25 L/h | not captured | not captured | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 28.3 L | not captured | not captured | ['psp412934-tbl-0001:row5:col2', 'psp412934-tbl-0001:row5:col3', 'psp412934-tbl-0001:row14:col2', 'psp412934-tbl-0001:row14:col3', 'psp412934-tbl-0001:row21:col2', 'psp412934-tbl-0001:row21:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 30.6 L | not captured | not captured | ['psp412934-tbl-0001:row3:col2', 'psp412934-tbl-0001:row3:col3', 'psp412934-tbl-0001:row12:col2', 'psp412934-tbl-0001:row12:col3', 'psp412934-tbl-0001:row19:col2', 'psp412934-tbl-0001:row19:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=canagliflozin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_canagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yao_2023` / `Yao_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_modelica.zip" download>Canagliflozin_Yao2023_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_fmi.zip" download>Canagliflozin_Yao2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_matlab.zip" download>Canagliflozin_Yao2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_matlab_simbio.zip" download>Canagliflozin_Yao2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_sbml.zip" download>Canagliflozin_Yao2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_cellml.zip" download>Canagliflozin_Yao2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference.svg" alt="Canagliflozin_Yao2023_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Canagliflozin_Yao2023_reference_params.json` · controls `Canagliflozin_Yao2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:24 UTC</sub>
