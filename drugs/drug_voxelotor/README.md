# voxelotor

- **generic name:** voxelotor
- **ATC codes:** `B06AX03`
- **DrugBank:** [DB14975](https://go.drugbank.com/drugs/DB14975)
- **groups:** approved, investigational

## About

**Description.** Voxelotor is a novel hemoglobin S polymerization inhibitor for the treatment of sickle cell disease. This is a genetically inherited condition most prevalent in the Middle East, Africa, and certain parts of India. Sickle cell disease can lead to excruciating pain, stroke, infection, and various other complications arising from the blockage of blood vessels.[T734]

Voxelotor was granted accelerated FDA approval on November 25 2019, as it is likely to be a promising treatment for the 100,000 individuals in the U.S. suffering from the disease, in addition to 20 million others worldwide.[L10403] It was developed by Global Blood Therapeutics, Inc.[L10403] and is unique from other drugs used to treat sickle cell anemia, such as [hydroxyurea], [L-glutamine], and [crizanlizumab][A188135,A188138] due to its novel mechanism of action. The EMA approved the use of voxelotor for the treatment of hemolytic anemia associated with sickle cell disease in February 2022.[L41419,L41424]

**Indication.** In the US, voxelotor is indicated to treat sickle cell disease in both adult and pediatric patients aged 4 years and older.[L10397] In Europe, it is indicated for the treatment of hemolytic anemia due to sickle cell disease (SCD) in adults and pediatric patients 12 years of age and older as monotherapy or in combination with [hydroxyurea].[L41419]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 07:25 | 6:15 | 0/0/0 | 1/0/0 | 0/0/0 | 83,848/3,786 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Savic_2022](drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b.md) | Savic RM et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Savic_2022](drugs/drug_voxelotor/Voxelotor_Savic2022_estimate_rse_a_b_adults_and_adolescents.md) | Savic RM et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Savic_2022](drugs/drug_voxelotor/Voxelotor_Savic2022_shrinkage.md) | Savic RM et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731) |
| <span class="pk-badge pk-badge--neutral">not_reviewed</span> | [Savic_2022](drugs/drug_voxelotor/Voxelotor_Savic2022_shrinkage_adults_and_adolescents_with_si.md) | Savic RM et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Green_2022](drugs/drug_voxelotor/pd_Green_2022_alanine_aminotransferase.md) | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Green_2022](drugs/drug_voxelotor/pd_Green_2022_hemoglobin.md) | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Green_2022](drugs/drug_voxelotor/pd_Green_2022_white_blood_cell_count.md) | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Egesa_2022 | not_relevant | 0 | 0 | The paper is a general review of sickle cell disease and does not report pharmacogenomic effects on voxelotor PK/PD parameters. |
| popPK | Green_2022 | irrelevant | 4 | 2 | The paper is an exposure-response analysis that uses PK parameters (AUC, Cmax) as covariates but does not report the underlying population PK model parameters (CL, V, Q, ka) or half-life for voxelotor. |
| popPK | Rivenbark_2026 | irrelevant | 0 | 0 | The paper is a claims-based epidemiological study analyzing prescription rates and does not report any pharmacokinetic parameters for voxelotor. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_voxelotor`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
