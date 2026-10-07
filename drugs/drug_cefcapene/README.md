<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefcapene&quot;}]"></div>

# cefcapene

- **generic name:** cefcapene
- **ATC codes:** `J01DD17`
- **DrugBank:** [DB13461](https://go.drugbank.com/drugs/DB13461) · **PubChem:** not captured
- **molar mass:** 453.49 g/mol (C17H19N5O6S2) — DrugBank
- **groups:** experimental

## About

Cefcapene is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is not an approved medicine and remains at an experimental stage of development.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057225](https://www.wikidata.org/wiki/Q5057225) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:18 | 1:35 | 0/0/0 | 0/1/0 | 0/0/0 | 23,852/14,676 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Nakamura_2004_efficacy_rate](drugs/drug_cefcapene/pd_Nakamura_2004_efficacy_rate.md) | efficacy rate ← cefcapene · inhibition effect | — | Nakamura T et al., [Antibacterial activity of oral cephems…, The Japanese journal of ant… (2004) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Toyonaga_2008.pdf` | Toyonaga Y et al., [PK/PD breakpoints and clinical/bacteri…, The Japanese journal of ant… (2008) | popPK | 8 | not captured | [18814800](https://pubmed.ncbi.nlm.nih.gov/18814800) | The study involves PK/PD simulation of cefcapene pivoxil in pediatric humans and reports a PK/PD breakpoint, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text. |
| `Fujimoto_2001.pdf` | Fujimoto M, Pharmacokinetics of cefcapene pivoxil a…, International journal of an… (2001) | popPK | 7 | [10.1016/s0924-8579(01)00446-0](https://doi.org/10.1016/s0924-8579(01)00446-0) | [11711266](https://pubmed.ncbi.nlm.nih.gov/11711266) | The paper studies the pharmacokinetics of cefcapene in gastrectomized patients, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Nakamura_2004.pdf` | Nakamura T et al., [Antibacterial activity of oral cephems…, The Japanese journal of ant… (2004) | pd | 5 | not captured | [15747584](https://www.ncbi.nlm.nih.gov/pubmed/15747584) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T10:17:32.200257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fujimoto_2001 | relevant | 7 | 0 | The paper studies the pharmacokinetics of cefcapene in gastrectomized patients, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| PGx | Hotomi_2006 | not_relevant | 0 | 0 | The study focuses on antimicrobial resistance mechanisms in bacteria (PBP mutations), not human pharmacogenomics affecting drug PK/PD. |
| popPK | Nakamura_2004 | irrelevant | 2 | 0 | The study compares antimicrobial activity and PK/PD efficacy rates (TAM) rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume for cefcapene. |
| popPK | Toyonaga_2008 | relevant | 8 | 3 | The study involves PK/PD simulation of cefcapene pivoxil in pediatric humans and reports a PK/PD breakpoint, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
