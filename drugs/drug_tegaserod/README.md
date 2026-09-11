# tegaserod

- **generic name:** tegaserod
- **ATC codes:** `A03AE02`, `A06AX06`
- **DrugBank:** [DB01079](https://go.drugbank.com/drugs/DB01079)
- **groups:** approved, withdrawn

## About

**Description.** Novartis' brand name Zelnorm (tegaserod) had originally received approval from the US FDA in 2002 for the treatment of irritable bowel syndrome with constipation (IBS-C).[L5918,F4229] It was, however, voluntarily withdrawn from widespread use in the US market in 2007 after concerns arose over the possibility that tegaserod could potentially cause dangerous cardiovascular events in patients.[L5918,F4229] Since then, closer evaluations of the original data suggesting such cardiovascular risk have resulted in the limited reintroduction or 're-approval' of tegaserod for treatment of IBS-C specifically in female patients less than 65 years of age and whom are considered to be at a lower risk of a cardiovascular event than the broader population.[L5918,F4229] Zelnorm (tegaserod) by Sloan Pharma subsequently gained re-approval in April of 2019.[L5918] Nevertheless, tegaserod remains un-approved in certain regions.[F4226]

Despite the relative complications involved in its history of regulatory approval, ever since its first introduction in 2002 tegaserod remains the only therapy for IBS-C that possesses the unique mechanism of action of acting on serotonin-4 (5-HT(4)) receptors in smooth muscle cells and in the gastrointestinal wall to facilitate actions like esophageal relaxation, peristaltic gut movement, and natural secretions in the gut, among others.[L5918,A11044,A176762,F4229,F4223]

**Indication.** Tegaserod is a serotonin-4 (5-HT4) receptor agonist indicated for the treatment of adult women less than 65 years of age with irritable bowel syndrome with constipation (IBS-C) [F4223, F4229]. The safety and effectiveness of tegaserod in men with IBS-C have not been established [F4223, F4229].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 00:08 | 12:39 | 0/0/0 | 1/0/0 | 0/0/0 | 99,415/4,220 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2020](drugs/drug_tegaserod/pd_Liu_2020_Apoptosis.md) | Liu W et al., Repurposing the serotonin agonist Tegas…, Journal of experimental & c… (2020) | [10.1186/s13046-020-1539-7](https://doi.org/10.1186/s13046-020-1539-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2020](drugs/drug_tegaserod/pd_Liu_2020_IC50.md) | Liu W et al., Repurposing the serotonin agonist Tegas…, Journal of experimental & c… (2020) | [10.1186/s13046-020-1539-7](https://doi.org/10.1186/s13046-020-1539-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2020](drugs/drug_tegaserod/pd_Liu_2020_Survival.md) | Liu W et al., Repurposing the serotonin agonist Tegas…, Journal of experimental & c… (2020) | [10.1186/s13046-020-1539-7](https://doi.org/10.1186/s13046-020-1539-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2020](drugs/drug_tegaserod/pd_Liu_2020_Tumor_volume.md) | Liu W et al., Repurposing the serotonin agonist Tegas…, Journal of experimental & c… (2020) | [10.1186/s13046-020-1539-7](https://doi.org/10.1186/s13046-020-1539-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2020](drugs/drug_tegaserod/pd_Liu_2020_p_S6.md) | Liu W et al., Repurposing the serotonin agonist Tegas…, Journal of experimental & c… (2020) | [10.1186/s13046-020-1539-7](https://doi.org/10.1186/s13046-020-1539-7) |

## Coverage

- **PubMed hits:** 48 matched, 48 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Appel-Dingemanse_2002.pdf` | Appel-Dingemanse S, Clinical pharmacokinetics of tegaserod,…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241130-00002](https://doi.org/10.2165/00003088-200241130-00002) | [12403641](https://pubmed.ncbi.nlm.nih.gov/12403641) | The title confirms the paper is a clinical pharmacokinetics study of tegaserod, but the provided evidence contains no numeric parameter values. |
| `Zhou_1999.pdf` | Zhou H et al., Effect of meal timing not critical for…, Journal of clinical pharmac… (1999) | popPK | 8 | [10.1177/00912709922008524](https://doi.org/10.1177/00912709922008524) | [10471981](https://pubmed.ncbi.nlm.nih.gov/10471981) | The study is a PK study of tegaserod, but the evidence text only provides qualitative descriptions and relative changes (e.g., AUC reduced by 50%) without listing specific numeric values for clearance, volume, or rate constants. |
| `Ismair_2007.pdf` | Ismair MG et al., Tegaserod inhibits the serotonin transp…, Digestion (2007) | pd | 4 | [10.1159/000102962](https://doi.org/10.1159/000102962) | [17510552](https://www.ncbi.nlm.nih.gov/pubmed/17510552) | metadata signals extractable PD data (IC50) |
| `Jarvie_2007.pdf` | Jarvie EM et al., Differences between the abilities of te…, British journal of pharmaco… (2007) | pd | 4 | [10.1038/sj.bjp.0707118](https://doi.org/10.1038/sj.bjp.0707118) | [17211452](https://www.ncbi.nlm.nih.gov/pubmed/17211452) | metadata signals extractable PD data (Emax) |
| `Tsubouchi_2018.pdf` | Tsubouchi T et al., The in vitro pharmacology and non-clini…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2018.02.037](https://doi.org/10.1016/j.ejphar.2018.02.037) | [29501863](https://www.ncbi.nlm.nih.gov/pubmed/29501863) | metadata signals extractable PD data (EC50) |
| `Zhao_2022.pdf` | Zhao G et al., Hydrogen bonding penalty used for virtu…, Chemical biology & drug des… (2022) | pd | 4 | [10.1111/cbdd.14115](https://doi.org/10.1111/cbdd.14115) | [35792890](https://www.ncbi.nlm.nih.gov/pubmed/35792890) | metadata signals extractable PD data (IC50) |
| `Vickers_2001.pdf` | Vickers AE et al., In vitro metabolism of tegaserod in hum…, Drug metabolism and disposi… (2001) | pgx | 7 | not captured | [11560869](https://www.ncbi.nlm.nih.gov/pubmed/11560869) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhou_2001.pdf` | Zhou H et al., Tegaserod coadministration does not alt…, Journal of clinical pharmac… (2001) | pgx | 7 | [10.1177/00912700122010979](https://doi.org/10.1177/00912700122010979) | [11549104](https://www.ncbi.nlm.nih.gov/pubmed/11549104) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-11T00:06:00.758091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tegaserod's effects on ion channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Appel-Dingemanse_2001 | irrelevant | 2 | 0 | The study reports non-compartmental parameters (AUC, Cmax) and ratios rather than quantitative disposition parameters (CL, V, ka) or a population-PK model, and specific numeric values for these parameters are not provided in the evidence. |
| PD | Appel-Dingemanse_2001 | not_relevant | 1 | 0 | The paper is a PK study assessing age and gender effects on exposure; it mentions a shallow dose-response relationship qualitatively but provides no numeric PD parameters or concentration-effect data. |
| popPK | Appel-Dingemanse_2002 | relevant | 10 | 0 | The title confirms the paper is a clinical pharmacokinetics study of tegaserod, but the provided evidence contains no numeric parameter values. |
| PD | Appel-Dingemanse_2002 | not_relevant | 0 | 0 | The paper focuses on the clinical pharmacokinetics of tegaserod and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| PGx | Appel-Dingemanse_2002 | not_relevant | 0 | 0 | The paper describes general clinical pharmacokinetics and pharmacodynamics of tegaserod but does not report any effects of gene variants, genotypes, or phenotypes on these parameters. |
| popPK | Beattie_2008 | irrelevant | 0 | 0 | The study is a preclinical pharmacodynamic comparison of gastrointestinal activity, not a pharmacokinetic study, and tegaserod is used only as a comparator agent. |
| PD | Beattie_2008 | not_relevant | 3 | 2 | The paper reports qualitative potency rankings and relative fold-differences for tegaserod in preclinical models but does not provide specific numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves for tegaserod. |
| popPK | Camilleri_2001 | irrelevant | 1 | 0 | The paper is a review article that provides only qualitative descriptions of pharmacokinetics (e.g., "linear," "absorbed rapidly") without reporting any quantitative numeric parameters such as clearance, volume, or half-life. |
| PD | Camilleri_2001 | not_relevant | 2 | 0 | The text is a review article that qualitatively describes pharmacodynamic effects (e.g., increased motility, reduced visceral afferent firing) but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Camilleri_2009 | not_relevant | 2 | 0 | The paper is a review that mentions a potential pharmacogenetic association between SLC6A4 and tegaserod response but provides no specific data, effect sizes, or detailed PK/PD parameters. |
| popPK | Camilleri_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacogenomics in IBS and does not report quantitative pharmacokinetic parameters for tegaserod. |
| PD | Camilleri_2019 | not_relevant | 0 | 0 | The text is a general review of pharmacogenomics in IBS and does not report any specific pharmacodynamic or exposure-response data for tegaserod. |
| PGx | Camilleri_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenomics in IBS and does not report specific data or effects for tegaserod. |
| popPK | Corsetti_2002 | irrelevant | 0 | 0 | The text is a general overview of tegaserod's mechanism and clinical efficacy without reporting any quantitative pharmacokinetic parameters. |
| PD | Corsetti_2002 | not_relevant | 1 | 0 | The text is a qualitative review summary that mentions pharmacodynamic effects (prokinetic activity) but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | De_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor agonism, not a pharmacokinetic study, and does not report any disposition parameters for tegaserod. |
| popPK | Degen_2001 | irrelevant | 1 | 0 | The study focuses exclusively on pharmacodynamic effects (gastric emptying and transit times) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Degen_2001 | not_relevant | 2 | 1 | The study reports qualitative and percentage changes in GI transit times for fixed doses but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| PGx | Duke_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (promethazine and tegaserod) affecting myopathy risk, not a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Fang_2008 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating receptor pharmacology and electrophysiology, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fisher_2004 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects on biliary tract motility and does not report any pharmacokinetic parameters for tegaserod. |
| PD | Fisher_2004 | not_relevant | 0 | 0 | The study reports a null result (no significant effect) on biliary motility using ANOVA and does not provide any numeric PD parameters, concentration-effect curves, or dose-response modeling. |
| popPK | Gurbel_2021 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of platelet function and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tegaserod. |
| PD | Gurbel_2021 | not_relevant | 2 | 0 | The study reports a null result (no significant difference) for platelet function markers and does not provide numeric PD parameters or an exposure-response curve. |
| popPK | Hamatani_2020 | irrelevant | 0 | 0 | The study evaluates the efficacy of minesapride for IBS-C and only mentions tegaserod as background context without reporting any pharmacokinetic parameters for it. |
| PD | Hamatani_2020 | not_relevant | 0 | 0 | The paper is a clinical trial for minesapride (not tegaserod) and reports no pharmacokinetic data or exposure-response modeling, only dose-response efficacy outcomes. |
| popPK | Ismair_2007 | irrelevant | 0 | 0 | The paper focuses on the mechanistic inhibition of the serotonin transporter (SERT) and does not report pharmacokinetic parameters for tegaserod. |
| PD | Ismair_2007 | not_relevant | 0 | 0 | The text is a title indicating a mechanism of action (SERT inhibition) but contains no data, numeric parameters, or exposure-response analysis. |
| popPK | Jarvie_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on gastric motility, not a pharmacokinetic study reporting quantitative disposition parameters for tegaserod. |
| popPK | Jones_2002 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for IBS and does not report quantitative pharmacokinetic parameters for tegaserod. |
| PD | Jones_2002 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively mentions a small pharmacodynamic study regarding transit times but does not provide numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Kale-Pradhan_2007 | irrelevant | 0 | 0 | The text is a clinical review summary that mentions pharmacokinetic parameters qualitatively but provides no quantitative disposition values or model parameters. |
| PD | Kale-Pradhan_2007 | not_relevant | 1 | 0 | The text is a qualitative review summary that mentions pharmacodynamic parameters exist but does not provide any numeric values, curves, or specific exposure-response relationships. |
| PGx | Larsson_2024 | not_relevant | 0 | 0 | The paper investigates drug repositioning and proteasome inhibitor properties of tegaserod, not pharmacogenomic effects on its PK/PD parameters. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on tegaserod's anti-cancer effects in melanoma and does not report any pharmacokinetic parameters. |
| popPK | Madia_2020 | irrelevant | 2 | 1 | The paper is a narrative review that discusses tegaserod's mechanism and general properties but does not report original quantitative population pharmacokinetic parameters (CL, V, Q, ka) or compartmental models. |
| PD | Madia_2020 | not_relevant | 2 | 0 | The paper is a narrative review summarizing mechanism of action and PK properties but does not report specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve. |
| popPK | Rivkin_2003 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and safety that mentions pharmacokinetic properties in the objective but provides no quantitative PK parameter values in the extracted evidence. |
| PD | Rivkin_2003 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety without reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Sanger_2008 | irrelevant | 0 | 0 | The paper is a review discussing drug development strategies for GI disorders and mentions tegaserod only as a withdrawn drug, containing no pharmacokinetic data. |
| PD | Sanger_2008 | not_relevant | 1 | 0 | The text is a review discussing the development of GI drugs and mentions tegaserod's withdrawal, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Tack_2012 | irrelevant | 0 | 0 | The paper is a systematic review of cardiovascular safety and pharmacology of 5-HT4 agonists, not a primary pharmacokinetic study reporting quantitative disposition parameters for tegaserod. |
| PD | Tack_2012 | not_relevant | 2 | 1 | The paper is a systematic review focusing on cardiovascular safety and provides only qualitative summaries or tables of PK/PD data without reporting specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for tegaserod. |
| popPK | Tsubouchi_2018 | irrelevant | 0 | 0 | The evidence indicates an in vitro pharmacology and non-clinical cardiovascular safety study, which does not report quantitative population pharmacokinetic parameters for tegaserod. |
| PD | Tsubouchi_2018 | not_relevant | 0 | 0 | The paper focuses on a different compound (DSP-6952) and does not report pharmacodynamic or exposure-response data for tegaserod. |
| popPK | Vazquez_2011 | irrelevant | 0 | 0 | The paper is a review of linaclotide, and tegaserod is only mentioned as a withdrawn comparator drug with no pharmacokinetic parameters reported. |
| PD | Vazquez_2011 | not_relevant | 0 | 0 | The text is a review of linaclotide and only mentions tegaserod in the context of market withdrawal due to side effects, without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for tegaserod. |
| popPK | Vickers_2001 | irrelevant | 0 | 0 | The paper is an in-vitro metabolism study, not a pharmacokinetic study reporting quantitative disposition parameters for tegaserod. |
| PD | Vickers_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolism and drug interaction assessment, not pharmacodynamic or exposure-response relationships. |
| PGx | Vickers_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolism and drug interactions, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Vijayvargiya_2019 | irrelevant | 0 | 0 | The paper is a review of prucalopride, and tegaserod is only mentioned as a comparator agent without any pharmacokinetic data provided. |
| PD | Vijayvargiya_2019 | not_relevant | 0 | 0 | The paper is a review of prucalopride and only mentions tegaserod as a comparator without providing any pharmacodynamic data or exposure-response parameters for it. |
| popPK | Yin_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of YKP10811 on gastric motility in dogs, using tegaserod only as a comparator agent, and does not report any pharmacokinetic parameters for tegaserod. |
| PD | Yin_2017 | not_relevant | 2 | 1 | The paper focuses on a new compound (YKP10811) and only qualitatively compares it to tegaserod without providing numeric PD parameters or a quantitative dose-response curve for tegaserod. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The paper concerns virtual screening for SARS-CoV-2 protease inhibitors and does not involve tegaserod pharmacokinetics. |
| PD | Zhao_2022 | not_relevant | 0 | 0 | The paper focuses on virtual screening for SARS-CoV-2 inhibitors and does not mention tegaserod or report any pharmacodynamic data. |
| popPK | Zhou_1999 | relevant | 8 | 2 | The study is a PK study of tegaserod, but the evidence text only provides qualitative descriptions and relative changes (e.g., AUC reduced by 50%) without listing specific numeric values for clearance, volume, or rate constants. |
| popPK | Zhou_2001 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug, with tegaserod acting only as a co-administered agent, and no quantitative PK parameters for tegaserod are reported. |
| PD | Zhou_2001 | not_relevant | 0 | 0 | The study reports a drug-drug interaction effect on digoxin PK (AUC/Cmax reduction) and states there were no pharmacodynamic changes in digoxin's effects (heart rate/QT), but it does not report a concentration-effect or dose-response relationship for tegaserod itself with numeric PD parameters. |
| PGx | Zhou_2001_2 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (tegaserod and theophylline) in healthy subjects, not a pharmacogenomic effect on tegaserod's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tegaserod`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
