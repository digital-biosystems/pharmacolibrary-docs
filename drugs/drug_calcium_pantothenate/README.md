<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;calcium pantothenate&quot;}]"></div>

# calcium pantothenate

- **generic name:** calcium pantothenate
- **ATC codes:** `A11HA31`, `D03AX04`
- **DrugBank:** [DB01783](https://go.drugbank.com/drugs/DB01783)
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

**Description.** Pantothenic acid, also called pantothenate or vitamin B5 (a B vitamin), is a water-soluble vitamin discovered by Roger J. Williams in 1919. For many animals, pantothenic acid is an essential nutrient as it is required to synthesize coenzyme-A (CoA), as well as to synthesize and metabolize proteins, carbohydrates, and fats. Pantothenic acid is the amide between pantoic acid and β-alanine and commonly found as its alcohol analog, the provitamin panthenol, and as calcium pantothenate. Small quantities of pantothenic acid are found in nearly every food, with high amounts in whole-grain cereals, legumes, eggs, meat, royal jelly, avocado, and yogurt. Pantothenic acid is an ingredient in some hair and skin care products. Only the dextrorotatory (D) isomer of pantothenic acid possesses biological activity. while the levorotatory (L) form may antagonize the effects of the dextrorotatory isomer.

**Indication.** Studied for the treatment of many uses such as treatment of testicular torsion, diabetic ulceration, wound healing, acne, obesity, diabetic peripheral polyneuropathy. It has also been investigated for its hypolipidemic effects and as cholesterol lowering agent.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 08:21 | 6:42 | 0/0/0 | 1/0/0 | 0/0/0 | 65,441/1,879 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 4/25 | 26/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [de_2022](drugs/drug_calcium_pantothenate/pd_de_2022_parasitemia.md) | de Vries LE et al., Preclinical characterization and target…, Nature communications (2022) | [10.1038/s41467-022-29688-5](https://doi.org/10.1038/s41467-022-29688-5) |

## Coverage

- **PubMed hits:** 140 matched, 95 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taylor_1976.pdf` | Taylor T et al., Use of pharmacokinetics to predict the…, Research in veterinary scie… (1976) | popPK | 8 | not captured | [1265350](https://pubmed.ncbi.nlm.nih.gov/1265350) | The paper describes a compartmental PK model for pantothenate in dogs, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| `Barbarat_1986.pdf` | Barbarat B et al., Pantothenate-sodium cotransport in rena…, The Journal of biological c… (1986) | pd | 4 | not captured | [3771539](https://www.ncbi.nlm.nih.gov/pubmed/3771539) | metadata signals extractable PD data (sigmoid) |
| `Santhaseelan_2022.pdf` | Santhaseelan H et al., Bioactive Efficacy of Novel Carboxylic…, Metabolites (2022) | pd | 4 | [10.3390/metabo12111094](https://doi.org/10.3390/metabo12111094) | [36355177](https://www.ncbi.nlm.nih.gov/pubmed/36355177) | metadata signals extractable PD data (IC50) |
| `Uuh-Narvaez_2024.pdf` | Uuh-Narvaez JJ et al., Mechanistic in vitro study of the effec…, Journal of food science (2024) | pd | 4 | [10.1111/1750-3841.17476](https://doi.org/10.1111/1750-3841.17476) | [39437304](https://www.ncbi.nlm.nih.gov/pubmed/39437304) | metadata signals extractable PD data (IC50) |
| `Walimbe_2025.pdf` | Walimbe AS et al., Expanded Clinical Phenotype and the Rol…, American journal of medical… (2025) | pgx | 5 | [10.1002/ajmg.a.64014](https://doi.org/10.1002/ajmg.a.64014) | [39898461](https://www.ncbi.nlm.nih.gov/pubmed/39898461) | metadata signals extractable PGX data (SLC5A6) |

<sub>queue written 2026-09-16T08:20:48.672782+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2016 | irrelevant | 0 | 0 | The study focuses on Lorenzo's oil (oleic and erucic acids) in adrenoleukodystrophy and does not involve calcium pantothenate. |
| PD | Ahmed_2016 | not_relevant | 0 | 0 | The paper analyzes the exposure-response relationship for Lorenzo's oil (erucic acid), not calcium pantothenate. |
| popPK | Barbarat_1986 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| PD | Barbarat_1986 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of pantothenate-sodium cotransport in renal membranes, not on pharmacodynamic exposure-response or dose-response relationships for calcium pantothenate. |
| popPK | Batalha_2021 | irrelevant | 0 | 0 | The study analyzes longitudinal changes in B-vitamin concentrations in human milk and does not report pharmacokinetic parameters for calcium pantothenate. |
| PGx | Belhaj_2022 | not_relevant | 0 | 0 | The paper studies the effect of AMPK gene variants on plasma pantothenic acid levels in mice, not the pharmacokinetics or pharmacodynamics of the drug calcium pantothenate. |
| PGx | Bocca_2018 | not_relevant | 0 | 0 | The paper investigates the metabolomic signature of OPA1 gene disruption in mouse fibroblasts and does not study the pharmacokinetics or pharmacodynamics of the drug calcium_pantothenate. |
| PGx | Bravo-Alonso_2023 | not_relevant | 0 | 0 | The paper describes a genetic defect in the biosynthesis of Coenzyme A (an endogenous metabolite) and does not report pharmacokinetic or pharmacodynamic effects of the drug calcium_pantothenate. |
| PGx | Brezavar_2019 | not_relevant | 0 | 0 | The paper discusses the incidence of Pantothenate Kinase-Associated Neurodegeneration (PKAN) caused by PANK2 variants, not the pharmacogenomics of the drug calcium pantothenate. |
| popPK | Carneiro_2022 | irrelevant | 0 | 0 | The study is an NMR metabolomics analysis of palladium compounds and cisplatin, where pantothenate is only mentioned as a metabolite, not as the subject drug for PK parameter estimation. |
| PD | Carneiro_2022 | not_relevant | 0 | 0 | The paper studies the metabolomic effects of Pd2Spermine and Cisplatin, not calcium pantothenate, and does not report any exposure-response or dose-response PD parameters for the target drug. |
| PGx | Cavestro_2023 | not_relevant | 0 | 0 | The paper is a review of inherited disorders of Coenzyme A biosynthesis and does not report pharmacogenomic effects on the PK/PD of calcium pantothenate. |
| PGx | Cavestro_2026 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of leriglitazone in a mouse model of COASY dysfunction, not the pharmacogenomic impact of a gene variant on the PK/PD of calcium_pantothenate. |
| PGx | Chen_2019 | not_relevant | 0 | 0 | The paper reviews the pathogenesis of a genetic disease (PKAN) caused by PANK2 variants, not the pharmacogenomics of calcium pantothenate as a drug. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of omeprazole, not calcium_pantothenate. |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for omeprazole, not calcium pantothenate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PZ-2891, not calcium_pantothenate. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper investigates PZ-2891, not calcium pantothenate, and reports only qualitative efficacy and standard PK parameters without a quantitative exposure-response model. |
| PGx | Cheng_2013 | not_relevant | 0 | 0 | The paper discusses CYP2D6 and pantothenic acid levels in a mouse model, but does not report pharmacokinetic or pharmacodynamic parameters for the drug calcium_pantothenate. |
| popPK | Chitti_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antimycobacterial agents targeting pantothenate synthetase, not a pharmacokinetic study of calcium pantothenate. |
| PD | Chitti_2022 | not_relevant | 0 | 0 | The paper reports IC50/IC90 values for novel antimycobacterial compounds targeting pantothenate synthetase, but does not report a pharmacodynamic or exposure-response relationship for the drug calcium pantothenate itself. |
| popPK | Devi_2015 | irrelevant | 0 | 0 | The paper focuses on in vitro enzyme inhibition of Mycobacterium tuberculosis pantothenate synthetase, not the pharmacokinetics of calcium pantothenate. |
| PGx | Ellers_2008 | not_relevant | 0 | 0 | The paper studies temperature-induced gene expression in a collembolan and mentions pantothenate kinase as a metabolic gene, but does not report pharmacogenomic effects on the PK/PD of the drug calcium pantothenate. |
| popPK | Fletcher_2016 | irrelevant | 0 | 0 | The paper is an in-vitro study on antimalarial compounds targeting the CoA synthesis pathway and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Fletcher_2016 | not_relevant | 0 | 0 | The paper reports IC50 values for chemically diverse compounds targeting the CoA synthesis pathway, but does not report a pharmacodynamic model or exposure-response relationship for calcium pantothenate. |
| PGx | Gangwar_2021 | not_relevant | 0 | 0 | The paper studies the effect of calcium pantothenate as a cell culture medium component on IgG production, not the pharmacokinetics or pharmacodynamics of calcium pantothenate as a drug in humans. |
| popPK | Geary_1985 | irrelevant | 0 | 0 | The paper is an in-vitro study on Plasmodium falciparum growth inhibition and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Geary_1985 | not_relevant | 0 | 0 | The paper reports IC50 values for antimetabolites (riboflavin, nicotinamide, etc.) against Plasmodium falciparum, but does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| popPK | Gil_2019 | irrelevant | 0 | 0 | The paper is a review of dairy consumption and health outcomes, not a pharmacokinetic study of calcium pantothenate. |
| PD | Gil_2019 | not_relevant | 0 | 0 | The paper is a review of epidemiological studies on dairy consumption and chronic disease risk, containing no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for calcium pantothenate. |
| popPK | Giuliano_2024 | irrelevant | 0 | 0 | The paper is a CRISPR-based functional genomics study of Toxoplasma gondii and contains no pharmacokinetic data for calcium pantothenate. |
| PD | Giuliano_2024 | not_relevant | 0 | 0 | The paper describes CRISPR-based functional profiling of the Toxoplasma gondii genome and does not contain any pharmacodynamic or exposure-response analysis for calcium pantothenate. |
| PGx | González-Domínguez_2022 | not_relevant | 0 | 0 | The paper investigates the association between ApoE genotype and endogenous pantothenic acid levels in the context of cognitive decline, not the pharmacokinetics or pharmacodynamics of the drug calcium pantothenate. |
| popPK | Guillard_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zinc salts (zinc sulfate and zinc pantothenate), not calcium pantothenate. |
| popPK | Hao_2024 | irrelevant | 0 | 0 | The study focuses on the metabolomic profile of Phellodendron amurense in rats and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Hao_2024 | not_relevant | 0 | 0 | The paper focuses on metabolomics and qualitative anti-rheumatoid arthritis effects of a herbal decoction, reporting no numeric concentration-effect or dose-response parameters for calcium pantothenate. |
| PGx | Heckmann_2024 | not_relevant | 0 | 0 | The paper reports on SLC25A42 deficiency and the therapeutic effect of pantothenic acid on CoA levels, but does not report pharmacogenomic effects on the PK/PD of calcium_pantothenate. |
| popPK | Jeong_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on PKAN pathogenesis and treatment with 4'-phosphopantetheine, not a pharmacokinetic study of calcium pantothenate, and contains no PK parameters. |
| PD | Jeong_2019 | not_relevant | 2 | 1 | The paper reports qualitative rescue of metabolic biomarkers by 4'-phosphopantetheine in a mouse model but does not provide numeric dose-response or concentration-effect PD parameters (e.g., Emax, EC50) or a formal PK/PD model. |
| PGx | Jonczyk_2008 | not_relevant | 0 | 0 | The paper studies pantothenate biosynthesis in Arabidopsis plants, not the pharmacokinetics or pharmacodynamics of calcium pantothenate in humans. |
| PGx | Kalecký_2026 | not_relevant | 0 | 0 | The paper investigates B-vitamin status and one-carbon metabolism gene polymorphisms in neurodegenerative diseases, not the pharmacokinetics or pharmacodynamics of calcium pantothenate. |
| popPK | Kittichaiworakul_2026 | irrelevant | 0 | 0 | The paper investigates the effects of Piper sarmentosum extract on gut microbiota and obesity in rats, and does not study calcium_pantothenate or report any pharmacokinetic parameters for it. |
| PD | Kittichaiworakul_2026 | not_relevant | 0 | 0 | The paper investigates the effects of Piper sarmentosum extract on gut microbiota and obesity in rats and does not contain any pharmacodynamic or exposure-response analysis for calcium pantothenate. |
| popPK | Kukreja_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BI 1595043, not calcium_pantothenate, which is only mentioned as a metabolite pathway component. |
| PD | Kukreja_2025 | not_relevant | 0 | 0 | The paper describes a study of BI 1595043 (a vanin inhibitor) and mentions the inhibition of pantetheine conversion to pantothenic acid, but it does not report a pharmacodynamic model or numeric PD parameters for calcium pantothenate itself. |
| PGx | Kuo_2007 | not_relevant | 0 | 0 | The paper describes a disease model and the physiological effects of nutrient deprivation, not the pharmacokinetics or pharmacodynamics of calcium pantothenate as a drug. |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The study is a metabolomics investigation of a traditional medicine's mechanism of action, not a pharmacokinetic study of calcium pantothenate, and contains no PK parameters. |
| PD | Lang_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional medicine (Wuwei Shexiang pill) using metabolomics and does not report any pharmacokinetic or pharmacodynamic exposure-response data for calcium pantothenate. |
| popPK | Levine_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Vitamin C, not calcium pantothenate. |
| PD | Levine_1996 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and dose-response data for Vitamin C, not calcium pantothenate. |
| PGx | Lim_2012 | not_relevant | 0 | 0 | The paper reports genetic mutations in PANK2 associated with a neurodegenerative disease and the outcome of deep brain stimulation, not the pharmacokinetics or pharmacodynamics of calcium pantothenate as a drug. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on circRNA in Parkinson's disease and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of a circRNA (circ-Pank1) in Parkinson's disease and does not report any pharmacokinetic or pharmacodynamic data for calcium pantothenate. |
| popPK | Lu_2015 | irrelevant | 0 | 0 | The paper describes molecular biology and enzyme kinetics of AHAS in bacteria, containing no pharmacokinetic data for calcium pantothenate. |
| PD | Lu_2015 | not_relevant | 0 | 0 | The paper describes enzyme kinetics (Michaelis-Menten/Lineweaver-Burk) and bacterial growth profiles for *R. eutropha*, not pharmacodynamic exposure-response relationships for calcium pantothenate. |
| PGx | Lu_2026 | not_relevant | 0 | 0 | The paper investigates the causal relationship between gut microbiota and nasal polyps via Mendelian Randomization and does not report pharmacogenomic effects on the PK or PD of calcium_pantothenate. |
| PGx | Lv_2020 | not_relevant | 0 | 0 | The paper investigates metabolomics in bovine milk related to beta-casein variants, not the pharmacokinetics or pharmacodynamics of the drug calcium pantothenate in humans. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | The paper is a pharmacodynamic and metabolomics study on a traditional Chinese medicine decoction, and pantothenic acid is only mentioned as an endogenous metabolite biomarker, not as a subject drug for PK analysis. |
| PD | Ma_2022 | not_relevant | 0 | 0 | The paper investigates a traditional Chinese medicine decoction (Mulisan) and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| popPK | Makarov_2020 | irrelevant | 0 | 0 | The paper is a cheminformatics analysis of antitubercular compounds and does not involve calcium_pantothenate or pharmacokinetic parameters. |
| PD | Makarov_2020 | not_relevant | 0 | 0 | The paper is a cheminformatics analysis of chemical properties of antitubercular compounds and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and metabolomics, not calcium_pantothenate. |
| PD | McCune_2023 | not_relevant | 0 | 0 | The paper focuses on predicting busulfan clearance using metabolomics and does not report any pharmacodynamic or exposure-response relationship for calcium pantothenate. |
| PGx | Mehranfar_2024 | not_relevant | 0 | 0 | The paper investigates lipidomic changes in TANGO2-deficient cells and the effect of pantothenic acid supplementation on lipid profiles, but it does not report pharmacokinetic or pharmacodynamic parameters of calcium_pantothenate itself. |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The paper investigates the interaction between vitamin B12 and cefiderocol in bacteria, which is unrelated to the pharmacokinetics of calcium pantothenate. |
| PD | Mezcord_2026 | not_relevant | 0 | 0 | The paper investigates the interaction between Vitamin B12 and cefiderocol in bacteria, not the pharmacodynamics of calcium pantothenate. |
| popPK | Moreira-Filho_2021 | irrelevant | 0 | 0 | The paper is a review on schistosomiasis drug discovery and does not contain any pharmacokinetic data for calcium_pantothenate. |
| PD | Moreira-Filho_2021 | not_relevant | 0 | 0 | The paper is a review on drug discovery methods for schistosomiasis and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| PGx | Munuera-Cabeza_2022 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of pantothenate on cellular phenotypes in KAT6A syndrome models, not the pharmacokinetics or pharmacodynamics of pantothenate itself. |
| PGx | Nourbakhsh_2025 | not_relevant | 0 | 0 | The paper describes a case of GLYAT deficiency treated with pantothenic acid, but it does not report a pharmacogenomic effect on the PK or PD parameters of calcium_pantothenate. |
| popPK | Nyambo_2023 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro study on medicinal plants targeting pantothenate kinase, not a pharmacokinetic study of calcium pantothenate. |
| PD | Nyambo_2023 | not_relevant | 0 | 0 | The paper evaluates plant extracts and a single compound (norajmaline) against bacteria and cancer cells using MIC/IC50 and in-silico docking; it does not report a pharmacodynamic model or exposure-response relationship for calcium pantothenate. |
| popPK | Pereira_2021 | irrelevant | 0 | 0 | The paper is a review on seaweed diets for neurodegenerative diseases and does not contain any pharmacokinetic data for calcium pantothenate. |
| PD | Pereira_2021 | not_relevant | 0 | 0 | The paper is a review on seaweed diets for neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| PGx | Pereira_2024 | not_relevant | 0 | 0 | The paper reports a therapeutic response to pantothenate supplementation in PKAN patients, not a pharmacogenomic effect on the PK/PD parameters of the drug itself. |
| popPK | Pettersen_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pantoprazole, not calcium_pantothenate. |
| PD | Pettersen_2009 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for pantoprazole, not calcium pantothenate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Ponka_2002 | not_relevant | 0 | 0 | The paper reviews genetic causes of hereditary iron overload and does not report pharmacokinetic or pharmacodynamic effects of calcium_pantothenate. |
| PGx | Ponka_2004 | not_relevant | 0 | 0 | The paper reviews hereditary iron homeostasis disorders and mentions a pantothenate kinase gene (PANK2) mutation, but it does not report pharmacokinetic or pharmacodynamic effects of the drug calcium_pantothenate. |
| popPK | Prasad_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular transport kinetics (Km, Vmax) in cell lines, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for calcium pantothenate. |
| PD | Prasad_1997 | not_relevant | 0 | 0 | The paper reports in vitro transport kinetics (Km, Vmax) for a cellular transporter, not a pharmacodynamic exposure-response or dose-response relationship for the drug calcium pantothenate. |
| popPK | Puranik_2018 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study on tuberculosis drug candidates targeting pantothenate kinase, not a pharmacokinetic study of calcium pantothenate. |
| PD | Puranik_2018 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel dihydrorugosaflavonoid derivatives, not for calcium pantothenate, and does not contain any pharmacodynamic or exposure-response analysis for the specified drug. |
| popPK | Puranik_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antimycobacterial compounds targeting pantothenate kinase, not a pharmacokinetic study of calcium pantothenate. |
| PD | Puranik_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for novel podocarflavone analogs, not for calcium pantothenate, and does not describe a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Rothmann_2013 | not_relevant | 0 | 0 | The paper investigates metabolic engineering in E. coli and the biosynthesis of CoA analogues, not the pharmacogenomics of calcium pantothenate in humans. |
| popPK | Samala_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on pantothenate synthetase inhibitors, not a pharmacokinetic study of calcium pantothenate. |
| PD | Samala_2014 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and antimicrobial activity (MIC) for novel synthetic compounds, not pharmacodynamic or exposure-response data for the drug calcium pantothenate. |
| popPK | Santhaseelan_2022 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Santhaseelan_2022 | not_relevant | 0 | 0 | The paper investigates the antibacterial activity of a carboxylic acid from Pseudomonas aeruginosa, not calcium pantothenate, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| PGx | Sebaa_2023 | not_relevant | 0 | 0 | The paper investigates metabolomics biomarkers for diagnosing VLCADD and does not report pharmacogenomic effects on the PK/PD of calcium pantothenate. |
| popPK | Sharma_2021 | irrelevant | 0 | 0 | The paper focuses on the discovery of pantothenate kinase inhibitors and reports in-vitro IC50 values, not pharmacokinetic parameters for calcium pantothenate. |
| PD | Sharma_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for PANK3 inhibition, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system with numeric PD parameters like Emax or EC50. |
| popPK | Simão-Gurge_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on malaria parasites and mosquito PanK activity, not a pharmacokinetic study of calcium pantothenate. |
| popPK | Song_1994 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study of pantothenate kinase in E. coli, not a pharmacokinetic study of calcium pantothenate. |
| PD | Song_1994 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics of pantothenate kinase from E. coli, not a pharmacodynamic exposure-response relationship for the drug calcium pantothenate in a biological system. |
| popPK | Subramanian_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BBP-671 (a pantothenate kinase activator), not calcium pantothenate, and does not report PK parameters for the target drug. |
| PD | Subramanian_2024 | not_relevant | 4 | 2 | The paper describes PK/PD properties and qualitative improvements in CoA and motor function for BBP-671, but the provided text does not contain specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data. |
| PGx | Szórády_1987 | not_relevant | 0 | 0 | The paper studies acetylator phenotypes using sulfadimidine as a probe drug and only speculates about a link to pantothenic acid balance, without reporting pharmacokinetic or pharmacodynamic data for calcium pantothenate. |
| PGx | Talaverón-Rey_2023 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of alpha-lipoic acid on cellular models of PANK2 deficiency, not the pharmacokinetics or pharmacodynamics of calcium pantothenate. |
| popPK | Taylor_1976 | relevant | 8 | 2 | The paper describes a compartmental PK model for pantothenate in dogs, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| PGx | Tejera_2020 | not_relevant | 0 | 0 | The paper focuses on the metabolic modeling and culture media design for Campylobacter jejuni, not on human pharmacogenomics or the pharmacokinetics/pharmacodynamics of calcium pantothenate. |
| popPK | Trepka_2025 | irrelevant | 0 | 0 | The paper focuses on gut microbiome interactions with fluoropyrimidines (5-FU) and does not study calcium_pantothenate or report its pharmacokinetic parameters. |
| PD | Trepka_2025 | not_relevant | 0 | 0 | The paper focuses on gut microbiome interactions with fluoropyrimidines (5-FU) and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| popPK | Tsuji_1967 | irrelevant | 0 | 0 | The paper describes a microbiological assay method for vitamin potency and does not report any pharmacokinetic parameters for calcium pantothenate. |
| PD | Tsuji_1967 | not_relevant | 3 | 0 | The paper describes a microbiological assay method for potency calculation (slope-ratio) rather than a pharmacodynamic exposure-response relationship in a biological system, and no specific numeric PD parameters (like Emax or EC50) are reported in the text. |
| popPK | Uuh-Narvaez_2024 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Uuh-Narvaez_2024 | not_relevant | 0 | 0 | The paper studies the effect of Cucurbita moschata on carbohydrate digestive enzymes and does not mention calcium pantothenate or report any pharmacodynamic parameters for it. |
| popPK | Via_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of pyrazinamide and pyrazinoic acid, not calcium_pantothenate. |
| PD | Via_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and bioactivation of pyrazinamide/pyrazinoic acid, not calcium pantothenate, and does not report specific numeric PD parameters for the target drug. |
| PGx | Walimbe_2025 | not_relevant | 0 | 0 | The paper describes a genetic disorder affecting the transport of pantothenic acid (a nutrient/vitamin) and its clinical management, but does not report pharmacokinetic or pharmacodynamic parameters of the drug calcium_pantothenate in the context of a pharmacogenomic study. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is a metabolomics study on a Chinese herbal prescription for diabetic retinopathy and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper focuses on identifying quality markers for a Chinese herbal prescription using metabolomics and does not report any pharmacodynamic or exposure-response analysis for calcium pantothenate. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper is a metabolomics study on flavonoids from Glycyrrhiza in rats, and pantothenate is only mentioned as a metabolic pathway, not as a subject drug with PK parameters. |
| PD | Wei_2018 | not_relevant | 0 | 0 | The paper studies flavonoids from Glycyrrhiza, not calcium pantothenate, and reports metabolomics biomarkers rather than a quantitative exposure-response or dose-response relationship with numeric PD parameters. |
| PGx | Wijesingha_2023 | not_relevant | 0 | 0 | The paper studies the canalization of tomato fruit metabolism in plants, not the pharmacokinetics or pharmacodynamics of calcium pantothenate in humans. |
| popPK | Wittwer_1985 | irrelevant | 2 | 3 | The study reports pharmacokinetic parameters for pantothenate derived from the prodrug pantethine, not for calcium pantothenate, which is only mentioned as a background supplement in one patient. |
| popPK | Woods_1995 | irrelevant | 0 | 0 | The paper describes an in-vitro ELISA assay for Cryptosporidium parvum and mentions pantothenic acid only as a cell culture supplement, containing no pharmacokinetic data for calcium pantothenate. |
| PD | Woods_1995 | not_relevant | 0 | 0 | The paper describes an in vitro assay for Cryptosporidium parvum and mentions dose-response curves for antimicrobials, but does not report any pharmacodynamic data or parameters for calcium pantothenate. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | The paper is a systems biology study on liver metabolism and the Warburg effect in mice, with no pharmacokinetic analysis or parameters for calcium pantothenate. |
| PD | Wu_2017 | not_relevant | 0 | 0 | The paper focuses on flux balance analysis of metabolic networks in miR-122a deficient mice and does not report any pharmacodynamic or exposure-response relationship for calcium pantothenate. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The paper studies genetic selection for body size in pigs and mentions pantothenate biosynthesis pathways, but does not report pharmacokinetic or pharmacodynamic effects of calcium pantothenate. |
| PGx | Wydrych_2025 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of neurodegeneration with brain iron accumulation (NBIA) and pantothenate kinase deficiency, but does not report pharmacokinetic or pharmacodynamic effects of calcium pantothenate administration. |
| popPK | Yadav_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on benzimidazole derivatives and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Yadav_2018 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzimidazole derivatives, not pharmacodynamic or exposure-response data for calcium pantothenate. |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The paper investigates the causal relationship between metabolites and endometriosis subtypes using Mendelian randomization, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of calcium pantothenate. |
| popPK | Yang_2011 | irrelevant | 0 | 0 | The paper focuses on the discovery of inhibitors for Mycobacterium tuberculosis pantothenate synthetase and does not report pharmacokinetic parameters for calcium pantothenate. |
| PD | Yang_2011 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for a bacterial target, not a pharmacodynamic (exposure-response) relationship for the drug calcium pantothenate in a biological system. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper is a network pharmacology and metabolomics study on Artemisia capillaris for jaundice, not a pharmacokinetic study of calcium pantothenate. |
| PD | Yang_2023 | not_relevant | 0 | 0 | The paper studies the herbal extract Artemisia capillaris, not the specific drug calcium pantothenate, and reports only qualitative/percentage changes in biomarkers without a formal dose-response or concentration-effect model for the target compound. |
| popPK | Yu_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects and tissue distribution of costunolide and dehydrocostus lactone from Vladimiriae Radix, not the pharmacokinetics of calcium pantothenate. |
| PD | Yu_2021 | not_relevant | 0 | 0 | The paper studies the therapeutic effects of Vladimiriae Radix (a herbal medicine) on ulcerative colitis and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| popPK | Zhang_2006 | irrelevant | 0 | 0 | The paper is a biochemical study of pantothenate kinase 2 enzyme isoforms and mutations, not a pharmacokinetic study of calcium pantothenate. |
| PD | Zhang_2006 | not_relevant | 0 | 0 | The paper reports in vitro biochemical enzyme kinetics (IC50 for feedback inhibition) of the PANK2 protein, not a pharmacodynamic exposure-response or dose-response relationship for the drug calcium pantothenate in a biological system. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on cannabidiol in Parkinson's disease where pantothenate is only mentioned as a metabolic pathway, not as a subject drug for PK analysis. |
| PD | Zhao_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of cannabidiol in Parkinson's disease using metabolomics and does not report any pharmacodynamic or exposure-response data for calcium pantothenate. |
| popPK | Zhaxi_2026 | irrelevant | 0 | 0 | The paper is a multi-omics study on chicken gut microbiota and muscle fatty acid composition, not a pharmacokinetic study of calcium pantothenate. |
| popPK | de_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the antimalarial drug MMV693183, not calcium pantothenate. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_calcium_pantothenate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
