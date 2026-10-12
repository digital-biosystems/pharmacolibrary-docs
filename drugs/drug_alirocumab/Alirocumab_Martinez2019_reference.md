<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/&quot;},{&quot;label&quot;:&quot;Martinez_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alirocumab — `Alirocumab_Martinez2019_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071), gpt-oss:120b (not confirmed, agreement 0.074). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alirocumab, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Martinez JM et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-018-0669-y](https://doi.org/10.1007/s40262-018-0669-y)

<div class="pk-model-meta" hidden drug="alirocumab" model-id="Alirocumab_Martinez2019_reference" status="needs_review" stale="false" population="healthy volunteers or hypercholesterolemic subjects" measured-compound="alirocumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 10 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Typical value of CLL (θ1, L/h)a | `Q22` · CL | 0.0114 | L/h | 3.166666666666667e-09 | L/h | not captured | llm (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4 | — | not captured |
| effect_of_wt_on_cll_12_a | `Q900` · effect_of_wt_on_cll_12_a | 3.24 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row3:col4 | — | not captured |
| Typical value of V2 (θ2, L) | `Q64` · V2 | 2.66 | L | 0.00266 | L | not captured | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4 | — | 4.34 (None% RSE) |
| Typical value of Ka (θ3, 1/h) | `Q49` · kabs | 0.0129 | 1/h | 3.5833333333333335e-06 | 1/h | not captured | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col4 | — | not captured |
| Typical value of V3 (θ4, L)b | `Q77` · V3 | 1.81 | L | 0.0018100000000000002 | L | not captured | llm_confirmed (0.6) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4 | — | 11.1 (None% RSE) |
| Typical value of Q (θ5, L/h) | `Q30` · Q | 0.0156 | L/h | 4.333333333333333e-09 | L/h | not captured | llm (0.6) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col4 | — | not captured |
| Typical value of Vm (θ6, mg.h/L) | `Q66` · Vmax | 0.172 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row10:col1, Tab2:row10:col2, Tab2:row10:col3, Tab2:row10:col4 | — | not captured |
| Typical value of Km (θ7, mg/L)c | `Q1` · Km | 9.49 | mg/L | not captured | mg/L | not captured | llm_confirmed (0.6) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col4 | — | 12.0 (None% RSE) |
| Typical value of F (θ10) | `Q40` · Fab | 0.590 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row13:col1, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4 | — | not captured |
| Typical value of LAG (θ11, h) | `Q83` · tlag | 0.643 | h | 2314.8 | h | not captured | llm (0.6) | Tab2:row14:col1, Tab2:row14:col2, Tab2:row14:col3, Tab2:row14:col4 | — | not captured |
| theta_v3_age | `Q900` · theta_v3_age | 0.310 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row8:col3, Tab2:row8:col4 | — | not captured |
| V | `Q61` · V | 3.2 | L | 0.0032 | L | not captured | review_gapfill (0.7) | Nolain_2022:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 CLL' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω2 V2' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω2 V3' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω2 km' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'Block ηV3/F − ηKMd' routed out of structural estimates ('Interindividual variability (CV %)')
- table section iiv: 'ω 2 F' routed out of structural estimates ('Interindividual variability (CV %)')
- table section residual_error: 'Proportional term (θ8)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive term (θ9, mg/L)' routed out of structural estimates ('Residual variability')
- covariate level 'Effect of WT on CLL (θ12)a' → Q900:effect_of_wt_on_cll_12_a = 3.24 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Effect of STATIN on CLL (θ13)a' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col4'])
- dropped duplicate Q1 ('Effect of FPCSK9 on Km (θ14)c', value '8.97') — already have one for this compound
- implicit units: 'Typical value of CLL (θ1, L/h)a' → L/h (from the paper text: "The paper text states: 'The elimination was characterized by a first-order process described as an apparent linear clear")
- implicit units: 'Typical value of V2 (θ2, L)' → L (from the paper text: "The paper text states: 'described by an apparent distribution volume (V2, L)' and Table 2 lists 'Typical value of V2 (θ2")
- implicit units: 'Typical value of Ka (θ3, 1/h)' → 1/h (from the paper text: "The paper text states: 'a two-compartment model with an absorption constant (Ka, 1/h)' and Table 2 lists 'Typical value ")
- implicit units: 'Typical value of V3 (θ4, L)b' → L (from the paper text: "The paper text states: 'described by an apparent distribution volume (V3, L)' and Table 2 lists 'Typical value of V3 (θ4")
- implicit units: 'Typical value of Q (θ5, L/h)' → L/h (from the paper text: "The paper text states: 'The peripheral compartment was related to the central compartment by an intercompartmental clear")
- implicit units: 'Typical value of Vm (θ6, mg.h/L)' — the LLM proposed 'mg/h', whose dimension does not fit Q66; left unset
- implicit units: 'Typical value of Km (θ7, mg/L)c' → mg/L (from the paper text: "The paper text states: 'a parallel non-linear process described by the two Michaelis–Menten parameters, Vm (mg/h) and Km")
- implicit units: 'Typical value of LAG (θ11, h)' → h (from the paper text: "Table 2 lists 'Typical value of LAG (θ11, h)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alirocumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- gap-filled Q61 (V) from Nolain_2022's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row2:col5 = '[0.0116; 0.0131]'
- unparsed cell Tab2:row3:col3 = '2.92·10−4'
- unparsed cell Tab2:row3:col5 = '[2.73·10−4; 3.11·10−4]'
- unparsed cell Tab2:row4:col3 = '6.44·10−3'
- unparsed cell Tab2:row4:col5 = '[5.66·10−3; 7.22·10−3]'
- unparsed cell Tab2:row5:col5 = '[2.95; 3.42]'
- unparsed cell Tab2:row6:col3 = '7.68·10−3'
- unparsed cell Tab2:row6:col5 = '[7.31·10−3; 8.06·10−3]'
- unparsed cell Tab2:row7:col5 = '[2.62; 2.95]'
- unparsed cell Tab2:row8:col5 = '[0.233; 0.386]'
- unparsed cell Tab2:row9:col5 = '[0.0166; 0.0203]'
- unparsed cell Tab2:row10:col5 = '[0.165; 0.202]'
- unparsed cell Tab2:row11:col5 = '[6.74; 8.72]'
- unparsed cell Tab2:row12:col3 = '− 0.541'
- unparsed cell Tab2:row12:col5 = '[− 0.638; − 0.444]'
- unparsed cell Tab2:row13:col5 = '[0.860; 0.865]'
- unparsed cell Tab2:row14:col5 = '[0.608; 0.674]'
- unparsed cell Tab2:row16:col1 = '0.402 (63.4%)'
- unparsed cell Tab2:row16:col3 = '0.232 (48.2%)'
- unparsed cell Tab2:row16:col5 = '[0.212; 0.252] (18.5)'
- unparsed cell Tab2:row17:col1 = '0.485 (69.7%)'
- unparsed cell Tab2:row17:col3 = '0.589 (76.7%)'
- unparsed cell Tab2:row17:col5 = '[0.537; 0.641] (42.5)'
- unparsed cell Tab2:row18:col1 = '0.151 (38.9%)'
- unparsed cell Tab2:row18:col3 = '0.0735 (27.1%)'
- unparsed cell Tab2:row18:col5 = '[0.0483; 0.0986] (60.4)'
- unparsed cell Tab2:row19:col1 = '0.337 (58.1%)'
- unparsed cell Tab2:row19:col3 = '0.298 (54.6%)'
- unparsed cell Tab2:row19:col5 = '[0.245; 0.351] (55.4)'
- unparsed cell Tab2:row20:col1 = '− 0.994'
- unparsed cell Tab2:row20:col3 = '− 0.793'
- unparsed cell Tab2:row21:col1 = '0.206 (45.3%e)'
- unparsed cell Tab2:row21:col3 = '1.060 (103%e)'
- unparsed cell Tab2:row21:col5 = '[0.920; 1.20] (49.5)'
- unparsed cell Tab2:row23:col1 = '0.261 (26.1%)'
- unparsed cell Tab2:row23:col3 = '0.259 (25.9%)'
- unparsed cell Tab2:row23:col5 = '[0.257; 0.262]'
- unparsed cell Tab2:row24:col5 = '[0.0405; 0.0526]'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.071 (2/28 fields) | 26 |
| `gpt-oss:120b` | not confirmed | 0.074 (2/27 fields) | 25 |

<details><summary>51 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect_of_wt_on_cll_12_a]` | 3.24 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt]` | not captured | 3.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_age]` | 0.310 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_age]` | not captured | 0.310 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of cll (θ1, l/h)a]` | 0.0114 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of cll (θ1, l/h)a]` | not captured | 0.0114 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of f]` | 0.590 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of f]` | not captured | 0.590 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of ka]` | 0.0129 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of ka]` | not captured | 0.0129 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of km (θ7, mg/l)c]` | 9.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of km (θ7, mg/l)c]` | not captured | 9.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of lag]` | 0.643 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of lag]` | not captured | 0.643 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of q]` | 0.0156 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of q]` | not captured | 0.0156 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v2]` | 2.66 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v2]` | not captured | 2.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v3 (θ4, l)b]` | 1.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of v3 (θ4, l)b]` | not captured | 1.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of vm]` | 0.172 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value of vm]` | not captured | 0.172 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 3.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alirocumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alirocumab | unknown | mismatch |
| `gpt-oss:120b` | `parameters[effect of statin on cll (θ13)a]` | not captured | 6.08 | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_wt_on_cll_12_a]` | 3.24 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_wt]` | not captured | 3.24 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v3_age]` | 0.310 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v3_age]` | not captured | 0.310 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of cll (θ1, l/h)a]` | 0.0114 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of cll (θ1, l/h)a]` | not captured | 0.0114 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of f]` | 0.590 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of f]` | not captured | 0.590 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of ka]` | 0.0129 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of ka]` | not captured | 0.0129 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of km (θ7, mg/l)c]` | 9.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of km (θ7, mg/l)c]` | not captured | 9.49 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of lag]` | 0.643 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of lag]` | not captured | 0.643 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of q]` | 0.0156 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of q]` | not captured | 0.0156 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of v2]` | 2.66 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of v2]` | not captured | 2.66 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of v3 (θ4, l)b]` | 1.81 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of v3 (θ4, l)b]` | not captured | 1.81 | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of vm]` | 0.172 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[typical value of vm]` | not captured | 0.172 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alirocumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alirocumab | unknown | mismatch |

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
| C2_base_Q1 | pass | 9.49 | 9.49 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q22 | pass | 0.0114 | 0.0114 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q30 | pass | 0.0156 | 0.0156 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q40 | pass | 0.59 | 0.59 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q49 | pass | 0.0129 | 0.0129 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q61 | fail | 3.2 | 0.0114 | 0.0036 | 0.05 | footnote reference category |
| C2_base_Q64 | pass | 2.66 | 2.66 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q66 | pass | 0.172 | 0.172 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q77 | pass | 1.81 | 1.81 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q83 | pass | 0.643 | 0.643 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col1', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Nolain_2022:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row14:col1', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0114 | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0114 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.2 L | not captured | not captured | ['Nolain_2022:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.66 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alirocumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Martinez_2019` / `Martinez_2019::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:48 UTC</sub>
