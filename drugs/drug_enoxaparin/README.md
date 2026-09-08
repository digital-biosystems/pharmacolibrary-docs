# enoxaparin

- **generic name:** enoxaparin
- **ATC codes:** `B01AB05`
- **DrugBank:** [DB01225](https://go.drugbank.com/drugs/DB01225)
- **groups:** approved, investigational

## About

**Description.** Enoxaparin is a common low-molecular-weight heparin (LMWH) used in the prevention and management of various thromboembolic disorders. Initially approved by the FDA in 1993, it is administered by a subcutaneous or intravenous injection and marketed by several pharmaceutical companies.[L31393] Enoxaparin markedly reduces the incidence of venous thromboembolism in hospitalized patients when compared to unfractionated [heparin], without increasing the risk of serious bleeding.[A228178,A228313]

**Indication.** Enoxaparin is indicated for the prevention of ischemic complications in unstable angina and in non Q-wave myocardial infarction; it is indicated in conjunction with percutaneous intervention and/or other treatment for the management of acute ST elevation myocardial infarction.[L31393]

Enoxaparin is also indicated in the prophylaxis of DVT in abdominal surgery, hip replacement, knee replacement, or medical patients with severely restricted mobility during acute illness. Additionally, enoxaparin is indicated for the inpatient treatment of DVT with or without pulmonary embolism and the treatment of outpatient DVT without pulmonary embolism.[L31393]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 20:49 | 14:02 | 2/1/0 | 0/0/0 | 0/0/0 | 132,585/11,244 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Oualha_2018](drugs/drug_enoxaparin/Enoxaparin_Oualha2018_reference.md) | Oualha M et al., Population pharmacokinetics of enoxapar…, British journal of clinical… (2018) | [10.1111/bcp.13543](https://doi.org/10.1111/bcp.13543) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zufferey_2021](drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_iiv_r_s_e.md) | Zufferey PJ et al., Pharmacokinetics of enoxaparin in COVID…, Thrombosis research (2021) | [10.1016/j.thromres.2021.07.010](https://doi.org/10.1016/j.thromres.2021.07.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zufferey_2021](drugs/drug_enoxaparin/Enoxaparin_Zufferey2021_value_r_s_e.md) | Zufferey PJ et al., Pharmacokinetics of enoxaparin in COVID…, Thrombosis research (2021) | [10.1016/j.thromres.2021.07.010](https://doi.org/10.1016/j.thromres.2021.07.010) |

## Coverage

- **PubMed hits:** 66 matched, 36 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carreño_2024.pdf` | Carreño FO et al., Characterizing Enoxaparin's Population…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-024-01388-x](https://doi.org/10.1007/s40262-024-01388-x) | [38955947](https://pubmed.ncbi.nlm.nih.gov/38955947) | The paper describes a population pharmacokinetic study for enoxaparin, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| `Moffett_2017.pdf` | Moffett BS et al., Enoxaparin Population Pharmacokinetics…, Therapeutic drug monitoring (2017) | popPK | 10 | [10.1097/FTD.0000000000000435](https://doi.org/10.1097/FTD.0000000000000435) | [28937536](https://pubmed.ncbi.nlm.nih.gov/28937536) | The paper describes a population PK study for enoxaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Moffett_2018.pdf` | Moffett BS et al., Population Pharmacokinetics of Enoxapar…, The Annals of pharmacothera… (2018) | popPK | 10 | [10.1177/1060028017734234](https://doi.org/10.1177/1060028017734234) | [28962537](https://pubmed.ncbi.nlm.nih.gov/28962537) | The paper describes a population PK model for enoxaparin with identified covariates, but specific numeric parameter estimates (CL, V, Q) are not provided in the text, likely residing in tables or supplementary material not included. |
| `Oualha_2018.pdf` | Oualha M et al., Population pharmacokinetics of enoxapar…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13543](https://doi.org/10.1111/bcp.13543) | [29423936](https://pubmed.ncbi.nlm.nih.gov/29423936) | The paper reports a population PK model for enoxaparin with explicit numeric values for typical clearance (1.23 l/h) and volume of distribution (14.6 l) in the text. |
| `Patel_2013.pdf` | Patel JP et al., Population pharmacokinetics of enoxapar…, Circulation (2013) | popPK | 10 | [10.1161/CIRCULATIONAHA.113.003198](https://doi.org/10.1161/CIRCULATIONAHA.113.003198) | [23940396](https://pubmed.ncbi.nlm.nih.gov/23940396) | The paper describes a population PK study of enoxaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Duffull_2005.pdf` | Duffull SB et al., Analysis of population pharmacokinetic…, Journal of biopharmaceutica… (2005) | popPK | 9 | [10.1081/bip-200040824](https://doi.org/10.1081/bip-200040824) | [15702605](https://pubmed.ncbi.nlm.nih.gov/15702605) | The paper describes a population PK study for enoxaparin, but the specific numeric parameter values are not present in the provided evidence. |
| `Antonijoan_2009.pdf` | Antonijoan RM et al., Comparative pharmacodynamic time-course…, International journal of cl… (2009) | pd | 5 | [10.5414/cpp47726](https://doi.org/10.5414/cpp47726) | [19954711](https://www.ncbi.nlm.nih.gov/pubmed/19954711) | metadata signals extractable PD data (Emax) |
| `Francis_2008.pdf` | Francis CW, New issues in oral anticoagulants, Hematology. American Societ… (2008) | pgx | 8 | [10.1182/asheducation-2008.1.259](https://doi.org/10.1182/asheducation-2008.1.259) | [19074093](https://www.ncbi.nlm.nih.gov/pubmed/19074093) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Becattini_2012.pdf` | Becattini C et al., Old and new oral anticoagulants for ven…, Thrombosis research (2012) | pgx | 7 | [10.1016/j.thromres.2011.12.014](https://doi.org/10.1016/j.thromres.2011.12.014) | [22264937](https://www.ncbi.nlm.nih.gov/pubmed/22264937) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ufer_2010.pdf` | Ufer M, Comparative efficacy and safety of the…, Thrombosis and haemostasis (2010) | pgx | 7 | [10.1160/TH09-09-0659](https://doi.org/10.1160/TH09-09-0659) | [20135071](https://www.ncbi.nlm.nih.gov/pubmed/20135071) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Duan_2016.pdf` | Duan L et al., Comparison of rivaroxaban mono-therapy…, Clinica chimica acta; inter… (2016) | pgx | 5 | [10.1016/j.cca.2016.05.002](https://doi.org/10.1016/j.cca.2016.05.002) | [27155586](https://www.ncbi.nlm.nih.gov/pubmed/27155586) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-09-05T20:42:34.920358+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonijoan_2009 | irrelevant | 2 | 1 | The study reports pharmacodynamic parameters (anti-Xa activity, half-life of effect) rather than pharmacokinetic disposition parameters (clearance, volume of distribution) for enoxaparin. |
| popPK | Barrett_2012 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of apixaban, with enoxaparin serving only as a co-administered agent for interaction assessment, and no quantitative PK parameters for enoxaparin are reported. |
| PD | Barrett_2012 | not_relevant | 3 | 2 | The study reports peak pharmacodynamic effects (anti-Xa activity) for single doses and combinations, but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (e.g., EC50, Emax) for enoxaparin. |
| PGx | Becattini_2012 | not_relevant | 0 | 0 | The paper is a general review of oral anticoagulants and does not report any pharmacogenomic effects on enoxaparin PK/PD parameters. |
| PGx | Becerra_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (phenytoin affecting rivaroxaban), not a pharmacogenomic effect on enoxaparin. |
| PGx | Bistervels_2022 | not_relevant | 0 | 0 | The paper investigates the effect of polypharmacy (drug-drug interactions) on bleeding risk, not the effect of gene variants/genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Burroughs_2025 | not_relevant | 0 | 0 | The paper is a survey of clinician prescribing practices and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Carreño_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study for enoxaparin, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence. |
| popPK | Derbalah_2022 | relevant | 10 | 4 | The paper is a population PK study of enoxaparin, but the specific numeric parameter estimates (CL, V, ka) are located in Table 2, which is not included in the provided evidence. |
| PGx | Duan_2016 | not_relevant | 0 | 0 | The study investigates rivaroxaban and warfarin pharmacogenomics, not enoxaparin. |
| popPK | Duffull_2005 | relevant | 9 | 0 | The paper describes a population PK study for enoxaparin, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Duffull_2015 | irrelevant | 0 | 0 | The paper is a general review on the methodology of repeated population analyses and does not report specific quantitative pharmacokinetic parameters for enoxaparin. |
| PGx | Francis_2008 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for warfarin (CYP2C9, VKORC1) and compares new oral anticoagulants to enoxaparin, but does not report any pharmacogenomic effects on the PK or PD of enoxaparin. |
| PGx | Helft_2006 | not_relevant | 0 | 0 | The text is a general review of 2005 thrombosis research and does not report any pharmacogenomic effects on the PK or PD of enoxaparin. |
| PGx | Melandri_2009 | not_relevant | 0 | 0 | The paper reviews the clinical efficacy and safety of tenecteplase and enoxaparin in acute myocardial infarction but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Moffett_2017 | relevant | 10 | 0 | The paper describes a population PK study for enoxaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Moffett_2018 | relevant | 10 | 2 | The paper describes a population PK model for enoxaparin with identified covariates, but specific numeric parameter estimates (CL, V, Q) are not provided in the text, likely residing in tables or supplementary material not included. |
| popPK | Moscaroli_2017 | irrelevant | 0 | 0 | The study focuses on the radiolabeling and imaging of FGF-2, using enoxaparin only as a binding partner for affinity assays, and does not report pharmacokinetic parameters for enoxaparin. |
| PD | Moscaroli_2017 | not_relevant | 0 | 0 | The paper reports binding affinity (Kd) and biological activity (EC50) for FGF-2, not a pharmacodynamic or exposure-response relationship for enoxaparin. |
| PGx | Murray_2015 | not_relevant | 0 | 0 | The paper describes a clinical anticoagulation program and mentions guidelines for VKOR1/CYP2C9 testing, but it does not report specific pharmacogenomic effects on the PK or PD parameters of enoxaparin. |
| PGx | Panfili_2012 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic adverse effect (bladder hypotonia) of ranolazine, not a pharmacogenomic effect on the PK or PD of enoxaparin. |
| popPK | Patel_2013 | relevant | 10 | 0 | The paper describes a population PK study of enoxaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Peixoto_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) between antineoplastic agents and anticoagulants, not pharmacogenomic effects of gene variants on enoxaparin PK/PD. |
| PGx | Phillips_2008 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for warfarin and clinical management of enoxaparin in special populations (obesity, renal impairment), but does not report a genetic variant affecting enoxaparin PK/PD. |
| PGx | Ufer_2010 | not_relevant | 0 | 0 | The paper is a review of novel oral anticoagulants (dabigatran, rivaroxaban, apixaban) and does not report pharmacogenomic effects on enoxaparin. |
| PGx | Vaughns_2015 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetics and pharmacogenetics in obese adolescents but does not report specific pharmacogenomic effects on enoxaparin PK/PD parameters. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper is a protocol for a trial comparing rivaroxaban and enoxaparin; it does not report results or pharmacogenomic effects on enoxaparin PK/PD. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of milvexian, with enoxaparin serving only as a clinical comparator for efficacy outcomes rather than the subject of PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_enoxaparin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
