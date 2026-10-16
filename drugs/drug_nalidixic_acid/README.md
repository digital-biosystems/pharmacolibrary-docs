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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:18 | 1:29 | 0/0/0 | 1/0/1 | 0/0/0 | 115,808/3,598 | einfracz / qwen3.8-27b | 35 | 16/19 | 24/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_GI](drugs/drug_nalidixic_acid/pd_Suominen_2020_GI.md) | growth inhibition ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Suominen_2020_LI](drugs/drug_nalidixic_acid/pd_Suominen_2020_LI.md) | luminescence inhibition ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Suominen EN et al., Investigating the short- and long-term…, Heliyon (2020) | [10.1016/j.heliyon.2020.e04232](https://doi.org/10.1016/j.heliyon.2020.e04232) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2020_CFU](drugs/drug_nalidixic_acid/pd_Srivastava_2020_CFU.md) | CFU/mL ← nalidixic acid · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Effect of specimen processing, growth s…, PloS one (2020) | [10.1371/journal.pone.0230927](https://doi.org/10.1371/journal.pone.0230927) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 117 matched, 73 returned
- **screened:** 19  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
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
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T23:18:31.186998+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrade_2025 | irrelevant | 0 | 0 | The paper is a review of 4-quinolone-3-carboxamide derivatives for biological applications and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Balasundaram_2018 | irrelevant | 0 | 0 | The study is a computational drug repurposing and in-vitro antimicrobial activity analysis, not a pharmacokinetic study, and nalidixic acid is used only as a reference compound. |
| popPK | Bartolome_2006 | irrelevant | 0 | 0 | The study is an in-vitro bioassay for antigenotoxic activity using nalidixic acid as a genotoxicant, not a pharmacokinetic study. |
| PGx | Bautista_2004 | not_relevant | 0 | 0 | The paper studies the interaction between a virus and bacteria in chickens, using nalidixic acid only as a marker for antibiotic resistance, not for pharmacokinetic or pharmacodynamic analysis. |
| popPK | Behsaz_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a new natural product (edaphochelin A) for treating candidiasis and does not contain any pharmacokinetic data for nalidixic acid. |
| popPK | Bernard-Beaubois_1998 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay on rabbit tenocytes, not a pharmacokinetic study, and reports no disposition parameters for nalidixic acid. |
| popPK | Bourgeois-Nicolaos_2014 | irrelevant | 0 | 0 | The study focuses on the drug linezolid, not nalidixic acid. |
| popPK | Cedillo-Rivera_1992 | irrelevant | 0 | 0 | The study is an in-vitro susceptibility assay for Giardia lamblia, not a pharmacokinetic study, and nalidixic acid is only a test compound. |
| PGx | Chatterjee_1995 | not_relevant | 2 | 0 | The paper reports an in vitro pharmacodynamic effect of nalidixic acid on G6PD-deficient RBCs, but it describes a single genetic phenotype (G6PD deficiency) and lacks data on gene variants or genotype-based effect sizes. |
| popPK | DeMarini_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mutagenicity study in bacteriophage T4 and does not report any pharmacokinetic parameters for nalidixic acid. |
| popPK | Deza-Cruz_2023 | irrelevant | 0 | 0 | The study focuses on antimicrobial resistance patterns in E. coli and does not report pharmacokinetic parameters for nalidixic acid. |
| PGx | Dixit_2014 | not_relevant | 0 | 0 | The paper investigates the genomic origin and transmission of multidrug-resistant *Vibrio cholerae* bacteria, not the pharmacogenomics of human patients or how human gene variants affect the pharmacokinetics or pharmacodynamics of nalidixic acid. |
| popPK | Dodd_1989 | irrelevant | 0 | 0 | The study investigates the neurochemical effects (binding inhibition) of nalidixic acid in rat brain membranes, reporting no pharmacokinetic disposition parameters. |
| popPK | Draveny_2026 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on antibiotic adjuvants in bacteria, where nalidixic acid is only listed as a comparator antibiotic in MIC assays, and no pharmacokinetic parameters for nalidixic acid are reported. |
| popPK | El-Zahed_2026 | irrelevant | 0 | 0 | The paper is a materials science/microbiology study on a nanocomposite against P. aeruginosa, where nalidixic acid is used only as a reference antibiotic in susceptibility testing, not as a subject of pharmacokinetic study. |
| popPK | European_2018 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria, containing no pharmacokinetic data for nalidixic acid. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper is an epidemiological report on antimicrobial resistance in bacteria, not a pharmacokinetic study of nalidixic acid. |
| popPK | European_2020 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria, not a pharmacokinetic study, and contains no PK parameters for nalidixic acid. |
| popPK | European_2021 | irrelevant | 0 | 0 | The paper is a summary report on antimicrobial resistance in bacteria and does not contain any pharmacokinetic data for nalidixic acid. |
| popPK | European_2022 | irrelevant | 0 | 0 | The paper is an antimicrobial resistance surveillance report focusing on bacteria, not a pharmacokinetic study of nalidixic acid. |
| popPK | European_2023 | irrelevant | 0 | 0 | This is a surveillance report on antimicrobial resistance in bacteria, containing no pharmacokinetic data for nalidixic acid. |
| popPK | Fantin_2009_2 | irrelevant | 0 | 0 | The study focuses on ciprofloxacin pharmacokinetics and resistance emergence, with nalidixic acid serving only as a resistance marker/comparator, not as the subject drug for PK parameter estimation. |
| popPK | Fonkui_2019 | irrelevant | 0 | 0 | The paper is a study on the synthesis and antimicrobial activity of Schiff bases, where nalidixic acid is used only as a reference comparator for MIC values, not as a subject of pharmacokinetic analysis. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| popPK | Gifford_2019 | irrelevant | 0 | 0 | The paper is an experimental evolution and resistance study in E. coli, not a pharmacokinetic study of nalidixic acid. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on leptospirosis and does not contain pharmacokinetic data for nalidixic acid. |
| popPK | Kaniwa_1984 | irrelevant | 0 | 0 | The provided text consists solely of software metadata (GROBID) and contains no scientific content, pharmacokinetic parameters, or study details regarding nalidixic acid. |
| popPK | Kasuya_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (Ki values) and does not report pharmacokinetic disposition parameters for nalidixic acid. |
| popPK | Koide_2019 | irrelevant | 0 | 0 | The study is an in-vitro antibacterial activity assessment (MIC/IC50) where nalidixic acid is used only as a comparator, not a pharmacokinetic study. |
| popPK | Koide_2019_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA gyrase inhibition and MICs, not a pharmacokinetic study reporting disposition parameters for nalidixic acid. |
| popPK | Koide_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA gyrase inhibition and MICs, containing no pharmacokinetic parameters for nalidixic acid. |
| PGx | Lazo-Láscarez_2021 | not_relevant | 0 | 0 | The paper analyzes antimicrobial resistance in bacteria, not human pharmacogenomics affecting drug PK or PD. |
| popPK | Lehtinen_2006 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay measuring antimicrobial activity (IC50, MBC) of nalidixic acid against bacteria, not a pharmacokinetic study of drug disposition. |
| popPK | MacKinnon_2018 | irrelevant | 0 | 0 | The study analyzes antimicrobial resistance (MIC) data for E. coli, not the pharmacokinetics of nalidixic acid. |
| popPK | Manchal_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on Salmonella bacteraemia and climate variables, mentioning nalidixic acid only in the context of antimicrobial resistance rates, not pharmacokinetics. |
| popPK | McCallin_2026 | irrelevant | 0 | 0 | The paper describes phage therapy for urinary tract infections; nalidixic acid is mentioned only as a component of a diagnostic agar plate (CNA) and not as a subject of pharmacokinetic analysis. |
| popPK | Mohamed_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antimicrobial activity and molecular modeling of nalidixic acid analogs, containing no pharmacokinetic data. |
| popPK | Moseley_1975 | irrelevant | 0 | 0 | The paper is a microbiology study on DNA repair in Micrococcus radiodurans where nalidixic acid is used as a chemical agent to inhibit DNA synthesis, not a pharmacokinetic study. |
| popPK | Murata_1989 | irrelevant | 1 | 0 | The study is a methods paper describing a computer program, and while nalidixic acid is mentioned as a test case, no specific quantitative PK parameter values are provided in the evidence. |
| popPK | Nyhoegen_2024 | irrelevant | 0 | 0 | The paper is a theoretical pharmacodynamic model of antibiotic combination therapy and resistance evolution; it contains no pharmacokinetic data for nalidixic acid. |
| popPK | Ohemeng_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study on DNA gyrase inhibition and antimicrobial activity, not a pharmacokinetic study, and nalidixic acid is used only as a comparator. |
| popPK | Oliveira_2026 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of antiparasitic effects and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Omar_2016 | irrelevant | 0 | 0 | The study evaluates the in vitro inhibitory effect of enoxacin on parasites, not the pharmacokinetics of nalidixic acid. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper discusses G6PD genotype guidelines, which is unrelated to nalidixic acid pharmacokinetics or pharmacodynamics. |
| popPK | Pachanon_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of bacterial resistance (IC50 of DNA gyrase inhibition) and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Padinjarathil_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis of sulfonated polyether ketone membranes and in vitro drug release kinetics, not on the pharmacokinetic disposition parameters (CL, V, etc.) of nalidixic acid in a biological system. |
| popPK | Park_2014 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| popPK | Passari_2017 | irrelevant | 0 | 0 | The paper is a microbiological study on Streptomyces cyaneofuscatus where nalidixic acid is used only as a selective agent in culture media or a reference standard for UPLC-MS/MS quantification, not as a subject of pharmacokinetic analysis. |
| popPK | Ptitsyn_1997 | irrelevant | 0 | 0 | The study is an in-vitro genotoxicity assay using E. coli, not a pharmacokinetic study of nalidixic acid. |
| PGx | Quentin_2004 | not_relevant | 0 | 0 | The study reports bacterial resistance rates and phenotypes, not pharmacogenomic effects on host PK/PD parameters. |
| popPK | Revel-Viravau_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of DNA gyrase inhibition and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Rothlin_1999 | irrelevant | 0 | 0 | The paper is a historic review of quinolones and does not report original quantitative pharmacokinetic parameters for nalidixic acid. |
| popPK | Sakal_2000 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Salgado_2025 | irrelevant | 0 | 0 | The paper is a review on bacterial cytological profiling for antibiotic discovery and only mentions nalidixic acid historically as the first quinolone; it contains no pharmacokinetic data. |
| popPK | Schujman_2001 | irrelevant | 0 | 0 | The paper is a microbiology study on Bacillus subtilis resistance to cerulenin, where nalidixic acid is only mentioned as a negative control for gene expression, with no pharmacokinetic data. |
| PGx | Shin_2021 | not_relevant | 0 | 0 | The paper focuses on antimicrobial resistance and genotyping of Salmonella Typhi strains, not on human pharmacogenomics or PK/PD parameters for nalidixic acid. |
| PGx | Smatti_2026 | not_relevant | 4 | 0 | The paper mentions G6PD-nalidixic acid as a clinically actionable gene-drug pair related to adverse events (hemolysis) but provides no specific pharmacokinetic or pharmacodynamic parameters or quantitative effect sizes for nalidixic acid in the provided text. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | no_text gate: only 231 chars of text extracted (&lt; 400) |
| popPK | Srivastava_2020 | irrelevant | 0 | 0 | The study is an in vitro microbiological analysis of Mycobacterium tuberculosis growth and decontamination, where nalidixic acid is used as a decontaminant rather than being the subject of a pharmacokinetic study. |
| popPK | Suominen_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay measuring antibacterial activity (EC50) of nalidixic acid on E. coli, not a pharmacokinetic study. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The paper investigates antimicrobial resistance mechanisms of flumequine in E. coli and mentions nalidixic acid only as a historical compound in the introduction, containing no pharmacokinetic data for nalidixic acid. |
| popPK | Talwar_2008 | irrelevant | 0 | 0 | The paper is an in-vitro microbicide study where nalidixic acid is only mentioned as a reference for antibiotic resistance, with no pharmacokinetic data provided. |
| popPK | Thielmann_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA repair inhibition by topoisomerase inhibitors, not a pharmacokinetic study, and nalidixic acid is only a test compound. |
| PGx | Upton_1991_2 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions of theophylline and lists nalidixic acid as a drug that does not influence theophylline disposition, but it does not report any pharmacogenomic effects on nalidixic acid's PK or PD. |
| PGx | Wain_1997 | not_relevant | 0 | 0 | The paper reports bacterial resistance mechanisms (gyrA mutations in Salmonella typhi) affecting clinical response to nalidixic acid/ofloxacin, not human pharmacogenomic variants affecting the drug's PK or PD parameters. |
| popPK | Wiesner_2024 | irrelevant | 2 | 0 | This is a systematic review of food-drug interactions for quinolones; while it mentions nalidixic acid, it does not report original quantitative PK parameters (CL, V, ka) for the drug, only qualitative changes in AUC/Cmax. |
| popPK | Wythe_2022 | irrelevant | 0 | 0 | The paper is a food safety study on antimicrobial reduction of Salmonella on chicken thighs; nalidixic acid is only used as a selective antibiotic to differentiate a resistant Salmonella strain, not as a drug subject to pharmacokinetic analysis. |
| popPK | Ye_2016 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of PKM2 inhibition and does not report pharmacokinetic parameters for nalidixic acid. |
| popPK | Zhu_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of sutezolid, not nalidixic acid. |
| popPK | Šíma_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin and its metabolites, not nalidixic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
