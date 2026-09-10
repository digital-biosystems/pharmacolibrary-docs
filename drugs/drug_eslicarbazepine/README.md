# eslicarbazepine

- **generic name:** eslicarbazepine
- **ATC codes:** `N03AF04`
- **DrugBank:** [DB14575](https://go.drugbank.com/drugs/DB14575)
- **groups:** approved

## About

**Description.** Eslicarbazepine is an anti-epileptic medication available commercially as [eslicarbazepine acetate].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 00:32 | 2:27 | 0/1/0 | 0/0/0 | 0/0/0 | 45,286/4,501 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Sunkaraneni_2018_2](drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_final.md) | Sunkaraneni (2018) | — |
| <span class="pk-badge pk-badge--neutral">None</span> | [Sunkaraneni_2018_2](drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_interindividual_variabilit.md) | Sunkaraneni (2018) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Falcão_2012](drugs/drug_eslicarbazepine/Eslicarbazepine_Falco2012_reference.md) | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | popPK | 10 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://pubmed.ncbi.nlm.nih.gov/22171585) | The paper is a population PK study for eslicarbazepine and explicitly provides the quantitative clearance equation and base value (2.36 L/h) in the text. |
| `Gidal_2018.pdf` | Gidal BE et al., Exposure-safety and efficacy response r…, Acta neurologica Scandinavi… (2018) | popPK | 10 | [10.1111/ane.12950](https://doi.org/10.1111/ane.12950) | [29732549](https://pubmed.ncbi.nlm.nih.gov/29732549) | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Sunkaraneni_2018.pdf` | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) | [29528499](https://pubmed.ncbi.nlm.nih.gov/29528499) | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Sunkaraneni_2018_3.pdf` | Sunkaraneni S et al., Population Pharmacokinetic Evaluation a…, Clinical pharmacology in dr… (2018) | popPK | 9 | [10.1002/cpdd.382](https://doi.org/10.1002/cpdd.382) | [28881418](https://pubmed.ncbi.nlm.nih.gov/28881418) | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-09-10T00:30:31.581081+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gidal_2018 | relevant | 10 | 0 | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | The paper is a simulation study using existing population PK models for 14 drugs, and the specific numeric parameter values for eslicarbazepine are not reported in the provided evidence. |
| popPK | Sunkaraneni_2017 | irrelevant | 2 | 0 | The paper is a modeling and simulation study using a previously developed PK model, and it does not report original quantitative PK parameter values (CL, V, etc.) for eslicarbazepine in the provided evidence. |
| popPK | Sunkaraneni_2018 | relevant | 10 | 0 | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Sunkaraneni_2018_3 | relevant | 9 | 0 | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_eslicarbazepine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
