<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;carmustine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carmustine_Russo1981_reference&quot;,&quot;label&quot;:&quot;Russo_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_carmustine/Carmustine_Russo1981_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carmustine_Levin1978_reference&quot;,&quot;label&quot;:&quot;Levin_1978_reference&quot;,&quot;href&quot;:&quot;drugs/drug_carmustine/Carmustine_Levin1978_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Carmustine_ElYazigi1988_reference&quot;,&quot;label&quot;:&quot;El-Yazigi_1988_reference&quot;,&quot;href&quot;:&quot;drugs/drug_carmustine/Carmustine_ElYazigi1988_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# carmustine

- **generic name:** carmustine
- **ATC codes:** `L01AD01`
- **DrugBank:** [DB00262](https://go.drugbank.com/drugs/DB00262)
- **groups:** approved, investigational

## About

**Description.** A cell-cycle phase nonspecific alkylating antineoplastic agent. It is used in the treatment of brain tumors and various other malignant neoplasms. (From Martindale, The Extra Pharmacopoeia, 30th ed, p462) This substance may reasonably be anticipated to be a carcinogen according to the Fourth Annual Report on Carcinogens (NTP 85-002, 1985). (From Merck Index, 11th ed)

**Indication.** For the treatment of brain tumors, multiple myeloma, Hodgkin's disease and Non-Hodgkin's lymphomas.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 13:17 | 11:49 | 2/1/0 | 1/0/0 | 0/0/0 | 135,146/18,871 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 3/14 | 16/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Russo_1981_reference](drugs/drug_carmustine/Carmustine_Russo1981_reference.md) | Russo R et al., Differential pulse polarographic determ…, Cancer treatment reports (1981) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Levin_1978_reference](drugs/drug_carmustine/Carmustine_Levin1978_reference.md) | Levin VA et al., Pharmacokinetics of BCNU in man: a prel…, Cancer treatment reports (1978) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [El-Yazigi_1988_reference](drugs/drug_carmustine/Carmustine_ElYazigi1988_reference.md) | El-Yazigi A et al., Capillary gas chromatography and thermi…, Pharmaceutical research (1988) | [10.1023/a:1015989612562](https://doi.org/10.1023/a:1015989612562) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rubino_2018](drugs/drug_carmustine/pd_Rubino_2018_Coulter_count.md) | Rubino S et al., Downregulation of Leucine-Rich Repeat-C…, Frontiers in oncology (2018) | [10.3389/fonc.2018.00142](https://doi.org/10.3389/fonc.2018.00142) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rubino_2018](drugs/drug_carmustine/pd_Rubino_2018_FACS.md) | Rubino S et al., Downregulation of Leucine-Rich Repeat-C…, Frontiers in oncology (2018) | [10.3389/fonc.2018.00142](https://doi.org/10.3389/fonc.2018.00142) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rubino_2018](drugs/drug_carmustine/pd_Rubino_2018_MTT_signal.md) | Rubino S et al., Downregulation of Leucine-Rich Repeat-C…, Frontiers in oncology (2018) | [10.3389/fonc.2018.00142](https://doi.org/10.3389/fonc.2018.00142) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carmustine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…Hepatic and rapid with active metabolites. Metabolites may persist…”</sub> | prose |
| excretion | kidney | <sub>“…Approximately 60% to 70% of a total dose is excreted in the urine in 96 hours and about 10…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), GSR (allosteric modulator), RNA (cross-linking/alkylation).</sub>

## Coverage

