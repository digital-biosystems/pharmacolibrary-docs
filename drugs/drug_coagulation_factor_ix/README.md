# coagulation factor IX

- **generic name:** coagulation factor IX
- **ATC codes:** `B02BD04`
- **DrugBank:** [DB13152](https://go.drugbank.com/drugs/DB13152)
- **groups:** approved, investigational

## About

**Description.** Factor IX (or Christmas factor) is one of the serine proteases of the coagulation system; it belongs to peptidase family S1. Deficiency of this protein causes hemophilia B.

**Indication.** Factor IX is used to treat Christmas disease. Factor IX deficiency is treated by injection factor IX produced from human plasma.

Along with other blood coagulation factors, it is used to reverse acquired coagulation factor deficiency induced by Vitamin K antagonist (VKA, e.g., warfarin) therapy in adult patients with a need for an urgent surgery/invasive procedure.[L50517]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 06:08 | 10:33 | 1/2/0 | 0/1/0 | 0/0/0 | 76,538/32,516 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Preijers_2022](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2022_reference.md) | Preijers T et al., In silico evaluation of limited samplin…, European journal of clinica… (2022) | [10.1007/s00228-021-03173-2](https://doi.org/10.1007/s00228-021-03173-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Goldsmith_1992](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Goldsmith1992_reference.md) | Goldsmith JC et al., Coagulation factor IX: successful surgi…, American journal of hematol… (1992) | [10.1002/ajh.2830400310](https://doi.org/10.1002/ajh.2830400310) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Preijers_2018](drugs/drug_coagulation_factor_ix/CoagulationFactorIx_Preijers2018_reference.md) | Preijers T et al., Population pharmacokinetics of factor I…, Journal of thrombosis and h… (2018) | [10.1111/jth.14292](https://doi.org/10.1111/jth.14292) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Jonsson_2021](drugs/drug_coagulation_factor_ix/pd_Jonsson_2021_ABR.md) | Jonsson F et al., Exposure-Bleeding Count Modeling of Emi…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01006-0](https://doi.org/10.1007/s40262-021-01006-0) |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brekkan_2016.pdf` | Brekkan A et al., Population pharmacokinetics of plasma-d…, Journal of thrombosis and h… (2016) | popPK | 10 | [10.1111/jth.13271](https://doi.org/10.1111/jth.13271) | [26806557](https://pubmed.ncbi.nlm.nih.gov/26806557) | The paper describes a population PK model for factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Preijers_2018.pdf` | Preijers T et al., Population pharmacokinetics of factor I…, Journal of thrombosis and h… (2018) | popPK | 10 | [10.1111/jth.14292](https://doi.org/10.1111/jth.14292) | [30394056](https://pubmed.ncbi.nlm.nih.gov/30394056) | The paper reports a population PK model for coagulation factor IX with explicit numeric values for clearance, volumes, and intercompartmental clearances in the text. |
| `Zhang_2016.pdf` | Zhang Y et al., Population pharmacokinetics of a new lo…, Journal of thrombosis and h… (2016) | popPK | 10 | [10.1111/jth.13444](https://doi.org/10.1111/jth.13444) | [27513989](https://pubmed.ncbi.nlm.nih.gov/27513989) | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative summaries and simulation outcomes. |
| `Goldsmith_1992.pdf` | Goldsmith JC et al., Coagulation factor IX: successful surgi…, American journal of hematol… (1992) | popPK | 9 | [10.1002/ajh.2830400310](https://doi.org/10.1002/ajh.2830400310) | [1609775](https://pubmed.ncbi.nlm.nih.gov/1609775) | The paper reports quantitative pharmacokinetic parameters (two-compartment model half-lives and recovery) for coagulation factor IX directly in the text. |
| `Tegenge_2020.pdf` | Tegenge MA et al., Model-Based Evaluation of Linear Limite…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1651](https://doi.org/10.1002/jcph.1651) | [32501555](https://pubmed.ncbi.nlm.nih.gov/32501555) | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only reports performance metrics and average doses. |

<sub>queue written 2026-09-06T05:58:46.156901+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brekkan_2016 | relevant | 10 | 0 | The paper describes a population PK model for factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Jonsson_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of emicizumab, not coagulation_factor_ix, which is only mentioned as a binding target. |
| popPK | Tegenge_2020 | relevant | 9 | 2 | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only reports performance metrics and average doses. |
| popPK | Zhang_2016 | relevant | 10 | 2 | The paper describes a population PK model for coagulation factor IX, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative summaries and simulation outcomes. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_coagulation_factor_ix`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
