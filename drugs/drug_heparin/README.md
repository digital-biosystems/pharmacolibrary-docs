# heparin

- **generic name:** heparin
- **ATC codes:** `B01AB01`, `C05BA03`, `S01XA14`
- **DrugBank:** [DB01109](https://go.drugbank.com/drugs/DB01109)
- **groups:** approved, investigational

## About

**Description.** Unfractionated heparin (UH) is a heterogenous preparation of anionic, sulfated glycosaminoglycan polymers with weights ranging from 3000 to 30,000 Da. It is a naturally occurring anticoagulant released from mast cells. It binds reversibly to antithrombin III (ATIII) and greatly accelerates the rate at which ATIII inactivates coagulation enzymes thrombin (factor IIa) and factor Xa. UH is different from low molecular weight heparin (LMWH) in the following ways: the average molecular weight of LMWH is about 4.5 kDa whereas it is 15 kDa for UH; UH requires continuous infusions; activated partial prothrombin time (aPTT) monitoring is required when using UH; and UH has a higher risk of bleeding and higher risk of osteoporosis in long term use. Unfractionated heparin is more specific than LMWH for thrombin. Furthermore, the effects of UH can typically be reversed by using protamine sulfate.

**Indication.** Unfractionated heparin is indicated for prophylaxis and treatment of venous thrombosis and its extension, prevention of post-operative deep venous thrombosis and pulmonary embolism and prevention of clotting in arterial and cardiac surgery. In cardiology, it is used to prevent embolisms in patients with atrial fibrillation and as an adjunct antithrombin therapy in patients with unstable angina and/or non-Q wave myocardial infarctions (i.e. non-ST elevated acute coronary artery syndrome) who are on platelet glycoprotein (IIb/IIIa) receptor inhibitors. Additionally, it is used to prevent clotting during dialysis and surgical procedures, maintain the patency of intravenous injection devices and prevent in vitro coagulation of blood transfusions and in blood samples drawn for laboratory values.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 22:54 | 29:12 | 1/0/2 | 0/1/0 | 0/0/0 | 192,828/7,369 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 10/8 | 16/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lanoiselée_2026](drugs/drug_heparin/Heparin_Lanoisele2026_reference.md) | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gouin-Thibault_2024](drugs/drug_heparin/Heparin_GouinThibault2024_reference.md) | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Salem_2022](drugs/drug_heparin/Heparin_Salem2022_reference.md) | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lanoiselée_2026](drugs/drug_heparin/pd_Lanoisel_e_2026_ACT.md) | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |

## Coverage

