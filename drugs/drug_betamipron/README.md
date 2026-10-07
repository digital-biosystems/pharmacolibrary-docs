<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Betamipron&quot;}]"></div>

# Betamipron

- **generic name:** Betamipron
- **ATC codes:** `J01DH55`
- **DrugBank:** [DB19858](https://go.drugbank.com/drugs/DB19858) · **PubChem:** not captured
- **groups:** experimental

## About

Betamipron is a component of the combination antibiotic panipenem/betamipron, which belongs to the carbapenem class of antibacterial drugs. It is considered experimental and has no authorisation from the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q607051](https://www.wikidata.org/wiki/Q607051) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:21 | 2:50 | 0/0/0 | 0/0/0 | 0/0/0 | 144,777/763 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tajima_2006.pdf` | Tajima N et al., Population pharmacokinetic analysis of…, Chemotherapy (2006) | popPK | 8 | [10.1159/000094745](https://doi.org/10.1159/000094745) | [16864999](https://pubmed.ncbi.nlm.nih.gov/16864999) | The study reports a population PK model for the combination drug panipenem/betamipron in humans, but specific numeric parameter values for betamipron (CL, V, etc.) are not present in the provided text. |
| `Mikamo_2002.pdf` | Mikamo H et al., [Investigation on administration method…, The Japanese journal of ant… (2002) | pd | 5 | not captured | [12621741](https://www.ncbi.nlm.nih.gov/pubmed/12621741) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T10:20:34.239975+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a novel natural product (edaphochelin A) using a bioinformatics platform and does not mention betamipron or its pharmacokinetics. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper is a study on glioblastoma persister cells and PRDM9, not a pharmacokinetic study of betamipron. |
| popPK | Kimura_2000 | irrelevant | 1 | 0 | The study is about the pharmacokinetics of the beta-lactam antibiotic panipenem, while batamipron is only mentioned as its co-formulated beta-lactamase inhibitor, and no parameters for batamipron (or betamipron) are provided. |
| popPK | Niki_2009 | irrelevant | 0 | 0 | The paper investigates the antimicrobial susceptibility and PK/PD break points of beta-lactam and carbapenem antibiotics, mentioning betamipron only as a component of a drug combination (panipenem/betamipron) used for resistance, without reporting any pharmacokinetic parameters for betamipron itself. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-containing antibiotics and only mentions betamipron as a DHP-I inhibitor co-administered with panipenem, without providing any pharmacokinetic parameters for betamipron itself. |
| popPK | Tajima_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of panipenem, and betamipron is only administered as a co-drug to protect renal function without any PK parameters reported for it. |
| popPK | Tajima_2006 | relevant | 8 | 0 | The study reports a population PK model for the combination drug panipenem/betamipron in humans, but specific numeric parameter values for betamipron (CL, V, etc.) are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
