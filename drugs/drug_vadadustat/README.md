# vadadustat

- **generic name:** vadadustat
- **ATC codes:** `B03XA08`
- **DrugBank:** [DB12255](https://go.drugbank.com/drugs/DB12255)
- **groups:** approved, investigational

## About

**Description.** One of the most common symptoms of advanced renal disease is anemia, caused primarily by the inability of the kidney to respond to anemic conditions with a corresponding increase in [erythropoietin] (EPO) production.[A244165] The treatment of anemia associated with chronic kidney disease (CKD) has traditionally involved the administration of exogenous erythropoiesis-stimulating agents (ESAs), such as [darbepoetin alfa], to counter the decrease in endogenous EPO production. While efficacious, the overuse of ESAs has been associated with cardiovascular complications, progression of CKD, and increases in overall mortality.[A244165]

A relatively new and alternative treatment option for patients with anemia associated with CKD is the use of small molecule inhibitors of hypoxia-inducible factor prolyl-hydroxylase (HIF-PH). These agents inhibit prolyl-hydroxylase domain oxygen sensors, mimicking hypoxic conditions and activating hypoxia-inducible factors. These transcription factors serve a multitude of roles, including the stimulation of erythropoiesis.[A244165]

Vadadustat is an orally administered inhibitor of HIF-PH with a safety and efficacy profile non-inferior to [darbepoetin alfa] for the treatment of anemia in patients with CKD undergoing dialysis.[A244145,A244155] It was first approved in Japan in 2020,[L50371] and in April 2023, it was approved by the EMA for the treatment of symptomatic anemia associated with CKD in adults on chronic maintenance dialysis.[L39610,L46936,L46951] Vadadustat was approved by the FDA in March 2024.[L50371]

**Indication.** Vadadustat is indicated for the treatment of symptomatic anemia associated with chronic kidney disease (CKD) in adults on chronic maintenance dialysis.[L46936, L50366]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 20:50 | 30:10 | 0/0/0 | 0/1/0 | 0/0/0 | 406,859/28,497 | ollama / qwen3.8:27b-mtp-q8_0 | 33 | 2/31 | 33/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Todsaporn_2026](drugs/drug_vadadustat/pd_Todsaporn_2026_Apoptosis_induction.md) | Todsaporn D et al., Integrating QSAR-Machine Learning, Bioc…, Journal of chemical informa… (2026) | [10.1021/acs.jcim.6c00414](https://doi.org/10.1021/acs.jcim.6c00414) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Todsaporn_2026](drugs/drug_vadadustat/pd_Todsaporn_2026_Cytotoxicity_HeLa_cells.md) | Todsaporn D et al., Integrating QSAR-Machine Learning, Bioc…, Journal of chemical informa… (2026) | [10.1021/acs.jcim.6c00414](https://doi.org/10.1021/acs.jcim.6c00414) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Todsaporn_2026](drugs/drug_vadadustat/pd_Todsaporn_2026_JAK2_kinase_inhibition.md) | Todsaporn D et al., Integrating QSAR-Machine Learning, Bioc…, Journal of chemical informa… (2026) | [10.1021/acs.jcim.6c00414](https://doi.org/10.1021/acs.jcim.6c00414) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Todsaporn_2026](drugs/drug_vadadustat/pd_Todsaporn_2026_JAK2_protein_expression.md) | Todsaporn D et al., Integrating QSAR-Machine Learning, Bioc…, Journal of chemical informa… (2026) | [10.1021/acs.jcim.6c00414](https://doi.org/10.1021/acs.jcim.6c00414) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Todsaporn_2026](drugs/drug_vadadustat/pd_Todsaporn_2026_STAT3_protein_expression.md) | Todsaporn D et al., Integrating QSAR-Machine Learning, Bioc…, Journal of chemical informa… (2026) | [10.1021/acs.jcim.6c00414](https://doi.org/10.1021/acs.jcim.6c00414) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Todsaporn_2026](drugs/drug_vadadustat/pd_Todsaporn_2026_STAT5_protein_expression.md) | Todsaporn D et al., Integrating QSAR-Machine Learning, Bioc…, Journal of chemical informa… (2026) | [10.1021/acs.jcim.6c00414](https://doi.org/10.1021/acs.jcim.6c00414) |

## Coverage

- **PubMed hits:** 90 matched, 56 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chavan_2021.pdf` | Chavan A et al., Effect of Moderate Hepatic Impairment o…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.927](https://doi.org/10.1002/cpdd.927) | [33661566](https://pubmed.ncbi.nlm.nih.gov/33661566) | The study reports quantitative PK parameters (AUC, Cmax, half-life) for vadadustat, but lacks compartmental model parameters (CL, V, Q) and specific mean values for AUC/Cmax are not explicitly listed, only ratios and half-lives. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |
| `Yokoyama_2026.pdf` | Yokoyama S et al., Impact of SLCO1B1 Gene Polymorphisms on…, European journal of drug me… (2026) | pgx | 8 | [10.1007/s13318-026-01005-1](https://doi.org/10.1007/s13318-026-01005-1) | [42310169](https://www.ncbi.nlm.nih.gov/pubmed/42310169) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |

<sub>queue written 2026-09-08T20:44:59.273501+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adler_2026 | irrelevant | 0 | 0 | The paper investigates bacteriophage-antibiotic interactions in bacteria and does not mention vadadustat or report any pharmacokinetic parameters. |
| PD | Adler_2026 | not_relevant | 0 | 0 | The paper studies antibiotic-phage synergy in bacteria and does not involve the drug vadadustat or any pharmacodynamic modeling. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper is a computational study on dengue virus inhibitors and does not involve vadadustat or report any pharmacokinetic parameters for it. |
| PD | Ahmadi_2025 | not_relevant | 0 | 0 | The paper is a computational study on dengue virus inhibitors and does not mention vadadustat or report any pharmacodynamic or exposure-response data. |
| popPK | Alas-Pineda_2025 | irrelevant | 0 | 0 | The paper is a review of chlorpheniramine maleate pharmacokinetics and does not contain any data for vadadustat. |
| PD | Alas-Pineda_2025 | not_relevant | 0 | 0 | The paper is a review of Chlorpheniramine maleate pharmacokinetics and does not contain any data or analysis for vadadustat. |
| popPK | Batlle_2025 | irrelevant | 0 | 0 | The paper is a computational study on ALDH1A3 inhibitors and does not involve the drug vadadustat or report any pharmacokinetic parameters for it. |
| PD | Batlle_2025 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel ALDH1A3 inhibitor (VS1), not for vadadustat, and does not contain any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | The paper is a molecular simulation study of thiazole derivatives as LasR inhibitors in P. aeruginosa and does not involve the drug vadadustat or report any pharmacokinetic parameters for it. |
| PD | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper is a computational study on thiazole derivatives as LasR inhibitors and does not involve vadadustat or report any pharmacodynamic exposure-response data. |
| popPK | Bi_2024 | irrelevant | 4 | 1 | The study is primarily mechanistic (in vitro/in vivo DDI) and reports only relative changes in clearance (e.g., 4-fold higher) rather than absolute quantitative PK parameters (CL, V, t1/2) for vadadustat. |
| popPK | Clokie_2026 | irrelevant | 0 | 0 | The paper investigates bacteriophage-antibiotic interactions in bacteria and does not involve the drug vadadustat or pharmacokinetic parameters. |
| PD | Clokie_2026 | not_relevant | 0 | 0 | The paper focuses on bacteriophage-antibiotic interactions and MIC shifts in bacterial isolates, containing no pharmacokinetic or pharmacodynamic modeling for the drug vadadustat. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper discusses menthol-based antimicrobials and does not involve vadadustat or pharmacokinetic parameters. |
| PD | Di_2026 | not_relevant | 0 | 0 | The paper discusses menthol-based antimicrobials (MF1, MCl2) and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Didier_2026 | irrelevant | 0 | 0 | The paper is an in-vitro drug discovery study for Trypanosoma cruzi and does not involve vadadustat or pharmacokinetic parameters. |
| PD | Didier_2026 | not_relevant | 0 | 0 | The paper reports dose-response curves and EC50 values for novel compounds against Trypanosoma cruzi, but does not mention or analyze the drug vadadustat. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review on sulfonamides and antioxidants for diabetes management and does not mention vadadustat or report any pharmacokinetic parameters for it. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Draveny_2026 | irrelevant | 0 | 0 | The paper studies the antibiotic adjuvant NV716 and its effect on antibiotic accumulation in bacteria, not the pharmacokinetics of vadadustat. |
| PD | Draveny_2026 | not_relevant | 0 | 0 | The paper studies NV716, not vadadustat, and focuses on bacterial membrane permeability and antibiotic accumulation rather than pharmacodynamic modeling of the target drug. |
| popPK | Dusek_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of MI-883, not vadadustat. |
| PD | Dusek_2025 | not_relevant | 0 | 0 | The paper studies MI-883, not vadadustat, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Eckardt_2021 | irrelevant | 0 | 0 | The paper is a study design and baseline characteristics report for Phase 3 clinical trials, containing no pharmacokinetic data or quantitative disposition parameters for vadadustat. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new HIF-2α agonist and a codrug, using vadadustat only as a comparator or component in mechanistic/cellular assays without reporting any pharmacokinetic parameters for vadadustat. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper is a computational and in-vitro study on PROTAC membrane interactions and does not report pharmacokinetic parameters for vadadustat. |
| PD | Inganäs_2025 | not_relevant | 0 | 0 | The paper focuses on the physicochemical properties and membrane interactions of PROTACs, not on the pharmacodynamics or exposure-response relationship of vadadustat. |
| popPK | Jain_2025 | irrelevant | 1 | 0 | The paper is a review of HIF-PHIs and does not report original quantitative pharmacokinetic parameter values for vadadustat. |
| PD | Janković_2025 | not_relevant | 1 | 0 | The text is a qualitative summary of PK properties and clinical efficacy (mean Hb increase) without reporting any exposure-response or dose-response model parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | The paper describes activity-based assays for HIF heterodimerization and does not report pharmacokinetic parameters for vadadustat. |
| PD | Janssens_2021 | not_relevant | 0 | 0 | The paper describes activity-based assays for HIF heterodimerization and does not report pharmacodynamic or exposure-response data for vadadustat. |
| popPK | Jha_2024 | irrelevant | 0 | 0 | The paper is a computational study on MTHFD2 inhibitors and does not involve the drug vadadustat or report any pharmacokinetic parameters. |
| PD | Jha_2024 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) of MTHFD inhibitors and does not involve vadadustat or report any pharmacodynamic or exposure-response data. |
| popPK | Karpe_2026 | irrelevant | 0 | 0 | The paper is a review of clotrimazole (CLZ) for cancer therapy and does not contain any data or parameters for vadadustat. |
| PD | Karpe_2026 | not_relevant | 0 | 0 | The paper is a review of clotrimazole's anticancer mechanisms and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Krishnan_2025 | irrelevant | 0 | 0 | The paper describes a deep learning approach for antibiotic design and is unrelated to vadadustat pharmacokinetics. |
| PD | Krishnan_2025 | not_relevant | 0 | 0 | The paper describes a deep learning approach for de novo antibiotic design and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro characterization of BMX kinase inhibitors and does not involve the drug vadadustat or report any pharmacokinetic parameters for it. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses on the medicinal chemistry and molecular modeling of BMX kinase inhibitors, reporting in vitro IC50/EC50 values and binding kinetics, but contains no pharmacokinetic data, exposure-response analysis, or pharmacodynamic modeling for vadadustat or any other drug. |
| popPK | Locatelli_2022 | irrelevant | 0 | 0 | The paper is a narrative review of HIF-PHD inhibitors focusing on clinical efficacy and safety, containing no original pharmacokinetic data or quantitative disposition parameters for vadadustat. |
| popPK | Marbán-González_2025 | irrelevant | 0 | 0 | The paper focuses on the design of focused libraries for Staphylococcus aureus FabI inhibitors and does not study vadadustat or report its pharmacokinetic parameters. |
| PD | Marbán-González_2025 | not_relevant | 0 | 0 | The paper focuses on the design of chemical libraries for Staphylococcus aureus FabI inhibitors using machine learning and does not mention vadadustat or report any pharmacodynamic (exposure-response) data. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro antiproliferative effects of ethanoanthracene compounds in CLL cell lines and does not involve the drug vadadustat or report any pharmacokinetic parameters. |
| PD | McKeown_2024 | not_relevant | 0 | 0 | The paper studies novel ethanoanthracene compounds in CLL cell lines and does not mention or analyze vadadustat. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel CAR agonists (imidazo[1,2-a]pyridine derivatives) and does not involve the drug vadadustat or report any pharmacokinetic parameters for it. |
| PD | Mejdrová_2023 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological potency (EC50) for novel CAR agonists, not pharmacodynamic exposure-response or dose-response relationships for the drug vadadustat. |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of sticholysin I (StnI) as a senolytic agent and does not mention vadadustat or report any pharmacokinetic parameters for it. |
| PD | Moral-Sanz_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of senotoxins (StnI/StnIG) and does not mention or analyze the drug vadadustat. |
| popPK | Muliaditan_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of transferrin receptor (TfR) bispecific antibodies (e.g., trontinemab) and does not mention or study vadadustat. |
| PD | Muliaditan_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) model for antibody brain delivery and does not report any pharmacodynamic (PD) or exposure-response relationship for vadadustat or any other drug. |
| PD | Nakai_2024 | not_relevant | 2 | 1 | The paper describes qualitative drug-specific differences in gene expression and PK profiles in mice but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for vadadustat. |
| PD | Navarro-Gonzales_2024 | not_relevant | 3 | 2 | The text describes dose-proportional PK and qualitative dose-related EPO increases but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | The paper studies morphine derivatives and does not mention vadadustat or report any pharmacokinetic parameters for it. |
| PD | Nourmandipour_2025 | not_relevant | 0 | 0 | The paper studies morphine derivatives, not vadadustat, and reports dose-response data (ED50) for unrelated compounds. |
| popPK | OJeanson_2025 | irrelevant | 0 | 0 | The paper focuses on beta-lactam/β-lactamase inhibitor combinations (e.g., ceftazidime-avibactam) and does not mention or study vadadustat. |
| PD | OJeanson_2025 | not_relevant | 0 | 0 | The paper is a simulation study for beta-lactam antibiotics and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Rudnicki_2024 | irrelevant | 0 | 0 | The paper is an electrochemical study of danofloxacin, not a pharmacokinetic study of vadadustat. |
| PD | Rudnicki_2024 | not_relevant | 0 | 0 | The paper is an analytical chemistry study on the electrochemical detection of danofloxacin, not a pharmacodynamic or exposure-response study of vadadustat. |
| popPK | Sako_2026 | irrelevant | 0 | 0 | The paper describes a computational drug design method (DiffPharma) and does not report pharmacokinetic parameters for vadadustat. |
| PD | Sako_2026 | not_relevant | 0 | 0 | The paper describes a computational method for 3D molecular generation and does not contain any pharmacodynamic, exposure-response, or dose-response data for vadadustat or any other drug. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | The paper is a computational molecular docking and simulation study where vadadustat serves only as a positive control, and it does not report any quantitative pharmacokinetic disposition parameters (CL, V, etc.) for the drug. |
| PD | Sayaf_2024 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) identifying novel PHD inhibitors; it does not report any pharmacodynamic, exposure-response, or dose-response data for vadadustat. |
| PD | Shaikh_2025 | not_relevant | 2 | 1 | The text is a comprehensive review that qualitatively mentions pharmacodynamics and efficacy but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed exposure-response curves in the provided excerpt. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper is a review on pharmaceutical cocrystals and intellectual property, not a pharmacokinetic study, and contains no quantitative PK parameters for vadadustat. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper studies HDAC inhibitors for malaria and does not mention vadadustat. |
| PD | Tavares_2023 | not_relevant | 0 | 0 | The paper studies antimalarial HDAC inhibitors (1,3-diphenylureido hydroxamates) and does not mention vadadustat or report any pharmacodynamic modeling for it. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of candesartan cilexetil against MRSA and does not involve vadadustat or pharmacokinetic parameters. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA, not the pharmacodynamics of vadadustat. |
| popPK | Todsaporn_2026 | irrelevant | 0 | 0 | The paper is a study on JAK2 inhibitors for cervical cancer and does not involve vadadustat or report any pharmacokinetic parameters. |
| PD | Todsaporn_2026 | not_relevant | 4 | 5 | The paper reports dose-response curves and IC50 values for JAK2 inhibitors in cervical cancer cells, but does not study the drug vadadustat. |
| popPK | Tükenmez_2026 | irrelevant | 0 | 0 | The paper describes the development of TriPcides (antibiotics) against Staphylococcus aureus and does not mention vadadustat or report any pharmacokinetic parameters. |
| PD | Tükenmez_2026 | not_relevant | 0 | 0 | The paper studies TriPcides (antibacterial compounds) and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| PD | Yokoyama_2024 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for measuring vadadustat plasma concentrations and reports PK variability, but it does not report any pharmacodynamic (PD) or exposure-response relationship or numeric PD parameters. |
| popPK | Yokoyama_2026 | irrelevant | 0 | 0 | The evidence contains only the paper title and no quantitative pharmacokinetic parameter values or data for vadadustat. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper discusses vadadustat only in the context of transporter-mediated drug-drug interactions (DDIs), not pharmacogenomic effects. |
| popPK | Zuk_2022 | irrelevant | 2 | 0 | The paper is a preclinical characterization summary that mentions a short half-life but does not report quantitative PK parameters (CL, V, Q, ka) or compartmental model values for vadadustat. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title indicating a correction to a PK/PD study, containing no data, models, or numeric parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_vadadustat`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