- **PubMed hits:** 462 matched, 70 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abe_2013.pdf` | Abe S et al., Low-molecular-weight heparin pharmacoki…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201858](https://doi.org/10.5414/CP201858) | [23587152](https://pubmed.ncbi.nlm.nih.gov/23587152) | The paper is a population PK study of dalteparin (a heparin) reporting a model, but the specific numeric parameter values (CL, V, ka) are not present in the provided evidence, only qualitative descriptions and half-life approximations. |
| `Delavenne_2017.pdf` | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | popPK | 10 | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) | [28510738](https://pubmed.ncbi.nlm.nih.gov/28510738) | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Gibert_2024.pdf` | Gibert A et al., Factors Influencing Unfractionated Hepa…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-023-01334-3](https://doi.org/10.1007/s40262-023-01334-3) | [38169065](https://pubmed.ncbi.nlm.nih.gov/38169065) | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence text. |
| `Konecki_2024.pdf` | Konecki C et al., Population pharmacokinetics of unfracti…, Biomedicine & pharmacothera… (2024) | popPK | 10 | [10.1016/j.biopha.2024.117700](https://doi.org/10.1016/j.biopha.2024.117700) | [39571244](https://pubmed.ncbi.nlm.nih.gov/39571244) | The paper describes a population PK model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Lanoiselée_2024.pdf` | Lanoiselée J et al., Heparin Dosing Regimen Optimization in…, Pharmaceutics (2024) | popPK | 10 | [10.3390/pharmaceutics16060770](https://doi.org/10.3390/pharmaceutics16060770) | [38931891](https://pubmed.ncbi.nlm.nih.gov/38931891) | The paper describes a population pharmacokinetic model for heparin, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| `Salem_2022.pdf` | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) | [34816442](https://pubmed.ncbi.nlm.nih.gov/34816442) | The paper reports a population PK model for heparin with explicit numeric values for clearance (3.28 L/(h·50 kg)) and volume of distribution (8.83 L/50 kg) in the text. |
| `Bosch_2016.pdf` | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) | [26747019](https://www.ncbi.nlm.nih.gov/pubmed/26747019) | metadata signals extractable PD data (PK-PD) |
| `Jung_2024.pdf` | Jung D et al., Pharmacokinetics of Human Plasma-Derive…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2493](https://doi.org/10.1002/jcph.2493) | [38953605](https://www.ncbi.nlm.nih.gov/pubmed/38953605) | metadata signals extractable PD data (turnovermodel) |
| `Robson_2000.pdf` | Robson R, The use of bivalirudin in patients with…, The Journal of invasive car… (2000) | pd | 5 | not captured | [11156732](https://www.ncbi.nlm.nih.gov/pubmed/11156732) | metadata signals extractable PD data (Emax) |
| `Schmitt_2015.pdf` | Schmitt C et al., Absence of pharmacodynamic interaction…, Journal of cardiovascular p… (2015) | pd | 5 | [10.1097/FJC.0000000000000211](https://doi.org/10.1097/FJC.0000000000000211) | [25602360](https://www.ncbi.nlm.nih.gov/pubmed/25602360) | metadata signals extractable PD data (Emax) |
| `Nahar_2014.pdf` | Nahar R et al., CYP2C9, VKORC1, CYP4F2, ABCB1 and F5 va…, Pharmacological reports : PR (2014) | pgx | 5 | [10.1016/j.pharep.2013.09.006](https://doi.org/10.1016/j.pharep.2013.09.006) | [24911077](https://www.ncbi.nlm.nih.gov/pubmed/24911077) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-09-05T22:42:33.894570+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2013 | relevant | 10 | 2 | The paper is a population PK study of dalteparin (a heparin) reporting a model, but the specific numeric parameter values (CL, V, ka) are not present in the provided evidence, only qualitative descriptions and half-life approximations. |
| PGx | Aldiban_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on warfarin, not heparin. |
| PGx | Baldo_2023 | not_relevant | 0 | 0 | The paper is a general review of adverse drug reactions in anesthesia and does not report specific pharmacogenomic effects on heparin PK/PD parameters. |
| popPK | Bosch_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of sugammadex on coagulation parameters, with heparin serving only as a background co-medication rather than the subject of PK analysis. |
| PGx | Carew_1992 | not_relevant | 0 | 0 | The paper investigates the role of O-glycosylation on von Willebrand factor binding properties, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of heparin. |
| PGx | Chen_2014 | not_relevant | 0 | 0 | The paper investigates heparin's modulation of drug transporters in cancer cells, not the effect of genetic variants on heparin's pharmacokinetics or pharmacodynamics. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper investigates the surface immobilization of BMP-2 for bone regeneration and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Conde_2007 | not_relevant | 0 | 0 | The paper discusses CENP-A nucleosome stability and uses heparin as a reagent for destabilization, not as a therapeutic drug subject to pharmacogenomic analysis. |
| PGx | Connelly_1998 | not_relevant | 0 | 0 | The paper discusses hepatic lipase deficiency and its effect on lipoprotein metabolism, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Czyrek_2026 | not_relevant | 0 | 0 | The paper reports on engineered protein variants of FGF1 for diabetes treatment, not on pharmacogenomic effects of gene variants on heparin pharmacokinetics or pharmacodynamics. |
| popPK | Delavenne_2017 | relevant | 10 | 0 | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Eljilany_2021 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin, not heparin. |
| PGx | Galvan_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of PCSK9 uptake and LDL regulation, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Gao_1995 | not_relevant | 0 | 0 | The paper describes a protein engineering study of SOD, not a pharmacogenomic study of heparin pharmacokinetics or pharmacodynamics. |
| popPK | Gibert_2024 | relevant | 10 | 0 | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence text. |
| popPK | Gouin-Thibault_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tinzaparin (a low molecular weight heparin), not for heparin (unfractionated heparin) as the subject drug. |
| PGx | Hernandez-Suarez_2016 | not_relevant | 0 | 0 | The paper focuses on warfarin pharmacogenomics (NQO1*2) and does not report any pharmacogenomic effects on heparin PK or PD parameters. |
| PGx | Huang_2021 | not_relevant | 0 | 0 | The paper investigates the structure and immunogenicity of the human metapneumovirus F protein and its binding to heparin as a receptor, not the pharmacokinetics or pharmacodynamics of heparin as a drug in relation to genetic variants. |
| PGx | Ikeda_2021 | not_relevant | 0 | 0 | The paper is a general review of cancer-associated VTE and anticoagulation treatments, discussing drug-drug interactions for DOACs but reporting no pharmacogenomic effects on heparin PK/PD. |
| PGx | Ivanova_2025 | not_relevant | 0 | 0 | The paper is a case report on thrombophilia genetics and does not report pharmacogenomic effects on heparin PK/PD parameters. |
| PGx | Jiang_2011 | not_relevant | 0 | 0 | The paper investigates the association between genes involved in heparan sulfate/heparin metabolism and fatty acid composition in bovine muscle, not the pharmacokinetic or pharmacodynamic effects of heparin as a drug. |
| popPK | Jung_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for antithrombin (AT), not heparin, which is only mentioned as a co-administered anticoagulant. |
| PD | Jung_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for antithrombin (AT) but does not provide a pharmacodynamic model or numeric exposure-response/dose-response parameters for heparin. |
| PGx | Karlsson_1993 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of EC-SOD C and its binding to heparin, but does not report how a gene variant affects the PK/PD of heparin itself. |
| PGx | Karlsson_1994 | not_relevant | 0 | 0 | The paper studies the tissue retention of the protein EC-SOD via heparin binding, not the pharmacokinetics or pharmacodynamics of heparin as a drug in relation to human genetic variants. |
| PGx | Karnes_2018 | not_relevant | 2 | 0 | The paper discusses genetic risk factors for the adverse event Heparin-Induced Thrombocytopenia (HIT), not the pharmacokinetic or pharmacodynamic parameters of heparin itself. |
| PGx | Kayashima_2022 | not_relevant | 0 | 0 | The paper investigates the role of the Stabilin-2 gene in atherosclerosis and mentions heparin only as a ligand that is not the cause of the observed protection, without reporting any pharmacogenomic effects on heparin's PK or PD parameters. |
| popPK | Konecki_2024 | relevant | 10 | 0 | The paper describes a population PK model for heparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Kurtz_2002 | not_relevant | 0 | 0 | The paper discusses antiangiogenesis therapy and heparin-binding growth factors in neurofibromatosis, but does not report pharmacogenomic effects on the PK or PD of heparin. |
| popPK | Lanoiselée_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for heparin, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| PGx | Lerch_2007 | not_relevant | 0 | 0 | The paper investigates the structural and biophysical binding of heparin to follistatin isoforms, not the effect of genetic variants on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Lund_2021 | not_relevant | 0 | 0 | The paper describes a recombinant protein expression and purification protocol for LPL, not a pharmacogenomic study of heparin pharmacokinetics or pharmacodynamics. |
| PGx | Mann_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of apolipoprotein E (a natural protein) and its binding to heparin (a ligand), not the pharmacokinetics or pharmacodynamics of heparin as a therapeutic drug. |
| PGx | McCarley_2023 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic considerations for anticoagulants in HHT patients but does not report specific gene-variant effects on heparin PK or PD parameters. |
| PGx | Miklosz_2018 | not_relevant | 2 | 0 | The paper is a review of anticoagulant pharmacogenetics that primarily focuses on warfarin and DOACs; it mentions heparin resistance and HIT as potentially genetically determined but does not report specific gene variants affecting heparin PK or PD parameters. |
| PGx | Milner_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (apixaban with P-gp/CYP3A4 inhibitors) and does not report pharmacogenomic effects of gene variants on heparin PK/PD. |
| PGx | Minnich_1995 | not_relevant | 0 | 0 | The paper describes a genetic variant affecting lipid metabolism and apoE binding affinity, but does not report pharmacokinetic or pharmacodynamic parameters of heparin therapy. |
| PGx | Nahar_2014 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on warfarin (INR), not heparin. |
| popPK | Nguyen_2019 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of heparin's interaction with interleukin-12 (bioactivity and binding) and does not report any pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PGx | Park_2018 | not_relevant | 0 | 0 | The paper investigates the genetic stability of stem cells treated with nanoparticles, not the pharmacogenomics of heparin. |
| PGx | Petito_2025 | not_relevant | 0 | 0 | The paper is a review of VITT pathophysiology and does not report pharmacogenomic effects on heparin PK or PD parameters. |
| PGx | Poehlman_1986 | not_relevant | 0 | 0 | The study investigates the genetic influence on adipose tissue metabolism and lipoprotein lipase activity in response to overfeeding, not the pharmacokinetics or pharmacodynamics of heparin as a therapeutic drug. |
| PGx | Poehlman_1987 | not_relevant | 0 | 0 | The paper investigates the genetic influence on body composition and adipose tissue metabolism after exercise, using heparin only as a reagent to measure lipoprotein lipase activity, not as a drug subject to pharmacogenomic analysis. |
| PGx | Porebska_2021 | not_relevant | 0 | 0 | The paper investigates the biological activity of FGF1 oligomers and their interaction with FGFRs, not the pharmacogenomics of heparin. |
| popPK | Raner_2024 | irrelevant | 1 | 0 | This is a systematic review and meta-analysis of clinical outcomes (blood loss, platelet counts) comparing dosing strategies, not a primary pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q) for heparin. |
| popPK | Rider_1997 | irrelevant | 0 | 0 | The paper focuses on the anti-HIV-1 mechanism of action and in-vitro binding of heparin, not on pharmacokinetic disposition parameters. |
| PD | Rider_1997 | not_relevant | 3 | 4 | The text is a review/summary that mentions a single EC50 value (5 microg/ml) for in vitro HIV-1 inhibition but does not report a full dose-response curve, PK/PD model, or detailed pharmacodynamic analysis. |
| popPK | Robson_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bivalirudin, with heparin serving only as a comparator for bleeding outcomes without reported PK parameters. |
| PGx | Rogenhofer_2017 | not_relevant | 0 | 0 | The study reports a clinical outcome (miscarriage rate) rather than a pharmacokinetic or pharmacodynamic parameter of heparin. |
| PGx | Rüfer_2003 | not_relevant | 0 | 0 | The text is a general review of anticoagulation therapy for venous thromboembolism and does not discuss any gene variants or pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Saavedra_2006 | not_relevant | 0 | 0 | The paper discusses regulatory approval and interchangeability of biogeneric heparin, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Schmitt_2015 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of inclacumab and pharmacodynamic interaction with heparin, without reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for heparin. |
| PGx | Stöllberger_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (carbamazepine affecting rivaroxaban) and does not investigate pharmacogenomic variants or their effect on heparin. |
| PGx | Sylvers-Davie_2021 | not_relevant | 0 | 0 | The paper investigates the interaction between angiopoietin-like proteins and lipases, not the pharmacokinetics or pharmacodynamics of heparin. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The study is a clinical cohort comparing treatment strategies for hypertriglyceridemia-induced acute pancreatitis and does not report pharmacokinetic parameters for heparin. |
| PGx | Tang_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of paclitaxel resistance reversal by CRM197 in ovarian cancer cells, not the effect of a gene variant on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Underwood_2025 | not_relevant | 0 | 0 | The paper investigates stabilin-2 ligands and thrombosis risk, not the pharmacokinetics or pharmacodynamics of heparin therapy. |
| popPK | Upchurch_2001 | irrelevant | 0 | 0 | The study investigates the chemical interaction between heparin and nitric oxide (mechanistic/chemical), not pharmacokinetic disposition parameters. |
| PGx | Vandell_2017 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on warfarin and edoxaban, not heparin. |
| PGx | Vos_2019 | not_relevant | 0 | 0 | The paper investigates genetic variations in the RSV virus G-protein and their association with disease severity, not human pharmacogenomics or heparin pharmacokinetics/pharmacodynamics. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial comparing rivaroxaban and enoxaparin, and does not report results on pharmacogenomic effects on heparin PK/PD. |
| PGx | Westmark_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of Factor IX variants, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of heparin. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper reports a genetic variant affecting LPL enzyme activity and lipid metabolism, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Xi_2023 | not_relevant | 0 | 0 | The paper reports protein engineering of N-sulfotransferase for heparin biosynthesis, not the effect of human gene variants on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Xu_1992 | not_relevant | 0 | 0 | The paper analyzes fibroblast growth factor receptor isoforms and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_heparin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
