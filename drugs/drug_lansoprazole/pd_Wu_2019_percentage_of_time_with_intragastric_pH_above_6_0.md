<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;lansoprazole&quot;,&quot;href&quot;:&quot;drugs/drug_lansoprazole/&quot;},{&quot;label&quot;:&quot;Wu_2019 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Dexlansoprazole drives name (in TpH ≥ 6.0(%)) (inhibition; the model form was not identified).

**Model:** No model was generated from this record.

> The paper does not report a formal PD model: dexlansoprazole/lansoprazole plasma concentrations (Cmax 848.13–3242.14 ng/mL, t½ 1.02–2.32 h) were related to the percentage of time with intragastric pH ≥ 6.0 (TpH ≥ 6.0, %) only via an assumed linear, direct concentration–effect relationship, with no Imax, IC50, EC50, Emax, kin, kout, ke0 or gamma values given; the authors note the PK/PD relationship was weak and that mechanism-based models of gastric acid production were not explored.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Wu_2019`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Wu L et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Clinical drug investigation (2019)
  ·  DOI: [10.1007/s40261-019-00824-2](https://doi.org/10.1007/s40261-019-00824-2)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | Cmax, ng/mL — Dexlansoprazole group | `Q32` · not captured | 1534.86 | ng/mL | not captured | exact (not captured) | Tab2:row3:col1 |
| PK (driver) | Cmax, ng/mL — Dexlansoprazole group | `Q32` · not captured | 1490.00 | ng/mL | not captured | exact (not captured) | Tab2:row3:col2 |
| PK (driver) | Cmax, ng/mL — Dexlansoprazole group | `Q32` · not captured | 1512.43 | ng/mL | not captured | exact (not captured) | Tab2:row3:col3 |
| PK (driver) | Cmax, ng/mL — Dexlansoprazole group | `Q32` · not captured | 3242.14 | ng/mL | not captured | exact (not captured) | Tab2:row3:col4 |
| PK (driver) | Cmax, ng/mL — Dexlansoprazole group | `Q32` · not captured | 3145.64 | ng/mL | not captured | exact (not captured) | Tab2:row3:col5 |
| PK (driver) | Cmax, ng/mL — Dexlansoprazole group | `Q32` · not captured | 3193.89 | ng/mL | not captured | exact (not captured) | Tab2:row3:col6 |
| PK (driver) | Cmax, ng/mL — Lansoprazole group | `Q32` · not captured | 1663.50 | ng/mL | not captured | exact (not captured) | Tab2:row3:col7 |
| PK (driver) | Cmax, ng/mL — Lansoprazole group | `Q32` · not captured | 848.13 | ng/mL | not captured | exact (not captured) | Tab2:row3:col8 |
| PK (driver) | t½, h — Dexlansoprazole group | `Q57` · not captured | 2.00 | h | not captured | llm (not captured) | Tab2:row4:col1 |
| PK (driver) | t½, h — Dexlansoprazole group | `Q57` · not captured | 1.52 | h | not captured | llm (not captured) | Tab2:row4:col2 |
| PK (driver) | t½, h — Dexlansoprazole group | `Q57` · not captured | 1.76 | h | not captured | llm (not captured) | Tab2:row4:col3 |
| PK (driver) | t½, h — Dexlansoprazole group | `Q57` · not captured | 2.07 | h | not captured | llm (not captured) | Tab2:row4:col4 |
| PK (driver) | t½, h — Dexlansoprazole group | `Q57` · not captured | 2.04 | h | not captured | llm (not captured) | Tab2:row4:col5 |
| PK (driver) | t½, h — Dexlansoprazole group | `Q57` · not captured | 2.06 | h | not captured | llm (not captured) | Tab2:row4:col6 |
| PK (driver) | t½, h — Lansoprazole group | `Q57` · not captured | 2.32 | h | not captured | llm (not captured) | Tab2:row4:col7 |
| PK (driver) | t½, h — Lansoprazole group | `Q57` · not captured | 1.02 | h | not captured | llm (not captured) | Tab2:row4:col8 |
| PK (driver) | MRTt — Dexlansoprazole group | `Q53` · not captured | 2.28 | not captured | not captured | llm (not captured) | Tab2:row5:col1 |
| PK (driver) | MRTt — Dexlansoprazole group | `Q53` · not captured | 1.88 | not captured | not captured | llm (not captured) | Tab2:row5:col2 |
| PK (driver) | MRTt — Dexlansoprazole group | `Q53` · not captured | 2.08 | not captured | not captured | llm (not captured) | Tab2:row5:col3 |
| PK (driver) | MRTt — Dexlansoprazole group | `Q53` · not captured | 2.30 | not captured | not captured | llm (not captured) | Tab2:row5:col4 |
| PK (driver) | MRTt — Dexlansoprazole group | `Q53` · not captured | 2.34 | not captured | not captured | llm (not captured) | Tab2:row5:col5 |
| PK (driver) | MRTt — Dexlansoprazole group | `Q53` · not captured | 2.32 | not captured | not captured | llm (not captured) | Tab2:row5:col6 |
| PK (driver) | MRTt — Lansoprazole group | `Q53` · not captured | 2.50 | not captured | not captured | llm (not captured) | Tab2:row5:col7 |
| PK (driver) | MRTt — Lansoprazole group | `Q53` · not captured | 1.02 | not captured | not captured | llm (not captured) | Tab2:row5:col8 |
| PK (driver) | AUCt, ng·h/mL — Dexlansoprazole group | `Q19` · not captured | 3706.33 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col1 |
| PK (driver) | AUCt, ng·h/mL — Dexlansoprazole group | `Q19` · not captured | 2956.61 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col2 |
| PK (driver) | AUCt, ng·h/mL — Dexlansoprazole group | `Q19` · not captured | 3331.47 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col3 |
| PK (driver) | AUCt, ng·h/mL — Dexlansoprazole group | `Q19` · not captured | 8504.36 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col4 |
| PK (driver) | AUCt, ng·h/mL — Dexlansoprazole group | `Q19` · not captured | 7705.40 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col5 |
| PK (driver) | AUCt, ng·h/mL — Dexlansoprazole group | `Q19` · not captured | 8104.88 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col6 |
| PK (driver) | AUCt, ng·h/mL — Lansoprazole group | `Q19` · not captured | 1140.25 | ng·h/mL | not captured | exact (not captured) | Tab2:row6:col8 |
| PK (driver) | AUC∞, ng·h/mL — Dexlansoprazole group | `Q17` · not captured | 3973.77 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col1 |
| PK (driver) | AUC∞, ng·h/mL — Dexlansoprazole group | `Q17` · not captured | 3022.23 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col2 |
| PK (driver) | AUC∞, ng·h/mL — Dexlansoprazole group | `Q17` · not captured | 3498.00 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col3 |
| PK (driver) | AUC∞, ng·h/mL — Dexlansoprazole group | `Q17` · not captured | 9380.59 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col4 |
| PK (driver) | AUC∞, ng·h/mL — Dexlansoprazole group | `Q17` · not captured | 8206.10 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col5 |
| PK (driver) | AUC∞, ng·h/mL — Dexlansoprazole group | `Q17` · not captured | 8793.35 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col6 |
| PK (driver) | AUC∞, ng·h/mL — Lansoprazole group | `Q17` · not captured | 1161.07 | ng·h/mL | not captured | exact (not captured) | Tab2:row7:col8 |
| PK (driver) | Vd, L — Dexlansoprazole group | `Q61` · not captured | 11.00 | L | not captured | exact (not captured) | Tab2:row8:col1 |
| PK (driver) | Vd, L — Dexlansoprazole group | `Q61` · not captured | 11.31 | L | not captured | exact (not captured) | Tab2:row8:col2 |
| PK (driver) | Vd, L — Dexlansoprazole group | `Q61` · not captured | 11.16 | L | not captured | exact (not captured) | Tab2:row8:col3 |
| PK (driver) | Vd, L — Dexlansoprazole group | `Q61` · not captured | 10.03 | L | not captured | exact (not captured) | Tab2:row8:col4 |
| PK (driver) | Vd, L — Dexlansoprazole group | `Q61` · not captured | 10.57 | L | not captured | exact (not captured) | Tab2:row8:col5 |
| PK (driver) | Vd, L — Dexlansoprazole group | `Q61` · not captured | 10.30 | L | not captured | exact (not captured) | Tab2:row8:col6 |
| PK (driver) | Vd, L — Lansoprazole group | `Q61` · not captured | 43.65 | L | not captured | exact (not captured) | Tab2:row8:col8 |
| PK (driver) | CL, L/h — Dexlansoprazole group | `Q22` · not captured | 4.90 | L/h | not captured | exact (not captured) | Tab2:row9:col1 |
| PK (driver) | CL, L/h — Dexlansoprazole group | `Q22` · not captured | 5.90 | L/h | not captured | exact (not captured) | Tab2:row9:col2 |
| PK (driver) | CL, L/h — Dexlansoprazole group | `Q22` · not captured | 5.40 | L/h | not captured | exact (not captured) | Tab2:row9:col3 |
| PK (driver) | CL, L/h — Dexlansoprazole group | `Q22` · not captured | 4.65 | L/h | not captured | exact (not captured) | Tab2:row9:col4 |
| PK (driver) | CL, L/h — Dexlansoprazole group | `Q22` · not captured | 4.39 | L/h | not captured | exact (not captured) | Tab2:row9:col5 |
| PK (driver) | CL, L/h — Dexlansoprazole group | `Q22` · not captured | 4.52 | L/h | not captured | exact (not captured) | Tab2:row9:col6 |
| PK (driver) | CL, L/h — Lansoprazole group | `Q22` · not captured | 34.66 | L/h | not captured | exact (not captured) | Tab2:row9:col8 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/60 fields) | 60 |

<details><summary>60 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | dexlansoprazole | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q17]` | 3973.77 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | 3022.23 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | 3498.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | 9380.59 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | 8206.10 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | 8793.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q17]` | 1161.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 3706.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 2956.61 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 3331.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 8504.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 7705.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 8104.88 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q19]` | 1140.25 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 4.90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 5.90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 5.40 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 4.65 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 4.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 4.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q22]` | 34.66 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 1534.86 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 1490.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 1512.43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 3242.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 3145.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 3193.89 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 1663.50 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q32]` | 848.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 2.28 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 1.88 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 2.08 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 2.30 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 2.34 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 2.32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 2.50 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q53]` | 1.02 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 1.52 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 1.76 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.07 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.04 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.06 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.32 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 1.02 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 11.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 11.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 11.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 10.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 10.57 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 10.30 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q61]` | 43.65 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [lansoprazole](drugs/drug_lansoprazole/)</sub>
