<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Beta-hemolysin&quot;}]"></div>

# Beta-hemolysin

- **generic name:** Beta-hemolysin
- **T3DB:** [T3D2611](http://www.t3db.ca/toxins/T3D2611) · **PubChem:** none

## About

Beta-hemolysin is produced by Staphylococcus aureus. Hemolysins cause lysis of red blood cells.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Beta-hemolysin is produced by Staphylococcus aureus.
- **Mechanism of toxicity:** Hemolysins consists mainly of beta-sheets forms heptameric units on the cellular membrane, producing a complete beta-barrel pore. This pore allows the exchange of monovalent ions, resulting in DNA fragmentation and eventually apoptosis.
- **Health effects:** Beta-toxin is a potent cytotoxin produced by Staphylococcus aureus. Staphylococcus aureus is the most common cause of staph infections. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2611">T3DB T3D2611</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 143257-99-2</small></p>

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
| 2026-11-10 23:45 | 1:10:30 | 0/0/0 | 0/0/0 | 0/0/0 | 1,266,536/34,636 | einfracz / qwen3.8-27b | 70 | 7/51 | 70/0 | 0 |

## Coverage

- **PubMed hits:** 318 matched, 213 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gao_2013.pdf` | Gao M et al., Natural antifouling compounds produced…, Marine pollution bulletin (2013) | pd | 4 | [10.1016/j.marpolbul.2013.10.008](https://doi.org/10.1016/j.marpolbul.2013.10.008) | [24210009](https://www.ncbi.nlm.nih.gov/pubmed/24210009) | metadata signals extractable PD data (EC50) |
| `Elgawish_2020.pdf` | Elgawish MS et al., Toxicity Profile, Pharmacokinetic, and…, Chemical research in toxico… (2020) | pgx | 7 | [10.1021/acs.chemrestox.0c00199](https://doi.org/10.1021/acs.chemrestox.0c00199) | [32957789](https://www.ncbi.nlm.nih.gov/pubmed/32957789) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Miura_2011.pdf` | Miura M et al., Simultaneous determination of warfarin…, Therapeutic drug monitoring (2011) | pgx | 5 | [10.1097/FTD.0b013e31820176d6](https://doi.org/10.1097/FTD.0b013e31820176d6) | [21157402](https://www.ncbi.nlm.nih.gov/pubmed/21157402) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-11-10 23:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abu_2025 | irrelevant | 0 | 0 | The paper focuses on etoposide, not beta_hemolysin, which is not mentioned or measured as the subject substance. |
| popPK | Ahmadi_2017 | irrelevant | 0 | 0 | The paper investigates the environmental partitioning of UV filters and biocides, not the toxicokinetics of beta_hemolysin. |
| popPK | Anzo_2024 | irrelevant | 0 | 0 | The paper models the epidemiology of Huanglongbing disease in citrus orchards and does not study the toxicokinetics of beta_hemolysin. |
| popPK | Ardaillou_1992 | irrelevant | 0 | 0 | The paper discusses cell surface receptors and ectoenzymes in mesangial cells and contains no data or mention of beta_hemolysin. |
| popPK | Arnot_2014 | irrelevant | 0 | 0 | The paper presents a general QSAR model for estimating organic chemical half-lives and does not report specific kinetic parameters for beta_hemolysin. |
| popPK | Barakat_2005 | irrelevant | 0 | 0 | The paper focuses on gas chromatography polarity indices for surfactants and does not study beta_hemolysin or report any toxicokinetic parameters. |
| popPK | Becker_2018 | irrelevant | 0 | 0 | The paper discusses sphingolipids and cystic fibrosis and does not report any toxicokinetic parameters for beta-hemolysin. |
| popPK | Been_2019 | irrelevant | 0 | 0 | The paper focuses on bioanalytical methods for alternative plasticizers and does not contain any data for beta_hemolysin. |
| popPK | Ben_2004 | irrelevant | 0 | 0 | The paper studies the phase behavior of nonionic surfactants (polyoxyethylene glycol n-dodecyl ether) in water/oil systems and contains no data on beta_hemolysin or its toxicokinetics. |
| popPK | Bergan_1981 | irrelevant | 0 | 0 | The paper is a qualitative review of pathogenesis and virulence factors of Pseudomonas aeruginosa and does not report any quantitative toxicokinetic parameters for beta-hemolysin. |
| popPK | Berger_2025 | irrelevant | 0 | 0 | The paper reports analytical methods and toxicokinetic parameters for mycotoxins (aflatoxins, OTA, gliotoxin, citrinin) but contains no data or mention of beta_hemolysin. |
| popPK | Birolli_2024 | irrelevant | 0 | 0 | The paper describes a method for analyzing pesticides and their metabolites in human serum and does not contain any data for beta_hemolysin. |
| popPK | Canonico_2016 | irrelevant | 0 | 0 | The paper studies autophagy and mitophagy in Niemann-Pick disease lymphocytes and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Cao_2003 | irrelevant | 0 | 0 | The paper investigates the regulation of atrial natriuretic peptide secretion by serotonin in rats and does not contain any data regarding the substance beta_hemolysin. |
| popPK | Carter_1998 | irrelevant | 0 | 0 | The paper focuses on the delivery of daunorubicin using phospholipase C and does not report any toxicokinetic parameters for beta-hemolysin. |
| popPK | Cestari_2015 | irrelevant | 0 | 0 | The paper discusses the inositol phosphate pathway and VSG gene transcription in trypanosomes, containing no data or kinetic parameters for beta_hemolysin. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper focuses on pharmacokinetics of Hedyotis diffusa extract compounds in rats, not beta-hemolysin. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper investigates Wip1 and neutrophil extracellular traps in infection models and does not contain any toxicokinetic data for beta_hemolysin. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper concerns plant pathology (citrus Huanglongbing) and transcriptomics, not human pharmacogenomics of beta_hemolysin. |
| popPK | Chen_2025_2 | irrelevant | 0 | 0 | The paper focuses on the analytical method for 12 lipophilic shellfish toxins and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Cheong_2002 | irrelevant | 0 | 0 | The paper investigates the percutaneous absorption of piroxicam, not beta_hemolysin. |
| popPK | Cox_2014 | irrelevant | 0 | 0 | The paper describes an analytical method for cefovecin (an antibiotic) and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Cox_2018 | irrelevant | 0 | 0 | The paper describes an analytical method for hydromorphone, not beta_hemolysin, and contains no kinetic parameters for the subject substance. |
| popPK | Da_2022 | irrelevant | 0 | 0 | The paper reports the synthesis and pharmacokinetics of 68Ga-FAPI-46, a PET radiotracer, and does not study beta_hemolysin. |
| popPK | Darby_1990 | irrelevant | 0 | 0 | The paper focuses on the membrane linkage of Fc gamma RIII in immune cells and does not contain any toxicokinetic data for beta_hemolysin. |
| popPK | De_2023 | irrelevant | 0 | 0 | The paper focuses on analytical methods for aflatoxins and does not contain any kinetic data or parameters for beta_hemolysin. |
| PGx | Delauné_2012 | not_relevant | 0 | 0 | The paper focuses on Staphylococcus aureus virulence genes and the WalKR system, and does not report on pharmacogenomic effects on the PK or PD of beta_hemolysin as a drug. |
| popPK | Deng_2009 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of arotinoid acid, not beta_hemolysin. |
| popPK | Dharmaraj_2024 | irrelevant | 0 | 0 | The paper focuses on the design and in-vitro cytotoxicity of hydroxyurea lipid conjugates, with no mention of beta_hemolysin or its toxicokinetic parameters. |
| popPK | DiNuzzo_2013 | irrelevant | 0 | 0 | The paper focuses on glycogen metabolism and potassium uptake in astrocytes and does not study beta_hemolysin. |
| popPK | Diaz_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of olipudase alfa in acid sphingomyelinase deficiency, not the toxicokinetics of beta_hemolysin. |
| popPK | Dinkins_2017 | irrelevant | 0 | 0 | The paper is a review on Alzheimer's disease and extracellular vesicles, with no mention of beta_hemolysin or its toxicokinetics. |
| PGx | Elgawish_2020 | not_relevant | 0 | 0 | The paper studies citalopram and sertraline pharmacokinetics, not beta_hemolysin, and reports no pharmacogenomic effects. |
| PGx | Estrella-Maldonado_2023 | not_relevant | 0 | 0 | The paper investigates the molecular basis of Huanglongbing tolerance in Persian lime plants and does not discuss the drug beta_hemolysin, pharmacokinetics, or pharmacodynamics. |
| popPK | Falet_2009 | irrelevant | 0 | 0 | The paper investigates platelet function and immune responses in WIP knockout mice and does not contain any toxicokinetic data for beta-hemolysin. |
| popPK | Fang_2025 | irrelevant | 0 | 0 | The paper focuses on the analytical development of a microextraction probe for organophosphorus pesticides in tea and contains no data on beta_hemolysin toxicokinetics. |
| popPK | Feng_2025 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring oxidative stress biomarkers in human urine and does not report any kinetic parameters for the subject substance beta_hemolysin. |
| popPK | Flourat_2026 | irrelevant | 0 | 0 | The paper reports the synthesis and biological activity of resveratrol derivatives (stilbenes) and contains no data for beta_hemolysin. |
| PGx | Franco_2020 | not_relevant | 0 | 0 | The paper investigates plant proteomics in response to a bacterial pathogen (CLas) and does not involve human pharmacogenomics, beta-hemolysin as a drug, or PK/PD parameters. |
| PGx | Fukuda_2023 | not_relevant | 0 | 0 | The paper describes an HPLC method for quantifying venetoclax and contains no pharmacogenomic data or effect on beta_hemolysin. |
| popPK | Gabandé-Rodríguez_2014 | irrelevant | 0 | 0 | The paper focuses on Niemann Pick disease type A, sphingomyelin metabolism, and lysosomal dysfunction in ASM knockout mice and patient fibroblasts, with no mention or kinetic data for beta_hemolysin. |
| popPK | Galvão_2020 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for carvacrol, not beta_hemolysin. |
| PGx | Gao_2023 | not_relevant | 0 | 0 | The study is a plant transcriptomic analysis of citrus tolerance to a bacterial pathogen and does not involve pharmacogenomics or the pharmacokinetics/pharmacodynamics of the protein beta_hemolysin. |
| popPK | Gea_2024 | irrelevant | 0 | 0 | The paper focuses on estrogenic activity in wastewater and does not report any toxicokinetic parameters for beta-hemolysin. |
| popPK | Ghosh_2005 | irrelevant | 0 | 0 | The paper studies the partitioning of inorganic ions in micellar solutions of surfactants and does not involve beta_hemolysin. |
| popPK | Ghosh_2016 | irrelevant | 0 | 0 | The paper studies calcium pump kinetics in neurons and does not report toxicokinetic parameters for beta_hemolysin. |
| popPK | Gobelius_2019 | irrelevant | 0 | 0 | The paper focuses on passive sampling calibration for per- and polyfluoroalkyl substances (PFASs) and does not mention beta_hemolysin or any kinetic parameters related to it. |
| popPK | Grassmé_2014 | irrelevant | 0 | 0 | The paper focuses on ceramide and inflammasome regulation in cystic fibrosis models and contains no kinetic parameters for beta_hemolysin. |
| popPK | Guan_2023 | irrelevant | 0 | 0 | The paper focuses on flame retardants and does not contain any data regarding beta_hemolysin. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper is an analytical method study for pesticide residues in fish and shrimp and does not report any toxicokinetic parameters for beta-hemolysin. |
| popPK | Han_2023 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting personal care products in human urine, and beta_hemolysin (likely a misinterpretation of beta-glucuronidase in the prompt) is used only as a reagent, not as a subject of toxicokinetic study. |
| popPK | Hirakata_1992 | irrelevant | 0 | 0 | The paper studies the effects of erythromycin on Pseudomonas aeruginosa and does not contain any kinetic parameters for beta_hemolysin. |
| popPK | Hollenhorst_2022 | irrelevant | 0 | 0 | The paper studies the mechanistic effects of denatonium on ion transport in mouse trachea and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Hou_2024 | irrelevant | 0 | 0 | The paper focuses on cathelicidin and Aspergillus fumigatus keratitis, with no mention or kinetic data for beta_hemolysin. |
| popPK | Huang_2004 | irrelevant | 0 | 0 | The paper describes physiological regulation of airway ion channels (CFTR/ENaC) and does not mention beta_hemolysin or provide any toxicokinetic parameters. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The paper is a review on lipid-based formulation pharmacokinetics and does not report toxicokinetic parameters for beta_hemolysin. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes an analytical method for neonicotinoid insecticides and does not contain any kinetic data for beta-hemolysin. |
| popPK | Hull_2024 | irrelevant | 0 | 0 | The paper studies acid sphingomyelinase deficiency in Drosophila and does not contain any data, parameters, or even mentions of beta_hemolysin. |
| popPK | Ikegami_2003 | irrelevant | 0 | 0 | The paper focuses on Niemann-Pick disease and surfactant metabolism in mice, with no mention or data regarding the toxicokinetics of beta_hemolysin. |
| popPK | Jaffrézou_1990 | irrelevant | 0 | 0 | The paper investigates the effect of perhexiline on ricin A chain immunotoxin activity and does not report toxicokinetic parameters for beta_hemolysin. |
| popPK | Jeong_2018 | irrelevant | 0 | 0 | The paper focuses on passive sampler characterization for aquatic organic contaminants and does not mention beta-hemolysin or provide toxicokinetic parameters for it. |
| popPK | Jin_2026 | irrelevant | 0 | 0 | The paper focuses on the analytical method for bisphenols and does not contain any toxicokinetic parameters for beta_hemolysin. |
| popPK | Jing_2021 | irrelevant | 0 | 0 | The paper focuses on organophosphate flame retardants and does not mention or measure beta-hemolysin. |
| popPK | Johnson_2022 | irrelevant | 0 | 0 | The paper focuses on the physics of emulsion electrospinning and surfactant properties (logP) and contains no data regarding the toxicokinetics of beta_hemolysin. |
| popPK | Joshi_2024 | irrelevant | 0 | 0 | The paper models calcium oscillations in hepatocytes and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Kaiser_2021 | irrelevant | 0 | 0 | The paper focuses on PFAS extraction methods and does not contain data for beta_hemolysin. |
| popPK | Kempe_2007 | irrelevant | 0 | 0 | The paper studies erythrocyte clearance mechanisms in sepsis and does not report any toxicokinetic parameters for beta_hemolysin. |
| PGx | Killiny_2025 | not_relevant | 0 | 0 | The paper discusses plant genetic modification for pest control, not the pharmacogenomics of a drug named beta_hemolysin. |
| popPK | Kim_1991 | irrelevant | 0 | 0 | The paper investigates the phase behavior of surfactants and liposomes and contains no data on the substance beta_hemolysin. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The paper reports on the development of an optogenetic tool for phospholipase C in mice and contains no toxicokinetic parameters for beta-hemolysin. |
| popPK | Klein_2000 | irrelevant | 0 | 0 | The paper investigates the mechanism of bacterial phagocytosis and does not report toxicokinetic parameters for the specific substance beta_hemolysin. |
| popPK | Kołodziejczyk_2014 | irrelevant | 0 | 0 | The paper reports surface activity and solubility parameters of cholic acid derivatives and drug formulations, containing no toxicokinetic data for beta_hemolysin. |
| PGx | Kriegeskorte_2014 | not_relevant | 0 | 0 | The paper focuses on S. aureus virulence and metabolism (thyA mutations), not on human pharmacogenomics affecting the PK/PD of a specific drug. |
| popPK | Krop_2021 | irrelevant | 0 | 0 | The paper reports sorption parameters for perfluoroalkyl acids (PFAAs), not toxicokinetic parameters for beta_hemolysin. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The paper is a review of Acid Sphingomyelinase Deficiency and does not contain any toxicokinetic data for beta_hemolysin. |
| popPK | Kundu_2026 | irrelevant | 0 | 0 | The paper focuses on the development of inhibitors for neutral sphingomyelinase 2 and contains no data or parameters related to beta_hemolysin. |
| popPK | Lang_2004 | irrelevant | 0 | 0 | The paper discusses erythrocyte apoptosis mechanisms and does not mention or provide kinetic parameters for beta_hemolysin. |
| popPK | Lang_2015 | irrelevant | 0 | 0 | The paper focuses on bilirubin-induced eryptosis and anemia, with no mention of beta-hemolysin or its toxicokinetic parameters. |
| popPK | Le_2021 | irrelevant | 0 | 0 | The paper discusses acid sphingomyelinase inhibitors and SARS-CoV-2, with no data or parameters for beta-hemolysin. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The paper investigates platelet clearance mechanisms in mice and does not mention or provide data for the substance beta_hemolysin. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The paper focuses on platelet turnover and calcium signaling in mice and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Leithner_2025 | irrelevant | 0 | 0 | The paper focuses on the structural and functional mechanisms of bispecific T cell engagers (targeting Her2 and CD3), and does not contain any toxicokinetic data for beta_hemolysin. |
| popPK | Lemaire_2025 | irrelevant | 0 | 0 | The paper focuses on the development and validation of an analytical method for fluoxetine and its metabolites in mussels, and does not contain data for the substance beta_hemolysin. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The paper describes the synthesis of a radiolabeled peptide tracer and does not report kinetic parameters for beta_hemolysin. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting halogenated polycyclic aromatic hydrocarbons (H-PAHs) in aquatic products and does not contain any data or parameters for beta_hemolysin. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics and toxicodynamics of heme (not beta_hemolysin) in a sepsis model, with no quantitative kinetic parameters reported for beta_hemolysin. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the analytical screening of per- and polyfluoroalkyl substances (PFAS) and does not mention beta_hemolysin or provide any kinetic parameters for it. |
| popPK | Liu_2008 | irrelevant | 0 | 0 | The paper focuses on the mechanism of doxorubicin resistance in cancer cells and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is an analytical method development study for mycotoxins and does not report any toxicokinetic parameters for beta-hemolysin. |
| popPK | Liu_2024_2 | irrelevant | 0 | 0 | The paper studies the immunological effects of the inhibitor D609 on tuberculosis infection in mice and contains no toxicokinetic parameters for beta_hemolysin. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for baicalin, using beta_hemolysin only as the target of an IC50 comparison. |
| PGx | Mafra_2013 | not_relevant | 0 | 0 | The paper analyzes transcriptomic changes in citrus plants infected with a bacterium, not pharmacogenomic effects on the PK/PD of a drug (beta_hemolysin). |
| popPK | Manaargadoo-Catin_2016 | irrelevant | 0 | 0 | The paper is a review on surfactant-induced hemolysis mechanisms and does not report toxicokinetic parameters for the specific substance beta_hemolysin. |
| popPK | Manos_2013 | irrelevant | 0 | 0 | The paper characterizes P. aeruginosa virulence factor expression (including haemolysin production) in CF patients but contains no toxicokinetic parameters (ADME/TK data) for the beta-hemolysin molecule itself. |
| popPK | Miao_2018 | irrelevant | 0 | 0 | The paper describes an analytical method for phthalate metabolites in human serum and contains no data for beta_hemolysin. |
| popPK | Mijangos_2019 | irrelevant | 0 | 0 | The paper describes an analytical method for 41 classes of organic pollutants (sweeteners, hormones, pesticides, etc.) and does not report data for the protein toxin beta-hemolysin. |
| PGx | Miura_2011 | not_relevant | 0 | 0 | The study focuses on warfarin pharmacokinetics and CYP2C9, not the drug beta_hemolysin. |
| popPK | Molino_1997 | irrelevant | 0 | 0 | The paper studies thrombin receptors and PAR-2 on endothelial cells and does not report toxicokinetic parameters for beta_hemolysin. |
| popPK | Morita_2016 | irrelevant | 0 | 0 | The paper is a review on the metabolism of apolipoprotein B-containing lipoproteins and atherosclerosis, and contains no data, parameters, or even mention of beta_hemolysin. |
| popPK | Moriya_2024 | irrelevant | 0 | 0 | The paper investigates the sorption kinetics of generic polar organic compounds in POCIS samplers and does not contain any data on beta_hemolysin. |
| popPK | Munoz_2017 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting perfluoroalkyl substances (PFASs) in seabird plasma and does not contain any toxicokinetic data for beta_hemolysin. |
| popPK | Nag_1997 | irrelevant | 0 | 0 | The paper describes a colorimetric method for quantifying PEG-conjugated phospholipids in liposomes and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Nagashima_2009 | irrelevant | 0 | 0 | The paper studies pyrrole-imidazole polyamides, not beta-hemolysin, and contains no kinetic parameters for the target substance. |
| popPK | Nair_2021 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the substance JQ1, not beta_hemolysin. |
| popPK | Nair_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the substance IWR-1-endo, not beta_hemolysin. |
| popPK | Nair_2025 | irrelevant | 0 | 0 | The paper reports a method for selinexor, not beta_hemolysin, and contains no kinetic parameters for the target substance. |
| PGx | Nakandala_2024 | not_relevant | 0 | 0 | The paper is a plant genomics study comparing the genomes of Australian wild limes and does not discuss pharmacogenomics or beta-hemolysin. |
| popPK | Nguyen_1992 | irrelevant | 0 | 0 | The paper studies tissue-type plasminogen activator (t-PA), not beta_hemolysin. |
| popPK | Niwa_2011 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of vinorelbine in dogs, not beta-hemolysin. |
| popPK | Oró-Nolla_2024 | irrelevant | 0 | 0 | The paper studies phthalate esters in gull eggs and does not contain any data or kinetic parameters for beta_hemolysin. |
| popPK | Pal_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of DPTIP (an nSMase2 inhibitor), which is a completely different substance from beta_hemolysin. |
| popPK | Palát_2022 | irrelevant | 0 | 0 | The paper focuses on POPs (PCBs, PBDEs, etc.) and does not mention or analyze beta_hemolysin. |
| popPK | Pietka_2025 | irrelevant | 0 | 0 | The paper investigates the secretion and traffic of Lipoprotein Lipase (LPL) via extracellular vesicles, and does not contain any data regarding the toxicokinetics of beta_hemolysin. |
| popPK | Poczobutt_2021 | irrelevant | 0 | 0 | The paper focuses on acid sphingomyelinase deficiency in mice and contains no kinetic data for beta_hemolysin. |
| PGx | Pollard_2019 | not_relevant | 0 | 0 | The paper does not study beta_hemolysin or report any pharmacogenomic effects on PK/PD parameters. |
| PGx | Pouget_2021 | not_relevant | 0 | 0 | The paper studies the impact of environmental stress on S. aureus virulence; beta-hemolysin is a bacterial toxin, not a drug, and there is no pharmacogenomic analysis of a drug's PK/PD. |
| popPK | Prado_2006 | irrelevant | 0 | 0 | The paper focuses on the analytical method for styrene, not toxicokinetic parameters for beta_hemolysin. |
| popPK | Qiu_2026 | irrelevant | 0 | 0 | The paper describes an analytical method for urinary VOC metabolites and does not mention beta-hemolysin or any kinetic parameters for it. |
| popPK | Radzik_2019 | irrelevant | 0 | 0 | The paper studies calcium signaling in PC12 cells and does not mention or provide toxicokinetic data for beta_hemolysin. |
| popPK | Ranjit_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the nSMase2 inhibitor DPTIP and its prodrugs, not for beta_hemolysin. |
| popPK | Rao_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lidocaine and prilocaine, not beta_hemolysin. |
| popPK | Rashid_2022 | irrelevant | 0 | 0 | The paper focuses on influenza A virus replication and PSMA2 signaling in A549 cells, with no data regarding beta_hemolysin. |
| popPK | Ravi_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for telmisartan and amlodipine, not beta_hemolysin. |
| popPK | Ren_2019 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of triptorelin, not beta_hemolysin. |
| popPK | Rojas_2019 | irrelevant | 0 | 0 | The paper studies a small molecule inhibitor (PDDC) of nSMase2, not beta_hemolysin; no toxicokinetic parameters for beta_hemolysin are reported. |
| popPK | Rose_2008 | irrelevant | 0 | 0 | The paper is a review on natriuretic peptide C receptor signaling and does not contain any toxicokinetic parameters for beta_hemolysin. |
| popPK | Rosita_2019 | irrelevant | 0 | 0 | The paper focuses on the partition coefficient of epigallocatechin gallate (EGCG), not beta_hemolysin. |
| popPK | Salunkhe_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for Idebenone, not beta_hemolysin. |
| popPK | Schmidt_2025 | irrelevant | 0 | 0 | The paper studies the effects of inotropic agents (dobutamine, epinephrine, milrinone) on mucociliary clearance in mice and does not mention beta_hemolysin or provide kinetic parameters for it. |
| popPK | Schott_1995 | irrelevant | 0 | 0 | The paper focuses on nonionic surfactants and their physicochemical properties (HLB, partition coefficients), and does not mention or report data for beta_hemolysin. |
| popPK | Schweinsberg_2020 | irrelevant | 0 | 0 | The paper focuses on the analytical validation of a method for iohexol, and beta_hemolysin is not mentioned or studied. |
| popPK | Senthilkumar_2022 | irrelevant | 0 | 0 | The paper studies the solubilization of the drug aceclofenac in pluronic micelles and does not contain any data for the subject substance beta_hemolysin. |
| popPK | Serban_2016 | irrelevant | 0 | 0 | The paper studies endothelial microparticles and cigarette smoke exposure, with no mention or kinetic data for beta_hemolysin. |
| popPK | Shihabuddin_2004 | irrelevant | 0 | 0 | The paper studies Niemann-Pick disease and neural progenitor cell transplantation in mice, with no data on the toxicokinetics of beta_hemolysin. |
| popPK | Silva_2026 | irrelevant | 0 | 0 | The paper studies pesticides and predator-prey dynamics, with no mention of beta_hemolysin or its toxicokinetic parameters. |
| popPK | Singla_2018 | irrelevant | 0 | 0 | The paper studies the solubilization of Clozapine in micelles and does not report toxicokinetic parameters for beta_hemolysin. |
| popPK | Slaets_2010 | irrelevant | 0 | 0 | The paper focuses on the radiotracer [(18)F]FCho and the impurity DMAE, with no mention of beta_hemolysin. |
| popPK | Solfrizzo_2011 | irrelevant | 0 | 0 | The paper describes an analytical method for mycotoxins (zearalenols, etc.) and does not study beta_hemolysin or report kinetic parameters for it. |
| popPK | Solomon_2022 | irrelevant | 0 | 0 | The paper investigates the mechanism of a PLCG2 variant's effect on Amyloid Beta (Aβ) clearance in microglia, and does not report any toxicokinetic parameters for beta_hemolysin. |
| popPK | Son_2004 | irrelevant | 0 | 0 | The paper studies ion channel physiology in airway epithelia and does not mention beta-hemolysin or provide any toxicokinetic parameters for it. |
| popPK | Stubleski_2018 | irrelevant | 0 | 0 | The paper describes an analytical method for persistent organic pollutants (PCBs, OCPs, etc.) and does not contain any kinetic data or mention of beta-hemolysin. |
| popPK | Szabo_2022 | irrelevant | 0 | 0 | The paper describes extraction methods for PFASs and does not mention beta_hemolysin or provide any kinetic parameters for it. |
| popPK | Takakura_1998 | irrelevant | 0 | 0 | The paper is a general review on macromolecule extravasation and does not report quantitative kinetic parameters for beta_hemolysin. |
| popPK | Tallon_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for DPTIP and its dendrimer conjugate D-DPTIP, not beta_hemolysin. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper models the transmission dynamics of Huanglongbing (HLB) disease in citrus and psyllids, and contains no data or parameters for the substance beta_hemolysin. |
| popPK | Thomas_1986 | irrelevant | 0 | 0 | The paper studies the nephrotoxicity of gentamicin and piperacillin in rats; beta_hemolysin is not mentioned or measured. |
| popPK | Thurberg_2020 | irrelevant | 0 | 0 | The paper concerns the therapeutic agent olipudase alfa and disease biomarkers (sphingomyelin, lipids) in ASMD patients, with no kinetic parameters for beta_hemolysin. |
| popPK | Tkaczyk_2021 | irrelevant | 0 | 0 | The paper reports an analytical method for mycotoxins (DON, ZEN, OTA, etc.) in pig urine and does not contain any toxicokinetic parameters for the subject substance beta_hemolysin. |
| popPK | Toutain_1987 | irrelevant | 0 | 0 | The paper studies the interaction between muzolimine and gentamicin in rats and does not contain any data, parameters, or mentions of beta-hemolysin. |
| popPK | Tsai_2023 | irrelevant | 0 | 0 | The paper investigates PLCG2 variants and Alzheimer's disease pathology in mice, containing no data regarding the toxicokinetics of beta-hemolysin. |
| popPK | Ueda_1989 | irrelevant | 0 | 0 | The paper studies the membrane anchoring of Fc gamma RIII receptors and does not report any toxicokinetic parameters for beta-hemolysin. |
| popPK | Vallano_2003 | irrelevant | 0 | 0 | The paper reports an analytical method for risedronate in human urine and contains no kinetic parameters for beta_hemolysin. |
| popPK | Verscheure_2025 | irrelevant | 0 | 0 | The paper describes an analytical method for antineoplastic agents (cyclophosphamide, doxorubicin, etc.) and does not mention or contain any data for the subject substance beta_hemolysin. |
| popPK | Verscheure_2026 | irrelevant | 0 | 0 | The paper focuses on method validation for antineoplastic agents (cyclophosphamide, etoposide, etc.) and does not study beta_hemolysin or report any kinetic parameters for it. |
| popPK | Villaño_2022 | irrelevant | 0 | 0 | The paper focuses on the analysis of GLP-1 and GIP, not beta_hemolysin. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper focuses on the delivery of antisense oligonucleotides (AOs) using triazine-cored polymers and contains no data or parameters for beta_hemolysin. |
| popPK | Winkler_1985 | irrelevant | 0 | 0 | The paper discusses Pseudomonas aeruginosa pathogenicity in cystic fibrosis and mentions hemolysins only qualitatively, providing no toxicokinetic parameters for beta_hemolysin. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The paper reviews the role of sphingomyelinases in mycobacterial infection and does not contain any toxicokinetic parameters for beta_hemolysin. |
| popPK | Xiao_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for Aconitum alkaloids, not beta-hemolysin. |
| popPK | Xing_2023 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of amyloid-beta (Aβ) and uses rhodamine-123 as a P-gp probe, not beta-hemolysin. |
| popPK | Xu_2016 | irrelevant | 0 | 0 | The paper describes immune mechanisms involving macrophages and dendritic cells and does not contain any toxicokinetic parameters for beta_hemolysin. |
| popPK | Yin_2024 | irrelevant | 0 | 0 | The paper investigates the role of EDIL3 in aortic dissection and efferocytosis in mice and cell lines, containing no data on the toxicokinetics of beta_hemolysin. |
| popPK | Youan_2003 | irrelevant | 0 | 0 | The paper focuses on the formulation of microparticles using sucrose esters and bovine serum albumin, containing no toxicokinetic parameters or data for beta_hemolysin. |
| popPK | Yuyama_2012 | irrelevant | 0 | 0 | The paper studies the clearance of amyloid-β via exosomes in the context of Alzheimer's disease and does not mention beta_hemolysin or any toxicokinetic parameters for it. |
| popPK | Zeng_2023 | irrelevant | 0 | 0 | The paper analyzes the accumulation of pharmaceuticals and personal care products (PPCPs) in plants, and beta_hemolysin is not mentioned or analyzed in the study. |
| popPK | Zgoda_2004 | irrelevant | 0 | 0 | The paper studies the solubilization of diclofenac by lanolin derivatives and does not mention or provide kinetic parameters for beta_hemolysin. |
| popPK | Zgoda_2007 | irrelevant | 0 | 0 | The paper focuses on the solubilization properties of lanolin derivatives and non-steroidal anti-inflammatory drugs (ibuprofen, ketoprofen, naproxen), with no mention of beta_hemolysin or its toxicokinetic parameters. |
| popPK | Zgoda_2007_2 | irrelevant | 0 | 0 | The paper discusses surfactants and solubilization properties, with no mention of beta_hemolysin or its toxicokinetic parameters. |
| PGx | Zhang_2008 | not_relevant | 0 | 0 | The paper describes an analytical method for CYP450 phenotyping in rats and does not investigate beta_hemolysin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The paper discusses the crosstalk between dopamine receptors and Na+/K+-ATPase, with no mention of beta-hemolysin or any kinetic parameters for it. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper is a review of autophagy targets in Parkinson's disease and contains no data or parameters for the substance beta_hemolysin. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper describes an analytical method for pesticide metabolites in human urine and does not contain any kinetic parameters for beta-hemolysin. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes an analytical method for neonicotinoids and their metabolites in human urine and contains no data or kinetic parameters for beta_hemolysin. |
| popPK | Zhang_2024_2 | irrelevant | 0 | 0 | The paper reports exposure levels and health risks of environmental chemical pollutants (OCPs, PCBs, PAHs) in human serum, and does not contain any kinetic parameters for the substance beta_hemolysin. |
| PGx | Zhang_2024_3 | not_relevant | 0 | 0 | The paper analyzes the pan-genome of Wolbachia in insects and does not involve human pharmacogenomics, drug PK/PD, or beta-hemolysin. |
| popPK | Zhou_2004 | irrelevant | 0 | 0 | The paper investigates the solubilization of pyrene by surfactants and does not contain any kinetic data for beta-hemolysin. |
| popPK | Zimmer_1999 | irrelevant | 0 | 0 | The paper describes an analytical method (TFC-MS-MS) for two unnamed "drugs" and does not mention beta-hemolysin or provide any kinetic parameters for it. |
| PGx | Zurbonsen_2004 | not_relevant | 0 | 0 | The paper reports a method for measuring CYP3A4 activity via dexamethasone metabolism, not the pharmacokinetics of beta_hemolysin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeta_hemolysin%5D&body=Drug%3A%20beta_hemolysin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_beta_hemolysin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
