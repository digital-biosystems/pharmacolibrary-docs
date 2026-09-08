# fibrinogen, human

- **generic name:** fibrinogen, human
- **ATC codes:** `B02BB01`
- **DrugBank:** [DB09222](https://go.drugbank.com/drugs/DB09222)
- **groups:** approved, investigational

## About

**Description.** Fibrinogen concentrate (human) is a hematological agent. It works by replacing a specific protein in the blood, fibrinogen (factor I), that helps with blood clotting.  It is a soluble plasma glycoprotein with a molecular weight of about 340 kDa and is a physiological substrate for three enzymes: plasmin, factor XIIIa, and thrombin. It is indicated for the treatment of acute bleeding episodes in patients with both acquired and congenital fibrinogen deficiency, including afibrinogenemia and hypofibrinogenemia.[L41065]

**Indication.** Human fibrinogen is indicated for the treatment of acute bleeding episodes in patients with congenital fibrinogen deficiency, including afibrinogenemia and hypofibrinogenemia.[L41065, L54973] It is also indicated for fibrinogen supplementation in bleeding patients with acquired fibrinogen deficiency.[L41065]

In combination with thrombin, it is used indicated as an adjunct to hemostasis for mild to moderate bleeding in adults undergoing surgery when control of bleeding by standard surgical techniques (such as suture, ligature, and cautery) is ineffective or impractical.[L12936, L12939]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 11:54 | 29:37 | 0/2/0 | 0/0/0 | 0/0/0 | 350,635/4,593 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 0/0 | 28/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Colom_2023](drugs/drug_fibrinogen_human/FibrinogenHuman_Colom2023_reference.md) | Colom H et al., Population pharmacokinetic modelling of…, British journal of clinical… (2023) | [10.1111/bcp.15741](https://doi.org/10.1111/bcp.15741) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Khayat_2023](drugs/drug_fibrinogen_human/FibrinogenHuman_Khayat2023_reference.md) | Khayat CD et al., Pharmacokinetics, efficacy and safety o…, Blood coagulation & fibrino… (2023) | [10.1097/MBC.0000000000001182](https://doi.org/10.1097/MBC.0000000000001182) |

## Coverage

- **PubMed hits:** 1207 matched, 51 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colom_2023.pdf` | Colom H et al., Population pharmacokinetic modelling of…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15741](https://doi.org/10.1111/bcp.15741) | [37041125](https://pubmed.ncbi.nlm.nih.gov/37041125) | The paper reports a population PK model for fibrinogen with specific numeric values for clearance (CL), volume (V), production rate (Ksyn), and EC50 directly in the abstract. |
| `Khayat_2023.pdf` | Khayat CD et al., Pharmacokinetics, efficacy and safety o…, Blood coagulation & fibrino… (2023) | popPK | 10 | [10.1097/MBC.0000000000001182](https://doi.org/10.1097/MBC.0000000000001182) | [36484281](https://pubmed.ncbi.nlm.nih.gov/36484281) | The paper reports quantitative PK parameters (Cmax, t1/2, IVR) for fibrinogen concentrate in pediatric patients, with values explicitly listed in the results section. |

<sub>queue written 2026-09-06T11:51:28.215355+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlgren_1985 | irrelevant | 0 | 0 | The paper focuses on radiopharmaceutical excretion in breast milk and only mentions [125I]fibrinogen in a concluding safety recommendation without providing any quantitative pharmacokinetic parameters for fibrinogen. |
| popPK | Atanasova_1985 | irrelevant | 0 | 0 | The paper is a clinical case report describing a patient with familial Mediterranean fever and amyloidosis, focusing on diagnosis and colchicine therapy, with no pharmacokinetic modeling or quantitative disposition parameters for fibrinogen. |
| popPK | Bandín-Vilar_2022 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for linezolid, not fibrinogen_human. |
| PD | Bandín-Vilar_2022 | not_relevant | 1 | 0 | The paper is a review of population pharmacokinetic (PK) models for linezolid and does not report any pharmacodynamic (PD) or exposure-response relationship for fibrinogen_human. |
| popPK | Baralić_2023 | irrelevant | 0 | 0 | The paper is a clinical study on fibrinogen glycosylation as a mortality predictor in dialysis patients, not a pharmacokinetic study, and reports no PK parameters for fibrinogen. |
| popPK | Binder_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on fibrinogen carbamylation and clot formation, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on valproic acid (VPA) pharmacokinetics and monitoring, not fibrinogen_human. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting valproic acid trough concentrations (PK) and does not report any pharmacodynamic (PD) or exposure-response relationships for fibrinogen or any other drug. |
| popPK | Collen_1990 | irrelevant | 0 | 0 | The study focuses on tissue-type plasminogen activator (t-PA) variants, not fibrinogen, and fibrinogen is only used as a substrate or diagnostic agent. |
| popPK | Deng_2026 | irrelevant | 0 | 0 | The paper describes a bioartificial liver model for AML and hepatotoxicity studies, does not use fibrinogen_human as the subject drug, and reports no pharmacokinetic parameters. |
| PD | Deng_2026 | not_relevant | 0 | 0 | The paper describes an in vitro liver model for drug screening and toxicity but does not report pharmacodynamic parameters (Emax, EC50) or exposure-response relationships for fibrinogen_human. |
| popPK | Fernández_1995 | irrelevant | 0 | 0 | The study measures fibrinogen concentration as a coagulation marker in lambs but does not report pharmacokinetic parameters (CL, V, ka) for fibrinogen as a subject drug. |
| popPK | Gralnick_1991 | irrelevant | 0 | 0 | The paper is a mechanistic study on platelet activation and fibrinogen binding in von Willebrand disease, not a pharmacokinetic study reporting disposition parameters for fibrinogen. |
| popPK | Hambrick_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefepime, not fibrinogen_human. |
| PD | Hambrick_2026 | not_relevant | 0 | 0 | The paper focuses on cefepime pharmacokinetics and the impact of uNGAL on clearance; it does not report a pharmacodynamic (exposure-response) relationship or numeric PD parameters for fibrinogen_human. |
| popPK | Helms_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of fibrin clot structure and formation kinetics, not a pharmacokinetic study reporting disposition parameters for fibrinogen. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of high-alert medications in obese pediatric patients and does not mention fibrinogen_human or report any pharmacokinetic parameters for it. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review on dosing strategies for high-alert medications in obese pediatric patients and does not contain any pharmacodynamic (PD) or exposure-response analysis for fibrinogen_human. |
| popPK | Hughes_1985 | irrelevant | 0 | 0 | The study measures plasma concentrations of fibrinogen derivatives (FPA, B beta 1-42) as biomarkers in liver disease, not pharmacokinetic parameters (CL, V, etc.) for fibrinogen as a drug. |
| popPK | Hyltegren_2020 | irrelevant | 0 | 0 | The paper is a computational study on the adsorption of fibrinogen to silica surfaces and does not report any pharmacokinetic parameters. |
| popPK | Irfan_2022 | irrelevant | 0 | 0 | The study investigates the antiplatelet effects of ginseng extracts, and fibrinogen is only mentioned as a ligand for integrin binding assays, not as the subject drug for pharmacokinetic analysis. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not fibrinogen_human. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not a pharmacodynamic (PD) or exposure-response model for fibrinogen; no PD parameters (Emax, EC50, etc.) are reported. |
| popPK | Kashmoola_2026 | irrelevant | 0 | 0 | The paper is a narrative review on polypharmacy and bone health in diabetes, containing no pharmacokinetic data or parameters for fibrinogen. |
| PD | Kashmoola_2026 | not_relevant | 0 | 0 | The paper is a narrative review discussing the qualitative effects of polypharmacy on bone health in diabetes and does not report any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for fibrinogen_human. |
| popPK | Keyt_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of TNK-tPA (a tPA variant), not fibrinogen, which is only mentioned as a substrate or conserved protein. |
| popPK | Ko_2016 | irrelevant | 0 | 0 | The paper is a mechanistic study of bacterial protein binding to fibrinogen, not a pharmacokinetic study of fibrinogen as a drug. |
| popPK | Konig_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on liposome delivery of antisense oligonucleotides across a blood-brain barrier model and does not report pharmacokinetic parameters for fibrinogen. |
| PD | Konig_2025 | not_relevant | 0 | 0 | The paper focuses on drug delivery (liposomes) across a BBB model and does not report a pharmacodynamic exposure-response or dose-response relationship for fibrinogen_human. |
| popPK | Lan_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on thromboinflammation in necrotizing enterocolitis where fibrinogen is only mentioned as a histological marker or biomarker, not as a subject drug for pharmacokinetic analysis. |
| PD | Lan_2026 | not_relevant | 0 | 0 | The paper investigates the pathophysiology of necrotizing enterocolitis and reports correlations between biomarkers (including fibrinogen) and disease severity, but it does not report a pharmacodynamic exposure-response or dose-response relationship for a drug with numeric PD parameters. |
| popPK | Lautenschlager_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on neutrophil phagocytosis of hemozoin crystals, where fibrinogen acts as a modulator of uptake rather than the subject of a pharmacokinetic analysis. |
| popPK | Lin_2003 | irrelevant | 2 | 0 | The study reports clinical clearance rates (percent reduction) during a therapeutic procedure (plasmapheresis) rather than pharmacokinetic disposition parameters (CL, V, ka) for fibrinogen as a drug. |
| popPK | Lipitsä_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzymatic degradation of fibrinogen, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper is a clinical study on tigecycline-associated acute pancreatitis and does not report pharmacokinetic parameters for fibrinogen_human. |
| PD | Lu_2026 | not_relevant | 0 | 0 | The paper is a retrospective case-control study identifying clinical risk factors for tigecycline-associated acute pancreatitis and does not report any pharmacodynamic or exposure-response relationship for fibrinogen. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for colistin sulfate, not fibrinogen_human. |
| PD | Ma_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PPK) model for colistin sulfate and uses Monte Carlo simulations for probability of target attainment (PTA), but it does not report a pharmacodynamic (PD) model, exposure-response relationship, or numeric PD parameters (e.g., Emax, EC50) for fibrinogen or any other endpoint. |
| popPK | Meyer_1978 | irrelevant | 2 | 1 | The study focuses on the specific mechanism of fibrinogen clearance from alveoli in dogs (degradation and bulk flow) rather than standard systemic pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Nivia_2022 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for vancomycin, not fibrinogen_human. |
| PD | Nivia_2022 | not_relevant | 0 | 0 | The paper is a scoping review of population pharmacokinetic (PopPK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships for fibrinogen_human. |
| popPK | Oangkhana_2021 | irrelevant | 0 | 0 | The paper studies a fibrinogen-related protein in shrimp (invertebrate immunity), not the pharmacokinetics of human fibrinogen. |
| popPK | Parikh_2023 | irrelevant | 2 | 1 | The paper is a single case report describing a clinical outcome and providing a rough estimated half-life range (24-48 hours) without a compartmental model, clearance, or volume of distribution parameters. |
| popPK | Postic_2023 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of Dyrk1A overexpression on bleeding and fibrinogen levels in mice, not the pharmacokinetic disposition parameters (CL, V, etc.) of fibrinogen as a drug. |
| popPK | Santoro_1999 | irrelevant | 0 | 0 | The paper is a comparative study of snake venom biological activities and does not report pharmacokinetic parameters for fibrinogen. |
| PD | Santoro_1999 | not_relevant | 1 | 0 | The paper compares biological activities of snake venoms and mentions clotting activity on fibrinogen, but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug fibrinogen_human itself, nor does it provide numeric PD parameters for a drug effect. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on fibrinogen's role in cerebral amyloid angiopathy pathology and does not report any pharmacokinetic parameters (CL, V, etc.) for fibrinogen. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on cerebral amyloid angiopathy pathology and does not report pharmacokinetic parameters for fibrinogen. |
| PD | Sohn_2014 | not_relevant | 0 | 0 | The paper describes a qualitative histological comparison of plaque formation in a rat model using a fixed dose of anthocyanin, with no exposure-response analysis, PK/PD modeling, or numeric PD parameters reported. |
| popPK | Underwood_2025 | irrelevant | 0 | 0 | The study is a mechanistic proteomics investigation identifying stabilin-2 ligands and does not report pharmacokinetic parameters for fibrinogen. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on teicoplanin pharmacokinetics and dosing in pediatric ICU patients, not fibrinogen_human. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning models for teicoplanin dose prediction and does not report any pharmacodynamic (PD) or exposure-response relationship for fibrinogen_human. |
| popPK | Wilde_1989 | irrelevant | 0 | 0 | The paper is a clinical diagnostic study comparing D-dimer and FDP levels, not a pharmacokinetic study of fibrinogen. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for polymyxin B, not fibrinogen_human. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for polymyxin B, not fibrinogen, and does not provide any pharmacodynamic (PD) or exposure-response parameters for fibrinogen. |
| PGx | Yeleswarapu_2025 | not_relevant | 0 | 0 | The paper evaluates hydrogel formulations for extracellular vesicle delivery and does not report pharmacogenomic effects on the PK or PD of fibrinogen. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a review of mRNA-LNP pharmacokinetics and mentions fibrinogen only as a component of the protein corona, without reporting any quantitative PK parameters for fibrinogen itself. |
| PD | Zhang_2025 | not_relevant | 1 | 0 | The paper is a systematic review of mRNA-LNP therapeutics and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for fibrinogen_human. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of linezolid, and fibrinogen is only listed as a baseline clinical variable, not the subject drug. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) and machine learning for concentration prediction of linezolid; it does not report a pharmacodynamic (PD) model or exposure-response relationship for fibrinogen. |
| popPK | Zhang_2026_2 | irrelevant | 0 | 0 | The study is a clinical safety comparison of antibiotics (contezolid vs linezolid) and does not report pharmacokinetic parameters for fibrinogen_human. |
| PD | Zhang_2026_2 | not_relevant | 0 | 0 | The paper is a retrospective cohort study comparing hematological safety outcomes (anemia risk) between two drugs; it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters for fibrinogen or any other biomarker. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for nivolumab and relatlimab, not fibrinogen_human. |
| PD | Zhao_2024 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) models for nivolumab and relatlimab, including nonlinear clearance parameters, but does not report any pharmacodynamic (PD) or exposure-response relationship for fibrinogen_human or any other biomarker. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper investigates the efficacy of a corneal hydrogel for wound healing and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of fibrinogen. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for tigecycline, not fibrinogen_human. |
| PD | Zhou_2022 | not_relevant | 1 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for tigecycline and does not report any pharmacodynamic (PD) or exposure-response analysis with numeric PD parameters. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper studies the immune function of a fibrinogen-related protein (ANGPT4) in zebrafish and does not report pharmacokinetic parameters for human fibrinogen. |
| popPK | van_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Procizumab (an antibody), not fibrinogen_human, which is only mentioned as a routine safety laboratory parameter. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fibrinogen_human`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
