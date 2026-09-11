# ursodeoxycholic acid

- **generic name:** ursodeoxycholic acid
- **ATC codes:** `A05AA02`
- **DrugBank:** [DB01586](https://go.drugbank.com/drugs/DB01586)
- **groups:** approved, investigational

## About

**Description.** Ursodeoxycholic acid (UDCA), also known as ursodiol, is a naturally-occurring bile acid that constitutes a minor fraction of the human bile acid pool.[A256272,A256277] UDCA has been used to treat liver disease for decades: its first use in traditional medicine dates back more than a hundred years.[A256267,A256463] UDCA was first characterized in the bile of the Chinese black bear and is formed by 7b-epimerization of [chenodeoxycholic acid], which is a primary bile acid.[A256272] Due to its hydrophilicity, UDCA is less toxic than [cholic acid] or [chenodeoxycholic acid].[A256272] 

UDCA was first approved by the FDA in 1987 for dissolution of gallstones and for primary biliary cirrhosis in 1996.[A256272] UDCA works by replacing the hydrophobic or more toxic bile acids from the bile acid pool.[A256272]

**Indication.** Ursodeoxycholic acid is indicated for the treatment of patients with primary biliary cholangitis.[L44627] 

It is used for the short-term treatment of radiolucent, noncalcified gallbladder stones in patients selected for elective cholecystectomy. It is also used to prevent gallstone formation in obese patients experiencing rapid weight loss.[L44793]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 06:23 | 1:27:17 | 0/1/0 | 0/0/0 | 0/0/0 | 103,973/3,611 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/0 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Yue_2008](drugs/drug_ursodeoxycholic_acid/UrsodeoxycholicAcid_Yue2008_reference.md) | Yue PF et al., Preparation, characterization, and bioa…, Drug development and indust… (2008) | [10.1080/03639040701842477](https://doi.org/10.1080/03639040701842477) |

## Coverage

- **PubMed hits:** 118 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gordi_2014.pdf` | Gordi T et al., Pharmacokinetic analysis of 14C-ursodio…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.327](https://doi.org/10.1002/jcph.327) | [24805288](https://pubmed.ncbi.nlm.nih.gov/24805288) | The paper describes a population PK study of ursodeoxycholic acid (ursodiol) in infants using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Yue_2008.pdf` | Yue PF et al., Preparation, characterization, and bioa…, Drug development and indust… (2008) | popPK | 8 | [10.1080/03639040701842477](https://doi.org/10.1080/03639040701842477) | [18612911](https://pubmed.ncbi.nlm.nih.gov/18612911) | The study reports quantitative PK parameters (Tmax, Cmax, AUC) for ursodeoxycholic acid in rats, but lacks specific clearance, volume, or half-life values. |

<sub>queue written 2026-09-11T05:04:34.117824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becquemont_2006 | not_relevant | 0 | 0 | The study investigates the effect of UDCA on the pharmacokinetics of other drugs (digoxin, midazolam) via enzyme induction, not the effect of a gene variant on UDCA's pharmacokinetics or pharmacodynamics. |
| PGx | Bodin_2005 | not_relevant | 0 | 0 | The paper describes CYP3A4-mediated metabolism of ursodeoxycholic acid but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Bramlett_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and gene repression, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Estiú_2015 | not_relevant | 0 | 0 | The study investigates the mechanism of action of UDCA in cholestasis of pregnancy but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fabbri_2000 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of UDCA in combination with interferon for hepatitis C but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Fossdal_2021 | irrelevant | 0 | 0 | The study focuses on longitudinal biomarkers (ELF, LSM, ALP) in PSC patients and does not report pharmacokinetic parameters for ursodeoxycholic acid. |
| popPK | Gordi_2014 | relevant | 9 | 0 | The paper describes a population PK study of ursodeoxycholic acid (ursodiol) in infants using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Hayashi_2021 | not_relevant | 0 | 0 | The paper is a case report on pazopanib-induced liver injury and does not report any pharmacogenomic effect on the PK or PD of ursodeoxycholic acid. |
| PGx | Jacquemin_1999 | not_relevant | 0 | 0 | The text is a general overview of PFIC genetics and mentions UDCA treatment only in the context of future genotype-phenotype correlations, without reporting any specific pharmacokinetic or pharmacodynamic data. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper reports endogenous serum levels of UDCA in ALS patients, not the pharmacokinetics or pharmacodynamics of exogenous UDCA administration influenced by genetic variants. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on adefovir derivatives for HBV treatment, and ursodeoxycholic acid is only mentioned in the context of docking studies, not as the subject of a pharmacokinetic analysis. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on adefovir derivatives, not ursodeoxycholic acid, and reports antiviral EC50 values rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Little_2022 | not_relevant | 0 | 0 | The paper investigates the physiological role of PXR and CAR on the gut microbiome and bile acid profiles in genetically modified mice, but it does not report pharmacokinetic or pharmacodynamic parameters of ursodeoxycholic acid as a drug treatment. |
| PGx | Mackenzie_2008 | not_relevant | 2 | 0 | The paper characterizes the enzyme UGT3A1 and notes a catalytically inactive variant, but it does not report in vivo pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax) for ursodeoxycholic acid in humans. |
| popPK | Mahmood_1998 | irrelevant | 0 | 0 | The paper describes a method for estimating ka using a hypothetical drug and does not report pharmacokinetic parameters for ursodeoxycholic acid. |
| PGx | Marschall_2005 | not_relevant | 0 | 0 | The study investigates the molecular mechanisms of action of UDCA in healthy subjects but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Matsunaga_2023 | not_relevant | 0 | 0 | The paper investigates paclitaxel resistance in breast cancer cells and does not mention ursodeoxycholic acid. |
| PGx | Mroz_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of UDCA on ion transport in CF vs normal cells, but does not report a pharmacogenomic effect (genetic variant altering drug PK/PD) for UDCA. |
| PGx | Pęczuła_2025 | not_relevant | 0 | 0 | The paper is a review of the genetic causes of gallstone disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ursodeoxycholic acid. |
| PGx | Rostomova_2026 | not_relevant | 0 | 0 | The study compares the efficacy of different drugs in a specific disease population (Gilbert syndrome) but does not report pharmacogenomic effects (gene variant/genotype) on the PK or PD parameters of ursodeoxycholic acid. |
| PGx | Scottoni_2020 | not_relevant | 0 | 0 | The paper is a review of biliary atresia management and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Su_2008 | not_relevant | 0 | 0 | The paper investigates the role of AKR1C2 in the toxicity of 1-nitropyrene and benzo[a]pyrene, using ursodeoxycholic acid only as an inhibitor, and does not report pharmacogenomic effects on the PK or PD of ursodeoxycholic acid itself. |
| PGx | Takahashi_2016 | not_relevant | 0 | 0 | The paper investigates the species difference in bile acid metabolism (specifically the formation of muricholic acid from UDCA) in mice vs. humans, not the pharmacokinetics or pharmacodynamics of UDCA as a therapeutic drug in humans. |
| PGx | Tang_2016 | not_relevant | 0 | 0 | The study investigates the mechanism of a herbal capsule in mice and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ursodeoxycholic acid. |
| PGx | Thébaut_2018 | not_relevant | 0 | 0 | The paper is a review of cholestatic pruritus management in children and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| popPK | Varongkriengkrai_2025 | irrelevant | 0 | 0 | The paper is a study on the antiviral and antibacterial activities of bile acid salts, not a pharmacokinetic study, and contains no PK parameters for ursodeoxycholic acid. |
| PD | Varongkriengkrai_2025 | not_relevant | 2 | 2 | The paper reports in vitro antiviral and antibacterial activities (e.g., EC50 for LCA) but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve for ursodeoxycholic acid (UDCA) in a biological system. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, not ursodeoxycholic acid. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates the interaction between bile acids (including ursodeoxycholic acid) and the OAT2 transporter, but does not report how a gene variant changes the PK or PD of ursodeoxycholic acid itself. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme for the industrial biosynthesis of ursodeoxycholic acid, not the effect of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Wasuwanich_2020 | not_relevant | 0 | 0 | The paper is a review of cystic fibrosis-associated liver disease and mentions the use of ursodeoxycholic acid, but it does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wong_2019 | not_relevant | 0 | 0 | The paper is a survey of clinical practices for biliary atresia and mentions the use of ursodeoxycholic acid but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of arbutin in cholestasis and mentions UDCA only as a positive control, without reporting any pharmacogenomic effects on UDCA's PK or PD parameters. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper reports a case of PKD and Crigler-Najjar syndrome treated with ursodeoxycholic acid, but it does not investigate how the identified gene variants (PKLR, UGT1A1) alter the pharmacokinetics or pharmacodynamics of the drug itself. |
| PGx | Xiang_2012 | not_relevant | 0 | 0 | The study investigates endogenous bile acid concentrations in healthy volunteers, not the pharmacokinetics or pharmacodynamics of ursodeoxycholic acid as an administered drug. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (FFA4 agonism) and in vitro/in vivo efficacy, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Schisandrol B, not the pharmacogenomics of ursodeoxycholic acid. |
| PGx | Zheng_2017 | not_relevant | 0 | 0 | The paper focuses on the industrial bioproduction of ursodeoxycholic acid using engineered enzymes, not on human pharmacogenomics or PK/PD parameters. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper investigates metabolic pathways and transporter interactions in vitro but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Ziegler_2024 | not_relevant | 0 | 0 | The paper describes a method for measuring bile acids in dried blood spots and compares profiles in cholestatic diseases, but does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes and genotype-phenotype correlations for NICCD, but does not report pharmacokinetic or pharmacodynamic parameters of ursodeoxycholic acid. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of UDCA in animal models of hyperbilirubinemia but does not report pharmacogenomic effects (gene variants) on the PK or PD parameters of UDCA itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ursodeoxycholic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
