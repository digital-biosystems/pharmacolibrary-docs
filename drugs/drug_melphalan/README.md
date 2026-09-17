<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;melphalan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melphalan_Shah2022_reference&quot;,&quot;label&quot;:&quot;Shah_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_melphalan/Melphalan_Shah2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# melphalan

- **generic name:** melphalan
- **ATC codes:** `L01AA03`
- **DrugBank:** [DB01042](https://go.drugbank.com/drugs/DB01042)
- **groups:** approved, investigational

## About

**Description.** Melphalan is a nitrogen mustard or bischloroethylamine type alkylating agent.[L40928] It was first synthesized in the early 1950s by substituting L-phenylalanine for the methyl group on nitrogen mustard.[A261150, A261155] Melphalan is used in the treatment of multiple myeloma and ovarian carcinoma.[L40928] It is also used for high-conditioning before hematopoietic stem cell transplant.[L47890] It is also used to treat uveal melanoma with unresectable hepatic metastases.[L47895]

**Indication.** Melphalan is indicated for use as a high-dose conditioning treatment prior to hematopoietic stem cell transplantation in patients with multiple myeloma.[L47890] It is also indicated for the palliative treatment of multiple myeloma and for the palliation of non-resectable epithelial carcinoma of the ovary.[L40928]

Melphalan is a component of HEPZATO KIT, a liver-directed therapy indicated for the treatment of adults with uveal melanoma with unresectable hepatic metastases affecting less than 50% of the liver and no extrahepatic disease or extrahepatic disease limited to the bone, lymph nodes, subcutaneous tissues, or lung that is amenable to resection or radiation.[L47895]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:52 | 23:28 | 1/0/0 | 0/0/0 | 0/0/0 | 130,943/7,282 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 3/8 | 9/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Shah_2022_reference](drugs/drug_melphalan/Melphalan_Shah2022_reference.md) | Shah GL et al., Population Pharmacokinetics of Melphala…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01093-z](https://doi.org/10.1007/s40262-021-01093-z) |

## Coverage

- **PubMed hits:** 114 matched, 63 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cho_2018.pdf` | Cho YK et al., Pharmacokinetic-Pharmacodynamic Model o…, CPT: pharmacometrics & syst… (2018) | popPK | 10 | [10.1002/psp4.12345](https://doi.org/10.1002/psp4.12345) | [30343510](https://pubmed.ncbi.nlm.nih.gov/30343510) | The paper describes a population PK/PD model for melphalan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Dahi_2022.pdf` | Dahi PB et al., Evaluation of Melphalan Exposure in Lym…, Transplantation and cellula… (2022) | popPK | 10 | [10.1016/j.jtct.2022.05.003](https://doi.org/10.1016/j.jtct.2022.05.003) | [35545213](https://pubmed.ncbi.nlm.nih.gov/35545213) | The paper describes a population-PK study for melphalan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Li_2022.pdf` | Li S et al., Population Pharmacokinetics of Melphala…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2030](https://doi.org/10.1002/jcph.2030) | [35048362](https://pubmed.ncbi.nlm.nih.gov/35048362) | The paper reports a population PK model for melphalan with explicit numeric values for clearance, volumes, and intercompartmental clearance in the text. |
| `Nath_2007.pdf` | Nath CE et al., Population pharmacokinetics of melphala…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02862.x](https://doi.org/10.1111/j.1365-2125.2007.02862.x) | [17324241](https://pubmed.ncbi.nlm.nih.gov/17324241) | The paper reports a population pharmacokinetic model for melphalan with explicit numeric equations for clearance and volume of distribution. |
| `Taich_2014.pdf` | Taich P et al., Clinical pharmacokinetics of intra-arte…, Ophthalmology (2014) | popPK | 10 | [10.1016/j.ophtha.2013.10.045](https://doi.org/10.1016/j.ophtha.2013.10.045) | [24359624](https://pubmed.ncbi.nlm.nih.gov/24359624) | The paper describes a population pharmacokinetic study of melphalan, but the specific numeric parameter values are not present in the provided abstract text. |
| `Buitrago_2016.pdf` | Buitrago E et al., Pharmacokinetics of Melphalan After Int…, Journal of ocular pharmacol… (2016) | popPK | 9 | [10.1089/jop.2015.0088](https://doi.org/10.1089/jop.2015.0088) | [26785130](https://pubmed.ncbi.nlm.nih.gov/26785130) | The study reports quantitative pharmacokinetic parameters (half-lives, concentrations, AUC ratios) for melphalan in a rabbit model, with values explicitly stated in the abstract. |
| `Chandra_2022.pdf` | Chandra S et al., Test-dose pharmacokinetics guided melph…, British journal of clinical… (2022) | popPK | 9 | [10.1111/bcp.14932](https://doi.org/10.1111/bcp.14932) | [34075614](https://pubmed.ncbi.nlm.nih.gov/34075614) | The study reports population-PK parameters (clearance, AUC) for melphalan, but specific numeric values for clearance (CL) or volume (V) are not explicitly listed in the text, only AUC ranges and clearance ratios. |
| `Gallo_1995.pdf` | Gallo JM et al., Time-dependent pharmacodynamic models i…, Cancer research (1995) | pd | 5 | not captured | [7553617](https://www.ncbi.nlm.nih.gov/pubmed/7553617) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Cho_2017.pdf` | Cho YK et al., Associations of High-Dose Melphalan Pha…, Clinical pharmacology and t… (2017) | pgx | 8 | [10.1002/cpt.644](https://doi.org/10.1002/cpt.644) | [28160288](https://www.ncbi.nlm.nih.gov/pubmed/28160288) | metadata signals extractable PGX data (SLC7A5, PK/PD-context) |
| `Li_2023.pdf` | Li J et al., Evaluating the Impacts of CYP3A4*1B and…, Cancer genomics & proteomics (2023) | pgx | 8 | [10.21873/cgp.20360](https://doi.org/10.21873/cgp.20360) | [36581339](https://www.ncbi.nlm.nih.gov/pubmed/36581339) | metadata signals extractable PGX data (CYP3A4*1B, PK/PD-context) |
| `Giglia_2014.pdf` | Giglia JL et al., A single nucleotide polymorphism in SLC…, Biology of blood and marrow… (2014) | pgx | 5 | [10.1016/j.bbmt.2014.03.022](https://doi.org/10.1016/j.bbmt.2014.03.022) | [24704384](https://www.ncbi.nlm.nih.gov/pubmed/24704384) | metadata signals extractable PGX data (SLC7A5) |

<sub>queue written 2026-09-15T04:46:42.153497+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ben_2021 | not_relevant | 0 | 0 | The paper is a review of conditioning regimens for ALL and discusses pharmacogenetics only as a future direction for busulfan, without reporting any pharmacogenomic effects on melphalan. |
| PGx | Bhatla_2008 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a transplant regimen in Shwachman-Diamond syndrome patients but does not investigate pharmacogenomic effects on melphalan PK or PD parameters. |
| popPK | Canal_1998 | irrelevant | 0 | 0 | The paper is a general review of dose individualization strategies and mentions melphalan only in the context of dosage reduction for renal/hepatic dysfunction without reporting any quantitative pharmacokinetic parameters. |
| PGx | Canal_1998 | not_relevant | 0 | 0 | The paper is a general review of dose individualization strategies and mentions melphalan only in the context of renal/hepatic dysfunction, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Chandra_2022 | relevant | 9 | 4 | The study reports population-PK parameters (clearance, AUC) for melphalan, but specific numeric values for clearance (CL) or volume (V) are not explicitly listed in the text, only AUC ranges and clearance ratios. |
| popPK | Cho_2018 | relevant | 10 | 0 | The paper describes a population PK/PD model for melphalan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Dahi_2022 | relevant | 10 | 0 | The paper describes a population-PK study for melphalan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Damiano_1999 | not_relevant | 0 | 0 | The paper investigates cell adhesion-mediated drug resistance (CAM-DR) in myeloma cell lines, not the effect of a specific human gene variant or genotype on melphalan pharmacokinetics or pharmacodynamics. |
| PGx | Dasgupta_2003 | not_relevant | 2 | 5 | The paper reports clinical outcomes (survival) rather than direct pharmacokinetic or pharmacodynamic parameters of melphalan. |
| PGx | David-Beabes_2000 | not_relevant | 0 | 0 | The paper characterizes multidrug resistance mechanisms in prostate cancer cell lines and does not report pharmacogenomic effects on melphalan PK/PD parameters. |
| popPK | Delitheos_1995 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay on yeast strains, not a pharmacokinetic study, and reports no disposition parameters for melphalan. |
| PD | Delitheos_1995 | not_relevant | 0 | 0 | The paper reports that melphalan was inactive up to 400 micrograms/ml in yeast strains and does not provide any numeric PD parameters or concentration-effect curves for melphalan. |
| PGx | Dumontet_2010 | not_relevant | 0 | 0 | The paper reports associations between genotypes and clinical outcomes (response, survival, toxicity) but does not report pharmacokinetic or pharmacodynamic parameters. |
| popPK | Fu_2025 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of patient-reported outcomes (quality of life) and does not report any pharmacokinetic parameters for melphalan. |
| popPK | Gallo_1995 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic modeling of glutathione depletion, not the pharmacokinetic disposition parameters of melphalan. |
| PGx | Giglia_2014 | not_relevant | 2 | 5 | The paper reports an association with a clinical toxicity endpoint (TPN use) rather than a direct pharmacokinetic or pharmacodynamic parameter. |
| PGx | Grazziutti_2006 | not_relevant | 0 | 0 | The study identifies clinical risk factors (renal function, dose) for toxicity but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper focuses on predicting drug-drug interactions for busulfan using network pharmacology and does not report pharmacogenomic effects on melphalan PK/PD parameters. |
| popPK | Ishida_1982 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values for DNA damage, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Joerger_2012 | irrelevant | 2 | 0 | The paper is a review article discussing covariate modeling in general and mentions melphalan only as an example of a drug with established models, without providing original quantitative PK parameter values. |
| PGx | Joerger_2012 | not_relevant | 0 | 0 | The paper is a review of covariate modeling methods and does not report specific pharmacogenomic effects on melphalan PK/PD parameters. |
| PGx | Keenan_2004 | not_relevant | 0 | 0 | The paper investigates the uptake of 2-deoxyglucose in cell lines resistant to melphalan, not the pharmacokinetics or pharmacodynamics of melphalan itself. |
| PGx | Kharbanda_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a transplant regimen containing melphalan but does not investigate pharmacogenomic effects on melphalan PK or PD parameters. |
| PGx | Khodadadi_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action and drug interaction of melphalan in cell lines, not the effect of a specific gene variant on melphalan's pharmacokinetics or pharmacodynamics. |
| popPK | Koh_2013 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study of dental compounds where melphalan is only mentioned as a comparator for tumor-specificity, with no pharmacokinetic parameters reported. |
| PD | Koh_2013 | not_relevant | 0 | 0 | The paper investigates dental compounds (hydroquinone, benzoquinone, eugenol, phtharal) and only mentions melphalan as a reference for tumor-specificity indices without providing any specific concentration-effect data or PD parameters for melphalan. |
| PGx | Kühne_2007 | not_relevant | 0 | 0 | The study explicitly reports no significant correlations between the genetic polymorphisms in LAT1, LAT2, or 4F2hc and melphalan pharmacokinetics or side effects. |
| PGx | Kühne_2008 | not_relevant | 2 | 5 | The paper investigates the association between GST polymorphisms and adverse events (PD/toxicity), but explicitly states that side effects were dependent only on dose and that genotyping does not appear helpful, failing to report a significant pharmacogenomic effect on PK or PD parameters. |
| PGx | Landini_2017 | not_relevant | 0 | 0 | The paper focuses on auranofin resistance in ovarian cancer cells and only mentions melphalan as a drug showing cross-resistance, without reporting any pharmacogenomic effects on melphalan's PK or PD parameters. |
| PGx | Mendonça-Torres_2013 | not_relevant | 0 | 0 | The paper investigates the effect of a TSPO ligand (PK11195) on neuroblastoma cell lines and its interaction with melphalan, but does not report any pharmacogenomic effects (gene variants) on melphalan's PK or PD parameters. |
| PGx | Michalska_2023 | not_relevant | 0 | 0 | The paper reports an association between the SLCO1B1 genotype and overall survival (clinical outcome), but does not report any changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters of melphalan. |
| PGx | Misund_2022 | not_relevant | 0 | 0 | The paper investigates clonal evolution and transcriptomic changes in multiple myeloma, noting that melphalan induces specific mutational signatures (SBS-MM1), but it does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of melphalan. |
| PGx | Nampoothiri_2019 | not_relevant | 0 | 0 | The paper reports that the GSTP1 genotype is associated with toxicity outcomes (GI toxicity/infections), but it does not report that the genotype changes a pharmacokinetic (e.g., AUC) or pharmacodynamic parameter of melphalan. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of lonidamine, not melphalan, and contains no pharmacokinetic parameters for melphalan. |
| PD | Nath_2016 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of lonidamine, not melphalan, and does not report any pharmacodynamic or exposure-response data for melphalan. |
| PGx | Ocanto_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen involving melphalan but does not investigate gene variants or their effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Paioli_2014 | not_relevant | 0 | 0 | The paper analyzes toxicity based on demographic factors (sex and age) rather than genetic variants, and does not report pharmacokinetic or pharmacodynamic parameters for melphalan. |
| PGx | Rabier_1991 | not_relevant | 0 | 0 | The paper studies cellular resistance mechanisms in cancer cell lines, not human pharmacogenomic effects on PK/PD parameters. |
| PGx | Rapoport_2002 | not_relevant | 0 | 0 | The paper is a clinical trial report on post-transplant consolidation therapy and does not investigate pharmacogenomic effects on melphalan PK/PD. |
| PGx | Shinozuka_2016 | not_relevant | 0 | 0 | The study reports associations between gene variants and clinical outcomes (survival/toxicity) rather than specific pharmacokinetic or pharmacodynamic parameters of melphalan. |
| popPK | Taich_2014 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of melphalan, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Testart-Paillet_2007 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic models for hematological toxicity and does not report quantitative pharmacokinetic parameters for melphalan. |
| PD | Testart-Paillet_2007 | not_relevant | 2 | 0 | The text is a review abstract that mentions melphalan as an example of a drug for which PD models exist, but it does not report specific numeric PD parameters or extractable concentration-effect data in this snippet. |
| popPK | Trudel_2007 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of ABT-737 where melphalan is only a co-administered comparator agent, with no pharmacokinetic parameters reported. |
| PD | Trudel_2007 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for ABT-737, not melphalan; melphalan is only mentioned as a combination partner without specific dose-response data. |
| PGx | Winter_2016 | not_relevant | 0 | 0 | The paper investigates the effects of dosing schedules (conventional vs. metronomic) on drug efficacy and resistance mechanisms, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Wojas-Pelc_2005 | not_relevant | 0 | 0 | The paper is a clinical case report on the treatment of scleromyxedema with IVIG and melphalan, containing no pharmacogenomic data or analysis of gene variants affecting drug PK/PD. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daratumumab, and melphalan is only mentioned as a co-administered agent in the VMP regimen, with no PK parameters reported for melphalan. |
| PD | Xu_2018 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationship for daratumumab, not melphalan. |
| PGx | Yang_2015 | not_relevant | 0 | 0 | The paper evaluates a combination therapy (PTX-NPs and ABCG2 antibody) in a mouse model and does not report pharmacogenomic effects on melphalan PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_melphalan`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
