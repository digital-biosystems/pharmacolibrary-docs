# minocycline

- **generic name:** minocycline
- **ATC codes:** `A01AB23`, `D10AF07`, `J01AA08`
- **DrugBank:** [DB01017](https://go.drugbank.com/drugs/DB01017)
- **groups:** approved, investigational

## About

**Description.** Minocycline was first described in the literacture in 1966.[A190681] It is a second generation tetracycline antibiotic that is active against gram-negative and gram-positive bacteria.[A190723] Like other semisynthetic tetracyclines, minocycline has modifications to carbons 7-9 on the D ring to generate higher efficacy than previous tetracyclines.[A190723]

Minocycline was granted FDA approval on 30 June 1971.[L11695]

**Indication.** Oral and topical minocycline are indicated to treat inflammatory lesions of acne vulgaris.[L11701,L11704,L11719] Subgingival microspheres are indicated as an adjunct treatment in the reduction of pocket depth in adults with periodontitis.[L11716] Oral and intravenous formulations are indicated to treat infections of susceptible microorganisms.[L11707,L11710,L11713] These include rickettsiae, Mycoplasma pneumoniae, Chlamydia trachomatis, Chlamydophila psittaci, Chlamydia trachomatis, Ureaplasma urealyticum, Borrelia recurrentis, Haemophilus ducreyi, Yersinia pestis, Francisella tularensis, Vibrio cholerae, Campylobacter fetus, Brucella species, Bartonella bacilliformis, Klebsiella granulomatis, Escherichia coli, Enterobacter aerogenes, Shigella species, Acinetobacter species, Haemophilus influenzae, and Klebsiella species.[L11710] Additionally, oral minocycline is indicated for the treatment of inflammatory lesions (papules and pustules) of rosacea in adults.[L52395]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 08:57 | 24:00 | 2/1/1 | 2/0/0 | 0/0/0 | 247,901/29,174 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 6/11 | 16/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.2567)</sub><br><sub>route_to: `human_review`</sub> | [Athanassa_2025](drugs/drug_minocycline/Minocycline_Athanassa2025_reference.md) | Athanassa Z et al., Population pharmacokinetic model of ora…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf090](https://doi.org/10.1093/jac/dkaf090) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Pardos_2024](drugs/drug_minocycline/Minocycline_Pardos2024_reference.md) | Pardos SL et al., Population pharmacokinetics/pharmacodyn…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae363](https://doi.org/10.1093/jac/dkae363) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Tynan_2016](drugs/drug_minocycline/Minocycline_Tynan2016_reference.md) | Tynan BE et al., Pharmacokinetics of minocycline in dome…, Journal of feline medicine… (2016) | [10.1177/1098612X15579114](https://doi.org/10.1177/1098612X15579114) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Barrasa_2024](drugs/drug_minocycline/Minocycline_Barrasa2024_reference.md) | Barrasa H et al., Optimizing Antibiotic Therapy for, Antibiotics (Basel, Switzer… (2024) | [10.3390/antibiotics13060553](https://doi.org/10.3390/antibiotics13060553) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aranzana-Climent_2020](drugs/drug_minocycline/pd_Aranzana_Climent_2020_unknown.md) | Aranzana-Climent V et al., Semi-mechanistic PK/PD modelling of com…, Clinical microbiology and i… (2020) | [10.1016/j.cmi.2020.01.017](https://doi.org/10.1016/j.cmi.2020.01.017) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vallé_2021](drugs/drug_minocycline/pd_Vall_2021_mean_inoculum_growth.md) | Vallé Q et al., Prediction of Minocycline Activity in t…, Frontiers in microbiology (2021) | [10.3389/fmicb.2021.671376](https://doi.org/10.3389/fmicb.2021.671376) |

## Coverage

- **PubMed hits:** 69 matched, 44 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lodise_2021.pdf` | Lodise TP et al., Pharmacokinetic and Pharmacodynamic Pro…, Antimicrobial agents and ch… (2021) | popPK | 10 | [10.1128/AAC.01809-20](https://doi.org/10.1128/AAC.01809-20) | [33168615](https://pubmed.ncbi.nlm.nih.gov/33168615) | The paper describes a population PK study for minocycline, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Pardos_2024.pdf` | Pardos SL et al., Population pharmacokinetics/pharmacodyn…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae363](https://doi.org/10.1093/jac/dkae363) | [39412246](https://pubmed.ncbi.nlm.nih.gov/39412246) | The paper reports a population PK model for minocycline with explicit numeric values for clearance and volume of distribution in the results section. |
| `Tynan_2016.pdf` | Tynan BE et al., Pharmacokinetics of minocycline in dome…, Journal of feline medicine… (2016) | popPK | 10 | [10.1177/1098612X15579114](https://doi.org/10.1177/1098612X15579114) | [25851119](https://pubmed.ncbi.nlm.nih.gov/25851119) | The study reports quantitative pharmacokinetic parameters (CL, V, t1/2, bioavailability) for minocycline in cats with all numeric values explicitly present in the text. |
| `Yamamoto_1999.pdf` | Yamamoto T et al., Pharmacokinetic characteristics of mino…, American journal of therape… (1999) | popPK | 10 | [10.1097/00045391-199905000-00006](https://doi.org/10.1097/00045391-199905000-00006) | [10423658](https://pubmed.ncbi.nlm.nih.gov/10423658) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, and clearance) for minocycline in humans, with all numeric values explicitly present in the text. |
| `Nicolau_1993.pdf` | Nicolau DP et al., Pharmacokinetics of minocycline and van…, Laboratory animal science (1993) | popPK | 9 | not captured | [8355481](https://pubmed.ncbi.nlm.nih.gov/8355481) | The study reports quantitative PK parameters for minocycline in rabbits using a two-compartment model, but the specific numeric values are not present in the provided evidence. |
| `Bowker_2008.pdf` | Bowker KE et al., Pharmacodynamics of minocycline against…, Antimicrobial agents and ch… (2008) | pd | 5 | [10.1128/AAC.00922-07](https://doi.org/10.1128/AAC.00922-07) | [18519719](https://www.ncbi.nlm.nih.gov/pubmed/18519719) | metadata signals extractable PD data (sigmoid) |
| `Ahmad_2021.pdf` | Ahmad KA et al., Microglial IL-10 and β-endorphin expres…, Brain, behavior, and immuni… (2021) | pd | 4 | [10.1016/j.bbi.2021.04.007](https://doi.org/10.1016/j.bbi.2021.04.007) | [33862171](https://www.ncbi.nlm.nih.gov/pubmed/33862171) | metadata signals extractable PD data (Emax) |
| `Wehring_2018.pdf` | Wehring HJ et al., Adjunctive Minocycline in Clozapine-Tre…, The Psychiatric quarterly (2018) | pgx | 7 | [10.1007/s11126-017-9515-x](https://doi.org/10.1007/s11126-017-9515-x) | [28466366](https://www.ncbi.nlm.nih.gov/pubmed/28466366) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Furuta_2000.pdf` | Furuta T et al., Cure of refractory duodenal ulcer and i…, Clinical pharmacology and t… (2000) | pgx | 5 | [10.1067/mcp.2000.106826](https://doi.org/10.1067/mcp.2000.106826) | [10872651](https://www.ncbi.nlm.nih.gov/pubmed/10872651) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T08:46:37.109329+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2021 | irrelevant | 0 | 0 | The paper concerns gabapentinoids and neuropathic pain, not minocycline pharmacokinetics. |
| PD | Ahmad_2021 | not_relevant | 0 | 0 | The paper focuses on gabapentinoids and microglial mechanisms, not minocycline, and does not report any pharmacodynamic or exposure-response data for minocycline. |
| popPK | Aranzana-Climent_2020 | irrelevant | 0 | 0 | The paper reports pharmacodynamic parameters (kill rates, EC50) for minocycline in an in-vitro bacterial growth model, not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Arnett_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the antimicrobial and clinical efficacy of minocycline microspheres in periodontitis, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka, etc.) for minocycline. |
| popPK | Barrasa_2024 | irrelevant | 2 | 1 | The study is a PK/PD simulation using literature-sourced parameters rather than a primary PK study, and specific numeric disposition parameters (CL, V, ka) for minocycline are not explicitly listed in the provided text. |
| PGx | Bartos_2020 | not_relevant | 0 | 0 | The paper is a systematic review of treatment regimens for histoid leprosy and does not report any pharmacogenomic effects on minocycline PK or PD parameters. |
| popPK | Beganovic_2021 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic simulation of antibiotic combinations, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for minocycline. |
| popPK | Bowker_2008 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic model, not a pharmacokinetic study reporting quantitative disposition parameters for minocycline. |
| PD | Bowker_2008 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or results necessary to verify the presence of numeric PD parameters or an exposure-response relationship. |
| popPK | Burgess_2007 | irrelevant | 2 | 5 | The paper is a PK-PD breakpoint study for Neisseria meningitidis that uses minocycline as one of 15 comparator agents, reporting only summary literature values (Vd, t1/2, AUC) rather than original population PK parameters like clearance or intercompartmental clearance. |
| PD | Burgess_2007 | not_relevant | 2 | 1 | The study uses Monte Carlo simulation to derive susceptibility breakpoints based on predefined PK-PD targets (e.g., AUC/MIC) borrowed from other organisms, rather than reporting a fitted PD model or numeric PD parameters (like Emax or EC50) for minocycline. |
| PGx | Bühler_2019 | not_relevant | 0 | 0 | The paper discusses azole antifungal hepatotoxicity and mentions HLA B*35:02 only in the context of a known association with minocycline-induced liver injury, but does not report any pharmacogenomic effect on the PK or PD of minocycline. |
| PGx | Cabral_2026 | not_relevant | 0 | 0 | The paper investigates a combination therapy strategy in a mouse model and does not report any pharmacogenomic effects (gene variants) on minocycline PK or PD parameters. |
| PGx | Clare_2017 | not_relevant | 0 | 0 | The paper reports genetic associations with drug-induced liver injury (DILI) susceptibility, not pharmacokinetic or pharmacodynamic parameters. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of thalidomide in neuropathic pain, using minocycline only as a microglial inhibitor for mechanistic validation, with no pharmacokinetic parameters reported. |
| PD | Deng_2021 | not_relevant | 0 | 0 | The paper focuses on thalidomide's mechanism of action; minocycline is used only as a qualitative microglial inhibitor to block the effect, with no dose-response or concentration-effect data reported for minocycline. |
| PGx | Fernando_2014 | not_relevant | 0 | 0 | The paper discusses DRESS syndrome and mentions minocycline as a causative agent and HLA associations generally, but does not report specific pharmacogenomic effects on minocycline PK or PD parameters. |
| PGx | Furuta_2000 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the efficacy of omeprazole (a proton pump inhibitor), not minocycline, which was only part of a failed prior regimen. |
| PGx | Groenewold_2018 | not_relevant | 0 | 0 | The paper investigates bacterial protein variants and their effect on antibiotic susceptibility in Pseudomonas aeruginosa, not human pharmacogenomics or PK/PD parameters. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro microbiological efficacy and MIC determination for Mycobacterium abscessus, not a pharmacokinetic study reporting disposition parameters for minocycline. |
| PD | Gumbo_2020 | not_relevant | 0 | 0 | The paper reports MICs and concentration-response data (EC50) for other drugs (e.g., daunorubicin, tebipenem/avibactam), but minocycline was only tested for MICs and no PD parameters or concentration-effect analysis were performed or reported for it. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The paper reports bacterial resistance mechanisms (tetB gene in Acinetobacter baumannii) affecting antibiotic susceptibility, not human pharmacogenomics affecting drug PK/PD. |
| popPK | Lodise_2021 | relevant | 10 | 0 | The paper describes a population PK study for minocycline, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| PGx | Marcatili_2022 | not_relevant | 0 | 0 | The paper describes clinical case reports of minocycline use in depression and mentions pharmacogenetic testing for other drugs (e.g., MTHFR for folate), but does not report any pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of minocycline itself. |
| PGx | Mitchell_2011 | not_relevant | 2 | 5 | The paper reports a genotype-dependent difference in the efficacy of minocycline to increase glutamate uptake (a PD parameter), but it is a mechanistic cell study rather than a clinical pharmacogenomic report of PK/PD parameters in humans. |
| PGx | Mori_2021 | not_relevant | 0 | 0 | The paper investigates the chemical degradation of insulin amyloids by minocycline in vitro, not the effect of genetic variants on minocycline pharmacokinetics or pharmacodynamics. |
| PGx | Nakajima_2012 | not_relevant | 0 | 0 | The paper reports a clinical case of H. pylori eradication using minocycline and mentions CYP2C19 genotype, but it does not report any pharmacokinetic or pharmacodynamic parameters of minocycline or how the genotype affected them. |
| popPK | Nicolau_1993 | relevant | 9 | 0 | The study reports quantitative PK parameters for minocycline in rabbits using a two-compartment model, but the specific numeric values are not present in the provided evidence. |
| PGx | Okanda_2026 | not_relevant | 0 | 0 | The paper reports in vitro antimicrobial synergy between minocycline and biapenem against bacteria, not a pharmacogenomic effect on human PK or PD parameters. |
| popPK | Pai_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tigecycline, not minocycline. |
| popPK | Qu_2022 | irrelevant | 2 | 1 | The study is an in vitro PK/PD simulation using literature-derived parameters for minocycline rather than an original pharmacokinetic study, and it only reports AUC values without specific clearance, volume, or rate constants. |
| PGx | Shashikumar_2021 | not_relevant | 0 | 0 | The paper is a retrospective clinical study on the treatment of a skin condition and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tao_2023 | irrelevant | 2 | 3 | The paper is a narrative review of food-drug interactions that reports only absorption metrics (Cmax, AUC, Tmax, half-life) and lacks the compartmental parameters (CL, V, Q, ka) required for population pharmacokinetic modeling. |
| popPK | Vallé_2021 | relevant | 5 | 2 | The study reports PK data (AUC, Cmax) for minocycline in pigs but lacks standard compartmental parameters (CL, V, ka) and the specific AUC values are in a table not fully provided in the evidence. |
| PGx | Vidor_2019 | not_relevant | 0 | 0 | The paper reports bacterial tetracycline resistance mechanisms (MICs) in P. sordellii, not human pharmacogenomic effects on minocycline PK/PD. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper uses minocycline only as a negative control to validate the model's predictive validity for analgesic efficacy, without reporting any pharmacokinetic or pharmacodynamic parameters or genotype-specific effects on the drug's action. |
| PGx | Wehring_2018 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (minocycline affecting clozapine levels) but does not report any pharmacogenomic effects (gene variants) on minocycline's PK or PD parameters. |
| PGx | Yi_2020 | not_relevant | 0 | 0 | The paper identifies minocycline as a therapeutic candidate for acute rejection based on gene expression networks but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Yukawa_2025 | not_relevant | 0 | 0 | The paper focuses on the clinical spectrum and antimicrobial resistance of Corynebacterium striatum, not on human pharmacogenomics or PK/PD parameters of minocycline. |
| popPK | Zhanel_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of omadacycline, not minocycline, which is only mentioned as a structural derivative. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The study compares clinical eradication rates of two treatment regimens and does not report pharmacokinetic or pharmacodynamic parameters influenced by gene variants for minocycline. |
| PGx | de_2017 | not_relevant | 0 | 0 | The paper investigates the autoimmune features of drug-induced liver injury and HLA allele frequencies, but does not report pharmacokinetic or pharmacodynamic parameters of minocycline. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_minocycline`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
