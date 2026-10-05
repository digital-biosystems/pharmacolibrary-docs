<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;idursulfase beta&quot;}]"></div>

# idursulfase beta

- **generic name:** idursulfase beta
- **ATC codes:** `A16AB16`
- **DrugBank:** [DB16190](https://go.drugbank.com/drugs/DB16190) · **PubChem:** not captured
- **groups:** investigational

## About

Idursulfase beta is an enzyme replacement therapy investigated for treating Hunter syndrome, a rare inherited metabolic disorder. It remains investigational and is not an approved treatment in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:12 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 26,376/938 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boado_2013 | irrelevant | 2 | 0 | The study focuses on brain uptake and imaging of a fusion protein in rhesus monkeys and does not report quantitative population PK parameters (CL, V, etc.) for idursulfase_beta. |
| popPK | Boado_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a HIRMAb-IDS fusion protein, not the drug idursulfase_beta (recombinant IDS). |
| popPK | Cardone_2006 | irrelevant | 0 | 0 | The paper describes a gene therapy study in mice for Hunter syndrome and does not report pharmacokinetic parameters for idursulfase_beta. |
| popPK | Costain_2025 | irrelevant | 2 | 1 | The study reports pharmacokinetic parameters for iduronate 2-sulfatase (IDS) fusion proteins in rats, not the specific drug idursulfase_beta (Elaprase). |
| popPK | Ellison_2023 | irrelevant | 0 | 0 | The paper describes a gene therapy study in mice and does not report pharmacokinetic parameters for idursulfase_beta. |
| popPK | Fu_2018 | irrelevant | 0 | 0 | The paper describes a gene therapy study (AAV9-hIDS) in mice and reports functional outcomes (enzyme activity, GAG levels, behavior) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug idursulfase_beta. |
| popPK | Lu_2011 | irrelevant | 2 | 0 | The study focuses on a novel IgG-iduronate-2-sulfatase fusion protein (HIRMAb-IDS) rather than the standard drug idursulfase_beta, and no quantitative PK parameters (CL, V, t1/2) are provided in the text. |
| popPK | Marazza_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on the intracellular fate and quality control of mutant iduronate 2-sulfatase proteins, not a pharmacokinetic study of the drug idursulfase_beta. |
| popPK | Morimoto_2021 | irrelevant | 0 | 0 | The study focuses on the efficacy of a different drug (pabinafusp alfa) and idursulfase as a comparator in MPS II mice, without reporting quantitative pharmacokinetic parameters for idursulfase_beta. |
| popPK | Okuyama_2019 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of a novel drug candidate (JR-141), not idursulfase_beta, which is only mentioned as a comparator therapy. |
| popPK | Smolyarchuk_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for verenafusp alfa, not idursulfase_beta. |
| popPK | Zhou_2012 | irrelevant | 0 | 0 | The study focuses on Iduronate 2-sulfatase (IDS) fusion proteins for brain targeting in mice, not the pharmacokinetics of the drug idursulfase_beta. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
