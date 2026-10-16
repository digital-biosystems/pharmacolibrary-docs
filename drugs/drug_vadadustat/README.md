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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:50 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 131,568/3,830 | einfracz / qwen3.8-27b | 6 | 2/32 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vadadustat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` downregulator, `UGT1A1` inducer/substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` downregulator, `UGT1A1` inducer/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: EGLN1 (inhibitor), EGLN2 (inhibitor), EGLN3 (inhibitor), EPAS1 (stabilization), HIF1A (stabilization), UGT1A7 (substrate), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 106 matched, 70 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Navarro-Gonzales_2024.pdf` | Navarro-Gonzales P et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical pharmacology and t… (2024) | popPK | 7 | [10.1002/cpt.3342](https://doi.org/10.1002/cpt.3342) | [38924087](https://pubmed.ncbi.nlm.nih.gov/38924087) | The paper is a PK/PD study for vadadustat, but the evidence only provides half-life (t1/2) and peak time values, lacking the core quantitative disposition parameters (CL, V, Q, ka) typically required for extraction. |
| `Bi_2024.pdf` | Bi YA et al., Low molecular weight acids and OATP1B m…, Drug metabolism and disposi… (2024) | popPK | 6 | [10.1124/dmd.123.001630](https://doi.org/10.1124/dmd.123.001630) | [38388380](https://pubmed.ncbi.nlm.nih.gov/38388380) | The study reports qualitative in vivo PK changes (4-fold clearance increase) for vadadustat in monkeys, but lacks specific quantitative numeric parameter values (absolute CL, V, etc.) in the provided text. |
| `Janssens_2021.pdf` | Janssens LK et al., Sensing an Oxygen Sensor: Development a…, Analytical chemistry (2021) | pd | 4 | [10.1021/acs.analchem.1c02923](https://doi.org/10.1021/acs.analchem.1c02923) | [34677954](https://www.ncbi.nlm.nih.gov/pubmed/34677954) | metadata signals extractable PD data (EC50) |
| `Yokoyama_2026.pdf` | Yokoyama S et al., Impact of SLCO1B1 Gene Polymorphisms on…, European journal of drug me… (2026) | pgx | 8 | [10.1007/s13318-026-01005-1](https://doi.org/10.1007/s13318-026-01005-1) | [42310169](https://www.ncbi.nlm.nih.gov/pubmed/42310169) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |

<sub>queue written 2026-10-14T20:50:14.761003+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adler_2026 | irrelevant | 0 | 0 | The paper focuses on bacteriophage-antibiotic interactions in E. coli and K. pneumoniae and does not mention vadadustat or any pharmacokinetic parameters. |
| PD | Adler_2026 | not_relevant | 0 | 0 | The paper studies antibiotic-phage synergy in bacteria and does not involve the drug vadadustat or any pharmacodynamic modeling. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | The paper focuses on molecular docking for dengue virus inhibitors and does not involve vadadustat. |
| PD | Ahmadi_2025 | not_relevant | 0 | 0 | The paper is a computational study on dengue virus inhibitors and does not mention vadadustat or report any pharmacodynamic or exposure-response data. |
| popPK | Alas-Pineda_2025 | irrelevant | 0 | 0 | The paper is a review of Chlorpheniramine maleate, which is a different drug from vadadustat. |
| PD | Alas-Pineda_2025 | not_relevant | 0 | 0 | The paper is a review of Chlorpheniramine maleate pharmacokinetics and does not contain any data or analysis for vadadustat. |
| popPK | Batlle_2025 | irrelevant | 0 | 0 | The study focuses on the discovery of ALDH1A3 inhibitors via virtual screening and does not involve vadadustat pharmacokinetics. |
| PD | Batlle_2025 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel ALDH1A3 inhibitor (VS1), not for vadadustat, and does not contain any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Bhardwaj_2025 | irrelevant | 0 | 0 | The paper investigates thiazole derivatives as LasR inhibitors in P. aeruginosa and does not mention vadadustat or its pharmacokinetics. |
| PD | Bhardwaj_2025 | not_relevant | 0 | 0 | The paper is a computational study on thiazole derivatives as LasR inhibitors and does not involve vadadustat or report any pharmacodynamic exposure-response data. |
| popPK | Bi_2024 | relevant | 6 | 0 | The study reports qualitative in vivo PK changes (4-fold clearance increase) for vadadustat in monkeys, but lacks specific quantitative numeric parameter values (absolute CL, V, etc.) in the provided text. |
| popPK | Chavan_2021 | irrelevant | 2 | 0 | The study reports summary exposure ratios and half-life but does not provide the required quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model. |
| popPK | Clokie_2026 | irrelevant | 0 | 0 | The paper focuses on bacteriophage-antibiotic interactions for UTI treatments and does not involve vadadustat or pharmacokinetic studies. |
| PD | Clokie_2026 | not_relevant | 0 | 0 | The paper focuses on bacteriophage-antibiotic interactions and MIC shifts in bacterial isolates, containing no pharmacokinetic or pharmacodynamic modeling for the drug vadadustat. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper concerns menthol-based antimicrobials and does not involve vadadustat or its pharmacokinetics. |
| PD | Di_2026 | not_relevant | 0 | 0 | The paper discusses menthol-based antimicrobials (MF1, MCl2) and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Didier_2026 | irrelevant | 0 | 0 | The paper describes in vitro drug discovery for Chagas disease and does not involve vadadustat or pharmacokinetic modeling. |
| PD | Didier_2026 | not_relevant | 0 | 0 | The paper reports dose-response curves and EC50 values for novel compounds against Trypanosoma cruzi, but does not mention or analyze the drug vadadustat. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | The paper is a review of sulfonamides for diabetes management and does not mention or provide pharmacokinetic data for vadadustat. |
| PD | Dinu_2025 | not_relevant | 0 | 0 | The paper is a review of sulfonamides and antioxidants for diabetes and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Disharoon_2026 | irrelevant | 0 | 0 | The paper describes a machine learning model for drug-drug interaction prediction and does not contain any pharmacokinetic data for vadadustat. |
| PD | Disharoon_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for drug-drug interaction prediction and contains no pharmacodynamic, exposure-response, or dose-response data for vadadustat. |
| popPK | Draveny_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of action of the antibiotic adjuvant NV716 on bacterial outer membranes and antibiotic accumulation, unrelated to vadadustat pharmacokinetics. |
| PD | Draveny_2026 | not_relevant | 0 | 0 | The paper studies NV716, not vadadustat, and focuses on bacterial membrane permeability and antibiotic accumulation rather than pharmacodynamic modeling of the target drug. |
| popPK | Dusek_2025 | irrelevant | 0 | 0 | The study investigates MI-883 in mice and does not involve vadadustat. |
| PD | Dusek_2025 | not_relevant | 0 | 0 | The paper studies MI-883, not vadadustat, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Eckardt_2021 | irrelevant | 0 | 0 | The paper is a study design and baseline characteristics report for Phase 3 clinical trials, not a pharmacokinetic study, and contains no quantitative PK parameters (CL, V, ka, etc.) for vadadustat. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper is a mechanism of action and drug discovery study focusing on pharmacodynamics (EPO upregulation) and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for vadadustat. |
| popPK | Imai_2024 | irrelevant | 0 | 0 | The study is a clinical comparison of drug potency and cost for renal anemia treatment, reporting hemoglobin levels and dose changes rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper discusses PROTAC design and membrane interactions, does not involve vadadustat, and contains no PK parameters. |
| PD | Inganäs_2025 | not_relevant | 0 | 0 | The paper focuses on the physicochemical properties and membrane interactions of PROTACs, not on the pharmacodynamics or exposure-response relationship of vadadustat. |
| popPK | Jain_2025 | irrelevant | 2 | 0 | This is a review article covering analytical methods and general pharmacology of HIF-PHIs, lacking specific quantitative population-PK parameter values (CL, V, etc.) for vadadustat in the provided evidence. |
| popPK | Janković_2025 | irrelevant | 0 | 0 | The paper is a general review discussing qualitative pharmacokinetic properties (linear PK, &gt;99% protein binding) but does not report specific quantitative disposition parameters like clearance, volume, or half-life for vadadustat. |
| PD | Janković_2025 | not_relevant | 1 | 0 | The text is a qualitative summary of PK properties and clinical efficacy (mean Hb increase) without reporting any exposure-response or dose-response model parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Janssens_2021 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Janssens_2021 | not_relevant | 0 | 0 | The paper describes activity-based assays for HIF heterodimerization and does not report pharmacodynamic or exposure-response data for vadadustat. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | The paper studies SHIP1 ligands (e.g., compound 32) for Alzheimer's disease and does not involve the drug vadadustat. |
| PD | Jesudason_2026 | not_relevant | 0 | 0 | The paper discusses a SHIP1 ligand (compound 32) for Alzheimer's disease, not vadadustat, and does not report numeric PD parameters or exposure-response relationships for the target drug. |
| popPK | Jha_2024 | irrelevant | 0 | 0 | The paper is a computational/in-vitro study of MTHFD inhibitors and does not contain pharmacokinetic data for vadadustat. |
| PD | Jha_2024 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) of MTHFD inhibitors and does not involve vadadustat or report any pharmacodynamic or exposure-response data. |
| popPK | Jian_2022 | irrelevant | 0 | 0 | The paper is an in-vitro formulation and efficacy study of PHD2 inhibitors, including vadadustat, with no pharmacokinetic parameters reported. |
| popPK | Karpe_2026 | irrelevant | 0 | 0 | The paper is a review of clotrimazole's anticancer potential and does not mention vadadustat or provide any pharmacokinetic data for it. |
| PD | Karpe_2026 | not_relevant | 0 | 0 | The paper is a review of clotrimazole's anticancer mechanisms and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Krishnan_2025 | irrelevant | 0 | 0 | The paper focuses on de novo antibiotic design and does not involve the drug vadadustat or its pharmacokinetics. |
| PD | Krishnan_2025 | not_relevant | 0 | 0 | The paper describes a deep learning approach for de novo antibiotic design and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper describes the optimization of covalent BMX kinase inhibitors and does not involve the drug vadadustat or any pharmacokinetic modeling. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses on the medicinal chemistry and molecular modeling of BMX kinase inhibitors, reporting in vitro IC50/EC50 values and binding kinetics, but contains no pharmacokinetic data, exposure-response analysis, or pharmacodynamic modeling for vadadustat or any other drug. |
| popPK | Locatelli_2022 | irrelevant | 0 | 0 | The paper is a narrative review of HIF-PHD inhibitors that discusses clinical efficacy and safety outcomes, containing no pharmacokinetic parameters or quantitative disposition data for vadadustat. |
| popPK | Marbán-González_2025 | irrelevant | 0 | 0 | The paper focuses on in silico drug design for bacterial FabI inhibitors and does not mention vadadustat or human/animal pharmacokinetics. |
| PD | Marbán-González_2025 | not_relevant | 0 | 0 | The paper focuses on the design of chemical libraries for Staphylococcus aureus FabI inhibitors using machine learning and does not mention vadadustat or report any pharmacodynamic (exposure-response) data. |
| popPK | McKeown_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biochemical evaluation of novel ethanoanthracene compounds in chronic lymphocytic leukemia cell lines and does not involve the drug vadadustat or pharmacokinetic parameters. |
| PD | McKeown_2024 | not_relevant | 0 | 0 | The paper studies novel ethanoanthracene compounds in CLL cell lines and does not mention or analyze vadadustat. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel constitutive androstane receptor (CAR) agonists and does not involve the drug vadadustat or its pharmacokinetics. |
| PD | Mejdrová_2023 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological potency (EC50) for novel CAR agonists, not pharmacodynamic exposure-response or dose-response relationships for the drug vadadustat. |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | The paper describes the senolytic mechanism of sticholysin I (StnI) and its effects on cancer cells, with no mention of vadadustat or its pharmacokinetics. |
| PD | Moral-Sanz_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of senotoxins (StnI/StnIG) and does not mention or analyze the drug vadadustat. |
| popPK | Muliaditan_2025 | irrelevant | 0 | 0 | The paper describes a pharmacokinetic model for transferrin receptor-mediated brain delivery of antibodies (specifically trontinemab), not vadadustat. |
| PD | Muliaditan_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) model for antibody brain delivery and does not report any pharmacodynamic (PD) or exposure-response relationship for vadadustat or any other drug. |
| popPK | Nakai_2024 | relevant | 4 | 0 | The study is a preclinical pharmacodynamic/pharmacokinetic analysis in mice that includes vadadustat, but the specific numeric PK parameters are not provided in the extracted text. |
| PD | Nakai_2024 | not_relevant | 2 | 1 | The paper describes qualitative drug-specific differences in gene expression and PK profiles in mice but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax) for vadadustat. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper reports in vitro anticancer activity and mechanistic profiling of thiazole-derived EGFR/CDK-2 inhibitors, with no pharmacokinetic data for vadadustat. |
| PD | Nasr_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for thiazole-derived EGFR/CDK-2 inhibitors, not vadadustat, and does not contain any pharmacodynamic or exposure-response analysis for the target drug. |
| popPK | Navarro-Gonzales_2024 | relevant | 7 | 3 | The paper is a PK/PD study for vadadustat, but the evidence only provides half-life (t1/2) and peak time values, lacking the core quantitative disposition parameters (CL, V, Q, ka) typically required for extraction. |
| PD | Navarro-Gonzales_2024 | not_relevant | 3 | 2 | The text describes dose-proportional PK and qualitative dose-related EPO increases but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | The paper studies morphine derivatives as analgesics and does not mention vadadustat. |
| PD | Nourmandipour_2025 | not_relevant | 0 | 0 | The paper studies morphine derivatives, not vadadustat, and reports dose-response data (ED50) for unrelated compounds. |
| popPK | OJeanson_2025 | irrelevant | 0 | 0 | The study concerns pharmacokinetic models of β-lactam/β-lactamase inhibitor combinations (e.g., avibactam, tazobactam), not vadadustat. |
| PD | OJeanson_2025 | not_relevant | 0 | 0 | The paper is a simulation study for beta-lactam antibiotics and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Poloznikov_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on structure-activity relationships and transcriptomics, containing no pharmacokinetic parameters for vadadustat. |
| popPK | Rudnicki_2024 | irrelevant | 0 | 0 | The study is about the electrochemical detection of danofloxacin, not the pharmacokinetics of vadadustat. |
| PD | Rudnicki_2024 | not_relevant | 0 | 0 | The paper is an analytical chemistry study on the electrochemical detection of danofloxacin, not a pharmacodynamic or exposure-response study of vadadustat. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review on antibacterial drugs and does not mention vadadustat or its pharmacokinetics. |
| PD | Rusu_2026 | not_relevant | 0 | 0 | The paper is a review of pyrrolidine-based antibacterial drugs and does not mention vadadustat or report any pharmacodynamic parameters. |
| popPK | Sako_2026 | irrelevant | 0 | 0 | The paper describes a computational method for drug design and mentions SARS-CoV-2, containing no pharmacokinetic data for vadadustat. |
| PD | Sako_2026 | not_relevant | 0 | 0 | The paper describes a computational method for 3D molecular generation and does not contain any pharmacodynamic, exposure-response, or dose-response data for vadadustat or any other drug. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | The paper is an in-silico molecular docking study where vadadustat serves only as a reference control for binding affinity, not a pharmacokinetic analysis. |
| PD | Sayaf_2024 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) identifying novel PHD inhibitors; it does not report any pharmacodynamic, exposure-response, or dose-response data for vadadustat. |
| popPK | Shaikh_2025 | irrelevant | 2 | 0 | This is a review article that summarizes general pharmacological properties and clinical trial outcomes but does not present original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided evidence. |
| PD | Shaikh_2025 | not_relevant | 2 | 0 | The text is a comprehensive review that qualitatively describes efficacy and mentions pharmacodynamic parameters but does not provide specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves in the provided excerpt. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper is a review on pharmaceutical cocrystals and patent law, mentioning vadadustat only as a case study for solid-form chemistry, and contains no pharmacokinetic parameters. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro activity of novel antimalarial HDAC inhibitors and does not mention or investigate vadadustat. |
| PD | Tavares_2023 | not_relevant | 0 | 0 | The paper studies antimalarial HDAC inhibitors (1,3-diphenylureido hydroxamates) and does not mention vadadustat or report any pharmacodynamic modeling for it. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of Candesartan cilexetil against MRSA, not the pharmacokinetics of vadadustat. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil against MRSA, not the pharmacodynamics of vadadustat. |
| popPK | Todsaporn_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on JAK2 inhibitors for cervical cancer and does not report pharmacokinetic data for vadadustat. |
| PD | Todsaporn_2026 | not_relevant | 4 | 5 | The paper reports dose-response curves and IC50 values for JAK2 inhibitors in cervical cancer cells, but does not study the drug vadadustat. |
| popPK | Tükenmez_2026 | irrelevant | 0 | 0 | The paper is about antimicrobial resistance and TriPcides against Staphylococcus aureus, unrelated to vadadustat pharmacokinetics. |
| PD | Tükenmez_2026 | not_relevant | 0 | 0 | The paper studies TriPcides (antibacterial compounds) and does not mention vadadustat or report any pharmacodynamic parameters for it. |
| popPK | Waitman_2025 | irrelevant | 0 | 0 | The paper describes the discovery of HDAC6/AKT2 inhibitors for cancer and contains no data, models, or mentions of vadadustat or its pharmacokinetics. |
| PD | Waitman_2025 | not_relevant | 0 | 0 | The paper discusses novel HDAC6/AKT2 inhibitors (compounds 6b and 6k) and does not mention vadadustat or report any pharmacodynamic or exposure-response data for it. |
| popPK | Yokoyama_2024 | irrelevant | 3 | 1 | This is an analytical method development study that reports plasma concentrations but does not provide quantitative PK parameters (CL, V, ka) or a compartmental/population model. |
| PD | Yokoyama_2024 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for measuring vadadustat plasma concentrations and reports PK variability, but it does not report any pharmacodynamic (PD) or exposure-response relationship or numeric PD parameters. |
| popPK | Yokoyama_2026 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Yu_2026 | irrelevant | 1 | 0 | The paper is a review of DDI data for 2024 FDA-approved drugs and mentions vadadustat only as an OAT1/3 substrate (AUCR 1.82 with probenecid), without reporting population PK parameters (CL, V, ka, etc.). |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions involving vadadustat, not pharmacogenomic effects. |
| popPK | Zuk_2022 | irrelevant | 3 | 0 | The paper is a preclinical summary that mentions a "relatively short half-life" in nonclinical species but does not provide quantitative PK parameter values (CL, V, ka) or compartmental models. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title indicating a correction to a PK/PD study, containing no data, models, or numeric parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
