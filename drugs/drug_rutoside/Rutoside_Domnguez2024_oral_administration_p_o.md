<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2024 \u00b7 oral_administration_p_o&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2024_oral_administration_p_o`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.13). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The rutoside record was rejected because the bioavailability-adjusted parameters are double-corrected — Fab = 0.006 p.o. is applied alongside already-apparent values such as CL/F = 13.59 L/h/kg and V/F = 59.08 L/kg — and a structural parameter has a dimension mismatch, with the fm unit (p.o.) not convertible to SI.**

The record reports apparent parameters for rutin in New Zealand rabbits (CL/F 13.59 L/h/kg, V/F 59.08 L/kg, AUC∞ 7792.96 ng·h/mL) that are already adjusted for bioavailability, so applying the reported Fab of 0.006 again double-corrects them, violating apparent-parameter coherence. The metabolite fraction fm for quercetin is reported as 2.38 with unit 'p.o.', a unit that could not be converted to SI, so it reached the model without an SI value; a value of 2.38 for a fraction is also incoherent. A second reader disagreed on the parameterization (mechanistic rather than apparent) and could not confirm several reported values, including Fab 0.006, AUC∞ 7792.96, CL/F 13.59, Cmax 1166.2 and C0 0.012, leaving those findings inconclusive. Extracted — rutoside: AUC∞ 7.79e+03 ng·h/mL, Cmax 1.17e+03 ng/mL, tmax 0.75 h, V/F 59.1 L/kg, CL/F 13.6 L/h/kg, kel 0.234 h−1, MRT 11.8 h, AUC/dose 0.078 h/L/kg, … (+2); quercetin: fm 2.38 p.o..

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Domínguez Moré GP et al., Rutin and Physalis peruviana Extract: P…, Pharmaceutics (2024)
  ·  DOI: [10.3390/pharmaceutics16101241](https://doi.org/10.3390/pharmaceutics16101241)

## Model component
<dbs-pgx drug="rutoside" model-id="Rutoside_Domnguez2024_oral_administration_p_o" status="rejected" stale="false" population="New Zealand rabbits" measured-compound="rutin" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0–∞ (ng·h/mL) | `Q17` · AUC∞ | 7792.96 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Domínguez_2024_table_1:row1:col3, Domínguez_2024_table_1:row1:col4 | — | not captured |
| Cp0 or Cmax (ng/mL) | `Q32` · Cmax | 1166.2 | ng/mL | not captured | [ng] / [ml] | not captured | boundary_llm_dim_refused (0.8) | Domínguez_2024_table_1:row2:col3, Domínguez_2024_table_1:row2:col4 | — | not captured |
| Tmax (h) | `Q56` · tmax | 0.75 | h | 2700.0 | [h] | not captured | exact (1.0) | Domínguez_2024_table_1:row3:col3, Domínguez_2024_table_1:row3:col4 | — | not captured |
| Vz or Vz/F (L/kg) | `Q76` · V/F | 59.08 | L/kg | 4.1356 | [l] / [kg] | not captured | llm_confirmed (0.6) | Domínguez_2024_table_1:row5:col3 | — | not captured |
| Cl or Cl/F (L/h/kg) | `Q27` · CL/F | 13.59 | L/h/kg | 0.00026425 | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | Domínguez_2024_table_1:row6:col3 | — | not captured |
| λz (h−1) | `Q47` · kel | 0.234 | h−1 | 6.500000000000001e-05 | [1] / [h] | not captured | exact (1.0) | Domínguez_2024_table_1:row7:col3 | — | not captured |
| MRT (h) | `Q53` · MRT | 11.76 | h | 42336.0 | [h] | not captured | exact (1.0) | Domínguez_2024_table_1:row9:col3 | — | not captured |
| AUC0–∞/dose (h/L/kg) | `Q189` · AUC/dose | 0.078 | h/L/kg | not captured | [h] / [[kg] · [l]] | not captured | llm_confirmed (0.6) | Domínguez_2024_table_1:row10:col3 | — | not captured |
| Cp0 or Cmax/dose (L−1/kg) | `Q86` · C0 | 0.012 | L−1/kg | not captured | [1] / [[kg] · [l]] | not captured | llm_corrected (0.6) | Domínguez_2024_table_1:row11:col3 | — | not captured |
| Fmet | `Q45` · fm | 2.38 | p.o. | not captured | [o] · [p] | not captured | exact (1.0) | Domínguez_2024_table_1:row12:col3 | — | not captured |
| F | `Q40` · Fab | 0.006 | p.o. | not captured | not captured | not captured | exact (1.0) | Domínguez_2024_table_1:row13:col3, Domínguez_2024_table_1:row13:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Pure Rutin(0.37 mg/kg)' — extend the ontology if this is a real PK parameter (source ['Domínguez_2024_table_1:row0:col3'])
- unit_dimension_mismatch: 'AUC0–∞/dose (h/L/kg)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'L−1/kg' (C0)
- unit_dimension_unknown: 'p.o.' (fm)
- dropped value-less row: 'β'
- dropped value-less row: 'Ω'
- dropped value-less row: 'b'
- dropped value-less row: 'R.S.E.'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 177 (source ['pharmaceutics-16-01241-t003:footnote']); the table cell was unparseable — needs review
- implicit units: 'Cp0 or Cmax/dose (L−1/kg)' — the LLM proposed 'L/kg', whose dimension does not fit Q86; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'oral administration (p.o.)' subgroup of Domínguez_2024 (paper reports 4 populations: extract(equivalent to 7.4 mg/kg of rutin), intravenous administration (i.v.), oral administration (p.o.), pure rutin(100 mg/kg))
- row roles (LLM): model_class=noncompartmental; 47/47 row label(s) assigned, 56 linked by role; re-tagged rutin→parent ×131, rutin→quercetin ×58
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-16-01241-t003:row7:col4 = '−1.2–−0.23'
- unparsed cell Domínguez_2024_table_1:row4:col2 = '0.91 ± 0.320 *'
- unparsed cell Domínguez_2024_table_1:row5:col2 = '0.18 ± 0.055 *'
- unparsed cell Domínguez_2024_table_1:row5:col4 = '5.20 ± 1.470 *'
- unparsed cell Domínguez_2024_table_1:row6:col2 = '0.300 ± 0.060 *'
- unparsed cell Domínguez_2024_table_1:row6:col4 = '1.69 ± 0.267 *'
- unparsed cell Domínguez_2024_table_1:row7:col4 = '0.33 ± 0.047 *'
- unparsed cell Domínguez_2024_table_1:row9:col2 = '2.94 ± 0.515 *'
- unparsed cell Domínguez_2024_table_1:row9:col4 = '14.89 ± 1.690 *'
- unparsed cell Domínguez_2024_table_1:row10:col2 = '0.035 ± 0.008 *'
- unparsed cell Domínguez_2024_table_1:row10:col4 = '0.61 ± 0.102 *'
- unparsed cell Domínguez_2024_table_1:row11:col2 = '0.067 ± 0.010 *'
- unparsed cell Domínguez_2024_table_1:row11:col4 = '0.081 ± 0.026 *'
- unparsed cell Domínguez_2024_table_1:row12:col4 = '3.80 ± 0.749 *'
- companion parameter table 1 transcribed (32 record(s))
- unparsed cell Domínguez_2024_table_2:row2:col2 = '3.90 ± 0.224 **'
- unparsed cell Domínguez_2024_table_2:row3:col2 = '21.44 ± 5.282 *'
- unparsed cell Domínguez_2024_table_2:row4:col2 = '0.91 ± 0.113 *'
- unparsed cell Domínguez_2024_table_2:row7:col2 = '1.12 ± 0.144 *'
- unparsed cell Domínguez_2024_table_2:row8:col2 = '0.083 ± 0.011 *'
- companion parameter table 2 transcribed (14 record(s))
- unparsed cell Domínguez_2024_table_4:row2:col4 = '−1.81–−0.71'
- unparsed cell Domínguez_2024_table_4:row8:col4 = '−2.65–−1.72'
- companion parameter table 4 transcribed (88 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.13 (3/23 fields) | 20 |

<details><summary>20 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[auc0-inf/dose]` | 0.078 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-inf]` | 7792.96 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl or cl/f]` | 13.59 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cp0 or cmax/dose]` | 0.012 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cp0 or cmax]` | 1166.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f 1]` | not captured | 0.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fmet]` | 2.38 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 4.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21]` | not captured | 9.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k]` | not captured | 1.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1]` | not captured | 0.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrt]` | 11.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag2]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 0.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 0.32 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vz or vz/f]` | 59.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[λz]` | 0.234 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2024_table_1:row1:col3', 'Domínguez_2024_table_1:row1:col4'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | h/L/kg | not captured | not captured | ['Domínguez_2024_table_1:row10:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Domínguez_2024_table_1:row6:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2024_table_1:row2:col3', 'Domínguez_2024_table_1:row2:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Domínguez_2024_table_1:row7:col3'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2024_table_1:row9:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Domínguez_2024_table_1:row3:col3', 'Domínguez_2024_table_1:row3:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2024_table_1:row5:col3'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 | L−1/kg | not captured | not captured | ['Domínguez_2024_table_1:row11:col3'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.006 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 951 L/h | not captured | not captured | ['Domínguez_2024_table_1:row6:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.14e+03 L | not captured | not captured | ['Domínguez_2024_table_1:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rutoside/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Domínguez_2024` / `Domínguez_2024::oral_administration_p_o`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-01 17:05 UTC</sub>
