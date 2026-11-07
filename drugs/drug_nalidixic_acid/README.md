<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nalidixic acid&quot;}]"></div>

# nalidixic acid

- **generic name:** nalidixic acid
- **ATC codes:** `J01MB02`
- **DrugBank:** [DB00779](https://go.drugbank.com/drugs/DB00779) · **PubChem:** [CID 4421](https://pubchem.ncbi.nlm.nih.gov/compound/4421)
- **molar mass:** 232.2353 g/mol (C12H12N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Nalidixic acid is a quinolone antibiotic that was used to treat urinary tract infections, including those caused by Escherichia coli. It has been withdrawn from use, so it is no longer available for treating patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q281082](https://www.wikidata.org/wiki/Q281082) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_GI](drugs/drug_nalidixic_acid/pd_Suominen_2020_GI.md) | growth inhibition ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_LI](drugs/drug_nalidixic_acid/pd_Suominen_2020_LI.md) | luminescence inhibition ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2020_CFU_mL](drugs/drug_nalidixic_acid/pd_Srivastava_2020_CFU_mL.md) | M. tuberculosis bacterial burden ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Effect of specimen processing, growth s…, PloS one (2020) | [10.1371/journal.pone.0230927](https://doi.org/10.1371/journal.pone.0230927) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nalidixic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Aerobic bacterial DNA (inhibitor), TDO2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 13:29 | 22:45 | 0/0/0 | 2/0/0 | 0/0/0 | 240,763/12,298 | ollama / qwen3.8:27b-mtp-q8_0 | 35 | 16/19 | 24/0 | 0 |

## Coverage

- **PubMed hits:** 117 matched, 73 returned
- **screened:** 19  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartolome_2006.pdf` | Bartolome A et al., SOS-red fluorescent protein (RFP) bioas…, Biosensors & bioelectronics (2006) | pd | 5 | [10.1016/j.bios.2005.10.009](https://doi.org/10.1016/j.bios.2005.10.009) | [16321516](https://www.ncbi.nlm.nih.gov/pubmed/16321516) | metadata signals extractable PD data (IC50) |
| `Balasundaram_2018.pdf` | Balasundaram P et al., Drug repurposing: An approach to tackle…, Journal of cellular biochem… (2018) | pd | 4 | [10.1002/jcb.26457](https://doi.org/10.1002/jcb.26457) | [29058787](https://www.ncbi.nlm.nih.gov/pubmed/29058787) | metadata signals extractable PD data (IC50) |
| `Kasuya_2001.pdf` | Kasuya F et al., Inhibitory effect of quinolone antimicr…, Biochemical pharmacology (2001) | pd | 4 | [10.1016/s0006-2952(01)00667-0](https://doi.org/10.1016/s0006-2952(01)00667-0) | [11434910](https://www.ncbi.nlm.nih.gov/pubmed/11434910) | metadata signals extractable PD data (IC50) |
| `Koide_2019.pdf` | Koide K et al., Antibacterial Activity of DC-159a Again…, Microbial drug resistance (… (2019) | pd | 4 | [10.1089/mdr.2018.0078](https://doi.org/10.1089/mdr.2018.0078) | [30036136](https://www.ncbi.nlm.nih.gov/pubmed/30036136) | metadata signals extractable PD data (IC50) |
| `Oliveira_2026.pdf` | Oliveira D et al., Antiparasitic effects of topoisomerase…, Acta tropica (2026) | pd | 4 | [10.1016/j.actatropica.2026.108254](https://doi.org/10.1016/j.actatropica.2026.108254) | [42498008](https://www.ncbi.nlm.nih.gov/pubmed/42498008) | metadata signals extractable PD data (IC50) |
| `Omar_2016.pdf` | Omar MA et al., Evaluation of in vitro inhibitory effec…, Experimental parasitology (2016) | pd | 4 | [10.1016/j.exppara.2015.12.016](https://doi.org/10.1016/j.exppara.2015.12.016) | [26724376](https://www.ncbi.nlm.nih.gov/pubmed/26724376) | metadata signals extractable PD data (IC50) |
| `Park_2014.pdf` | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | pd | 4 | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) | [23952334](https://www.ncbi.nlm.nih.gov/pubmed/23952334) | metadata signals extractable PD data (EC50) |
| `Revel-Viravau_1996.pdf` | Revel-Viravau V et al., Sequence analysis, purification, and st…, Antimicrobial agents and ch… (1996) | pd | 4 | [10.1128/AAC.40.9.2054](https://doi.org/10.1128/AAC.40.9.2054) | [8878580](https://www.ncbi.nlm.nih.gov/pubmed/8878580) | metadata signals extractable PD data (IC50) |
| `Sakal_2000.pdf` | Sakal E et al., Recombinant extracellular domain of rab…, Preparative biochemistry &… (2000) | pd | 4 | [10.1080/10826060008544950](https://doi.org/10.1080/10826060008544950) | [10794181](https://www.ncbi.nlm.nih.gov/pubmed/10794181) | metadata signals extractable PD data (IC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 |  | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-13 13:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrade_2025 | irrelevant | 0 | 0 | The paper is a review of 4-quinolone-3-carboxamide derivatives for biological applications and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Balasundaram_2018 | irrelevant | 0 | 0 | The study is a computational drug repurposing and in-vitro antimicrobial activity analysis, not a pharmacokinetic study, and nalidixic acid is used only as a reference compound. |
| popPK | Bartolome_2006 | irrelevant | 0 | 0 | The study is an in-vitro bioassay for antigenotoxic activity using nalidixic acid as a genotoxicant, not a pharmacokinetic study. |
| PGx | Bautista_2004 | not_relevant | 0 | 0 | The paper investigates the effect of a viral infection on Salmonella infection in chickens, using nalidixic acid only as a resistance marker for the bacteria, and does not report any pharmacogenomic effects on the drug's PK or PD parameters. |
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes a bioinformatics platform for discovering natural products (specifically edaphochelin A) against fungal pathogens and contains no pharmacokinetic data for nalidixic acid. |
| popPK | Bernard-Beaubois_1998 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay on rabbit tenocytes, not a pharmacokinetic study, and reports no disposition parameters for nalidixic acid. |
| popPK | Bourgeois-Nicolaos_2014 | irrelevant | 0 | 0 | The study focuses on linezolid pharmacokinetics and microbiota resistance, not nalidixic acid. |
| popPK | Cedillo-Rivera_1992 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay for Giardia lamblia, not a pharmacokinetic study, and nalidixic acid is only a test compound. |
| PGx | Chatterjee_1995 | not_relevant | 0 | 0 | The study investigates in vitro hemolytic effects of quinolones on rabbit RBCs and does not report pharmacokinetic or pharmacodynamic parameters of nalidixic acid modulated by human gene variants. |
| popPK | DeMarini_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mutagenicity study in bacteriophage T4 and does not report any pharmacokinetic parameters for nalidixic acid. |
| popPK | Deza-Cruz_2023 | irrelevant | 0 | 0 | The paper reports antimicrobial resistance data for E. coli in pigs and does not contain any pharmacokinetic parameters for nalidixic acid. |
| PGx | Dixit_2014 | not_relevant | 0 | 0 | The paper reports bacterial resistance mutations (gyrA/parC) in Vibrio cholerae, not human pharmacogenomic effects on the PK or PD of nalidixic acid. |
| popPK | Dodd_1989 | irrelevant | 0 | 0 | This is an in-vitro neurochemical study investigating receptor binding and neurotransmitter effects, not a pharmacokinetic study of nalidixic acid. |
| popPK | Draveny_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antibiotic accumulation in bacteria, not a pharmacokinetic study of nalidixic acid in a host organism. |
| popPK | El-Zahed_2026 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study on a nanocomposite against P. aeruginosa, where nalidixic acid is used only as a comparator in susceptibility testing, not as a subject for pharmacokinetic analysis. |
| popPK | European_2018 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for nalidixic acid. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for nalidixic acid. |
| popPK | European_2020 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for nalidixic acid. |
| popPK | European_2021 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for nalidixic acid. |
| popPK | European_2022 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for nalidixic acid. |
| popPK | European_2023 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for nalidixic acid. |
| popPK | Fantin_2009_2 | irrelevant | 0 | 0 | The study focuses on ciprofloxacin pharmacokinetics and resistance emergence, with nalidixic acid serving only as a resistance marker/comparator, not as the subject drug for PK parameter estimation. |
| popPK | Fonkui_2019 | irrelevant | 0 | 0 | The paper is a study on the synthesis and antimicrobial activity of Schiff bases, where nalidixic acid is used only as a reference comparator for MIC values, not as a subject of pharmacokinetic analysis. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| popPK | Gifford_2019 | irrelevant | 0 | 0 | The paper is an in vitro experimental evolution study on bacterial resistance to nalidixic acid, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis patients and does not report any pharmacokinetic parameters for nalidixic acid. |
| popPK | Kaniwa_1984 | irrelevant | 0 | 0 | The provided text is software metadata (GROBID) and contains no scientific content, pharmacokinetic data, or drug information. |
| popPK | Kasuya_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (Ki values) and does not report pharmacokinetic disposition parameters for nalidixic acid. |
| popPK | Koide_2019 | irrelevant | 0 | 0 | The study is an in-vitro antibacterial activity assessment (MIC/IC50) where nalidixic acid is used only as a comparator, not a pharmacokinetic study. |
| popPK | Koide_2019_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA gyrase inhibition and MICs, not a pharmacokinetic study reporting disposition parameters for nalidixic acid. |
| popPK | Koide_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA gyrase inhibition and MICs, containing no pharmacokinetic parameters for nalidixic acid. |
| PGx | Lazo-Láscarez_2021 | not_relevant | 0 | 0 | The paper reports antimicrobial resistance in Campylobacter bacteria, not human pharmacogenomics affecting the PK/PD of nalidixic acid. |
| popPK | Lehtinen_2006 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay measuring antimicrobial activity (IC50, MBC) of nalidixic acid against bacteria, not a pharmacokinetic study of drug disposition. |
| popPK | MacKinnon_2018 | irrelevant | 0 | 0 | The study analyzes antimicrobial resistance (MIC) data for E. coli isolates, not pharmacokinetic parameters of nalidixic acid. |
| popPK | Manchal_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on Salmonella bacteraemia and climate variables, mentioning nalidixic acid only in the context of antimicrobial resistance rates, not pharmacokinetics. |
| popPK | McCallin_2026 | irrelevant | 0 | 0 | The paper is a clinical case series on phage therapy for UTIs and does not report pharmacokinetic parameters for nalidixic acid, which is only mentioned as a component of a diagnostic agar plate. |
| popPK | Mohamed_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antimicrobial activity and molecular modeling of nalidixic acid analogs, containing no pharmacokinetic data. |
| popPK | Moseley_1975 | irrelevant | 0 | 0 | The paper is a microbiology study on DNA repair in Micrococcus radiodurans where nalidixic acid is used as a chemical agent to inhibit DNA synthesis, not a pharmacokinetic study. |
| popPK | Murata_1989 | irrelevant | 3 | 0 | The paper focuses on the development of computer programs and only qualitatively discusses nalidixic acid in the context of multi-fraction absorption without providing specific numeric PK parameters in the evidence. |
| popPK | Nyhoegen_2024 | irrelevant | 0 | 0 | The paper is a theoretical pharmacodynamic model of antibiotic combination therapy and resistance evolution, containing no pharmacokinetic data or parameters for nalidixic acid. |
| popPK | Ohemeng_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study on DNA gyrase inhibition and antimicrobial activity, not a pharmacokinetic study, and nalidixic acid is used only as a comparator. |
| popPK | Oliveira_2026 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of antiparasitic effects and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Omar_2016 | irrelevant | 0 | 0 | The study evaluates the in vitro inhibitory effect of enoxacin on parasites, not the pharmacokinetics of nalidixic acid. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper discusses G6PD genotype and medication use, but does not report pharmacokinetic or pharmacodynamic parameters for nalidixic acid. |
| popPK | Pachanon_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of bacterial resistance (IC50 of DNA gyrase inhibition) and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Padinjarathil_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis of sulfonated polyether ketone membranes and in vitro drug release kinetics, not on the pharmacokinetic disposition parameters (CL, V, etc.) of nalidixic acid in a biological system. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study is an in vitro/in vivo efficacy assay against a parasite, not a pharmacokinetic study of nalidixic acid. |
| popPK | Passari_2017 | irrelevant | 0 | 0 | The paper is a microbiological study on Streptomyces cyaneofuscatus where nalidixic acid is used only as a selective agent in culture media or a reference standard for UPLC-MS/MS quantification, not as a subject of pharmacokinetic analysis. |
| popPK | Ptitsyn_1997 | irrelevant | 0 | 0 | The study is an in-vitro genotoxicity assay using E. coli, not a pharmacokinetic study of nalidixic acid. |
| PGx | Quentin_2004 | not_relevant | 0 | 0 | The paper reports bacterial antibiotic resistance rates and phenotypes, not human pharmacogenomic effects on PK/PD parameters. |
| popPK | Revel-Viravau_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of DNA gyrase inhibition and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Rothlin_1999 | irrelevant | 0 | 0 | The paper is a historic review of quinolones and does not report original quantitative pharmacokinetic parameters for nalidixic acid. |
| popPK | Sakal_2000 | irrelevant | 0 | 0 | Nalidixic acid is used only as an induction agent for protein expression in E. coli; no pharmacokinetic parameters are reported. |
| popPK | Salgado_2025 | irrelevant | 0 | 0 | The paper is a review on bacterial cytological profiling for antibiotic discovery and mentions nalidixic acid only as a historical example of a quinolone, providing no pharmacokinetic data. |
| popPK | Schujman_2001 | irrelevant | 0 | 0 | The paper is a microbiology study on Bacillus subtilis resistance to cerulenin, where nalidixic acid is only mentioned as a negative control for gene expression, with no pharmacokinetic data. |
| PGx | Shin_2021 | not_relevant | 0 | 0 | The paper reports bacterial resistance to nalidixic acid and ciprofloxacin, not human pharmacogenomic effects on drug PK/PD. |
| PGx | Smatti_2026 | not_relevant | 0 | 0 | The paper is a review that mentions the G6PD-nalidixic acid association as an actionable gene-drug pair but does not report specific pharmacokinetic or pharmacodynamic parameter changes or quantitative effect sizes for nalidixic acid. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA-A receptor binding interactions, and nalidixic acid is only a comparator antibacterial agent with no pharmacokinetic parameters reported. |
| popPK | Srivastava_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiology investigation of Mycobacterium tuberculosis diagnosis and nalidixic acid's antimicrobial efficacy, not a pharmacokinetic study. |
| popPK | Suominen_2020 | irrelevant | 0 | 0 | The paper reports in-vitro antibacterial toxicity (EC50) of nalidixic acid against E. coli, not pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The paper investigates antimicrobial resistance mechanisms in E. coli induced by flumequine and enrofloxacin, and does not report any pharmacokinetic parameters for nalidixic acid. |
| popPK | Talwar_2008 | irrelevant | 0 | 0 | The paper describes a polyherbal microbicide's in-vitro antimicrobial activity, with nalidixic acid mentioned only as a reference for bacterial resistance, and contains no pharmacokinetic data. |
| popPK | Thielmann_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA repair inhibition by topoisomerase inhibitors, not a pharmacokinetic study, and nalidixic acid is only a test compound. |
| PGx | Upton_1991_2 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and explicitly states that nalidixic acid was not found to influence theophylline disposition; it does not report pharmacogenomic effects on nalidixic acid. |
| PGx | Wain_1997 | not_relevant | 0 | 0 | The paper reports bacterial resistance mutations (gyrA) affecting drug efficacy, not human pharmacogenomic variants affecting PK or PD parameters. |
| popPK | Wiesner_2024 | irrelevant | 2 | 0 | This is a systematic review of food-drug interactions for quinolones; while it mentions nalidixic acid, it does not report original quantitative PK parameters (CL, V, ka) for the drug, only qualitative changes in AUC/Cmax. |
| popPK | Wythe_2022 | irrelevant | 0 | 0 | The study is a food safety analysis of antimicrobial treatments on chicken thighs, using nalidixic acid only as a marker for antibiotic resistance in Salmonella, not as a subject for pharmacokinetic study. |
| popPK | Ye_2016 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of PKM2 inhibition and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Zhu_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of sutezolid, not nalidixic acid. |
| popPK | Šíma_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin and its metabolites, not nalidixic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnalidixic_acid%5D&body=Drug%3A%20nalidixic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nalidixic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
