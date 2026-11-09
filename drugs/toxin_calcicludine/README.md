<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Calcicludine&quot;}]"></div>

# Calcicludine

- **generic name:** Calcicludine
- **T3DB:** [T3D2540](http://www.t3db.ca/toxins/T3D2540) · **PubChem:** none

## About

Calcicludine is a peptide toxin produced by the Eastern green mamba (Dendroaspis angusticeps). It inhibits high-voltage-activated calcium channels, especially of the L-type.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Calcicludine is a peptide toxin produced by the Eastern green mamba (Dendroaspis angusticeps).
- **Mechanism of toxicity:** Calcicludine inhibits high-voltage-activated calcium channels, especially of the L-type.
- **Health effects:** Calcicludine is neurotoxic and cardiotoxic.
- **Acute toxicity:** LD50: 3.05 mg/kg (Subcutaneous, Mouse)
LD50: 1.3 mg/kg (Intravenous, Mouse)
LD50: 0.117 (Intraperitoneal, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2540">T3DB T3D2540</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 178037-96-2</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 18:50 | 31:54 | 0/0/0 | 0/0/0 | 0/0/0 | 715,428/12,194 | einfracz / qwen3.8-27b | 41 | 7/34 | 41/0 | 0 |

## Coverage

- **PubMed hits:** 142 matched, 108 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brazeau_2021.pdf` | Brazeau D et al., Association of ABCC2 Haplotypes to Myco…, Journal of clinical pharmac… (2021) | pgx | 8 | [10.1002/jcph.1932](https://doi.org/10.1002/jcph.1932) | [34169529](https://www.ncbi.nlm.nih.gov/pubmed/34169529) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Qiu_2008.pdf` | Qiu XY et al., Association of MDR1, CYP3A4*18B, and CY…, European journal of clinica… (2008) | pgx | 8 | [10.1007/s00228-008-0520-8](https://doi.org/10.1007/s00228-008-0520-8) | [18636247](https://www.ncbi.nlm.nih.gov/pubmed/18636247) | metadata signals extractable PGX data (CYP3A4*18B, PK/PD-context) |
| `Ben_2017.pdf` | Ben Hassine I et al., Molecular study of ABCB1 gene and its c…, Cancer chemotherapy and pha… (2017) | pgx | 5 | [10.1007/s00280-017-3424-4](https://doi.org/10.1007/s00280-017-3424-4) | [28836054](https://www.ncbi.nlm.nih.gov/pubmed/28836054) | metadata signals extractable PGX data (ABCB1) |
| `Giegling_2011.pdf` | Giegling I et al., Glutamatergic gene variants impact the…, Pharmacogenetics and genomi… (2011) | pgx | 5 | [10.1097/FPC.0b013e32833efb18](https://doi.org/10.1097/FPC.0b013e32833efb18) | [20859245](https://www.ncbi.nlm.nih.gov/pubmed/20859245) | metadata signals extractable PGX data (SLC6A5) |
| `Haseba_2020.pdf` | Haseba T et al., Roles of Two Major Alcohol Dehydrogenas…, Alcohol and alcoholism (Oxf… (2020) | pgx | 5 | [10.1093/alcalc/agz091](https://doi.org/10.1093/alcalc/agz091) | [31825074](https://www.ncbi.nlm.nih.gov/pubmed/31825074) | metadata signals extractable PGX data (CYP2E1) |
| `Shen_2010.pdf` | Shen H et al., Association of the vitamin D metabolism…, Arteriosclerosis, thrombosi… (2010) | pgx | 5 | [10.1161/ATVBAHA.110.211805](https://doi.org/10.1161/ATVBAHA.110.211805) | [20847308](https://www.ncbi.nlm.nih.gov/pubmed/20847308) | metadata signals extractable PGX data (CYP24A1) |

<sub>queue written 2026-11-09 18:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abiri_2019 | not_relevant | 0 | 0 | The paper discusses genetic mutations in Maple Syrup Urine Disease, not the pharmacogenomics of calcicludine. |
| popPK | Aengevaeren_2017 | irrelevant | 0 | 0 | The paper investigates the relationship between exercise volume and coronary artery calcification in humans and contains no data regarding the substance calcicludine. |
| popPK | Al-Wabel_2019 | irrelevant | 0 | 0 | The paper investigates CO2 capture by sorbents and does not contain any data or parameters for calcicludine. |
| popPK | Alghamdi_2026 | irrelevant | 0 | 0 | The paper focuses on the adsorption of carbamazepine, lamotrigine, and caffeine from groundwater, and does not mention or report any toxicokinetic parameters for calcicludine. |
| popPK | Anderson_2026 | irrelevant | 0 | 0 | The paper reports epidemiological cardiovascular risk markers associated with e-cigarette use and does not contain any toxicokinetic parameters for calcicludine. |
| PGx | Aronson_2008 | not_relevant | 0 | 0 | The paper discusses the pharmacodynamic comparison of clevidipine and other antihypertensives but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Aschbacher_2012 | irrelevant | 0 | 0 | The paper investigates the association between fasting glucose levels and cell migration, with no mention of calcicludine or its toxicokinetic parameters. |
| popPK | Baldrick_2023 | irrelevant | 0 | 0 | The paper is a review of regulatory processes for carcinogenicity testing and does not report quantitative toxicokinetic parameters for calcicludine. |
| popPK | Basaleh_2026 | irrelevant | 0 | 0 | The paper investigates the adsorption of lamotrigine by activated carbon, not the toxicokinetics of calcicludine. |
| PGx | Ben_2017 | not_relevant | 0 | 0 | The paper studies the drug imatinib, not calcicludine. |
| popPK | Berry_2025 | irrelevant | 0 | 0 | The paper reports clinical outcomes (cardiovascular events and mortality) associated with physical activity and does not mention the substance calcicludine or any toxicokinetic parameters. |
| PGx | Bi_2026 | not_relevant | 0 | 0 | The study reports associations between gene variants and disease risk (PCAD), not pharmacokinetic or pharmacodynamic parameter changes for calcicludine. |
| PGx | Brazeau_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of mycophenolic acid, not calcicludine. |
| PGx | Brown_2007 | not_relevant | 0 | 0 | The paper reports on MCP-1 levels in SLE patients and is unrelated to the pharmacology of calcicludine. |
| popPK | Bó_2019 | irrelevant | 0 | 0 | The paper investigates the biosorption of acetylsalicylic acid onto activated carbons and contains no data or parameters for calcicludine. |
| popPK | Charalambous_2026 | irrelevant | 0 | 0 | The paper is a systematic review on cardiovascular disease risk prediction using Coronary Artery Calcium scores and does not contain any toxicokinetic data for calcicludine. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on metabolic syndrome and C-reactive protein in relation to coronary artery calcification and does not contain any data for calcicludine. |
| popPK | Chen_2026_2 | irrelevant | 0 | 0 | The paper is an epidemiological study on cigarette smoking and vascular calcification in humans, with no mention of the substance calcicludine or its toxicokinetic parameters. |
| popPK | Chen_2026_3 | irrelevant | 0 | 0 | The paper is a correction regarding affiliations and acknowledgements for a study on coronary artery calcification in chronic kidney disease, containing no data on calcicludine or toxicokinetic parameters. |
| PGx | Cheong_2013 | not_relevant | 0 | 0 | The paper examines genetic polymorphisms in miR-219-1 related to the clearance of hepatitis B virus (HBV), not the pharmacokinetics or pharmacodynamics of the drug calcicludine. |
| popPK | Chien_1996 | irrelevant | 0 | 0 | The paper investigates the mechanism of myometrial contraction induced by Bay K 8644 in rats and does not mention or provide kinetic parameters for calcicludine. |
| PGx | Chiu_2010 | not_relevant | 0 | 0 | The paper does not mention calcicludine and focuses on calcicludine's absence in the study of L-type calcium channel blockers reversing multidrug resistance. |
| popPK | Croy_2004 | irrelevant | 0 | 0 | The paper studies nystatin, not calcicludine. |
| popPK | Croy_2005 | irrelevant | 0 | 0 | The paper reports physicochemical properties (partition coefficients, CAC) for the substance nystatin in micelles, not toxicokinetic parameters for calcicludine. |
| popPK | Esbaugh_2014 | irrelevant | 0 | 0 | The paper investigates esophageal sodium transport mechanisms in the gulf toadfish and does not involve the substance calcicludine. |
| PGx | Everaert_2019 | not_relevant | 0 | 0 | The paper analyzes the transcriptome of circulating angiogenic cells and their relation to macrophage genotypes, and does not discuss calcicludine or any specific pharmacokinetic/pharmacodynamic effects of a gene variant on this drug. |
| popPK | Fidler_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for olopatadine, not calcicludine. |
| PGx | Fotouhi_1993 | not_relevant | 0 | 0 | The paper studies genetic polymorphisms in chicken growth hormone genes and their association with fat content, with no mention of calcicludine or human pharmacogenomics. |
| popPK | Franssen_2017 | irrelevant | 0 | 0 | The paper describes a quantitative risk model for the parasite Trichinella spp. and contains no data regarding the substance calcicludine. |
| popPK | Giangregorio_2023 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics and mechanism of action of patulin (a mycotoxin), not calcicludine, which is not mentioned. |
| popPK | Giangregorio_2023_2 | irrelevant | 0 | 0 | The paper investigates the inhibition of the carnitine/acylcarnitine carrier by itaconate and contains no data regarding calcicludine. |
| PGx | Giegling_2011 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of haloperidol, not calcicludine. |
| popPK | Globisch_2010 | irrelevant | 0 | 0 | The paper investigates the tissue distribution of 5-hydroxymethylcytosine (hmC), a DNA base, and contains no data for the substance calcicludine. |
| PGx | Goli_2026 | not_relevant | 0 | 0 | The paper discusses X-chromosome evolution in cattle and is unrelated to calcicludine pharmacogenomics. |
| PGx | Gröne_1998 | not_relevant | 0 | 0 | The paper studies parathyroid hormone-related protein (PTHrP) and cancer models, and does not report on the drug calcicludine. |
| PGx | Gul_2026 | not_relevant | 0 | 0 | The study focuses on INSNR gene variants and T2DM biomarkers, with no mention of calcicludine or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Hakimabadi_2023 | irrelevant | 0 | 0 | The paper investigates the adsorption of PFAS by activated carbon and does not mention calcicludine or report any toxicokinetic parameters for it. |
| PGx | Harris_2013 | not_relevant | 0 | 0 | The paper is a review of soluble epoxide hydrolase biology and does not mention calcicludine or report any pharmacokinetic/pharmacodynamic effects of gene variants on this specific drug. |
| PGx | Haseba_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of ethanol and the role of ADH enzymes, not the drug calcicludine. |
| PGx | Hennenberg_2017 | not_relevant | 0 | 0 | The paper investigates the impact of MDR1A deficiency on tumor growth in a colitis model and does not mention the drug calcicludine or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Honaryar_2022 | irrelevant | 0 | 0 | The paper investigates coronary artery calcium progression after radiation therapy and does not report any toxicokinetic parameters for calcicludine. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The paper is a clinical outcome study on the atherogenic index of plasma (AIP) and coronary artery calcification, and does not report any toxicokinetic parameters for calcicludine. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper investigates risk factors for coronary artery calcification in patients with schizophrenia and does not contain any data regarding the toxicokinetics of calcicludine. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study investigating the association between glycated hemoglobin (HbA1c) and coronary artery calcification in humans, and does not mention or report toxicokinetic parameters for calcicludine. |
| popPK | Jagtap_2003 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for radiostrontium (*Sr), not calcicludine. |
| popPK | Jamalinia_2026 | irrelevant | 0 | 0 | The paper is a narrative review on sex differences in MASLD-related atherosclerosis and does not contain any toxicokinetic data for calcicludine. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | The paper investigates the association between TyG-BMI and coronary artery calcification in hemodialysis patients and does not contain any data regarding the substance calcicludine. |
| popPK | Jono_2004 | irrelevant | 0 | 0 | The paper investigates Matrix Gla protein (MGP) in humans and does not mention calcicludine or report any toxicokinetic parameters for it. |
| popPK | Kermott_2019 | irrelevant | 0 | 0 | The paper investigates the association between cardiorespiratory fitness and coronary artery calcification in humans and contains no data regarding the toxicokinetics of calcicludine. |
| PGx | Kwak_2012 | not_relevant | 0 | 0 | The paper investigates the association of pri-miRNAs-371-373 polymorphisms with hepatocellular carcinoma occurrence and HBV clearance, not the pharmacokinetic or pharmacodynamic effects on the drug calcicludine. |
| PGx | Lai_2012 | not_relevant | 0 | 0 | The paper reports MDR1 genotype and haplotype frequencies in Chinese populations but does not include data for the drug calcicludine or its PK/PD parameters. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper discusses the role of COMMD1 in inflammation and cancer, and does not mention calcicludine or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Li_2015 | not_relevant | 0 | 0 | The paper investigates genetic associations with β-lactam allergy and does not study calcicludine. |
| popPK | Lien_2016 | irrelevant | 0 | 0 | The paper focuses on the dietary exposure and risk assessment of sulfites (sulfur dioxide), not calcicludine, and contains no kinetic parameters for the target substance. |
| popPK | Miller_1993 | irrelevant | 0 | 0 | The paper describes a transcription factor (EKLF) and its sequence/function, containing no data related to the substance calcicludine or any toxicokinetic parameters. |
| PGx | Miller_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of estrogen therapy, not calcicludine. |
| PGx | Mishra_2024 | not_relevant | 0 | 0 | The paper studies the genetic risk score for coronary artery calcification and its association with CAD, unrelated to the drug calcicludine or its PK/PD parameters. |
| PGx | Moreira_2026 | not_relevant | 0 | 0 | The study investigates the association between IGF-1 axis gene variants and cancer-associated cachexia prognosis, but does not report any pharmacokinetic or pharmacodynamic effects on calcicludine. |
| PGx | Mullins_2008 | not_relevant | 0 | 0 | The paper discusses bacterial metabolism in Acetobacter aceti and does not involve the drug calcicludine or human pharmacogenomics. |
| popPK | Nekouei_2026 | irrelevant | 0 | 0 | The paper studies statin use and arterial calcification in humans and contains no data on calcicludine. |
| PGx | Oguz_2017 | not_relevant | 0 | 0 | The paper focuses on genotype-driven prediction of coronary artery calcium using machine learning and does not mention calcicludine or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Ok_2011 | irrelevant | 0 | 0 | The paper investigates the mechanism of dexmedetomidine-induced contraction in rat aorta and does not mention or provide toxicokinetic data for calcicludine. |
| PGx | Okuda_2018 | not_relevant | 0 | 0 | The paper investigates the role of the ADH3 gene in alcohol metabolism and osteoporosis, but does not mention the drug calcicludine. |
| PGx | Okuda_2018_2 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of ethanol mediated by ADH1 and ADH3 in mice, not the drug calcicludine. |
| popPK | Ollson_2014 | irrelevant | 0 | 0 | The paper is a human health risk assessment for a waste facility and does not report any toxicokinetic parameters for calcicludine. |
| PGx | Park_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of midazolam, not calcicludine. |
| PGx | Pechlivanis_2021 | not_relevant | 0 | 0 | The paper investigates the association between diabetes genetic risk scores and statin (HMG-CoA reductase inhibitor) therapy, not the drug calcicludine. |
| popPK | Perelló_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for hexasodium fytate, not calcicludine. |
| popPK | Phillippe_1994 | irrelevant | 0 | 0 | The paper studies the mechanisms of myometrial contractions in rats using aluminum fluoride and does not contain any toxicokinetic data for calcicludine. |
| PGx | Porter_2022 | not_relevant | 0 | 0 | The paper studies the association between abdominal aortic calcification and dementia risk, and does not involve the drug calcicludine or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Qiu_2008 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects for cyclosporine, not calcicludine. |
| PGx | Ragavan_2026 | not_relevant | 0 | 0 | The paper investigates metabolic differences in hypertrophic cardiomyopathy mouse models and does not mention or study calcicludine. |
| popPK | Riyahi_2026 | irrelevant | 0 | 0 | The paper focuses on the sorption and biodegradation kinetics of trichloroethene (TCE), not the toxicokinetics of calcicludine. |
| PGx | Rotarescu_2024 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for Tacrolimus, not Calcicudine. |
| PGx | Ryu_2012 | not_relevant | 0 | 0 | The paper reports on gemcitabine, not calcicludine, and focuses on toxicity/survival rather than specific PK/PD parameter effects for calcicludine. |
| PGx | Saito_2003 | not_relevant | 0 | 0 | The paper describes MDR1 haplotypes in healthy subjects without mentioning calcicludine or measuring any PK/PD parameters. |
| popPK | Saremi_2016 | irrelevant | 0 | 0 | The paper is a clinical study on hypoglycemia and atherosclerosis in humans and does not mention or measure calcicludine. |
| PGx | Sayan_2008 | not_relevant | 0 | 0 | The paper is about Brucella melitensis resistance to rifampicin, not calcicludine or pharmacogenomics. |
| popPK | Shahraki_2026 | irrelevant | 0 | 0 | The paper studies the association between bisphosphonate use and arterial calcification in humans and contains no toxicokinetic data for the substance 'calcicludine'. |
| PGx | Sharifi_2017 | not_relevant | 0 | 0 | The paper studies atherosclerosis in familial hypercholesterolemia and does not mention the drug calcicludine. |
| PGx | Sharma_2010 | not_relevant | 0 | 0 | The paper investigates the association between CYP1A1/GSTM1 polymorphisms and head and neck cancer risk, not the pharmacokinetics or pharmacodynamics of calcicludine. |
| PGx | Shen_2010 | not_relevant | 0 | 0 | The paper investigates the association between CYP24A1 variants and coronary artery calcification, not the pharmacokinetics or pharmacodynamics of calcicludine. |
| PGx | Singh_2012 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of Imatinib, not Calcicludine. |
| popPK | Sládeková_2025 | irrelevant | 0 | 0 | The paper studies FKK6, not calcicludine, and reports no kinetic parameters for the target substance. |
| popPK | Srivatsa_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on alcohol and cardiovascular disease and does not mention or provide any toxicokinetic data for calcicludine. |
| PGx | Suarez-Kurtz_2026 | not_relevant | 0 | 0 | The paper discusses DPYD variants and fluoropyrimidines, not calcicludine. |
| popPK | Talat_2023 | irrelevant | 0 | 0 | The paper reports pesticide residue levels in vegetables for human health risk assessment and does not contain any toxicokinetic parameters for calcicludine. |
| PGx | Tang_2014 | not_relevant | 0 | 0 | The paper investigates genetic associations with Hepatitis C virus infection susceptibility and clearance, not the pharmacokinetics or pharmacodynamics of calcicludine. |
| PGx | Tavares_2026 | not_relevant | 0 | 0 | The paper investigates the association between VDR rs731236 polymorphism and cancer cachexia/survival, and does not report pharmacokinetic or pharmacodynamic effects of calcicludine. |
| popPK | Tsushima_2015 | irrelevant | 0 | 0 | The paper is a clinical study on coronary artery disease and adipose tissue distribution in humans, containing no data or parameters for the substance calcicludine. |
| popPK | Vishnu_2021 | irrelevant | 0 | 0 | The paper focuses on the removal of Cerium (Ce3+) and its ecotoxicity in fish, containing no data on calcicludine. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The paper investigates VKORC1 genetic polymorphisms and coronary artery disease risk, containing no data on the substance calcicludine or its kinetic parameters. |
| popPK | Wilkins_2016 | irrelevant | 0 | 0 | The paper is a cardiovascular epidemiological study on lipids and coronary artery calcification and does not contain any toxicokinetic data for calcicludine. |
| popPK | Wrzos_2004 | irrelevant | 0 | 0 | The paper investigates cholinergic smooth muscle contraction in rats using bethanechol and antagonists, and does not contain any toxicokinetic data for calcicludine. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | The paper does not mention calcicludine or any gene variant affecting drug pharmacokinetics/pharmacodynamics. |
| PGx | Xu_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of digoxin, not calcicludine. |
| PGx | Xu_2010 | not_relevant | 0 | 0 | The paper focuses on chlorpromazine and clozapine, not calcicludine. |
| PGx | Xuan_2014 | not_relevant | 0 | 0 | The study investigates ABCB1 polymorphisms and glucocorticoid efficacy in ITP, not calcicludine. |
| popPK | Yoshii_1994 | irrelevant | 0 | 0 | The paper studies the electrophysiological effects of nefiracetam on calcium channels in NG108-15 cells and does not report toxicokinetic parameters for calcicludine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcalcicludine%5D&body=Drug%3A%20calcicludine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_calcicludine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
