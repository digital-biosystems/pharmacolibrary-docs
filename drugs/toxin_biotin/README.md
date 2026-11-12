<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Biotin&quot;}]"></div>

# Biotin

- **generic name:** Biotin
- **T3DB:** [T3D2690](http://www.t3db.ca/toxins/T3D2690) · **DrugBank:** [DB00121](https://go.drugbank.com/drugs/DB00121) · **PubChem:** [CID 171548](https://pubchem.ncbi.nlm.nih.gov/compound/171548)
- **groups:** approved, investigational, nutraceutical

## About

Biotin is an enzyme co-factor present in minute amounts in every living cell. Biotin is also known as vitamin H or B7 or coenzyme R. It occurs mainly bound to proteins or polypeptides and is abundant in liver, kidney, pancreas, yeast, and milk. …

- **Category:** Drug, Household Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Route of exposure:** oral.
Systemic - approximately 50%
- **Sources and uses:** For nutritional supplementation, also for treating dietary shortage or imbalance.
- **Mechanism of toxicity:** Biotin is necessary for the proper functioning of enzymes that transport carboxyl units and fix carbon dioxide, and is required for various metabolic functions, including gluconeogenesis, lipogenesis, fatty acid biosynthesis, propionate metabolism, and catabolism of branched-chain amino acids.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2690">T3DB T3D2690</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 58-85-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15956">ChEBI 15956</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Karalia_2025_B](drugs/toxin_biotin/pd_Karalia_2025_B.md) | biotin · model not identified | — | Karalia S et al., Biotin: DNA to diet, The Journal of nutritional… (2025) | [10.1016/j.jnutbio.2025.110081](https://doi.org/10.1016/j.jnutbio.2025.110081) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=biotin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | lung | `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: ACACA (cofactor), ACACB (cofactor), HLCS (substrate), MCCC1 (cofactor), MCCC2 (cofactor), PC (cofactor), PCCA (cofactor), PCCB (cofactor), SLC5A6 (substrate), SLC5A8 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 01:35 | 1:16:22 | 0/0/0 | 0/1/0 | 0/0/0 | 1,119,231/41,770 | einfracz / qwen3.8-27b | 57 | 6/39 | 57/0 | 0 |

## Coverage

- **PubMed hits:** 768 matched, 282 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baumgartner_1985.pdf` | Baumgartner ER et al., Biotinidase deficiency associated with…, Annals of the New York Acad… (1985) | popPK | 8 | [10.1111/j.1749-6632.1985.tb18445.x](https://doi.org/10.1111/j.1749-6632.1985.tb18445.x) | [3925858](https://pubmed.ncbi.nlm.nih.gov/3925858) | The paper reports renal biotin clearance studies and time course of depletion, but no specific numeric values are present in the provided evidence. |
| `Taniguchi_2008.pdf` | Taniguchi A et al., Transplacental transport and tissue dis…, Congenital anomalies (2008) | popPK | 8 | [10.1111/j.1741-4520.2008.00179.x](https://doi.org/10.1111/j.1741-4520.2008.00179.x) | [18452485](https://pubmed.ncbi.nlm.nih.gov/18452485) | The paper investigates the transplacental transport and tissue distribution of biotin in mice, which constitutes toxicokinetic data, but the specific numeric parameter values are not included in the provided abstract evidence. |
| `Rosebrough_1993.pdf` | Rosebrough SF, Pharmacokinetics and biodistribution of…, Nuclear medicine and biology (1993) | popPK | 7 | [10.1016/0969-8051(93)90037-u](https://doi.org/10.1016/0969-8051(93)90037-u) | [8358353](https://pubmed.ncbi.nlm.nih.gov/8358353) | The paper reports pharmacokinetic parameters (plasma clearance, biodistribution) for DTPA-biotin, but the specific numeric values are not provided in the extracted evidence. |
| `Peng_1994.pdf` | Peng J et al., Aged platelets have an impaired respons…, Blood (1994) | pd | 4 |  | [7506077](https://www.ncbi.nlm.nih.gov/pubmed/7506077) | metadata signals extractable PD data (EC50) |
| `Vlaming_2009.pdf` | Vlaming ML et al., Physiological and pharmacological roles…, Advanced drug delivery revi… (2009) | pgx | 7 | [10.1016/j.addr.2008.08.007](https://doi.org/10.1016/j.addr.2008.08.007) | [19118589](https://www.ncbi.nlm.nih.gov/pubmed/19118589) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Zhang_2009.pdf` | Zhang H et al., Facile detection of proteins on a solid…, Talanta (2009) | pgx | 7 | [10.1016/j.talanta.2009.04.056](https://doi.org/10.1016/j.talanta.2009.04.056) | [19576433](https://www.ncbi.nlm.nih.gov/pubmed/19576433) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Bathum_1998.pdf` | Bathum L et al., A dual label oligonucleotide ligation a…, Therapeutic drug monitoring (1998) | pgx | 5 | [10.1097/00007691-199802000-00001](https://doi.org/10.1097/00007691-199802000-00001) | [9485546](https://www.ncbi.nlm.nih.gov/pubmed/9485546) | metadata signals extractable PGX data (CYP2C19*1) |
| `Konstantou_2007.pdf` | Konstantou J et al., Genotyping of single nucleotide polymor…, Analytical and bioanalytica… (2007) | pgx | 5 | [10.1007/s00216-007-1383-z](https://doi.org/10.1007/s00216-007-1383-z) | [17554527](https://www.ncbi.nlm.nih.gov/pubmed/17554527) | metadata signals extractable PGX data (CYP2D6) |
| `Litos_2007.pdf` | Litos IK et al., Rapid genotyping of CYP2D6, CYP2C19 and…, Analytical and bioanalytica… (2007) | pgx | 5 | [10.1007/s00216-007-1593-4](https://doi.org/10.1007/s00216-007-1593-4) | [17909762](https://www.ncbi.nlm.nih.gov/pubmed/17909762) | metadata signals extractable PGX data (CYP2D6) |
| `Liu_2013.pdf` | Liu G et al., Single-nucleotide polymorphism genotypi…, Biosensors & bioelectronics (2013) | pgx | 5 | [10.1016/j.bios.2012.11.005](https://doi.org/10.1016/j.bios.2012.11.005) | [23247054](https://www.ncbi.nlm.nih.gov/pubmed/23247054) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-11-10 01:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akyüzlüer_2026 | not_relevant | 0 | 0 | The paper describes prescribing patterns and usage rates of biotin in mitochondrial diseases, not the effect of genetic variants on biotin's pharmacokinetics or pharmacodynamics. |
| popPK | Alyami_2021 | irrelevant | 0 | 0 | Biotin is used only as an analytical reagent for lentiviral vector labeling, and no kinetic parameters are reported. |
| PGx | Ames_2004 | not_relevant | 0 | 0 | The paper is a general review of micronutrients and genetics, mentioning biotin only as a deficiency causing mitochondrial decay, without reporting specific pharmacogenomic effects on biotin PK/PD. |
| PGx | Aoki_1995 | not_relevant | 1 | 0 | The paper discusses a genetic deficiency of a metabolic enzyme (HCS) and its mutations, not a pharmacogenomic effect of a variant on the PK/PD of exogenous biotin as a drug. |
| popPK | Bagis_2007 | irrelevant | 0 | 0 | The paper uses biotin solely as a component of the immunohistochemical detection method (streptavidin-biotin-horseradish peroxidase) and reports no kinetic parameters for biotin. |
| PGx | Bathum_1998 | not_relevant | 0 | 0 | The paper describes a diagnostic assay for CYP2C19 genotypes and does not report any pharmacokinetic or pharmacodynamic parameters for biotin. |
| popPK | Baumgartner_1985 | relevant | 8 | 0 | The paper reports renal biotin clearance studies and time course of depletion, but no specific numeric values are present in the provided evidence. |
| popPK | Ben-Eliezer_2020 | irrelevant | 2 | 0 | The paper uses a biotinylated contrast agent (b-BSA-Gd-DTPA) to model placental perfusion kinetics, but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance) for native biotin itself. |
| popPK | Benselama_2024 | irrelevant | 0 | 0 | The paper focuses on the design of ciprofloxacin derivatives and their interaction with Biotin carboxylase (a protein target), not on the toxicokinetic parameters of the substance biotin itself. |
| popPK | Bigini_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of avidin-nucleic acid nanoassemblies (a protein complex), not the toxicokinetic parameters of biotin itself, and biotin is not the subject substance. |
| popPK | Billones_2017 | irrelevant | 0 | 0 | The paper focuses on in silico drug discovery against the Mtb BioA enzyme (a biotin biosynthesis enzyme) and reports inhibition data for novel compounds, but contains no quantitative toxicokinetic parameters (half-life, clearance, etc.) for biotin itself. |
| PGx | Bognanni_2024 | not_relevant | 1 | 0 | The paper reports in vitro drug delivery using biotin-functionalized nanocarriers but does not investigate how genetic variants (genotypes) affect the pharmacokinetic or pharmacodynamic parameters of biotin itself; it only measures transcript levels of biotin-related genes to justify the cell model choice. |
| popPK | Bogusiewicz_2012 | irrelevant | 0 | 0 | The paper reports metabolic ratios of acylcarnitines as biomarkers for biotin deficiency status, not quantitative pharmacokinetic parameters (e.g., half-life, clearance, distribution volume) of biotin itself. |
| popPK | Bowen_2019 | irrelevant | 1 | 0 | The paper is a review of laboratory best practices for detecting biotin interference and does not report any original quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Boyle_2013 | irrelevant | 0 | 0 | Biotin acts solely as a chemical linker in a radioimmunoconjugate, so the kinetic data describe the disposition of the complex, not free biotin. |
| popPK | Bronckers_1987 | irrelevant | 0 | 0 | The paper uses biotin only as an analytical reagent in the avidin-biotin-peroxidase-complex (ABC) immunostaining technique and does not report any toxicokinetic parameters for biotin. |
| popPK | Bronckers_2000 | irrelevant | 0 | 0 | The paper uses biotin only as a chemical label for an antibody (annexin-V) to visualize phagocytosis; it does not study the toxicokinetics of free biotin itself. |
| popPK | Bronckers_2000_2 | irrelevant | 0 | 0 | Biotin is used solely as a chemical label for Annexin V to detect apoptosis, not as the subject substance for toxicokinetic characterization. |
| popPK | Brown_1992 | irrelevant | 0 | 0 | The paper studies hyaluronan distribution in mouse tissue and uses biotin only as a labeling reagent, not as the subject of toxicokinetic analysis. |
| popPK | Brown_2018 | irrelevant | 0 | 0 | The paper is a comparative genomics study of nematode endosymbionts that mentions biotin only in the context of bacterial biosynthetic pathway capacity, not as a subject of toxicokinetic analysis. |
| PGx | Brownsey_2006 | not_relevant | 0 | 0 | The paper reviews the regulation of acetyl-CoA carboxylase and does not discuss pharmacogenomic effects of genetic variants on the pharmacokinetics or pharmacodynamics of biotin as a drug. |
| PGx | Báez-Saldaña_2009 | not_relevant | 0 | 0 | The paper investigates the physiological effects of biotins dietary levels on mouse reproduction and does not report any genetic variants or pharmacogenomic interactions. |
| popPK | Chandnani_2026 | irrelevant | 0 | 0 | The paper focuses on the quantification of Bevacizumab, using biotin only as a reagent for detection (Streptavidin-Biotin system), with no kinetic parameters for biotin itself. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The paper focuses on the delivery of itraconazole, and biotin is used solely as a chemical crosslinker (streptavidin-biotin system) rather than the subject of toxicokinetic study. |
| popPK | Chesa_1988 | irrelevant | 0 | 0 | Biotin is used solely as part of the avidin-biotin immunoperoxidase staining method, and no toxicokinetic parameters for biotin are reported. |
| popPK | Chevailler_1989 | irrelevant | 0 | 0 | Biotin is used solely as a labeling reagent for antibodies in an immunology study, with no kinetic parameters for biotin itself reported. |
| popPK | Chuang_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for poly(ethylene glycol) (PEG) using biotinylated-PEG only as an assay tracer, not biotin as the subject substance. |
| PGx | Cicalini_2021 | not_relevant | 0 | 0 | The paper reports on a genetic disorder (Biotinidase deficiency) affecting biotin metabolism, but biotin is not a drug; there is no administration of a pharmaceutical agent, so no pharmacokinetic or pharmacodynamic parameters of a drug are reported. |
| popPK | Colucci_1986 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent in the avidin-biotin-peroxidase technique, with no kinetic parameters for biotin itself reported. |
| popPK | Csobán-Szabó_2021 | irrelevant | 0 | 0 | The paper characterizes the biochemical properties of the enzyme Transglutaminase 4 (TG4) and uses biotin-pentylamine merely as a substrate/reagent in an in vitro assay, containing no kinetic parameters for the disposition of biotin itself. |
| popPK | Deng_2023 | irrelevant | 0 | 0 | Biotin is used solely as a binding moiety in a drug delivery system (biotin-avidin interaction) and no toxicokinetic parameters for biotin itself are reported. |
| PGx | Dhaini_2003 | not_relevant | 0 | 0 | The paper investigates CYP3A4/5 expression in osteosarcoma tissues as a prognostic biomarker for metastasis; it does not report the effect of genetic variants on the PK or PD parameters of the drug biotin. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | The paper investigates the anti-tumor efficacy of biotin-conjugated PD-L1 inhibitors, where biotin serves as a targeting agent for the compound rather than the subject of toxicokinetic analysis, and no kinetic parameters for biotin itself are reported. |
| PGx | Ding_2025 | not_relevant | 0 | 0 | The study investigates the mechanism of action of Artemetin in asthma, and biotin is used only as a labeling reagent, not as the drug of interest. |
| popPK | Donnenberg_2023 | irrelevant | 1 | 3 | The study measures RBC survival kinetics using biotin-labeled cells, where biotin serves as a tracking tag/label rather than the subject of toxicokinetic analysis; the parameters relate to RBC lifespan and tag cleavage, not biotin disposition. |
| popPK | Dougan_2000 | irrelevant | 0 | 0 | The paper uses biotin only as a chemical linker (3'-biotin) to conjugate DNA aptamers to streptavidin, and does not report kinetic parameters for biotin itself. |
| popPK | Elkin_2010 | irrelevant | 0 | 0 | Biotin is used exclusively as a tracer for the blood-testis barrier and as a label in immunohistochemistry, with no kinetic parameters reported for biotin as a subject substance. |
| popPK | Evander_1997 | irrelevant | 0 | 0 | Biotin is used solely as a chemical reagent for labeling cell surface proteins, not as the subject of toxicokinetic study. |
| popPK | Eza_2026 | irrelevant | 2 | 4 | The paper studies boron kinetics for BNCT carriers (BPA, BBCIP) where biotin is merely a targeting ligand, and does not report specific pharmacokinetic parameters (half-life, clearance, partition coefficients) for free biotin itself. |
| PGx | Fetsch_2006 | not_relevant | 0 | 0 | The paper describes the tissue localization of the ABCG2 transporter protein and discusses potential xenobiotic roles, but it does not report any gene variants or their effects on the pharmacokinetics or pharmacodynamics of biotin. |
| PGx | Forny_2022 | not_relevant | 0 | 0 | The paper investigates the natural recovery of BTD enzyme activity (a disease biomarker) in relation to BTD gene genotypes, not a pharmacokinetic or pharmacodynamic effect of a gene variant on biotin pharmacotherapy. |
| popPK | Foulon_1998 | irrelevant | 0 | 0 | The paper focuses on astatine-211-labeled biotin conjugates used as a carrier for radioimmunotherapy, where biotin serves as a ligand rather than the toxicokinetic subject of interest, and no specific kinetic parameters for biotin itself are reported. |
| popPK | Frigg_1982 | irrelevant | 2 | 0 | The paper reports qualitative autoradiographic tissue distribution of biotin in chickens but provides no quantitative kinetic parameters such as rate constants, half-lives, or partition coefficients. |
| popPK | Fukuyama_1985 | irrelevant | 0 | 0 | The paper uses biotin only as a reagent in an avidin-biotin-peroxidase staining method for immunological detection of a protease and reports no kinetic parameters for biotin. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of paclitaxel in a nanoparticle formulation where biotin is used solely as a targeting ligand, not as the subject substance for kinetic analysis. |
| popPK | Gao_2022_2 | irrelevant | 0 | 0 | The paper studies plant physiology (brassinosteroids and nitric oxide) in Chinese cabbage, where biotin is only used as a chemical reagent in a 'biotin switch assay' for protein nitrosylation detection, not as a subject of toxicokinetic study. |
| popPK | Garin-Chesa_1989 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent in the avidin-biotin immunoperoxidase method for histology, with no kinetic parameters reported. |
| popPK | Ghosh_2023 | irrelevant | 0 | 0 | The paper focuses on the interaction of human oral lectin ZG16B with bacterial cell wall polysaccharides, using biotin solely as a chemical label for conjugation, not as a subject of toxicokinetic study. |
| PGx | Gibson_1996 | not_relevant | 2 | 1 | The paper reports a clinical case of a metabolic enzyme deficiency (holocarboxylase synthetase) affecting biotin utilization but does not report a pharmacogenomic effect on specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, clearance, dose-response curves) of biotin therapy. |
| popPK | Gokulgandhi_2012 | irrelevant | 0 | 0 | Biotin is used solely as a targeting moiety for cidofovir prodrugs, and the paper reports properties of the conjugates (cidofovir/biotin) rather than kinetic parameters for biotin itself. |
| popPK | Goldenberg_2012 | irrelevant | 0 | 0 | The paper discusses pretargeted radioimmunotherapy where biotin acts as a ligand for streptavidin binding, but it does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for biotin itself as the subject substance. |
| popPK | Goshorn_2001 | irrelevant | 0 | 0 | Biotin is used solely as a component of a pretargeted radiolabel and an affinity purification agent, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Goto_2025 | irrelevant | 0 | 0 | The paper uses a biotin-labeled analog as a chemical probe to study protein prenylation, not to measure the toxicokinetics of biotin itself. |
| PGx | Gow_2020 | not_relevant | 0 | 0 | The paper focuses on immunology and Dectin-1 nitrosylation, where biotin is used as a chemical labeling tool (biotin-switch assay), not as the drug of interest. |
| PGx | Gowda_2022 | not_relevant | 0 | 0 | The paper describes a clinical case of biotinidase deficiency but does not report pharmacokinetic or pharmacodynamic parameters of biotin or quantitative effects of the genotype on drug handling. |
| popPK | Green_2018 | irrelevant | 0 | 0 | Biotin is mentioned only as an endogenous blocker or component of a comparator system, not as the subject of toxicokinetic study. |
| popPK | Gueret_2017 | irrelevant | 0 | 0 | The paper investigates the neutralization of the anticoagulant EP217609 by avidin, and biotin is only mentioned as a structural component of the drug, not as a subject for toxicokinetic parameter extraction. |
| popPK | Guo_1992 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent in the assay for the venom protein CT 14, for which all kinetic parameters are reported. |
| popPK | Hainsworth_2005 | irrelevant | 1 | 0 | The paper studies a DOTA-biotin conjugate for radiotherapy, mentioning rapid clearance qualitatively but providing no quantitative kinetic parameters for free biotin. |
| popPK | Happonen_2016 | irrelevant | 0 | 0 | Biotin is used solely as a chemical labeling reagent for platelet microparticles, not as the subject substance for toxicokinetic analysis. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The paper is a review of episodic ataxia genetics and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of biotin. |
| PGx | Hasslacher_1993 | not_relevant | 0 | 0 | The paper describes the regulation of the yeast enzyme acetyl-CoA carboxylase by metabolic factors, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of the drug biotin. |
| popPK | He_2014 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent (streptavidin-biotin-peroxidase complex) for immunohistochemistry, not as the subject of toxicokinetic study. |
| popPK | Holt_2025 | irrelevant | 0 | 0 | The paper uses biotin as a reagent for proximity-dependent labeling (BioID2) in a Schwann cell disease model, but contains no kinetic parameters for biotin itself. |
| popPK | Horemans_2011 | irrelevant | 0 | 0 | Biotin is used solely as a reagent in a molecular biology assay for detecting H. pylori DNA and no kinetic parameters for biotin are reported. |
| popPK | Horvath_2011 | irrelevant | 2 | 2 | The paper reports urinary concentrations and excretion ratios of 3-hydroxyisovaleric acid (a metabolite marker) to assess biotin status, but does not report kinetic parameters (half-life, clearance, Vd, rate constants) for biotin itself. |
| PGx | Imre_2011 | not_relevant | 0 | 0 | The paper describes a flow cytometry method for DNA mutation detection and does not report pharmacokinetic or pharmacodynamic effects of gene variants on biotin. |
| popPK | Ishikawa_1988 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent (avidin-biotin complex) for immunohistochemistry, with no kinetic parameters reported. |
| popPK | Ishizaki_1993 | irrelevant | 0 | 0 | The paper uses biotin as a reagent in the avidin-biotin-peroxidase complex for immunohistochemistry and does not report any kinetic parameters for biotin itself. |
| popPK | Islam_1995 | irrelevant | 0 | 0 | Biotin is used solely as a reagent in the avidin-biotin-peroxidase complex (ABC) method for immunocytochemical staining and is not the subject of any toxicokinetic analysis. |
| popPK | Kabawat_1983 | irrelevant | 0 | 0 | The paper uses biotin-avidin staining as an immunohistochemical technique to detect an antigen, providing no toxicokinetic parameters for biotin itself. |
| PGx | Kannan_2023 | not_relevant | 1 | 0 | The paper is a review of Biotinidase Deficiency, a genetic metabolic disorder involving biotin metabolism, rather than a pharmacogenomic study of a drug's PK/PD parameters. |
| popPK | Khadke_2019 | irrelevant | 0 | 0 | The paper investigates liposome formulations using biotin as a chemical linker for avidin-binding to enhance lymphatic retention, rather than measuring the toxicokinetic parameters of biotin itself as a subject substance. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | The paper focuses on the delivery of a hyaluronate-peptide conjugate, and biotin is mentioned only as a reagent in the TUNEL assay for histological analysis, not as the subject of toxicokinetic study. |
| popPK | Kobayashi_1996 | irrelevant | 0 | 0 | The paper investigates the distribution of 20beta-hydroxysteroid dehydrogenase in pig tissues and uses the streptavidin-biotin method only as an analytical reagent, containing no kinetic parameters for biotin as a subject substance. |
| PGx | Kojima_2006 | not_relevant | 0 | 0 | The paper investigates cell attachment using the avidin-biotin system in tissue engineering, not the pharmacokinetics or pharmacodynamics of biotin in humans or animals influenced by genetic variants. |
| PGx | Konstantou_2007 | not_relevant | 0 | 0 | The paper describes a novel genotyping assay methodology and does not report pharmacokinetic or pharmacodynamic parameters of biotin altered by a gene variant. |
| PGx | Konstantou_2009 | not_relevant | 0 | 0 | The paper describes a dipstick assay for genotyping SNPs, and while biotin is used as a chemical label in the assay, it is not the subject of any pharmacokinetic or pharmacodynamic study. |
| popPK | Kozłowska-Rup_2014 | irrelevant | 0 | 0 | Biotin is mentioned only as a component of the Avidin-biotin-peroxidase complex method used for visualization, not as a substance for which toxicokinetic parameters are reported. |
| popPK | Kraeber-Bodéré_2015 | irrelevant | 0 | 0 | The paper is a review of pretargeting strategies for radioimmunotherapy where biotin is mentioned only as a potential binding agent for the hapten system, not as the subject substance for which toxicokinetic parameters are reported. |
| popPK | Krust_2001 | irrelevant | 0 | 0 | The study investigates the kinetics of the pseudopeptide HB-19, using biotin only as a labeling reagent (biotin-labeled HB-19) and not as the subject substance. |
| popPK | Krzyzanski_2017 | irrelevant | 1 | 0 | Biotin is used solely as a cell labeling agent for the RBC survival study, and the kinetic parameters reported (lifespan) belong to the cells, not the biotin molecule. |
| popPK | LaRochelle_1986 | irrelevant | 0 | 0 | The paper uses biotin only as a labeling reagent in an immunological assay and does not report any toxicokinetic parameters for biotin itself. |
| PGx | Lail_2023 | not_relevant | 0 | 0 | The paper is a case report describing the clinical presentation and management of a neurometabolic disease, and does not analyze pharmacokinetic or pharmacodynamic parameters of biotin or thiamine. |
| popPK | Lebl_2007 | irrelevant | 0 | 0 | Biotin is used only as an analytical reagent (avidin-biotin method) for detecting hyaluronic acid, not as the subject of toxicokinetic study. |
| popPK | Lee_2001 | irrelevant | 2 | 8 | The paper reports kinetic parameters for a "biotin analogue" of the tat peptide (tat-biotin) used as a delivery vehicle, not for biotin itself as the subject substance. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for synthetic sulfonamide inhibitors of biotin protein ligase, not for biotin itself. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The paper uses biotin-linked phosphatidylserine as an experimental tool for protein pulldown assays to study Hsd17b4 localization, and does not report any toxicokinetic parameters for biotin. |
| PGx | Levy_2008 | not_relevant | 0 | 0 | The paper describes protein engineering of streptavidin binding kinetics and does not report any pharmacogenomic effects on biotin pharmacokinetics or pharmacodynamics. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper reports the biodistribution of a biotin-conjugated photosensitizer (compound 1), not the toxicokinetic parameters of biotin itself, and biotin is used solely as a targeting ligand in the conjugate. |
| popPK | Li_2020_2 | irrelevant | 2 | 0 | This is a guidance document reviewing biotin interference in assays; while it mentions pharmacokinetics, the provided evidence contains no quantitative kinetic parameter values (half-life, clearance, etc.) for biotin. |
| PGx | Liao_2003 | not_relevant | 0 | 0 | The paper describes the transdifferentiation of stem cells into renal cells and mentions biotin only as a label for histological staining (RCA), containing no pharmacogenomic data or PK/PD analysis for biotin. |
| popPK | Lindegren_2003 | irrelevant | 2 | 0 | The paper reports pharmacokinetic data for a biotinylated effector molecule (poly-lysine carrier) rather than the kinetic parameters of biotin itself, and no specific numeric time-course values are provided in the text. |
| PGx | Litos_2007 | not_relevant | 0 | 0 | The paper describes a genotyping method using biotin-dUTP as a reagent, not the pharmacokinetics or pharmacodynamics of biotin itself. |
| PGx | Liu_2013 | not_relevant | 0 | 0 | The paper describes a biosensor methodology using biotin as a chemical label for signal detection, not a pharmacogenomic study of biotin as a drug. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | Biotin is used solely as a targeting ligand for drug delivery carriers, not as the subject substance for which toxicokinetic parameters are being measured. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug compound C48 (a biotin biosynthesis inhibitor), not for biotin itself. |
| PGx | Macharia_2019 | not_relevant | 0 | 0 | The paper discusses the use of biotin in a proximity-dependent labeling technique (BioID) for protein interaction screening in plants, not the pharmacokinetics or pharmacodynamics of biotin as a therapeutic drug influenced by genetic variants. |
| PGx | Mao_2011 | not_relevant | 0 | 0 | The study investigates the functional effect of an LRP5 polymorphism on Wnt signaling pathways, and biotin is used only as a chemical reagent for cell surface protein labeling, not as the pharmacological agent being studied. |
| popPK | Matsuyama_2002 | irrelevant | 0 | 0 | The paper studies HMG-CoA reductase inhibitors (statins) in rats, and biotin is mentioned only as an analytical reagent (biotinylated antibody) in the immunohistochemistry method. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a machine learning study on drug repurposing for COVID-19 that mentions biotin only as a predicted drug candidate, with no toxicokinetic parameters. |
| popPK | Medina_2004 | irrelevant | 2 | 0 | The study reports uptake percentages of radiolabeled liposomes and avidin rather than kinetic parameters for free biotin, and no numeric rate constants or half-lives are present in the provided text. |
| PGx | Meguro_2022 | not_relevant | 2 | 8 | The paper reports a successful pregnancy in a patient with a genetic deficiency (HSD) treated with biotin, focusing on safety and metabolic stability rather than quantifying how the specific genotype alters biotin pharmacokinetics or pharmacodynamics. |
| PGx | Mei_2019 | not_relevant | 0 | 0 | The paper discusses osteoporosis genetics and bone metabolism; the mention of "biotin" refers to a pull-down assay method, not the drug biotin or its pharmacokinetics/pharmacodynamics. |
| popPK | Mekawy_2019 | irrelevant | 0 | 0 | The paper focuses on the characterization of magnetic nanoparticles for imaging apoptotic cells, and biotin is only mentioned as part of a standard TUNEL histological staining protocol, not as the subject of toxicokinetic analysis. |
| PGx | Menke_2026 | not_relevant | 0 | 0 | The paper reports on the use of TurboID (a biotin ligase) for proximity labeling to identify protein interactors of AGAL, not the pharmacogenomics of biotin itself. |
| popPK | Mhaske_2024 | irrelevant | 0 | 0 | Biotin is used as a targeting ligand in a nanocarrier for decitabine, and the pharmacokinetic parameters described refer to the drug/nanoparticle formulation, not biotin itself. |
| popPK | Minch_1995 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent (SNA-biotin) for flow cytometry and blotting, not as the subject of toxicokinetic study. |
| popPK | Montone_1990 | irrelevant | 0 | 0 | Biotin is used solely as a chemical label for a DNA probe in a diagnostic method and is not the subject of any toxicokinetic study. |
| popPK | Morishita_2015 | irrelevant | 0 | 0 | Biotin is used solely as a chemical linker in the streptavidin-biotin system for labeling exosomes, not as the subject of toxicokinetic study. |
| PGx | Munnich_1981 | not_relevant | 0 | 0 | The paper describes a metabolic disease (biotin-dependent multiple carboxylase deficiency) and the efficacy of biotin treatment, but it does not report pharmacogenomic effects of specific genetic variants on the PK/PD parameters of biotin as a drug in a therapeutic context. |
| PGx | Munnich_1981_2 | not_relevant | 0 | 0 | The paper describes a genetic enzyme deficiency (Multiple Biotin-Dependent Carboxylase Deficiencies) affecting biotin metabolism, rather than a pharmacogenomic effect of biotin administration on PK/PD parameters. |
| popPK | Nikolau_1984 | irrelevant | 0 | 0 | The paper investigates the tissue distribution of a biotin-containing enzyme (acetyl-CoA carboxylase) in plants, not the toxicokinetics of biotin as a substance. |
| popPK | Novak_2023 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of affibody protein conjugates and their binding kinetics to HER2 receptors, with biotin used solely as an analytical tag or cargo, not as the subject of toxicokinetic study. |
| popPK | Noxon_2001 | irrelevant | 0 | 0 | The paper is a study on osteoclast apoptosis in rats, and biotin is mentioned only as part of the "TdT-mediated dUTP-biotin nick" staining method, not as a subject of toxicokinetic analysis. |
| popPK | Ogden_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a biotin carboxylase inhibitor (PD-0162819) in an in vitro bacterial model, not the toxicokinetic parameters of biotin itself. |
| PGx | Omran_2012 | not_relevant | 0 | 0 | The study examines ABCG2 protein expression as a prognostic marker in breast cancer and does not report any pharmacokinetic or pharmacodynamic parameters of biotin. |
| popPK | Opolka-Hoffmann_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of therapeutic monoclonal antibodies and their immune complexes, not the toxicokinetics of biotin (which appears only as an abbreviation for a reagent or standard in the context of bioanalytical assays, if at all). |
| PGx | Opolka-Hoffmann_2021 | not_relevant | 0 | 0 | The paper discusses immunogenicity (anti-drug antibodies) and Fc domain modifications (drug engineering) affecting the pharmacokinetics of a therapeutic antibody, not pharmacogenomic effects of a gene variant on biotin metabolism or response. |
| popPK | Ouban_2003 | irrelevant | 0 | 0 | The paper studies IGF1-R expression in carcinomas using the avidin-biotin method, where biotin is an analytical reagent rather than the subject of toxicokinetic study. |
| popPK | Paganelli_1991 | irrelevant | 0 | 0 | The paper describes a pretargeting protocol where biotin is a chemical linker in an antibody construct, not the subject substance for toxicokinetic evaluation, and no kinetic parameters for biotin itself are reported. |
| popPK | Pan_2022 | irrelevant | 1 | 2 | The study uses biotin as a labeling agent for PET imaging of CAR T cells and reports uptake in tumor cells rather than kinetic parameters of biotin disposition in the subject. |
| popPK | Pardridge_1992 | irrelevant | 0 | 0 | Biotin is mentioned solely as a chemical linker component in peptide drug delivery strategies, with no toxicokinetic parameters for biotin itself reported. |
| popPK | Park_2011 | irrelevant | 0 | 0 | The paper focuses on nanoparticle surface engineering using avidin-biotin interactions and does not report toxicokinetic parameters for biotin as a substance in a biological system. |
| popPK | Patra_2016 | irrelevant | 0 | 0 | The paper is a review of pretargeting strategies where biotin acts as a chemical linker/reagent, not as a subject substance for which toxicokinetic parameters are reported. |
| popPK | Petitou_2009 | irrelevant | 0 | 0 | The paper describes a novel anticoagulant (EP217609) that contains a biotin moiety as a functional component for neutralization, but does not report toxicokinetic parameters for biotin itself as the subject substance. |
| popPK | Peyro_2016 | irrelevant | 1 | 0 | The paper is a narrative review that mentions biotin is "highly bioavailable" and "rapidly excreted" but provides no specific quantitative kinetic parameters (e.g., t1/2, CL, Vd) in the text. |
| popPK | Podczaski_1993 | irrelevant | 0 | 0 | Biotin is mentioned only as a component of the immunohistochemical detection method (avidin-biotin technique) and does not appear as the subject of any toxicokinetic analysis. |
| popPK | Poudel_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of docetaxel (a chemotherapeutic drug) in nanocochleates, using biotinylated chitosan as a targeting ligand; it does not report toxicokinetic parameters for biotin itself. |
| popPK | Prat-Duran_2021 | irrelevant | 0 | 0 | The paper is a review of Transglutaminase 2 in chronic kidney disease, and biotin is only mentioned as part of a methodology for measuring enzyme activity, not as a subject of toxicokinetic study. |
| popPK | Prat_1985 | irrelevant | 0 | 0 | The paper describes a monoclonal antibody for carcinoma diagnosis and uses biotin only as a component of the avidin:biotin:peroxidase detection reagent, reporting no kinetic parameters for biotin. |
| popPK | Qian_2025 | irrelevant | 0 | 0 | The paper uses biotin solely as a chemical reagent to label bacterial proteins (biotinylation) to inhibit virulence, and does not report toxicokinetic parameters for biotin itself. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The paper is a review on bacterial therapeutics and surface engineering, mentioning biotin-streptavidin interactions only as a biological strategy for surface modification, with no kinetic parameters for biotin itself. |
| popPK | Raiko_2009 | irrelevant | 0 | 0 | The paper studies tight junction proteins in skin diseases and uses biotin solely as an analytical reagent (avidin-biotin complex) for immunolabeling, reporting no toxicokinetic parameters for biotin itself. |
| popPK | Raio_2004 | irrelevant | 0 | 0 | The paper studies umbilical cord morphology and hyaluronan content, using biotin only as a labeling reagent for staining, with no toxicokinetic parameters for biotin reported. |
| popPK | Razvi_1999 | irrelevant | 0 | 0 | The paper uses biotin solely as an analytical reagent in the streptavidin-biotin methodology for immunohistochemistry and reports no toxicokinetic parameters. |
| PGx | Reche-López_2025 | not_relevant | 0 | 0 | The paper studies biotin as a therapeutic agent to reactivate the inactive X chromosome in a neurodegenerative disease, not the pharmacokinetics or pharmacodynamics of biotin itself influenced by genetic variants. |
| popPK | Reddi_1993 | irrelevant | 0 | 0 | The paper reports static tissue concentrations in diabetic and normal rats but does not provide any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Reed_2005 | irrelevant | 0 | 0 | The paper discusses Fas receptor expression in ovarian cancer and uses biotin only as an analytical reagent in the avidin-biotin-peroxidase staining method, containing no toxicokinetic parameters for biotin. |
| popPK | Reilly_1991 | irrelevant | 0 | 0 | The paper discusses radioimmunotherapy and mentions the avidin-biotin system only as a delivery vehicle for antibodies, containing no kinetic parameters for biotin itself. |
| popPK | Roberts_1991 | irrelevant | 0 | 0 | The paper discusses the immunochemical detection of DNA and protein adducts for 4-aminobiphenyl and acetaminophen, using biotin/avidin solely as an amplification system, and contains no toxicokinetic parameters for biotin. |
| PGx | Ronquillo-Sánchez_2013 | not_relevant | 0 | 0 | The study is an animal experiment testing the effect of biotin on CYP1A expression, not a pharmacogenomic study investigating how a gene variant affects biotin's PK/PD. |
| popPK | Rosebrough_1993 | relevant | 7 | 1 | The paper reports pharmacokinetic parameters (plasma clearance, biodistribution) for DTPA-biotin, but the specific numeric values are not provided in the extracted evidence. |
| popPK | Rosebrough_1996 | irrelevant | 0 | 0 | The paper measures the pharmacokinetics of streptavidin-antibody conjugates, not the kinetic parameters of biotin itself (biotin is used only as a ligand in the imaging system). |
| PGx | Ruan_2021 | not_relevant | 0 | 0 | The paper describes the development of a PTH analogue using biotin for albumin binding but does not report pharmacogenomic effects on biotin's PK/PD parameters. |
| popPK | Russo_1993 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent (fluorescence tag) to study antibody binding in Trypanosoma brucei, not as the subject of toxicokinetic analysis. |
| PGx | Sarlo_2020 | not_relevant | 0 | 0 | The study reports an association between PCCA variants and hair length phenotype in cattle, not the effect of genetics on the pharmacokinetics or pharmacodynamics of biotin as a drug. |
| popPK | Schechter_1990 | irrelevant | 0 | 0 | The study measures the kinetics of avidin and streptavidin (binding proteins), not biotin itself, with biotin used only as a competitor to modify the protein distribution. |
| popPK | Schmidtke_2013 | irrelevant | 0 | 0 | Biotin is used solely as a chemical modifier/affinity ligand for nanoparticle surface functionalization, and the paper reports no kinetic parameters for biotin itself. |
| popPK | Schnyder_2005 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of daunomycin delivered via biotinylated liposomes, where biotin acts solely as a targeting ligand/co-exposure rather than the subject substance. |
| popPK | Shao_2014 | irrelevant | 0 | 0 | Biotin is used only as an analytical reagent for labeling antibodies in an immunology study of Mertk function, with no kinetic parameters for biotin reported. |
| popPK | Shen_2005 | relevant | 2 | 5 | The paper reports plasma clearance kinetics (biphasic, &lt;10% residual at 8h) for In-111-DOTA-biotin in humans, which serves as a surrogate for the biotin conjugate's disposition, but it is primarily a dosimetry study. |
| PGx | Shi_2016 | not_relevant | 0 | 0 | The paper investigates the efficacy of a drug delivery system for epirubicin on cancer cells; biotin is only mentioned as a chemical component of the lipid microbubbles, and no pharmacogenomic effects on biotin PK/PD are reported. |
| popPK | Si_1984 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent (avidin-biotin-peroxidase complex) in an immunohistochemistry method for lymphocyte subtyping, with no kinetic parameters reported. |
| popPK | Singh_2016 | irrelevant | 1 | 0 | The paper evaluates radiolabeled complexes where biotin is part of the imaging ligand, not the sole subject substance, and no quantitative kinetic parameters for free biotin are reported in the text. |
| popPK | Singh_2017 | irrelevant | 0 | 0 | The paper focuses on the delivery of doxorubicin using biotin as a targeting ligand, not on the toxicokinetic parameters of biotin itself. |
| popPK | Siva_2021 | irrelevant | 0 | 0 | The paper is a review on autophagy and protein-protein interactions where biotin is mentioned only in the context of BioID (proximity-dependent biotin identification) or as a structural component (e.g., biotin-synapse), not as the subject of toxicokinetic analysis. |
| PGx | Smirnova_2023 | not_relevant | 0 | 0 | The paper discusses the use of biotin as a chemical substrate for proximity labeling (TurboID) in proteomics, not as a pharmaceutical drug with pharmacokinetic or pharmacodynamic properties influenced by genetic variants. |
| popPK | Suga_1993 | irrelevant | 0 | 0 | The paper investigates proteasomes in rat skin, using biotin only as a component of the avidin-biotin complex method for immunohistochemical localization, not as a subject of toxicokinetic analysis. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The paper uses biotin as a chemical reagent for signal amplification in an analytical assay and does not report toxicokinetic parameters for biotin. |
| popPK | Takahashi_2016 | irrelevant | 0 | 0 | Biotin is used solely as a radiolabeling reagent (125I-biotin) to track exosomes, not as the subject substance for kinetic analysis. |
| popPK | Takayama_2023 | irrelevant | 0 | 0 | The paper uses biotin solely as a reagent in the avidin-biotin complex (ABC) method to modify cell surfaces with PEG, and does not report any kinetic parameters for biotin itself. |
| popPK | Taniguchi_2008 | relevant | 8 | 1 | The paper investigates the transplacental transport and tissue distribution of biotin in mice, which constitutes toxicokinetic data, but the specific numeric parameter values are not included in the provided abstract evidence. |
| popPK | Taylor_1992 | irrelevant | 0 | 0 | The paper uses the avidin/biotin system to construct a bispecific heteropolymer for immune clearance studies; biotin is a reagent/ligand, not the subject substance, and no kinetic parameters for biotin itself are reported. |
| PGx | Thompson_2023 | not_relevant | 0 | 0 | The paper describes a clinical case of a metabolic syndrome (THMD5) where biotin was used as a therapeutic treatment, but it does not report on how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of biotin itself. |
| PGx | Tie_2022 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of the herbal medicine Danggui Buxue Tang and does not report any pharmacogenomic effects on biotin. |
| popPK | Timperanza_2024 | irrelevant | 0 | 0 | The paper studies the clearance of antibody-based pretargeting agents, and biotin is only used as a functional group or component of a clearing agent, not as the subject substance for toxicokinetic characterization. |
| popPK | Tiwari_2018 | irrelevant | 0 | 0 | The paper studies a biotin-conjugated drug (Bio-AMS) for tuberculosis, not biotin as a toxicological subject, and does not report kinetic parameters for free biotin. |
| popPK | Tomova_2001 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent (biotin-streptavidin-peroxidase) for immunohistochemistry, not as the subject substance for toxicokinetic study. |
| PGx | Torkamandi_2020 | not_relevant | 0 | 0 | The paper describes a genetic mutation in the biotinidase enzyme (a metabolic disorder) rather than a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of biotin as a drug. |
| PGx | Toubanaki_2009 | not_relevant | 0 | 0 | The paper describes a genotyping method for receptor genes and does not report any pharmacokinetic or pharmacodynamic parameters for biotin; biotin is only mentioned as a chemical label in the assay method. |
| popPK | Truong_1989 | irrelevant | 0 | 0 | Biotin is used solely as an analytical reagent in the avidin-biotin-peroxidase staining technique for detecting atrial natriuretic factor, with no toxicokinetic parameters reported for biotin itself. |
| popPK | Tsukada_1987 | irrelevant | 0 | 0 | The paper is an immunohistochemistry study where biotin is used solely as an analytical reagent (avidin-biotin method) and does not report any toxicokinetic parameters for biotin itself. |
| popPK | Underwood_2025 | irrelevant | 0 | 0 | Biotin is used as an analytical reagent for proximity labeling (TurboID), and no kinetic parameters are reported for biotin itself. |
| PGx | Underwood_2025 | not_relevant | 0 | 0 | The paper uses biotin as a chemical reagent for proximity labeling (TurboID) and does not investigate biotin as a drug or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Vaidyanathan_1998 | irrelevant | 0 | 0 | The paper focuses on the synthesis and evaluation of a radiopharmaceutical analogue of MIBG, mentioning biotin only as a context for labeling method applicability, and contains no kinetic parameters for biotin itself. |
| popPK | Velázquez_1989 | irrelevant | 0 | 0 | The paper reports clinical observations of biotin deficiency in malnourished children and mentions potential renal clearance but provides no quantitative kinetic parameters such as half-life, rate constants, or partition coefficients. |
| popPK | Veron_2014 | irrelevant | 0 | 0 | The paper focuses on VEGF-A and glomerulosclerosis, using biotin only as an analytical reagent (biotin-switch assay) and providing no kinetic parameters for biotin itself. |
| popPK | Vignolle_2026 | irrelevant | 0 | 0 | The paper focuses on the biosynthetic gene cluster of the antibiotic acidomycin, which targets biotin biosynthesis, but does not report quantitative toxicokinetic parameters for biotin itself. |
| PGx | Vlaming_2009 | not_relevant | 0 | 0 | The paper discusses ABCG2's role in biotin secretion as a physiological function, but does not report pharmacokinetic or pharmacodynamic parameters of biotin altered by genetic variants. |
| popPK | Ward_1983 | irrelevant | 0 | 0 | Biotin is used as an analytical reagent in the avidin-biotin-peroxidase complex for immunostaining, not as the subject substance for toxicokinetic study. |
| PGx | Weyandt_2022 | not_relevant | 0 | 0 | The paper reports on the genomic characteristics and evolutionary history of the endosymbiotic bacterium Wolbachia in plant-parasitic nematodes, which is unrelated to the pharmacokinetics or pharmacodynamics of the drug biotin in humans. |
| popPK | Wilbur_2009 | irrelevant | 0 | 0 | The paper focuses on astatine-211 labeling reagents and tissue distribution of radiohalogens, with biotin appearing only as a derivative scaffold rather than the subject substance for kinetic analysis. |
| PGx | Wolkersdorfer_2025 | not_relevant | 0 | 0 | The paper focuses on tumor targeting of an enzyme and does not report any pharmacogenomic effects on the PK or PD parameters of biotin. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper describes an assay for the chemokine CCL20LD, and biotin is used only as an analytical reagent (label) for the assay, not as the subject substance for toxicokinetic study. |
| popPK | Xie_2021 | irrelevant | 0 | 0 | The paper studies the kinetics of recombinant IgA complexes where biotin is used solely as a chemical tag/linker, not as the subject of toxicokinetic analysis. |
| PGx | Xue_2014 | not_relevant | 0 | 0 | The paper describes a DNA microarray technology for EGFR mutation detection using biotin-labeled primers, not a pharmacogenomic effect of biotin as a drug. |
| PGx | Yamamoto_1993 | not_relevant | 0 | 0 | The paper discusses the localization of the CYP2D6 enzyme in relation to autoimmune hepatitis and mentions biotin only as a chemical reagent for protein labelling, not as a drug subject to pharmacogenomic analysis. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | Biotin is used solely as a component of the nanoparticle delivery system for camptothecin, not as the subject substance for toxicokinetic analysis. |
| popPK | Yee_2024 | irrelevant | 0 | 0 | Biotin is used solely as a labeling agent for red blood cells, and the reported half-lives refer to RBC survival, not the toxicokinetics of biotin itself. |
| popPK | Yee_2024_2 | irrelevant | 0 | 0 | The paper is a qualitative review of genetic transporter mutations and does not report any quantitative toxicokinetic parameters for biotin. |
| popPK | Youn_2025 | irrelevant | 0 | 0 | Biotin is used solely as a ligand for nanoparticle surface engineering to target hepatocellular carcinoma, and the paper reports no quantitative toxicokinetic parameters (half-life, clearance, etc.) for biotin itself. |
| popPK | Yurdagul_2022 | irrelevant | 0 | 0 | The paper describes an in vitro assay method where biotin is used as an analytical reagent (streptavidin-biotin interaction) for fluorescence detection, not as the subject of toxicokinetic study. |
| PGx | Yılmaz_2024 | not_relevant | 0 | 0 | The paper describes a genetic disease (biotinidase deficiency) and genotype-phenotype correlations for clinical symptoms, but does not report a pharmacokinetic or pharmacodynamic parameter of biotin as a drug. |
| popPK | Zaar_1996 | irrelevant | 0 | 0 | The paper focuses on the cellular localization of D-aspartate oxidase in bovine tissue and uses biotin only as part of an immunohistochemical reagent (streptavidin-biotin-peroxidase), providing no toxicokinetic parameters for biotin itself. |
| popPK | Zalutsky_2000 | irrelevant | 0 | 0 | The paper is a review of astatine-211 radiotherapy where biotin is only mentioned as a carrier for the radionuclide, with no kinetic parameters reported for biotin itself. |
| popPK | Zhan_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Polyphyllin VI, and biotin is only mentioned as a labeling reagent for the compound in a mass spectrometry experiment. |
| popPK | Zhang_1997 | irrelevant | 0 | 0 | The paper uses biotinylated NAD as an analytical reagent for protein labeling and purification, reporting no toxicokinetic parameters for biotin itself. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper is about analytical chemistry methods for protein detection using biotin-labeled polymers, not the pharmacokinetics or pharmacodynamics of biotin in humans influenced by genetic variants. |
| PGx | Zhang_2018_2 | not_relevant | 0 | 0 | The paper describes a biosensor method for detecting the CYP2C19*2 allele and does not report pharmacokinetic or pharmacodynamic data for biotin (biotin is only used as a labeling reagent). |
| popPK | Zhang_2018_3 | irrelevant | 0 | 0 | The paper is a review of enzymatic protein labelling techniques and does not report quantitative toxicokinetic parameters for biotin as a subject substance. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper investigates streptavidin's interaction with cGAS for immune signaling, and biotin is mentioned only as a binding ligand for comparison or a tool, not as a subject of toxicokinetic study. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper uses biotin only as a surface modification for nanoparticles and reports no quantitative toxicokinetic parameters (half-life, clearance, etc.) for the substance biotin itself. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates bacterial antibiotic tolerance mechanisms and mentions biotin synthesis gene expression as part of the cellular response, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of biotin as a drug. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | Biotin is used solely as a chemical probe for protein labeling and enrichment, not as the subject of toxicokinetic study. |
| PGx | Zhou_2023 | not_relevant | 2 | 0 | The paper investigates the ABCG2 gene's role in milk fat synthesis and general vitamin secretion mechanisms in buffaloes, but it does not report pharmacokinetic or pharmacodynamic parameters of biotin (e.g., concentration, clearance, effect) altered by a specific genetic variant in a pharmacological context. |
| popPK | de_2018 | irrelevant | 0 | 0 | The paper describes a method for labeling red blood cells with biotin as a tracking marker, but does not report any quantitative toxicokinetic parameters (e.g., clearance, half-life, distribution volume) for the biotin molecule itself. |
| PGx | Ürey_2023 | not_relevant | 0 | 0 | The paper is a case report on succinate dehydrogenase deficiency where biotin is used as empirical therapy; it does not report any genetic effect on the pharmacokinetics or pharmacodynamics of biotin. |
| popPK | Šimek_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of hyaluronic acid, and biotin is mentioned only as a labeling/analytical reagent, not as the subject substance for kinetic parameter extraction. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbiotin%5D&body=Drug%3A%20biotin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_biotin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
