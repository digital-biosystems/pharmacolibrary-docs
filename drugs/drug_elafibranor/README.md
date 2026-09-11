# elafibranor

- **generic name:** elafibranor
- **ATC codes:** `A05AX06`
- **DrugBank:** [DB05187](https://go.drugbank.com/drugs/DB05187)
- **groups:** approved, investigational

## About

**Description.** Elafibranor is a dual peroxisome proliferator-activated receptor (PPAR) α and β/δ agonist [A263833] that works to inhibit bile acid synthesis.[L50768] On June 10, 2024, elafibranor was granted accelerated approval by the FDA for the treatment of primary biliary cholangitis (PBC).[L50773] The drug was also approved by the EMA on September 23, 2024.[L51878]

**Indication.** Elafibranor is indicated for the treatment of primary biliary cholangitis (PBC) in combination with [ursodeoxycholic acid] (UDCA) in adults who have had an inadequate response to UDCA, or as monotherapy in patients unable to tolerate UDCA.[L50768, L51873] In the US, this indication is approved under accelerated approval and is subject to change based on the determined clinical benefit of the drug in future confirmatory trials.[L50768]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 03:44 | 4:12 | 0/0/0 | 0/1/0 | 0/0/0 | 105,474/1,758 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ooi_2026](drugs/drug_elafibranor/pd_Ooi_2026_ALP.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ooi_2026](drugs/drug_elafibranor/pd_Ooi_2026_TB.md) | Ooi QX et al., Population Pharmacokinetics and Pharmac…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70247](https://doi.org/10.1002/psp4.70247) |

## Coverage

- **PubMed hits:** 14 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baandrup_2019 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study evaluating liver histopathology in a mouse model and does not report any pharmacokinetic parameters for elafibranor. |
| PD | Baandrup_2019 | not_relevant | 2 | 0 | The paper is a preclinical study validating biopsy-based histology against stereology in a mouse model; it reports qualitative/semi-quantitative treatment effects (e.g., % reduction in lipid/fibrosis) at a single dose but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like Emax or EC50. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a new compound (compound 27) where elafibranor is only mentioned as a structural hybridization partner, with no pharmacokinetic data reported. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50/EC50 values for a newly discovered compound (compound 27), not for elafibranor, and does not provide any in vivo pharmacodynamic or exposure-response analysis for elafibranor. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic and gene expression study in a NASH mouse model and does not report any pharmacokinetic parameters for elafibranor. |
| popPK | Nestor_2022 | irrelevant | 0 | 0 | Elafibranor is used only as a comparator drug in a pharmacodynamic study, and the paper explicitly states that elafibranor PK parameters were not assessed. |
| PD | Nestor_2022 | not_relevant | 2 | 1 | The paper reports group-level mean effects of elafibranor at a single dose (78 μmol/kg) compared to vehicle and other drugs, but does not provide individual subject data, concentration-effect curves, or numeric PD parameters (Emax, EC50) for elafibranor. |
| popPK | Ooi_2026 | relevant | 10 | 2 | The paper is a population PK study for elafibranor, but the specific numeric parameter values (CL, V, Q) are in Table 1 which is not included in the evidence, only half-lives and AUCs are visible. |
| popPK | Tølbøl_2018 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of elafibranor in mouse models of NASH and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Tølbøl_2018 | not_relevant | 2 | 0 | The paper reports qualitative histological and metabolic treatment effects in mouse models but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for elafibranor. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a review of flavonoid drugs and only lists elafibranor as a clinical candidate in a table without providing any pharmacokinetic parameters. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper is a review of flavonoid drugs and does not contain any pharmacodynamic or exposure-response data for elafibranor. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) for elafibranor, not pharmacogenomic effects. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_elafibranor`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
