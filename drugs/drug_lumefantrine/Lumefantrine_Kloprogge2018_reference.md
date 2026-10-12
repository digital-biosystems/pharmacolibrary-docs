<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Kloprogge_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Kloprogge2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The lumefantrine parent–metabolite record was rejected because the model structure did not match the published topology, the metabolite (desbutyl-lumefantrine) peripheral volume V2/F was not extracted, and the output was set to the parent central compartment instead of the measured analyte.**

The published structure is a parent (lumefantrine) with a two-compartment metabolite (desbutyl-lumefantrine, formed in the central compartment), but the built model used a one-compartment enteral structure, so the topology check failed. Parameter coverage reached only 7 of 9 expected parameters: the two V2/F values (peripheral volumes of distribution, 59.0 l for lumefantrine and 8650 l for desbutyl-lumefantrine) were neither emitted nor defaulted. The model output pointed at the parent's central compartment rather than the measured lumefantrine analyte compartment. The builder additionally left the lag time (Tlag) at a default and assumed apparent parameterization with F=1, Fm=1 and no molar correction. Extracted — lumefantrine: Fab 1, kabs 0.0386 h−1, CL/F 1.35 l/h, V1/F 11.2 l, Q/F 0.344 l/h, V2/F 59 l; desbutyl-lumefantrine: CL/F 78.4 l/h, V1/F 2.47e+03 l, Q/F 104 l/h, V2/F 8.65e+03 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine, the second reading lumefantrine; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `artemether-lumefantrine`, measured `lumefantrine`.

## Citation
Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018)
  ·  DOI: [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579)

