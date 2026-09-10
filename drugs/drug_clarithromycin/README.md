# clarithromycin

- **generic name:** clarithromycin
- **ATC codes:** `A02BD04`, `A02BD05`, `A02BD06`, `A02BD07`, `A02BD09`, `A02BD11`, `A02BD12`, `A02BD14`, `J01FA09`
- **DrugBank:** [DB01211](https://go.drugbank.com/drugs/DB01211)
- **groups:** approved, investigational

## About

**Description.** Clarithromycin, a semisynthetic macrolide antibiotic derived from erythromycin, inhibits bacterial protein synthesis by binding to the bacterial 50S ribosomal subunit. Binding inhibits peptidyl transferase activity and interferes with amino acid translocation during the translation and protein assembly process. Clarithromycin may be bacteriostatic or bactericidal depending on the organism and drug concentration.

**Indication.** An alternative medication for the treatment of acute otitis media caused by <i>H. influenzae, M. catarrhalis, or S. pneumoniae</i> in patients with a history of type I penicillin hypersensitivity. Also for the treatment of pharyngitis and tonsillitis caused by susceptible <i>Streptococcus pyogenes</i>, as well as respiratory tract infections including acute maxillary sinusitis, acute bacterial exacerbations of chronic bronchitis, mild to moderate community-acquired pneuomia, Legionnaires' disease, and pertussis. Other indications include treatment of uncomplicated skin or skin structure infections, helicobacter pylori infection, duodenal ulcer disease, bartonella infections, early Lyme disease, and encephalitis caused by <i>Toxoplasma gondii</i> (in HIV infected patients in conjunction with pyrimethamine). Clarithromycin may also decrease the incidence of cryptosporidiosis, prevent the occurence of α-hemolytic (viridans group) streptococcal endocarditis, as well as serve as a primary prevention for <i>Mycobacterium avium</i> complex (MAC) bacteremia or disseminated infections (in adults, adolescents, and children with advanced HIV infection).

Clarithromycin is indicated in combination with [vonoprazan] and [amoxicillin] as co-packaged triple therapy to treat _Helicobacter pylori_ (_H. pylori_) infection in adults.[L41695]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 19:34 | 33:53 | 0/0/0 | 0/0/0 | 0/0/0 | 145,618/56,277 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 4/16 | 19/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> | [Shah_2025](drugs/drug_clarithromycin/Clarithromycin_Shah2025_mean_parameter_estimates.md) | Shah RV et al., Intravenous Clarithromycin in Criticall…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559) |
| <span class="pk-badge pk-badge--neutral">None</span> | [Shah_2025](drugs/drug_clarithromycin/Clarithromycin_Shah2025_relative_standard_error.md) | Shah RV et al., Intravenous Clarithromycin in Criticall…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559) |

## Coverage

