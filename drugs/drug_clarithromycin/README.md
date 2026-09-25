<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;clarithromycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clarithromycin_Shah2025_reference&quot;,&quot;label&quot;:&quot;Shah_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-18 05:33 | 10:27 | 1/0/0 | 0/3/0 | 0/0/0 | 264,130/15,756 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 4/16 | 19/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Shah_2025_reference](drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference.md) | Shah RV et al., Intravenous Clarithromycin in Criticall…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14060559](https://doi.org/10.3390/antibiotics14060559) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hirai_2024](drugs/drug_clarithromycin/pd_Hirai_2024_CL_TAC.md) | Hirai T et al., Pharmacokinetic Model of Drug Interacti…, European journal of drug me… (2024) | [10.1007/s13318-024-00915-2](https://doi.org/10.1007/s13318-024-00915-2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Singh_2025](drugs/drug_clarithromycin/pd_Singh_2025_relative_light_units.md) | Singh S et al., Repurposing drugs to advance the treatm…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00029-25](https://doi.org/10.1128/aac.00029-25) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhang_2023](drugs/drug_clarithromycin/pd_Zhang_2023_Microcystis_aeruginosa_growth_inhibition.md) | Zhang Q et al., The influence of pH and dissolved organ…, The Science of the total en… (2023) | [10.1016/j.scitotenv.2023.166781](https://doi.org/10.1016/j.scitotenv.2023.166781) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clarithromycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLC22A7` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>“…12 hours, approximately 20% of the dose is excreted in the urine as clarithromycin, while…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 714 matched, 75 returned
- **screened:** 15  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
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

<sub>queue written 2026-09-18T05:24:22.122982+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abduljalil_2009 | not_relevant | 0 | 0 | The study models the autoinhibition of clarithromycin metabolism in healthy volunteers but does not investigate the impact of specific gene variants or genotypes on pharmacokinetic parameters. |
| PGx | Arazo_2013 | not_relevant | 0 | 0 | The text describes a drug-drug interaction between rilpivirine and clarithromycin, not a pharmacogenomic effect of a gene variant on clarithromycin's PK/PD. |
| PGx | Attia_2019 | not_relevant | 0 | 0 | The study investigates drug-drug interactions affecting omeprazole metabolism, not the pharmacogenomics of clarithromycin. |
| PGx | Auttajaroon_2019 | not_relevant | 0 | 0 | The study examines the association between CYP2C19 genotype and H. pylori antibiotic resistance (including clarithromycin) and FD subtypes, but does not measure or report pharmacokinetic or pharmacodynamic parameters of clarithromycin in humans. |
| PGx | Becker_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (riociguat with clarithromycin) in healthy males, not a pharmacogenomic effect of a gene variant on clarithromycin's PK/PD. |
| PGx | Byeon_2018 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of zolpidem, not clarithromycin. |
| PGx | Cao_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of Zastaprazan (JP-1366) and its drug-drug interactions, not the pharmacogenomics of clarithromycin. |
| PGx | Cobos-Trigueros_2009 | not_relevant | 0 | 0 | The text is a general review of macrolides and ketolides that mentions CYP3A4 metabolism but does not report specific pharmacogenomic effects of gene variants on clarithromycin PK/PD parameters. |
| PGx | Cui_2021 | not_relevant | 0 | 0 | The study investigates bacterial resistance genes (H. pylori) and their effect on clinical eradication rates, not human pharmacogenomic variants affecting the PK or PD of clarithromycin. |
| popPK | Del_2009 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Del_2009 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, results, or any numeric PD parameters. |
| PGx | Djebli_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of entrectinib and its interaction with clarithromycin, not on the pharmacogenomics of clarithromycin itself. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions where clarithromycin is listed only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Dresser_2000 | not_relevant | 1 | 0 | The text is a general review of CYP3A4 inhibition and drug interactions, mentioning clarithromycin only as an example of an inhibitor without providing any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Echizen_2016 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of vonoprazan, and clarithromycin is only mentioned as a co-administered drug in a drug-drug interaction context without reporting its specific disposition parameters. |
| PGx | Echizen_2016 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of vonoprazan and its interaction with clarithromycin, but does not report a pharmacogenomic effect (gene variant) on clarithromycin's PK or PD parameters. |
| PGx | Gallelli_2017 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions in cocaine users and mentions clarithromycin only as a CYP3A4 inhibitor, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Ghiaur_2023 | not_relevant | 0 | 0 | The paper investigates the role of CYP3A4 in bone marrow chemoprotection and uses clarithromycin as an inhibitor, but it does not report pharmacogenomic effects of gene variants on clarithromycin's PK or PD parameters. |
| PGx | Hanke_2018 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of drug-drug interactions (DDIs) and does not report pharmacogenomic effects (gene variants) on clarithromycin PK/PD. |
| popPK | Hirai_2024 | irrelevant | 2 | 0 | The study focuses on tacrolimus PK and clarithromycin is only a co-administered inhibitor in a mechanistic model, with no quantitative PK parameter values for clarithromycin provided in the evidence. |
| PGx | Hirai_2024 | not_relevant | 0 | 0 | The paper models the drug-drug interaction between tacrolimus and CYP3A4 inhibitors (voriconazole and clarithromycin) but does not report pharmacogenomic effects (gene variants) on clarithromycin's PK/PD parameters. |
| popPK | Ho_2022 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotic resistance rates in H. pylori, not a pharmacokinetic study, and contains no PK parameters for clarithromycin. |
| popPK | Jayasagar_2000 | irrelevant | 1 | 0 | Clarithromycin is a co-administered drug used to study the pharmacokinetics of tolbutamide, and no quantitative PK parameters for clarithromycin itself are reported. |
| popPK | Jeong_2019 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of clinical outcomes (hospitalization, AKI) following drug interactions, not a pharmacokinetic study, and reports no PK parameters for clarithromycin. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 0 | The paper studies the metabolism of terfenadine and its inhibition by clarithromycin, not the pharmacokinetics or pharmacodynamics of clarithromycin itself. |
| popPK | Katsube_2014 | irrelevant | 1 | 0 | The study focuses on the PK/PD modeling of modithromycin, with clarithromycin serving only as a comparator in in-vitro time-kill assays, and no quantitative disposition parameters for clarithromycin are reported. |
| PD | Katsube_2014 | not_relevant | 4 | 3 | The paper focuses on modithromycin and only uses clarithromycin as a comparator in in vitro time-kill modeling; it does not report specific numeric PD parameters (e.g., Emax, EC50) for clarithromycin in the provided text. |
| PGx | Kaukab_2020 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin affecting metoclopramide PK) in a general population, not a pharmacogenomic effect of a gene variant on clarithromycin. |
| PGx | Klis_2024 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of clarithromycin in patients with Mycobacterium ulcerans infection and drug-drug interactions with rifampicin, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Kovar_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of clomiphene, not clarithromycin; clarithromycin is only used as a perpetrator drug in interaction studies. |
| PGx | Kurata_2020 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of theophylline and the effect of liver disease, not on the pharmacogenomics of clarithromycin. |
| PGx | Kurata_2021 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of theophylline and the impact of heart failure, not on the pharmacogenomics of clarithromycin. |
| popPK | Kurosawa_2021 | irrelevant | 2 | 3 | The study focuses on the pharmacokinetics of bedaquiline, with clarithromycin serving only as a co-administered CYP3A inhibitor; while non-compartmental parameters (Cmax, AUC) for clarithromycin are reported, no compartmental or population PK parameters (CL, V, ka) for clarithromycin are provided. |
| PGx | Laberge_1997 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (clarithromycin affecting digoxin PK) but does not report a pharmacogenomic effect (gene variant/genotype) on clarithromycin's PK or PD parameters. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving clarithromycin but does not report pharmacogenomic effects (gene variants) on its PK/PD parameters. |
| PGx | Maev_2017 | not_relevant | 0 | 0 | The paper discusses host genetic variants (CYP2C19, MDR1) affecting the pharmacokinetics of proton pump inhibitors, not clarithromycin. |
| PGx | Makihara_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin and irinotecan) and reports clinical toxicity outcomes, but it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Marsousi_2018 | not_relevant | 0 | 0 | The paper focuses on validating PBPK models for drug-drug interactions (DDIs) involving clarithromycin as a CYP3A inhibitor, not on pharmacogenomic effects (gene variants) on clarithromycin's PK/PD. |
| popPK | Methaneethorn_2014 | irrelevant | 2 | 0 | The study focuses on a drug-drug interaction model where clarithromycin acts as an inhibitor of simvastatin, and no quantitative PK parameter values for clarithromycin are provided in the evidence. |
| PGx | Methaneethorn_2014 | not_relevant | 0 | 0 | The paper models a drug-drug interaction between simvastatin and clarithromycin, not a pharmacogenomic effect of a gene variant on clarithromycin's PK/PD. |
| PGx | Miyamoto_2016 | not_relevant | 0 | 0 | The paper analyzes H. pylori genotypes associated with clarithromycin resistance, not human pharmacogenomic variants affecting drug PK/PD. |
| PGx | Nakade_2008 | not_relevant | 0 | 0 | The study examines a drug-drug interaction (clarithromycin inhibiting CYP3A4 affecting pranlukast) in a general population, not a pharmacogenomic effect of a gene variant on clarithromycin's PK/PD. |
| PGx | Ngeyvijit_2023 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (clarithromycin inhibiting colchicine metabolism) causing toxicity, not a pharmacogenomic effect of a gene variant on clarithromycin's PK/PD. |
| PGx | Saito_2005 | not_relevant | 0 | 0 | The study investigates the effect of clarithromycin on lansoprazole pharmacokinetics, not the effect of a gene variant on clarithromycin pharmacokinetics or pharmacodynamics. |
| popPK | Sanders_2026 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Sanders_2026 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of drug-drug interactions (PK only) and does not report any pharmacodynamic or exposure-response relationships for clarithromycin. |
| popPK | Singh_2025 | irrelevant | 0 | 0 | The study is an in-vitro microbiological assay (MIC/efficacy) for Buruli ulcer treatment, not a pharmacokinetic study, and clarithromycin is used only as a comparator drug. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Srivastava_2022 | not_relevant | 1 | 0 | The paper is a general overview/review of drugs for Mycobacterium kansasii and does not report specific pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for clarithromycin. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP inhibition) affecting nateglinide metabolism, not pharmacogenomic effects on clarithromycin. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The paper is an antibiotic susceptibility surveillance study (MICs) and does not report pharmacokinetic disposition parameters for clarithromycin. |
| PD | Torumkuney_2020 | not_relevant | 1 | 0 | The paper reports antibiotic susceptibility rates using PK/PD breakpoints but does not provide a concentration-effect analysis or numeric PD parameters (e.g., Emax, EC50) for clarithromycin. |
| PGx | Tungtrongchitr_2024 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of an H. pylori eradication regimen and does not report pharmacokinetic or pharmacodynamic parameters of clarithromycin. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper reports bacterial genetic variants (erm(41), rrl) associated with drug resistance (MIC), not human pharmacogenomic variants affecting PK/PD. |
| popPK | Wei_2023 | irrelevant | 2 | 1 | Clarithromycin is a co-administered perpetrator drug in a PBPK study focused on tegoprazan, and specific quantitative PK parameters for clarithromycin are not reported in the provided text (values are in supplementary material or SimCYP library). |
| PD | Wei_2023 | not_relevant | 2 | 0 | The paper focuses on PBPK modeling of clarithromycin PK and DDI effects on tegoprazan PD (pH), but does not report a concentration-effect or dose-response model for clarithromycin itself with numeric PD parameters. |
| PGx | Wendl_2022 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving CYP3A4 inhibitors/inducers, not pharmacogenomic variants affecting clarithromycin PK/PD. |
| PGx | Williams_2002 | not_relevant | 0 | 0 | The paper compares in vitro metabolic capabilities of CYP3A isoforms but does not report in vivo pharmacokinetic or pharmacodynamic parameters of clarithromycin influenced by genetic variants. |
| PGx | Yang_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on rabeprazole PK/PD, not clarithromycin. |
| PGx | Yoneda_2009 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of pranlukast and its interaction with clarithromycin, but does not report any pharmacogenomic effects on clarithromycin's PK/PD parameters. |
| PGx | Yoon_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (DDI) between tegoprazan and clarithromycin, not a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter. |
| PGx | Zambon_2007 | not_relevant | 0 | 0 | The paper investigates host genetic polymorphisms (TNF-alpha, IL-10, etc.) and bacterial resistance in relation to H. pylori eradication success, but does not report pharmacokinetic or pharmacodynamic parameters of clarithromycin. |
| popPK | Zhanel_2016 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PGx | Zhanel_2016 | not_relevant | 0 | 0 | The paper discusses solithromycin, not clarithromycin, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of clarithromycin bioavailability in cyanobacteria, not a pharmacokinetic study, and reports no PK parameters like clearance or volume. |
| PGx | van_2019 | not_relevant | 0 | 0 | The study focuses on validating a reduced sampling interval for midazolam PK to assess CYP3A phenotype, not on the effect of a specific gene variant on clarithromycin PK/PD. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 inhibition, not pharmacogenomic effects of genetic variants on clarithromycin PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 05:24 UTC</sub>
