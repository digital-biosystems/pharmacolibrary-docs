<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;vadadustat&quot;}]"></div>

# vadadustat

- **generic name:** vadadustat
- **ATC codes:** `B03XA08`
- **DrugBank:** [DB12255](https://go.drugbank.com/drugs/DB12255) · **PubChem:** [CID 23634441](https://pubchem.ncbi.nlm.nih.gov/compound/23634441)
- **molar mass:** 306.7 g/mol (C14H11ClN2O4) — DrugBank
- **groups:** approved, investigational

## About

Vadadustat is an antianemic medicine used to treat anemia associated with chronic kidney disease. It is an authorised medicine in the European Union, though its availability appears limited to one authorised product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27280485](https://www.wikidata.org/wiki/Q27280485) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vadadustat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` downregulator, `UGT1A1` inducer/substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` downregulator, `UGT1A1` inducer/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCG2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: EGLN1 (inhibitor), EGLN2 (inhibitor), EGLN3 (inhibitor), EPAS1 (stabilization), HIF1A (stabilization), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 21:53 | 3:37 | 0/0/0 | 0/0/0 | 0/0/0 | 131,568/3,801 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/32 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 106 matched, 70 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chavan_2021.pdf` | Chavan A et al., Effect of Moderate Hepatic Impairment o…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.927](https://doi.org/10.1002/cpdd.927) | [33661566](https://pubmed.ncbi.nlm.nih.gov/33661566) | The study reports quantitative PK parameters (AUC, Cmax, half-life) for vadadustat in humans, but lacks compartmental model parameters (CL, V, Q) and specific geometric mean values for AUC/Cmax are not explicitly listed, only ratios and half-lives. |
| `Navarro-Gonzales_2024.pdf` | Navarro-Gonzales P et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical pharmacology and t… (2024) | popPK | 8 | [10.1002/cpt.3342](https://doi.org/10.1002/cpt.3342) | [38924087](https://pubmed.ncbi.nlm.nih.gov/38924087) | The paper reports quantitative PK parameters (t1/2, Tmax) for vadadustat in humans, but lacks detailed compartmental model parameters (CL, V, Q) which are likely in the full text or supplementary material not fully provided here. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |
| `Yokoyama_2026.pdf` | Yokoyama S et al., Impact of SLCO1B1 Gene Polymorphisms on…, European journal of drug me… (2026) | pgx | 8 | [10.1007/s13318-026-01005-1](https://doi.org/10.1007/s13318-026-01005-1) | [42310169](https://www.ncbi.nlm.nih.gov/pubmed/42310169) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |

<sub>queue written 2026-10-05 21:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adler_2026 | irrelevant | 0 | 0 | The paper focuses on bacteriophage-antibiotic interactions in bacteria and does not involve vadadustat or pharmacokinetics. |
| PD | Adler_2026 | not_relevant | 0 | 0 | The paper studies antibiotic-phage synergy in bacteria and does not involve the drug vadadustat or any pharmacodynamic modeling. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper is an in silico study on dengue virus inhibitors and does not involve vadadustat or report any pharmacokinetic parameters for it. |
| PD | Ahmadi_2025 | not_relevant | 0 | 0 | The paper is a computational study on dengue virus inhibitors and does not mention vadadustat or report any pharmacodynamic or exposure-response data. |
| popPK | Alas-Pineda_2025 | irrelevant | 0 | 0 | The paper is a review of Chlorpheniramine maleate, not vadadustat. |
| PD | Alas-Pineda_2025 | not_relevant | 0 | 0 | The paper is a review of Chlorpheniramine maleate pharmacokinetics and does not contain any data or analysis for vadadustat. |
| popPK | Batlle_2025 | irrelevant | 0 | 0 | The paper describes the discovery of an ALDH1A3 inhibitor via virtual screening and does not involve vadadustat or its pharmacokinetics. |
| PD | Batlle_2025 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel ALDH1A3 inhibitor (VS1), not for vadadustat, and does not contain any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | The paper is a molecular simulation study of thiazole derivatives as LasR inhibitors in Pseudomonas aeruginosa and does not involve vadadustat or its pharmacokinetics. |
| PD | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper is a computational study on thiazole derivatives as LasR inhibitors and does not involve vadadustat or report any pharmacodynamic exposure-response data. |
| popPK | Bi_2024 | irrelevant | 4 | 0 | The study reports relative changes in clearance (4-fold) and qualitative PK alterations in monkeys, but does not provide absolute quantitative PK parameter values (CL, V, t1/2) for vadadustat. |
| popPK | Clokie_2026 | irrelevant | 0 | 0 | The paper focuses on phage-antibiotic interactions in bacteria and does not involve vadadustat or pharmacokinetics. |
| PD | Clokie_2026 | not_relevant | 0 | 0 | The paper focuses on bacteriophage-antibiotic interactions and MIC shifts in bacterial isolates, containing no pharmacokinetic or pharmacodynamic modeling for the drug vadadustat. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antimicrobial activity of menthol-based derivatives, not the pharmacokinetics of vadadustat. |
| PD | Di_2026 | not_relevant | 0 | 0 | The paper discusses menthol-based antimicrobials (MF1, MCl2) and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Didier_2026 | irrelevant | 0 | 0 | The paper focuses on drug discovery for Chagas disease using yeast chemogenomics and does not involve vadadustat or pharmacokinetic modeling. |
| PD | Didier_2026 | not_relevant | 0 | 0 | The paper reports dose-response curves and EC50 values for novel compounds against Trypanosoma cruzi, but does not mention or analyze the drug vadadustat. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes management and does not mention vadadustat or its pharmacokinetics. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Disharoon_2026 | irrelevant | 0 | 0 | The paper describes a computational model for drug-drug interaction prediction and does not report any pharmacokinetic parameters for vadadustat. |
| PD | Disharoon_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for drug-drug interaction prediction and contains no pharmacodynamic, exposure-response, or dose-response data for vadadustat. |
| popPK | Draveny_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of action of NV716 in bacteria and does not involve the drug vadadustat or its pharmacokinetics. |
| PD | Draveny_2026 | not_relevant | 0 | 0 | The paper studies NV716, not vadadustat, and focuses on bacterial membrane permeability and antibiotic accumulation rather than pharmacodynamic modeling of the target drug. |
| popPK | Dusek_2025 | irrelevant | 0 | 0 | The paper studies the drug MI-883 in mice and does not mention vadadustat or report any pharmacokinetic parameters for it. |
| PD | Dusek_2025 | not_relevant | 0 | 0 | The paper studies MI-883, not vadadustat, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Eckardt_2021 | irrelevant | 0 | 0 | The paper is a study design and baseline characteristics report for Phase 3 clinical trials, containing no pharmacokinetic parameters or quantitative disposition data for vadadustat. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new HIF-2α agonist and a codrug, using vadadustat only as a comparator agent in mechanistic and efficacy studies without reporting its pharmacokinetic parameters. |
| popPK | Imai_2024 | irrelevant | 0 | 0 | The study is a clinical comparison of efficacy and cost, reporting hemoglobin levels and dose escalation rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper discusses the conformational dynamics of PROTACs and does not involve vadadustat or report any pharmacokinetic parameters. |
| PD | Inganäs_2025 | not_relevant | 0 | 0 | The paper focuses on the physicochemical properties and membrane interactions of PROTACs, not on the pharmacodynamics or exposure-response relationship of vadadustat. |
| popPK | Jain_2025 | irrelevant | 2 | 0 | This is a review article discussing synthesis and analysis of HIF-PHIs, and the provided evidence contains no specific quantitative pharmacokinetic parameter values for vadadustat. |
| popPK | Janković_2025 | irrelevant | 2 | 0 | The text is a qualitative review describing general PK properties (linear, &gt;99% protein binding) without reporting specific quantitative disposition parameters (CL, V, t1/2) or a compartmental model. |
| PD | Janković_2025 | not_relevant | 1 | 0 | The text is a qualitative summary of PK properties and clinical efficacy (mean Hb increase) without reporting any exposure-response or dose-response model parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Janssens_2021 | not_relevant | 0 | 0 | The paper describes activity-based assays for HIF heterodimerization and does not report pharmacodynamic or exposure-response data for vadadustat. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | The paper studies SHIP1 ligands for Alzheimer's disease and does not involve the drug vadadustat or its pharmacokinetics. |
| PD | Jesudason_2026 | not_relevant | 0 | 0 | The paper discusses a SHIP1 ligand (compound 32) for Alzheimer's disease, not vadadustat, and does not report numeric PD parameters or exposure-response relationships for the target drug. |
| popPK | Jha_2024 | irrelevant | 0 | 0 | The paper is a computational study on MTHFD inhibitors and does not involve vadadustat or pharmacokinetic parameters. |
| PD | Jha_2024 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) of MTHFD inhibitors and does not involve vadadustat or report any pharmacodynamic or exposure-response data. |
| popPK | Jian_2022 | irrelevant | 0 | 0 | The study focuses on the formulation of liposomes for PHD2 inhibitors (including vadadustat) and in vitro efficacy, without reporting quantitative pharmacokinetic parameters for vadadustat. |
| popPK | Karpe_2026 | irrelevant | 0 | 0 | The paper is a review of clotrimazole's anticancer properties and does not mention vadadustat or report any pharmacokinetic parameters for it. |
| PD | Karpe_2026 | not_relevant | 0 | 0 | The paper is a review of clotrimazole's anticancer mechanisms and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Krishnan_2025 | irrelevant | 0 | 0 | The paper describes the design of de novo antibiotics and does not involve the drug vadadustat or its pharmacokinetics. |
| PD | Krishnan_2025 | not_relevant | 0 | 0 | The paper describes a deep learning approach for de novo antibiotic design and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper describes the optimization of BMX kinase inhibitors and does not involve the drug vadadustat or its pharmacokinetics. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses on the medicinal chemistry and molecular modeling of BMX kinase inhibitors, reporting in vitro IC50/EC50 values and binding kinetics, but contains no pharmacokinetic data, exposure-response analysis, or pharmacodynamic modeling for vadadustat or any other drug. |
| popPK | Locatelli_2022 | irrelevant | 0 | 0 | The paper is a narrative review of HIF-PHD inhibitors focusing on clinical efficacy and safety, containing no quantitative pharmacokinetic parameters for vadadustat. |
| popPK | Marbán-González_2025 | irrelevant | 0 | 0 | The paper focuses on the design of chemical libraries for Staphylococcus aureus FabI inhibition and does not involve vadadustat or pharmacokinetic studies. |
| PD | Marbán-González_2025 | not_relevant | 0 | 0 | The paper focuses on the design of chemical libraries for Staphylococcus aureus FabI inhibitors using machine learning and does not mention vadadustat or report any pharmacodynamic (exposure-response) data. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and antiproliferative effects of ethanoanthracene compounds in CLL cell lines and does not involve vadadustat or pharmacokinetic parameters. |
| PD | McKeown_2024 | not_relevant | 0 | 0 | The paper studies novel ethanoanthracene compounds in CLL cell lines and does not mention or analyze vadadustat. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of constitutive androstane receptor agonists and does not involve vadadustat or its pharmacokinetics. |
| PD | Mejdrová_2023 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological potency (EC50) for novel CAR agonists, not pharmacodynamic exposure-response or dose-response relationships for the drug vadadustat. |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | The paper describes the mechanism of action of a toxin (StnI) in cancer cells and does not involve vadadustat or pharmacokinetic parameters. |
| PD | Moral-Sanz_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of senotoxins (StnI/StnIG) and does not mention or analyze the drug vadadustat. |
| popPK | Muliaditan_2025 | irrelevant | 0 | 0 | The paper focuses on a PBPK model for transferrin receptor-mediated brain delivery of antibodies (specifically trontinemab) and does not involve vadadustat. |
| PD | Muliaditan_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) model for antibody brain delivery and does not report any pharmacodynamic (PD) or exposure-response relationship for vadadustat or any other drug. |
| popPK | Nakai_2024 | irrelevant | 2 | 0 | The study focuses on gene expression and therapeutic mechanisms in mice, and while it mentions pharmacokinetics, no quantitative PK parameter values (CL, V, etc.) for vadadustat are provided in the evidence. |
| PD | Nakai_2024 | not_relevant | 2 | 1 | The paper describes qualitative drug-specific differences in gene expression and PK profiles in mice but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for vadadustat. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper describes in vitro anticancer evaluation of thiazole-derived inhibitors and does not involve vadadustat or its pharmacokinetics. |
| PD | Nasr_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for thiazole-derived EGFR/CDK-2 inhibitors, not vadadustat, and does not contain any pharmacodynamic or exposure-response analysis for the target drug. |
| popPK | Navarro-Gonzales_2024 | relevant | 8 | 4 | The paper reports quantitative PK parameters (t1/2, Tmax) for vadadustat in humans, but lacks detailed compartmental model parameters (CL, V, Q) which are likely in the full text or supplementary material not fully provided here. |
| PD | Navarro-Gonzales_2024 | not_relevant | 3 | 2 | The text describes dose-proportional PK and qualitative dose-related EPO increases but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | The paper studies morphine derivatives, not vadadustat. |
| PD | Nourmandipour_2025 | not_relevant | 0 | 0 | The paper studies morphine derivatives, not vadadustat, and reports dose-response data (ED50) for unrelated compounds. |
| popPK | OJeanson_2025 | irrelevant | 0 | 0 | The study focuses on beta-lactam antibiotics and beta-lactamase inhibitors (e.g., avibactam, tazobactam) and does not mention vadadustat. |
| PD | OJeanson_2025 | not_relevant | 0 | 0 | The paper is a simulation study for beta-lactam antibiotics and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Poloznikov_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on structure-activity relationships and transcriptomics, containing no pharmacokinetic parameters for vadadustat. |
| popPK | Rudnicki_2024 | irrelevant | 0 | 0 | The paper is an electrochemical study of danofloxacin, not a pharmacokinetic study of vadadustat. |
| PD | Rudnicki_2024 | not_relevant | 0 | 0 | The paper is an analytical chemistry study on the electrochemical detection of danofloxacin, not a pharmacodynamic or exposure-response study of vadadustat. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibacterial drugs and does not mention vadadustat or report any pharmacokinetic parameters for it. |
| PD | Rusu_2026 | not_relevant | 0 | 0 | The paper is a review of pyrrolidine-based antibacterial drugs and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Sako_2026 | irrelevant | 0 | 0 | The paper describes a computational drug design method (DiffPharma) and does not contain any pharmacokinetic data for vadadustat. |
| PD | Sako_2026 | not_relevant | 0 | 0 | The paper describes a computational method for 3D molecular generation and does not contain any pharmacodynamic, exposure-response, or dose-response data for vadadustat or any other drug. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | The study is an in-silico molecular docking and dynamics simulation of novel compounds using vadadustat only as a positive control, reporting no pharmacokinetic parameters. |
| PD | Sayaf_2024 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) identifying novel PHD inhibitors; it does not report any pharmacodynamic, exposure-response, or dose-response data for vadadustat. |
| popPK | Shaikh_2025 | irrelevant | 2 | 0 | This is a comprehensive review article that discusses pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or specific numeric values in the provided evidence. |
| PD | Shaikh_2025 | not_relevant | 2 | 0 | The text is a comprehensive review that qualitatively describes efficacy and mentions pharmacodynamic parameters but does not provide specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves in the provided excerpt. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper is a review on pharmaceutical cocrystals and intellectual property, containing no pharmacokinetic data or quantitative disposition parameters for vadadustat. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper describes in vitro antimalarial HDAC inhibitors and does not involve vadadustat or any pharmacokinetic parameters. |
| PD | Tavares_2023 | not_relevant | 0 | 0 | The paper studies antimalarial HDAC inhibitors (1,3-diphenylureido hydroxamates) and does not mention vadadustat or report any pharmacodynamic modeling for it. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of Candesartan cilexetil against MRSA and does not involve vadadustat or its pharmacokinetics. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA, not the pharmacodynamics of vadadustat. |
| popPK | Todsaporn_2026 | irrelevant | 0 | 0 | The paper is a study on JAK2 inhibitors for cervical cancer and does not mention vadadustat or report any pharmacokinetic parameters. |
| PD | Todsaporn_2026 | not_relevant | 4 | 5 | The paper reports dose-response curves and IC50 values for JAK2 inhibitors in cervical cancer cells, but does not study the drug vadadustat. |
| popPK | Tükenmez_2026 | irrelevant | 0 | 0 | The paper describes the antimicrobial activity of TriPcides against Staphylococcus aureus and does not involve the drug vadadustat or any pharmacokinetic analysis. |
| PD | Tükenmez_2026 | not_relevant | 0 | 0 | The paper studies TriPcides (antibacterial compounds) and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper describes the discovery of novel HDAC6/AKT2 inhibitors for cancer treatment and does not mention vadadustat or report any pharmacokinetic parameters. |
| PD | Waitman_2025 | not_relevant | 0 | 0 | The paper discusses novel HDAC6/AKT2 inhibitors (compounds 6b and 6k) and does not mention vadadustat or report any pharmacodynamic or exposure-response data for it. |
| popPK | Yokoyama_2024 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation and reports raw plasma concentrations, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) or a compartmental model. |
| PD | Yokoyama_2024 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for measuring vadadustat plasma concentrations and reports PK variability, but it does not report any pharmacodynamic (PD) or exposure-response relationship or numeric PD parameters. |
| popPK | Yokoyama_2026 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Yu_2026 | irrelevant | 1 | 0 | The paper is a review of drug-drug interactions for 2024 FDA approvals; vadadustat is mentioned only as a transporter substrate/inhibitor with DDI AUC ratios, not as a subject of a PK parameter study (no CL, V, or compartmental model reported). |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) and transporter status for vadadustat but does not report pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Zuk_2022 | irrelevant | 2 | 0 | The paper is a preclinical characterization summary that mentions a short half-life but does not report quantitative PK parameters (CL, V, Q, ka) or compartmental model values in the provided text. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title indicating a correction to a PK/PD study, containing no data, models, or numeric parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvadadustat%5D&body=Drug%3A%20vadadustat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vadadustat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
