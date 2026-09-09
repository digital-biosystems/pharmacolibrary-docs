# methoxy polyethylene glycol-epoetin beta

- **generic name:** methoxy polyethylene glycol-epoetin beta
- **ATC codes:** `B03XA03`
- **DrugBank:** [DB09107](https://go.drugbank.com/drugs/DB09107)
- **groups:** approved, investigational

## About

**Description.** Methoxy polyethylene glycol-epoetin beta is a chemically synthesised Erythropoiesis Stimulating Agent (ESA) with a longer half-life than erythropoietin. ESA is used to increase synthesis of red blood cells to  treat chronic kidney disease associated anemia.

**Indication.** For the treatment of patients with anaemia associated with chronic kidney disease. Not a substitute for RBC transfusion if immediate correction of anemia is required.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 19:59 | 9:19 | 0/0/0 | 1/1/0 | 0/0/0 | 156,668/3,836 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 3/10 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Byun_2021](drugs/drug_methoxy_polyethylene_glycol_epoetin_beta/pd_Byun_2021_Arthritis_clinical_score.md) | Byun JY et al., Target modulation and pharmacokinetics/…, Scientific reports (2021) | [10.1038/s41598-021-98255-7](https://doi.org/10.1038/s41598-021-98255-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Byun_2021](drugs/drug_methoxy_polyethylene_glycol_epoetin_beta/pd_Byun_2021_BTK_occupancy.md) | Byun JY et al., Target modulation and pharmacokinetics/…, Scientific reports (2021) | [10.1038/s41598-021-98255-7](https://doi.org/10.1038/s41598-021-98255-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Byun_2021](drugs/drug_methoxy_polyethylene_glycol_epoetin_beta/pd_Byun_2021_BTK_phosphorylation.md) | Byun JY et al., Target modulation and pharmacokinetics/…, Scientific reports (2021) | [10.1038/s41598-021-98255-7](https://doi.org/10.1038/s41598-021-98255-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Byun_2021](drugs/drug_methoxy_polyethylene_glycol_epoetin_beta/pd_Byun_2021_Histological_index.md) | Byun JY et al., Target modulation and pharmacokinetics/…, Scientific reports (2021) | [10.1038/s41598-021-98255-7](https://doi.org/10.1038/s41598-021-98255-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yan_2013](drugs/drug_methoxy_polyethylene_glycol_epoetin_beta/pd_Yan_2013_hemoglobin.md) | Yan X et al., Quantitative assessment of minimal effe…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.39](https://doi.org/10.1038/psp.2013.39) |

## Coverage

- **PubMed hits:** 38 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fishbane_2007.pdf` | Fishbane S et al., Pharmacokinetic and pharmacodynamic pro…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007307570](https://doi.org/10.1177/0091270007307570) | [17962427](https://pubmed.ncbi.nlm.nih.gov/17962427) | The study reports quantitative PK parameters (half-life, AUC, CL/F) for methoxy polyethylene glycol-epoetin beta directly in the abstract text. |
| `Chanu_2020.pdf` | Chanu P et al., Model-based approach for methoxy polyet…, British journal of clinical… (2020) | popPK | 9 | [10.1111/bcp.14186](https://doi.org/10.1111/bcp.14186) | [31770451](https://pubmed.ncbi.nlm.nih.gov/31770451) | The paper describes a population PK/PD model for the subject drug, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains summary simulation outcomes. |
| `Mouksassi_2025.pdf` | Mouksassi S et al., Pharmacokinetic and pharmacodynamic mod…, British journal of clinical… (2025) | pd | 5 | [10.1002/bcp.70165](https://doi.org/10.1002/bcp.70165) | [40662229](https://www.ncbi.nlm.nih.gov/pubmed/40662229) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Reynaldo-Fernandez_2026.pdf` | Reynaldo-Fernandez G et al., Forecasting the Biological Effect of PE…, Pharmaceutical research (2026) | pd | 5 | [10.1007/s11095-025-04013-z](https://doi.org/10.1007/s11095-025-04013-z) | [41540295](https://www.ncbi.nlm.nih.gov/pubmed/41540295) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-09-08T19:58:02.934373+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beard_2009 | irrelevant | 0 | 0 | The paper is a technical review of CellML metadata standards and contains no pharmacokinetic data or parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Beard_2009 | not_relevant | 0 | 0 | The paper discusses CellML metadata standards and tools for biological modeling and contains no pharmacodynamic or exposure-response data for methoxy polyethylene glycol-epoetin beta. |
| popPK | Bohnen_2026 | irrelevant | 0 | 0 | The paper studies tributyrin (a butyrate prodrug) in Parkinson's disease and does not mention or report pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Bohnen_2026 | not_relevant | 0 | 0 | The paper studies tributyrin (a butyrate prodrug) in Parkinson's disease, not methoxy polyethylene glycol-epoetin beta, and does not report any exposure-response or dose-response pharmacodynamic parameters for the target drug. |
| popPK | Byun_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of poseltinib (a BTK inhibitor), not methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Chanu_2020 | relevant | 9 | 2 | The paper describes a population PK/PD model for the subject drug, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains summary simulation outcomes. |
| PD | Chanu_2020 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or any data to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Choi_2026 | irrelevant | 2 | 0 | The paper is a narrative review that mentions methoxy polyethylene glycol-epoetin beta only as a case study for regulatory extrapolation, without reporting any original quantitative pharmacokinetic parameter values. |
| PD | Choi_2026 | not_relevant | 2 | 0 | The paper is a narrative review that qualitatively mentions the use of PK/PD models for methoxy polyethylene glycol-epoetin beta to support pediatric dosing, but it does not report or provide access to any specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | De_2026 | irrelevant | 0 | 0 | The paper investigates calcium signaling in the mouse cochlea under different anesthetics and does not involve the drug methoxy_polyethylene_glycol_epoetin_beta or any pharmacokinetic analysis. |
| PD | De_2026 | not_relevant | 0 | 0 | The paper investigates the effects of anaesthetic regimes on cochlear calcium signaling in mice and does not involve methoxy polyethylene glycol-epoetin beta or any pharmacodynamic modeling of that drug. |
| popPK | Del_2008 | irrelevant | 0 | 0 | The paper is a review discussing CERA (methoxy_polyethylene_glycol_epoetin_beta) qualitatively without reporting any quantitative pharmacokinetic parameter values. |
| PD | Del_2008 | not_relevant | 1 | 0 | The text is a qualitative review of the drug's mechanism and clinical efficacy without reporting any specific numeric pharmacodynamic parameters, concentration-effect curves, or PK/PD modeling results. |
| popPK | Evans_2026 | irrelevant | 0 | 0 | The paper is a review of Na+-K+-ATPase inhibitors (cardiac glycosides) and does not mention or report pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Evans_2026 | not_relevant | 0 | 0 | The paper is a critical analysis of clinical trials for repurposing Na+-K+-ATPase inhibitors (cardiac glycosides) and does not contain any pharmacokinetic or pharmacodynamic modeling, nor does it report numeric PD parameters for methoxy polyethylene glycol-epoetin beta. |
| PD | Fishbane_2007 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative PD outcomes (reticulocyte response) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect model. |
| popPK | Fujii_2023 | irrelevant | 0 | 0 | The paper is a clinical outcome study focusing on erythropoietin resistance index (ERI) and cardiovascular events, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kafeel_2025 | irrelevant | 0 | 0 | The paper is a review on adiponectin and its receptor agonists in cancer, and does not mention methoxy_polyethylene_glycol_epoetin_beta or report any pharmacokinetic parameters for it. |
| PD | Kafeel_2025 | not_relevant | 0 | 0 | The paper is a review on adiponectin and its receptor agonist AdipoRon in cancer metabolism; it does not mention methoxy polyethylene glycol-epoetin beta or report any PD parameters for it. |
| popPK | Locatelli_2020 | irrelevant | 0 | 0 | The paper is a review discussing clinical outcomes and safety of ESAs, containing no pharmacokinetic parameters or quantitative disposition data for methoxy polyethylene glycol-epoetin beta. |
| PD | Locatelli_2020 | not_relevant | 1 | 0 | The text is a narrative review discussing clinical outcomes and safety profiles of ESAs, mentioning methoxy polyethylene glycol-epoetin beta only in the context of a randomized trial with no significant differences, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Mesgarpour_2017 | irrelevant | 0 | 0 | The paper is a systematic review of clinical outcomes (harm/mortality) for erythropoiesis-stimulating agents and does not report pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Mesgarpour_2017 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (mortality, adverse events) and does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| popPK | Mouksassi_2025 | irrelevant | 0 | 0 | The paper focuses on continuous erythropoiesis receptor activator (CERA), not methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Mouksassi_2025 | not_relevant | 0 | 0 | The paper focuses on continuous erythropoiesis receptor activator (CERA), not methoxy polyethylene glycol-epoetin beta. |
| popPK | Pérez-Ruixo_2013 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical trials focusing on haemoglobin variability and dosing, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Pérez-Ruixo_2013 | not_relevant | 0 | 0 | The paper is a meta-analysis comparing mean haemoglobin and dose variability across different erythropoiesis-stimulating agents, not a pharmacodynamic modeling study deriving exposure-response parameters for methoxy polyethylene glycol-epoetin beta. |
| popPK | Reynaldo-Fernandez_2026 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameters or data for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Reynaldo-Fernandez_2026 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or any data to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Reynaldo-Fernández_2018 | irrelevant | 0 | 0 | The study focuses on ior®EPOCIM, MIRCERA®, and PEG-EPO analogues, not methoxy_polyethylene_glycol_epoetin_beta. |
| popPK | Reynaldo_2018 | irrelevant | 0 | 0 | The study evaluates novel Cuban PEGylated rHuEPOs and uses Mircera (methoxy_polyethylene_glycol_epoetin_beta) only as a comparator, not as the subject drug. |
| PD | Reynaldo_2018 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic effects (reticulocytes, hemoglobin) and PK parameters (half-life) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Rieger_2016 | irrelevant | 0 | 0 | The paper is a clinical study on dose conversion between two erythropoiesis-stimulating agents and does not report any pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Rieger_2016 | not_relevant | 1 | 0 | The study is a retrospective analysis of dose conversion factors during a drug switch, explicitly stating that a true dose-response ratio requires a prospective study, and it does not report any numeric PD parameters or concentration-effect relationships. |
| popPK | Sabatini_2026 | irrelevant | 0 | 0 | The paper is an in-vitro materials science study on zirconia dental ceramics and does not involve the drug methoxy_polyethylene_glycol_epoetin_beta or any pharmacokinetic parameters. |
| popPK | Shinozuka_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of psychedelic drugs (DMT, LSD, psilocybin) and does not mention or study methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Shinozuka_2023 | not_relevant | 0 | 0 | The paper is a meta-analysis of psychedelic effects (DMT, LSD, psilocybin) and does not mention methoxy polyethylene glycol-epoetin beta or report any PD parameters for it. |
| popPK | Souqiyyeh_2009 | irrelevant | 0 | 0 | The paper is a survey of physician attitudes regarding anemia management in CKD and does not report any pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Souqiyyeh_2009 | not_relevant | 0 | 0 | The paper is a survey of physician attitudes and contains no pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Villa_2010 | irrelevant | 0 | 0 | The paper is a general review of erythropoiesis-stimulating agents and does not report specific quantitative pharmacokinetic parameters for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Villa_2010 | not_relevant | 1 | 0 | The text is a qualitative review discussing the general pharmacodynamics and clinical outcomes of ESAs without providing specific numeric PD parameters or concentration-effect data for methoxy polyethylene glycol-epoetin beta. |
| PGx | Wang_2013 | not_relevant | 0 | 0 | The paper investigates the role of ceramide in alcohol-induced neural proliferation in mice and does not mention methoxy_polyethylene_glycol_epoetin_beta or any pharmacokinetic/pharmacodynamic parameters of this drug. |
| popPK | Yan_2013 | irrelevant | 0 | 0 | The study focuses on epoetin and darbepoetin, not methoxy_polyethylene_glycol_epoetin_beta, which is not the subject drug. |
| popPK | Zhai_2025 | irrelevant | 0 | 0 | The paper is a neuroscience study on Parkinson's disease and levodopa-induced dyskinesia, and does not contain any pharmacokinetic data for methoxy_polyethylene_glycol_epoetin_beta. |
| PD | Zhai_2025 | not_relevant | 0 | 0 | The paper investigates the neurophysiological mechanisms of levodopa-induced dyskinesia in a mouse model and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for methoxy polyethylene glycol-epoetin beta. |
| popPK | unknown_2010 | irrelevant | 0 | 0 | The provided evidence contains only a date and session title with no pharmacokinetic data or drug information. |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2011 | irrelevant | 0 | 0 | The provided evidence is only a title of a conference abstract collection with no content, data, or mention of the drug. |
| PD | unknown_2011 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for methoxy polyethylene glycol-epoetin beta. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_methoxy_polyethylene_glycol_epoetin_beta`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
