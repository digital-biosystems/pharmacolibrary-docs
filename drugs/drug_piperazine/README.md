<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;piperazine&quot;}]"></div>

# piperazine

- **generic name:** piperazine
- **ATC codes:** `P02CB01`
- **DrugBank:** [DB00592](https://go.drugbank.com/drugs/DB00592) · **PubChem:** [CID 4837](https://pubchem.ncbi.nlm.nih.gov/compound/4837)
- **molar mass:** 86.1356 g/mol (C4H10N2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Piperazine is an antinematodal agent used to treat parasitic worm infections. It is administered orally in various forms such as syrups, powders, or capsules. The drug has been withdrawn from human markets and is now used mainly in veterinary medicine.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q409292](https://www.wikidata.org/wiki/Q409292), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Reis_2026_CPE_inhibition](drugs/drug_piperazine/pd_Reis_2026_CPE_inhibition.md) | Protection against MAYV-induced cytopathic effect (cell viability, MTT) ← D7 (dihydroeugenol-derived piperazine Mannich base) · direct sigmoid Emax (Hill) effect | — | Reis ACC et al., Eugenol-Derived Piperazine Mannich Base…, Journal of medical virology (2026) | [10.1002/jmv.71158](https://doi.org/10.1002/jmv.71158) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Li_2013_PrPSc](drugs/drug_piperazine/pd_Li_2013_PrPSc.md) | PrPSc level biomarker turnover ← Arylpiperazines | — | Li Z et al., Discovery and Preliminary SAR of Arylpi…, ACS medicinal chemistry let… (2013) | [10.1021/ml300472n](https://doi.org/10.1021/ml300472n) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:23 | 0:05 | 0/0/0 | 2/0/0 | 0/0/0 | 3,872/167 | einfracz / qwen3.8-27b | 46 | 2/44 | 46/0 | 0 |

## Coverage

- **PubMed hits:** 1737 matched, 190 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Achira_1999 | irrelevant | 0 | 0 | The paper focuses on P-gp and CYP3A4 inhibition mechanisms using vinblastine and midazolam, with "piperazine" appearing only as part of a chemical name (L-754,394) rather than as the subject drug. |
| PGx | Achira_1999 | not_relevant | 0 | 0 | The paper investigates selective inhibitors of P-gp and CYP3A4 and does not report pharmacogenomic effects on piperazine. |
| popPK | Alexandre_2025 | irrelevant | 0 | 0 | This is an in vitro study of delafloxacin/ciprofloxacin activity against E. coli; piperazine is only mentioned as a chemical substituent, and PK parameters are in supplementary material not provided. |
| popPK | Alihodzic_2022 | irrelevant | 0 | 0 | This is a population-PK study of ciprofloxacin in ECMO patients; piperazine is not the subject drug and no piperazine parameters appear. |
| popPK | Arbo_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cytotoxicity in cells, not a pharmacokinetic study, and reports no disposition parameters for piperazine. |
| PGx | Arbo_2014 | not_relevant | 0 | 0 | The paper investigates general cytotoxicity and cellular mechanisms in a cell line, not the effect of genetic variants on PK or PD parameters in humans. |
| popPK | Areberg_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Lu AA21004 (a drug containing a piperazine moiety), not piperazine itself, and does not report PK parameters for piperazine. |
| PGx | Areberg_2012 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics of Lu AA21004 (an antidepressant) and does not involve piperazine or any pharmacogenomic analysis. |
| popPK | Arevalo_2026 | irrelevant | 0 | 0 | The paper is a review of ENA-001 and does not report pharmacokinetic parameters for piperazine (only mentioning almitrine as a piperazine derivative historically). |
| PGx | Arevalo_2026 | not_relevant | 0 | 0 | The paper reviews ENA-001 and does not discuss piperazine or pharmacogenomic effects. |
| popPK | Ashok_2015 | irrelevant | 0 | 0 | The study focuses on the synthesis and anti-HIV activity of chemical compounds containing a piperazine moiety, not the pharmacokinetics of the drug piperazine. |
| PGx | Ashok_2015 | not_relevant | 0 | 0 | The paper reports the synthesis and anti-HIV activity of new β-carboline derivatives containing a piperazine moiety, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug piperazine. |
| popPK | Ayan_2014 | irrelevant | 0 | 0 | The paper studies a new aminosteroid derivative (RM-133) containing a piperazine moiety, not piperazine itself as the drug, and reports no PK parameters for piperazine. |
| PGx | Ayan_2014 | not_relevant | 0 | 0 | The paper reports the chemical synthesis and pharmacokinetics of 5α-androstane derivatives, with no pharmacogenomic (gene variant) data. |
| popPK | Ayodeji_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and imaging properties of ARi-FL (a fluorescent androgen receptor inhibitor) in mice, not the drug piperazine. |
| PGx | Ayodeji_2025 | not_relevant | 0 | 0 | The paper focuses on androgen receptor imaging probes and prostate cancer, not the pharmacokinetics or pharmacodynamics of piperazine. |
| popPK | Bakaryan_2021 | irrelevant | 0 | 0 | The paper focuses on the in vitro inhibitory activity of piperazine derivatives on adenosine deaminase, not on the pharmacokinetics of piperazine itself. |
| PGx | Bakaryan_2021 | not_relevant | 0 | 0 | The paper describes the in vitro pharmacodynamic activity of a piperazine derivative as an enzyme inhibitor, with no mention of gene variants affecting drug pharmacokinetics or pharmacodynamics. |
| popPK | Baumann_2004 | irrelevant | 0 | 0 | The study investigates neurochemical mechanisms (dopamine/serotonin release) in rat brain and does not report pharmacokinetic parameters such as clearance or volume for piperazine. |
| PGx | Baumann_2004 | not_relevant | 0 | 0 | The paper describes the neurochemical effects of piperazine analogs in rat brain, not pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Bolles_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 inhibition by piperazine-containing compounds, reporting no pharmacokinetic parameters for the drug piperazine. |
| PGx | Bolles_2014 | not_relevant | 0 | 0 | The study investigates mechanism-based inactivation of CYP3A4 by specific piperazine-containing compounds and does not report pharmacogenomic effects (gene variants) on pharmacokinetics or pharmacodynamics. |
| popPK | Bouhelal_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of 5-HT1B receptors in rat brain tissue using various drugs, not the pharmacokinetics of the drug piperazine. |
| PGx | Bouhelal_1988 | not_relevant | 0 | 0 | The paper describes general receptor pharmacology in rat tissue and does not report any pharmacogenomic effects on piperazine PK/PD parameters. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | This is a structural/medicinal chemistry study of a pyridylpiperazine efflux pump inhibitor (BDM91531) binding to bacterial AcrB; piperazine is only a chemical scaffold, and no PK disposition parameters for piperazine are reported. |
| popPK | Caley_2002 | irrelevant | 0 | 0 | The paper is a review of ziprasidone, not piperazine, and piperazine is only mentioned as a structural component ("piperazine-type") of the drug ziprasidone. |
| PGx | Caley_2002 | not_relevant | 0 | 0 | The paper reviews the pharmacology and pharmacokinetics of ziprasidone, but it does not report a pharmacogenomic effect on the PK/PD of piperazine. |
| popPK | Cao_2013 | irrelevant | 0 | 0 | The study investigates the synthesis and in vitro antiproliferative activity of chemical compounds containing piperazine rings, not the pharmacokinetics of the drug piperazine. |
| PGx | Cao_2013 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro antiproliferative activity of piperazine-containing compounds against cancer cell lines, but does not report a pharmacogenomic effect on the PK/PD of piperazine itself. |
| popPK | Chander_2016 | irrelevant | 0 | 0 | The study focuses on the anti-HIV and antimicrobial activity of piperazine-containing derivatives, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Chander_2016 | not_relevant | 0 | 0 | The paper describes the design and synthesis of novel piperazine-based compounds for anti-HIV activity, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Chandran_2015 | irrelevant | 0 | 0 | The paper investigates benzothiazinone-piperazine derivatives as *Mycobacterium tuberculosis* DNA gyrase inhibitors and does not report pharmacokinetic parameters for the drug piperazine. |
| PGx | Chandran_2015 | not_relevant | 0 | 0 | The paper describes in vitro antibacterial activity and enzyme inhibition of benzothiazinone-piperazine derivatives against M. tuberculosis, with no mention of human pharmacokinetics, pharmacodynamics, or pharmacogenomics. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on synthetic carbazole derivatives where "piperazine" refers to a chemical ring structure, not the drug piperazine, and contains no pharmacokinetic data. |
| PGx | Chen_2019 | not_relevant | 0 | 0 | The paper reports in vitro activity of a piperazine-containing chemical derivative against cancer cells, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal activity and mechanism of synthetic acrylamide derivatives, not the pharmacokinetics of piperazine. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper reports the synthesis and antifungal activity of piperazine-containing acrylamide derivatives, but contains no data on pharmacogenomics, gene variants, or human pharmacokinetics/pharmacodynamics of piperazine. |
| popPK | Cherstniakova_2001 | irrelevant | 0 | 0 | The study investigates the metabolism of vanoxerine (a piperazine derivative), not piperazine itself, and is an in-vitro mechanistic study without population PK parameters. |
| PGx | Cherstniakova_2001 | not_relevant | 0 | 0 | The study investigates the metabolism of vanoxerine (GBR12909) and does not report pharmacogenomic effects for piperazine. |
| popPK | Chikhale_2026 | irrelevant | 0 | 0 | The paper focuses on the in silico identification of natural compounds targeting *Mycobacterium tuberculosis* thymidylate kinase and contains no data regarding the pharmacokinetics of piperazine. |
| PGx | Chikhale_2026 | not_relevant | 0 | 0 | The paper is a computational study on Mycobacterium tuberculosis drug discovery and does not mention piperazine or human pharmacogenomics. |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper is a machine learning study on HIV-1 drug repurposing and does not report any pharmacokinetic parameters for piperazine. |
| PGx | Chirila_2026 | not_relevant | 0 | 0 | The paper is about machine learning drug repurposing for HIV-1 and does not discuss piperazine pharmacogenomics or PK/PD parameters. |
| popPK | Chopra_2016 | irrelevant | 0 | 0 | This is an in-vitro cell biology study of a piperazine-derived compound (AK301) in cancer cell lines, with no pharmacokinetic parameters for piperazine. |
| popPK | Cummins_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of Caco-2 cells using a piperazine-derivative (K77) and felodipine, not a population PK study for the drug piperazine. |
| PGx | Cummins_2002 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (P-gp/CYP3A4 inhibition) in vitro, not the effect of a gene variant/genotype on PK/PD. |
| popPK | De_1990 | irrelevant | 0 | 0 | The paper is a study on 5-HT receptor pharmacology and adenylyl cyclase activity, with no pharmacokinetic or disposition parameters reported for piperazine. |
| PGx | De_1990 | not_relevant | 0 | 0 | The paper investigates serotonin receptor pharmacology and does not report pharmacogenomic effects on piperazine PK/PD parameters. |
| popPK | De_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on tyrosinase inhibitors containing a piperazine moiety, not a pharmacokinetic study of the drug piperazine. |
| PGx | De_2020 | not_relevant | 0 | 0 | The paper describes the synthesis and tyrosinase inhibition activity of a chemical compound containing a piperazine moiety, but it does not report on the pharmacokinetics or pharmacodynamics of the drug piperazine or any pharmacogenomic effects. |
| popPK | Desroy_2017 | irrelevant | 0 | 0 | The paper describes a novel autotaxin inhibitor (GLPG1690), and piperazine is merely a structural moiety in the chemical name, not the subject of a pharmacokinetic study. |
| PGx | Desroy_2017 | not_relevant | 0 | 0 | The paper describes the discovery of a novel autotaxin inhibitor (GLPG1690) containing a piperazine functional group, but it does not discuss the pharmacokinetics of the drug piperazine itself, nor does it report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Dietrich-Muszalska_2025 | irrelevant | 0 | 0 | In-vitro study of curcumin/ziprasidone lipid peroxidation in human plasma; piperazine is only mentioned as a chemical moiety of ziprasidone, with no PK parameters. |
| popPK | Draveny_2025 | irrelevant | 0 | 0 | The paper studies the intracellular accumulation of ciprofloxacin (a fluoroquinolone) in E. coli and mentions the piperazine ring only as part of the ciprofloxacin molecular structure; it does not study the drug piperazine. |
| PGx | Draveny_2025 | not_relevant | 0 | 0 | The paper focuses on bacterial efflux pumps and antibiotic accumulation in Escherichia coli, not on human pharmacogenomics or piperazine. |
| popPK | Dziubina_2026 | irrelevant | 0 | 0 | Piperazine appears only as a chemical building block in the synthesis of the test compounds DSZ-13/DSZ-19; the reported PK parameters (CL, Vz, AUC) are for those derivatives, not piperazine. |
| popPK | Edache_2026 | irrelevant | 0 | 0 | Computational docking/ADMET study of gastric H+/K+-ATPase inhibitors; piperazine is only mentioned as a ring in ciprofloxacin, with no PK parameters for piperazine. |
| popPK | Feng_2018 | irrelevant | 0 | 0 | The paper studies a piperazine derivative (E1231) as a SIRT1 activator for atherosclerosis, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Feng_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a novel SIRT1 activator (E1231) on lipid metabolism and does not report any pharmacogenomic effects on the PK/PD of piperazine. |
| popPK | Fernández-Guasti_1992 | irrelevant | 0 | 0 | The study investigates the behavioral effects of serotonin agonists (including TFMPP, a piperazine derivative) on rat sexual behavior and does not report any pharmacokinetic parameters for piperazine. |
| PGx | Fernández-Guasti_1992 | not_relevant | 0 | 0 | The paper studies the behavioral effects of serotonin agonists on male rats and does not report pharmacogenomic effects on PK or PD parameters of piperazine. |
| PGx | Fernández_2020 | not_relevant | 0 | 0 | Paper reports antiviral drug design against BVDV; no host/viral gene variant effect on piperazine PK/PD parameters. |
| popPK | Foo_2015 | irrelevant | 0 | 0 | The study investigates meclizine and its effect on CYP3A4; piperazine is only mentioned as a structural feature of meclizine, not as the subject drug for PK analysis. |
| PGx | Foo_2015 | not_relevant | 0 | 0 | The paper investigates the CYP3A inhibitory properties of meclizine, not the pharmacokinetics or pharmacodynamics of piperazine. |
| popPK | Francke_1979 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for piperacillin (a piperazine derivative antibiotic), not piperazine (the anthelmintic). |
| PGx | Francke_1979 | not_relevant | 0 | 0 | The study reports standard pharmacokinetic parameters for piperacillin in hemodialysis patients without investigating genetic variants or pharmacogenomic influences. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The paper describes the discovery of piperazine-derived compounds as antiviral inhibitors, not the pharmacokinetics of the drug piperazine. |
| PGx | Gao_2022 | not_relevant | 0 | 0 | The paper reports the discovery of new piperazine derivatives as antiviral drugs, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Gee_2005 | irrelevant | 0 | 0 | The paper is a clinical toxicology study regarding 1-benzylpiperazine (BZP) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for piperazine. |
| PGx | Gee_2005 | not_relevant | 0 | 0 | The study describes clinical toxicity of BZP but does not report any specific gene variant or genotype affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Genin_1996 | irrelevant | 0 | 0 | The paper describes the synthesis and bioactivity of piperazine-based antiviral compounds, not the pharmacokinetics of the drug piperazine. |
| PGx | Genin_1996 | not_relevant | 0 | 0 | The paper discusses the synthesis and metabolic stability of bis(heteroaryl)piperazine (BHAP) HIV inhibitors, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Ghosh_2010 | irrelevant | 0 | 0 | The paper describes the development of a piperazine-containing synthetic drug as a D3 receptor agonist, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Ghosh_2010 | not_relevant | 0 | 0 | The paper reports pharmacological activity and SAR of D3 agonists, but contains no pharmacogenomic analysis or gene variant effects on PK/PD parameters. |
| popPK | Greenblatt_2003 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of gepirone, not piperazine; the mention of a piperazine derivative is merely a metabolite name, not the subject drug. |
| PGx | Greenblatt_2003 | not_relevant | 0 | 0 | The paper discusses the metabolism of gepirone, not piperazine, and does not report genetic variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Gudisela_2017 | irrelevant | 0 | 0 | The paper concerns the synthesis of chemical derivatives containing a piperazine ring and their in vitro anticancer activity, not the pharmacokinetics of the drug piperazine. |
| PGx | Gudisela_2017 | not_relevant | 0 | 0 | The paper reports the synthesis and anticancer activity of piperazine derivatives, not the pharmacogenomics of piperazine itself. |
| popPK | Gunduz_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of a Hedgehog pathway inhibitor (containing a piperazine moiety) and does not report pharmacokinetic parameters for the drug piperazine itself. |
| PGx | Gunduz_2012 | not_relevant | 0 | 0 | The paper describes the metabolic pathway of a novel Hedgehog pathway inhibitor, not a pharmacogenomic effect on piperazine. |
| popPK | Guo_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the opioid agonist AZD2327 and its metabolite, not the drug piperazine, despite the parent compound containing a piperazine moiety. |
| PGx | Guo_2015 | not_relevant | 0 | 0 | The paper discusses a PBPK model for drug-drug interactions involving AZD2327 and midazolam; it does not report pharmacogenomic effects on piperazine. |
| popPK | Hamik_1989 | irrelevant | 0 | 0 | The paper describes the receptor binding affinity (pharmacodynamics) of mCPP in human brain membranes, not the pharmacokinetic disposition of piperazine. |
| PGx | Hamik_1989 | not_relevant | 0 | 0 | The paper describes the receptor binding profile of mCPP but does not report pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Han_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro fungicidal activity of piperazine-containing derivatives, not a pharmacokinetic study of the drug piperazine. |
| PGx | Han_2020 | not_relevant | 0 | 0 | The paper reports the synthesis and fungicidal activity of piperazine derivatives, not pharmacogenomics of the drug piperazine. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper is a chemotaxonomic study focusing on the isolation and structure elucidation of new natural products (goondazines/goondastatins) and their in-vitro anthelmintic activity, with no pharmacokinetic parameters reported. |
| PGx | Han_2026 | not_relevant | 0 | 0 | The paper reports the isolation of piperazine-based natural products and their in vitro activity, but it does not study pharmacokinetics or pharmacodynamics. |
| popPK | Harada_1994 | irrelevant | 0 | 0 | The study investigates receptor binding of an anti-ulcer agent (KB-5492) containing a piperazine moiety, not the pharmacokinetics of piperazine itself. |
| PGx | Harada_1994 | not_relevant | 0 | 0 | The paper studies the receptor binding profile of a novel compound (KB-5492) and contains no pharmacogenomic data regarding piperazine or any other drug. |
| popPK | He_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry SAR paper on chlorcyclizine derivatives; piperazine is only a structural moiety, and PK parameters (half-lives, AUC) are for CCZ analogues, not piperazine itself. |
| popPK | He_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of bivalent compounds containing a piperazine ring as a structural spacer, not the pharmacokinetics of the drug piperazine. |
| PGx | He_2019 | not_relevant | 0 | 0 | The paper describes the pharmacological activity of bivalent compounds with piperazine rings, not the pharmacokinetics or pharmacodynamics of piperazine itself, and contains no pharmacogenomic data. |
| PGx | Hermann_2021 | not_relevant | 0 | 0 | Medicinal chemistry SAR study of antimalarial compounds; no gene variant/genotype/phenotype effects on PK or PD parameters. |
| popPK | Hong_2026 | irrelevant | 0 | 0 | The paper is a computational study on molecular property prediction models (HimNet) and does not report pharmacokinetic parameters for piperazine. |
| PGx | Hong_2026 | not_relevant | 0 | 0 | The paper describes a machine learning model for molecular property prediction and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of piperazine. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (TRPV1 antagonism) of novel piperazine urea derivatives, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Hu_2021 | not_relevant | 0 | 0 | The paper reports the design and synthesis of novel piperazine-based TRPV1 antagonists, not the pharmacokinetics or pharmacodynamics of the drug piperazine itself, and contains no genetic variant data. |
| PGx | Hu_2022 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on piperazine PK/PD are reported; the paper evaluates the pleuromutilin derivative Z33's antibacterial activity, CYP inhibition, and toxicity without pharmacogenomic analysis. |
| popPK | Hughes_2026 | irrelevant | 0 | 0 | This is an imaging-probe photophysics study (LightOx diarylacetylenes); piperazine appears only as a chemical donor moiety, with no PK parameters. |
| popPK | Hvenegaard_2012 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of the antidepressant Lu AA21004 (a piperazine derivative), not the pharmacokinetics of the drug piperazine itself. |
| PGx | Hvenegaard_2012 | not_relevant | 0 | 0 | The paper describes the in vitro metabolism of the drug Lu AA21004 but does not report any pharmacogenomic effects of gene variants on its PK or PD parameters. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of SARS-CoV-2 PLpro inhibitors; piperazine is only a chemical substructure in synthesized compounds, with no PK parameters for piperazine itself. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | In silico peptide–ligand conjugate design for Nipah virus; piperazine is not the subject drug and no PK disposition parameters for it appear. |
| PGx | Jeong_2015 | not_relevant | 2 | 3 | In vitro enzyme characterization of evogliptin metabolism; no gene variant/genotype effect on a PK/PD parameter is reported, only speculative polymorphism implications. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper studies a different compound (FNDR-20081) which merely contains a piperazine ring in its structure, and is an in-vitro/animal microbiology study, not a pharmacokinetic study of the drug piperazine. |
| PGx | Kaur_2021 | not_relevant | 0 | 0 | The study does not report a pharmacogenomic effect on the PK/PD of piperazine. |
| popPK | Kaushal_2011 | irrelevant | 0 | 0 | The paper studies the pharmacology of SN79, a novel cocaine antagonist compound, not the drug piperazine, and provides no population pharmacokinetic parameters for piperazine. |
| PGx | Kaushal_2011 | not_relevant | 0 | 0 | The paper evaluates the pharmacology of a novel cocaine antagonist (SN79) and does not report any pharmacogenomic effects on the PK/PD parameters of piperazine. |
| popPK | Kaya_2017 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro MAO inhibitory activity of piperazine-carbodithioate derivatives, not the pharmacokinetics of the drug piperazine. |
| PGx | Kaya_2017 | not_relevant | 0 | 0 | The paper reports the synthesis and MAO-A inhibitory activity of piperazine derivatives; it does not study the pharmacogenomics of the drug piperazine itself. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The paper studies sildenafil metabolism in human liver microsomes and mentions the piperazine ring only as a structural component of the metabolites, rather than investigating piperazine's own pharmacokinetics. |
| PGx | Kim_2018 | not_relevant | 0 | 0 | The paper studies the metabolism of sildenafil, not piperazine, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Kucwaj-Brysz_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of MF-8 (a 5-HT7R antagonist), not the drug piperazine itself. |
| PGx | Kucwaj-Brysz_2021 | not_relevant | 0 | 0 | The study focuses on a piperazine-containing drug (MF-8), not the drug piperazine, and investigates stereochemistry rather than human genetic variants. |
| popPK | La_2024 | irrelevant | 0 | 0 | The paper describes piperazine derivatives as enzyme inhibitors in Leishmania, not the pharmacokinetics of the drug piperazine. |
| PGx | La_2024 | not_relevant | 0 | 0 | The paper reports on the in vitro pharmacodynamic activity of piperazine-based compounds as enzyme inhibitors against Leishmania, with no mention of human pharmacogenomics or the influence of genetic variants on drug PK/PD. |
| popPK | Lai_1991 | irrelevant | 0 | 0 | The study characterizes serotonin receptors in rat coronary arteries using piperazine derivatives as receptor agonists, not piperazine itself as a subject drug for PK analysis. |
| PGx | Lai_1991 | not_relevant | 0 | 0 | The study focuses on serotonin receptor pharmacology in rat coronary arteries and does not report any pharmacogenomic effect on the PK or PD of piperazine. |
| popPK | Lamberg_1998 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of buspirone and its metabolite 1-PP, with no data on piperazine. |
| PGx | Lamberg_1998 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (fluvoxamine on buspirone) and does not involve piperazine or any pharmacogenomic analysis. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | This is a population PK study of levofloxacin; piperazine is only mentioned as a structural moiety (N-methylated piperazine ring) of levofloxacin, not the subject drug. |
| popPK | Leopoldo_2007 | irrelevant | 0 | 0 | The study investigates structure-activity relationships for 5-HT7 receptor agonists containing a piperazine ring structure, not the pharmacokinetics of the drug piperazine. |
| PGx | Leopoldo_2007 | not_relevant | 0 | 0 | The paper reports in vitro structure-activity relationships for 5-HT7 receptor ligands, not pharmacogenomic effects on the PK or PD of piperazine. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cinnarizine (a piperazine derivative), not for piperazine itself. |
| PGx | Li_2010 | not_relevant | 0 | 0 | The study does not report pharmacogenomic effects on piperazine; it compares pharmacokinetics of cinnarizine by route of administration in dogs. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper investigates the mechanism of CYP3A4 induction by an IGF-1R inhibitor (BMS-665351) and does not report pharmacokinetic parameters for piperazine. |
| PGx | Li_2012 | not_relevant | 0 | 0 | The paper discusses the mechanism of CYP3A4 induction by an IGF-1R inhibitor (BMS-665351), not a pharmacogenomic effect on piperazine. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on arylpiperazine derivatives as drug candidates, not a pharmacokinetic study of the drug piperazine itself. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The paper focuses on the pharmacological activity and drug design of arylpiperazine compounds for prion diseases and does not report on piperazine pharmacokinetics or pharmacodynamics in relation to gene variants. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of orbitazine, a different drug, with piperazine mentioned only as a structural moiety. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper studies the metabolism of the anticancer agent orbitazine (a derivative containing a piperazine ring), not the drug piperazine itself, and does not report pharmacogenomic effects on PK/PD. |
| popPK | Limberger_1991 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of alpha-2 adrenoceptors in rabbit brain cortex and does not report pharmacokinetic parameters for piperazine. |
| PGx | Limberger_1991 | not_relevant | 0 | 0 | The paper investigates alpha-2 adrenoceptor subtypes in rabbit brain and does not involve piperazine as the drug of interest, nor does it report pharmacogenomic effects on its PK or PD parameters. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study focuses on piperazine derivatives as chemical structures for Akt inhibitors in vitro, not on the pharmacokinetics of the drug piperazine. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro inhibition of Akt by piperazine derivatives, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | Piperazine is mentioned only as part of the chemical name of an Ebola virus inhibitor, not as the subject drug being studied for pharmacokinetics. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The paper describes the development of piperazine-based Ebola inhibitors and their interaction with CYP3A4, but does not report a pharmacogenomic effect (genotype/variant) on a PK/PD parameter. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro anticancer activity of piperazine-containing derivatives, containing no pharmacokinetic data for piperazine itself. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper reports the synthesis and anticancer activity of piperazine derivatives as new drugs, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and antifungal activity of chemical compounds containing a piperazine ring, not the pharmacokinetics of the drug piperazine. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper describes the antifungal activity of synthesized flavonol derivatives containing a piperazine fragment, not the pharmacokinetics or pharmacodynamics of the drug piperazine, and contains no pharmacogenomic data. |
| popPK | Livezey_2012 | irrelevant | 0 | 0 | The study investigates the inactivation of CYP2D6 by drugs containing piperazine rings (like SCH66712), not the pharmacokinetics of piperazine itself. |
| PGx | Livezey_2012 | not_relevant | 0 | 0 | The paper analyzes CYP2D6 inhibition by various compounds containing piperazine rings, but it does not report on the pharmacokinetics or pharmacodynamics of piperazine itself, nor does it report any pharmacogenomic effects. |
| popPK | Lunghini_2026 | irrelevant | 0 | 0 | This is a computational chemistry paper describing a metabolite prediction software (MetabolEx) and contains no pharmacokinetic data or parameters for piperazine. |
| PGx | Lunghini_2026 | not_relevant | 0 | 0 | The paper presents a computational platform for metabolic pathway prediction and contains no data on genetic variants or pharmacogenomic effects. |
| popPK | López-Colomé_1993 | irrelevant | 0 | 0 | The paper describes excitatory amino acid receptor activity in Müller glia cells and does not investigate the pharmacokinetics of piperazine (which appears only as a structural component of an antagonist name, CPP). |
| PGx | López-Colomé_1993 | not_relevant | 0 | 0 | The paper studies excitatory amino acid signaling in glial cells and does not report pharmacogenomic effects on the PK or PD of piperazine. |
| popPK | Ma_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry paper reporting the synthesis and in vitro biological activity of benzofuran-piperazine derivatives, not the pharmacokinetics of the drug piperazine. |
| PGx | Ma_2016 | not_relevant | 0 | 0 | The paper reports the synthesis and biological activity of novel benzofuran derivatives containing a piperazine moiety, not the pharmacogenomics of piperazine itself. |
| popPK | Malbari_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study investigating piperazine-based hybrids as influenza inhibitors, not a pharmacokinetic study of piperazine as a drug. |
| PGx | Malbari_2021 | not_relevant | 0 | 0 | The paper describes the design and synthesis of piperazine-based small molecules as inhibitors against influenza, not the pharmacogenomics of piperazine as a drug. |
| popPK | Mallard_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a piperazine-derived fluorescent probe (FAM) used for drug delivery, not the pharmacological drug piperazine itself. |
| PGx | Mallard_2000 | not_relevant | 0 | 0 | The paper investigates the formulation of a piperazine derivative (FAM) for drug release, but does not report any pharmacogenomic effects or gene variants influencing PK/PD parameters. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of serotonin receptor activity, not a pharmacokinetic study, and does not report disposition parameters like clearance or volume for piperazine. |
| PGx | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper investigates pharmacodynamic effects of piperazine-derivatives on rat tissue and does not contain data on piperazine PK/PD affected by gene variants. |
| popPK | Maugé_2014 | irrelevant | 0 | 0 | The paper investigates the in vitro anti-inflammatory effects of a purine analogue containing a piperazine ring, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Maugé_2014 | not_relevant | 0 | 0 | The paper investigates the anti-inflammatory mechanism of a piperazine-containing purine analog, not the pharmacogenomics of the drug piperazine. |
| popPK | McMillen_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic/behavioral study of gepirone (an aryl-piperazine analog) in mice, not a pharmacokinetic study of piperazine. |
| PGx | McMillen_1987 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of the drug gepirone (an aryl-piperazine), not the impact of human gene variants on the pharmacokinetics or pharmacodynamics of the chemical piperazine. |
| popPK | Meng_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro biological evaluation of tryptamine-piperazine-2,5-dione conjugates, not a pharmacokinetic study of piperazine. |
| PGx | Meng_2021 | not_relevant | 0 | 0 | The paper reports the synthesis and biological activity of piperazine-containing compounds, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Moesslacher_2020 | irrelevant | 0 | 0 | Medicinal chemistry SAR paper on piperazine-containing antiviral compounds; piperazine is only a chemical moiety, no PK parameters reported. |
| popPK | Mårdh_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-hydroxy-3-methoxyphenylglycol (HMPG), a metabolite of norepinephrine, where piperazine is merely a counterion for the salt, not the subject drug. |
| PGx | Mårdh_1983 | not_relevant | 0 | 0 | The study examines the pharmacokinetics of 4-hydroxy-3-methoxyphenylglycol (HMPG), using its piperazine salt form; it does not investigate the pharmacokinetics or pharmacodynamics of piperazine itself, nor does it report any gene variant, genotype, or phenotype influencing these parameters. |
| popPK | Nagashima_2009 | irrelevant | 0 | 0 | The paper is about a STAT6 inhibitor (AS1810722) and does not report pharmacokinetic parameters for piperazine. |
| PGx | Nagashima_2009 | not_relevant | 0 | 0 | The paper reports on the synthesis and pharmacological activity of novel STAT6 inhibitors, with no mention of piperazine or any pharmacogenomic effects. |
| popPK | Nakashima_2024 | irrelevant | 0 | 0 | The paper investigates the metabolic formation of reactive metabolites from nintedanib (not piperazine) in vitro and does not report pharmacokinetic parameters for piperazine. |
| PGx | Nakashima_2024 | not_relevant | 0 | 0 | The paper describes the metabolic pathway of nintedanib (a tyrosine kinase inhibitor) via CYP3A4, specifically focusing on the formation of iminium ion metabolites; it does not report pharmacogenomic effects on PK/PD parameters for piperazine (an anthelmintic). |
| popPK | Narva_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro binding evaluation of PD-1/PD-L1 inhibitors containing a piperazine ring, not the pharmacokinetics of piperazine as a drug. |
| PGx | Narva_2020 | not_relevant | 0 | 0 | The paper investigates the synthesis and PD-1/PD-L1 inhibition of novel compounds, not the pharmacogenomics of piperazine. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper describes in vitro anticancer activity and mechanistic profiling of thiazole inhibitors, with no pharmacokinetic data for piperazine. |
| PGx | Nasr_2026 | not_relevant | 0 | 0 | The paper is about thiazole-derived anticancer compounds, not piperazine, and does not report any pharmacogenomic effects on PK or PD parameters for piperazine. |
| popPK | Nishikawa_2008 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of tandospirone and its metabolite 1-(2-pyrimidyl) piperazine (1-PP), not the drug piperazine itself. |
| PGx | Nishikawa_2008 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (tandospirone and fluvoxamine) involving the metabolite 1-(2-pyrimidyl) piperazine, not a pharmacogenomic effect of piperazine itself. |
| popPK | OBoyle_2019 | irrelevant | 0 | 0 | The paper reports in vitro antiproliferative activity and mechanism of action for piperazine-containing drug analogues, not pharmacokinetic parameters for piperazine itself. |
| PGx | OBoyle_2019 | not_relevant | 0 | 0 | The paper reports on the synthesis and antiproliferative activity of piperazine-conjugated cancer drugs, not the pharmacogenomics of piperazine itself. |
| popPK | Oboh_2021 | irrelevant | 0 | 0 | The paper focuses on the development of an anticryptosporidial lead compound (SLU-2633) where piperazine is merely a structural linker, not the subject drug for PK profiling. |
| PGx | Oboh_2021 | not_relevant | 0 | 0 | The paper describes structure-activity relationship optimization for a new anticryptosporidial lead (SLU-2633) and does not report any pharmacogenomic effects or gene-variant dependent PK/PD parameters. |
| popPK | Obreque-Balboa_2016 | irrelevant | 0 | 0 | The paper investigates flavonoid derivatives as ABCC1 modulators and piperazine is only part of the chemical structure (piperazin-1-yl), not the subject drug for pharmacokinetic analysis. |
| PGx | Obreque-Balboa_2016 | not_relevant | 0 | 0 | The paper reports on flavonoid derivatives modulating ABC transporters (specifically ABCC1) and their stability/plasma data, but does not investigate piperazine pharmacokinetics or pharmacodynamics, nor does it report a pharmacogenomic effect. |
| popPK | Orth_2025 | irrelevant | 0 | 0 | This is an in-vitro ubiquitination/biochemistry study of HUWE1 inhibitors; piperazine is not the subject drug and no PK parameters appear. |
| popPK | Paine_2002 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of sirolimus in Caco-2 cells, not piperazine. |
| PGx | Paine_2002 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of sirolimus, not piperazine, and does not investigate pharmacogenomic variants. |
| popPK | Patel_2023 | irrelevant | 0 | 0 | The paper is a review of cariprazine, a piperazine derivative antipsychotic, not a pharmacokinetic study of piperazine itself. |
| PGx | Patel_2023 | not_relevant | 1 | 0 | The paper describes the pharmacokinetics of cariprazine, a piperazine derivative, but does not report pharmacogenomic variants affecting its PK or PD parameters. |
| popPK | Pospisilova_2020 | irrelevant | 0 | 0 | The paper investigates the antimicrobial activity of synthesized piperazine derivatives in vitro, not the pharmacokinetics of the drug piperazine. |
| PGx | Pospisilova_2020 | not_relevant | 0 | 0 | The paper describes the antimicrobial activity of piperazine derivatives, not the pharmacokinetics or pharmacodynamics of the drug piperazine. |
| popPK | Premachandra_2015 | irrelevant | 0 | 0 | The paper discusses a spirocyclic piperazine derivative (synazo-1) as an antifungal agent, not the drug piperazine, and contains no pharmacokinetic parameters. |
| PGx | Premachandra_2015 | not_relevant | 0 | 0 | The paper reports in vitro synergy between a novel spirocyclic piperazine derivative and fluconazole against Candida albicans, not a pharmacogenomic effect on piperazine PK/PD. |
| popPK | Qiu_2026 | irrelevant | 0 | 0 | The study focuses on the antibacterial activity of synthetic flavonol derivatives containing a piperazine moiety, not on the pharmacokinetics of piperazine as a drug. |
| PGx | Qiu_2026 | not_relevant | 0 | 0 | The paper reports the antibacterial activity of synthesized flavonol derivatives containing a piperazine ring, not the pharmacogenomics of the drug piperazine. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | In-vitro transporter inhibition study; piperazine appears only as a chemical substructure, with no PK parameters for piperazine. |
| popPK | Raj_2014 | irrelevant | 0 | 0 | The paper studies gene expression in Giardia lamblia and does not involve piperazine pharmacokinetics. |
| PGx | Raj_2014 | not_relevant | 0 | 0 | The paper focuses on gene expression in the parasite Giardia lamblia, not human pharmacogenomics or the pharmacokinetics/dynamics of piperazine. |
| popPK | Ramakrishnan_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a radiolabeled tracer (11C-SA4503) containing a piperazine moiety, not the drug piperazine itself. |
| PGx | Ramakrishnan_2013 | not_relevant | 0 | 0 | The paper describes a PET imaging study for pituitary tumors and does not report pharmacogenomic effects on piperazine. |
| popPK | Rathi_2016 | irrelevant | 0 | 0 | The paper is a patent review of piperazine derivatives as medicinal chemistry scaffolds and does not report original quantitative pharmacokinetic data for the drug piperazine. |
| PGx | Rathi_2016 | not_relevant | 0 | 0 | The paper is a review of piperazine derivatives in patents and does not report pharmacogenomic effects on the PK or PD of the specific drug piperazine. |
| popPK | Reis_2026 | irrelevant | 0 | 0 | In vitro antiviral study of piperazine Mannich base derivatives; no pharmacokinetic disposition parameters for piperazine are reported. |
| popPK | Ricci_2016 | irrelevant | 0 | 0 | The study investigates piperazine-substituted compounds as ABCG2 antagonists for cancer therapy, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Ricci_2016 | not_relevant | 0 | 0 | The paper is not about piperazine pharmacogenomics and contains no pharmacokinetic or pharmacodynamic data linking a genotype/phenotype to drug effect. |
| popPK | Romero_2006 | irrelevant | 0 | 0 | The paper describes a receptor binding/cAMP signaling study using piperazine as a structural component of ligands (e.g., SB-271046 contains a piperazinyl group), not as the subject drug for PK analysis. |
| PGx | Romero_2006 | not_relevant | 0 | 0 | The paper describes the pharmacology of 5-HT6 receptor ligands and does not involve the drug piperazine or any pharmacogenomic interactions. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | This is a medicinal-chemistry review of pyrrolidine scaffolds in antibiotics; piperazine is not the subject drug and no PK parameter values for it appear. |
| popPK | Ryu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET radioligand (18)F-FCWAY and its interaction with disulfiram, not on piperazine itself. |
| PGx | Ryu_2007 | not_relevant | 0 | 0 | The paper studies the drug-disulfiram interaction affecting the PET radioligand (18)F-FCWAY, and does not report pharmacogenomic effects of piperazine or its derivatives. |
| popPK | Sah_1994 | irrelevant | 0 | 0 | The paper investigates calcium channel inhibition by dopamine antagonists, not the pharmacokinetics of piperazine. |
| PGx | Sah_1994 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic mechanism of calcium channel inhibition by a specific piperazine derivative (fluphenazine) and does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Salahuddin_2013 | irrelevant | 0 | 0 | The paper reports the synthesis and in vitro antiprotozoal activity of chemical compounds containing a piperazine moiety, not the pharmacokinetics of the drug piperazine. |
| PGx | Salahuddin_2013 | not_relevant | 0 | 0 | The paper describes a novel hybrid antiprotozoal drug with a piperazine structure, but does not contain pharmacogenomic data on the PK/PD of the drug piperazine. |
| popPK | Samie_2016 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mechanistic study of a piperazine derivative against cancer cells, not a pharmacokinetic study. |
| PGx | Samie_2016 | not_relevant | 0 | 0 | The paper investigates the cytotoxic mechanism of a novel piperazine derivative on cancer cells and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of the drug piperazine. |
| popPK | Sanabria-Bohórquez_2002 | irrelevant | 0 | 0 | The study investigates the PET tracer p-MPPF (a piperazine derivative), not the drug piperazine itself, and reports receptor binding parameters rather than piperazine pharmacokinetic disposition parameters. |
| PGx | Sanabria-Bohórquez_2002 | not_relevant | 0 | 0 | The paper describes the PET tracer p-MPPF (which contains a piperazine moiety) and its binding to receptors, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of the drug piperazine. |
| popPK | Schlicker_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacology of anpirtoline, and piperazine derivatives are only mentioned as standard comparators in behavioral tests, with no PK parameters reported. |
| PGx | Schlicker_1992 | not_relevant | 0 | 0 | The paper studies the pharmacology of anpirtoline, not the pharmacogenomics of piperazine. |
| popPK | Schmitt_2016 | irrelevant | 0 | 0 | The paper studies pyrrolopyrimidine derivatives as MRP1 inhibitors where piperazine is merely a structural moiety, not the subject drug, and no pharmacokinetic parameters are reported. |
| PGx | Schmitt_2016 | not_relevant | 0 | 0 | The paper discusses the synthesis of MRP1 inhibitors (pyrrolopyrimidines) and does not report on pharmacogenomic effects on piperazine PK or PD. |
| popPK | Schulz_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR paper on KIT/PDGFRA kinase inhibitors; piperazine is only a chemical moiety in the inhibitors, with no pharmacokinetic parameters for piperazine itself. |
| popPK | Sethi_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry study of coumarin-piperazine hybrids as galectin-1 inhibitors; piperazine is only a chemical moiety, with no PK disposition parameters for piperazine itself. |
| popPK | Shalgunov_2015 | irrelevant | 0 | 0 | PET tracer study of fluorinated dopamine D2/3 agonists in rats; piperazine is only a structural moiety, no piperazine PK parameters reported. |
| popPK | Shibuya_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the drug K-604, which is a chemical compound containing a piperazine ring, but piperazine itself is not the subject drug being characterized. |
| PGx | Shibuya_2020 | not_relevant | 0 | 0 | The paper describes the synthesis and general pharmacokinetics of a specific compound (K-604) in animals, with no mention of piperazine, gene variants, or pharmacogenomic effects. |
| popPK | Silber_2013 | irrelevant | 0 | 0 | The study is an in-vitro high-throughput screen for antiprion compounds where piperazine is only mentioned as a chemical scaffold of hits, not a drug subject to pharmacokinetic analysis. |
| PGx | Silber_2013 | not_relevant | 0 | 0 | The paper reports a high-throughput screen for antiprion compounds in cell lines and does not investigate pharmacogenomic effects on PK/PD parameters. |
| popPK | Singh_1986 | irrelevant | 0 | 0 | The paper is a review of calcium antagonists that only mentions piperazine derivatives as a class of agents, with no pharmacokinetic parameters or disposition data reported. |
| PGx | Singh_1986 | not_relevant | 0 | 0 | The paper reviews the pharmacology and classification of calcium antagonists (including piperazine derivatives like flunarizine) but does not report any pharmacogenomic effects or gene variants. |
| popPK | Sipos-Szabó_2026 | irrelevant | 0 | 0 | This is a pKa prediction benchmarking study with no pharmacokinetic parameters for piperazine. |
| popPK | Slifstein_2000 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of a PET radioligand (WAY-100635) containing a piperazine moiety, not the drug piperazine itself, and focuses on binding parameter estimation errors rather than disposition parameters of piperazine. |
| PGx | Slifstein_2000 | not_relevant | 0 | 0 | The paper concerns PET radioligand modeling and does not report any pharmacogenomic effects on the PK or PD of the drug piperazine. |
| popPK | Song_2014 | irrelevant | 0 | 0 | The study investigates the metabolic pathways of a specific thiazole derivative containing a piperazine moiety, not the pharmacokinetics of piperazine itself. |
| PGx | Song_2014 | not_relevant | 0 | 0 | The paper studies the metabolism of a novel compound (KRO-105714), not piperazine, and does not report pharmacogenomic effects. |
| popPK | Spínola_2008 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of sildenafil, which is a drug containing a piperazine moiety, but does not report parameters for piperazine itself. |
| PGx | Spínola_2008 | not_relevant | 0 | 0 | The study is a bioequivalence trial for sildenafil, does not investigate piperazine, and does not examine any gene variant or pharmacogenomic effect on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The study investigates antimicrobial resistance mechanisms in E. coli regarding flumequine and enrofloxacin, and does not report pharmacokinetic parameters for piperazine. |
| PGx | Swinkels_2024 | not_relevant | 0 | 0 | The paper investigates bacterial resistance mechanisms to flumequine, not human pharmacogenomics or PK/PD effects of piperazine. |
| popPK | Szczepańska_2020 | irrelevant | 0 | 0 | The paper focuses on the in vitro anti-cancer and P-gp inhibition mechanisms of piperazine derivatives, not the pharmacokinetics of the parent drug piperazine. |
| PGx | Szczepańska_2020 | not_relevant | 0 | 0 | The paper describes novel piperazine derivatives for treating cancer, not the pharmacokinetics or pharmacodynamics of the drug piperazine itself, and does not report any genetic effects. |
| popPK | Sánchez_1996 | irrelevant | 0 | 0 | The study investigates the behavioral effects of serotonergic ligands in rats and does not report any pharmacokinetic parameters for piperazine. |
| PGx | Sánchez_1996 | not_relevant | 0 | 0 | The paper studies serotonin receptor modulation of behavior in rats using various 5-HT ligands, but does not report pharmacogenomic effects on the PK or PD of piperazine. |
| popPK | Teodoro_2015 | irrelevant | 0 | 0 | This is a PET radiotracer study for α7 nAChR ligands; piperazine appears only as a chemical scaffold, not as a drug with PK disposition parameters. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | This is a PROTAC/proteomics study; piperazine appears only as a synthetic linker reagent, with no piperazine PK parameters. |
| popPK | Valchar_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay where piperazine derivatives are used as experimental tools to characterize dopamine transporters, not as the subject of pharmacokinetic analysis. |
| PGx | Valchar_1993 | not_relevant | 0 | 0 | The paper reports in vitro binding affinities of piperazine derivatives, not pharmacogenomic effects on PK/PD parameters in humans or animal models involving genetic variants. |
| popPK | Vergin_1986 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of pirenzepine, not piperazine. |
| PGx | Vergin_1986 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of pirenzepine, not piperazine, and does not investigate any genetic variants or pharmacogenomic effects. |
| popPK | Viana_2020 | irrelevant | 0 | 0 | This is an in silico drug design study on benzothiazinone derivatives for tuberculosis, where piperazine is mentioned only as a structural fragment, not as the subject drug with pharmacokinetic data. |
| PGx | Viana_2020 | not_relevant | 0 | 0 | The paper investigates in silico drug design for tuberculosis drugs, not pharmacogenomics of piperazine. |
| popPK | Villarroya_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacological analysis of dotarizine (a piperazine derivative) on calcium channels in chromaffin cells and does not report any pharmacokinetic parameters for piperazine. |
| PGx | Villarroya_1995 | not_relevant | 0 | 0 | The paper compares the pharmacodynamic effects of two piperazine derivatives (dotarizine and flunarizine) on calcium channels in cells, but it does not report any pharmacogenomic interactions or the effects of genetic variants on drug response. |
| popPK | Vincent_2007 | irrelevant | 0 | 0 | The study reports pharmacokinetics for sitagliptin, where piperazine is only a structural component/metabolite site, not the subject drug. |
| PGx | Vincent_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of sitagliptin, not piperazine, and does not report pharmacogenomic effects. |
| popPK | Vis_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of S 15535 (a piperazine derivative), not piperazine itself, in rats. |
| PGx | Vis_2001 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic-pharmacodynamic modelling of S 15535 in rats and does not report any pharmacogenomic effects or gene variants on PK/PD parameters for piperazine. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | This is an in vitro SARS-CoV-2 antiviral study of novel tetrahydroisoquinoline compounds; piperazine is only a chemical building block in the synthesized compounds, with no PK parameters for piperazine itself. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study investigates pharmacokinetics of EGFR inhibitors (ZW-49 and derivatives) in rats, not piperazine. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper concerns the design of EGFR inhibitors for lung cancer and does not involve the drug piperazine. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The paper reports the synthesis and in vitro cytotoxicity of artemisone-piperazine hybrids, not the pharmacokinetics of piperazine. |
| PGx | Wei_2021 | not_relevant | 0 | 0 | The paper reports the synthesis and cytotoxic activity of novel chemical hybrids containing a piperazine moiety, not a pharmacogenomic study on piperazine's PK/PD. |
| popPK | Wei_2021_2 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study of artemisinin-piperazine hybrids, not a pharmacokinetic study of piperazine itself. |
| PGx | Wei_2021_2 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity of artemisinin-piperazine hybrids on cancer cells but contains no pharmacogenomic data (gene variants) or pharmacokinetic parameters. |
| popPK | Wen_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the bioactivation of m-chlorophenylpiperazine (a metabolite/analogue) to reactive species, containing no pharmacokinetic parameters (CL, V, t1/2) for piperazine. |
| PGx | Wen_2008 | not_relevant | 0 | 0 | The paper discusses trazodone and its metabolite m-chlorophenylpiperazine, not the drug piperazine itself, and reports no pharmacogenomic effects on PK or PD parameters. |
| popPK | Wichka_2024 | irrelevant | 0 | 0 | The paper is a computational study on machine learning for Transglutaminase 2 inhibitors and does not contain pharmacokinetic data for piperazine. |
| PGx | Wichka_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning models for Transglutaminase 2 inhibitor discovery and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of piperazine. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | Computational PROTAC design study with no piperazine pharmacokinetic parameters. |
| popPK | Wójcikowski_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of the metabolism of perazine (a phenothiazine neuroleptic), not a pharmacokinetic study of piperazine itself. |
| PGx | Wójcikowski_2004 | not_relevant | 3 | 2 | The paper characterizes CYP isoforms responsible for perazine (a phenothiazine, not piperazine) metabolism in vitro, but does not report pharmacogenomic effects of specific genetic variants on PK/PD parameters. |
| popPK | Yamasaki_2020 | irrelevant | 0 | 0 | The paper studies a PET tracer containing a piperazine ring, not the drug piperazine, and focuses on enzyme binding kinetics rather than disposition parameters. |
| PGx | Yamasaki_2020 | not_relevant | 0 | 0 | The paper describes the development of a PET tracer ([11C]DFMC) for measuring FAAH activity and mentions piperazine only as a structural component of the tracer, rather than studying the pharmacokinetics or pharmacodynamics of the drug piperazine. |
| popPK | Yrjölä_2015 | irrelevant | 0 | 0 | The paper describes 1,3,5-triazines as CB2 receptor agonists and uses piperazine derivatives as the subject drugs, not piperazine itself for pharmacokinetic analysis. |
| PGx | Yrjölä_2015 | not_relevant | 0 | 0 | The paper reports on the synthesis and biological activity of CB2 agonists containing a piperazine moiety, not on the pharmacogenomics of the drug piperazine itself. |
| popPK | Yu_2019 | irrelevant | 0 | 0 | The study focuses on the in vitro synthesis and cytotoxicity of artemisinin derivatives where piperazine is a structural scaffold, not a pharmacokinetic study of piperazine. |
| PGx | Yu_2019 | not_relevant | 0 | 0 | The paper reports the synthesis and cytotoxic activity of artemisinin-piperazine derivatives, not a pharmacogenomic effect on a PK/PD parameter for piperazine itself. |
| popPK | Yuan_2022 | irrelevant | 0 | 0 | The paper studies ferulic acid derivatives containing a piperazine moiety as antiviral agents, not the pharmacokinetics of the drug piperazine itself. |
| PGx | Yuan_2022 | not_relevant | 0 | 0 | The paper reports the synthesis of novel antiviral compounds containing a piperazine moiety, not the pharmacogenomics of the drug piperazine itself. |
| popPK | Zaręba_2015 | irrelevant | 0 | 0 | The paper reports pharmacological and binding data for novel arylpiperazine derivatives (not the drug piperazine itself) and does not contain any pharmacokinetic parameters (CL, V, half-life, etc.). |
| PGx | Zaręba_2015 | not_relevant | 0 | 0 | The paper reports the synthesis and pharmacological characterization of novel arylpiperazine derivatives, not the pharmacogenomics of the drug piperazine. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and anticancer activity of piperazine-containing quinazoline derivatives, not the pharmacokinetics of the drug piperazine. |
| PGx | Zhang_2014 | not_relevant | 0 | 0 | The paper reports the synthesis and anticancer activity of quinazoline derivatives containing a piperazine ring, not the pharmacogenomics of the drug piperazine. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of osthole derivatives for neuroprotection, where piperazine is mentioned only as a structural moiety (piperazine group), not as the subject drug for PK analysis. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper discusses osthole derivatives where piperazine is a chemical moiety, not the drug piperazine, and reports no pharmacogenomic effects on PK/PD. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | This is a plant antiviral pesticide chemistry study of piperazine derivatives; no pharmacokinetic parameters for piperazine itself are reported. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper describes the synthesis of piperazine-containing derivatives for plant virus activity, not the pharmacokinetics of the drug piperazine. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper reports the synthesis and anti-plant virus activity of piperazine derivatives, containing no pharmacogenomic analysis of PK or PD parameters for the drug piperazine. |
| popPK | Zhu_2005 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of buspirone, not the pharmacokinetics of piperazine. |
| PGx | Zhu_2005 | not_relevant | 0 | 0 | The study focuses on buspirone metabolism, not piperazine, and does not report pharmacogenomic effects on piperazine PK/PD. |
| popPK | Zuideveld_2002 | irrelevant | 0 | 0 | The study models buspirone and its metabolite 1-(2-pyrimidinyl)-piperazine, not the drug piperazine itself. |
| PGx | Zuideveld_2002 | not_relevant | 0 | 0 | The paper analyzes PK/PD of buspirone in rats but does not involve piperazine as the parent drug or any genetic variation (pharmacogenomics). |
| popPK | de_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of cisapride and 5-HT on canine stomach motility in vitro, using 1-(1-Naphthalenyl)piperazine only as a receptor antagonist, and does not report pharmacokinetic parameters for piperazine. |
| PGx | de_1993 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of cisapride and 5-HT in canine stomachs and does not mention piperazine or pharmacogenomic effects. |
| popPK | Çapan_2022 | irrelevant | 0 | 0 | The paper describes the discovery of piperazine derivatives as enzyme inhibitors and reports only IC50 values, with no pharmacokinetic parameters for piperazine itself. |
| PGx | Çapan_2022 | not_relevant | 0 | 0 | The paper describes the structure-activity relationship of sEH inhibitors and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Štěpánek_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antifungal/antiparasitic activity of piperazine-modified ketoconazole derivatives, not the pharmacokinetics of the drug piperazine. |
| PGx | Štěpánek_2022 | not_relevant | 0 | 0 | The paper reports in vitro structure-activity relationships for piperazine-modified ketoconazole derivatives, not the pharmacogenomics of piperazine itself. |
| popPK | Żesławska_2019 | irrelevant | 0 | 0 | The study investigates a spirofluorenehydantoin compound that contains a piperazine structural fragment as part of a new molecule, rather than the drug piperazine itself, and reports no pharmacokinetic data. |
| PGx | Żesławska_2019 | not_relevant | 0 | 0 | The paper reports in vitro and structural characterization of an ABCB1 inhibitor, not pharmacogenomic effects on piperazine pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiperazine%5D&body=Drug%3A%20piperazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piperazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
