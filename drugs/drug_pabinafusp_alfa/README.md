<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;pabinafusp alfa&quot;}]"></div>

# pabinafusp alfa

- **generic name:** pabinafusp alfa
- **ATC codes:** `A16AB27`
- **DrugBank:** [DB15633](https://go.drugbank.com/drugs/DB15633) · **PubChem:** not captured
- **groups:** investigational

## About

Pabinafusp alfa is an investigational enzyme replacement therapy being studied for Hunter syndrome (mucopolysaccharidosis type II). It is not yet approved; it remains in clinical development, mainly in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q107327238](https://www.wikidata.org/wiki/Q107327238) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:46 | 5:16 | 0/0/0 | 0/0/0 | 0/0/0 | 23,782/970 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Okuyama_2019.pdf` | Okuyama T et al., Iduronate-2-Sulfatase with Anti-human T…, Molecular therapy : the jou… (2019) | popPK | 8 | [10.1016/j.ymthe.2018.12.005](https://doi.org/10.1016/j.ymthe.2018.12.005) | [30595526](https://pubmed.ncbi.nlm.nih.gov/30595526) | This is the first-in-human PK study of JR-141 (pabinafusp alfa), but the evidence contains only qualitative PK descriptions (peak at 3 hr, dose-dependent, no accumulation) with no numeric CL/V/half-life values, which likely reside in figures or supplementary material not provided. |

<sub>queue written 2026-09-30T02:46:27.812291+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boado_2013 | irrelevant | 0 | 0 | The study focuses on a different drug (HIRMAb-IDS fusion protein) and does not report pharmacokinetic parameters for pabinafusp_alfa. |
| popPK | Boado_2014 | irrelevant | 0 | 0 | The study investigates the HIRMAb-IDS fusion protein, not pabinafusp_alfa. |
| popPK | Cardone_2006 | irrelevant | 0 | 0 | The paper describes a gene therapy study for Hunter syndrome in mice and does not involve the drug pabinafusp_alfa or report any pharmacokinetic parameters. |
| popPK | Costain_2025 | irrelevant | 0 | 0 | The study investigates iduronate 2-sulfatase (IDS) and its fusion constructs, not pabinafusp alfa. |
| popPK | Ellison_2023 | irrelevant | 0 | 0 | The paper describes a stem cell gene therapy study for MPSII and does not involve the drug pabinafusp_alfa or report any pharmacokinetic parameters. |
| popPK | Fu_2018 | irrelevant | 0 | 0 | The paper describes a gene therapy study for MPS II in mice and does not involve the drug pabinafusp_alfa or report any pharmacokinetic parameters. |
| popPK | Giugliani_2021 | irrelevant | 3 | 0 | This is an efficacy/safety phase 2 trial abstract; no PK disposition parameters (CL, V, half-life) for pabinafusp alfa are reported or referenced. |
| PD | Giugliani_2021 | not_relevant | 3 | 1 | Only qualitative dose-group comparisons (1/2/4 mg/kg) with descriptive GAG reductions; no numeric PD parameters or concentration-effect relationships reported. |
| popPK | Lu_2011 | irrelevant | 0 | 0 | The study investigates a different drug (HIRMAb-IDS fusion protein) and does not report pharmacokinetic parameters for pabinafusp_alfa. |
| popPK | Marazza_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on protein quality control in Hunter's syndrome and does not involve pabinafusp_alfa or report any pharmacokinetic parameters. |
| popPK | Morimoto_2021 | irrelevant | 2 | 0 | This is a pharmacodynamic efficacy study in MPS II mice with no PK disposition parameters (CL, V, half-life) reported, and no numeric PK values appear in the evidence. |
| popPK | Okuyama_2019 | relevant | 8 | 2 | This is the first-in-human PK study of JR-141 (pabinafusp alfa), but the evidence contains only qualitative PK descriptions (peak at 3 hr, dose-dependent, no accumulation) with no numeric CL/V/half-life values, which likely reside in figures or supplementary material not provided. |
| popPK | Smith_2025 | irrelevant | 0 | 0 | The paper focuses on transferrin receptor antibodies for brain delivery and does not mention pabinafusp_alfa or report its pharmacokinetic parameters. |
| popPK | Smolyarchuk_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for verenafusp alfa, not pabinafusp alfa. |
| popPK | Xie_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for idursulfase (iduronate-2-sulfatase), not pabinafusp_alfa. |
| popPK | Yesiltepe_2026 | irrelevant | 0 | 0 | The paper focuses on a different drug (NewroBus) and a preclinical animal model, with no mention of pabinafusp_alfa or its pharmacokinetic parameters. |
| popPK | Zhou_2012 | irrelevant | 0 | 0 | The paper studies enzyme fusion proteins (HIRMAb-IDS) in mice, not pabinafusp_alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
