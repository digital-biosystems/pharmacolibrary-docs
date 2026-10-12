<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;brentuximab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_brentuximab_vedotin/&quot;},{&quot;label&quot;:&quot;Li_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brentuximab vedotin — `BrentuximabVedotin_Li2017_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Λ1 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is brentuximab vedotin's own; they describe MMAE and brentuximab vedotin (ADC). Extracted — MMAE: CL 55.7 L/d, V1 79.8 L, λ1 0.25, kfm 0.0785 1/h, Q 65 L/h, V2 28.1 L, fm -0.261, allometric_exponent 0.75; brentuximab vedotin (ADC): CL 1.56 L/d, V1 4.29 L, Q 2.83 L/h, V2 3.83 L, Q2 0.708 L/h, V3 9.52 L, allometric_exponent 0.698.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has brentuximab vedotin, the second reading brentuximab_vedotin; it also differs on 29 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `brentuximab vedotin`, measured `brentuximab vedotin ADC and unconjugated MMAE`.

## Citation
Li H et al., Population Pharmacokinetics of Brentuxi…, Journal of clinical pharmac… (2017)
  ·  DOI: [10.1002/jcph.920](https://doi.org/10.1002/jcph.920)

## Model component
<dbs-pgx drug="brentuximab vedotin" model-id="BrentuximabVedotin_Li2017_reference" status="needs_review" stale="false" population="patients with relapsed/refractory CD30-expressing hematologic malignancies" measured-compound="brentuximab vedotin ADC and unconjugated MMAE" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 15 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLM | `Q22` · CL | 55.7 | L/d | 6.44675925925926e-07 | L/h | 5.2 | exact (1.0) | jcph920-tbl-0004:row1:col2 | — | 46.9 (20% RSE) |
| V4 | `Q63` · V1 | 79.8 | L | 0.0798 | L | 11 | exact (1.0) | jcph920-tbl-0004:row2:col2 | — | 13.5 (24% RSE) |
| α | `Q67` · λ1 | 0.25 | not captured | not captured | not captured | not captured | exact (1.0) | jcph920-tbl-0004:row4:col2 | — | not captured |
| β | `Q305` · kfm | 0.0785 | 1/h | 2.1805555555555554e-05 | 1/h | 12 | exact (1.0) | jcph920-tbl-0004:row5:col1, jcph920-tbl-0004:row5:col2 | — | not captured |
| Q5 | `Q30` · Q | 65.0 | L/h | 1.8055555555555555e-05 | L/h | 30 | exact (1.0) | jcph920-tbl-0004:row6:col2 | — | 15 (None% RSE) |
| V5 | `Q64` · V2 | 28.1 | L | 0.028100000000000003 | L | 14 | exact (1.0) | jcph920-tbl-0004:row7:col2 | — | 25 (None% RSE) |
| Fm by cycle | `Q45` · fm | -0.261 | not captured | not captured | not captured | 14 | exact (1.0) | jcph920-tbl-0004:row8:col2 | — | 130 (17% RSE) |
| ΘBW,CLM,Q5 b | `Q319` · allometric_exponent | 0.75 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | jcph920-tbl-0004:row9:col2 | — | not captured |
| CL | `Q22` · CL | 1.56 | L/d | 1.8055555555555556e-08 | L/h | 2.9 | exact (1.0) | Li_2017_table_3:row0:col2 | — | not captured |
| V1 | `Q63` · V1 | 4.29 | L | 0.00429 | L | 1.9 | exact (1.0) | Li_2017_table_3:row1:col2 | — | not captured |
| Q2 | `Q30` · Q | 2.83 | L/h | 7.861111111111111e-07 | L/h | 5.9 | exact (1.0) | Li_2017_table_3:row2:col2 | — | not captured |
| V2 | `Q64` · V2 | 3.83 | L | 0.00383 | L | 6.3 | exact (1.0) | Li_2017_table_3:row3:col2 | — | not captured |
| Q3 | `Q99` · Q2 | 0.708 | L/h | 1.9666666666666665e-07 | L/h | 8.2 | exact (1.0) | Li_2017_table_3:row4:col2 | — | not captured |
| V3 | `Q77` · V3 | 9.52 | L | 0.009519999999999999 | L | 8.8 | exact (1.0) | Li_2017_table_3:row5:col2 | — | 106 (19% RSE) |
| ΘBW,CL,Q2,Q3 b | `Q319` · allometric_exponent | 0.698 | not captured | not captured | not captured | 8.8 | llm_corrected (0.6) | Li_2017_table_3:row6:col2 | — | not captured |
| ΘSEX,V1 | `Q900` · equation variable | 0.873 | not captured | not captured | not captured | 2.5 | llm_corrected (0.6) | Li_2017_table_3:row8:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLM' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V4' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'β' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Q5' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V5' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Fm by cycle' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'CL' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V1' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Q2' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V2' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Q3' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V3' routed out of structural estimates ('BSV %CV (%RSE)')
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'DAR0' — extend the ontology if this is a real PK parameter (source ['jcph920-tbl-0004:row3:col2'])
- dropped duplicate Q319 ('ΘBW,V4,V5 c', value '1.0') — already have one for this compound
- dropped duplicate Q319 ('ΘBW,V1,V2,V3 c', value '0.503') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['jcph920-tbl-0004:footnote', 'jcph920-tbl-0004:footnote', 'jcph920-tbl-0004:footnote', 'jcph920-tbl-0004:footnote']); the table cell was unparseable — needs review
- implicit units: 'CLM' → L/d (from the paper text: 'The text states: “Typical values of MMAE apparent CL (CLM) and apparent volume of central compartment (V4) were 55.7 L/d')
- implicit units: 'V4' → L (from the paper text: 'The text states: “Typical values of MMAE apparent CL (CLM) and apparent volume of central compartment (V4) were 55.7 L/d')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the popPK convention: 'β is a first-order rate constant, conventionally expressed per unit time. The paper states that the infusion rate was mo')
- implicit units: 'Q5' → L/h (from the popPK convention: 'Q5 is an intercompartmental clearance, conventionally expressed in L/h.')
- implicit units: 'V5' → L (from the popPK convention: 'V5 is a compartment volume, conventionally expressed in L.')
- implicit units: 'CL' → L/d (from the paper text: 'The text states: “The typical values of ADC CL and V1 for a 75-kg male patient were 1.56 L/d and 4.29 L, respectively.”')
- implicit units: 'V1' → L (from the paper text: 'The text states: “The typical values of ADC CL and V1 for a 75-kg male patient were 1.56 L/d and 4.29 L, respectively.”')
- implicit units: 'Q2' → L/h (from the popPK convention: 'Q2 is a distributional intercompartmental clearance; this type of clearance is conventionally expressed in L/h.')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a compartment volume, conventionally expressed in L.')
- implicit units: 'Q3' → L/h (from the popPK convention: 'Q3 is a distributional intercompartmental clearance; this type of clearance is conventionally expressed in L/h.')
- implicit units: 'V3' → L (from the popPK convention: 'V3 is a compartment volume, conventionally expressed in L.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brentuximab vedotin ADC and unconjugated MMAE
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [2]
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 25 linked by role; re-tagged parent→MMAE ×21, parent→brentuximab vedotin (ADC) ×15
- molar mass: no plausible PubChem entry for 'brentuximab vedotin ADC and unconjugated MMAE' ('brentuximab vedotin ADC and unconjugated monomethyl auristatin E') — left in mass units
- molar mass: none found for 'brentuximab vedotin ADC and unconjugated MMAE' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (18 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.0 (0/30 fields) | 30 |

<details><summary>30 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['brentuximab vedotin (adc)', 'mmae', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl]` | not captured | 1.56 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 1.56 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm]` | not captured | 55.7 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm]` | 55.7 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[fm by cycle]` | not captured | -0.261 | only_one_extracted |
| `qwen3.8-27b` | `parameters[fm by cycle]` | -0.261 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q2]` | not captured | 2.83 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q2]` | 2.83 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q3]` | not captured | 0.708 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q3]` | 0.708 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q5]` | 65.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | not captured | 4.29 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | 4.29 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` | not captured | 3.83 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` | 3.83 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v3]` | 9.52 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v4]` | not captured | 79.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v4]` | 79.8 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v5]` | 28.1 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[α]` | not captured | 0.25 | only_one_extracted |
| `qwen3.8-27b` | `parameters[α]` | 0.25 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[β]` | not captured | 0.0785 | only_one_extracted |
| `qwen3.8-27b` | `parameters[β]` | 0.0785 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θbw,cl,q2,q3 b]` | 0.698 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θbw,clm,q5 b]` | 0.75 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[θsex,v1]` | 0.873 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | brentuximab vedotin | brentuximab_vedotin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | brentuximab vedotin ADC and unconjugated MMAE | brentuximab_vedotin, MMAE | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph920-tbl-0004:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Li_2017_table_3:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph920-tbl-0004:row6:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Li_2017_table_3:row2:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph920-tbl-0004:row5:col1', 'jcph920-tbl-0004:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph920-tbl-0004:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Li_2017_table_3:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph920-tbl-0004:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Li_2017_table_3:row3:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Li_2017_table_3:row5:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Li_2017_table_3:row4:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['jcph920-tbl-0004:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 55.7 | not captured | not captured | ['jcph920-tbl-0004:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.32 L/h | not captured | not captured | ['jcph920-tbl-0004:row1:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.065 L/h | not captured | not captured | ['Li_2017_table_3:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 79.8 L | not captured | not captured | ['jcph920-tbl-0004:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.29 L | not captured | not captured | ['Li_2017_table_3:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 28.1 L | not captured | not captured | ['jcph920-tbl-0004:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.83 L | not captured | not captured | ['Li_2017_table_3:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_brentuximab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2017` / `Li_2017::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:33 UTC</sub>
