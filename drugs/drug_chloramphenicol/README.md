# chloramphenicol

- **generic name:** chloramphenicol
- **ATC codes:** `D06AX02`, `D10AF03`, `G01AA05`, `J01BA01`, `S01AA01`, `S02AA01`, `S03AA08`
- **DrugBank:** [DB00446](https://go.drugbank.com/drugs/DB00446)
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** An antibiotic first isolated from cultures of _Streptomyces venezuelae_ in 1947 but now produced synthetically. It has a relatively simple structure and was the first broad-spectrum antibiotic to be discovered. It acts by interfering with bacterial protein synthesis and is mainly bacteriostatic. (From Martindale, The Extra Pharmacopoeia, 29th ed, p106)

The FDA has withdrawn all oral drug products containing chloramphenicol, due to the high risk of fatal aplastic anemia associated with this specific route of administration.[L43942,L44022]

**Indication.** Used in treatment of cholera, as it destroys the vibrios and decreases the diarrhea. It is effective against tetracycline-resistant vibrios. It is also used in eye drops or ointment to treat bacterial conjunctivitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 48 | 49/0 | 22/26 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Anderson_1983](drugs/drug_chloramphenicol/Chloramphenicol_Anderson1983_reference.md) | Anderson KL et al., Pharmacokinetics of chloramphenicol in…, Journal of veterinary pharm… (1983) | [10.1111/j.1365-2885.1983.tb00005.x](https://doi.org/10.1111/j.1365-2885.1983.tb00005.x) |

## Coverage

- **PubMed hits:** 376 matched, 69 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_1999 | not_relevant | 0 | 0 | no full text |
| PGx | Arraiano_1988 | not_relevant | 0 | 0 | The text contains only fragmentary identifiers and numbers with no mention of chloramphenicol, genes, or pharmacokinetic/pharmacodynamic parameters. |
| PGx | Atsumi_2010 | not_relevant | 0 | 0 | The paper studies isobutanol tolerance in E. coli and mentions chloramphenicol only as a comparative stressor showing increased sensitivity, without reporting pharmacokinetic or pharmacodynamic parameters of chloramphenicol itself. |
| PGx | Banerjee_2019 | not_relevant | 0 | 0 | The paper investigates metabolic flux changes in bacterial pathogens (Chromobacterium violaceum) in response to antibiotics, focusing on resistance mechanisms rather than human pharmacogenomic effects on PK/PD parameters. |
| PGx | Beschle_1984 | not_relevant | 0 | 0 | The paper investigates bacterial resistance mechanisms (chloramphenicol acetyltransferase gene location) in Flavobacterium, not human pharmacogenomics affecting PK/PD parameters. |
| PGx | Broadway-Duren_2026 | not_relevant | 0 | 0 | The paper discusses G6PD deficiency and its interaction with rasburicase, mentioning chloramphenicol only as a general example of a drug that can trigger hemolysis in G6PD-deficient patients, without reporting any specific pharmacokinetic or pharmacodynamic data for chloramphenicol. |
| PD | Burgess_2007 | not_relevant | 2 | 0 | The paper uses Monte Carlo simulations based on literature-derived PK parameters and fixed, extrapolated PD targets (e.g., %T&gt;MIC) rather than estimating population PD model parameters from data. |
| PGx | Choudhry_1990 | not_relevant | 0 | 0 | The paper reports clinical adverse events (hemolysis) associated with G-6-PD deficiency and chloramphenicol use, but does not measure or report changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Cilleros-Holgado_2025 | not_relevant | 0 | 0 | The paper uses chloramphenicol as a pharmacological tool to mimic mitochondrial protein synthesis defects in vitro, but does not report on how genetic variants affect the pharmacokinetics or pharmacodynamics of chloramphenicol itself. |
| PGx | Crowell_1984 | not_relevant | 0 | 0 | The paper investigates G6PD deficiency and its association with haemolytic anaemia in typhoid patients, but explicitly states that chloramphenicol therapy did not affect G6PD activity levels and does not report any pharmacokinetic or pharmacodynamic parameters of chloramphenicol. |
| PD | Crump_2015 | not_relevant | 0 | 0 | The text is a clinical review of Salmonella epidemiology and management, containing no pharmacokinetic or pharmacodynamic modeling data for chloramphenicol. |
| PGx | DallAgnol_2008 | not_relevant | 0 | 0 | The study investigates bacterial genetic diversity and antimicrobial susceptibility of Chromobacterium violaceum, not human pharmacogenomics affecting chloramphenicol PK/PD. |
| PGx | Deutsch_1988 | not_relevant | 0 | 0 | The paper uses chloramphenicol acetyltransferase (CAT) as a reporter gene to study signal transduction pathways, not the pharmacokinetics or pharmacodynamics of the drug chloramphenicol. |
| PD | Foerster_2016 | not_relevant | 2 | 8 | The study reports in vitro pharmacodynamic parameters (zMIC, Hill coefficient) derived from time-kill curves using a standard non-linear regression model, but it does not employ population pharmacokinetic/pharmacodynamic modeling techniques (e.g., NONMEM, Bayesian estimation of inter-individual variability) or link drug exposure to effect in a biological system. |
| PGx | Groenewold_2018 | not_relevant | 0 | 0 | The study investigates bacterial genetics (Pseudomonas aeruginosa PA3911) and its effect on antibiotic susceptibility, which is a microbiological mechanism of resistance rather than a human pharmacogenomic effect on PK or PD parameters. |
| popPK | Hanafin_2023 | irrelevant | 1 | 9 | This is a pharmacodynamic/combination-therapy paper with chloramphenicol as a model antibiotic and no chloramphenicol PK parameters. |
| PD | Hou_1998 | not_relevant | 0 | 0 | The paper investigates molecular mechanisms of gene regulation by dexamethasone using chloramphenicol acetyltransferase (CAT) as a reporter assay, not population pharmacodynamic modeling of chloramphenicol. |
| PGx | Irvin_1980 | not_relevant | 0 | 0 | The study investigates bacterial resistance mechanisms in Pseudomonas aeruginosa, not human pharmacogenomics affecting drug PK/PD parameters. |
| PGx | Jain_2009 | not_relevant | 0 | 0 | The paper investigates silver nanoparticles and their interaction with chloramphenicol, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The study investigates environmental co-contamination effects on bacterial antibiotic resistance evolution in E. coli, not human pharmacogenomics or PK/PD parameters of chloramphenicol. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | The paper investigates bacterial antimicrobial resistance genes and virulence factors in Lactococcus garvieae, not human pharmacogenomic effects on chloramphenicol PK/PD parameters. |
| PGx | Lu_2022 | not_relevant | 0 | 0 | The study investigates the genetic regulation of chloramphenicol biosynthesis in Streptomyces venezuelae, not the pharmacokinetics or pharmacodynamics of chloramphenicol as a drug in a host organism. |
| PD | MacLeod_1976 | not_relevant | 0 | 0 | The text is a review article discussing drug interactions with coumarin anticoagulants, mentioning chloramphenicol only as a pharmacokinetic inhibitor; it does not report any population pharmacodynamic or exposure-response modeling for chloramphenicol. |
| PGx | MacLeod_1991 | not_relevant | 0 | 0 | The text is a general review of pediatric clinical pharmacology and mentions chloramphenicol only in the context of historical toxicity, without reporting any specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Mella_2009 | not_relevant | 0 | 0 | The text is an editorial discussing clinical experience and racial differences in toxicity rates, but it does not report specific gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Nolden_2022 | not_relevant | 0 | 10 | The study reports on genetic variation in bitter taste perception (sensory phenotype), which is not a pharmacokinetic or pharmacodynamic parameter of the drug's therapeutic effect. |
| PGx | Nolte_1987 | not_relevant | 0 | 0 | The paper characterizes a bacterial enzyme (chloramphenicol acetyltransferase) responsible for antibiotic resistance in bacteria, not human pharmacogenomics affecting PK/PD parameters. |
| PGx | Oelschlaeger_1994 | not_relevant | 0 | 0 | The paper investigates bacterial invasion mechanisms using chloramphenicol as a protein synthesis inhibitor in vitro, but does not report any human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of chloramphenicol. |
| PD | Pan_2016 | not_relevant | 1 | 2 | The paper reports on environmental phytotoxicity and QSAR modeling, not population pharmacodynamic or exposure-response modeling in a clinical or physiological context. |
| PD | Pankey_2004 | not_relevant | 0 | 0 | The text is a narrative review discussing the clinical definitions of bactericidal vs. bacteriostatic agents and general PK/PD principles, but it does not report any population pharmacodynamic modeling study or estimated parameters for chloramphenicol. |
| PGx | Park_2014 | not_relevant | 0 | 0 | The study investigates bacterial resistance mechanisms and metabolic changes in Clostridium perfringens, not human pharmacogenomics affecting chloramphenicol PK/PD. |
| PD | Patsalos_1993 | not_relevant | 0 | 0 | The text is a review article on drug interactions involving antiepileptics and does not report any population pharmacodynamic modeling or exposure-response analysis for chloramphenicol. |
| PGx | Paul_2011 | not_relevant | 0 | 0 | The paper describes the development of a recombinant bacteriophage using chloramphenicol resistance as a selection marker, but does not investigate pharmacogenomic effects on chloramphenicol's PK or PD parameters. |
| PD | Perucca_1982 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic drug interactions involving antiepileptics and does not report any population pharmacodynamic or exposure-response modeling for chloramphenicol. |
| PD | Pisani_1990 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic and pharmacodynamic drug interactions involving anti-epileptics; it does not present any population pharmacodynamic modeling, exposure-response analysis, or estimated PD parameters for chloramphenicol. |
| PD | Robert_2001 | not_relevant | 0 | 0 | The text is a general review of ophthalmic antibacterials discussing mechanisms and pharmacokinetics, but it does not report any population pharmacodynamic modeling or exposure-response analysis for chloramphenicol. |
| popPK | Shen_2003 | irrelevant | 0 | 0 | The study investigates florfenicol, not chloramphenicol, which is only used as an internal standard and comparator. |
| popPK | Soback_1986 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for mecillinam, while chloramphenicol is only used as a comparator in in vitro MIC testing. |
| PD | Verma_2025 | not_relevant | 0 | 0 | The paper describes an in vitro mechanistic study using cell culture assays and descriptive statistics (ANOVA), lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| PD | Wang_2021 | not_relevant | 2 | 3 | The study reports in vitro concentration-response parameters (Cs, Emax) derived from static experiments using the Hill equation, but does not perform population pharmacodynamic modeling or estimate exposure-response relationships with inter-individual variability. |
| PD | Zhang_2021 | not_relevant | 1 | 2 | The paper reports on ecotoxicology (Daphnia magna immobilization) using static concentration-response models (EC50, Combination Index), not population pharmacodynamic modeling of exposure-response in a clinical or physiological context. |
| PGx | de_1999 | not_relevant | 2 | 1 | The paper discusses chloramphenicol only as a historical example of toxicity due to ontogeny (developmental changes), but explicitly states that the impact of genetic polymorphisms on drug metabolism for UGT substrates remains to be established and provides no data linking genotypes to chloramphenicol PK/PD parameters. |
| PGx | de_2012 | not_relevant | 0 | 0 | The study investigates bacterial phenotypic changes and resistance in Fusobacterium nucleatum, not human pharmacogenomic effects on chloramphenicol PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_chloramphenicol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
