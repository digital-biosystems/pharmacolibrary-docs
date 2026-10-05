<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sacrosidase&quot;}]"></div>

# sacrosidase

- **generic name:** sacrosidase
- **ATC codes:** `A16AB06`
- **DrugBank:** [DB06760](https://go.drugbank.com/drugs/DB06760) · **PubChem:** not captured
- **groups:** approved

## About

Sacrosidase is an enzyme medication used to treat sucrase deficiency, a digestive problem in which the body cannot properly break down sucrose. It is an approved medicine, available as an oral enzyme preparation taken with meals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7397389](https://www.wikidata.org/wiki/Q7397389) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:22 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 20,602/586 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sacrosidase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dannevig_1990 | irrelevant | 0 | 0 | The study investigates endocytosis mechanisms in rainbow trout using human serum albumin and invertase as ligands, and does not involve sacrosidase. |
| popPK | Gätjen_2022 | irrelevant | 0 | 0 | The paper describes surface display of antibody fragments in yeast (P. pastoris) and contains no pharmacokinetic data for sacrosidase. |
| popPK | Martinelli_2013 | irrelevant | 0 | 0 | The paper is a transcriptomic study of Huanglongbing disease in citrus plants and does not involve the drug sacrosidase or any pharmacokinetic analysis. |
| popPK | Rodman_1978 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | Smedsrud_1984 | irrelevant | 0 | 0 | The study investigates the endocytosis of yeast invertase and human serum albumin in fish, and does not involve sacrosidase. |
| popPK | Sørensen_2001 | irrelevant | 0 | 0 | The study investigates the clearance of alpha-mannosidase in Atlantic cod, not sacrosidase. |
| popPK | Treem_1999 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring breath hydrogen and symptoms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Trevithick_1966 | irrelevant | 0 | 0 | The paper studies cell wall properties in Neurospora crassa and does not involve sacrosidase or pharmacokinetics. |
| popPK | Weinstein_1984 | irrelevant | 0 | 0 | The paper studies hemoglobin uptake in rat liver cells and does not involve sacrosidase. |
| popPK | Zarka_2026 | irrelevant | 0 | 0 | The paper describes a genetically engineered potato variety and contains no pharmacokinetic data for sacrosidase. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
