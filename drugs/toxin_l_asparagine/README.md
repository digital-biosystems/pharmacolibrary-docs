<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Asparagine&quot;}]"></div>

# L-Asparagine

- **generic name:** L-Asparagine
- **T3DB:** [T3D4362](http://www.t3db.ca/toxins/T3D4362) · **DrugBank:** [DB00174](https://go.drugbank.com/drugs/DB00174) · **PubChem:** [CID 6267](https://pubchem.ncbi.nlm.nih.gov/compound/6267)
- **groups:** approved, nutraceutical, withdrawn

## About

Asparagine (Asn) is one of the 20 most common natural amino acids on Earth. It has carboxamide as the side chain's functional group. It is considered a non-essential amino acid. …

- **Category:** Drug, Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** Used for nutritional supplementation, also for treating dietary shortage or imbalance.
- **Mechanism of toxicity:** Asparagine, a non-essential amino acid is important in the metabolism of toxic ammonia in the body through the action of asparagine synthase which attaches ammonia to aspartic acid in an amidation reaction. Asparagine is also used as a structural component in many proteins.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4362">T3DB T3D4362</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 70-47-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17196">ChEBI 17196</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Panetta_2021_reference](drugs/toxin_l_asparagine/LAsparagine_Panetta2021_reference.md) | — | 1-compartment (no model) | 0 | Panetta JC et al., Pharmacodynamics of cerebrospinal fluid…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04315-0](https://doi.org/10.1007/s00280-021-04315-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [El-Shanshoury_2025_L_asparaginase_activity](drugs/toxin_l_asparagine/pd_El_Shanshoury_2025_L_asparaginase_activity.md) | L-asparaginase activity biomarker turnover ← L-asparagine | — | El-Shanshoury AER et al., Characterization and bioactivities of g…, Microbial cell factories (2025) | [10.1186/s12934-025-02855-1](https://doi.org/10.1186/s12934-025-02855-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=l_asparagine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ASNS (unknown), ASRGL1 (substrate), NARS1 (unknown), NARS2 (unknown), SLC16A10 (inhibitor), SLC1A5 (unknown), SLC38A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 10:11 | 1:04:26 | 0/1/0 | 0/1/0 | 0/0/0 | 615,331/25,372 | einfracz / qwen3.8-27b | 63 | 3/31 | 63/0 | 0 |

## Coverage

- **PubMed hits:** 484 matched, 185 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Panetta_2021.pdf` | Panetta JC et al., Pharmacodynamics of cerebrospinal fluid…, Cancer chemotherapy and pha… (2021) | popPK | 8 | [10.1007/s00280-021-04315-0](https://doi.org/10.1007/s00280-021-04315-0) | [34170389](https://pubmed.ncbi.nlm.nih.gov/34170389) | The paper reports pharmacodynamic parameters (duration of CSF depletion, thresholds) for L-asparagine in a human clinical trial, with specific numeric values provided in the text. |

<sub>queue written 2026-11-10 10:01 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2007 | irrelevant | 0 | 0 | The paper characterizes the AGPAT9 enzyme and lipid synthesis; l-asparagine is only mentioned as an amino acid residue in a protein motif, not as a subject substance with kinetic parameters. |
| PGx | Alachkar_2017 | not_relevant | 1 | 10 | The study investigates a pharmacogenomic association with asparaginase-induced hepatotoxicity, which is a safety/toxicity outcome and not a pharmacokinetic (PK) or primary pharmacodynamic (PD) efficacy parameter. |
| PGx | An_2023 | not_relevant | 0 | 0 | The paper studies the hepatotoxicity of Tripterygium glycosides and the gene Asns in the context of metabolomics, but does not assess the impact of a gene variant on a pharmacokinetic or pharmacodynamic parameter for L-asparagine. |
| popPK | Ashrafi_2013 | irrelevant | 1 | 0 | The paper studies L-asparaginase (the enzyme) delivery and its kinetic parameters (Km for asparaginase), not the toxicokinetics of L-asparagine (the substrate) in a biological system. |
| popPK | Avramis_2002 | irrelevant | 0 | 0 | The paper focuses on asparaginase pharmacokinetics and the subsequent depletion of asparagine (a metabolite effect) in humans, not the toxicokinetic parameters of L-asparagine as a subject substance. |
| popPK | Avramis_2006 | irrelevant | 2 | 3 | The paper reports pharmacokinetic parameters for the enzyme L-asparaginase (the drug), not for L-asparagine (the substrate/subject). |
| PGx | Barbier_2000 | not_relevant | 0 | 0 | The paper investigates UGT2B enzyme structure and stability, not the pharmacokinetics or pharmacodynamics of l-asparagine. |
| PGx | Batushansky_2015 | not_relevant | 0 | 0 | The paper studies plant metabolism and GABA transport in Arabidopsis, not human pharmacogenomics or the drug L-asparaginase. |
| PGx | Bishop_1995 | not_relevant | 0 | 0 | The paper discusses the structure of FSH and its asparagine residues, not the pharmacogenomics of the drug L-asparagine. |
| popPK | Blanco_2017 | irrelevant | 0 | 0 | The paper characterizes Ghrelin O-Acyltransferase (GOAT) in goldfish and mentions asparagine only as a conserved amino acid residue in the protein sequence, not as the subject substance for toxicokinetic analysis. |
| popPK | Bolliger_2025 | irrelevant | 0 | 0 | The paper is an observational metabolomics study that measures asparagine concentrations in sweat and plasma but does not report any toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for L-asparagine. |
| popPK | Bootz_2016 | irrelevant | 0 | 0 | The paper studies fusion proteins and glycosylation, where asparagine is mentioned only as a residue for mutation, not as the toxicokinetic subject substance. |
| popPK | Butnev_2022 | irrelevant | 0 | 0 | The paper analyzes the glycosylation structure of Follicle-Stimulating Hormone (FSH), not the toxicokinetics of the amino acid l_asparagine. |
| PGx | Butnev_2022 | not_relevant | 0 | 0 | The paper investigates the glycosylation structure of Follicle-Stimulating Hormone (FSH) and its receptor binding, but does not mention the drug L-asparagine or any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| PGx | Cao_2023 | not_relevant | 0 | 0 | The paper investigates the stability of the enzyme Glucose-6-phosphatase-alpha in an mRNA therapy context, not the pharmacogenomics of the drug L-asparagine. |
| popPK | Cardoso_2020 | irrelevant | 0 | 0 | The paper focuses on the purification of the enzyme L-asparaginase, not the toxicokinetic parameters (half-life, clearance, etc.) of the substrate L-asparagine. |
| PGx | Carleton_2010 | not_relevant | 0 | 0 | The paper discusses a mutation affecting the amino acid asparagine in the context of a metabolic disorder and genetic diagnosis, not the pharmacokinetics/pharmacodynamics of the drug L-asparagine. |
| PGx | Chowdhury_2022 | not_relevant | 0 | 0 | The study analyzes metabolic reprogramming in maize roots and has no relevance to human pharmacogenomics or drug pharmacokinetics. |
| PGx | Collen_1994 | not_relevant | 0 | 0 | The paper studies protein engineering variants of rt-PA in dogs, not human pharmacogenomics of L-asparagine. |
| popPK | Cooper_1992 | irrelevant | 0 | 0 | The paper describes a proteoglycan and mentions asparagine only as an amino acid residue in its structure, not as a subject of toxicokinetic study. |
| PGx | Cotrin_2025 | not_relevant | 0 | 10 | The paper reports L-asparagine as a urinary metabolite biomarker associated with Parkinson's disease and genetic variants, not as a drug whose PK/PD is affected by pharmacogenomics. |
| PGx | Coutinho_2024 | not_relevant | 0 | 0 | The paper analyzes the metabolome of genetically modified soybeans under drought stress and does not report pharmacokinetic or pharmacodynamic effects of l-asparagine or any gene variants. |
| PGx | Dlamini_2010 | not_relevant | 0 | 0 | The paper discusses antimalarial drug resistance markers in Plasmodium falciparum and does not involve the drug l-asparagine or any pharmacokinetic/pharmacodynamic parameters related to it. |
| popPK | El-Shanshoury_2025 | irrelevant | 1 | 5 | The paper reports the enzyme L-asparaginase (which degrades the substance), including kinetic parameters (Km, Vmax) for the enzyme and its stability half-life, but does not report toxicokinetic parameters for L-asparagine itself. |
| PGx | Ellis_1995 | not_relevant | 0 | 0 | The paper investigates CYP2D6 mutations and their effect on the metabolism of debrisoquine and metoprolol, not l-asparagine. |
| PGx | Fernández-Murray_2023 | not_relevant | 0 | 0 | The paper investigates the Opi1 transcriptional repressor and lipid synthesis in Saccharomyces cerevisiae, which is unrelated to the pharmacogenomics of the drug L-asparagine. |
| PGx | Fonseca_2021 | not_relevant | 0 | 0 | The paper is a review on chemical modification and protein engineering of L-asparaginase to improve stability and reduce side effects, not a study on human genetic variants affecting its pharmacokinetics or pharmacodynamics. |
| PGx | G_2018 | not_relevant | 0 | 0 | The paper studies LHCGR polymorphisms and hLH/hFSH dosing, which is unrelated to the pharmacokinetics or pharmacodynamics of L-asparagine. |
| PGx | Gibson_2021 | not_relevant | 1 | 1 | The paper mentions pharmacogenomic data in the context of toxicity (pancreatitis) risk rather than describing a specific genetic effect on the PK or PD parameters of L-asparagine itself. |
| PGx | Gill_2024 | not_relevant | 0 | 0 | The paper discusses N-glycosylation (asparagine-linked) pathways and epilepsy, but does not report pharmacokinetic or pharmacodynamic effects of gene variants on the drug L-asparagine. |
| PGx | Grimes_2021 | not_relevant | 0 | 0 | The paper reports an association between genetic variants (specifically CFTR) and the risk of treatment-related pancreatitis (an adverse event), but it does not report the effect of genotypes on pharmacokinetic or pharmacodynamic parameters (such as clearance, half-life, or asparagine levels) of L-asparaginase. |
| PGx | Gumbrevičius_2012 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between paracetamol and simvastatin, not a pharmacogenomic effect on L-asparagine. |
| popPK | Gyuricza_2021 | irrelevant | 0 | 0 | The paper investigates the kinetics of 68Ga-labeled NGR-based radioglycopeptides, not l-asparagine, which is only a structural component of the peptide sequence. |
| popPK | Ho_1987 | irrelevant | 0 | 0 | The paper describes a monoclonal antibody and its target glycoprotein, mentioning asparagine only in the context of N-linked glycosylation (asparagine-linked carbohydrates), not as the subject substance for toxicokinetic analysis. |
| popPK | Hoeben_2026 | irrelevant | 1 | 0 | The paper reports PK parameters for Calaspargase Pegol (an enzyme/drug), not for L-asparagine (the substrate), and no kinetic data for L-asparagine itself are provided. |
| popPK | Hoefner_2026 | irrelevant | 0 | 0 | The paper discusses the intracellular clearance of mutant Neuroserpin protein via ERLAD and does not contain any toxicokinetic parameters for L-asparagine. |
| PGx | Hoefner_2026 | not_relevant | 0 | 0 | The paper investigates the cellular degradation mechanism (ERLAD) of a disease-causing mutant protein (Neuroserpin), not the pharmacokinetics or pharmacodynamics of the drug L-Asparaginase or L-Asparagine. |
| popPK | Honda_2025 | irrelevant | 0 | 0 | The paper describes the structural characterization and enzymatic function of zebrafish Ngly2 (an N-glycanase); l-asparagine appears only as a substrate component of glycoproteins or in chemical synthesis, not as a subject substance for toxicokinetic analysis. |
| PGx | Hooker_2023 | not_relevant | 0 | 0 | The paper focuses on soybean agriculture and differential gene expression related to seed protein content, not on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug L-asparagine. |
| PGx | Horvath_2019 | not_relevant | 0 | 0 | The paper reports an analytical method for measuring asparaginase pharmacodynamics in mice but contains no data on genetic variants or pharmacogenomic effects. |
| popPK | Hulea_2018 | irrelevant | 0 | 0 | The paper focuses on the metabolic effects of kinase inhibitors and biguanides on cancer cells, mentioning L-asparagine only as a metabolic product involved in drug response mechanisms, not reporting any toxicokinetic parameters for L-asparagine itself. |
| PGx | Hundal_1987 | not_relevant | 0 | 0 | The paper describes glutamine transport kinetics in rat muscle, not the pharmacokinetics or pharmacodynamics of L-asparagine, and does not mention gene variants or genotypes. |
| popPK | Jacobs_2009 | irrelevant | 0 | 0 | The paper is a review on N-glycosylation of biopharmaceuticals where L-asparagine appears as a residue in proteins rather than as a subject substance with kinetic parameters. |
| PGx | Jiang_2022 | not_relevant | 0 | 0 | The paper discusses natural variation in maize affecting cold tolerance and amino acid metabolism, not the pharmacogenomics of the drug L-asparagine. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The paper analyzes aquaporin gene expression in fish and mentions asparagine only as part of a protein motif (NPA), not as a toxicokinetic subject. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The paper is an in silico study of phytoconstituents as SARS-CoV-2 inhibitors and does not report toxicokinetic parameters for l-asparagine. |
| PGx | Liao_2017 | not_relevant | 0 | 0 | The paper investigates the effect of glutamine depletion and L-asparaginase on cancer stem cells, but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters of L-asparagine. |
| popPK | Lin_2026 | irrelevant | 0 | 0 | The paper is a study on cadmium stress in bryophytes where L-asparagine is identified as a differential metabolite, but no toxicokinetic parameters (half-life, clearance, etc.) for L-asparagine are reported. |
| popPK | Lindeman_2021 | irrelevant | 0 | 0 | The paper focuses on acrylamide, and l-asparagine is only mentioned as a precursor in food processing, not as a subject of toxicokinetic analysis. |
| PGx | Lüttmann_1994 | not_relevant | 0 | 0 | The paper reports a genetic variant in apolipoprotein C-III and its effect on lipoprotein metabolism, which is unrelated to the pharmacokinetics or pharmacodynamics of the drug L-asparagine. |
| popPK | Ma_1997 | irrelevant | 0 | 0 | The paper focuses on gene regulation of a glycoprotein synthesis enzyme and does not report any toxicokinetic parameters for L-asparagine. |
| PGx | Mackman_1996 | not_relevant | 0 | 0 | The paper investigates the structural biology of the CYP2D6 enzyme, not the pharmacokinetics of the drug L-asparagine. |
| popPK | Maeda_1988 | irrelevant | 0 | 0 | The paper focuses on the purification and characterization of P400 protein from mouse cerebellum and contains no data regarding the toxicokinetics of L-asparagine. |
| PGx | Maier_1995 | not_relevant | 0 | 0 | The paper studies GTP hydrolysis by HypB in Escherichia coli and has no relation to the pharmacokinetics or pharmacodynamics of the drug L-asparagine. |
| PGx | Marafi_2022 | not_relevant | 0 | 0 | The paper investigates SLC38A3 variants in a disease context (epileptic encephalopathy) and their effect on endogenous metabolite levels, not on the pharmacokinetics or pharmacodynamics of the drug L-asparaginase (or L-asparagine as a therapeutic agent). |
| PGx | Martins_2013 | not_relevant | 0 | 0 | The paper discusses a genetic mutation in ALPL that causes a disease (hypophosphatasia), not a pharmacogenomic effect on the PK/PD of the drug L-asparagine. |
| PGx | Medici_2021 | not_relevant | 0 | 0 | The paper uses asparagine as a biomarker for Wilson Disease diagnosis via AI, but does not study pharmacokinetics or pharmacodynamics of the drug L-asparagine. |
| popPK | Modregger_2000 | irrelevant | 0 | 0 | The paper reports on the cloning and functional properties of PACSIN proteins (endocytosis inhibitors) and does not study l-asparagine toxicokinetics. |
| PGx | Montes-Grajales_2013 | not_relevant | 0 | 0 | The paper focuses on bisphenol A targets and does not involve l-asparagine pharmacogenomics. |
| popPK | Natowicz_1996 | irrelevant | 0 | 0 | The paper reports on lysosomal enzyme activities (specifically hyaluronidase and N-acetylglucosamine-1-phosphotransferase) in mucolipidoses, and l-asparagine is only mentioned as a chemical descriptor for a type of glycosidic linkage ("asparagine-linked"), not as the subject substance for kinetic study. |
| PGx | Nelles_1992 | not_relevant | 0 | 0 | The paper studies a protein variant (rt-PA), not the drug l_asparagine. |
| PGx | Ntege_2016 | not_relevant | 0 | 0 | The paper investigates malaria vaccine candidates (PfRipr) and parasite genetic diversity, unrelated to l_asparagine pharmacokinetics or pharmacodynamics. |
| PGx | ODonnell_2012 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic association for capecitabine, not l-asparagine. |
| PGx | Ou_2022 | not_relevant | 0 | 0 | The paper reports on SARS-CoV-2 Mpro protein mutations affecting drug resistance to nirmatrelvir, not human pharmacogenomics of l_asparagine. |
| PGx | Ouattara_2022 | not_relevant | 0 | 0 | The paper analyzes genetic diversity of Plasmodium falciparum antigens for malaria vaccine design and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug L-asparagine. |
| popPK | Oulmouden_1997 | irrelevant | 0 | 0 | The paper investigates the molecular cloning and expression of a bovine fucosyltransferase gene, and L-asparagine is only mentioned in the context of glycosylation sites, not as the subject of a toxicokinetic study. |
| popPK | Panetta_2009 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug asparaginase (an enzyme), not for l-asparagine itself (which is measured as a metabolite/depletion marker but lacks specific kinetic parameters like half-life or clearance in the provided text). |
| popPK | Panosyan_2004 | irrelevant | 0 | 0 | The paper reports pharmacodynamic correlations and enzymatic activity levels rather than quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for L-asparagine. |
| PGx | Pastorczak_2014 | not_relevant | 1 | 0 | The paper reports an association between an ASNS gene variant and clinical disease outcome (event risk) rather than a specific pharmacokinetic or pharmacodynamic parameter of L-asparagine. |
| PGx | Popova_2019 | not_relevant | 0 | 0 | The paper studies the effect of OPRM1 variants on the pharmacodynamics of opioids (morphine/DAMGO), not the drug L-asparagine. |
| popPK | Provost_1990 | irrelevant | 0 | 0 | The paper focuses on the molecular characterization of rabbit apolipoprotein D and does not report toxicokinetic parameters for l-asparagine. |
| popPK | Quiroga_1994 | irrelevant | 0 | 0 | The paper characterizes a glycoprotein (gp93) linked to asparagine residues, but does not study the toxicokinetics of the substance L-asparagine. |
| popPK | Rafiee_2026 | irrelevant | 0 | 0 | The paper is an exposure and biomonitoring study where L-asparagine is identified as a potential biomarker, but it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance) for the substance. |
| PGx | Ramírez-Montaño_2021 | not_relevant | 0 | 0 | The paper reports a genetic variant in ALG13 causing a congenital disorder of glycosylation, not a pharmacogenomic effect on the PK or PD of the drug L-asparagine. |
| PGx | Rayinda_2024 | not_relevant | 0 | 0 | The paper investigates the association between CYP1B1 variants and Frontal Fibrosing Alopecia risk, not the pharmacokinetic or pharmacodynamic profile of the drug L-asparagine. |
| PGx | Reichardt_1991 | not_relevant | 0 | 0 | The paper discusses galactosemia and GALT mutations, which are unrelated to the pharmacogenomics of L-asparagine. |
| PGx | Sahebi_2015 | not_relevant | 0 | 0 | The paper is a review on silicon in plants and has no relation to the pharmacogenomics of L-asparagine. |
| PGx | Sahu_2021 | not_relevant | 0 | 0 | The paper is a review on flux balance analysis and machine learning, unrelated to L-asparagine pharmacogenomics. |
| PGx | Scholze_2020 | not_relevant | 0 | 0 | The paper reviews nicotine acetylcholine receptors and the CHRNA5 gene, unrelated to the pharmacogenomics of L-asparagine. |
| popPK | Shao_2014 | irrelevant | 0 | 0 | The study focuses on 68Ga-labeled NGR and RGD peptides for imaging, not the toxicokinetics of L-asparagine. |
| popPK | Stahlman_1992 | irrelevant | 0 | 0 | The paper focuses on the immunological properties of surfactant protein A and its blood group antigenic determinants, containing no toxicokinetic data for L-asparagine. |
| PGx | Staklinski_2023 | not_relevant | 0 | 0 | The paper describes an inborn error of metabolism (ASNS deficiency) and characterizes the variants in cell lines; it does not report a pharmacogenomic effect on the PK/PD of the drug L-asparagine. |
| popPK | Séguin_1995 | irrelevant | 0 | 0 | The paper concerns the molecular characterization and mRNA distribution of the protein apolipoprotein D, not the toxicokinetics of the amino acid L-asparagine. |
| PGx | Tanino_2026 | not_relevant | 0 | 0 | The paper studies OATP1B1 transport kinetics and post-translational modification (glycosylation), not a pharmacokinetic or pharmacodynamic effect of the drug L-asparagine. |
| popPK | Tashiro_2002 | irrelevant | 0 | 0 | The paper studies isoflavones in mouse macrophage cells and only mentions asparagine as a secondary metabolic product inhibited by the isoflavones, providing no kinetic parameters for L-asparagine itself. |
| popPK | Thakur_2004 | irrelevant | 0 | 0 | The study focuses on the imaging properties and kinetics of a labeled VIP analog peptide, not the toxicokinetics of the amino acid L-asparagine. |
| popPK | Torok_2022 | irrelevant | 0 | 0 | The paper studies the enzymatic kinetics of PNGase F acting on immunoglobulin G glycoproteins, not the toxicokinetics of the free amino acid l-asparagine. |
| PGx | Torok_2022 | not_relevant | 0 | 0 | The paper investigates the effect of sample glucose concentration on the activity of the PNGase F enzyme, not a pharmacogenomic effect on the pharmacokinetics of the drug L-asparagine. |
| popPK | Valtavaara_1998 | irrelevant | 0 | 0 | The paper characterizes the primary structure and tissue distribution of lysyl hydroxylase 3, an enzyme, and does not report toxicokinetic parameters for L-asparagine. |
| PGx | Vaughan-Williams_2012 | not_relevant | 0 | 0 | The paper investigates the efficacy of artemether-lumefantrine for malaria treatment and resistance markers in Plasmodium falciparum, not the pharmacokinetics or pharmacodynamics of L-asparagine. |
| PGx | Verderio_1995 | not_relevant | 0 | 0 | The paper discusses genetic mutations in CPT II and their effect on lipid metabolism enzyme activity, not the pharmacokinetics or pharmacodynamics of l-asparaginase. |
| popPK | Virk-Baker_2014 | irrelevant | 0 | 0 | The paper is a systematic review on acrylamide exposure and cancer risk, where l-asparagine is mentioned only as a precursor in the Maillard reaction, not as the subject of toxicokinetic study. |
| PGx | Voruganti_2021 | not_relevant | 0 | 0 | The paper describes antibody glycoengineering for monoclonal antibodies and does not mention L-asparagine or pharmacogenomics. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The paper focuses on the toxicity of benalaxyl; L-asparagine is only reported as a metabolite showing altered levels in the context of toxicity, not as the subject substance with kinetic parameters. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper studies acetylomics in Toxoplasma gondii strains and does not involve l_asparagine or pharmacogenomics. |
| PGx | Watanabe_1995 | not_relevant | 0 | 0 | The paper discusses measles virus glycoprotein processing and does not involve the drug L-asparagine or any pharmacogenomic effects. |
| PGx | Watanabe_1995_2 | not_relevant | 0 | 0 | The paper investigates the glycosylation and proteolytic cleavage of the measles virus fusion glycoprotein, not the pharmacokinetics or pharmacodynamics of the drug L-asparagine. |
| PGx | Watanabe_2020 | not_relevant | 3 | 2 | The paper discusses L-asparaginase (an enzyme drug), not L-asparagine (an amino acid/nutrient), and investigates the pharmacodynamics of the enzyme drug via ASNS methylation, not the PK/PD of L-asparagine itself. |
| PGx | Watanabe_2023 | not_relevant | 4 | 5 | The study evaluates the epigenetic (methylation) biomarker ASNS for predicting drug response (PD sensitivity), which is a distinct concept from the strict definition of pharmacogenomic effects involving gene variants (SNPs/indels) on PK/PD parameters. |
| popPK | Watzek_2013 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of acrylamide, with L-asparagine mentioned only as a precursor in the Maillard reaction. |
| popPK | Wayman_2019 | irrelevant | 0 | 0 | The paper focuses on metabolic engineering of Escherichia coli for glycan production, and L-asparagine is only mentioned as a site for protein glycosylation (N-linked), not as a subject substance for toxicokinetic analysis. |
| PGx | Weinstein_2001 | not_relevant | 2 | 1 | The paper mentions an association between the asparagine synthetase gene and L-asparaginase sensitivity in NCI-60 cell lines, but it is a general review of methods and does not report specific quantitative pharmacokinetic or pharmacodynamic parameter changes driven by a variant for the compound l_asparagine. |
| PGx | Wu_2018 | not_relevant | 0 | 0 | The paper is a general review of genomics in pediatric ALL and discusses l-asparaginase's mechanism but does not report specific pharmacogenomic effects on l-asparagine PK or PD parameters. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The study focuses on toxicology in earthworms and reports changes in the metabolite asparagine due to acetochlor exposure, not the pharmacokinetics or pharmacodynamics of the drug l-asparagine. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper discusses the environmental toxicology of carbon nanotubes in earthworms, not the pharmacogenomics of human pharmacokinetics or pharmacodynamics. |
| PGx | Youssef_2021 | not_relevant | 2 | 10 | The study reports associations with toxicity and survival outcomes, not PK or PD parameters of l-asparagine. |
| PGx | de_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of action of rifaximin, not the pharmacokinetics or pharmacodynamics of L-asparagine influenced by genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_asparagine%5D&body=Drug%3A%20l_asparagine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_asparagine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 10:01 UTC</sub>
