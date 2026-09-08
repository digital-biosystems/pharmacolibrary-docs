# valoctocogene roxaparvovec

- **generic name:** valoctocogene roxaparvovec
- **ATC codes:** `B02BD15`
- **DrugBank:** [DB15561](https://go.drugbank.com/drugs/DB15561)
- **groups:** approved, investigational

## About

**Description.** Valoctocogene roxaparvovec is an adeno-associated virus serotype 5 (AAV5) based gene therapy vector that expresses the B-domain deleted SQ form of human coagulation factor VIII (hFVIII-SQ).[L43282] The expression of hFVIII-SQ is driven by a liver-specific promoter, which enables hepatocytes to produce factor VIII protein and increase the levels of active factor VIII in blood.[L43282,A252807] Valoctocogene roxaparvovec was approved by EMA in September 2022 and is indicated for the treatment of severe hemophilia A. It is not approved for use in the United States.[L43292] Hemophilia A treatments such as prophylactic regimens of exogenous factor VIII or [emicizumab] improve the clinical outcomes of patients but do not eliminate breakthrough bleeding.[A252797] As opposed to these therapies, valoctocogene roxaparvovec offers the advantage of continuous and measurable steady-state levels of coagulation factor VIII.[A252807]

**Indication.** Valoctocogene roxaparvovec is indicated for the treatment of severe hemophilia A (congenital factor VIII deficiency) in adult patients without a history of factor VIII inhibitors and without detectable antibodies to adeno-associated virus serotype 5 (AAV5).[L43282]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 21:09 | 6:07 | 1/1/0 | 0/1/0 | 0/0/0 | 109,434/9,827 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/8 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Cao_2025](drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Cao2025_reference.md) | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mahlangu_2023](drugs/drug_valoctocogene_roxaparvovec/ValoctocogeneRoxaparvovec_Mahlangu2023_reference.md) | Mahlangu J et al., Two-Year Outcomes of Valoctocogene Roxa…, The New England journal of… (2023) | [10.1056/NEJMoa2211075](https://doi.org/10.1056/NEJMoa2211075) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Cao_2025](drugs/drug_valoctocogene_roxaparvovec/pd_Cao_2025_IgG.md) | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |

## Coverage

- **PubMed hits:** 6 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahlangu_2023.pdf` | Mahlangu J et al., Two-Year Outcomes of Valoctocogene Roxa…, The New England journal of… (2023) | popPK | 8 | [10.1056/NEJMoa2211075](https://doi.org/10.1056/NEJMoa2211075) | [36812433](https://pubmed.ncbi.nlm.nih.gov/36812433) | The paper reports a population PK model for valoctocogene roxaparvovec with a specific numeric half-life (123 weeks) for the transgene-derived factor VIII production system, though other detailed parameters like clearance or volume are not explicitly listed in the text. |

<sub>queue written 2026-09-06T21:07:06.760471+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 2 | 1 | The study reports vector DNA biodistribution and shedding kinetics (clearance times, peak concentrations) rather than standard pharmacokinetic parameters (CL, V, ka) for the drug, and no compartmental PK model is presented. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not valoctocogene roxaparvovec, which is only mentioned as a context for AAV gene therapy. |
| popPK | Long_2019 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (FVIII-SQ protein levels) rather than pharmacokinetic disposition parameters (CL, V, ka) for the vector itself. |
| popPK | Long_2021 | irrelevant | 0 | 0 | The paper focuses exclusively on immunogenicity (antibody titers and cellular responses) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for valoctocogene roxaparvovec. |
| popPK | Long_2024 | irrelevant | 0 | 0 | The paper focuses on immunogenicity (antibodies and cellular immune responses) and safety outcomes, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Mihaila_2023 | irrelevant | 0 | 0 | The paper is a review focused on emicizumab and general gene therapy concepts, and does not report quantitative pharmacokinetic parameters for valoctocogene roxaparvovec. |
| popPK | Puzzo_2025 | irrelevant | 0 | 0 | The paper is a general review of liver-directed gene therapy and does not report quantitative pharmacokinetic parameters for valoctocogene roxaparvovec. |
| popPK | Rana_2025 | irrelevant | 0 | 0 | The paper is a narrative review of clinical trials focusing on efficacy and immunogenicity, and it does not report quantitative pharmacokinetic parameters or compartmental models for valoctocogene roxaparvovec. |
| popPK | Serrafi_2026 | irrelevant | 0 | 0 | The paper is a narrative review of gene therapy in hemophilia that discusses clinical outcomes and mechanisms but does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) for valoctocogene roxaparvovec. |
| popPK | Suoranta_2022 | irrelevant | 0 | 0 | The paper is a review on AAV vector safety and engineering strategies, containing no pharmacokinetic data or quantitative disposition parameters for valoctocogene roxaparvovec. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_valoctocogene_roxaparvovec`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