- **PubMed hits:** 714 matched, 75 returned
- **screened:** 15  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_22 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Poapolathep_2022.pdf` | Poapolathep S et al., Pharmacokinetic profiles of clarithromy…, Journal of veterinary pharm… (2022) | popPK | 9 | [10.1111/jvp.13034](https://doi.org/10.1111/jvp.13034) | [34845734](https://pubmed.ncbi.nlm.nih.gov/34845734) | The study reports quantitative PK parameters (t1/2, F%, protein binding) for clarithromycin in crocodiles, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Del_2009.pdf` | Del Bortolo Ruenis AP et al., A PK/PD approach on the effects of clar…, International journal of cl… (2009) | pd | 5 | [10.5414/cpp47096](https://doi.org/10.5414/cpp47096) | [19203565](https://www.ncbi.nlm.nih.gov/pubmed/19203565) | metadata signals extractable PD data (PK/PD) |
| `Sanders_2026.pdf` | Sanders M et al., Effect of concomitant rifampin and clar…, Expert opinion on drug meta… (2026) | pd | 5 | [10.1080/17425255.2026.2689048](https://doi.org/10.1080/17425255.2026.2689048) | [42287332](https://www.ncbi.nlm.nih.gov/pubmed/42287332) | metadata signals extractable PD data (EC50) |
| `Srivastava_2022.pdf` | Srivastava S et al., An overview of drugs for the treatment…, Journal of global antimicro… (2022) | pd | 4 | [10.1016/j.jgar.2021.12.010](https://doi.org/10.1016/j.jgar.2021.12.010) | [34933140](https://www.ncbi.nlm.nih.gov/pubmed/34933140) | metadata signals extractable PD data (sigmoid) |
| `Byeon_2018.pdf` | Byeon JY et al., The influences of CYP2C9*1/*3 genotype…, Archives of pharmacal resea… (2018) | pgx | 8 | [10.1007/s12272-018-1070-y](https://doi.org/10.1007/s12272-018-1070-y) | [30178440](https://www.ncbi.nlm.nih.gov/pubmed/30178440) | metadata signals extractable PGX data (CYP2C9*1, PK/PD-context) |
| `Maev_2017.pdf` | Maev IV et al., [Molecular genetic predictors of resist…, Terapevticheskii arkhiv (2017) | pgx | 8 | [10.17116/terarkh20178985-12](https://doi.org/10.17116/terarkh20178985-12) | [28914844](https://www.ncbi.nlm.nih.gov/pubmed/28914844) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Marsousi_2018.pdf` | Marsousi N et al., Prediction of drug-drug interactions us…, Biopharmaceutics & drug dis… (2018) | pgx | 8 | [10.1002/bdd.2107](https://doi.org/10.1002/bdd.2107) | [28960401](https://www.ncbi.nlm.nih.gov/pubmed/28960401) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Saito_2005.pdf` | Saito M et al., Effects of clarithromycin on lansoprazo…, British journal of clinical… (2005) | pgx | 8 | [10.1111/j.1365-2125.2004.02329.x](https://doi.org/10.1111/j.1365-2125.2004.02329.x) | [15752376](https://www.ncbi.nlm.nih.gov/pubmed/15752376) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Yang_2009.pdf` | Yang JC et al., Pharmacokinetic- pharmacodynamic analys…, British journal of clinical… (2009) | pgx | 8 | [10.1111/j.1365-2125.2009.03393.x](https://doi.org/10.1111/j.1365-2125.2009.03393.x) | [19552744](https://www.ncbi.nlm.nih.gov/pubmed/19552744) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Abduljalil_2009.pdf` | Abduljalil K et al., Modeling the autoinhibition of clarithr…, Antimicrobial agents and ch… (2009) | pgx | 7 | [10.1128/AAC.01193-08](https://doi.org/10.1128/AAC.01193-08) | [19414584](https://www.ncbi.nlm.nih.gov/pubmed/19414584) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Arazo_2013.pdf` | Arazo Garcés P et al., [Pharmacokinetic interactions], Enfermedades infecciosas y… (2013) | pgx | 7 | [10.1016/S0213-005X(13)70138-1](https://doi.org/10.1016/S0213-005X(13)70138-1) | [24252529](https://www.ncbi.nlm.nih.gov/pubmed/24252529) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Becker_2016.pdf` | Becker C et al., Pharmacokinetic interaction of riocigua…, Pulmonary circulation (2016) | pgx | 7 | [10.1086/685016](https://doi.org/10.1086/685016) | [27162627](https://www.ncbi.nlm.nih.gov/pubmed/27162627) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Djebli_2021.pdf` | Djebli N et al., Physiologically-Based Pharmacokinetic M…, European journal of drug me… (2021) | pgx | 7 | [10.1007/s13318-021-00714-z](https://doi.org/10.1007/s13318-021-00714-z) | [34495458](https://www.ncbi.nlm.nih.gov/pubmed/34495458) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Gallelli_2017.pdf` | Gallelli L et al., Drug-Drug Interactions in Cocaine-users…, Current drug abuse reviews (2017) | pgx | 7 | [10.2174/1874473710666170920143344](https://doi.org/10.2174/1874473710666170920143344) | [29185916](https://www.ncbi.nlm.nih.gov/pubmed/29185916) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Kaukab_2020.pdf` | Kaukab I et al., Effect of clarithromycin pre-treatment…, Expert opinion on drug meta… (2020) | pgx | 7 | [10.1080/17425255.2020.1779699](https://doi.org/10.1080/17425255.2020.1779699) | [32524862](https://www.ncbi.nlm.nih.gov/pubmed/32524862) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nakade_2008.pdf` | Nakade S et al., Effect of clarithromycin on the pharmac…, Drug metabolism and pharmac… (2008) | pgx | 7 | [10.2133/dmpk.23.428](https://doi.org/10.2133/dmpk.23.428) | [19122337](https://www.ncbi.nlm.nih.gov/pubmed/19122337) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ngeyvijit_2023.pdf` | Ngeyvijit J et al., CYP3A4/P-glycoprotein inhibitors relate…, BMJ case reports (2023) | pgx | 7 | [10.1136/bcr-2023-257186](https://doi.org/10.1136/bcr-2023-257186) | [37813551](https://www.ncbi.nlm.nih.gov/pubmed/37813551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Williams_2002.pdf` | Williams JA et al., Comparative metabolic capabilities of C…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.8.883](https://doi.org/10.1124/dmd.30.8.883) | [12124305](https://www.ncbi.nlm.nih.gov/pubmed/12124305) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhanel_2016.pdf` | Zhanel GG et al., Solithromycin: A Novel Fluoroketolide f…, Drugs (2016) | pgx | 7 | [10.1007/s40265-016-0667-z](https://doi.org/10.1007/s40265-016-0667-z) | [27909995](https://www.ncbi.nlm.nih.gov/pubmed/27909995) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zambon_2007.pdf` | Zambon CF et al., Clarithromycin resistance, tumor necros…, Journal of gastrointestinal… (2007) | pgx | 5 | [10.1007/s11605-007-0246-4](https://doi.org/10.1007/s11605-007-0246-4) | [17846855](https://www.ncbi.nlm.nih.gov/pubmed/17846855) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T19:14:25.237883+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Del_2009 | irrelevant | 0 | 0 | The evidence provided contains only the title of the paper, with no quantitative pharmacokinetic parameters or numeric values for clarithromycin present. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions where clarithromycin is listed only as an inhibitor, not as the subject drug for PK parameter estimation. |
| popPK | Echizen_2016 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of vonoprazan, and clarithromycin is only mentioned as a co-administered drug in a drug-drug interaction context without providing its specific disposition parameters. |
| popPK | Hirai_2024 | irrelevant | 2 | 0 | The study focuses on tacrolimus pharmacokinetics and drug-drug interactions, with clarithromycin serving only as a mechanistic inhibitor in the model, and no quantitative PK parameter values for clarithromycin are provided in the evidence. |
| popPK | Ho_2022 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotic resistance rates in H. pylori, not a pharmacokinetic study, and contains no PK parameters for clarithromycin. |
| popPK | Jayasagar_2000 | irrelevant | 1 | 0 | Clarithromycin is a co-administered drug used to study the pharmacokinetics of tolbutamide, and no quantitative PK parameters for clarithromycin itself are reported. |
| popPK | Jeong_2019 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of clinical outcomes and drug interactions, not a pharmacokinetic study, and reports no PK parameters for clarithromycin. |
| popPK | Katsube_2014 | irrelevant | 1 | 0 | The study focuses on the PK/PD modeling of modithromycin, with clarithromycin serving only as a comparator in in-vitro time-kill assays, and no quantitative disposition parameters for clarithromycin are reported. |
| popPK | Kurosawa_2021 | irrelevant | 2 | 3 | The study focuses on the pharmacokinetics of bedaquiline, with clarithromycin serving only as a co-administered CYP3A inhibitor; while non-compartmental parameters (Cmax, AUC) for clarithromycin are reported, no compartmental or population PK parameters (CL, V, ka) for clarithromycin are provided. |
| popPK | Methaneethorn_2014 | irrelevant | 2 | 0 | The study focuses on a drug-drug interaction model where clarithromycin acts as an inhibitor of simvastatin, and no quantitative PK parameter values for clarithromycin are provided in the evidence. |
| popPK | Sanders_2026 | irrelevant | 0 | 0 | The study focuses on elexacaftor-tezacaftor-ivacaftor with clarithromycin as a co-administered probe, and no quantitative PK parameters for clarithromycin are provided in the evidence. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay (MIC/efficacy) for Buruli ulcer treatment, not a pharmacokinetic study, and clarithromycin is used only as a comparator drug. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | The paper is a review of treatment options for Mycobacterium kansasii and does not report original quantitative pharmacokinetic parameters for clarithromycin. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The paper is an antibiotic susceptibility survey (MICs) and does not report pharmacokinetic parameters for clarithromycin. |
| popPK | Wei_2023 | irrelevant | 2 | 1 | Clarithromycin is a co-administered perpetrator drug in a PBPK study focused on tegoprazan, and specific quantitative PK parameters for clarithromycin are not reported in the provided text (values are in supplementary material or SimCYP library). |
| popPK | Zhanel_2016 | irrelevant | 0 | 0 | The paper focuses on solithromycin, not clarithromycin, and no PK parameters for clarithromycin are reported. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of clarithromycin bioavailability in cyanobacteria, not a pharmacokinetic study, and reports no PK parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_clarithromycin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
