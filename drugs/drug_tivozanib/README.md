<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tivozanib&quot;}]"></div>

# tivozanib

- **generic name:** tivozanib
- **ATC codes:** `L01EK03`
- **DrugBank:** [DB11800](https://go.drugbank.com/drugs/DB11800) · **PubChem:** [CID 9911830](https://pubchem.ncbi.nlm.nih.gov/compound/9911830)
- **molar mass:** 454.863 g/mol (C22H19ClN4O5) — DrugBank
- **groups:** approved, investigational

## About

Tivozanib is a VEGFR tyrosine kinase inhibitor used to treat advanced renal cell carcinoma. It is authorised in the European Union, but its use is not widespread.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7810457](https://www.wikidata.org/wiki/Q7810457) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:25 | 1:51 | 0/0/0 | 0/0/0 | 0/0/0 | 12,858/1,390 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tivozanib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FLT1 (inhibitor), FLT3 (inhibitor), FLT4 (inhibitor), KDR (inhibitor), KIT (inhibitor), MET (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor), PTK6 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cotreau_2015.pdf` | Cotreau MM et al., Effects of ketoconazole or rifampin on…, Clinical pharmacology in dr… (2015) | pgx | 7 | [10.1002/cpdd.145](https://doi.org/10.1002/cpdd.145) | [27128217](https://www.ncbi.nlm.nih.gov/pubmed/27128217) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wang_2020.pdf` | Wang J et al., Brain accumulation of tivozanib is rest…, International journal of ph… (2020) | pgx | 7 | [10.1016/j.ijpharm.2020.119277](https://doi.org/10.1016/j.ijpharm.2020.119277) | [32234426](https://www.ncbi.nlm.nih.gov/pubmed/32234426) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-07T08:25:20.232044+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Berge_2013 | not_relevant | 0 | 0 | The text discusses VHL in tumor biology but reports no gene variant, genotype, or phenotype effect on tivozanib PK or PD. |
| PGx | Cotreau_2015 | not_relevant | 0 | 0 | The paper reports drug–drug interactions with ketoconazole and rifampin, not effects of a gene variant, genotype, or phenotype on tivozanib PK/PD. |
| PGx | Gao_2025 | not_relevant | 0 | 0 | The paper reports predicted tivozanib–HTR1F docking affinity, not an effect of a gene variant, genotype, or phenotype on a tivozanib PK or PD parameter. |
| PGx | Henriksen_2025 | not_relevant | 0 | 0 | This protocol studies UGT1A1 polymorphisms in relation to pazopanib, not genetic effects on tivozanib pharmacokinetics or pharmacodynamics. |
| popPK | Proia_2015 | irrelevant | 0 | 0 | Tivozanib is only a combination-treatment agent, with no pharmacokinetic parameters reported. |
| PGx | Yan_2026 | not_relevant | 0 | 0 | C5orf34 expression is associated with predicted tivozanib resistance, but no gene variant/genotype/phenotype effect on a tivozanib PK or PD parameter is reported. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The study examines tivozanib’s inhibition of ABCB1/ABCG2 and effects on other drugs, not how a gene variant or phenotype changes tivozanib PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
