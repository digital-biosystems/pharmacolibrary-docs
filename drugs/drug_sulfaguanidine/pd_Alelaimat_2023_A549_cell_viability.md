<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;sulfaguanidine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfaguanidine/&quot;},{&quot;label&quot;:&quot;Alelaimat_2023 \u00b7 PD name&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Unknown drives name (in %) (inhibition; the model form was not identified).

**Model:** No model was generated from this record.

> Sulfaguanidine–triazine derivatives (compounds 27, 28, 29, 31, 35) inhibit A549 lung cancer cell viability in an MTT assay at test concentrations of 100 and 50 μM, with IC50 values ranging from 14.8 to 33.2 μM (e.g., 14.8 μM for compound 27 and 33.2 μM for compound 28). The paper does not establish a mechanism for this antiproliferative effect, noting the compounds' moderate PI3Kα inhibition and postulating alternative modes of action such as carbonic anhydrase IX/XII or FAK inhibition.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Alelaimat_2023`
- **model family:** `unknown`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Alelaimat MA et al., Novel Sulfonamide-Triazine Hybrid Deriv…, ACS omega (2023)
  ·  DOI: [10.1021/acsomega.3c01273](https://doi.org/10.1021/acsomega.3c01273)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | 19 — experimental % of inhibition/IC50 | `Q322` · not captured | 28.4 | unknown | not captured | llm (not captured) | tbl2:row3:col5 |
| PD (effect) | 20 — experimental % of inhibition/IC50 | `Q322` · not captured | 31.3 | unknown | not captured | llm (not captured) | tbl2:row4:col5 |
| PD (effect) | 21 — experimental % of inhibition/IC50 | `Q322` · not captured | 68 | unknown | not captured | llm (not captured) | tbl2:row5:col5 |
| PD (effect) | 22 — experimental % of inhibition/IC50 | `Q322` · not captured | 59.7 | unknown | not captured | llm (not captured) | tbl2:row6:col5 |
| PD (effect) | 23 — experimental % of inhibition/IC50 | `Q322` · not captured | 88.3 | unknown | not captured | llm (not captured) | tbl2:row7:col5 |
| PD (effect) | 24 — experimental % of inhibition/IC50 | `Q322` · not captured | 66.3 | unknown | not captured | llm (not captured) | tbl2:row8:col5 |
| PD (effect) | 25 — experimental % of inhibition/IC50 | `Q322` · not captured | 40.1 | unknown | not captured | llm (not captured) | tbl2:row9:col5 |
| PD (effect) | 26 — experimental % of inhibition/IC50 | `Q322` · not captured | 39.6 | unknown | not captured | llm (not captured) | tbl2:row10:col5 |
| PD (effect) | 27 — experimental % of inhibition/IC50 | `Q322` · not captured | 17.5 | unknown | not captured | llm (not captured) | tbl2:row11:col2 |
| PD (effect) | 27 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row11:col3 |
| PD (effect) | 27 — experimental % of inhibition/IC50 | `Q322` · not captured | 2.3 | unknown | not captured | llm (not captured) | tbl2:row11:col4 |
| PD (effect) | 27 — experimental % of inhibition/IC50 | `Q322` · not captured | 97.4 | unknown | not captured | llm (not captured) | tbl2:row11:col5 |
| PD (effect) | 27 — experimental % of inhibition/IC50 | `Q322` · not captured | 14.8 | unknown | not captured | llm (not captured) | tbl2:row11:col6 |
| PD (effect) | 27 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.98 | unknown | not captured | llm (not captured) | tbl2:row11:col7 |
| PD (effect) | 28 — experimental % of inhibition/IC50 | `Q322` · not captured | 21.1 | unknown | not captured | llm (not captured) | tbl2:row12:col2 |
| PD (effect) | 28 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row12:col3 |
| PD (effect) | 28 — experimental % of inhibition/IC50 | `Q322` · not captured | 2.2 | unknown | not captured | llm (not captured) | tbl2:row12:col4 |
| PD (effect) | 28 — experimental % of inhibition/IC50 | `Q322` · not captured | 98.6 | unknown | not captured | llm (not captured) | tbl2:row12:col5 |
| PD (effect) | 28 — experimental % of inhibition/IC50 | `Q322` · not captured | 33.2 | unknown | not captured | llm (not captured) | tbl2:row12:col6 |
| PD (effect) | 28 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row12:col7 |
| PD (effect) | 29 — experimental % of inhibition/IC50 | `Q322` · not captured | 18.4 | unknown | not captured | llm (not captured) | tbl2:row13:col2 |
| PD (effect) | 29 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row13:col3 |
| PD (effect) | 29 — experimental % of inhibition/IC50 | `Q322` · not captured | 1.7 | unknown | not captured | llm (not captured) | tbl2:row13:col4 |
| PD (effect) | 29 — experimental % of inhibition/IC50 | `Q322` · not captured | 98.4 | unknown | not captured | llm (not captured) | tbl2:row13:col5 |
| PD (effect) | 29 — experimental % of inhibition/IC50 | `Q322` · not captured | 15.7 | unknown | not captured | llm (not captured) | tbl2:row13:col6 |
| PD (effect) | 29 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row13:col7 |
| PD (effect) | 30 — experimental % of inhibition/IC50 | `Q322` · not captured | 77.8 | unknown | not captured | llm (not captured) | tbl2:row14:col5 |
| PD (effect) | 31 — experimental % of inhibition/IC50 | `Q322` · not captured | 26.5 | unknown | not captured | llm (not captured) | tbl2:row15:col2 |
| PD (effect) | 31 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.98 | unknown | not captured | llm (not captured) | tbl2:row15:col3 |
| PD (effect) | 31 — experimental % of inhibition/IC50 | `Q322` · not captured | 2.1 | unknown | not captured | llm (not captured) | tbl2:row15:col4 |
| PD (effect) | 31 — experimental % of inhibition/IC50 | `Q322` · not captured | 97 | unknown | not captured | llm (not captured) | tbl2:row15:col5 |
| PD (effect) | 31 — experimental % of inhibition/IC50 | `Q322` · not captured | 27.4 | unknown | not captured | llm (not captured) | tbl2:row15:col6 |
| PD (effect) | 31 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.98 | unknown | not captured | llm (not captured) | tbl2:row15:col7 |
| PD (effect) | 32 — experimental % of inhibition/IC50 | `Q322` · not captured | 99.5 | unknown | not captured | llm (not captured) | tbl2:row16:col5 |
| PD (effect) | 32 — experimental % of inhibition/IC50 | `Q322` · not captured | 28.5 | unknown | not captured | llm (not captured) | tbl2:row16:col6 |
| PD (effect) | 32 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.97 | unknown | not captured | llm (not captured) | tbl2:row16:col7 |
| PD (effect) | 33 — experimental % of inhibition/IC50 | `Q322` · not captured | 97.8 | unknown | not captured | llm (not captured) | tbl2:row17:col5 |
| PD (effect) | 33 — experimental % of inhibition/IC50 | `Q322` · not captured | 27.5 | unknown | not captured | llm (not captured) | tbl2:row17:col6 |
| PD (effect) | 33 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row17:col7 |
| PD (effect) | 34 — experimental % of inhibition/IC50 | `Q322` · not captured | 7.9 | unknown | not captured | llm (not captured) | tbl2:row18:col5 |
| PD (effect) | 35 — experimental % of inhibition/IC50 | `Q322` · not captured | 21.1 | unknown | not captured | llm (not captured) | tbl2:row19:col2 |
| PD (effect) | 35 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.97 | unknown | not captured | llm (not captured) | tbl2:row19:col3 |
| PD (effect) | 35 — experimental % of inhibition/IC50 | `Q322` · not captured | 2.1 | unknown | not captured | llm (not captured) | tbl2:row19:col4 |
| PD (effect) | 35 — experimental % of inhibition/IC50 | `Q322` · not captured | 96.5 | unknown | not captured | llm (not captured) | tbl2:row19:col5 |
| PD (effect) | 35 — experimental % of inhibition/IC50 | `Q322` · not captured | 19.3 | unknown | not captured | llm (not captured) | tbl2:row19:col6 |
| PD (effect) | 35 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row19:col7 |
| PD (effect) | 36 — experimental % of inhibition/IC50 | `Q322` · not captured | 12.3 | unknown | not captured | llm (not captured) | tbl2:row20:col5 |
| PD (effect) | 37 — experimental % of inhibition/IC50 | `Q322` · not captured | 99.8 | unknown | not captured | llm (not captured) | tbl2:row21:col5 |
| PD (effect) | 37 — experimental % of inhibition/IC50 | `Q322` · not captured | 23.4 | unknown | not captured | llm (not captured) | tbl2:row21:col6 |
| PD (effect) | 37 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.98 | unknown | not captured | llm (not captured) | tbl2:row21:col7 |
| PD (effect) | 38 — experimental % of inhibition/IC50 | `Q322` · not captured | 95.1 | unknown | not captured | llm (not captured) | tbl2:row22:col5 |
| PD (effect) | 38 — experimental % of inhibition/IC50 | `Q322` · not captured | 22.4 | unknown | not captured | llm (not captured) | tbl2:row22:col6 |
| PD (effect) | 38 — experimental % of inhibition/IC50 | `Q322` · not captured | 0.97 | unknown | not captured | llm (not captured) | tbl2:row22:col7 |
| PD (effect) | Geda — experimental % of inhibition/IC50 | `Q322` · not captured | 13.1 | unknown | not captured | llm (not captured) | tbl2:row23:col2 |
| PD (effect) | Geda — experimental % of inhibition/IC50 | `Q322` · not captured | 0.98 | unknown | not captured | llm (not captured) | tbl2:row23:col3 |
| PD (effect) | Geda — experimental % of inhibition/IC50 | `Q322` · not captured | 2.2 | unknown | not captured | llm (not captured) | tbl2:row23:col4 |
| PD (effect) | Geda — experimental % of inhibition/IC50 | `Q322` · not captured | 95.1 | unknown | not captured | llm (not captured) | tbl2:row23:col5 |
| PD (effect) | Geda — experimental % of inhibition/IC50 | `Q322` · not captured | 16.5 | unknown | not captured | llm (not captured) | tbl2:row23:col6 |
| PD (effect) | Geda — experimental % of inhibition/IC50 | `Q322` · not captured | 0.96 | unknown | not captured | llm (not captured) | tbl2:row23:col7 |
| PD (effect) | Docxb — experimental % of inhibition/IC50 | `Q322` · not captured | 2.1 | unknown | not captured | llm (not captured) | tbl2:row24:col2 |
| PD (effect) | Docxb — experimental % of inhibition/IC50 | `Q322` · not captured | 0.97 | unknown | not captured | llm (not captured) | tbl2:row24:col3 |
| PD (effect) | Docxb — experimental % of inhibition/IC50 | `Q322` · not captured | 2.0 | unknown | not captured | llm (not captured) | tbl2:row24:col4 |
| PD (effect) | Docxb — experimental % of inhibition/IC50 | `Q322` · not captured | 93.6 | unknown | not captured | llm (not captured) | tbl2:row24:col5 |
| PD (effect) | Docxb — experimental % of inhibition/IC50 | `Q322` · not captured | 16.6 | unknown | not captured | llm (not captured) | tbl2:row24:col6 |
| PD (effect) | Docxb — experimental % of inhibition/IC50 | `Q322` · not captured | 0.99 | unknown | not captured | llm (not captured) | tbl2:row24:col7 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/69 fields) | 69 |

<details><summary>69 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q322]` | 39.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 17.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 97.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 14.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 21.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 98.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 33.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 18.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 1.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 98.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 15.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 77.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 26.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 27.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 99.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 28.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 97.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 27.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 7.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 21.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 96.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 19.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 99.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 23.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 95.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 22.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 13.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.98 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 95.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 16.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.96 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 2.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 93.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 16.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 0.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 28.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 31.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 68 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 59.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 88.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 66.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | 40.1 | not captured | only_one_extracted |

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
<sub>← back to [sulfaguanidine](drugs/drug_sulfaguanidine/)</sub>
