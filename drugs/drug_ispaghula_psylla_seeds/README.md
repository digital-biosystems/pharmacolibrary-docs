<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;ispaghula (psylla seeds)&quot;}]"></div>

# ispaghula (psylla seeds)

- **generic name:** ispaghula (psylla seeds)
- **ATC codes:** `A06AC01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:54 | 1:07 | 0/0/0 | 0/0/0 | 0/0/0 | 39,770/1,076 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chiu_1998 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of levothyroxine (LT4) to assess the effect of psyllium on its absorption, rather than reporting PK parameters for psyllium itself. |
| popPK | Díez-Láiz_2015 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of glucose and insulin in rabbits to evaluate the effect of ispaghula husk on glycemic control, rather than measuring the disposition parameters (CL, V, ka) of ispaghula husk itself. |
| popPK | Díez_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin in rabbits, using ispaghula (Plantago ovata husk) as a co-administered dietary fiber to assess interaction, not as the subject drug. |
| popPK | Entwisle_2025 | irrelevant | 0 | 0 | The study is a clinical case series evaluating the therapeutic efficacy of psyllium for sand enteropathy in horses, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fernandez-Martinez_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levodopa, with ispaghula (Plantago ovata husk) acting as a co-administered agent to test for interactions, not as the subject drug. |
| popPK | Fernández_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethinylestradiol (the subject drug) in the presence of ispaghula (Plantago ovata) seeds as a co-administered fiber, not the pharmacokinetics of ispaghula itself. |
| popPK | García_2000 | irrelevant | 0 | 0 | The study investigates the effect of psyllium (ispaghula) on the pharmacokinetics of ethinyloestradiol, not the pharmacokinetics of ispaghula itself. |
| popPK | García_2009 | irrelevant | 0 | 0 | The study investigates the effect of ispaghula (Plantago ovata husk) on the pharmacokinetics of levodopa, making ispaghula a co-administered agent rather than the subject drug for PK parameter extraction. |
| popPK | Ghumman_2023 | irrelevant | 0 | 0 | The study focuses on the formulation of clomipramine tablets using Plantago ovata mucilage as an excipient, not on the pharmacokinetics of ispaghula seeds as a drug. |
| popPK | Hassel_2020 | irrelevant | 0 | 0 | The study evaluates the efficacy of a psyllium product for fecal sand clearance in horses, not the pharmacokinetic parameters (CL, V, ka, etc.) of ispaghula/psyllium seeds. |
| popPK | M_2017 | irrelevant | 0 | 0 | The study is a histological analysis of colonic tissue in rats treated with psyllium enemas and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for ispaghula/psyllium seeds. |
| popPK | Niinistö_2018 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of psyllium for sand removal in horses, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Turley_1995 | irrelevant | 0 | 0 | The study investigates the mechanism of LDL-cholesterol lowering (production and clearance rates) in hamsters, not the pharmacokinetic disposition parameters (CL, V, ka) of the psyllium fiber itself. |
| popPK | Woollett_1997 | irrelevant | 0 | 0 | The study investigates the effect of psyllium on HDL cholesterol transport in hamsters, not the pharmacokinetic parameters (CL, V, ka) of ispaghula/psyllium seeds. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
