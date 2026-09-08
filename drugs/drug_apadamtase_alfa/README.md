# Apadamtase alfa

- **generic name:** Apadamtase alfa
- **ATC codes:** `B01AD13`
- **DrugBank:** [DB15164](https://go.drugbank.com/drugs/DB15164)
- **groups:** approved, investigational

## About

**Description.** Thrombotic thrombocytopenic purpura (TTP) is a rare blood clotting disorder characterized by thrombocytopenia, microangiopathic hemolytic anemia, and various degrees of organ damage.[A262076] It may be inherited (congenital TTP; cTTP) or acquired due to autoantibodies (immune-mediated TTP; iTTP), although cTTP accounts for <5% of all cases of TTP.[A262076] Patients with cTTP have a severe deficiency of a plasma metalloproteinase called ADAMTS13 (a disintegrin and metalloproteinase with a thrombospondin type 1 motif, member 13), which is responsible for cleaving large von Willebrand factor multimers and preventing the formation of microthrombi - this deficiency in ADAMTS13 is responsible for the microangiopathic complications associated with cTTP.[A262076] Standard therapy for cTTP involves prophylactic plasma infusions to supplement insufficient ADAMTS13 plasma levels.[A262071]

Apadamtase alfa, sold under the brand name Adzynma (ADAMTS13, recombinant-krhn), was approved by the FDA in November 2023 for use as an enzyme replacement therapy in patients with cTTP.[L48756]

**Indication.** Recombinant human ADAMTS13 is indicated for prophylactic or on-demand enzyme replacement therapy (ERT) in adult and pediatric patients with congenital thrombotic thrombocytopenic purpura (cTTP).[L48746]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:30 | 7:53 | 0/1/0 | 0/0/0 | 0/0/0 | 59,866/18,257 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [McBride_2025](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_McBride2025_reference.md) | McBride (2025) | — |
| <span class="pk-badge pk-badge--neutral">None</span> | [Patel_2025](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_estimate.md) | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Patel_2025](drugs/drug_apadamtase_alfa/ApadamtaseAlfa_Patel2025_shrinkage.md) | Patel M et al., Use of PopPK and E-R Analyses toward Ex…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3720](https://doi.org/10.1002/cpt.3720) |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bendapudi_2024 | irrelevant | 0 | 0 | The paper describes a clinical case report of rADAMTS13 (not apadamtase_alfa) and does not report any pharmacokinetic parameters. |
| popPK | DeYoung_2022 | irrelevant | 0 | 0 | The paper is a mechanistic review of ADAMTS13 regulation and does not report quantitative population pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Hafez_2022 | irrelevant | 0 | 0 | The paper is a clinical observational study on ADAMTS13 activity in COVID-19 patients and does not report pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Hrdinová_2018 | irrelevant | 0 | 0 | The paper is a review of the immunopathogenesis of TTP focusing on ADAMTS13, not a pharmacokinetic study of apadamtase_alfa. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper studies recombinant ADAMTS-1, not apadamtase_alfa, and does not report PK parameters for the target drug. |
| popPK | Kwak_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MDTCS and MDTCS-Fc (ADAMTS13 fragments), not apadamtase_alfa. |
| PGx | Liu-Chen_2018 | not_relevant | 0 | 0 | The paper describes an mRNA therapy for ADAMTS13, not the drug apadamtase_alfa, and does not report pharmacogenomic effects on its PK/PD. |
| popPK | Matsumoto_2021 | irrelevant | 0 | 0 | The paper is a review of TTP pathogenesis and treatments, does not focus on apadamtase_alfa, and contains no pharmacokinetic parameters. |
| popPK | Moore_2023 | irrelevant | 0 | 0 | The paper discusses ADAMTS13 antibody assays for TTP diagnosis and does not report pharmacokinetic parameters for apadamtase_alfa. |
| popPK | Pruss_2011 | irrelevant | 0 | 0 | The study focuses on von Willebrand factor (VWF) mutations and does not involve the drug apadamtase_alfa. |
| popPK | Rayes_2007 | irrelevant | 0 | 0 | The paper investigates the proteolysis of von Willebrand factor by ADAMTS-13 and does not involve the drug apadamtase_alfa or report any pharmacokinetic parameters. |
| popPK | Rossato_2023 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic and behavioral outcomes in a mouse model, and no quantitative pharmacokinetic parameter values (CL, V, etc.) are present in the provided evidence. |
| PD | Rossato_2023 | not_relevant | 4 | 2 | The paper describes a dose-dependent pharmacodynamic effect (reduction in VWF activity) in a mouse model, but the provided text lacks specific numeric concentration-effect parameters (e.g., EC50, Emax) or detailed PK/PD modeling data required for extraction. |
| popPK | Verbij_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ADAMTS13 (not apadamtase_alfa) clearance by macrophages and does not report population pharmacokinetic parameters. |
| popPK | Weise_2025 | irrelevant | 2 | 3 | The paper is a case report on recombinant ADAMTS13 (not apadamtase_alfa) and only provides apparent half-life values without a full compartmental PK model or clearance/volume parameters for the target drug. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The paper studies the mechanism of VWF and ADAMTS-13 in traumatic brain injury and does not report pharmacokinetic parameters for apadamtase_alfa. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_apadamtase_alfa`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