<div class="pk-model-meta" hidden drug="Lumefantrine" model-id="Lumefantrine_Kloprogge2018_reference" status="rejected" stale="false" population="patients with uncomplicated Plasmodium falciparum malaria (children and pregnant women)" measured-compound="lumefantrine" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | pmed.1002579.t002:row2:col1, pmed.1002579.t002:row2:col3, Kloprogge_2018_table_4:row1:col1, Kloprogge_2018_table_4:row1:col3 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.0386 | h−1 | 1.0722222222222223e-05 | [1] / [h] | not captured | exact (1.0) | pmed.1002579.t002:row4:col1, Kloprogge_2018_table_4:row3:col1 | — | not captured |
| CL/F (l/h) | `Q27` · CL/F | 1.35 | l/h | 3.75e-07 | [l] / [h] | not captured | exact (1.0) | pmed.1002579.t002:row5:col1 | — | not captured |
| VC/F (l) | `Q290` · V1/F | 11.2 | l | 0.0112 | [l] | not captured | exact (1.0) | pmed.1002579.t002:row6:col1, pmed.1002579.t002:row6:col3 | — | not captured |
| Q/F (l/h) | `Q69` · Q/F | 0.344 | l/h | 9.555555555555554e-08 | [l] / [h] | not captured | exact (1.0) | pmed.1002579.t002:row7:col1 | — | not captured |
| VP/F (l) | `Q82` · V2/F | 59.0 | l | 0.059000000000000004 | [l] | not captured | exact (1.0) | pmed.1002579.t002:row8:col1 | — | not captured |
| CLDLF/F (l/h) | `Q27` · CL/F | 78.4 | l/h | 2.1777777777777782e-05 | [l] / [h] | not captured | exact (1.0) | Kloprogge_2018_table_4:row8:col1, Kloprogge_2018_table_4:row8:col3 | — | not captured |
| VC DLF/F (l) | `Q290` · V1/F | 2470 | l | 2.47 | [l] | not captured | exact (1.0) | Kloprogge_2018_table_4:row9:col1, Kloprogge_2018_table_4:row9:col3 | — | not captured |
| QDLF/F (l/h) | `Q69` · Q/F | 104 | l/h | 2.888888888888889e-05 | [l] / [h] | not captured | exact (1.0) | Kloprogge_2018_table_4:row10:col1, Kloprogge_2018_table_4:row10:col3 | — | not captured |
| VP DLF/F (l) | `Q82` · V2/F | 8650 | l | 8.65 | [l] | not captured | exact (1.0) | Kloprogge_2018_table_4:row11:col1, Kloprogge_2018_table_4:row11:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F: relative bioavailability | Q87 | not captured | llm_confirmed |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'fixed effects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'random effects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Dose50 (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['pmed.1002579.t002:row9:col1', 'Kloprogge_2018_table_4:row12:col1'])
- dropped duplicate Q49 ('Pregnancy on ka', value '0.352') — already have one for this compound
- dropped duplicate Q27 ('CLLF/F (l/h)', value '1.56') — already have one for this compound
- dropped duplicate Q290 ('VC LF/F (l)', value '21.2') — already have one for this compound
- dropped duplicate Q27 ('QLF/F (l/h)', value '0.381') — already have one for this compound
- dropped duplicate Q82 ('VP LF/F (l)', value '53.8') — already have one for this compound
- dropped value-less row: 'Box–Cox shape parameter: shape parameter on Box–Cox transformation'
- dropped value-less row: 'ka: absorption rate constant'
- dropped value-less row: 'CL/F: elimination clearance'
- dropped value-less row: 'VC/F: apparent central volume of distribution'
- dropped value-less row: 'Q/F: inter-compartmental clearance'
- dropped value-less row: 'VP/F: apparent peripheral volume of distribution'
- dropped value-less row: 'dose50: dose (mg/kg) needed for half of maximum dose-dependent saturation of F'
- dropped value-less row: 'pregnancy: categorical covariate effect of pregnancy on ka'
- dropped value-less row: 'parasitaemia: continuous covariate effect of enrolment parasite density on F'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lumefantrine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 20 linked by role; re-tagged lumefantrine→desbutyl-lumefantrine ×9
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell pmed.1002579.t002:row2:col4 = '5.95 (65.3–75.3)'
- unparsed cell pmed.1002579.t002:row4:col2 = '2.72 (0.0368 to 0.0410)'
- unparsed cell pmed.1002579.t002:row5:col2 = '29.7 (0.538 to 2.19)'
- unparsed cell pmed.1002579.t002:row6:col2 = '30.3 (4.65 to 18.8)'
- unparsed cell pmed.1002579.t002:row6:col4 = '10.8 (115–165)'
- unparsed cell pmed.1002579.t002:row7:col2 = '29.8 (0.137 to 0.566)'
- unparsed cell pmed.1002579.t002:row8:col2 = '29.7 (23.6 to 96.4)'
- unparsed cell pmed.1002579.t002:row9:col2 = '41.5 (1.25 to 8.04)'
- unparsed cell pmed.1002579.t002:row10:col2 = '21.2 (0.212 to 0.510)'
- unparsed cell pmed.1002579.t002:row12:col2 = '4.88 (0.293 to 0.357)'
- unparsed cell Kloprogge_2018_table_4:row1:col4 = '57.2 (49.0 to 64.9)'
- unparsed cell Kloprogge_2018_table_4:row3:col2 = '13.3 (0.0349 to 0.0567)'
- unparsed cell Kloprogge_2018_table_4:row4:col2 = '6.24 (1.40 to 1.77)'
- unparsed cell Kloprogge_2018_table_4:row5:col2 = '19.5 (14.6 to 30.5)'
- unparsed cell Kloprogge_2018_table_4:row5:col4 = '110 (87.5 to 134)'
- unparsed cell Kloprogge_2018_table_4:row6:col2 = '11.3 (0.313 to 0.497)'
- unparsed cell Kloprogge_2018_table_4:row7:col2 = '8.60 (46.2 to 65.2)'
- unparsed cell Kloprogge_2018_table_4:row8:col2 = '7.80 (64.6 to 88.5)'
- unparsed cell Kloprogge_2018_table_4:row8:col4 = '39.8 (32.0 to 51.0)'
- unparsed cell Kloprogge_2018_table_4:row9:col2 = '13.1 (1,960 to 3,280)'
- unparsed cell Kloprogge_2018_table_4:row9:col4 = '82.3 (49.5 to 110)'
- unparsed cell Kloprogge_2018_table_4:row10:col2 = '13.2 (78.3 to 131)'
- unparsed cell Kloprogge_2018_table_4:row10:col4 = '33.8 (0.339 to 53.0)'
- unparsed cell Kloprogge_2018_table_4:row11:col2 = '14.2 (6,990 to 11,800)'
- unparsed cell Kloprogge_2018_table_4:row11:col4 = '45.3 (0.453 to 68.9)'
- unparsed cell Kloprogge_2018_table_4:row13:col2 = '52.4 (0.264 to 0.889)'
- unparsed cell Kloprogge_2018_table_4:row15:col2 = '11.8 (0.196 to 0.315)'
- unparsed cell Kloprogge_2018_table_4:row16:col2 = '8.46 (0.0467 to 0.0657)'
- companion parameter table 4 transcribed (20 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 1 | 57.9 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 1.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldlf/f].value` | 78.4 | 38.8 | mismatch |
| `gpt-oss-120b` | `parameters[f: relative bioavailability]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 57.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.0409 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0386 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 0.344 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 0.344 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qdlf/f].value` | 104 | 34.9 | mismatch |
| `gpt-oss-120b` | `parameters[vc dlf/f].value` | 2470 | 86.0 | mismatch |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 144 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 11.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp dlf/f].value` | 8650 | 47.7 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f]` | not captured | 59.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 59.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine | lumefantrine | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pmed.1002579.t002:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kloprogge_2018_table_4:row8:col1', 'Kloprogge_2018_table_4:row8:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pmed.1002579.t002:row6:col1', 'pmed.1002579.t002:row6:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kloprogge_2018_table_4:row9:col1', 'Kloprogge_2018_table_4:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pmed.1002579.t002:row4:col1', 'Kloprogge_2018_table_4:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pmed.1002579.t002:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kloprogge_2018_table_4:row10:col1', 'Kloprogge_2018_table_4:row10:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pmed.1002579.t002:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kloprogge_2018_table_4:row11:col1', 'Kloprogge_2018_table_4:row11:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.35 L/h | not captured | not captured | ['pmed.1002579.t002:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 78.4 L/h | not captured | not captured | ['Kloprogge_2018_table_4:row8:col1', 'Kloprogge_2018_table_4:row8:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 11.2 L | not captured | not captured | ['pmed.1002579.t002:row6:col1', 'pmed.1002579.t002:row6:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.47e+03 L | not captured | not captured | ['Kloprogge_2018_table_4:row9:col1', 'Kloprogge_2018_table_4:row9:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 59 L | not captured | not captured | ['pmed.1002579.t002:row8:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 8.65e+03 L | not captured | not captured | ['Kloprogge_2018_table_4:row11:col1', 'Kloprogge_2018_table_4:row11:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=lumefantrine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 9 scholar param(s) emitted or defaulted | 7 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'V2/F'] |
| T3_shared_parameters | not captured | pass | 4 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lumefantrine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kloprogge_2018` / `Kloprogge_2018::reference`)
- model: `../../../knowledgebase/drugs/drug_lumefantrine/models/modelica/Lumefantrine_Kloprogge2018_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_lumefantrine/models/modelica/Lumefantrine_Kloprogge2018_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_lumefantrine/models/modelica/Lumefantrine_Kloprogge2018_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 0.0386 /h, F 1). Doses in the paper: 120, 180, 240, 360 mg.

<dbs-fmusim paramsurl="drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference/Lumefantrine_Kloprogge2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference/Lumefantrine_Kloprogge2018_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Lumefantrine_Kloprogge2018_reference_params.json` · controls `Lumefantrine_Kloprogge2018_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:11 UTC</sub>
