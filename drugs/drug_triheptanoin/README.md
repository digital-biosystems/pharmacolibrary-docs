<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;triheptanoin&quot;}]"></div>

# triheptanoin

- **generic name:** triheptanoin
- **ATC codes:** `A16AX17`
- **DrugBank:** [DB11677](https://go.drugbank.com/drugs/DB11677) · **PubChem:** [CID 69286](https://pubchem.ncbi.nlm.nih.gov/compound/69286)
- **molar mass:** 428.61 g/mol (C24H44O6) — DrugBank
- **groups:** approved, investigational

## About

Triheptanoin is a medium-chain triglyceride used as a calorie and fatty-acid supplement in metabolic disorders in which the body cannot properly use long-chain fatty acids for energy. It is an approved medicine, mainly used in the United States, and is also being studied for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414576](https://www.wikidata.org/wiki/Q414576) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| heptanoate | metabolite | 129.179 | C7H13O2- | PubChem | [93052](https://pubchem.ncbi.nlm.nih.gov/compound/93052) | Lee_2022 |
| trihexanoin | metabolite | 386.529 | C21H38O6 | PubChem | [12131](https://pubchem.ncbi.nlm.nih.gov/compound/12131) | Lee_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:09 | 2:24 | 0/1/0 | 0/0/0 | 0/0/0 | 26,145/5,930 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 0/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lee_2022_reference](drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference.md) | — | 1-compartment (no model) | 1 | Lee SK et al., Population Pharmacokinetics of Heptanoa…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1145](https://doi.org/10.1002/cpdd.1145) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=triheptanoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2021.pdf` | Lee SK et al., The Pharmacokinetics of Triheptanoin an…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.944](https://doi.org/10.1002/cpdd.944) | [33789001](https://pubmed.ncbi.nlm.nih.gov/33789001) | The paper describes a PK study of triheptanoin and its metabolites in humans, but the provided evidence contains only qualitative descriptions and no specific numeric parameter values (CL, V, etc.). |
| `Lee_2022.pdf` | Lee SK et al., Population Pharmacokinetics of Heptanoa…, Clinical pharmacology in dr… (2022) | popPK | 10 | [10.1002/cpdd.1145](https://doi.org/10.1002/cpdd.1145) | [35908210](https://pubmed.ncbi.nlm.nih.gov/35908210) | The study reports population PK parameters for heptanoate (the active metabolite of triheptanoin) in humans, with specific numeric values for half-life and relative clearance provided in the abstract. |

<sub>queue written 2026-10-05T12:07:08.365414+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrose_2026 | not_relevant | 0 | 0 | The paper reports a clinical case study of triheptanoin efficacy in a patient with ALDH7A1 variants, but it does not report a pharmacogenomic effect on the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lee_2021 | relevant | 10 | 0 | The paper describes a PK study of triheptanoin and its metabolites in humans, but the provided evidence contains only qualitative descriptions and no specific numeric parameter values (CL, V, etc.). |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | The paper is a review of mitochondrial fatty acid oxidation disorders and mentions triheptanoin only in the context of a clinical trial for cardiac function, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Yoon_2026 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study reporting clinical outcomes (MCEs, adverse events) and does not contain any pharmacokinetic parameters (CL, V, ka, etc.) for triheptanoin. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The paper is a general review of genetic epilepsies and mentions triheptanoin only to state its efficacy is unclear, without reporting any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 12:07 UTC</sub>
