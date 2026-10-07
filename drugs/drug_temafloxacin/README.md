<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;temafloxacin&quot;}]"></div>

# temafloxacin

- **generic name:** temafloxacin
- **ATC codes:** `J01MA05`
- **DrugBank:** [DB01405](https://go.drugbank.com/drugs/DB01405) · **PubChem:** [CID 60021](https://pubchem.ncbi.nlm.nih.gov/compound/60021)
- **molar mass:** 417.3811 g/mol (C21H18F3N3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Temafloxacin is a fluoroquinolone antibiotic that was used to treat bacterial infections. It was withdrawn from the market shortly after its introduction because of serious adverse reactions reported in patients taking the drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3983082](https://www.wikidata.org/wiki/Q3983082) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:25 | 2:24 | 0/0/0 | 2/0/0 | 0/0/0 | 62,570/1,266 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Krasula_1991_ERG](drugs/drug_temafloxacin/pd_Krasula_1991_ERG.md) | electroretinographic (ERG) changes ← temafloxacin · inhibition effect | — | Krasula RW et al., Comparison of organ-specific toxicity o…, The American journal of med… (1991) | [10.1016/0002-9343(91)90309-l](https://doi.org/10.1016/0002-9343(91)90309-l) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Pattyn_1991_activity](drugs/drug_temafloxacin/pd_Pattyn_1991_activity.md) | Anti-Mycobacterium leprae activity biomarker turnover ← temafloxacin | — | Pattyn SR, Anti-Mycobacterium leprae activity of s…, International journal of le… (1991) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=temafloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Granneman_1992_2.pdf` | Granneman GR et al., Pharmacokinetics of temafloxacin in hum…, Antimicrobial agents and ch… (1992) | popPK | 10 | [10.1128/aac.36.2.378](https://doi.org/10.1128/aac.36.2.378) | [1318680](https://pubmed.ncbi.nlm.nih.gov/1318680) | The text provides explicit quantitative values for total clearance (197 ml/min), renal clearance (119 ml/min), nonrenal clearance (78 ml/min), and half-life (8.4 h) for temafloxacin in humans. |

<sub>queue written 2026-10-07T12:24:54.238704+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Klemens_1992 | irrelevant | 0 | 0 | The study focuses on the antimicrobial activity of clarithromycin in mice, and temafloxacin is only used as a comparator drug in combination therapy without any pharmacokinetic data being reported for it. |
| popPK | Kozawa_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for balofloxacin and grepafloxacin, not temafloxacin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
