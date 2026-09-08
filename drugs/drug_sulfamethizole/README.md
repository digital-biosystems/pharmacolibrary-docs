# sulfamethizole

- **generic name:** sulfamethizole
- **ATC codes:** `B05CA04`, `D06BA04`, `J01EB02`, `S01AB01`
- **DrugBank:** [DB00576](https://go.drugbank.com/drugs/DB00576)
- **groups:** approved, vet_approved

## About

**Description.** A sulfathiazole antibacterial agent.

**Indication.** For the treatment of urinary tract infection

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 16:49 | 7:23 | 0/0/0 | 0/0/0 | 0/0/0 | 27,976/1,460 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 5/2 | 8/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 23 matched, 22 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kamiya_1983.pdf` | Kamiya A et al., Quantitative investigation on renal han…, Journal of pharmaceutical s… (1983) | popPK | 8 | [10.1002/jps.2600720429](https://doi.org/10.1002/jps.2600720429) | [6864487](https://pubmed.ncbi.nlm.nih.gov/6864487) | The study investigates the renal handling and pharmacokinetics of sulfamethizole in multiple species, but the specific quantitative parameter values are not present in the provided abstract text. |
| `Kowarski_1976.pdf` | Kowarski CR et al., Measurement of sulfamethizole clearance…, Journal of pharmaceutical s… (1976) | popPK | 8 | [10.1002/jps.2600650338](https://doi.org/10.1002/jps.2600650338) | [1263102](https://pubmed.ncbi.nlm.nih.gov/1263102) | The study reports quantitative clearance parameters for sulfamethizole in dogs, but specific numeric values are not present in the provided text. |
| `Kowarski_1980.pdf` | Kowarski CR et al., Simplified method for estimating volume…, Journal of pharmaceutical s… (1980) | popPK | 8 | [10.1002/jps.2600691029](https://doi.org/10.1002/jps.2600691029) | [7420296](https://pubmed.ncbi.nlm.nih.gov/7420296) | The paper describes a PK study measuring Vdss for sulfamethizole in dogs, but the specific numeric parameter values are not present in the provided evidence. |
| `Strum_1978.pdf` | Strum JD et al., Bioavailability of sulfonamide suspensi…, Journal of pharmaceutical s… (1978) | popPK | 8 | [10.1002/jps.2600671018](https://doi.org/10.1002/jps.2600671018) | [702289](https://pubmed.ncbi.nlm.nih.gov/702289) | The study reports pharmacokinetic parameters for sulfamethizole, but the specific numeric values are not present in the provided evidence. |
| `Komatsu_2000.pdf` | Komatsu K et al., Prediction of in vivo drug-drug interac…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10725317](https://www.ncbi.nlm.nih.gov/pubmed/10725317) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-07T16:49:17.437887+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eo_2026 | irrelevant | 0 | 0 | The paper is a review of antimicrobial scaffolds where sulfamethizole is mentioned only as a commercial agent for structural comparison, with no pharmacokinetic data reported. |
| popPK | Hansen_1979 | irrelevant | 0 | 0 | The study focuses on the effect of sulfamethizole on phenytoin metabolism, not on the pharmacokinetic parameters of sulfamethizole itself. |
| popPK | Kamiya_1983 | relevant | 8 | 0 | The study investigates the renal handling and pharmacokinetics of sulfamethizole in multiple species, but the specific quantitative parameter values are not present in the provided abstract text. |
| popPK | Katayama_1990 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding sulfamethizole. |
| popPK | Katayama_1990_2 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for sulfamethizole. |
| popPK | Katayama_1990_3 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| PGx | Komatsu_2000 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of tolbutamide metabolism by sulfamethizole) and does not report any pharmacogenomic effects (gene variants) on the PK or PD of sulfamethizole. |
| popPK | Komiya_1986 | irrelevant | 2 | 0 | The study focuses on renal reabsorption kinetics and physicochemical properties in rats rather than standard population PK parameters (CL, V, ka), and no numeric values are provided in the evidence. |
| popPK | Koshi_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| popPK | Kowarski_1976 | relevant | 8 | 2 | The study reports quantitative clearance parameters for sulfamethizole in dogs, but specific numeric values are not present in the provided text. |
| popPK | Kowarski_1980 | relevant | 8 | 0 | The paper describes a PK study measuring Vdss for sulfamethizole in dogs, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Lovering_1975 | irrelevant | 2 | 0 | The paper is a review of bioavailability sampling duration using literature data and does not report original quantitative PK parameters (CL, V, etc.) for sulfamethizole. |
| popPK | Lumholtz_1975 | irrelevant | 0 | 0 | The study examines sulfamethizole as an inhibitor of other drugs' metabolism, not as the subject drug for PK parameter estimation. |
| popPK | Macheras_1986 | irrelevant | 2 | 0 | The study focuses on bioequivalence and formulation effects (AUC, Cmax, excretion rates) rather than reporting specific compartmental PK parameters like clearance, volume, or half-life for sulfamethizole. |
| popPK | Nakanishi_1989 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| popPK | Nierenberg_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of penicillin tubular secretion inhibition where sulfamethizole serves only as a competing inhibitor, not as the subject drug for PK parameter estimation. |
| popPK | Sokolov_2018 | irrelevant | 0 | 0 | The paper studies the abatement of sulfamethizole in water using cold plasma (environmental chemistry), not pharmacokinetics in biological systems. |
| popPK | Strum_1978 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for sulfamethizole, but the specific numeric values are not present in the provided evidence. |
| popPK | Sullivan_1975 | irrelevant | 2 | 0 | The study focuses on urinary drug concentrations in diseased kidneys rather than systemic pharmacokinetic parameters (CL, V, ka) for sulfamethizole. |
| popPK | Vree_1983 | irrelevant | 2 | 0 | The paper is a theoretical discussion using sulfamethizole as an example of metabolic behavior, without reporting original quantitative PK parameter values. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics resource for drug detection via metabolomics and mentions sulfamethizole only as an example of metadata curation, providing no pharmacokinetic parameters. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics resource for detecting drug exposure and does not report any pharmacodynamic or exposure-response analysis for sulfamethizole. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sulfamethizole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
