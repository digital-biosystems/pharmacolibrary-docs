# melagatran

- **generic name:** melagatran
- **ATC codes:** `B01AE04`
- **DrugBank:** [DB13616](https://go.drugbank.com/drugs/DB13616)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 20:20 | 2:07 | 0/2/0 | 0/0/0 | 0/0/0 | 12,040/976 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Cullberg_2005](drugs/drug_melagatran/Melagatran_Cullberg2005_reference.md) | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Eriksson_2003](drugs/drug_melagatran/Melagatran_Eriksson2003_reference.md) | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bååthe_2006.pdf` | Bååthe S et al., Population pharmacokinetics of melagatr…, Clinical pharmacokinetics (2006) | popPK | 10 | [10.2165/00003088-200645080-00004](https://doi.org/10.2165/00003088-200645080-00004) | [16884319](https://pubmed.ncbi.nlm.nih.gov/16884319) | The paper is a population PK study of melagatran, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Cullberg_2005.pdf` | Cullberg M et al., Pharmacokinetics of ximelagatran and re…, Clinical pharmacology and t… (2005) | popPK | 10 | [10.1016/j.clpt.2004.11.001](https://doi.org/10.1016/j.clpt.2004.11.001) | [15903126](https://pubmed.ncbi.nlm.nih.gov/15903126) | The paper reports a population pharmacokinetic analysis for melagatran with explicit numeric values for clearance (27.3 L/h) and volume of distribution (176 L) present in the text. |
| `Eriksson_2003.pdf` | Eriksson UG et al., Pharmacokinetics of melagatran and the…, Clinical pharmacokinetics (2003) | popPK | 10 | [10.2165/00003088-200342070-00006](https://doi.org/10.2165/00003088-200342070-00006) | [12844328](https://pubmed.ncbi.nlm.nih.gov/12844328) | The paper is a population PK study of melagatran and explicitly reports numeric values for clearance (5.3 and 22.9 L/h) and volume of distribution (15.5 and 159 L) in the results section. |
| `Bergqvist_2004.pdf` | Bergqvist D et al., Pharmacokinetics, preliminary efficacy…, Clinical drug investigation (2004) | popPK | 8 | [10.2165/00044011-200424030-00001](https://doi.org/10.2165/00044011-200424030-00001) | [17516699](https://pubmed.ncbi.nlm.nih.gov/17516699) | The study reports a one-compartment PK model and bioavailability for melagatran, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| `Bredberg_2003.pdf` | Bredberg E et al., Ximelagatran, an oral direct thrombin i…, Clinical pharmacokinetics (2003) | pgx | 7 | [10.2165/00003088-200342080-00005](https://doi.org/10.2165/00003088-200342080-00005) | [12846597](https://www.ncbi.nlm.nih.gov/pubmed/12846597) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-06T05:15:14.462254+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergqvist_2004 | relevant | 8 | 2 | The study reports a one-compartment PK model and bioavailability for melagatran, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| PGx | Bredberg_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving CYP enzymes, not pharmacogenomic effects of gene variants on melagatran PK/PD. |
| popPK | Bååthe_2006 | relevant | 10 | 2 | The paper is a population PK study of melagatran, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper describes in vitro biotransformation mechanisms of ximelagatran to melagatran but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Elg_1997 | irrelevant | 1 | 0 | The study focuses on enzyme inhibition kinetics and antithrombotic efficacy (IC50) in a rat model, not on pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Nowak_2002 | not_relevant | 0 | 0 | The paper is a general pharmacological review of direct thrombin inhibitors and does not report any pharmacogenomic effects or gene-variant specific PK/PD data for melagatran. |
| popPK | Nylander_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet activation and does not report pharmacokinetic parameters for melagatran. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_melagatran`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
