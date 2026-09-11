# casopitant

- **generic name:** casopitant
- **ATC codes:** `A04AD13`
- **DrugBank:** [DB06634](https://go.drugbank.com/drugs/DB06634)
- **groups:** investigational

## About

**Indication.** Investigated for use/treatment in urinary incontinence and adverse effects (chemotherapy).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:17 | 4:32 | 0/0/0 | 0/0/0 | 0/0/0 | 23,004/1,391 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Minthorn_2008.pdf` | Minthorn E et al., Pharmacokinetics and brain penetration…, Drug metabolism and disposi… (2008) | popPK | 8 | [10.1124/dmd.108.021758](https://doi.org/10.1124/dmd.108.021758) | [18556439](https://pubmed.ncbi.nlm.nih.gov/18556439) | The paper is a pharmacokinetic study of casopitant in ferrets, but the provided evidence contains only qualitative descriptions and metabolite percentages, lacking specific numeric values for clearance, volume, or half-life. |
| `Zamuner_2012.pdf` | Zamuner S et al., A pharmacokinetic PET study of NK₁ rece…, European journal of nuclear… (2012) | popPK | 8 | [10.1007/s00259-011-1954-2](https://doi.org/10.1007/s00259-011-1954-2) | [21993526](https://pubmed.ncbi.nlm.nih.gov/21993526) | The study describes a population PK-receptor occupancy model for casopitant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Johnson_2010.pdf` | Johnson BM et al., Ketoconazole and rifampin significantly…, Journal of clinical pharmac… (2010) | pgx | 7 | [10.1177/0091270009353761](https://doi.org/10.1177/0091270009353761) | [20124517](https://www.ncbi.nlm.nih.gov/pubmed/20124517) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zamuner_2010.pdf` | Zamuner S et al., Effect of single and repeat doses of ca…, British journal of clinical… (2010) | pgx | 7 | [10.1111/j.1365-2125.2010.03729.x](https://doi.org/10.1111/j.1365-2125.2010.03729.x) | [20840445](https://www.ncbi.nlm.nih.gov/pubmed/20840445) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-11T02:16:29.791001+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_2009 | not_relevant | 0 | 0 | The study investigates the effect of casopitant on the pharmacokinetics of other drugs (dolasetron and granisetron), not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of casopitant itself. |
| popPK | Adams_2014 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide, with casopitant serving only as a co-administered agent to assess drug-drug interactions, and no quantitative PK parameters for casopitant are reported. |
| PD | Adams_2014 | not_relevant | 1 | 0 | The study assesses the effect of casopitant on cyclophosphamide PK and safety (WBC), but does not report a concentration-effect or dose-response relationship for casopitant itself with numeric PD parameters. |
| popPK | Di_2011 | irrelevant | 0 | 0 | The paper is a drug discovery and biological characterization study for casopitant, focusing on receptor affinity and selection as a clinical candidate, without reporting quantitative pharmacokinetic disposition parameters. |
| PD | Di_2011 | not_relevant | 0 | 0 | The paper describes the discovery and biological characterization of casopitant, focusing on receptor affinity and physicochemical properties, but does not report any pharmacodynamic (PD) or exposure-response models with numeric parameters. |
| PGx | Johnson_2010 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole/rifampin) affecting casopitant PK, not pharmacogenomic effects based on genetic variants. |
| popPK | Kirby_2010 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of warfarin (the subject drug) to assess a drug-drug interaction, and does not report quantitative disposition parameters for casopitant. |
| PD | Kirby_2010 | not_relevant | 2 | 1 | The study reports a drug-drug interaction effect on warfarin PK and INR (a PD marker) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for casopitant. |
| PGx | Kirby_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between casopitant and warfarin, not a pharmacogenomic effect on casopitant's PK/PD. |
| popPK | Minthorn_2008 | relevant | 8 | 2 | The paper is a pharmacokinetic study of casopitant in ferrets, but the provided evidence contains only qualitative descriptions and metabolite percentages, lacking specific numeric values for clearance, volume, or half-life. |
| PD | Minthorn_2008 | not_relevant | 1 | 0 | The paper reports pharmacokinetics and brain penetration data but does not provide numeric pharmacodynamic parameters (e.g., Emax, EC50) or an exposure-response curve for casopitant. |
| PGx | Motta_2011 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving CYP3A4 inhibitors and inducers, not pharmacogenomic variants affecting casopitant's PK or PD. |
| popPK | Roila_2009 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for antiemetic prevention and does not report any pharmacokinetic parameters for casopitant. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy for postoperative nausea and vomiting, not a pharmacokinetic study, and it contains no PK parameters for casopitant. |
| PD | Weibel_2020 | not_relevant | 1 | 0 | The paper is a network meta-analysis comparing clinical efficacy (risk ratios) of antiemetics, including casopitant, but it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Zamuner_2010 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A inhibition) in healthy subjects, not the effect of a gene variant or genotype on casopitant's PK/PD. |
| popPK | Zamuner_2012 | relevant | 8 | 0 | The study describes a population PK-receptor occupancy model for casopitant, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_casopitant`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
