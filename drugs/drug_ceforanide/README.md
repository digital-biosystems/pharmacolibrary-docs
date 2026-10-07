<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceforanide&quot;}]"></div>

# ceforanide

- **generic name:** ceforanide
- **ATC codes:** `J01DC11`
- **DrugBank:** [DB00923](https://go.drugbank.com/drugs/DB00923) · **PubChem:** [CID 43507](https://pubchem.ncbi.nlm.nih.gov/compound/43507)
- **molar mass:** 519.554 g/mol (C20H21N7O6S2) — DrugBank
- **groups:** approved

## About

Ceforanide is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it does not appear to be widely marketed today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057287](https://www.wikidata.org/wiki/Q5057287) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:16 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 20,998/569 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ceforanide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dajani_1982.pdf` | Dajani AS et al., Pharmacokinetics of intramuscular cefor…, Antimicrobial agents and ch… (1982) | popPK | 10 | [10.1128/AAC.21.2.282](https://doi.org/10.1128/AAC.21.2.282) | [7073266](https://pubmed.ncbi.nlm.nih.gov/7073266) | The study reports qualitative PK relationships and a specific half-life value (1.5 h) for 1-2 year olds, but lacks general numeric values for clearance, volume of distribution, and other PK parameters in the provided text. |

<sub>queue written 2026-10-07T10:16:16.735710+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brown_1993 | irrelevant | 0 | 0 | The paper is a review discussing general cephalosporin-probenecid interactions and notes ceforanide has no significant changes, but it does not report quantitative PK parameters for ceforanide. |
| popPK | Campoli-Richards_1987 | irrelevant | 1 | 0 | The paper is a review summarizing ceforanide's properties without reporting specific numeric pharmacokinetic parameter values (like clearance or volume) for the drug. |
| popPK | Dajani_1982 | relevant | 10 | 4 | The study reports qualitative PK relationships and a specific half-life value (1.5 h) for 1-2 year olds, but lacks general numeric values for clearance, volume of distribution, and other PK parameters in the provided text. |
| popPK | Greenman_1984 | irrelevant | 1 | 0 | This is a clinical efficacy trial reporting MICs and bactericidal activity, not a pharmacokinetic study with quantitative disposition parameters (CL, V, half-life). |
| popPK | Guay_1983 | irrelevant | 0 | 0 | The study investigates the analytical interference of ceforanide with creatinine assays, not its pharmacokinetic parameters. |
| popPK | Wallace_1979 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for pneumonia and does not report any pharmacokinetic parameters such as clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
