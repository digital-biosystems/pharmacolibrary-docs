# alanyl glutamine

- **generic name:** alanyl glutamine
- **ATC codes:** `B05XB02`
- **DrugBank:** [DB11876](https://go.drugbank.com/drugs/DB11876)
- **groups:** investigational

## About

**Description.** Alanyl Glutamine is under investigation in clinical trial NCT00338221 (Clinical Trial of Alanyl-Glutamine or Glycine in Children With Persistent Diarrhea or Malnutrition).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 20:25 | 6:27 | 0/1/0 | 0/1/0 | 0/0/0 | 85,227/6,871 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 1/19 | 17/4 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Albers_1988](drugs/drug_alanyl_glutamine/AlanylGlutamine_Albers1988_reference.md) | Albers S et al., Availability of amino acids supplied in…, Clinical science (London, E… (1988) | [10.1042/cs0750463](https://doi.org/10.1042/cs0750463) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Momin_2022](drugs/drug_alanyl_glutamine/pd_Momin_2022_FA.md) | Momin N et al., Maximizing response to intratumoral imm…, Nature communications (2022) | [10.1038/s41467-021-27390-6](https://doi.org/10.1038/s41467-021-27390-6) |

## Coverage

- **PubMed hits:** 29 matched, 27 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Albers_1988.pdf` | Albers S et al., Availability of amino acids supplied in…, Clinical science (London, E… (1988) | popPK | 9 | [10.1042/cs0750463](https://doi.org/10.1042/cs0750463) | [3254762](https://pubmed.ncbi.nlm.nih.gov/3254762) | The study reports quantitative PK parameters (half-life and volume of distribution) for alanyl-glutamine in humans, with specific numeric values provided in the abstract text. |
| `Albers_1989.pdf` | Albers S et al., Availability of amino acids supplied by…, Clinical science (London, E… (1989) | popPK | 9 | [10.1042/cs0760643](https://doi.org/10.1042/cs0760643) | [2736882](https://pubmed.ncbi.nlm.nih.gov/2736882) | The abstract explicitly reports quantitative metabolic clearance rates and total body plasma clearances for alanyl-glutamine in healthy volunteers. |
| `Berg_2005.pdf` | Berg A et al., Elimination kinetics of L-alanyl-L-glut…, Amino acids (2005) | popPK | 9 | [10.1007/s00726-005-0230-9](https://doi.org/10.1007/s00726-005-0230-9) | [16049639](https://pubmed.ncbi.nlm.nih.gov/16049639) | The study reports quantitative PK parameters (half-life of 0.26 hours) for alanyl-glutamine in humans, though volume of distribution is described qualitatively rather than with a specific numeric value. |
| `Hübl_1989.pdf` | Hübl W et al., Influence of molecular structure and pl…, Metabolism: clinical and ex… (1989) | popPK | 9 | [10.1016/0026-0495(89)90143-1](https://doi.org/10.1016/0026-0495(89)90143-1) | [2761422](https://pubmed.ncbi.nlm.nih.gov/2761422) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for alanyl-glutamine in humans, with specific numeric values provided in the text. |
| `Hübl_1994.pdf` | Hübl W et al., Importance of liver and kidney for the…, Metabolism: clinical and ex… (1994) | popPK | 9 | [10.1016/0026-0495(94)90051-5](https://doi.org/10.1016/0026-0495(94)90051-5) | [8084285](https://pubmed.ncbi.nlm.nih.gov/8084285) | The study reports quantitative clearance values for alanyl-glutamine in healthy volunteers and patients with liver or renal failure. |
| `Klassen_2000.pdf` | Klassen P et al., The pharmacokinetic responses of humans…, The Journal of nutrition (2000) | popPK | 8 | [10.1093/jn/130.2.177](https://doi.org/10.1093/jn/130.2.177) | [10720166](https://pubmed.ncbi.nlm.nih.gov/10720166) | The study reports pharmacokinetic responses (AUC, peak concentrations) for alanyl-glutamine, but lacks specific compartmental parameters like clearance (CL), volume (V), or half-life (t1/2) values in the provided text. |
| `Lochs_1990.pdf` | Lochs H et al., Splanchnic, renal, and muscle clearance…, Metabolism: clinical and ex… (1990) | popPK | 8 | [10.1016/0026-0495(90)90128-y](https://doi.org/10.1016/0026-0495(90)90128-y) | [2377079](https://pubmed.ncbi.nlm.nih.gov/2377079) | The study reports quantitative organ-specific clearance values (kidney, splanchnic, muscle) for alanylglutamine in humans, which are explicit disposition parameters present in the text. |

<sub>queue written 2026-09-07T20:22:13.923421+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abumrad_1989 | irrelevant | 2 | 0 | The study is an organ balance/metabolism study in dogs that reports qualitative clearance contributions and urinary excretion percentages, but does not provide quantitative compartmental PK parameters (CL, V, ka) for alanyl_glutamine. |
| popPK | Adibi_1977 | irrelevant | 0 | 0 | The study investigates glycyl-leucine, glycylglycine, and glycylsarcosine, not alanyl-glutamine. |
| popPK | Arakawa_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of L-phenylalanyl-Ψ[CS-N]-L-alanine (Phe-Ψ-Ala), not alanyl_glutamine. |
| popPK | Beffinger_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of IL-12Fc fusion proteins in glioblastoma models, not the drug alanyl_glutamine. |
| PD | Beffinger_2025 | not_relevant | 0 | 0 | The paper studies IL-12Fc, not alanyl_glutamine, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Bolleddula_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and catabolism of the antibody-drug conjugate TAK-164, not alanyl_glutamine. |
| popPK | Boyko_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of GB-115 (N-phenylhexanoylglycyltryptophan), not alanyl_glutamine. |
| popPK | Cheadle_1986 | irrelevant | 0 | 0 | The paper studies muramyl dipeptide and lead acetate in mice, not alanyl_glutamine, and reports no pharmacokinetic parameters for the target drug. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on ER remodeling and bacterial infection, unrelated to the pharmacokinetics of alanyl_glutamine. |
| popPK | Chua_2022 | irrelevant | 0 | 0 | The paper is a review on autophagy and ALS pathogenesis and does not contain any pharmacokinetic data or parameters for alanyl_glutamine. |
| popPK | Cornely_2021 | irrelevant | 0 | 0 | The paper is a conference abstract for a medical mycology meeting and contains no pharmacokinetic data for alanyl_glutamine. |
| PD | Cornely_2021 | not_relevant | 0 | 0 | The text is a conference program header and contains no pharmacodynamic data, models, or parameters for alanyl-glutamine. |
| popPK | DAngelo_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pidotimod, not alanyl_glutamine. |
| popPK | Duverne_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefixime and D-xylose, not alanyl_glutamine. |
| popPK | Ferrari_2026 | irrelevant | 0 | 0 | The paper investigates VCP modulation in C9orf72 ALS/FTD models and does not involve the drug alanyl_glutamine or report any pharmacokinetic parameters. |
| popPK | Fogler_1985 | irrelevant | 0 | 0 | The study investigates muramyl dipeptide and muramyl tripeptide phosphatidylethanolamine, not alanyl_glutamine. |
| popPK | Geißen_2025 | irrelevant | 0 | 0 | The paper describes an in-vitro enzyme-prodrug system for AMS and doxorubicin, not a pharmacokinetic study of alanyl_glutamine. |
| popPK | Gupta_2016 | irrelevant | 0 | 0 | The paper is a bioinformatics study on predicting proinflammatory epitopes and contains no pharmacokinetic data for alanyl_glutamine. |
| popPK | Hou_2013 | irrelevant | 0 | 0 | The study is an immunological investigation of alanyl-glutamine's effect on lung injury resolution in mice and does not report any pharmacokinetic parameters. |
| popPK | Katkar_2025 | irrelevant | 0 | 0 | The paper is an immunology study on macrophages and NOD2 signaling in colitis, with no pharmacokinetic data for alanyl_glutamine. |
| popPK | Kaur_2026 | irrelevant | 0 | 0 | The paper is a review of ALS pathogenesis and does not contain any pharmacokinetic data for alanyl_glutamine. |
| popPK | Kee_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of various dipeptides (including AlaGln) in rats, but alanyl_glutamine is not the subject drug and no parameters for it are reported. |
| popPK | Klassen_2000 | relevant | 8 | 2 | The study reports pharmacokinetic responses (AUC, peak concentrations) for alanyl-glutamine, but lacks specific compartmental parameters like clearance (CL), volume (V), or half-life (t1/2) values in the provided text. |
| popPK | Lall_2021 | irrelevant | 0 | 0 | The paper is a neurobiology study on C9orf72 deficiency and microglial function, unrelated to the pharmacokinetics of alanyl_glutamine. |
| popPK | Lee_2000 | irrelevant | 0 | 0 | The paper is a review of membrane transporters (specifically PepT1) and does not report pharmacokinetic parameters for alanyl_glutamine. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper investigates the molecular mechanisms of poly(GR) clearance in ALS/FTD and does not involve the drug alanyl_glutamine or report any pharmacokinetic parameters. |
| popPK | Long_2025 | irrelevant | 0 | 0 | The study focuses on antibody-drug conjugates (ADCs) with MMAE payloads, not alanyl_glutamine. |
| popPK | Lu_2019 | irrelevant | 0 | 0 | The paper investigates protein quality control mechanisms in ALS/FTD models and does not involve the drug alanyl_glutamine or report any pharmacokinetic parameters for it. |
| popPK | MacDougall_2004 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of valaciclovir, not alanyl_glutamine. |
| popPK | Maddur_2020 | irrelevant | 0 | 0 | The paper investigates the structural biology and binding affinity of staphylocoagulase to prothrombin, which is unrelated to the pharmacokinetics of alanyl_glutamine. |
| popPK | Matilla_2000 | irrelevant | 0 | 0 | The study focuses on the effects of alanyl glutamine on liver antioxidant systems and cytochrome P450 activity, not on the pharmacokinetic disposition parameters (CL, V, ka) of the drug itself. |
| popPK | Mohammad_2019 | irrelevant | 2 | 0 | The study focuses on the mechanism of citrulline generation and gut function rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for alanyl-glutamine itself. |
| popPK | Momin_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of IL-2 fusion proteins in mice, not alanyl_glutamine. |
| popPK | Moore_2020 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of alanyl-glutamine on gut integrity and growth, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Naglah_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and biological activity of novel peptide derivatives, not a pharmacokinetic study of alanyl_glutamine. |
| popPK | Nahata_1995 | irrelevant | 0 | 0 | The paper is a collection of abstracts for various drugs (CFOL, etoposide, ceftazidime, etc.) and does not contain any pharmacokinetic data for alanyl_glutamine. |
| PD | Nahata_1995 | not_relevant | 0 | 0 | The provided text is a generic description of a conference abstract collection and does not contain specific data, models, or parameters for alanyl-glutamine. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data or parameters for alanyl_glutamine. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not mention alanyl_glutamine or report any specific pharmacodynamic or exposure-response data. |
| popPK | Ortiz_2004 | irrelevant | 0 | 0 | The study focuses on antioxidant systems and hepatic detoxification (antipyrine clearance) rather than the pharmacokinetic disposition parameters of alanyl-glutamine itself. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacokinetic data for alanyl_glutamine. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacodynamic or exposure-response data for alanyl-glutamine. |
| popPK | Perazzo_2016 | irrelevant | 0 | 0 | The paper is a review of the endogenous dipeptide kyotorphin and its derivatives, and does not contain any pharmacokinetic data for alanyl_glutamine. |
| popPK | Rathmacher_1998 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 3-methylhistidine (a marker for muscle protein breakdown), not alanyl_glutamine. |
| popPK | Raza_2022 | irrelevant | 0 | 0 | The study investigates a glutathione analogue (psi-GSH) and its dipeptide precursor, not alanyl_glutamine, and does not report PK parameters for the target drug. |
| popPK | Sahoo_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on RNA aggregation and neurodegeneration, not a pharmacokinetic study of alanyl_glutamine. |
| popPK | Sakuma_1984 | irrelevant | 0 | 0 | The paper studies the immunological effects of muramyl dipeptide (MDP), not the pharmacokinetics of alanyl_glutamine. |
| popPK | Schmelter_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on glaucoma neuroprotection involving a CDR1 peptide and ANP32A, with no pharmacokinetic analysis or parameters for alanyl_glutamine. |
| popPK | Schuette_1994 | irrelevant | 0 | 0 | The study investigates the bioavailability of magnesium diglycinate and magnesium oxide, not alanyl_glutamine. |
| popPK | Shi_2008 | irrelevant | 0 | 0 | The paper studies a radiolabeled bombesin analog for imaging, not the pharmacokinetics of alanyl_glutamine. |
| popPK | Shi_2018 | irrelevant | 0 | 0 | The paper is a mechanistic study on C9ORF72 in ALS/FTD and does not report pharmacokinetic parameters for alanyl_glutamine. |
| popPK | Shu_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on neurodegeneration (ALS/FTD) and does not involve the drug alanyl_glutamine or pharmacokinetic parameters. |
| popPK | Steinmetz_1998 | irrelevant | 0 | 0 | The paper is a molecular biology study on apolipoprotein AIV in chickens and contains no pharmacokinetic data for alanyl_glutamine. |
| popPK | Stellato_1988 | irrelevant | 0 | 0 | The study investigates muramyl dipeptide (MDP) and bacterial clearance in rats, not the pharmacokinetics of alanyl_glutamine. |
| popPK | Teitelbaum_2026 | irrelevant | 0 | 0 | The paper is a review of peritoneal membrane preservation strategies and does not report quantitative pharmacokinetic parameters for alanyl-glutamine. |
| popPK | Walder_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of adamantylamide dipeptide (AdDP) in mice, not alanyl_glutamine. |
| popPK | Wang_2012 | irrelevant | 0 | 0 | The study focuses on saquinavir prodrugs and does not involve alanyl_glutamine. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of disitamab vedotin and MMAE, not alanyl_glutamine. |
| popPK | Webster_2025 | irrelevant | 0 | 0 | The paper investigates RuvBL1/2 and C9orf72-related dipeptide repeat proteins in ALS/FTD models and does not study the pharmacokinetics of alanyl_glutamine. |
| PGx | Wei_2026 | not_relevant | 0 | 0 | The paper describes the enzymatic synthesis and optimization of alanyl-glutamine production, not the pharmacokinetics or pharmacodynamics of the compound in humans or animals. |
| popPK | Weryński_2006 | irrelevant | 0 | 0 | The study investigates peritoneal dialysis solutions containing various amino acids and dipeptides, but does not report pharmacokinetic parameters for the specific drug alanyl_glutamine. |
| popPK | Weston_2024 | irrelevant | 0 | 0 | The study investigates mammary amino acid metabolism in dairy cows using individual amino acids (Ala, Gln, Gly) rather than the specific dipeptide alanyl_glutamine, and does not report pharmacokinetic parameters. |
| popPK | Williams_1994 | irrelevant | 0 | 0 | The paper studies an oxytocin antagonist (L-368,899), not alanyl_glutamine. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CAQK-PEG conjugates, not alanyl_glutamine. |
| popPK | Xu_2013 | irrelevant | 0 | 0 | The study focuses on entecavir as the subject drug and JBP485 as a co-administered agent, not alanyl_glutamine. |
| popPK | Yip_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of polatuzumab vedotin and MMAE, not alanyl_glutamine. |
| popPK | Yuan_2023 | irrelevant | 0 | 0 | The paper studies the topical delivery of curcumin using nanostructured lipid carriers and does not involve alanyl_glutamine or report any pharmacokinetic parameters for it. |
| popPK | Zhu_2020 | irrelevant | 0 | 0 | The paper describes the metabolic engineering of E. coli for the biosynthesis of alanyl-glutamine, not a pharmacokinetic study of the drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_alanyl_glutamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
