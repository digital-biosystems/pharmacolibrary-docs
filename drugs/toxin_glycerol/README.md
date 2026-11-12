<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Glycerol&quot;}]"></div>

# Glycerol

- **generic name:** Glycerol
- **T3DB:** [T3D4360](http://www.t3db.ca/toxins/T3D4360) · **DrugBank:** [DB04077](https://go.drugbank.com/drugs/DB04077) · **PubChem:** [CID 753](https://pubchem.ncbi.nlm.nih.gov/compound/753)
- **groups:** approved, investigational

## About

Glycerol is an important component of triglycerides (i.e. fats and oils) and of phospholipids. glycerol is a three-carbon substance that forms the backbone of fatty acids in fats. When the body uses stored fat as a source of energy, glycerol and fatty acids are released into the bloodstream. The glycerol component can be converted to glucose by the liver and provides energy for cellular metabolism.

- **Category:** Household Toxin, Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of glycerol are associated with Glycerol Kinase Deficiency.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4360">T3DB T3D4360</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 56-81-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17522">ChEBI 17522</a></small></p>

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
| 2026-11-10 08:47 | 1:08:05 | 0/0/0 | 0/0/0 | 0/0/0 | 1,411,594/45,696 | einfracz / qwen3.8-27b | 60 | 8/52 | 60/0 | 0 |

## Coverage

- **PubMed hits:** 618 matched, 234 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schoemaker_2002.pdf` | Schoemaker RC et al., Modeling the influence of growth hormon…, Journal of pharmacokinetics… (2002) | popPK | 9 | [10.1023/a:1019803924485](https://doi.org/10.1023/a:1019803924485) | [12361241](https://pubmed.ncbi.nlm.nih.gov/12361241) | The paper reports a PK/PD model of glycerol disposition and lipolysis rates in humans, but specific numeric parameter values are not present in the provided evidence text. |
| `McGuire_2010.pdf` | McGuire BM et al., Pharmacology and safety of glycerol phe…, Hepatology (Baltimore, Md.) (2010) | popPK | 8 | [10.1002/hep.23589](https://doi.org/10.1002/hep.23589) | [20512995](https://pubmed.ncbi.nlm.nih.gov/20512995) | The paper reports the pharmacokinetics of Glycerol Phenylbutyrate (a glycerol ester), describing delayed release, time to steady state, and metabolite kinetics, which are toxicokinetic parameters for the glycerol-based substance. |
| `Cornford_1982.pdf` | Cornford EM, Correlation between lipid partition coe…, The Journal of membrane bio… (1982) | popPK | 7 | [10.1007/BF01870888](https://doi.org/10.1007/BF01870888) | [7057454](https://pubmed.ncbi.nlm.nih.gov/7057454) | The paper reports a surface permeation parameter for glycerol in *Schistosoma japonicum*, but the specific numeric values are not present in the provided evidence text. |
| `Elazzazy_2025.pdf` | Elazzazy AM et al., Single-Cell oils from oleaginous yeasts…, World journal of microbiolo… (2025) | pd | 4 | [10.1007/s11274-025-04673-4](https://doi.org/10.1007/s11274-025-04673-4) | [41205130](https://www.ncbi.nlm.nih.gov/pubmed/41205130) | metadata signals extractable PD data (IC50) |
| `Shimizu_1988.pdf` | Shimizu T, Decreased magnesium effects of echinocy…, Cryobiology (1988) | pd | 4 | [10.1016/0011-2240(88)90018-1](https://doi.org/10.1016/0011-2240(88)90018-1) | [3127123](https://www.ncbi.nlm.nih.gov/pubmed/3127123) | metadata signals extractable PD data (sigmoid) |
| `Heikal_2009.pdf` | Heikal A et al., The stabilisation of purified, reconsti…, Cryobiology (2009) | pgx | 7 | [10.1016/j.cryobiol.2008.10.125](https://doi.org/10.1016/j.cryobiol.2008.10.125) | [18983838](https://www.ncbi.nlm.nih.gov/pubmed/18983838) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Li_2017.pdf` | Li Z et al., Analysis of the Variables Influencing V…, Therapeutic drug monitoring (2017) | pgx | 5 | [10.1097/FTD.0000000000000424](https://doi.org/10.1097/FTD.0000000000000424) | [28604475](https://www.ncbi.nlm.nih.gov/pubmed/28604475) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-11-10 08:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbiati_1993 | irrelevant | 0 | 0 | The study investigates the kinetics of alpha-glycerylphosphorylcholine (alpha-GPC), not glycerol itself, using [14C]-glycerol only as a label to trace the parent compound. |
| PGx | Adolfsen_1976 | not_relevant | 0 | 0 | The paper describes the activation mechanism of an enzyme using glycerol as a reagent, not the pharmacokinetics or pharmacodynamics of glycerol as a drug influenced by genetic variation. |
| popPK | Agarwal_2006 | irrelevant | 0 | 0 | The paper characterizes the enzyme AGPAT8 involved in phospholipid synthesis and does not report toxicokinetic parameters (half-life, clearance, etc.) for glycerol as a subject substance. |
| popPK | Agarwal_2007 | irrelevant | 0 | 0 | The paper characterizes the enzyme AGPAT9 involved in lipid synthesis but does not report toxicokinetic parameters for glycerol. |
| popPK | Albro_2009 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| popPK | Anuar_2020 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of ibuprofen using a nanoemulsion formulation where glycerol is used solely as a surfactant/excipient, not as the subject substance. |
| PGx | Apaya_2020 | not_relevant | 0 | 0 | The paper investigates cancer biology and the effects of doxorubicin/dLGG on TNBC metastasis; it does not report pharmacogenomic effects on the PK/PD of glycerol. |
| popPK | Arce_2020 | irrelevant | 0 | 0 | The paper focuses on the kinetics of rhododendrol, a different substance, while glycerol is mentioned only as a vehicle component or polyol and no kinetic parameters for glycerol are reported. |
| popPK | Arner_1983 | irrelevant | 0 | 0 | The paper studies glucose and insulin effects on glycerol release from isolated adipocytes (in vitro), focusing on regulatory mechanisms rather than toxicokinetic parameters (half-life, clearance, etc.) for glycerol as a toxicant. |
| PGx | Aryaman_2018 | not_relevant | 0 | 0 | The paper is a review on mitochondrial heterogeneity, genetics, and cellular noise; it does not discuss glycerol pharmacokinetics or pharmacogenomics. |
| popPK | Behl_2019 | irrelevant | 0 | 0 | The paper measures glycerol release from adipocytes in vitro as a marker of lipolysis, not the toxicokinetic parameters of glycerol itself. |
| popPK | Berrada_2000 | irrelevant | 0 | 0 | The paper reports enzyme activity levels (Vmax/Km not for glycerol clearance but for GPDH enzyme regulation) and does not provide kinetic parameters for glycerol disposition. |
| PGx | Bidart_2023 | not_relevant | 0 | 0 | The paper focuses on bacterial carbohydrate metabolism (PTS) in Parageobacillus thermoglucosidasius, not pharmacogenomic effects on a drug's PK/PD. |
| PGx | Boadi_2005 | not_relevant | 0 | 0 | The paper investigates the efficacy of a microbicide (CAP) in a macaque model and does not report any pharmacogenomic effects on the PK or PD of glycerol. |
| popPK | Boniface_2014 | irrelevant | 0 | 0 | The paper studies Spathodea campanulata extract compounds for anti-inflammatory activity, not the toxicokinetics of glycerol. |
| PGx | Bossie_1992 | not_relevant | 0 | 0 | The paper describes yeast nuclear protein localization mutants and growth on glycerol as a metabolic substrate, not pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PGx | Bowden_1985 | not_relevant | 0 | 0 | The paper focuses on the purity and source of human growth hormone preparations affecting lipolysis, not on genetic variants affecting glycerol pharmacokinetics or pharmacodynamics. |
| PGx | Bozadjieva-Kramer_2024 | not_relevant | 0 | 0 | The paper does not study the pharmacokinetics or pharmacodynamics of glycerol as a drug, but rather uses glycerol in a tolerance test to assess hepatic gluconeogenesis. |
| PGx | Brandin_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction involving warfarin and a preservative in grapefruit seed extract, not the pharmacokinetics or pharmacodynamics of glycerol. |
| PGx | Briquet-Laugier_1994 | not_relevant | 0 | 0 | The paper studies fat storage enzymes and glucose metabolism in adipocytes, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| PGx | Brisson_2010 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on triglyceride-lowering drugs (fibrates), not on glycerol. |
| popPK | Bujalska_1999 | irrelevant | 0 | 0 | Glycerol-3-phosphate dehydrogenase is mentioned only as an assay for adipocyte differentiation, and the study provides no kinetic parameters for glycerol itself. |
| popPK | Bujalska_2002 | irrelevant | 0 | 0 | The paper studies 11 beta-HSD1 activity in adipose cells and mentions glycerol 3-phosphate dehydrogenase only as a differentiation marker, providing no toxicokinetic parameters for glycerol itself. |
| popPK | Bunch_1969 | irrelevant | 0 | 0 | Glycerol is used solely as a probe to estimate pore size, with no quantitative kinetic parameters (half-life, rate constant, clearance) reported for glycerol itself. |
| popPK | Campaigne_1990 | irrelevant | 0 | 0 | The paper is a review on body fat distribution and does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for glycerol as a subject substance. |
| popPK | Capková_2005 | irrelevant | 0 | 0 | The paper measures the partition coefficient of "potential drug XIX M" in the presence of glycerol as a formulation excuent, rather than measuring kinetic parameters for glycerol itself. |
| popPK | Carbrey_2009 | irrelevant | 1 | 1 | The study reports kinetic data for arsenic, using glycerol only as a context for AQP9 substrate permeability; no quantitative kinetic parameters for glycerol itself are provided. |
| popPK | Chellampillai_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate, with glycerol appearing only as a component of the liposome carrier (DMPG-Na) and not as the subject substance for kinetic analysis. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper studies the diffusion of cinnamon essential oils from packaging films where glycerol is used as a plasticizer/additive, not the toxicokinetics of glycerol itself. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is a systematic review of taurine's effects on exercise performance where glycerol is mentioned only as a secondary marker of lipolysis, without reporting any toxicokinetic parameters for glycerol itself. |
| popPK | Chilcote_1995 | irrelevant | 0 | 0 | The paper concerns protein localization in PC12 cells and uses glycerol solely as a reagent for velocity gradients, reporting no kinetic parameters for glycerol itself. |
| popPK | Chin_2014 | irrelevant | 0 | 0 | The paper investigates zinc phthalocyanines with glycerol substituents, not glycerol itself as the subject substance; no kinetic parameters for pure glycerol are reported. |
| popPK | Chiu_2023 | irrelevant | 0 | 0 | The paper studies the effects of tributyltin (TBT) on muscle regeneration, using glycerol only as a vehicle to induce muscle injury in mice, and reports no toxicokinetic parameters for glycerol. |
| popPK | Coe_1976 | relevant | 4 | 0 | The paper discusses quantitative permeability constants for glycerol in bovine erythrocytes, but no numeric values are provided in the text, likely residing in figures or tables not included. |
| popPK | Contreras_2001 | irrelevant | 0 | 0 | The paper studies alpha-melanocyte stimulating hormone (alpha-MSH) interaction with membranes, where glycerol appears only as part of the lipid naming (glycero-3-phospholipids) and not as the subject substance for toxicokinetic analysis. |
| PGx | Cooper_2015 | not_relevant | 0 | 0 | The paper investigates the metabolic role of GPAT4 in fatty acid oxidation and obesity, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Cornford_1982 | relevant | 7 | 1 | The paper reports a surface permeation parameter for glycerol in *Schistosoma japonicum*, but the specific numeric values are not present in the provided evidence text. |
| popPK | Coutinho_1990 | irrelevant | 0 | 0 | The paper studies the membrane interaction of dibucaine in phospholipid vesicles, where glycerol is mentioned only as part of the lipid structure, not as the subject substance for toxicokinetic analysis. |
| PGx | Crivaro_2023 | not_relevant | 0 | 0 | The paper studies lipid droplet metabolism (lipolysis/glycerol release) in Gaucher disease adipocytes, not the pharmacokinetics or pharmacodynamics of glycerol as a drug substance. |
| popPK | Croze_2013 | irrelevant | 0 | 0 | The paper is a review focused on myo-inositol and inositol metabolism, not glycerol, and provides no kinetic parameters for glycerol. |
| popPK | Cámara_2015 | irrelevant | 0 | 0 | The paper studies phospholipid films (DSPG) and magnetic nanoparticles, not the toxicokinetics of glycerol. |
| PGx | Dabrowski_2002 | not_relevant | 0 | 0 | The paper focuses on the binding of pyrene complexes at the CYP3A4 active site, with no mention of glycerol metabolism, pharmacokinetics, or pharmacodynamics. |
| popPK | Dehaye_1977 | irrelevant | 0 | 0 | The paper measures in vitro lipolysis (glycerol release from triglycerides) as a physiological response to hormones in adipose tissue, not toxicokinetic parameters (half-life, clearance, partition coefficients) for glycerol as an exogenous substance. |
| popPK | Diao_2006 | irrelevant | 0 | 0 | The paper uses glycerol solely as a chemical repellent for bacterial chemotaxis studies and does not report any toxicokinetic parameters (half-life, clearance, etc.) for glycerol. |
| popPK | Doherty_1984 | irrelevant | 0 | 0 | The paper studies neuromuscular junction physiology in frogs, using glycerol merely as a preparation medium to prevent muscle contraction, and reports no toxicokinetic parameters for glycerol. |
| popPK | Durner_2010 | irrelevant | 1 | 2 | The paper measures partition coefficients for substances eluted from dental materials, where glycerol derivatives appear only as minor impurities or comonomers, not as the subject of toxicokinetic study. |
| popPK | Elazzazy_2025 | irrelevant | 0 | 0 | The paper focuses on the production of single-cell oils from yeasts and their larvicidal activity against mosquitoes, with no kinetic parameters for glycerol. |
| popPK | Engelund_2013 | irrelevant | 0 | 0 | The paper characterizes aquaporin channel properties in fish and reports qualitative permeability to glycerol, but does not provide quantitative toxicokinetic parameters (such as rate constants, half-lives, or partition coefficients) for glycerol disposition. |
| popPK | Euler_2012 | irrelevant | 0 | 0 | The paper describes a diagnostic assay for Rift Valley fever virus where glycerol is used solely as a buffer component, and no kinetic parameters for glycerol are reported. |
| popPK | Fang_2024 | irrelevant | 0 | 0 | The paper focuses on glycerol monocaprylate (an ester), not glycerol itself, and reports toxicological endpoints rather than quantitative toxicokinetic parameters for glycerol. |
| PGx | Farooq_2023 | not_relevant | 0 | 0 | The paper discusses the association of the FTO rs1421085 variant with glycerol as a metabolic biomarker of lipid metabolism in obesity, not the pharmacokinetics or pharmacodynamics of glycerol as a therapeutic drug. |
| PGx | Fawdry_2022 | not_relevant | 0 | 0 | The paper reports a genetic variant affecting gluconeogenic capacity (metabolic disease), not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Ferrer_1996 | irrelevant | 0 | 0 | The paper focuses on the cloning and mapping of the mitochondrial glycerol-3-phosphate dehydrogenase enzyme gene, not on the toxicokinetics or disposition parameters of glycerol itself. |
| popPK | Fioretto_2022 | irrelevant | 0 | 0 | The paper studies sulfavants (sulfoquinovoside-glycerol lipids) and glycerol appears only as a structural component of the subject molecules, not as the subject substance itself with kinetic parameters. |
| popPK | Ford_1989 | irrelevant | 0 | 0 | The paper studies the activation of protein kinase C by ether-linked diglycerides (glycerol derivatives) in rat brain lysates, reporting no toxicokinetic parameters for glycerol itself. |
| popPK | Freeman_2025 | irrelevant | 0 | 0 | The paper assesses the safety of tri-betahydroxybutyrin (3BHB), with no quantitative kinetic parameters reported for glycerol. |
| popPK | Galli_2021 | irrelevant | 0 | 0 | The paper is a review on aquaporin biology and disease mechanisms; it does not report quantitative toxicokinetic parameters (such as clearance, half-life, or partition coefficients) for glycerol. |
| PGx | Gao_2015 | not_relevant | 0 | 0 | The paper studies chaperonin mutations in archaea for temperature adaptation, not the pharmacogenomics of glycerol. |
| popPK | García-Flores_2026 | irrelevant | 0 | 0 | The paper is a molecular biology study on yeast promoter engineering where glycerol is mentioned only as a potential carbon source/inducer, not as a subject of toxicokinetic analysis. |
| popPK | Gardavská_1994 | irrelevant | 0 | 0 | The paper measures the effect of glycerol on the partition coefficients of other drug candidates (phenylcarbamic acid derivatives), not the kinetic parameters of glycerol itself. |
| popPK | Garralaga_2024 | irrelevant | 0 | 0 | The paper studies the aquatic toxicity of deep eutectic solvents containing glycerol-derived ethers in shrimp, reporting oxidative stress biomarkers and LC50/EC50 values, but it does not provide any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for glycerol. |
| PGx | Garrigós-Martínez_2021 | not_relevant | 0 | 0 | The paper focuses on the bioprocess engineering of Pichia pastoris expressing CYP2C9 for drug metabolite production, not on human pharmacogenomics or the metabolic fate of glycerol. |
| PGx | Gautherot_2012 | not_relevant | 0 | 0 | The paper studies the rescue of a defective transporter protein (ABCB1/ABCB4) using chaperones (including glycerol), not the pharmacokinetics or pharmacodynamics of glycerol itself in patients with different genotypes. |
| popPK | Gimeno_2008 | irrelevant | 0 | 0 | The paper is a review of glycerol-3-phosphate acyltransferases (enzymes in lipid synthesis) and does not report toxicokinetic parameters for the substance glycerol. |
| popPK | Glasmacher_2021 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of hemopressins (pepcans), not glycerol; glycerol is not the subject substance. |
| popPK | Grass_1988 | irrelevant | 4 | 1 | The paper discusses glycerol in the context of corneal penetration mechanisms and the effects of chelators, but the extracted evidence contains no specific numeric kinetic parameters (such as rate constants, permeability coefficients, or half-lives) for glycerol. |
| popPK | Grewal_2002 | irrelevant | 0 | 0 | Glycerol is used as a desiccation stress agent, not the subject of toxicokinetic analysis. |
| popPK | Gross_2024 | irrelevant | 0 | 0 | Glycerol is measured as a marker of lipolysis (co-exposure/comparator) rather than being the subject substance with reported kinetic parameters. |
| popPK | Guan_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of brucine encapsulated in a micelle containing glycerol monostearate; glycerol is a structural component of the carrier, not the subject substance for which kinetic parameters are reported. |
| popPK | Hakim_2024 | irrelevant | 0 | 0 | Glycerol is identified only as a constituent of the algae extract via GC-MS and is not the subject of any toxicokinetic study. |
| PGx | Halmschlag_2020 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering of poly-γ-glutamic acid production in Bacillus subtilis and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Hauner_1991 | irrelevant | 0 | 0 | The paper measures glycerol-3-phosphate dehydrogenase (GPDH) activity as a marker for adipocyte differentiation, which is not the toxicokinetics of glycerol itself. |
| PGx | Hayashi_2020 | not_relevant | 0 | 0 | The study concerns yeast metabolic regulation and carbon source utilization, not human pharmacogenomics or PK/PD parameters of glycerol as a drug. |
| PGx | Hegde_2025 | not_relevant | 0 | 0 | The paper describes computational simulations of aquaporin 7 inhibitors, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glycerol. |
| PGx | Heikal_2009 | not_relevant | 0 | 0 | The paper investigates the stabilization of P-glycoprotein for laboratory storage using disaccharides, not the pharmacokinetics or pharmacodynamics of glycerol as a drug, nor does it involve genetic variants. |
| popPK | Henriksen_2010 | irrelevant | 0 | 0 | The paper studies lysophospholipids as detergents in lipid membranes and does not report kinetic parameters for glycerol. |
| popPK | Higgins_2020 | irrelevant | 0 | 0 | Glycerol formal serves only as a dosing vehicle/comparator for the pyrethroids deltamethrin and cis-permethrin, which are the actual subjects of the toxicokinetic study. |
| popPK | Hilgard_1988 | irrelevant | 0 | 0 | The paper investigates the antitumor activity of hexadecylphosphocholine, and glycerol is only mentioned as a structural component the compound lacks. |
| popPK | Hossain_2026 | irrelevant | 0 | 0 | The paper is a review on thermogenesis pathways and mentions glycerol-3-phosphate cycling only as a metabolic mechanism, without reporting any toxicokinetic parameters for glycerol. |
| popPK | Howes_1998 | irrelevant | 3 | 2 | The paper focuses on the kinetics of polyglycerol polyricinoleate (PGPR), with glycerol appearing only as a labeled precursor or a co-investigated lower polyglycerol without specific quantitative kinetic parameters (half-life, clearance) for free glycerol itself. |
| popPK | Hu_2024 | irrelevant | 0 | 0 | The paper focuses on computational docking and molecular dynamics simulations of GPD1 inhibitors, containing no toxicokinetic parameters for glycerol. |
| popPK | Iliopoulos_2019 | irrelevant | 0 | 0 | The paper studies the physicochemical properties and skin permeation of 3-O-ethyl-l-ascorbic acid, with glycerol used only as a vehicle/solvent. |
| popPK | Ishihara_2012 | irrelevant | 0 | 0 | Glycerol is present only as a structural component of a synthetic liposomal polymer (BGL) and is not the subject of toxicokinetic study. |
| popPK | Ishizawa_2020 | irrelevant | 0 | 0 | The paper is a methodological study on tissue-clearing techniques for imaging nanoparticles, using glycerol only as a reagent in a clearing agent (FUnGI) and contains no toxicokinetic parameters for glycerol. |
| popPK | Ivanova_2001 | irrelevant | 0 | 0 | The paper is a physicochemical study on the role of glycerol as a cosolvent in block copolymer self-assembly and contains no toxicokinetic data for glycerol in any biological species. |
| popPK | Ivanova_2002 | irrelevant | 0 | 0 | The paper studies the physicochemical effect of glycerol as a solvent on Poloxamer 407 gel stability and contains no toxicokinetic data. |
| popPK | Iyyappan_2020 | irrelevant | 0 | 0 | The paper studies malic acid production using crude glycerol as a fermentation substrate, not the toxicokinetics of glycerol in a biological organism. |
| popPK | Janoschek_2018 | irrelevant | 0 | 0 | The paper focuses on the extraction of monoterpenes (carvone and terpinen-4-ol) from aqueous phases where glycerol is used solely as an ionic strength buffer in the solution, not as the subject of toxicokinetic study. |
| popPK | Janseen_1993 | irrelevant | 0 | 0 | The paper investigates the chemical kinetics of glycerol esterification in a non-biological in vitro system, containing no toxicokinetic parameters for the substance in vivo. |
| PGx | Jiménez_2025 | not_relevant | 0 | 0 | The paper describes plant physiology (rice roots) and glycerol esters in suberin, not pharmacogenomics or human drug PK/PD. |
| PGx | Karamanou_2020 | not_relevant | 0 | 0 | The study concerns fungicide resistance in yeast using flusilazole, and glycerol is mentioned only as a biomarker of toxicity, not as a drug. |
| popPK | Ke_2022 | irrelevant | 0 | 0 | The paper reports glycerol levels as a biomarker of lipolysis in the context of BPA exposure, but does not provide quantitative toxicokinetic parameters (half-life, clearance, etc.) for glycerol itself. |
| PGx | Khalil_2026 | not_relevant | 0 | 0 | The paper studies phytochemicals and bioactivities of a plant extract; glycerol is mentioned only as a metabolite component, and there is no pharmacogenomic analysis of its PK/PD. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of deltamethrin, and glycerol is used solely as a vehicle/formulation component, not as the subject substance. |
| popPK | Kim_2008 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for deltamethrin, not glycerol, which is used only as a vehicle (glycerol formal). |
| popPK | Kim_2010 | irrelevant | 0 | 0 | The study investigates the toxicokinetics of deltamethrin, using glycerol only as the vehicle for administration. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The paper studies the drug phenylethyl resorcinol, and glycerol monostearate is used only as a formulation excipient, with no kinetic parameters reported for glycerol. |
| popPK | Knapp_1993 | irrelevant | 0 | 0 | The paper studies the disposition of a radioiodinated fatty acid substrate (1,2-Pal-3-IPPA) and does not report kinetic parameters for glycerol itself. |
| popPK | Knutsen_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of organoarsenic species, and glycerol appears only as a structural component of "glycerol arsenosugar," not as the subject substance with its own kinetic parameters. |
| popPK | Ko_1999 | irrelevant | 0 | 0 | The paper characterizes the expression and relative permeability factors of an aquaporin channel for water, glycerol, and urea, but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for glycerol as a substance in an organism. |
| popPK | Kos_2009 | irrelevant | 0 | 0 | The paper measures glycerol release as a marker of adipocyte lipolysis, not as a subject of toxicokinetic study. |
| popPK | Kozak_2000 | irrelevant | 0 | 0 | The paper studies the metabolism of the endocannabinoid 2-arachidonylglycerol (2-AG) into prostaglandin glycerol esters, not the toxicokinetics of the substance glycerol itself. |
| popPK | Kurki_2022 | irrelevant | 0 | 0 | The paper focuses on molecular dynamics simulations of lipid bilayer structure (POPC) and force field validation, not the toxicokinetics of glycerol. |
| popPK | Kwok_2013 | irrelevant | 0 | 0 | Glycerol is used solely as a cryoprotectant reagent in cell culture, and the paper reports no toxicokinetic parameters for glycerol. |
| PGx | Lane_2017 | not_relevant | 0 | 0 | The paper uses glycerol as a stable isotope tracer to study metabolic phenotypes in breast cancer cells, not as a drug to assess pharmacogenomic effects on PK/PD parameters. |
| popPK | Lee_2016 | irrelevant | 0 | 0 | Glycerol is used solely as a chemical reagent (modifier) for preparing adsorbents, and the paper reports no toxicokinetic parameters for glycerol. |
| popPK | Lei_2017 | irrelevant | 0 | 0 | The study focuses on the gene expression and enzyme activity of glycerol kinase in response to EPA in grass carp preadipocytes, not on the toxicokinetic parameters (half-life, clearance, etc.) of glycerol itself. |
| popPK | Leibel_1984 | irrelevant | 0 | 0 | The paper describes an in vitro method for measuring lipolysis rate where glycerol is a byproduct of lipid metabolism, not the subject substance for toxicokinetic parameter extraction. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on valproic acid, not glycerol; glycerol is mentioned only as a covariate (glycerol fructose) influencing CSF valproic acid levels. |
| PGx | Lin_2026 | not_relevant | 0 | 0 | The paper investigates the effects of dietary mushroom supplementation on fish growth and metabolism, and does not involve glycerol pharmacokinetics or pharmacogenomics. |
| popPK | Lindow_2025 | irrelevant | 0 | 0 | The paper investigates bacterial ice nucleation in corn, and glycerol is used only as a growth medium supplement, with no toxicokinetic parameters reported. |
| popPK | Liu_2006 | irrelevant | 0 | 0 | The paper studies tryptophan partitioning, and glycerol is only used as a co-solute to manipulate the aqueous medium, not as the subject of toxicokinetic investigation. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | The paper investigates the surface chemistry of a polymer (Tetronic 1107) in mixed solvents, where glycerol is used solely as a cosolvent, not as a subject for toxicokinetic analysis. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper analyzes SNPs in Mycobacterium neoaurum for steroid production, which is a metabolic engineering study and not a pharmacogenomic study of a drug's PK/PD in humans. |
| popPK | Longo_2021 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of glycerol phenylbutyrate (a prodrug of phenylbutyrate), not glycerol itself, and no kinetic parameters for glycerol are reported. |
| popPK | Lu_2005 | irrelevant | 0 | 0 | The paper focuses on the cloning and regulation of 1-acyl-sn-glycerol 3-phosphate acyltransferases (AGPATs) in mice and does not report toxicokinetic parameters (half-life, clearance, etc.) for glycerol itself. |
| PGx | Lubek_2019 | not_relevant | 0 | 0 | The paper discusses structural biology of a bacterial enzyme (hydrogenase) and does not involve pharmacogenomics or pharmacokinetics/pharmacodynamics of glycerol in a medical context. |
| popPK | López_2018 | irrelevant | 0 | 0 | The paper studies the membrane interactions of the toxin mycolactone, where glycerol appears only as a structural component of the lipid bilayer, not as the subject substance for toxicokinetic analysis. |
| popPK | Maeda_2014 | irrelevant | 0 | 0 | The paper investigates thermophysical properties (Soret coefficient) of glycerol solutions, not toxicokinetic parameters. |
| popPK | Maity_2025 | irrelevant | 0 | 0 | Glycerol is used only as a formulation excipient (aqueous phase component) and the study focuses on the pharmacokinetics of the prodrug triamcinolone acetonide palmitate, not glycerol. |
| PGx | Mandla_1990 | not_relevant | 0 | 0 | The paper concerns vitamin D metabolism and protein kinase C, not the pharmacokinetics or pharmacodynamics of glycerol. |
| PGx | Martini_2024 | not_relevant | 0 | 0 | The paper discusses artemisinin resistance in bacteria involving glycerol metabolism genes, not pharmacogenomics in humans affecting the PK or PD of glycerol. |
| popPK | Masocha_2025 | irrelevant | 0 | 0 | The paper focuses on molecular docking of triterpenes as MAGL inhibitors; glycerol (specifically 2-arachidonoylglycerol) is the substrate/endocannabinoid, not the subject substance for which kinetic parameters are being reported. |
| popPK | Mason_1989 | irrelevant | 0 | 0 | The paper focuses on the membrane interactions of amlodipine, and glycerol is only mentioned as part of the phospholipid structure, not as the subject substance. |
| PGx | Masud_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a gene on the efflux and cytotoxicity of pyrvinium, not the pharmacokinetics of glycerol. |
| popPK | Matubayasi_2008 | irrelevant | 0 | 0 | The paper uses molecular simulations for model solutes (CO, CO2, benzene) and treats the glycerol region of a phospholipid molecule as a compartment for partition coefficient calculations, not studying glycerol as the subject substance for toxicokinetic parameters. |
| popPK | Mbah_2007 | irrelevant | 0 | 0 | The study measures the partition coefficient and permeability of oxybenzone (a sunscreen) in the presence of glycerol as a vehicle, not the toxicokinetic parameters of glycerol itself. |
| popPK | McGuire_2010 | relevant | 8 | 2 | The paper reports the pharmacokinetics of Glycerol Phenylbutyrate (a glycerol ester), describing delayed release, time to steady state, and metabolite kinetics, which are toxicokinetic parameters for the glycerol-based substance. |
| PGx | McMurrough_1996 | not_relevant | 0 | 0 | The paper analyzes DPD polymorphism effects on DPD enzyme activity, not on the pharmacokinetic or pharmacodynamic parameters of glycerol itself, which is merely used as a preservative buffer in the study. |
| popPK | Menzies_1990 | irrelevant | 0 | 0 | The paper studies the effect of mannitol on the absorption of other sugars, using glycerol only as a comparator solute with no kinetic parameters reported for it. |
| PGx | Mersmann_1989 | not_relevant | 0 | 0 | The paper studies lipid mobilization and glycerol levels in response to isoproterenol, not the PK/PD of glycerol as a drug. |
| popPK | Miranda_2009 | irrelevant | 0 | 0 | The paper studies gene expression of aquaporins (AQP7/AQP9) in human tissues and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for glycerol. |
| popPK | Mitchell_1987 | irrelevant | 0 | 0 | The paper studies radiation-induced micronuclei in human lymphocytes, where glycerol is used only as a radical scavenger agent, not as the subject of toxicokinetic investigation. |
| PGx | Modlin_2026 | not_relevant | 0 | 0 | The paper focuses on Mycobacterium tuberculosis genomics and phase variation, mentioning glycerol utilization as a bacterial phenotype but containing no data on human pharmacogenomics or drug pharmacokinetics. |
| PGx | Monfort_1993 | not_relevant | 0 | 0 | The paper is about assisted reproduction in Eld's deer and does not report pharmacogenomic effects on the PK/PD of glycerol. |
| popPK | Monnard_2026 | irrelevant | 0 | 0 | The paper is a review on structured lipids (TAGs, MCTs, etc.) where glycerol serves as a backbone component, and it contains no quantitative toxicokinetic parameters for glycerol itself. |
| popPK | Monteleone_2013 | irrelevant | 0 | 0 | The paper models the disposition of glycerol phenylbutyrate (a prodrug for phenylbutyric acid), not glycerol itself, and does not report kinetic parameters for free glycerol. |
| popPK | Moreno_2020 | irrelevant | 0 | 0 | The paper studies RNA processing in yeast where glycerol is used as a growth medium component, not as the subject of toxicokinetic analysis. |
| popPK | Mortensen_2017 | relevant | 5 | 3 | The paper is a review (EFSA opinion) that cites a specific quantitative half-life value for glycerol in humans (11.7 min) found in the text, but it does not present original experimental kinetic data or a full PBPK model. |
| popPK | Mottola_2013 | irrelevant | 0 | 0 | The paper studies the interaction of ascorbyl palmitate with phospholipid monolayers, not the toxicokinetics of glycerol. |
| popPK | Moudgil_1987 | irrelevant | 0 | 0 | The paper studies progesterone receptor transformation in calf uterine tissue using glycerol solely as a component of density gradients, not as the subject substance for toxicokinetic analysis. |
| PGx | Muroya_2022 | not_relevant | 0 | 0 | This study is about maternal nutrient restriction affecting fetal calf liver gene expression and metabolites (including glycerol), not a pharmacogenomic study involving drugs. |
| popPK | Méndez-Giménez_2015 | irrelevant | 0 | 0 | The paper investigates aquaglyceroporin expression levels in a disease model, not the kinetic parameters of glycerol itself. |
| popPK | Méndez-Giménez_2017 | irrelevant | 0 | 0 | The paper focuses on the expression of aquaporin-7 and its role in pancreatic cell function and lipid accumulation, but does not report quantitative kinetic parameters (e.g., clearance, half-life, partition coefficients) for glycerol disposition. |
| PGx | Namuli-Kayondo_2026 | not_relevant | 0 | 0 | The paper studies insecticide resistance in mosquitoes and does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Naoe_2019 | irrelevant | 0 | 0 | The paper focuses on lipidomic profiling of fatty acids in mice, where glycerol is mentioned only as part of lipid class names (e.g., glycerolipids) or as a solvent, not as the subject substance for toxicokinetic analysis. |
| popPK | Nautiyal_2024 | irrelevant | 0 | 0 | The paper is an acute toxicity study of yeast single-cell oil (SCO) where glycerol is only the fermentation feedstock, and no kinetic parameters for glycerol itself are reported. |
| popPK | Nicchia_2001 | irrelevant | 0 | 0 | The paper analyzes the tissue distribution of the AQP9 protein in rats and mentions glycerol only as a solute AQP9 is permeable to, providing no quantitative toxicokinetic parameters for glycerol. |
| popPK | Nilsen_1981 | irrelevant | 0 | 0 | The paper concerns the binding of a radioactive oligonucleotide to RNase L, where glycerol is mentioned only as a component of centrifugation gradients (vehicle/reagent), not as a subject of toxicokinetic study. |
| popPK | Nivinskas_2008 | irrelevant | 0 | 0 | The paper reports enzymatic reduction kinetics (kcat/Km) of nitroesters (e.g., glycerol trinitrate) by an enzyme, which is not the toxicokinetic disposition (absorption, distribution, metabolism, excretion) of glycerol itself. |
| popPK | Nutaratat_2023 | irrelevant | 0 | 0 | The paper focuses on optimizing the production of the insecticidal protein Vip3A in Bacillus thuringiensis, using glycerol solely as a carbon source in the culture medium rather than as a subject for toxicokinetic analysis. |
| popPK | Okazaki_2006 | irrelevant | 0 | 0 | The paper focuses on the identification and function of a lipase enzyme (TGH-2) in cell culture, and while it measures glycerol release, it does not report toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for glycerol as a substance. |
| popPK | Omar_1996 | irrelevant | 0 | 0 | The paper is a histochemical study of dehydrogenases in the parasite *Onchocerca fasciata*, where glycerol-3-phosphate dehydrogenase is an enzyme, not the subject substance for toxicokinetic parameter measurement. |
| PGx | Pan_2022 | not_relevant | 0 | 0 | The paper reports the crystal structure of the transporter protein CmABCB1 and does not discuss gene variants, glycerol, or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Patel_1999 | irrelevant | 0 | 0 | The paper is a review on archaeobacterial liposomes where glycerol is mentioned only as a structural component of the lipid backbone, not as a substance undergoing toxicokinetic evaluation. |
| popPK | Patel_2010 | irrelevant | 0 | 0 | The paper studies the physicochemical effects of glycerol on surfactant micellization and lipid membrane partitioning, not the toxicokinetic parameters of glycerol in a biological system. |
| popPK | Philip_2011 | irrelevant | 0 | 0 | The paper investigates aquaporin function in insects and mentions glycerol only to demonstrate that the EsAQP1 channel is impermeable to it; it does not report toxicokinetic parameters for glycerol. |
| popPK | Popilski_2021 | irrelevant | 0 | 0 | The paper studies doxorubicin liposomes, where glycerol derivatives are part of the lipid structure (distearoyl glycerol) rather than the subject substance, and no kinetic parameters for glycerol itself are reported. |
| popPK | Portillo_2000 | irrelevant | 0 | 0 | The study measures glycerol release as a marker for lipolysis in adipose tissue, not the toxicokinetic parameters (half-life, clearance, etc.) of glycerol as a subject substance. |
| PGx | Prochazka_1989 | not_relevant | 0 | 0 | The paper describes a genetic mutation in a mouse enzyme (glycerol-3-phosphate dehydrogenase) and its molecular consequences, but does not involve the drug glycerol or any pharmacokinetic/pharmacodynamic parameters of a drug. |
| popPK | Procházka_2002 | irrelevant | 0 | 0 | The paper uses glycerol as a formulation excipient (auxiliary substance) for a different drug, reporting no kinetic parameters for glycerol itself. |
| popPK | Pugliese_2004 | irrelevant | 0 | 0 | The paper investigates pesticide residue removal from nectarines using glycerol as a washing solution, and reports no toxicokinetic parameters for glycerol itself. |
| PGx | Qadri_2020 | not_relevant | 0 | 0 | The paper investigates the effect of the PNPLA3 variant on adipose tissue lipids and lipolysis using [2H5]glycerol as a tracer for a metabolic assay, not as a drug of interest; therefore, it does not report a pharmacogenomic effect on the PK/PD of glycerol as a therapeutic agent. |
| PGx | Qiu_2025 | not_relevant | 0 | 0 | The paper investigates metabolic regulators in Alzheimer's disease using glycerol as a signaling metabolite for PPARD, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Rhodes_1987 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry methods for detecting betaines in maize, not the pharmacokinetics or pharmacodynamics of glycerol or any human drug. |
| popPK | Rodríguez_2011 | irrelevant | 0 | 0 | The paper investigates the molecular regulation of aquaglyceroporins by insulin and leptin and does not report any quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for glycerol. |
| popPK | Rojek_2008 | irrelevant | 0 | 0 | The paper is a review of the molecular biology and physiology of aquaglyceroporins (channels), not a study reporting quantitative toxicokinetic parameters (half-life, clearance, etc.) for glycerol disposition. |
| popPK | Rosdianto_2023 | irrelevant | 0 | 0 | The paper studies a cosmetic emulsion formulation where glycerol is used as a common excipient/humectant, and it reports no toxicokinetic parameters for glycerol itself. |
| PGx | Rump_2024 | not_relevant | 0 | 0 | The paper is a review on aquaporins in sepsis and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycerol. |
| popPK | Sachdeva_2023 | irrelevant | 0 | 0 | The paper is a review of aquaporin structures and substrates, not a study reporting quantitative toxicokinetic parameters for glycerol. |
| popPK | Santos_2004 | irrelevant | 0 | 0 | The paper characterizes a channel protein (sbAQP) that transports glycerol but does not report kinetic parameters (such as half-life, clearance, or partition coefficients) for the disposition of glycerol in the organism. |
| popPK | Schoemaker_2002 | relevant | 9 | 0 | The paper reports a PK/PD model of glycerol disposition and lipolysis rates in humans, but specific numeric parameter values are not present in the provided evidence text. |
| popPK | Schubert_2011 | irrelevant | 0 | 0 | The paper identifies glycerol as a component (humectant) in waterpipe smoke but does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficient) for glycerol itself. |
| PGx | Sevrioukova_2017 | not_relevant | 0 | 0 | The paper reports on the biochemical properties and crystal structures of engineered CYP3A4 variants interacting with a solvent (glycerol), not the pharmacokinetics or pharmacodynamics of glycerol as a drug in humans based on genetic variation. |
| PGx | Shah_2024 | not_relevant | 0 | 0 | The paper investigates the metabolism of glycerol itself in genetic deficiency, not the PK/PD of a specific drug. |
| PGx | Shah_2025 | not_relevant | 0 | 0 | The paper investigates the molecular rescue of GABA transporter mutations using glycerol as a pharmacochaperone; it does not report a pharmacogenomic effect on the PK or PD of glycerol. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper focuses on the insecticidal properties of Murraya koenigii essential oils, where glycerol is used merely as a component for the extraction solvent, not as the subject of toxicokinetic study. |
| popPK | Shaw_1982 | irrelevant | 1 | 5 | The paper reports enzyme kinetics (Km) for mitochondrial glycerol phosphate dehydrogenase using glycerol phosphate as a substrate, not the toxicokinetic parameters (half-life, clearance, distribution) for glycerol itself. |
| popPK | Shenoi_2016 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of polymeric drug carriers (polyglycerols) where glycerol appears only as a chemical structural component of the polymer, not as the subject substance undergoing toxicokinetic evaluation. |
| popPK | Shimizu_1988 | irrelevant | 0 | 0 | The paper studies the morphology of erythrocytes and calcium toxicity mechanisms, using glycerol solely as a cryoprotectant/vehicle for cell preservation rather than as the subject substance for toxicokinetic analysis. |
| PGx | Shortt_2009 | not_relevant | 0 | 0 | The paper investigates cell culture substrates and uses glycerol as a cryoprotectant, not as a pharmacological agent with PK/PD parameters affected by genetic variants. |
| PGx | Simic_2025 | not_relevant | 0 | 0 | The paper investigates the role of glycerol-3-phosphate as an endogenous metabolic regulator in chronic kidney disease, not its pharmacokinetic or pharmacodynamic parameters in response to gene variants. |
| popPK | Singh_2014 | irrelevant | 0 | 0 | The paper investigates glycerol-3-phosphate dehydrogenase as a target for cancer therapeutics and does not report any pharmacokinetic or toxicokinetic parameters (half-life, clearance, etc.) for glycerol itself. |
| popPK | Singla_2003 | irrelevant | 0 | 0 | Glycerol is used as a modifier in the receptor solution to study the absorption of all-trans retinoic acid, not as the subject substance for kinetic characterization. |
| popPK | Srinivas_2010 | irrelevant | 0 | 0 | Glycerol is used as an agent to induce acute renal failure in rats, serving as a model condition rather than the subject substance for which toxicokinetic parameters are reported. |
| PGx | Srivastava_2008 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of olanzapine-induced weight gain, not glycerol pharmacokinetics or pharmacodynamics. |
| PGx | Stanley_2023 | not_relevant | 0 | 0 | The paper focuses on Mycobacterium tuberculosis genetics and growth phenotypes, not human pharmacogenomics of glycerol. |
| PGx | Styles_1997 | not_relevant | 0 | 0 | The paper studies genotoxicity and chromosomal aberrations of tamoxifen and analogues, not pharmacogenomic effects on PK or PD parameters. |
| PGx | Sun_2022 | not_relevant | 0 | 0 | The paper discusses metabolomic changes (including glycerol 3-phosphate) in cattle muscle and liver tissue related to marbling, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Suzuki_2009 | irrelevant | 0 | 0 | The paper focuses on the molecular biology of aquaporins in amphibians and mentions glycerol only as a potential substance transported by AQP3, without providing any quantitative toxicokinetic parameters for glycerol. |
| PGx | Svedung_2021 | not_relevant | 0 | 0 | The study investigates cerebral perfusion pressure targets in TBI and their correlation with metabolic markers like cerebral glycerol, but does not involve a drug, gene variant, or pharmacogenomic analysis. |
| PGx | Swann_2023 | not_relevant | 0 | 0 | The paper reports metabolomic differences in ADHD twins, not a pharmacogenomic effect on the PK/PD of glycerol. |
| PGx | Sweeney_2023 | not_relevant | 0 | 0 | The paper describes the binding mechanism of CYP3A4 inhibitors and does not report pharmacogenomic effects on glycerol PK/PD. |
| PGx | Tanaka_2021 | not_relevant | 0 | 0 | The paper studies the effect of LPIAT1/MBOAT7 depletion on lipid metabolism (TG synthesis) using radiolabeled glycerol as a tracer, not the PK/PD of glycerol as a drug. |
| PGx | Thomas_2013 | not_relevant | 0 | 0 | The paper discusses PPARα regulation of CYP3A4 gene expression and drug metabolism, not a pharmacogenomic effect on the PK or PD of glycerol. |
| popPK | Thresher_1983 | irrelevant | 0 | 0 | The paper reports on the chemical synthesis and binding characteristics of an affinity ligand immobilized on glass, using glycerolpropyl-glass as a support material, and does not contain any toxicokinetic parameters for glycerol as a substance in a biological system. |
| popPK | Trivedi_2019 | irrelevant | 0 | 0 | The paper uses glycerol triacetate as a swelling agent in material synthesis and reports no toxicokinetic parameters for glycerol. |
| popPK | Unger_1985 | irrelevant | 0 | 0 | Glycerol derivatives are used solely as additives to modify the blood-brain barrier permeability of other drugs, not as the subject substance for kinetic parameter determination. |
| popPK | Upert_2021 | irrelevant | 0 | 0 | The paper is a review of peptide antibiotics and does not report any toxicokinetic parameters for glycerol. |
| popPK | Valizadeh_2020 | irrelevant | 0 | 0 | The paper focuses on insect biocontrol, and glycerol is listed solely as an ingredient in a formulation vehicle, with no toxicokinetic parameters reported for it. |
| popPK | Van_2006 | irrelevant | 0 | 0 | The paper focuses on the characterization of the enzyme ceramide kinase, with no toxicokinetic parameters reported for glycerol. |
| PGx | Van_2023 | not_relevant | 0 | 0 | The paper studies N-terminal acetylation in yeast and glycerol metabolism as a carbon source, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | Veiga_2004 | irrelevant | 0 | 0 | The paper studies the membrane partitioning of an HIV fusion inhibitor peptide (T-1249), not the toxicokinetics of glycerol. |
| popPK | Vergara-Fernández_2006 | irrelevant | 0 | 0 | The paper focuses on the partition coefficient of hexane in fungal biomass, using glycerol only as a carbon source/comparator, and contains no toxicokinetic parameters for glycerol. |
| popPK | Vergara-Fernández_2011 | irrelevant | 0 | 0 | Glycerol is used as a carbon source for fungal growth in a biofilter, not as a subject substance for toxicokinetic parameter measurement. |
| popPK | Vitková_1995 | irrelevant | 0 | 0 | Glycerol is used as an auxiliary substance (excipient) to study its effect on the partition coefficient and diffusion of a different drug (Drug XX Z), not as the subject substance for toxicokinetic parameterization. |
| popPK | Vitková_1996 | irrelevant | 0 | 0 | The paper studies a local anesthetic, with glycerol used only as an auxiliary excipient, and no kinetic parameters for glycerol are reported. |
| popPK | Vitková_2004 | irrelevant | 0 | 0 | Glycerol is used as a formulation excipient (humectant) and the measured partition coefficient refers to the drug substance XXII B, not glycerol's toxicokinetics. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper is a metabolomic study of fipronil exposure where glycerol is identified as a perturbed metabolite, not a subject of toxicokinetic analysis. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for phenylacetic acid (PAA) and phenylacetylglutamine (PAGN), with glycerol mentioned only as part of a different approved drug formulation (glycerol phenylbutyrate) in the background, not as the subject of kinetic analysis. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper uses glycerol as a chemical reagent (component of a deep eutectic solvent) for the extraction of flavonoids and reports no toxicokinetic parameters for glycerol itself. |
| popPK | Wei_2012 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of ligustrazine, and glycerol is used solely as an excipient (ingredient) in the lipid emulsion formulation. |
| popPK | Wenkeová_1976 | irrelevant | 0 | 0 | The paper studies lipolysis (release of glycerol) as an outcome of drug action, not the toxicokinetic disposition of glycerol as the subject substance. |
| popPK | White_1972 | irrelevant | 0 | 0 | The paper investigates the tissue distribution and ontogeny of glycerol-3-phosphate dehydrogenase isozymes in chickens, not the toxicokinetics or disposition of the substance glycerol. |
| popPK | Wolf_1980 | irrelevant | 0 | 0 | The paper investigates the effect of glycerol as a fixative on cell structure, not toxicokinetics. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The study analyzes causal relationships between lipid metabolites (including glycerol derivatives) and bone mineral density, not the PK/PD parameters of glycerol itself. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper investigates the stability and pharmacodynamic effects of EGCG combined with glycerol as an excipient, and contains no data on pharmacogenomics or gene variants. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper investigates the interaction of organophosphate esters with phospholipids containing glycerol backbones (POPG) at an interface, focusing on chemical oxidation mechanisms rather than the toxicokinetics of glycerol itself. |
| popPK | Yaghmur_2012 | irrelevant | 0 | 0 | The study focuses on bupivacaine formulations where glycerol monooleate is a lipid component, not glycerol itself, and reports no kinetic parameters for glycerol. |
| popPK | Yamasaki_2021 | irrelevant | 0 | 0 | The paper describes the development of an antibody for a glycoprotein where glycerol is a chemical component of a phosphate unit, not a substance being dosed and kinetically characterized. |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The paper investigates the causal relationship between metabolites and endometriosis using Mendelian randomization, not the pharmacokinetics or pharmacodynamics of the drug glycerol. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper investigates the physicochemical properties and permeation of Phenylethyl Resorcinol (PR), using glycerol only as a solvent/vehicle; no kinetic parameters for glycerol itself are reported. |
| popPK | Zhang_2021 | irrelevant | 2 | 0 | The paper uses a PBPK model to calculate EADs for a mixture where glycerol is a carrier/ingredient, but does not report specific kinetic parameters (half-life, clearance, etc.) for glycerol as the primary subject, and the calculated Cmax values are in supplementary tables not provided. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper reports on bacterial tolerance to polymyxin B induced by environmental antibiotics, not a pharmacogenomic effect of a gene variant on the PK or PD of glycerol. |
| popPK | Zheng_2024 | irrelevant | 0 | 0 | The paper studies glycerol monolaurate (a derivative) as a food ingredient in oleogels, not glycerol toxicokinetics. |
| popPK | Zulkifli_2018 | irrelevant | 0 | 0 | The paper is a health risk assessment review calculating hazard quotients and cancer risks, not reporting quantitative toxicokinetic parameters (e.g., half-life, clearance) for glycerol. |
| PGx | Zuo_2024 | not_relevant | 0 | 0 | The paper investigates the association between serum metabolites and tinnitus using Mendelian randomisation, not the pharmacokinetics or pharmacodynamics of glycerol as a drug. |
| popPK | da_2017 | irrelevant | 0 | 0 | This is a review article focused on the physiological role of aquaporins in obesity and glycerol metabolism, containing no quantitative toxicokinetic parameters for glycerol. |
| popPK | da_2023 | irrelevant | 1 | 0 | This is a qualitative review of aquaporins' physiological role in glycerol metabolism and contains no quantitative toxicokinetic parameters. |
| popPK | de_1992 | irrelevant | 0 | 0 | Glycerol is used only as a radioactive tracer ([3H]glycerol) to measure DAG synthesis, not as the subject of toxicokinetic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglycerol%5D&body=Drug%3A%20glycerol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_glycerol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
