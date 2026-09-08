# gabapentin

- **generic name:** gabapentin
- **ATC codes:** `N02BF01`
- **DrugBank:** [DB00996](https://go.drugbank.com/drugs/DB00996)
- **groups:** approved, investigational

## About

**Description.** Gabapentin is a structural analogue of the inhibitory neurotransmitter gamma-aminobutyric acid ([GABA]) that was first approved for use in the United States in 1993.[L8717] It was originally developed as a novel anti-epileptic for the treatment of certain types of seizures[A186277,A186143] - today it is also widely used to treat neuropathic pain.[A14097,A186179] Gabapentin has some stark advantages as compared with other anti-epileptics, such as a relatively benign adverse effect profile, wide therapeutic index, and lack of appreciable metabolism making it unlikely to participate in pharmacokinetic drug interactions.[A186143,A185981,L8717]. It is structurally and functionally related to another GABA derivative, [pregabalin].

**Indication.** In the United States, gabapentin is officially indicated for the treatment of postherpetic neuralgia in adults and for the adjunctive treatment of partial-onset seizures, with or without secondary generalization, in patients 3 years of age and older.[L8717] In Europe, gabapentin is indicated for adjunctive therapy in the treatment of partial-onset seizures, with or without secondary generalization, in patients 6 years of age and older and as monotherapy in patients 12 years of age and older. It is also used in adults for the treatment of various types of peripheral neuropathic pain, such as painful diabetic neuropathy.[L8732]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 11:55 | 2:37:49 | 1/2/0 | 1/1/0 | 0/0/0 | 247,991/31,373 | ollama / qwen3.8:27b-q4_K_M | 15 | 4/11 | 14/1 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Zubaydi_2024](drugs/drug_gabapentin/Gabapentin_AlZubaydi2024_reference.md) | Al-Zubaydi F et al., Development of a Population Pharmacokin…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121514](https://doi.org/10.3390/pharmaceutics16121514) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Silvola_2025](drugs/drug_gabapentin/Gabapentin_Silvola2025_reference.md) | Silvola R et al., Population Pharmacokinetics and Transfe…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13295](https://doi.org/10.1002/psp4.13295) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2026](drugs/drug_gabapentin/Gabapentin_Zhou2026_reference.md) | Zhou L et al., Gabapentin CNS exposure and analgesic r…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Oggianu_2023](drugs/drug_gabapentin/pd_Oggianu_2023_number_of_writhings.md) | Oggianu L et al., PK/PD analysis of trazodone and gabapen…, Clinical and translational… (2023) | [10.1111/cts.13472](https://doi.org/10.1111/cts.13472) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhou_2026](drugs/drug_gabapentin/pd_Zhou_2026_VAS.md) | Zhou L et al., Gabapentin CNS exposure and analgesic r…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901) |

## Coverage

- **PubMed hits:** 143 matched, 62 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2013.pdf` | Chen C, Meta-analyses of dose-exposure relation…, European journal of clinica… (2013) | pd | 5 | [10.1007/s00228-013-1545-1](https://doi.org/10.1007/s00228-013-1545-1) | [23743781](https://www.ncbi.nlm.nih.gov/pubmed/23743781) | metadata signals extractable PD data (Emax) |
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | pd | 5 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://www.ncbi.nlm.nih.gov/pubmed/22171585) | metadata signals extractable PD data (exposure-response) |
| `Ahmad_2021.pdf` | Ahmad KA et al., Microglial IL-10 and β-endorphin expres…, Brain, behavior, and immuni… (2021) | pd | 4 | [10.1016/j.bbi.2021.04.007](https://doi.org/10.1016/j.bbi.2021.04.007) | [33862171](https://www.ncbi.nlm.nih.gov/pubmed/33862171) | metadata signals extractable PD data (Emax) |
| `Manville_2018.pdf` | Manville RW et al., Gabapentin Is a Potent Activator of KCN…, Molecular pharmacology (2018) | pd | 4 | [10.1124/mol.118.112953](https://doi.org/10.1124/mol.118.112953) | [30021858](https://www.ncbi.nlm.nih.gov/pubmed/30021858) | metadata signals extractable PD data (EC50) |
| `Safgren_2025.pdf` | Safgren SL et al., The impact of coadministration of venla…, Breast cancer research and… (2025) | pgx | 8 | [10.1007/s10549-025-07644-3](https://doi.org/10.1007/s10549-025-07644-3) | [40011368](https://www.ncbi.nlm.nih.gov/pubmed/40011368) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Tran_2017.pdf` | Tran P et al., Population pharmacokinetics of gabapent…, Journal of pharmacokinetics… (2017) | pgx | 8 | [10.1007/s10928-017-9549-6](https://doi.org/10.1007/s10928-017-9549-6) | [29018999](https://www.ncbi.nlm.nih.gov/pubmed/29018999) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Yamamoto_2019.pdf` | Yamamoto PA et al., Pharmacogenetics-based population pharm…, Basic & clinical pharmacolo… (2019) | pgx | 8 | [10.1111/bcpt.13126](https://doi.org/10.1111/bcpt.13126) | [30192429](https://www.ncbi.nlm.nih.gov/pubmed/30192429) | metadata signals extractable PGX data (SLC22A2, PK/PD-context) |
| `Alcantara-Montero_2017.pdf` | Alcantara-Montero A, [Desvenlafaxine and neuropathic pain: a…, Revista de neurologia (2017) | pgx | 7 | not captured | [28229443](https://www.ncbi.nlm.nih.gov/pubmed/28229443) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Benedetti_2000.pdf` | Benedetti MS, Enzyme induction and inhibition by new…, Fundamental & clinical phar… (2000) | pgx | 7 | [10.1111/j.1472-8206.2000.tb00411.x](https://doi.org/10.1111/j.1472-8206.2000.tb00411.x) | [11030437](https://www.ncbi.nlm.nih.gov/pubmed/11030437) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Kakuda_2011.pdf` | Kakuda TN et al., Pharmacokinetic interactions between et…, Clinical pharmacokinetics (2011) | pgx | 7 | [10.2165/11534740-000000000-00000](https://doi.org/10.2165/11534740-000000000-00000) | [21142266](https://www.ncbi.nlm.nih.gov/pubmed/21142266) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Syvänen_2006.pdf` | Syvänen S et al., Pharmacokinetic consequences of active…, Pharmaceutical research (2006) | pgx | 7 | [10.1007/s11095-006-9780-0](https://doi.org/10.1007/s11095-006-9780-0) | [16575498](https://www.ncbi.nlm.nih.gov/pubmed/16575498) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Turnheim_2004.pdf` | Turnheim K, [Drug interactions with antiepileptic a…, Wiener klinische Wochenschr… (2004) | pgx | 7 | [10.1007/BF03040747](https://doi.org/10.1007/BF03040747) | [15038401](https://www.ncbi.nlm.nih.gov/pubmed/15038401) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-08-28T13:02:55.519542+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aylón_2026 | not_relevant | 2 | 0 | The paper is a review classifying drugs as P-gp substrates and concludes gabapentin is likely not a substrate, but it does not report a specific pharmacogenomic effect (e.g., genotype-driven change in PK/PD) for gabapentin. |
| PGx | Burand_2023 | not_relevant | 0 | 0 | The paper studies behavioral phenotypes in a Fabry disease rat model and the effect of gabapentin on these behaviors, but does not report pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) or specific pharmacogenomic effects on drug disposition/efficacy metrics. |
| PGx | Costa_2021 | not_relevant | 0 | 0 | The study tested SLC22A2 and SLC22A4 genotypes as covariates but found no significant association with gabapentin pharmacokinetic parameters. |
| PGx | Desmarais_2010 | not_relevant | 0 | 0 | The paper discusses gabapentin only as a safe alternative for treating tamoxifen-induced hot flashes and does not report any pharmacogenomic effects on gabapentin's PK or PD parameters. |
| PGx | Kawakami_2015 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (magnesium oxide) affecting gabapentin PK, but does not report a pharmacogenomic effect (gene variant) on gabapentin. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic screening of drug resistance in an animal model where gabapentin is used only as a test drug, and no quantitative pharmacokinetic parameters (CL, V, etc.) for gabapentin are reported. |
| PD | Kumar_2020 | not_relevant | 1 | 0 | The paper reports a single fixed dose of gabapentin (224 mg/kg) resulting in a qualitative lack of efficacy in a mouse model, without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Oggianu_2023 | relevant | 8 | 2 | The study reports quantitative PK parameters for gabapentin in mice (subject drug), but the specific numeric values for clearance, volume, and rate constants are located in Table 1 and Supplementary Tables (S2-S6) which are not fully provided in the evidence text. |
| PGx | Parker_2024 | not_relevant | 0 | 0 | The paper uses genetics to prioritize drug targets for psychiatric disorders and mentions gabapentin enacarbil as a repurposing candidate, but it does not report any pharmacogenomic effects on the PK or PD parameters of gabapentin. |
| PGx | Yakhchalian_2024 | not_relevant | 0 | 0 | The paper is a case report on serotonin syndrome management and does not report any pharmacogenomic effects on gabapentin PK/PD parameters. |
| PGx | Zervou_2025 | not_relevant | 0 | 0 | The paper describes a case series of patients with hypophosphatasia (ALPL variants) and neuropathic pain, mentioning gabapentin use for symptom management, but it does not report any pharmacogenomic analysis of how the ALPL genotype affects the pharmacokinetics or pharmacodynamics of gabapentin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_gabapentin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