- **PubMed hits:** 215 matched, 108 returned
- **screened:** 100  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Henner_1986.pdf` | Henner WD et al., Pharmacokinetics and immediate effects…, Cancer treatment reports (1986) | popPK | 10 | not captured | [3719578](https://pubmed.ncbi.nlm.nih.gov/3719578) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, elimination constant) for carmustine in humans, and all numeric values are explicitly present in the provided text. |
| `Levin_1978.pdf` | Levin VA et al., Pharmacokinetics of BCNU in man: a prel…, Cancer treatment reports (1978) | popPK | 10 | not captured | [688274](https://pubmed.ncbi.nlm.nih.gov/688274) | The paper reports quantitative pharmacokinetic parameters (Vd, CL, K10) for carmustine (BCNU) in humans, and all numeric values are explicitly present in the provided text. |
| `Russo_1981.pdf` | Russo R et al., Differential pulse polarographic determ…, Cancer treatment reports (1981) | popPK | 10 | not captured | [7248980](https://pubmed.ncbi.nlm.nih.gov/7248980) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for carmustine (BCNU) in patients, with all numeric values explicitly present in the text. |
| `El-Yazigi_1988.pdf` | El-Yazigi A et al., Capillary gas chromatography and thermi…, Pharmaceutical research (1988) | popPK | 8 | [10.1023/a:1015989612562](https://doi.org/10.1023/a:1015989612562) | [3247301](https://pubmed.ncbi.nlm.nih.gov/3247301) | The paper reports quantitative pharmacokinetic parameters (alpha, beta, clearance) for carmustine (BCNU) in rabbits using a two-compartment model, with values explicitly provided in the text. |
| `Grahovac_2026.pdf` | Grahovac T et al., The Role of Cellular Glutathione Redox…, International journal of mo… (2026) | pd | 4 | [10.3390/ijms27156920](https://doi.org/10.3390/ijms27156920) | [42589574](https://www.ncbi.nlm.nih.gov/pubmed/42589574) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-16T13:06:08.537976+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auger-Quittet_2014 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of treatment outcomes (survival, response rates) and does not report any pharmacokinetic parameters for carmustine. |
| PGx | Babich_1998 | not_relevant | 0 | 0 | The paper studies the in vitro toxicity of sodium nitroprusside and does not report pharmacogenomic effects on the PK or PD of carmustine. |
| PGx | Bachanova_2015 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on clinical outcomes (relapse/survival) for cyclophosphamide, not on the PK or PD parameters of carmustine. |
| PGx | Barcellos-Hoff_1992 | not_relevant | 0 | 0 | The paper studies acquired drug resistance in tumor cell lines, not the effect of a specific human gene variant on the pharmacokinetics or pharmacodynamics of carmustine. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes an in-silico method for identifying synergistic drug combinations and does not report pharmacokinetic parameters for carmustine. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on a machine learning framework for identifying synergistic drug combinations and does not report specific pharmacodynamic parameters or exposure-response relationships for carmustine. |
| popPK | Blasco_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate (MTX), not carmustine (BCNU), which is only mentioned as part of the chemotherapy regimen. |
| PD | Blasco_2010 | not_relevant | 2 | 1 | The study analyzes the association between MTX exposure (AUC) and clinical outcome (survival/response) but reports no numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect model. |
| PD | Bouffet_1997 | not_relevant | 1 | 0 | The paper is a clinical phase II trial reporting only qualitative outcomes (response rates) and mentions a steep dose-response curve in animal models, but provides no numeric PD parameters or exposure-response data for the patients. |
| PGx | Buckner_2003 | not_relevant | 0 | 0 | The paper discusses irinotecan pharmacogenomics and PK, not carmustine. |
| PD | Cagnoni_1999 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (PK) drug-drug interactions (AUC, Cmax, t1/2) but explicitly states that pharmacodynamic (PD) endpoints such as toxicity or antitumor effect could not be analyzed due to sample size and heterogeneity. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for melphalan, not carmustine. |
| PD | Choi_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for melphalan, not carmustine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| PGx | Chou_2012 | not_relevant | 0 | 0 | The paper investigates tumor microenvironment-mediated chemoresistance (hypoxia/ABCB1) rather than a specific genetic variant or genotype affecting PK/PD. |
| popPK | Dahi_2022 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of melphalan, with carmustine only mentioned as a component of the BEAM regimen without any reported PK parameters for it. |
| PD | Dahi_2022 | not_relevant | 2 | 1 | The paper focuses on melphalan PK and toxicity, mentioning carmustine only as part of the BEAM regimen without providing any carmustine-specific exposure-response or PD parameters. |
| popPK | Doroshenko_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and ion fluxes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Duc_1987 | irrelevant | 2 | 0 | The paper is a theoretical modeling study that uses PK data from other sources for BCNU (carmustine) and does not report original quantitative PK parameter values for carmustine in the provided evidence. |
| popPK | Fernández-Serra_2024 | irrelevant | 0 | 0 | The paper focuses on silk fibroin hydrogels for drug delivery and mentions carmustine only as a commercial comparator (Gliadel wafer) without providing any pharmacokinetic parameters for it. |
| PD | Fernández-Serra_2024 | not_relevant | 0 | 0 | The paper focuses on the release kinetics of various molecules from silk fibroin hydrogels and does not mention carmustine or report any pharmacodynamic (exposure-response) parameters for it. |
| PGx | Frischer_1987 | not_relevant | 0 | 0 | The paper studies the metabolism of primaquine, not carmustine, and does not report pharmacogenomic effects on carmustine PK/PD. |
| popPK | Goddard_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitozolomide, not carmustine. |
| popPK | Grahovac_2026 | irrelevant | 0 | 0 | The paper title indicates a study on ileum contractility and glutathione, with no evidence of carmustine pharmacokinetics. |
| PD | Grahovac_2026 | not_relevant | 0 | 0 | The paper focuses on the role of glutathione in ileum contractility and does not mention carmustine or report any pharmacodynamic or exposure-response data for it. |
| PGx | Hacke_2009 | not_relevant | 0 | 0 | The paper discusses using MGMT variants for cell selection against carmustine (BCNU) toxicity in a transplantation context, but does not report pharmacogenomic effects on the PK or PD parameters of carmustine itself. |
| PGx | Harker_1985 | not_relevant | 0 | 0 | The paper focuses on doxorubicin resistance and explicitly states that cross-resistance was not observed to carmustine. |
| popPK | Hirasawa_2022 | irrelevant | 0 | 0 | The study focuses on a PBPK model for methotrexate, temozolomide, and other drugs, and does not report quantitative PK parameters for carmustine. |
| PD | Hirasawa_2022 | not_relevant | 0 | 0 | The paper focuses on extending a physiologically based pharmacokinetic (PBPK) model to predict drug concentrations in brain tumors and does not report any pharmacodynamic (PD) or exposure-response relationships for carmustine or any other drug. |
| popPK | Humpage_2005 | irrelevant | 0 | 0 | The paper studies the genotoxicity of cylindrospermopsin and uses BCNU (a carmustine analog) only as a mechanistic inhibitor, reporting no pharmacokinetic parameters for carmustine. |
| PD | Humpage_2005 | not_relevant | 0 | 0 | The paper studies the toxin Cylindrospermopsin (CYN), not the drug carmustine (BCNU), and does not report a PD model for carmustine. |
| popPK | Huntjens_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mocravimod, not carmustine. |
| PD | Huntjens_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and drug-drug interactions of mocravimod, not carmustine, and does not report any pharmacodynamic or exposure-response parameters. |
| PGx | Jaeckle_2010 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects (UGT1A1*28) on the pharmacokinetics of irinotecan (SN-38), not carmustine (BCNU). |
| popPK | Jones_1993 | irrelevant | 2 | 0 | The paper discusses qualitative PK/PD interactions and toxicity correlations for BCNU (carmustine) but does not report quantitative disposition parameters (CL, V, etc.) in the provided evidence. |
| PD | Jones_1993 | not_relevant | 2 | 0 | The text describes qualitative correlations between BCNU blood levels and pulmonary injury risk but does not provide numeric PD parameters, dose-response curves, or a formal PK/PD model fit. |
| PD | Jones_1994 | not_relevant | 1 | 0 | The paper focuses on the pharmacokinetics of carmustine (BCNU) and its interaction with other agents, mentioning a prior correlation with toxicity but providing no numeric PD parameters or exposure-response analysis in this text. |
| popPK | Kang_2008 | irrelevant | 0 | 0 | The study focuses on the efficacy of EDL-155, with carmustine serving only as a comparator agent in cytotoxicity assays, and no pharmacokinetic parameters are reported. |
| PD | Kang_2008 | not_relevant | 0 | 0 | The paper focuses on the PD of EDL-155; carmustine is only mentioned as a comparator in an in vitro assay without providing specific numeric PD parameters or an exposure-response relationship for carmustine itself. |
| PGx | Kim_2011 | not_relevant | 2 | 5 | The study investigates the effect of knocking down the gene Rex-1 on the efficacy of BCNU (carmustine) in glioma cells, which is a pharmacodynamic interaction with a gene product, but it does not report a pharmacogenomic effect of a specific human genetic variant (SNP/polymorphism) on a PK or PD parameter. |
| PGx | Kirches_1999 | not_relevant | 2 | 5 | The study investigates the effect of MGMT and P450 inhibitors on cell sensitivity in vitro but does not report a pharmacogenomic effect of a specific gene variant on a PK or PD parameter in humans. |
| popPK | Kishk_2024 | irrelevant | 0 | 0 | The paper is a metabolic modeling study for glioma drug discovery where carmustine is only mentioned as a comparator anti-brain chemotherapy agent, with no original pharmacokinetic parameters reported. |
| PD | Kishk_2024 | not_relevant | 0 | 0 | The paper focuses on metabolic modeling and drug repurposing predictions for gliomas; it does not report pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for carmustine. |
| PD | Kumar_2020 | not_relevant | 1 | 1 | The paper reports a single IC50 value for carmustine as a standard comparator in a cytotoxicity assay, but does not provide a concentration-effect curve, dose-response model, or PK/PD analysis for carmustine. |
| PGx | Lan_2023 | not_relevant | 0 | 0 | The paper is a review on infusion rates and does not report pharmacogenomic effects on carmustine PK/PD parameters. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of FAU (a pyrimidine nucleotide analogue), not carmustine. |
| PD | Li_2016 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of FAU and its metabolite FMAU using PET and plasma data, but does not report a pharmacodynamic (PD) or exposure-response relationship with numeric PD parameters. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of progression-free survival in non-Hodgkin lymphoma and does not report pharmacokinetic parameters for carmustine. |
| PD | Li_2017 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival in NHL patients and does not report any pharmacodynamic or exposure-response relationship for carmustine. |
| PD | Li_2023 | not_relevant | 3 | 2 | The paper reports IC50 values for a nanoparticle formulation in vitro and tumor weight changes in vivo, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response analysis, or derivable PD parameters (e.g., Emax, EC50) for carmustine itself. |
| PD | Li_2024 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a nanomicelle formulation, which is a cytotoxicity assay rather than a pharmacodynamic (exposure-response) model of the drug itself. |
| PGx | Liang_2004 | not_relevant | 0 | 0 | The paper studies drug resistance and invasiveness in cell lines, not the effect of a specific gene variant on the PK or PD of carmustine in humans. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carfilzomib, not carmustine. |
| PD | Lin_2023 | not_relevant | 0 | 0 | The paper reports a PK/PD model for carfilzomib, not carmustine. |
| PD | Linch_1993 | not_relevant | 1 | 0 | The paper reports a clinical dose-response comparison (high-dose vs. low-dose) with survival outcomes but provides no pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| PGx | Liu_2002 | not_relevant | 0 | 0 | The paper reports acquired resistance to BCNU (carmustine) via MGMT mutations in cell lines, but does not report pharmacokinetic or pharmacodynamic parameters in humans or a pharmacogenomic effect on drug exposure/response metrics. |
| PD | Lu_2012 | not_relevant | 3 | 2 | The paper reports a comparative IC50 value (77% decrease) for a nanocarrier formulation versus free drug, but does not provide a full concentration-effect curve, Emax, or formal PK/PD model parameters for carmustine itself. |
| PD | Mills_1995 | not_relevant | 1 | 0 | The paper discusses dose escalation of etoposide (VP16) and toxicity, but does not report a pharmacodynamic or exposure-response relationship for carmustine (BCNU) with numeric parameters. |
| PD | Monk_2002 | not_relevant | 3 | 2 | The paper reports in vitro dose-response data for carmustine (BCNU) combined with radiation, but it focuses on synergy indices (CI) and fractional proliferation (FC) rather than deriving specific pharmacodynamic parameters (like Emax or EC50) for the drug alone or in a standard PK/PD framework. |
| popPK | Märtson_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anti-infectives (ciprofloxacin, fluconazole, acyclovir) in HSCT patients and does not report any data for carmustine. |
| PD | Märtson_2023 | not_relevant | 0 | 0 | The paper focuses on the impact of gastrointestinal mucositis on drug absorption (PK) and gut microbiota, not on the pharmacodynamic (exposure-response or dose-response) effects of carmustine or any other drug. |
| PD | Nieto_2000 | not_relevant | 0 | 0 | The paper explicitly states that no pharmacodynamic correlation was observed between the drugs and cardiac toxicity, and it reports only incidence rates and risk factors, not numeric PD parameters. |
| PD | Nieto_2001 | not_relevant | 1 | 0 | The text is an introduction to a review article that mentions carmustine but does not present specific data, models, or numeric PD parameters. |
| popPK | Oehlsen_2022 | irrelevant | 0 | 0 | The paper is a review on ferrofluid synthesis and applications, unrelated to carmustine pharmacokinetics. |
| PD | Oehlsen_2022 | not_relevant | 0 | 0 | The paper is a review on ferrofluid synthesis and applications, containing no information on carmustine or pharmacodynamics. |
| PD | Pak_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of fisetin, not carmustine; carmustine is only mentioned as a positive control without reported numeric PD parameters. |
| PD | Pepponi_2003 | not_relevant | 3 | 2 | The paper reports IC50 values for cell lines, which are dose-response metrics, but it focuses on the correlation with DNA repair enzymes (OGAT/MMR) rather than providing a pharmacodynamic model or exposure-response relationship for carmustine in a clinical or PK/PD context. |
| PGx | Petros_2005 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the pharmacokinetics of cyclophosphamide and cisplatin, but does not report any specific PK or PD parameters for carmustine. |
| PD | Piazza_1984 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetic monitoring challenges and does not report any specific numeric PD parameters or concentration-effect relationships for carmustine. |
| PD | Piepmeier_1996 | not_relevant | 0 | 0 | The paper focuses on MDL101731 and only mentions carmustine as a non-significant control in one xenograft model without providing any exposure-response or dose-response analysis for carmustine. |
| PGx | Prakash_2026 | not_relevant | 0 | 0 | The paper describes a computational framework for drug repurposing and does not report pharmacogenomic effects on the PK or PD of carmustine. |
| popPK | Purvis_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bendamustine, not carmustine. |
| PD | Purvis_2023 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of bendamustine, not carmustine, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Radhakrishnan_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not carmustine. |
| PD | Radhakrishnan_2019 | not_relevant | 0 | 0 | The paper studies busulfan, not carmustine, and reports only PK accumulation and clinical efficacy/toxicity without any concentration-effect or dose-response PD modeling. |
| PGx | Rapoport_2002 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a chemotherapy protocol and does not investigate pharmacogenomic effects on carmustine PK/PD. |
| PGx | Reardon_2004 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a combination therapy but does not analyze the impact of specific gene variants on the pharmacokinetics or pharmacodynamics of carmustine. |
| popPK | Shah_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for melphalan, not carmustine. |
| PD | Shah_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for melphalan, not carmustine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Smith_2024 | irrelevant | 0 | 0 | The paper is a review of preclinical efficacy testing in murine models and does not report pharmacokinetic parameters for carmustine. |
| PD | Smith_2024 | not_relevant | 0 | 0 | The text is a general review of preclinical testing programs in pediatric cancers and does not contain specific data, models, or numeric parameters for carmustine. |
| PD | Soudani_2021 | not_relevant | 0 | 0 | The paper reports in silico molecular docking scores (binding energy) for carmustine derivatives, not in vivo or in vitro pharmacodynamic exposure-response or dose-response data with numeric PD parameters like Emax or EC50. |
| PD | Steinbok_1980 | not_relevant | 3 | 2 | The paper reports a radiation dose-response relationship and qualitative synergism with BCNU, but it does not provide a concentration-effect analysis or numeric PD parameters (e.g., EC50, Emax) for carmustine. |
| PD | Tseng_2020 | not_relevant | 0 | 0 | The paper studies SN-38 microparticles, not carmustine, and reports only qualitative therapeutic efficacy without numeric PD parameters. |
| popPK | Tserng_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for O6-benzylguanine, not carmustine (BCNU), which is only mentioned as a co-administered agent. |
| popPK | Ueda-Kawamitsu_2002 | irrelevant | 2 | 1 | The study is an in-vitro mechanistic investigation in mouse cells, not a population pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for carmustine. |
| PGx | Vogel_1989 | not_relevant | 0 | 0 | The paper studies mutagenicity in Drosophila and does not report pharmacokinetic or pharmacodynamic parameters of carmustine in humans or relevant pharmacogenomic contexts. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper identifies carmustine as a potential therapeutic agent for a specific gene signature group via in silico screening, but does not report any pharmacogenomic effect on carmustine's PK or PD parameters. |
| popPK | Woo_1975 | irrelevant | 2 | 0 | The paper describes a theoretical cell cycle model and simulation for BCNU (carmustine) but does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for the drug. |
| popPK | Wołodkiewicz_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of polyfluoroalkyl phosphonates in glioblastoma cells and does not report pharmacokinetic parameters for carmustine. |
| PD | Wołodkiewicz_2025 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of novel polyfluoroalkyl phosphonates (ZOT5-1-Me/Et) and does not report a pharmacodynamic model or exposure-response relationship for carmustine. |
| popPK | Xu-Welliver_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on DNA repair protein mutations and does not report pharmacokinetic parameters for carmustine. |
| PD | Xu-Welliver_1999 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of O6-benzylguanine (BG) resistance in AGT mutants and does not report pharmacodynamic or exposure-response data for carmustine. |
| PGx | Yang_2007 | not_relevant | 0 | 0 | The paper investigates the effect of nitric oxide donors on the cytotoxicity of alkylating agents in glioma cells, not the effect of a gene variant on the PK or PD of carmustine. |
| popPK | You_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etoposide, not carmustine, which is only mentioned as part of the BEAM regimen. |
| PD | You_2015 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of etoposide, not carmustine, and reports survival outcomes rather than a concentration-effect or dose-response relationship for carmustine. |
| PGx | Yu_2021 | not_relevant | 0 | 0 | The paper investigates cell adhesion-mediated drug resistance (CAMDR) via ECM proteins and integrins, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper investigates the effect of EGCG on drug resistance mechanisms (P-gp) and synergy with temozolomide, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of carmustine. |
| PGx | Zhang_2026 | not_relevant | 2 | 5 | The paper reports an association between TDG expression and carmustine resistance (PD), but it is a bioinformatics/correlation study without specific genotype variants or fitted pharmacokinetic/pharmacodynamic effect sizes. |
| popPK | unknown_2014 | irrelevant | 0 | 0 | The provided evidence consists only of a conference header with no study content, data, or pharmacokinetic parameters for carmustine. |
| PD | unknown_2014 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no study data, results, or pharmacodynamic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The provided evidence contains only a session header with no pharmacokinetic data or study details. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The provided evidence contains no text, data, or parameters related to carmustine pharmacokinetics. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is a header ("Physicians Abstracts") and contains no scientific content, data, or mention of carmustine or pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The paper focuses on stem cell transplantation, vaccines, and pharmacokinetics of fludarabine, busulfan, and voriconazole, with no data on carmustine. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text consists of abstracts from a hematology conference and does not contain any pharmacodynamic or exposure-response analysis for carmustine. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | The evidence consists only of a conference title and session name, containing no pharmacokinetic data or parameters for carmustine. |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |
| popPK | von_2022 | irrelevant | 0 | 0 | The paper focuses on B-cell reconstitution after stem cell transplantation and does not report pharmacokinetic parameters for carmustine. |
| PD | von_2022 | not_relevant | 0 | 0 | The paper focuses on B-cell reconstitution kinetics after stem cell transplantation and does not report any pharmacodynamic or exposure-response analysis for carmustine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_carmustine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
