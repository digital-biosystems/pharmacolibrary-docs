# dexamethasone

- **generic name:** dexamethasone
- **ATC codes:** `A01AC02`, `C05AA09`, `D07AB19`, `D07CB04`, `D07XB05`, `D10AA03`, `H02AB02`, `R01AD03`, `S01BA01`, `S01CA01`, `S01CB01`, `S02BA06`, `S02CA06`, `S03BA01`, `S03CA01`
- **DrugBank:** [DB01234](https://go.drugbank.com/drugs/DB01234)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Dexamethasone, or MK-125, is a corticosteroid fluorinated at position 9 used to treat endocrine, rheumatic, collagen, dermatologic, allergic, ophthalmic, gastrointestinal, respiratory, hematologic, neoplastic, edematous, and other conditions.[L10701] Developed in 1957, it is structurally similar to other corticosteroids like [hydrocortisone] and [prednisolone].[A188724]

Dexamethasone was granted FDA approval on 30 October 1958.[L10695] In a press release for the Randomized Evaluation of COVID-19 Therapy (RECOVERY) trial on 16 June 2020, dexamethasone was recommended for use in COVID-19 patients with severe respiratory symptoms. Dexamethasone reduced deaths by approximately one third in patients requiring ventilation and by one fifth in those requiring oxygen.[L14318]

**Indication.** Dexamethasone and [ciprofloxacin] otic suspension is indicated for bacterial infections with inflammation in acute otitis media and acute otitis externa.[L10698] Intramuscular and intravenous injections are indicated for a number of endocrine, rheumatic, collagen, dermatologic, allergic, ophthalmic, gastrointestinal, respiratory, hematologic, neoplastic, edematous, and other conditions.[L10701] Oral tablets are indicated for the treatment of multiple myeloma.[L10710] An intravitreal implant is indicated for some forms of macular edema and non-infectious posterior uveitis affecting the posterior of the eye.[L10719] Various ophthalmic formulations are indicated for inflammatory conditions of the eye.[L10704,L10707,L10713,L10716,L10722,L10725]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 11:23 | 46:10 | 3/2/1 | 2/1/0 | 0/0/0 | 544,498/67,881 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 11/18 | 28/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gawarammana_2011](drugs/drug_dexamethasone/Dexamethasone_Gawarammana2011_reference.md) | Gawarammana IB et al., Medical management of paraquat ingestion, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.04026.x](https://doi.org/10.1111/j.1365-2125.2011.04026.x) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Calderin_2025](drugs/drug_dexamethasone/Dexamethasone_Calderin2025_reference.md) | Calderin JM et al., Pharmacokinetics of dexamethasone in tu…, medRxiv : the preprint serv… (2025) | [10.1101/2025.07.14.25331510](https://doi.org/10.1101/2025.07.14.25331510) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Calderin_2025_2](drugs/drug_dexamethasone/Dexamethasone_Calderin2025v2_reference.md) | Calderin JM et al., Pharmacokinetics of dexamethasone in tu…, medRxiv : the preprint serv… (2025) | [10.1101/2025.07.14.25331510](https://doi.org/10.1101/2025.07.14.25331510) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Świerczek_2023](drugs/drug_dexamethasone/Dexamethasone_wierczek2023_reference.md) | Świerczek A et al., Anti-inflammatory effects of dexamethas…, Clinical and translational… (2023) | [10.1111/cts.13577](https://doi.org/10.1111/cts.13577) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Papathanasiou_2025](drugs/drug_dexamethasone/Dexamethasone_Papathanasiou2025_reference.md) | Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Yu_2026](drugs/drug_dexamethasone/Dexamethasone_Yu2026_reference.md) | Yu R et al., Meta-Analysis and Physiologically-Based…, Pharmaceutical research (2026) | [10.1007/s11095-026-04120-5](https://doi.org/10.1007/s11095-026-04120-5) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yu_2026](drugs/drug_dexamethasone/pd_Yu_2026_cortisol.md) | Yu R et al., Meta-Analysis and Physiologically-Based…, Pharmaceutical research (2026) | [10.1007/s11095-026-04120-5](https://doi.org/10.1007/s11095-026-04120-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yu_2026](drugs/drug_dexamethasone/pd_Yu_2026_glucose.md) | Yu R et al., Meta-Analysis and Physiologically-Based…, Pharmaceutical research (2026) | [10.1007/s11095-026-04120-5](https://doi.org/10.1007/s11095-026-04120-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Świerczek_2023](drugs/drug_dexamethasone/pd_wierczek_2023_CRP.md) | Świerczek A et al., Anti-inflammatory effects of dexamethas…, Clinical and translational… (2023) | [10.1111/cts.13577](https://doi.org/10.1111/cts.13577) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Świerczek_2023](drugs/drug_dexamethasone/pd_wierczek_2023_IL_6.md) | Świerczek A et al., Anti-inflammatory effects of dexamethas…, Clinical and translational… (2023) | [10.1111/cts.13577](https://doi.org/10.1111/cts.13577) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Świerczek_2023](drugs/drug_dexamethasone/pd_wierczek_2023_TNF.md) | Świerczek A et al., Anti-inflammatory effects of dexamethas…, Clinical and translational… (2023) | [10.1111/cts.13577](https://doi.org/10.1111/cts.13577) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Snaterse_2023](drugs/drug_dexamethasone/pd_Snaterse_2023_AR_nuclear_fraction.md) | Snaterse G et al., Androgen receptor mutations modulate ac…, Prostate cancer and prostat… (2023) | [10.1038/s41391-022-00491-z](https://doi.org/10.1038/s41391-022-00491-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Snaterse_2023](drugs/drug_dexamethasone/pd_Snaterse_2023_cell_proliferation.md) | Snaterse G et al., Androgen receptor mutations modulate ac…, Prostate cancer and prostat… (2023) | [10.1038/s41391-022-00491-z](https://doi.org/10.1038/s41391-022-00491-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Snaterse_2023](drugs/drug_dexamethasone/pd_Snaterse_2023_luciferase_activity.md) | Snaterse G et al., Androgen receptor mutations modulate ac…, Prostate cancer and prostat… (2023) | [10.1038/s41391-022-00491-z](https://doi.org/10.1038/s41391-022-00491-z) |

## Coverage

- **PubMed hits:** 1173 matched, 85 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wen_2024.pdf` | Wen J et al., Pharmacokinetics of Dexamethasone in Ch…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.6108](https://doi.org/10.1002/jcph.6108) | [39120865](https://pubmed.ncbi.nlm.nih.gov/39120865) | The paper describes a population pharmacokinetic study for dexamethasone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Song_2021.pdf` | Song D et al., Across-species meta-analysis of dexamet…, Biopharmaceutics & drug dis… (2021) | popPK | 9 | [10.1002/bdd.2266](https://doi.org/10.1002/bdd.2266) | [33638217](https://pubmed.ncbi.nlm.nih.gov/33638217) | The paper reports quantitative PK parameters (CL, V, Q) for dexamethasone across species, but specific numeric values for volumes and clearances are not explicitly listed in the provided text, only summary statistics and model descriptions. |
| `Derendorf_1993.pdf` | Derendorf H et al., Receptor-based pharmacokinetic-pharmaco…, Journal of clinical pharmac… (1993) | pd | 5 | [10.1002/j.1552-4604.1993.tb03930.x](https://doi.org/10.1002/j.1552-4604.1993.tb03930.x) | [8440759](https://www.ncbi.nlm.nih.gov/pubmed/8440759) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Krzyzanski_2024.pdf` | Krzyzanski W et al., Pharmacodynamic Age Structured Populati…, Journal of pharmaceutical s… (2024) | pd | 5 | [10.1016/j.xphs.2023.10.040](https://doi.org/10.1016/j.xphs.2023.10.040) | [37926235](https://www.ncbi.nlm.nih.gov/pubmed/37926235) | metadata signals extractable PD data (Emax) |
| `Puisset_2004.pdf` | Puisset F et al., Dexamethasone as a probe for docetaxel…, Cancer chemotherapy and pha… (2004) | pgx | 8 | [10.1007/s00280-004-0823-0](https://doi.org/10.1007/s00280-004-0823-0) | [15133628](https://www.ncbi.nlm.nih.gov/pubmed/15133628) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhang_2022.pdf` | Zhang Y et al., A Systematic Review of Population Pharm…, European journal of drug me… (2022) | pgx | 8 | [10.1007/s13318-021-00737-6](https://doi.org/10.1007/s13318-021-00737-6) | [34985725](https://www.ncbi.nlm.nih.gov/pubmed/34985725) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Farooq_2016.pdf` | Farooq M et al., CYP2D6 Is Inducible by Endogenous and E…, Drug metabolism and disposi… (2016) | pgx | 7 | [10.1124/dmd.115.069229](https://doi.org/10.1124/dmd.115.069229) | [26965986](https://www.ncbi.nlm.nih.gov/pubmed/26965986) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nemoto_1995.pdf` | Nemoto N et al., Maintenance of phenobarbital-inducible…, Archives of biochemistry an… (1995) | pgx | 7 | [10.1006/abbi.1995.1048](https://doi.org/10.1006/abbi.1995.1048) | [7840637](https://www.ncbi.nlm.nih.gov/pubmed/7840637) | metadata signals extractable PGX data (Cyp2b, PK/PD-context) |
| `Shou_2008.pdf` | Shou M et al., Modeling, prediction, and in vitro in v…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.108.020602](https://doi.org/10.1124/dmd.108.020602) | [18669588](https://www.ncbi.nlm.nih.gov/pubmed/18669588) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Van_2018.pdf` | Van Veggel M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2018) | pgx | 7 | [10.1007/s40262-017-0565-x](https://doi.org/10.1007/s40262-017-0565-x) | [28667459](https://www.ncbi.nlm.nih.gov/pubmed/28667459) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hibino_2022.pdf` | Hibino H et al., Evaluation of hepatic CYP3A enzyme acti…, European journal of clinica… (2022) | pgx | 5 | [10.1007/s00228-022-03275-5](https://doi.org/10.1007/s00228-022-03275-5) | [35039908](https://www.ncbi.nlm.nih.gov/pubmed/35039908) | metadata signals extractable PGX data (CYP3A) |

<sub>queue written 2026-09-10T10:54:33.538418+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abduraman_2022 | not_relevant | 0 | 0 | The study investigates CYP inhibition by botanical products, not the effect of a gene variant on dexamethasone PK/PD. |
| PGx | Acikgöz_2009 | not_relevant | 0 | 0 | The paper studies the effect of dexamethasone as an enzyme inducer on diazepam metabolism in hepatocytes, not the pharmacogenomics of dexamethasone itself. |
| PGx | Adebodun_1993 | not_relevant | 0 | 0 | The study investigates cellular mechanisms of dexamethasone resistance in cell lines (membrane potential/volume) rather than pharmacokinetic or pharmacodynamic parameters in the context of human genetic variants. |
| PGx | Agarwal_2024 | not_relevant | 0 | 0 | The paper studies formononetin, not dexamethasone, and does not report pharmacogenomic effects on dexamethasone PK/PD. |
| PGx | Berlińska_2020 | not_relevant | 2 | 0 | The paper discusses general factors affecting dexamethasone suppression tests, including CYP3A4 metabolism, but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Bowden_1985 | not_relevant | 0 | 0 | The paper investigates the lipolytic effects of human growth hormone preparations and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dexamethasone. |
| PGx | Bullock_1995 | not_relevant | 0 | 0 | The study investigates enzyme induction in cynomolgus monkeys and does not report pharmacogenomic effects of human gene variants on dexamethasone PK/PD. |
| PGx | Cribb_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of sulfamethoxazole, not dexamethasone. |
| popPK | Czock_2005 | irrelevant | 2 | 0 | The paper is a review that discusses glucocorticoid PK generally and presents simulations for methylprednisolone, but it does not report original quantitative PK parameter values for dexamethasone. |
| PGx | Deb_2023 | not_relevant | 0 | 0 | The paper reports in silico drug-drug interaction simulations, not pharmacogenomic effects of gene variants on dexamethasone PK/PD. |
| popPK | Derendorf_1993 | irrelevant | 0 | 0 | The provided evidence contains only the title, with no quantitative pharmacokinetic parameters or data for dexamethasone. |
| popPK | Dosne_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for daratumumab, while dexamethasone is only a co-administered drug in the combination regimen. |
| PD | Dosne_2023 | not_relevant | 0 | 0 | The paper reports population PK and exposure-response analyses for daratumumab, not dexamethasone. |
| PGx | Farooq_2016 | not_relevant | 0 | 0 | The paper investigates the induction of CYP2D6 by corticosteroids (including dexamethasone) but does not report how a gene variant or genotype affects the pharmacokinetics or pharmacodynamics of dexamethasone. |
| PGx | Fischer_1990 | not_relevant | 0 | 0 | The paper investigates the metabolism of fluperlapine, not dexamethasone, and does not report pharmacogenomic effects on dexamethasone PK/PD. |
| popPK | Gawarammana_2011 | irrelevant | 0 | 0 | The paper is a review of paraquat poisoning where dexamethasone is only mentioned as a co-administered immunosuppressant, with no PK parameters reported for dexamethasone. |
| PGx | Gentile_1996 | not_relevant | 0 | 0 | The study investigates interindividual variability in dexamethasone metabolism in human liver microsomes but does not report specific gene variants or genotypes associated with PK/PD changes. |
| PGx | Gonzalez_1987 | not_relevant | 0 | 0 | The paper focuses on the characterization of the debrisoquine 4-hydroxylase gene (P450db1) and its polymorphism in rats, not on the pharmacokinetics or pharmacodynamics of dexamethasone. |
| PGx | Gourdeau_1983 | not_relevant | 0 | 0 | The paper studies alpha-fetoprotein in guinea pigs and mentions dexamethasone only as a suppressor of AFP levels, without reporting any pharmacogenomic effects on dexamethasone PK/PD. |
| popPK | Hanafin_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of belantamab mafodotin, with dexamethasone serving only as a co-administered agent without reported PK parameters. |
| PD | Hanafin_2025 | not_relevant | 0 | 0 | The paper reports exposure-response relationships for belantamab mafodotin, not dexamethasone. |
| PGx | Hatano_2022 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (aprepitant inhibiting CYP3A4) affecting dexamethasone, not a pharmacogenomic effect based on a gene variant or genotype. |
| PGx | Hedrich_2016 | not_relevant | 0 | 0 | The paper is a review of CYP2B6-mediated drug-drug interactions and pharmacogenomics for other drugs (e.g., efavirenz, cyclophosphamide), and does not report pharmacogenomic effects on the PK or PD of dexamethasone. |
| PGx | Heo_2017 | not_relevant | 0 | 0 | The paper reviews rolapitant and mentions dexamethasone only as a co-administered drug, without reporting any pharmacogenomic effects on dexamethasone PK/PD. |
| PGx | Hibino_2022 | not_relevant | 2 | 5 | The study evaluates CYP3A activity using endogenous markers (testosterone/cholesterol) and reports genotype-dependent changes in these markers, but it does not report pharmacokinetic or pharmacodynamic parameters of dexamethasone itself. |
| PGx | Himes_2014 | not_relevant | 2 | 5 | The paper identifies a gene (CRISPLD2) associated with drug response phenotypes and shows its expression changes with dexamethasone, but it does not report a pharmacokinetic or pharmacodynamic parameter of dexamethasone itself being altered by a specific genotype. |
| PGx | Holt_1994 | not_relevant | 0 | 0 | The paper studies dendritic cell turnover using dexamethasone as a depleting agent, not the pharmacokinetics or pharmacodynamics of dexamethasone itself. |
| PGx | Horiuchi_2024 | not_relevant | 0 | 0 | The paper focuses on in vitro culture media optimization for hepatocytes and cardiomyocytes, not on pharmacogenomic effects of dexamethasone. |
| PGx | Ikushiro_1995 | not_relevant | 0 | 0 | The paper studies drug-induced expression of UGT enzymes in rats, not the effect of a gene variant on dexamethasone pharmacokinetics or pharmacodynamics. |
| PGx | Irizar_1995 | not_relevant | 0 | 0 | The paper studies CYP expression in obese rats and mentions dexamethasone only as an inducer agent, not as the drug of interest for which PK/PD parameters are being analyzed in relation to a genetic variant. |
| PGx | Iwamoto_2010 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (bortezomib and itraconazole) and does not report any pharmacogenomic effects on dexamethasone PK/PD parameters. |
| PGx | Jakob_1995 | not_relevant | 0 | 0 | The paper studies the regulation of aromatase expression by dexamethasone in cell lines, not the effect of genetic variants on dexamethasone pharmacokinetics or pharmacodynamics. |
| popPK | Koiwai_2021 | irrelevant | 0 | 0 | The study focuses on the PK/PD of isatuximab, with dexamethasone serving only as a co-administered comparator agent without reported PK parameters. |
| PD | Koiwai_2021 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for isatuximab (and its combinations), but does not provide specific numeric PD parameters or exposure-response relationships for dexamethasone. |
| popPK | Krzyzanski_2024 | irrelevant | 0 | 0 | The paper title indicates a pharmacodynamic model for cell trafficking, with no evidence of dexamethasone pharmacokinetic parameters in the provided text. |
| PD | Krzyzanski_2024 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic model for cell trafficking but does not report any exposure-response or dose-response relationship for dexamethasone. |
| PGx | Lerman_2019 | not_relevant | 0 | 0 | The paper is a general review of pediatric ambulatory anesthesia and does not report specific pharmacogenomic effects on dexamethasone PK/PD parameters. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper investigates the role of CYP3A4 in the hepatotoxicity of dictamnine, using dexamethasone only as a CYP3A4 inducer, and does not report pharmacogenomic effects on dexamethasone's PK/PD parameters. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper studies the metabolism and pharmacodynamics of sinomenine, not dexamethasone, and does not report pharmacogenomic effects. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The study is a population pharmacokinetic analysis of dexamethasone in pediatric ALL patients that identifies asparaginase co-administration as a covariate, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Luo_2022 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of daratumumab, with dexamethasone serving only as a co-administered comparator agent in the treatment regimen. |
| PD | Luo_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and exposure-response of daratumumab, not dexamethasone. |
| PGx | Miyauchi_2022 | not_relevant | 0 | 0 | The paper investigates protein-protein interactions between CYP3A4 and UGT enzymes and their effect on enzyme activity, but does not report pharmacogenomic effects of gene variants on dexamethasone PK/PD parameters. |
| PGx | Miyaura_1983 | not_relevant | 0 | 0 | The paper studies the cooperative pharmacodynamic effect of dexamethasone and vitamin D3 on cell differentiation in leukemia cells, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Nemoto_1995 | not_relevant | 0 | 0 | The paper investigates the maintenance of Cyp2b gene expression in mouse hepatocyte cultures and the role of dexamethasone as a culture supplement, not the pharmacokinetics or pharmacodynamics of dexamethasone itself. |
| PGx | Nerurkar_1993 | not_relevant | 0 | 0 | The paper investigates CYP450 substrate specificity for methoxyresorufin and benzyloxyresorufin in rodents, not the pharmacogenomics of dexamethasone. |
| popPK | Papathanasiou_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for belantamab mafodotin (an antibody-drug conjugate), not dexamethasone, which is only mentioned as a co-administered drug in combination regimens. |
| popPK | Passey_2018 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of elotuzumab, where dexamethasone is only mentioned as a co-administered drug in combination therapy, with no PK parameters reported for dexamethasone. |
| PGx | Paudel_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A modulation) on loxoprofen PK, not pharmacogenomic effects on dexamethasone. |
| popPK | Perez-Ruixo_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trabectedin, with dexamethasone serving only as a covariate for concomitant administration rather than the subject drug. |
| PGx | Peterson_1986 | not_relevant | 0 | 0 | The paper studies disease states (Addison's/Cushing's) and dexamethasone suppression in dogs, but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Prerostova_2020 | not_relevant | 0 | 0 | The paper studies plant physiology (Arabidopsis) and uses dexamethasone only as a chemical inducer for a gene promoter, not as a drug for pharmacokinetic/pharmacodynamic analysis in humans or animals. |
| PGx | Puisset_2004 | not_relevant | 0 | 0 | The study reports no significant difference in pharmacokinetic parameters between genotypes. |
| PGx | Puisset_2005 | not_relevant | 0 | 0 | The study found no association between CYP3A5 or MDR1 genotypes and dexamethasone pharmacokinetic parameters. |
| PGx | Relling_1994 | not_relevant | 0 | 0 | The paper investigates the metabolism of epipodophyllotoxins (etoposide/teniposide) by CYP3A4, using dexamethasone only as a competitive inhibitor to identify the enzyme, rather than reporting pharmacogenomic effects on dexamethasone's PK/PD. |
| PGx | Savelieva_2015 | not_relevant | 0 | 0 | The paper analyzes the population pharmacokinetics of panobinostat, not dexamethasone, and does not report pharmacogenomic effects on dexamethasone PK/PD. |
| PGx | Schoffelen_2018 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving aprepitant, not pharmacogenomic effects on dexamethasone. |
| PGx | Shimamoto_2021 | not_relevant | 0 | 0 | The study investigates dose-dependent pharmacokinetics and efficacy of dexamethasone in cancer patients but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Shou_2008 | not_relevant | 0 | 0 | The paper focuses on CYP3A4 induction modeling and drug-drug interactions, not on pharmacogenomic effects of gene variants on dexamethasone PK/PD. |
| PGx | Sidhu_1995 | not_relevant | 0 | 0 | The paper investigates the effect of dexamethasone on CYP gene expression in rat hepatocytes, not the effect of a human gene variant on dexamethasone pharmacokinetics or pharmacodynamics. |
| PGx | Sidhu_1995_2 | not_relevant | 0 | 0 | The paper investigates cAMP-mediated regulation of CYP gene expression in rat hepatocytes and does not report pharmacogenomic effects on dexamethasone PK or PD parameters. |
| popPK | Snaterse_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of androgen receptor mutations and ligand binding, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for dexamethasone. |
| popPK | Song_2021 | relevant | 9 | 2 | The paper reports quantitative PK parameters (CL, V, Q) for dexamethasone across species, but specific numeric values for volumes and clearances are not explicitly listed in the provided text, only summary statistics and model descriptions. |
| PGx | Suntornlohanakul_2026 | not_relevant | 0 | 0 | The study examines longitudinal changes in dexamethasone suppression test results and clinical outcomes in adrenal incidentalomas, but does not report pharmacogenomic effects on dexamethasone PK/PD parameters. |
| PGx | Terrier_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (dexamethasone inducing CYP3A4/P-gp affecting apixaban/rivaroxaban), not the effect of a specific gene variant or genotype on dexamethasone pharmacokinetics or pharmacodynamics. |
| PGx | Tomlinson_1997 | not_relevant | 0 | 0 | The study examines species differences in dexamethasone metabolism in vitro, not the effect of human gene variants or genotypes on PK/PD parameters. |
| PGx | Urien_2011 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of etoposide, not dexamethasone. |
| PGx | Van_2018 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of panobinostat and its drug-drug interaction with dexamethasone via CYP2D6 inhibition, but it does not report any pharmacogenomic effects (gene variants) on dexamethasone PK/PD. |
| PGx | Vitellius_2018 | not_relevant | 2 | 0 | The paper is a review of glucocorticoid receptor pathophysiology and mutations, not a study reporting specific pharmacokinetic or pharmacodynamic parameter changes for dexamethasone based on genotype. |
| popPK | Wen_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study for dexamethasone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | White_1995 | not_relevant | 0 | 0 | The paper studies the metabolism of tamoxifen, not dexamethasone, and does not report pharmacogenomic effects on dexamethasone PK/PD. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | The study investigates the effect of CYP3A4 modulation on triptolide-induced hepatotoxicity, using dexamethasone only as a CYP3A4 inducer, and does not report pharmacogenomic effects on dexamethasone's PK or PD parameters. |
| PGx | Xu_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of triptolide and (5R)-5-hydroxytriptolide, not dexamethasone; dexamethasone is used only as a CYP3a inducer to test drug-drug interactions. |
| PGx | You_2021 | not_relevant | 0 | 0 | The paper investigates the metabolism of gelsemine by CYP3A4, using dexamethasone only as an inducer to test the pathway, rather than reporting a pharmacogenomic effect on dexamethasone's own PK/PD parameters. |
| PGx | Zhang_2003 | not_relevant | 0 | 0 | The paper characterizes CYP450 expression and induction in mouse intestine but does not report pharmacokinetic or pharmacodynamic parameters of dexamethasone itself. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a systematic review of methotrexate, not dexamethasone, and contains no dexamethasone PK parameters. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper is a systematic review of methotrexate pharmacokinetics, not dexamethasone. |
| PGx | Zimmerman_2018 | not_relevant | 0 | 0 | The study investigates the pathogenesis of elevated alkaline phosphatase and sex steroids in Scottish Terriers using dexamethasone only as a diagnostic suppression test, not to evaluate pharmacogenomic effects on dexamethasone PK/PD. |
| popPK | Zufferey_2024 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis focusing on dose-response relationships for analgesic duration, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | van_2023 | not_relevant | 0 | 0 | The study investigates determinants of neurobehavioral and sleep side effects, finding no association between genetic variants and dexamethasone pharmacokinetics or pharmacodynamics. |
| PGx | van_2024 | not_relevant | 0 | 0 | The paper focuses on age-related physiological changes (CYP3A4 ontogeny) and PBPK modeling for pediatric dosing, not on specific gene variants or genotypes affecting pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dexamethasone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
